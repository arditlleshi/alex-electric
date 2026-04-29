import {
  BadgeCheck,
  Bolt,
  Clock3,
  ShieldCheck,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

interface FeatureCardProps {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  toneClass: string;
}

function FeatureCard({
  Icon,
  title,
  description,
  toneClass,
}: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <span
          className={`inline-flex size-11 shrink-0 items-center justify-center rounded-lg border ${toneClass}`}>
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="mt-2 text-sm leading-6 text-muted"
          />
        </div>
      </div>
    </article>
  );
}

const operationalMetrics = [
  { value: "15+", label: "vite pune si elektricist" },
  { value: "24/7", label: "sherbim emergjence" },
  { value: "<1h", label: "pergjigje e shpejte ne Tirane" },
  { value: "100%", label: "kontroll para dorezimit" },
];

const workProtocol = [
  {
    Icon: ShieldCheck,
    title: "Kontroll i Defektit",
    description:
      "Kontrollojme instalimin elektrik dhe gjejme problemin kryesor sa me shpejt.",
  },
  {
    Icon: Zap,
    title: "Riparim ose Instalim",
    description:
      "Bejme riparime elektrike dhe instalim elektrik me materiale cilesore.",
  },
  {
    Icon: BadgeCheck,
    title: "Testim Final",
    description:
      "Testojme cdo pike para dorezimit qe gjithcka te punoje ne menyre te sigurt.",
  },
];

const features = [
  {
    Icon: BadgeCheck,
    toneClass: "border-electric-100 bg-electric-50 text-electric-700",
    title: "Mbi 15 Vjet Eksperiencë",
    description:
      "<p>Mbi nj&euml; dekad&euml; e gjysm&euml; eksperienc&euml; praktike duke ofruar <strong>sh&euml;rbime elektrike profesionale</strong> n&euml; sektor&euml;t rezidencial&euml;, komercial&euml; dhe industrial&euml;.</p>",
  },
  {
    Icon: Bolt,
    toneClass: "border-signal-100 bg-signal-50 text-signal-600",
    title: "Teknologji Moderne",
    description:
      "<p>Gjithmon&euml; t&euml; p&euml;rdit&euml;suar me standardet m&euml; t&euml; fundit <strong>elektrike</strong>, teknologjit&euml; e sht&euml;pive inteligjente (<strong>smart home</strong>) dhe zgjidhjet energjetike t&euml; q&euml;ndrueshme si <strong>panelet diellore</strong> dhe karikimi i <strong>automjeteve elektrike</strong>.</p>",
  },
  {
    Icon: ShieldCheck,
    toneClass: "border-teal-500/20 bg-teal-500/10 text-teal-700",
    title: "Siguruar & I Besueshëm",
    description:
      "<p><strong>Profesionist</strong> plot&euml;sisht i siguruar dhe i &ccedil;ertifikuar q&euml; kombinon p&euml;rsosm&euml;rin&euml; teknike me sh&euml;rbimin e ndersh&euml;m dhe t&euml; besuesh&euml;m q&euml; ju k&euml;rkoni.</p>",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-border bg-surface-raised">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(216,223,221,0.3)_1px,transparent_1px),linear-gradient(rgba(216,223,221,0.22)_1px,transparent_1px)] bg-[size:56px_56px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1.05fr)] lg:items-start">
          <div className="min-w-0">
            <span className="inline-flex min-h-9 items-center rounded-lg border border-electric-100 bg-electric-50 px-3 text-sm font-semibold text-electric-700">
              Njihuni Me Ekspertin
            </span>
            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Rreth Alex Elektrik
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
              Puna ne terren, diagnostikimi i qarte dhe komunikimi i drejtpërdrejtë
              jane baza e sherbimit. Seksioni i pare i faqes jep orientimin; ketu
              shpjegohet si punohet dhe cfare niveli mbeshtetje merr klienti.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {operationalMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-lg border border-border bg-surface px-4 py-4 shadow-sm">
                  <p className="text-2xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{metric.label}</p>
                </article>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature.title}>
                  <FeatureCard
                    Icon={feature.Icon}
                    toneClass={feature.toneClass}
                    title={feature.title}
                    description={feature.description}
                  />
                </li>
              ))}
            </ul>
          </div>

          <aside className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
            <div className="border-b border-border p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-electric-700">
                    Procesi i punes
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-foreground">
                    Nga defekti te dorezimi
                  </h3>
                </div>
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-electric-50 text-electric-700">
                  <Workflow aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">
                Hapat jane te thjeshte: kontroll, nderhyrje dhe testim final.
                Klienti e di cfare po ndodh, sa zgjat dhe si mbyllet puna.
              </p>
            </div>

            <ol className="divide-y divide-border">
              {workProtocol.map((step, index) => (
                <li key={step.title} className="grid gap-3 p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface-raised text-muted-strong">
                    <step.Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-electric-700">
                      Hapi {index + 1}
                    </p>
                    <h4 className="mt-1 text-base font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="grid gap-3 border-t border-border bg-surface-raised p-5 sm:grid-cols-2 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-700">
                  <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    Pune e sigurt
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Kontroll final para dorezimit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-electric-50 text-electric-700">
                  <Clock3 aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    Kosto e qarte
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Preventiv dhe kohe pune para fillimit.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-background px-5 py-4 text-sm font-medium text-muted-strong sm:px-6">
              <span className="inline-flex items-center gap-2">
                <Wrench aria-hidden="true" className="h-4 w-4 text-electric-600" />
                Tirane, Durres dhe nderhyrje 24/7 sipas rastit
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
