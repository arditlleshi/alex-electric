import Link from "next/link";
import { allPosts } from "./posts";
import type { Post } from "./posts";
import { Metadata } from "next";

// Calculate latest post date for dateModified
const latestPostDate = allPosts.reduce((latest, post) => {
  const postDate = new Date(post.date);
  return postDate > latest ? postDate : latest;
}, new Date(allPosts[0]?.date || new Date().toISOString()));

export const metadata: Metadata = {
  title: "Blog Elektrik – Këshilla & Udhëzime Profesionale | Alex Electric",
  description:
    "Lexoni artikujt profesionale për instalime elektrike, riparime, panele diellore dhe smart home në Tiranë. Këshilla nga ekspertët elektricistë.",
  keywords: [
    "blog elektrik",
    "këshilla elektrike",
    "artikuj elektricist",
    "instalime elektrike",
    "panele diellore",
    "smart home",
    "riparime elektrike",
    "elektricist tirane",
    "udhëzime elektrike",
    "këshilla profesionale",
  ],
  authors: [
    {
      name: "Alex Elektrik",
      url: "https://www.alex-electric.com",
    },
  ],
  category: "Home Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Blog Elektrik – Këshilla & Udhëzime Profesionale | Alex Electric",
    description:
      "Lexoni artikujt profesionale për instalime elektrike, riparime, panele diellore dhe smart home në Tiranë. Këshilla nga ekspertët elektricistë.",
    type: "website",
    locale: "sq_AL",
    url: "https://www.alex-electric.com/blog",
    siteName: "Alex Elektrik",
    images: [
      {
        url: "https://www.alex-electric.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Alex Elektrik – Blog Këshilla Elektrike",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Elektrik – Këshilla & Udhëzime Profesionale | Alex Electric",
    description:
      "Lexoni artikujt profesionale për instalime elektrike, riparime, panele diellore dhe smart home në Tiranë.",
    images: ["https://www.alex-electric.com/logo.png"],
  },
  alternates: {
    canonical: "https://www.alex-electric.com/blog",
  },
  other: {
    "article:author": "Alex Elektrik",
    "article:published_time": allPosts[0]?.date || new Date().toISOString(),
    "article:modified_time": latestPostDate.toISOString(),
  },
};

export default async function BlogPage() {
  "use cache";

  // Organization Schema Reference
  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://www.alex-electric.com/#organization",
    name: "Alex Elektrik",
    url: "https://www.alex-electric.com",
    logo: "https://www.alex-electric.com/logo.png",
    sameAs: [
      "https://www.facebook.com/alexelectric",
      "https://www.instagram.com/alexelectric",
    ],
  };

  // CollectionPage/Blog Schema
  const blogSchema = {
    "@type": "CollectionPage",
    "@id": "https://www.alex-electric.com/blog#webpage",
    url: "https://www.alex-electric.com/blog",
    name: "Blog Elektrik – Këshilla & Udhëzime Profesionale",
    description:
      "Lexoni artikujt profesionale për instalime elektrike, riparime, panele diellore dhe smart home në Tiranë. Këshilla nga ekspertët elektricistë.",
    publisher: {
      "@id": "https://www.alex-electric.com/#organization",
    },
    datePublished: allPosts[0]?.date || new Date().toISOString(),
    dateModified: latestPostDate.toISOString(),
    mainEntity: {
      "@id": "https://www.alex-electric.com/blog#itemlist",
    },
    inLanguage: "sq-AL",
  };

  // ItemList Schema
  const itemListSchema = {
    "@type": "ItemList",
    "@id": "https://www.alex-electric.com/blog#itemlist",
    numberOfItems: allPosts.length,
    itemListElement: allPosts.map((post: Post, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        "@id": `https://www.alex-electric.com/blog/${post.slug}`,
        headline: post.title,
        description: post.description,
        url: `https://www.alex-electric.com/blog/${post.slug}`,
        datePublished: new Date(post.date).toISOString(),
        author: {
          "@id": "https://www.alex-electric.com/#organization",
        },
        publisher: {
          "@id": "https://www.alex-electric.com/#organization",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.alex-electric.com/blog/${post.slug}`,
        },
        keywords: post.tags.join(", "),
        articleSection: "Electrical Services",
        inLanguage: "sq-AL",
      },
    })),
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": "https://www.alex-electric.com/blog#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kreu",
        item: "https://www.alex-electric.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.alex-electric.com/blog",
      },
    ],
  };

  // Combine all schemas using @graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      blogSchema,
      itemListSchema,
      breadcrumbSchema,
      // Individual Article schemas for each post
      ...allPosts.map((post: Post) => ({
        "@type": "Article",
        "@id": `https://www.alex-electric.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        url: `https://www.alex-electric.com/blog/${post.slug}`,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: {
          "@id": "https://www.alex-electric.com/#organization",
        },
        publisher: {
          "@id": "https://www.alex-electric.com/#organization",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.alex-electric.com/blog/${post.slug}`,
        },
        keywords: post.tags.join(", "),
        articleSection: "Electrical Services",
        inLanguage: "sq-AL",
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative bg-gray-50 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,123,255,0.1),_transparent_40%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Blog & Këshilla
            <span className="block text-gradient mt-2">
              nga Eksperti Elektricist
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Këtu gjeni artikuj, udhëzime dhe këshilla profesionale për të gjitha
            nevojat tuaja elektrike.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            aria-label="blog posts"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allPosts.map((post: Post, index) => (
              <li aria-label={post.title} key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group flex flex-col h-full card-modern p-8 rounded-2xl hover-glow hover:scale-[1.02] transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  {/* Date */}
                  <p className="text-sm font-medium text-blue-600 mb-1">
                    {new Date(post.date).toLocaleDateString("sq-AL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  {/* Title */}
                  <h2 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed flex-grow">
                    {post.description}
                  </p>

                  {/* Tags Section */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 group-hover:from-blue-100 group-hover:to-indigo-100 group-hover:border-blue-200 group-hover:text-blue-800 transition-all duration-300 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
                      Lexo më shumë
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
