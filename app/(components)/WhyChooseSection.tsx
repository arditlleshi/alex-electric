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
    title: "Eksperience ne terren",
    description:
      "Mbi 15 vjet pune me defekte, instalime elektrike dhe kontrolle sigurie per shtepi, apartamente te vjetra, vila dhe biznese.",
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
  },
  {
    Icon: Clock3,
    title: "Reagim i shpejte",
    description:
      "Nderhyrje per raste urgjente kur ka humbje energjie, siguresa qe bien, prize qe nxehet ose problem ne panel elektrik.",
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
  },
  {
    Icon: Wrench,
    title: "Sherbime per nevoja te ndryshme",
    description:
      "Nga riparime elektrike ne apartament dhe kontroll para qiradhenies, te smart home, karikues EV dhe zgjidhje solar per vila.",
    toneClass: "border-border bg-surface text-muted-strong",
  },
  {
    Icon: ShieldCheck,
    title: "Siguria vjen e para",
    description:
      "Cdo pune mbyllet me kontroll funksional dhe verifikim te pikave kryesore para dorezimit, qe instalimi te jete i sigurt ne perdorim te perditshem.",
    toneClass: "border-teal-500/20 bg-teal-500/10 text-teal-700",
  },
  {
    Icon: CircleDollarSign,
    title: "Cmim dhe plan i qarte",
    description:
      "Preventivi dhe koha e punes diskutohen para fillimit, qe klienti te kuptoje qarte kostot dhe hapat e punes pa surpriza.",
    toneClass: "border-border bg-surface text-muted-strong",
  },
  {
    Icon: Languages,
    title: "Komunikim ne shqip ose anglisht",
    description:
      "Sherbim i qarte per familje, pronare me qira, biznese te vogla dhe kliente te huaj qe kane nevoje per shpjegim te thjeshte.",
    toneClass: "border-teal-500/20 bg-teal-500/10 text-teal-700",
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
              Kur kerkoni elektricist per shtepi, apartament ose biznes, ju
              duhet pune e sigurt, komunikim i qarte dhe reagim i shpejte. Keto
              jane arsyet kryesore pse familje, pronare dhe biznese te vogla
              zgjedhin kete sherbim ne Tirane dhe Durres.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-5 text-sm leading-6 text-muted shadow-sm">
            Pikat kyce jane: siguria, qartesia e cmimit, disponueshmeria dhe
            komunikimi i drejteperdrejte nga kontakti i pare deri ne fund te
            punes.
          </div>
        </div>

        <ul
          aria-label="Pse te na zgjidhni"
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
