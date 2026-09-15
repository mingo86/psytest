/* Rosenberg Self-Esteem Scale (Rosenberg 1965) — pubblico dominio. IT: Prezza, Trombaccia & Armento (1997). */
window.PSY_TESTS = window.PSY_TESTS || {};
PSY_TESTS.rses = {
  code: "RSES", theme: "sun", n: 10, values: [0, 1, 2, 3], reverse: [2, 5, 6, 8, 9],
  labels: {
    en: ["Strongly disagree", "Disagree", "Agree", "Strongly agree"],
    it: ["Fortemente in disaccordo", "In disaccordo", "D'accordo", "Fortemente d'accordo"]
  },
  items: {
    en: ["On the whole, I am satisfied with myself.", "At times I think I am no good at all.", "I feel that I have a number of good qualities.", "I am able to do things as well as most other people.", "I feel I do not have much to be proud of.", "I certainly feel useless at times.", "I feel that I'm a person of worth, at least on an equal plane with others.", "I wish I could have more respect for myself.", "All in all, I am inclined to feel that I am a failure.", "I take a positive attitude toward myself."],
    it: ["Nel complesso sono soddisfatto di me stesso.", "A volte penso di non valere niente.", "Sento di avere un certo numero di buone qualità.", "Sono capace di fare le cose come la maggior parte delle altre persone.", "Sento di non avere molto di cui andare fiero.", "Certe volte mi sento davvero inutile.", "Sento di essere una persona di valore, almeno quanto gli altri.", "Vorrei avere più rispetto per me stesso.", "Tutto sommato, tendo a pensare di essere un fallito.", "Ho un atteggiamento positivo verso me stesso."]
  },
  text: {
    it: { kicker: "Autostima", title: "Quanto ti stimi?", lede: "10 affermazioni, 1 minuto. La scala di Rosenberg è la misura dell'autostima globale più usata al mondo.", meta: ["10 domande", "~1 minuto"], instr: "Per ogni frase indica quanto sei d'accordo, pensando a come ti senti <b>in generale</b>.", how: "Il punteggio va da 0 a 30. Nella popolazione generale la maggior parte delle persone sta tra 15 e 25; sotto 15 l'autostima è bassa. Cinque affermazioni sono invertite. È un'istantanea di come ti vedi, non un giudizio su quanto vali.", cite: "Rosenberg, M. (1965). Society and the adolescent self-image. Princeton University Press. Versione italiana: Prezza, Trombaccia & Armento (1997). Strumento di pubblico dominio." },
    en: { kicker: "Self-esteem", title: "How much do you value yourself?", lede: "10 statements, 1 minute. The Rosenberg scale is the most widely used measure of global self-esteem.", meta: ["10 questions", "~1 minute"], instr: "For each statement, indicate how much you agree, thinking about how you feel <b>in general</b>.", how: "The score runs from 0 to 30. In the general population most people fall between 15 and 25; below 15 self-esteem is low. Five statements are reverse-keyed. It is a snapshot of how you see yourself, not a verdict on your worth.", cite: "Rosenberg, M. (1965). Society and the adolescent self-image. Princeton University Press. Public-domain instrument." }
  },
  main: "tot",
  scales: [{ key: "tot", name: { it: "Autostima", en: "Self-esteem" }, items: [1,2,3,4,5,6,7,8,9,10], mode: "sum", range: [0, 30],
    bands: [
      { max: 14, name: { it: "Bassa", en: "Low" }, text: { it: "Sotto la fascia tipica: tendi a vederti con occhi severi. L'autostima cambia con le esperienze e con il modo in cui ti parli; se pesa, un percorso con un professionista aiuta.", en: "Below the typical range: you tend to see yourself harshly. Self-esteem shifts with experience and with how you talk to yourself; if it weighs on you, working with a professional helps." } },
      { max: 25, name: { it: "Nella media", en: "Average" }, text: { it: "Nella fascia in cui sta la maggior parte delle persone: una visione di te complessivamente equilibrata, con alti e bassi normali.", en: "In the range where most people fall: an overall balanced view of yourself, with normal ups and downs." } },
      { max: 30, name: { it: "Alta", en: "High" }, text: { it: "Sopra la fascia tipica: ti vedi con fiducia e ti riconosci valore. Bene, finché resta ancorata alla realtà e non ti impedisce di ascoltare le critiche.", en: "Above the typical range: you see yourself with confidence and recognise your worth. Good, as long as it stays anchored to reality and lets you hear criticism." } }
    ] }]
};
