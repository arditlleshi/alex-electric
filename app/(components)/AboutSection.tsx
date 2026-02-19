import { BadgeCheck, Clock3, ShieldCheck, Zap } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgClass: string;
  animationDelay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconBgClass,
  animationDelay,
}) => (
  <div
    className="card-modern p-6 transition-transform duration-300 md:hover:scale-105"
    style={{ animationDelay }}>
    <div className="flex items-start space-x-4">
      <div
        className={`w-12 h-12 ${iconBgClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} className="text-gray-600 leading-relaxed"></div>
      </div>
    </div>
  </div>
);

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
    iconBgClass: "gradient-electric",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Mbi 15 Vjet Eksperiencë",
    description:
      "<p>Mbi nj&euml; dekad&euml; e gjysm&euml; eksperienc&euml; praktike duke ofruar <strong>sh&euml;rbime elektrike profesionale</strong> n&euml; sektor&euml;t rezidencial&euml;, komercial&euml; dhe industrial&euml;.</p>",
  },
  {
    animationDelay: "0.2s",
    iconBgClass: "gradient-sunset",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Teknologji Moderne",
    description:
      "<p>Gjithmon&euml; t&euml; p&euml;rdit&euml;suar me standardet m&euml; t&euml; fundit <strong>elektrike</strong>, teknologjit&euml; e sht&euml;pive inteligjente (<strong>smart home</strong>) dhe zgjidhjet energjetike t&euml; q&euml;ndrueshme si <strong>panelet diellore</strong> dhe karikimi i <strong>automjeteve elektrike</strong>.</p>",
  },
  {
    animationDelay: "0.4s",
    iconBgClass: "gradient-aurora",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Siguruar & I Besueshëm",
    description:
      "<p><strong>Profesionist</strong> plot&euml;sisht i siguruar dhe i &ccedil;ertifikuar q&euml; kombinon p&euml;rsosm&euml;rin&euml; teknike me sh&euml;rbimin e ndersh&euml;m dhe t&euml; besuesh&euml;m q&euml; ju k&euml;rkoni.</p>",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-20 left-20 h-32 w-32 rounded-full gradient-aurora opacity-10 motion-safe:md:animate-float"></div>
        <div
          className="absolute bottom-20 right-20 h-40 w-40 rounded-full gradient-electric opacity-10 motion-safe:md:animate-float"
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="motion-safe:md:animate-slide-in-left">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Njihuni me Ekspertin
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Rreth Alex Elektrik
              </h2>
            </div>

            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index}>
                  <FeatureCard
                    key={index}
                    iconBgClass={feature.iconBgClass}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    animationDelay={feature.animationDelay}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="relative motion-safe:md:animate-slide-in-right">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(59,130,246,0.18),transparent_50%),radial-gradient(circle_at_85%_18%,rgba(14,165,233,0.15),transparent_42%),linear-gradient(145deg,rgba(248,250,252,0.92),rgba(255,255,255,0.98))]" />
              <div className="relative space-y-6 p-6 sm:p-7">
                <header className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                    <Zap className="size-3.5" />
                    Si Punojme
                  </span>
                  <h3 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-[1.75rem]">
                    Elektricist në Tiranë për Riparime dhe Instalime Elektrike
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
                    Nga kontrolli i defektit te riparimi elektrik, çdo hap bëhet
                    i qartë dhe i thjeshtë.
                  </p>
                </header>

                <div className="grid grid-cols-2 gap-3">
                  {operationalMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
                      <p className="text-xl font-bold text-slate-900 sm:text-2xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[11px] font-medium leading-snug text-slate-600 sm:text-xs">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-950 p-5 text-slate-100">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">
                      Si Punojmë
                    </h4>
                    <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] font-semibold text-slate-300">
                      3 hapa
                    </span>
                  </div>

                  <ol className="mt-4 space-y-4">
                    {workProtocol.map((step, index) => (
                      <li key={step.title} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-200">
                          <step.Icon className="size-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {index + 1}. {step.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-300">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-emerald-200/70 bg-emerald-50/80 p-4">
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                      <ShieldCheck className="size-4" />
                      Punë e sigurt
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-emerald-700">
                      Kontroll final para dorëzimit që instalimi të jetë i sigurt.
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-200/70 bg-blue-50/80 p-4">
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
                      <Clock3 className="size-4" />
                      Çmim i qartë
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-blue-700">
                      Te tregojmë koston dhe kohën para se të fillojme punën.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -top-4 right-4 hidden rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm md:inline-flex">
              Tirane • Durres • 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
