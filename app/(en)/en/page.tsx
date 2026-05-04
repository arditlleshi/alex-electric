import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Globe, MapPin, Phone } from "lucide-react";
import TrackedContactLink from "@/app/(components)/TrackedContactLink";
import WhatsAppIcon from "@/app/(components)/WhatsAppIcon";
import { englishServicePages } from "@/lib/content/english-services";
import { guidePages } from "@/lib/content/guides";
import {
  CONTACT_PHONE_DISPLAY,
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
      id="main-content"
      lang="en"
      className="bg-background pb-20 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(collectionSchema) }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-border bg-surface px-6 py-8 shadow-soft sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
          <div className="min-w-0 self-center">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
                <Globe aria-hidden="true" className="h-4 w-4 text-electric-600" />
                English support
              </span>
              <span className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-border bg-surface-raised px-3 text-sm font-semibold text-muted-strong">
                <MapPin aria-hidden="true" className="h-4 w-4 text-electric-600" />
                Tirana & Durres
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl lg:text-6xl">
              English Electrical Services for Tirana, Durres & Coastal Properties
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted sm:text-xl">
              Start here if you need an English-speaking electrician in Tirana
              or Durres. These pages help expats, landlords, rentals, small
              businesses, and coastal property owners reach the right service
              for faults, repairs, upgrades, EV chargers, and solar work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TrackedContactLink
                href={CONTACT_PHONE_HREF}
                channel="phone"
                source="english-page"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                <Phone aria-hidden="true" className="h-4 w-4" />
                Call {CONTACT_PHONE_DISPLAY}
              </TrackedContactLink>
              <TrackedContactLink
                href={CONTACT_WHATSAPP_HREF}
                channel="whatsapp"
                source="english-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-teal-500 hover:bg-surface-muted hover:text-teal-700">
                <WhatsAppIcon aria-hidden="true" className="h-4 w-4" />
                WhatsApp
              </TrackedContactLink>
              <Link
                href={EN_SERVICES_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-5 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
                Browse All English Pages
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted">
              English pages for urgent electrical faults, rental support, EV chargers, solar planning, and property checks.
            </p>
          </div>

          <aside className="self-center rounded-lg border border-electric-100 bg-electric-50/60 p-6">
            <div>
              <p className="text-sm font-semibold text-electric-700">
                How this page helps
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-foreground">
                The clearest way to choose the right page first
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                Use one main service page and one supporting guide before you
                call. That usually makes the first conversation shorter and the
                likely scope easier to understand.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {[
                "Faults or power issues that need an immediate visit",
                "Rental, landlord, and Airbnb turnover work",
                "Planned upgrades like EV charging, solar, or electrical checks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-electric-100 bg-surface px-4 py-4 text-sm leading-6 text-muted">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                  />
                  <p className="min-w-0">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-border bg-surface p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">
              How English support works
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              These pages are written for expats, landlords, Airbnb hosts, and
              business owners who want clear communication from the first call.
              The goal is not only to translate the service list, but to make it
              easier to explain the fault, compare the likely scope, and
              understand whether you need an emergency visit, a repair, or a
              larger upgrade.
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              In Tirana and Durres, wasted time usually comes from a mismatch
              between the search term and the actual problem. Use the service
              pages below to narrow that down, then open one guide and one
              service page before you call so the first conversation starts with
              the right context.
            </p>
          </article>
          <aside className="rounded-lg border border-border bg-surface-raised p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">
              Best details to send first
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted sm:text-base">
              {[
                "City and neighborhood, especially if the property is outside central Tirana.",
                "Property type: apartment, villa, rental, office, shop, or hospitality space.",
                "The exact symptom, when it started, and whether breakers trip or the panel heats up.",
                "Any renovation, EV plan, solar plan, or tenant handover linked to the job.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                />
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Core Pages
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Primary service pages for English-speaking visitors
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              These are the main entry points for urgent work, location-specific
              demand, and higher-intent service searches.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {corePages.map((page) => (
              <Link
                key={page.slug}
                href={page.path}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
                <span className="inline-flex min-h-8 w-fit items-center rounded-lg border px-3 text-xs font-semibold text-muted-strong">
                  {page.pageType === "location" ? "Location Page" : "Service Page"}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                  {page.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {page.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                  Open Page
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <span className="inline-flex min-h-9 items-center rounded-lg border border-teal-500/20 bg-teal-500/10 px-3 text-sm font-semibold text-teal-700">
                Audience Pages
              </span>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Pages for real situations
              </h2>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
                These pages speak directly to the audiences that are most likely
                to search in English: expats, landlords, Airbnb hosts, and
                business operators.
              </p>
            </div>
            <Link
              href="/blog?lang=en"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-teal-500 hover:bg-surface-muted hover:text-teal-700">
              View English Guides
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {audiencePages.map((page) => (
              <Link
                key={page.slug}
                href={page.path}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                  {page.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {page.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                  Open Page
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-raised">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-signal-100 bg-signal-50 px-3 text-sm font-semibold text-signal-600">
            English Guides
          </span>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            English guides that support the service pages
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
            Every guide links back to the core service pages, so the blog works
            as support content instead of becoming a disconnected content silo.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {englishGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-6 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-background hover:shadow-soft">
                <p className="inline-flex items-center gap-2 text-sm text-muted">
                  <CalendarDays aria-hidden="true" className="h-4 w-4" />
                  {new Date(guide.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                  {guide.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {guide.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                  Read Guide
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
