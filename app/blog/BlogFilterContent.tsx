import Link from "next/link";
import { guidePages } from "@/lib/content/guides";

type BlogLanguage = "all" | "sq" | "en";

function getNormalizedLang(lang: string | undefined): BlogLanguage {
  if (lang === "sq" || lang === "en") {
    return lang;
  }

  return "all";
}

function getFilteredGuides(lang: BlogLanguage) {
  if (lang === "all") {
    return guidePages;
  }

  return guidePages.filter((guide) =>
    lang === "en" ? guide.locale === "en-US" : guide.locale === "sq-AL",
  );
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
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          active
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-blue-50"
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
          <article className="card-modern h-full">
            <Link
              href={`/blog/${guide.slug}`}
              className="group block h-full p-6 transition-transform duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                  {guide.locale === "en-US" ? "English" : "Shqip"}
                </span>
                <time
                  className="text-sm text-gray-500"
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
              <h2 className="mt-4 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                {guide.title}
              </h2>
              <p className="mt-3 text-gray-600">{guide.excerpt}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {guide.secondaryKeywords.slice(0, 3).map((keyword) => (
                  <li key={keyword}>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {keyword}
                    </span>
                  </li>
                ))}
              </ul>
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
          Blog guides
        </h2>
        <GuideCardList guides={filteredGuides} />
      </section>
    </>
  );
}

export default async function BlogFilterContent({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang } = await searchParams;

  return <BlogFilterSection lang={getNormalizedLang(lang)} />;
}
