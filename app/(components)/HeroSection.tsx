import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import TrackedContactLink from "./TrackedContactLink";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";
import CommercialElectric from "@/public/icons/commercial-electric.png";
import ElectricCar from "@/public/icons/ev-charger.png";
import Maintenance from "@/public/icons/maintenance.png";
import ResidentialElectric from "@/public/icons/residential-electric.png";
import SolarPanel from "@/public/icons/solar-panel.png";
import logo from "@/public/main-logo-2.png";

const serviceRoutes = [
  {
    title: "Tirane",
    description: "Riparime, instalime dhe urgjenca per apartamente e biznese.",
    href: "/sherbime/elektricist-tirane",
    image: ResidentialElectric,
  },
  {
    title: "Durres",
    description: "Sherbim per vila, apartamente bregdetare, hotele dhe qira.",
    href: "/sherbime/elektricist-durres",
    image: CommercialElectric,
  },
  {
    title: "Urgjenca",
    description: "Defekte elektrike, panele, priza dhe kontroll sigurie.",
    href: "/sherbime/elektricist-urgjent-tirane",
    image: Maintenance,
  },
] as const;

const capabilityItems = [
  {
    label: "EV",
    image: ElectricCar,
  },
  {
    label: "Solar",
    image: SolarPanel,
  },
  {
    label: "Mirembajtje",
    image: Maintenance,
  },
] as const;

const trustItems = [
  {
    Icon: Clock3,
    label: "24/7",
    detail: "Emergjenca",
  },
  {
    Icon: MapPin,
    label: "2 zona",
    detail: "Tirane & Durres",
  },
  {
    Icon: Globe,
    label: "SQ / EN",
    detail: "Komunikim i qarte",
  },
] as const;

export default function HeroSection() {
  return (
    <header
      id="hero"
      className="relative isolate overflow-hidden border-b border-border bg-background pt-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(216,223,221,0.42)_1px,transparent_1px),linear-gradient(rgba(216,223,221,0.38)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-surface to-transparent"
      />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl content-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:px-8 lg:py-20">
        <div className="min-w-0 self-center">
          <div className="mb-7 flex flex-wrap gap-2">
            {trustItems.map(({ Icon, label, detail }) => (
              <span
                key={label}
                className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm font-medium text-muted-strong shadow-sm">
                <Icon aria-hidden="true" className="h-4 w-4 text-electric-600" />
                <span className="font-semibold text-foreground">{label}</span>
                <span className="text-muted">{detail}</span>
              </span>
            ))}
          </div>

          <div className="relative mb-7 h-20 w-52 sm:h-24 sm:w-64">
            <Image
              src={logo}
              alt="Alex Elektrik"
              priority
              fill
              sizes="(max-width: 640px) 208px, 256px"
              className="object-contain object-left"
            />
          </div>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.06] text-foreground sm:text-5xl lg:text-6xl">
            Sherbime Elektrike per Shtepi, Prona & Biznese
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            Elektricist ne Tirane dhe Durres per riparime, instalime,
            urgjenca, karikues EV, panele diellore dhe mirembajtje me komunikim
            te qarte ne shqip ose anglisht.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <TrackedContactLink
              href={CONTACT_PHONE_HREF}
              channel="phone"
              source="hero"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
              <Phone aria-hidden="true" className="h-4 w-4" />
              Telefono {CONTACT_PHONE_DISPLAY}
            </TrackedContactLink>
            <TrackedContactLink
              href={CONTACT_WHATSAPP_HREF}
              channel="whatsapp"
              source="hero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-teal-500 hover:bg-surface-muted hover:text-teal-700">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </TrackedContactLink>
            <Link
              href="/sherbime"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-5 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
              Shiko sherbimet
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {capabilityItems.map((item) => (
              <div
                key={item.label}
                className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-surface/80 p-3 shadow-sm">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-surface-muted">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
                <span className="min-w-0 text-sm font-semibold text-muted-strong">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside className="self-center overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
          <div className="border-b border-border p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-electric-700">
                  Nisuni nga zona ose nevoja
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight text-foreground">
                  Rruget kryesore te sherbimit
                </h2>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal-50 text-signal-600">
                <Zap aria-hidden="true" className="h-5 w-5" />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              Faqja kryesore tani orienton vizitorin drejt sherbimit me intent
              te qarte, pa e ngarkuar me te gjitha temat ne nje ekran.
            </p>
          </div>

          <ul aria-label="Rruget kryesore te sherbimit" className="divide-y divide-border">
            {serviceRoutes.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 p-5 transition-[background-color] duration-200 hover:bg-surface-muted sm:p-6">
                  <span className="relative h-14 w-14 overflow-hidden rounded-lg bg-surface-muted">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-foreground">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {item.description}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-electric-700"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="grid gap-3 border-t border-border bg-surface-raised p-5 sm:grid-cols-2 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-success-500"
              />
              <p className="text-sm leading-6 text-muted">
                Kontroll dhe testim para dorezimit.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-electric-600"
              />
              <p className="text-sm leading-6 text-muted">
                Preventiv i qarte para fillimit.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
