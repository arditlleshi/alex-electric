import { after } from "next/server";
import { track } from "@vercel/analytics/server";
import type { ContactChannel, ContactSource } from "@/lib/contact";

const NO_STORE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
};

const VALID_CHANNELS = new Set<ContactChannel>(["phone", "email", "whatsapp"]);
const VALID_SOURCES = new Set<ContactSource>([
  "contact-section",
  "footer",
  "faq-section",
  "english-page",
]);
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

type ContactClickRequest = {
  channel?: string;
  source?: string;
  path?: string;
};

function isValidChannel(channel: string | undefined): channel is ContactChannel {
  return (
    typeof channel === "string" && VALID_CHANNELS.has(channel as ContactChannel)
  );
}

function isValidSource(source: string | undefined): source is ContactSource {
  return typeof source === "string" && VALID_SOURCES.has(source as ContactSource);
}

function normalizePath(path: string | undefined) {
  if (typeof path !== "string" || !path.startsWith("/")) {
    return "/";
  }

  return path.slice(0, 200);
}

function formatTiranaTimestamp(date: Date) {
  const parts = Object.fromEntries(
    TIRANA_TIMESTAMP_FORMATTER.formatToParts(date)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second} ${parts.timeZoneName}`;
}

export async function POST(request: Request) {
  let body: ContactClickRequest;

  try {
    body = (await request.json()) as ContactClickRequest;
  } catch {
    return new Response(null, {
      status: 400,
      headers: NO_STORE_HEADERS,
    });
  }

  const { channel, source } = body;

  if (!isValidChannel(channel) || !isValidSource(source)) {
    return Response.json(
      {
        error: "Invalid contact click payload.",
      },
      {
        status: 400,
        headers: NO_STORE_HEADERS,
      },
    );
  }

  const path = normalizePath(body.path);

  after(async () => {
    const now = new Date();

    try {
      await track("contact_click", {
        channel,
        source,
        path,
        clickedAtUtc: now.toISOString(),
        clickedAtTirana: formatTiranaTimestamp(now),
        timeZone: TIRANA_TIMEZONE,
      });
    } catch (error) {
      console.error("Failed to track contact click", error);
    }
  });

  return new Response(null, {
    status: 204,
    headers: NO_STORE_HEADERS,
  });
}
