import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      "Për apartamente, shtëpi dhe biznese në Tiranë që kanë nevojë për riparime elektrike, instalime ose kontroll sigurie.",
  },
  {
    slug: "elektricist-durres",
    title: "Elektricist në Durrës",
    image: CommercialElectric,
    eyebrow: "Durrës",
    summary:
      "Për vila, apartamente bregdetare, hotele të vogla dhe prona me qira në Durrës dhe zonat përreth.",
  },
  {
    slug: "elektricist-urgjent-tirane",
    title: "Elektricist Urgjent në Tiranë",
    image: Maintenance,
    eyebrow: "Urgjencë",
    summary:
      "Për siguresa që bien, prizë që nxehet, erë djegieje ose ndërprerje energjie që nuk pret deri nesër.",
  },
  {
    slug: "instalime-elektrike-tirane",
    title: "Instalime Elektrike në Tiranë",
    image: SmartHome,
    eyebrow: "Instalime",
    summary:
      "Për apartamente, shtëpi dhe ambiente pune që kanë nevojë për instalim të ri, rinovim ose shtim qarqesh.",
  },
  {
    slug: "karikues-ev-tirane",
    title: "Karikues EV në Tiranë",
    image: ElectricCar,
    eyebrow: "EV",
    summary:
      "Për familje dhe prona që duan karikues makine elektrike me instalim të sigurt dhe panel të kontrolluar.",
  },
  {
    slug: "panele-diellore-tirane",
    title: "Panele Diellore në Tiranë",
    image: SolarPanel,
    eyebrow: "Solar",
    summary:
      "Për shtëpi dhe vila që duan zgjidhje me panele diellore sipas konsumit, buxhetit dhe hapësirës.",
  },
];

const secondaryLinks: {
  slug: AlbanianServiceSlug;
  title: string;
  description: string;
}[] = [
  {
    slug: "elektricist-per-apartamente",
    title: "Apartamente dhe hyrje",
    description:
      "Për apartamente, hyrje të reja, prona me qira dhe kontrolle para dorëzimit.",
  },
  {
    slug: "panel-elektrik-tirane",
    title: "Panel dhe siguri",
    description:
      "Për kontroll paneli, ndarje qarqesh dhe përmirësime kur ngarkesa është rritur.",
  },
  {
    slug: "mirembajtje-elektrike-biznese",
    title: "Biznese dhe mirëmbajtje",
    description:
      "Për zyra, dyqane, restorante, hotele dhe mirëmbajtje elektrike të vazhdueshme.",
  },
  {
    slug: "smart-home-tirane",
    title: "Smart home dhe komoditet",
    description:
      "Për automatizim, ndriçim inteligjent dhe zgjidhje më të veçanta që vijnë pas punës bazë elektrike.",
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
    <section
      id="services"
      className="border-t border-border bg-background">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Shërbimet kryesore
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Shërbime elektrike për shtëpi, apartamente dhe biznese
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Nëse kërkoni elektricist në Tiranë ose Durrës, këtu gjeni faqet
              kryesore për urgjenca, riparime elektrike, instalime, kontroll
              paneli, karikues EV dhe panele diellore.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              Zgjidhni shërbimin sipas qytetit, urgjencës ose llojit të pronës
              dhe kaloni direkt te faqja që i përshtatet punës që ju duhet.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/sherbime"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
              Shiko të gjitha shërbimet
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/en/services"
              className="inline-flex min-h-11 items-center justify-center text-sm font-medium text-muted transition-colors duration-200 hover:text-teal-700">
              English pages
            </Link>
          </div>
        </header>

        <ul
          aria-label="Shërbimet kryesore"
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ service, image, eyebrow, summary, title }) => (
            <li key={service.slug}>
              <Link
                href={`/sherbime/${service.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-raised hover:shadow-soft">
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
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                  {title ?? service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                  {summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric-700">
                  Hap faqen
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
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
                Shërbime sipas nevojës
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                Kaloni te faqet më specifike kur puna lidhet me apartamente,
                panel elektrik, biznese ose zgjidhje smart home.
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
              Më shumë shërbime
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Shihni të gjitha shërbimet
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Faqja e plotë e shërbimeve mbledh zonat, llojet e punës dhe
              nevojat më të zakonshme për klientë familjarë dhe biznese.
            </p>
            <div className="mt-5 grid gap-3">
              <Link
                href="/sherbime"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                Shiko të gjitha shërbimet
              </Link>
              <Link
                href="/blog"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
                Lexo blogun elektrik
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
