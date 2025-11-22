import { notFound } from "next/navigation";
import { allPosts, Post } from "../posts";
import Link from "next/link";

export function generateStaticParams() {
  return allPosts.map((p: Post) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title + " | Alex Electric",
    description: post.description,
    alternates: {
      canonical: `https://www.alex-electric.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.alex-electric.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  "use cache"; // Cache blog post pages (static post data with generateStaticParams)
  const { slug } = await params;
  const post = allPosts.find((p: Post) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
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
            Publikuar më{" "}
            {new Date(post.date).toLocaleDateString("sq-AL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
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
              Kthehu te të gjithë Artikujt
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
