import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import TrackedContactLink from "./TrackedContactLink";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";
import logo from "@/public/main-logo-2.png";

const reassuranceItems = [
  {
    Icon: MapPin,
    title: "Zona e shërbimit",
    description: "Tiranë, Durrës dhe ndërhyrje të planifikuara për banesa e biznese.",
  },
  {
    Icon: Clock3,
    title: "Kur ka urgjencë",
    description: "Telefoni dhe WhatsApp janë mënyrat më të shpejta kur ka mungesë energjie ose rrezik.",
  },
  {
    Icon: Wrench,
    title: "Çfarë ofrohet",
    description: "Riparime, instalime, kontroll paneli, priza, ndriçim dhe zgjidhje për EV e solar.",
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
            Elektricist në Tiranë dhe Durrës për banesa, apartamente dhe biznese
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            Shërbime elektrike për riparime, instalime, siguresa, priza,
            ndriçim dhe panel elektrik, si edhe zgjidhje për karikues EV,
            panele diellore dhe mirëmbajtje të rregullt.
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
              <WhatsAppIcon aria-hidden="true" className="h-4 w-4" />
              WhatsApp
            </TrackedContactLink>
            <Link
              href="/sherbime"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-5 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
              Shiko shërbimet
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm leading-6 text-muted">
            Shërbim në Tiranë dhe Durrës, me ndërhyrje urgjente dhe vizita të planifikuara sipas rastit.
          </p>
        </div>

        <aside className="self-center overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
          <div className="border-b border-border p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-electric-700">
                  Si punojmë
                </p>
                <h2 className="mt-2 text-2xl font-semibold leading-tight text-foreground">
                  Një fillim i qartë për çdo kërkesë
                </h2>
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-50 text-electric-700">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              Fillimisht dëgjojmë problemin ose punën që ju duhet, pastaj
              sqarojmë hapat, kohën dhe mënyrën më të përshtatshme për
              ndërhyrje.
            </p>
          </div>

          <ul aria-label="Pikat kryesore të shërbimit" className="divide-y divide-border">
            {reassuranceItems.map((item) => (
              <li key={item.title} className="grid gap-3 p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-muted text-electric-700">
                  <item.Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-border bg-surface-raised p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/sherbime"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                Shiko shërbimet
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
                Kontakt
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
