/* GAD-7 (Spitzer, Kroenke, Williams & Löwe 2006) — Pfizer, uso libero. Versione italiana ufficiale (phqscreeners). */
window.PSY_TESTS = window.PSY_TESTS || {};
PSY_TESTS.gad7 = {
  code: "GAD-7", theme: "slate", sensitive: true, n: 7, values: [0, 1, 2, 3],
  labels: { en: ["Not at all", "Several days", "More than half the days", "Nearly every day"], it: ["Mai", "Alcuni giorni", "Più della metà dei giorni", "Quasi ogni giorno"] },
  items: {
    en: ["Feeling nervous, anxious, or on edge", "Not being able to stop or control worrying", "Worrying too much about different things", "Trouble relaxing", "Being so restless that it's hard to sit still", "Becoming easily annoyed or irritable", "Feeling afraid as if something awful might happen"],
    it: ["Sentirsi nervoso, ansioso o teso", "Non riuscire a smettere di preoccuparsi o a tenere sotto controllo le preoccupazioni", "Preoccuparsi troppo per varie cose", "Avere difficoltà a rilassarsi", "Essere talmente irrequieto da far fatica a stare seduto fermo", "Infastidirsi o irritarsi facilmente", "Avere paura che possa succedere qualcosa di terribile"]
  },
  text: {
    it: { kicker: "Ansia · screening", title: "Quanta ansia, nelle ultime due settimane?", lede: "7 domande, 1 minuto. Il GAD-7 è il questionario di screening per l'ansia generalizzata usato in tutto il mondo. Dice se vale la pena parlarne, non fa diagnosi.", meta: ["7 domande", "~1 minuto", "Screening"], instr: "Nelle <b>ultime due settimane</b>, con quale frequenza ti hanno dato fastidio i seguenti problemi?", how: "Il punteggio va da 0 a 21: 0–4 minimo, 5–9 lieve, 10–14 moderato, 15–21 grave. Da 10 in su i medici approfondiscono. Il GAD-7 coglie bene anche altri disturbi d'ansia (panico, ansia sociale): un punteggio alto dice che l'ansia pesa, non di quale tipo sia.", cite: "Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. Archives of Internal Medicine, 166, 1092-1097. © Pfizer, uso libero." },
    en: { kicker: "Anxiety · screening", title: "How anxious, over the last two weeks?", lede: "7 questions, 1 minute. The GAD-7 is the generalised-anxiety screening questionnaire used worldwide. It tells you whether it is worth talking about; it is not a diagnosis.", meta: ["7 questions", "~1 minute", "Screening"], instr: "Over the <b>last two weeks</b>, how often have you been bothered by the following problems?", how: "The score runs from 0 to 21: 0–4 minimal, 5–9 mild, 10–14 moderate, 15–21 severe. From 10 up, clinicians follow up. The GAD-7 also picks up other anxiety disorders (panic, social anxiety): a high score says anxiety weighs on you, not which kind it is.", cite: "Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. Archives of Internal Medicine, 166, 1092-1097. © Pfizer, free to use." }
  },
  main: "tot",
  scales: [{ key: "tot", name: { it: "Sintomi d'ansia", en: "Anxiety symptoms" }, items: [1,2,3,4,5,6,7], mode: "sum", range: [0, 21],
    bands: [
      { max: 4, name: { it: "Minimo", en: "Minimal" }, text: { it: "Ansia minima o assente nelle ultime due settimane.", en: "Minimal or no anxiety over the last two weeks." } },
      { max: 9, name: { it: "Lieve", en: "Mild" }, text: { it: "Ansia lieve: tensione e preoccupazioni ci sono ma restano gestibili.", en: "Mild anxiety: tension and worries are there but remain manageable." } },
      { max: 14, name: { it: "Moderato", en: "Moderate" }, text: { it: "Ansia moderata: la soglia da cui i medici approfondiscono. Parlarne con il medico o con uno psicologo è la mossa sensata; l'ansia risponde bene ai trattamenti.", en: "Moderate anxiety: the threshold at which clinicians follow up. Talking to a doctor or a psychologist is the sensible move; anxiety responds well to treatment." } },
      { max: 21, name: { it: "Grave", en: "Severe" }, text: { it: "Ansia grave, che probabilmente sta condizionando le giornate. Chiedi aiuto: è uno dei problemi che si trattano meglio.", en: "Severe anxiety, probably shaping your days. Ask for help: it is one of the most treatable problems." } }
    ] }]
};
