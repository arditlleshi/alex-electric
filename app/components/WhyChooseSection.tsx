const benefits = [
  {
    title: "Mbi 15 Vjet Eksperiencë",
    description: "Eksperiencë e gjerë praktike në të gjitha llojet e projekteve dhe instalimeve elektrike."
  },
  {
    title: "Plotësisht të Licensuar & të Siguruar",
    description: "Licenca profesionale dhe mbulim i plotë sigurimi për qetësinë tuaj."
  },
  {
    title: "Në Kohë & të Besueshëm",
    description: "Shërbim i përpiktë dhe komunikim i besueshëm në çdo fazë të projektit."
  },
  {
    title: "Zgjidhje Moderne & të Qëndrueshme",
    description: "Teknologjia më e fundit dhe zgjidhje elektrike miqësore me mjedisin për instalime të së ardhmes."
  },
  {
    title: "Çmime Konkurruese",
    description: "Çmime transparente, të drejta dhe pa kosto të fshehura apo surpriza të padëshiruara."
  },
  {
    title: "Siguria në Plan të Parë",
    description: "Respektim rigoroz i standardeve dhe kodeve të sigurisë për çdo instalim dhe riparim elektrik."
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 gradient-mesh text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-white/20 text-white/90 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/30">
          Pse të Na Zgjidhni Ne
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Pse të Zgjidhni
            <span className="block text-gradient-sunset mt-2">Alex Electric?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Provoni ndryshimin që sjell bashkëpunimi me një profesionist të vërtetë, i cili vë në plan të parë sigurinë dhe kënaqësinë tuaj.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-glass p-6 hover-lift group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 gradient-electric rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-white/80 leading-relaxed">{benefit.description}</p>
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