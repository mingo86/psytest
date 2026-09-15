/* Satisfaction With Life Scale (Diener, Emmons, Larsen & Griffin 1985) — libero. IT: Di Fabio & Gori (2016). */
window.PSY_TESTS = window.PSY_TESTS || {};
PSY_TESTS.swls = {
  code: "SWLS", theme: "sun", n: 5,
  labels: {
    en: ["Strongly disagree", "Disagree", "Slightly disagree", "Neither agree nor disagree", "Slightly agree", "Agree", "Strongly agree"],
    it: ["Fortemente in disaccordo", "In disaccordo", "Leggermente in disaccordo", "Né d'accordo né in disaccordo", "Leggermente d'accordo", "D'accordo", "Fortemente d'accordo"]
  },
  items: {
    en: ["In most ways my life is close to my ideal.", "The conditions of my life are excellent.", "I am satisfied with my life.", "So far I have gotten the important things I want in life.", "If I could live my life over, I would change almost nothing."],
    it: ["Per molti aspetti la mia vita è vicina al mio ideale.", "Le condizioni della mia vita sono eccellenti.", "Sono soddisfatto della mia vita.", "Finora ho ottenuto le cose importanti che voglio dalla vita.", "Se potessi rivivere la mia vita, non cambierei quasi nulla."]
  },
  text: {
    it: { kicker: "Soddisfazione per la vita", title: "Quanto sei soddisfatto della tua vita?", lede: "5 affermazioni, 1 minuto. La SWLS di Diener misura il giudizio complessivo che dai alla tua vita, non l'umore del momento.", meta: ["5 domande", "~1 minuto"], instr: "Per ogni frase indica quanto sei d'accordo. Rispondi con sincerità: non ci sono risposte giuste o sbagliate.", how: "Il punteggio va da 5 a 35. Le fasce dell'autore: 31–35 estremamente soddisfatto, 26–30 soddisfatto, 21–25 leggermente soddisfatto, 20 neutro, 15–19 leggermente insoddisfatto, 10–14 insoddisfatto, 5–9 estremamente insoddisfatto. La media nella popolazione adulta occidentale è intorno a 23–25.", cite: "Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. Journal of Personality Assessment, 49, 71-75. Uso libero." },
    en: { kicker: "Life satisfaction", title: "How satisfied are you with your life?", lede: "5 statements, 1 minute. Diener's SWLS measures your overall judgement of your life, not today's mood.", meta: ["5 questions", "~1 minute"], instr: "For each statement, indicate how much you agree. Be honest: there are no right or wrong answers.", how: "The score runs from 5 to 35. The author's bands: 31–35 extremely satisfied, 26–30 satisfied, 21–25 slightly satisfied, 20 neutral, 15–19 slightly dissatisfied, 10–14 dissatisfied, 5–9 extremely dissatisfied. The Western adult average is around 23–25.", cite: "Diener, E., Emmons, R. A., Larsen, R. J., & Griffin, S. (1985). The Satisfaction With Life Scale. Journal of Personality Assessment, 49, 71-75. Free to use." }
  },
  main: "tot",
  scales: [{ key: "tot", name: { it: "Soddisfazione", en: "Satisfaction" }, items: [1,2,3,4,5], mode: "sum", range: [5, 35],
    bands: [
      { max: 9, name: { it: "Estremamente insoddisfatto", en: "Extremely dissatisfied" }, text: { it: "La tua vita, oggi, è molto lontana da come la vorresti. Spesso dietro c'è un problema concreto e recente (salute, lavoro, relazioni): vale la pena guardarlo da vicino, anche con un aiuto.", en: "Your life today is very far from how you would want it. Often there is a concrete, recent problem behind this (health, work, relationships): worth looking at closely, with help if needed." } },
      { max: 14, name: { it: "Insoddisfatto", en: "Dissatisfied" }, text: { it: "Diverse aree della tua vita non vanno come vorresti. Individuare quale pesa di più è il primo passo.", en: "Several areas of your life are not going as you would like. Identifying which weighs most is the first step." } },
      { max: 19, name: { it: "Leggermente insoddisfatto", en: "Slightly dissatisfied" }, text: { it: "Qualcosa non torna, ma nel complesso regge: c'è un'area in cui vorresti di più.", en: "Something is off, but overall it holds: there is an area where you want more." } },
      { max: 20, name: { it: "Neutro", en: "Neutral" }, text: { it: "Né soddisfatto né insoddisfatto: una vita che va, senza entusiasmo e senza grandi pesi.", en: "Neither satisfied nor dissatisfied: a life that goes on, without enthusiasm and without heavy burdens." } },
      { max: 25, name: { it: "Leggermente soddisfatto", en: "Slightly satisfied" }, text: { it: "Nella media: la maggior parte delle cose va bene, con qualche area che vorresti migliorare.", en: "Average: most things are going well, with some area you would like to improve." } },
      { max: 30, name: { it: "Soddisfatto", en: "Satisfied" }, text: { it: "Sei contento della tua vita: le aree principali funzionano e quello che manca è di dettaglio.", en: "You are happy with your life: the main areas work and what is missing is detail." } },
      { max: 35, name: { it: "Estremamente soddisfatto", en: "Extremely satisfied" }, text: { it: "Ami la tua vita così com'è: raro e prezioso.", en: "You love your life as it is: rare and precious." } }
    ] }]
};
