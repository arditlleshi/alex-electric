import type { Metadata } from "next";
import { Suspense } from "react";
import BlogFilterContent, { BlogFilterSection } from "./BlogFilterContent";
import { guidePages } from "@/lib/content/guides";
import { SITE_URL } from "@/lib/site";
import { sanitizeJsonLd } from "@/lib/seo";

const BLOG_URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: "Blog elektrik dhe guida praktike lokale | Alex Elektrik",
  description:
    "Lexoni guides praktike ne shqip dhe anglisht per urgjenca elektrike, instalime, panele, EV, apartamente, biznese dhe prona me qira.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: BLOG_URL,
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
          "Blog me guides ne shqip dhe anglisht per riparime elektrike, instalime, EV, solar dhe mirembajtje pronash.",
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
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="card-modern p-8 sm:p-10">
            <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
              Blog and guides
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Blog elektrik dhe guides praktike
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
              Ketu gjeni guides te lidhur drejtperdrejt me faqet tona te
              sherbimit: urgjenca, riparime, instalime, panele, EV, prona me
              qira dhe faqet ne anglisht per kliente nderkombetare.
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
