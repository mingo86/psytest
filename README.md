# psytest

Sito statico a sé (non linkato dallo Zodiac né dall'Ologenetica): un **plico di questionari psicologici validati**, compilati e calcolati sul dispositivo, in 6 lingue (IT/EN/FR/ES/PT-BR/DE). Mondo visivo: **scheda + finestra** — pagina chiara, hero viola con mascotte e titolo serif (Fraunces), tre card pastello (chi l'ha costruito / con chi ti confronti / cosa non dice), card «come si calcola» con tre numeri; il test si apre in una finestra sopra la pagina con opzioni a riquadri numerati colorati. Vedi `DESIGN.md`.

## Pagine
- `index.html` — hub a gruppi: Relazioni ed emozioni · Benessere e stress · Mente e personalità · Umore e ansia (screening)
- `test.html?t=<id>` — pagina di ogni test (definizione in `tests/<id>.js`, scheda in `tests/pages.js`): ecrr, aaq (render dedicati, 6 lingue), rq, erq, scssf, ucla3, who5, swls, pss10, rses, olbi, cfq, miniipip, sd3, ips, phq9, gad7, dass21

Ogni risultato ha il box **«Condividi il tuo risultato»**: `?r=<cifre>&run=1&lang=xx` (più `t=` per i test generici) ricostruisce esattamente il risultato; copia link, condivisione di sistema, WhatsApp, Telegram, email. I test di screening (PHQ-9, GAD-7, DASS-21) mostrano un box di aiuto con numeri utili.

## Struttura
- `psy/app.css` — stile (token, card, opzioni, risultato, condivisione)
- `psy/generic.js` — pagina generica: carica `tests/<id>.js`, scoring (valori, item invertiti, sottoscale somma/media/×k, fasce) e render (punteggio grande + scala a fasce, profilo per sottoscala, `pick` per il profilo prevalente, come si legge, citazione)
- `ecr-r.html`, `aaq-ii.html` — redirect ai vecchi link
- `psy/app.js` — motore condiviso (intro → una domanda per schermata → risultato): `PSY.mount({code, n, order?, items(L), labels(L), ui(L), score(answers), render(res, L, answers)})`
- `tests/*.js` — definizioni: `{code, theme, sensitive, n, values, reverse, labels:{L}, items:{L}, text:{L}, scales:[…], main}`; IT + EN obbligatorie, le altre lingue ricadono su EN. `tests/ecrr.js`, `tests/aaq.js` — item (EN originali, IT validato per AAQ-II, altre lingue tradotte non validate), testi dei risultati, norme, scoring
- `lang/i18n.js` — selettore lingua (da zodiac-zine, senza CSS iniettato)

Per aggiungere un test: un file `tests/<id>.js` nel formato sopra e una card nel registro `REG` di `index.html`. Localmente `serve` fa redirect a URL senza `.html` perdendo la query: per provare usa `/test?t=<id>`.

## Licenze
Strumenti di pubblico dominio **per uso non commerciale**; l'uso commerciale richiede il permesso degli autori. Non sono strumenti diagnostici.

## Avvio / Deploy
Preview: `npx serve -p 4323 .` (config `attach-preview` in `../Zodiac/.claude/launch.json`). Online su Vercel (account mingo86): `npx vercel deploy --prod --yes --scope mingo86s-projects`. `robots.txt` + meta noindex.
