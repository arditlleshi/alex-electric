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
      "Mbi 15 vjet pune ne terren me defekte, instalime dhe kontrolle ne prona rezidenciale e komerciale.",
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
  },
  {
    Icon: Clock3,
    title: "Disponibilitet 24/7",
    description:
      "Nderhyrje per raste urgjente dhe koordinim i shpejte kur ka humbje energjie, probleme ne panel ose rrezik sigurie.",
    toneClass: "border-signal-100 bg-signal-50 text-signal-600",
  },
  {
    Icon: Wrench,
    title: "Teknologji Moderne",
    description:
      "Nga smart home te karikuesit EV dhe sistemet solar, zgjidhjet projektohen sipas ngarkeses reale dhe perdorimit te prones.",
    toneClass: "border-border bg-surface text-muted-strong",
  },
  {
    Icon: ShieldCheck,
    title: "Siguria në radhë të parë",
    description:
      "Cdo pune mbyllet me kontroll funksional dhe verifikim te pikave kryesore para dorezimit te projektit.",
    toneClass: "border-teal-500/20 bg-teal-500/10 text-teal-700",
  },
  {
    Icon: CircleDollarSign,
    title: "Çmime konkurruese & transparencë",
    description:
      "Preventivi dhe koha e punes diskutohen para fillimit, qe klienti te kuptoje qarte scope-in dhe kostot.",
    toneClass: "border-copper-500/20 bg-[color:rgba(184,92,56,0.08)] text-copper-600",
  },
  {
    Icon: Languages,
    title: "Shërbim i Personalizuar",
    description:
      "Komunikim i drejtperdrejte ne shqip ose anglisht sipas rastit, me fokus te qarte te nevoja reale e klientit.",
    toneClass: "border-border bg-surface text-muted-strong",
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
                <span
                  className={`inline-flex size-11 shrink-0 items-center justify-center rounded-lg border ${benefit.toneClass}`}>
                  <benefit.Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
