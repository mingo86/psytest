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

/* ---- definizione per test.html?t=aaq (render dedicato) ---- */
(function(){
  const Q=window.AAQ; const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const TEXT={"it":{"title":"Quanto ti pesano le emozioni?","lede":"7 domande, 2 minuti. L'AAQ-II misura l'evitamento esperienziale: quanto emozioni, ricordi e preoccupazioni ti ostacolano. È la misura usata nel modello ACT.","meta":["7 domande","~2 minuti","6 lingue","Nessun dato inviato"],"instr":"Per ogni frase scegli <b>quanto è vera per te</b>, da 1 (mai vera) a 7 (sempre vera). Rispondi sull'<b>ultimo mese</b>, non su come vorresti essere.","how":"Il punteggio va da 7 a 49; più è alto, più evitamento esperienziale e rigidità psicologica. Nella popolazione generale la media è intorno a 18-20. Soglie usate in letteratura: sopra 24 è associato a livelli clinicamente rilevanti di disagio; sopra 28 probabile disturbo. Sono soglie di ricerca, non diagnosi. Critica nota: il questionario correla molto con il nevroticismo e con il disagio in generale, quindi misura anche «quanto stai male adesso», non solo la flessibilità. Se lo rifai tra un mese e cambia, è normale.","cite":"Bond, F. W., Hayes, S. C., et al. (2011). Behavior Therapy, 42, 676-688. Adattamento italiano: Pennato, Berrocal, Bernini & Rivas (2013), Journal of Psychopathology. Strumento di pubblico dominio per uso non commerciale; non è una diagnosi."},"en":{"title":"How much do your emotions weigh on you?","lede":"7 questions, 2 minutes. The AAQ-II measures experiential avoidance: how much emotions, memories and worries get in your way. It is the measure used in the ACT model.","meta":["7 questions","~2 minutes","6 languages","Nothing sent"],"instr":"For each statement, choose <b>how true it is for you</b>, from 1 (never true) to 7 (always true). Answer about the <b>last month</b>, not about how you would like to be.","how":"The score runs from 7 to 49; the higher, the more experiential avoidance and psychological inflexibility. In the general population the mean is around 18-20. Thresholds used in the literature: above 24 is associated with clinically meaningful distress; above 28, probable disorder. These are research thresholds, not diagnoses. A known criticism: the questionnaire correlates strongly with neuroticism and with distress in general, so it also measures “how bad you feel right now”, not only flexibility. If you retake it in a month and it changes, that is normal.","cite":"Bond, F. W., Hayes, S. C., et al. (2011). Behavior Therapy, 42, 676-688. Italian adaptation: Pennato, Berrocal, Bernini & Rivas (2013), Journal of Psychopathology. Public-domain instrument for non-commercial use; not a diagnosis."},"fr":{"title":"À quel point tes émotions te pèsent ?","lede":"7 questions, 2 minutes. L'AAQ-II mesure l'évitement expérientiel : à quel point les émotions, les souvenirs et les inquiétudes te font obstacle. C'est la mesure utilisée dans le modèle ACT.","meta":["7 questions","~2 minutes","6 langues","Rien n'est envoyé"],"instr":"Pour chaque phrase, choisis <b>à quel point elle est vraie pour toi</b>, de 1 (jamais vrai) à 7 (toujours vrai). Réponds sur le <b>dernier mois</b>, pas sur ce que tu voudrais être.","how":"Le score va de 7 à 49 ; plus il est élevé, plus l'évitement expérientiel et la rigidité psychologique sont marqués. Dans la population générale, la moyenne se situe autour de 18-20. Seuils utilisés dans la littérature : au-dessus de 24, détresse cliniquement notable ; au-dessus de 28, trouble probable. Ce sont des seuils de recherche, pas des diagnostics. Critique connue : le questionnaire corrèle fortement avec le névrosisme et la détresse en général, donc il mesure aussi « à quel point tu vas mal en ce moment », pas seulement la flexibilité. Si tu le refais dans un mois et qu'il change, c'est normal.","cite":"Bond, F. W., Hayes, S. C., et al. (2011). Behavior Therapy, 42, 676-688. Adaptation italienne : Pennato, Berrocal, Bernini & Rivas (2013), Journal of Psychopathology. Instrument du domaine public pour usage non commercial ; ce n'est pas un diagnostic."},"es":{"title":"¿Cuánto te pesan las emociones?","lede":"7 preguntas, 2 minutos. El AAQ-II mide la evitación experiencial: cuánto te obstaculizan las emociones, los recuerdos y las preocupaciones. Es la medida usada en el modelo ACT.","meta":["7 preguntas","~2 minutos","6 idiomas","No se envía nada"],"instr":"Para cada frase, elige <b>cuánto es verdad para ti</b>, de 1 (nunca es verdad) a 7 (siempre es verdad). Responde sobre el <b>último mes</b>, no sobre cómo te gustaría ser.","how":"La puntuación va de 7 a 49; cuanto más alta, más evitación experiencial y rigidez psicológica. En la población general la media ronda 18-20. Umbrales usados en la literatura: por encima de 24 se asocia a malestar clínicamente relevante; por encima de 28, trastorno probable. Son umbrales de investigación, no diagnósticos. Crítica conocida: el cuestionario correlaciona mucho con el neuroticismo y con el malestar en general, así que también mide «cuánto estás mal ahora», no solo la flexibilidad. Si lo repites dentro de un mes y cambia, es normal.","cite":"Bond, F. W., Hayes, S. C., et al. (2011). Behavior Therapy, 42, 676-688. Adaptación italiana: Pennato, Berrocal, Bernini & Rivas (2013), Journal of Psychopathology. Instrumento de dominio público para uso no comercial; no es un diagnóstico."},"pt":{"title":"Quanto as emoções pesam para você?","lede":"7 perguntas, 2 minutos. O AAQ-II mede a evitação experiencial: o quanto emoções, lembranças e preocupações atrapalham você. É a medida usada no modelo ACT.","meta":["7 perguntas","~2 minutos","6 idiomas","Nada é enviado"],"instr":"Para cada frase, escolha <b>o quanto ela é verdadeira para você</b>, de 1 (nunca é verdade) a 7 (sempre é verdade). Responda sobre o <b>último mês</b>, não sobre como gostaria de ser.","how":"A pontuação vai de 7 a 49; quanto mais alta, mais evitação experiencial e rigidez psicológica. Na população geral a média fica em torno de 18-20. Limiares usados na literatura: acima de 24 está associado a sofrimento clinicamente relevante; acima de 28, provável transtorno. São limiares de pesquisa, não diagnósticos. Crítica conhecida: o questionário correlaciona muito com o neuroticismo e com o sofrimento em geral, então mede também «o quanto você está mal agora», não só a flexibilidade. Se refizer daqui a um mês e mudar, é normal.","cite":"Bond, F. W., Hayes, S. C., et al. (2011). Behavior Therapy, 42, 676-688. Adaptação italiana: Pennato, Berrocal, Bernini & Rivas (2013), Journal of Psychopathology. Instrumento de domínio público para uso não comercial; não é um diagnóstico."},"de":{"title":"Wie sehr belasten dich deine Gefühle?","lede":"7 Fragen, 2 Minuten. Der AAQ-II misst Erlebnisvermeidung: wie sehr Gefühle, Erinnerungen und Sorgen dir im Weg stehen. Es ist das Maß aus dem ACT-Modell.","meta":["7 Fragen","~2 Minuten","6 Sprachen","Nichts wird gesendet"],"instr":"Wähle bei jeder Aussage, <b>wie sehr sie auf dich zutrifft</b>, von 1 (nie wahr) bis 7 (immer wahr). Antworte für den <b>letzten Monat</b>, nicht dafür, wie du gern wärst.","how":"Der Wert reicht von 7 bis 49; je höher, desto mehr Erlebnisvermeidung und psychologische Inflexibilität. In der Allgemeinbevölkerung liegt der Mittelwert um 18-20. In der Literatur verwendete Schwellen: über 24 geht mit klinisch relevanter Belastung einher; über 28 wahrscheinliche Störung. Das sind Forschungsschwellen, keine Diagnosen. Bekannte Kritik: der Fragebogen korreliert stark mit Neurotizismus und mit Belastung allgemein, misst also auch „wie schlecht es dir gerade geht“, nicht nur Flexibilität. Wenn er in einem Monat anders ausfällt, ist das normal.","cite":"Bond, F. W., Hayes, S. C., et al. (2011). Behavior Therapy, 42, 676-688. Italienische Adaptation: Pennato, Berrocal, Bernini & Rivas (2013), Journal of Psychopathology. Gemeinfreies Instrument für nicht-kommerzielle Nutzung; keine Diagnose."}};
  const R={"it":{"of":"su 49","profile":"Le sette domande","bands":{"low":"≤17 · basso","avg":"18–23 · media","high":"24–28 · soglia","vhigh":">28 · clinica"},"summary":r=>`Il mio AAQ-II (flessibilità psicologica): ${r.tot}/49 — ${Q.BANDS.it[r.band].n}`},"en":{"of":"out of 49","profile":"The seven questions","bands":{"low":"≤17 · low","avg":"18–23 · average","high":"24–28 · threshold","vhigh":">28 · clinical"},"summary":r=>`My AAQ-II (psychological flexibility): ${r.tot}/49 — ${Q.BANDS.en[r.band].n}`},"fr":{"of":"sur 49","profile":"Les sept questions","bands":{"low":"≤17 · bas","avg":"18–23 · moyenne","high":"24–28 · seuil","vhigh":">28 · clinique"},"summary":r=>`Mon AAQ-II (flexibilité psychologique) : ${r.tot}/49 — ${Q.BANDS.fr[r.band].n}`},"es":{"of":"de 49","profile":"Las siete preguntas","bands":{"low":"≤17 · bajo","avg":"18–23 · media","high":"24–28 · umbral","vhigh":">28 · clínica"},"summary":r=>`Mi AAQ-II (flexibilidad psicológica): ${r.tot}/49 — ${Q.BANDS.es[r.band].n}`},"pt":{"of":"de 49","profile":"As sete perguntas","bands":{"low":"≤17 · baixo","avg":"18–23 · média","high":"24–28 · limiar","vhigh":">28 · clínica"},"summary":r=>`Meu AAQ-II (flexibilidade psicológica): ${r.tot}/49 — ${Q.BANDS.pt[r.band].n}`},"de":{"of":"von 49","profile":"Die sieben Fragen","bands":{"low":"≤17 · niedrig","avg":"18–23 · Mittel","high":"24–28 · Schwelle","vhigh":">28 · klinisch"},"summary":r=>`Mein AAQ-II (psychologische Flexibilität): ${r.tot}/49 — ${Q.BANDS.de[r.band].n}`}};
  function render(r,L,answers){
    const u=R[L]||R.it, Bd=Q.BANDS[L]||Q.BANDS.en, C=(window.PSY_GEN&&PSY_GEN.COMMON[L])||PSY_GEN.COMMON.it;
    const pos=((r.tot-7)/42*100).toFixed(1)+"%";
    const html=`
      <div class="card"><div class="k">${esc(C.scoreK)}</div>
        <div class="score"><div class="bign">${r.tot}<small>${esc(u.of)}</small></div><div><p class="bandname">${esc(Bd[r.band].n)}</p><p class="bandtxt">${esc(Bd[r.band].t)}</p></div></div>
        <div class="scale" style="background:linear-gradient(90deg,var(--green) 0 24%,var(--lilac) 24% 40.5%,var(--yellow) 40.5% 50%,var(--pink) 50% 100%)"><em style="left:${pos}"></em></div>
        <div class="scale-l"><span>7</span><span>17</span><span>24</span><span>28</span><span>49</span></div>
        <div class="bands" style="grid-template-columns:repeat(4,1fr)">${["low","avg","high","vhigh"].map(k=>`<span${r.band===k?' class="on"':""}>${esc(u.bands[k])}</span>`).join("")}</div></div>
      <div class="card"><div class="k">${esc(u.profile)}</div>
        <div class="items">${answers.map((v,i)=>`<div class="b${r.top.includes(i+1)?" top":""}" style="height:${(v/7*100).toFixed(0)}%"><span>${v}</span></div>`).join("")}</div>
        <div class="itemsl">${answers.map((v,i)=>`<span>${i+1}</span>`).join("")}</div>
        <p class="desc">${esc(r.top.length?Bd.top(r.top.join(", ")):Bd.none)}</p></div>`;
    return {html, summary:u.summary(r), headline:r.tot+" "+u.of+" — "+Bd[r.band].n, sub:Bd[r.band].t};
  }
  window.PSY_TESTS=window.PSY_TESTS||{};
  PSY_TESTS.aaq={code:"AAQ-II",theme:"teal",n:7,labels:Q.SCALE,items:Q.ITEMS,text:TEXT,scales:[],score:Q.score,render};
})();

/* ---- Approfondimento (IT/EN/PT; le altre lingue ricadono su IT) ---- */
PSY_TESTS.aaq.approf = {
  it: {
    title: "Evitare l'esperienza: il cuore dell'ACT",
    intro: `<p>L'AAQ-II è la misura simbolo dell'<span class="t" data-tip="Acceptance and Commitment Therapy: terapia della terza ondata cognitivo-comportamentale, ideata da Steven Hayes. Non punta a eliminare i pensieri negativi ma a cambiare il rapporto con essi e ad agire secondo i propri valori.">ACT</span> di <span class="t" data-tip="Steven Hayes, psicologo statunitense, fondatore dell'ACT e della teoria del linguaggio che le sta sotto (la Relational Frame Theory).">Steven Hayes</span>. Il concetto centrale è l'<span class="t" data-tip="Evitamento esperienziale: lo sforzo di controllare, sopprimere o scacciare esperienze interne sgradite (pensieri, emozioni, ricordi, sensazioni) anche quando questo sforzo costa più del sintomo stesso.">evitamento esperienziale</span>: la lotta per non provare ciò che si prova. Il suo opposto è la <span class="t" data-tip="Flessibilità psicologica: restare in contatto con il momento presente e agire secondo i propri valori anche in presenza di pensieri ed emozioni scomodi. È l'obiettivo dell'ACT.">flessibilità psicologica</span>. Sotto c'è la <span class="t" data-tip="Relational Frame Theory: la teoria del linguaggio alla base dell'ACT. Spiega perché il pensiero verbale ci lega a contenuti dolorosi e perché combatterli tende a rinforzarli.">Relational Frame Theory</span>, l'idea che il linguaggio stesso ci incateni ai contenuti dolorosi.</p>`,
    blocks: [
      { h: "Cos'è l'evitamento esperienziale", html: `<p>È il tentativo di non provare ciò che si prova: distrarsi, reprimere, rimuginare per «risolvere», riempire i vuoti, evitare i luoghi che risvegliano un ricordo. Il paradosso è che il controllo, applicato al mondo interno, si ritorce: più cerchi di non pensare a una cosa, più torna. È l'<span class="t" data-tip="Esperimento dell'orso bianco di Daniel Wegner: a chi viene chiesto di non pensare a un orso bianco, l'orso torna in mente più spesso. Mostra l'effetto controproducente della soppressione dei pensieri.">effetto orso bianco</span>. Nell'ACT il problema non è il dolore, ma la lotta contro il dolore.</p>` },
      { h: "I sei processi della flessibilità", html: `<p>L'ACT organizza il lavoro in sei processi, l'<span class="t" data-tip="Hexaflex: il modello a sei processi dell'ACT, spesso disegnato come un esagono. I sei si sostengono a vicenda e insieme formano la flessibilità psicologica.">hexaflex</span>: <span class="t" data-tip="Defusione: vedere i pensieri come eventi mentali che passano, non come verità o comandi da obbedire.">defusione</span>, <b>accettazione</b>, contatto con il momento presente, <span class="t" data-tip="Sé come contesto: l'esperienza di essere l'osservatore stabile dei propri pensieri ed emozioni, non i loro contenuti mutevoli.">sé come contesto</span>, <b>valori</b> e <b>azione impegnata</b>. L'AAQ-II tocca soprattutto l'asse accettazione/evitamento; gli altri cinque processi restano fuori dal suo raggio.</p>` },
      { h: "La critica seria: flessibilità o malessere?", html: `<p>È il punto più discusso. L'AAQ-II correla molto forte con il <span class="t" data-tip="Nevroticismo: tratto della tendenza a provare emozioni negative. L'AAQ-II vi si sovrappone al punto che alcuni studiosi dubitano che misuri qualcosa di distinto.">nevroticismo</span> e con misure generiche di ansia e depressione: la sua <span class="t" data-tip="Validità discriminante: la capacità di una misura di distinguersi da costrutti vicini. È il tallone d'Achille dell'AAQ-II, che si separa poco dal disagio generale.">validità discriminante</span> è debole. Il sospetto, sollevato tra gli altri da Wolgast, è che il questionario misuri soprattutto <em>quanto stai male adesso</em>, più che una specifica inflessibilità psicologica.</p>` }
    ],
    beyond: `<ul>
      <li><b>L'agenda del controllo.</b> L'ACT distingue il dolore «pulito» (inevitabile: perdite, paura, tristezza) dal dolore «sporco», quello aggiunto dalla lotta per non sentirlo. L'evitamento moltiplica il secondo.</li>
      <li><b>L'orso bianco.</b> La soppressione deliberata dei pensieri tende a farli tornare più forti: una delle basi sperimentali dell'idea che combattere l'esperienza interna sia controproducente.</li>
      <li><b>Misure più fini.</b> Strumenti recenti (MPFI, CompACT) provano a misurare separatamente i sei processi, proprio per superare il limite dell'AAQ-II che li mescola.</li>
      <li><b>Non è una diagnosi.</b> Il punteggio è sensibile allo stato: rifatto in un mese, dopo un periodo difficile o sereno, cambia. Fotografa un momento, non un tratto fisso.</li>
    </ul>`,
    taratura: `<p>L'AAQ-II ha buona coerenza interna (intorno a .84) ed è la misura più usata nella ricerca ACT, il che la rende comoda per confrontare studi. Ma il suo limite è serio: la scarsa validità discriminante. Sovrapponendosi tanto a nevroticismo e disagio, rende ambigui gli studi che la usano come <span class="t" data-tip="Mediatore: variabile che spiega perché un intervento funziona. Se l'AAQ-II misura in gran parte il disagio, gli studi che la usano per dimostrare che l'ACT agisce sulla flessibilità sono difficili da interpretare.">mediatore</span> del cambiamento. Leggila come un indice grezzo di «disagio più evitamento», non come una misura pura della flessibilità psicologica. E non è, in nessun caso, una diagnosi.</p>`,
    reading: [
      "Bond, F. W., Hayes, S. C., et al. (2011). Preliminary psychometric properties of the Acceptance and Action Questionnaire-II. <em>Behavior Therapy</em>, 42, 676-688.",
      "Hayes, S. C., Luoma, J. B., Bond, F. W., Masuda, A. & Lillis, J. (2006). Acceptance and Commitment Therapy: model, processes and outcomes. <em>Behaviour Research and Therapy</em>, 44, 1-25.",
      "Wolgast, M. (2014). What does the Acceptance and Action Questionnaire (AAQ-II) really measure? <em>Behavior Therapy</em>, 45, 831-839."
    ]
  },
  en: {
    title: "Avoiding experience: the heart of ACT",
    intro: `<p>The AAQ-II is the flagship measure of <span class="t" data-tip="Steven Hayes, an American psychologist, founder of ACT and of the theory of language beneath it (Relational Frame Theory).">Steven Hayes's</span> <span class="t" data-tip="Acceptance and Commitment Therapy: a third-wave cognitive-behavioural therapy created by Steven Hayes. It doesn't aim to remove negative thoughts but to change our relationship with them and act on our values.">ACT</span>. The central idea is <span class="t" data-tip="Experiential avoidance: the effort to control, suppress or push away unwanted inner experiences (thoughts, emotions, memories, sensations) even when the effort costs more than the symptom itself.">experiential avoidance</span>: the struggle not to feel what you feel. Its opposite is <span class="t" data-tip="Psychological flexibility: staying in contact with the present moment and acting on your values even in the presence of uncomfortable thoughts and emotions. It is the goal of ACT.">psychological flexibility</span>. Underneath sits <span class="t" data-tip="Relational Frame Theory: the theory of language beneath ACT. It explains why verbal thought ties us to painful content and why fighting it tends to strengthen it.">Relational Frame Theory</span>, the idea that language itself chains us to painful content.</p>`,
    blocks: [
      { h: "What experiential avoidance is", html: `<p>It's the attempt not to feel what you feel: distracting, repressing, ruminating to "solve", filling the gaps, avoiding places that reawaken a memory. The paradox is that control, applied to the inner world, backfires: the more you try not to think of something, the more it returns. That's the <span class="t" data-tip="Daniel Wegner's white bear experiment: people told not to think of a white bear think of it more often. It shows the counterproductive effect of thought suppression.">white bear effect</span>. In ACT the problem isn't pain, but the fight against pain.</p>` },
      { h: "The six processes of flexibility", html: `<p>ACT organises the work into six processes, the <span class="t" data-tip="Hexaflex: ACT's six-process model, often drawn as a hexagon. The six support each other and together make up psychological flexibility.">hexaflex</span>: <span class="t" data-tip="Defusion: seeing thoughts as passing mental events, not as truths or commands to obey.">defusion</span>, <b>acceptance</b>, contact with the present moment, <span class="t" data-tip="Self-as-context: the experience of being the stable observer of your thoughts and emotions, not their changing contents.">self-as-context</span>, <b>values</b> and <b>committed action</b>. The AAQ-II taps mainly the acceptance/avoidance axis; the other five processes fall outside its range.</p>` },
      { h: "The serious critique: flexibility or distress?", html: `<p>This is the most debated point. The AAQ-II correlates very strongly with <span class="t" data-tip="Neuroticism: the trait tendency to feel negative emotion. The AAQ-II overlaps with it so much that some scholars doubt it measures anything distinct.">neuroticism</span> and with generic measures of anxiety and depression: its <span class="t" data-tip="Discriminant validity: a measure's ability to distinguish itself from nearby constructs. It's the AAQ-II's Achilles heel, as it separates poorly from general distress.">discriminant validity</span> is weak. The suspicion, raised among others by Wolgast, is that the questionnaire mainly measures <em>how bad you feel right now</em>, more than a specific psychological inflexibility.</p>` }
    ],
    beyond: `<ul>
      <li><b>The control agenda.</b> ACT distinguishes "clean" pain (unavoidable: loss, fear, sadness) from "dirty" pain, added by the struggle not to feel it. Avoidance multiplies the second.</li>
      <li><b>The white bear.</b> Deliberate thought suppression tends to make thoughts return stronger: one experimental basis for the idea that fighting inner experience is counterproductive.</li>
      <li><b>Finer measures.</b> Recent instruments (MPFI, CompACT) try to measure the six processes separately, precisely to get past the AAQ-II's limit of blending them.</li>
      <li><b>Not a diagnosis.</b> The score is state-sensitive: retaken a month later, after a hard or calm stretch, it changes. It photographs a moment, not a fixed trait.</li>
    </ul>`,
    taratura: `<p>The AAQ-II has good internal consistency (around .84) and is the most-used measure in ACT research, which makes it handy for comparing studies. But its limitation is serious: poor discriminant validity. Overlapping so much with neuroticism and distress, it muddies studies that use it as a <span class="t" data-tip="Mediator: a variable that explains why an intervention works. If the AAQ-II largely measures distress, studies using it to show ACT acts on flexibility are hard to interpret.">mediator</span> of change. Read it as a rough index of "distress plus avoidance", not a pure measure of psychological flexibility. And it is, in no case, a diagnosis.</p>`,
    reading: [
      "Bond, F. W., Hayes, S. C., et al. (2011). Preliminary psychometric properties of the Acceptance and Action Questionnaire-II. <em>Behavior Therapy</em>, 42, 676-688.",
      "Hayes, S. C., Luoma, J. B., Bond, F. W., Masuda, A. & Lillis, J. (2006). Acceptance and Commitment Therapy: model, processes and outcomes. <em>Behaviour Research and Therapy</em>, 44, 1-25.",
      "Wolgast, M. (2014). What does the Acceptance and Action Questionnaire (AAQ-II) really measure? <em>Behavior Therapy</em>, 45, 831-839."
    ]
  },
  pt: {
    title: "Evitar a experiência: o coração da ACT",
    intro: `<p>O AAQ-II é a medida símbolo da <span class="t" data-tip="Acceptance and Commitment Therapy: terapia da terceira onda cognitivo-comportamental, criada por Steven Hayes. Não visa eliminar os pensamentos negativos, mas mudar a relação com eles e agir segundo os próprios valores.">ACT</span> de <span class="t" data-tip="Steven Hayes, psicólogo americano, fundador da ACT e da teoria da linguagem que a sustenta (a Relational Frame Theory).">Steven Hayes</span>. O conceito central é a <span class="t" data-tip="Evitação experiencial: o esforço de controlar, suprimir ou afastar experiências internas indesejadas (pensamentos, emoções, lembranças, sensações) mesmo quando esse esforço custa mais que o próprio sintoma.">evitação experiencial</span>: a luta para não sentir o que se sente. Seu oposto é a <span class="t" data-tip="Flexibilidade psicológica: permanecer em contato com o momento presente e agir segundo os próprios valores mesmo na presença de pensamentos e emoções desconfortáveis. É o objetivo da ACT.">flexibilidade psicológica</span>. Por baixo está a <span class="t" data-tip="Relational Frame Theory: a teoria da linguagem na base da ACT. Explica por que o pensamento verbal nos prende a conteúdos dolorosos e por que combatê-los tende a reforçá-los.">Relational Frame Theory</span>, a ideia de que a própria linguagem nos acorrenta aos conteúdos dolorosos.</p>`,
    blocks: [
      { h: "O que é a evitação experiencial", html: `<p>É a tentativa de não sentir o que se sente: distrair-se, reprimir, ruminar para «resolver», preencher os vazios, evitar os lugares que despertam uma lembrança. O paradoxo é que o controle, aplicado ao mundo interno, se volta contra: quanto mais você tenta não pensar numa coisa, mais ela volta. É o <span class="t" data-tip="Experimento do urso branco, de Daniel Wegner: a quem se pede para não pensar num urso branco, o urso volta à mente com mais frequência. Mostra o efeito contraproducente da supressão de pensamentos.">efeito urso branco</span>. Na ACT o problema não é a dor, mas a luta contra a dor.</p>` },
      { h: "Os seis processos da flexibilidade", html: `<p>A ACT organiza o trabalho em seis processos, o <span class="t" data-tip="Hexaflex: o modelo de seis processos da ACT, muitas vezes desenhado como um hexágono. Os seis se sustentam mutuamente e juntos formam a flexibilidade psicológica.">hexaflex</span>: <span class="t" data-tip="Desfusão: ver os pensamentos como eventos mentais que passam, não como verdades ou ordens a obedecer.">desfusão</span>, <b>aceitação</b>, contato com o momento presente, <span class="t" data-tip="Eu como contexto: a experiência de ser o observador estável dos próprios pensamentos e emoções, não os seus conteúdos mutáveis.">eu como contexto</span>, <b>valores</b> e <b>ação com compromisso</b>. O AAQ-II toca sobretudo o eixo aceitação/evitação; os outros cinco processos ficam fora do seu alcance.</p>` },
      { h: "A crítica séria: flexibilidade ou sofrimento?", html: `<p>É o ponto mais discutido. O AAQ-II correlaciona muito forte com o <span class="t" data-tip="Neuroticismo: traço da tendência a sentir emoções negativas. O AAQ-II se sobrepõe a ele a ponto de alguns estudiosos duvidarem que meça algo distinto.">neuroticismo</span> e com medidas genéricas de ansiedade e depressão: sua <span class="t" data-tip="Validade discriminante: a capacidade de uma medida de se distinguir de construtos próximos. É o calcanhar de Aquiles do AAQ-II, que se separa pouco do sofrimento geral.">validade discriminante</span> é fraca. A suspeita, levantada entre outros por Wolgast, é que o questionário meça sobretudo <em>o quanto você está mal agora</em>, mais que uma inflexibilidade psicológica específica.</p>` }
    ],
    beyond: `<ul>
      <li><b>A agenda do controle.</b> A ACT distingue a dor «limpa» (inevitável: perdas, medo, tristeza) da dor «suja», acrescentada pela luta para não senti-la. A evitação multiplica a segunda.</li>
      <li><b>O urso branco.</b> A supressão deliberada dos pensamentos tende a fazê-los voltar mais fortes: uma das bases experimentais da ideia de que combater a experiência interna é contraproducente.</li>
      <li><b>Medidas mais finas.</b> Instrumentos recentes (MPFI, CompACT) tentam medir separadamente os seis processos, justamente para superar o limite do AAQ-II, que os mistura.</li>
      <li><b>Não é um diagnóstico.</b> O escore é sensível ao estado: refeito em um mês, depois de um período difícil ou sereno, muda. Fotografa um momento, não um traço fixo.</li>
    </ul>`,
    taratura: `<p>O AAQ-II tem boa consistência interna (em torno de .84) e é a medida mais usada na pesquisa ACT, o que a torna cômoda para comparar estudos. Mas seu limite é sério: a baixa validade discriminante. Sobrepondo-se tanto ao neuroticismo e ao sofrimento, torna ambíguos os estudos que a usam como <span class="t" data-tip="Mediador: variável que explica por que uma intervenção funciona. Se o AAQ-II mede em grande parte o sofrimento, os estudos que o usam para mostrar que a ACT age sobre a flexibilidade são difíceis de interpretar.">mediador</span> da mudança. Leia-a como um índice bruto de «sofrimento mais evitação», não como uma medida pura da flexibilidade psicológica. E não é, em nenhum caso, um diagnóstico.</p>`,
    reading: [
      "Bond, F. W., Hayes, S. C., et al. (2011). Preliminary psychometric properties of the Acceptance and Action Questionnaire-II. <em>Behavior Therapy</em>, 42, 676-688.",
      "Hayes, S. C., Luoma, J. B., Bond, F. W., Masuda, A. & Lillis, J. (2006). Acceptance and Commitment Therapy: model, processes and outcomes. <em>Behaviour Research and Therapy</em>, 44, 1-25.",
      "Wolgast, M. (2014). What does the Acceptance and Action Questionnaire (AAQ-II) really measure? <em>Behavior Therapy</em>, 45, 831-839."
    ]
  }
};
