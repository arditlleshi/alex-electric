import type { Metadata } from "next";
import AboutSection from "./(components)/AboutSection";
import ArticlesSection from "./(components)/ArticlesSection";
import ContactSection from "./(components)/ContactSection";
import FAQSection, { faqData } from "./(components)/FAQSection";
import HeroSection from "./(components)/HeroSection";
import ScrollReveal from "./(components)/ScrollReveal";
import ServicesSection from "./(components)/ServicesSection";
import SiteShell from "./(components)/SiteShell";
import WhyChooseSection from "./(components)/WhyChooseSection";
import { CONTACT_EMAIL_ADDRESS, CONTACT_PHONE_NUMBER } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alex Elektrik | Sherbime elektrike per Tirane dhe Durres",
  description:
    "Alex Elektrik eshte faqja kryesore e sherbimeve elektrike per Tirane dhe Durres, me faqe te dedikuara per urgjenca, riparime, instalime, EV, solar dhe sherbim ne anglisht.",
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
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Alex Elektrik",
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
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
      sameAs: [
        "https://www.facebook.com/alexelectric",
        "https://www.instagram.com/alexelectric",
      ],
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
            "@id": `${SITE_URL}/#localbusiness`,
          },
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Alex Elektrik",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
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
