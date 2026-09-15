/* WHO-5 Well-Being Index (WHO / Psychiatric Research Unit, Hillerød 1998) — pubblico dominio, versione italiana ufficiale. */
window.PSY_TESTS = window.PSY_TESTS || {};
PSY_TESTS.who5 = {
  code: "WHO-5", theme: "sun", n: 5, values: [0, 1, 2, 3, 4, 5],
  labels: {
    en: ["At no time", "Some of the time", "Less than half of the time", "More than half of the time", "Most of the time", "All of the time"],
    it: ["Mai", "Ogni tanto", "Meno della metà del tempo", "Più della metà del tempo", "La maggior parte del tempo", "Sempre"]
  },
  items: {
    en: ["I have felt cheerful and in good spirits.", "I have felt calm and relaxed.", "I have felt active and vigorous.", "I woke up feeling fresh and rested.", "My daily life has been filled with things that interest me."],
    it: ["Mi sono sentito allegro e di buon umore.", "Mi sono sentito calmo e rilassato.", "Mi sono sentito attivo ed energico.", "Mi sono svegliato sentendomi fresco e riposato.", "La mia vita quotidiana è stata piena di cose che mi interessano."]
  },
  text: {
    it: { kicker: "Benessere", title: "Come sono andate le ultime due settimane?", lede: "5 domande, 1 minuto. Il WHO-5 dell'Organizzazione Mondiale della Sanità è la misura di benessere più breve e diffusa.", meta: ["5 domande", "~1 minuto"], instr: "Per ogni frase indica con quale frequenza ti sei sentito così <b>nelle ultime due settimane</b>.", how: "Il punteggio grezzo (0–25) viene moltiplicato per 4: 0 è il peggior benessere immaginabile, 100 il migliore. Sotto 50 il benessere è ridotto e vale la pena approfondire; 28 o meno è la soglia usata per lo screening della depressione. Nella popolazione generale la media è intorno a 60–70.", cite: "WHO (1998). Wellbeing measures in primary health care / The DepCare Project. Psychiatric Research Unit, WHO Collaborating Centre, Hillerød. Pubblico dominio." },
    en: { kicker: "Well-being", title: "How have the last two weeks been?", lede: "5 questions, 1 minute. The World Health Organization's WHO-5 is the shortest and most widely used well-being measure.", meta: ["5 questions", "~1 minute"], instr: "For each statement, indicate how often you have felt that way <b>over the last two weeks</b>.", how: "The raw score (0–25) is multiplied by 4: 0 is the worst imaginable well-being, 100 the best. Below 50 well-being is reduced and worth looking into; 28 or less is the threshold used to screen for depression. The general-population mean is around 60–70.", cite: "WHO (1998). Wellbeing measures in primary health care / The DepCare Project. Psychiatric Research Unit, WHO Collaborating Centre, Hillerød. Public domain." }
  },
  main: "tot",
  scales: [{ key: "tot", name: { it: "Benessere", en: "Well-being" }, items: [1,2,3,4,5], mode: "sum", multiply: 4, range: [0, 100],
    bands: [
      { max: 28, name: { it: "Molto basso", en: "Very low" }, text: { it: "Sotto la soglia di screening: nelle ultime due settimane il benessere è stato molto scarso. Non è una diagnosi, ma è il punto in cui i medici consigliano di parlarne con qualcuno.", en: "Below the screening threshold: well-being over the last two weeks has been very poor. Not a diagnosis, but the point at which clinicians advise talking to someone." } },
      { max: 50, name: { it: "Ridotto", en: "Reduced" }, text: { it: "Benessere ridotto: qualcosa ha pesato in queste due settimane. Vale la pena capire cosa e, se dura, chiedere aiuto.", en: "Reduced well-being: something has weighed on you these two weeks. Worth understanding what, and asking for help if it lasts." } },
      { max: 72, name: { it: "Nella media", en: "Average" }, text: { it: "Nella fascia della popolazione generale: giornate con alti e bassi, complessivamente in equilibrio.", en: "In the general-population range: days with ups and downs, overall balanced." } },
      { max: 100, name: { it: "Alto", en: "High" }, text: { it: "Due settimane buone: energia, calma e interesse per le cose. Tienitelo stretto.", en: "Two good weeks: energy, calm and interest in things. Hold on to it." } }
    ] }]
};
