import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Phone,
} from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import FAQAccordion from "./FAQAccordion";
import TrackedContactLink from "./TrackedContactLink";
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/contact";
import type { GuidePage, ServicePage } from "@/lib/content/types";

type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

function PageShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: ServicePage["locale"];
}) {
  return (
    <main
      lang={locale === "en-US" ? "en" : "sq"}
      className="bg-background pb-20 pt-24">
      {children}
    </main>
  );
}

function SurfaceCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8 ${className}`.trim()}>
      {children}
    </section>
  );
}

function MutedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={`rounded-lg border border-border bg-surface-raised p-6 shadow-sm sm:p-8 ${className}`.trim()}>
      {children}
    </aside>
  );
}

function SectionCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <SurfaceCard>
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SurfaceCard>
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
      <h2
        id={headingId}
        className="text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href} className="h-full">
            <article className="h-full rounded-lg border border-border bg-surface shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
              <Link href={link.href} className="group block h-full p-6">
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                  {locale === "en-US" ? "Open page" : "Hap faqen"}
                  <ChevronRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
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
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <TrackedContactLink
        href={CONTACT_PHONE_HREF}
        channel="phone"
        source={source}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
        <Phone aria-hidden="true" className="h-4 w-4" />
        {locale === "en-US" ? "Call now" : "Telefono tani"}
      </TrackedContactLink>
      <TrackedContactLink
        href={CONTACT_WHATSAPP_HREF}
        channel="whatsapp"
        source={source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-teal-500 hover:bg-surface-muted hover:text-teal-700">
        <WhatsAppIcon aria-hidden="true" className="h-4 w-4" />
        WhatsApp
      </TrackedContactLink>
    </div>
  );
}

export function ServicePageTemplate({
  service,
  breadcrumbs,
  relatedServices,
  relatedGuides,
}: {
  service: ServicePage;
  breadcrumbs: { label: string; href?: string }[];
  relatedServices: RelatedLink[];
  relatedGuides: RelatedLink[];
}) {
  const locale = service.locale;
  const isEnglish = locale === "en-US";
  const source = isEnglish ? "english-service-page" : "service-page";
  const isMinimalSolarPage = service.slug === "panele-diellore-tirane";

  if (isMinimalSolarPage) {
    return (
      <PageShell locale={locale}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <header className="rounded-lg border border-border bg-surface shadow-soft">
            <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="min-w-0">
                <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
                  Projektim / Instalim / Mirëmbajtje
                </span>
                <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl">
                  {service.h1}
                </h1>
                <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
                  {service.hero}
                </p>
                <ContactBar source={source} locale={locale} />
              </div>

              <MutedCard className="border-electric-100 bg-electric-50/60 p-6">
                <h2 className="text-xl font-semibold text-foreground">
                  Çfarë përfshin
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {service.whenToCall.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-electric-700"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-lg border border-electric-100 bg-surface px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Zona e shërbimit
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                    {service.serviceAreas.join(", ")}
                  </p>
                </div>
              </MutedCard>
            </div>
          </header>

          <section className="mt-12 grid gap-6 lg:grid-cols-2">
            <SectionCard
              title="Pse klientët na zgjedhin"
              items={service.problems}
            />
            <SectionCard title="Si punojmë" items={service.processSteps} />
          </section>

          <section className="mt-16" aria-labelledby="service-faq-heading">
            <div className="text-center">
              <h2
                id="service-faq-heading"
                className="text-3xl font-semibold text-foreground sm:text-4xl">
                Pyetjet më të shpeshta
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

          {relatedServices.length ? (
            <section className="mt-16" aria-labelledby="related-service-links-heading">
              <h2
                id="related-service-links-heading"
                className="text-3xl font-semibold text-foreground sm:text-4xl">
                Shërbime të lidhura
              </h2>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {relatedServices.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex min-h-20 items-center justify-between rounded-lg border border-border bg-surface px-5 py-4 text-base font-semibold text-foreground transition-[background-color,border-color,box-shadow] duration-200 hover:border-border-strong hover:bg-surface-raised hover:text-electric-700 hover:shadow-soft">
                      <span>{link.title}</span>
                      <ChevronRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="rounded-lg border border-border bg-surface shadow-soft">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0">
              <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
                {isEnglish ? "Service page" : "Faqe shërbimi"}
              </span>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
                {service.hero}
              </p>
              <ContactBar source={source} locale={locale} />
            </div>

            <MutedCard className="border-electric-100 bg-electric-50/60 p-6">
              <h2 className="text-xl font-semibold text-foreground">
                {isEnglish ? "Good fit for" : "E pershtatshme per"}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-3">
                {service.whenToCall.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-electric-700"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg border border-electric-100 bg-surface px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {isEnglish ? "Best next step" : "Hapi më i mirë"}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted sm:text-base">{service.callToAction}</p>
              </div>
            </MutedCard>
          </div>
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <SectionCard
            title={isEnglish ? "When to call us" : "Kur duhet të na kontaktoni"}
            items={service.whenToCall}
          />
          <SectionCard
            title={
              isEnglish
                ? "Common problems we solve"
                : "Problemet që zgjidhim më shpesh"
            }
            items={service.problems}
          />
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionCard
            title={isEnglish ? "How the work happens" : "Si zhvillohet puna"}
            items={service.processSteps}
          />
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish ? "Areas covered" : "Zonat që mbulojmë"}
            </h2>
            <ul className="mt-5 space-y-3">
              {service.serviceAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-border bg-surface px-4 py-4 text-sm leading-6 text-muted">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {isEnglish ? "Next step" : "Hapi i radhës"}
              </p>
              <p className="mt-3">{service.callToAction}</p>
            </div>
          </MutedCard>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish
                ? "What helps before the visit"
                : "Çfarë ndihmon para vizitës"}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "The fastest visit starts with a clear description of the symptom: which room is affected, when the problem started, whether breakers trip, and whether there is heat, smell, or visible sparking. That helps separate a quick repair from a wider panel or load problem before the electrician arrives."
                : "Ndërhyrja më e shpejtë nis kur simptoma përshkruhet qartë: cili ambient preket, kur nisi problemi, nëse bien siguresat dhe nëse ka nxehje, erë djegieje ose shkëndija. Kjo ndihmon të ndahet një riparim i thjeshtë nga një problem më i gjerë në panel ose në ngarkesë para mbërritjes së elektricistit."}
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "In Tirana and Durres many properties combine older wiring, renovation leftovers, and newer heavy appliances on the same installation. A few useful details in the first call usually lead to a shorter visit, a clearer quote, and a safer first intervention."
                : "Në Tiranë dhe Durrës shumë prona bashkojnë instalime më të vjetra, punime rinovimi të pjesshme dhe pajisje të reja me ngarkesë të lartë në të njëjtin rrjet. Disa detaje të dobishme në telefonatën e parë zakonisht e bëjnë vizitën më të shkurtër, preventivin më të qartë dhe ndërhyrjen fillestare më të sigurt."}
            </p>
          </SurfaceCard>
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish
                ? "Useful details to prepare"
                : "Detaje të dobishme për t'i përgatitur"}
            </h2>
            <ul className="mt-5 space-y-3">
              {(isEnglish
                ? [
                    "Property type and the age of the installation if you know it.",
                    "Which rooms, sockets, lights, or appliances are affected.",
                    "Whether the issue is constant, comes and goes, or appears under load.",
                    "Any recent renovation, new appliance, EV plan, or solar work linked to the issue.",
                  ]
                : [
                    "Lloji i pronës dhe mosha e instalimit nëse e dini.",
                    "Cilat ambiente, priza, drita ose pajisje preken nga problemi.",
                    "Nëse defekti është i vazhdueshëm, vjen me ndërprerje ose shfaqet nën ngarkesë.",
                    "Çdo rinovim, pajisje e re, plan EV ose punë solar që lidhet me situatën.",
                  ]
              ).map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MutedCard>
        </section>

        <section className="mt-16" aria-labelledby="service-faq-heading">
          <div className="text-center">
            <h2
              id="service-faq-heading"
              className="text-3xl font-semibold text-foreground sm:text-4xl">
              {isEnglish ? "Frequently asked questions" : "Pyetjet më të shpeshta"}
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
          title={isEnglish ? "Related services" : "Shërbime të lidhura"}
          links={relatedServices}
          locale={locale}
        />
        <RelatedGrid
          title={isEnglish ? "Helpful guides" : "Udhëzues të dobishëm"}
          links={relatedGuides}
          locale={locale}
        />
      </div>
    </PageShell>
  );
}

export function GuidePageTemplate({
  guide,
  breadcrumbs,
  relatedServices,
  relatedGuides,
}: {
  guide: GuidePage;
  breadcrumbs: { label: string; href?: string }[];
  relatedServices: RelatedLink[];
  relatedGuides: RelatedLink[];
}) {
  const isEnglish = guide.locale === "en-US";

  return (
    <PageShell locale={guide.locale}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="rounded-lg border border-border bg-surface shadow-soft p-8 sm:p-10">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
            {guide.eyebrow}
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
            {guide.excerpt}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
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

        <article className="mt-12 space-y-8">
          {guide.sections.map((section) => (
            <SurfaceCard key={section.title}>
              <h2 className="text-3xl font-semibold text-foreground">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-muted sm:text-lg">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </SurfaceCard>
          ))}
        </article>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish
                ? `How to use this guide in ${guide.city ?? "Tirana"}`
                : `Si ta përdorni këtë guidë në ${guide.city ?? "Tiranë"}`}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "Use this page as a pre-call checklist, not as a replacement for an on-site diagnosis. In Tirana and Durres, the same symptom can come from ageing apartment wiring, an overloaded panel, or a quick repair that never solved the root cause."
                : "Përdoreni këtë faqe si listë kontrolli para telefonatës, jo si zëvendësim për diagnostikimin në terren. Në Tiranë dhe Durrës i njëjti simptom mund të vijë nga instalimi i vjetër i apartamentit, një panel i mbingarkuar ose një riparim i shpejtë që nuk e ka zgjidhur shkakun."}
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "Open one service page and one supporting page before you call. That usually gives enough context to describe the issue clearly and understand the likely scope."
                : "Hapni një faqe shërbimi dhe një faqe mbështetëse para telefonatës. Zakonisht kjo mjafton për ta përshkruar qartë problemin dhe për të kuptuar fushën e mundshme të punës."}
            </p>
          </SurfaceCard>
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish ? "Details worth checking" : "Detaje që vlejnë të kontrollohen"}
            </h2>
            <ul className="mt-5 space-y-3">
              {(isEnglish
                ? [
                    "Property type and whether the installation has been renovated before.",
                    "The exact symptom, room, and time of day when it appears.",
                    "Whether the panel, sockets, or lights show heat, smell, or repeated trips.",
                    "Any new appliance, solar plan, EV plan, or tenancy change linked to the issue.",
                  ]
                : [
                    "Lloji i pronës dhe nëse instalimi është prekur më parë nga rinovime.",
                    "Simptoma e saktë, ambienti dhe ora kur shfaqet problemi.",
                    "Nëse paneli, prizat ose dritat japin nxehje, erë djegieje ose bien shpesh.",
                    "Çdo pajisje e re, plan solar, plan EV ose ndryshim qiraje që lidhet me situatën.",
                  ]
              ).map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </MutedCard>
        </section>

        <section className="mt-16" aria-labelledby="guide-faq-heading">
          <div className="text-center">
            <h2
              id="guide-faq-heading"
              className="text-3xl font-semibold text-foreground sm:text-4xl">
              {isEnglish ? "Frequently asked questions" : "Pyetjet më të shpeshta"}
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
          title={isEnglish ? "Related services" : "Shërbime të lidhura"}
          links={relatedServices}
          locale={guide.locale}
        />
        <RelatedGrid
          title={isEnglish ? "More guides" : "Më shumë udhëzues"}
          links={relatedGuides}
          locale={guide.locale}
        />
      </div>
    </PageShell>
  );
}

export function ServiceHubTemplate({
  title,
  description,
  introParagraphs,
  highlights,
  cards,
  breadcrumbs,
  locale = "sq-AL",
  eyebrow,
  highlightsTitle,
  overviewTitle,
  overviewParagraphs,
  featuredTitle,
  featuredDescription,
  cardsSectionTitle,
}: {
  title: string;
  description: string;
  introParagraphs?: string[];
  highlights?: string[];
  cards: RelatedLink[];
  breadcrumbs: { label: string; href?: string }[];
  locale?: ServicePage["locale"];
  eyebrow?: string;
  highlightsTitle?: string;
  overviewTitle?: string;
  overviewParagraphs?: string[];
  featuredTitle?: string;
  featuredDescription?: string;
  cardsSectionTitle?: string;
}) {
  const isEnglish = locale === "en-US";
  const resolvedEyebrow =
    eyebrow ?? (isEnglish ? "Electrical services" : "Shërbime elektrike");
  const resolvedHighlightsTitle =
    highlightsTitle ??
    (isEnglish ? "Why customers call us" : "Pse klientët na kontaktojnë");
  const resolvedOverviewTitle =
    overviewTitle ??
    (isEnglish ? "Main electrical services" : "Shërbimet kryesore");
  const resolvedOverviewParagraphs =
    overviewParagraphs ??
    (isEnglish
      ? [
          "Choose the page that matches the work you need most: emergency electrician, repairs, installations, electrical panels, EV chargers, solar work, apartment jobs, or business support.",
          "You can also open more specific pages for rentals, villas, offices, hotels, lighting, and smart home upgrades.",
        ]
      : [
          "Zgjidhni faqen që përputhet me punën që ju duhet më shumë: urgjencë elektrike, riparim, instalim, panel elektrik, karikues EV, solar, apartament ose shërbim për biznes.",
          "Më poshtë gjeni edhe faqe më specifike për prona me qira, vila, zyra, hotele, ndriçim dhe smart home.",
        ]);
  const resolvedFeaturedTitle =
    featuredTitle ??
    (isEnglish ? "Most requested pages" : "Faqet më të kërkuara");
  const resolvedFeaturedDescription =
    featuredDescription ??
    (isEnglish
      ? "These pages cover the most common requests from customers in Tirana and Durres."
      : "Këto faqe mbulojnë kërkesat më të shpeshta nga klientët në Tiranë dhe Durrës.");
  const resolvedCardsSectionTitle =
    cardsSectionTitle ?? (isEnglish ? "All electrical services" : "Të gjitha shërbimet");

  return (
    <PageShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="rounded-lg border border-border bg-surface shadow-soft p-8 sm:p-10">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
            {resolvedEyebrow}
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
            {description}
          </p>
        </header>

        {introParagraphs?.length ? (
          <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <SurfaceCard>
              {introParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-base leading-7 text-muted sm:text-lg ${
                    index === 0 ? "" : "mt-4"
                  }`}>
                  {paragraph}
                </p>
              ))}
            </SurfaceCard>
            {highlights?.length ? (
              <MutedCard>
                <h2 className="text-2xl font-semibold text-foreground">
                  {resolvedHighlightsTitle}
                </h2>
                <ul className="mt-5 space-y-3">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </MutedCard>
            ) : null}
          </section>
        ) : null}

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <SurfaceCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {resolvedOverviewTitle}
            </h2>
            {resolvedOverviewParagraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-base leading-7 text-muted sm:text-lg ${
                  index === 0 ? "mt-5" : "mt-4"
                }`}>
                {paragraph}
              </p>
            ))}
          </SurfaceCard>
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {resolvedFeaturedTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {cards.slice(0, 4).map((card) => (
                <li key={card.href} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-electric-700"
                  />
                  <span>{card.title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-muted">
              {resolvedFeaturedDescription}
            </p>
          </MutedCard>
        </section>

        <section className="mt-10" aria-labelledby="service-hub-list-heading">
          <h2 id="service-hub-list-heading" className="text-3xl font-semibold text-foreground sm:text-4xl">
            {resolvedCardsSectionTitle}
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.href} className="h-full">
                <article className="h-full rounded-lg border border-border bg-surface shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
                  <Link href={card.href} className="group block h-full p-6">
                    <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
                      {card.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                      {isEnglish ? "View page" : "Shiko faqen"}
                      <ChevronRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
