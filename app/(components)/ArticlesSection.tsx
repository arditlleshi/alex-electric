import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guidePages } from "@/lib/content/guides";

const MAX_GUIDES = 6;
const PRIORITY_GUIDE_SLUGS = [
  "sa-kushton-instalimi-elektrik-ne-apartament",
  "si-zgjidhet-paneli-elektrik",
  "si-zgjidhet-karikuesi-ev-per-shtepi",
  "what-to-check-before-buying-an-apartment-in-tirana-electrical-system-edition",
  "can-you-install-an-ev-charger-in-an-apartment-building-in-albania",
  "how-to-hire-an-electrician-in-tirana-as-a-foreign-resident",
] as const;

const guidePriority = new Map<string, number>(
  PRIORITY_GUIDE_SLUGS.map((slug, index) => [slug, index]),
);

function sortGuidesForPriority<T extends (typeof guidePages)[number]>(guides: T[]) {
  return [...guides].sort((left, right) => {
    const leftPriority = guidePriority.get(left.slug) ?? Number.MAX_SAFE_INTEGER;
    const rightPriority = guidePriority.get(right.slug) ?? Number.MAX_SAFE_INTEGER;

    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }

    return Date.parse(right.date) - Date.parse(left.date);
  });
}

const homepageGuides = sortGuidesForPriority([...guidePages]).slice(0, MAX_GUIDES);

export default function ArticlesSection() {
  return (
    <section
      id="articles"
      className="border-t border-border bg-surface-raised">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Këshilla elektrike
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Këshilla praktike për probleme elektrike në shtëpi dhe biznes
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Lexoni artikuj të thjeshtë për riparime elektrike, instalime,
              siguresa, priza, panel elektrik, karikues EV dhe siguri në
              shtëpi ose në ambient pune.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              Nëse doni të kuptoni më mirë problemin para se të telefononi një
              elektricist, nisni nga udhëzuesit kryesorë për apartament,
              panel, EV dhe kontrolle para blerjes ose instalimit.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
              Shiko të gjithë artikujt
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/blog?lang=en"
              className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-muted transition-colors duration-200 hover:text-teal-700">
              English guides
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
