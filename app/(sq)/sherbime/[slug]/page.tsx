import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/(components)/ContentTemplates";
import {
  albanianServicePageSlugs,
  getAlbanianServicePage,
} from "@/lib/content/albanian-services";
import {
  buildServiceMetadata,
  getEnglishAlternateService,
  resolveRelatedGuides,
  resolveRelatedServices,
  toProofItem,
} from "@/lib/content/site-helpers";
import { SITE_URL } from "@/lib/site";
import {
  LOCAL_BUSINESS_ID,
  WEBSITE_ID,
  sanitizeJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return albanianServicePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getAlbanianServicePage(slug);

  if (!service) {
    return {};
  }

  const canonical = `${SITE_URL}/sherbime/${service.slug}`;
  const englishEquivalent = getEnglishAlternateService(service.slug);

  return buildServiceMetadata(service, {
    canonical,
    alternates: englishEquivalent
      ? {
          "sq-AL": canonical,
          "en-US": `${SITE_URL}${englishEquivalent.path}`,
        }
      : undefined,
  });
}

export default async function AlbanianServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getAlbanianServicePage(slug);

  if (!service) {
    notFound();
  }

  const canonical = `${SITE_URL}/sherbime/${service.slug}`;
  const proof = toProofItem(service.proof);
  const relatedServices = resolveRelatedServices(service.relatedServiceSlugs);
  const relatedGuides = resolveRelatedGuides(service.relatedGuideSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        url: canonical,
        areaServed: service.serviceAreas,
        availableLanguage: ["Albanian", "English"],
        isPartOf: {
          "@id": WEBSITE_ID,
        },
        provider: {
          "@id": LOCAL_BUSINESS_ID,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: service.faqs.map((item) => ({
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
            name: "Kreu",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sherbime",
            item: `${SITE_URL}/sherbime`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id={`service-jsonld-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(jsonLd) }}
      />
      <ServicePageTemplate
        service={service}
        proof={proof}
        breadcrumbs={[
          { label: "Kreu", href: "/" },
          { label: "Sherbime", href: "/sherbime" },
          { label: service.title },
        ]}
        relatedServices={relatedServices}
        relatedGuides={relatedGuides}
      />
    </>
  );
}
