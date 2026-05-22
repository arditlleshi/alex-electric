import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Phone } from "lucide-react";
import TrackedContactLink from "./TrackedContactLink";
import WhatsAppIcon from "./WhatsAppIcon";
import { albanianServicePages } from "@/lib/content/albanian-services";
import { englishServicePages } from "@/lib/content/english-services";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/lib/contact";
import logo from "@/public/main-logo.png";

const quickLinks = [
  { label: "Kreu", href: "/" },
  { label: "Shërbime", href: "/sherbime" },
  { label: "Blog", href: "/blog" },
  { label: "English", href: "/en" },
  { label: "Kontakt", href: "/#contact" },
];

const featuredServiceSlugs = new Set([
  "elektricist-tirane",
  "elektricist-durres",
  "elektricist-urgjent-tirane",
  "karikues-ev-tirane",
]);

const featuredEnglishSlugs = new Set([
  "electrician-tirana",
  "electrician-for-expats",
  "electrician-for-airbnb-hosts",
  "electrician-durres",
]);

export default async function Footer() {
  "use cache";

  const featuredServices = albanianServicePages.filter((service) =>
    featuredServiceSlugs.has(service.slug),
  );
  const featuredEnglishPages = englishServicePages.filter((service) =>
    featuredEnglishSlugs.has(service.slug),
  );

  return (
    <footer className="relative border-t border-white/10 bg-surface-inverse text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 border-b border-white/10 pb-8 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
          <div className="relative h-11 w-28">
            <Image
              src={logo}
              alt="Alex Elektrik"
              fill
              sizes="112px"
              className="object-contain brightness-0 invert"
            />
          </div>
          <p className="min-w-0 text-sm leading-6 text-slate-300 md:justify-self-center">
            Shërbime elektrike ne Tiranë & Durrës me support në shqip dhe
            anglisht.
          </p>
          <div className="flex flex-wrap gap-2 md:justify-self-end">
            <span className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/12 px-2.5 text-xs font-semibold text-slate-200">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-electric-200" />
              Tiranë & Durrës
            </span>
            <span className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/12 px-2.5 text-xs font-semibold text-slate-200">
              <Globe aria-hidden="true" className="h-3.5 w-3.5 text-teal-400" />
              SQ / EN
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-electric-200">
                Linqe te shpejta
              </h3>
              <ul className="mt-3 space-y-1.5" aria-label="quick links">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex min-h-9 items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-electric-200"
                      />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-electric-200">
                Faqe kryesore
              </h3>
              <ul className="mt-3 space-y-1.5" aria-label="featured services">
                {featuredServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/sherbime/${service.slug}`}
                      className="group inline-flex min-h-9 items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-electric-200"
                      />
                      <span className="min-w-0 truncate">{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-300">
                English pages
              </h3>
              <ul className="mt-3 space-y-1.5" aria-label="english pages">
                <li>
                  <Link
                    href="/en/services"
                    className="group inline-flex min-h-9 items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                    <ArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-teal-300"
                    />
                    <span>English services hub</span>
                  </Link>
                </li>
                {featuredEnglishPages.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={service.path}
                      className="group inline-flex min-h-9 items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-teal-300"
                      />
                      <span className="min-w-0 truncate">{service.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog?lang=en"
                    className="group inline-flex min-h-9 items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                    <ArrowRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-teal-300"
                    />
                    <span>English guides</span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className="rounded-lg border border-white/10 bg-black/15 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-signal-100">
              Na kontaktoni
            </h3>
            <ul className="mt-3 space-y-2.5" aria-label="contact items">
              <li>
                <TrackedContactLink
                  href={CONTACT_PHONE_HREF}
                  channel="phone"
                  source="footer"
                  className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                  <Phone aria-hidden="true" className="h-4 w-4 text-signal-200" />
                  <span>{CONTACT_PHONE_DISPLAY}</span>
                </TrackedContactLink>
              </li>
              <li>
                <TrackedContactLink
                  href={CONTACT_WHATSAPP_HREF}
                  channel="whatsapp"
                  source="footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-slate-300 visited:text-slate-300 transition-colors duration-200 hover:text-white">
                  <WhatsAppIcon aria-hidden="true" className="h-4 w-4 text-teal-300" />
                  <span>WhatsApp</span>
                </TrackedContactLink>
              </li>
            </ul>

            <div className="mt-4 border-t border-white/10 pt-3">
              <p className="text-xs text-slate-400">
                Support for expats, landlords, Airbnb hosts & small businesses.
              </p>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-black/20">
              <div className="border-b border-white/10 px-4 py-2.5">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
                  Zona e sherbimit
                </p>
              </div>
              <div className="p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.564508566873!2d19.81869835!3d41.327544450000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1751892603325!5m2!1sen!2s"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alex Elektrik service area"
                  className="rounded-lg"
                />
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Alex Elektrik. Te gjitha te drejtat e rezervuara.</p>
          <p className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success-500" aria-hidden="true" />
            Operim ne Tiranë dhe Durrës
          </p>
        </div>
      </div>
    </footer>
  );
}
