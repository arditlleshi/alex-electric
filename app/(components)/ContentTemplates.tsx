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
    <section className="mt-8 rounded-3xl border border-gray-200 bg-white/80 p-6">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group block rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 transition-colors hover:border-blue-200 hover:bg-blue-50">
              <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-blue-700">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{link.description}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                {locale === "en-US" ? "Open page" : "Hap faqen"}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              <InlineLinkPanel
                title={
                  isEnglish
                    ? "Useful guides before you book"
                    : "Udhezues te dobishem para se te rezervoni"
                }
                description={
                  isEnglish
                    ? "If you are comparing options, these short guides answer the common questions people search before calling an electrician."
                    : "Nese po krahasoni opsionet, keto guida u pergjigjen pyetjeve qe kerkohen me shpesh para se te telefononi nje elektricist."
                }
                links={relatedGuides.slice(0, 3)}
                locale={locale}
              />
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

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEnglish
                ? "What helps before the visit"
                : "Cfare ndihmon para vizites"}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {isEnglish
                ? "The fastest visit starts with a clear description of the symptom: which room is affected, when the problem started, whether breakers trip, and whether there is heat, smell, or visible sparking. That helps separate a quick repair from a wider panel or load problem before the electrician arrives."
                : "Nderhyrja me e shpejte nis kur simptoma pershkruhet qarte: cili ambient preket, kur nisi problemi, nese bien siguresat dhe nese ka nxehje, ere djegieje ose shkendija. Kjo ndihmon te ndahet nje riparim i thjeshte nga nje problem me i gjere ne panel ose ne ngarkese para mberritjes se elektricistit."}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {isEnglish
                ? "In Tirana and Durres many properties combine older wiring, renovation leftovers, and newer heavy appliances on the same installation. A few useful details in the first call usually lead to a shorter visit, a clearer quote, and a safer first intervention."
                : "Ne Tirane dhe Durres shume prona bashkojne instalime me te vjetra, punime rinovimi te pjesshme dhe pajisje te reja me ngarkese te larte ne te njejtin rrjet. Disa detaje te dobishme ne telefonaten e pare zakonisht e bejne viziten me te shkurter, preventivin me te qarte dhe nderhyrjen fillestare me te sigurt."}
            </p>
          </article>
          <aside className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEnglish
                ? "Useful details to prepare"
                : "Detaje te dobishme per t'i pergatitur"}
            </h2>
            <ul className="mt-5 space-y-3 text-gray-600">
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
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
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
          <InlineLinkPanel
            title={
              isEnglish
                ? "Need local help with this issue?"
                : "Keni nevoje per ndihme lokale me kete problem?"
            }
            description={
              isEnglish
                ? "If this guide matches the fault, upgrade, or safety question you are dealing with, start with the primary service page below and compare it with one supporting page before you call."
                : "Nese kjo guide perputhet me defektin, instalimin ose kontrollin qe po kerkoni, niseni me faqen kryesore te sherbimit me poshte dhe krahasojeni me nje faqe mbeshtetese para se te telefononi."
            }
            links={leadServices}
            locale={guide.locale}
          />
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

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEnglish
                ? `How to use this guide in ${guide.city ?? "Tirana"}`
                : `Si ta perdorni kete guide ne ${guide.city ?? "Tirane"}`}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {isEnglish
                ? "Use this page as a pre-call checklist, not as a replacement for an on-site diagnosis. In Tirana and Durres, the same symptom can come from ageing apartment wiring, an overloaded panel, or a quick repair that never solved the root cause. The goal is to notice the right warning signs before you book."
                : "Perdoreni kete faqe si liste kontrolli para telefonates, jo si zevendesim per diagnostikimin ne terren. Ne Tirane dhe Durres i njejti simptom mund te vije nga instalimi i vjeter i apartamentit, nje panel i mbingarkuar ose nje riparim i shpejte qe nuk e ka zgjidhur shkakun. Qellimi eshte te dalloni sinjalet e duhura para se te rezervoni."}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {isEnglish
                ? "Open the primary and secondary service pages above before you call. One page helps you choose the first intervention, while the second usually covers the follow-up work people need after the first visit, such as panel upgrades, rewiring, EV preparation, or longer-term maintenance."
                : "Hapni faqen kryesore dhe ate mbeshtetese te sherbimit perpara se te telefononi. Nje faqe ju ndihmon te zgjidhni nderhyrjen e pare, ndersa tjetra zakonisht mbulon punen qe del me pas, si permiresimi i panelit, rishperndarja e qarqeve, pergatitja per EV ose mirembajtja me afat me te gjate."}
            </p>
          </article>
          <aside className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {isEnglish ? "Details worth checking" : "Detaje qe vlejne te kontrollohen"}
            </h2>
            <ul className="mt-5 space-y-3 text-gray-600">
              {(isEnglish
                ? [
                    "The property type and whether the installation has been renovated before.",
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
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              {isEnglish
                ? "These checks make the first call more useful and make it easier to decide whether you need a repair, an inspection, or a larger upgrade."
                : "Keto kontrolle e bejne telefonaten e pare me te dobishme dhe e bejne me te lehte vendimin nese ju duhet riparim, inspektim apo nje permiresim me i madh."}
            </p>
          </aside>
        </section>

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

        {introParagraphs?.length ? (
          <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="card-modern p-8">
              {introParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-lg leading-relaxed text-gray-600 ${
                    index === 0 ? "" : "mt-4"
                  }`}>
                  {paragraph}
                </p>
              ))}
            </article>
            {highlights?.length ? (
              <aside className="card-modern p-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {locale === "en-US"
                    ? "What this hub helps you find"
                    : "Cfare ju ndihmon te gjeni kjo qender"}
                </h2>
                <ul className="mt-5 space-y-3 text-gray-600">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            ) : null}
          </section>
        ) : null}

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {locale === "en-US"
                ? "How to use this hub"
                : "Si ta perdorni kete qender"}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {locale === "en-US"
                ? "Start with the page that matches the real situation, not only the broad keyword. Some visitors need a fault diagnosis, others need a full installation, and others are comparing EV, solar, rentals, or business support. The right first page usually reduces confusion and improves the first call."
                : "Filloni me faqen qe perputhet me situaten reale, jo vetem me fjalen e pergjithshme. Disa vizitore kane nevoje per diagnostikim defekti, te tjere per instalim te plote, dhe te tjere po krahasojne EV, solar, prona me qira ose sherbime per biznes. Faqja e duhur ne fillim zakonisht ul paqartesine dhe e ben telefonaten e pare me me vlere."}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {locale === "en-US"
                ? "After opening a priority page, use the related guides and supporting pages to compare scope, property type, and next-step work. That creates a stronger path from informational searches into service pages instead of leaving the visitor inside a thin directory."
                : "Pasi te hapni nje faqe prioritare, perdorni guidat dhe faqet mbeshtetese per te krahasuar fushen e punes, llojin e prones dhe punen qe vjen me pas. Kjo krijon nje rruge me te forte nga kerkimet informative drejt faqeve te sherbimit, ne vend qe vizitori te mbetet ne nje direktori te holle."}
            </p>
          </article>
          <aside className="card-modern p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {locale === "en-US"
                ? "Strong pages to open first"
                : "Faqe te forta per t'i hapur te parat"}
            </h2>
            <ul className="mt-5 space-y-3 text-gray-600">
              {cards.slice(0, 4).map((card) => (
                <li key={card.href} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{card.title}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              {locale === "en-US"
                ? "Compare one main page and one supporting page before you call. That usually gives enough context to describe the problem clearly, understand the likely scope, and choose the right visit."
                : "Krahasoni nje faqe kryesore dhe nje faqe mbeshtetese para telefonates. Zakonisht kjo jep mjaftueshem kontekst per ta pershkruar qarte problemin, per te kuptuar fushen e mundshme te punes dhe per te zgjedhur nderhyrjen e duhur."}
            </p>
          </aside>
        </section>

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
