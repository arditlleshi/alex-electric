import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

const EN_URL = `${SITE_URL}/en`;

export const metadata: Metadata = {
  title:
    "English-Speaking Electrician in Tirana | Emergency, EV Chargers, Solar",
  description:
    "Electrical services in English for expats and foreign businesses in Tirana and nearby areas: emergency repairs, EV charger installation, smart home, and solar.",
  keywords: [
    "english speaking electrician tirana",
    "electrician in tirana for expats",
    "emergency electrician albania",
    "ev charger installation albania",
    "solar panel electrician tirana",
  ],
  alternates: {
    canonical: EN_URL,
    languages: {
      "en-US": EN_URL,
      "sq-AL": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: EN_URL,
    locale: "en_US",
    title:
      "English-Speaking Electrician in Tirana | Emergency, EV Chargers, Solar",
    description:
      "Electrical services in English for expats and foreign businesses in Tirana and nearby areas.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "English-speaking electrician in Tirana - Alex Elektrik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "English-Speaking Electrician in Tirana | Alex Elektrik",
    description:
      "Electrical support in English for expats, landlords, and international businesses.",
    images: [`${SITE_URL}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const englishPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${EN_URL}#webpage`,
      url: EN_URL,
      name: "English-Speaking Electrician in Tirana",
      description:
        "Electrical services in English for expats and foreign businesses in Tirana and nearby areas.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
    {
      "@type": "Service",
      "@id": `${EN_URL}#service`,
      serviceType: "Electrical Services",
      provider: {
        "@type": "LocalBusiness",
        name: "Alex Elektrik",
        url: SITE_URL,
      },
      areaServed: ["Tirana", "Durres", "Albania"],
      availableLanguage: ["English", "Albanian"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${EN_URL}#breadcrumb`,
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
          item: EN_URL,
        },
      ],
    },
  ],
};

export default function EnglishPage() {
  return (
    <main lang="en" className="pt-28 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(englishPageSchema) }}
      />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-modern p-8 sm:p-10">
          <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            English Service
          </p>
          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            English-Speaking Electrician in Tirana
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We help expats, foreign homeowners, and international businesses
            with safe and reliable electrical work in Tirana and nearby areas.
            You can contact us in English for urgent repairs, diagnostics, and
            planned installations.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-lg font-bold text-gray-900">
                Emergency Electrician (24/7)
              </h2>
              <p className="mt-2 text-gray-600">
                Fast response for outages, breaker trips, burning smells, and
                unsafe wiring issues.
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-lg font-bold text-gray-900">
                EV Charger Installation
              </h2>
              <p className="mt-2 text-gray-600">
                Home and business EV charger setup with load checks, protection,
                and compliant installation.
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-lg font-bold text-gray-900">
                Solar and Smart Home
              </h2>
              <p className="mt-2 text-gray-600">
                Planning and integration for solar panel systems, smart lighting,
                and energy-efficient upgrades.
              </p>
            </article>
            <article className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="text-lg font-bold text-gray-900">
                Residential and Commercial
              </h2>
              <p className="mt-2 text-gray-600">
                Electrical services for apartments, villas, restaurants, retail
                spaces, and office environments.
              </p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+355693289443"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
              Call Now
            </a>
            <a
              href="https://wa.me/355693289443"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors">
              WhatsApp
            </a>
            <Link
              href="/blog/english-speaking-electrician-tirana"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
              Read English Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
