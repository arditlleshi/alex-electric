import { Mail, Phone } from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import TrackedContactLink from "./TrackedContactLink";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

export const faqData: { question: string; answer: string }[] = [
  {
    question: "Sa kohe merr instalimi i nje sistemi elektrik te plote?",
    answer:
      "<p>Koha varet nga madhesia dhe kompleksiteti i punes. Nje apartament mesatar mund te kerkoje 2 deri ne 3 dite, ndersa nje vile me me shume pika dhe ngarkese me te larte mund te kerkoje me shume kohe pas kontrollit fillestar.</p>",
  },
  {
    question: "A ofroni garanci per punimet elektrike qe kryeni?",
    answer:
      "<p>Po. Cdo <strong>instalim elektrik</strong> ose <strong>riparim elektrik</strong> behet me kontroll final dhe mbeshtetje te qarte, sepse siguria dhe cilesia e punes jane pjese kryesore e sherbimit.</p>",
  },
  {
    question: "A mund te instaloni karikues makine elektrike ne shtepi?",
    answer:
      "<p>Po. Bejme <strong>instalim karikuesi EV</strong> ne shtepi, vile dhe disa prona biznesi, pasi kontrollojme panelin elektrik, ngarkesen dhe zgjidhjen me te pershtatshme per perdorimin tuaj.</p>",
  },
  {
    question: "A ndihmoni edhe me panele diellore per shtepi ose vile?",
    answer:
      "<p>Po. Mund te ndihmojme me sqarimin, planifikimin dhe <strong>instalimin e paneleve diellore</strong> sipas konsumit, buxhetit dhe hapesires qe ka prona.</p>",
  },
  {
    question: "Sa shpejt mund te vije elektricisti ne rast urgjence?",
    answer:
      "<p>Per raste urgjente si siguresa qe bien, prize qe nxehet ose ere djegieje, telefoni dhe WhatsApp jane menyrat me te shpejta per kontakt. Koha e reagimit varet nga zona dhe rasti, por urgjencat trajtohen me perparesi.</p>",
  },
  {
    question: "A punoni edhe per apartamente me qira ose prona para dorezimit?",
    answer:
      "<p>Po. Shume kerkesa vijne nga pronare qe duan kontroll elektrik para qiradhenies, shitjes ose dorezimit te apartamentit, sidomos kur ka prize, ndricim ose panel elektrik qe duhet verifikuar.</p>",
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
            Pergjigje te shkurtra per instalime elektrike, riparime elektrike,
            urgjenca, karikues EV, panele diellore dhe kontroll sigurie per
            apartamente, shtepi e biznese.
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
              per apartamentin, shtepine ose biznesin tuaj.
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
