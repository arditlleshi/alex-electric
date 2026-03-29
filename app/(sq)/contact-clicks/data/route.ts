import { cookies } from "next/headers";
import { getContactClickLog, isContactClickBlobConfigured } from "@/lib/contact-click-store";
import {
  CONTACT_CLICK_VIEWER_COOKIE_NAME,
  isAuthorizedViewerSession,
  isContactClickViewerConfigured,
} from "@/lib/contact-click-viewer";

const NO_STORE_HEADERS = {
  "Cache-Control": "private, no-store, no-cache, must-revalidate",
};

export async function GET() {
  const cookieStore = await cookies();
  const isAuthorized = isAuthorizedViewerSession(
    cookieStore.get(CONTACT_CLICK_VIEWER_COOKIE_NAME)?.value,
  );

  if (!isAuthorized) {
    return Response.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
        headers: NO_STORE_HEADERS,
      },
    );
  }

  if (!isContactClickBlobConfigured() || !isContactClickViewerConfigured()) {
    return Response.json(
      {
        error: "Missing BLOB_READ_WRITE_TOKEN or CONTACT_CLICK_VIEWER_SECRET.",
      },
      {
        status: 500,
        headers: NO_STORE_HEADERS,
      },
    );
  }

  const log = await getContactClickLog();

  return Response.json(log, {
    headers: NO_STORE_HEADERS,
  });
}
