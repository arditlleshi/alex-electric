import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import TrackedContactLink from "@/app/(components)/TrackedContactLink";
import WhatsAppIcon from "@/app/(components)/WhatsAppIcon";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";
import {
  getAlbanianServicePage,
  type AlbanianServiceSlug,
} from "@/lib/content/albanian-services";
import CommercialElectric from "@/public/icons/commercial-electric.png";
import ElectricCar from "@/public/icons/ev-charger.png";
import Maintenance from "@/public/icons/maintenance.png";
import ResidentialElectric from "@/public/icons/residential-electric.png";
import SmartHome from "@/public/icons/smart-home.png";
import SolarPanel from "@/public/icons/solar-panel.png";

const primaryServiceCards: {
  slug: AlbanianServiceSlug;
  title?: string;
  image:
    | typeof ResidentialElectric
    | typeof CommercialElectric
    | typeof Maintenance
    | typeof ElectricCar
    | typeof SolarPanel
    | typeof SmartHome;
  eyebrow: string;
  summary: string;
}[] = [
  {
    slug: "elektricist-tirane",
    title: "Elektricist në Tiranë",
    image: ResidentialElectric,
    eyebrow: "Tiranë",
    summary:
      "Për apartamente, shtëpi dhe biznese në Tiranë që kanë nevojë për riparime elektrike, instalime, diagnostikim ose kontroll sigurie.",
  },
  {
    slug: "elektricist-durres",
    title: "Elektricist në Durrës",
    image: CommercialElectric,
    eyebrow: "Durrës",
    summary:
      "Për vila, apartamente bregdetare, prona me qira dhe biznese të vogla në Durrës, Golem dhe zonat përreth.",
  },
  {
    slug: "elektricist-urgjent-tirane",
    title: "Elektricist Urgjent në Tiranë",
    image: Maintenance,
    eyebrow: "Urgjencë",
    summary:
      "Për siguresa që bien, prizë që nxehet, erë djegieje, shkëndija ose ndërprerje energjie që kërkojnë reagim të shpejtë.",
  },
  {
    slug: "instalime-elektrike-tirane",
    title: "Instalime Elektrike në Tiranë",
    image: SmartHome,
    eyebrow: "Instalime",
    summary:
      "Për apartamente, shtëpi, vila dhe ambiente pune që kanë nevojë për instalim të ri, rinovim ose shtim qarqesh.",
  },
  {
    slug: "karikues-ev-tirane",
    title: "Karikues EV në Tiranë",
    image: ElectricCar,
    eyebrow: "EV",
    summary:
      "Për familje dhe prona që duan karikues makine elektrike me instalim të sigurt, linjë të dedikuar dhe panel të kontrolluar.",
  },
  {
    slug: "panele-diellore-tirane",
    title: "Panele Diellore në Tiranë",
    image: SolarPanel,
    eyebrow: "Solar",
    summary:
      "Për shtëpi dhe vila që duan zgjidhje me panele diellore sipas konsumit, buxhetit, orientimit dhe hapësirës së pronës.",
  },
];

const secondaryLinks: {
  slug: AlbanianServiceSlug;
  title: string;
  description: string;
}[] = [
  {
    slug: "elektricist-per-apartamente",
    title: "Apartamente dhe prona me qira",
    description:
      "Kontroll, riparime dhe përmirësime praktike para hyrjes, qiradhënies ose shitjes.",
  },
  {
    slug: "panel-elektrik-tirane",
    title: "Panel elektrik dhe siguri",
    description:
      "Kontroll paneli, ndarje qarqesh dhe përmirësime kur ngarkesa është rritur ose siguresat bien shpesh.",
  },
  {
    slug: "mirembajtje-elektrike-biznese",
    title: "Biznese dhe mirëmbajtje",
    description:
      "Për zyra, dyqane, restorante, hotele të vogla dhe ambiente pune që kërkojnë stabilitet.",
  },
  {
    slug: "smart-home-tirane",
    title: "Smart home dhe komoditet",
    description:
      "Automatizim, ndriçim inteligjent dhe zgjidhje moderne që ndërtohen mbi një bazë elektrike të sigurt.",
  },
];

export default function ServicesSection() {
  const cards = primaryServiceCards
    .map((card) => {
      const service = getAlbanianServicePage(card.slug);

      if (!service) {
        return null;
      }

      return {
        ...card,
        service,
      };
    })
    .filter((card): card is NonNullable<typeof card> => Boolean(card));

  return (
    <section id="services" className="border-t border-border bg-background">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Shërbimet kryesore
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Shërbime elektrike për shtëpi, apartamente, vila dhe biznese
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Alex Elektrik ofron shërbime elektrike në Tiranë dhe Durrës për
              defekte të përditshme, ndërhyrje urgjente, instalime elektrike,
              kontroll paneli, karikues EV dhe panele diellore. Qëllimi është
              që problemi të kuptohet shpejt, puna të bëhet në mënyrë të sigurt
              dhe klienti të marrë një zgjidhje që i përshtatet pronës dhe
              përdorimit real.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              Shërbimi është i përshtatshëm për shtëpi, apartamente, prona me
              qira, vila, zyra, dyqane, restorante dhe hotele të vogla që kanë
              nevojë për riparim, zgjerim të instalimit ose një vlerësim të
              qartë para se problemi të zmadhohet.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <TrackedContactLink
                href={CONTACT_PHONE_HREF}
                channel="phone"
                source="service-hub"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                <Phone aria-hidden="true" className="h-4 w-4" />
                Telefono {CONTACT_PHONE_DISPLAY}
              </TrackedContactLink>
              <TrackedContactLink
                href={CONTACT_WHATSAPP_HREF}
                channel="whatsapp"
                source="service-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-teal-500/25 bg-surface px-4 text-sm font-semibold text-teal-700 transition-[background-color,border-color,color] duration-200 hover:border-teal-500/45 hover:bg-teal-500/10">
                <WhatsAppIcon aria-hidden="true" className="h-4 w-4" />
                Na shkruani në WhatsApp
              </TrackedContactLink>
            </div>
            <Link
              href="/en/services"
              className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-muted transition-colors duration-200 hover:text-teal-700">
              Need support in English?
            </Link>
          </div>
        </header>

        <ul
          aria-label="Shërbimet kryesore"
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ service, image, eyebrow, summary, title }) => (
            <li key={service.slug}>
              <article className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
                <span className="mb-4 inline-flex min-h-8 w-fit items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-xs font-semibold text-electric-700">
                  {eyebrow}
                </span>
                <div className="relative mb-5 h-16 w-16 overflow-hidden rounded-lg border border-border bg-surface-raised">
                  <Image
                    src={image}
                    fill
                    alt={title ?? service.title}
                    placeholder="blur"
                    blurDataURL={image.src}
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {title ?? service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {service.whenToCall.slice(0, 2).map((reason) => (
                    <li key={reason} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-600"
                      />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <TrackedContactLink
                    href={CONTACT_PHONE_HREF}
                    channel="phone"
                    source="service-hub"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                    Telefono tani
                  </TrackedContactLink>
                  <Link
                    href={`/sherbime/${service.slug}`}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
                    Më shumë detaje
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <section
            aria-labelledby="services-spotlight"
            className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <h3
                id="services-spotlight"
                className="text-xl font-semibold text-foreground">
                Zgjidhje sipas llojit të pronës ose punës
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                Kur kërkesa është më specifike, mund të lexoni edhe faqet e
                dedikuara për apartamente, panel elektrik, biznese ose smart
                home. Këto janë vetëm si mbështetje; për vlerësimin më të shpejtë
                hapi i duhur është kontakti direkt.
              </p>
            </div>

            <div className="divide-y divide-border">
              {secondaryLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/sherbime/${item.slug}`}
                  className="group grid gap-2 px-5 py-4 transition-[background-color] duration-200 hover:bg-surface-muted sm:px-6">
                  <span className="text-base font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                    {item.title}
                  </span>
                  <span className="text-sm leading-6 text-muted">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <aside className="rounded-lg border border-border bg-surface-raised p-5 shadow-sm sm:p-6">
            <p className="text-sm font-semibold text-electric-700">
              Keni nevojë për përgjigje të shpejtë?
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Flisni direkt për punën që ju duhet
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Telefoni dhe WhatsApp janë mënyrat më të shpejta për të shpjeguar
              nëse bëhet fjalë për urgjencë, riparim elektrik, instalim të ri,
              kontroll paneli, karikues EV ose projekt me panele diellore.
            </p>
            <div className="mt-5 grid gap-3">
              <TrackedContactLink
                href={CONTACT_PHONE_HREF}
                channel="phone"
                source="service-hub"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                <Phone aria-hidden="true" className="h-4 w-4" />
                Telefono tani
              </TrackedContactLink>
              <TrackedContactLink
                href={CONTACT_WHATSAPP_HREF}
                channel="whatsapp"
                source="service-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-teal-500/25 bg-surface px-4 text-sm font-semibold text-teal-700 transition-[background-color,border-color,color] duration-200 hover:border-teal-500/45 hover:bg-teal-500/10">
                <WhatsAppIcon aria-hidden="true" className="h-4 w-4" />
                Dërgo mesazh në WhatsApp
              </TrackedContactLink>
              <Link
                href="/sherbime"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
                Shiko të gjitha shërbimet
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
