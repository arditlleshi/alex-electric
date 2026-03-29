export type ServiceLocale = "sq-AL";

export interface ServiceProofBlock {
  title: string;
  city: string;
  propertyType: string;
  problem: string;
  fix: string;
  turnaround: string;
  outcome: string;
  evidenceHint: string;
}

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
  proof: ServiceProofBlock;
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
    title: "Elektricist ne Tirane",
    metaTitle: "Elektricist ne Tirane | Instalime, Riparime & Emergjenca",
    metaDescription:
      "Elektricist ne Tirane per instalime, riparime, diagnostikim, smart home, panele diellore dhe karikues EV me sherbim te shpejte ne kryeqytet.",
    h1: "Elektricist ne Tirane",
    hero:
      "Sherbim elektrik profesional ne Tirane per banesa, vila, zyra dhe biznese qe duan pune te sigurt, komunikim te qarte dhe reagim te shpejte.",
    summary:
      "Faqja kryesore per klientet ne Tirane qe kerkojne elektricist per urgjenca, riparime, instalime dhe kontrolle sigurie. Ajo flet qarte per lagjet, objektet rezidenciale dhe ambientet e biznesit qe kane nevoje per reagim te shpejte dhe pune te sigurt.",
    primaryKeyword: "elektricist ne tirane",
    secondaryKeywords: [
      "elektricist tirane",
      "sherbime elektrike tirane",
      "punime elektrike tirane",
      "elektricist 24 ore tirane",
    ],
    serviceAreas: [
      "Tirane qender",
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
      "Kur keni nevoje per nje vizite te shpejte ne Tirane me vleresim te qarte.",
    ],
    problems: [
      "Priza dhe celesa te vjeteruar qe ngrohen ose japin shkendija.",
      "Instalime te paorganizuara ne apartamente te vjetra dhe te reja.",
      "Ngarkese e larte ne kuader elektrik nga pajisje te shumta.",
      "Nevoje per zgjidhje te sigurta per ndricim, panele ose karikues EV.",
    ],
    processSteps: [
      "Beni nje kontakt te shpejte dhe tregoni simptomat ose projektin.",
      "Merrni nje vleresim paraprak per problem, kohe dhe drejtim pune.",
      "Kryhet inspektimi ne vend dhe sqarohen pjeset qe duhen rregulluar.",
      "Puna mbyllet me testim, sqarim te rezultateve dhe rekomandime pasuese.",
    ],
    proof: {
      title: "Rast tipik ne Tirane",
      city: "Tirane",
      propertyType: "apartament urban",
      problem:
        "Klienti kishte drita qe pulsonin dhe siguresa qe binin sa here ndiznin pajisje te ndryshme.",
      fix:
        "U kontrollua paneli, u ndane qarqet kryesore dhe u zgjidh nje lidhje e dobet ne linjen e ndricimit.",
      turnaround: "Vizite e nje dite dhe testim final ne te njejten kohe.",
      outcome:
        "Instalimi u be me i sigurt, me me pak mbingarkese dhe me komunikim te qarte per perdorim te perditshem.",
      evidenceHint:
        "Shto foto te panelit, para/pas dhe nje shenim te shkurtër nga klienti.",
    },
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
        question: "A ofroni sherbim ne anglisht per klientet e huaj?",
        answer:
          "Po. Ofron komunikim te qarte edhe per kliente te huaj qe jetojne, punojne ose menaxhojne prone ne Tirane.",
      },
      {
        question: "A punoni per banesa dhe biznese?",
        answer:
          "Po. Sherbimi mbulon si banesa, ashtu edhe zyra, dyqane dhe ambiente biznesi ne Tirane.",
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
    callToAction: "Kontaktoni tani per vizite dhe vleresim ne Tirane.",
  },
  {
    slug: "elektricist-durres",
    locale: "sq-AL",
    title: "Elektricist ne Durres",
    metaTitle: "Elektricist ne Durres | Banesa, Vila, Hotele & Emergjenca",
    metaDescription:
      "Elektricist ne Durres per vila, apartamente, hotele, biznese bregdetare, riparime urgjente, instalime dhe mirembajtje elektrike.",
    h1: "Elektricist ne Durres",
    hero:
      "Sherbim elektrik i fokusuar ne Durres per prona bregdetare, apartamente, vila dhe biznese qe kerkojne pune te qete, te rregullt dhe te sigurt.",
    summary:
      "Sherbim elektrik per Durresin, Golemin dhe zonat bregdetare ku ka vila, apartamente sezonale, hotele dhe biznese me fluks. Fokusi eshte te kontrolli praktik, reagimi i shpejte dhe puna qe e ben pronen gati per perdorim ose sezon.",
    primaryKeyword: "elektricist durres",
    secondaryKeywords: [
      "sherbime elektrike durres",
      "riparime elektrike durres",
      "instalime elektrike durres",
      "elektricist urgjent durres",
    ],
    serviceAreas: [
      "Durres qender",
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
      "Mbyllet puna me testim dhe udhezime per mirembajtje sezonale.",
    ],
    proof: {
      title: "Rast tipik ne Durres",
      city: "Durres",
      propertyType: "vile bregdetare",
      problem:
        "Klienti raportonte rryme te paqendrueshme dhe ndricim te dobet ne prag te sezonit.",
      fix:
        "U kontrolluan qarqet kryesore, u shtrenguan lidhjet dhe u veçuan ngarkesat kryesore te shtepise.",
      turnaround: "Zgjidhje brenda nje vizite dhe testim ne fund te punes.",
      outcome:
        "Prona u be gati per perdorim sezonal me me pak risk dhe me funksionim me te rregullt.",
      evidenceHint:
        "Shto foto nga ambienti bregdetar dhe nje shenim te shkurter per sezonin.",
    },
    faqs: [
      {
        question: "A punoni edhe ne zona turistike si Golem?",
        answer:
          "Po. Sherbimi mbulon Durresin, Golemin dhe zonat bregdetare perreth sipas kerkeses.",
      },
      {
        question: "A eshte i pershtatshem sherbimi per vila dhe hotele?",
        answer:
          "Po. Sherbimi eshte i pershtatshem per vila, apartamente me qira, hotele te vogla dhe prona turistike.",
      },
      {
        question: "A vini per pune te vogla dhe kontrolla?",
        answer:
          "Po, sepse ne Durres shpesh problemi fillon si nje defekt i vogel dhe shndërrohet ne nderprerje me te madhe.",
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
    callToAction: "Kontaktoni tani per sherbim elektrik ne Durres dhe zonat perreth.",
  },
  {
    slug: "elektricist-urgjent-tirane",
    locale: "sq-AL",
    title: "Elektricist Urgjent ne Tirane",
    metaTitle: "Elektricist Urgjent ne Tirane | 24 Ore, Siguresa dhe Defekte",
    metaDescription:
      "Elektricist urgjent ne Tirane per defekte te menjehershme, siguresa qe bien, era djegieje, rryme te dobet dhe riparime 24 ore.",
    h1: "Elektricist Urgjent ne Tirane",
    hero:
      "Kur problemi elektrik nuk pret, ofrohet reagim i shpejte ne Tirane per erë djegieje, siguresa qe bien, shkendija dhe nderprerje te rrezikshme.",
    summary:
      "Sherbim urgjent per rastet kur ka rrezik te menjehershem ose ambienti mbetet pa rryme. Fokusi eshte te sinjalet e rrezikut, koha e reagimit dhe zgjidhja e shpejte qe e kthen instalimin ne gjendje te sigurt.",
    primaryKeyword: "elektricist urgjent tirane",
    secondaryKeywords: [
      "elektricist 24 ore tirane",
      "riparime urgjente elektrike",
      "siguresa bien",
      "qark i shkurter",
    ],
    serviceAreas: ["Tirane", "Astir", "Don Bosko", "Komuna e Parisit", "Ali Demi"],
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
    proof: {
      title: "Rast urgjent ne Tirane",
      city: "Tirane",
      propertyType: "apartament me qira",
      problem:
        "Qiramarresi raportoi erë djegieje dhe fikje te pjesshme te ndriçimit ne nje dhome.",
      fix:
        "U izolua linja problematike, u gjet lidhja e mbinxehur dhe u zevendesua pjese e demtuar.",
      turnaround: "Nderhyrje e shpejte ne te njejten dite.",
      outcome:
        "Rreziku u ul menjehere dhe ambienti u kthye ne gjendje te sigurt per perdorim.",
      evidenceHint:
        "Shto foto te panelit dhe nje rresht te qarte per kohen e reagimit.",
    },
    faqs: [
      {
        question: "Sa shpejt duhet te kontaktoj nese ndjej erë djegieje?",
        answer:
          "Menjehere. Era e djegiejes, shkendijat ose ngrohja e pazakonte jane shenja qe duhen trajtuar pa vonese.",
      },
      {
        question: "A eshte kjo faqe vetem per emergjenca nate?",
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
    callToAction: "Telefononi tani per nderhyrje urgjente ne Tirane.",
  },
  {
    slug: "riparime-elektrike-tirane",
    locale: "sq-AL",
    title: "Riparime Elektrike ne Tirane",
    metaTitle: "Riparime Elektrike ne Tirane | Priza, Celesa, Linja & Defekte",
    metaDescription:
      "Riparime elektrike ne Tirane per priza, celesa, linja, ndricim, qark te shkurter, siguresa dhe probleme te perditshme elektrike.",
    h1: "Riparime Elektrike ne Tirane",
    hero:
      "Riparime elektrike ne Tirane per problemet e perditshme qe prishin rehatine dhe sigurinë ne apartamente, vila dhe biznese.",
    summary:
      "Sherbim per riparimet qe nisin me nje prize, celes, drite ose linje problematike, por mund te kthehen shpejt ne defekt me te madh. Qellimi eshte gjetja e shkakut dhe rikthimi i funksionimit normal me zgjidhje te qarta.",
    primaryKeyword: "riparime elektrike tirane",
    secondaryKeywords: [
      "riparim prize",
      "riparim celesi",
      "riparim linje elektrike",
      "defekte elektrike tirane",
    ],
    serviceAreas: ["Tirane qender", "Astir", "Don Bosko", "Myslym Shyri", "Ali Demi"],
    whenToCall: [
      "Kur nje prize nuk punon ose ngroh me shume se normalja.",
      "Kur nje celes ndizet me veshtiresi ose krijon shkendija.",
      "Kur ndricimi fiket vetvetiu ne nje pjese te shtepise.",
      "Kur ka shenja qe nje linje ose pajisje nuk po mban ngarkesen.",
    ],
    problems: [
      "Priza te djegura ose te vjetra qe duhen zevendesuar.",
      "Celesa dhe ndricim qe nuk japin kontakt te qendrueshem.",
      "Kabllim i keq nga riparime te meparshme jo profesionale.",
      "Defekte qe kthehen shpesh sepse shkaku fillestar nuk eshte gjetur.",
    ],
    processSteps: [
      "Pershkruani simptomen dhe vendosni nese problemi eshte i perseritur.",
      "Bëhet inspektimi i pikes, linjes dhe elementeve qe lidhen me te.",
      "Riparohet ose zevendesohet pjesa qe eshte burimi i defektit.",
      "Testohet funksionimi dhe jepen keshilla per perdorim te sigurt.",
    ],
    proof: {
      title: "Rast riparimi ne Tirane",
      city: "Tirane",
      propertyType: "apartament familjar",
      problem:
        "Një prize në kuzhine ndizte ngrohje te pazakonte dhe celesi afer saj kishte kontakt te dobet.",
      fix:
        "U zevendesua prize, u rregullua lidhja dhe u kontrollua edhe linja e ngarkeses se kuzhines.",
      turnaround: "Riparim i nje vizite me testim te menjehershem.",
      outcome:
        "Pika problematike u stabilizua dhe klienti mori udhezime te qarta per perdorim.",
      evidenceHint:
        "Shto foto para/pas te pikes se riparuar dhe te materialeve te perdorura.",
    },
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
    callToAction: "Kontaktoni tani per riparim elektrik ne Tirane.",
  },
  {
    slug: "instalime-elektrike-tirane",
    locale: "sq-AL",
    title: "Instalime Elektrike ne Tirane",
    metaTitle: "Instalime Elektrike ne Tirane | Apartamente, Vila & Ndertim",
    metaDescription:
      "Instalime elektrike ne Tirane per banesa te reja, rikonstruksione, zgjerim linjash, shtim qarqesh, ndricim dhe organizim paneli.",
    h1: "Instalime Elektrike ne Tirane",
    hero:
      "Instalime elektrike ne Tirane per projekte qe nisin nga zero ose kalojne ne rinovim dhe kane nevoje per zbatim te paster e te sigurt.",
    summary:
      "Sherbim per ndertime te reja, apartamente ne rinovim dhe sisteme qe duhen modernizuar. Fokusi eshte te projektimi i qarqeve, organizimi i panelit dhe instalimi qe e mban ngarkesen e sotme pa kompromis ne siguri.",
    primaryKeyword: "instalime elektrike tirane",
    secondaryKeywords: [
      "instalim elektrik apartament",
      "instalim elektrik vile",
      "punime elektrike",
      "kabllim elektrik",
    ],
    serviceAreas: ["Tirane", "Laprake", "Astir", "Selite", "Farke", "Kamez"],
    whenToCall: [
      "Kur po rinovoni apartamentin ose po beni ndertim te ri.",
      "Kur doni te shtoni priza, celesa, ndricim ose qarqe te reja.",
      "Kur sistemi i vjeter nuk i mban me pajisjet moderne.",
      "Kur doni projekt me me shume rend dhe akses per mirembajtje te ardhshme.",
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
      "Testohet sistemi dhe jepen shenime per mirembajtje e zgjerime te ardhshme.",
    ],
    proof: {
      title: "Rast instalimi ne Tirane",
      city: "Tirane",
      propertyType: "apartament i rinovuar",
      problem:
        "Pronari po riorganizonte ambientin dhe kishte nevoje per qarqe me te pastra dhe me te sigurta.",
      fix:
        "U projektua ndarje e re, u vendosen pika te reja dhe u riorganizua paneli per me shume qartesi.",
      turnaround: "Zbatim brenda planit te rinovimit.",
      outcome:
        "Instalimi u be me i rregullt, me me shume kapacitet dhe me mire per perdorim afatgjate.",
      evidenceHint:
        "Shto skice, foto instalimi dhe foto paneli te renditur mire.",
    },
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
          "Po, sidomos kur kerkohet ndricim me shume zona, linja te dedikuara dhe zgjidhje me te pastra.",
      },
      {
        question: "A planifikoni edhe panelin elektrik bashke me instalimin?",
        answer:
          "Po, sepse instalimi i mire nuk ka kuptim pa panel te organizuar dhe te lehte per mirembajtje.",
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
    callToAction: "Kontaktoni tani per instalim elektrik ne Tirane.",
  },
  {
    slug: "diagnostikim-elektrik-tirane",
    locale: "sq-AL",
    title: "Diagnostikim Elektrik ne Tirane",
    metaTitle: "Diagnostikim Elektrik ne Tirane | Gjetje Defektesh & Testim",
    metaDescription:
      "Diagnostikim elektrik ne Tirane per defekte te fshehura, qark te shkurter, ngarkese te tepruar, ngrohje linjash dhe kontrolle sigurie.",
    h1: "Diagnostikim Elektrik ne Tirane",
    hero:
      "Diagnostikim elektrik ne Tirane per rastet kur problemi nuk duket qarte dhe duhet gjetur burimi para se te shkaktoje demtim me te madh.",
    summary:
      "Sherbim per rastet kur defekti vjen e iken, siguresat bien pa arsye te qarte ose linja nxeh pa u kuptuar pika problematike. Diagnostikimi i mire kursen kohe, para dhe riparime te kota sepse zbulon shkakun real.",
    primaryKeyword: "diagnostikim elektrik tirane",
    secondaryKeywords: [
      "kontroll elektrik",
      "defekte elektrike",
      "gjetje qark i shkurter",
      "testim paneli elektrik",
    ],
    serviceAreas: ["Tirane", "Bllok", "Astir", "Don Bosko", "Komuna e Parisit"],
    whenToCall: [
      "Kur problemi perseritet pa u kuptuar arsyeja e sakte.",
      "Kur nje pjese e shtepise ka tension te paqendrueshem ose fikje te pjesshme.",
      "Kur linja ngrohet por nuk e dini cila pjese eshte problematike.",
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
    proof: {
      title: "Rast diagnostikimi ne Tirane",
      city: "Tirane",
      propertyType: "zyre e vogel",
      problem:
        "Klienti kishte nderprerje te rastit ne nje zone te caktuar dhe nuk dinte cila linje shkaktonte problemin.",
      fix:
        "U testuan qarqet, u identifikua nje lidhje e dobët dhe u rregullua zona problematike.",
      turnaround: "Diagnoze dhe zgjidhje brenda nje vizite.",
      outcome:
        "Defekti u lokalizua qarte dhe u shmang riparimi i panevojshem i gjithe sistemit.",
      evidenceHint:
        "Shto shenim testimi, foto paneli dhe nese ka, matje ose termografi.",
    },
    faqs: [
      {
        question: "A eshte diagnostikimi ndryshe nga riparimi?",
        answer:
          "Po. Diagnostikimi perdoret kur duhet gjetur shkaku i vertete para se te nisen zevendesimet ose riparimet.",
      },
      {
        question: "A e perdorni edhe per probleme qe vijne e ikin?",
        answer:
          "Po, sepse ato jane rastet qe zakonisht perfitojne me shume nga diagnostikimi i mire.",
      },
      {
        question: "A mund ta perdor kete sherbim para se te blej nje prone?",
        answer:
          "Po. Eshte zgjedhje e mire edhe per blerje apartamenti ose kontroll para marrjes ne dorezim.",
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
    callToAction: "Kontaktoni tani per diagnostikim elektrik ne Tirane.",
  },
  {
    slug: "panele-diellore-tirane",
    locale: "sq-AL",
    title: "Panele Diellore ne Tirane",
    metaTitle: "Panele Diellore ne Tirane | Projektim dhe Mirembajtje",
    metaDescription:
      "Panele diellore ne Tirane per shtepi, vila dhe biznese me projektim, instalim, lidhje te sigurte dhe mirembajtje afatgjate.",
    h1: "Panele Diellore ne Tirane",
    hero:
      "Panele diellore ne Tirane per shtepi, vila dhe biznese qe kerkojne kursim, planifikim te sakte dhe lidhje te sigurt me instalimin ekzistues.",
    summary:
      "Sherbim qe mbulon vleresimin, dimensionimin dhe integrimin e sistemit sipas konsumit real, kulmit dhe objektit. Eshte veçanerisht i pershtatshem per vila, godina te vogla dhe biznese qe duan sistem te planifikuar me kujdes.",
    primaryKeyword: "panele diellore tirane",
    secondaryKeywords: [
      "instalim panele diellore",
      "sistem fotovoltaik",
      "energji diellore",
      "panele fotovoltaike tirane",
    ],
    serviceAreas: ["Tirane", "Farke", "Lunder", "Surrel", "Kamez", "Vaqarr"],
    whenToCall: [
      "Kur doni te ulni faturat dhe keni konsum te qendrueshem gjate vitit.",
      "Kur po ndertoni ose rinovoni dhe mund te planifikoni sistemin qe ne fillim.",
      "Kur keni vile, biznes ose tarrace qe mund te mbaje instalim te pershtatshem.",
      "Kur doni kontroll nese objekti i juaj e mban vertet nje sistem fotovoltaik.",
    ],
    problems: [
      "Instalime diellore te paqarta qe nuk jane menduar sipas konsumit.",
      "Lidhje jo e mire me panelin elektrik ekzistues.",
      "Mungese e planit per mirembajtje dhe monitorim afatgjate.",
      "Pritshmeri te gabuara per kapacitetin, orientimin ose hijezimin.",
    ],
    processSteps: [
      "Bëhet vleresim i konsumit, kulmit, orientimit dhe hijezimit.",
      "Percaktohet dimensionimi dhe menyra me e sigurt e lidhjes.",
      "Kryhet instalimi, integrimi me panelin dhe testimi i sistemit.",
      "Jepen udhezime per monitorim, pastrim dhe kontroll periodik.",
    ],
    proof: {
      title: "Rast instalimi diellor ne Tirane",
      city: "Tirane",
      propertyType: "vile familjare",
      problem:
        "Pronari donte ulje te shpenzimeve dhe nje sistem qe te punonte paster me instalimin ekzistues.",
      fix:
        "U be dimensionim sipas konsumit, u rregullua lidhja me panelin dhe u planifikua mirembajtja.",
      turnaround: "Projektim dhe instalim sipas fazave te punes.",
      outcome:
        "Sistemi u integrua me rregull dhe klienti mori qartesi per performancen dhe kujdesin.",
      evidenceHint:
        "Shto foto te kulmit, inverterit dhe panelit elektrik te lidhur.",
    },
    faqs: [
      {
        question: "A e beni edhe vleresimin para instalimit?",
        answer:
          "Po. Vleresimi paraprak eshte pjese e sherbimit dhe vendos bazen per nje sistem qe funksionon mire.",
      },
      {
        question: "A eshte kjo faqe per vila dhe biznese?",
        answer:
          "Po. Sherbimi eshte i pershtatshem si per vila, ashtu edhe per biznese me konsum te ndryshem.",
      },
      {
        question: "A e lidhni sistemin me panelin ekzistues?",
        answer:
          "Po. Integrimi i sigurt me panelin ekzistues eshte pjese kyçe e projektit.",
      },
      {
        question: "A ofroni mirembajtje pas instalimit?",
        answer:
          "Po, sepse sistemi fiton vlere kur klienti kupton si ta mbaje ne forme.",
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
    callToAction: "Kontaktoni tani per projekt panele diellore ne Tirane.",
  },
  {
    slug: "karikues-ev-tirane",
    locale: "sq-AL",
    title: "Karikues EV ne Tirane",
    metaTitle: "Karikues EV ne Tirane | Instalime Home & Business",
    metaDescription:
      "Karikues EV ne Tirane per instalime ne shtepi dhe biznese me kontroll ngarkese, mbrojtje, lidhje te sigurt dhe planifikim te qarte.",
    h1: "Karikues EV ne Tirane",
    hero:
      "Karikues EV ne Tirane per shtepi, garazhe dhe biznese qe po kalojne ne levizje elektrike dhe duan instalim te sigurt.",
    summary:
      "Sherbim qe mbulon jo vetem montimin, por edhe kontrollin e panelit, zgjedhjen e fuqise dhe vendosjen me praktike te pajisjes. Eshte i pershtatshem per banesa, parkingje private dhe biznese me fluks te qendrueshem.",
    primaryKeyword: "karikues ev tirane",
    secondaryKeywords: [
      "instalim karikues ev",
      "karikues makine elektrike",
      "wallbox tirane",
      "stacion karikimi ne shtepi",
    ],
    serviceAreas: ["Tirane", "Laprake", "Astir", "Farke", "Lunder", "Kamez"],
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
    proof: {
      title: "Rast karikuesi EV ne Tirane",
      city: "Tirane",
      propertyType: "garazh privat",
      problem:
        "Pronari kishte nevoje per karikim te perditeshem por nuk ishte i sigurt nese paneli e mbante ngarkesen.",
      fix:
        "U vleresua instalimi, u nda nje qark i dedikuar dhe u montua karikuesi me mbrojtje te pershtatshme.",
      turnaround: "Planifikim dhe instalim ne nje proces te vetem.",
      outcome:
        "Karikimi u be me i thjeshte, me i sigurt dhe me i qarte per perdorim te perditshem.",
      evidenceHint:
        "Shto foto te karikuesit, panelit dhe vendit te instalimit.",
    },
    faqs: [
      {
        question: "A e kontrolloni panelin para instalimit?",
        answer:
          "Po. Kjo eshte pjesa me e rendesishme e faqes sepse karikimi nuk duhet menduar pa vleresim ngarkese.",
      },
      {
        question: "A eshte faqja e pershtatshme per shtepi dhe biznes?",
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
          "Po, sepse zgjedhja e fuqise eshte pjese e vleresimit dhe nuk duhet lene rastesisht.",
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
    callToAction: "Kontaktoni tani per instalim karikuesi EV ne Tirane.",
  },
  {
    slug: "panel-elektrik-tirane",
    locale: "sq-AL",
    title: "Panel Elektrik ne Tirane",
    metaTitle: "Panel Elektrik ne Tirane | Kuader, Siguresa & Permiresim",
    metaDescription:
      "Panel elektrik ne Tirane per zevendesim kuadri, riorganizim siguresash, mbrojtje me te mire dhe permiresim te instalimit ekzistues.",
    h1: "Panel Elektrik ne Tirane",
    hero:
      "Panel elektrik ne Tirane per raste kur kuadri, siguresat dhe ndarja e qarqeve kerkojne me shume rregull, qartesi dhe mbrojtje.",
    summary:
      "Sherbim per instalime qe po mbingarkohen ose panele qe jane bere te veshtira per t'u kuptuar dhe mirembajtur. Fokusi eshte te qartesia, ndarja e qarqeve dhe modernizimi i siguresave sipas ngarkeses reale.",
    primaryKeyword: "panel elektrik tirane",
    secondaryKeywords: [
      "kuader elektrik",
      "siguresa automatike",
      "paneli elektrik",
      "permiresim paneli",
    ],
    serviceAreas: ["Tirane", "Astir", "Don Bosko", "Bllok", "Komuna e Parisit"],
    whenToCall: [
      "Kur paneli eshte i vjeter dhe veshtire per t'u identifikuar.",
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
    proof: {
      title: "Rast paneli ne Tirane",
      city: "Tirane",
      propertyType: "apartament i rinovuar",
      problem:
        "Paneli ishte i mbushur dhe nuk lejonte ndarje te qarte te qarqeve te reja.",
      fix:
        "U riorganizua kuadri, u etiketuan qarqet dhe u vendos mbrojtje me e qarte per zonat kryesore.",
      turnaround: "Riorganizim dhe testim ne te njejten dite.",
      outcome:
        "Paneli u be me i lehte per perdorim dhe me i mire per mirembajtje te ardhshme.",
      evidenceHint:
        "Shto foto te panelit te ri, etiketimit dhe testit perfundimtar.",
    },
    faqs: [
      {
        question: "A eshte paneli elektrik i njejte me kuadrin elektrik?",
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
          "Po, sepse qartesia e panelit eshte pjese e vleres qe jep sherbimi.",
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
    callToAction: "Kontaktoni tani per panel elektrik ne Tirane.",
  },
  {
    slug: "ndricim-led-tirane",
    locale: "sq-AL",
    title: "Ndricim LED ne Tirane",
    metaTitle: "Ndricim LED ne Tirane | Instalime, Spotesh & Dekorativ",
    metaDescription:
      "Ndricim LED ne Tirane per banesa, zyra, shkalle, oborre dhe biznese me instalim spotesh, ndricim dekorativ dhe zgjidhje praktike.",
    h1: "Ndricim LED ne Tirane",
    hero:
      "Ndricim LED ne Tirane per apartamente, biznese dhe hapesira te perbashketa qe kerkojne zgjidhje moderne, efikase dhe estetike.",
    summary:
      "Sherbim qe kombinon performancen me pamjen, sepse ndricimi zgjidhet si per funksion, ashtu edhe per atmosfere. Mbulon spote, rripa LED, ndricim te perhershem dhe zgjidhje dekorative per ambiente te ndryshme.",
    primaryKeyword: "ndricim led tirane",
    secondaryKeywords: [
      "instalim spotesh",
      "ndricim dekorativ",
      "ndricim shkallesh",
      "ndricim oborri",
    ],
    serviceAreas: ["Tirane", "Bllok", "Komuna e Parisit", "Astir", "Don Bosko"],
    whenToCall: [
      "Kur doni ndricim me te mire dhe me te kursyer ne energji.",
      "Kur po rregulloni ambientin dhe doni pamje me moderne.",
      "Kur shkallet, korridoret ose oborri kerkojne ndricim me te qarte.",
      "Kur biznesi ka nevoje per ndricim qe duket mire dhe punon cdo dite.",
    ],
    problems: [
      "Ndricim i dobet qe nuk i sherben me funksionit te ambientit.",
      "Spotet ose LED-et e vendosura pa plan dhe pa qartesi estetike.",
      "Harxhim i panevojshem i energjise nga zgjidhje te vjetra.",
      "Hapesira qe kerkojne ndricim te perbashket ose me sensore.",
    ],
    processSteps: [
      "Percaktohet qellimi: funksional, dekorativ ose kombinim i te dyve.",
      "Zgjidhen pikat, lloji i ndricimit dhe menyra e komandimit.",
      "Kryhet instalimi dhe organizimi i kabllove sipas planit.",
      "Testohet ndricimi ne dite dhe nate per te pare efektin real.",
    ],
    proof: {
      title: "Rast ndricimi ne Tirane",
      city: "Tirane",
      propertyType: "korridor banese",
      problem:
        "Korridori ishte i erret dhe ndricimi i vjeter nuk e mbulonte mire zonen.",
      fix:
        "U shtua ndricim LED me shperndarje me te mire dhe u rregullua pika e komandimit.",
      turnaround: "Instalim i shpejte dhe testim ne vend.",
      outcome:
        "Ambienti u be me i qarte, me praktik dhe me efikas ne perdorim te perditshem.",
      evidenceHint:
        "Shto foto nate dhe dite per te treguar ndryshimin real.",
    },
    faqs: [
      {
        question: "A instaloni spotesh dhe rripa LED?",
        answer:
          "Po. Instalimi i spotesh dhe rripave LED eshte nje nga kerkesat me te zakonshme ne kete sherbim.",
      },
      {
        question: "A e beni ndricimin edhe per shkalle ose oborr?",
        answer:
          "Po, sidomos sepse keto zona kerkojne siguri dhe dukshmeri me te mire.",
      },
      {
        question: "A mund te kombinohet ndricim funksional dhe dekorativ?",
        answer:
          "Po. Zgjidhjet mund te jene njekohesisht praktike, kursimtare dhe estetike.",
      },
      {
        question: "A eshte i pershtatshem per zyra dhe dyqane?",
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
    callToAction: "Kontaktoni tani per ndricim LED ne Tirane.",
  },
  {
    slug: "priza-celesa-tirane",
    locale: "sq-AL",
    title: "Priza dhe Celesa ne Tirane",
    metaTitle: "Priza dhe Celesa ne Tirane | Nderrim, Shtim & Riparim",
    metaDescription:
      "Priza dhe celesa ne Tirane per nderrim, shtim, riparim, perkthim te linjave dhe zgjidhje te sigurta per banesa dhe biznese.",
    h1: "Priza dhe Celesa ne Tirane",
    hero:
      "Priza dhe celesa ne Tirane per rastet kur problemi nis te pika e perdorimit dhe duhet zgjidhje e shpejte e e sigurt.",
    summary:
      "Sherbim per punet e shpeshta qe duken te vogla, por ndikojne drejtperdrejt ne siguri dhe perdorim normal. Eshte i vlefshem per apartamente, zyra dhe objekte me perdorim te larte ku pikat elektrike punojne cdo dite.",
    primaryKeyword: "priza dhe celesa tirane",
    secondaryKeywords: [
      "nderrim prizash",
      "shtim prizash",
      "riparim celesi",
      "prize e djegur",
    ],
    serviceAreas: ["Tirane", "Astir", "Don Bosko", "Komuna e Parisit", "Bllok"],
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
    proof: {
      title: "Rast prize/celesi ne Tirane",
      city: "Tirane",
      propertyType: "apartament familjar",
      problem:
        "Ne kuzhine kishte nje prize te djegur dhe nje celes qe nuk jepte kontakt te rregullt.",
      fix:
        "U zevendesua priza, u rregullua celesi dhe u kontrollua edhe linja qe i furnizonte.",
      turnaround: "Riparim i shpejte ne nje vizite.",
      outcome:
        "Pika u kthye ne gjendje te sigurt dhe me te lehte per perdorim te perditshem.",
      evidenceHint:
        "Shto foto nga pika e zevendesuar dhe nga testimi final.",
    },
    faqs: [
      {
        question: "A e mbuloni vetem zevendesimin apo edhe shtimin e pikave?",
        answer:
          "Te dyja. Sherbimi mbulon si zevendesimin, ashtu edhe shtimin praktik te pikave te reja.",
      },
      {
        question: "A eshte kjo faqe e pershtatshme per kuzhina dhe banjo?",
        answer:
          "Po, sidomos kur ka lageshti, ngarkese ose perdorim te vazhdueshem.",
      },
      {
        question: "A mund te zgjidhni edhe probleme me kontakt te dobet?",
        answer:
          "Po, sepse ajo eshte nje nga arsyet kryesore pse klientet kerkojne kete sherbim.",
      },
      {
        question: "A e beni edhe per zyra dhe dyqane?",
        answer:
          "Po, sidomos kur ka nevoje per me shume pika pune ose kur pika ekzistuese eshte e konsumuar.",
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
    callToAction: "Kontaktoni tani per prize dhe celesa ne Tirane.",
  },
  {
    slug: "mirembajtje-elektrike-biznese",
    locale: "sq-AL",
    title: "Mirembajtje Elektrike per Biznese",
    metaTitle: "Mirembajtje Elektrike per Biznese | Zyra, Dyqane & Lokale",
    metaDescription:
      "Mirembajtje elektrike per biznese ne Tirane dhe Durres per zyra, dyqane, restorante, lokale dhe objekte qe kerkojne stabilitet.",
    h1: "Mirembajtje Elektrike per Biznese",
    hero:
      "Mirembajtje elektrike per biznese qe duan vazhdimesi pune dhe parandalim te nderprerjeve qe kushtojne kohe e para.",
    summary:
      "Sherbim per pronare dhe menaxhere qe duan te shmangin ndaljet e papritura dhe te kene kontroll me te mire mbi instalimin. Eshte i pershtatshem per kontrolle periodike, riparime parandaluese dhe planifikim te rregullt te mirembajtjes.",
    primaryKeyword: "mirembajtje elektrike biznesi",
    secondaryKeywords: [
      "mirembajtje elektrike",
      "elektricist per biznese",
      "kontroll periodik elektrik",
      "riparime per zyra dhe dyqane",
    ],
    serviceAreas: ["Tirane", "Durres", "Bllok", "qendra tregtare", "zona biznesi"],
    whenToCall: [
      "Kur biznesi nuk mund te perballoje nderprerje te gjata ose te shpeshta.",
      "Kur doni kontroll periodik perpara sezonit te ngarkuar.",
      "Kur po hapni zyre, dyqan ose lokal dhe doni stabilitet.",
      "Kur pajisjet, ndricimi ose paneli fillojne te japin shenja konsumimi.",
    ],
    problems: [
      "Defekte qe ndikojne ne pune, shitje ose sherbim ndaj klientit.",
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
    proof: {
      title: "Rast mirembajtjeje biznesi",
      city: "Tirane",
      propertyType: "zyre",
      problem:
        "Klienti donte te evitonte nderprerje gjate orarit te punes dhe kishte shqetesim per disa pika te lodhura.",
      fix:
        "U krye kontroll periodik, u shtrenguan lidhjet dhe u priorizuan pikat me rrezik me te larte.",
      turnaround: "Kontroll i planifikuar me pune te lehta korrigjuese.",
      outcome:
        "Biznesi mori qartesi, me pak rrezik dhe me pak shanse per nderprerje te papritura.",
      evidenceHint:
        "Shto raport kontrolli dhe foto te panelit ose ambienteve te sherbimit.",
    },
    faqs: [
      {
        question: "A mund te planifikohet mirembajtje e rregullt?",
        answer:
          "Po. Mirembajtja e rregullt eshte nje nga arsyet kryesore pse bizneset e perdorin kete sherbim.",
      },
      {
        question: "A punoni edhe ne Durres?",
        answer:
          "Po. Sherbimi mbulon edhe Durresin, sidomos per biznese qe kane nevoje per stabilitet te larte.",
      },
      {
        question: "A eshte kjo e vlefshme per zyra dhe dyqane?",
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
    callToAction: "Kontaktoni tani per mirembajtje elektrike per biznesin tuaj.",
  },
  {
    slug: "smart-home-tirane",
    locale: "sq-AL",
    title: "Smart Home ne Tirane",
    metaTitle: "Smart Home ne Tirane | Automatizim, Ndricim & Kontroll",
    metaDescription:
      "Smart home ne Tirane per ndricim inteligjent, kontroll ne distance, sensorë dhe automatizim te banesave, vilave dhe zyrave.",
    h1: "Smart Home ne Tirane",
    hero:
      "Smart home ne Tirane per kliente qe duan automatizim modern, komoditet dhe kontroll me te mire te ndricimit dhe pajisjeve ne shtepi ose zyre.",
    summary:
      "Sherbim per zgjidhje praktike smart home qe e bejne jeten me te thjeshte, me te rregullt dhe me te kontrollueshme. Fokusi eshte te automatizimi i dobishem, jo te teknologjia e komplikuar pa vlere ne perdorim te perditshem.",
    primaryKeyword: "smart home tirane",
    secondaryKeywords: [
      "automatizim shtepie",
      "ndricim inteligjent",
      "smart switch",
      "domotike",
    ],
    serviceAreas: ["Tirane", "Farke", "Lunder", "Bllok", "Astir"],
    whenToCall: [
      "Kur doni kontroll te ndricimit dhe pajisjeve nga telefoni.",
      "Kur po rinovoni dhe mund te integroni zgjidhje moderne qe ne fillim.",
      "Kur villa ose zyra ka nevoje per komoditet dhe organizim me te mire.",
      "Kur doni zgjidhje praktike per kursim dhe automatizim te perditshem.",
    ],
    problems: [
      "Ambient qe kerkon me shume kontroll dhe me pak nderhyrje manuale.",
      "Ndricim dhe pajisje qe mund te rregullohen me skema automatike.",
      "Nevoje per sensore, skena ndricimi ose kontroll ne distance.",
      "Instalim qe duhet te jete i paster dhe i menduar bashke me rrjetin elektrik.",
    ],
    processSteps: [
      "Percaktohen zonat, pajisjet dhe niveli i automatizimit qe ju duhet.",
      "Planifikohet integrimi me instalimin ekzistues ose me projekt te ri.",
      "Montohen pajisjet dhe lidhen skenat, sensoret ose komandat kryesore.",
      "Testohet perdorimi dhe jepen udhezime te thjeshta per perdorim te perditshem.",
    ],
    proof: {
      title: "Rast smart home ne Tirane",
      city: "Tirane",
      propertyType: "vile familjare",
      problem:
        "Pronarja donte ndricim me te kontrollueshem dhe me pak qarkullim manual ne ambiente te ndryshme.",
      fix:
        "U vendos automatizim i thjeshte i ndricimit dhe u integrua me linjat ekzistuese.",
      turnaround: "Zbatim sipas zones dhe testim ne fund.",
      outcome:
        "Komoditeti u rrit dhe perdorimi i perditshem u be me i lehte per familjen.",
      evidenceHint:
        "Shto foto te pajisjeve dhe nje skemë te thjeshte te automatizimit.",
    },
    faqs: [
      {
        question: "A duhet instalim i ri per smart home?",
        answer:
          "Jo gjithmone. Nje pjese e zgjidhjeve mund te shtohen edhe mbi instalimin ekzistues.",
      },
      {
        question: "A eshte smart home vetem per vila?",
        answer:
          "Jo, mund te perdoret edhe ne apartamente dhe zyra kur ka nevoje per kontroll me te mire.",
      },
      {
        question: "A e beni edhe ndricimin inteligjent?",
        answer:
          "Po. Ndricimi inteligjent eshte nje nga hyrjet me te zakonshme per kete sherbim.",
      },
      {
        question: "A eshte zgjidhje e pershtatshme per zyra?",
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
    callToAction: "Kontaktoni tani per smart home ne Tirane.",
  },

  {
    slug: "elektricist-per-apartamente",
    locale: "sq-AL",
    title: "Elektricist per Apartamente",
    metaTitle: "Elektricist per Apartamente | Kontroll, Riparim & Instalime",
    metaDescription:
      "Elektricist per apartamente ne Tirane dhe Durres per kontroll, riparime, instalime, shtim pikash dhe permiresim te instalimit.",
    h1: "Elektricist per Apartamente",
    hero:
      "Elektricist per apartamente ne Tirane dhe Durres per pronare dhe qiramarres qe kerkojne zgjidhje te shpejta dhe praktike.",
    summary:
      "Sherbim per problemet e zakonshme te apartamenteve te vjetra dhe te reja, nga mbingarkesa dhe pikat e pakta te energjise deri te kontrollet para hyrjes ne prone. Eshte i vlefshem per banesa, qira dhe apartamente te reja ne Tirane e Durres.",
    primaryKeyword: "elektricist per apartamente",
    secondaryKeywords: [
      "instalime apartament",
      "riparime apartament",
      "kontroll elektrik apartament",
      "shtim prizash apartament",
    ],
    serviceAreas: ["Tirane", "Durres", "Astir", "Don Bosko", "Plazh"],
    whenToCall: [
      "Kur po merrni apartament te ri dhe doni kontroll sigurie.",
      "Kur qiramarresi raporton probleme me prize, celesa ose ndricim.",
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
    proof: {
      title: "Rast apartamenti ne Tirane",
      city: "Tirane",
      propertyType: "apartament me qira",
      problem:
        "Pronari donte ta pergatiste apartamentin per qira dhe kishte nje ose dy pika jo funksionale.",
      fix:
        "U rregulluan pikat problematike dhe u shtua nje organizim me i mire i zones se kuzhines.",
      turnaround: "Pergatitje para dorëzimit te apartamentit.",
      outcome:
        "Banesa u be me e sigurt dhe me e pershtatshme per qiramarres te rinj.",
      evidenceHint:
        "Shto foto te dhomave dhe pikat qe u permiresuan.",
    },
    faqs: [
      {
        question: "A eshte kjo faqe per apartamente te vjetra dhe te reja?",
        answer:
          "Po. Si apartamentet e vjetra, ashtu edhe ato te reja kerkojne qasje te ndryshme dhe kontrolle te pershtatura.",
      },
      {
        question: "A mund te behen shtime para se te hyje qiramarresi?",
        answer:
          "Po. Ky eshte nje nga rastet me te zakonshme para hyrjes se qiramarresit ose dorëzimit te apartamentit.",
      },
      {
        question: "A shkon edhe per blerje apartamenti?",
        answer:
          "Po, sepse kontrolli para marrjes ne dorezim eshte nje nevoje shume e forte lokale.",
      },
      {
        question: "A punoni edhe ne Durres?",
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
    metaTitle: "Elektricist per Vila | Instalime, Ndricim & Kontroll",
    metaDescription:
      "Elektricist per vila ne Tirane, Durres dhe zonat perreth per instalime, ndricim, panele, smart home dhe mirembajtje sezonale.",
    h1: "Elektricist per Vila",
    hero:
      "Elektricist per vila qe kane me shume zona, me shume ngarkese dhe me shume nevoje per planifikim te paster e te kujdesshem.",
    summary:
      "Sherbim per vila me ambiente te medha, oborre, ndricim te jashtem dhe panele qe duhet ta mbajne ngarkesen pa probleme. Eshte veçanerisht i dobishem per zonat rezidenciale ne Tirane, Durres dhe pronat sezonale perreth.",
    primaryKeyword: "elektricist per vila",
    secondaryKeywords: [
      "instalime vile",
      "ndricim oborri",
      "panel elektrik vile",
      "smart home vile",
    ],
    serviceAreas: ["Tirane", "Durres", "Farke", "Lunder", "Golem", "Mali i Robit"],
    whenToCall: [
      "Kur vila ka ambiente te shumta dhe instalimi duhet ndare mire.",
      "Kur ndricimi i jashtem ose i oborrit ka nevoje per rregullim.",
      "Kur keni pajisje te renda dhe doni te shmangni mbingarkesen.",
      "Kur po modernizoni vilen me smart home, EV ose panele diellore.",
    ],
    problems: [
      "Shperndarje e gabuar e ngarkeses ne nje prone te madhe.",
      "Oborre dhe zona te jashtme qe kerkojne ndricim me te mire.",
      "Nevoje per zgjidhje te qarta per pike te shumta dhe ambiente te ndryshme.",
      "Integrim i sistemeve te reja me panelin ekzistues.",
    ],
    processSteps: [
      "Bëhet vleresim i zones dhe ngarkeses reale te vilës.",
      "Planifikohet instalimi ose permiresimi sipas ambientit dhe perdorimit.",
      "Kryhet puna ne ambientet e brendshme dhe te jashtme.",
      "Testohet sistemi dhe jepen udhezime per sezonet me perdorim me te larte.",
    ],
    proof: {
      title: "Rast vile ne Durres",
      city: "Durres",
      propertyType: "vile familjare",
      problem:
        "Vila kishte nevoje per ndricim oborri dhe me shume qartesi ne panel per perdorim sezonal.",
      fix:
        "U shtuan pikat e ndricimit, u riorganizua paneli dhe u kontrolluan ngarkesat kryesore.",
      turnaround: "Pune e planifikuar me testim ne fund.",
      outcome:
        "Prona u be me funksionale, me e rregullt dhe me e lehte per mirembajtje.",
      evidenceHint:
        "Shto foto te oborrit, panelit dhe zones se ndricimit.",
    },
    faqs: [
      {
        question: "A e mbuloni edhe ndricimin e jashtem?",
        answer:
          "Po. Ndricimi i jashtem dhe i oborrit eshte nje nga kerkesat me te zakonshme per vila.",
      },
      {
        question: "A punoni ne Durres dhe zonat bregdetare?",
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
          "Po. Vila eshte shpesh prone e pershtatshme edhe per panele diellore ose karikues EV.",
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
    metaTitle: "Elektricist per Restorante & Hotele | Tirane, Durres, Bregdet",
    metaDescription:
      "Elektricist per restorante dhe hotele ne Tirane, Durres dhe zonat turistike per ndricim, kuzhine, panele dhe mirembajtje.",
    h1: "Elektricist per Restorante dhe Hotele",
    hero:
      "Elektricist per restorante dhe hotele ku nje defekt i vogel mund te prishë sherbimin, rezervimet ose eksperiencen e klientit.",
    summary:
      "Sherbim per restorante, hotele dhe struktura mikpritjeje qe kane nevoje per stabilitet, siguri dhe reagim te shpejte. Eshte veçanerisht i vlefshem ne Tirane dhe Durres, ku fluksi i klienteve rritet shpejt ne sezona te caktuara.",
    primaryKeyword: "elektricist per restorante dhe hotele",
    secondaryKeywords: [
      "elektricist per restorante",
      "elektricist per hotele",
      "mirembajtje elektrike hotel",
      "elektricist per lokale",
    ],
    serviceAreas: ["Tirane", "Durres", "Plazh", "Golem", "qendra turistike"],
    whenToCall: [
      "Kur kuzhina, ndricimi ose pajisjet e sherbimit nuk jane me te qendrueshme.",
      "Kur hoteli ka nevoje per vizite para sezonit te larte.",
      "Kur doni te shmangni nderprerjet qe ndikojne direkt te klienti.",
      "Kur duhet mirembajtje periodike per nje ambient me fluks te larte.",
    ],
    problems: [
      "Pajisje te shumta qe ngarkojne linjat ne kuzhine dhe salle.",
      "Ndricim qe duhet te punoje pa nderprerje ne orar sherbimi.",
      "Rrezik nga defekte qe ndikojne rezervimet ose sherbimin e klientit.",
      "Nevoje per plan mirembajtjeje para sezonit te larte.",
    ],
    processSteps: [
      "Percaktohen zonat kritike: kuzhine, salle, dhoma dhe ambiente sherbimi.",
      "Bëhet kontrolli i rrjetit dhe identifikimi i pikave me rrezik.",
      "Kryhen riparimet ose permiresimet qe duhen para perdorimit te plote.",
      "Vendoset nje plan i rregullt kontrolli per te shmangur nderprerje.",
    ],
    proof: {
      title: "Rast hotel/restorant ne Durres",
      city: "Durres",
      propertyType: "hotel i vogel",
      problem:
        "Prona kishte shqetesim me ndricimin dhe ngarkesen gjate pergatitjes per sezonin.",
      fix:
        "U kontrolluan qarqet kryesore dhe u rregulluan pikat me te ngarkuara perpara hapjes.",
      turnaround: "Kontroll i planifikuar para sezonit.",
      outcome:
        "Biznesi hyri ne sezon me me shume qetesi dhe me pak rrezik per nderprerje.",
      evidenceHint:
        "Shto foto te ambientit, panelit dhe nje shenim per sezonin.",
    },
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
          "Po, dhe kjo eshte forma me e mire per te mos i lene problemet te shperthejne ne kulm pune.",
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
    metaTitle: "Elektricist per Zyra dhe Dyqane | Tirane & Durres",
    metaDescription:
      "Elektricist per zyra dhe dyqane ne Tirane dhe Durres per instalime, riparime, ndricim, panel dhe mirembajtje te vazhdueshme.",
    h1: "Elektricist per Zyra dhe Dyqane",
    hero:
      "Sherbim per biznese te vogla dhe te mesme qe duan ndricim, stabilitet dhe riparime pa e ndalur punen e perditshme.",
    summary:
      "Sherbim per hapësira ku rryma, ndricimi dhe pikat e punes ndikojne drejtperdrejt ne operim dhe shitje. Eshte i forte per Tirane dhe Durres sepse aty kerkohet vazhdimesi dhe jo thjesht rregullim teknik.",
    primaryKeyword: "elektricist per zyra dhe dyqane",
    secondaryKeywords: [
      "elektricist per zyra",
      "elektricist per dyqane",
      "riparime per zyra",
      "instalime per dyqane",
    ],
    serviceAreas: ["Tirane", "Durres", "Bllok", "qendra tregtare", "zona biznesi"],
    whenToCall: [
      "Kur zyra ka nevoje per me shume pika pune ose ndricim me te mire.",
      "Kur dyqani ka problem me dritat, panelin ose pajisjet e ekspozimit.",
      "Kur duhet riparim pa ndalur aktivitetin e perditshëm me shume se duhet.",
      "Kur po hapni ambient te ri dhe keni nevoje per instalim te rregullt.",
    ],
    problems: [
      "Ndricim i dobet ne zonat e punes ose te shitjes.",
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
    proof: {
      title: "Rast zyre/dyqani",
      city: "Tirane",
      propertyType: "dyqan",
      problem:
        "Dyqani kishte nevoje per me shume pika pune dhe ndricim me te qarte ne zone ekspozimi.",
      fix:
        "U shtuan pikat e nevojshme dhe u rregullua ndricimi qe te ishte me i paster dhe i qendrueshem.",
      turnaround: "Pune e planifikuar per te mos prishur aktivitetin.",
      outcome:
        "Ambienti u be me funksional dhe me i pershtatshem per pune dhe shitje.",
      evidenceHint:
        "Shto foto te ambientit te punes dhe pikat e reja te instaluara.",
    },
    faqs: [
      {
        question: "A punoni pa e ndalur totalisht aktivitetin?",
        answer:
          "Po. Puna planifikohet me sa me pak nderprerje per aktivitetin e perditshëm.",
      },
      {
        question: "A mbuloni edhe dyqanet ne Durres?",
        answer:
          "Po, sepse bizneset ne qender dhe ne zona turistike shpesh kerkojne sherbim te shpejte.",
      },
      {
        question: "A mund te shtoni pika te reja pune?",
        answer:
          "Po. Shtimi i pikave te reja te punes eshte nje nga kerkesat me te shpeshta per zyra dhe dyqane.",
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
