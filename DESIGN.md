# DESIGN — psytest

Mondo visivo **"scheda + finestra"** (20 set 2026, dal riferimento visivo fornito dall'utente; ha sostituito l'"app moderna" a gradiente). Ground truth: `psy/app.css`.

## Palette
- Pagina chiara `--bg #eef0f5`, card bianche raggio 24 con ombra morbida, inchiostri `#1f1a3a / #4d4870 / #8783a3`.
- Hero e finestra del test: gradiente `--pur #5b4bd6 → --pur2 #6c5ce7` (temi per gruppo via `data-theme`: teal, sun, ocean, rose, plum, slate cambiano solo il viola).
- Pastelli per le card informative e i numeri: lilla `#e9e4fb`, giallo `#fbf0c4`, rosa `#fbe0e6`, verde `#e2f4e5`, blu `#e0e8fb`.
- Mascotte: blob menta `#7ee0c2` con anello scuro, sempre menta su ogni tema; varianti eyes / glasses / smile / sleepy.
- Cerchi numerati delle opzioni: rosa, arancio, giallo, blu, verde, viola, teal (`--o1…--o9`).

## Tipografia
Fraunces 700–900 (titoli hero, domande, nomi delle fasce, brand), Inter 400–800 (testo), JetBrains Mono 500–600 (kicker maiuscoli con tracking .14em, contatori, etichette).

## Componenti
- **Hero**: mascotte 200px, kicker mono `TEST · CODICE · ✓ VALIDATO`, h1 serif, tag con pallino, lede in grassetto, chip (domande, minuti, calcolato sul telefono, solo tu lo vedi), bottone bianco «Inizia il test», icona contorno in alto a destra (cuore / sole / cervello / nuvola per gruppo).
- **Tre card pastello**: Chi l'ha costruito (lilla, DNA) · Con chi ti confronti (giallo, bussola) · Cosa non dice (rosa, nuvola).
- **Come si calcola**: card bianca, titolo "… Nessuna magia.", tre tile con numero grande (verde/blu/giallo), disclaimer con link «Se stai male adesso» che apre il box aiuto.
- **Finestra del test** (`.overlay > .quiz`): sfondo sfocato, pannello viola raggio 32; testata `CODICE · i / N` + segmenti (fatti chiari, corrente giallo) + X; card bianca con mascotte e domanda serif + sottotitolo; opzioni a riquadri bianchi con cerchio numerato colorato ed etichetta; Indietro · `tastiera 1-K` · Avanti. Auto-avanzamento 240 ms, tasti 1-K/frecce/Esc.
- **Risultato**: hero con headline (fascia o profilo) e sottotitolo; card Punteggio (numero serif grande o anello + nome fascia + testo + scala a fasce + chip fasce); card Profilo (barre per sottoscala con etichetta mono); card pastello verde per il consiglio; card Condividi (URL, Copia link viola, Condividi/WhatsApp/Telegram/Email, Rifai/Altri test); poi le tre card e Come si calcola.
- **Hub**: hero viola con mascotte, gruppi con titolo serif, card test bianche (kicker con pallino colorato, titolo serif, descrizione, chip, «Inizia →»).

## Regole
1. Il viola è solo di hero e finestra; il resto è chiaro e pastello.
2. Una domanda per volta nella finestra; la pagina sotto resta la scheda del test.
3. Ogni test ha le stesse cinque sezioni: hero, tre card, come si calcola, (risultato), condivisione.
4. Il box di aiuto è sempre raggiungibile dal link «Se stai male adesso» e appare da solo nei test di screening.
