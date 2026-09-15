/* Cognitive Fusion Questionnaire, CFQ-7 (Gillanders et al. 2014) — libero. IT: Oppo et al. (2019). */
window.PSY_TESTS = window.PSY_TESTS || {};
PSY_TESTS.cfq = {
  code: "CFQ", theme: "teal", n: 7,
  labels: {
    en: ["Never true", "Very seldom true", "Seldom true", "Sometimes true", "Frequently true", "Almost always true", "Always true"],
    it: ["Mai vera", "Molto raramente vera", "Raramente vera", "A volte vera", "Spesso vera", "Quasi sempre vera", "Sempre vera"]
  },
  items: {
    en: ["My thoughts cause me distress or emotional pain.", "I get so caught up in my thoughts that I am unable to do the things that I most want to do.", "I over-analyse situations to the point where it's unhelpful to me.", "I struggle with my thoughts.", "I get upset with myself for having certain thoughts.", "I tend to get very entangled in my thoughts.", "It's such a struggle to let go of upsetting thoughts even when I know that letting go would be helpful."],
    it: ["I miei pensieri mi causano disagio o dolore emotivo.", "Mi faccio prendere talmente dai miei pensieri da non riuscire a fare le cose che desidero di più.", "Analizzo troppo le situazioni, al punto che non mi è utile.", "Lotto con i miei pensieri.", "Mi arrabbio con me stesso per avere certi pensieri.", "Tendo a rimanere molto intrappolato nei miei pensieri.", "Lasciar andare i pensieri che mi turbano è una tale lotta, anche quando so che lasciarli andare mi aiuterebbe."]
  },
  text: {
    it: { kicker: "Fusione cognitiva", title: "Quanto ti credono i tuoi pensieri?", lede: "7 affermazioni, 1 minuto. Il CFQ misura la «fusione cognitiva»: quanto resti intrappolato nei pensieri e li tratti come fatti. È il gemello dell'AAQ-II nel modello ACT.", meta: ["7 domande", "~1 minuto"], instr: "Per ogni frase indica <b>quanto è vera per te</b>, da 1 (mai vera) a 7 (sempre vera).", how: "Il punteggio va da 7 a 49; più è alto, più i pensieri ti catturano. Nei campioni di popolazione generale la media è intorno a 20–24, nei campioni clinici intorno a 35. Non esistono soglie diagnostiche: le fasce qui sono orientative. Fusione alta e evitamento esperienziale (AAQ-II) alto tendono ad andare insieme.", cite: "Gillanders, D. T., et al. (2014). The development and initial validation of the Cognitive Fusion Questionnaire. Behavior Therapy, 45, 83-101. Versione italiana: Oppo et al. (2019). Uso libero." },
    en: { kicker: "Cognitive fusion", title: "How much do your thoughts run you?", lede: "7 statements, 1 minute. The CFQ measures “cognitive fusion”: how entangled you get in your thoughts and how much you treat them as facts. It is the AAQ-II's twin in the ACT model.", meta: ["7 questions", "~1 minute"], instr: "For each statement, indicate <b>how true it is for you</b>, from 1 (never true) to 7 (always true).", how: "The score runs from 7 to 49; the higher, the more your thoughts capture you. In general-population samples the mean is around 20–24, in clinical samples around 35. There are no diagnostic thresholds: the bands here are orientative. High fusion and high experiential avoidance (AAQ-II) tend to go together.", cite: "Gillanders, D. T., et al. (2014). The development and initial validation of the Cognitive Fusion Questionnaire. Behavior Therapy, 45, 83-101. Free to use." }
  },
  main: "tot",
  scales: [{ key: "tot", name: { it: "Fusione cognitiva", en: "Cognitive fusion" }, items: [1,2,3,4,5,6,7], mode: "sum", range: [7, 49],
    bands: [
      { max: 20, name: { it: "Bassa", en: "Low" }, text: { it: "I pensieri passano senza catturarti troppo: riesci a vederli come pensieri, non come verità.", en: "Thoughts pass without capturing you too much: you can see them as thoughts, not truths." } },
      { max: 30, name: { it: "Nella media", en: "Average" }, text: { it: "Come la maggior parte delle persone: a volte resti impigliato, a volte riesci a prendere distanza.", en: "Like most people: sometimes you get tangled, sometimes you manage to step back." } },
      { max: 40, name: { it: "Alta", en: "High" }, text: { it: "I pensieri ti trattengono spesso e li vivi come fatti. Nel modello ACT è il punto su cui si lavora per primo: imparare a osservarli («sto avendo il pensiero che…») invece di combatterli.", en: "Thoughts often hold you and you experience them as facts. In the ACT model this is where the work starts: learning to observe them (“I'm having the thought that…”) instead of fighting them." } },
      { max: 49, name: { it: "Molto alta", en: "Very high" }, text: { it: "Nella fascia dei campioni clinici: la lotta con i pensieri occupa molto spazio. Parlarne con un professionista formato in ACT o terapia cognitiva è la mossa sensata.", en: "In the range of clinical samples: the struggle with thoughts takes up a lot of room. Talking to a professional trained in ACT or cognitive therapy is the sensible move." } }
    ] }]
};
