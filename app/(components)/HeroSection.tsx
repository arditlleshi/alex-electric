import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock3,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const HeroElectricalIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>

    {/* Main electrical tower */}
    <rect
      x="90"
      y="40"
      width="20"
      height="120"
      fill="url(#heroGradient)"
      fillOpacity="0.3"
      stroke="#3B82F6"
      strokeWidth="2"
    />

    {/* Power lines */}
    <path
      d="M10 60 Q50 50 90 60"
      stroke="#FFA500"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M110 60 Q150 50 190 60"
      stroke="#FFA500"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M10 80 Q50 70 90 80"
      stroke="#FF6B35"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M110 80 Q150 70 190 80"
      stroke="#FF6B35"
      strokeWidth="3"
      fill="none"
    />

    {/* Electrical insulators */}
    <circle cx="90" cy="60" r="4" fill="#374151" />
    <circle cx="90" cy="80" r="4" fill="#374151" />
    <circle cx="110" cy="60" r="4" fill="#374151" />
    <circle cx="110" cy="80" r="4" fill="#374151" />

    {/* Houses connected to grid */}
    <g>
      {/* House 1 */}
      <path
        d="M20 120 L40 100 L60 120 L60 160 L20 160 Z"
        fill="url(#heroGradient)"
        fillOpacity="0.2"
        stroke="#3B82F6"
      />
      <path
        d="M15 120 L40 95 L65 120 L60 117 L40 102 L20 117 Z"
        fill="#374151"
      />
      <circle cx="35" cy="140" r="2" fill="#FFA500" />
      <circle cx="45" cy="140" r="2" fill="#FFA500" />
      <path
        d="M35 140 Q40 135 45 140"
        stroke="#FFA500"
        strokeWidth="1.5"
        fill="none"
      />

      {/* House 2 */}
      <path
        d="M140 120 L160 100 L180 120 L180 160 L140 160 Z"
        fill="url(#heroGradient)"
        fillOpacity="0.2"
        stroke="#3B82F6"
      />
      <path
        d="M135 120 L160 95 L185 120 L180 117 L160 102 L140 117 Z"
        fill="#374151"
      />
      <circle cx="155" cy="140" r="2" fill="#FFA500" />
      <circle cx="165" cy="140" r="2" fill="#FFA500" />
      <path
        d="M155 140 Q160 135 165 140"
        stroke="#FFA500"
        strokeWidth="1.5"
        fill="none"
      />
    </g>

    {/* Energy flow particles */}
    <g>
      <circle cx="30" cy="55" r="2" fill="#FFA500">
        <animate
          attributeName="cx"
          values="30;90"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="130" cy="55" r="2" fill="#FF6B35">
        <animate
          attributeName="cx"
          values="130;190"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="30" cy="75" r="1.5" fill="#FFD700">
        <animate
          attributeName="cx"
          values="30;90"
          dur="1.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    {/* Lightning effects */}
    <g>
      <path d="M95 30 L92 40 L95 40 L92 50 L100 40 L95 40 Z" fill="#FFA500">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M105 35 L102 45 L105 45 L102 55 L110 45 L105 45 Z"
        fill="#FFD700">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

const SmallElectricalIcon = ({
  className = "w-16 h-16",
}: {
  className?: string;
}) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="smallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>

    {/* Electric plug */}
    <rect
      x="30"
      y="40"
      width="40"
      height="30"
      rx="5"
      fill="url(#smallGradient)"
      fillOpacity="0.3"
      stroke="#FFA500"
      strokeWidth="2"
    />

    {/* Plug pins */}
    <circle cx="40" cy="50" r="3" fill="#FFA500" />
    <circle cx="60" cy="50" r="3" fill="#FFA500" />
    <rect x="47" y="57" width="6" height="8" rx="1" fill="#FFA500" />

    {/* Electric sparks */}
    <circle cx="25" cy="35" r="1.5" fill="#FFD700">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="75" cy="35" r="1.5" fill="#FFA500">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="25" cy="75" r="1" fill="#FF6B35">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="75" cy="75" r="1" fill="#FFD700">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default function HeroSection() {
  return (
    <header
      id="hero"
      className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden bg-gray-900 pt-24 pb-12 text-white sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#172554] via-gray-900 to-[#0f172a]" />

      {/* Decorative blobs – disabled on mobile for performance/clarity */}
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        aria-hidden="true">
        <div className="absolute -left-16 top-20 size-72 rounded-full bg-blue-700/25 blur-2xl lg:left-32 lg:size-[28rem]" />
        <div
          className="absolute -right-16 top-1/3 size-96 rounded-full bg-amber-500/20 blur-2xl lg:right-32"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-10 left-[45%] size-64 -translate-x-1/2 rounded-full bg-sky-500/20 blur-2xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Electric illustration – hidden below md to reduce visual noise */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
        <div className="absolute left-[5%] top-16 w-80 opacity-20">
          <HeroElectricalIllustration />
        </div>
        <div className="absolute right-[5%] top-32 w-64 opacity-15">
          <HeroElectricalIllustration />
        </div>
        <div className="absolute left-1/2 bottom-24 w-24 -translate-x-1/2 opacity-10">
          <SmallElectricalIcon className="w-full h-full" />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 rounded-[2rem] border border-white/15 bg-white/[0.045] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.55)] backdrop-blur-sm sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:p-10">
          <div className="text-center lg:text-left">
            <div className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Clock3 className="h-3.5 w-3.5" />
                24/7 Emergjenca
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <MapPin className="h-3.5 w-3.5" />
                Tiranë • Durrës
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <BadgeCheck className="h-3.5 w-3.5" />
                SQ & EN Support
              </span>
            </div>

            <h1 className="mx-auto max-w-4xl text-balance font-extrabold leading-[1.04] text-4xl sm:text-5xl md:text-6xl lg:mx-0 lg:text-[4.1rem]">
              <span className="block text-gradient-sunset bg-clip-text drop-shadow-md">
                Elektricist në Tiranë
              </span>
              <span className="mt-3 block text-gray-200/90 text-2xl font-semibold sm:mt-4 sm:text-3xl lg:text-[2.35rem]">
                Instalime&nbsp;dhe&nbsp;Riparime&nbsp;Elektrike
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
              Alex&nbsp;Elektrik ofron shërbime elektrike profesionale në{" "}
              <strong className="font-semibold text-white">Tiranë, Durrës</strong>{" "}
              dhe <strong className="font-semibold text-white">zonat përreth</strong>, me{" "}
              <strong className="font-semibold text-white">shërbim 24/7</strong> për
              emergjenca. Fokus tek instalime, riparime, smart home, karikues EV
              dhe panele diellore me standard të lartë sigurie.
            </p>

            <p className="mx-auto mt-5 max-w-2xl rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-pretty text-sm leading-relaxed text-blue-100 backdrop-blur-sm sm:text-base lg:mx-0">
              Looking for an <strong className="text-white">English-speaking electrician in Tirana</strong>? We
              support expats, Airbnb owners, and international businesses with
              fast diagnostics, transparent pricing, and emergency visits.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link
                href="#contact"
                className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                <Phone className="size-5 shrink-0" />
                Kontakto&nbsp;Tani
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-500/70 bg-gray-700/45 px-7 py-3 text-sm font-semibold text-gray-100 backdrop-blur transition-all duration-300 hover:bg-gray-700/75 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                Shiko&nbsp;Shërbimet
                <ArrowRight className="size-5 shrink-0" />
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/70 bg-blue-500/20 px-7 py-3 text-sm font-semibold text-blue-100 transition-all duration-300 hover:bg-blue-500/35 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">
                English Service
                <ArrowRight className="size-5 shrink-0" />
              </Link>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0b1732]/55 p-5 text-left shadow-[0_18px_44px_rgba(15,23,42,0.45)] sm:p-6">
            <div className="absolute -top-12 -right-8 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />
            <h2 className="relative text-lg font-bold text-white">
              Siguri, Shpejtësi, Profesionalizëm
            </h2>
            <p className="relative mt-3 text-sm leading-relaxed text-blue-100/90">
              Zgjidhje të personalizuara për banesa, zyra dhe biznese me
              standarde moderne elektrike dhe komunikim të qartë në çdo hap.
            </p>

            <ul className="relative mt-5 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-100">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-300" />
                Inspektim i plotë i sigurisë para dorëzimit.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-100">
                <Clock3 className="mt-0.5 h-4 w-4 text-amber-300" />
                Ndërhyrje e shpejtë për raste urgjente 24/7.
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-100">
                <BadgeCheck className="mt-0.5 h-4 w-4 text-blue-300" />
                Përkrahje në shqip dhe anglisht për klientë lokalë dhe të huaj.
              </li>
            </ul>

            <div className="relative mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
                <p className="text-xl font-bold text-white">15+</p>
                <p className="text-[11px] text-blue-100">Vite Eksperiencë</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
                <p className="text-xl font-bold text-white">24/7</p>
                <p className="text-[11px] text-blue-100">Emergjenca</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
                <p className="text-xl font-bold text-white">&lt;1h</p>
                <p className="text-[11px] text-blue-100">Përgjigje Tiranë</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 hidden justify-center md:flex">
          <a
            href="#about"
            aria-label="Scroll down"
            className="flex h-11 w-6 items-start justify-center rounded-full border-2 border-gray-500/70 p-1">
            <span className="block h-3 w-1.5 animate-bounce rounded-full bg-gray-400/80" />
          </a>
        </div>
      </div>
    </header>
  );
}
