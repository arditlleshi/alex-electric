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
      "Hub-i shqiptar i sherbimeve me lidhje drejt faqeve per urgjenca, riparime, instalime, solar, EV dhe projekte te targetuara.",
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
    description: service.metaDescription,
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
        description="Kjo faqe lidh te gjitha faqet kryesore te sherbimit: urgjenca, riparime, instalime, panele, EV, smart home dhe zgjidhje te dedikuara per apartamente, vila dhe biznese."
        introParagraphs={[
          "Zgjidhni faqen qe perputhet me problemin ose pronen tuaj. Faqet kryesore mbulojne kerkimet me te forta ne Tirane dhe Durres, si dhe sherbimet me intent te larte per banesa, vila dhe biznese.",
          "Nese kerkoni reagim te shpejte, kontroll sigurie, instalim te ri ose zgjidhje energjie si EV dhe solar, kjo qender ju drejton te faqja me e pershtatshme pa humbur kohe me informacion te pergjithshem.",
        ]}
        highlights={[
          "Faqe lokale per Tirane dhe Durres me intent komercial.",
          "Sherbime te ndara sipas problematikave, tipit te prones dhe audiences.",
          "Lidhje direkte drejt udhezuesve qe mbeshtesin vendimin e klientit.",
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
