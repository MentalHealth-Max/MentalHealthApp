const guideContent = {
  sofort: {
    title: "Erst Sicherheit, dann alles andere.",
    text:
      "Du musst jetzt nicht dein ganzes Leben loesen. Ziel fuer die naechsten Minuten: Abstand zwischen Impuls und Handlung bringen.",
    bullets: [
      "Lege Dinge weg, mit denen du dir schaden koenntest, oder gib sie jemandem.",
      "Stell beide Fuesse auf den Boden und beschreibe laut, wo du bist.",
      "Ruf jemanden an oder bleib an einem oeffentlichen, sicheren Ort.",
    ],
    sideTitle: "Mini-Satz",
    sideText: "Ich muss diesem Impuls nicht folgen. Ich muss nur die naechsten zehn Minuten schaffen.",
  },
  verstehen: {
    title: "Was du fuehlst, ist ein Signal, kein Beweis gegen dich.",
    text:
      "Symptome koennen laut, koerperlich und ueberzeugend wirken. Trotzdem sind sie veraenderbar und du darfst Hilfe dafuer brauchen.",
    bullets: [
      "Waehle unten das Symptom, das gerade am staerksten ist.",
      "Such dir nur einen Tipp aus, nicht alle auf einmal.",
      "Wenn Gefahr da ist, zaehlt Kontakt mehr als Perfektion.",
    ],
    sideTitle: "Orientierung",
    sideText: "Hohe Intensitaet bedeutet: kleiner Schritt, mehr Unterstuetzung, weniger Alleinsein.",
  },
  kontakt: {
    title: "Verbindung ist ein Skill.",
    text:
      "Es ist okay, nicht genau erklaeren zu koennen, was los ist. Eine kurze Nachricht reicht, um nicht allein zu bleiben.",
    bullets: [
      "Schreib: 'Mir geht es gerade nicht gut. Kannst du kurz bleiben?'",
      "Wenn niemand erreichbar ist: TelefonSeelsorge 116 123.",
      "Als Kind oder Jugendliche*r: Nummer gegen Kummer 116 111.",
    ],
    sideTitle: "Wichtig",
    sideText: "Du bist keine Last, weil du Unterstuetzung brauchst. Menschen duerfen fuer dich da sein.",
  },
};

const symptoms = [
  {
    id: "suizidgedanken",
    title: "Suizidgedanken",
    tag: "akut",
    text: "Wenn Gedanken auftauchen, nicht mehr leben zu wollen, braucht es sofort weniger Alleinsein und mehr Schutz.",
    tips: ["Nicht allein bleiben.", "112 bei akuter Gefahr.", "TelefonSeelsorge 116 123."],
    focus:
      "Bei Suizidgedanken ist das Ziel nicht, alles logisch zu klaeren. Das Ziel ist, dich jetzt aus der unmittelbaren Gefahr zu bringen.",
    warning:
      "Wenn du einen konkreten Plan hast, dich nicht sicher fuehlst oder Zugang zu gefaehrlichen Dingen hast: ruf 112 an oder geh in die Notaufnahme.",
    steps: [
      "Bring Abstand zwischen dich und alles, womit du dir schaden koenntest. Gib es ab oder geh in einen anderen Raum.",
      "Sag einer Person klar: 'Ich bin gerade nicht sicher allein.' Du musst es nicht schoen formulieren.",
      "Bleib an einem Ort, an dem du nicht allein und nicht abgeschottet bist, bis Hilfe da ist.",
    ],
    watch: ["konkreter Plan", "starker Handlungsdruck", "Abschied nehmen oder Dinge regeln", "nicht mehr erreichbar sein wollen"],
    tool: "Kontakt vor Beruhigung: erst 112, TelefonSeelsorge oder eine vertraute Person, danach Atem-Anker.",
    message:
      "Ich habe gerade Suizidgedanken und bin nicht sicher allein. Bitte ruf mich an oder komm zu mir. Wenn ich nicht antworte, hol bitte Hilfe.",
    urgent: true,
  },
  {
    id: "selbstverletzungsdruck",
    title: "Selbstverletzungsdruck",
    tag: "akut",
    text: "Der Druck will oft Entlastung. Ziel ist, den Moment zu ueberstehen, ohne dich zu verletzen.",
    tips: ["Scharfe oder gefaehrliche Dinge weglegen.", "Kalten Reiz nutzen, z. B. kaltes Wasser.", "Jemandem schreiben: 'Bitte bleib kurz bei mir.'"],
    focus:
      "Selbstverletzungsdruck kommt oft wie eine Welle. Du musst die Welle nicht moegen, nur lange genug Abstand halten, bis sie abnimmt.",
    warning:
      "Wenn du dich schon verletzt hast, die Blutung nicht stoppt oder du dich nicht sicher fuehlst: hol medizinische Hilfe oder ruf 112.",
    steps: [
      "Lege gefaehrliche Gegenstaende ausser Reichweite oder gib sie jemandem fuer die naechsten 30 Minuten.",
      "Nutze starken, sicheren Reiz: kaltes Wasser ueber die Haende, Eis in ein Tuch, festes Handtuch wringen.",
      "Mach den Druck sichtbar ohne Verletzung: zaehle rueckwaerts, druecke die Fuesse in den Boden, schreibe den Satz 'Noch 10 Minuten'.",
    ],
    watch: ["Material liegt bereit", "Gefuehl von Trance", "Scham und Rueckzug", "Gedanke 'nur einmal kurz'"],
    tool: "Grounding und Nachrichtenvorlage. Alleinsein ist hier ein Risikoverstaerker.",
    message:
      "Ich habe gerade starken Selbstverletzungsdruck. Kannst du bitte kurz bei mir bleiben oder telefonieren, bis die Welle kleiner ist?",
    urgent: true,
  },
  {
    id: "panikattacke",
    title: "Panikattacke",
    tag: "koerper",
    text: "Panik fuehlt sich gefaehrlich an, ist aber eine Stresswelle. Sie steigt, kippt und faellt wieder.",
    tips: ["Laenger ausatmen als einatmen.", "Fuesse fest auf den Boden.", "Langsam 5 Dinge im Raum benennen."],
    focus:
      "Bei Panik versucht dein Koerper, dich zu schuetzen. Das Gefuehl ist extrem, aber es ist eine Aktivierungswelle.",
    warning:
      "Wenn Beschwerden neu, medizinisch unklar oder sehr stark sind, besonders Brustschmerz oder Ohnmacht: medizinisch abklaeren lassen oder 112 rufen.",
    steps: [
      "Benenne es: 'Das ist Panik. Unangenehm, aber eine Welle.'",
      "Atme 4 Sekunden ein und 6 Sekunden aus. Wiederhole das fuenfmal, ohne perfekt sein zu muessen.",
      "Suche drei harte Kanten im Raum und beschreibe sie langsam. Das gibt deinem Gehirn Gegenwart.",
    ],
    watch: ["Fluchtimpuls", "Katastrophengedanken", "Atem kontrollieren wollen", "Angst vor der Angst"],
    tool: "Atem-Anker, danach 5-4-3-2-1-Grounding.",
    message:
      "Ich habe gerade eine Panikattacke. Es hilft mir, wenn du ruhig mit mir sprichst und mich daran erinnerst, langsam auszuatmen.",
  },
  {
    id: "depressive-schwere",
    title: "Depressive Schwere",
    tag: "gedanken",
    text: "Wenn alles sinnlos wirkt, muss der naechste Schritt sehr klein sein.",
    tips: ["Trink ein Glas Wasser.", "Oeffne ein Fenster.", "Schreib einer Person nur ein Wort: 'schwer'."],
    focus:
      "Depressive Schwere macht selbst kleine Dinge gross. Deshalb zaehlt nicht Motivation, sondern ein winziger naechster Schritt.",
    warning:
      "Wenn aus Schwere Suizidgedanken werden oder du dich nicht sicher fuehlst: geh zum Abschnitt Akuthilfe und bleib nicht allein.",
    steps: [
      "Mach eine Koerper-Sache: Wasser trinken, Gesicht waschen, Licht an, Fenster auf.",
      "Waehle eine Aufgabe, die unter zwei Minuten dauert. Danach darfst du neu entscheiden.",
      "Sende einer Person nur ein kurzes Signal, zum Beispiel 'schwer' oder 'brauch kurz Kontakt'.",
    ],
    watch: ["gar nichts mehr fuehlen", "nicht mehr essen oder trinken", "soziale Nachrichten vermeiden", "Gedanke 'es bringt eh nichts'"],
    tool: "Nachrichtenvorlage und ein sehr kleiner Plan-Schritt.",
    message:
      "Mir ist gerade alles sehr schwer. Ich brauche keine Loesung, aber es wuerde helfen, wenn du kurz da bist.",
  },
  {
    id: "angst-gruebeln",
    title: "Angst und Gruebeln",
    tag: "gedanken",
    text: "Gruebeln sucht Sicherheit, findet aber oft neue Fragen. Begrenzung hilft.",
    tips: ["Timer auf 10 Minuten setzen.", "Sorge aufschreiben, dann Blatt weglegen.", "Eine konkrete Handlung waehlen."],
    focus:
      "Gruebeln fuehlt sich wie Problemloesen an, haelt die Angst aber oft aktiv. Hilfreich ist eine klare Grenze.",
    warning:
      "Wenn Angst dich tagelang am Schlafen, Essen oder Verlassen der Wohnung hindert, ist professionelle Unterstuetzung sinnvoll.",
    steps: [
      "Schreibe die Sorge in einem Satz auf. Keine Analyse, nur ein Satz.",
      "Setze einen 10-Minuten-Sorgen-Timer. Danach kommt ein Koerperwechsel: aufstehen, Wasser, kurzer Gang.",
      "Frage: 'Was ist die kleinste Handlung, die ich wirklich kontrollieren kann?' Nur diese Handlung zaehlt jetzt.",
    ],
    watch: ["immer neue Rueckversicherungen suchen", "Schlaf verlieren", "koerperlich angespannt bleiben", "Entscheidungen endlos pruefen"],
    tool: "Timer plus Grounding, damit Gedanken wieder einen Rand bekommen.",
    message:
      "Ich stecke gerade im Gruebeln fest. Kannst du mir helfen, bei einem kleinen naechsten Schritt zu bleiben?",
  },
  {
    id: "flashback",
    title: "Flashback oder Trauma-Trigger",
    tag: "koerper",
    text: "Dein Nervensystem reagiert, als waere Vergangenes jetzt. Orientierung im Heute ist der erste Schritt.",
    tips: ["Datum und Ort laut sagen.", "Etwas mit Struktur anfassen.", "Licht einschalten oder Raum wechseln."],
    focus:
      "Bei einem Flashback braucht dein Nervensystem Beweise, dass du im Heute bist und nicht mehr in der damaligen Situation.",
    warning:
      "Wenn du dich nicht orientieren kannst, weglaufen willst oder dich akut gefaehrdet fuehlst: hol eine Person dazu oder ruf Hilfe.",
    steps: [
      "Sag laut: heutiges Datum, dein Alter, dein Ort, und: 'Das ist eine Erinnerung, nicht die Gegenwart.'",
      "Veraendere die Umgebung: Licht an, Tuer auf, anderer Raum, Fuesse fest auf den Boden.",
      "Fass etwas mit klarer Struktur an und beschreibe fuenf Eigenschaften: kalt, rau, schwer, glatt, kantig.",
    ],
    watch: ["Bilder oder Koerpergefuehle von damals", "Orientierung verlieren", "Erstarren", "starker Flucht- oder Schutzimpuls"],
    tool: "5-4-3-2-1-Grounding, nicht tief in die Erinnerung hineingehen.",
    message:
      "Ich bin getriggert und brauche Orientierung. Kannst du mir ruhig sagen, wo ich bin und dass gerade jetzt vorbei ist?",
  },
  {
    id: "dissoziation",
    title: "Dissoziation",
    tag: "koerper",
    text: "Wenn du dich weit weg fuehlst, helfen klare Sinnesreize und einfache Bewegungen.",
    tips: ["Fuesse abwechselnd in den Boden druecken.", "Einen Gegenstand genau beschreiben.", "Kaltes Wasser ueber Haende laufen lassen."],
    focus:
      "Dissoziation ist oft ein Schutzmodus. Du musst dich nicht zwingen, sofort 'normal' zu sein; du kannst dich Schritt fuer Schritt zurueckholen.",
    warning:
      "Wenn du dich nicht sicher bewegen kannst, nicht weisst wo du bist oder allein draussen bist: setz dich hin und kontaktiere jemanden.",
    steps: [
      "Druecke abwechselnd linken und rechten Fuss in den Boden. Zaehle jede Seite zehnmal.",
      "Nutze Temperatur: kaltes Wasser an Haende oder Nacken, warmes Getraenk bewusst halten.",
      "Beschreibe den Raum wie fuer eine andere Person: drei Farben, drei Formen, drei Geraeusche.",
    ],
    watch: ["Zeitluecken", "Taubheit", "wie hinter Glas", "automatisch funktionieren"],
    tool: "Koerperliche Orientierung statt Nachdenken.",
    message:
      "Ich fuehle mich gerade weggetreten/dissoziiert. Kannst du kurz bei mir bleiben und mich an Ort, Datum und Atmen erinnern?",
  },
  {
    id: "essdruck",
    title: "Essdruck oder Kontrollverlust",
    tag: "akut",
    text: "Scham macht oft einsam. Der erste hilfreiche Schritt ist freundlich und konkret.",
    tips: ["Nicht bestrafen oder ausgleichen.", "Eine vertraute Person informieren.", "Naechste Mahlzeit normal planen."],
    focus:
      "Bei Essdruck oder Kontrollverlust macht Scham alles enger. Der hilfreiche Schritt ist Stabilisierung, nicht Strafe.",
    warning:
      "Bei Ohnmacht, Brustschmerz, Blut, starkem Erbrechen, akutem Untergewicht oder Suizidgedanken: medizinische Hilfe holen.",
    steps: [
      "Unterbrich den Alles-oder-nichts-Gedanken: 'Ich muss das nicht ausgleichen. Ich kann zur naechsten normalen Mahlzeit zurueck.'",
      "Entferne dich fuer zehn Minuten von Triggern wie Waage, Tracking, Spiegelcheck oder Essensvorrat, wenn sie Druck machen.",
      "Mach nach einer Episode eine neutrale Versorgung: Wasser, bequeme Kleidung, keine Bestrafung, naechste Mahlzeit planen.",
    ],
    watch: ["Ausgleichsimpulse", "heimlich bleiben muessen", "koerperliche Warnzeichen", "starke Scham"],
    tool: "Nachrichtenvorlage und Notfallplan ohne Zahlen, Gewicht oder Kalorien.",
    message:
      "Ich habe gerade starken Essdruck oder Scham nach Kontrollverlust. Bitte hilf mir, nicht in Bestrafung oder Ausgleich zu gehen.",
  },
  {
    id: "sucht-rueckfalldruck",
    title: "Sucht- oder Rueckfalldruck",
    tag: "akut",
    text: "Craving kommt in Wellen. Abstand, Begleitung und Reizwechsel senken die Macht der Welle.",
    tips: ["10-Minuten-Aufschub.", "Kontaktperson anrufen.", "Ort wechseln, wenn dort Trigger sind."],
    focus:
      "Rueckfalldruck will sofortige Erleichterung. Du brauchst jetzt Abstand, Zeitgewinn und eine Person statt Verhandlung mit dem Druck.",
    warning:
      "Wenn ein Rueckfall lebensgefaehrlich werden kann, du Entzugssymptome hast oder dich nicht kontrollieren kannst: medizinische Hilfe holen.",
    steps: [
      "Verschiebe die Handlung um zehn Minuten. Nicht fuer immer, nur zehn Minuten.",
      "Wechsle den Ort oder entferne dich von Kontakt, Geld, Vorrat oder Trigger-Situation.",
      "Ruf eine Person aus deinem Suchthilfe-, Therapie- oder Freundeskreis an und sag nur: 'Craving ist hoch.'",
    ],
    watch: ["verhandeln mit dir selbst", "Trigger-Orte aufsuchen", "Kontakt zu Konsum-Personen", "Gedanke 'heute egal'"],
    tool: "10-Minuten-Aufschub, Ortswechsel, Kontakt.",
    message:
      "Mein Rueckfalldruck ist gerade hoch. Kannst du bitte zehn Minuten mit mir telefonieren oder mir helfen, den Ort zu wechseln?",
  },
  {
    id: "schlaflose-nacht",
    title: "Schlaflose Nacht",
    tag: "koerper",
    text: "Nachts wirkt alles groesser. Ziel ist Ruhe, nicht erzwungener Schlaf.",
    tips: ["Licht gedimmt halten.", "Keine grossen Lebensentscheidungen nachts.", "Ruhige Wiederholung: ein Satz, ein Atemzug."],
    focus:
      "In schlaflosen Naechten wirkt das Gehirn wie ein Alarmraum. Das Ziel ist Ruhe und Sicherheit, nicht Schlaf erzwingen.",
    warning:
      "Wenn du mehrere Naechte kaum schlaefst, dich extrem getrieben fuehlst oder riskante Impulse bekommst: aerztliche Hilfe einplanen.",
    steps: [
      "Mach Licht und Reize kleiner: Display weg, gedimmtes Licht, nichts Dramatisches lesen.",
      "Wenn du laenger wachliegst, steh kurz auf und mach etwas Langweiliges, bis der Druck sinkt.",
      "Keine Lebensentscheidungen nachts. Schreib sie auf und verschiebe sie auf morgen.",
    ],
    watch: ["Katastrophengedanken", "nachts Nachrichten schreiben wollen", "immer wieder Uhr checken", "getriebene Energie"],
    tool: "Atem-Anker mit sehr langsamer Ausatmung.",
    message:
      "Ich kann nicht schlafen und meine Gedanken werden nachts gross. Kannst du mich kurz beruhigen oder mir morgen beim Einordnen helfen?",
  },
  {
    id: "einsamkeit",
    title: "Einsamkeit",
    tag: "gedanken",
    text: "Einsamkeit kann sich wie ein Urteil anfuehlen. Sie ist ein Beduerfnis nach Verbindung.",
    tips: ["Eine kurze Nachricht senden.", "An einen Ort mit Menschen gehen.", "TelefonSeelsorge nutzen, auch ohne 'grossen Grund'."],
    focus:
      "Einsamkeit sagt oft: 'Niemand will dich.' Eigentlich meldet sie: 'Du brauchst Verbindung.'",
    warning:
      "Wenn Einsamkeit in Suizidgedanken kippt oder du dich nicht sicher fuehlst: nutze sofort Akuthilfe und bleib nicht allein.",
    steps: [
      "Waehle Kontakt mit niedrigster Huerde: ein Punkt, ein Emoji, 'bist du kurz da?'.",
      "Geh, wenn moeglich, an einen sicheren Ort mit Menschen: Kiosk, Bibliothek, Spazierweg, Hausflur.",
      "Wenn niemand erreichbar ist, ruf TelefonSeelsorge 116 123. Es muss nicht erst 'schlimm genug' sein.",
    ],
    watch: ["alle Nachrichten vermeiden", "sich als Last fuehlen", "Scham nach Kontaktwunsch", "Gedanke 'niemand merkt es'"],
    tool: "Nachrichtenvorlage und Kontaktliste im Notfallplan.",
    message:
      "Ich fuehle mich gerade sehr allein. Du musst nichts reparieren, aber kannst du kurz mit mir schreiben oder telefonieren?",
  },
  {
    id: "wut-ueberforderung",
    title: "Wut oder Ueberforderung",
    tag: "koerper",
    text: "Starke Aktivierung braucht sichere Entladung, bevor Worte wieder gut funktionieren.",
    tips: ["Haende gegen eine Wand druecken.", "Schnell gehen, nicht diskutieren.", "Spaeter klaeren, jetzt runterregeln."],
    focus:
      "Bei Wut und Ueberforderung ist dein System auf Angriff oder Flucht. Erst runterregeln, dann klaeren.",
    warning:
      "Wenn du Angst hast, dir oder jemand anderem weh zu tun: verlass die Situation, bring Abstand rein und hol Hilfe.",
    steps: [
      "Sag einen Stopp-Satz: 'Ich mache 20 Minuten Pause und komme dann zurueck.'",
      "Entlade sicher: schnell gehen, Haende gegen Wand druecken, kaltes Wasser, Handtuch wringen.",
      "Keine Konfliktklaerung auf Hoechstspannung. Erst essen, trinken, atmen, Abstand.",
    ],
    watch: ["lauter werden", "Dinge werfen wollen", "Tunnelblick", "nicht mehr zuhoeren koennen"],
    tool: "Koerperliche Entladung plus Pause-Satz.",
    message:
      "Ich bin gerade sehr ueberfordert und brauche Pause, damit ich nichts sage oder tue, was schadet. Kannst du mir Raum geben?",
  },
];

const groundingSteps = [
  "Nenne 5 Dinge, die du sehen kannst.",
  "Nenne 4 Dinge, die du fuehlen kannst.",
  "Nenne 3 Dinge, die du hoeren kannst.",
  "Nenne 2 Dinge, die du riechen kannst.",
  "Nenne 1 Sache, die du jetzt fuer dich tun kannst.",
];

const guidePanel = document.querySelector("#guide-panel");
const symptomGrid = document.querySelector("#symptom-grid");
const symptomDetail = document.querySelector("#symptom-detail");
const guideButtons = document.querySelectorAll(".guide-step");
const filterButtons = document.querySelectorAll(".filter-chip");
const safetyForm = document.querySelector("#safety-form");
const saveNote = document.querySelector("#save-note");
let groundIndex = 0;
let breathTimer = null;
let breathStep = 0;
let currentFilter = "alle";
let selectedSymptomId = "suizidgedanken";

function renderGuide(key) {
  const item = guideContent[key];
  guidePanel.innerHTML = `
    <div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
    </div>
    <aside class="mini-card">
      <p class="eyebrow">${item.sideTitle}</p>
      <p>${item.sideText}</p>
    </aside>
  `;
}

function renderSymptoms(filter = "alle") {
  const visible = filter === "alle" ? symptoms : symptoms.filter((symptom) => symptom.tag === filter);
  if (!visible.some((symptom) => symptom.id === selectedSymptomId)) {
    selectedSymptomId = visible[0]?.id || "";
  }
  symptomGrid.innerHTML = visible
    .map(
      (symptom) => `
        <article class="symptom-card ${symptom.id === selectedSymptomId ? "is-selected" : ""}">
          <span class="tag">${symptom.tag}</span>
          <strong>${symptom.title}</strong>
          <p>${symptom.text}</p>
          <ul>${symptom.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>
          <button class="button ghost use-template" type="button" data-id="${symptom.id}">
            Konkrete Schritte
          </button>
        </article>
      `,
    )
    .join("");
  renderSymptomDetail(symptoms.find((symptom) => symptom.id === selectedSymptomId));
}

function renderSymptomDetail(symptom) {
  if (!symptom) {
    symptomDetail.innerHTML = `<p class="detail-empty">Waehle links ein Symptom aus. Hier erscheinen konkrete Schritte fuer genau diesen Moment.</p>`;
    return;
  }

  symptomDetail.innerHTML = `
    <div>
      <span class="detail-tag">${symptom.tag}</span>
      <h3>${symptom.title}</h3>
      <p>${symptom.focus}</p>
    </div>
    <p class="detail-note">${symptom.warning}</p>
    <div class="detail-block">
      <h4>Jetzt konkret</h4>
      <ol class="detail-list">
        ${symptom.steps.map((step, index) => `<li><span>${index + 1}</span>${step}</li>`).join("")}
      </ol>
    </div>
    <div class="detail-block">
      <h4>Warnzeichen</h4>
      <p>${symptom.watch.join(" · ")}</p>
    </div>
    <div class="detail-block detail-tool">
      <h4>Passendes Werkzeug</h4>
      <p>${symptom.tool}</p>
    </div>
    <div class="detail-actions">
      <button class="button secondary" type="button" data-message-id="${symptom.id}">Nachricht vorbereiten</button>
      <button class="button ghost" type="button" data-plan-id="${symptom.id}">In meinen Plan legen</button>
      ${
        symptom.urgent
          ? `<a class="button emergency-action" href="tel:112">Akuthilfe 112</a>`
          : `<a class="button primary" href="#werkzeuge">Werkzeug oeffnen</a>`
      }
    </div>
  `;
}

function updateGrounding() {
  document.querySelector("#grounding-text").textContent = groundingSteps[groundIndex];
  document.querySelector("#ground-count").textContent = `${groundIndex + 1} / ${groundingSteps.length}`;
}

function setMessageTemplate(symptomTitle, customMessage) {
  const message =
    customMessage ||
    `Hey, bei mir ist gerade ${symptomTitle} sehr stark. Ich muss nicht perfekt erklaeren, was los ist, aber ich sollte nicht allein bleiben. Kannst du kurz bei mir bleiben oder telefonieren?`;
  document.querySelector("#message-template").textContent = message;
  document.querySelector("#werkzeuge").scrollIntoView({ behavior: "smooth", block: "start" });
}

function appendPlanBlock(fieldName, title, lines) {
  const field = safetyForm.elements[fieldName];
  const block = `${title}:\n- ${lines.join("\n- ")}`;
  if (!field || field.value.includes(title)) return;
  field.value = field.value.trim() ? `${field.value.trim()}\n\n${block}` : block;
}

function addSymptomToPlan(symptom) {
  appendPlanBlock("warning", symptom.title, symptom.watch);
  appendPlanBlock("actions", symptom.title, symptom.steps);
  appendPlanBlock("people", symptom.title, [
    symptom.urgent ? "112 bei akuter Gefahr" : "eine vertraute Person",
    "TelefonSeelsorge 116 123",
    "professionelle Hilfe, Praxis oder Klinik, wenn es wiederkehrt",
  ]);
  saveNote.textContent = `${symptom.title} wurde in deinen Plan gelegt. Speichere ihn, wenn es passt.`;
  document.querySelector("#notfallplan").scrollIntoView({ behavior: "smooth", block: "start" });
}

function loadPlan() {
  const saved = JSON.parse(localStorage.getItem("ankerraum-plan") || "{}");
  for (const [name, value] of Object.entries(saved)) {
    const field = safetyForm.elements[name];
    if (field) field.value = value;
  }
}

guideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    guideButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderGuide(button.dataset.guide);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    currentFilter = button.dataset.filter;
    renderSymptoms(currentFilter);
  });
});

symptomGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".use-template");
  if (!button) return;
  selectedSymptomId = button.dataset.id;
  renderSymptoms(currentFilter);
  symptomDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

symptomDetail.addEventListener("click", (event) => {
  const messageButton = event.target.closest("[data-message-id]");
  const planButton = event.target.closest("[data-plan-id]");

  if (messageButton) {
    const symptom = symptoms.find((item) => item.id === messageButton.dataset.messageId);
    if (symptom) setMessageTemplate(symptom.title, symptom.message);
  }

  if (planButton) {
    const symptom = symptoms.find((item) => item.id === planButton.dataset.planId);
    if (symptom) addSymptomToPlan(symptom);
  }
});

document.querySelector("#ground-prev").addEventListener("click", () => {
  groundIndex = (groundIndex - 1 + groundingSteps.length) % groundingSteps.length;
  updateGrounding();
});

document.querySelector("#ground-next").addEventListener("click", () => {
  groundIndex = (groundIndex + 1) % groundingSteps.length;
  updateGrounding();
});

document.querySelector("#copy-message").addEventListener("click", async () => {
  const text = document.querySelector("#message-template").textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
    document.querySelector("#copy-message").textContent = "Kopiert";
    setTimeout(() => {
      document.querySelector("#copy-message").textContent = "Text kopieren";
    }, 1800);
  } catch {
    document.querySelector("#message-template").focus();
  }
});

document.querySelector("#breath-toggle").addEventListener("click", () => {
  const circle = document.querySelector("#breath-circle");
  const label = document.querySelector("#breath-label");
  const toggle = document.querySelector("#breath-toggle");
  const states = [
    ["Einatmen", true],
    ["Halten", true],
    ["Ausatmen", false],
    ["Pause", false],
  ];

  if (breathTimer) {
    clearInterval(breathTimer);
    breathTimer = null;
    circle.classList.remove("expand");
    label.textContent = "Bereit";
    toggle.textContent = "Starten";
    return;
  }

  toggle.textContent = "Stoppen";
  breathStep = 0;
  const tick = () => {
    const [text, expand] = states[breathStep % states.length];
    label.textContent = text;
    circle.classList.toggle("expand", expand);
    breathStep += 1;
  };
  tick();
  breathTimer = setInterval(tick, 4000);
});

safetyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(safetyForm).entries());
  localStorage.setItem("ankerraum-plan", JSON.stringify(data));
  saveNote.textContent = "Gespeichert. Dein Plan bleibt in diesem Browser.";
});

document.querySelector("#clear-plan").addEventListener("click", () => {
  localStorage.removeItem("ankerraum-plan");
  safetyForm.reset();
  saveNote.textContent = "Geleert.";
});

renderGuide("sofort");
renderSymptoms();
updateGrounding();
loadPlan();
