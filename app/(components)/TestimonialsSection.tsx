const testimonials = [
  {
    name: "Elona K.",
    location: "Tiranë",
    testimonial:
      "Puna e Alex Elektrik është shembullore. Instalimi i sistemit elektrik në restorantin tonë u realizua shpejt, pa vonesa dhe me cilësi shumë të lartë. I rekomandoj me gjithë zemër.",
    rating: 5,
    project: "Instalim elektrik restauranti",
  },
  {
    name: "Erjon S.",
    location: "Durrës",
    testimonial:
      "Më në fund gjeta një elektricist të besueshëm! Alex Elektrik më zgjidhi problemin e instalimit të sistemit smart home në kohë rekord. Shërbim shumë profesional dhe korrekt.",
    rating: 5,
    project: "Sistem Smart Home",
  },
  {
    name: "Albana H.",
    location: "Astir",
    testimonial:
      "Kisha nevojë urgjente për riparime elektrike në shtëpi. Alex erdhi shumë shpejt dhe e zgjidhi problemin menjëherë. Më bëri përshtypje gatishmëria dhe korrektësia e tij.",
    rating: 5,
    project: "Ripartim elektrik në shtëpi",
  },
  {
    name: "Dritan P.",
    location: "Tiranë",
    testimonial:
      "Instalimi i karikuesit për makinën elektrike nga Alex ishte perfekt. Tani karikoj automjetin tim elektrik direkt në biznes pa asnjë shqetësim. Vërtet profesionist dhe shumë i besueshëm.",
    rating: 5,
    project: "Instalim karikues makine elektrike",
  },
];

export default function TestimonialsSection() {
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
            Dëshmi Klientësh
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Çfarë Thonë
            <span className="block text-gradient-sunset mt-2">
              Klientët Tanë
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Përvojat reale të klientëve tanë flasin më mirë se çdo premtim.
            Shikoni çfarë thonë ata që kanë zgjedhur shërbimet tona elektrike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass p-8 group cursor-pointer">
              {/* Quote Icon */}
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 gradient-electric rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating Stars */}
                <div className="flex ml-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                &quot;{testimonial.testimonial}&quot;
              </blockquote>

              {/* Project Badge */}
              <div className="inline-block px-3 py-1 bg-white/20 text-white/80 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/30">
                {testimonial.project}
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                </div>
                <div className="flex items-center text-white/60 text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {testimonial.location}
                </div>
              </div>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="card-glass pt-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bëhuni pjesë e familjes sonë të klientëve të kënaqur!
            </h3>
            <p className="text-white/80 mb-6">
              Filloni projektin tuaj sot dhe përjetoni të njëjtin nivel
              profesionalizmi dhe kualiteti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Kontaktoni për Ofertë
              </a>
              <a
                href="tel:+355123456789"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg">
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
                Telefononi Tani
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
