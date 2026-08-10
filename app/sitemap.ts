import type { MetadataRoute } from "next";
import { allServicePages } from "@/lib/content/services";
import { guidePages } from "@/lib/content/guides";
import { getServiceHref } from "@/lib/content/site-helpers";
import { SITE_URL } from "@/lib/site";

const CONTENT_LAST_MODIFIED = "2026-08-10";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPages: MetadataRoute.Sitemap = [
    "",
    "/sherbime",
    "/blog",
    "/en",
    "/en/services",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: CONTENT_LAST_MODIFIED,
  }));

  const servicePages: MetadataRoute.Sitemap = allServicePages
    .map(getServiceHref)
    .filter((path) => path !== "/" && path !== "/en")
    .map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: CONTENT_LAST_MODIFIED,
    }));

  const guidePagesInSitemap: MetadataRoute.Sitemap = guidePages.map((guide) => ({
    url: `${SITE_URL}/blog/${guide.slug}`,
    lastModified: guide.updatedAt ?? guide.date,
  }));

  return [...fixedPages, ...servicePages, ...guidePagesInSitemap];
}
