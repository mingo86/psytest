/* ============================================================
   PSYTEST · GENERIC — pagina test.html?t=<id>
   Carica tests/<id>.js (window.PSY_TESTS[id]) + tests/pages.js
   (PSY_PAGES[id]: testi della scheda) e monta il motore.
   Definizione test: { code, theme?, sensitive?, mascot?, n, reverse?[],
     order?[], values?[], labels:{L:[K]}, items:{L:[n]},
     text:{L:{kicker,title,lede,meta[],instr,how,cite}},
     scales:[{key,name:{L},items,mode:"sum"|"mean",range,multiply?,desc:{L},
              bands:[{max,name:{L},text:{L}}]}], main?, pick?,
     score?(answers), render?(res,L,answers) — custom (ECR-R, AAQ-II) }
   Scheda (pages.js): { tags:{L:[]}, deco, mascot, who:{L}, norm:{L},
     not:{L}, calc:{L}, tiles:[{n,t:{L}}] }
   Lingue: IT + EN obbligatorie; le altre ricadono su EN.
   ============================================================ */
(function () {
  const esc = PSY.esc;
  const T = (o, L) => (o == null ? "" : (typeof o === "string" ? o : (o[L] != null ? o[L] : (o.en != null ? o.en : o.it))));
  const fmt = (x, L) => (Number.isInteger(x) ? String(x) : x.toFixed(2).replace(".", L === "en" ? "." : ","));

  const COMMON = {
    it: { kind: "Test", badge: "Validato", start: "Inizia il test", back: "Indietro", next: "Avanti", finish: "Vedi il risultato", close: "Chiudi", keys: k => `tastiera 1-${k}`, resultKicker: "Risultato", retake: "Rifai il test", other: "Altri test", of: "su",
      whoK: "Chi l'ha costruito", normK: "Con chi ti confronti", notK: "Cosa non dice, e chi lo critica", sexLab: "Confronto", sexAll: "Tutti", sexM: "Uomini", sexF: "Donne", meanOf: {all:"media", m:"media uomini", f:"media donne"}, pctOf: p => `più alto del ${p}%`, calcK: "Come si calcola", scoreK: "Punteggio", profK: "Il profilo",
      discB: "Strumento di auto-esplorazione, non una diagnosi.", discLink: "Se stai male adesso",
      share: { k: "Condividi", title: "Manda il tuo risultato", lab: "Il link ricostruisce esattamente il tuo risultato; le risposte non vengono salvate da nessuna parte.", copy: "Copia link", copied: "Copiato!", sys: "Condividi", subject: "Il mio risultato su psytest" },
      help: "<b>Se stai male adesso</b>Questo test non è una diagnosi e non sostituisce un colloquio. Se hai pensieri di farti del male, parla subito con qualcuno: in Italia <a href=\"tel:0223272327\">Telefono Amico 02 2327 2327</a> (tutti i giorni 10–24) o il <a href=\"tel:112\">112</a>; altrove <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.",
      chips: (n, m) => [`${n} domande`, `${m} min`, "calcolato sul telefono", "solo tu lo vedi"], fallback: "Le domande sono mostrate in inglese: la traduzione in questa lingua non è ancora disponibile.", instrShort: "Rispondi d'istinto: non ci sono risposte giuste o sbagliate." },
    en: { kind: "Test", badge: "Validated", start: "Start the test", back: "Back", next: "Next", finish: "See your result", close: "Close", keys: k => `keyboard 1-${k}`, resultKicker: "Result", retake: "Retake the test", other: "Other tests", of: "out of",
      whoK: "Who built it", normK: "Who you are compared with", notK: "What it doesn't say, and who criticises it", sexLab: "Compare with", sexAll: "Everyone", sexM: "Men", sexF: "Women", meanOf: {all:"mean", m:"men's mean", f:"women's mean"}, pctOf: p => `higher than ${p}%`, calcK: "How it is scored", scoreK: "Score", profK: "Your profile",
      discB: "A self-exploration tool, not a diagnosis.", discLink: "If you are struggling right now",
      share: { k: "Share", title: "Send your result", lab: "The link rebuilds exactly your result; your answers are not stored anywhere.", copy: "Copy link", copied: "Copied!", sys: "Share", subject: "My result on psytest" },
      help: "<b>If you are struggling right now</b>This test is not a diagnosis and does not replace talking to someone. If you have thoughts of harming yourself, reach out now: in the US/Canada call or text <a href=\"tel:988\">988</a>, in the UK <a href=\"tel:116123\">Samaritans 116 123</a>, elsewhere <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.",
      chips: (n, m) => [`${n} questions`, `${m} min`, "scored on your phone", "only you see it"], fallback: "", instrShort: "Answer instinctively: there are no right or wrong answers." },
    fr: { kind: "Test", badge: "Validé", start: "Commencer le test", back: "Retour", next: "Suivant", finish: "Voir le résultat", close: "Fermer", keys: k => `clavier 1-${k}`, resultKicker: "Résultat", retake: "Refaire le test", other: "Autres tests", of: "sur", whoK: "Qui l'a construit", normK: "À qui tu te compares", notK: "Ce qu'il ne dit pas, et qui le critique", sexLab: "Comparer avec", sexAll: "Tous", sexM: "Hommes", sexF: "Femmes", meanOf: {all:"moyenne", m:"moyenne hommes", f:"moyenne femmes"}, pctOf: p => `plus élevé que ${p} %`, calcK: "Comment c'est calculé", scoreK: "Score", profK: "Ton profil", discB: "Outil d'auto-exploration, pas un diagnostic.", discLink: "Si tu vas mal en ce moment", share: { k: "Partager", title: "Envoie ton résultat", lab: "Le lien reconstruit exactement ton résultat ; tes réponses ne sont enregistrées nulle part.", copy: "Copier le lien", copied: "Copié !", sys: "Partager", subject: "Mon résultat sur psytest" }, help: "<b>Si tu vas mal en ce moment</b>Ce test n'est pas un diagnostic. Si tu as des pensées de te faire du mal, parle à quelqu'un maintenant : en France <a href=\"tel:3114\">3114</a>, ailleurs <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", chips: (n, m) => [`${n} questions`, `${m} min`, "calculé sur ton téléphone", "toi seul le vois"], fallback: "Les questions sont affichées en anglais : la traduction dans cette langue n'est pas encore disponible.", instrShort: "Réponds d'instinct : il n'y a pas de bonne ou de mauvaise réponse." },
    es: { kind: "Test", badge: "Validado", start: "Empezar el test", back: "Atrás", next: "Siguiente", finish: "Ver el resultado", close: "Cerrar", keys: k => `teclado 1-${k}`, resultKicker: "Resultado", retake: "Repetir el test", other: "Otros tests", of: "de", whoK: "Quién lo construyó", normK: "Con quién te comparas", notK: "Lo que no dice, y quién lo critica", sexLab: "Comparar con", sexAll: "Todos", sexM: "Hombres", sexF: "Mujeres", meanOf: {all:"media", m:"media hombres", f:"media mujeres"}, pctOf: p => `más alto que el ${p}%`, calcK: "Cómo se calcula", scoreK: "Puntuación", profK: "Tu perfil", discB: "Herramienta de autoexploración, no un diagnóstico.", discLink: "Si estás mal ahora mismo", share: { k: "Compartir", title: "Envía tu resultado", lab: "El enlace reconstruye exactamente tu resultado; tus respuestas no se guardan en ningún sitio.", copy: "Copiar enlace", copied: "¡Copiado!", sys: "Compartir", subject: "Mi resultado en psytest" }, help: "<b>Si estás mal ahora mismo</b>Este test no es un diagnóstico. Si tienes pensamientos de hacerte daño, habla con alguien ahora: en España <a href=\"tel:024\">024</a>, en otros países <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", chips: (n, m) => [`${n} preguntas`, `${m} min`, "calculado en tu teléfono", "solo tú lo ves"], fallback: "Las preguntas se muestran en inglés: la traducción a este idioma aún no está disponible.", instrShort: "Responde por instinto: no hay respuestas correctas o incorrectas." },
    pt: { kind: "Teste", badge: "Validado", start: "Começar o teste", back: "Voltar", next: "Próxima", finish: "Ver o resultado", close: "Fechar", keys: k => `teclado 1-${k}`, resultKicker: "Resultado", retake: "Refazer o teste", other: "Outros testes", of: "de", whoK: "Quem construiu", normK: "Com quem você se compara", notK: "O que ele não diz, e quem o critica", sexLab: "Comparar com", sexAll: "Todos", sexM: "Homens", sexF: "Mulheres", meanOf: {all:"média", m:"média homens", f:"média mulheres"}, pctOf: p => `mais alto que ${p}%`, calcK: "Como é calculado", scoreK: "Pontuação", profK: "Seu perfil", discB: "Ferramenta de autoexploração, não um diagnóstico.", discLink: "Se você está mal agora", share: { k: "Compartilhar", title: "Envie seu resultado", lab: "O link reconstrói exatamente o seu resultado; suas respostas não ficam salvas em lugar nenhum.", copy: "Copiar link", copied: "Copiado!", sys: "Compartilhar", subject: "Meu resultado no psytest" }, help: "<b>Se você está mal agora</b>Este teste não é um diagnóstico. Se tem pensamentos de se machucar, fale com alguém agora: no Brasil <a href=\"tel:188\">CVV 188</a>, em outros países <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", chips: (n, m) => [`${n} perguntas`, `${m} min`, "calculado no seu celular", "só você vê"], fallback: "As perguntas são mostradas em inglês: a tradução para este idioma ainda não está disponível.", instrShort: "Responda por instinto: não há respostas certas ou erradas." },
    de: { kind: "Test", badge: "Validiert", start: "Test starten", back: "Zurück", next: "Weiter", finish: "Ergebnis ansehen", close: "Schließen", keys: k => `Tastatur 1-${k}`, resultKicker: "Ergebnis", retake: "Test wiederholen", other: "Weitere Tests", of: "von", whoK: "Wer ihn entwickelt hat", normK: "Mit wem du verglichen wirst", notK: "Was er nicht sagt, und wer ihn kritisiert", sexLab: "Vergleich mit", sexAll: "Alle", sexM: "Männer", sexF: "Frauen", meanOf: {all:"Mittel", m:"Mittel Männer", f:"Mittel Frauen"}, pctOf: p => `höher als ${p} %`, calcK: "So wird ausgewertet", scoreK: "Wert", profK: "Dein Profil", discB: "Werkzeug zur Selbsterkundung, keine Diagnose.", discLink: "Wenn es dir gerade schlecht geht", share: { k: "Teilen", title: "Schick dein Ergebnis", lab: "Der Link stellt genau dein Ergebnis wieder her; deine Antworten werden nirgends gespeichert.", copy: "Link kopieren", copied: "Kopiert!", sys: "Teilen", subject: "Mein Ergebnis auf psytest" }, help: "<b>Wenn es dir gerade schlecht geht</b>Dieser Test ist keine Diagnose. Wenn du daran denkst, dir etwas anzutun, sprich jetzt mit jemandem: in Deutschland <a href=\"tel:08001110111\">Telefonseelsorge 0800 111 0 111</a>, anderswo <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", chips: (n, m) => [`${n} Fragen`, `${m} Min.`, "auf deinem Handy berechnet", "nur du siehst es"], fallback: "Die Fragen werden auf Englisch angezeigt: die Übersetzung in diese Sprache ist noch nicht verfügbar.", instrShort: "Antworte spontan: es gibt keine richtigen oder falschen Antworten." }
  };

  // etichette UI della sezione Approfondimento (contenuti nei file dei test)
  const APPROF_UI = {
    it: { approfK: "Approfondimento", approfMore: "Leggi", approfBeyond: "Oltre il riassunto", approfCalib: "Taratura", approfReading: "Letture" },
    en: { approfK: "In depth", approfMore: "Read", approfBeyond: "Beyond the summary", approfCalib: "Calibration", approfReading: "Reading" },
    fr: { approfK: "Approfondissement", approfMore: "Lire", approfBeyond: "Au-delà du résumé", approfCalib: "Étalonnage", approfReading: "Lectures" },
    es: { approfK: "En profundidad", approfMore: "Leer", approfBeyond: "Más allá del resumen", approfCalib: "Calibración", approfReading: "Lecturas" },
    pt: { approfK: "Aprofundamento", approfMore: "Ler", approfBeyond: "Além do resumo", approfCalib: "Aferição", approfReading: "Leituras" },
    de: { approfK: "Vertiefung", approfMore: "Lesen", approfBeyond: "Über die Zusammenfassung hinaus", approfCalib: "Einordnung", approfReading: "Lektüre" }
  };
  for (const L in COMMON) Object.assign(COMMON[L], APPROF_UI[L] || APPROF_UI.en);

  const cdf = z => { const t = 1 / (1 + 0.2316419 * Math.abs(z)); const d = 0.3989423 * Math.exp(-z * z / 2); const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return z > 0 ? 1 - p : p; };
  function scoreDef(def) {
    return (answers, sex) => {
      const K = def.labels.en.length;
      const vals = def.values || Array.from({ length: K }, (_, i) => i + 1);
      const min = Math.min(...vals), max = Math.max(...vals);
      const v = answers.map((a, i) => { let x = vals[a - 1]; if ((def.reverse || []).includes(i + 1)) x = min + max - x; return x; });
      const scales = {};
      for (const s of def.scales) {
        const xs = s.items.map(i => v[i - 1]);
        let raw = xs.reduce((a, b) => a + b, 0);
        if (s.mode === "mean") raw = raw / xs.length;
        if (s.multiply) raw = raw * s.multiply;
        raw = Math.round(raw * 100) / 100;
        const band = (s.bands || []).find(b => raw <= b.max) || (s.bands || [])[(s.bands || []).length - 1];
        const nm = def.norms && def.norms[s.key] ? (def.norms[s.key][sex || "all"] || def.norms[s.key].all) : null;
        scales[s.key] = { raw, band, pct: (raw - s.range[0]) / (s.range[1] - s.range[0]), norm: nm, pctl: nm && nm.sd ? Math.min(99, Math.max(1, Math.round(cdf((raw - nm.m) / nm.sd) * 100))) : null };
      }
      return { v, scales };
    };
  }

  const scaleBar = (m, s) => {
    const bands = s.bands || [], pos = (Math.max(0, Math.min(1, m.pct)) * 100).toFixed(1) + "%";
    const cols = ["var(--green)", "var(--lilac)", "var(--yellow)", "var(--pink)", "#f5b3c0"];
    const grad = bands.length ? `background:linear-gradient(90deg,${bands.map((b, i) => { const a = i === 0 ? 0 : (bands[i - 1].max - s.range[0]) / (s.range[1] - s.range[0]) * 100; const e = Math.min(100, (b.max - s.range[0]) / (s.range[1] - s.range[0]) * 100); return `${cols[Math.min(i, 4)]} ${a.toFixed(1)}% ${e.toFixed(1)}%`; }).join(",")})` : "";
    return `<div class="scale" style="${grad}"><em style="left:${pos}"></em></div><div class="scale-l"><span>${s.range[0]}</span><span>${s.range[1]}</span></div>`;
  };

  function renderDef(def) {
    return (r, L, answers, sex) => {
      const c = COMMON[L] || COMMON.it, tx = def.text[L] || def.text.en, g = sex || "all";
      const normChip = m => m.norm ? `<div class="chipsrow"><span>${esc(c.meanOf[g])} ${fmt(m.norm.m, L)}</span>${m.pctl != null ? `<span class="p">${esc(c.pctOf(m.pctl))}</span>` : ""}</div>` : "";
      const normMark = (m, s) => m.norm ? `<em style="left:${(Math.max(0, Math.min(1, (m.norm.m - s.range[0]) / (s.range[1] - s.range[0]))) * 100).toFixed(1)}%" data-l="${esc(c.meanOf[g])} ${fmt(m.norm.m, L)}"></em>` : "";
      const main = def.main ? def.scales.find(s => s.key === def.main) : null;
      let html = "", summary = T(tx.title, L) + ": ", headline = null, sub = null;
      if (main) {
        const m = r.scales[main.key], bands = main.bands || [];
        headline = m.band ? T(m.band.name, L) : null; sub = m.band ? T(m.band.text, L) : null;
        html += `<div class="card"><div class="k">${esc(c.scoreK)} · ${esc(T(main.name, L))}</div>
          <div class="score"><div class="bign">${fmt(m.raw, L)}<small>${esc(c.of)} ${main.range[1]}</small></div>
            <div>${m.band ? `<p class="bandname">${esc(T(m.band.name, L))}</p><p class="bandtxt">${esc(T(m.band.text, L))}</p>` : ""}</div></div>
          ${normChip(m)}${scaleBar(m, main)}
          ${bands.length ? `<div class="bands" style="grid-template-columns:repeat(${Math.min(bands.length, 4)},1fr)">${bands.map(b => `<span${m.band === b ? ' class="on"' : ""}>${esc(T(b.name, L))}</span>`).join("")}</div>` : ""}
          ${main.desc ? `<p class="desc">${esc(T(main.desc, L))}</p>` : ""}</div>`;
        summary += `${fmt(m.raw, L)}/${main.range[1]}` + (m.band ? ` — ${T(m.band.name, L)}` : "");
      }
      if (def.pick) {
        const top = def.scales.reduce((a, s) => r.scales[s.key].raw > r.scales[a.key].raw ? s : a, def.scales[0]);
        const ties = def.scales.filter(s => r.scales[s.key].raw === r.scales[top.key].raw);
        headline = ties.map(s => T(s.name, L)).join(" / "); sub = ties.map(s => T(s.desc, L)).join(" · ");
        summary += headline;
      }
      const others = def.scales.filter(s => !main || s.key !== main.key);
      if (others.length) {
        html += `<div class="card"><div class="k">${esc(c.profK)}</div><div class="dims">` + others.map(s => {
          const m = r.scales[s.key];
          return `<div class="dim${m.band ? "" : " nolab"}"><div class="h"><span>${esc(T(s.name, L))}</span><span>${fmt(m.raw, L)} / ${s.range[1]}</span></div><div class="bar"><i style="width:${(Math.max(0, Math.min(1, m.pct)) * 100).toFixed(1)}%"></i>${normMark(m, s)}</div>` +
            (m.norm ? `<p class="bandl" style="margin-top:26px">${esc(m.band ? T(m.band.name, L) : "")}${m.pctl != null ? ` · ${esc(c.pctOf(m.pctl))}` : ""}</p>` : (m.band ? `<p class="bandl">${esc(T(m.band.name, L))}</p>` : "")) +
            `<p class="t">${esc(m.band ? T(m.band.text, L) : T(s.desc, L))}</p></div>`;
        }).join("") + `</div></div>`;
        if (!main && !def.pick) summary += others.map(s => `${T(s.name, L)} ${fmt(r.scales[s.key].raw, L)}` + (r.scales[s.key].band ? ` (${T(r.scales[s.key].band.name, L)})` : "")).join(", ");
      }
      return { html, summary, headline, sub };
    };
  }

  function boot() {
    const id = new URLSearchParams(location.search).get("t");
    const def = window.PSY_TESTS && window.PSY_TESTS[id];
    const pg = (window.PSY_PAGES && window.PSY_PAGES[id]) || {};
    if (!def) { document.getElementById("app").innerHTML = '<section class="hero"><div><h1>psytest</h1><p class="lede">Test non trovato.</p><a class="btn" href="index.html">Home</a></div></section>'; return; }
    if (def.theme) document.body.dataset.theme = def.theme;
    const ui = L => {
      const c = COMMON[L] || COMMON.it, tx = def.text[L] || def.text.en, hasItems = !!def.items[L];
      const mins = (tx.meta || def.text.en.meta || []).find(x => /min/i.test(x)) || "";
      return Object.assign({}, c, {
        title: T(tx.title, L), lede: T(tx.lede, L), tags: T(pg.tags, L) || [], deco: pg.deco, chips: c.chips(def.n, (mins.match(/\d+/) || ["2"])[0]),
        who: T(pg.who, L) || T(tx.cite, L), norm: T(pg.norm, L) || "", not: T(pg.not, L) || "", calc: T(pg.calc, L) || T(tx.how, L).split(". ")[0] + ".", tiles: (pg.tiles || []).map(t => ({ n: t.n, t: T(t.t, L) })),
        disc: T(tx.how, L) + (!hasItems && c.fallback ? ` <i>${c.fallback}</i>` : ""), instrShort: T(tx.instr, L).replace(/<[^>]+>/g, "").split(". ").slice(-1)[0] || c.instrShort,
        share: Object.assign({}, c.share, { subject: T(tx.title, L) + " · psytest" })
      });
    };
    const setFoot = () => { const L = window.ZI18N ? window.ZI18N.get() : "it"; const tx = def.text[L] || def.text.en; document.getElementById("brandSub").textContent = def.code; document.getElementById("footTxt").textContent = T(tx.cite, L); };
    window.addEventListener("zlangchange", setFoot); setFoot();
    PSY.mount({ code: def.code, n: def.n, order: def.order, sensitive: !!def.sensitive, mascot: pg.mascot || def.mascot, sexNorms: !!def.sexNorms, approf: def.approf,
      items: L => def.items[L] || def.items.en, labels: L => def.labels[L] || def.labels.en,
      ui, score: def.score || scoreDef(def), render: def.render || renderDef(def) });
  }

  const id = new URLSearchParams(location.search).get("t");
  window.PSY_GEN = { COMMON, T, fmt, scaleBar };
  if (id && /^[a-z0-9-]+$/.test(id)) {
    let left = 2; const done = () => { if (--left === 0) boot(); };
    for (const src of ["tests/" + id + ".js", "tests/pages.js"]) { const s = document.createElement("script"); s.src = src; s.onload = done; s.onerror = done; document.head.appendChild(s); }
  } else boot();
})();
