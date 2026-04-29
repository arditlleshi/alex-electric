import { Mail, Phone } from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import TrackedContactLink from "./TrackedContactLink";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

export const faqData: { question: string; answer: string }[] = [
  {
    question: "Sa kohë merr instalimi i një sistemi elektrik të plotë?",
    answer:
      "<p>Koha e instalimit varet nga kompleksiteti i projektit. Një apartament mesatar kërkon 2-3 ditë, ndërsa një vilë e madhe mund të kërkojë 5-7 ditë. Ne ofrojmë vlerësim falas dhe kohor preciz pas inspektimit fillestar.</p>",
  },
  {
    question: "A ofroni garanci për punimet elektrike që kryeni?",
    answer:
      "<p>Po, çdo <strong>instalim apo riparim elektrik</strong> që realizojmë mbulohet me garanci, sepse besojmë tek cilësia dhe siguria e punës sonë.</p>",
  },
  {
    question:
      "A mund të instaloj një karikues makine elektrike në banesën time private?",
    answer:
      "<p>Sigurisht. Ne kryejmë <strong>instalime profesionale të karikuesve EV</strong> në shtëpi dhe biznese, duke ofruar zgjidhje të përshtatshme sipas ambientit tuaj.</p>",
  },
  {
    question:
      "A më ndihmoni në zgjedhjen e sistemit më të mirë fotovoltaik për shtëpi?",
    answer:
      "<p>Patjetër! Ne ju ndihmojmë në çdo hap, nga projektimi deri tek <strong>instalimi i paneleve diellore</strong>, duke u bazuar në konsumin tuaj dhe buxhetin e disponueshëm.</p>",
  },
  {
    question: "Sa shpejt mund të vijë elektricisti në rast urgjence?",
    answer:
      "<p>Ne ofrojmë <strong>shërbim 24 orë në ditë, 7 ditë në javë</strong>. Në rast urgjence, zakonisht mbërrijmë në vendin tuaj brenda 1 ore nga telefonata juaj.</p>",
  },
  {
    question: "Do you offer service in English for expats and foreign clients?",
    answer:
      "<p>Yes. We provide <strong>English-speaking electrical support</strong> for homeowners, tenants, and businesses in Tirana and nearby areas, including urgent callouts.</p>",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
            Pyetje Te Shpeshta
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Pyetjet me te shpeshta
          </h2>
          <p className="mt-5 text-pretty text-base leading-7 text-muted sm:text-lg">
            Pergjigjet kryesore per instalime, riparime, urgjenca, EV, solar dhe
            sherbime ne shqip ose anglisht.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Need help in English? Contact us directly by phone, email or
            WhatsApp.
          </p>
        </div>

        <div className="mt-12">
          <FAQAccordion faqs={faqData} />
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface-raised p-6 shadow-sm sm:p-7">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold text-foreground">
              Keni pyetje te tjera?
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Na kontaktoni direkt per pyetje specifike, preventiv ose sqarime
              per projektin tuaj.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedContactLink
                href={CONTACT_PHONE_HREF}
                channel="phone"
                source="faq-section"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-surface-inverse px-5 text-sm font-semibold text-white transition-[background-color,box-shadow] duration-200 hover:bg-electric-900 hover:shadow-electric">
                <Phone aria-hidden="true" className="h-4 w-4" />
                Telefono
              </TrackedContactLink>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-5 text-sm font-semibold text-muted-strong transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
                <Mail aria-hidden="true" className="h-4 w-4" />
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
