export type ServiceLocale = "sq-AL";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface AlbanianServicePageEntry {
  slug: string;
  locale: ServiceLocale;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  summary: string;
  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  serviceAreas: readonly string[];
  whenToCall: readonly string[];
  problems: readonly string[];
  processSteps: readonly string[];
  faqs: readonly ServiceFAQ[];
  relatedServiceSlugs: readonly string[];
  relatedGuideSlugs: readonly string[];
  callToAction: string;
}

export const albanianGuideSlugs = {
  urgentElectrician: "/blog/kur-duhet-elektricist-urgjent",
  breakersFrequent: "/blog/siguresat-bien-shpesh",
  hotSocket: "/blog/priza-nxehet-ose-digjet",
  flickeringLights: "/blog/dritat-pulsojne-ne-shtepi",
  installCost: "/blog/sa-kushton-instalimi-elektrik-ne-apartament",
  panelGuide: "/blog/si-zgjidhet-paneli-elektrik",
  evChargerGuide: "/blog/si-zgjidhet-karikuesi-ev-per-shtepi",
  solarGuide: "/blog/sa-panele-diellore-duhen-per-shtepi",
} as const;

export type AlbanianGuideSlug =
  (typeof albanianGuideSlugs)[keyof typeof albanianGuideSlugs];

export const albanianServicePages = [
  {
    slug: "elektricist-tirane",
    locale: "sq-AL",
    title: "Elektricist në Tiranë",
    metaTitle: "Elektricist në Tiranë | Instalime, Riparime & Emergjenca",
    metaDescription:
      "Elektricist në Tiranë për instalime, riparime, diagnostikim, smart home, panele diellore dhe karikues EV me shërbim te shpejte ne kryeqytet.",
    h1: "Elektricist në Tiranë",
    hero:
      "Shërbim elektrik në Tiranë për apartamente, vila, zyra dhe biznese që kanë nevojë për riparime, instalime, diagnostikim dhe përmirësime në panel kur instalimi është i vjetër, kur po bëhet rinovim ose kur duhen shtuar pika të reja për pajisjet e përditshme.",
    summary:
      "Elektricist në Tiranë për defekte të përsëritura, instalime të reja, kontrolle sigurie dhe përmirësime praktike në apartamente, hyrje të reja, ambiente pune dhe prona që kërkojnë zgjidhje të qarta pa punë të panevojshme.",
    primaryKeyword: "elektricist ne tirane",
    secondaryKeywords: [
      "elektricist tirane",
      "shërbime elektrike tirane",
      "punime elektrike tirane",
      "elektricist 24 ore tirane",
    ],
    serviceAreas: [
      "Tiranë qendër",
      "Laprake",
      "Astir",
      "Don Bosko",
      "Komuna e Parisit",
      "Ali Demi",
    ],
    whenToCall: [
      "Kur keni ndërprerje të përsëritura ose siguresa që bien pa arsye.",
      "Kur po rinovoni apartamentin dhe keni nevojë për plan të ri elektrik.",
      "Kur doni nje kontroll sigurie para shitjes, qiradhënies ose marrjes në dorëzim.",
      "Kur keni nevojë për një vizite të shpejte në Tiranë me vleresim te qarte.",
    ],
    problems: [
      "Priza dhe celësa të vjetëruar që ngrohen ose japin shkendija.",
      "Instalime të paorganizuara në apartamente të vjetra dhe të reja.",
      "Ngarkese e larte në kuadër elektrik nga pajisje te shumta.",
      "Nevojë për zgjidhje të sigurta për ndriçim, panele ose karikues EV.",
    ],
    processSteps: [
      "Bëni një kontakt të shpejtë dhe tregoni simptomat ose projektin.",
      "Merrni një vlerësim paraprak për problemin, kohën dhe punën.",
      "Kryhet inspektimi në vend dhe sqarohen pjesët që duhen rregulluar.",
      "Puna mbyllet me testim, sqarim të rezultateve dhe rekomandime pasuese.",
    ],
    faqs: [
      {
        question: "A mbuloni edhe zona jashte qendrës se Tiranës?",
        answer:
          "Po. Shërbimi mbulon Tiranën e gjere, përfshirë zona banimi, blloqe të reja dhe objekte tregtare që kërkojnë ndihmë të shpejtë.",
      },
      {
        question: "A mund te vij për një problem të vogël si prizë apo celës?",
        answer:
          "Po, sepse punet e vogla shpesh zbulojnë probleme më të mëdha në instalim dhe duhen pare me kujdes.",
      },
      {
        question: "A ofroni shërbim ne anglisht per klientet e huaj?",
        answer:
          "Po. Ofron komunikim te qarte edhe per kliente te huaj qe jetojne, punojnë ose menaxhojne prona në Tiranë.",
      },
      {
        question: "A punoni për banesa dhe biznese?",
        answer:
          "Po. Shërbimi mbulon si banesa, ashtu edhe zyra, dyqane dhe ambiente biznesi ne Tiranë.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-urgjent-tirane",
      "riparime-elektrike-tirane",
      "instalime-elektrike-tirane",
      "diagnostikim-elektrik-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.urgentElectrician,
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.panelGuide,
    ],
    callToAction: "Kontaktoni tani për vizite dhe vlerësim në Tiranë.",
  },
  {
    slug: "elektricist-durres",
    locale: "sq-AL",
    title: "Elektricist ne Durrës",
    metaTitle: "Elektricist ne Durrës | Banesa, Vila, Hotele & Emergjenca",
    metaDescription:
      "Elektricist ne Durrës per vila, apartamente, hotele, biznese bregdetare, riparime urgjente, instalime dhe mirëmbajtje elektrike.",
    h1: "Elektricist ne Durrës",
    hero:
      "Shërbim elektrik në Durrës për apartamente bregdetare, vila, hotele të vogla dhe prona me qira që kanë nevojë për riparime, instalime dhe kontrolle sigurie para sezonit, gjatë verës ose sa herë që instalimi nuk punon si duhet.",
    summary:
      "Shërbim elektrik për apartamente, vila, hotele të vogla dhe biznese në Durrës, Golem dhe zonat përreth me riparime, instalime, kontrolle sigurie dhe mirëmbajtje sezonale.",
    primaryKeyword: "elektricist durres",
    secondaryKeywords: [
      "shërbime elektrike durres",
      "riparime elektrike durres",
      "instalime elektrike durres",
      "elektricist urgjent durres",
    ],
    serviceAreas: [
      "Durrës qender",
      "Plazh",
      "Shkembi i Kavajes",
      "Golem",
      "Mali i Robit",
      "zona turistike",
    ],
    whenToCall: [
      "Kur nje apartament pushimi ka defekt para ardhjes se vizitoreve.",
      "Kur vila ose hoteli ka rritje ngarkese gjate sezonit.",
      "Kur doni kontroll para qiradhenies afatshkurter ose dorezimit.",
      "Kur keni probleme me ndricimin, panelin ose linjat e kuzhines.",
    ],
    problems: [
      "Objekte sezonale qe rrijne gjate pa perdorim dhe zhvillojne defekte.",
      "Rrjeta elektrike te ngarkuara nga kondicionere, frigorifere dhe pajisje te tjera.",
      "Nevoje per zgjidhje me te pastra per vila dhe hotele bregdetare.",
      "Aksese te shpejta per riparime qe duhet te kryhen para check-in.",
    ],
    processSteps: [
      "Merrni kontakt dhe pershkruani zonen, tipin e objektit dhe simptomen.",
      "Vendoset nese duhet vizite urgjente apo planifikim per te nesermen.",
      "Kryhet kontrolli i instalimit, panelit dhe pajisjeve qe krijojne ngarkese.",
      "Mbyllet puna me testim dhe udhezime per mirëmbajtje sezonale.",
    ],
    faqs: [
      {
        question: "A punoni edhe ne zona turistike si Golem?",
        answer:
          "Po. Sherbimi mbulon Durresin, Golemin dhe zonat bregdetare perreth sipas kerkeses.",
      },
      {
        question: "A është i pershtatshem sherbimi per vila dhe hotele?",
        answer:
          "Po. Sherbimi është i pershtatshem per vila, apartamente me qira, hotele te vogla dhe prona turistike.",
      },
      {
        question: "A vini per pune te vogla dhe kontrolla?",
        answer:
          "Po, sepse ne Durrës shpesh problemi fillon si nje defekt i vogel dhe shndërrohet ne nderprerje me te madhe.",
      },
      {
        question: "A ofroni konsultim per sezonin e veres?",
        answer:
          "Po. Kontrollet para sezonit jane te dobishme kur ngarkesa ne prona bregdetare rritet ndjeshem.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-urgjent-tirane",
      "riparime-elektrike-tirane",
      "mirembajtje-elektrike-biznese",
      "elektricist-per-restorante-hotele",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.urgentElectrician,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.installCost,
    ],
    callToAction: "Kontaktoni tani per shërbim elektrik ne Durrës dhe zonat perreth.",
  },
  {
    slug: "elektricist-urgjent-tirane",
    locale: "sq-AL",
    title: "Elektricist Urgjent ne Tiranë",
    metaTitle: "Elektricist Urgjent ne Tiranë | 24 Ore, Siguresa dhe Defekte",
    metaDescription:
      "Elektricist urgjent ne Tiranë per defekte te menjehershme, siguresa qe bien, era djegieje, rryme te dobet dhe riparime 24 ore.",
    h1: "Elektricist Urgjent ne Tiranë",
    hero:
      "Elektricist urgjent në Tiranë për raste me erë djegieje, panel që nxehet, prize me shkëndija, siguresa që bien dhe ndërprerje të papritura të energjisë. Reagojmë shpejt për ta bërë ambientin të sigurt dhe për të gjetur shkakun e problemit pa humbur kohë.",
    summary:
      "Shërbim urgjent për banesa dhe biznese kur problemi elektrik kërkon reagim të shpejtë, izolim të sigurt të defektit dhe rikthim të energjisë sa më shpejt.",
    primaryKeyword: "elektricist urgjent tirane",
    secondaryKeywords: [
      "elektricist 24 ore tirane",
      "riparime urgjente elektrike",
      "siguresa bien",
      "qark i shkurter",
    ],
    serviceAreas: ["Tiranë", "Astir", "Don Bosko", "Komuna e Parisit", "Ali Demi"],
    whenToCall: [
      "Kur ndjeni era djegieje ose shihni shkendija ne prize apo panel.",
      "Kur siguresat bien vazhdimisht dhe nuk qendrojne ne pune.",
      "Kur ka nderprerje totale ose pjesshme ne nje zone te baneses.",
      "Kur uji, lageshtia ose defekti pas rinovimit ka prekur instalimin.",
    ],
    problems: [
      "Paje ndezjeje qe nuk funksionojne dhe lene ambientin pa rryme.",
      "Linje qe nxehet, drite qe pulson dhe celesa qe japin sinjal rreziku.",
      "Defekt pas shume ngarkese nga pajisje te medha ose kabellim i gabuar.",
      "Situata qe kerkojne izolim te menjehershem te pjeses problematike.",
    ],
    processSteps: [
      "Merrni kontakt dhe pershkruani simptomen pa e mbajtur gjate.",
      "Vendoset nese rasti kerkon nderhyrje te menjehershme apo izolim te perkohshem.",
      "Kryhet diagnostikimi i shpejte dhe identifikohet burimi i defektit.",
      "Pasi riparohet problemi, behet testim dhe sqarim i hapesirave qe duhen monitoruar.",
    ],
    faqs: [
      {
        question: "Sa shpejt duhet te kontaktoj nese ndjej erë djegieje?",
        answer:
          "Menjehere. Era e djegiejes, shkendijat ose ngrohja e pazakonte jane shenja qe duhen trajtuar pa vonese.",
      },
      {
        question: "A merreni vetëm me emergjenca nate?",
        answer:
          "Jo. Vlen edhe per defekte gjate dites qe nuk mund te presin deri neser.",
      },
      {
        question: "A mund te ofroni kontroll pas riparimit?",
        answer:
          "Po. Kontrolli final dhe sqarimi i shkakut jane pjese normale e nderhyrjes.",
      },
      {
        question: "A shkon kjo edhe per biznese?",
        answer:
          "Po, sidomos kur nje dyqan, zyre ose lokal ka nderprerje qe prek punen e perditshme.",
      },
    ],
    relatedServiceSlugs: [
      "diagnostikim-elektrik-tirane",
      "riparime-elektrike-tirane",
      "panel-elektrik-tirane",
      "elektricist-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.urgentElectrician,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.hotSocket,
    ],
    callToAction: "Telefononi tani per nderhyrje urgjente ne Tiranë.",
  },
  {
    slug: "riparime-elektrike-tirane",
    locale: "sq-AL",
    title: "Riparime Elektrike ne Tiranë",
    metaTitle: "Riparime Elektrike ne Tiranë | Priza, Celesa, Linja & Defekte",
    metaDescription:
      "Riparime elektrike ne Tiranë per priza, celesa, linja, ndriçim, qark te shkurter, siguresa dhe probleme te perditshme elektrike.",
    h1: "Riparime Elektrike ne Tiranë",
    hero:
      "Riparime elektrike ne Tiranë per problemet e perditshme qe prishin rehatine dhe sigurinë ne apartamente, vila dhe biznese.",
    summary:
      "Shërbim per riparimet qe nisin me nje prize, celes, drite ose linje problematike, por mund te kthehen shpejt ne defekt me te madh. Qellimi është gjetja e shkakut dhe rikthimi i funksionimit normal me zgjidhje te qarta.",
    primaryKeyword: "riparime elektrike tirane",
    secondaryKeywords: [
      "riparim prize",
      "riparim celesi",
      "riparim linje elektrike",
      "defekte elektrike tirane",
    ],
    serviceAreas: ["Tiranë qender", "Astir", "Don Bosko", "Myslym Shyri", "Ali Demi"],
    whenToCall: [
      "Kur nje prize nuk punon ose ngroh me shume se normalja.",
      "Kur nje celes ndizet me veshtiresi ose krijon shkendija.",
      "Kur ndricimi fiket vetvetiu ne nje pjese te shtepise.",
      "Kur ka shenja qe nje linje ose pajisje nuk po mban ngarkesen.",
    ],
    problems: [
      "Priza te djegura ose te vjetra qe duhen zevendesuar.",
      "Celesa dhe ndriçim qe nuk japin kontakt te qendrueshem.",
      "Kabllim i keq nga riparime te meparshme jo profesionale.",
      "Defekte qe kthehen shpesh sepse shkaku fillestar nuk është gjetur.",
    ],
    processSteps: [
      "Pershkruani simptomen dhe vendosni nese problemi është i perseritur.",
      "Bëhet inspektimi i pikes, linjes dhe elementeve qe lidhen me te.",
      "Riparohet ose zevendesohet pjesa qe është burimi i defektit.",
      "Testohet funksionimi dhe jepen keshilla per perdorim te sigurt.",
    ],
    faqs: [
      {
        question: "A merreni me riparime te vogla?",
        answer:
          "Po. Riparimet e vogla jane pjese e rendesishme e sherbimit, sidomos kur ndikojne ne siguri dhe perdorim te perditshem.",
      },
      {
        question: "A mund te vij per riparim ne nje apartament te vjeter?",
        answer:
          "Po. Apartamentet me instalime te vjetra shpesh kane me shume nevoje per kontroll dhe riparim te kujdesshem.",
      },
      {
        question: "A jepni rekomandime pas riparimit?",
        answer:
          "Po, sepse riparimi i mire nuk perfundon me zevendesim, por edhe me udhezime per parandalim.",
      },
      {
        question: "A punoni edhe te fundjavat?",
        answer:
          "Po sipas rastit, sidomos kur problemi pengon perdorimin normal te ambientit.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-urgjent-tirane",
      "instalime-elektrike-tirane",
      "diagnostikim-elektrik-tirane",
      "priza-celesa-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.hotSocket,
      albanianGuideSlugs.flickeringLights,
    ],
    callToAction: "Kontaktoni tani per riparim elektrik ne Tiranë.",
  },
  {
    slug: "instalime-elektrike-tirane",
    locale: "sq-AL",
    title: "Instalime Elektrike ne Tiranë",
    metaTitle: "Instalime Elektrike ne Tiranë | Apartamente, Vila & Ndertim",
    metaDescription:
      "Instalime elektrike ne Tiranë per banesa te reja, rikonstruksione, zgjerim linjash, shtim qarqesh, ndriçim dhe organizim paneli.",
    h1: "Instalime Elektrike ne Tiranë",
    hero:
      "Instalime elektrike në Tiranë për apartamente në rinovim, vila, zyra dhe ndërtime të reja që kanë nevojë për qarqe të organizuara, panel të rregullt dhe kapacitet të mjaftueshëm për kuzhinë, kondicionerë, ndriçim dhe pajisjet e përditshme.",
    summary:
      "Shërbim për instalime të reja, rinovime dhe zgjerime elektrike në apartamente, vila, zyra dhe ambiente pune me plan të qartë, qarqe të organizuara dhe kapacitet për pajisjet moderne.",
    primaryKeyword: "instalime elektrike tirane",
    secondaryKeywords: [
      "instalim elektrik apartament",
      "instalim elektrik vile",
      "punime elektrike",
      "kabllim elektrik",
    ],
    serviceAreas: ["Tiranë", "Laprake", "Astir", "Selite", "Farkë", "Kamëz"],
    whenToCall: [
      "Kur po rinovoni apartamentin ose po beni ndertim te ri.",
      "Kur doni te shtoni priza, celesa, ndriçim ose qarqe te reja.",
      "Kur sistemi i vjeter nuk i mban me pajisjet moderne.",
      "Kur doni projekt me me shume rend dhe akses per mirëmbajtje te ardhshme.",
    ],
    problems: [
      "Instalime te vjetra qe nuk jane menduar per pajisjet e sotme.",
      "Mungese e qarqeve te dedikuara per kuzhine, ngrohje ose pajisje te renda.",
      "Kabllim i çrregullt qe e ben me te veshtire diagnostikimin pas viteve.",
      "Rrezik i shtuar kur puna behet pa ndarje te qarte te ngarkeses.",
    ],
    processSteps: [
      "Percaktohen nevojat e objektit dhe pajisjet kryesore qe do lidhen.",
      "Planifikohet ndarja e qarqeve, ndricimit dhe panelit sipas perdorimit.",
      "Kryhet instalimi, montimi dhe organizimi i kabllove dhe pajisjeve.",
      "Testohet sistemi dhe jepen shenime per mirëmbajtje e zgjerime te ardhshme.",
    ],
    faqs: [
      {
        question: "A e beni instalimin nga zero?",
        answer:
          "Po. Mbulohen si projektet e reja, ashtu edhe modernizimet e plota te instalimit ekzistues.",
      },
      {
        question: "A mund te shtoni qarqe te reja ne nje banese ekzistuese?",
        answer:
          "Po. Mund te shtohen qarqe te reja edhe ne nje banese ekzistuese pa prishur rendin e pjeses tjeter te shtepise.",
      },
      {
        question: "A i merrni edhe projektet e vila-ve?",
        answer:
          "Po, sidomos kur kerkohet ndriçim me shume zona, linja te dedikuara dhe zgjidhje me te pastra.",
      },
      {
        question: "A planifikoni edhe panelin elektrik bashke me instalimin?",
        answer:
          "Po, sepse instalimi i mire nuk ka kuptim pa panel te organizuar dhe te lehte per mirëmbajtje.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-tirane",
      "panel-elektrik-tirane",
      "priza-celesa-tirane",
      "elektricist-per-vila",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.flickeringLights,
    ],
    callToAction: "Kontaktoni tani per instalim elektrik ne Tiranë.",
  },
  {
    slug: "diagnostikim-elektrik-tirane",
    locale: "sq-AL",
    title: "Diagnostikim Elektrik ne Tiranë",
    metaTitle: "Diagnostikim Elektrik ne Tiranë | Gjetje Defektesh & Testim",
    metaDescription:
      "Diagnostikim elektrik ne Tiranë për defekte të fshehura, qark të shkurtër, ngarkesë të tepruar, ngrohje linjash dhe kontrolle sigurie.",
    h1: "Diagnostikim Elektrik në Tiranë",
    hero:
      "Diagnostikim elektrik ne Tiranë per rastet kur problemi nuk duket qartë dhe duhet gjetur burimi para se të shkaktojë dëmtim më të madh.",
    summary:
      "Shërbim per rastet kur defekti vjen e iken, siguresat bien pa arsye të qartë ose linja nxehet pa u kuptuar pika problematike. Diagnostikimi i mire kursen kohë, para dhe riparime të kota sepse zbulon shkakun real.",
    primaryKeyword: "diagnostikim elektrik tirane",
    secondaryKeywords: [
      "kontroll elektrik",
      "defekte elektrike",
      "gjetje qark i shkurter",
      "testim paneli elektrik",
    ],
    serviceAreas: ["Tiranë", "Bllok", "Astir", "Don Bosko", "Komuna e Parisit"],
    whenToCall: [
      "Kur problemi përsëritet pa u kuptuar arsyeja e saktë.",
      "Kur një pjesë e shtëpise ka tension të paqëndrueshem ose fikje të pjesshme.",
      "Kur linja ngrohet por nuk e dini cila pjesë është problematike.",
      "Kur po përgatitni objektin për përdorim të dendur ose qira.",
    ],
    problems: [
      "Defekte të fshehura në lidhje, qarqe ose panele.",
      "Rryme e dobët ose e paqëndrueshme në një pjesë të objektit.",
      "Siguresa që bien herë pas here pa arsye të qartë.",
      "Linjat qe nxehen ose pajisje që nuk punojne si duhet.",
    ],
    processSteps: [
      "Merret informacioni mbi simptomat dhe historikun e defektit.",
      "Bëhen teste te panelit, qarqeve dhe pikave kryesore të konsumit.",
      "Izolohet burimi i problemit dhe bëhet korrigjimi i nevojshëm.",
      "Pas testimit final, jepen rekomandime për ndjekje ose përmirësim.",
    ],
    faqs: [
      {
        question: "A është diagnostikimi ndryshe nga riparimi?",
        answer:
          "Po. Diagnostikimi përdoret kur duhet gjetur shkaku i vertetë para se të nisen zëvendesimet ose riparimet.",
      },
      {
        question: "A e përdorni edhe për probleme qe vijnë e ikin?",
        answer:
          "Po, sepse ato jane rastet që zakonisht përfitojne me shume nga diagnostikimi i mire.",
      },
      {
        question: "A mund ta përdor këtë shërbim para se te blej nje prone?",
        answer:
          "Po. është zgjedhje e mire edhe për blerje apartamenti ose kontroll para marrjes në dorëzim.",
      },
      {
        question: "A jepni raport të qartë të gjetjeve?",
        answer:
          "Po. Pas kontrollit jepen gjetje të qarta dhe rekomandime konkrete, jo hamendje.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-urgjent-tirane",
      "riparime-elektrike-tirane",
      "panel-elektrik-tirane",
      "mirembajtje-elektrike-biznese",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.urgentElectrician,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.panelGuide,
    ],
    callToAction: "Kontaktoni tani per diagnostikim elektrik ne Tiranë.",
  },
  {
    slug: "panele-diellore-tirane",
    locale: "sq-AL",
    title: "Panele Diellore në Tiranë",
    metaTitle: "Panele Diellore në Tiranë | Projektim, Instalim dhe Mirëmbajtje",
    metaDescription:
      "Panele diellore në Tiranë për shtëpi, vila dhe biznese. Projektim, instalim, lidhje të sigurt me panelin elektrik dhe mirëmbajtje të sistemit fotovoltaik.",
    h1: "Panele Diellore në Tiranë",
    hero:
      "Instalim panelesh diellore në Tiranë për shtëpi, vila dhe biznese që kërkojnë kursim real, punë të pastër dhe lidhje të sigurt me instalimin elektrik. Vlerësojmë pronën, zgjedhim zgjidhjen e duhur dhe kujdesemi që sistemi të funksionojë mirë edhe pas montimit.",
    summary:
      "Shërbimi mbulon vlerësimin e pronës, projektimin, instalimin, lidhjen me panelin elektrik dhe kontrollin e sistemit fotovoltaik.",
    primaryKeyword: "panele diellore tirane",
    secondaryKeywords: [
      "instalim panele diellore tirane",
      "sistem fotovoltaik tirane",
      "mirëmbajtje panele diellore",
      "panele fotovoltaike tirane",
    ],
    serviceAreas: ["Tiranë", "Farkë", "Lundër", "Surrel", "Kamëz", "Vaqarr"],
    whenToCall: [
      "Kontroll të kulmit, orientimit, hijezimit dhe konsumit real.",
      "Projektim sipas nevojës së pronës, jo me zgjidhje standarde.",
      "Instalim dhe lidhje të sigurt me panelin elektrik ekzistues.",
      "Testim, këshillim për përdorim dhe mirëmbajtje periodike.",
    ],
    problems: [
      "Këshillim i qartë para se të investoni në sistemin solar.",
      "Zgjidhje të menduara për kursim, siguri dhe jetëgjatësi.",
      "Punë e pastër në shtëpi, vilë ose ambient biznesi.",
      "Mbështetje edhe pas instalimit për kontroll dhe mirëmbajtje.",
    ],
    processSteps: [
      "Shikojmë pronën, konsumin dhe panelin elektrik ekzistues.",
      "Përcaktojmë kapacitetin, pajisjet dhe mënyrën e montimit.",
      "Kryejmë instalimin, lidhjen dhe testimin e sistemit.",
      "Ju shpjegojmë përdorimin, monitorimin dhe kontrollet periodike.",
    ],
    faqs: [
      {
        question: "A e beni vleresimin para instalimit?",
        answer:
          "Po. Fillimisht kontrollojme pronen, konsumin dhe panelin elektrik qe sistemi te projektohet sakte.",
      },
      {
        question: "A instaloni panele diellore per shtepi dhe biznese?",
        answer:
          "Po. Punojme me shtepi, vila dhe ambiente biznesi sipas konsumit dhe hapesires se prones.",
      },
      {
        question: "A e lidhni sistemin me panelin ekzistues?",
        answer:
          "Po. Lidhja me panelin elektrik ekzistues është pjese e rendesishme e instalimit dhe kontrollohet me kujdes.",
      },
      {
        question: "A ofroni mirëmbajtje pas instalimit?",
        answer:
          "Po. Ofrrojme kontroll, keshillim dhe mirëmbajtje qe sistemi te punoje mire edhe me kalimin e kohes.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-tirane",
      "diagnostikim-elektrik-tirane",
      "panel-elektrik-tirane",
      "karikues-ev-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.solarGuide,
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.panelGuide,
    ],
    callToAction:
      "Na kontaktoni per vleresim, projektim dhe instalim panelesh diellore ne Tiranë.",
  },
  {
    slug: "karikues-ev-tirane",
    locale: "sq-AL",
    title: "Karikues EV ne Tiranë",
    metaTitle: "Karikues EV ne Tiranë | Instalime Home & Business",
    metaDescription:
      "Karikues EV ne Tiranë per instalime ne shtepi dhe biznese me kontroll ngarkese, mbrojtje, lidhje te sigurt dhe planifikim te qarte.",
    h1: "Karikues EV ne Tiranë",
    hero:
      "Karikues EV në Tiranë për shtëpi, garazhe, vila dhe biznese që duan karikim të sigurt, zgjedhje të qartë të fuqisë dhe instalim praktik sipas panelit elektrik, vendit të parkimit dhe përdorimit të përditshëm.",
    summary:
      "Shërbimi mbulon kontrollin e panelit, zgjedhjen e fuqisë, rrugën e kabllimit, montimin dhe testimin e karikuesit EV për shtëpi, vila dhe biznese.",
    primaryKeyword: "karikues ev tirane",
    secondaryKeywords: [
      "instalim karikues ev",
      "karikues makine elektrike",
      "wallbox tirane",
      "stacion karikimi ne shtepi",
    ],
    serviceAreas: ["Tiranë", "Laprake", "Astir", "Farkë", "Lundër", "Kamëz"],
    whenToCall: [
      "Kur keni makine elektrike dhe doni karikim te sigurt ne shtepi.",
      "Kur biznesi po planifikon parking ose pika karikimi per staf dhe kliente.",
      "Kur duhet kontroll i panelit per te pare nese e mban ngarkesen.",
      "Kur doni te parandaloni instalim te gabuar qe shkakton vonesa ose mbingarkese.",
    ],
    problems: [
      "Mungese e qarqeve te dedikuara per karikim te sigurt.",
      "Kuadri elektrik qe duhet vleresuar para vendosjes se paisjes.",
      "Vendosje e gabuar qe e ben karikimin te papershtatshem ne perdorim.",
      "Nevoje per zgjidhje qe funksionon ne shtepi, garazh ose biznes.",
    ],
    processSteps: [
      "Kontrollohet paneli dhe ngarkesa reale e objektit.",
      "Percaktohet vendi i instalimit dhe rruga me e paster e kabllimit.",
      "Kryhet montimi, mbrojtja dhe lidhja e karikuesit.",
      "Testohet karikimi dhe shpjegohen kufijte e sigurt te perdorimit.",
    ],
    faqs: [
      {
        question: "A e kontrolloni panelin para instalimit?",
        answer:
          "Po. Para instalimit kontrollohet paneli, ngarkesa dhe kapaciteti i linjës që karikuesi të punojë në mënyrë të sigurt.",
      },
      {
        question: "A punoni për shtëpi dhe biznese?",
        answer:
          "Po. Instalimi përshtatet sipas përdorimit në shtëpi, garazh, zyrë ose ambient biznesi.",
      },
      {
        question: "A mund te shtohet edhe pas instalimit te meparshem elektrik?",
        answer:
          "Po, nese sistemi e mban ose mund te pershtatet me permiresime te qarta.",
      },
      {
        question: "A ndihmon edhe per zgjedhjen e fuqise se karikuesit?",
        answer:
          "Po, sepse zgjedhja e fuqise është pjese e vleresimit dhe nuk duhet lene rastesisht.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-tirane",
      "diagnostikim-elektrik-tirane",
      "panele-diellore-tirane",
      "panel-elektrik-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.evChargerGuide,
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.installCost,
    ],
    callToAction: "Kontaktoni tani per instalim karikuesi EV ne Tiranë.",
  },
  {
    slug: "panel-elektrik-tirane",
    locale: "sq-AL",
    title: "Panel Elektrik ne Tiranë",
    metaTitle: "Panel Elektrik ne Tiranë | Kuader, Siguresa & Permiresim",
    metaDescription:
      "Panel elektrik ne Tiranë per zevendesim kuadri, riorganizim siguresash, mbrojtje me te mire dhe permiresim te instalimit ekzistues.",
    h1: "Panel Elektrik ne Tiranë",
    hero:
      "Panel elektrik ne Tiranë per raste kur kuadri, siguresat dhe ndarja e qarqeve kerkojne me shume rregull, qartesi dhe mbrojtje.",
    summary:
      "Shërbim per instalime qe po mbingarkohen ose panele qe jane bere te veshtira per t'u kuptuar dhe mirembajtur. Fokusi është te qartesia, ndarja e qarqeve dhe modernizimi i siguresave sipas ngarkeses reale.",
    primaryKeyword: "panel elektrik tirane",
    secondaryKeywords: [
      "kuader elektrik",
      "siguresa automatike",
      "paneli elektrik",
      "permiresim paneli",
    ],
    serviceAreas: ["Tiranë", "Astir", "Don Bosko", "Bllok", "Komuna e Parisit"],
    whenToCall: [
      "Kur paneli është i vjeter dhe veshtire per t'u identifikuar.",
      "Kur siguresat bien shpesh ose jane te paorganizuara.",
      "Kur deshironi me shume mbrojtje dhe ndarje me te mire te qarqeve.",
      "Kur po shtoni ngarkese te re si kondicionere, kuzhine ose karikim EV.",
    ],
    problems: [
      "Kuader i vjeter qe nuk i perballon pajisjet moderne.",
      "Siguresa te etiketuar keq ose te mbledhura pa logjike.",
      "Rrezik nga mungesa e mbrojtjes se duhur ne qarqe te caktuara.",
      "Veshtiresi per te kuptuar cfare fiket kur del nje problem.",
    ],
    processSteps: [
      "Kontrollohet gjendja aktuale e panelit dhe ngarkesat kryesore.",
      "Percaktohet nese duhet organizim, zgjerim apo zevendesim i plote.",
      "Riorganizohen qarqet, siguresat dhe etiketimi per qartesi me te madhe.",
      "Bëhet testim final dhe jepen shenime per perdorim te rregullt.",
    ],
    faqs: [
      {
        question: "A është paneli elektrik i njejte me kuadrin elektrik?",
        answer:
          "Po, zakonisht perdoren si kerkime te aferta per qendren e kontrollit te instalimit elektrik.",
      },
      {
        question: "A mund te zevendesohet paneli i vjeter me nje me te qarte?",
        answer:
          "Po. Paneli i vjeter mund te zevendesohet ose riorganizohet per me shume qartesi dhe sigurim.",
      },
      {
        question: "A e beni edhe etiketimin e qarqeve?",
        answer:
          "Po, sepse qartesia e panelit është pjese e vleres qe jep sherbimi.",
      },
      {
        question: "A lidhet kjo me instalime apo vetem me riparim?",
        answer:
          "Me te dyja. Sherbimi lidhet si me riparimin, ashtu edhe me modernizimin dhe mbrojtjen e instalimit.",
      },
    ],
    relatedServiceSlugs: [
      "instalime-elektrike-tirane",
      "diagnostikim-elektrik-tirane",
      "elektricist-urgjent-tirane",
      "priza-celesa-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.installCost,
    ],
    callToAction: "Kontaktoni tani per panel elektrik ne Tiranë.",
  },
  {
    slug: "ndricim-led-tirane",
    locale: "sq-AL",
    title: "Ndriçim LED ne Tiranë",
    metaTitle: "Ndriçim LED ne Tiranë | Instalime, Spotesh & Dekorativ",
    metaDescription:
      "Ndriçim LED ne Tiranë per banesa, zyra, shkalle, oborre dhe biznese me instalim spotesh, ndriçim dekorativ dhe zgjidhje praktike.",
    h1: "Ndriçim LED ne Tiranë",
    hero:
      "Ndriçim LED ne Tiranë per apartamente, biznese dhe hapesira te perbashketa qe kerkojne zgjidhje moderne, efikase dhe estetike.",
    summary:
      "Shërbim qe kombinon performancen me pamjen, sepse ndricimi zgjidhet si per funksion, ashtu edhe per atmosfere. Mbulon spote, rripa LED, ndriçim te perhershem dhe zgjidhje dekorative per ambiente te ndryshme.",
    primaryKeyword: "ndriçim led tirane",
    secondaryKeywords: [
      "instalim spotesh",
      "ndriçim dekorativ",
      "ndriçim shkallesh",
      "ndriçim oborri",
    ],
    serviceAreas: ["Tiranë", "Bllok", "Komuna e Parisit", "Astir", "Don Bosko"],
    whenToCall: [
      "Kur doni ndriçim me te mire dhe me te kursyer ne energji.",
      "Kur po rregulloni ambientin dhe doni pamje me moderne.",
      "Kur shkallet, korridoret ose oborri kerkojne ndriçim me te qarte.",
      "Kur biznesi ka nevoje per ndriçim qe duket mire dhe punon cdo dite.",
    ],
    problems: [
      "Ndriçim i dobet qe nuk i sherben me funksionit te ambientit.",
      "Spotet ose LED-et e vendosura pa plan dhe pa qartesi estetike.",
      "Harxhim i panevojshem i energjise nga zgjidhje te vjetra.",
      "Hapesira qe kerkojne ndriçim te perbashket ose me sensore.",
    ],
    processSteps: [
      "Percaktohet qellimi: funksional, dekorativ ose kombinim i te dyve.",
      "Zgjidhen pikat, lloji i ndricimit dhe menyra e komandimit.",
      "Kryhet instalimi dhe organizimi i kabllove sipas planit.",
      "Testohet ndricimi ne dite dhe nate per te pare efektin real.",
    ],
    faqs: [
      {
        question: "A instaloni spotesh dhe rripa LED?",
        answer:
          "Po. Instalimi i spotesh dhe rripave LED është nje nga kerkesat me te zakonshme ne kete shërbim.",
      },
      {
        question: "A e beni ndricimin edhe per shkalle ose oborr?",
        answer:
          "Po, sidomos sepse keto zona kerkojne siguri dhe dukshmeri me te mire.",
      },
      {
        question: "A mund te kombinohet ndriçim funksional dhe dekorativ?",
        answer:
          "Po. Zgjidhjet mund te jene njekohesisht praktike, kursimtare dhe estetike.",
      },
      {
        question: "A është i pershtatshem per zyra dhe dyqane?",
        answer:
          "Po, sepse ndricimi i mire rrit komoditetin dhe pamjen e ambientit.",
      },
    ],
    relatedServiceSlugs: [
      "priza-celesa-tirane",
      "instalime-elektrike-tirane",
      "mirembajtje-elektrike-biznese",
      "elektricist-per-zyra-dyqane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.flickeringLights,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.installCost,
    ],
    callToAction: "Kontaktoni tani per ndriçim LED ne Tiranë.",
  },
  {
    slug: "priza-celesa-tirane",
    locale: "sq-AL",
    title: "Priza dhe Celesa ne Tiranë",
    metaTitle: "Priza dhe Celesa ne Tiranë | Nderrim, Shtim & Riparim",
    metaDescription:
      "Priza dhe celesa ne Tiranë per nderrim, shtim, riparim, perkthim te linjave dhe zgjidhje te sigurta per banesa dhe biznese.",
    h1: "Priza dhe Celesa ne Tiranë",
    hero:
      "Priza dhe celesa ne Tiranë per rastet kur problemi nis te pika e perdorimit dhe duhet zgjidhje e shpejte e e sigurt.",
    summary:
      "Shërbim per punet e shpeshta qe duken te vogla, por ndikojne drejtperdrejt ne siguri dhe perdorim normal. është i vlefshem per apartamente, zyra dhe objekte me perdorim te larte ku pikat elektrike punojne cdo dite.",
    primaryKeyword: "priza dhe celesa tirane",
    secondaryKeywords: [
      "nderrim prizash",
      "shtim prizash",
      "riparim celesi",
      "prize e djegur",
    ],
    serviceAreas: ["Tiranë", "Astir", "Don Bosko", "Komuna e Parisit", "Bllok"],
    whenToCall: [
      "Kur nje prize ngrohet, nxin ose ka kontakt te dobet.",
      "Kur celesi nuk fik ose nuk ndez me ritmin normal.",
      "Kur duhet te shtohen pika te reja ne nje dhome apo korridor.",
      "Kur keni pajisje te reja dhe pika ekzistuese nuk mjaftojne me.",
    ],
    problems: [
      "Priza te vjetra qe nuk i perballojne pajisjet moderne.",
      "Celesa te konsumuar nga perdorimi i perditshem.",
      "Mungese e pikave te mjaftueshme ne kuzhine, dhoma ose zyre.",
      "Lidhje jo te sigurta nga punime te meparshme te kryera keq.",
    ],
    processSteps: [
      "Kontrollohet gjendja e pikes dhe qarkut qe e furnizon ate.",
      "Percaktohet nese duhet nderrim, shtim apo rregullim i lidhjes.",
      "Vendoset pajisja e re ose riorganizohet pika ekzistuese.",
      "Testohet kontaktimi dhe jepen keshilla per ngarkesen e lejuar.",
    ],
    faqs: [
      {
        question: "A e mbuloni vetem zevendesimin apo edhe shtimin e pikave?",
        answer:
          "Te dyja. Sherbimi mbulon si zevendesimin, ashtu edhe shtimin praktik te pikave te reja.",
      },
      {
        question: "A punoni edhe në kuzhina dhe banjo?",
        answer:
          "Po, sidomos kur ka lageshti, ngarkese ose perdorim te vazhdueshem.",
      },
      {
        question: "A mund te zgjidhni edhe probleme me kontakt te dobet?",
        answer:
          "Po, sepse ajo është nje nga arsyet kryesore pse klientet kerkojne kete shërbim.",
      },
      {
        question: "A e beni edhe per zyra dhe dyqane?",
        answer:
          "Po, sidomos kur ka nevoje per me shume pika pune ose kur pika ekzistuese është e konsumuar.",
      },
    ],
    relatedServiceSlugs: [
      "instalime-elektrike-tirane",
      "riparime-elektrike-tirane",
      "panel-elektrik-tirane",
      "elektricist-per-zyra-dyqane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.hotSocket,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.installCost,
    ],
    callToAction: "Kontaktoni tani per prize dhe celesa ne Tiranë.",
  },
  {
    slug: "mirembajtje-elektrike-biznese",
    locale: "sq-AL",
    title: "Mirëmbajtje Elektrike per Biznese",
    metaTitle: "Mirëmbajtje Elektrike per Biznese | Zyra, Dyqane & Lokale",
    metaDescription:
      "Mirëmbajtje elektrike per biznese ne Tiranë dhe Durrës per zyra, dyqane, restorante, lokale dhe objekte qe kerkojne stabilitet.",
    h1: "Mirëmbajtje Elektrike per Biznese",
    hero:
      "Mirëmbajtje elektrike per biznese qe duan vazhdimesi pune dhe parandalim te nderprerjeve qe kushtojne kohe e para.",
    summary:
      "Shërbim per pronare dhe menaxhere qe duan te shmangin ndaljet e papritura dhe te kene kontroll me te mire mbi instalimin. është i pershtatshem per kontrolle periodike, riparime parandaluese dhe planifikim te rregullt te mirembajtjes.",
    primaryKeyword: "mirëmbajtje elektrike biznesi",
    secondaryKeywords: [
      "mirëmbajtje elektrike",
      "elektricist per biznese",
      "kontroll periodik elektrik",
      "riparime per zyra dhe dyqane",
    ],
    serviceAreas: ["Tiranë", "Durrës", "Bllok", "qendra tregtare", "zona biznesi"],
    whenToCall: [
      "Kur biznesi nuk mund te perballoje nderprerje te gjata ose te shpeshta.",
      "Kur doni kontroll periodik perpara sezonit te ngarkuar.",
      "Kur po hapni zyre, dyqan ose lokal dhe doni stabilitet.",
      "Kur pajisjet, ndricimi ose paneli fillojne te japin shenja konsumimi.",
    ],
    problems: [
      "Defekte qe ndikojne ne pune, shitje ose shërbim ndaj klientit.",
      "Ngarkese e shtuar nga pajisje profesionale ne kuzhine ose zyre.",
      "Linjat qe kane nevoje per kontroll para se te bejne probleme me te medha.",
      "Mungese e nje plani te rregullt mirembajtjeje.",
    ],
    processSteps: [
      "Percaktohen ambientet dhe pajisjet kritike per biznesin.",
      "Kryhet kontrolli i linjave, panelit dhe pikave qe mbajne ngarkese.",
      "Zbulohen pjeset me rrezik dhe planifikohet mirembajtja ose riparimi.",
      "Mbyllet me raport te qarte dhe plan ndjekjeje per vizitat e ardhshme.",
    ],
    faqs: [
      {
        question: "A mund te planifikohet mirëmbajtje e rregullt?",
        answer:
          "Po. Mirembajtja e rregullt është nje nga arsyet kryesore pse bizneset e perdorin kete shërbim.",
      },
      {
        question: "A punoni edhe ne Durrës?",
        answer:
          "Po. Sherbimi mbulon edhe Durresin, sidomos per biznese qe kane nevoje per stabilitet te larte.",
      },
      {
        question: "A është kjo e vlefshme per zyra dhe dyqane?",
        answer:
          "Po, sepse te dyja llojet e hapesirave humbasin kohe dhe para kur instalimi i jep probleme.",
      },
      {
        question: "A mund te behet pas puneve te orarit normal?",
        answer:
          "Po, sipas rastit, per te mos prishur operimin normal te biznesit.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-per-zyra-dyqane",
      "elektricist-per-restorante-hotele",
      "diagnostikim-elektrik-tirane",
      "panel-elektrik-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.installCost,
    ],
    callToAction: "Kontaktoni tani per mirëmbajtje elektrike per biznesin tuaj.",
  },
  {
    slug: "smart-home-tirane",
    locale: "sq-AL",
    title: "Smart Home ne Tiranë",
    metaTitle: "Smart Home ne Tiranë | Automatizim, Ndriçim & Kontroll",
    metaDescription:
      "Smart home ne Tiranë per ndriçim inteligjent, kontroll ne distance, sensorë dhe automatizim te banesave, vilave dhe zyrave.",
    h1: "Smart Home ne Tiranë",
    hero:
      "Smart home ne Tiranë per kliente qe duan automatizim modern, komoditet dhe kontroll me te mire te ndricimit dhe pajisjeve ne shtepi ose zyre.",
    summary:
      "Shërbim per zgjidhje praktike smart home qe e bejne jeten me te thjeshte, me te rregullt dhe me te kontrollueshme. Fokusi është te automatizimi i dobishem, jo te teknologjia e komplikuar pa vlere ne perdorim te perditshem.",
    primaryKeyword: "smart home tirane",
    secondaryKeywords: [
      "automatizim shtepie",
      "ndriçim inteligjent",
      "smart switch",
      "domotike",
    ],
    serviceAreas: ["Tiranë", "Farkë", "Lundër", "Bllok", "Astir"],
    whenToCall: [
      "Kur doni kontroll te ndricimit dhe pajisjeve nga telefoni.",
      "Kur po rinovoni dhe mund te integroni zgjidhje moderne qe ne fillim.",
      "Kur villa ose zyra ka nevoje per komoditet dhe organizim me te mire.",
      "Kur doni zgjidhje praktike per kursim dhe automatizim te perditshem.",
    ],
    problems: [
      "Ambient qe kerkon me shume kontroll dhe me pak nderhyrje manuale.",
      "Ndriçim dhe pajisje qe mund te rregullohen me skema automatike.",
      "Nevoje per sensore, skena ndricimi ose kontroll ne distance.",
      "Instalim qe duhet te jete i paster dhe i menduar bashke me rrjetin elektrik.",
    ],
    processSteps: [
      "Percaktohen zonat, pajisjet dhe niveli i automatizimit qe ju duhet.",
      "Planifikohet integrimi me instalimin ekzistues ose me projekt te ri.",
      "Montohen pajisjet dhe lidhen skenat, sensoret ose komandat kryesore.",
      "Testohet perdorimi dhe jepen udhezime te thjeshta per perdorim te perditshem.",
    ],
    faqs: [
      {
        question: "A duhet instalim i ri per smart home?",
        answer:
          "Jo gjithmone. Nje pjese e zgjidhjeve mund te shtohen edhe mbi instalimin ekzistues.",
      },
      {
        question: "A është smart home vetem per vila?",
        answer:
          "Jo, mund te perdoret edhe ne apartamente dhe zyra kur ka nevoje per kontroll me te mire.",
      },
      {
        question: "A e beni edhe ndricimin inteligjent?",
        answer:
          "Po. Ndricimi inteligjent është nje nga hyrjet me te zakonshme per kete shërbim.",
      },
      {
        question: "A është zgjidhje e pershtatshme per zyra?",
        answer:
          "Po, sidomos kur ka nevoje per skena ndricimi, kursim dhe kontroll me te rregullt.",
      },
    ],
    relatedServiceSlugs: [
      "ndricim-led-tirane",
      "instalime-elektrike-tirane",
      "elektricist-per-vila",
      "mirembajtje-elektrike-biznese",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.flickeringLights,
    ],
    callToAction: "Kontaktoni tani per smart home ne Tiranë.",
  },

  {
    slug: "elektricist-per-apartamente",
    locale: "sq-AL",
    title: "Elektricist per Apartamente",
    metaTitle: "Elektricist per Apartamente | Kontroll, Riparim & Instalime",
    metaDescription:
      "Elektricist per apartamente ne Tiranë dhe Durrës per kontroll, riparime, instalime, shtim pikash dhe permiresim te instalimit.",
    h1: "Elektricist per Apartamente",
    hero:
      "Elektricist për apartamente në Tiranë dhe Durrës për pronarë, blerës dhe qiramarrës që duan kontroll të qartë, riparime të sigurta dhe përmirësime praktike para hyrjes në pronë, para qiradhënies ose gjatë përdorimit të përditshëm.",
    summary:
      "Shërbim për kontroll, riparime, instalime dhe shtim pikash në apartamente të vjetra e të reja, me fokus te kuzhina, paneli, prizat dhe siguria para hyrjes, qiradhënies ose shitjes.",
    primaryKeyword: "elektricist per apartamente",
    secondaryKeywords: [
      "instalime apartament",
      "riparime apartament",
      "kontroll elektrik apartament",
      "shtim prizash apartament",
    ],
    serviceAreas: ["Tiranë", "Durrës", "Astir", "Don Bosko", "Plazh"],
    whenToCall: [
      "Kur po merrni apartament te ri dhe doni kontroll sigurie.",
      "Kur qiramarresi raporton probleme me prize, celesa ose ndriçim.",
      "Kur keni nevoje per me shume pika ne kuzhine ose dhoma.",
      "Kur doni permiresim para qiradhenies apo shitjes.",
    ],
    problems: [
      "Apartamente me instalim te vjeter dhe pa ndarje te qarte.",
      "Mungese e pikave per pajisje te shumta moderne.",
      "Defekte te vogla qe prishin komoditetin e perditshem.",
      "Nevoje per kontroll para hyrjes se qiramarresit ose pronarit te ri.",
    ],
    processSteps: [
      "Analizohet gjendja e apartamentit dhe perdorimi i pritshëm.",
      "Percaktohen pikat qe duhen rregulluar ose shtuar.",
      "Bëhet puna dhe testimi i qarqeve te prekura.",
      "Jepen rekomandime per perdorim dhe kontroll te radhes.",
    ],
    faqs: [
      {
        question: "A punoni për apartamente të vjetra dhe të reja?",
        answer:
          "Po. Si apartamentet e vjetra, ashtu edhe ato te reja kerkojne qasje te ndryshme dhe kontrolle te pershtatura.",
      },
      {
        question: "A mund te behen shtime para se te hyje qiramarresi?",
        answer:
          "Po. Ky është nje nga rastet me te zakonshme para hyrjes se qiramarresit ose dorëzimit te apartamentit.",
      },
      {
        question: "A shkon edhe per blerje apartamenti?",
        answer:
          "Po, sepse kontrolli para marrjes ne dorezim është nje nevoje shume e forte lokale.",
      },
      {
        question: "A punoni edhe ne Durrës?",
        answer:
          "Po, sidomos per apartamente bregdetare dhe apartamente me qira.",
      },
    ],
    relatedServiceSlugs: [
      "elektricist-tirane",
      "riparime-elektrike-tirane",
      "instalime-elektrike-tirane",
      "elektricist-durres",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.hotSocket,
      albanianGuideSlugs.breakersFrequent,
    ],
    callToAction: "Kontaktoni tani per apartamentin tuaj.",
  },
  {
    slug: "elektricist-per-vila",
    locale: "sq-AL",
    title: "Elektricist per Vila",
    metaTitle: "Elektricist per Vila | Instalime, Ndriçim & Kontroll",
    metaDescription:
      "Elektricist per vila ne Tiranë, Durrës dhe zonat perreth per instalime, ndriçim, panele, smart home dhe mirëmbajtje sezonale.",
    h1: "Elektricist per Vila",
    hero:
      "Elektricist për vila që kanë më shume zona, më shumë ngarkesë dhe më shumë nevojë për planifikim të pastër e të kujdesshëm.",
    summary:
      "Shërbim për vila me ambiente të mëdha, oborre, ndriçim të jashtëm dhe panele që duhet ta mbajne ngarkesën pa probleme. Është veçanerisht i dobishem për zonat rezidenciale në Tiranë, Durrës dhe pronat sezonale përreth.",
    primaryKeyword: "elektricist per vila",
    secondaryKeywords: [
      "instalime vile",
      "ndriçim oborri",
      "panel elektrik vile",
      "smart home vile",
    ],
    serviceAreas: ["Tiranë", "Durrës", "Farkë", "Lundër", "Golem", "Mali i Robit"],
    whenToCall: [
      "Kur vila ka ambiente të shumta dhe instalimi duhet ndarë mire.",
      "Kur ndricimi i jashtëm ose i oborrit ka nevojë për rregullim.",
      "Kur keni pajisje të rënda dhe doni te shmangni mbingarkesën.",
      "Kur po modernizoni vilën me smart home, EV ose panele diellore.",
    ],
    problems: [
      "Shpërndarje e gabuar e ngarkesës në një pronë të madhe.",
      "Oborre dhe zona të jashtme që kërkojne ndriçim më të mire.",
      "Nevoje për zgjidhje të qarta për pike të shumta dhe ambiente të ndryshme.",
      "Integrim i sistemeve të reja me panelin ekzistues.",
    ],
    processSteps: [
      "Bëhet vleresim i zones dhe ngarkesës reale të vilës.",
      "Planifikohet instalimi ose përmiresimi sipas ambientit dhe përdorimit.",
      "Kryhet puna ne ambientet e brendshme dhe të jashtme.",
      "Testohet sistemi dhe jepen udhëzime për sezonet me përdorim më të lartë.",
    ],
    faqs: [
      {
        question: "A e mbuloni edhe ndricimin e jashtëm?",
        answer:
          "Po. Ndricimi i jashtëm dhe i oborrit është nje nga kerkesat më të zakonshme për vila.",
      },
      {
        question: "A punoni ne Durrës dhe zonat bregdetare?",
        answer:
          "Po, sidomos ku vilat dhe pronat sezionale kërkojne kontroll më të mire.",
      },
      {
        question: "A mund te shtohet smart home në vile?",
        answer:
          "Po. Smart home mund të shtohet në vila.",
      },
      {
        question: "A jepni ndihmë edhe për panele diellore ose EV?",
        answer:
          "Po. Vila është shumë e përshtatshme për panele diellore dhe karikues EV.",
      },
    ],
    relatedServiceSlugs: [
      "instalime-elektrike-tirane",
      "ndricim-led-tirane",
      "smart-home-tirane",
      "panele-diellore-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.solarGuide,
      albanianGuideSlugs.panelGuide,
    ],
    callToAction: "Kontaktoni tani per vilen tuaj.",
  },
  {
    slug: "elektricist-per-restorante-hotele",
    locale: "sq-AL",
    title: "Elektricist per Restorante dhe Hotele",
    metaTitle: "Elektricist për Restorante & Hotele | Tiranë, Durrës, Bregdet",
    metaDescription:
      "Elektricist për restorante dhe hotele ne Tiranë, Durrës dhe zonat turistike për ndriçim, kuzhine, panele dhe mirëmbajtje.",
    h1: "Elektricist për Restorante dhe Hotele",
    hero:
      "Elektricist per restorante dhe hotele ku një defekt i vogël mund të prishë shërbimin, rezervimet ose eksperiencën e klientit.",
    summary:
      "Shërbim për restorante, hotele dhe struktura mikpritjeje që kanë nevoje per stabilitet, siguri dhe reagim te shpejte. është veçanerisht i vlefshem ne Tiranë dhe Durrës, ku fluksi i klienteve rritet shpejt ne sezona te caktuara.",
    primaryKeyword: "elektricist per restorante dhe hotele",
    secondaryKeywords: [
      "elektricist per restorante",
      "elektricist per hotele",
      "mirëmbajtje elektrike hotel",
      "elektricist per lokale",
    ],
    serviceAreas: ["Tiranë", "Durrës", "Plazh", "Golem", "qendra turistike"],
    whenToCall: [
      "Kur kuzhina, ndricimi ose pajisjet e shërbimit nuk janë më të qëndrueshme.",
      "Kur hoteli ka nevoje për vizite para sezonit te larte.",
      "Kur doni te shmangni ndërprerjet që ndikojne direkt te klienti.",
      "Kur duhet mirëmbajtje periodike për një ambient me fluks te larte.",
    ],
    problems: [
      "Pajisje të shumta që ngarkojne linjat në kuzhine dhe salle.",
      "Ndriçim që duhet të punoje pa nderprerje ne orar sherbimi.",
      "Rrezik nga defekte që ndikojne rezervimet ose shërbimin e klientit.",
      "Nevoje për plan mirëmbajtjeje para sezonit me fluks të lartë.",
    ],
    processSteps: [
      "Përcaktohen zonat kritike: kuzhinë, sallë, dhoma dhe ambiente shërbimi.",
      "Bëhet kontrolli i rrjetit dhe identifikimi i pikave me rrezik.",
      "Kryhen riparimet ose përmiresimet që duhen para përdorimit të plotë.",
      "Vendoset një plan i rregullt kontrolli për të shmangur ndërprerje.",
    ],
    faqs: [
      {
        question: "A punoni para sezonit te larte?",
        answer:
          "Po. Kontrollet para sezonit te larte jane nje nga rastet me te zakonshme per hotele dhe restorante.",
      },
      {
        question: "A e mbuloni edhe Durresin dhe zonat turistike?",
        answer:
          "Po. Sherbimi mbulon edhe Durresin dhe zonat turistike ku bizneset varen nga sezoni.",
      },
      {
        question: "A mund te behet plan mirembajtjeje periodike?",
        answer:
          "Po, dhe kjo është forma me e mire per te mos i lene problemet te shperthejne ne kulm pune.",
      },
      {
        question: "A punoni edhe ne restorante te vogla urbane?",
        answer:
          "Po, sidomos kur duhet stabilitet dhe reagim i shpejte pa prishur sherbimin.",
      },
    ],
    relatedServiceSlugs: [
      "mirembajtje-elektrike-biznese",
      "panel-elektrik-tirane",
      "diagnostikim-elektrik-tirane",
      "elektricist-per-zyra-dyqane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.breakersFrequent,
      albanianGuideSlugs.installCost,
    ],
    callToAction: "Kontaktoni tani per restorantin ose hotelin tuaj.",
  },
  {
    slug: "elektricist-per-zyra-dyqane",
    locale: "sq-AL",
    title: "Elektricist për Zyra dhe Dyqane",
    metaTitle: "Elektricist për Zyra dhe Dyqane | Tiranë & Durrës",
    metaDescription:
      "Elektricist për zyra dhe dyqane ne Tiranë dhe Durrës per instalime, riparime, ndriçim, panel dhe mirëmbajtje te vazhdueshme.",
    h1: "Elektricist për Zyra dhe Dyqane",
    hero:
      "Shërbim elektrik për zyra dhe dyqane në Tiranë dhe Durrës që kanë nevojë për ndriçim të mirë, stabilitet në punë dhe riparime ose instalime që bëhen me sa më pak ndërprerje për aktivitetin e përditshëm.",
    summary:
      "Shërbim për zyra, dyqane dhe hapësira pune që kanë nevojë për instalime, riparime, ndriçim, panel elektrik dhe mirëmbajtje të vazhdueshme pa penguar punën e përditshme.",
    primaryKeyword: "elektricist per zyra dhe dyqane",
    secondaryKeywords: [
      "elektricist per zyra",
      "elektricist per dyqane",
      "riparime per zyra",
      "instalime per dyqane",
    ],
    serviceAreas: ["Tiranë", "Durrës", "Bllok", "qendra tregtare", "zona biznesi"],
    whenToCall: [
      "Kur zyra ka nevoje per me shume pika pune ose ndriçim me te mire.",
      "Kur dyqani ka problem me dritat, panelin ose pajisjet e ekspozimit.",
      "Kur duhet riparim pa ndalur aktivitetin e perditshëm me shume se duhet.",
      "Kur po hapni ambient te ri dhe keni nevoje per instalim te rregullt.",
    ],
    problems: [
      "Ndriçim i dobet ne zonat e punes ose te shitjes.",
      "Pika elektrike te pamjaftueshme per pajisje dhe ekrane.",
      "Panel ose siguresa qe nuk jane te organizuara mire.",
      "Rrezik qe nje defekt i vogel te ndikojë te klienti ose shitja.",
    ],
    processSteps: [
      "Merren ne konsiderate oraret, fluksi i klienteve dhe pajisjet kritike.",
      "Percaktohen pikat qe duhen shtuar, rregulluar ose zhvendosur.",
      "Kryhet puna me sa me pak nderprerje te aktivitetit.",
      "Behet testim dhe vendoset nje plan i thjeshte per mbikqyrje.",
    ],
    faqs: [
      {
        question: "A punoni pa e ndalur totalisht aktivitetin?",
        answer:
          "Po. Puna planifikohet me sa me pak nderprerje per aktivitetin e perditshëm.",
      },
      {
        question: "A mbuloni edhe dyqanet ne Durrës?",
        answer:
          "Po, sepse bizneset ne qender dhe ne zona turistike shpesh kerkojne shërbim te shpejte.",
      },
      {
        question: "A mund te shtoni pika te reja pune?",
        answer:
          "Po. Shtimi i pikave te reja te punes është nje nga kerkesat me te shpeshta per zyra dhe dyqane.",
      },
      {
        question: "A e beni edhe ndricimin e vitrinave ose ekspozimit?",
        answer:
          "Po, sidomos kur ndricimi ndikon direkt ne pamjen e biznesit.",
      },
    ],
    relatedServiceSlugs: [
      "mirembajtje-elektrike-biznese",
      "ndricim-led-tirane",
      "panel-elektrik-tirane",
      "riparime-elektrike-tirane",
    ],
    relatedGuideSlugs: [
      albanianGuideSlugs.installCost,
      albanianGuideSlugs.panelGuide,
      albanianGuideSlugs.flickeringLights,
    ],
    callToAction: "Kontaktoni tani per zyren ose dyqanin tuaj.",
  },
] as const satisfies readonly AlbanianServicePageEntry[];

export type AlbanianServiceSlug = (typeof albanianServicePages)[number]["slug"];

export const albanianServicePageSlugs = albanianServicePages.map(
  (page) => page.slug,
) as readonly AlbanianServiceSlug[];

export const albanianServicePageMap = albanianServicePages.reduce(
  (accumulator, page) => {
    accumulator[page.slug] = page;
    return accumulator;
  },
  {} as Record<AlbanianServiceSlug, AlbanianServicePageEntry>,
);

export function getAlbanianServicePage(
  slug: AlbanianServiceSlug | string,
): AlbanianServicePageEntry | undefined {
  return albanianServicePageMap[slug as AlbanianServiceSlug];
}
