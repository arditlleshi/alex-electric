import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  shouldRedirectToSiteHostname,
  SITE_HOSTNAME,
  SITE_ORIGIN,
} from "@/lib/site";

function normalizeHostname(hostname: string) {
  return hostname.toLowerCase().replace(/\.$/, "");
}

export function proxy(request: NextRequest) {
  const requestHostname = normalizeHostname(
    request.headers.get("x-forwarded-host")?.split(":")[0] ??
      request.nextUrl.hostname,
  );

  if (!shouldRedirectToSiteHostname(requestHostname)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  const destinationUrl = new URL(SITE_ORIGIN);

  redirectUrl.protocol = destinationUrl.protocol;
  redirectUrl.hostname = SITE_HOSTNAME;
  redirectUrl.port = destinationUrl.port;

  return NextResponse.redirect(redirectUrl, 308);
}
