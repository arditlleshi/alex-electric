import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileText,
  Globe,
  MapPin,
  Zap,
} from "lucide-react";

const startLinks = [
  {
    title: "Elektricist ne Tirane",
    description: "Faqja kryesore per kerkime lokale, riparime dhe instalime.",
    href: "/sherbime/elektricist-tirane",
  },
  {
    title: "Elektricist ne Durres",
    description: "Sherbim per vila, prona bregdetare, hotele dhe qira.",
    href: "/sherbime/elektricist-durres",
  },
  {
    title: "English electrician pages",
    description: "Faqe ne anglisht per expats, Airbnb hosts dhe biznese.",
    href: "/en",
  },
];

export default function HeroSection() {
  return (
    <header
      id="hero"
      className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden bg-gray-900 pb-12 pt-24 text-white sm:pb-14 sm:pt-28 lg:pb-16 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#172554] via-gray-900 to-[#0f172a]" />
      <div className="absolute inset-0 -z-10 hidden md:block" aria-hidden="true">
        <div className="absolute left-24 top-20 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute right-20 top-1/3 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-7 rounded-[2rem] border border-white/15 bg-white/[0.045] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.55)] sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:p-10">
          <div className="min-w-0 text-center lg:text-left">
            <div className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Clock3 className="h-3.5 w-3.5" />
                24/7 emergjenca
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <MapPin className="h-3.5 w-3.5" />
                Tirane + Durres
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Globe className="h-3.5 w-3.5" />
                SQ + EN support
              </span>
            </div>

            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold leading-[1.04] sm:text-5xl md:text-6xl lg:mx-0 lg:text-[4rem]">
              <span className="block bg-clip-text text-gradient-sunset drop-shadow-md">
                Alex Elektrik
              </span>
              <span className="mt-3 block text-2xl font-semibold text-gray-200/90 sm:mt-4 sm:text-3xl lg:text-[2.2rem]">
                Sherbime elektrike per Tirane dhe Durres
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg lg:mx-0">
              Faqja kryesore tani ju con drejt sherbimeve te dedikuara: Tirane,
              Durres, urgjenca, riparime, instalime, EV, solar dhe guida qe
              mbulojne pyetjet me te zakonshme te klienteve.
            </p>

            <p className="mx-auto mt-5 max-w-2xl rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm leading-relaxed text-blue-100 sm:text-base lg:mx-0">
              Looking for an English-speaking electrician in Tirana or Durres?
              Start from the English hub for expats, landlords, Airbnb hosts,
              and international businesses.
            </p>

            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link
                href="/sherbime"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <Zap className="h-5 w-5 shrink-0" />
                Shiko sherbimet
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-500/70 bg-gray-700/45 px-7 py-3 text-sm font-semibold text-gray-100 transition-all duration-300 hover:bg-gray-700/75">
                <FileText className="h-5 w-5 shrink-0" />
                Lexo udhezuesit
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-400/70 bg-blue-500/20 px-7 py-3 text-sm font-semibold text-blue-100 transition-all duration-300 hover:bg-blue-500/35">
                English pages
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>

          <aside className="relative min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-[#0b1732]/55 p-5 text-left shadow-[0_18px_44px_rgba(15,23,42,0.45)] sm:p-6">
            <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl" />

            <h2 className="relative text-lg font-bold text-white">
              Filloni nga faqja e duhur
            </h2>
            <p className="relative mt-3 text-sm leading-relaxed text-blue-100/90">
              Qellimi i faqes kryesore eshte te drejtoje kerkimin drejt
              faqeve me intent te qarte, jo te perpiqet te renditet per
              cdo term ne nje vend te vetem.
            </p>

            <div className="relative mt-6 space-y-3">
              {startLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-blue-100/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}
