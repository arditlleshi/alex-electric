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
    image: ResidentialElectric,
    eyebrow: "Tirane",
    summary:
      "Per apartamente, shtepi dhe biznese ne Tirane qe kane nevoje per riparime elektrike, instalime ose kontroll sigurie.",
  },
  {
    slug: "elektricist-durres",
    image: CommercialElectric,
    eyebrow: "Durres",
    summary:
      "Per vila, apartamente bregdetare, hotele te vogla dhe prona me qira ne Durres dhe zonat perreth.",
  },
  {
    slug: "elektricist-urgjent-tirane",
    image: Maintenance,
    eyebrow: "Urgjenca",
    summary:
      "Per siguresa qe bien, prize qe nxehet, ere djegieje ose nderprerje energjie qe nuk pret deri neser.",
  },
  {
    slug: "instalime-elektrike-tirane",
    image: SmartHome,
    eyebrow: "Instalime",
    summary:
      "Per apartamente, shtepi dhe ambiente pune qe kane nevoje per instalim te ri, rinovim ose shtim qarqesh.",
  },
  {
    slug: "karikues-ev-tirane",
    image: ElectricCar,
    eyebrow: "EV",
    summary:
      "Per familje dhe prona qe duan karikues makine elektrike me instalim te sigurt dhe panel te kontrolluar.",
  },
  {
    slug: "panele-diellore-tirane",
    image: SolarPanel,
    eyebrow: "Solar",
    summary:
      "Per shtepi dhe vila qe duan zgjidhje me panele diellore sipas konsumit, buxhetit dhe hapesires.",
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
      "Per apartamente, hyrje te reja, prona me qira dhe kontrolle para dorezimit.",
  },
  {
    slug: "panel-elektrik-tirane",
    title: "Panel dhe siguri",
    description:
      "Per kontroll paneli, ndarje qarqesh dhe permiresime kur ngarkesa eshte rritur.",
  },
  {
    slug: "mirembajtje-elektrike-biznese",
    title: "Biznese dhe mirembajtje",
    description:
      "Per zyra, dyqane, restorante, hotele dhe mirembajtje elektrike te vazhdueshme.",
  },
  {
    slug: "smart-home-tirane",
    title: "Smart home dhe komoditet",
    description:
      "Per automatizim, ndricim inteligjent dhe zgjidhje me te vecanta qe vijne pas punes baze elektrike.",
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
              Faqe Sherbimesh
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Gjeni sherbimin elektrik qe ju duhet
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Nese kerkoni elektricist ne Tirane ose Durres, zgjidhni sherbimin
              sipas zones, urgjences ose llojit te punes qe ju duhet ne shtepi,
              apartament, vile apo biznes.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              Ketu mund te hapni drejt faqet per riparime elektrike, instalime
              elektrike, elektricist urgjent, karikues EV, panele diellore dhe
              faqet kryesore qe kane me shume kerkese.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/sherbime"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
              Shiko te gjitha sherbimet
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
          aria-label="Sherbimet kryesore"
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ service, image, eyebrow, summary }) => (
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
                    alt={service.title}
                    placeholder="blur"
                    blurDataURL={image.src}
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-electric-700">
                  {service.title}
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
                Rruge te tjera hyrjeje
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                Ketu kaloni te faqe me specifike kur problemi lidhet me
                apartamente, panel elektrik, biznese ose zgjidhje me te vecanta.
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
              Pasqyre e plote
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              Te gjitha sherbimet
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Nese doni te shihni te gjitha sherbimet elektrike ne nje vend,
              kjo faqe mbledh zonat, llojet e punes dhe nevojat me te zakonshme
              per kliente familjare dhe biznese.
            </p>
            <div className="mt-5 grid gap-3">
              <Link
                href="/sherbime"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                Shiko te gjitha sherbimet
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
