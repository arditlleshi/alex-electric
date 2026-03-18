import type { Metadata } from "next";
import { ServiceHubTemplate } from "../../(components)/ContentTemplates";
import { englishServicePages } from "@/lib/content/english-services";
import { SITE_URL } from "@/lib/site";

const EN_SERVICES_URL = `${SITE_URL}/en/services`;

export const metadata: Metadata = {
  title: "English electrical services in Tirana and Durres | Alex Elektrik",
  description:
    "English-language service pages for Tirana and Durres, including emergency help, expat support, Airbnb maintenance, landlord work, EV chargers, and solar planning.",
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
      "Hub page for English-speaking visitors who need the right service or audience page quickly.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
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
    description: service.metaDescription,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHubTemplate
        locale="en-US"
        title="English electrical services for Tirana and Durres"
        description="Explore the English-language pages for emergency repairs, expat support, landlord and Airbnb work, EV chargers, solar projects, and coastal-property maintenance."
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
