import ScrollButton from "./ScrollButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Powering Homes, Businesses & the Future
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-blue-100">
            With Over 15 Years of Experience
          </p>
          <p className="text-lg sm:text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Reliable, Professional Electrician – Residential | Commercial |
            Industrial
          </p>
                      <ScrollButton 
              sectionId="contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Request a Free Quote
            </ScrollButton>
        </div>
      </div>

      {/* Lightning bolt animation */}
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 animate-pulse">
        <svg
          className="w-8 h-8 text-yellow-400"
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
