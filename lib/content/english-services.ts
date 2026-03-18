export type EnglishServiceLocale = "en-US";

export type EnglishPageType = "service" | "audience" | "location";

export interface EnglishServiceProofBlock {
  sourceId: string;
  title: string;
  city: string;
  propertyType: string;
  problem: string;
  fix: string;
  turnaround: string;
  outcome: string;
  evidenceHint: string;
}

export interface EnglishServiceFAQ {
  question: string;
  answer: string;
}

export interface EnglishServicePageEntry {
  slug: string;
  path: string;
  locale: EnglishServiceLocale;
  pageType: EnglishPageType;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  summary: string;
  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  audience?: string;
  city?: string;
  serviceAreas: readonly string[];
  whenToCall: readonly string[];
  problems: readonly string[];
  processSteps: readonly string[];
  proof: EnglishServiceProofBlock;
  faqs: readonly EnglishServiceFAQ[];
  relatedServiceSlugs: readonly string[];
  relatedGuideSlugs: readonly string[];
  callToAction: string;
}

export const englishGuideSlugs = {
  englishTiranaGuide: "english-speaking-electrician-tirana",
  howToHire: "how-to-hire-an-electrician-in-tirana-as-a-foreign-resident",
  airbnbChecklist: "electrical-safety-checklist-for-airbnb-hosts-in-tirana",
  apartmentChecklist:
    "what-to-check-before-buying-an-apartment-in-tirana-electrical-system-edition",
  evApartment:
    "can-you-install-an-ev-charger-in-an-apartment-building-in-albania",
  solarVsGrid:
    "solar-vs-grid-power-for-villas-and-small-businesses-in-albania",
} as const;

const englishServiceSlugs = {
  tirana: "electrician-tirana",
  emergency: "emergency-electrician-tirana",
  expats: "electrician-for-expats",
  airbnb: "electrician-for-airbnb-hosts",
  landlords: "electrician-for-landlords",
  offices: "electrician-for-offices-and-shops",
  ev: "ev-charger-installation-tirana",
  solar: "solar-panel-installation-tirana",
  durres: "electrician-durres",
} as const;

export const englishServicePages = [
  {
    slug: englishServiceSlugs.tirana,
    path: "/en/services/electrician-tirana",
    locale: "en-US",
    pageType: "location",
    title: "English-Speaking Electrician in Tirana",
    metaTitle:
      "English-Speaking Electrician in Tirana | Repairs, Installations & Emergency Help",
    metaDescription:
      "English-speaking electrician in Tirana for urgent repairs, diagnostics, EV chargers, solar work, and planned electrical jobs across Tirana and Durres.",
    h1: "English-Speaking Electrician in Tirana",
    hero:
      "Clear, fast electrical help for homeowners, tenants, landlords, and businesses that need an electrician in Tirana they can speak to in English.",
    summary:
      "This is the core English landing page for Tirana and should capture the main local intent without forcing the homepage to rank for everything. It is strongest when it speaks to expats, rentals, and small businesses that want straightforward communication and a quick response window.",
    primaryKeyword: "electrician in tirana",
    secondaryKeywords: [
      "english speaking electrician tirana",
      "electrical services tirana",
      "emergency electrician tirana",
      "electrician albania",
    ],
    city: "Tirana",
    serviceAreas: [
      "central Tirana",
      "Blloku",
      "Komuna e Parisit",
      "Astir",
      "Don Bosko",
      "new residential blocks",
    ],
    whenToCall: [
      "When the power keeps tripping or one part of the property goes dark.",
      "When you are moving in, renovating, or taking over a rental unit.",
      "When you need an EV charger, solar wiring, or a load check before new equipment.",
      "When you want a clear English explanation before any work starts.",
    ],
    problems: [
      "Old or overloaded panels that need to be reviewed before bigger use.",
      "Socket, switch, and lighting faults that keep coming back.",
      "Renovation jobs that need better circuit planning and safer wiring.",
      "Projects where the client needs quotes, timing, and scope explained in English.",
    ],
    processSteps: [
      "Share the problem or project brief by phone or WhatsApp.",
      "Get a fast diagnosis, scope, and rough timeline before work begins.",
      "Complete the repair or installation with testing at the end.",
      "Receive a short summary of what was fixed and what to watch next.",
    ],
    proof: {
      sourceId: "tirana-apartment-rewire",
      title: "Tirana apartment load correction",
      city: "Tirana",
      propertyType: "apartment",
      problem:
        "The apartment kept tripping breakers during normal evening use and needed a clearer circuit layout.",
      fix:
        "A worn breaker was replaced, the circuits were balanced, and the key loads were reviewed again.",
      turnaround: "Same-day visit and final testing",
      outcome:
        "The property returned to stable operation with a clearer setup for the client.",
      evidenceHint:
        "Pair this page with a real panel photo, a before-and-after note, and a short client quote.",
    },
    faqs: [
      {
        question: "Do you speak English on-site?",
        answer:
          "Yes. This page should make it obvious that English communication is available from the first call through the final explanation.",
      },
      {
        question: "Do you also work in Durres?",
        answer:
          "Yes. Tirana is the main focus, but the page should clearly mention Durres coverage for the right jobs.",
      },
      {
        question: "Can you help with renovation planning?",
        answer:
          "Yes. The page should support both emergency fixes and planned electrical work, including upgrades and new circuits.",
      },
      {
        question: "Do you handle residential and business work?",
        answer:
          "Yes. Homes, rentals, offices, and small commercial properties are all part of the same English offer.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.emergency,
      englishServiceSlugs.expats,
      englishServiceSlugs.airbnb,
      englishServiceSlugs.ev,
      englishServiceSlugs.solar,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.englishTiranaGuide,
      englishGuideSlugs.howToHire,
      englishGuideSlugs.airbnbChecklist,
      englishGuideSlugs.apartmentChecklist,
      englishGuideSlugs.evApartment,
      englishGuideSlugs.solarVsGrid,
    ],
    callToAction: "Call now for an English quote and a clear response window.",
  },
  {
    slug: englishServiceSlugs.emergency,
    path: "/en/services/emergency-electrician-tirana",
    locale: "en-US",
    pageType: "service",
    title: "Emergency Electrician in Tirana",
    metaTitle:
      "Emergency Electrician in Tirana | 24/7 Fault Finding and Rapid Repairs",
    metaDescription:
      "Emergency electrician in Tirana for tripping breakers, burning smells, loss of power, damaged sockets, and other urgent electrical faults.",
    h1: "Emergency Electrician in Tirana",
    hero:
      "Fast-response help for electrical problems that cannot wait until tomorrow and need a clear answer now.",
    summary:
      "This page should capture urgent intent from Tirana and nearby areas with very direct language. It works best when it focuses on danger signs, response timing, and the simple next step the client should take.",
    primaryKeyword: "emergency electrician tirana",
    secondaryKeywords: [
      "electrician 24/7 tirana",
      "urgent electrical repair tirana",
      "electrician in tirana",
      "same day electrician tirana",
    ],
    city: "Tirana",
    serviceAreas: ["Tirana", "Astir", "Don Bosko", "Komuna e Parisit", "Ali Demi"],
    whenToCall: [
      "When you smell burning or see sparks near a socket or panel.",
      "When breakers keep tripping and the problem does not stay fixed.",
      "When part of the property loses power without a clear reason.",
      "When water, smoke, or a recent renovation may have damaged wiring.",
    ],
    problems: [
      "Overheating sockets, damaged switches, and unstable lighting circuits.",
      "Partial or full outages that need a quick diagnosis.",
      "Faults that are getting worse under load and need isolation.",
      "Electrical damage that could affect a rental, home, or business immediately.",
    ],
    processSteps: [
      "Call with the symptoms and the exact location.",
      "Get a quick safety triage and likely cause before arrival.",
      "Isolate the fault, repair the failed part, and test the system.",
      "Receive a short follow-up note about what to monitor next.",
    ],
    proof: {
      sourceId: "tirana-emergency-panel",
      title: "Urgent panel fault in Tirana",
      city: "Tirana",
      propertyType: "rental apartment",
      problem:
        "The client reported a burning smell and partial lighting failure in one room.",
      fix:
        "The faulty line was isolated, the overheated connection was found, and the damaged part was replaced.",
      turnaround: "Same-day emergency response",
      outcome:
        "The space returned to a safe condition and the immediate risk was removed.",
      evidenceHint:
        "Use this with a real panel photo and a short note about the response time.",
    },
    faqs: [
      {
        question: "Should I call immediately if I smell burning?",
        answer:
          "Yes. That is one of the clearest reasons to treat the job as an emergency.",
      },
      {
        question: "Do you work after hours?",
        answer:
          "The page should clearly say that emergency help is available outside normal business hours when needed.",
      },
      {
        question: "Can you check the panel after the repair?",
        answer:
          "Yes. A final test and a short explanation of the cause should be part of the standard service.",
      },
      {
        question: "Is this page only for homes?",
        answer:
          "No. It should also speak to offices, shops, rentals, and other properties that cannot wait.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.expats,
      englishServiceSlugs.airbnb,
      englishServiceSlugs.landlords,
      englishServiceSlugs.durres,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.howToHire,
      englishGuideSlugs.englishTiranaGuide,
      englishGuideSlugs.airbnbChecklist,
    ],
    callToAction: "Call now for emergency electrical help in Tirana.",
  },
  {
    slug: englishServiceSlugs.expats,
    path: "/en/services/electrician-for-expats",
    locale: "en-US",
    pageType: "audience",
    title: "Electrician in Tirana for Expats",
    metaTitle:
      "Electrician in Tirana for Expats | English Support for Homes and Rentals",
    metaDescription:
      "Electrician in Tirana for expats, foreign homeowners, and international tenants who want clear English communication and reliable electrical work.",
    h1: "Electrician in Tirana for Expats",
    hero:
      "English-friendly electrical support for foreign residents who want a quick answer, a fair scope, and no language barrier.",
    summary:
      "This audience page should target foreign residents who need simple communication, transparent timing, and help with both small and larger electrical jobs. It should feel practical, calm, and useful for people who are new to Albania.",
    primaryKeyword: "electrician in tirana for expats",
    secondaryKeywords: [
      "english speaking electrician albania",
      "foreign homeowner electrician tirana",
      "electrician albania",
      "electrician for rentals tirana",
    ],
    audience: "Expats, foreign homeowners, and international tenants",
    serviceAreas: ["Tirana", "Durres", "central neighborhoods", "new apartment blocks"],
    whenToCall: [
      "When you move into a new property and want a quick safety check.",
      "When a landlord issue needs an English-speaking electrician.",
      "When you need help with sockets, lighting, or a breaker problem.",
      "When you want a quote that is easy to understand before work begins.",
    ],
    problems: [
      "Language barriers that make electrical jobs harder than they should be.",
      "Unclear scopes and timelines when moving into a new home.",
      "Rental issues that need a calm, practical answer instead of a long back-and-forth.",
      "Properties that need a first-look safety check before regular use.",
    ],
    processSteps: [
      "Explain the issue in English and share any photos or videos you have.",
      "Get a short diagnosis, an estimated scope, and the next step.",
      "Complete the job and confirm the result in plain language.",
      "Keep one contact for later maintenance or follow-up work.",
    ],
    proof: {
      sourceId: "tirana-apartment-rewire",
      title: "English-speaking apartment repair in Tirana",
      city: "Tirana",
      propertyType: "rental apartment",
      problem:
        "The client needed a simple English explanation of repeated breaker trips after moving in.",
      fix:
        "The load was checked, the panel issue was corrected, and the main risk points were explained clearly.",
      turnaround: "Same-day visit",
      outcome:
        "The client got a clear answer and a safer setup without having to guess what had been done.",
      evidenceHint:
        "Pair this page with a real client quote from an expat or international tenant.",
    },
    faqs: [
      {
        question: "Do I need to speak Albanian to book?",
        answer:
          "No. The whole point of the page is to show that English is available from the first contact.",
      },
      {
        question: "Can you help with landlord handovers?",
        answer:
          "Yes. That is one of the best use cases for this audience page.",
      },
      {
        question: "Is this only for apartments?",
        answer:
          "No. It should also cover villas, rentals, and small business spaces used by foreign clients.",
      },
      {
        question: "Can you also help in Durres?",
        answer:
          "Yes, especially for expats living near the coast or managing a second property there.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.emergency,
      englishServiceSlugs.airbnb,
      englishServiceSlugs.landlords,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.howToHire,
      englishGuideSlugs.airbnbChecklist,
      englishGuideSlugs.apartmentChecklist,
    ],
    callToAction: "Talk to an English-speaking electrician in Tirana today.",
  },
  {
    slug: englishServiceSlugs.airbnb,
    path: "/en/services/electrician-for-airbnb-hosts",
    locale: "en-US",
    pageType: "audience",
    title: "Electrician for Airbnb Hosts in Tirana",
    metaTitle:
      "Electrician for Airbnb Hosts in Tirana | Fast Turnover Repairs and Safety Checks",
    metaDescription:
      "Electrician for Airbnb hosts in Tirana and Durres for fast turnover repairs, guest-ready safety checks, and short-term rental maintenance.",
    h1: "Electrician for Airbnb Hosts in Tirana",
    hero:
      "Fast, practical electrical support for hosts and property managers who need the next guest to arrive to a working, safe apartment.",
    summary:
      "This page should speak directly to short-term rental operators, not general homeowners. It should focus on speed, guest readiness, and the small electrical issues that can become bad reviews if they are ignored.",
    primaryKeyword: "airbnb electrician tirana",
    secondaryKeywords: [
      "electrical safety check airbnb tirana",
      "electrician for rental property tirana",
      "property maintenance electrician tirana",
      "short term rental electrician albania",
    ],
    audience: "Airbnb hosts, short-term rental managers, and property operators",
    serviceAreas: ["Tirana", "Durres", "Blloku", "central apartments", "coastal rentals"],
    whenToCall: [
      "When a guest reports a socket, light, or breaker issue before check-in.",
      "When you need a quick safety check between guest turnovers.",
      "When the property needs minor electrical fixes before a new booking.",
      "When you want one contact for repeat maintenance across several units.",
    ],
    problems: [
      "Guest turnover deadlines that leave no time for vague troubleshooting.",
      "Small faults that can lead to bad reviews if they are not fixed quickly.",
      "A need for clear communication and fast response from the property side.",
      "Repeated maintenance issues across multiple rental units.",
    ],
    processSteps: [
      "Share the turnover window and the problem as soon as it appears.",
      "Get a fast assessment and the lowest-friction fix first.",
      "Complete the repair and test the room or appliance before guests arrive.",
      "Keep a simple maintenance record for future turnarounds.",
    ],
    proof: {
      sourceId: "durres-hotel-maintenance",
      title: "Short-term rental maintenance in Durres",
      city: "Durres",
      propertyType: "holiday rental",
      problem:
        "The property needed a quick electrical check and fixes before the next guest arrival window.",
      fix:
        "The relevant lines and lighting points were reviewed, and the issue was resolved before check-in.",
      turnaround: "Fast pre-arrival turnaround",
      outcome:
        "The host kept the booking on schedule and avoided a guest-facing problem.",
      evidenceHint:
        "Use a real turnover photo and a short host quote if available.",
    },
    faqs: [
      {
        question: "Can you work between guest check-outs and check-ins?",
        answer:
          "Yes. That is exactly the kind of scheduling this page should support.",
      },
      {
        question: "Do you also help in Durres?",
        answer:
          "Yes. Coastal rentals and summer turnover jobs are a strong fit.",
      },
      {
        question: "Can you handle recurring maintenance for multiple units?",
        answer:
          "Yes. The page should make it easy for hosts and managers to treat this as an ongoing relationship.",
      },
      {
        question: "Do you also check guest safety issues?",
        answer:
          "Yes. Safety checks before the next booking are a core reason to use this page.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.emergency,
      englishServiceSlugs.landlords,
      englishServiceSlugs.durres,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.airbnbChecklist,
      englishGuideSlugs.howToHire,
      englishGuideSlugs.apartmentChecklist,
    ],
    callToAction: "Book a fast electrical check before the next guest arrives.",
  },
  {
    slug: englishServiceSlugs.landlords,
    path: "/en/services/electrician-for-landlords",
    locale: "en-US",
    pageType: "audience",
    title: "Electrician for Landlords in Tirana",
    metaTitle:
      "Electrician for Landlords in Tirana | Inspection, Repairs and Handover Work",
    metaDescription:
      "Electrician for landlords in Tirana and Durres for inspection, handover repairs, tenant issues, and planned maintenance across rental homes.",
    h1: "Electrician for Landlords in Tirana",
    hero:
      "Clear, practical electrical support for landlords and property managers who need safer handovers and fewer repeat calls from tenants.",
    summary:
      "This page should target rental owners who want fewer surprises, cleaner handovers, and one trusted contact for electrical issues. It should feel like a maintenance partner, not a one-off trade listing.",
    primaryKeyword: "electrician for landlords tirana",
    secondaryKeywords: [
      "electrician for rental property tirana",
      "property maintenance electrician tirana",
      "electrical inspection tirana",
      "landlord electrician albania",
    ],
    audience: "Landlords, property managers, and rental operators",
    serviceAreas: ["Tirana", "Durres", "rental apartments", "villas", "managed properties"],
    whenToCall: [
      "When a tenant reports a repeated socket, lighting, or breaker problem.",
      "When you want a handover check before a new tenant moves in.",
      "When a vacancy gives you time to fix issues before the next lease starts.",
      "When you want one electrician who can handle several units over time.",
    ],
    problems: [
      "Repeated small jobs that keep turning into new tenant complaints.",
      "Properties that need a pre-lease check after the last occupant leaves.",
      "Unclear maintenance history across apartments or houses.",
      "The need for a simple summary that can be shared with the owner or tenant.",
    ],
    processSteps: [
      "Share the property type, current issue, and turnover timing.",
      "Get a concise inspection and a list of the priority fixes.",
      "Finish the repair work and confirm the result before handover.",
      "Keep the record for the next tenant or lease cycle.",
    ],
    proof: {
      sourceId: "tirana-apartment-rewire",
      title: "Rental handover repair in Tirana",
      city: "Tirana",
      propertyType: "rental apartment",
      problem:
        "The landlord needed a small electrical list handled before a new tenant moved in.",
      fix:
        "The critical points were inspected, repaired, and documented for the handover.",
      turnaround: "Pre-lease turnaround",
      outcome:
        "The unit was ready for the next tenant with fewer risks and fewer surprises.",
      evidenceHint:
        "Use a real move-in checklist or handover photo if you have one.",
    },
    faqs: [
      {
        question: "Can you work before a new tenant moves in?",
        answer:
          "Yes. That is one of the main reasons for this page to exist.",
      },
      {
        question: "Do you support both Tirana and Durres rentals?",
        answer:
          "Yes. The page should clearly cover both markets.",
      },
      {
        question: "Can you help with a simple inspection report?",
        answer:
          "Yes. A short summary of what was checked and fixed is a good fit here.",
      },
      {
        question: "Can one electrician handle multiple units?",
        answer:
          "Yes. This page should encourage ongoing maintenance relationships, not one-off visits only.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.emergency,
      englishServiceSlugs.airbnb,
      englishServiceSlugs.durres,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.apartmentChecklist,
      englishGuideSlugs.howToHire,
      englishGuideSlugs.airbnbChecklist,
    ],
    callToAction: "Book a handover check or tenant repair visit today.",
  },
  {
    slug: englishServiceSlugs.offices,
    path: "/en/services/electrician-for-offices-and-shops",
    locale: "en-US",
    pageType: "audience",
    title: "Electrician for Offices and Shops in Tirana",
    metaTitle:
      "Electrician for Offices and Shops in Tirana | Commercial Repairs and Installations",
    metaDescription:
      "Electrician for offices and shops in Tirana and Durres for commercial repairs, lighting, panel work, extra circuits, and maintenance.",
    h1: "Electrician for Offices and Shops in Tirana",
    hero:
      "Commercial electrical help for offices, shops, and small business spaces that need stable power and less downtime.",
    summary:
      "This page should speak to business owners and managers who need practical, low-disruption electrical work. It should focus on uptime, lighting, and enough capacity for real daily use.",
    primaryKeyword: "commercial electrician tirana",
    secondaryKeywords: [
      "office electrician tirana",
      "shop electrical installation tirana",
      "electrical maintenance for business tirana",
      "commercial electrician albania",
    ],
    audience: "Office managers, shop owners, and small business operators",
    serviceAreas: ["Tirana", "Durres", "commercial streets", "business districts", "shopping areas"],
    whenToCall: [
      "When your office needs more sockets, lighting, or workstation circuits.",
      "When your shop has a panel, lighting, or display problem that affects sales.",
      "When you want repairs done with minimal disruption to working hours.",
      "When you are opening a new space and need a clean electrical setup.",
    ],
    problems: [
      "Not enough power points for desks, screens, or retail equipment.",
      "Lighting that makes a shop or office feel dim and poorly organized.",
      "Panels and circuits that are not laid out for business use.",
      "Faults that directly affect sales, staff time, or customer experience.",
    ],
    processSteps: [
      "Review the business layout, hours, and critical equipment.",
      "Map the repairs or upgrades needed to keep the space functional.",
      "Carry out the work with as little disruption as possible.",
      "Confirm the result and give a simple maintenance note for the team.",
    ],
    proof: {
      sourceId: "tirana-smart-lighting",
      title: "Commercial lighting and control update in Tirana",
      city: "Tirana",
      propertyType: "shop",
      problem:
        "The business needed more usable power points and clearer display lighting.",
      fix:
        "The layout was adjusted and the lighting was improved so the space worked better for staff and customers.",
      turnaround: "Planned work around business hours",
      outcome:
        "The shop became more functional without losing a full day of trading.",
      evidenceHint:
        "Use a real storefront or office photo, not stock imagery.",
    },
    faqs: [
      {
        question: "Can you work around opening hours?",
        answer:
          "Yes. That is a key expectation for this page.",
      },
      {
        question: "Do you cover both shops and offices?",
        answer:
          "Yes. The page should make both use cases equally clear.",
      },
      {
        question: "Can you add new circuits or outlets?",
        answer:
          "Yes. Adding practical capacity is part of the core offer here.",
      },
      {
        question: "Do you also help in Durres business areas?",
        answer:
          "Yes. That is especially useful for the coastal business season.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.emergency,
      englishServiceSlugs.landlords,
      englishServiceSlugs.durres,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.howToHire,
      englishGuideSlugs.apartmentChecklist,
      englishGuideSlugs.englishTiranaGuide,
    ],
    callToAction: "Book commercial electrical work with minimal downtime.",
  },
  {
    slug: englishServiceSlugs.ev,
    path: "/en/services/ev-charger-installation-tirana",
    locale: "en-US",
    pageType: "service",
    title: "EV Charger Installation in Tirana",
    metaTitle:
      "EV Charger Installation in Tirana | Home and Workplace Charger Setup",
    metaDescription:
      "EV charger installation in Tirana for homes, garages, and workplaces, with load checks, protection, and safe electrical setup.",
    h1: "EV Charger Installation in Tirana",
    hero:
      "Safe, practical EV charger installation for homes and businesses that need the charger sized and installed the right way.",
    summary:
      "This page should capture vehicle-owner intent as well as commercial charging needs. It should explain that a proper load check and safe installation matter more than just mounting the charger on a wall.",
    primaryKeyword: "ev charger installation tirana",
    secondaryKeywords: [
      "home ev charger tirana",
      "workplace ev charger albania",
      "ev charger installation albania",
      "wallbox tirana",
    ],
    city: "Tirana",
    serviceAreas: ["Tirana", "Durres", "private garages", "parking spaces", "business parking"],
    whenToCall: [
      "When you buy an EV and need a safe charger setup at home.",
      "When you want to check whether the panel can handle the new load.",
      "When a garage, villa, or workplace needs a dedicated charger line.",
      "When you want the charger and protection devices installed together.",
    ],
    problems: [
      "Unclear panel capacity before adding a charger.",
      "Need for a dedicated line and protection for regular charging.",
      "Properties with parking layouts that need a practical installation plan.",
      "A desire for safe charging without affecting the rest of the property.",
    ],
    processSteps: [
      "Review the property, panel, and charger target before work starts.",
      "Confirm the load, protection, and best installation point.",
      "Install the dedicated line and charger hardware.",
      "Test the system and confirm charging behavior before handover.",
    ],
    proof: {
      sourceId: "tirana-ev-home",
      title: "Home EV charger setup in Tirana",
      city: "Tirana",
      propertyType: "private villa",
      problem:
        "The property needed a charger line and a safe way to keep the rest of the house stable.",
      fix:
        "A dedicated line, load review, and protection setup were added before the charger was used.",
      turnaround: "Planned installation visit",
      outcome:
        "The property was ready for everyday EV charging with a clearer and safer layout.",
      evidenceHint:
        "Use a real charger photo and a simple load-check note if available.",
    },
    faqs: [
      {
        question: "Can you check the panel before installing a charger?",
        answer:
          "Yes. That should be one of the first steps on the page.",
      },
      {
        question: "Do you install chargers for apartments and villas?",
        answer:
          "Yes. The page should speak to both property types.",
      },
      {
        question: "Can you help with workplace charging too?",
        answer:
          "Yes. Commercial parking and business use should be included.",
      },
      {
        question: "Do you also help in Durres?",
        answer:
          "Yes. That is useful for coastal homes, rentals, and businesses.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.emergency,
      englishServiceSlugs.solar,
      englishServiceSlugs.durres,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.evApartment,
      englishGuideSlugs.solarVsGrid,
      englishGuideSlugs.howToHire,
    ],
    callToAction: "Book EV charger installation with a load check first.",
  },
  {
    slug: englishServiceSlugs.solar,
    path: "/en/services/solar-panel-installation-tirana",
    locale: "en-US",
    pageType: "service",
    title: "Solar Panel Installation in Tirana",
    metaTitle:
      "Solar Panel Installation in Tirana | Homes, Villas and Small Businesses",
    metaDescription:
      "Solar panel installation in Tirana for homes, villas, and small businesses with proper planning, safe wiring, and practical system design.",
    h1: "Solar Panel Installation in Tirana",
    hero:
      "Solar work that starts with the property, the load, and the real use case instead of a generic kit-and-go approach.",
    summary:
      "This page should focus on feasibility, safe integration, and realistic sizing for villas and businesses. It should make solar feel practical instead of abstract.",
    primaryKeyword: "solar panel installation tirana",
    secondaryKeywords: [
      "solar electrician albania",
      "solar panel electrician tirana",
      "solar and ev charger installation albania",
      "photovoltaic installation tirana",
    ],
    city: "Tirana",
    serviceAreas: ["Tirana", "Durres", "villas", "small businesses", "rural-edge properties"],
    whenToCall: [
      "When you want to check whether the roof or site is a good fit for solar.",
      "When you are comparing the load and the likely system size.",
      "When you want a safe electrical integration with the existing panel.",
      "When you want solar and EV charging planned together.",
    ],
    problems: [
      "Solar projects that need better planning before hardware is chosen.",
      "Properties where roof shape, usage, or panel capacity matters a lot.",
      "Businesses and villas that want a practical path to lower electricity costs.",
      "Systems that need safe connection to the existing electrical infrastructure.",
    ],
    processSteps: [
      "Review the site, roof, and daily consumption pattern.",
      "Choose the practical system size and integration approach.",
      "Install the solar hardware and connect it safely to the panel.",
      "Test the system and explain the next maintenance steps.",
    ],
    proof: {
      sourceId: "tirana-solar-business",
      title: "Solar integration for a small business in Tirana",
      city: "Tirana",
      propertyType: "small business",
      problem:
        "The business wanted a clearer plan for solar integration and a safer connection to the existing panel.",
      fix:
        "The load, circuits, and integration plan were reviewed before the system was connected.",
      turnaround: "Planned installation and integration",
      outcome:
        "The project had a cleaner technical path and a safer setup for future use.",
      evidenceHint:
        "Use a real roof photo or panel photo with a short note about the system size.",
    },
    faqs: [
      {
        question: "Do you help choose the right system size?",
        answer:
          "Yes. That should be part of the main value of this page.",
      },
      {
        question: "Can solar be installed for villas and small businesses?",
        answer:
          "Yes. Both should be clearly mentioned.",
      },
      {
        question: "Can you integrate solar with EV charging later?",
        answer:
          "Yes. The page should mention solar and EV as a sensible combined plan.",
      },
      {
        question: "Do you also work in Durres?",
        answer:
          "Yes, especially for coastal homes and seasonal properties.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.ev,
      englishServiceSlugs.durres,
      englishServiceSlugs.offices,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.solarVsGrid,
      englishGuideSlugs.evApartment,
      englishGuideSlugs.howToHire,
    ],
    callToAction: "Book a solar feasibility check and installation plan.",
  },
  {
    slug: englishServiceSlugs.durres,
    path: "/en/services/electrician-durres",
    locale: "en-US",
    pageType: "location",
    title: "English-Speaking Electrician in Durres",
    metaTitle:
      "English-Speaking Electrician in Durres | Repairs, Rentals and Coastal Properties",
    metaDescription:
      "English-speaking electrician in Durres for apartments, villas, hotels, rentals, and coastal properties that need reliable electrical support.",
    h1: "English-Speaking Electrician in Durres",
    hero:
      "Practical English electrical support for Durres, coastal rentals, villas, and businesses that need a dependable local electrician.",
    summary:
      "This page should give Durres a strong English landing page of its own, especially for seasonal properties, rentals, and hospitality spaces. It works best when it explains the difference between coastal maintenance, guest turnover, and everyday repair work.",
    primaryKeyword: "electrician durres",
    secondaryKeywords: [
      "electrician in durres",
      "electrical services durres",
      "english speaking electrician durres",
      "emergency electrician durres",
    ],
    city: "Durres",
    serviceAreas: ["Durres city", "beach area", "Golem", "Shkembi i Kavajes", "seasonal rentals"],
    whenToCall: [
      "When a coastal apartment or villa needs a quick repair before guests arrive.",
      "When a hotel or rental unit needs seasonal maintenance and checks.",
      "When lighting, sockets, or the panel are not holding up under load.",
      "When you want an English-speaking contact for a property in Durres.",
    ],
    problems: [
      "Seasonal properties that sit unused and then need quick restoration.",
      "Coastal humidity and wear that can affect sockets, lights, and panels.",
      "Hotels and rentals that need faster turnaround between uses.",
      "Owners who want a practical local electrician with English communication.",
    ],
    processSteps: [
      "Share the property type, area, and the problem in simple English.",
      "Get a clear next step and rough timing before work starts.",
      "Complete the repair, maintenance, or installation.",
      "Confirm the result and keep one contact for future visits.",
    ],
    proof: {
      sourceId: "durres-hotel-maintenance",
      title: "Coastal hospitality maintenance in Durres",
      city: "Durres",
      propertyType: "small hotel",
      problem:
        "The property needed a stable electrical check before the busy season began.",
      fix:
        "The key circuits, lighting, and load points were reviewed and corrected in time for opening.",
      turnaround: "Planned pre-season visit",
      outcome:
        "The business entered the season with fewer risks and a clearer maintenance plan.",
      evidenceHint:
        "Use a real hotel, rental, or coastal property photo when this page goes live.",
    },
    faqs: [
      {
        question: "Do you work in Golem and the beach area?",
        answer:
          "Yes. The page should clearly name the coastal areas most relevant to Durres traffic.",
      },
      {
        question: "Is this useful for villas and hotels?",
        answer:
          "Yes. That is one of the strongest reasons for the page to exist.",
      },
      {
        question: "Can you handle seasonal maintenance?",
        answer:
          "Yes. Seasonal properties are a big fit for this page.",
      },
      {
        question: "Do you speak English for foreign owners?",
        answer:
          "Yes. That is the core promise of the page.",
      },
    ],
    relatedServiceSlugs: [
      englishServiceSlugs.tirana,
      englishServiceSlugs.emergency,
      englishServiceSlugs.airbnb,
      englishServiceSlugs.landlords,
    ],
    relatedGuideSlugs: [
      englishGuideSlugs.howToHire,
      englishGuideSlugs.airbnbChecklist,
      englishGuideSlugs.solarVsGrid,
    ],
    callToAction: "Call for English electrical support in Durres today.",
  },
] as const satisfies readonly EnglishServicePageEntry[];

export type EnglishServiceSlug = (typeof englishServicePages)[number]["slug"];

export const englishServicePageSlugs = englishServicePages.map(
  (page) => page.slug,
) as readonly EnglishServiceSlug[];

export const englishServicePageMap = englishServicePages.reduce(
  (accumulator, page) => {
    accumulator[page.slug] = page;
    return accumulator;
  },
  {} as Record<EnglishServiceSlug, EnglishServicePageEntry>,
);

export function getEnglishServicePage(
  slug: EnglishServiceSlug | string,
): EnglishServicePageEntry | undefined {
  return englishServicePageMap[slug as EnglishServiceSlug];
}
