import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageTemplate } from "@/app/(components)/ContentTemplates";
import {
  getGuidePage,
  guidePages,
  type GuidePageEntry,
} from "@/lib/content/guides";
import { getProofItem } from "@/lib/content/proof";
import { getServicePage } from "@/lib/content/services";
import { normalizeGuideSlug } from "@/lib/content/site-helpers";
import type { GuidePage } from "@/lib/content/types";
import { SITE_URL } from "@/lib/site";
import {
  LOCAL_BUSINESS_ID,
  ORGANIZATION_LOGO_URL,
  ORGANIZATION_NAME,
  WEBSITE_ID,
  getOpenGraphImageUrl,
  getTwitterImageUrl,
  sanitizeJsonLd,
} from "@/lib/seo";

export const ALBANIAN_GUIDE_SLUGS = guidePages
  .filter((guide) => guide.locale === "sq-AL")
  .map((guide) => guide.slug);

export const ENGLISH_GUIDE_SLUGS = guidePages
  .filter((guide) => guide.locale === "en-US")
  .map((guide) => guide.slug);

function toTemplateGuide(guide: GuidePageEntry): GuidePage {
  return {
    slug: guide.slug,
    locale: guide.locale,
    title: guide.title,
    metaTitle: guide.title,
    metaDescription: guide.description,
    excerpt: guide.excerpt,
    eyebrow: guide.eyebrow,
    date: guide.date,
    primaryKeyword: guide.primaryKeyword,
    secondaryKeywords: guide.secondaryKeywords,
    audience: guide.audience,
    city: guide.city,
    sections: guide.sections,
    faqs: guide.faq,
    primaryServiceSlug: guide.primaryService.slug,
    secondaryServiceSlug: guide.secondaryService.slug,
    proofId: guide.proofReferences[0]?.proofId ?? "tirana-apartment-rewire",
    featured: guide.featured,
  };
}

export function buildGuideMetadata(slug: string): Metadata {
  const guide = getGuidePage(slug);

  if (!guide) {
    return {};
  }

  const canonical = `${SITE_URL}/blog/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    metadataBase: new URL(SITE_URL),
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords],
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: canonical,
      locale: guide.locale.replace("-", "_"),
      images: [
        {
          url: getOpenGraphImageUrl(`/blog/${guide.slug}`),
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [getTwitterImageUrl(`/blog/${guide.slug}`)],
    },
  };
}

export function renderGuidePage(
  slug: string,
  expectedLocale?: GuidePageEntry["locale"],
) {
  const guide = getGuidePage(slug);

  if (!guide || (expectedLocale && guide.locale !== expectedLocale)) {
    notFound();
  }

  const proof =
    getProofItem(
      guide.proofReferences[0]?.proofId ?? "tirana-apartment-rewire",
      guide.locale,
    ) ?? getProofItem("tirana-apartment-rewire", guide.locale);

  if (!proof) {
    notFound();
  }

  const relatedServices = guide.relatedServices.map((service) => ({
    title: service.label,
    description:
      getServicePage(service.slug)?.metaDescription ??
      (guide.locale === "en-US"
        ? "Related service from the site service library."
        : "Sherbim i lidhur nga rrjeti yne i faqeve."),
    href: service.path,
  }));

  const relatedGuides = guide.relatedGuideSlugs
    .map((relatedSlug) => getGuidePage(normalizeGuideSlug(relatedSlug)))
    .filter((entry): entry is GuidePageEntry => Boolean(entry))
    .map((entry) => ({
      title: entry.title,
      description: entry.excerpt,
      href: `/blog/${entry.slug}`,
    }));

  const canonical = `${SITE_URL}/blog/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: guide.title,
        description: guide.description,
        url: canonical,
        datePublished: new Date(guide.date).toISOString(),
        dateModified: new Date(guide.date).toISOString(),
        inLanguage: guide.locale,
        image: getOpenGraphImageUrl(`/blog/${guide.slug}`),
        author: {
          "@type": "Organization",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: ORGANIZATION_LOGO_URL,
          },
        },
        isPartOf: {
          "@id": WEBSITE_ID,
        },
        about: guide.relatedServices.map((service) => ({
          "@type": "Service",
          name: service.label,
          provider: {
            "@id": LOCAL_BUSINESS_ID,
          },
        })),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: guide.locale === "en-US" ? "Home" : "Kreu",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guide.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id={`guide-jsonld-${guide.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(jsonLd) }}
      />
      <GuidePageTemplate
        guide={toTemplateGuide(guide)}
        proof={proof}
        leadServices={[
          {
            title: guide.primaryService.label,
            description:
              getServicePage(guide.primaryService.slug)?.metaDescription ??
              guide.description,
            href: guide.primaryService.path,
          },
          {
            title: guide.secondaryService.label,
            description:
              getServicePage(guide.secondaryService.slug)?.metaDescription ??
              guide.excerpt,
            href: guide.secondaryService.path,
          },
        ]}
        breadcrumbs={[
          {
            label: guide.locale === "en-US" ? "Home" : "Kreu",
            href: "/",
          },
          { label: "Blog", href: "/blog" },
          { label: guide.title },
        ]}
        relatedServices={relatedServices}
        relatedGuides={relatedGuides}
      />
    </>
  );
}
