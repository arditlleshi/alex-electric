import type { Metadata } from "next";
import { ServiceHubTemplate } from "@/app/(components)/ContentTemplates";
import { albanianServicePages } from "@/lib/content/albanian-services";
import { SITE_URL } from "@/lib/site";
import {
  LOCAL_BUSINESS_ID,
  WEBSITE_ID,
  getOpenGraphImageUrl,
  sanitizeJsonLd,
} from "@/lib/seo";

const SERVICES_URL = `${SITE_URL}/sherbime`;
const PRIORITY_SERVICE_SLUGS = [
  "elektricist-tirane",
  "elektricist-durres",
  "elektricist-urgjent-tirane",
  "instalime-elektrike-tirane",
  "elektricist-per-apartamente",
  "panel-elektrik-tirane",
  "karikues-ev-tirane",
  "panele-diellore-tirane",
] as const;
const SERVICE_HUB_KEYWORDS = [
  "sherbime elektrike tirane",
  "sherbime elektrike durres",
  "elektricist ne tirane",
  "elektricist durres",
  "elektricist urgjent tirane",
  "riparime elektrike tirane",
  "instalime elektrike tirane",
  "elektricist per apartamente",
  "panel elektrik tirane",
  "karikues ev tirane",
  "panele diellore tirane",
] as const;

const servicePriority = new Map<string, number>(
  PRIORITY_SERVICE_SLUGS.map((slug, index) => [slug, index]),
);

function sortServicesByPriority<T extends (typeof albanianServicePages)[number]>(services: T[]) {
  return [...services].sort((left, right) => {
    const leftPriority = servicePriority.get(left.slug) ?? Number.MAX_SAFE_INTEGER;
    const rightPriority = servicePriority.get(right.slug) ?? Number.MAX_SAFE_INTEGER;

    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }

    return left.title.localeCompare(right.title, "sq");
  });
}

export const metadata: Metadata = {
  title: "Shërbime elektrike në Tiranë dhe Durrës | Alex Elektrik",
  description:
    "Gjeni shërbimin e duhur elektrik në Tiranë dhe Durrës për urgjenca, riparime, instalime, panele elektrike, apartamente, biznese, karikues EV dhe panele diellore.",
  metadataBase: new URL(SITE_URL),
  keywords: [...SERVICE_HUB_KEYWORDS],
  alternates: {
    canonical: SERVICES_URL,
    languages: {
      "sq-AL": SERVICES_URL,
      "en-US": `${SITE_URL}/en/services`,
    },
  },
  openGraph: {
    type: "website",
    title: "Shërbime elektrike në Tiranë dhe Durrës | Alex Elektrik",
    description:
      "Qendër shërbimesh për elektricist në Tiranë dhe Durrë per urgjenca, riparime, instalime, apartamente, biznese, EV dhe solar.",
    url: SERVICES_URL,
    locale: "sq_AL",
    images: [
      {
        url: getOpenGraphImageUrl("/sherbime"),
        width: 1200,
        height: 630,
        alt: "Shërbime elektrike në Tiranë dhe Durrës - Alex Elektrik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shërbime elektrike në Tiranë dhe Durrës | Alex Elektrik",
    description:
      "Faqe qëndrore për elektricist, urgjenca, riparime, instalime, apartamente, biznese, EV dhe panele diellore.",
    images: [getOpenGraphImageUrl("/sherbime")],
  },
};

export default function ServicesHubPage() {
  const orderedServices = sortServicesByPriority([...albanianServicePages]);
  const cards = orderedServices.map((service) => ({
    title: service.title,
    description: service.metaDescription,
    href: `/sherbime/${service.slug}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SERVICES_URL}#webpage`,
        url: SERVICES_URL,
        name: "Shërbime elektrike në Tiranë dhe Durrës",
        inLanguage: "sq-AL",
        description:
          "Faqe qëndrore me shërbimet elektrike të Alex Elektrik për shtëpi, apartamente, vila, prona me qira, biznese dhe projekte energjie në Tiranë dhe Durrës.",
        keywords: [...SERVICE_HUB_KEYWORDS].join(", "),
        isPartOf: {
          "@id": WEBSITE_ID,
        },
        publisher: {
          "@id": LOCAL_BUSINESS_ID,
        },
        mainEntity: {
          "@id": `${SERVICES_URL}#itemlist`,
        },
        about: [
          { "@type": "Thing", name: "Elektricist ne Tirane" },
          { "@type": "Thing", name: "Elektricist ne Durres" },
          { "@type": "Thing", name: "Elektricist urgjent ne Tirane" },
          { "@type": "Thing", name: "Instalime elektrike ne Tirane" },
          { "@type": "Thing", name: "Riparime elektrike ne Tirane" },
          { "@type": "Thing", name: "Karikues EV ne Tirane" },
          { "@type": "Thing", name: "Panele diellore ne Tirane" },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SERVICES_URL}#itemlist`,
        itemListElement: orderedServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          item: {
            "@type": "Service",
            name: service.title,
            url: `${SITE_URL}/sherbime/${service.slug}`,
            description: service.metaDescription,
            serviceType: service.primaryKeyword,
            areaServed: [...service.serviceAreas],
            provider: {
              "@id": LOCAL_BUSINESS_ID,
            },
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SERVICES_URL}#breadcrumb`,
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
            item: SERVICES_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id="services-hub-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(jsonLd) }}
      />
      <ServiceHubTemplate
        eyebrow="Shërbime elektrike"
        title="Shërbime elektrike në Tiranë dhe Durrës"
        description="Elektricist në Tiranë dhe Durrës për urgjenca, riparime, instalime elektrike, panele elektrike, apartamente, vila, biznese, karikues EV dhe panele diellore, me shërbim për shtëpi, prona me qira dhe ambiente pune."
        introParagraphs={[
          "Ofron shërbime elektrike për shtëpi, apartamente, vila, zyra, dyqane, restorante, hotele dhe prona me qira në Tiranë dhe Durrës.",
          "Nga urgjencat dhe riparimet e shpejta te instalimet e reja, panelet elektrike, karikuesit EV dhe panelet diellore, zgjidhni shërbimin që ju përshtatet dhe na kontaktoni për vizitë ose vlerësim.",
        ]}
        highlights={[
          "Reagim i shpejtë për urgjenca dhe defekte që nuk presin.",
          "Riparime, instalime dhe kontrolle sigurie për banesa e biznese.",
          "Shërbime për panele elektrike, EV, solar dhe pajisje moderne.",
          "Komunikim i qartë për problemin, punën dhe hapat e radhës.",
        ]}
        highlightsTitle="Pse na zgjedhin klientet"
        overviewTitle="Shërbimet kryesore"
        overviewParagraphs={[
          "Shërbimet më të kërkuara përfshijne elektricist në Tiranë, elektricist në Durrës, urgjenca elektrike, riparime, instalime dhe kontroll paneli.",
          "Ofrohen gjithashtu zgjidhje për apartamente, vila, zyra, dyqane, restorante, hotele, karikues EV, panele diellore, ndricim LED dhe smart home.",
        ]}
        featuredTitle="Shërbimet më të kërkuara"
        cardsSectionTitle="Te gjitha sherbimet elektrike"
        cards={cards}
        breadcrumbs={[
          { label: "Kreu", href: "/" },
          { label: "Shërbime" },
        ]}
      />
    </>
  );
}
