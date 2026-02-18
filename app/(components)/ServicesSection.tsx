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
      "<p>Kryejm&euml; <strong>instalime elektrike</strong> p&euml;r apartamente, vila dhe ambiente banimi. Siguri dhe efikasitet maksimal n&euml; &ccedil;do <strong>punim elektrik</strong>.</p>",
    gradient: "gradient-electric",
    color: "blue",
  },
  {
    image: CommercialElectric,
    title: "Shërbime për Biznese dhe Industri",
    description:
      "<p><strong>Instalime</strong> dhe <strong>riparime elektrike</strong> t&euml; specializuara p&euml;r zyra, lokale, restorante dhe fabrika, duke siguruar vazhdim&euml;si t&euml; aktivitetit tuaj.</p>",
    gradient: "gradient-sunset",
    color: "orange",
  },
  {
    image: SmartHome,
    title: "Sisteme Smart Home",
    description:
      "<p>Automatizoni sht&euml;pin&euml; tuaj me sisteme inteligjente <strong>(smart home)</strong> p&euml;r ndri&ccedil;im, siguri, dhe kontroll t&euml; pajisjeve n&euml; distanc&euml;.</p>",
    gradient: "gradient-mesh",
    color: "teal",
  },
  {
    image: ElectricCar,
    title: "Karikues për Makina Elektrike (EV)",
    description:
      "<p><strong>Instalim karikuesish</strong> p&euml;r automjete elektrike, duke garantuar karikim t&euml; shpejt&euml;, t&euml; sigurt dhe efikas n&euml; sht&euml;pi ose biznes.</p>",
    gradient: "gradient-aurora",
    color: "green",
  },
  {
    image: SolarPanel,
    title: "Instalime dhe Mirëmbajtje Panele Diellore",
    description:
      "<p><strong>Projektim</strong>, <strong>instalim</strong> dhe mir&euml;mbajtje t&euml; sistemeve solare p&euml;r energji t&euml; past&euml;r dhe kursim maksimal t&euml; <strong>energjis&euml; elektrike</strong>.</p>",
    gradient: "gradient-primary",
    color: "purple",
  },
  {
    image: Maintenance,
    title: "Mirëmbajtje & Diagnostikim Elektrik",
    description:
      "<p>Shërbim emergjent dhe mirëmbajtje periodike për të garantuar siguri maksimale dhe parandalim të avarive <strong>elektrike</strong>.</p>",
    gradient: "gradient-electric",
    color: "indigo",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="pb-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
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
            Nga <strong>riparimet elektrike</strong> shtëpiake deri te
            instalimet industriale, ne ofrojmë zgjidhje <strong>elektrike</strong> moderne të
            përshtatura sipas nevojave tuaja specifike.
          </p>
        </div>

        <ul
          aria-label="Shërbimet Elektrike që Ofrojmë"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <li
              key={index}
              aria-label={service.title}
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
              <div dangerouslySetInnerHTML={{ __html: service.description }} className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </li>
          ))}
        </ul>

        <section aria-labelledby="services-spotlight" className="mt-16">
          <h3
            id="services-spotlight"
            className="text-2xl font-bold text-gray-900">
            Zgjidhje të Specializuara
          </h3>
          <p className="mt-3 text-gray-600 max-w-3xl">
            Disa nga shërbimet tona kryesore kërkojnë planifikim dhe instalim
            të saktë për siguri, performancë dhe jetëgjatësi.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <article className="card-modern p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Karikues EV për Shtëpi & Biznese
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Ofrojmë vlerësim të linjës elektrike, zgjedhje të karikuesit të
                duhur dhe instalim të sigurt të{" "}
                <strong>karikuesve për makina elektrike</strong>. Zgjidhje të
                përshtatura për garazhe, parkingje biznesi dhe ambiente
                rezidenciale në Tiranë, Durrës dhe zonat përreth.
              </p>
            </article>

            <article className="card-modern p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Panele Diellore & Energji e Pastër
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Nga projektimi te{" "}
                <strong>instalimi i paneleve diellore</strong>, fokusohemi në
                eficiencë, kursim dhe siguri. Këshillojmë kapacitetin optimal
                sipas konsumit dhe ofrojmë mirëmbajtje për jetëgjatësi të sistemit
                fotovoltaik.
              </p>
            </article>

            <article className="card-modern p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Sisteme Smart Home
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Automatizoni ndriçimin, sigurinë dhe pajisjet me{" "}
                <strong>smart home</strong> të konfiguruar sipas nevojave tuaja.
                Integrime praktike për kontroll në distancë dhe optimizim të
                konsumit të energjisë në banesa dhe zyra.
              </p>
            </article>
          </div>
        </section>

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass pt-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gati për të Filluar?
            </h3>
            <p className="text-gray-600">
              Na kontaktoni sot për një konsultë falas dhe ofertë të
              personalizuar për projektin tuaj <strong>elektrik</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
