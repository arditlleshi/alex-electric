import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import TrackedContactLink from "./TrackedContactLink";
import { CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/contact";
import type { GuidePage, ProofItem, ServicePage } from "@/lib/content/types";

type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

function SectionCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <section className="card-modern p-6">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <ul className="mt-4 space-y-3 text-gray-600">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProofCard({
  proof,
  locale,
}: {
  proof: ProofItem;
  locale: ServicePage["locale"];
}) {
  const headingId = `proof-card-${proof.id}`;

  return (
    <article className="card-modern overflow-hidden p-8" aria-labelledby={headingId}>
      <header>
        <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
          {proof.eyebrow}
        </div>
        <h2 id={headingId} className="mt-4 text-3xl font-bold text-gray-900">
          {proof.title}
        </h2>
        <p className="mt-2 text-base text-gray-500">
          {proof.city} | {proof.propertyType}
        </p>
      </header>
      <p className="mt-5 text-lg leading-relaxed text-gray-600">
        {proof.summary}
      </p>
      <ul className="mt-6 space-y-3 text-gray-600">
        {proof.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <Zap className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 rounded-2xl bg-gray-50 px-5 py-4 text-base leading-relaxed text-gray-700">
        <strong className="text-gray-900">
          {locale === "en-US" ? "Result:" : "Rezultati:"}
        </strong>{" "}
        {proof.outcome}
      </p>
    </article>
  );
}

function RelatedGrid({
  title,
  links,
  locale,
}: {
  title: string;
  links: RelatedLink[];
  locale: ServicePage["locale"];
}) {
  if (links.length === 0) {
    return null;
  }

  const headingId = `${title.toLowerCase().replaceAll(/\s+/g, "-")}-heading`;

  return (
    <section className="mt-16" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-3xl font-bold text-gray-900">
        {title}
      </h2>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href} className="h-full">
            <article className="card-modern h-full">
              <Link
                href={link.href}
                className="group block h-full p-6 transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                  {link.title}
                </h3>
                <p className="mt-3 text-gray-600">{link.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  {locale === "en-US" ? "Read more" : "Lexo me shume"}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactBar({
  source,
  locale,
}: {
  source:
    | "service-page"
    | "english-service-page"
    | "guide-page"
    | "english-page";
  locale: ServicePage["locale"];
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <TrackedContactLink
        href={CONTACT_PHONE_HREF}
        channel="phone"
        source={source}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
        <Phone className="h-4 w-4" />
        {locale === "en-US" ? "Call now" : "Telefono tani"}
      </TrackedContactLink>
      <TrackedContactLink
        href={CONTACT_WHATSAPP_HREF}
        channel="whatsapp"
        source={source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50">
        WhatsApp
      </TrackedContactLink>
    </div>
  );
}

export function ServicePageTemplate({
  service,
  proof,
  breadcrumbs,
  relatedServices,
  relatedGuides,
}: {
  service: ServicePage;
  proof: ProofItem;
  breadcrumbs: { label: string; href?: string }[];
  relatedServices: RelatedLink[];
  relatedGuides: RelatedLink[];
}) {
  const locale = service.locale;
  const isEnglish = locale === "en-US";
  const source = isEnglish ? "english-service-page" : "service-page";

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="card-modern overflow-hidden p-8 sm:p-10">
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                {service.hero}
              </p>
              <ContactBar source={source} locale={locale} />
            </div>

            <aside className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
              <h2 className="text-lg font-bold text-gray-900">
                {isEnglish ? "What this page covers" : "Cfare mbulon kjo faqe"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                {service.summary}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {service.secondaryKeywords.slice(0, 4).map((keyword) => (
                  <li key={keyword} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{keyword}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-white px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {isEnglish ? "Primary keyword" : "Fjala kryesore"}
                </p>
                <p className="mt-2 font-semibold text-gray-900">
                  {service.primaryKeyword}
                </p>
              </div>
            </aside>
          </div>
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <SectionCard
            title={isEnglish ? "When to call us" : "Kur duhet te na kontaktoni"}
            items={service.whenToCall}
          />
          <SectionCard
            title={
              isEnglish
                ? "Common problems we solve"
                : "Problemet qe zgjidhim me shpesh"
            }
            items={service.problems}
          />
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionCard
            title={isEnglish ? "How the work happens" : "Si zhvillohet puna"}
            items={service.processSteps}
          />
          <section className="card-modern p-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEnglish ? "Areas covered" : "Zonat qe mbulojme"}
            </h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              {service.serviceAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-gray-50 px-4 py-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                {isEnglish ? "Next step" : "Hapi i radhes"}
              </h3>
              <p className="mt-3 text-gray-700">{service.callToAction}</p>
            </div>
          </section>
        </section>

        <div className="mt-12">
          <ProofCard proof={proof} locale={locale} />
        </div>

        <section className="mt-16" aria-labelledby="service-faq-heading">
          <div className="text-center">
            <h2 id="service-faq-heading" className="text-3xl font-bold text-gray-900">
              {isEnglish
                ? "Frequently asked questions"
                : "Pyetjet me te shpeshta"}
            </h2>
          </div>
          <div className="mt-8">
            <FAQAccordion
              faqs={service.faqs.map((item) => ({
                question: item.question,
                answer: `<p>${item.answer}</p>`,
              }))}
            />
          </div>
        </section>

        <RelatedGrid
          title={isEnglish ? "Related services" : "Sherbime te lidhura"}
          links={relatedServices}
          locale={locale}
        />
        <RelatedGrid
          title={isEnglish ? "Helpful guides" : "Udhezues te dobishem"}
          links={relatedGuides}
          locale={locale}
        />
      </div>
    </main>
  );
}

export function GuidePageTemplate({
  guide,
  proof,
  breadcrumbs,
  relatedServices,
  relatedGuides,
}: {
  guide: GuidePage;
  proof: ProofItem;
  breadcrumbs: { label: string; href?: string }[];
  relatedServices: RelatedLink[];
  relatedGuides: RelatedLink[];
}) {
  const isEnglish = guide.locale === "en-US";

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 pt-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="card-modern p-8 sm:p-10">
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
            {guide.eyebrow}
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            {guide.excerpt}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-500">
            <CalendarDays className="h-4 w-4" />
            {new Date(guide.date).toLocaleDateString(
              isEnglish ? "en-US" : "sq-AL",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </p>
          <ContactBar source="guide-page" locale={guide.locale} />
        </header>

        <article className="mt-12 space-y-10">
          {guide.sections.map((section) => (
            <section key={section.title} className="card-modern p-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-gray-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-5 space-y-3 text-gray-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>

        <div className="mt-12">
          <ProofCard proof={proof} locale={guide.locale} />
        </div>

        <section className="mt-16" aria-labelledby="guide-faq-heading">
          <div className="text-center">
            <h2 id="guide-faq-heading" className="text-3xl font-bold text-gray-900">
              {isEnglish
                ? "Frequently asked questions"
                : "Pyetjet me te shpeshta"}
            </h2>
          </div>
          <div className="mt-8">
            <FAQAccordion
              faqs={guide.faqs.map((item) => ({
                question: item.question,
                answer: `<p>${item.answer}</p>`,
              }))}
            />
          </div>
        </section>

        <RelatedGrid
          title={isEnglish ? "Related services" : "Sherbime te lidhura"}
          links={relatedServices}
          locale={guide.locale}
        />
        <RelatedGrid
          title={isEnglish ? "More guides" : "Me shume udhezues"}
          links={relatedGuides}
          locale={guide.locale}
        />
      </div>
    </main>
  );
}

export function ServiceHubTemplate({
  title,
  description,
  cards,
  breadcrumbs,
  locale = "sq-AL",
}: {
  title: string;
  description: string;
  cards: RelatedLink[];
  breadcrumbs: { label: string; href?: string }[];
  locale?: ServicePage["locale"];
}) {
  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <header className="card-modern p-8 sm:p-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            {description}
          </p>
        </header>

        <section className="mt-10" aria-labelledby="service-hub-list-heading">
          <h2 id="service-hub-list-heading" className="sr-only">
            {locale === "en-US" ? "Service pages" : "Faqet e sherbimeve"}
          </h2>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.href} className="h-full">
                <article className="card-modern h-full">
                  <Link
                    href={card.href}
                    className="group block h-full p-6 transition-transform duration-300 hover:scale-[1.02]">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-gray-600">{card.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                      {locale === "en-US" ? "View page" : "Shiko faqen"}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
