import avatar from "@/public/avatar.jpg";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 gradient-aurora rounded-full opacity-10 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 gradient-electric rounded-full opacity-10 animate-float"
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Njihuni me Ekspertin
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Alex Electric - Elektricisti Juaj
                <span className="block text-gradient mt-2">i Besuar</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="card-modern p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-electric rounded-lg flex items-center justify-center flex-shrink-0">
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
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Mbi 15 Vjet Eksperiencë
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mbi një dekadë e gjysmë eksperiencë praktike duke ofruar
                      shërbime elektrike profesionale në sektorët rezidencialë,
                      komercialë dhe industrialë.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card-modern p-6 hover-lift"
                style={{ animationDelay: "0.2s" }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Teknologji Moderne
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Gjithmonë të përditësuar me standardet më të fundit
                      elektrike, teknologjitë e shtëpive inteligjente dhe
                      zgjidhjet energjetike të qëndrueshme si panelet diellore
                      dhe karikimi i automjeteve elektrike.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card-modern p-6 hover-lift"
                style={{ animationDelay: "0.4s" }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-aurora rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Licensuar & Siguruar
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Profesionist plotësisht i licensuar, i siguruar dhe i
                      çertifikuar që kombinon përsosmërinë teknike me shërbimin
                      e ndershëm dhe të besueshëm që ju kërkoni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main image container with modern effects */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-electric-lg hover-glow hover-lift transition-all duration-300 group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 gradient-electric opacity-80"></div>

                {/* Professional placeholder with modern styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 relative bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm border border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={avatar}
                        alt="Aleksander Gjoni"
                        fill
                        sizes="128px"
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-2xl mb-2">
                      Aleksander Gjoni
                    </h3>
                    <p className="text-blue-200 text-lg font-medium">
                      Elektricist Profesionist
                    </p>
                    <p className="text-blue-300 text-sm mt-2">
                      Licensed Professional #EL-2024-001
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-1 -right-1 md:-top-6 md:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl animate-float hover-lift z-50 border border-blue-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">15+</div>
                  <div className="text-xs text-blue-600 font-medium">Vjet</div>
                </div>
              </div>

              <div
                className="absolute -bottom-1 -left-1 md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl animate-float hover-lift z-10 border border-emerald-200/50"
                style={{ animationDelay: "2s" }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700">
                    24/7
                  </div>
                  <div className="text-xs text-emerald-600 font-medium">
                    Në dispozicion
                  </div>
                </div>
              </div>

              {/* Additional badge */}
              <div
                className="absolute -top-1 -left-1 md:-top-6 md:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-2xl animate-float hover-lift z-10 border border-green-200/50"
                style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs text-green-700 font-medium">
                    Licensuar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
