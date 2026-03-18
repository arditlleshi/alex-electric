import type { PageLocale, ProofItem } from "./types";

const albanianProofItems: ProofItem[] = [
  {
    id: "tirana-apartment-rewire",
    eyebrow: "Shembull pune",
    title: "Riorganizim instalimi elektrik ne apartament ne Tirane",
    city: "Tirane",
    propertyType: "Apartament familjar",
    summary:
      "Puna u perqendrua te pikat e reja te ndricimit, rishperndarja e prizave dhe balancimi i qarqeve per kuzhinen dhe kondicionerin.",
    bullets: [
      "Paneli u riorganizua per ngarkesa me te sigurta ditore.",
      "U shtuan pika te reja per kuzhine, internet dhe ndricim dekorativ.",
      "Pronari kerkonte zgjidhje qe te mbeshteste rinovimin pa prishje te panevojshme.",
    ],
    outcome:
      "Apartamenti fitoi rrjet me te qendrueshem, me pak mbingarkese dhe plan te qarte per zgjerime te ardhshme.",
  },
  {
    id: "durres-villa-seasonal-check",
    eyebrow: "Shembull pune",
    title: "Kontroll sezonal per vile ne Durres prane zones bregdetare",
    city: "Durres",
    propertyType: "Vile me perdorim sezonal",
    summary:
      "Objekti kishte nevoje per kontroll te panelit, ngrohjes se ujit dhe ndricimit te jashtem para sezonit te veres.",
    bullets: [
      "U verifikuan qarqet e lageshta dhe mbrojtja diferenciale.",
      "U riparuan pika ndricimi te jashtme dhe lidhje te demtuara nga lageshtia.",
      "Pronari kerkonte gatishmeri te plote per mysafire dhe perdorim intensiv gjate sezonit.",
    ],
    outcome:
      "Sistemi u stabilizua per perdorim sezonal, me me pak risk per nderprerje gjate periudhave me ngarkese te larte.",
  },
  {
    id: "tirana-emergency-panel",
    eyebrow: "Shembull pune",
    title: "Nderhyrje emergjente per panel elektrik me nderprerje te shpeshta",
    city: "Tirane",
    propertyType: "Apartament dhe zyre e vogel",
    summary:
      "Problemi kryesor ishte renia e vazhdueshme e siguresave gjate perdorimit te pajisjeve me ngarkese te larte.",
    bullets: [
      "U identifikua qark i mbingarkuar dhe nje lidhje e dobet ne panel.",
      "U ndane qarqet sipas konsumatoreve kryesore.",
      "Klienti kerkonte rikthim te shpejte te energjise dhe zgjidhje te sigurt afatgjate.",
    ],
    outcome:
      "Paneli u stabilizua, nderprerjet u reduktuan dhe objekti fitoi shperndarje me te sigurt te ngarkeses.",
  },
  {
    id: "tirana-smart-lighting",
    eyebrow: "Shembull pune",
    title: "Konfigurim smart home per ndricim dhe skenare perdorimi",
    city: "Tirane",
    propertyType: "Apartament modern",
    summary:
      "Instalimi lidhi celesa smart, skenare ndricimi dhe kontroll te larget per dhomat kryesore.",
    bullets: [
      "U ndertuan skenare per hyrje, mbremje dhe kursim energjie.",
      "Sistemi u pershtat me rrjetin ekzistues pa ndryshime te panevojshme.",
      "Qellimi ishte komoditet ditor dhe kontroll i thjeshte nga telefoni.",
    ],
    outcome:
      "Klienti fitoi kontroll me te qarte, me pak konsum te panevojshem dhe nje konfigurim te gatshem per zgjerim.",
  },
  {
    id: "tirana-ev-home",
    eyebrow: "Shembull pune",
    title: "Pergatitje linje dhe mbrojtjeje per karikues EV ne banese",
    city: "Tirane",
    propertyType: "Vile me parkim privat",
    summary:
      "Puna perfshiu vleresimin e kapacitetit te panelit, linje te dedikuar dhe mbrojtje per karikim te perditshem.",
    bullets: [
      "U kontrollua ngarkesa ekzistuese para zgjedhjes se fuqise se karikuesit.",
      "U percaktua vendosja me praktike per perdorim ditor.",
      "Klienti kerkonte zgjidhje te sigurt pa kompromentuar pajisjet e tjera te shtepise.",
    ],
    outcome:
      "Baneses iu shtua gatishmeri per automjet elektrik me instalim me te sigurt dhe me te parashikueshem.",
  },
  {
    id: "tirana-solar-business",
    eyebrow: "Shembull pune",
    title: "Vleresim dhe integrim per sistem diellor ne biznes",
    city: "Tirane",
    propertyType: "Biznes i vogel",
    summary:
      "U analizua konsumi ditor, kapaciteti i panelit dhe menyra e lidhjes se sistemit me rrjetin ekzistues.",
    bullets: [
      "U percaktuan qarqet qe perfitonin me shume nga prodhimi diellor.",
      "U planifikua qasje e thjeshte per mirembajtje dhe monitorim.",
      "Biznesi kerkonte ulje te kostove dhe me shume kontroll mbi ngarkesat kryesore.",
    ],
    outcome:
      "Projekti fitoi strukture me te qarte per investim dhe integrim me te sigurt me infrastrukturen ekzistuese.",
  },
  {
    id: "durres-hotel-maintenance",
    eyebrow: "Shembull pune",
    title: "Mirembajtje elektrike per objekt me dhoma turistike ne Durres",
    city: "Durres",
    propertyType: "Akomodim dhe hotel i vogel",
    summary:
      "Objekti kishte nevoje per kontroll te pikave te konsumit, ujit te ngrohte, ndricimit dhe panelit perpara fluksit te sezonit.",
    bullets: [
      "U testuan qarqet me perdorim intensiv dhe linjat e ujit te ngrohte.",
      "U korrigjuan disa pika qe krijonin renie tensioni ne oraret e ngarkuara.",
      "Qellimi ishte te shmangeshin nderprerjet gjate nderrimit te klienteve.",
    ],
    outcome:
      "Stafi fitoi funksionim me te qendrueshem dhe plan me te mire per mirembajtje gjate sezonit turistik.",
  },
];

const englishProofItems: ProofItem[] = [
  {
    id: "tirana-apartment-rewire",
    eyebrow: "Project snapshot",
    title: "Apartment electrical rework in Tirana",
    city: "Tirana",
    propertyType: "Family apartment",
    summary:
      "The work focused on new lighting points, better outlet placement, and cleaner circuit balancing for the kitchen and air-conditioning loads.",
    bullets: [
      "The panel layout was reorganized for safer everyday demand.",
      "New points were added for the kitchen, internet, and decorative lighting.",
      "The owner wanted a cleaner renovation path without unnecessary disruption.",
    ],
    outcome:
      "The apartment ended up with a more stable electrical layout, fewer overload risks, and a clearer base for future upgrades.",
  },
  {
    id: "durres-villa-seasonal-check",
    eyebrow: "Project snapshot",
    title: "Seasonal electrical check for a villa in Durres",
    city: "Durres",
    propertyType: "Seasonal villa",
    summary:
      "The property needed a panel review, hot-water load check, and outdoor-lighting inspection before the summer season.",
    bullets: [
      "Moisture-sensitive circuits and protective devices were checked first.",
      "Outdoor lighting points and weather-affected connections were repaired.",
      "The owner wanted the property ready for guests and higher summer use.",
    ],
    outcome:
      "The system was stabilized for seasonal use with less risk of interruption during peak occupancy.",
  },
  {
    id: "tirana-emergency-panel",
    eyebrow: "Project snapshot",
    title: "Emergency panel repair after repeated outages",
    city: "Tirana",
    propertyType: "Apartment and small office",
    summary:
      "The main issue was repeated breaker trips during heavier appliance use.",
    bullets: [
      "An overloaded circuit and a weak panel connection were identified.",
      "The main loads were separated into a safer circuit layout.",
      "The client needed a quick restore and a safer long-term fix.",
    ],
    outcome:
      "The panel became more stable, interruptions dropped, and the load distribution became safer.",
  },
  {
    id: "tirana-smart-lighting",
    eyebrow: "Project snapshot",
    title: "Smart lighting setup with practical daily scenes",
    city: "Tirana",
    propertyType: "Modern apartment",
    summary:
      "The installation connected smart switches, lighting scenes, and remote control for the main rooms.",
    bullets: [
      "Scenes were created for arrival, evening use, and energy saving.",
      "The system was fitted into the existing electrical layout without unnecessary rework.",
      "The goal was everyday convenience and easier control from the phone.",
    ],
    outcome:
      "The client gained clearer control, lower wasted consumption, and a setup that can be expanded later.",
  },
  {
    id: "tirana-ev-home",
    eyebrow: "Project snapshot",
    title: "Dedicated line and protection setup for a home EV charger",
    city: "Tirana",
    propertyType: "Villa with private parking",
    summary:
      "The job included panel-capacity review, a dedicated charger line, and proper protection for everyday charging.",
    bullets: [
      "Existing demand was checked before choosing the charger size.",
      "The most practical charger location was mapped around daily use.",
      "The client wanted safe charging without affecting the rest of the home.",
    ],
    outcome:
      "The property became EV-ready with a safer and more predictable charging setup.",
  },
  {
    id: "tirana-solar-business",
    eyebrow: "Project snapshot",
    title: "Solar planning and integration review for a small business",
    city: "Tirana",
    propertyType: "Small business",
    summary:
      "The work reviewed daily demand, panel capacity, and the safest way to connect the solar system to the existing setup.",
    bullets: [
      "The circuits that would benefit most from solar production were mapped first.",
      "A simpler maintenance and monitoring path was planned from the start.",
      "The business wanted lower costs and better control over core loads.",
    ],
    outcome:
      "The project got a clearer investment path and a safer integration plan for the existing infrastructure.",
  },
  {
    id: "durres-hotel-maintenance",
    eyebrow: "Project snapshot",
    title: "Electrical maintenance for guest rooms in Durres",
    city: "Durres",
    propertyType: "Small hotel and accommodation property",
    summary:
      "The property needed its key power points, hot-water loads, lighting, and panel reviewed before the seasonal rush.",
    bullets: [
      "High-use circuits and hot-water lines were tested first.",
      "Several voltage-drop points were corrected in the busiest usage zones.",
      "The goal was to avoid interruptions during guest turnover.",
    ],
    outcome:
      "The team got a more stable setup and a clearer maintenance path for the tourism season.",
  },
];

export const proofItems = albanianProofItems;

export const proofById = Object.fromEntries(
  albanianProofItems.map((item) => [item.id, item]),
) as Record<string, ProofItem>;

export const englishProofById = Object.fromEntries(
  englishProofItems.map((item) => [item.id, item]),
) as Record<string, ProofItem>;

export function getProofItem(
  id: string,
  locale: PageLocale = "sq-AL",
): ProofItem | undefined {
  if (locale === "en-US") {
    return englishProofById[id] ?? proofById[id];
  }

  return proofById[id];
}
