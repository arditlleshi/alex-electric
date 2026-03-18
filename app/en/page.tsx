import type { Metadata } from "next";
import Link from "next/link";
import TrackedContactLink from "../(components)/TrackedContactLink";
import { englishServicePages } from "@/lib/content/english-services";
import { guidePages } from "@/lib/content/guides";
import {
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";
import { SITE_URL } from "@/lib/site";

const EN_URL = `${SITE_URL}/en`;
const EN_SERVICES_URL = `${SITE_URL}/en/services`;

export const metadata: Metadata = {
  title: "English Electrical Services for Tirana and Durres | Alex Elektrik",
  description:
    "English overview page for electrical services in Tirana and Durres, with dedicated pages for expats, landlords, Airbnb hosts, emergency work, EV chargers, and solar projects.",
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
    title: "English Electrical Services for Tirana and Durres | Alex Elektrik",
    description:
      "Start from the English hub for expats, rentals, businesses, and emergency electrical work.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Alex Elektrik English pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "English Electrical Services for Tirana and Durres",
    description:
      "English-language electrical support for expats, landlords, rentals, and small businesses.",
    images: [`${SITE_URL}/twitter-image`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${EN_URL}#collection`,
      url: EN_URL,
      name: "English Electrical Services for Tirana and Durres",
      description:
        "English overview page with links to service pages, audience pages, and guides.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${EN_URL}#itemlist`,
      itemListElement: englishServicePages.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        item: `${SITE_URL}${service.path}`,
      })),
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

const corePages = englishServicePages.filter(
  (page) => page.pageType === "service" || page.pageType === "location",
);
const audiencePages = englishServicePages.filter(
  (page) => page.pageType === "audience",
);
const englishGuides = guidePages.filter((guide) => guide.locale === "en-US");

export default function EnglishPage() {
  return (
    <main
      lang="en"
      className="bg-gradient-to-br from-gray-50 to-white pb-20 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="card-modern p-8 sm:p-10">
          <p className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            English hub
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            English Electrical Services for Tirana and Durres
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
            This page is the English overview, not the one page that tries to
            rank for everything. It routes visitors to dedicated pages for
            local electrician searches, emergency faults, expat needs, rentals,
            EV chargers, solar planning, and coastal properties.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedContactLink
              href={CONTACT_PHONE_HREF}
              channel="phone"
              source="english-page"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              Call now
            </TrackedContactLink>
            <TrackedContactLink
              href={CONTACT_WHATSAPP_HREF}
              channel="whatsapp"
              source="english-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50">
              WhatsApp
            </TrackedContactLink>
            <Link
              href={EN_SERVICES_URL}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
              Browse all English pages
            </Link>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corePages.map((page) => (
            <Link
              key={page.slug}
              href={page.path}
              className="card-modern group block p-6 transition-transform duration-300 hover:scale-[1.02]">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                {page.pageType === "location" ? "Location page" : "Service page"}
              </span>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                {page.title}
              </h2>
              <p className="mt-3 text-gray-600">{page.metaDescription}</p>
            </Link>
          ))}
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Pages for real situations
              </h2>
              <p className="mt-3 max-w-3xl text-gray-600">
                These pages speak directly to the audiences that are most likely
                to search in English: expats, landlords, Airbnb hosts, and
                business operators.
              </p>
            </div>
            <Link
              href="/blog?lang=en"
              className="text-sm font-semibold text-blue-600">
              View English guides
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {audiencePages.map((page) => (
              <Link
                key={page.slug}
                href={page.path}
                className="card-modern group block p-6 transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                  {page.title}
                </h3>
                <p className="mt-3 text-gray-600">{page.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            English guides that support the service pages
          </h2>
          <p className="mt-3 max-w-3xl text-gray-600">
            Every guide links back to the core service pages, so the blog works
            as support content instead of becoming a disconnected content silo.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {englishGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="card-modern group block p-6 transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                  {guide.title}
                </h3>
                <p className="mt-3 text-gray-600">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
