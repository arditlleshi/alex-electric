"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { guidePages } from "@/lib/content/guides";

type BlogLanguage = "all" | "sq" | "en";
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

function getNormalizedLang(lang: string | undefined): BlogLanguage {
  if (lang === "sq" || lang === "en") {
    return lang;
  }

  return "all";
}

function getFilteredGuides(lang: BlogLanguage) {
  const filtered = lang === "all"
    ? guidePages
    : guidePages.filter((guide) =>
    lang === "en" ? guide.locale === "en-US" : guide.locale === "sq-AL",
  );

  return [...filtered].sort((left, right) => {
    const leftPriority = guidePriority.get(left.slug) ?? Number.MAX_SAFE_INTEGER;
    const rightPriority = guidePriority.get(right.slug) ?? Number.MAX_SAFE_INTEGER;

    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }

    return Date.parse(right.date) - Date.parse(left.date);
  });
}

function FilterLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={`inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-semibold transition-[background-color,border-color,color] ${
          active
            ? "bg-surface-inverse text-white"
            : "border border-border bg-surface text-muted-strong hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700"
        }`}>
        {label}
      </Link>
    </li>
  );
}

function GuideCardList({
  guides,
}: {
  guides: typeof guidePages;
}) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <li key={guide.slug} className="h-full">
          <article className="h-full rounded-lg border border-border bg-surface shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
            <Link
              href={`/blog/${guide.slug}`}
              className="group block h-full p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex min-h-8 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-xs font-semibold text-electric-700">
                  {guide.locale === "en-US" ? "English" : "Shqip"}
                </span>
                <time
                  className="text-sm text-muted"
                  dateTime={guide.date}>
                  {new Date(guide.date).toLocaleDateString(
                    guide.locale === "en-US" ? "en-US" : "sq-AL",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </time>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                {guide.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{guide.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                Lexo udhezuesin
              </span>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function BlogFilterSection({
  lang = "all",
}: {
  lang?: BlogLanguage;
}) {
  const normalizedLang = getNormalizedLang(lang);
  const filteredGuides = getFilteredGuides(normalizedLang);

  return (
    <>
      <nav aria-label="Blog language filter" className="mt-6">
        <ul className="flex flex-wrap gap-3">
          <FilterLink href="/blog" label="Te gjitha" active={normalizedLang === "all"} />
          <FilterLink href="/blog?lang=sq" label="Shqip" active={normalizedLang === "sq"} />
          <FilterLink
            href="/blog?lang=en"
            label="English"
            active={normalizedLang === "en"}
          />
        </ul>
      </nav>
      <section className="mt-10" aria-labelledby="blog-guides-heading">
        <h2 id="blog-guides-heading" className="sr-only">
          Udhezuesit e blogut
        </h2>
        <GuideCardList guides={filteredGuides} />
      </section>
    </>
  );
}

export default function BlogFilterContent() {
  const searchParams = useSearchParams();
  const lang = getNormalizedLang(searchParams.get("lang") ?? undefined);

  return <BlogFilterSection lang={lang} />;
}
