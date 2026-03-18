import { SITE_URL } from "@/lib/site";
import type { GuidePage, PageLocale, ServicePage } from "./types";

export function getServicePath(service: Pick<ServicePage, "locale" | "slug">) {
  return service.locale === "en-US"
    ? `/en/services/${service.slug}`
    : `/sherbime/${service.slug}`;
}

export function getGuidePath(guide: Pick<GuidePage, "slug">) {
  return `/blog/${guide.slug}`;
}

export function getHubPath(locale: PageLocale) {
  return locale === "en-US" ? "/en" : "/sherbime";
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}
