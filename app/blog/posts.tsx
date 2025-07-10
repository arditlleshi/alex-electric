import React from "react";

export interface Post {
  title: string;
  description: string;
  slug: string;
  date: string; // e.g. "2025-07-08"
  tags: string[];
  content: React.ReactElement;
}

export const allPosts: Post[] = [
  {
    title: "Si të zgjedhësh një elektricist të besueshëm në Tiranë",
    description:
      "Këshillat kryesore për të identifikuar një profesionist të kualifikuar dhe të besueshëm për nevojat tuaja elektrike.",
    slug: "si-te-zgjedhesh-elektricist",
    date: "2025-07-08",
    tags: ["elektricist", "këshilla"],
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Zgjedhja e një elektricisti të besueshëm është thelbësore për sigurinë e
          shtëpisë dhe biznesit tuaj. Në këtë artikull do të shqyrtojmë hapat
          kryesorë për të siguruar që punësoni personin e duhur.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Verifikoni licencat dhe certifikimet</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Sigurohuni që elektricisti të ketë licencat e nevojshme nga autoritetet
          përkatëse. Kjo garanton se ai ka kaluar trajnimin dhe testet e duhura.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Kërkoni referenca dhe recensime</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Recensimet online dhe rekomandimet nga klientët e mëparshëm janë një
          mënyrë e shkëlqyer për të vlerësuar cilësinë e punës së elektricistit.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Krahasoni ofertat</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Mos zgjidhni gjithmonë ofertën më të lirë. Vlerësoni përfshirjet,
          cilësinë e materialeve dhe garancinë e ofruar.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Komunikimi dhe profesionalizmi</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Një profesionist i mirë është i gatshëm të shpjegojë procesin,
          afatet kohore dhe kostot. Shënoni nëse ai përgjigjet shpejt dhe në
          mënyrë të qartë.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Garancia e punës</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Pyetni për garancinë ndaj punimeve për të qenë të sigurt që çdo problem
          do të rregullohet pa kosto shtesë.
        </p>
      </>
    ),
  },
  {
    title: "5 shenja që ke nevojë për një elektricist urgjent",
    description:
      "Sinjalet kryesore që tregojnë se duhet të thërrisni menjëherë një elektricist profesionist.",
    slug: "shenja-per-elektricist-urgjent",
    date: "2025-07-09",
    tags: ["elektricist", "urgjent"],
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Disa probleme elektrike nuk mund të presin. Këtu janë pesë shenja që
          tregojnë se duhet të kontaktoni menjëherë një elektricist urgjent.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Erë djegieje ose tym</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Nëse ndjeni erë djegieje pranë prizave ose paneleve elektrike, ky është
          një tregues i qartë i një problemi serioz.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Shpërthime fikëse të shpeshta</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Nëse sigurimet apo çelësat fikëza shpërthejnë vazhdimisht, sistemi juaj
          elektrik mund të jetë i mbingarkuar.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Dritat pulsojnë ose fiken</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Luhatjet e vazhdueshme të tensionit mund të dëmtojnë pajisjet dhe të
          sinjalizojnë probleme me instalimet.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Priza ose kabllo të nxehta</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Nxehtësia e pazakontë tregon se ka një lidhje të dobët ose
          rezistencë të lartë, gjë që mund të shkaktojë zjarr.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Zikërrima ose shkëndija</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Çdo tingull i pazakontë ose shkëndijë gjatë përdorimit të pajisjeve
          duhet trajtuar menjëherë.
        </p>
      </>
    ),
  },
  {
    title: "Si funksionon instalimi i panelit diellor në shtëpi",
    description:
      "Një udhëzues hap-pas-hapi për të kuptuar procesin e instalimit të paneleve diellore.",
    slug: "instalimi-i-panelit-diellor",
    date: "2025-07-10",
    tags: ["solare", "guidë"],
    content: (
      <>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Panelet diellore janë një mënyrë efikase dhe miqësore me mjedisin për
          të prodhuar energji. Ja si funksionon procesi i instalimit.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Vlerësimi i vendndodhjes</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Profesionistët shqyrtojnë ekspozimin ndaj diellit, këndin e çatisë dhe
          hijezimin për të përcaktuar pozicionin optimal.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Projektimi i sistemit</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Inxhinierët hartojnë konfigurimin e paneleve, invertorëve dhe kabllove
          në mënyrë që të arrihet rendimenti maksimal.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Lejet dhe dokumentacioni</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Para punimeve, sigurohen lejet e nevojshme dhe aplikimet pranë
          operatorit të rrjetit.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Instalimi fizik</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Ekipi monton strukturat mbajtëse, vendos panelet dhe i lidh ato me
          invertorin dhe matësin e energjisë.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Testimi dhe monitorimi</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Pas instalimit, sistemi testohet dhe montohet pajisja e monitorimit për
          të ndjekur prodhimin.
        </p>
      </>
    ),
  },
]; 