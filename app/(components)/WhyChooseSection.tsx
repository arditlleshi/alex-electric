import {
  BadgeCheck,
  CircleDollarSign,
  Clock3,
  Languages,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    Icon: BadgeCheck,
    title: "Eksperiencë & Cilësi",
    description:
      "<p>Me nj&euml; dekad&euml; e gjysm&euml; p&euml;rvoj&euml; pune n&euml; terren, kemi hasur dhe zgjidhur me sukses nj&euml; gam&euml; t&euml; gjer&euml; problemesh <strong>elektrike</strong>. Kjo na jep besimin dhe aft&euml;sin&euml; p&euml;r t&euml; trajtuar &ccedil;do situat&euml; me kompetenc&euml;.</p>",
  },
  {
    Icon: Clock3,
    title: "Disponibilitet 24/7",
    description:
      "<p>Problemet <strong>elektrike</strong> nuk presin! Prandaj, jemi gjithmon&euml; t&euml; gatsh&euml;m t&rsquo;ju ndihmojm&euml;, qoft&euml; dit&euml; apo nat&euml;. Ofrojm&euml; sh&euml;rbim emergjence <strong>24 or&euml;</strong> n&euml; dit&euml;, <strong>7 dit&euml; t&euml; jav&euml;s</strong>, q&euml; do t&euml; thot&euml; se mund t&euml; mb&euml;shteteni tek ne edhe jasht&euml; orarit standard.</p>",
  },
  {
    Icon: Wrench,
    title: "Teknologji Moderne",
    description:
      "<p>Industria elektrike p&euml;rparon me shpejt&euml;si, ndaj ne investojm&euml; vazhdimisht n&euml; teknologji moderne. Nga pajisjet inteligjente p&euml;r sht&euml;pi <strong>(smart home)</strong> tek sistemet efikase <strong>energjetikisht</strong>, ne ofrojm&euml; zgjidhje bashk&euml;kohore q&euml; kursejn&euml; <strong>energji</strong> dhe jan&euml; miq&euml;sore me mjedisin.</p>",
  },
  {
    Icon: ShieldCheck,
    title: "Siguria në radhë të parë",
    description:
      "<p>Tek ne <strong>siguria elektrike</strong> nuk &euml;sht&euml; thjesht standard &ndash; &euml;sht&euml; kultur&euml;. &Ccedil;do instalim apo <strong>riparim elektrik</strong> realizohet duke respektuar me rigorozitet kodet dhe rregulloret e siguris&euml;</p>",
  },
  {
    Icon: CircleDollarSign,
    title: "Çmime konkurruese & transparencë",
    description:
      "<p>Marr&euml;dh&euml;nia me klientin fillon me besim. Ne sigurojm&euml; &ccedil;mime konkurruese dhe transparente p&euml;r &ccedil;do projekt. Para se t&euml; fillojm&euml; pun&euml;n, ju ofrojm&euml; nj&euml; preventiv t&euml; detajuar, pa tarifa t&euml; fshehura, n&euml; m&euml;nyr&euml; q&euml; t&euml; dini sakt&euml;sisht &ccedil;far&euml; po paguani dhe &ccedil;far&euml; vlere do t&euml; merrni.</p>",
  },
  {
    Icon: Languages,
    title: "Shërbim i Personalizuar",
    description:
      "<p>V&euml;mendje individuale p&euml;r &ccedil;do <strong>projekt elektrik</strong>, duke ju dh&euml;n&euml; zgjidhjen m&euml; t&euml; mir&euml; sipas nevojave tuaja.</p>",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-signal-100 bg-signal-50 px-3 text-sm font-semibold text-signal-600">
              Pse te Na Zgjidhni
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Arsye praktike per te punuar me Alex Elektrik
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Ketu fokusi nuk eshte marketingu i tepruar. Vizitori duhet te shohe
              shpejt pse ky sherbim duket i besueshem, i qarte dhe i pershtatshem
              per nderhyrje ne prone ose biznes.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-5 text-sm leading-6 text-muted shadow-sm">
            Pikat kyce jane: siguria, qartesia e cmimit, disponueshmeria dhe
            komunikimi ne shqip ose anglisht.
          </div>
        </div>

        <ul
          aria-label="Pse të Na Zgjidhni Ne"
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              aria-label={benefit.title}
              className="rounded-lg border border-border bg-surface-raised p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-electric-100 bg-electric-50 text-electric-700">
                  <benefit.Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: benefit.description }}
                    className="mt-3 text-sm leading-6 text-muted"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
