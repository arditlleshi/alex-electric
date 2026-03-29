import { SITE_URL } from "./site";

export type HtmlLocale = "sq" | "en";

export const ORGANIZATION_NAME = "Alex Elektrik";
export const ORGANIZATION_LOGO_URL = `${SITE_URL}/logo.png`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function sanitizeJsonLd(jsonLd: unknown) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}

export function stripHtmlTags(value: string) {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function getOpenGraphImageUrl(pathname = "/") {
  return pathname === "/"
    ? `${SITE_URL}/opengraph-image`
    : `${SITE_URL}${pathname}/opengraph-image`;
}

export function getTwitterImageUrl(pathname = "/") {
  return pathname === "/"
    ? `${SITE_URL}/twitter-image`
    : `${SITE_URL}${pathname}/twitter-image`;
}
