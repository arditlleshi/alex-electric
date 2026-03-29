import type { Metadata } from "next";
import Link from "next/link";
import TrackedContactLink from "@/app/(components)/TrackedContactLink";
import { englishServicePages } from "@/lib/content/english-services";
import { guidePages } from "@/lib/content/guides";
import {
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import {
  WEBSITE_ID,
  getOpenGraphImageUrl,
  getTwitterImageUrl,
  sanitizeJsonLd,
} from "@/lib/seo";

const EN_URL = `${SITE_URL}/en`;
const EN_SERVICES_URL = `${SITE_URL}/en/services`;

export const metadata: Metadata = {
  title: "English Electrical Services for Tirana and Durres | Alex Elektrik",
  description:
    "English electrical services in Tirana and Durres for expats, rentals, emergencies, EV chargers, solar projects, and property support.",
  metadataBase: new URL(SITE_URL),
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
        url: getOpenGraphImageUrl("/en"),
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
    images: [getTwitterImageUrl("/en")],
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
        "@id": WEBSITE_ID,
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
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(collectionSchema) }}
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
            Start here if you need an English-speaking electrician in Tirana or
            Durres. These pages route visitors to the right service for urgent
            faults, rentals, expat support, EV chargers, solar planning, and
            coastal properties.
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

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              How English support works
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              These pages are written for expats, landlords, Airbnb hosts, and
              business owners who want clear communication from the first call.
              The goal is not only to translate the service list, but to make it
              easier to explain the fault, compare the likely scope, and
              understand whether you need an emergency visit, a repair, or a
              larger upgrade.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              In Tirana and Durres the biggest source of wasted time is usually a
              mismatch between the search term and the real problem. Use the
              service pages below to narrow that down, then open one guide and
              one service page before you call so the first conversation starts
              with the right context.
            </p>
          </article>
          <aside className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Best details to send first
            </h2>
            <ul className="mt-5 space-y-3 text-gray-600">
              {[
                "City and neighborhood, especially if the property is outside central Tirana.",
                "Property type: apartment, villa, rental, office, shop, or hospitality space.",
                "The exact symptom, when it started, and whether breakers trip or the panel heats up.",
                "Any renovation, EV plan, solar plan, or tenant handover linked to the job.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </section>

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
