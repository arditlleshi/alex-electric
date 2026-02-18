import { notFound } from "next/navigation";
import { allPosts, Post } from "../posts";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

const BLOG_URL = `${SITE_URL}/blog`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const LOGO_URL = `${SITE_URL}/logo.png`;
const isEnglishPost = (post: Post) => post.slug.startsWith("english-");

export function generateStaticParams() {
  return allPosts.map((p: Post) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  if (!post) return {};

  const postUrl = `${BLOG_URL}/${post.slug}`;
  const publishedTime = new Date(post.date).toISOString();
  const englishPost = isEnglishPost(post);
  const locale = englishPost ? "en_US" : "sq_AL";

  // Combine post tags with relevant keywords
  const keywords = [
    ...post.tags,
    "elektricist tirane",
    "instalime elektrike",
    "riparime elektrike",
    "këshilla elektrike",
    "blog elektrik",
    ...(englishPost
      ? [
          "electrician in tirana",
          "english speaking electrician albania",
          "electrical services for expats",
        ]
      : []),
  ];

  return {
    title: `${post.title} | Alex Elektrik`,
    description: post.description,
    keywords: keywords,
    authors: [
      {
        name: "Alex Elektrik",
        url: SITE_URL,
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
      title: post.title,
      description: post.description,
      type: "article",
      url: postUrl,
      locale,
      siteName: "Alex Elektrik",
      publishedTime: publishedTime,
      modifiedTime: publishedTime,
      authors: ["Alex Elektrik"],
      tags: post.tags,
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/twitter-image`],
    },
    alternates: {
      canonical: postUrl,
    },
    other: {
      "article:author": "Alex Elektrik",
      "article:published_time": publishedTime,
      "article:modified_time": publishedTime,
      "article:section": "Electrical Services",
      "article:tag": post.tags.join(", "),
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  "use cache";

  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  if (!post) return notFound();

  const postUrl = `${BLOG_URL}/${post.slug}`;
  const publishedTime = new Date(post.date).toISOString();
  const englishPost = isEnglishPost(post);

  // Organization Schema Reference
  const organizationSchema = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Alex Elektrik",
    url: SITE_URL,
    logo: LOGO_URL,
    sameAs: [
      "https://www.facebook.com/alexelectric",
      "https://www.instagram.com/alexelectric",
    ],
  };

  // Article/BlogPosting Schema (Primary)
  const articleSchema = {
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    url: postUrl,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@id": ORGANIZATION_ID,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${postUrl}#webpage`,
    },
    keywords: post.tags.join(", "),
    articleSection: "Electrical Services",
    inLanguage: englishPost ? "en-US" : "sq-AL",
  };

  // WebPage Schema
  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${postUrl}#webpage`,
    url: postUrl,
    name: post.title,
    description: post.description,
    isPartOf: {
      "@id": `${BLOG_URL}#webpage`,
    },
    about: {
      "@id": `${postUrl}#article`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    datePublished: publishedTime,
    dateModified: publishedTime,
    inLanguage: englishPost ? "en-US" : "sq-AL",
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${postUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Kreu",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: BLOG_URL,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // Combine all schemas using @graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      articleSchema,
      webpageSchema,
      breadcrumbSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative bg-gray-50 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,123,255,0.1),_transparent_40%)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center gap-3 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-500">
            {englishPost ? "Published on " : "Publikuar më "}
            {new Date(post.date).toLocaleDateString(
              englishPost ? "en-US" : "sq-AL",
              {
              year: "numeric",
              month: "long",
              day: "numeric",
              }
            )}
          </p>
        </div>
      </section>

      <div className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {post.content}
          </div>

          <hr className="my-12 border-gray-200" />

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-all duration-300 group">
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              {englishPost
                ? "Back to all articles"
                : "Kthehu te të gjithë Artikujt"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
