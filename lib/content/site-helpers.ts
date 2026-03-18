import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import {
  getAlbanianServicePage,
  type AlbanianServicePageEntry,
} from "./albanian-services";
import {
  getEnglishServicePage,
  type EnglishServicePageEntry,
} from "./english-services";
import { getGuidePage } from "./guides";
import { getServicePage, type SiteServicePage } from "./services";
import type { ProofItem } from "./types";

export type LinkCard = {
  title: string;
  description: string;
  href: string;
};

export function getServiceHref(service: SiteServicePage) {
  if ("path" in service) {
    return service.path;
  }

  return `/sherbime/${service.slug}`;
}

export function normalizeGuideSlug(input: string) {
  return input.replace(/^\/blog\//, "");
}

export function getGuideHref(slugOrPath: string) {
  return `/blog/${normalizeGuideSlug(slugOrPath)}`;
}

export function resolveRelatedGuides(guideSlugs: readonly string[]): LinkCard[] {
  return guideSlugs
    .map((slugOrPath) => getGuidePage(normalizeGuideSlug(slugOrPath)))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide))
    .map((guide) => ({
      title: guide.title,
      description: guide.excerpt,
      href: `/blog/${guide.slug}`,
    }));
}

export function resolveRelatedServices(
  serviceSlugs: readonly string[],
): LinkCard[] {
  return serviceSlugs
    .map((slug) => getServicePage(slug))
    .filter((service): service is SiteServicePage => Boolean(service))
    .map((service) => ({
      title: service.title,
      description: service.metaDescription,
      href: getServiceHref(service),
    }));
}

const ALBANIAN_TO_ENGLISH_ALTERNATES: Record<string, string> = {
  "elektricist-tirane": "electrician-tirana",
  "elektricist-durres": "electrician-durres",
  "elektricist-urgjent-tirane": "emergency-electrician-tirana",
  "karikues-ev-tirane": "ev-charger-installation-tirana",
  "panele-diellore-tirane": "solar-panel-installation-tirana",
};

const ENGLISH_TO_ALBANIAN_ALTERNATES = Object.fromEntries(
  Object.entries(ALBANIAN_TO_ENGLISH_ALTERNATES).map(
    ([albanianSlug, englishSlug]) => [englishSlug, albanianSlug],
  ),
) as Record<string, string>;

export function getEnglishAlternateService(albanianSlug: string) {
  const englishSlug = ALBANIAN_TO_ENGLISH_ALTERNATES[albanianSlug];
  return englishSlug ? getEnglishServicePage(englishSlug) : undefined;
}

export function getAlbanianAlternateService(englishSlug: string) {
  const albanianSlug = ENGLISH_TO_ALBANIAN_ALTERNATES[englishSlug];
  return albanianSlug ? getAlbanianServicePage(albanianSlug) : undefined;
}

export function toProofItem(
  proof: AlbanianServicePageEntry["proof"] | EnglishServicePageEntry["proof"],
  eyebrow = "Shembull pune",
): ProofItem {
  const normalizedId = `${proof.city}-${proof.title}`
    .toLowerCase()
    .replace(/\s+/g, "-");

  return {
    id: `proof-${normalizedId}`,
    eyebrow,
    title: proof.title,
    city: proof.city,
    propertyType: proof.propertyType,
    summary: `${proof.problem} ${proof.fix}`,
    bullets: [proof.problem, proof.fix, proof.turnaround],
    outcome: proof.outcome,
  };
}

export function buildServiceMetadata(
  service: SiteServicePage,
  options?: {
    canonical?: string;
    alternates?: Record<string, string>;
  },
): Metadata {
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: {
      canonical: options?.canonical,
      languages: options?.alternates,
    },
    openGraph: {
      type: "website",
      title: service.metaTitle,
      description: service.metaDescription,
      url: options?.canonical,
      locale: service.locale.replace("-", "_"),
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}/twitter-image`],
    },
  };
}
