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
    title: "Elektricist ne Tiranë",
    metaTitle: "Elektricist ne Tiranë | Instalime, Riparime & Emergjenca",
    metaDescription:
      "Elektricist ne Tiranë per instalime, riparime, diagnostikim, smart home, panele diellore dhe karikues EV me shërbim te shpejte ne kryeqytet.",
    h1: "Elektricist ne Tiranë",
    hero:
      "Shërbim elektrik ne Tiranë per apartamente, hyrje te reja, vila, zyra dhe biznese qe duan zgjidhje te qarta per defekte, riparime, instalime dhe ngarkese moderne.",
    summary:
      "Faqja kryesore per klientet ne Tiranë qe kerkojne elektricist per defekte te perseritura, instalime te reja, kontrolle sigurie dhe permiresime ne panel. është e ndryshme nga faqet me specifike sepse mbulon kerkesat me te zakonshme ne lagje urbane, apartamente ne rinovim, hyrje te reja dhe ambiente pune me ngarkese te perditshme.",
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
      "Kur keni nderprerje te perseritura ose siguresa qe bien pa arsye.",
      "Kur po rinovoni apartamentin dhe keni nevoje per plan te ri elektrik.",
      "Kur doni nje kontroll sigurie para shitjes, qiradhenies ose marrjes ne dorezim.",
      "Kur keni nevojë per nje vizite te shpejte ne Tiranë me vleresim te qarte.",
    ],
    problems: [
      "Priza dhe celesa te vjeteruar qe ngrohen ose japin shkendija.",
      "Instalime te paorganizuara ne apartamente te vjetra dhe te reja.",
      "Ngarkese e larte ne kuader elektrik nga pajisje te shumta.",
      "Nevoje per zgjidhje te sigurta per ndriçim, panele ose karikues EV.",
    ],
    processSteps: [
      "Beni nje kontakt te shpejte dhe tregoni simptomat ose projektin.",
      "Merrni nje vleresim paraprak per problem, kohe dhe drejtim pune.",
      "Kryhet inspektimi ne vend dhe sqarohen pjeset qe duhen rregulluar.",
      "Puna mbyllet me testim, sqarim te rezultateve dhe rekomandime pasuese.",
    ],
    faqs: [
      {
        question: "A mbuloni edhe zona jashte qendres se Tiranes?",
        answer:
          "Po. Sherbimi mbulon Tiranen e gjere, perfshire zona banimi, blloqe te reja dhe objekte tregtare qe kerkojne ndihme te shpejte.",
      },
      {
        question: "A mund te vij per nje problem te vogel si prize apo celes?",
        answer:
          "Po, sepse punet e vogla shpesh zbulojne probleme me te medha ne instalim dhe duhen pare me kujdes.",
      },
      {
        question: "A ofroni shërbim ne anglisht per klientet e huaj?",
        answer:
          "Po. Ofron komunikim te qarte edhe per kliente te huaj qe jetojne, punojne ose menaxhojne prone ne Tiranë.",
      },
      {
        question: "A punoni per banesa dhe biznese?",
        answer:
          "Po. Sherbimi mbulon si banesa, ashtu edhe zyra, dyqane dhe ambiente biznesi ne Tiranë.",
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
    callToAction: "Kontaktoni tani per vizite dhe vleresim ne Tiranë.",
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
      "Shërbim elektrik ne Durrës per apartamente bregdetare, vila, hotele te vogla dhe prona me qira qe duan reagim te shpejte para sezonit, para check-in ose gjate ngarkeses se veres.",
    summary:
      "Shërbim elektrik per Durresin, Golemin dhe zonat bregdetare ku instalimi ndikohet nga lageshtia, periudhat pa perdorim dhe ngarkesa e larte sezonale. Kjo faqe është me e forte per prona turistike dhe apartamente pushimi, jo thjesht si variant i faqes se Tiranes me nje emer tjeter qyteti.",
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
      "Kur problemi elektrik nuk pret, kjo faqe është per raste te qarta rreziku ne Tiranë: erë djegieje, panel qe nxehet, prize me shkendija, nderprerje te papritura dhe qarqe qe bien vazhdimisht.",
    summary:
      "Shërbim urgjent per rastet kur ka rrezik te menjehershem ose ambienti mbetet pa rryme ne menyre qe pengon perdorimin normal. Kjo faqe duhet te dalloje qarte nga riparimet e zakonshme sepse fokusohet te siguria e menjehershme, izolimi i problemit dhe reagimi ne te njejten dite kur rasti e kerkon.",
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
        question: "A është kjo faqe vetem per emergjenca nate?",
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
      "Instalime elektrike ne Tiranë per apartamente ne rinovim, vila, zyra dhe ndertime te reja qe kane nevoje per ndarje te qarte qarqesh, panel te organizuar dhe kapacitet per pajisjet e sotme.",
    summary:
      "Shërbim per ndertime te reja, apartamente ne rinovim dhe sisteme qe duhen modernizuar per kuzhine me ngarkese te larte, kondicionere, ndriçim te riorganizuar dhe pajisje moderne. Kjo faqe është me e ndryshme nga riparimet e zakonshme sepse fokusohet te planifikimi i punes nga fillimi, jo thjesht te rregullimi i nje pike me defekt.",
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
      "Diagnostikim elektrik ne Tiranë per defekte te fshehura, qark te shkurter, ngarkese te tepruar, ngrohje linjash dhe kontrolle sigurie.",
    h1: "Diagnostikim Elektrik ne Tiranë",
    hero:
      "Diagnostikim elektrik ne Tiranë per rastet kur problemi nuk duket qarte dhe duhet gjetur burimi para se te shkaktoje demtim me te madh.",
    summary:
      "Shërbim per rastet kur defekti vjen e iken, siguresat bien pa arsye te qarte ose linja nxeh pa u kuptuar pika problematike. Diagnostikimi i mire kursen kohe, para dhe riparime te kota sepse zbulon shkakun real.",
    primaryKeyword: "diagnostikim elektrik tirane",
    secondaryKeywords: [
      "kontroll elektrik",
      "defekte elektrike",
      "gjetje qark i shkurter",
      "testim paneli elektrik",
    ],
    serviceAreas: ["Tiranë", "Bllok", "Astir", "Don Bosko", "Komuna e Parisit"],
    whenToCall: [
      "Kur problemi perseritet pa u kuptuar arsyeja e sakte.",
      "Kur nje pjese e shtepise ka tension te paqendrueshem ose fikje te pjesshme.",
      "Kur linja ngrohet por nuk e dini cila pjese është problematike.",
      "Kur po pergatitni objektin per perdorim te dendur ose qira.",
    ],
    problems: [
      "Defekte te fshehura ne lidhje, qarqe ose panele.",
      "Rryme e dobet ose e paqendrueshme ne nje pjese te objektit.",
      "Siguresa qe bien here pas here pa pattern te qarte.",
      "Linjat qe nxehin ose pajisje qe nuk punojne si duhet.",
    ],
    processSteps: [
      "Merret informacioni mbi simptomat dhe historikun e defektit.",
      "Bëhen teste te panelit, qarqeve dhe pikave kryesore te konsumit.",
      "Izolohet burimi i problemit dhe behet korrigjimi i nevojshem.",
      "Pas testimit final, jepen rekomandime per ndjekje ose permirësim.",
    ],
    faqs: [
      {
        question: "A është diagnostikimi ndryshe nga riparimi?",
        answer:
          "Po. Diagnostikimi perdoret kur duhet gjetur shkaku i vertete para se te nisen zevendesimet ose riparimet.",
      },
      {
        question: "A e perdorni edhe per probleme qe vijne e ikin?",
        answer:
          "Po, sepse ato jane rastet qe zakonisht perfitojne me shume nga diagnostikimi i mire.",
      },
      {
        question: "A mund ta perdor kete shërbim para se te blej nje prone?",
        answer:
          "Po. është zgjedhje e mire edhe per blerje apartamenti ose kontroll para marrjes ne dorezim.",
      },
      {
        question: "A jepni raport te qarte te gjetjeve?",
        answer:
          "Po. Pas kontrollit jepen gjetje te qarta dhe rekomandime konkrete, jo hamendje.",
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
      "Karikues EV ne Tiranë per shtepi, garazhe, vila dhe biznese qe duan te kuptojne nese paneli e mban ngarkesen, ku vendoset me mire pajisja dhe si behet karikimi i sigurt cdo dite.",
    summary:
      "Shërbim qe mbulon jo vetem montimin, por edhe kontrollin e panelit, zgjedhjen e fuqise, rrugen e kabllimit dhe menyren me praktike te perdorimit. Kjo faqe është me e forte kur klienti ka pyetje reale per parkim, panel, linje te dedikuar dhe perdorim te perditshem, jo vetem per blerjen e nje pajisjeje.",
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
          "Po. Kjo është pjesa me e rendesishme e faqes sepse karikimi nuk duhet menduar pa vleresim ngarkese.",
      },
      {
        question: "A është faqja e pershtatshme per shtepi dhe biznes?",
        answer:
          "Po, dhe duhet te tregojne qarte dy skenarët me te zakonshem te perdorimit.",
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
        question: "A është kjo faqe e pershtatshme per kuzhina dhe banjo?",
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
      "Elektricist per apartamente ne Tiranë dhe Durrës per pronare, bleres dhe qiramarres qe duan kontroll te qarte para hyrjes ne prone, para qiradhenies ose gjate perdorimit te perditshem.",
    summary:
      "Shërbim per problemet e zakonshme te apartamenteve te vjetra dhe te reja, nga mbingarkesa ne kuzhine dhe mungesa e pikave te energjise deri te kontrollet para hyrjes ne prone. Kjo faqe duhet te dale me vete sepse apartamenti ka probleme shume me specifike se vila ose biznesi: panel i vogel, kuzhine e ngarkuar, prize te shumta ne pak hapesire dhe kontroll para qirase ose blerjes.",
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
        question: "A është kjo faqe per apartamente te vjetra dhe te reja?",
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
      "Elektricist per vila qe kane me shume zona, me shume ngarkese dhe me shume nevoje per planifikim te paster e te kujdesshem.",
    summary:
      "Shërbim per vila me ambiente te medha, oborre, ndriçim te jashtem dhe panele qe duhet ta mbajne ngarkesen pa probleme. është veçanerisht i dobishem per zonat rezidenciale ne Tiranë, Durrës dhe pronat sezonale perreth.",
    primaryKeyword: "elektricist per vila",
    secondaryKeywords: [
      "instalime vile",
      "ndriçim oborri",
      "panel elektrik vile",
      "smart home vile",
    ],
    serviceAreas: ["Tiranë", "Durrës", "Farkë", "Lundër", "Golem", "Mali i Robit"],
    whenToCall: [
      "Kur vila ka ambiente te shumta dhe instalimi duhet ndare mire.",
      "Kur ndricimi i jashtem ose i oborrit ka nevoje per rregullim.",
      "Kur keni pajisje te renda dhe doni te shmangni mbingarkesen.",
      "Kur po modernizoni vilen me smart home, EV ose panele diellore.",
    ],
    problems: [
      "Shperndarje e gabuar e ngarkeses ne nje prone te madhe.",
      "Oborre dhe zona te jashtme qe kerkojne ndriçim me te mire.",
      "Nevoje per zgjidhje te qarta per pike te shumta dhe ambiente te ndryshme.",
      "Integrim i sistemeve te reja me panelin ekzistues.",
    ],
    processSteps: [
      "Bëhet vleresim i zones dhe ngarkeses reale te vilës.",
      "Planifikohet instalimi ose permiresimi sipas ambientit dhe perdorimit.",
      "Kryhet puna ne ambientet e brendshme dhe te jashtme.",
      "Testohet sistemi dhe jepen udhezime per sezonet me perdorim me te larte.",
    ],
    faqs: [
      {
        question: "A e mbuloni edhe ndricimin e jashtem?",
        answer:
          "Po. Ndricimi i jashtem dhe i oborrit është nje nga kerkesat me te zakonshme per vila.",
      },
      {
        question: "A punoni ne Durrës dhe zonat bregdetare?",
        answer:
          "Po, sidomos ku vilat dhe pronat sezionale kerkojne kontroll me te mire.",
      },
      {
        question: "A mund te shtohet smart home ne vile?",
        answer:
          "Po. Smart home mund te shtohet ne vile kur kerkohet me shume komoditet dhe kontroll.",
      },
      {
        question: "A jepni ndihme edhe per panele diellore ose EV?",
        answer:
          "Po. Vila është shpesh prone e pershtatshme edhe per panele diellore ose karikues EV.",
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
    metaTitle: "Elektricist per Restorante & Hotele | Tiranë, Durrës, Bregdet",
    metaDescription:
      "Elektricist per restorante dhe hotele ne Tiranë, Durrës dhe zonat turistike per ndriçim, kuzhine, panele dhe mirëmbajtje.",
    h1: "Elektricist per Restorante dhe Hotele",
    hero:
      "Elektricist per restorante dhe hotele ku nje defekt i vogel mund te prishë sherbimin, rezervimet ose eksperiencen e klientit.",
    summary:
      "Shërbim per restorante, hotele dhe struktura mikpritjeje qe kane nevoje per stabilitet, siguri dhe reagim te shpejte. është veçanerisht i vlefshem ne Tiranë dhe Durrës, ku fluksi i klienteve rritet shpejt ne sezona te caktuara.",
    primaryKeyword: "elektricist per restorante dhe hotele",
    secondaryKeywords: [
      "elektricist per restorante",
      "elektricist per hotele",
      "mirëmbajtje elektrike hotel",
      "elektricist per lokale",
    ],
    serviceAreas: ["Tiranë", "Durrës", "Plazh", "Golem", "qendra turistike"],
    whenToCall: [
      "Kur kuzhina, ndricimi ose pajisjet e sherbimit nuk jane me te qendrueshme.",
      "Kur hoteli ka nevoje per vizite para sezonit te larte.",
      "Kur doni te shmangni nderprerjet qe ndikojne direkt te klienti.",
      "Kur duhet mirëmbajtje periodike per nje ambient me fluks te larte.",
    ],
    problems: [
      "Pajisje te shumta qe ngarkojne linjat ne kuzhine dhe salle.",
      "Ndriçim qe duhet te punoje pa nderprerje ne orar sherbimi.",
      "Rrezik nga defekte qe ndikojne rezervimet ose sherbimin e klientit.",
      "Nevoje per plan mirembajtjeje para sezonit te larte.",
    ],
    processSteps: [
      "Percaktohen zonat kritike: kuzhine, salle, dhoma dhe ambiente sherbimi.",
      "Bëhet kontrolli i rrjetit dhe identifikimi i pikave me rrezik.",
      "Kryhen riparimet ose permiresimet qe duhen para perdorimit te plote.",
      "Vendoset nje plan i rregullt kontrolli per te shmangur nderprerje.",
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
    title: "Elektricist per Zyra dhe Dyqane",
    metaTitle: "Elektricist per Zyra dhe Dyqane | Tiranë & Durrës",
    metaDescription:
      "Elektricist per zyra dhe dyqane ne Tiranë dhe Durrës per instalime, riparime, ndriçim, panel dhe mirëmbajtje te vazhdueshme.",
    h1: "Elektricist per Zyra dhe Dyqane",
    hero:
      "Shërbim per biznese te vogla dhe te mesme qe duan ndriçim, stabilitet dhe riparime pa e ndalur punen e perditshme.",
    summary:
      "Shërbim per hapësira ku rryma, ndricimi dhe pikat e punes ndikojne drejtperdrejt ne operim dhe shitje. është i forte per Tiranë dhe Durrës sepse aty kerkohet vazhdimesi dhe jo thjesht rregullim teknik.",
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
