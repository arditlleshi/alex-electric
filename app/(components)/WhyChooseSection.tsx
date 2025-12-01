const benefits = [
  {
    title: "Eksperiencë & Cilësi",
    description:
      "<p>Me nj&euml; dekad&euml; e gjysm&euml; p&euml;rvoj&euml; pune n&euml; terren, kemi hasur dhe zgjidhur me sukses nj&euml; gam&euml; t&euml; gjer&euml; problemesh <strong>elektrike</strong>. Kjo na jep besimin dhe aft&euml;sin&euml; p&euml;r t&euml; trajtuar &ccedil;do situat&euml; me kompetenc&euml;.</p>",
  },
  {
    title: "Disponibilitet 24/7",
    description:
      "<p>Problemet <strong>elektrike</strong> nuk presin! Prandaj, jemi gjithmon&euml; t&euml; gatsh&euml;m t&rsquo;ju ndihmojm&euml;, qoft&euml; dit&euml; apo nat&euml;. Ofrojm&euml; sh&euml;rbim emergjence <strong>24 or&euml;</strong> n&euml; dit&euml;, <strong>7 dit&euml; t&euml; jav&euml;s</strong>, q&euml; do t&euml; thot&euml; se mund t&euml; mb&euml;shteteni tek ne edhe jasht&euml; orarit standard.</p>",
  },
  {
    title: "Teknologji Moderne",
    description:
      "<p>Industria elektrike p&euml;rparon me shpejt&euml;si, ndaj ne investojm&euml; vazhdimisht n&euml; teknologji moderne. Nga pajisjet inteligjente p&euml;r sht&euml;pi <strong>(smart home)</strong> tek sistemet efikase <strong>energjetikisht</strong>, ne ofrojm&euml; zgjidhje bashk&euml;kohore q&euml; kursejn&euml; <strong>energji</strong> dhe jan&euml; miq&euml;sore me mjedisin.</p>",
  },
  {
    title: "Siguria në radhë të parë",
    description:
      "<p>Tek ne <strong>siguria elektrike</strong> nuk &euml;sht&euml; thjesht standard &ndash; &euml;sht&euml; kultur&euml;. &Ccedil;do instalim apo <strong>riparim elektrik</strong> realizohet duke respektuar me rigorozitet kodet dhe rregulloret e siguris&euml;</p>",
  },
  {
    title: "Çmime konkurruese & transparencë",
    description:
      "<p>Marr&euml;dh&euml;nia me klientin fillon me besim. Ne sigurojm&euml; &ccedil;mime konkurruese dhe transparente p&euml;r &ccedil;do projekt. Para se t&euml; fillojm&euml; pun&euml;n, ju ofrojm&euml; nj&euml; preventiv t&euml; detajuar, pa tarifa t&euml; fshehura, n&euml; m&euml;nyr&euml; q&euml; t&euml; dini sakt&euml;sisht &ccedil;far&euml; po paguani dhe &ccedil;far&euml; vlere do t&euml; merrni.</p>",
  },
  {
    title: "Shërbim i Personalizuar",
    description:
      "<p>V&euml;mendje individuale p&euml;r &ccedil;do <strong>projekt elektrik</strong>, duke ju dh&euml;n&euml; zgjidhjen m&euml; t&euml; mir&euml; sipas nevojave tuaja.</p>",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 gradient-mesh text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-white/5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "3s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-white/20 text-white/90 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/30">
            Pse të Na Zgjidhni Ne
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Pse të Zgjidhni
            <span className="block text-gradient-sunset mt-2">
              Alex Elektrik?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Provoni ndryshimin që sjell bashkëpunimi me një profesionist të
            vërtetë, i cili vë në plan të parë sigurinë dhe kënaqësinë tuaj.
          </p>
        </div>

        <ul
          aria-label="Pse të Na Zgjidhni Ne"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              aria-label={benefit.title}
              className="card-glass p-6 group cursor-pointer animate-scale-in hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-electric rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: benefit.description }} className="text-white/80 leading-relaxed" />
                </div>
              </div>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
