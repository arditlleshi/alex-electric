import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/app/(components)/ContentTemplates";
import {
  englishServicePageSlugs,
  getEnglishServicePage,
} from "@/lib/content/english-services";
import {
  buildServiceMetadata,
  getAlbanianAlternateService,
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
  return englishServicePageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getEnglishServicePage(slug);

  if (!service) {
    return {};
  }

  const canonical = `${SITE_URL}${service.path}`;
  const albanianEquivalent = getAlbanianAlternateService(service.slug);

  return buildServiceMetadata(service, {
    canonical,
    alternates: albanianEquivalent
      ? {
          "en-US": canonical,
          "sq-AL": `${SITE_URL}/sherbime/${albanianEquivalent.slug}`,
        }
      : undefined,
  });
}

export default async function EnglishServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getEnglishServicePage(slug);

  if (!service) {
    notFound();
  }

  const canonical = `${SITE_URL}${service.path}`;
  const proof = toProofItem(service.proof, "Project snapshot");
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
        isPartOf: {
          "@id": WEBSITE_ID,
        },
        provider: {
          "@id": LOCAL_BUSINESS_ID,
        },
        availableLanguage: ["English", "Albanian"],
        areaServed: service.serviceAreas,
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
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "English",
            item: `${SITE_URL}/en`,
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
        id={`english-service-jsonld-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(jsonLd) }}
      />
      <ServicePageTemplate
        service={service}
        proof={proof}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "English", href: "/en" },
          { label: "Services", href: "/en/services" },
          { label: service.title },
        ]}
        relatedServices={relatedServices}
        relatedGuides={relatedGuides}
      />
    </>
  );
}
