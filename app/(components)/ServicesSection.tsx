import Image from "next/image";
import ElectricCar from "@/public/icons/ev-charger.png";
import SolarPanel from "@/public/icons/solar-panel.png";
import ResidentialElectric from "@/public/icons/residential-electric.png";
import CommercialElectric from "@/public/icons/commercial-electric.png";
import SmartHome from "@/public/icons/smart-home.png";
import Maintenance from "@/public/icons/maintenance.png";

const services = [
  {
    image: ResidentialElectric,
    title: "Instalime Elektrike Rezidenciale",
    description:
      "Kryejmë instalime të plota elektrike për apartamente, vila dhe ambiente banimi. Siguri dhe efikasitet maksimal në çdo punim elektrik.",
    gradient: "gradient-electric",
    color: "blue",
  },
  {
    image: CommercialElectric,
    title: "Shërbime për Biznese dhe Industri",
    description:
      "Instalime dhe riparime elektrike të specializuara për zyra, lokale, restorante dhe fabrika, duke siguruar vazhdimësi të aktivitetit tuaj.",
    gradient: "gradient-sunset",
    color: "orange",
  },
  {
    image: SmartHome,
    title: "Sisteme Smart Home",
    description:
      "Automatizoni shtëpinë tuaj me sisteme inteligjente për ndriçim, siguri, dhe kontroll të pajisjeve në distancë.",
    gradient: "gradient-mesh",
    color: "teal",
  },
  {
    image: ElectricCar,
    title: "Karikues për Makina Elektrike (EV)",
    description:
      "Instalim karikuesish për automjete elektrike, duke garantuar karikim të shpejtë, të sigurt dhe efikas në shtëpi ose biznes.",
    gradient: "gradient-aurora",
    color: "green",
  },
  {
    image: SolarPanel,
    title: "Instalime dhe Mirëmbajtje Panele Diellore",
    description:
      "Projektim, instalim dhe mirëmbajtje të sistemeve solare për energji të pastër dhe kursim maksimal të energjisë elektrike.",
    gradient: "gradient-primary",
    color: "purple",
  },
  {
    image: Maintenance,
    title: "Mirëmbajtje & Diagnostikim Elektrik",
    description:
      "Shërbim emergjent dhe mirëmbajtje periodike për të garantuar siguri maksimale dhe parandalim të avarive elektrike.",
    gradient: "gradient-electric",
    color: "indigo",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 gradient-aurora rounded-full opacity-5 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 gradient-electric rounded-full opacity-5 animate-float"
          style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Ekspertiza Jonë
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Shërbimet Elektrike që Ofrojmë
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nga riparimet shtëpiake deri te instalimet industriale, ne ofrojmë
            zgjidhje elektrike moderne të përshtatura sipas nevojave tuaja
            specifike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative card-modern p-8 hover-glow hover:scale-105 transition-all duration-500">
              <div
                className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

              <div className="relative w-24 h-24 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  fill
                  placeholder="blur"
                  blurDataURL={service.image.src}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass pt-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gati për të Filluar?
            </h3>
            <p className="text-gray-600">
              Na kontaktoni sot për një konsultë falas dhe ofertë të
              personalizuar për projektin tuaj elektrik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
