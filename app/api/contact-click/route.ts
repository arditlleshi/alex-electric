import { after } from "next/server";
import { recordContactClick } from "@/lib/contact-click-store";
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
    try {
      await recordContactClick({
        channel,
        source,
        path,
      });
    } catch (error) {
      console.error("Failed to persist contact click", error);
    }
  });

  return new Response(null, {
    status: 204,
    headers: NO_STORE_HEADERS,
  });
}
