/* ============================================================
   PSYTEST · GENERIC — pagina test.html?t=<id>
   Carica tests/<id>.js (window.PSY_TESTS[id]) e monta il motore con
   un renderer generico: punteggio principale + fascia + scala,
   profilo per sottoscala, come si legge, citazione.
   Definizione: { code, theme?, sensitive?, n, reverse?[], order?[],
     values?[] (valore numerico di ogni opzione; default 1..K),
     labels:{L:[K]}, items:{L:[n]},
     text:{L:{kicker,title,lede,meta[],instr,how,cite,foot}},
     scales:[{key,name:{L},items:[..],mode:"sum"|"mean",range:[min,max],
              multiply?,desc:{L},bands:[{max,name:{L},text:{L}}]}],
     main?: key della scala principale (punteggio grande) }
   Lingue: IT + EN obbligatorie; le altre ricadono su EN.
   ============================================================ */
(function () {
  const esc = PSY.esc;
  const T = (o, L) => (o == null ? "" : (typeof o === "string" ? o : (o[L] != null ? o[L] : (o.en != null ? o.en : o.it))));
  const fmt = (x, L) => (Number.isInteger(x) ? String(x) : x.toFixed(2).replace(".", L === "en" ? "." : ","));

  const COMMON = {
    it: { start: "Inizia il test", privacy: "Le risposte esistono solo nel link che deciderai di condividere.", qn: (i, n) => `Domanda ${i} di ${n}`, back: "Indietro", next: "Avanti", finish: "Vedi il risultato", keys: "Da tastiera: numeri per rispondere, frecce per spostarti.", resultKicker: "Il tuo risultato", retake: "Rifai il test", other: "Altri test", of: "su", how: "Come si legge", scales: "Il profilo", share: { title: "Condividi il tuo risultato", lab: "Il link ricostruisce esattamente il tuo risultato.", copy: "Copia link", copied: "Copiato!", sys: "Condividi", subject: "Il mio risultato su psytest" }, help: "<b>Se stai male adesso</b>Questo test non è una diagnosi e non sostituisce un colloquio. Se hai pensieri di farti del male, parla subito con qualcuno: in Italia <a href=\"tel:0223272327\">Telefono Amico 02 2327 2327</a> (tutti i giorni 10–24) o il <a href=\"tel:112\">112</a>; altrove <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", foot: "strumento di auto-esplorazione, non una diagnosi", fallback: "Le domande sono mostrate in inglese: la traduzione in questa lingua non è ancora disponibile." },
    en: { start: "Start the test", privacy: "Your answers exist only in the link you decide to share.", qn: (i, n) => `Question ${i} of ${n}`, back: "Back", next: "Next", finish: "See your result", keys: "Keyboard: numbers to answer, arrows to move.", resultKicker: "Your result", retake: "Retake the test", other: "Other tests", of: "out of", how: "How to read it", scales: "Your profile", share: { title: "Share your result", lab: "The link rebuilds exactly your result.", copy: "Copy link", copied: "Copied!", sys: "Share", subject: "My result on psytest" }, help: "<b>If you are struggling right now</b>This test is not a diagnosis and does not replace talking to someone. If you have thoughts of harming yourself, reach out now: in the US/Canada call or text <a href=\"tel:988\">988</a>, in the UK <a href=\"tel:116123\">Samaritans 116 123</a>, elsewhere <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", foot: "a self-exploration tool, not a diagnosis", fallback: "" },
    fr: { start: "Commencer le test", privacy: "Tes réponses n'existent que dans le lien que tu décideras de partager.", qn: (i, n) => `Question ${i} sur ${n}`, back: "Retour", next: "Suivant", finish: "Voir le résultat", keys: "Clavier : chiffres pour répondre, flèches pour naviguer.", resultKicker: "Ton résultat", retake: "Refaire le test", other: "Autres tests", of: "sur", how: "Comment le lire", scales: "Ton profil", share: { title: "Partage ton résultat", lab: "Le lien reconstruit exactement ton résultat.", copy: "Copier le lien", copied: "Copié !", sys: "Partager", subject: "Mon résultat sur psytest" }, help: "<b>Si tu vas mal en ce moment</b>Ce test n'est pas un diagnostic. Si tu as des pensées de te faire du mal, parle à quelqu'un maintenant : en France <a href=\"tel:3114\">3114</a>, ailleurs <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", foot: "outil d'auto-exploration, pas un diagnostic", fallback: "Les questions sont affichées en anglais : la traduction dans cette langue n'est pas encore disponible." },
    es: { start: "Empezar el test", privacy: "Tus respuestas existen solo en el enlace que decidas compartir.", qn: (i, n) => `Pregunta ${i} de ${n}`, back: "Atrás", next: "Siguiente", finish: "Ver el resultado", keys: "Teclado: números para responder, flechas para moverte.", resultKicker: "Tu resultado", retake: "Repetir el test", other: "Otros tests", of: "de", how: "Cómo leerlo", scales: "Tu perfil", share: { title: "Comparte tu resultado", lab: "El enlace reconstruye exactamente tu resultado.", copy: "Copiar enlace", copied: "¡Copiado!", sys: "Compartir", subject: "Mi resultado en psytest" }, help: "<b>Si estás mal ahora mismo</b>Este test no es un diagnóstico. Si tienes pensamientos de hacerte daño, habla con alguien ahora: en España <a href=\"tel:024\">024</a>, en otros países <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", foot: "herramienta de autoexploración, no un diagnóstico", fallback: "Las preguntas se muestran en inglés: la traducción a este idioma aún no está disponible." },
    pt: { start: "Começar o teste", privacy: "Suas respostas existem só no link que você decidir compartilhar.", qn: (i, n) => `Pergunta ${i} de ${n}`, back: "Voltar", next: "Próxima", finish: "Ver o resultado", keys: "Teclado: números para responder, setas para navegar.", resultKicker: "Seu resultado", retake: "Refazer o teste", other: "Outros testes", of: "de", how: "Como ler", scales: "Seu perfil", share: { title: "Compartilhe seu resultado", lab: "O link reconstrói exatamente o seu resultado.", copy: "Copiar link", copied: "Copiado!", sys: "Compartilhar", subject: "Meu resultado no psytest" }, help: "<b>Se você está mal agora</b>Este teste não é um diagnóstico. Se tem pensamentos de se machucar, fale com alguém agora: no Brasil <a href=\"tel:188\">CVV 188</a>, em outros países <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", foot: "ferramenta de autoexploração, não um diagnóstico", fallback: "As perguntas são mostradas em inglês: a tradução para este idioma ainda não está disponível." },
    de: { start: "Test starten", privacy: "Deine Antworten existieren nur im Link, den du teilen möchtest.", qn: (i, n) => `Frage ${i} von ${n}`, back: "Zurück", next: "Weiter", finish: "Ergebnis ansehen", keys: "Tastatur: Zahlen zum Antworten, Pfeile zum Navigieren.", resultKicker: "Dein Ergebnis", retake: "Test wiederholen", other: "Weitere Tests", of: "von", how: "So liest du es", scales: "Dein Profil", share: { title: "Teile dein Ergebnis", lab: "Der Link stellt genau dein Ergebnis wieder her.", copy: "Link kopieren", copied: "Kopiert!", sys: "Teilen", subject: "Mein Ergebnis auf psytest" }, help: "<b>Wenn es dir gerade schlecht geht</b>Dieser Test ist keine Diagnose. Wenn du daran denkst, dir etwas anzutun, sprich jetzt mit jemandem: in Deutschland <a href=\"tel:08001110111\">Telefonseelsorge 0800 111 0 111</a>, anderswo <a href=\"https://findahelpline.com\" target=\"_blank\" rel=\"noopener\">findahelpline.com</a>.", foot: "Werkzeug zur Selbsterkundung, keine Diagnose", fallback: "Die Fragen werden auf Englisch angezeigt: die Übersetzung in diese Sprache ist noch nicht verfügbar." }
  };

  function scoreDef(def) {
    return answers => {
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
        scales[s.key] = { raw, band, pct: (raw - s.range[0]) / (s.range[1] - s.range[0]) };
      }
      return { v, scales };
    };
  }

  function renderDef(def) {
    return (r, L) => {
      const c = COMMON[L] || COMMON.it, tx = def.text[L] || def.text.en;
      const main = def.main ? def.scales.find(s => s.key === def.main) : null;
      let html = `<h1 style="margin:14px 0 4px">${esc(T(tx.title, L))}</h1>`, summary = T(tx.title, L) + ": ";
      if (main) {
        const m = r.scales[main.key], pos = (Math.max(0, Math.min(1, m.pct)) * 100).toFixed(1) + "%";
        const bands = main.bands || [];
        html += `<div class="big-score"><span class="n">${fmt(m.raw, L)}</span><span class="of">${esc(c.of)} ${main.range[1]}</span></div>` +
          (m.band ? `<p class="band">${esc(T(m.band.name, L))}</p>` : "") +
          `<div class="scale" style="background:linear-gradient(90deg,${bands.map((b, i) => { const a = i === 0 ? 0 : (bands[i - 1].max - main.range[0]) / (main.range[1] - main.range[0]) * 100; const e = Math.min(100, (b.max - main.range[0]) / (main.range[1] - main.range[0]) * 100); const col = ["var(--acc-l)", "var(--soft)", "#fde68a", "#fca5a5", "#f87171"][Math.min(i, 4)]; return `${col} ${a.toFixed(1)}% ${e.toFixed(1)}%`; }).join(",")})"><em style="left:${pos}"></em></div>` +
          `<div class="scale-l"><span>${main.range[0]}</span><span>${main.range[1]}</span></div>` +
          (bands.length ? `<div class="bands" style="grid-template-columns:repeat(${Math.min(bands.length, 4)},1fr)">${bands.map(b => `<span${m.band === b ? ' class="on"' : ""}>${esc(T(b.name, L))}</span>`).join("")}</div>` : "") +
          (m.band ? `<p class="desc">${esc(T(m.band.text, L))}</p>` : "") +
          (main.desc ? `<p class="desc" style="font-size:14px">${esc(T(main.desc, L))}</p>` : "");
        summary += `${fmt(m.raw, L)}/${main.range[1]}` + (m.band ? ` — ${T(m.band.name, L)}` : "");
      }
      if (def.pick) {
        const top = def.scales.reduce((a, s) => r.scales[s.key].raw > r.scales[a.key].raw ? s : a, def.scales[0]);
        const ties = def.scales.filter(s => r.scales[s.key].raw === r.scales[top.key].raw);
        html += `<p class="style" style="margin-top:14px">${ties.map(s => esc(T(s.name, L))).join(" / ")}<small>${ties.map(s => esc(T(s.desc, L))).join(" · ")}</small></p>`;
        summary += ties.map(s => T(s.name, L)).join(" / ");
      }
      const others = def.scales.filter(s => !main || s.key !== main.key);
      if (others.length) {
        html += `<div class="sec"><h2>${esc(c.scales)}</h2><div class="prof">` + others.map(s => {
          const m = r.scales[s.key];
          return `<div class="dim"><div class="h"><span>${esc(T(s.name, L))}</span><span>${fmt(m.raw, L)} / ${s.range[1]}</span></div><div class="bar" style="margin-bottom:8px"><i style="width:${(Math.max(0, Math.min(1, m.pct)) * 100).toFixed(1)}%"></i></div>` +
            (m.band ? `<p class="bandl">${esc(T(m.band.name, L))}</p>` : "") +
            `<p class="t">${esc(m.band ? T(m.band.text, L) : T(s.desc, L))}</p></div>`;
        }).join("") + `</div></div>`;
        if (!main) summary += others.map(s => `${T(s.name, L)} ${fmt(r.scales[s.key].raw, L)}` + (r.scales[s.key].band ? ` (${T(r.scales[s.key].band.name, L)})` : "")).join(", ");
      }
      html += `<div class="sec"><h2>${esc(c.how)}</h2><p>${esc(T(tx.how, L))}</p><p class="note">${esc(T(tx.cite, L))}</p></div>`;
      return { html, summary };
    };
  }

  function boot() {
    const id = new URLSearchParams(location.search).get("t");
    const def = window.PSY_TESTS && window.PSY_TESTS[id];
    if (!def) { document.getElementById("app").innerHTML = '<div class="card"><h1>psytest</h1><p class="lede">Test non trovato.</p><a class="btn" href="index.html">Home</a></div>'; return; }
    if (def.theme) document.body.dataset.theme = def.theme;
    const ui = L => {
      const c = COMMON[L] || COMMON.it, tx = def.text[L] || def.text.en;
      const hasItems = !!def.items[L];
      return Object.assign({}, c, {
        kicker: T(tx.kicker, L), title: T(tx.title, L), lede: T(tx.lede, L), meta: tx.meta || def.text.en.meta,
        instr: T(tx.instr, L) + (!hasItems && c.fallback ? `<br><br><i>${c.fallback}</i>` : ""),
        share: Object.assign({}, c.share, { subject: T(tx.title, L) + " · psytest" }), foot: c.foot
      });
    };
    const setBrand = () => { const L = window.ZI18N ? window.ZI18N.get() : "it"; const tx = def.text[L] || def.text.en; document.getElementById("brandSub").textContent = T(tx.kicker, L); document.getElementById("footTxt").textContent = `${def.code} · ${(COMMON[L] || COMMON.it).foot}`; };
    window.addEventListener("zlangchange", setBrand); setBrand();
    PSY.mount({ code: def.code, n: def.n, order: def.order, sensitive: !!def.sensitive,
      items: L => def.items[L] || def.items.en, labels: L => def.labels[L] || def.labels.en,
      ui, score: scoreDef(def), render: renderDef(def) });
  }

  const id = new URLSearchParams(location.search).get("t");
  if (id && /^[a-z0-9-]+$/.test(id)) {
    const s = document.createElement("script"); s.src = "tests/" + id + ".js"; s.onload = boot; s.onerror = boot; document.head.appendChild(s);
  } else boot();
})();
