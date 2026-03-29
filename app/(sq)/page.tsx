import type { Metadata } from "next";
import AboutSection from "@/app/(components)/AboutSection";
import ArticlesSection from "@/app/(components)/ArticlesSection";
import ContactSection from "@/app/(components)/ContactSection";
import FAQSection, { faqData } from "@/app/(components)/FAQSection";
import HeroSection from "@/app/(components)/HeroSection";
import ScrollReveal from "@/app/(components)/ScrollReveal";
import ServicesSection from "@/app/(components)/ServicesSection";
import SiteShell from "@/app/(components)/SiteShell";
import WhyChooseSection from "@/app/(components)/WhyChooseSection";
import { CONTACT_EMAIL_ADDRESS, CONTACT_PHONE_NUMBER } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import {
  LOCAL_BUSINESS_ID,
  ORGANIZATION_NAME,
  ORGANIZATION_LOGO_URL,
  WEBSITE_ID,
  sanitizeJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Alex Elektrik | Sherbime elektrike per Tirane dhe Durres",
  description:
    "Sherbime elektrike ne Tirane dhe Durres per urgjenca, riparime, instalime, EV, solar dhe mbeshtetje ne shqip e anglisht.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      "sq-AL": SITE_URL,
      "en-US": `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Alex Elektrik | Sherbime elektrike per Tirane dhe Durres",
    description:
      "Qendra kryesore e Alex Elektrik per sherbime, guida dhe kontakt ne Tirane dhe Durres.",
    locale: "sq_AL",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Alex Elektrik",
      },
    ],
  },
};

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": LOCAL_BUSINESS_ID,
        name: ORGANIZATION_NAME,
        url: SITE_URL,
        image: ORGANIZATION_LOGO_URL,
        logo: ORGANIZATION_LOGO_URL,
        telephone: CONTACT_PHONE_NUMBER,
        email: CONTACT_EMAIL_ADDRESS,
        priceRange: "$$",
      areaServed: ["Tirane", "Durres"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tirane",
        addressLocality: "Tirane",
        postalCode: "1001",
        addressCountry: "AL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.3275,
        longitude: 19.8187,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      knowsLanguage: ["sq-AL", "en-US"],
      makesOffer: [
        "Instalime elektrike",
        "Riparime elektrike",
        "Elektricist urgjent",
        "Karikues EV",
        "Panele diellore",
      ].map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName,
          provider: {
            "@id": LOCAL_BUSINESS_ID,
          },
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: ORGANIZATION_NAME,
      inLanguage: ["sq-AL", "en-US"],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.replace(/<[^>]+>/g, ""),
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Kreu",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default async function Home() {
  "use cache";

  return (
    <SiteShell activeSection="home">
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(homepageJsonLd) }}
        />
        <HeroSection />

        <ScrollReveal width="100%" animation="fade-in" duration={0.35}>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal width="100%" animation="fade-in" duration={0.35}>
          <ServicesSection />
        </ScrollReveal>

        <ScrollReveal width="100%" animation="fade-in" duration={0.4}>
          <WhyChooseSection />
        </ScrollReveal>

        <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
          <FAQSection />
        </ScrollReveal>

        <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
          <ArticlesSection />
        </ScrollReveal>

        <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
          <ContactSection />
        </ScrollReveal>
      </main>
    </SiteShell>
  );
}
