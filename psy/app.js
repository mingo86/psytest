/* ============================================================
   PSYTEST · APP ENGINE — scheda del test + finestra delle domande
   PSY.mount(cfg): pagina (hero, tre card, come si calcola) →
   finestra sopra la pagina, una domanda per volta (tastiera 1-K,
   frecce, Esc chiude) → risultato in pagina, con box di condivisione
   e link ricostruibile.
   cfg: { code, n, order?, items(L)->[], labels(L)->[K] (K<=9),
          sensitive?, mascot?, ui(L)->{...}, score(answers)->res,
          render(res, L, answers)->{html, summary, headline?, sub?} }
   Link: ?r=<n cifre 1-K>&run=1&lang=xx (+ t=<id> per la pagina generica)
   ============================================================ */
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const langOf = () => window.ZI18N ? window.ZI18N.get() : "it";
  const ICON = {
    play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    copy: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 1h8a1 1 0 0 1 1 1v8h-1.5V2.5H5zM2 4h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm.5 1.5v8h7v-8z"/></svg>',
    share: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1l3.5 3.5-1 1L8.75 3.8V10h-1.5V3.8L5.5 5.5l-1-1zM3 8h2v1.5H4.5v4h7v-4H11V8h2v7H3z"/></svg>',
    mail: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 3h14v10H1zm1.5 1.5v.6L8 8.9l5.5-3.8v-.6zm0 2.4v4.6h11V6.9L8 10.7z"/></svg>',
    wa: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5A6.5 6.5 0 0 0 2.4 11.3L1.5 14.5l3.3-.9A6.5 6.5 0 1 0 8 1.5zm0 1.3a5.2 5.2 0 1 1-2.7 9.7l-.3-.2-1.7.5.5-1.6-.2-.3A5.2 5.2 0 0 1 8 2.8zM5.9 5c-.2 0-.4.1-.6.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.2 3.4 3 1.7.7 2 .5 2.4.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1l-.4-.2-1.4-.7c-.2-.1-.3 0-.5.1l-.6.8c-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1.1-.6-.6-1-1.2-1.2-1.4-.1-.2 0-.3.1-.4l.3-.4.2-.4v-.4l-.6-1.5c-.2-.3-.3-.3-.5-.3z"/></svg>',
    tg: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14.5 2.2L1.9 7.1c-.7.3-.7.7 0 .9l3.2 1 1.2 3.7c.1.4.3.5.6.3l1.8-1.5 3.3 2.4c.5.3.9.1 1-.5l2.1-10.1c.2-.8-.2-1.2-.6-1.1zM5.6 8.7l6.3-4c.3-.2.5 0 .3.2L7 9.8l-.2 2.2-1.2-3.3z"/></svg>',
    back: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10.5 2L4.5 8l6 6 1.4-1.4L7.3 8l4.6-4.6z"/></svg>',
    next: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 2l6 6-6 6-1.4-1.4L8.7 8 4.1 3.4z"/></svg>',
    redo: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3a5 5 0 1 1-4.6 3h1.7A3.5 3.5 0 1 0 8 4.5V7L4 4l4-3z"/></svg>',
    x: '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 4l12 12M16 4L4 16"/></svg>'
  };
  // icone contorno per le card e la decorazione dell'hero
  const DECO = {
    heart: '<svg viewBox="0 0 64 64"><path d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z"/></svg>',
    sun: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="12"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6"/></svg>',
    brain: '<svg viewBox="0 0 64 64"><path d="M30 10a9 9 0 0 0-9 9 9 9 0 0 0-6 15 9 9 0 0 0 5 16 9 9 0 0 0 10 4V10zM34 10a9 9 0 0 1 9 9 9 9 0 0 1 6 15 9 9 0 0 1-5 16 9 9 0 0 1-10 4V10z"/></svg>',
    cloud: '<svg viewBox="0 0 64 64"><path d="M18 46h30a10 10 0 0 0 0-20 14 14 0 0 0-27 3 9 9 0 0 0-3 17z"/></svg>',
    dna: '<svg viewBox="0 0 64 64"><path d="M18 6c0 20 28 32 28 52M46 6c0 20-28 32-28 52M20 14h24M22 24h20M22 40h20M20 50h24"/></svg>',
    compass: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="24"/><path d="M42 22l-6 16-14 6 6-16z"/></svg>'
  };
  const mascot = (v, cls) => {
    const eyes = v === "glasses"
      ? '<circle cx="42" cy="50" r="9" fill="#fff" stroke="#1f1a3a" stroke-width="3"/><circle cx="62" cy="50" r="9" fill="#fff" stroke="#1f1a3a" stroke-width="3"/><path d="M51 50h2M29 46l4 2M75 46l-4 2" stroke="#1f1a3a" stroke-width="3" stroke-linecap="round"/>'
      : v === "smile"
      ? '<rect x="38" y="42" width="8" height="14" rx="4" fill="#fff"/><rect x="58" y="42" width="8" height="14" rx="4" fill="#fff"/><path d="M40 66q12 8 24 0" stroke="#1f1a3a" stroke-width="3.5" fill="none" stroke-linecap="round"/>'
      : v === "sleepy"
      ? '<path d="M36 50q6-6 12 0M56 50q6-6 12 0" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>'
      : '<rect x="38" y="44" width="9" height="16" rx="4.5" fill="#fff"/><rect x="57" y="44" width="9" height="16" rx="4.5" fill="#fff"/>';
    return `<svg class="mascot ${cls || ""}" viewBox="0 0 104 104" aria-hidden="true"><defs><radialGradient id="mg" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#b8f5e2"/><stop offset=".6" stop-color="var(--mint)"/><stop offset="1" stop-color="var(--mint-d)"/></radialGradient></defs><circle cx="52" cy="52" r="50" fill="#fff" opacity=".9"/><circle cx="52" cy="52" r="46" fill="#1f1a3a"/><circle cx="52" cy="52" r="38" fill="url(#mg)"/>${eyes}</svg>`;
  };

  function mount(cfg) {
    const N = cfg.n;
    const ORDER = cfg.order || Array.from({ length: N }, (_, i) => i + 1);
    const answers = new Array(N).fill(0);
    let state = "intro", pos = 0, last = null;
    const root = $("app");
    const ui = () => cfg.ui(langOf());
    let overlay = $("quizOverlay");
    if (!overlay) { overlay = document.createElement("div"); overlay.id = "quizOverlay"; overlay.className = "overlay"; document.body.appendChild(overlay); }

    function shareURL() {
      const u = new URL(location.href); const t = u.searchParams.get("t"); u.search = ""; if (t) u.searchParams.set("t", t);
      u.searchParams.set("r", answers.join("")); u.searchParams.set("run", "1"); u.searchParams.set("lang", langOf());
      return u.href;
    }
    function setURL(clear) {
      try {
        if (clear) { const u = new URL(location.href); u.searchParams.delete("r"); u.searchParams.delete("run"); history.replaceState(null, "", u.pathname.split("/").pop() + u.search); }
        else history.replaceState(null, "", shareURL().slice(location.origin.length).split("/").pop());
      } catch (e) {}
    }

    // blocchi condivisi della pagina
    const infoCards = u => `<div class="cards3">
        <div class="pc lilac"><div class="ico">${DECO.dna}</div><div class="k">${esc(u.whoK)}</div><p>${u.who}</p></div>
        <div class="pc yellow"><div class="ico">${DECO.compass}</div><div class="k">${esc(u.normK)}</div><p>${u.norm}</p></div>
        <div class="pc pink"><div class="ico">${DECO.cloud}</div><div class="k">${esc(u.notK)}</div><p>${u.not}</p></div>
      </div>`;
    const calcCard = u => `<div class="card"><div class="k">${esc(u.calcK)}</div><h2>${u.calc}</h2>
        <div class="tiles">${u.tiles.map((t, i) => `<div class="tile ${["green", "blue", "yellow"][i % 3]}"><div class="n">${esc(t.n)}</div><p>${t.t}</p></div>`).join("")}</div>
        <p class="disc"><b>${esc(u.discB)}</b> ${u.disc} <a href="#help" id="helpLink">${esc(u.discLink)}</a></p>
        <div class="help" id="help" hidden>${u.help}</div></div>`;
    function wireHelp() { const l = $("helpLink"); if (l) l.onclick = e => { e.preventDefault(); const h = $("help"); h.hidden = !h.hidden; if (!h.hidden) h.scrollIntoView({ block: "nearest" }); }; }

    function renderIntro() {
      const u = ui();
      root.innerHTML = `<div class="fade">
        <section class="hero">
          <div class="deco">${DECO[u.deco || "heart"]}</div>
          ${mascot(cfg.mascot || "eyes")}
          <div>
            <div class="k"><span>${esc(u.kind)}</span><span class="sep">·</span><span>${esc(cfg.code)}</span><span class="sep">·</span><span class="badge">✓ ${esc(u.badge)}</span></div>
            <h1>${esc(u.title)}</h1>
            <div class="tags">${(u.tags || []).map((t, i) => `<span class="tag"><i class="${i % 2 ? "p" : ""}"></i>${esc(t)}</span>`).join("")}</div>
            <p class="lede">${esc(u.lede)}</p>
          </div>
          <div class="full">
            <div class="chips">${u.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("")}</div>
            <button class="btn" id="start" type="button">${ICON.play}${esc(u.start)}</button>
          </div>
        </section>
        ${infoCards(u)}
        ${calcCard(u)}
      </div>`;
      $("start").onclick = openQuiz; wireHelp();
    }

    // ---- finestra ----
    function openQuiz() {
      state = "q"; pos = ORDER.findIndex(n => !answers[n - 1]); if (pos < 0) pos = 0;
      overlay.classList.add("on"); document.body.classList.add("locked"); renderQ();
    }
    function closeQuiz() { overlay.classList.remove("on"); document.body.classList.remove("locked"); if (state === "q") state = "intro"; }
    function renderQ() {
      const L = langOf(), u = ui(), items = cfg.items(L), labels = cfg.labels(L), K = labels.length;
      const n = ORDER[pos], done = answers.filter(Boolean).length;
      overlay.innerHTML = `<div class="quiz" role="dialog" aria-modal="true" aria-label="${esc(u.title)}">
        <div class="qhead">
          <div class="k">${esc(cfg.code)} · ${pos + 1} / ${N}</div>
          <div class="segs">${ORDER.map((m, i) => `<i class="${i === pos ? "cur" : (answers[m - 1] ? "done" : "")}"></i>`).join("")}</div>
          <button class="xbtn" id="qx" type="button" aria-label="${esc(u.close)}">${ICON.x}</button>
        </div>
        <div class="qcard">${mascot(cfg.mascot || "eyes")}<p class="q">${esc(items[n - 1])}</p><p class="sub">${u.instrShort}</p></div>
        <div class="opts" role="radiogroup" style="--k:${K}">${labels.map((t, i) => `<button class="opt${answers[n - 1] === i + 1 ? " on" : ""}" type="button" role="radio" aria-checked="${answers[n - 1] === i + 1}" data-v="${i + 1}" data-c="${i + 1}"><b>${i + 1}</b><span>${esc(t)}</span></button>`).join("")}</div>
        <div class="qnav">
          <button class="btn" id="back" type="button">${ICON.back}${esc(u.back)}</button>
          <div class="k">${esc(u.keys(K))}</div>
          <button class="btn go" id="next" type="button" ${answers[n - 1] ? "" : "disabled"}>${esc(pos === N - 1 ? u.finish : u.next)}${ICON.next}</button>
        </div>
      </div>`;
      overlay.querySelectorAll(".opt").forEach(b => {
        b.onclick = () => {
          answers[n - 1] = +b.dataset.v;
          overlay.querySelectorAll(".opt").forEach(x => { x.classList.remove("on"); x.setAttribute("aria-checked", "false"); });
          b.classList.add("on"); b.setAttribute("aria-checked", "true");
          $("next").disabled = false;
          setTimeout(advance, 240);
        };
      });
      $("back").onclick = () => { if (pos === 0) closeQuiz(); else { pos--; renderQ(); } };
      $("next").onclick = advance; $("qx").onclick = closeQuiz;
      overlay.querySelector(".quiz").scrollTop = 0;
    }
    function advance() {
      const n = ORDER[pos]; if (!answers[n - 1]) return;
      if (pos < N - 1) { pos++; renderQ(); return; }
      const missing = ORDER.findIndex(m => !answers[m - 1]);
      if (missing >= 0) { pos = missing; renderQ(); return; }
      state = "res"; closeQuiz(); showResult(true);
    }
    document.addEventListener("keydown", e => {
      if (state !== "q") return;
      if (/^[1-9]$/.test(e.key)) { const b = overlay.querySelector(`.opt[data-v="${e.key}"]`); if (b) b.click(); }
      else if (e.key === "ArrowRight" || e.key === "Enter") advance();
      else if (e.key === "ArrowLeft") $("back").click();
      else if (e.key === "Escape") closeQuiz();
    });

    // ---- risultato ----
    function showResult(animate) {
      last = cfg.score(answers); state = "res"; setURL(false);
      renderResult(animate); window.scrollTo({ top: 0, behavior: animate ? "smooth" : "auto" });
    }
    function renderResult(animate) {
      const L = langOf(), u = ui(), out = cfg.render(last, L, answers), url = shareURL();
      const msg = out.summary + "\n" + url, enc = encodeURIComponent;
      root.innerHTML = `<div class="${animate ? "fade" : ""}">
        <section class="hero res-hero">
          <div class="deco">${DECO[u.deco || "heart"]}</div>
          ${mascot(out.mascot || cfg.mascot || "smile")}
          <div>
            <div class="k"><span>${esc(u.resultKicker)}</span><span class="sep">·</span><span>${esc(cfg.code)}</span></div>
            <h1>${esc(out.headline || u.title)}</h1>
            <p class="lede">${esc(out.sub || u.lede)}</p>
          </div>
        </section>
        ${out.html}
        ${cfg.sensitive ? `<div class="help">${u.help}</div>` : ""}
        <div class="card share"><div class="k">${esc(u.share.k)}</div><h2>${esc(u.share.title)}</h2>
          <input type="text" id="shareUrl" readonly value="${esc(url)}" aria-label="URL">
          <div class="row">
            <button class="btn purple" id="btnCopy" type="button">${ICON.copy}${esc(u.share.copy)}</button>
            <div class="ico">
              ${navigator.share ? `<button id="btnSys" type="button">${ICON.share}${esc(u.share.sys)}</button>` : ""}
              <a href="https://wa.me/?text=${enc(msg)}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>
              <a href="https://t.me/share/url?url=${enc(url)}&text=${enc(out.summary)}" target="_blank" rel="noopener">${ICON.tg}Telegram</a>
              <a href="mailto:?subject=${enc(u.share.subject)}&body=${enc(msg)}">${ICON.mail}Email</a>
            </div>
          </div>
          <p class="disc" style="margin-top:12px">${esc(u.share.lab)}</p>
          <div class="acts"><button class="btn ghost" id="btnRetake" type="button">${ICON.redo}${esc(u.retake)}</button><a class="btn ghost" href="index.html">${esc(u.other)}</a></div>
        </div>
        ${infoCards(u)}
        ${calcCard(u)}
      </div>`;
      if (window.ZI18N) window.ZI18N.decorate();
      wireHelp();
      $("btnCopy").onclick = () => {
        const inp = $("shareUrl"); inp.select();
        const done = () => { $("btnCopy").innerHTML = ICON.copy + esc(u.share.copied); setTimeout(() => { $("btnCopy").innerHTML = ICON.copy + esc(u.share.copy); }, 1500); };
        if (navigator.clipboard) navigator.clipboard.writeText(inp.value).then(done, () => { document.execCommand("copy"); done(); });
        else { document.execCommand("copy"); done(); }
      };
      const sys = $("btnSys"); if (sys) sys.onclick = () => navigator.share({ title: document.title, text: out.summary, url }).catch(() => {});
      $("btnRetake").onclick = () => { answers.fill(0); last = null; pos = 0; state = "intro"; setURL(true); renderIntro(); window.scrollTo({ top: 0, behavior: "smooth" }); };
    }

    function applyLang() {
      const L = langOf(), u = ui();
      document.documentElement.lang = L; document.title = u.title + " · psytest";
      if (state === "q") { renderIntro(); renderQ(); } else if (state === "res") renderResult(false); else renderIntro();
    }
    if (window.ZI18N) window.ZI18N.mount($("langPick"));
    window.addEventListener("zlangchange", applyLang);

    const sp = new URLSearchParams(location.search), r = sp.get("r");
    const K = cfg.labels(langOf()).length;
    if (r && new RegExp("^[1-" + K + "]{" + N + "}$").test(r)) {
      for (let i = 0; i < N; i++) answers[i] = +r[i];
      if (sp.get("run") === "1") { last = cfg.score(answers); state = "res"; }
    }
    applyLang();
  }

  window.PSY = { mount, esc, ICON, DECO, mascot };
})();
