# psytest

Sito statico a sé (non linkato dallo Zodiac né dall'Ologenetica): un **plico di questionari psicologici validati**, compilati e calcolati sul dispositivo, in 6 lingue (IT/EN/FR/ES/PT-BR/DE). Mondo visivo: **app moderna** — gradiente indaco→rosa (teal per il test 2), card bianche, una domanda per schermata con risposte per esteso, barra di avanzamento, risultato con anello/chip/barre, box di condivisione. Vedi `PRODUCT.md` e `DESIGN.md`.

## Pagine
- `index.html` — hub: le card dei test
- `ecr-r.html` — Test 1 · ECR-R, stile di attaccamento (Fraley, Waller & Brennan 2000): 36 item, Ansia/Evitamento, percentile vs campione online, mappa dei 4 profili
- `aaq-ii.html` — Test 2 · AAQ-II, flessibilità psicologica (Bond et al. 2011; IT Pennato et al. 2013): 7 item, somma 7–49, fasce di ricerca, profilo dei 7 item

Ogni risultato ha il box **«Condividi il tuo risultato»**: `?r=<cifre 1-7>&run=1&lang=xx` ricostruisce esattamente il risultato; copia link, condivisione di sistema, WhatsApp, Telegram, email.

## Struttura
- `psy/app.css` — stile (token, card, opzioni, risultato, condivisione)
- `psy/app.js` — motore condiviso (intro → una domanda per schermata → risultato): `PSY.mount({code, n, order?, items(L), labels(L), ui(L), score(answers), render(res, L, answers)})`
- `tests/ecrr.js`, `tests/aaq.js` — item (EN originali, IT validato per AAQ-II, altre lingue tradotte non validate), testi dei risultati, norme, scoring
- `lang/i18n.js` — selettore lingua (da zodiac-zine, senza CSS iniettato)

Per aggiungere un modulo: un file dati in `tests/`, una pagina che chiama `PSY.mount`, una riga nell'hub.

## Licenze
Strumenti di pubblico dominio **per uso non commerciale**; l'uso commerciale richiede il permesso degli autori. Non sono strumenti diagnostici.

## Avvio / Deploy
Preview: `npx serve -p 4323 .` (config `attach-preview` in `../Zodiac/.claude/launch.json`). Online su Vercel (account mingo86): `npx vercel deploy --prod --yes --scope mingo86s-projects`. `robots.txt` + meta noindex.
