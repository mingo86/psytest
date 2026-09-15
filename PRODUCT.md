# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS, nessun build step, deploy su Vercel (progetto `attaccamento-zine`). Scelto prima di init, confermato dalla base esistente.

## Users

Pubblico generico che arriva da un link condiviso in chat o sui social. Lo compila sul telefono in ~5 minuti, da solo, spesso in un momento di curiosità su sé stesso o su una relazione. Poi condivide il risultato con chi gli ha mandato il link (confermato dall'utente).

## Product Purpose

**psytest** (nome scelto dall'utente) è un plico di questionari psicologici validati, calcolati sul dispositivo:

- **Modulo 01 · ECR-R** (Experiences in Close Relationships – Revised, Fraley, Waller & Brennan 2000): 36 affermazioni su scala 1–7, due dimensioni continue (Ansia ed Evitamento), lettura del profilo più vicino (sicuro / preoccupato / distanziante / timoroso) e un consiglio.
- **Modulo 02 · AAQ-II** (Acceptance and Action Questionnaire – II, Bond, Hayes et al. 2011; versione italiana Pennato, Berrocal, Bernini & Rivas 2013, item forniti dall'utente): 7 affermazioni su scala 1–7 (mai vera – sempre vera), somma 7–49 di evitamento esperienziale, fasce di ricerca (≤17 basso, 18–23 media, >24 disagio rilevante, >28 probabile disturbo), profilo dei 7 item.

Dal 15 set 2026 il plico comprende anche (pagina generica `test.html?t=…`): RQ, ERQ, SCS-SF, UCLA-3, WHO-5, SWLS, PSS-10, RSES, OLBI, CFQ, Mini-IPIP, SD3, IPS, PHQ-9, GAD-7, DASS-21 — tutti di pubblico dominio o liberi per uso non commerciale, IT (validata dove esiste, altrimenti propria) + EN; le altre lingue mostrano le domande in inglese. PHQ-9, GAD-7 e DASS-21 sono marcati `sensitive` e mostrano un box di aiuto con numeri utili. Successo = il test viene finito, il risultato viene capito senza gergo e viene condiviso con un link.

## Positioning

Ogni questionario è quello scientifico completo (item originali, scoring ufficiale, confronto con i campioni di riferimento della letteratura), non un quiz da rivista; ma è presentato senza gergo, in 6 lingue (IT/EN/FR/ES/PT-BR/DE), calcolato interamente in locale, con il risultato riproducibile da un link. Gli autori sconsigliano le categorie rigide: il prodotto mostra le due dimensioni come dato principale e il profilo come lettura.

## Operating Context

- Sessione singola, mobile-first, da link condiviso; nessun account, nessun backend, nessun salvataggio lato server.
- Il risultato vive in un URL (`?r=<36 cifre 1-7>&run=1&lang=xx`) che ricostruisce esattamente il punteggio.
- Sito tenuto fuori dai motori (robots Disallow + meta noindex); circola solo per passaparola.
- Progetto volutamente **separato** da zodiac-zine e ologenetica-zine: nessun link incrociato, nessuna eredità visiva (richiesta esplicita dell'utente).

## Capabilities and Constraints

- ECR-R, 36 item: EN originali (pubblico dominio), IT/FR/ES/PT/DE traduzioni proprie non validate. Scoring: media per dimensione, invertiti 9, 11, 20, 22, 26–31, 33–36; norme M/SD 3,56/1,12 (ansia) e 2,92/1,19 (evitamento); percentile via normale; soglia profilo = media del campione (Fraley suggerisce lo split sulla mediana, non disponibile).
- AAQ-II, 7 item: IT = versione validata Pennato et al. 2013, EN = originale Bond et al. 2011, FR/ES/PT/DE traduzioni proprie non validate. Scoring: somma 7–49, nessun item invertito; soglie 24 e 28 sono di ricerca, non diagnostiche; media popolazione generale ~18–20.
- Motore condiviso `psy/app.js` (una domanda per schermata, K opzioni) + `psy/generic.js` (scoring e render da definizione) + `psy/app.css`.
- Uso **gratuito e non commerciale** (confermato dall'utente): l'ECR-R è di pubblico dominio solo per uso non commerciale; qualsiasi monetizzazione richiede permesso agli autori.
- Font da Google Fonts consentiti; nessun asset esterno oltre a quello.
- Non è uno strumento diagnostico: il disclaimer resta sempre visibile nel risultato.

## Brand Commitments

Nome: **psytest** (minuscolo, dall'utente). Nessun logo, nessuna palette o font vincolanti. Look "app moderna" scelto dall'utente il 15 set 2026 tra anteprime renderizzate (dopo aver scartato il fumetto Zodiac e la scheda a lettura ottica): gradiente, card, una domanda per schermata.

## Evidence on Hand

- ECR-R: item, scoring e norme in `tests/ecrr.js` (fonte: pagina ufficiale di Fraley, labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm). Citazione: Fraley, Waller & Brennan (2000), JPSP, 78, 350–365.
- AAQ-II: item, scale e fasce in `tests/aaq.js` (fonte: file `aaq-ii.html` fornito dall'utente, 15 set 2026). Citazioni: Bond et al. (2011), Behavior Therapy, 42, 676–688; Pennato et al. (2013), Journal of Psychopathology.
- Nessuna testimonianza, nessun dato d'uso, nessun numero di utenti: non inventarli.

## Product Principles

1. Il questionario prima di tutto: 36 risposte sul telefono devono scorrere senza fatica e senza perdere il segno.
2. Le dimensioni sono il dato, il profilo è una lettura: mai far sembrare le quattro categorie una diagnosi.
3. Il risultato deve essere comprensibile in dieci secondi e condivisibile in uno: il link è parte del prodotto.
4. Serietà senza freddezza: rigore psicometrico dichiarato, voce che parla al lettore in seconda persona.
5. Tutto in locale, tutto trasparente: come si calcola e cosa viene condiviso è sempre scritto.
