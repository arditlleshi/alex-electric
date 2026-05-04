import { albanianGuideSlugs } from "./albanian-services";
import { englishGuideSlugs } from "./english-services";

export type GuideLocale = "sq-AL" | "en-US";

export interface GuideLink {
  slug: string;
  path: string;
  label: string;
}

export interface GuideSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideProofReference {
  proofId: string;
  note: string;
}

export interface GuidePageEntry {
  slug: string;
  path: string;
  locale: GuideLocale;
  guideType: "existing" | "planned";
  title: string;
  description: string;
  excerpt: string;
  eyebrow: string;
  date: string;
  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  audience?: string;
  city?: string;
  sections: readonly GuideSection[];
  faq: readonly GuideFAQ[];
  primaryService: GuideLink;
  secondaryService: GuideLink;
  relatedServices: readonly GuideLink[];
  relatedGuideSlugs: readonly string[];
  proofReferences: readonly GuideProofReference[];
  featured?: boolean;
}

const normalizeGuideValue = (slug: string) => slug.replace(/^\/blog\//, "");
const blogPath = (slug: string) => `/blog/${normalizeGuideValue(slug)}`;
const sqService = (slug: string, label: string): GuideLink => ({
  slug,
  path: `/sherbime/${slug}`,
  label,
});
const enService = (slug: string, label: string): GuideLink => ({
  slug,
  path: `/en/services/${slug}`,
  label,
});
const section = (
  title: string,
  paragraphs: string[],
  bullets?: string[],
): GuideSection => ({ title, paragraphs, bullets });
const faq = (question: string, answer: string): GuideFAQ => ({ question, answer });
const proof = (proofId: string, note: string): GuideProofReference => ({
  proofId,
  note,
});

const sq = {
  tirane: sqService("elektricist-tirane", "Elektricist ne Tirane"),
  durres: sqService("elektricist-durres", "Elektricist ne Durres"),
  urgent: sqService("elektricist-urgjent-tirane", "Elektricist urgjent ne Tirane"),
  repair: sqService("riparime-elektrike-tirane", "Riparime elektrike ne Tirane"),
  install: sqService("instalime-elektrike-tirane", "Instalime elektrike ne Tirane"),
  diagnosis: sqService("diagnostikim-elektrik-tirane", "Diagnostikim elektrik ne Tirane"),
  panel: sqService("panel-elektrik-tirane", "Panel elektrik ne Tirane"),
  lighting: sqService("ndricim-led-tirane", "Ndricim LED ne Tirane"),
  outlets: sqService("priza-celesa-tirane", "Priza dhe celesa ne Tirane"),
  business: sqService("mirembajtje-elektrike-biznese", "Mirembajtje elektrike per biznese"),
  smart: sqService("smart-home-tirane", "Smart home ne Tirane"),
  apartment: sqService("elektricist-per-apartamente", "Elektricist per apartamente"),
  villa: sqService("elektricist-per-vila", "Elektricist per vila"),
  hospitality: sqService(
    "elektricist-per-restorante-hotele",
    "Elektricist per restorante dhe hotele",
  ),
  offices: sqService("elektricist-per-zyra-dyqane", "Elektricist per zyra dhe dyqane"),
  solar: sqService("panele-diellore-tirane", "Panele diellore ne Tirane"),
  ev: sqService("karikues-ev-tirane", "Karikues EV ne Tirane"),
} as const;

const en = {
  tirana: enService("electrician-tirana", "English-speaking electrician in Tirana"),
  emergency: enService("emergency-electrician-tirana", "Emergency electrician in Tirana"),
  expats: enService("electrician-for-expats", "Electrician in Tirana for expats"),
  airbnb: enService("electrician-for-airbnb-hosts", "Electrician for Airbnb hosts"),
  landlords: enService("electrician-for-landlords", "Electrician for landlords"),
  offices: enService("electrician-for-offices-and-shops", "Electrician for offices and shops"),
  ev: enService("ev-charger-installation-tirana", "EV charger installation in Tirana"),
  solar: enService("solar-panel-installation-tirana", "Solar panel installation in Tirana"),
  durres: enService("electrician-durres", "English-speaking electrician in Durres"),
} as const;

const proofIds = {
  tiranaApartmentRewire: "tirana-apartment-rewire",
  durresSeasonalCheck: "durres-villa-seasonal-check",
  tiranaEmergencyPanel: "tirana-emergency-panel",
  tiranaSmartLighting: "tirana-smart-lighting",
  tiranaEvHome: "tirana-ev-home",
  tiranaSolarBusiness: "tirana-solar-business",
  durresHotelMaintenance: "durres-hotel-maintenance",
} as const;

const rawGuidePages = [
  {
    slug: englishGuideSlugs.englishTiranaGuide,
    path: blogPath(englishGuideSlugs.englishTiranaGuide),
    locale: "en-US",
    guideType: "existing",
    title: "English-speaking electrician in Tirana: what to prepare before the first visit",
    description:
      "A practical English guide for expats and foreign residents who want to prepare the right details before the first electrician visit in Tirana.",
    excerpt:
      "A first-visit checklist for foreign residents who want to explain the problem clearly and avoid wasted time on the first callout.",
    eyebrow: "English guide",
    date: "2026-02-18",
    primaryKeyword: "english speaking electrician tirana",
    secondaryKeywords: [
      "electrician in tirana",
      "expat electrician tirana",
      "emergency electrician tirana",
    ],
    audience: "Expats, foreign homeowners, and international businesses",
    city: "Tirana",
    sections: [
      section(
        "Prepare the basic property details first",
        [
          "Before the first visit, note the property type, neighborhood, and whether the issue affects the whole property or only one room.",
          "That gives the electrician enough context to tell whether the first step is a fault callout, a handover check, or a planned upgrade visit.",
        ],
        [
          "Property type and neighborhood",
          "Which room or circuit is affected",
          "Whether the issue is constant or only appears under load",
        ],
      ),
      section(
        "Know which symptoms matter most",
        [
          "A burning smell, heat at a socket, visible sparks, or repeated breaker trips should be mentioned immediately because they change the urgency of the visit.",
          "A clear symptom description often matters more than a long story about the whole property.",
        ],
        [
          "Burning smell or visible heat",
          "Breaker trips or partial outage",
          "Recent renovation or new appliance",
        ],
      ),
      section(
        "Prepare photos if the issue is visible",
        [
          "A photo of the panel, the affected socket, or the lighting point can make the first conversation much shorter and more useful.",
          "This is especially helpful when you are booking in English from abroad or helping a tenant remotely.",
        ],
        [
          "Panel photo",
          "Photo of the affected point",
          "Short note about when the problem appears",
        ],
      ),
      section(
        "Use the first visit to separate repair from upgrade work",
        [
          "The first visit should help you understand whether you need a quick repair, a wider panel review, or a bigger upgrade for EV, solar, or renovation work.",
        ],
      ),
    ],
    faq: [
      faq(
        "Do I need Albanian to book?",
        "No. This page is meant for people who want to prepare the first conversation in English.",
      ),
      faq(
        "What should I send before the first visit?",
        "The best starting point is the property type, the location, the main symptom, and any photo of the panel or affected point.",
      ),
      faq(
        "Is this the same as a guide about choosing who to hire?",
        "No. This page is about preparing the first visit well. A separate guide should help you compare electricians and quotes.",
      ),
    ],
    primaryService: en.tirana,
    secondaryService: en.expats,
    relatedServices: [en.emergency, en.airbnb, en.landlords],
    relatedGuideSlugs: [englishGuideSlugs.airbnbChecklist, englishGuideSlugs.apartmentChecklist],
    proofReferences: [
      proof(proofIds.tiranaApartmentRewire, "Use the Tirana apartment repair story as the main trust signal."),
      proof(proofIds.tiranaEmergencyPanel, "Pair it with an emergency response example if the page needs stronger urgency."),
    ],
    featured: true,
  },
  {
    slug: "instalime-elektrike-shtepi-zyra-biznese",
    path: blogPath("instalime-elektrike-shtepi-zyra-biznese"),
    locale: "sq-AL",
    guideType: "existing",
    title: "Instalime elektrike moderne per shtepi, zyra dhe biznese",
    description:
      "Një përmbledhje profesionale e shërbimeve elektrike: instalime, riparime, panele diellore dhe stacione karikimi për automjete elektrike.",
    excerpt:
      "Një guidë praktike për pronarë shtëpish, zyrash dhe biznesesh që duan instalim më të sigurt dhe më të rregullt.",
    eyebrow: "Udhëzues praktik",
    date: "2025-11-25",
    primaryKeyword: "instalime elektrike tirane",
    secondaryKeywords: [
      "punime elektrike",
      "panel elektrik",
      "panele diellore",
      "karikues ev",
    ],
    audience: "Pronare banesash, zyrash dhe biznesesh",
    city: "Tirane",
    sections: [
      section(
        "Planifikimi i instalimeve elektrike",
        [
          "Çdo projekt nis me vlerësimin e ngarkesës, pozicionit të prizave dhe nevojës për ndriçim.",
          "Në banesa fokusi është komoditeti, ndërsa në zyra dhe biznese rëndësi ka ngarkesa dhe zgjerimi i ardhshëm.",
        ],
        [
          "Priza të vendosura mirë",
          "Pika ndriçimi të pastra",
          "Rrjet i menduar për zgjerim",
        ],
      ),
      section(
        "Siguria dhe standardet",
        [
          "Instalimet e mira përdorin kabllo, siguresa dhe pajisje të certifikuara.",
          "Mbrojtja diferenciale dhe kontrolli i panelit e ulin rrezikun e zjarrit dhe defekteve të përsëritura.",
        ],
        [
          "Mbrojtje nga mbingarkesa",
          "Kontroll periodik",
          "Materiale të sakta",
        ],
      ),
      section(
        "Riparime, panele diellore dhe EV",
        [
          "Një instalim i mirë duhet të jetë gati edhe për zgjerime si panel diellor ose karikues EV.",
          "Këto projekte kërkojnë linja të dedikuara dhe organizim të saktë të panelit.",
        ],
        [
          "Karikues EV",
          "Panele diellore",
          "Mirembajtje afatgjate",
        ],
      ),
      section(
        "Kur të kontaktoni një specialist",
        [
          "Nëse po rinovoni, po shtoni pajisje të fuqishme ose shihni sjellje të çuditshme në rrjet, është koha të telefononi një profesionist.",
        ],
      ),
    ],
    faq: [
      faq(
        "A mbulon kjo guidë edhe biznese?",
        "Po. Ajo është menduar për shtëpi, zyra dhe biznese të vogla e të mesme.",
      ),
      faq(
        "A është e rëndësishme mbrojtja diferenciale?",
        "Po. Është një nga pjesët më të rëndësishme të sigurisë në një instalim modern.",
      ),
      faq(
        "A lidhet instalimi i mirë me EV dhe solar?",
        "Po. Ky është një nga mesazhet kryesore të guidës.",
      ),
    ],
    primaryService: sq.install,
    secondaryService: sq.panel,
    relatedServices: [sq.ev, sq.solar, sq.business],
    relatedGuideSlugs: [
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.evChargerGuide,
      albanianGuideSlugs.solarGuide,
    ],
    proofReferences: [
      proof(proofIds.tiranaApartmentRewire, "The apartment rewire proof supports the planning and load-balancing angle."),
      proof(proofIds.tiranaEvHome, "Use the EV home setup proof where the guide mentions future upgrades."),
    ],
  },
  {
    slug: "si-te-zgjedhesh-elektricist",
    path: blogPath("si-te-zgjedhesh-elektricist"),
    locale: "sq-AL",
    guideType: "existing",
    title: "Si të zgjedhësh një elektricist të besueshëm në Tiranë",
    description:
      "Keshillat kryesore per te identifikuar nje profesionist te kualifikuar, te besueshem dhe te qarte ne komunikim per nevojat tuaja elektrike.",
    excerpt:
      "Një guidë e thjeshtë për të krahasuar ofruesit e shërbimit pa u fokusuar vetëm te çmimi më i ulët.",
    eyebrow: "Si të zgjedhësh",
    date: "2025-07-08",
    primaryKeyword: "elektricist tirane",
    secondaryKeywords: ["riparime elektrike", "instalime elektrike", "siguri elektrike"],
    city: "Tirane",
    sections: [
      section(
        "Verifiko licencat dhe referencat",
        [
          "Një elektricist i mirë duhet të jetë i qartë për kualifikimet dhe përvojën.",
          "Referencat dhe vlerësimet ndihmojnë, por duhet parë edhe si shpjegon punën.",
        ],
        [
          "Licencim",
          "Referenca",
          "Komunikim i qartë",
        ],
      ),
      section(
        "Krahaso ofertat me kujdes",
        [
          "Mos zgjidh gjithmonë ofertën më të lirë.",
          "Materialet, garancia dhe shërbimi pas punës janë po aq të rëndësishme sa çmimi.",
        ],
      ),
      section(
        "Shiko profesionalizmin në proces",
        [
          "Një profesionist i mirë shpjegon procesin, afatet dhe rreziqet pa e komplikuar bisedën.",
        ],
      ),
    ],
    faq: [
      faq("A duhet të kërkoj garanci?", "Po, sepse garancia tregon përgjegjësi për punën e bërë."),
      faq("A mjafton vetëm çmimi?", "Jo. Vlera reale përfshin edhe cilësinë dhe komunikimin."),
      faq("A është kjo guidë e dobishme për biznes?", "Po. Bizneset duhet të zgjedhin po aq me kujdes sa edhe banesat."),
    ],
    primaryService: sq.tirane,
    secondaryService: sq.repair,
    relatedServices: [sq.urgent, sq.install, sq.diagnosis],
    relatedGuideSlugs: [
      albanianGuideSlugs.urgentElectrician,
      albanianGuideSlugs.installCost,
    ],
    proofReferences: [
      proof(proofIds.tiranaEmergencyPanel, "Use the urgent panel case when discussing what a good electrician should be able to diagnose."),
    ],
  },
  {
    slug: "shenja-per-elektricist-urgjent",
    path: blogPath("shenja-per-elektricist-urgjent"),
    locale: "sq-AL",
    guideType: "existing",
    title: "5 shenja kur duhet nje elektricist urgjent ne Tirane",
    description:
      "Shenjat kryesore qe tregojne kur duhet te telefononi menjehere nje elektricist urgjent dhe cfare duhet te kontrolloni pa humbur kohe.",
    excerpt:
      "Një listë e qartë e shenjave që tregojnë se problemi elektrik nuk duhet lënë për më vonë.",
    eyebrow: "Urgjencë",
    date: "2025-07-09",
    primaryKeyword: "elektricist urgjent tirane",
    secondaryKeywords: ["siguresa bien", "qark i shkurter", "prize e djegur"],
    city: "Tirane",
    sections: [
      section(
        "Erë djegieje, tym, ose shkëndija",
        [
          "Nëse ndjeni erë djegieje ose shihni shkëndija, problemi duhet trajtuar menjëherë.",
          "Këto janë shenja që mund të tregojnë lidhje të dobët ose mbinxehje.",
        ],
      ),
      section(
        "Siguresa që bien dhe drita që pulsojnë",
        [
          "Kur siguresat bien vazhdimisht ose dritat lëvizin, rrjeti mund të jetë i mbingarkuar.",
        ],
      ),
      section(
        "Priza dhe kabllo të nxehta",
        [
          "Nxehtësia e pazakontë është një shenjë alarmi që duhet parë nga një profesionist.",
        ],
      ),
    ],
    faq: [
      faq("A duhet të pres deri nesër?", "Jo. Këto shenja kërkojnë veprim sa më shpejt."),
      faq("A është kjo vetëm për shtëpi?", "Jo. Edhe bizneset duhet të reagojnë shpejt kur shfaqen këto shenja."),
      faq("A mund të jetë problem i vogël?", "Mund të duket i vogël, por shpesh është fillimi i një defekti më të madh."),
    ],
    primaryService: sq.urgent,
    secondaryService: sq.diagnosis,
    relatedServices: [sq.repair, sq.panel, sq.tirane],
    relatedGuideSlugs: [
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.hotSocket,
      albanianGuideSlugs.flickeringLights,
    ],
    proofReferences: [
      proof(proofIds.tiranaEmergencyPanel, "The emergency panel case is the best match for this warning-sign guide."),
    ],
  },
  {
    slug: "instalimi-i-panelit-diellor",
    path: blogPath("instalimi-i-panelit-diellor"),
    locale: "sq-AL",
    guideType: "existing",
    title: "Si funksionon instalimi i panelit diellor ne shtepi",
    description:
      "Nje udhezues hap pas hapi per te kuptuar si zhvillohet procesi i instalimit solar nga kontrolli fillestar deri te testimi final.",
    excerpt:
      "Nje guide qe shpjegon rrjedhen reale te nje projekti solar, jo llogaritjen e numrit te paneleve.",
    eyebrow: "Energji diellore",
    date: "2025-07-10",
    primaryKeyword: "panele diellore tirane",
    secondaryKeywords: ["instalim panele diellore", "sistem fotovoltaik", "mirembajtje panelesh"],
    city: "Tirane",
    sections: [
      section(
        "Vleresimi fillestar ne prone",
        [
          "Para se te nise puna, duhen kontrolluar orientimi, hijezimi, gjendja e catise dhe menyra si sistemi do te lidhet me panelin elektrik ekzistues.",
        ],
      ),
      section(
        "Projektimi dhe ndarja e punes",
        [
          "Ne kete faze percaktohet pozicioni i invertorit, rruga e kabllove, mbrojtjet ne panel dhe rendi i puneve ne terren.",
        ],
      ),
      section(
        "Instalimi dhe testimi",
        [
          "Pasi montohen panelet dhe lidhet sistemi, duhen bere testimet elektrike, verifikimi i prodhimit dhe kontrolli i integrimit me rrjetin e prones.",
        ],
      ),
      section(
        "Dorezimi dhe mirembajtja pas instalimit",
        [
          "Pas aktivizimit, pronari duhet te dije si kontrollohet prodhimi, kur kerkohet kontroll periodik dhe cfare shenjash tregojne se sistemi duhet pare perseri.",
        ],
      ),
    ],
    faq: [
      faq("A e shpjegon kjo guide sa panele duhen?", "Jo. Kjo guide shpjegon procesin e instalimit, ndersa llogaritja e numrit te paneleve kerkon nje vleresim te vecante."),
      faq("A duhet kontroll i panelit elektrik?", "Po. Integrimi me rrjetin ekzistues eshte pjese e rendesishme e projektit solar."),
      faq("A eshte kjo vetem per shtepi?", "Jo. I njejti proces vlen edhe per vila dhe biznese te vogla, me ndryshime sipas ngarkeses."),
    ],
    primaryService: sq.solar,
    secondaryService: sq.panel,
    relatedServices: [sq.ev, sq.business, sq.villa],
    relatedGuideSlugs: [
      albanianGuideSlugs.solarGuide,
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.evChargerGuide,
    ],
    proofReferences: [
      proof(proofIds.tiranaSolarBusiness, "Use the solar business case for the integration and sizing angle."),
    ],
  },
  {
    slug: albanianGuideSlugs.installCost,
    path: blogPath(albanianGuideSlugs.installCost),
    locale: "sq-AL",
    guideType: "planned",
    title: "Sa kushton instalimi elektrik ne apartament ne Tirane",
    description:
      "Nje udhezues praktik per te kuptuar cfare ndikon ne koston e instalimit elektrik ne apartament, nga qarqet dhe paneli te puna ne terren.",
    excerpt:
      "Një guidë që ndihmon pronarët dhe qiramarrësit të kuptojnë pse çmimi ndryshon nga një apartament te tjetri.",
    eyebrow: "Kosto dhe planifikim",
    date: "2026-03-18",
    primaryKeyword: "sa kushton instalimi elektrik ne apartament",
    secondaryKeywords: ["instalime elektrike tirane", "elektricist per apartamente"],
    audience: "Pronare apartamentesh dhe qiramarres",
    city: "Tirane",
    sections: [
      section(
        "Çfarë ndikon në kosto",
        [
          "Kostoja ndryshon sipas madhësisë së apartamentit, gjendjes së instalimit dhe sa punë duhet bërë nga e para.",
        ],
        ["Madhësia e apartamentit", "Gjendja e panelit", "Numri i pikave dhe qarqeve"],
      ),
      section(
        "Pse projekti i qartë kursen para",
        [
          "Sa më i qartë të jetë projekti, aq më pak rrezik ka për ndryshime të papritura gjatë punës.",
          "Një vlerësim i mirë para fillimit ndihmon të shmangen ripunimet.",
        ],
      ),
      section(
        "Kur duhet të kërkoni kontroll paraprak",
        [
          "Në apartamente të vjetra, para qirasë ose para rinovimit, kontrolli i parë është zakonisht vendimi më i mirë.",
        ],
      ),
    ],
    faq: [
      faq("A ndryshon shumë çmimi nga një apartament te tjetri?", "Po. Gjendja e instalimit dhe madhësia e hapësirës kanë shumë ndikim."),
      faq("A duhet të kërkoj vlerësim paraprak?", "Po. Kjo e bën projektin më të qartë dhe më të lehtë për t'u kontrolluar."),
      faq("A vlen kjo edhe për apartamente me qira?", "Po. Pronari dhe qiramarresi përfitojnë nga një instalim i qartë dhe i sigurt."),
    ],
    primaryService: sq.install,
    secondaryService: sq.apartment,
    relatedServices: [sq.panel, sq.outlets, sq.repair],
    relatedGuideSlugs: [
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.breakersFrequent,
    ],
    proofReferences: [
      proof(proofIds.tiranaApartmentRewire, "This is the best proof reference for cost discussion in an apartment setting."),
    ],
  },
  {
    slug: albanianGuideSlugs.panelGuide,
    path: blogPath(albanianGuideSlugs.panelGuide),
    locale: "sq-AL",
    guideType: "planned",
    title: "Si zgjidhet paneli elektrik per apartament ose vile",
    description:
      "Nje guide per te kuptuar si zgjidhet paneli elektrik sipas ngarkeses, sigurise, mbrojtjes dhe zgjerimit te ardhshem te prones.",
    excerpt:
      "Paneli elektrik është zemra e instalimit dhe duhet zgjedhur me kujdes, jo vetëm sipas çmimit.",
    eyebrow: "Panel dhe siguri",
    date: "2026-03-18",
    primaryKeyword: "panel elektrik tirane",
    secondaryKeywords: ["kuader elektrik", "siguresa automatike", "diagnostikim elektrik"],
    city: "Tirane",
    sections: [
      section(
        "Ngarkesa dhe madhësia e duhur",
        [
          "Paneli duhet të përballojë pajisjet që përdoren sot dhe të ketë hapësirë për zgjerim në të ardhmen.",
        ],
      ),
      section(
        "Mbrojtja dhe organizimi",
        [
          "Siguresat, ndarjet dhe etiketa e qartë e qarqeve e bëjnë më të sigurt dhe më të lehtë panelin për t'u përdorur.",
        ],
      ),
      section(
        "Kur duhet përmirësuar paneli",
        [
          "Nëse siguresat bien shpesh ose po shtoni pajisje të reja të fuqishme, paneli duhet rishikuar.",
        ],
      ),
    ],
    faq: [
      faq("A mjafton paneli i vjetër?", "Jo gjithmonë. Paneli duhet të ketë kapacitet dhe mbrojtje të përshtatshme."),
      faq("A ka rëndësi etiketimi i qarqeve?", "Po. Etiketimi i qartë e bën diagnostikimin më të shpejtë."),
      faq("A lidhet kjo me EV dhe solar?", "Po. Këto zgjerime varen shumë nga paneli ekzistues."),
    ],
    primaryService: sq.panel,
    secondaryService: sq.diagnosis,
    relatedServices: [sq.urgent, sq.ev, sq.solar],
    relatedGuideSlugs: [
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.evChargerGuide,
      albanianGuideSlugs.solarGuide,
    ],
    proofReferences: [
      proof(proofIds.tiranaEmergencyPanel, "The urgent panel case helps show why the right panel matters."),
    ],
  },
  {
    slug: albanianGuideSlugs.evChargerGuide,
    path: blogPath(albanianGuideSlugs.evChargerGuide),
    locale: "sq-AL",
    guideType: "planned",
    title: "Si zgjidhet karikuesi EV per shtepi dhe panel ne Shqiperi",
    description:
      "Nje guide per te kuptuar si zgjidhet karikuesi EV per shtepi sipas panelit, parkimit, sigurise dhe perdorimit te perditshem.",
    excerpt:
      "Shpjegon çfarë duhet parë para se të montohet një karikues për makinë elektrike në shtëpi.",
    eyebrow: "EV dhe karikim",
    date: "2026-03-18",
    primaryKeyword: "karikues ev tirane",
    secondaryKeywords: ["instalim karikues ev", "stacion karikimi ne shtepi", "wallbox tirane"],
    audience: "Pronarë shtëpish dhe biznesesh me parkim",
    city: "Tirane",
    sections: [
      section(
        "Kapaciteti i panelit",
        [
          "Para zgjedhjes së karikuesit duhet parë nëse paneli mund të mbajë ngarkesën e re.",
        ],
      ),
      section(
        "Vendosja praktike",
        [
          "Vendndodhja e karikuesit duhet të jetë e sigurt, e lehtë për përdorim dhe e përshtatshme me parkimin ekzistues.",
        ],
      ),
      section(
        "Përdorimi ditor",
        [
          "Më i mirë është një karikues që i përshtatet ritmit të përditshëm dhe nuk e ngarkon panelet e tjera të shtëpisë.",
        ],
      ),
    ],
    faq: [
      faq("A mund të instalohet në apartament?", "Po, por duhet parë paneli dhe mënyra e parkimit."),
      faq("A duhet linjë e dedikuar?", "Po. Kjo është pjesë e rëndësishme e sigurisë."),
      faq("A lidhet me panelin elektrik?", "Po, dhe prandaj paneli duhet kontrolluar para instalimit."),
    ],
    primaryService: sq.ev,
    secondaryService: sq.panel,
    relatedServices: [sq.tirane, sq.villa, sq.business],
    relatedGuideSlugs: [
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.solarGuide,
    ],
    proofReferences: [
      proof(proofIds.tiranaEvHome, "The home EV setup proof is the natural match for this guide."),
    ],
  },
  {
    slug: albanianGuideSlugs.solarGuide,
    path: blogPath(albanianGuideSlugs.solarGuide),
    locale: "sq-AL",
    guideType: "planned",
    title: "Sa panele diellore duhen per nje shtepi ne Shqiperi",
    description:
      "Nje guide per te kuptuar si llogaritet numri i paneleve diellore sipas konsumit, orientimit te catise, hijezimit dhe hapesires se disponueshme.",
    excerpt:
      "Kjo guide eshte per dimensionimin dhe numrin e paneleve, jo per hapat e instalimit ne terren.",
    eyebrow: "Planifikim solar",
    date: "2026-03-18",
    primaryKeyword: "panele diellore per shtepi",
    secondaryKeywords: ["sistem fotovoltaik", "instalim panele diellore", "panele diellore tirane"],
    audience: "Pronare shtepish, vilash dhe biznese te vogla",
    city: "Tirane",
    sections: [
      section(
        "Konsumi ditor dhe sezonal",
        [
          "Numri i paneleve nis nga konsumi real i energjise, por duhet pare edhe si ndryshon perdorimi mes veres, dimrit dhe ngarkesave si bojleri apo kondicioneri.",
        ],
      ),
      section(
        "Hapesira e catise, orientimi dhe hijezimi",
        [
          "Edhe nese konsumi del i larte, cdo sistem kufizohet nga siperfaqja e catise, drejtimi i saj dhe zonat qe mbeten ne hije gjate dites.",
        ],
      ),
      section(
        "Pse numri i paneleve nuk mjafton i vetem",
        [
          "Perzgjedhja e paneleve duhet pare bashke me invertorin, panelin elektrik, ngarkesat e ardhshme dhe nese po planifikohet edhe nje karikues EV.",
        ],
      ),
    ],
    faq: [
      faq("A shpjegon kjo guide edhe procesin e instalimit?", "Jo. Kjo guide fokusohet te dimensionimi dhe numri i paneleve, jo te hapat e montimit ne terren."),
      faq("A duhet ta di konsumimin para se te zgjedh?", "Po. Konsumi real eshte pika e nisjes per te kuptuar sa panele mund te duhen."),
      faq("A lidhet kjo me EV?", "Po. Nese po planifikoni edhe karikues per makine elektrike, kjo duhet llogaritur qe ne fillim."),
    ],
    primaryService: sq.solar,
    secondaryService: sq.panel,
    relatedServices: [sq.ev, sq.villa, sq.business],
    relatedGuideSlugs: [
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.evChargerGuide,
      albanianGuideSlugs.installCost,
    ],
    proofReferences: [
      proof(proofIds.tiranaSolarBusiness, "This proof fits the sizing and integration discussion for solar."),
    ],
  },
  {
    slug: "how-to-hire-an-electrician-in-tirana-as-a-foreign-resident",
    path: blogPath("how-to-hire-an-electrician-in-tirana-as-a-foreign-resident"),
    locale: "en-US",
    guideType: "planned",
    title: "How to hire an electrician in Tirana as a foreign resident",
    description:
      "A practical English guide to comparing electricians, quotes, and scope in Tirana when you want clear communication and fewer surprises.",
    excerpt:
      "A guide for foreign residents who want to compare who to hire, what to ask for, and how to judge a quote without relying on price alone.",
    eyebrow: "English guide",
    date: "2026-03-18",
    primaryKeyword: "how to hire an electrician in tirana",
    secondaryKeywords: ["english speaking electrician tirana", "electrician in tirana for expats"],
    audience: "Expats, landlords, and international business owners",
    city: "Tirana",
    sections: [
      section(
        "Compare scope before you compare price",
        [
          "The first thing to compare is what the electrician says will actually be checked, repaired, or replaced.",
          "Two quotes can look similar in price while covering very different amounts of work.",
        ],
      ),
      section(
        "Ask how the diagnosis will be handled",
        [
          "A good electrician should explain whether the first visit is a quick repair, a diagnosis, or the start of a larger upgrade conversation.",
          "That matters even more when you are booking from abroad or helping a tenant remotely.",
        ],
      ),
      section(
        "Check materials, timing, and follow-up",
        [
          "Look at the materials, the expected finish, the arrival window, and whether the electrician explains what happens after the job is done.",
        ],
      ),
      section(
        "Use a first visit guide separately",
        [
          "This guide is about choosing who to hire. A separate checklist should help you prepare the first visit once you have chosen the electrician.",
        ],
      ),
    ],
    faq: [
      faq("Should I ask for a written scope?", "Yes. That makes different electricians much easier to compare."),
      faq("Should I choose the cheapest quote?", "Not by default. Compare scope, timing, materials, and follow-up, not only the number."),
      faq("Is this the same as preparing the first visit?", "No. This page is about choosing who to hire; a separate page should help you prepare the visit itself."),
    ],
    primaryService: en.tirana,
    secondaryService: en.expats,
    relatedServices: [en.emergency, en.airbnb, en.landlords],
    relatedGuideSlugs: [
      englishGuideSlugs.englishTiranaGuide,
      englishGuideSlugs.airbnbChecklist,
      englishGuideSlugs.apartmentChecklist,
    ],
    proofReferences: [
      proof(proofIds.tiranaApartmentRewire, "Use the apartment repair proof as the baseline local example."),
      proof(proofIds.tiranaEmergencyPanel, "The emergency panel case helps show what fast response looks like."),
    ],
  },
  {
    slug: "electrical-safety-checklist-for-airbnb-hosts-in-tirana",
    path: blogPath("electrical-safety-checklist-for-airbnb-hosts-in-tirana"),
    locale: "en-US",
    guideType: "planned",
    title: "Electrical safety checklist for Airbnb hosts in Tirana",
    description:
      "A practical checklist for short-term rental hosts who need a safe property between guest turnovers, repairs, and guest-ready inspections.",
    excerpt:
      "A host-focused checklist that covers sockets, lighting, panel checks, and fast turnaround repairs.",
    eyebrow: "Host checklist",
    date: "2026-03-18",
    primaryKeyword: "electrical safety check airbnb tirana",
    secondaryKeywords: ["airbnb electrician tirana", "property maintenance electrician tirana"],
    audience: "Airbnb hosts and property managers",
    city: "Tirana",
    sections: [
      section(
        "Check the obvious guest-facing items",
        [
          "Sockets, switches, and lighting should be checked before each new booking whenever possible.",
        ],
        ["Socket condition", "Light operation", "Breaker stability"],
      ),
      section(
        "Review the panel and loads",
        [
          "A host should know which breaker controls which area and whether the property is under daily load pressure.",
        ],
      ),
      section(
        "Keep one maintenance contact",
        [
          "Airbnb work gets easier when one electrician handles recurring quick fixes and pre-arrival checks.",
        ],
      ),
    ],
    faq: [
      faq("Should I inspect between guests?", "Yes. Even a short check can prevent a bad stay."),
      faq("Does this help with Durres too?", "Yes, especially for coastal rentals and summer turnover jobs."),
      faq("Can I use it for multiple units?", "Yes. It works well for hosts with more than one property."),
    ],
    primaryService: en.airbnb,
    secondaryService: en.emergency,
    relatedServices: [en.landlords, en.tirana, en.durres],
    relatedGuideSlugs: [
      englishGuideSlugs.howToHire,
      englishGuideSlugs.apartmentChecklist,
    ],
    proofReferences: [
      proof(proofIds.durresHotelMaintenance, "The Durres hospitality maintenance proof fits the turnover and readiness angle."),
    ],
  },
  {
    slug: "what-to-check-before-buying-an-apartment-in-tirana-electrical-system-edition",
    path: blogPath("what-to-check-before-buying-an-apartment-in-tirana-electrical-system-edition"),
    locale: "en-US",
    guideType: "planned",
    title: "Electrical checks before buying an apartment in Tirana",
    description:
      "An English checklist for buyers who want to avoid hidden electrical problems, unsafe panels, and surprise repair costs before closing on an apartment.",
    excerpt:
      "A buyer's checklist that focuses on panel condition, grounding, socket layout, and signs of hidden load problems.",
    eyebrow: "Buyer checklist",
    date: "2026-03-18",
    primaryKeyword: "what to check before buying an apartment in tirana",
    secondaryKeywords: ["electrician in tirana", "electrical inspection tirana"],
    audience: "Apartment buyers and foreign residents",
    city: "Tirana",
    sections: [
      section(
        "Inspect the panel and breaker layout",
        [
          "A panel that is hard to understand or already overloaded can become a problem after you move in.",
        ],
      ),
      section(
        "Look for signs of hidden load issues",
        [
          "Hot sockets, flickering lights, and weak circuits can point to a larger issue that needs diagnosis.",
        ],
      ),
      section(
        "Think about future use",
        [
          "If you plan to add an EV charger, air-conditioning, or a renovation, the system needs to support that future load.",
        ],
      ),
    ],
    faq: [
      faq("Should I ask for a pre-purchase check?", "Yes. It is one of the smartest things a buyer can do."),
      faq("Does the advice help if I am not Albanian?", "Yes. The point is to keep the process clear and easy to understand."),
      faq("Can the same electrician help after purchase?", "Yes. That is usually the best setup."),
    ],
    primaryService: en.tirana,
    secondaryService: en.landlords,
    relatedServices: [en.emergency, en.ev, en.expats],
    relatedGuideSlugs: [englishGuideSlugs.howToHire, englishGuideSlugs.evApartment],
    proofReferences: [
      proof(proofIds.tiranaApartmentRewire, "The apartment rewiring proof is the best example of what a buyer should look for."),
    ],
  },
  {
    slug: "can-you-install-an-ev-charger-in-an-apartment-building-in-albania",
    path: blogPath("can-you-install-an-ev-charger-in-an-apartment-building-in-albania"),
    locale: "en-US",
    guideType: "planned",
    title: "EV chargers in Albanian apartment buildings: what to check",
    description:
      "An English guide to the practical questions behind apartment EV charging in Albania, from panel capacity to parking layout.",
    excerpt:
      "A practical guide for apartment owners and tenants who want to know whether EV charging is realistic in their building.",
    eyebrow: "EV guide",
    date: "2026-03-18",
    primaryKeyword: "ev charger installation albania",
    secondaryKeywords: ["ev charger installation tirana", "home ev charger tirana"],
    audience: "Apartment owners, tenants, and building managers",
    city: "Tirana",
    sections: [
      section(
        "Panel capacity comes first",
        [
          "Before installing a charger, you need to know whether the existing panel and load can support the extra demand.",
        ],
      ),
      section(
        "Parking layout matters",
        [
          "A charger is easier to install when the parking space, cable run, and access point are all practical.",
        ],
      ),
      section(
        "The safest setup includes protection",
        [
          "The charger should be part of a proper electrical plan, not just a wall-mounted device.",
        ],
      ),
    ],
    faq: [
      faq("Can it work in an apartment building?", "Sometimes yes, but the panel and parking layout need to be checked first."),
      faq("Do I need a dedicated line?", "Yes, that is usually part of a proper installation."),
      faq("Should I plan for solar too?", "If possible, yes. EV and solar can be planned together."),
    ],
    primaryService: en.ev,
    secondaryService: en.tirana,
    relatedServices: [en.landlords, en.solar, en.durres],
    relatedGuideSlugs: [englishGuideSlugs.howToHire, englishGuideSlugs.solarVsGrid],
    proofReferences: [
      proof(proofIds.tiranaEvHome, "The home EV setup proof is the best match for charger feasibility and load checks."),
    ],
  },
  {
    slug: "solar-vs-grid-power-for-villas-and-small-businesses-in-albania",
    path: blogPath("solar-vs-grid-power-for-villas-and-small-businesses-in-albania"),
    locale: "en-US",
    guideType: "planned",
    title: "Solar vs grid power for villas and small businesses in Albania",
    description:
      "A practical English comparison for villas and small businesses that want to decide whether solar is worth it now or whether a cleaner grid setup is the smarter first step.",
    excerpt:
      "A decision guide that helps property owners compare whether they need solar now, or whether panel and load improvements should come first.",
    eyebrow: "Solar guide",
    date: "2026-03-18",
    primaryKeyword: "solar panel installation tirana",
    secondaryKeywords: ["solar electrician albania", "solar and ev charger installation albania"],
    audience: "Villas and small business owners",
    city: "Tirana",
    sections: [
      section(
        "When solar makes sense",
        [
          "Solar can be a good fit when the property has the right roof space, the right usage pattern, and a clear plan for the electrical integration.",
        ],
      ),
      section(
        "When a better grid setup is the smarter first move",
        [
          "Some properties simply need better panel work, better load control, or a cleaner electrical setup before solar becomes necessary.",
        ],
      ),
      section(
        "Why this is different from sizing or installation guides",
        [
          "This page is about the choice between solar and a better grid-only setup. Separate guides should cover how many panels you need or how the installation process works.",
        ],
      ),
    ],
    faq: [
      faq("Should villas think about solar first?", "Often yes, because the space and usage pattern can be a strong fit."),
      faq("Can small businesses use the same logic?", "Yes. The comparison is useful for both types of property."),
      faq("Can solar and EV be planned together?", "Yes. That is usually the smartest approach."),
    ],
    primaryService: en.solar,
    secondaryService: en.ev,
    relatedServices: [en.tirana, en.durres, en.offices],
    relatedGuideSlugs: [englishGuideSlugs.evApartment, englishGuideSlugs.howToHire],
    proofReferences: [
      proof(proofIds.tiranaSolarBusiness, "This proof is the best fit for the planning and integration discussion."),
    ],
  },
] as const satisfies readonly GuidePageEntry[];

export const guidePages = rawGuidePages.map((page) => ({
  ...page,
  slug: normalizeGuideValue(page.slug),
  path: blogPath(page.slug),
  relatedGuideSlugs: page.relatedGuideSlugs.map(normalizeGuideValue),
})) as readonly GuidePageEntry[];

export type GuideSlug = (typeof guidePages)[number]["slug"];

export const guidePageSlugs = guidePages.map((page) => page.slug) as readonly GuideSlug[];

export const guidePageMap = guidePages.reduce(
  (accumulator, page) => {
    accumulator[page.slug] = page;
    return accumulator;
  },
  {} as Record<GuideSlug, GuidePageEntry>,
);

export function getGuidePage(slug: GuideSlug | string): GuidePageEntry | undefined {
  return guidePageMap[slug as GuideSlug];
}
