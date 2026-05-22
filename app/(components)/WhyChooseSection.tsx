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
    title: "Përvojë në terren",
    description:
      "Mbi 15 vjet punë me defekte, instalime elektrike dhe kontrolle sigurie për shtëpi, apartamente, vila dhe biznese.",
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
  },
  {
    Icon: Clock3,
    title: "Reagim i shpejtë",
    description:
      "Ndërhyrje për raste urgjente kur ka humbje energjie, siguresa që bien, prizë që nxehet ose problem në panel elektrik.",
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
  },
  {
    Icon: Wrench,
    title: "Shërbime për nevoja të ndryshme",
    description:
      "Nga riparime elektrike në apartament dhe kontroll para qiradhënies, te smart home, karikues EV dhe zgjidhje solar për vila.",
    toneClass: "border-border bg-surface text-muted-strong",
  },
  {
    Icon: ShieldCheck,
    title: "Siguria vjen e para",
    description:
      "Çdo punë mbyllet me kontroll funksional dhe verifikim të pikave kryesore para dorëzimit, që instalimi të jetë i sigurt në përdorim të përditshëm.",
    toneClass: "border-teal-500/20 bg-teal-500/10 text-teal-700",
  },
  {
    Icon: CircleDollarSign,
    title: "Çmim dhe plan i qartë",
    description:
      "Preventivi dhe koha e punës diskutohen para fillimit, që klienti të kuptojë qartë kostot dhe hapat e punës pa surpriza.",
    toneClass: "border-border bg-surface text-muted-strong",
  },
  {
    Icon: Languages,
    title: "Komunikim në shqip ose anglisht",
    description:
      "Shërbim i qartë për familje, pronarë me qira, biznese të vogla dhe klientë të huaj që kanë nevojë për shpjegim të thjeshtë.",
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
              Pse zgjedhin Alex Elektrik
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Pse klientët na kontaktojnë për punë elektrike
            </h2>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Kur kërkoni elektricist për shtëpi, apartament ose biznes, ju
              duhet punë e sigurt, komunikim i qartë dhe reagim i shpejtë. Këto
              janë arsyet kryesore pse familje, pronarë dhe biznese të vogla
              zgjedhin këtë shërbim në Tiranë dhe Durrës.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface-raised p-5 text-sm leading-6 text-muted shadow-sm">
            Pikat kryesore janë siguria, qartësia e çmimit, disponueshmëria
            dhe komunikimi i drejtpërdrejtë nga kontakti i parë deri në fund të
            punës.
          </div>
        </div>

        <ul
          aria-label="Pse të na zgjidhni"
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
