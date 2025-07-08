const ElectricalWorkIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full">
    {/* Background */}
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="toolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>

    {/* House outline */}
    <path
      d="M50 200 L200 50 L350 200 L350 350 L50 350 Z"
      fill="url(#bgGradient)"
      fillOpacity="0.1"
      stroke="#3B82F6"
      strokeWidth="2"
    />

    {/* Roof */}
    <path
      d="M40 200 L200 40 L360 200 L340 190 L200 60 L60 190 Z"
      fill="#374151"
    />

    {/* Electrical panel */}
    <rect x="280" y="150" width="50" height="80" fill="#6B7280" rx="5" />
    <rect x="285" y="155" width="40" height="70" fill="#374151" rx="3" />

    {/* Panel switches */}
    <rect x="290" y="165" width="8" height="15" fill="#10B981" rx="2" />
    <rect x="302" y="165" width="8" height="15" fill="#EF4444" rx="2" />
    <rect x="314" y="165" width="8" height="15" fill="#10B981" rx="2" />
    <rect x="290" y="185" width="8" height="15" fill="#10B981" rx="2" />
    <rect x="302" y="185" width="8" height="15" fill="#10B981" rx="2" />
    <rect x="314" y="185" width="8" height="15" fill="#EF4444" rx="2" />

    {/* Electrician figure */}
    <g>
      {/* Head */}
      <circle cx="200" cy="180" r="20" fill="#FDB462" />
      {/* Hard hat */}
      <path
        d="M180 165 Q200 155 220 165 Q220 175 200 175 Q180 175 180 165"
        fill="#FFD700"
      />
      {/* Body */}
      <rect x="185" y="200" width="30" height="50" fill="#1E40AF" rx="5" />
      {/* Arms */}
      <rect x="160" y="210" width="20" height="8" fill="#FDB462" rx="4" />
      <rect x="220" y="210" width="20" height="8" fill="#FDB462" rx="4" />
      {/* Tool in hand */}
      <rect
        x="240"
        y="205"
        width="15"
        height="4"
        fill="url(#toolGradient)"
        rx="2"
      />
      {/* Legs */}
      <rect x="190" y="250" width="8" height="30" fill="#1E40AF" />
      <rect x="202" y="250" width="8" height="30" fill="#1E40AF" />
      {/* Feet */}
      <ellipse cx="194" cy="285" rx="8" ry="5" fill="#374151" />
      <ellipse cx="206" cy="285" rx="8" ry="5" fill="#374151" />
    </g>

    {/* Electrical wires */}
    <path
      d="M280 180 Q250 170 220 180"
      stroke="#FFA500"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M280 190 Q250 200 220 190"
      stroke="#FF6B35"
      strokeWidth="3"
      fill="none"
    />

    {/* Electrical symbols */}
    <g>
      {/* Lightning bolt */}
      <path
        d="M320 100 L315 110 L320 110 L315 120 L325 110 L320 110 Z"
        fill="#FFA500"
      />
      {/* Outlet */}
      <rect x="100" y="200" width="20" height="15" fill="#374151" rx="2" />
      <circle cx="105" cy="207" r="2" fill="#1F2937" />
      <circle cx="115" cy="207" r="2" fill="#1F2937" />
      <rect x="108" y="210" width="4" height="3" fill="#1F2937" />
    </g>

    {/* Sparks/electricity effect */}
    <g>
      <circle cx="240" cy="170" r="2" fill="#FFA500">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="245" cy="175" r="1.5" fill="#FFD700">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="235" cy="175" r="1" fill="#FF6B35">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 gradient-aurora rounded-full opacity-10 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 gradient-electric rounded-full opacity-10 animate-float"
          style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Njihuni me Ekspertin
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Alex Elektrik - Elektriçisti Juaj
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
                      Siguruar & I Besueshëm
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Profesionist plotësisht i siguruar dhe i çertifikuar që
                      kombinon përsosmërinë teknike me shërbimin e ndershëm dhe
                      të besueshëm që ju kërkoni.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-electric-lg hover-glow hover-lift transition-all duration-300 group">
                <div className="absolute inset-0 gradient-electric opacity-80"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 relative">
                    <ElectricalWorkIllustration />
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center text-white mt-80">
                    <h3 className="font-bold text-2xl mb-2">
                      Aleksander Gjoni
                    </h3>
                    <p className="text-blue-200 text-lg font-medium">
                      Elektriçist Profesionist
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-1 -right-1 md:-top-6 md:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl animate-float hover-lift z-50 border border-blue-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">15+</div>
                  <div className="text-xs text-blue-600 font-medium">Vjet</div>
                </div>
              </div>

              <div
                className="absolute -bottom-20 -left-1 md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl animate-float hover-lift z-10 border border-emerald-200/50"
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

              <div
                className="absolute -top-1 -left-1 md:-top-6 md:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-2xl animate-float hover-lift z-10 border border-green-200/50"
                style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs text-green-700 font-medium">
                    I Besueshëm
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
