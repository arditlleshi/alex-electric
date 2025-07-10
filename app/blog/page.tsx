import Link from "next/link";
import { allPosts } from "./posts";
import type { Post } from "./posts";

export const metadata = {
  title: "Blog – Këshilla & Udhëzime Elektrike | Alex Electric",
  description:
    "Lexoni artikujt tanë për të mësuar si të mbani sistemin tuaj elektrik të sigurt dhe eficient.",
};

const BlogPage = () => {
  return (
    <>
      <section className="relative bg-gray-50 py-24 sm:py-32">
        <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,123,255,0.1),_transparent_40%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Blog & Këshilla
            <span className="block text-gradient mt-2">nga Eksperti Elektricist</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Këtu gjeni artikuj, udhëzime dhe këshilla profesionale për të gjitha nevojat tuaja elektrike.
          </p>
        </div>
      </section>
      
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allPosts.map((post: Post, index) => (
              <Link 
                href={`/blog/${post.slug}`}
                key={post.slug} 
                className="group block card-modern p-8 rounded-2xl hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-grow">
                  <p className="text-sm font-medium text-blue-600">
                    {new Date(post.date).toLocaleDateString("sq-AL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                       <span key={tag} className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors duration-300">
                         {tag}
                       </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors duration-300 inline-flex items-center">
                    Lexo më shumë
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
