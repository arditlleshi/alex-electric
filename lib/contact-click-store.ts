import {
  BlobPreconditionFailedError,
  get,
  put,
  type GetBlobResult,
} from "@vercel/blob";
import type { ContactChannel, ContactSource } from "@/lib/contact";

const CONTACT_CLICK_BLOB_PATHNAME = "private/contact-clicks.json";
const MAX_RECENT_CLICKS = 100;
const MAX_WRITE_ATTEMPTS = 3;
const TIRANA_TIMEZONE = "Europe/Tirane";

const TIRANA_TIMESTAMP_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIRANA_TIMEZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZoneName: "short",
});

type ChannelTotals = Record<ContactChannel, number>;

type ContactSourceStats = {
  total: number;
  byChannel: ChannelTotals;
  lastClickedAtUtc: string | null;
  lastClickedAtTirana: string | null;
  lastPath: string | null;
};

export type ContactClickEntry = {
  channel: ContactChannel;
  source: ContactSource;
  path: string;
  clickedAtUtc: string;
  clickedAtTirana: string;
};

export type ContactClickLog = {
  updatedAtUtc: string | null;
  updatedAtTirana: string | null;
  totals: ChannelTotals;
  sources: Partial<Record<ContactSource, ContactSourceStats>>;
  recent: ContactClickEntry[];
};

type ContactClickBlob = {
  etag: string | null;
  log: ContactClickLog;
};

const createEmptyTotals = (): ChannelTotals => ({
  phone: 0,
  email: 0,
  whatsapp: 0,
});

const createEmptySourceStats = (): ContactSourceStats => ({
  total: 0,
  byChannel: createEmptyTotals(),
  lastClickedAtUtc: null,
  lastClickedAtTirana: null,
  lastPath: null,
});

const createEmptyLog = (): ContactClickLog => ({
  updatedAtUtc: null,
  updatedAtTirana: null,
  totals: createEmptyTotals(),
  sources: {},
  recent: [],
});

function normalizeTotals(
  totals?: Partial<Record<ContactChannel, number>>,
): ChannelTotals {
  return {
    phone: totals?.phone ?? 0,
    email: totals?.email ?? 0,
    whatsapp: totals?.whatsapp ?? 0,
  };
}

function normalizeLog(raw: Partial<ContactClickLog>): ContactClickLog {
  const sources = raw.sources ?? {};

  return {
    updatedAtUtc: raw.updatedAtUtc ?? null,
    updatedAtTirana: raw.updatedAtTirana ?? null,
    totals: normalizeTotals(raw.totals),
    sources: Object.fromEntries(
      Object.entries(sources).map(([source, stats]) => [
        source,
        {
          total: stats?.total ?? 0,
          byChannel: normalizeTotals(stats?.byChannel),
          lastClickedAtUtc: stats?.lastClickedAtUtc ?? null,
          lastClickedAtTirana: stats?.lastClickedAtTirana ?? null,
          lastPath: stats?.lastPath ?? null,
        },
      ]),
    ) as Partial<Record<ContactSource, ContactSourceStats>>,
    recent: Array.isArray(raw.recent)
      ? raw.recent.slice(0, MAX_RECENT_CLICKS)
      : [],
  };
}

function formatTiranaTimestamp(date: Date) {
  const parts = Object.fromEntries(
    TIRANA_TIMESTAMP_FORMATTER.formatToParts(date)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second} ${parts.timeZoneName}`;
}

function isBlobConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readBlobResult(result: GetBlobResult | null): Promise<ContactClickBlob> {
  if (!result || result.statusCode !== 200 || !result.stream) {
    return {
      etag: null,
      log: createEmptyLog(),
    };
  }

  const text = await new Response(result.stream).text();

  if (!text.trim()) {
    return {
      etag: result.blob.etag,
      log: createEmptyLog(),
    };
  }

  return {
    etag: result.blob.etag,
    log: normalizeLog(JSON.parse(text) as Partial<ContactClickLog>),
  };
}

async function getContactClickBlob(): Promise<ContactClickBlob> {
  if (!isBlobConfigured()) {
    return {
      etag: null,
      log: createEmptyLog(),
    };
  }

  const result = await get(CONTACT_CLICK_BLOB_PATHNAME, {
    access: "private",
    useCache: false,
  });

  return readBlobResult(result);
}

async function writeContactClickLog(log: ContactClickLog, etag: string | null) {
  await put(CONTACT_CLICK_BLOB_PATHNAME, JSON.stringify(log, null, 2), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
    ifMatch: etag ?? undefined,
  });
}

export async function getContactClickLog() {
  const { log } = await getContactClickBlob();
  return log;
}

export async function recordContactClick({
  channel,
  source,
  path,
}: {
  channel: ContactChannel;
  source: ContactSource;
  path: string;
}) {
  if (!isBlobConfigured()) {
    return;
  }

  for (let attempt = 0; attempt < MAX_WRITE_ATTEMPTS; attempt += 1) {
    const { etag, log } = await getContactClickBlob();
    const now = new Date();
    const clickedAtUtc = now.toISOString();
    const clickedAtTirana = formatTiranaTimestamp(now);
    const sourceStats = log.sources[source] ?? createEmptySourceStats();

    log.updatedAtUtc = clickedAtUtc;
    log.updatedAtTirana = clickedAtTirana;
    log.totals[channel] += 1;

    sourceStats.total += 1;
    sourceStats.byChannel[channel] += 1;
    sourceStats.lastClickedAtUtc = clickedAtUtc;
    sourceStats.lastClickedAtTirana = clickedAtTirana;
    sourceStats.lastPath = path;
    log.sources[source] = sourceStats;

    log.recent = [
      {
        channel,
        source,
        path,
        clickedAtUtc,
        clickedAtTirana,
      },
      ...log.recent,
    ].slice(0, MAX_RECENT_CLICKS);

    try {
      await writeContactClickLog(log, etag);
      return;
    } catch (error) {
      if (
        error instanceof BlobPreconditionFailedError &&
        attempt + 1 < MAX_WRITE_ATTEMPTS
      ) {
        continue;
      }

      throw error;
    }
  }
}

export {
  CONTACT_CLICK_BLOB_PATHNAME,
  TIRANA_TIMEZONE,
  formatTiranaTimestamp,
  isBlobConfigured as isContactClickBlobConfigured,
};
