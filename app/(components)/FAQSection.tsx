import { Mail, Phone } from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import TrackedContactLink from "./TrackedContactLink";
import { CONTACT_PHONE_HREF } from "@/lib/contact";

export const faqData: { question: string; answer: string }[] = [
  {
    question: "Sa kohë merr instalimi i një sistemi elektrik të plotë?",
    answer:
      "<p>Koha varet nga madhësia dhe kompleksiteti i punës. Një apartament mesatar mund të kërkojë 2 deri në 3 ditë, ndërsa një vilë me më shumë pika dhe ngarkesë më të lartë mund të kërkojë më shumë kohë pas kontrollit fillestar.</p>",
  },
  {
    question: "A ofroni garanci për punimet elektrike që kryeni?",
    answer:
      "<p>Po. Çdo <strong>instalim elektrik</strong> ose <strong>riparim elektrik</strong> bëhet me kontroll final dhe mbështetje të qartë, sepse siguria dhe cilësia e punës janë pjesë kryesore e shërbimit.</p>",
  },
  {
    question: "A mund të instaloni karikues makine elektrike në shtëpi?",
    answer:
      "<p>Po. Bëjmë <strong>instalim karikuesi EV</strong> në shtëpi, vilë dhe disa prona biznesi, pasi kontrollojmë panelin elektrik, ngarkesën dhe zgjidhjen më të përshtatshme për përdorimin tuaj.</p>",
  },
  {
    question: "A ndihmoni edhe me panele diellore për shtëpi ose vilë?",
    answer:
      "<p>Po. Mund të ndihmojmë me sqarimin, planifikimin dhe <strong>instalimin e paneleve diellore</strong> sipas konsumit, buxhetit dhe hapësirës që ka prona.</p>",
  },
  {
    question: "Sa shpejt mund të vijë elektricisti në rast urgjence?",
    answer:
      "<p>Për raste urgjente si siguresa që bien, prizë që nxehet ose erë djegieje, telefoni dhe WhatsApp janë mënyrat më të shpejta për kontakt. Koha e reagimit varet nga zona dhe rasti, por urgjencat trajtohen me përparësi.</p>",
  },
  {
    question: "A punoni edhe për apartamente me qira ose prona para dorëzimit?",
    answer:
      "<p>Po. Shumë kërkesa vijnë nga pronarë që duan kontroll elektrik para qiradhënies, shitjes ose dorëzimit të apartamentit, sidomos kur ka prizë, ndriçim ose panel elektrik që duhet verifikuar.</p>",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
            Pyetje të shpeshta
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Pyetjet më të shpeshta
          </h2>
          <p className="mt-5 text-pretty text-base leading-7 text-muted sm:text-lg">
            Përgjigje të shkurtra për instalime elektrike, riparime elektrike,
            urgjenca, karikues EV, panele diellore dhe kontroll sigurie për
            apartamente, shtëpi e biznese.
          </p>
        </div>

        <div className="mt-12">
          <FAQAccordion faqs={faqData} />
        </div>

        <div className="mt-12 rounded-lg border border-border bg-surface-raised p-6 shadow-sm sm:p-7">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold text-foreground">
              Keni pyetje të tjera?
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Na kontaktoni direkt për pyetje specifike, preventiv ose sqarime
              për apartamentin, shtëpinë ose biznesin tuaj.
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
