import type { Metadata } from "next";
import { Suspense } from "react";
import BlogFilterContent, { BlogFilterSection } from "./BlogFilterContent";
import { guidePages } from "@/lib/content/guides";
import { SITE_URL } from "@/lib/site";
import {
  getOpenGraphImageUrl,
  getTwitterImageUrl,
  sanitizeJsonLd,
} from "@/lib/seo";

const BLOG_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "Keshilla elektrike dhe udhezues praktik | Alex Elektrik",
  description:
    "Lexoni udhezues praktik ne shqip dhe anglisht per defekte elektrike, instalime, panele, EV, solar, apartamente, biznese dhe prona me qira.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    type: "website",
    url: BLOG_URL,
    locale: "sq_AL",
    title: "Keshilla elektrike dhe udhezues praktik | Alex Elektrik",
    description:
      "Udhezues praktik per defekte elektrike, instalime, EV, solar dhe sherbime per banesa e biznese ne Tirane dhe Durres.",
    images: [
      {
        url: getOpenGraphImageUrl("/blog"),
        width: 1200,
        height: 630,
        alt: "Keshilla elektrike dhe udhezues praktik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keshilla elektrike dhe udhezues praktik | Alex Elektrik",
    description:
      "Udhezues praktik per riparime, instalime, EV, solar dhe kontroll elektrik ne Tirane dhe Durres.",
    images: [getTwitterImageUrl("/blog")],
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BLOG_URL}#collection`,
        url: BLOG_URL,
        name: "Blog elektrik dhe guides praktike",
        description:
          "Udhezues ne shqip dhe anglisht per riparime elektrike, instalime, EV, solar dhe mirembajtje pronash.",
      },
      {
        "@type": "ItemList",
        "@id": `${BLOG_URL}#itemlist`,
        itemListElement: guidePages.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          item: `${SITE_URL}/blog/${guide.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="blog-hub-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(jsonLd) }}
      />
      <main className="bg-background pb-20 pt-24">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="rounded-lg border border-border bg-surface p-8 shadow-soft sm:p-10">
            <p className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Udhezues dhe keshilla
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl">
              Keshilla elektrike dhe udhezues praktik
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted sm:text-lg">
              Ketu gjeni udhezues qe lidhen me sherbimet tona elektrike ne
              Tirane dhe Durres. Tema kryesore perfshijne urgjenca, riparime,
              instalime, EV, solar, apartamente, prona me qira dhe faqet ne
              anglisht per kliente nderkombetare.
            </p>
          </header>

          <Suspense fallback={<BlogFilterSection />}>
            <BlogFilterContent />
          </Suspense>
        </section>
      </main>
    </>
  );
}
