import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 gradient-electric rounded-full opacity-10 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 gradient-aurora rounded-full opacity-10 animate-float"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-sunset rounded-full opacity-5 animate-float"
          style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-blue-400/30">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Ready to Power Your
            <span className="block text-gradient-sunset mt-2">
              Next Project?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and personalized quote. We&apos;re available
            24/7 for emergency services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone Card */}
          <div className="card-glass p-6 hover-lift group cursor-pointer animate-slide-in-left">
            <div className="text-center">
              <div className="w-16 h-16 gradient-electric rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Call Now</h3>
              <p className="text-gray-300 mb-4">
                Available 24/7 for emergency services and consultations
              </p>
              <a
                href="tel:1234567890"
                className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                +355 69 328 9443
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div
            className="card-glass p-6 hover-lift group cursor-pointer animate-fade-in-up flex flex-col"
            style={{ animationDelay: "0.2s" }}>
            <div className="text-center flex-grow">
              <div className="w-16 h-16 gradient-sunset rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">
                Send us your project details for a detailed quote
              </p>
            </div>
            <div className="text-center">
              <Link
                href="mailto:aleksander.gjoni85@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-orange-400 hover:text-orange-300 transition-colors block leading-relaxed">
                <span className="block break-all hyphens-auto text-center lg:text-left">aleksander.gjoni85@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div
            className="card-glass p-6 hover-lift group cursor-pointer animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="w-16 h-16 gradient-aurora rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-300 mb-4">
                Quick chat for instant responses and project updates
              </p>
              <Link
                href="https://wa.me/355693289443"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors">
                Start Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
