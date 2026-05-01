import {
  ArrowRight,
  Clock3,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import TrackedContactLink from "./TrackedContactLink";
import {
  CONTACT_EMAIL_ADDRESS,
  CONTACT_EMAIL_HREF,
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
    title: "Telefononi Menjehere",
    description:
      "Per urgjenca, mungese energjie ose diagnostikim te shpejte ne telefon.",
    Icon: Phone,
    link: CONTACT_PHONE_HREF,
    label: CONTACT_PHONE_DISPLAY,
    eyebrow: "Reagimi me i shpejte",
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
    cardClass:
      "border-electric-100 bg-electric-50/70 hover:border-electric-200 hover:bg-electric-50",
    linkClass: "text-electric-700 hover:text-electric-900",
  },
  {
    title: "Dergo Detajet me Email",
    description:
      "Per preventiv, scope me te plote, foto dhe kerkesa qe duan dokumentim.",
    channel: "email",
    Icon: Mail,
    link: CONTACT_EMAIL_HREF,
    label: CONTACT_EMAIL_ADDRESS,
    eyebrow: "Per kerkesa te plota",
    toneClass: "border-signal-100 bg-signal-50 text-signal-600",
    cardClass:
      "border-signal-100 bg-signal-50/80 hover:border-signal-400/60 hover:bg-signal-50",
    linkClass:
      "text-signal-600 hover:text-copper-600 break-all hyphens-auto text-left",
  },
  {
    title: "Shkruani ne WhatsApp",
    description:
      "Kanal praktik per foto, video te shkurtra dhe koordinim te menjehershem.",
    channel: "whatsapp",
    Icon: MessageCircle,
    link: CONTACT_WHATSAPP_HREF,
    label: "Na shkruani ne WhatsApp",
    eyebrow: "Per koordinim te shpejte",
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
    title: "Zona e sherbimit",
    description: "Tirane, Durres dhe raste te perzgjedhura sipas projektit.",
    Icon: MapPin,
    toneClass: "text-electric-700",
  },
  {
    title: "Gjuha e komunikimit",
    description: "Shqip dhe anglisht per kliente vendas, te huaj dhe prona me qira.",
    Icon: Globe,
    toneClass: "text-teal-700",
  },
  {
    title: "Kur te na kontaktoni",
    description: "Telefon ose WhatsApp per urgjenca, email kur kerkesa ka specifika ose foto.",
    Icon: Clock3,
    toneClass: "text-signal-600",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-surface-muted">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,32,38,0.05)_1px,transparent_1px),linear-gradient(rgba(24,32,38,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-electric-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-7rem] right-[-4rem] h-56 w-56 rounded-full bg-signal-100/60 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,1.02fr)] lg:items-start lg:px-8">
        <div className="min-w-0 self-start">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
            Na Kontaktoni
          </span>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Kontakti duhet te jete i thjeshte, i shpejte dhe i qarte
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
            Kjo pjese nuk duhet te sillet si footer i dyte. Qellimi ketu eshte
            veprimi: zgjidhni kanalin, dergoni kerkesen dhe merrni pergjigje pa
            kaluar neper nje bllok tjeter navigimi.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Need support in English? We can discuss the work scope and provide a
            clear estimate by phone, email or WhatsApp.
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
              Na shkruani ne WhatsApp
            </TrackedContactLink>
          </div>

          <ul
            aria-label="Detaje kontakti"
            className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {supportPoints.map((point) => (
              <li
                key={point.title}
                className="rounded-lg border border-border bg-surface p-4 shadow-sm">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <point.Icon
                    aria-hidden="true"
                    className={`h-4 w-4 ${point.toneClass}`}
                  />
                  {point.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>

          <address className="mt-8 not-italic text-sm leading-6 text-muted">
            <span className="font-semibold text-foreground">Vendndodhja:</span>{" "}
            Tirane, Shqiperi
          </address>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5 shadow-medium sm:p-6">
          <div className="border-b border-border pb-4">
            <p className="text-sm font-semibold text-electric-700">
              Zgjidhni kanalin e duhur
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">
              Tre rruge te qarta per te nisur kontaktin
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Ketu fokusi eshte reagimi, jo navigimi. Secili kanal ka nje rol te
              qarte ne varesi te urgjences dhe sasise se informacionit qe doni te
              ndani.
            </p>
          </div>

          <ul aria-label="Menyra kontakti" className="mt-5 grid gap-3">
            {primaryActions.map((item) => (
            <li
              key={item.link}
              className={`rounded-lg border p-5 transition-[background-color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-soft ${item.cardClass}`}>
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

          <div className="mt-5 rounded-lg border border-border bg-surface-raised p-4">
            <p className="text-sm font-semibold text-foreground">
              Cfare ndihmon per nje pergjigje me te sakte
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Shkruani zonen, llojin e problemit, nese eshte urgjence dhe dergoni
              foto kur eshte e mundur. Kjo e ben vleresimin fillestar me te shpejte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
