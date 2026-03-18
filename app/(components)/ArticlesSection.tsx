import Link from "next/link";
import { guidePages } from "@/lib/content/guides";

const featuredGuides = [...guidePages]
  .filter((guide) => guide.featured)
  .sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
  .slice(0, 6);

const fallbackGuides =
  featuredGuides.length > 0
    ? featuredGuides
    : [...guidePages]
        .sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
        .slice(0, 6);

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-white pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="gradient-aurora absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-10 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="gradient-electric absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full opacity-10 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 animate-fade-in-up text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            Blog dhe guides
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Artikuj qe lidhen direkt me faqet e sherbimit
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Cdo guide i ri ushqen nje faqe sherbimi me intent te larte. Kjo
            krijon me shume hyrje organike pa u mbeshtetur vetem te homepage.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
            English-language guides are mixed in here too, and visitors can
            filter the full blog hub by language.
          </p>
        </div>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" aria-label="featured guides">
          {fallbackGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/blog/${guide.slug}`}
                className="group relative flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {guide.locale === "en-US" ? "English" : "Shqip"}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(guide.date).toLocaleDateString(
                      guide.locale === "en-US" ? "en-US" : "sq-AL",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-700">
                  {guide.title}
                </h3>

                <p className="mt-4 flex-1 leading-relaxed text-gray-600">
                  {guide.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.secondaryKeywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {keyword}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600">
                  Lexo artikullin
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-center justify-center gap-3 text-center animate-fade-in-up sm:flex-row">
          <Link
            href="/blog"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700">
            Shiko te gjithe artikujt
          </Link>
          <Link
            href="/blog?lang=en"
            className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50">
            Open English guides
          </Link>
        </div>
      </div>
    </section>
  );
}
