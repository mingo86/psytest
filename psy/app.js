/* ============================================================
   PSYTEST · APP ENGINE — una domanda per schermata
   PSY.mount(cfg) disegna intro → domande (con avanzamento,
   avanti/indietro, tastiera 1-7) → risultato (render del modulo)
   con box di condivisione e link ricostruibile.
   cfg: { code, n, order?, items(L)->[], labels(L)->[7], ui(L)->{...},
          score(answers)->res, render(res, L, answers)->{html, summary} }
   Link: ?r=<n cifre 1-7>&run=1&lang=xx
   ============================================================ */
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const langOf = () => window.ZI18N ? window.ZI18N.get() : "it";
  const ICON = {
    link: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.5 9.5a3 3 0 0 0 4.2 0l2.4-2.4a3 3 0 0 0-4.2-4.2L7.6 4.2l1.1 1.1 1.3-1.3a1.5 1.5 0 0 1 2.1 2.1L9.7 8.5a1.5 1.5 0 0 1-2.1 0zM9.5 6.5a3 3 0 0 0-4.2 0L2.9 8.9a3 3 0 0 0 4.2 4.2l1.3-1.3-1.1-1.1L6 12a1.5 1.5 0 0 1-2.1-2.1l2.4-2.4a1.5 1.5 0 0 1 2.1 0z"/></svg>',
    copy: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 1h8a1 1 0 0 1 1 1v8h-1.5V2.5H5zM2 4h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm.5 1.5v8h7v-8z"/></svg>',
    share: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1l3.5 3.5-1 1L8.75 3.8V10h-1.5V3.8L5.5 5.5l-1-1zM3 8h2v1.5H4.5v4h7v-4H11V8h2v7H3z"/></svg>',
    mail: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1 3h14v10H1zm1.5 1.5v.6L8 8.9l5.5-3.8v-.6zm0 2.4v4.6h11V6.9L8 10.7z"/></svg>',
    wa: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5A6.5 6.5 0 0 0 2.4 11.3L1.5 14.5l3.3-.9A6.5 6.5 0 1 0 8 1.5zm0 1.3a5.2 5.2 0 1 1-2.7 9.7l-.3-.2-1.7.5.5-1.6-.2-.3A5.2 5.2 0 0 1 8 2.8zM5.9 5c-.2 0-.4.1-.6.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.2 3.4 3 1.7.7 2 .5 2.4.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1l-.4-.2-1.4-.7c-.2-.1-.3 0-.5.1l-.6.8c-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1.1-.6-.6-1-1.2-1.2-1.4-.1-.2 0-.3.1-.4l.3-.4.2-.4v-.4l-.6-1.5c-.2-.3-.3-.3-.5-.3z"/></svg>',
    tg: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14.5 2.2L1.9 7.1c-.7.3-.7.7 0 .9l3.2 1 1.2 3.7c.1.4.3.5.6.3l1.8-1.5 3.3 2.4c.5.3.9.1 1-.5l2.1-10.1c.2-.8-.2-1.2-.6-1.1zM5.6 8.7l6.3-4c.3-.2.5 0 .3.2L7 9.8l-.2 2.2-1.2-3.3z"/></svg>',
    back: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10.5 2L4.5 8l6 6 1.4-1.4L7.3 8l4.6-4.6z"/></svg>',
    next: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 2l6 6-6 6-1.4-1.4L8.7 8 4.1 3.4z"/></svg>',
    redo: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3a5 5 0 1 1-4.6 3h1.7A3.5 3.5 0 1 0 8 4.5V7L4 4l4-3z"/></svg>'
  };

  function mount(cfg) {
    const N = cfg.n;
    const ORDER = cfg.order || Array.from({ length: N }, (_, i) => i + 1);
    const answers = new Array(N).fill(0);
    let state = "intro", pos = 0, last = null;
    const root = $("app");
    const ui = () => cfg.ui(langOf());

    function shareURL() {
      const u = new URL(location.href); u.search = "";
      u.searchParams.set("r", answers.join("")); u.searchParams.set("run", "1"); u.searchParams.set("lang", langOf());
      return u.href;
    }
    function setURL(clear) {
      try {
        if (clear) { const u = new URL(location.href); u.searchParams.delete("r"); u.searchParams.delete("run"); history.replaceState(null, "", u.pathname.split("/").pop() + u.search); }
        else history.replaceState(null, "", shareURL().slice(location.origin.length).split("/").pop());
      } catch (e) {}
    }

    function renderIntro() {
      const u = ui();
      root.innerHTML = `<div class="card fade">
        <span class="kicker">${esc(u.kicker)}</span>
        <h1>${esc(u.title)}</h1>
        <p class="lede">${esc(u.lede)}</p>
        <div class="meta">${u.meta.map(m => `<span>${esc(m)}</span>`).join("")}</div>
        <div class="instr">${u.instr}</div>
        <button class="btn full" id="start" type="button">${esc(u.start)}${ICON.next}</button>
        <p class="hint">${esc(u.privacy)}</p>
      </div>`;
      $("start").onclick = () => { state = "q"; pos = ORDER.findIndex(n => !answers[n - 1]); if (pos < 0) pos = 0; renderQ(); };
    }

    function renderQ() {
      const L = langOf(), u = ui(), items = cfg.items(L), labels = cfg.labels(L);
      const n = ORDER[pos], done = answers.filter(Boolean).length, pct = Math.round(done / N * 100);
      root.innerHTML = `<div class="card fade">
        <span class="kicker">${esc(u.kicker)}</span>
        <div class="prog" style="margin-top:16px"><span>${done} / ${N}</span><div class="bar"><i style="width:${pct}%"></i></div><span>${pct}%</span></div>
        <div class="qn">${esc(u.qn(pos + 1, N))}</div>
        <p class="q" id="qtxt">${esc(items[n - 1])}</p>
        <div class="opts" role="radiogroup" aria-label="${esc(items[n - 1])}">${labels.map((t, i) => `<button class="opt${answers[n - 1] === i + 1 ? " on" : ""}" type="button" role="radio" aria-checked="${answers[n - 1] === i + 1}" data-v="${i + 1}"><span>${esc(t)}</span><b>${i + 1}</b></button>`).join("")}</div>
        <div class="nav"><button class="btn ghost" id="back" type="button">${ICON.back}${esc(u.back)}</button><button class="btn" id="next" type="button" ${answers[n - 1] ? "" : "disabled"}>${esc(pos === N - 1 ? u.finish : u.next)}${ICON.next}</button></div>
        <p class="hint">${esc(u.keys)}</p>
      </div>`;
      root.querySelectorAll(".opt").forEach(b => {
        b.onclick = () => {
          answers[n - 1] = +b.dataset.v;
          root.querySelectorAll(".opt").forEach(x => { x.classList.remove("on"); x.setAttribute("aria-checked", "false"); });
          b.classList.add("on"); b.setAttribute("aria-checked", "true");
          $("next").disabled = false;
          setTimeout(advance, 260);
        };
      });
      $("back").onclick = () => { if (pos === 0) { state = "intro"; renderIntro(); } else { pos--; renderQ(); } };
      $("next").onclick = advance;
      root.querySelector(".card").scrollIntoView({ block: "start" });
    }
    function advance() {
      const n = ORDER[pos]; if (!answers[n - 1]) return;
      if (pos < N - 1) { pos++; renderQ(); return; }
      const missing = ORDER.findIndex(m => !answers[m - 1]);
      if (missing >= 0) { pos = missing; renderQ(); return; }
      showResult(true);
    }
    function onKey(e) {
      if (state !== "q") return;
      if (/^[1-7]$/.test(e.key)) { const b = root.querySelector(`.opt[data-v="${e.key}"]`); if (b) b.click(); }
      else if (e.key === "ArrowRight" || e.key === "Enter") advance();
      else if (e.key === "ArrowLeft") $("back").click();
    }
    document.addEventListener("keydown", onKey);

    function showResult(animate) {
      last = cfg.score(answers); state = "res"; setURL(false);
      renderResult(animate); window.scrollTo({ top: 0, behavior: animate ? "smooth" : "auto" });
    }
    function renderResult(animate) {
      const L = langOf(), u = ui(), out = cfg.render(last, L, answers), url = shareURL();
      const msg = out.summary + "\n" + url, enc = encodeURIComponent;
      root.innerHTML = `<div class="card res${animate ? " fade" : ""}">
        <span class="kicker">${esc(u.resultKicker)}</span>
        ${out.html}
        <div class="sharebox" id="share">
          <h3>${esc(u.share.title)}</h3><p>${esc(u.share.lab)}</p>
          <input type="text" id="shareUrl" readonly value="${esc(url)}" aria-label="URL">
          <div class="row">
            <button class="btn" id="btnCopy" type="button">${ICON.copy}${esc(u.share.copy)}</button>
            <div class="ico">
              ${navigator.share ? `<button id="btnSys" type="button">${ICON.share}${esc(u.share.sys)}</button>` : ""}
              <a href="https://wa.me/?text=${enc(msg)}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>
              <a href="https://t.me/share/url?url=${enc(url)}&text=${enc(out.summary)}" target="_blank" rel="noopener">${ICON.tg}Telegram</a>
              <a href="mailto:?subject=${enc(u.share.subject)}&body=${enc(msg)}">${ICON.mail}Email</a>
            </div>
          </div>
        </div>
        <div class="acts"><button class="btn ghost" id="btnRetake" type="button">${ICON.redo}${esc(u.retake)}</button><a class="btn ghost" href="index.html">${esc(u.other)}</a></div>
      </div>`;
      if (window.ZI18N) window.ZI18N.decorate();
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
      if (state === "intro") renderIntro(); else if (state === "q") renderQ(); else renderResult(false);
    }
    if (window.ZI18N) window.ZI18N.mount($("langPick"));
    window.addEventListener("zlangchange", applyLang);

    const sp = new URLSearchParams(location.search), r = sp.get("r");
    if (r && new RegExp("^[1-7]{" + N + "}$").test(r)) {
      for (let i = 0; i < N; i++) answers[i] = +r[i];
      if (sp.get("run") === "1") { last = cfg.score(answers); state = "res"; }
    }
    applyLang();
  }

  window.PSY = { mount, esc, ICON };
})();
