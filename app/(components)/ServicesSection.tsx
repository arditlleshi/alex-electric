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
      className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 pb-24">
      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <div className="gradient-aurora absolute right-20 top-20 h-64 w-64 rounded-full opacity-5 motion-safe:md:animate-float" />
        <div
          className="gradient-electric absolute bottom-20 left-20 h-48 w-48 rounded-full opacity-5 motion-safe:md:animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center motion-safe:md:animate-fade-in-up">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
            Faqe sherbimesh
          </span>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Zgjidhni faqen qe i pershtatet kerkimit tuaj
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Tani sherbimet me intent te larte nuk rrine me te fshehura ne faqen
            kryesore. Secili grup ka faqen e vet me problematika, zona,
            pyetje dhe thirrje per kontakt.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
            We also route English-speaking visitors to dedicated service and
            audience pages instead of forcing everything into one overview page.
          </p>
        </div>

        <ul
          aria-label="Sherbimet kryesore"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ service, image, eyebrow }) => (
            <li key={service.slug}>
              <Link
                href={`/sherbime/${service.slug}`}
                className="group relative flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-[transform,box-shadow] duration-500 hover:scale-[1.02] hover:shadow-xl">
                <span className="mb-4 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                  {eyebrow}
                </span>
                <div className="relative mb-5 h-20 w-20 overflow-hidden rounded-2xl bg-gray-50">
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
                <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-gray-600">
                  {service.metaDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Hap faqen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section aria-labelledby="services-spotlight" className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3
                id="services-spotlight"
                className="text-2xl font-bold text-gray-900">
                Rruge te tjera hyrjeje
              </h3>
              <p className="mt-3 max-w-3xl text-gray-600">
                Faqet shtese mbulojne prona rezidenciale, vila, zyra, dyqane
                dhe mirembajtje te vazhdueshme per biznes.
              </p>
            </div>
            <Link
              href="/en/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
              Shiko edhe faqet ne anglisht
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {secondaryLinks.map((item) => (
              <Link
                key={item.slug}
                href={`/sherbime/${item.slug}`}
                className="card-modern group block p-6 transition-transform duration-300 hover:scale-[1.02]">
                <h4 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                  {item.title}
                </h4>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center motion-safe:md:animate-fade-in-up">
          <div className="glass mx-auto max-w-2xl rounded-3xl pt-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Keni nevoje per pasqyre te plote?
            </h3>
            <p className="text-gray-600">
              Hyrja me e mire eshte faqja e sherbimeve, sepse aty secila teme
              ka faqen e vet dhe lidhet me udhezuesit perkates.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/sherbime"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Hap hub-in e sherbimeve
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                Lexo blogun elektrik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
