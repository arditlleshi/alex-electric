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
import WhatsAppIcon from "./WhatsAppIcon";
import { CONTACT_PHONE_HREF, CONTACT_WHATSAPP_HREF } from "@/lib/contact";
import type { GuidePage, ProofItem, ServicePage } from "@/lib/content/types";

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

function ProofCard({
  proof,
  locale,
}: {
  proof: ProofItem;
  locale: ServicePage["locale"];
}) {
  const headingId = `proof-card-${proof.id}`;

  return (
    <article
      className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft"
      aria-labelledby={headingId}>
      <div className="border-b border-border px-6 py-6 sm:px-8">
        <span className="inline-flex min-h-8 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-xs font-semibold text-electric-700">
          {proof.eyebrow}
        </span>
        <h2
          id={headingId}
          className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          {proof.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          {proof.city} | {proof.propertyType}
        </p>
      </div>

      <div className="px-6 py-6 sm:px-8">
        <p className="text-base leading-7 text-muted sm:text-lg">{proof.summary}</p>
        <ul className="mt-6 space-y-3">
          {proof.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-muted sm:text-base">
              <Zap
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-signal-600"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-lg border border-border bg-surface-raised px-5 py-4 text-sm leading-6 text-muted sm:text-base">
          <strong className="text-foreground">
            {locale === "en-US" ? "Result:" : "Rezultati:"}
          </strong>{" "}
          {proof.outcome}
        </div>
      </div>
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

function InlineLinkPanel({
  title,
  description,
  links,
  locale,
}: {
  title: string;
  description: string;
  links: RelatedLink[];
  locale: ServicePage["locale"];
}) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-lg border border-border bg-surface-raised p-6">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group block rounded-lg border border-border bg-surface px-4 py-4 transition-[background-color,border-color,box-shadow] duration-200 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
              <h3 className="font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                {link.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{link.description}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                {locale === "en-US" ? "Open page" : "Hap faqen"}
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
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
    <PageShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="rounded-lg border border-border bg-surface shadow-soft">
          <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="min-w-0">
              <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
                {isEnglish ? "Service page" : "Faqe sherbimi"}
              </span>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
                {service.hero}
              </p>
              <ContactBar source={source} locale={locale} />
              <InlineLinkPanel
                title={
                  isEnglish
                    ? "Useful guides before you book"
                    : "Udhezues te dobishem para se te rezervoni"
                }
                description={
                  isEnglish
                    ? "If this matches your problem or upgrade, open one guide before you call so the first conversation starts with clearer context."
                    : "Nese kjo perputhet me problemin ose permiresimin qe kerkoni, hapni nje guide para telefonates qe biseda e pare te nise me kontekst me te qarte."
                }
                links={relatedGuides.slice(0, 3)}
                locale={locale}
              />
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
                  {isEnglish ? "Best next step" : "Hapi me i mire"}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted sm:text-base">{service.callToAction}</p>
              </div>
            </MutedCard>
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
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish ? "Areas covered" : "Zonat qe mbulojme"}
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
                {isEnglish ? "Next step" : "Hapi i radhes"}
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
                : "Cfare ndihmon para vizites"}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "The fastest visit starts with a clear description of the symptom: which room is affected, when the problem started, whether breakers trip, and whether there is heat, smell, or visible sparking. That helps separate a quick repair from a wider panel or load problem before the electrician arrives."
                : "Nderhyrja me e shpejte nis kur simptoma pershkruhet qarte: cili ambient preket, kur nisi problemi, nese bien siguresat dhe nese ka nxehje, ere djegieje ose shkendija. Kjo ndihmon te ndahet nje riparim i thjeshte nga nje problem me i gjere ne panel ose ne ngarkese para mberritjes se elektricistit."}
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "In Tirana and Durres many properties combine older wiring, renovation leftovers, and newer heavy appliances on the same installation. A few useful details in the first call usually lead to a shorter visit, a clearer quote, and a safer first intervention."
                : "Ne Tirane dhe Durres shume prona bashkojne instalime me te vjetra, punime rinovimi te pjesshme dhe pajisje te reja me ngarkese te larte ne te njejtin rrjet. Disa detaje te dobishme ne telefonaten e pare zakonisht e bejne viziten me te shkurter, preventivin me te qarte dhe nderhyrjen fillestare me te sigurt."}
            </p>
          </SurfaceCard>
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish
                ? "Useful details to prepare"
                : "Detaje te dobishme per t'i pergatitur"}
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
                    "Lloji i prones dhe mosha e instalimit nese e dini.",
                    "Cilat ambiente, priza, drita ose pajisje preken nga problemi.",
                    "Nese defekti eshte i vazhdueshem, vjen me nderprerje ose shfaqet nen ngarkese.",
                    "Cdo rinovim, pajisje e re, plan EV ose pune solar qe lidhet me situaten.",
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

        <div className="mt-12">
          <ProofCard proof={proof} locale={locale} />
        </div>

        <section className="mt-16" aria-labelledby="service-faq-heading">
          <div className="text-center">
            <h2
              id="service-faq-heading"
              className="text-3xl font-semibold text-foreground sm:text-4xl">
              {isEnglish ? "Frequently asked questions" : "Pyetjet me te shpeshta"}
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
    </PageShell>
  );
}

export function GuidePageTemplate({
  guide,
  proof,
  leadServices,
  breadcrumbs,
  relatedServices,
  relatedGuides,
}: {
  guide: GuidePage;
  proof: ProofItem;
  leadServices: RelatedLink[];
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
          <InlineLinkPanel
            title={
              isEnglish
                ? "Need local help with this issue?"
                : "Keni nevoje per ndihme lokale me kete problem?"
            }
            description={
              isEnglish
                ? "If this guide matches the fault or upgrade you are dealing with, open the most relevant service page before you call."
                : "Nese kjo guide perputhet me defektin ose permiresimin qe po kerkoni, hapni fillimisht faqen e sherbimit me te afert."
            }
            links={leadServices}
            locale={guide.locale}
          />
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
                : `Si ta perdorni kete guide ne ${guide.city ?? "Tirane"}`}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "Use this page as a pre-call checklist, not as a replacement for an on-site diagnosis. In Tirana and Durres, the same symptom can come from ageing apartment wiring, an overloaded panel, or a quick repair that never solved the root cause."
                : "Perdoreni kete faqe si liste kontrolli para telefonates, jo si zevendesim per diagnostikimin ne terren. Ne Tirane dhe Durres i njejti simptom mund te vije nga instalimi i vjeter i apartamentit, nje panel i mbingarkuar ose nje riparim i shpejte qe nuk e ka zgjidhur shkakun."}
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "Open one service page and one supporting page before you call. That usually gives enough context to describe the issue clearly and understand the likely scope."
                : "Hapni nje faqe sherbimi dhe nje faqe mbeshtetese para telefonates. Zakonisht kjo mjafton per ta pershkruar qarte problemin dhe per te kuptuar fushen e mundshme te punes."}
            </p>
          </SurfaceCard>
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish ? "Details worth checking" : "Detaje qe vlejne te kontrollohen"}
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
                    "Lloji i prones dhe nese instalimi eshte prekur me pare nga rinovime.",
                    "Simptoma e sakte, ambienti dhe ora kur shfaqet problemi.",
                    "Nese paneli, prizat ose dritat japin nxehje, ere djegieje ose bien shpesh.",
                    "Cdo pajisje e re, plan solar, plan EV ose ndryshim qiraje qe lidhet me situaten.",
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
            <p className="mt-5 text-sm leading-6 text-muted">
              {isEnglish
                ? "These checks make the first call more useful and help decide whether you need a repair, an inspection, or a larger upgrade."
                : "Keto kontrolle e bejne telefonaten e pare me te dobishme dhe ndihmojne te kuptohet nese ju duhet riparim, inspektim apo nje permiresim me i madh."}
            </p>
          </MutedCard>
        </section>

        <div className="mt-12">
          <ProofCard proof={proof} locale={guide.locale} />
        </div>

        <section className="mt-16" aria-labelledby="guide-faq-heading">
          <div className="text-center">
            <h2
              id="guide-faq-heading"
              className="text-3xl font-semibold text-foreground sm:text-4xl">
              {isEnglish ? "Frequently asked questions" : "Pyetjet me te shpeshta"}
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
}: {
  title: string;
  description: string;
  introParagraphs?: string[];
  highlights?: string[];
  cards: RelatedLink[];
  breadcrumbs: { label: string; href?: string }[];
  locale?: ServicePage["locale"];
}) {
  const isEnglish = locale === "en-US";

  return (
    <PageShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <header className="rounded-lg border border-border bg-surface shadow-soft p-8 sm:p-10">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
            {isEnglish ? "Service hub" : "Qendra e sherbimeve"}
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
                  {isEnglish
                    ? "What this hub helps you find"
                    : "Cfare ju ndihmon te gjeni kjo qender"}
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
              {isEnglish ? "How to use this hub" : "Si ta perdorni kete qender"}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "Start with the page that matches the real situation, not only the broad keyword. Some visitors need a fault diagnosis, others need a full installation, and others are comparing EV, solar, rentals, or business support."
                : "Filloni me faqen qe perputhet me situaten reale, jo vetem me fjalen e pergjithshme. Disa vizitore kane nevoje per diagnostikim defekti, te tjere per instalim te plote, dhe te tjere po krahasojne EV, solar, prona me qira ose sherbime per biznes."}
            </p>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {isEnglish
                ? "After opening a main page, use one supporting guide or supporting service page to compare property type, timing, and next-step work."
                : "Pasi te hapni nje faqe kryesore, perdorni edhe nje guide ose nje faqe mbeshtetese per te krahasuar llojin e prones, kohen dhe punen qe vjen me pas."}
            </p>
          </SurfaceCard>
          <MutedCard>
            <h2 className="text-2xl font-semibold text-foreground">
              {isEnglish
                ? "Strong pages to open first"
                : "Faqe te forta per t'i hapur te parat"}
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
              {isEnglish
                ? "Compare one main page and one supporting page before you call. That usually gives enough context to describe the issue clearly."
                : "Krahasoni nje faqe kryesore dhe nje faqe mbeshtetese para telefonates. Zakonisht kjo mjafton per ta pershkruar qarte problemin."}
            </p>
          </MutedCard>
        </section>

        <section className="mt-10" aria-labelledby="service-hub-list-heading">
          <h2 id="service-hub-list-heading" className="sr-only">
            {isEnglish ? "Service pages" : "Faqet e sherbimeve"}
          </h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
