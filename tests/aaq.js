/* ============================================================
   PSYTEST · MODULO 02 — AAQ-II (dati e scoring)
   Acceptance and Action Questionnaire – II
   Bond, F. W., Hayes, S. C., et al. (2011). Behavior Therapy, 42, 676-688.
   Versione italiana: Pennato, Berrocal, Bernini & Rivas (2013), Journal of
   Psychopathology (item IT forniti dall'utente). EN = originale.
   FR/ES/PT/DE: traduzioni proprie, non validate.
   7 item, scala 1 (mai vera) – 7 (sempre vera), somma 7-49; più alto =
   più evitamento esperienziale / rigidità psicologica. Nessun item invertito.
   Soglie di ricerca: media pop. generale ~18-20; >24 disagio clinicamente
   rilevante; >28 probabile disturbo. Non sono soglie diagnostiche.
   ============================================================ */
(function () {
  const ITEMS = {
    it: [
      "Le mie esperienze e i miei ricordi dolorosi mi rendono difficile vivere una vita che apprezzerei.",
      "Ho paura dei miei sentimenti.",
      "Mi preoccupo di non essere capace di controllare le mie preoccupazioni e i miei sentimenti.",
      "I miei ricordi dolorosi mi impediscono di avere una vita soddisfacente.",
      "Le emozioni causano problemi nella mia vita.",
      "Mi sembra che la maggior parte delle persone gestisca la propria vita meglio di me.",
      "Le preoccupazioni mi ostacolano nel raggiungere il successo."
    ],
    en: [
      "My painful experiences and memories make it difficult for me to live a life that I would value.",
      "I'm afraid of my feelings.",
      "I worry about not being able to control my worries and feelings.",
      "My painful memories prevent me from having a fulfilling life.",
      "Emotions cause problems in my life.",
      "It seems like most people are handling their lives better than I am.",
      "Worries get in the way of my success."
    ],
    fr: [
      "Mes expériences et mes souvenirs douloureux me rendent difficile de vivre une vie qui aurait de la valeur pour moi.",
      "J'ai peur de mes sentiments.",
      "Je m'inquiète de ne pas être capable de contrôler mes inquiétudes et mes sentiments.",
      "Mes souvenirs douloureux m'empêchent d'avoir une vie épanouissante.",
      "Les émotions causent des problèmes dans ma vie.",
      "J'ai l'impression que la plupart des gens gèrent leur vie mieux que moi.",
      "Les inquiétudes m'empêchent de réussir."
    ],
    es: [
      "Mis experiencias y recuerdos dolorosos me dificultan vivir una vida que valoraría.",
      "Tengo miedo de mis sentimientos.",
      "Me preocupa no ser capaz de controlar mis preocupaciones y mis sentimientos.",
      "Mis recuerdos dolorosos me impiden tener una vida plena.",
      "Las emociones causan problemas en mi vida.",
      "Me parece que la mayoría de la gente maneja su vida mejor que yo.",
      "Las preocupaciones se interponen en mi camino hacia el éxito."
    ],
    pt: [
      "Minhas experiências e lembranças dolorosas tornam difícil viver uma vida que eu valorizaria.",
      "Tenho medo dos meus sentimentos.",
      "Preocupo-me em não conseguir controlar minhas preocupações e meus sentimentos.",
      "Minhas lembranças dolorosas me impedem de ter uma vida satisfatória.",
      "As emoções causam problemas na minha vida.",
      "Parece que a maioria das pessoas lida com a própria vida melhor do que eu.",
      "As preocupações atrapalham o meu sucesso."
    ],
    de: [
      "Meine schmerzhaften Erfahrungen und Erinnerungen machen es mir schwer, ein Leben zu führen, das ich wertschätzen würde.",
      "Ich habe Angst vor meinen Gefühlen.",
      "Ich mache mir Sorgen, meine Sorgen und Gefühle nicht kontrollieren zu können.",
      "Meine schmerzhaften Erinnerungen hindern mich daran, ein erfülltes Leben zu führen.",
      "Gefühle verursachen Probleme in meinem Leben.",
      "Mir scheint, die meisten Menschen kommen mit ihrem Leben besser zurecht als ich.",
      "Sorgen stehen meinem Erfolg im Weg."
    ]
  };

  // etichette della scala 1-7
  const SCALE = {
    it: ["mai vera", "molto raramente vera", "raramente vera", "a volte vera", "spesso vera", "quasi sempre vera", "sempre vera"],
    en: ["never true", "very seldom true", "seldom true", "sometimes true", "frequently true", "almost always true", "always true"],
    fr: ["jamais vrai", "très rarement vrai", "rarement vrai", "parfois vrai", "souvent vrai", "presque toujours vrai", "toujours vrai"],
    es: ["nunca es verdad", "muy rara vez es verdad", "rara vez es verdad", "a veces es verdad", "frecuentemente es verdad", "casi siempre es verdad", "siempre es verdad"],
    pt: ["nunca é verdade", "muito raramente é verdade", "raramente é verdade", "às vezes é verdade", "frequentemente é verdade", "quase sempre é verdade", "sempre é verdade"],
    de: ["nie wahr", "sehr selten wahr", "selten wahr", "manchmal wahr", "häufig wahr", "fast immer wahr", "immer wahr"]
  };

  // fasce (soglie di ricerca) e testi
  const BANDS = {
    it: {
      low: {n: "Basso", t: "Evitamento esperienziale contenuto, sotto la media della popolazione generale."},
      avg: {n: "Nella media", t: "Nella media della popolazione generale (18-23)."},
      high: {n: "Sopra la soglia", t: "Sopra 24: in letteratura è la zona associata a disagio rilevante. Non è una diagnosi, è un segnale che vale la pena guardare."},
      vhigh: {n: "Zona clinica", t: "Sopra 28: la zona che negli studi si sovrappone a disturbi d'ansia o dell'umore. Se ti riconosci, parlarne con un professionista è la mossa sensata."},
      top: idx => `Item con punteggio più alto: ${idx}. Sono i punti dove il modello ACT direbbe di guardare per primi: che cosa stai evitando lì, e a che prezzo.`,
      none: "Nessun item sopra 4: nessuna area di evitamento marcato."
    },
    en: {
      low: {n: "Low", t: "Contained experiential avoidance, below the general-population average."},
      avg: {n: "Average", t: "Within the general-population average (18-23)."},
      high: {n: "Above threshold", t: "Above 24: in the literature this is the zone associated with meaningful distress. Not a diagnosis — a signal worth looking at."},
      vhigh: {n: "Clinical range", t: "Above 28: the zone that overlaps with anxiety or mood disorders in studies. If you recognise yourself here, talking to a professional is the sensible move."},
      top: idx => `Highest-scoring items: ${idx}. These are where the ACT model would look first: what are you avoiding there, and at what cost?`,
      none: "No item above 4: no area of marked avoidance."
    },
    fr: {
      low: {n: "Bas", t: "Évitement expérientiel contenu, sous la moyenne de la population générale."},
      avg: {n: "Dans la moyenne", t: "Dans la moyenne de la population générale (18-23)."},
      high: {n: "Au-dessus du seuil", t: "Au-dessus de 24 : dans la littérature, c'est la zone associée à une détresse notable. Ce n'est pas un diagnostic, c'est un signal qui mérite un regard."},
      vhigh: {n: "Zone clinique", t: "Au-dessus de 28 : la zone qui, dans les études, recoupe les troubles anxieux ou de l'humeur. Si tu t'y reconnais, en parler à un professionnel est la démarche sensée."},
      top: idx => `Items au score le plus élevé : ${idx}. C'est là que le modèle ACT regarderait en premier : qu'est-ce que tu évites là, et à quel prix ?`,
      none: "Aucun item au-dessus de 4 : pas de zone d'évitement marqué."
    },
    es: {
      low: {n: "Bajo", t: "Evitación experiencial contenida, por debajo de la media de la población general."},
      avg: {n: "En la media", t: "En la media de la población general (18-23)."},
      high: {n: "Por encima del umbral", t: "Por encima de 24: en la literatura es la zona asociada a malestar relevante. No es un diagnóstico, es una señal que merece atención."},
      vhigh: {n: "Zona clínica", t: "Por encima de 28: la zona que en los estudios se solapa con trastornos de ansiedad o del estado de ánimo. Si te reconoces, hablarlo con un profesional es lo sensato."},
      top: idx => `Ítems con la puntuación más alta: ${idx}. Son los puntos donde el modelo ACT miraría primero: qué estás evitando ahí, y a qué precio.`,
      none: "Ningún ítem por encima de 4: ninguna área de evitación marcada."
    },
    pt: {
      low: {n: "Baixo", t: "Evitação experiencial contida, abaixo da média da população geral."},
      avg: {n: "Na média", t: "Na média da população geral (18-23)."},
      high: {n: "Acima do limiar", t: "Acima de 24: na literatura é a zona associada a sofrimento relevante. Não é diagnóstico, é um sinal que vale a pena olhar."},
      vhigh: {n: "Zona clínica", t: "Acima de 28: a zona que nos estudos se sobrepõe a transtornos de ansiedade ou do humor. Se você se reconhece, conversar com um profissional é o passo sensato."},
      top: idx => `Itens com pontuação mais alta: ${idx}. São os pontos onde o modelo ACT olharia primeiro: o que você está evitando ali, e a que preço.`,
      none: "Nenhum item acima de 4: nenhuma área de evitação marcada."
    },
    de: {
      low: {n: "Niedrig", t: "Geringe Erlebnisvermeidung, unter dem Durchschnitt der Allgemeinbevölkerung."},
      avg: {n: "Durchschnitt", t: "Im Durchschnitt der Allgemeinbevölkerung (18-23)."},
      high: {n: "Über der Schwelle", t: "Über 24: in der Literatur der Bereich, der mit deutlicher Belastung einhergeht. Keine Diagnose, aber ein Signal, das einen Blick wert ist."},
      vhigh: {n: "Klinischer Bereich", t: "Über 28: der Bereich, der sich in Studien mit Angst- oder affektiven Störungen überschneidet. Wenn du dich wiedererkennst, ist ein Gespräch mit einer Fachperson der vernünftige Schritt."},
      top: idx => `Items mit dem höchsten Wert: ${idx}. Dort würde das ACT-Modell zuerst hinschauen: was vermeidest du da, und zu welchem Preis?`,
      none: "Kein Item über 4: kein Bereich ausgeprägter Vermeidung."
    }
  };

  function score(answers) {
    const tot = answers.reduce((a, b) => a + b, 0);
    const band = tot <= 17 ? "low" : tot <= 23 ? "avg" : tot <= 28 ? "high" : "vhigh";
    const max = Math.max(...answers);
    const top = max >= 5 ? answers.map((v, i) => v === max ? i + 1 : null).filter(Boolean) : [];
    return { tot, band, max, top };
  }

  window.AAQ = { ITEMS, SCALE, BANDS, score, MIN: 7, MAX: 49, MEAN: 19 };
})();
