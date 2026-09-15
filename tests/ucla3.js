/* UCLA Loneliness Scale, versione a 3 item (Hughes, Waite, Hawkley & Cacioppo 2004) — libero. */
window.PSY_TESTS = window.PSY_TESTS || {};
PSY_TESTS.ucla3 = {
  code: "UCLA-3", theme: "ocean", n: 3,
  labels: { en: ["Hardly ever", "Some of the time", "Often"], it: ["Quasi mai", "Qualche volta", "Spesso"] },
  items: {
    en: ["How often do you feel that you lack companionship?", "How often do you feel left out?", "How often do you feel isolated from others?"],
    it: ["Quanto spesso senti che ti manca compagnia?", "Quanto spesso ti senti escluso?", "Quanto spesso ti senti isolato dagli altri?"]
  },
  text: {
    it: { kicker: "Solitudine", title: "Quanto ti senti solo?", lede: "3 domande, 30 secondi. La versione breve della scala UCLA, usata nei grandi studi sull'invecchiamento e sulla salute.", meta: ["3 domande", "~30 secondi"], instr: "Per ogni domanda indica quanto spesso ti senti così, pensando all'<b>ultimo periodo</b>.", how: "Il punteggio va da 3 a 9. Negli studi di popolazione 6 o più viene considerato «solitudine»; la media è intorno a 4. La solitudine percepita è diversa dall'essere soli: si può stare bene da soli e sentirsi soli in mezzo agli altri.", cite: "Hughes, M. E., Waite, L. J., Hawkley, L. C., & Cacioppo, J. T. (2004). A short scale for measuring loneliness in large surveys. Research on Aging, 26, 655-672. Uso libero." },
    en: { kicker: "Loneliness", title: "How lonely do you feel?", lede: "3 questions, 30 seconds. The short version of the UCLA scale, used in large studies on ageing and health.", meta: ["3 questions", "~30 seconds"], instr: "For each question, indicate how often you feel that way, thinking about the <b>recent period</b>.", how: "The score runs from 3 to 9. In population studies 6 or more is considered “lonely”; the mean is around 4. Perceived loneliness is different from being alone: one can be fine alone and feel lonely among others.", cite: "Hughes, M. E., Waite, L. J., Hawkley, L. C., & Cacioppo, J. T. (2004). A short scale for measuring loneliness in large surveys. Research on Aging, 26, 655-672. Free to use." }
  },
  main: "tot",
  scales: [{ key: "tot", name: { it: "Solitudine", en: "Loneliness" }, items: [1,2,3], mode: "sum", range: [3, 9],
    bands: [
      { max: 3, name: { it: "Nessuna", en: "None" }, text: { it: "Non ti senti solo: compagnia e appartenenza ci sono.", en: "You don't feel lonely: companionship and belonging are there." } },
      { max: 5, name: { it: "Bassa", en: "Low" }, text: { it: "Qualche momento di solitudine, come capita a quasi tutti.", en: "Some moments of loneliness, as happens to almost everyone." } },
      { max: 9, name: { it: "Solitudine", en: "Lonely" }, text: { it: "Sopra la soglia usata negli studi: la mancanza di legami pesa. La solitudine cronica incide sulla salute quanto altri fattori di rischio noti; investire in un legame, anche piccolo, è la cosa più efficace.", en: "Above the threshold used in studies: the lack of ties weighs on you. Chronic loneliness affects health as much as other known risk factors; investing in one tie, even a small one, is the most effective thing." } }
    ] }]
};
