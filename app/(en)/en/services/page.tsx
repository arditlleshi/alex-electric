import type { Metadata } from "next";
import { ServiceHubTemplate } from "@/app/(components)/ContentTemplates";
import { englishServicePages } from "@/lib/content/english-services";
import { SITE_URL } from "@/lib/site";
import { getOpenGraphImageUrl, sanitizeJsonLd } from "@/lib/seo";

const EN_SERVICES_URL = `${SITE_URL}/en/services`;
const PRIORITY_SERVICE_SLUGS = [
  "electrician-tirana",
  "emergency-electrician-tirana",
  "ev-charger-installation-tirana",
  "solar-panel-installation-tirana",
] as const;

const servicePriority = new Map<string, number>(
  PRIORITY_SERVICE_SLUGS.map((slug, index) => [slug, index]),
);

function sortServicesByPriority<T extends (typeof englishServicePages)[number]>(services: T[]) {
  return [...services].sort((left, right) => {
    const leftPriority = servicePriority.get(left.slug) ?? Number.MAX_SAFE_INTEGER;
    const rightPriority = servicePriority.get(right.slug) ?? Number.MAX_SAFE_INTEGER;

    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }

    return left.title.localeCompare(right.title, "en");
  });
}

export const metadata: Metadata = {
  title: "English electrical services in Tirana | Alex Elektrik",
  description:
    "English electrical services in Tirana for emergencies, rentals, expat support, EV chargers, solar planning, and business properties.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: EN_SERVICES_URL,
    languages: {
      en: EN_SERVICES_URL,
      "sq-AL": `${SITE_URL}/sherbime`,
    },
  },
  openGraph: {
    type: "website",
    url: EN_SERVICES_URL,
    locale: "en_US",
    title: "English electrical services in Tirana | Alex Elektrik",
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
  const orderedServices = sortServicesByPriority([...englishServicePages]);
  const cards = orderedServices.map((service) => ({
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
        name: "English electrical services in Tirana",
        description:
          "English hub that links visitors to service pages, audience pages, and location pages.",
      },
      {
        "@type": "ItemList",
        "@id": `${EN_SERVICES_URL}#itemlist`,
        itemListElement: orderedServices.map((service, index) => ({
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
        title="English electrical services for Tirana"
        description="Find the right English-language page for emergency electrical work, repairs, rentals, expat support, EV chargers, solar projects, and business properties in Tirana."
        introParagraphs={[
          "Choose the service that matches the property and the work: urgent fault finding, planned electrical work, EV charging, solar, rental maintenance, or commercial support.",
          "If you are unsure, send the property type, Tirana neighborhood, a short description of the problem, and clear photos of the panel or affected point. We can then advise which service is the right starting point.",
        ]}
        highlights={[
          "Clear English communication before and during the visit.",
          "Support for homes, rentals, offices, shops, EV chargers, and solar projects.",
          "A practical first assessment based on the fault, property, panel, and required work.",
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
