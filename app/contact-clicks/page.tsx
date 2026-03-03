import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { cookies } from "next/headers";
import {
  getContactClickLog,
  isContactClickBlobConfigured,
} from "@/lib/contact-click-store";
import {
  CONTACT_CLICK_VIEWER_COOKIE_NAME,
  isAuthorizedViewerSession,
  isContactClickViewerConfigured,
} from "@/lib/contact-click-viewer";
import { lockContactClicks, unlockContactClicks } from "./actions";

export const metadata: Metadata = {
  title: "Contact Click Log",
  robots: {
    index: false,
    follow: false,
  },
};

type ContactClicksPageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

const CHANNEL_LABELS = {
  phone: "Phone",
  email: "Email",
  whatsapp: "WhatsApp",
} as const;

const CHANNEL_STYLES = {
  phone: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  email: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  whatsapp: "border-teal-400/20 bg-teal-400/10 text-teal-200",
} as const;

const SOURCE_LABELS = {
  "contact-section": "Contact Section",
  footer: "Footer",
  "faq-section": "FAQ Section",
  "english-page": "English Page",
} as const;

const SOURCE_ORDER = [
  "contact-section",
  "footer",
  "faq-section",
  "english-page",
] as const;

function formatSourceLabel(source: string) {
  if (source in SOURCE_LABELS) {
    return SOURCE_LABELS[source as keyof typeof SOURCE_LABELS];
  }

  return source
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatDisplayTime(
  tiranaTime: string | null | undefined,
  utcTime?: string | null,
) {
  if (tiranaTime) {
    const match = tiranaTime.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
    if (match) {
      const [, year, month, day, hour, minute, second] = match;
      return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
    }
    return tiranaTime;
  }

  if (!utcTime) {
    return "No clicks yet";
  }

  const fallbackDate = new Date(utcTime);

  if (Number.isNaN(fallbackDate.getTime())) {
    return "No clicks yet";
  }

  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Tirane",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = Object.fromEntries(
    formatter
      .formatToParts(fallbackDate)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  return `${parts.day}/${parts.month}/${parts.year} ${parts.hour}:${parts.minute}:${parts.second}`;
}

function MetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint: string;
}) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_70px_rgba(15,23,42,0.35)]">
      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </div>
  );
}

function ChannelBadge({
  channel,
}: {
  channel: keyof typeof CHANNEL_LABELS;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${CHANNEL_STYLES[channel]}`}>
      {CHANNEL_LABELS[channel]}
    </span>
  );
}

function EmptyTableState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[24px] border border-dashed border-white/10 bg-slate-950/40 px-6 py-10 text-center">
      <p className="text-base font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
}

function ContactClicksFallback() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
      <p className="text-sm uppercase tracking-[0.24em] text-blue-300">
        Private Route
      </p>
      <h1 className="mt-3 text-3xl font-bold">Contact Click Log</h1>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Po ngarkohet log-u i klikimeve...
      </p>
    </div>
  );
}

function StatusMessage({ status }: { status?: string }) {
  if (status === "invalid") {
    return (
      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        Secreti nuk ishte i sakte.
      </p>
    );
  }

  if (status === "not-configured") {
    return (
      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        Duhet te shtosh `CONTACT_CLICK_VIEWER_SECRET` ne Vercel para se ta hapesh kete faqe.
      </p>
    );
  }

  return null;
}

async function ContactClicksContent({
  searchParams,
}: ContactClicksPageProps) {
  const cookieStore = await cookies();
  const { status } = await searchParams;
  const isAuthorized = isAuthorizedViewerSession(
    cookieStore.get(CONTACT_CLICK_VIEWER_COOKIE_NAME)?.value,
  );

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-28 text-slate-100">
        <section className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.24em] text-blue-300">
            Private Route
          </p>
          <h1 className="mt-3 text-3xl font-bold">Contact Click Log</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Vendos secretin per te pare JSON log-un e klikimeve te phone, email dhe WhatsApp.
          </p>
          <div className="mt-6">
            <StatusMessage status={status} />
          </div>
          <form action={unlockContactClicks} className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-200" htmlFor="secret">
              Viewer secret
            </label>
            <input
              id="secret"
              name="secret"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-blue-400"
              placeholder="CONTACT_CLICK_VIEWER_SECRET"
            />
            <button
              type="submit"
              className="inline-flex items-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
              Open Log
            </button>
          </form>
        </section>
      </main>
    );
  }

  const [log, isBlobConfigured, isViewerConfigured] = await Promise.all([
    getContactClickLog(),
    Promise.resolve(isContactClickBlobConfigured()),
    Promise.resolve(isContactClickViewerConfigured()),
  ]);
  const totalClicks = log.totals.phone + log.totals.email + log.totals.whatsapp;
  const sourceRows = SOURCE_ORDER.map((source) => {
    const stats = log.sources[source];

    return {
      source,
      label: formatSourceLabel(source),
      total: stats?.total ?? 0,
      phone: stats?.byChannel.phone ?? 0,
      email: stats?.byChannel.email ?? 0,
      whatsapp: stats?.byChannel.whatsapp ?? 0,
      lastClickedAt: formatDisplayTime(
        stats?.lastClickedAtTirana,
        stats?.lastClickedAtUtc,
      ),
      lastPath: stats?.lastPath ?? "No clicks yet",
    };
  });
  const lastUpdated = formatDisplayTime(log.updatedAtTirana, log.updatedAtUtc);

  return (
    <section className="mx-auto max-w-6xl space-y-6">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.45)] backdrop-blur md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.18),_transparent_32%)]" />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-blue-300">
              Private Route
            </p>
            <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Contact Click Log
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Clear server-rendered reporting for phone, email, and WhatsApp clicks.
              All visible timestamps below use Europe/Tirane.
            </p>
            <div className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
              Last updated: {lastUpdated}
            </div>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Link
              href="/contact-clicks/data"
              className="inline-flex items-center rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400 hover:text-blue-300">
              Open Raw JSON
            </Link>
            <form action={lockContactClicks}>
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">
                Lock
              </button>
            </form>
          </div>
        </div>
      </div>

      {(!isBlobConfigured || !isViewerConfigured) && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Konfigurimi mungon.
          {!isBlobConfigured && " Shto `BLOB_READ_WRITE_TOKEN` ne Vercel."}
          {!isViewerConfigured &&
            " Shto `CONTACT_CLICK_VIEWER_SECRET` ne Vercel."}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Total Clicks"
          value={totalClicks}
          hint="All tracked contact interactions"
        />
        <MetricCard
          label="Phone"
          value={log.totals.phone}
          hint="Calls and tap-to-call clicks"
        />
        <MetricCard
          label="Email"
          value={log.totals.email}
          hint="Mailto link clicks"
        />
        <MetricCard
          label="WhatsApp"
          value={log.totals.whatsapp}
          hint="WhatsApp chat openings"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(15,23,42,0.35)]">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <h2 className="text-xl font-semibold text-white">Recent Clicks</h2>
              <p className="mt-1 text-sm text-slate-400">
                Latest activity, newest first. Only Tirana time is shown.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
              {log.recent.length} items
            </div>
          </div>

          {log.recent.length === 0 ? (
            <div className="p-6">
              <EmptyTableState
                title="No clicks yet"
                description="Once someone taps phone, email, or WhatsApp, the rows will appear here."
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm text-slate-200">
                <thead className="bg-white/[0.03] text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  <tr>
                    <th className="px-6 py-4 font-medium">Albania Time</th>
                    <th className="px-6 py-4 font-medium">Channel</th>
                    <th className="px-6 py-4 font-medium">Source</th>
                    <th className="px-6 py-4 font-medium">Path</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {log.recent.map((entry, index) => (
                    <tr
                      key={`${entry.channel}-${entry.source}-${entry.path}-${entry.clickedAtUtc}-${index}`}
                      className="transition hover:bg-white/[0.03]">
                      <td className="px-6 py-4 whitespace-nowrap text-slate-100">
                        {formatDisplayTime(entry.clickedAtTirana, entry.clickedAtUtc)}
                      </td>
                      <td className="px-6 py-4">
                        <ChannelBadge channel={entry.channel} />
                      </td>
                      <td className="px-6 py-4 text-slate-300">
                        {formatSourceLabel(entry.source)}
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-slate-400">
                        {entry.path}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_30px_100px_rgba(15,23,42,0.35)]">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-xl font-semibold text-white">Source Summary</h2>
            <p className="mt-1 text-sm text-slate-400">
              Totals per placement across the site.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="bg-white/[0.03] text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-medium">Source</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                  <th className="px-6 py-4 font-medium">Phone</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">WhatsApp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {sourceRows.map((row) => (
                  <tr key={row.source} className="transition hover:bg-white/[0.03]">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{row.label}</div>
                      <div className="mt-1 text-xs text-slate-400">
                        Last click: {row.lastClickedAt}
                      </div>
                      <div className="mt-1 font-mono text-[11px] text-slate-500">
                        {row.lastPath}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-base font-semibold text-white">
                      {row.total}
                    </td>
                    <td className="px-6 py-4 text-slate-300">{row.phone}</td>
                    <td className="px-6 py-4 text-slate-300">{row.email}</td>
                    <td className="px-6 py-4 text-slate-300">{row.whatsapp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactClicksPage({
  searchParams,
}: ContactClicksPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-slate-100">
      <Suspense fallback={<ContactClicksFallback />}>
        <ContactClicksContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
