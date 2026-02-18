const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://alex-electric.com";

export const SITE_URL = rawSiteUrl.endsWith("/")
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl;
