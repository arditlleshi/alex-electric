import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

// Professional Electrical Consultation Illustration
const ElectricalConsultationIllustration = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full">
    <defs>
      <linearGradient id="consultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="electricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA500" />
        <stop offset="100%" stopColor="#FF6B35" />
      </linearGradient>
    </defs>

    {/* Background buildings */}
    <rect
      x="50"
      y="80"
      width="200"
      height="100"
      fill="url(#consultGradient)"
      fillOpacity="0.1"
      stroke="#3B82F6"
      strokeWidth="2"
      rx="5"
    />

    {/* Office building windows */}
    <rect
      x="70"
      y="100"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />
    <rect
      x="90"
      y="100"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />
    <rect
      x="110"
      y="100"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />
    <rect
      x="130"
      y="100"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />

    <rect
      x="70"
      y="130"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />
    <rect
      x="90"
      y="130"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />
    <rect
      x="110"
      y="130"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />
    <rect
      x="130"
      y="130"
      width="15"
      height="15"
      fill="#60A5FA"
      fillOpacity="0.3"
    />

    {/* Electrician figure */}
    <g>
      {/* Head */}
      <circle cx="200" cy="50" r="15" fill="#FDB462" />
      {/* Hard hat */}
      <path
        d="M185 38 Q200 30 215 38 Q215 45 200 45 Q185 45 185 38"
        fill="#FFD700"
      />
      {/* Body */}
      <rect x="190" y="65" width="20" height="35" fill="#1E40AF" rx="3" />
      {/* Arms */}
      <rect x="175" y="75" width="15" height="6" fill="#FDB462" rx="3" />
      <rect x="210" y="75" width="15" height="6" fill="#FDB462" rx="3" />
      {/* Legs */}
      <rect x="195" y="100" width="6" height="25" fill="#1E40AF" />
      <rect x="202" y="100" width="6" height="25" fill="#1E40AF" />
      {/* Feet */}
      <ellipse cx="198" cy="130" rx="6" ry="4" fill="#374151" />
      <ellipse cx="205" cy="130" rx="6" ry="4" fill="#374151" />
    </g>

    {/* Electrical equipment */}
    <rect x="170" y="110" width="25" height="40" fill="#374151" rx="3" />
    <rect x="173" y="113" width="19" height="34" fill="#6B7280" rx="2" />

    {/* Panel switches */}
    <rect x="176" y="118" width="3" height="6" fill="#10B981" rx="1" />
    <rect x="182" y="118" width="3" height="6" fill="#EF4444" rx="1" />
    <rect x="188" y="118" width="3" height="6" fill="#10B981" rx="1" />
    <rect x="176" y="128" width="3" height="6" fill="#10B981" rx="1" />
    <rect x="182" y="128" width="3" height="6" fill="#10B981" rx="1" />
    <rect x="188" y="128" width="3" height="6" fill="#EF4444" rx="1" />

    {/* Tools */}
    <rect
      x="230"
      y="115"
      width="15"
      height="3"
      fill="url(#electricGradient)"
      rx="1"
    />
    <rect
      x="230"
      y="125"
      width="12"
      height="3"
      fill="url(#electricGradient)"
      rx="1"
    />
    <rect
      x="230"
      y="135"
      width="10"
      height="3"
      fill="url(#electricGradient)"
      rx="1"
    />

    {/* Electrical wires */}
    <path
      d="M195 110 Q185 105 175 110"
      stroke="#FFA500"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M195 120 Q185 115 175 120"
      stroke="#FF6B35"
      strokeWidth="2"
      fill="none"
    />

    {/* Phone/communication device */}
    <rect x="20" y="60" width="20" height="30" fill="#374151" rx="5" />
    <rect x="23" y="63" width="14" height="24" fill="#1F2937" rx="2" />
    <circle cx="30" cy="85" r="2" fill="#10B981" />

    {/* Communication waves */}
    <g stroke="#10B981" strokeWidth="2" fill="none">
      <path d="M45 70 Q55 65 65 70">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M45 75 Q55 70 65 75">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M45 80 Q55 75 65 80">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </path>
    </g>

    {/* Electric sparks */}
    <circle cx="210" cy="95" r="1.5" fill="#FFA500">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="215" cy="100" r="1" fill="#FFD700">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="1.3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="205" cy="100" r="1" fill="#FF6B35">
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="0.9s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

const items: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  label: string;
  color: string;
  textColor: string;
}[] = [
  {
    title: "Telefononi Tani",
    description: "Disponibël 24/7 për shërbime emergjente dhe konsultime",
    icon: <Phone className="w-8 h-8 text-white" />,
    link: "tel:+355693289443",
    label: "355 69 328 9443",
    color: "gradient-electric",
    textColor: "text-blue-400 hover:text-blue-300",
  },
  {
    title: "Dërgoni Email",
    description:
      "Na dërgoni detajet e projektit tuaj për një ofertë të detajuar",
    icon: <Mail className="w-8 h-8 text-white" />,
    link: "mailto:aleksander.gjoni85@gmail.com",
    label: "aleksander.gjoni85@gmail.com",
    color: "gradient-sunset",
    textColor:
      "text-orange-400 hover:text-orange-300 block break-all hyphens-auto text-center lg:text-left",
  },
  {
    title: "WhatsApp",
    description:
      "Bisedë e shpejtë për përgjigje të menjëhershme dërgoni detajet e projektit tuaj për një ofertë të detajuar",
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    link: "https://wa.me/355693289443",
    label: "Na shkruani",
    color: "gradient-aurora",
    textColor: "text-green-400 hover:text-green-300",
  },
];

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

      {/* Professional consultation illustration */}
      <div className="absolute top-10 right-10 w-80 h-52 opacity-15">
        <ElectricalConsultationIllustration />
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
            Na Kontaktoni
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Kontaktoni
            <span className="block text-gradient-sunset mt-2">
              Alex Elektrik
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Keni një projekt elektrik apo emergjencë? Kontaktoni tani për një
            konsultim falas dhe një ofertë të personalizuar. Alex Elektrik është
            gjithmonë i gatshëm t&apos;ju ndihmojë, 24 orë në ditë, 7 ditë në
            javë.
          </p>
          <address className="mt-6 text-sm sm:text-base text-gray-300 not-italic">
            <p>
              <strong className="text-white">Vendndodhja:</strong> Tiranë,
              Shqipëri
            </p>
            <p>
              <strong className="text-white">Zona kryesore:</strong> Tiranë
            </p>
            <p>
              <strong className="text-white">Zonat e mbuluara:</strong> Durrës
              dhe zonat përreth (sipas kërkesës edhe më gjerë)
            </p>
          </address>
        </div>

        <ul
          aria-label="contact items"
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <li
              aria-label={item.title}
              key={index}
              className="card-glass p-6 group cursor-pointer animate-slide-in-right hover:scale-105 transition-all duration-500 hover:shadow-lg"
              style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl mx-auto mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl font-bold ${item.textColor} transition-colors`}>
                  {item.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
