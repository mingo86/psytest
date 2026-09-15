# DESIGN — psytest

Mondo visivo **"app moderna"** (scelto dall'utente il 15 set 2026 tra anteprime renderizzate; ha sostituito la "scheda a lettura ottica"). Ground truth: `psy/app.css`.

## Palette
- Sfondo: gradiente a 150° `--g1 #5b4bff → --g2 #b04bff → --g3 #ff5b9e` (indaco→viola→rosa), `background-attachment:fixed`. Temi per gruppo via `data-theme` (body o card): **teal** (ACT: `#0891b2 → #0d9488 → #84cc16`), **sun** (benessere, ambra→arancio→rosa), **ocean** (stress/solitudine/burnout, blu→ciano), **rose** (emozioni), **plum** (personalità), **slate** (screening: grigio-ardesia con accento teal).
- Accenti: `--acc #5b4bff`, `--acc2 #ff5b9e`; tinte chiare `--acc-l #f3f1ff`, `--acc-l2 #ffe6ef`; testo su tinta `--acc-t #4a3bd8`, `--acc2-t #d6336c`.
- Inchiostri: `--ink #1b1740`, `--ink2 #5a5680`, `--ink3 #8f8bb0`; superfici `--card #fff`, `--soft #f3f1ff`, `--line #e9e6fb`.
- Semaforo della scala AAQ-II: `--acc-l` (basso) / `--soft` (media) / `#fde68a` (soglia) / `#fca5a5` (clinica).

## Tipografia
Manrope 500/600/700/800 (Google Fonts). Titolo card `clamp(26px,4vw,34px)` 800; hero hub `clamp(34px,6vw,56px)`; domanda 22px 700 (20 su mobile); corpo 15–15.5px; chip/kicker 12–12.5px 700; kicker maiuscolo con `letter-spacing .06em`.

## Componenti
- **Card** bianca, raggio 24 (20 su mobile), ombra `0 24px 60px rgba(30,10,80,.35)`, max 620px centrata; hub a due colonne (`.tests`).
- **Kicker** pillola su `--acc-l`; **meta** pillole su `--soft`; **istruzioni** box `--soft` raggio 16.
- **Barra di avanzamento** 10px, riempimento gradiente `--acc → --acc2`.
- **Opzione** (`.opt`): riga 54px, bordo 2px `--line`, raggio 14, etichetta a sinistra + numero in cerchio a destra; selezionata: bordo e cerchio `--acc`, fondo `--acc-l`. Auto-avanzamento 260ms dopo la scelta; tastiera 1–7 e frecce.
- **Pulsanti** (`.btn`): 50px, raggio 14, gradiente `--acc → --g2`, ombra; `.ghost` su `--soft`.
- **Risultato**: anello conic (`.ring`, `--p` = % sicurezza), nome profilo 28px 800 + sottotitolo, chip (alternate `--acc-l`/`--acc-l2`), barre dimensione con marker della media (`em[data-l]`), mappa SVG 300×300 con quadrante attivo `--acc-l` e punto `--acc`, box consiglio (`.tip`, gradiente delle tinte chiare), sezioni separate da `--line`.
- **Condivisione** (`.sharebox`): gradiente tinte chiare, raggio 18, input URL, «Copia link» pieno + pulsanti bianchi con icone SVG (Condividi di sistema, WhatsApp, Telegram, Email).
- **Risultato generico** (`psy/generic.js`): h1 del test, punteggio grande + scala a fasce colorate (`.scale` con gradiente calcolato dalle fasce) + chip delle fasce (`.bands`), profilo per sottoscala (`.prof .dim` con etichetta di fascia), `.help` arancione per i test sensibili.
- **Motion**: `.fade` (opacity+8px, .28s) a ogni cambio schermata; rispetta `prefers-reduced-motion`.

## Regole
1. Una domanda per schermata; il numero della domanda e la barra dicono sempre dove sei.
2. Il colore è il gradiente di sfondo e gli accenti; le card restano bianche.
3. Ogni test ha il proprio tema (indaco/rosa, teal) ma la stessa anatomia.
4. Il link condivisibile è sempre l'ultimo blocco della card risultato, mai un modale.
