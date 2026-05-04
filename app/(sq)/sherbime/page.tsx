import type { Metadata } from "next";
import { ServiceHubTemplate } from "@/app/(components)/ContentTemplates";
import { albanianServicePages } from "@/lib/content/albanian-services";
import { SITE_URL } from "@/lib/site";
import { getOpenGraphImageUrl, sanitizeJsonLd } from "@/lib/seo";

const SERVICES_URL = `${SITE_URL}/sherbime`;

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
  const cards = albanianServicePages.map((service) => ({
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
        itemListElement: albanianServicePages.map((service, index) => ({
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
          "Nisni nga faqja qe perputhet me problemin ose me pronen tuaj. Ketu jane mbledhur faqet kryesore per defekte, instalime, kontrolle sigurie dhe permiresime elektrike me kerkese te larte ne Tirane dhe Durres.",
          "Nese ju duhet nje nderhyrje e shpejte, nje kontroll para dorezimit te prones, nje instalim i ri ose planifikim per EV dhe solar, kjo faqe ju con drejt sherbimit me te qarte pa ju humbur kohe me tekst te panevojshem.",
        ]}
        highlights={[
          "Faqe lokale per Tirane dhe Durres per banesa, vila dhe biznese.",
          "Sherbime te ndara sipas problemit, llojit te prones dhe nevojes reale.",
          "Lidhje te dobishme drejt udhezuesve qe ju ndihmojne para telefonates.",
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
