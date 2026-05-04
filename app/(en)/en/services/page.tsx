import type { Metadata } from "next";
import { ServiceHubTemplate } from "@/app/(components)/ContentTemplates";
import { englishServicePages } from "@/lib/content/english-services";
import { SITE_URL } from "@/lib/site";
import { getOpenGraphImageUrl, sanitizeJsonLd } from "@/lib/seo";

const EN_SERVICES_URL = `${SITE_URL}/en/services`;

export const metadata: Metadata = {
  title: "English electrical services in Tirana and Durres | Alex Elektrik",
  description:
    "English electrical services in Tirana and Durres for emergencies, rentals, expat support, EV chargers, solar planning, and business properties.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: EN_SERVICES_URL,
    languages: {
      "en-US": EN_SERVICES_URL,
      "sq-AL": `${SITE_URL}/sherbime`,
    },
  },
  openGraph: {
    type: "website",
    url: EN_SERVICES_URL,
    locale: "en_US",
    title: "English electrical services in Tirana and Durres | Alex Elektrik",
    description:
      "English service overview with direct routes for emergency work, rentals, expat support, EV chargers, solar planning, and business properties.",
    images: [
      {
        url: getOpenGraphImageUrl("/en/services"),
        width: 1200,
        height: 630,
        alt: "English electrical services - Alex Elektrik",
      },
    ],
  },
};

export default function EnglishServicesHubPage() {
  const cards = englishServicePages.map((service) => ({
    title: service.title,
    description: service.summary,
    href: service.path,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${EN_SERVICES_URL}#collection`,
        url: EN_SERVICES_URL,
        name: "English electrical services in Tirana and Durres",
        description:
          "English hub that links visitors to service pages, audience pages, and location pages.",
      },
      {
        "@type": "ItemList",
        "@id": `${EN_SERVICES_URL}#itemlist`,
        itemListElement: englishServicePages.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          item: `${SITE_URL}${service.path}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${EN_SERVICES_URL}#breadcrumb`,
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
            name: "Services",
            item: EN_SERVICES_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id="english-services-hub-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(jsonLd) }}
      />
      <ServiceHubTemplate
        locale="en-US"
        title="English electrical services for Tirana and Durres"
        description="Find the right English-language page for emergency electrical work, repairs, rentals, expat support, EV chargers, solar projects, and business properties in Tirana and Durres."
        introParagraphs={[
          "Start with the page that matches the real situation. Some visitors need urgent help for a fault, others need support for a rental, a landlord handover, an EV charger, a solar plan, or a wider electrical upgrade.",
          "If you are booking from abroad, moving into a new property, preparing a rental, or comparing options before a visit, these pages make the first conversation clearer and more practical.",
        ]}
        highlights={[
          "Direct routes to emergency, rental, expat, EV, solar, and business pages.",
          "Useful for property owners in Tirana, Durres, and nearby coastal areas.",
          "Written to help English-speaking visitors reach the right page before they call.",
        ]}
        cards={cards}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "English", href: "/en" },
          { label: "Services" },
        ]}
      />
    </>
  );
}
