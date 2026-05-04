import type { Metadata } from "next";
import { ServiceHubTemplate } from "@/app/(components)/ContentTemplates";
import { albanianServicePages } from "@/lib/content/albanian-services";
import { SITE_URL } from "@/lib/site";
import { getOpenGraphImageUrl, sanitizeJsonLd } from "@/lib/seo";

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
  title: "Sherbime elektrike ne Tirane dhe Durres | Alex Elektrik",
  description:
    "Faqet kryesore te sherbimeve elektrike ne Tirane dhe Durres per urgjenca, riparime, instalime, panele diellore, EV dhe biznese.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SERVICES_URL,
    languages: {
      "sq-AL": SERVICES_URL,
      "en-US": `${SITE_URL}/en/services`,
    },
  },
  openGraph: {
    type: "website",
    title: "Sherbime elektrike ne Tirane dhe Durres | Alex Elektrik",
    description:
      "Faqja kryesore e sherbimeve elektrike me lidhje direkte per urgjenca, riparime, instalime, EV, solar dhe sherbime per banesa e biznese.",
    url: SERVICES_URL,
    locale: "sq_AL",
    images: [
      {
        url: getOpenGraphImageUrl("/sherbime"),
        width: 1200,
        height: 630,
        alt: "Sherbime elektrike - Alex Elektrik",
      },
    ],
  },
};

export default function ServicesHubPage() {
  const orderedServices = sortServicesByPriority([...albanianServicePages]);
  const cards = orderedServices.map((service) => ({
    title: service.title,
    description: service.summary,
    href: `/sherbime/${service.slug}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SERVICES_URL}#collection`,
        url: SERVICES_URL,
        name: "Sherbime elektrike ne Tirane dhe Durres",
        description:
          "Faqe qendrore me sherbimet elektrike te Alex Elektrik per banesa, vila, biznese dhe projekte energjie.",
      },
      {
        "@type": "ItemList",
        "@id": `${SERVICES_URL}#itemlist`,
        itemListElement: orderedServices.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          item: `${SITE_URL}/sherbime/${service.slug}`,
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
        title="Sherbime elektrike per Tirane dhe Durres"
        description="Gjeni faqen e duhur per urgjenca elektrike, riparime, instalime, EV, solar dhe sherbime per apartamente, vila, biznese dhe prona me qira ne Tirane dhe Durres."
        introParagraphs={[
          "Nisni nga faqet kryesore me kerkesen me te forte: elektricist ne Tirane ose Durres, urgjenca, instalime, apartamente, panel elektrik, EV dhe solar. Kjo ju con me shpejt te faqja qe ka me shume mundesi te zgjidhe situaten tuaj.",
          "Me poshte gjeni edhe faqe me specifike per vila, biznese, ndricim ose smart home. Ato vlejne kur problemi eshte me i ngushte, por faqet kryesore zakonisht jane pika me e mire e nisjes.",
        ]}
        highlights={[
          "Faqet kryesore jane renditur te parat per kerkimet me te forta lokale.",
          "Faqet me specifike mbeten te hapura si mbeshtetje per raste me te ngushta.",
          "Udhezuesit e blogut ju ndihmojne te kuptoni problemin para telefonates.",
        ]}
        cards={cards}
        breadcrumbs={[
          { label: "Kreu", href: "/" },
          { label: "Sherbime" },
        ]}
      />
    </>
  );
}
