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
}[] = [
  {
    slug: "elektricist-tirane",
    image: ResidentialElectric,
    eyebrow: "Tirane",
  },
  {
    slug: "elektricist-durres",
    image: CommercialElectric,
    eyebrow: "Durres",
  },
  {
    slug: "elektricist-urgjent-tirane",
    image: Maintenance,
    eyebrow: "Urgjenca",
  },
  {
    slug: "karikues-ev-tirane",
    image: ElectricCar,
    eyebrow: "EV",
  },
  {
    slug: "panele-diellore-tirane",
    image: SolarPanel,
    eyebrow: "Solar",
  },
  {
    slug: "smart-home-tirane",
    image: SmartHome,
    eyebrow: "Smart home",
  },
];

const secondaryLinks: {
  slug: AlbanianServiceSlug;
  title: string;
  description: string;
}[] = [
  {
    slug: "elektricist-per-apartamente",
    title: "Prona rezidenciale",
    description:
      "Faqe per apartamente, hyrje te reja, qira dhe kontrolle para dorezimit.",
  },
  {
    slug: "elektricist-per-vila",
    title: "Vila dhe prona te medha",
    description:
      "Lidhje me faqet per vila, ndricim te jashtem, smart home dhe ngarkese me te larte.",
  },
  {
    slug: "mirembajtje-elektrike-biznese",
    title: "Biznese dhe mirembajtje",
    description:
      "Rruge hyrjeje per zyra, dyqane, restorante, hotele dhe sherbime te vazhdueshme.",
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
      className="relative border-t border-border bg-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(216,223,221,0.18)_1px,transparent_1px),linear-gradient(rgba(216,223,221,0.14)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Faqe Sherbimesh
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Zgjidhni faqen qe i pershtatet kerkimit tuaj
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Hero-ja orienton vizitorin. Ketu vazhdohet me rruget kryesore:
              zona, urgjenca dhe sherbime me intent te larte qe meritojne faqen
              e tyre.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              Vizitoret qe kerkojne sherbim ne anglisht kalojne drejt faqeve te
              dedikuara, jo ne nje overview te ngarkuar.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/sherbime"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
              Hap hub-in e sherbimeve
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/en/services"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-teal-500 hover:bg-surface-muted hover:text-teal-700">
              Open English service pages
            </Link>
          </div>
        </header>

        <ul
          aria-label="Sherbimet kryesore"
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ service, image, eyebrow }) => (
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
                  {service.metaDescription}
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
                Faqet shtese mbulojne prona rezidenciale, vila, zyra, dyqane dhe
                mirembajtje te vazhdueshme per biznes.
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
              Hub-i i sherbimeve
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Nese vizitori nuk ka hyrje te qarte nga hero-ja, faqja e
              sherbimeve mbledh temat, zonat dhe audiencat ne nje vend.
            </p>
            <div className="mt-5 grid gap-3">
              <Link
                href="/sherbime"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                Hap hub-in e sherbimeve
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
