import AboutSection from "./(components)/AboutSection";
import ArticlesSection from "./(components)/ArticlesSection";
import ContactSection from "./(components)/ContactSection";
import FAQSection from "./(components)/FAQSection";
import HeroSection from "./(components)/HeroSection";
import ScrollReveal from "./(components)/ScrollReveal";
import ServicesSection from "./(components)/ServicesSection";
import WhyChooseSection from "./(components)/WhyChooseSection";
import { faqData } from "./(components)/FAQSection";
import { SITE_URL } from "@/lib/site";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Alex Elektrik",
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      telephone: "+355693289443",
      email: "aleksander.gjoni85@gmail.com",
      priceRange: "$$",
      areaServed: ["Tiranë", "Durrës", "Albania"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tiranë",
        addressLocality: "Tiranë",
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
        "Instalime Elektrike Rezidenciale",
        "Shërbime për Biznese dhe Industri",
        "Sisteme Smart Home",
        "Karikues për Makina Elektrike",
        "Instalime Panele Diellore",
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HeroSection />

      <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="slide-right" delay={0.2}>
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
  );
}
