import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

const faqData: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Sa kohë merr instalimi i një sistemi elektrik të plotë?",
    answer: (
      <>
        <p>
          Koha e instalimit varet nga kompleksiteti i projektit. Një apartament
          mesatar kërkon 2-3 ditë, ndërsa një vilë e madhe mund të kërkojë 5-7
          ditë. Ne ofrojmë vlerësim falas dhe kohor preciz pas inspektimit
          fillestar.
        </p>
      </>
    ),
  },
  {
    question: "A ofroni garanci për punimet elektrike që kryeni?",
    answer: (
      <>
        <p>
          Po, çdo <strong>instalim apo riparim elektrik</strong> që realizojmë
          mbulohet me garanci, sepse besojmë tek cilësia dhe siguria e punës
          sonë.
        </p>
      </>
    ),
  },
  {
    question:
      "A mund të instaloj një karikues makine elektrike në banesën time private?",
    answer: (
      <>
        <p>
          Sigurisht. Ne kryejmë{" "}
          <strong>instalime profesionale të karikuesve EV</strong> në shtëpi dhe
          biznese, duke ofruar zgjidhje të përshtatshme sipas ambientit tuaj.
        </p>
      </>
    ),
  },
  {
    question:
      "A më ndihmoni në zgjedhjen e sistemit më të mirë fotovoltaik për shtëpinë time?",
    answer: (
      <>
        <p>
          Patjetër! Ne ju ndihmojmë në çdo hap, nga projektimi deri tek <strong>instalimi i paneleve diellore</strong>, duke u bazuar në
          konsumin tuaj dhe buxhetin e disponueshëm.
        </p>
      </>
    ),
  },
  {
    question: "Sa shpejt mund të vijë elektricisti në rast urgjence?",
    answer: (
      <>
        <p>
          Ne ofrojmë <strong>shërbim 24 orë në ditë, 7 ditë në javë</strong>. Në rast urgjence, zakonisht mbërrijmë në vendin tuaj brenda 1 ore nga telefonata juaj.
        </p>
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 gradient-aurora rounded-full opacity-5 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 gradient-electric rounded-full opacity-5 animate-float"
          style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Pyetje të Shpeshta
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gjeni përgjigje të shpejta për pyetjet më të shpeshta rreth
            shërbimeve tona elektrike profesionale.
          </p>
        </div>

        <FAQAccordion faqs={faqData} />

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass pt-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Keni pyetje të tjera?
            </h3>
            <p className="text-gray-600 mb-6">
              Na kontaktoni direkt për të marrë përgjigje të detajuara për çdo
              pyetje specifike rreth projektit tuaj.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="tel:+355693289443"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Telefono
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
