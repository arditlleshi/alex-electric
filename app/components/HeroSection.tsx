export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 gradient-mesh animate-gradient"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 gradient-electric rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 gradient-sunset rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute bottom-32 left-32 w-40 h-40 gradient-aurora rounded-full opacity-25 animate-float"
          style={{ animationDelay: "4s" }}></div>
        <div
          className="absolute bottom-20 right-20 w-20 h-20 gradient-primary rounded-full opacity-35 animate-float"
          style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Main heading with gradient text */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">Fuqizojmë</span>
            <span className="block text-gradient-sunset text-responsive-xl">
              të Ardhmen e
            </span>
            <span className="block text-white">Energjisë</span>
          </h1>

          {/* Subtitle with glassmorphism */}
          <div className="glass rounded-2xl p-6 mb-8 mx-auto max-w-3xl">
            <p className="text-xl sm:text-2xl mb-4 text-white font-light">
              Mbi 15 Vjet Eksperiencë Profesionale
            </p>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Nga smart homes te sistemet industriale, ne ofrojmë zgjidhje
              elektrike moderne që lehtësojnë jetën tuaj.
            </p>
          </div>
        </div>
      </div>

      {/* Animated electrical elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}></div>
          <div
            className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}></div>
        </div>
      </div>

      {/* Lightning bolt animations */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <svg
          className="w-8 h-8 text-yellow-400 animate-pulse"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div
        className="absolute top-1/3 right-1/4 animate-float"
        style={{ animationDelay: "3s" }}>
        <svg
          className="w-6 h-6 text-yellow-400 animate-pulse"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
}
