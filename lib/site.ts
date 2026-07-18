const DEFAULT_SITE_URL = "https://alexelektrik.al";
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

export const SITE_URL = rawSiteUrl.endsWith("/")
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl;

const siteUrl = new URL(SITE_URL);

export const SITE_ORIGIN = siteUrl.origin;
export const SITE_HOSTNAME = siteUrl.hostname;

/** Same-brand hostnames that should 308 to the canonical apex host. */
export const REDIRECT_TO_SITE_HOSTNAMES = ["www.alexelektrik.al"] as const;

const redirectToSiteHostnameSet = new Set<string>(REDIRECT_TO_SITE_HOSTNAMES);

export function shouldRedirectToSiteHostname(hostname: string) {
  return redirectToSiteHostnameSet.has(hostname);
}
