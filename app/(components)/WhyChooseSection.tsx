const benefits = [
  {
    title: "Eksperiencë & Cilësi",
    description:
      "Me një dekadë e gjysmë përvojë pune në terren, kemi hasur dhe zgjidhur me sukses një gamë të gjerë problemesh elektrike. Kjo na jep besimin dhe aftësinë për të trajtuar çdo situatë me kompetencë.",
  },
  {
    title: "Disponibilitet 24/7",
    description:
      "Problemet elektrike nuk presin! Prandaj, jemi gjithmonë të gatshëm t’ju ndihmojmë, qoftë ditë apo natë. Ofrojmë shërbim emergjence 24 orë në ditë, 7 ditë të javës, që do të thotë se mund të mbështeteni tek ne edhe jashtë orarit standard.",
  },
  {
    title: "Teknologji Moderne",
    description:
      "Industria elektrike përparon me shpejtësi, ndaj ne investojmë vazhdimisht në teknologji moderne. Nga pajisjet inteligjente për shtëpi tek sistemet efikase energjetikisht, ne ofrojmë zgjidhje bashkëkohore që kursejnë energji dhe janë miqësore me mjedisin.",
  },
  {
    title: "Siguria në radhë të parë",
    description:
      "Tek ne siguria elektrike nuk është thjesht standard – është kulturë. Çdo instalim apo riparim realizohet duke respektuar me rigorozitet kodet dhe rregulloret e sigurisë",
  },
  {
    title: "Çmime konkurruese & transparencë",
    description: "Marrëdhënia me klientin fillon me besim. Ne sigurojmë çmime konkurruese dhe transparente për çdo projekt. Para se të fillojmë punën, ju ofrojmë një preventiv të detajuar, pa tarifa të fshehura, në mënyrë që të dini saktësisht çfarë po paguani dhe çfarë vlere do të merrni.",
  },
  {
    title: "Shërbim i Personalizuar",
    description: "Vëmendje individuale për çdo projekt elektrik, duke ju dhënë zgjidhjen më të mirë sipas nevojave tuaja.",
  }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-glass p-6 group cursor-pointer animate-scale-in"
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
                  <p className="text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
