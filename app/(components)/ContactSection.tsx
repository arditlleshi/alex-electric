import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import TrackedContactLink from "./TrackedContactLink";
import {
  CONTACT_EMAIL_ADDRESS,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
  type ContactChannel,
} from "@/lib/contact";

const items: {
  channel: ContactChannel;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  link: string;
  label: string;
  toneClass: string;
  linkClass: string;
  target?: "_blank";
  rel?: string;
}[] = [
  {
    channel: "phone",
    title: "Telefononi Tani",
    description:
      "Disponibel 24/7 per emergjenca dhe konsultime ne shqip ose anglisht.",
    Icon: Phone,
    link: CONTACT_PHONE_HREF,
    label: CONTACT_PHONE_DISPLAY,
    toneClass: "bg-electric-50 text-electric-700",
    linkClass: "text-electric-200 hover:text-white",
  },
  {
    title: "Dërgoni Email",
    description:
      "Dergoni detajet e projektit per nje oferte te qarte dhe te dokumentuar.",
    channel: "email",
    Icon: Mail,
    link: CONTACT_EMAIL_HREF,
    label: CONTACT_EMAIL_ADDRESS,
    toneClass: "bg-signal-50 text-signal-600",
    linkClass:
      "text-signal-100 hover:text-white break-all hyphens-auto text-left",
  },
  {
    title: "WhatsApp",
    description:
      "Bisede e shpejte per foto, pyetje fillestare dhe koordinim te menjehershem.",
    channel: "whatsapp",
    Icon: MessageCircle,
    link: CONTACT_WHATSAPP_HREF,
    label: "Na shkruani ne WhatsApp",
    toneClass: "bg-teal-500/10 text-teal-500",
    linkClass: "text-white/85 hover:text-white",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-border bg-surface-inverse text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1.05fr)] lg:px-8">
        <div className="min-w-0 self-start">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-white/[0.12] bg-white/[0.08] px-3 text-sm font-semibold text-white/90">
            Na Kontaktoni
          </span>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Kontaktoni Alex Elektrik
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-slate-300 sm:text-lg">
            Per emergjenca, riparime, instalime ose preventiv, kontakti duhet te
            jete i drejtperdrejte. Kjo pjese mban te njejten qartesi si hero-ja:
            kanal, zonë dhe gjuhe komunikimi.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            Need support in English? We can discuss the work scope and provide a
            clear estimate by phone, email or WhatsApp.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <MapPin aria-hidden="true" className="h-4 w-4 text-electric-200" />
                Zona e sherbimit
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Tirane, Durres dhe raste te perzgjedhura sipas projektit.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <Globe aria-hidden="true" className="h-4 w-4 text-teal-500" />
                Gjuha e komunikimit
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Shqip dhe anglisht per kliente vendas, te huaj dhe prona me qira.
              </p>
            </div>
          </div>

          <address className="mt-8 not-italic">
            <div className="grid gap-3 text-sm leading-6 text-slate-300 sm:max-w-2xl">
              <p>
                <span className="font-semibold text-white">Vendndodhja:</span>{" "}
                Tirane, Shqiperi
              </p>
              <p>
                <span className="font-semibold text-white">Disponueshmeria:</span>{" "}
                Telefon dhe WhatsApp per raste urgjente; email per kerkesa me
                specifikim me te plote.
              </p>
            </div>
          </address>
        </div>

        <ul aria-label="contact items" className="grid gap-3">
          {items.map((item) => (
            <li
              aria-label={item.title}
              key={item.link}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex size-12 shrink-0 items-center justify-center rounded-lg ${item.toneClass}`}>
                  <item.Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                  <TrackedContactLink
                    href={item.link}
                    channel={item.channel}
                    source="contact-section"
                    target={item.target}
                    rel={item.rel}
                    className={`mt-4 inline-flex text-sm font-semibold transition-colors ${item.linkClass}`}>
                    {item.label}
                  </TrackedContactLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
