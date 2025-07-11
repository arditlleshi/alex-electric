import Link from "next/link";

// Hero Section Electrical Illustrations
const HeroElectricalIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>

    {/* Main electrical tower */}
    <rect
      x="90"
      y="40"
      width="20"
      height="120"
      fill="url(#heroGradient)"
      fillOpacity="0.3"
      stroke="#3B82F6"
      strokeWidth="2"
    />

    {/* Power lines */}
    <path
      d="M10 60 Q50 50 90 60"
      stroke="#FFA500"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M110 60 Q150 50 190 60"
      stroke="#FFA500"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M10 80 Q50 70 90 80"
      stroke="#FF6B35"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M110 80 Q150 70 190 80"
      stroke="#FF6B35"
      strokeWidth="3"
      fill="none"
    />

    {/* Electrical insulators */}
    <circle cx="90" cy="60" r="4" fill="#374151" />
    <circle cx="90" cy="80" r="4" fill="#374151" />
    <circle cx="110" cy="60" r="4" fill="#374151" />
    <circle cx="110" cy="80" r="4" fill="#374151" />

    {/* Houses connected to grid */}
    <g>
      {/* House 1 */}
      <path
        d="M20 120 L40 100 L60 120 L60 160 L20 160 Z"
        fill="url(#heroGradient)"
        fillOpacity="0.2"
        stroke="#3B82F6"
      />
      <path
        d="M15 120 L40 95 L65 120 L60 117 L40 102 L20 117 Z"
        fill="#374151"
      />
      <circle cx="35" cy="140" r="2" fill="#FFA500" />
      <circle cx="45" cy="140" r="2" fill="#FFA500" />
      <path
        d="M35 140 Q40 135 45 140"
        stroke="#FFA500"
        strokeWidth="1.5"
        fill="none"
      />

      {/* House 2 */}
      <path
        d="M140 120 L160 100 L180 120 L180 160 L140 160 Z"
        fill="url(#heroGradient)"
        fillOpacity="0.2"
        stroke="#3B82F6"
      />
      <path
        d="M135 120 L160 95 L185 120 L180 117 L160 102 L140 117 Z"
        fill="#374151"
      />
      <circle cx="155" cy="140" r="2" fill="#FFA500" />
      <circle cx="165" cy="140" r="2" fill="#FFA500" />
      <path
        d="M155 140 Q160 135 165 140"
        stroke="#FFA500"
        strokeWidth="1.5"
        fill="none"
      />
    </g>

    {/* Energy flow particles */}
    <g>
      <circle cx="30" cy="55" r="2" fill="#FFA500">
        <animate
          attributeName="cx"
          values="30;90"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="130" cy="55" r="2" fill="#FF6B35">
        <animate
          attributeName="cx"
          values="130;190"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="30" cy="75" r="1.5" fill="#FFD700">
        <animate
          attributeName="cx"
          values="30;90"
          dur="1.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
    </g>

    {/* Lightning effects */}
    <g>
      <path d="M95 30 L92 40 L95 40 L92 50 L100 40 L95 40 Z" fill="#FFA500">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M105 35 L102 45 L105 45 L102 55 L110 45 L105 45 Z"
        fill="#FFD700">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

const SmallElectricalIcon = ({
  className = "w-16 h-16",
}: {
  className?: string;
}) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="smallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>

    {/* Electric plug */}
    <rect
      x="30"
      y="40"
      width="40"
      height="30"
      rx="5"
      fill="url(#smallGradient)"
      fillOpacity="0.3"
      stroke="#FFA500"
      strokeWidth="2"
    />

    {/* Plug pins */}
    <circle cx="40" cy="50" r="3" fill="#FFA500" />
    <circle cx="60" cy="50" r="3" fill="#FFA500" />
    <rect x="47" y="57" width="6" height="8" rx="1" fill="#FFA500" />

    {/* Electric sparks */}
    <circle cx="25" cy="35" r="1.5" fill="#FFD700">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="75" cy="35" r="1.5" fill="#FFA500">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="25" cy="75" r="1" fill="#FF6B35">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="75" cy="75" r="1" fill="#FFD700">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 gradient-mesh animate-gradient"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Electrical work illustrations - more subtle */}
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

      {/* Electrical work illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 opacity-20">
          <HeroElectricalIllustration />
        </div>
        <div className="absolute top-20 right-10 w-48 h-48 opacity-15">
          <HeroElectricalIllustration />
        </div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 opacity-10">
          <SmallElectricalIcon className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 opacity-15">
          <SmallElectricalIcon className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up space-y-8">
          {/* Main heading with gradient text */}
          <h1 className="leading-tight font-extrabold">
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-gradient-aurora tracking-tight">
              Elektricist Profesionist
            </span>
            <span className="mt-4 block font-semibold text-2xl sm:text-4xl lg:text-5xl text-gray-300">
              Instalime dhe Riparime Elektrike
            </span>
          </h1>

          {/* Subtitle with improved glassmorphism */}
          <div className="glass-dark rounded-2xl p-6 mx-auto max-w-4xl backdrop-blur-md">
            <p className="text-lg sm:text-xl text-gray-200/90 leading-relaxed">
              Alex Elektrik ofron shërbime elektrike profesionale në Tiranë,
              duke përfshirë <strong>instalime elektrike</strong>,{" "}
              <strong>riparime emergjente</strong>,{" "}
              <strong>sisteme smart home</strong>,{" "}
              <strong>karikues për makina elektrike</strong> dhe{" "}
              <strong>panele diellore</strong>. Zgjidhje të sigurta, moderne dhe
              me çmime transparente.
            </p>
          </div>

          {/* Call-to-action Buttons */}
          <div className="flex justify-center items-center flex-wrap gap-4 pt-4">
            <Link
              href="#contact"
              className="group btn-modern inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-lg shadow-electric-lg hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone-icon lucide-phone w-5 h-5 mr-3 transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              Kontakto Tani
            </Link>
            <Link
              href="#services"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gray-700/50 border border-gray-600 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-700/80 hover:border-gray-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-900">
              Shiko Shërbimet
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right-icon lucide-arrow-right w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to next section">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
