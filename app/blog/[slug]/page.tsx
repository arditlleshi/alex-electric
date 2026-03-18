import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePageTemplate } from "../../(components)/ContentTemplates";
import {
  getGuidePage,
  guidePageSlugs,
  type GuidePageEntry,
} from "@/lib/content/guides";
import { getProofItem } from "@/lib/content/proof";
import { getServicePage } from "@/lib/content/services";
import { normalizeGuideSlug } from "@/lib/content/site-helpers";
import { SITE_URL } from "@/lib/site";
import type { GuidePage } from "@/lib/content/types";

export function generateStaticParams() {
  return guidePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuidePage(slug);

  if (!guide) {
    return {};
  }

  const canonical = `${SITE_URL}/blog/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
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
          url: `${SITE_URL}/opengraph-image`,
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
      images: [`${SITE_URL}/twitter-image`],
    },
  };
}

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

export default async function GuidePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuidePage(slug);

  if (!guide) {
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
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonical,
        },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuidePageTemplate
        guide={toTemplateGuide(guide)}
        proof={proof}
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
