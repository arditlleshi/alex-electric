import {
  ArrowRight,
  Globe,
  MapPin,
  Phone,
} from "lucide-react";
import TrackedContactLink from "./TrackedContactLink";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
  type ContactChannel,
} from "@/lib/contact";

const primaryActions: {
  channel: ContactChannel;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  link: string;
  label: string;
  eyebrow: string;
  toneClass: string;
  cardClass: string;
  linkClass: string;
  target?: "_blank";
  rel?: string;
}[] = [
  {
    channel: "phone",
    title: "Telefononi menjëherë",
    description:
      "Për urgjenca, mungesë energjie, siguresa që bien ose diagnostikim të shpejtë në telefon.",
    Icon: Phone,
    link: CONTACT_PHONE_HREF,
    label: CONTACT_PHONE_DISPLAY,
    eyebrow: "Reagimi më i shpejtë",
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
    cardClass:
      "border-electric-100 bg-electric-50/70 hover:border-electric-200 hover:bg-electric-50",
    linkClass: "text-electric-700 hover:text-electric-900",
  },
  {
    title: "Shkruani në WhatsApp",
    description:
      "Kanal praktik për foto, video të shkurtra dhe koordinim të shpejtë.",
    channel: "whatsapp",
    Icon: WhatsAppIcon,
    link: CONTACT_WHATSAPP_HREF,
    label: "Na shkruani në WhatsApp",
    eyebrow: "Për koordinim të shpejtë",
    toneClass: "border-teal-500/20 bg-teal-500/10 text-teal-700",
    cardClass:
      "border-teal-500/20 bg-teal-500/10 hover:border-teal-500/35 hover:bg-teal-500/12",
    linkClass: "text-teal-700 hover:text-teal-700/80",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const supportPoints = [
  {
    title: "Zona e shërbimit",
    description: "Tiranë, Durrës dhe vizita të planifikuara sipas projektit.",
    Icon: MapPin,
    toneClass: "text-electric-700",
  },
  {
    title: "Gjuha e komunikimit",
    description: "Shqip dhe anglisht për klientë vendas, të huaj dhe prona me qira.",
    Icon: Globe,
    toneClass: "text-teal-700",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,1.02fr)] lg:items-start lg:px-8">
        <div className="min-w-0 self-start">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
            Na kontaktoni
          </span>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Na kontaktoni për urgjencë, riparim ose instalim elektrik
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
            Zgjidhni mënyrën më të thjeshtë për të na kontaktuar. Telefoni dhe
            WhatsApp janë mënyrat më praktike për urgjenca, koordinim të
            shpejtë dhe dërgim fotosh ose detajesh për projektin.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Need support in English? Mund të flasim për punën dhe të japim një
            vlerësim të qartë me telefon ose WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedContactLink
              href={CONTACT_PHONE_HREF}
              channel="phone"
              source="contact-section"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-4 text-sm font-semibold text-white transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:bg-electric-900 hover:shadow-electric">
              Telefononi Tani
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </TrackedContactLink>
            <TrackedContactLink
              href={CONTACT_WHATSAPP_HREF}
              channel="whatsapp"
              source="contact-section"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-teal-500/25 bg-surface px-4 text-sm font-semibold text-teal-700 transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-teal-500/45 hover:bg-teal-500/10">
              <WhatsAppIcon aria-hidden="true" className="h-4 w-4" />
              Na shkruani në WhatsApp
            </TrackedContactLink>
          </div>

          <ul
            aria-label="Detaje kontakti"
            className="mt-10 grid gap-3 sm:grid-cols-2">
            {supportPoints.map((point) => (
              <li
                key={point.title}
                className="rounded-lg border border-border bg-surface p-4 shadow-sm">
                <div className="flex items-start gap-x-3">
                  <span className="flex h-5 items-center">
                    <point.Icon
                      aria-hidden="true"
                      className={`h-4 w-4 flex-none ${point.toneClass}`}
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {point.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {point.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <address className="mt-8 not-italic text-sm leading-6 text-muted">
            <span className="font-semibold text-foreground">Vendndodhja:</span>{" "}
            Tiranë, Shqipëri
          </address>
        </div>

        <div className="rounded-lg border border-border bg-surface-raised p-5 shadow-sm sm:p-6">
          <div className="border-b border-border pb-4">
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              Telefon ose WhatsApp
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Secili kanal ka një përdorim të qartë sipas urgjencës dhe llojit
              të informacionit që doni të ndani për shtëpi, apartament ose
              biznes.
            </p>
          </div>

          <ul aria-label="Menyra kontakti" className="mt-5 grid gap-3">
            {primaryActions.map((item) => (
            <li
              key={item.link}
              className={`rounded-lg border p-5 transition-[background-color,border-color] duration-200 ${item.cardClass}`}>
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex size-12 shrink-0 items-center justify-center rounded-lg border ${item.toneClass}`}>
                  <item.Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                    {item.eyebrow}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                  <TrackedContactLink
                    href={item.link}
                    channel={item.channel}
                    source="contact-section"
                    target={item.target}
                    rel={item.rel}
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${item.linkClass}`}>
                    {item.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </TrackedContactLink>
                </div>
              </div>
            </li>
          ))}
          </ul>

          <div className="mt-5 rounded-lg border border-border bg-surface p-4">
            <p className="text-sm font-semibold text-foreground">
              Çfarë ndihmon për një përgjigje më të saktë
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Shkruani zonën, llojin e problemit, nëse është urgjencë dhe
              dërgoni foto kur është e mundur. Kjo e bën vlerësimin fillestar
              më të shpejtë.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
