import Link from "next/link";

const articles = [
  {
    title: "Udhëzues për instalime moderne elektrike në shtëpi, zyra dhe biznese",
    description:
      "Një përmbledhje profesionale e shërbimeve elektrike: instalime, riparime, panele diellore dhe stacione karikimi për automjete elektrike.",
    slug: "/blog/instalime-elektrike-shtepi-zyra-biznese",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
  },
  {
    title: "Si të zgjedhësh një elektricist të besueshëm në Tiranë",
    description:
      "Mësoni hapat kryesorë dhe këshillat praktike për të identifikuar dhe zgjedhur një profesionist të kualifikuar dhe të besueshëm për nevojat tuaja elektrike.",
    slug: "/blog/si-te-zgjedhesh-elektricist",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-1.01-5.016z"
        />
      </svg>
    ),
  },
  {
    title: "5 shenja që ke nevojë për një elektricist urgjent",
    description:
      "Identifikoni sinjalet e rrezikshme në sistemin tuaj elektrik që kërkojnë ndërhyrje të menjëhershme nga një elektricist urgjent për të garantuar sigurinë.",
    slug: "/blog/shenja-per-elektricist-urgjent",
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
  },
  {
    title: "Si funksionon instalimi i panelit diellor në shtëpi",
    description:
      "Një udhëzues i plotë mbi procesin e instalimit të paneleve diellore, nga vlerësimi fillestar deri te mirëmbajtja, për një investim në energji të pastër.",
    slug: "/blog/instalimi-i-panelit-diellor",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 gradient-aurora rounded-full opacity-10 animate-float"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-electric rounded-full opacity-10 animate-float"
          style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Artikuj & Këshilla
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Artikuj të Dobishëm nga Blogu Ynë
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lexoni artikujt tanë për këshilla praktike, udhëzime dhe informacion
            të vlefshëm rreth botës së shërbimeve elektrike.
          </p>
        </div>

        <ul
          aria-label="articles"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <li
              aria-label={article.title}
              key={index}
              className="group relative card-modern p-8 hover-glow transition-all duration-500 flex flex-col hover:scale-105">
              <div className="absolute inset-0 gradient-electric opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>

              <div className="flex-shrink-0 mb-6 flex items-center space-x-4">
                <div className="w-16 h-16 gradient-electric rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  {article.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 flex-1">
                  {article.title}
                </h3>
              </div>

              <div className="flex-grow">
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                  {article.description}
                </p>
              </div>

              <div className="mt-auto z-10">
                <Link
                  href={article.slug}
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 group/link inline-flex items-center">
                  Lexo më shumë
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-16 animate-fade-in-up">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Shiko të gjithë Artikujt
          </Link>
        </div>
      </div>
    </section>
  );
}
