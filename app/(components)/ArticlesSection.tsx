import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guidePages } from "@/lib/content/guides";

const MAX_GUIDES = 6;

const featuredGuides = [...guidePages]
  .filter((guide) => guide.featured)
  .sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
  .slice(0, MAX_GUIDES);

const remainingGuides = [...guidePages]
  .filter(
    (guide) => !featuredGuides.some((featuredGuide) => featuredGuide.slug === guide.slug),
  )
  .sort((left, right) => Date.parse(right.date) - Date.parse(left.date));

const homepageGuides = [...featuredGuides, ...remainingGuides].slice(0, MAX_GUIDES);

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="border-t border-border bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Blog & Guides
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Artikuj qe lidhen direkt me faqet e sherbimit
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Cdo guide i ri i shton faqes se sherbimit me shume hyrje organike
              dhe me shume mbulim per pyetjet qe dalin ne pune reale.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              English-language guides jane pjese e te njejtit sistem dhe lidhen
              me filtrin perkates ne blog.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
              Shiko te gjithe artikujt
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/blog?lang=en"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-teal-500 hover:bg-surface-muted hover:text-teal-700">
              Open English guides
            </Link>
          </div>
        </header>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3" aria-label="featured guides">
          {homepageGuides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/blog/${guide.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-background hover:shadow-soft">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex min-h-8 items-center rounded-lg px-3 text-xs font-semibold ${
                      guide.locale === "en-US"
                        ? "bg-teal-500/10 text-teal-700"
                        : "bg-electric-50 text-electric-700"
                    }`}>
                    {guide.locale === "en-US" ? "English" : "Shqip"}
                  </span>
                  <span className="text-sm text-muted">
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

                <h3 className="mt-5 text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                  {guide.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {guide.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {guide.secondaryKeywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-lg border border-border bg-surface-raised px-3 py-1 text-xs font-medium text-muted-strong">
                      {keyword}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                  Lexo artikullin
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
