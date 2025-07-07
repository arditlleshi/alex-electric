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
    <rect x="90" y="40" width="20" height="120" fill="url(#heroGradient)" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="2"/>
    
    {/* Power lines */}
    <path d="M10 60 Q50 50 90 60" stroke="#FFA500" strokeWidth="3" fill="none"/>
    <path d="M110 60 Q150 50 190 60" stroke="#FFA500" strokeWidth="3" fill="none"/>
    <path d="M10 80 Q50 70 90 80" stroke="#FF6B35" strokeWidth="3" fill="none"/>
    <path d="M110 80 Q150 70 190 80" stroke="#FF6B35" strokeWidth="3" fill="none"/>
    
    {/* Electrical insulators */}
    <circle cx="90" cy="60" r="4" fill="#374151"/>
    <circle cx="90" cy="80" r="4" fill="#374151"/>
    <circle cx="110" cy="60" r="4" fill="#374151"/>
    <circle cx="110" cy="80" r="4" fill="#374151"/>
    
    {/* Houses connected to grid */}
    <g>
      {/* House 1 */}
      <path d="M20 120 L40 100 L60 120 L60 160 L20 160 Z" fill="url(#heroGradient)" fillOpacity="0.2" stroke="#3B82F6"/>
      <path d="M15 120 L40 95 L65 120 L60 117 L40 102 L20 117 Z" fill="#374151"/>
      <circle cx="35" cy="140" r="2" fill="#FFA500"/>
      <circle cx="45" cy="140" r="2" fill="#FFA500"/>
      <path d="M35 140 Q40 135 45 140" stroke="#FFA500" strokeWidth="1.5" fill="none"/>
      
      {/* House 2 */}
      <path d="M140 120 L160 100 L180 120 L180 160 L140 160 Z" fill="url(#heroGradient)" fillOpacity="0.2" stroke="#3B82F6"/>
      <path d="M135 120 L160 95 L185 120 L180 117 L160 102 L140 117 Z" fill="#374151"/>
      <circle cx="155" cy="140" r="2" fill="#FFA500"/>
      <circle cx="165" cy="140" r="2" fill="#FFA500"/>
      <path d="M155 140 Q160 135 165 140" stroke="#FFA500" strokeWidth="1.5" fill="none"/>
    </g>
    
    {/* Energy flow particles */}
    <g>
      <circle cx="30" cy="55" r="2" fill="#FFA500">
        <animate attributeName="cx" values="30;90" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="130" cy="55" r="2" fill="#FF6B35">
        <animate attributeName="cx" values="130;190" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="75" r="1.5" fill="#FFD700">
        <animate attributeName="cx" values="30;90" dur="1.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite"/>
      </circle>
    </g>
    
    {/* Lightning effects */}
    <g>
      <path d="M95 30 L92 40 L95 40 L92 50 L100 40 L95 40 Z" fill="#FFA500">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
      </path>
      <path d="M105 35 L102 45 L105 45 L102 55 L110 45 L105 45 Z" fill="#FFD700">
        <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite"/>
      </path>
    </g>
  </svg>
);

const SmallElectricalIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <linearGradient id="smallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>
    
    {/* Electric plug */}
    <rect x="30" y="40" width="40" height="30" rx="5" fill="url(#smallGradient)" fillOpacity="0.3" stroke="#FFA500" strokeWidth="2"/>
    
    {/* Plug pins */}
    <circle cx="40" cy="50" r="3" fill="#FFA500"/>
    <circle cx="60" cy="50" r="3" fill="#FFA500"/>
    <rect x="47" y="57" width="6" height="8" rx="1" fill="#FFA500"/>
    
    {/* Electric sparks */}
    <circle cx="25" cy="35" r="1.5" fill="#FFD700">
      <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="35" r="1.5" fill="#FFA500">
      <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="25" cy="75" r="1" fill="#FF6B35">
      <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="75" cy="75" r="1" fill="#FFD700">
      <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

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
