/* ============================================================
   PSYTEST · MODULO 01 — ECR-R (dati e scoring)
   Experiences in Close Relationships – Revised
   Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000). JPSP, 78, 350-365.
   Strumento di pubblico dominio per uso non commerciale.
   Item 1-18 = Ansia, 19-36 = Evitamento. Invertiti (8-x):
   9, 11, 20, 22, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36.
   Testi IT/FR/ES/PT/DE: traduzioni proprie; EN = originale.
   ============================================================ */
(function () {
  const ITEMS = {
    en: [
      "I'm afraid that I will lose my partner's love.",
      "I often worry that my partner will not want to stay with me.",
      "I often worry that my partner doesn't really love me.",
      "I worry that romantic partners won't care about me as much as I care about them.",
      "I often wish that my partner's feelings for me were as strong as my feelings for him or her.",
      "I worry a lot about my relationships.",
      "When my partner is out of sight, I worry that he or she might become interested in someone else.",
      "When I show my feelings for romantic partners, I'm afraid they will not feel the same about me.",
      "I rarely worry about my partner leaving me.",
      "My romantic partner makes me doubt myself.",
      "I do not often worry about being abandoned.",
      "I find that my partner(s) don't want to get as close as I would like.",
      "Sometimes romantic partners change their feelings about me for no apparent reason.",
      "My desire to be very close sometimes scares people away.",
      "I'm afraid that once a romantic partner gets to know me, he or she won't like who I really am.",
      "It makes me mad that I don't get the affection and support I need from my partner.",
      "I worry that I won't measure up to other people.",
      "My partner only seems to notice me when I'm angry.",
      "I prefer not to show a partner how I feel deep down.",
      "I feel comfortable sharing my private thoughts and feelings with my partner.",
      "I find it difficult to allow myself to depend on romantic partners.",
      "I am very comfortable being close to romantic partners.",
      "I don't feel comfortable opening up to romantic partners.",
      "I prefer not to be too close to romantic partners.",
      "I get uncomfortable when a romantic partner wants to be very close.",
      "I find it relatively easy to get close to my partner.",
      "It's not difficult for me to get close to my partner.",
      "I usually discuss my problems and concerns with my partner.",
      "It helps to turn to my romantic partner in times of need.",
      "I tell my partner just about everything.",
      "I talk things over with my partner.",
      "I am nervous when partners get too close to me.",
      "I feel comfortable depending on romantic partners.",
      "I find it easy to depend on romantic partners.",
      "It's easy for me to be affectionate with my partner.",
      "My partner really understands me and my needs."
    ],
    it: [
      "Ho paura di perdere l'amore del mio partner.",
      "Mi preoccupo spesso che il mio partner non voglia restare con me.",
      "Mi preoccupo spesso che il mio partner non mi ami davvero.",
      "Temo che i partner non tengano a me quanto io tengo a loro.",
      "Spesso vorrei che i sentimenti del mio partner per me fossero forti quanto i miei per lui/lei.",
      "Mi preoccupo molto per le mie relazioni.",
      "Quando il mio partner non è con me, temo che possa interessarsi a qualcun altro.",
      "Quando mostro i miei sentimenti a un partner, ho paura che non provi lo stesso per me.",
      "Raramente mi preoccupo che il mio partner mi lasci.",
      "Il mio partner mi fa dubitare di me stesso/a.",
      "Non mi preoccupo spesso di essere abbandonato/a.",
      "Trovo che i miei partner non vogliano avvicinarsi quanto vorrei io.",
      "A volte i partner cambiano i loro sentimenti verso di me senza un motivo apparente.",
      "Il mio desiderio di grande vicinanza a volte spaventa e allontana le persone.",
      "Ho paura che, una volta che un partner mi conosce davvero, non gli piaccia chi sono.",
      "Mi fa arrabbiare non ricevere dal mio partner l'affetto e il sostegno di cui ho bisogno.",
      "Temo di non essere all'altezza degli altri.",
      "Il mio partner sembra notarmi solo quando sono arrabbiato/a.",
      "Preferisco non mostrare a un partner ciò che provo nel profondo.",
      "Mi sento a mio agio a condividere pensieri e sentimenti intimi con il mio partner.",
      "Faccio fatica a permettermi di dipendere da un partner.",
      "Mi sento molto a mio agio nella vicinanza con un partner.",
      "Non mi sento a mio agio ad aprirmi con un partner.",
      "Preferisco non essere troppo vicino/a a un partner.",
      "Mi sento a disagio quando un partner vuole essere molto vicino.",
      "Trovo relativamente facile avvicinarmi al mio partner.",
      "Non è difficile per me essere vicino/a al mio partner.",
      "Di solito parlo dei miei problemi e delle mie preoccupazioni con il mio partner.",
      "Nei momenti di bisogno mi aiuta rivolgermi al mio partner.",
      "Racconto al mio partner praticamente tutto.",
      "Discuto le cose con il mio partner.",
      "Sono nervoso/a quando un partner mi si avvicina troppo.",
      "Mi sento a mio agio a dipendere da un partner.",
      "Trovo facile dipendere da un partner.",
      "Per me è facile essere affettuoso/a con il mio partner.",
      "Il mio partner capisce davvero me e i miei bisogni."
    ],
    fr: [
      "J'ai peur de perdre l'amour de mon/ma partenaire.",
      "Je crains souvent que mon/ma partenaire ne veuille pas rester avec moi.",
      "Je crains souvent que mon/ma partenaire ne m'aime pas vraiment.",
      "Je crains que mes partenaires ne tiennent pas à moi autant que je tiens à eux.",
      "Je souhaite souvent que les sentiments de mon/ma partenaire pour moi soient aussi forts que les miens.",
      "Je m'inquiète beaucoup pour mes relations.",
      "Quand mon/ma partenaire n'est pas là, je crains qu'il ou elle s'intéresse à quelqu'un d'autre.",
      "Quand je montre mes sentiments à un(e) partenaire, j'ai peur qu'il ou elle ne ressente pas la même chose.",
      "Je m'inquiète rarement que mon/ma partenaire me quitte.",
      "Mon/ma partenaire me fait douter de moi.",
      "Je ne m'inquiète pas souvent d'être abandonné(e).",
      "Je trouve que mes partenaires ne veulent pas être aussi proches que je le voudrais.",
      "Parfois, mes partenaires changent de sentiments envers moi sans raison apparente.",
      "Mon désir d'être très proche fait parfois fuir les gens.",
      "J'ai peur qu'une fois qu'un(e) partenaire me connaît vraiment, il ou elle n'aime pas qui je suis.",
      "Ça me met en colère de ne pas recevoir de mon/ma partenaire l'affection et le soutien dont j'ai besoin.",
      "Je crains de ne pas être à la hauteur des autres.",
      "Mon/ma partenaire ne semble me remarquer que quand je suis en colère.",
      "Je préfère ne pas montrer à un(e) partenaire ce que je ressens au fond de moi.",
      "Je me sens à l'aise pour partager mes pensées et sentiments intimes avec mon/ma partenaire.",
      "J'ai du mal à me permettre de dépendre d'un(e) partenaire.",
      "Je me sens très à l'aise dans la proximité avec un(e) partenaire.",
      "Je ne me sens pas à l'aise pour m'ouvrir à un(e) partenaire.",
      "Je préfère ne pas être trop proche d'un(e) partenaire.",
      "Je me sens mal à l'aise quand un(e) partenaire veut être très proche.",
      "Je trouve relativement facile de me rapprocher de mon/ma partenaire.",
      "Ce n'est pas difficile pour moi d'être proche de mon/ma partenaire.",
      "Je parle généralement de mes problèmes et de mes soucis avec mon/ma partenaire.",
      "Dans les moments difficiles, ça m'aide de me tourner vers mon/ma partenaire.",
      "Je raconte pratiquement tout à mon/ma partenaire.",
      "Je discute des choses avec mon/ma partenaire.",
      "Je suis nerveux(se) quand un(e) partenaire se rapproche trop de moi.",
      "Je me sens à l'aise de dépendre d'un(e) partenaire.",
      "Je trouve facile de dépendre d'un(e) partenaire.",
      "C'est facile pour moi d'être affectueux(se) avec mon/ma partenaire.",
      "Mon/ma partenaire me comprend vraiment, moi et mes besoins."
    ],
    es: [
      "Tengo miedo de perder el amor de mi pareja.",
      "A menudo me preocupa que mi pareja no quiera quedarse conmigo.",
      "A menudo me preocupa que mi pareja no me quiera de verdad.",
      "Me preocupa que mis parejas no me quieran tanto como yo las quiero a ellas.",
      "A menudo desearía que los sentimientos de mi pareja hacia mí fueran tan fuertes como los míos.",
      "Me preocupo mucho por mis relaciones.",
      "Cuando mi pareja no está, me preocupa que pueda interesarse por otra persona.",
      "Cuando muestro mis sentimientos a una pareja, temo que no sienta lo mismo por mí.",
      "Rara vez me preocupa que mi pareja me deje.",
      "Mi pareja me hace dudar de mí mismo/a.",
      "No me preocupa a menudo que me abandonen.",
      "Siento que mis parejas no quieren acercarse tanto como yo quisiera.",
      "A veces mis parejas cambian sus sentimientos hacia mí sin motivo aparente.",
      "Mi deseo de estar muy cerca a veces ahuyenta a la gente.",
      "Temo que, cuando una pareja me conozca de verdad, no le guste quien soy realmente.",
      "Me enfada no recibir de mi pareja el cariño y el apoyo que necesito.",
      "Me preocupa no estar a la altura de los demás.",
      "Mi pareja solo parece notarme cuando estoy enfadado/a.",
      "Prefiero no mostrar a una pareja lo que siento en el fondo.",
      "Me siento cómodo/a compartiendo mis pensamientos y sentimientos íntimos con mi pareja.",
      "Me cuesta permitirme depender de una pareja.",
      "Me siento muy cómodo/a en la cercanía con una pareja.",
      "No me siento cómodo/a abriéndome a una pareja.",
      "Prefiero no estar demasiado cerca de una pareja.",
      "Me incomoda que una pareja quiera estar muy cerca.",
      "Me resulta relativamente fácil acercarme a mi pareja.",
      "No me resulta difícil estar cerca de mi pareja.",
      "Normalmente hablo de mis problemas y preocupaciones con mi pareja.",
      "En los momentos difíciles me ayuda acudir a mi pareja.",
      "Le cuento a mi pareja prácticamente todo.",
      "Hablo las cosas con mi pareja.",
      "Me pongo nervioso/a cuando una pareja se acerca demasiado a mí.",
      "Me siento cómodo/a dependiendo de una pareja.",
      "Me resulta fácil depender de una pareja.",
      "Para mí es fácil ser cariñoso/a con mi pareja.",
      "Mi pareja me entiende de verdad a mí y a mis necesidades."
    ],
    pt: [
      "Tenho medo de perder o amor do meu parceiro(a).",
      "Fico preocupado(a) com frequência que meu parceiro(a) não queira ficar comigo.",
      "Fico preocupado(a) com frequência que meu parceiro(a) não me ame de verdade.",
      "Tenho medo de que meus parceiros(as) não se importem comigo tanto quanto eu me importo com eles.",
      "Muitas vezes queria que os sentimentos do meu parceiro(a) por mim fossem tão fortes quanto os meus.",
      "Eu me preocupo muito com os meus relacionamentos.",
      "Quando meu parceiro(a) não está por perto, temo que se interesse por outra pessoa.",
      "Quando mostro meus sentimentos a um parceiro(a), tenho medo de que não sinta o mesmo por mim.",
      "Raramente me preocupo que meu parceiro(a) me deixe.",
      "Meu parceiro(a) me faz duvidar de mim mesmo(a).",
      "Não me preocupo com frequência em ser abandonado(a).",
      "Sinto que meus parceiros(as) não querem se aproximar tanto quanto eu gostaria.",
      "Às vezes meus parceiros(as) mudam os sentimentos por mim sem motivo aparente.",
      "Meu desejo de muita proximidade às vezes afasta as pessoas.",
      "Tenho medo de que, quando um parceiro(a) me conhecer de verdade, não goste de quem eu sou.",
      "Fico com raiva por não receber do meu parceiro(a) o carinho e o apoio de que preciso.",
      "Tenho medo de não estar à altura das outras pessoas.",
      "Meu parceiro(a) só parece me notar quando estou com raiva.",
      "Prefiro não mostrar a um parceiro(a) o que sinto lá no fundo.",
      "Sinto-me à vontade para compartilhar pensamentos e sentimentos íntimos com meu parceiro(a).",
      "Tenho dificuldade em me permitir depender de um parceiro(a).",
      "Sinto-me muito à vontade na proximidade com um parceiro(a).",
      "Não me sinto à vontade para me abrir com um parceiro(a).",
      "Prefiro não ficar próximo(a) demais de um parceiro(a).",
      "Fico desconfortável quando um parceiro(a) quer ficar muito próximo.",
      "Acho relativamente fácil me aproximar do meu parceiro(a).",
      "Não é difícil para mim ser próximo(a) do meu parceiro(a).",
      "Normalmente converso sobre meus problemas e preocupações com meu parceiro(a).",
      "Nos momentos difíceis, ajuda recorrer ao meu parceiro(a).",
      "Conto praticamente tudo ao meu parceiro(a).",
      "Converso sobre as coisas com meu parceiro(a).",
      "Fico nervoso(a) quando um parceiro(a) se aproxima demais de mim.",
      "Sinto-me à vontade dependendo de um parceiro(a).",
      "Acho fácil depender de um parceiro(a).",
      "É fácil para mim ser carinhoso(a) com meu parceiro(a).",
      "Meu parceiro(a) realmente entende a mim e as minhas necessidades."
    ],
    de: [
      "Ich habe Angst, die Liebe meines/meiner Partner:in zu verlieren.",
      "Ich mache mir oft Sorgen, dass mein:e Partner:in nicht bei mir bleiben will.",
      "Ich mache mir oft Sorgen, dass mein:e Partner:in mich nicht wirklich liebt.",
      "Ich fürchte, dass ich Partner:innen nicht so wichtig bin, wie sie mir wichtig sind.",
      "Ich wünschte oft, die Gefühle meines/meiner Partner:in für mich wären so stark wie meine für sie/ihn.",
      "Ich mache mir viele Sorgen um meine Beziehungen.",
      "Wenn mein:e Partner:in nicht da ist, fürchte ich, dass er/sie sich für jemand anderen interessieren könnte.",
      "Wenn ich einem/einer Partner:in meine Gefühle zeige, habe ich Angst, dass er/sie nicht dasselbe empfindet.",
      "Ich mache mir selten Sorgen, dass mein:e Partner:in mich verlässt.",
      "Mein:e Partner:in bringt mich dazu, an mir selbst zu zweifeln.",
      "Ich mache mir nicht oft Sorgen, verlassen zu werden.",
      "Ich habe den Eindruck, dass meine Partner:innen nicht so viel Nähe wollen wie ich.",
      "Manchmal ändern Partner:innen ihre Gefühle für mich ohne ersichtlichen Grund.",
      "Mein Wunsch nach sehr viel Nähe schreckt manchmal Menschen ab.",
      "Ich habe Angst, dass ein:e Partner:in, sobald er/sie mich richtig kennt, nicht mag, wer ich wirklich bin.",
      "Es macht mich wütend, dass ich von meinem/meiner Partner:in nicht die Zuneigung und Unterstützung bekomme, die ich brauche.",
      "Ich habe Angst, anderen nicht gewachsen zu sein.",
      "Mein:e Partner:in scheint mich nur zu bemerken, wenn ich wütend bin.",
      "Ich zeige einem/einer Partner:in lieber nicht, wie ich tief im Inneren fühle.",
      "Ich fühle mich wohl dabei, meine privaten Gedanken und Gefühle mit meinem/meiner Partner:in zu teilen.",
      "Es fällt mir schwer, mir zu erlauben, mich auf Partner:innen zu verlassen.",
      "Ich fühle mich sehr wohl in der Nähe von Partner:innen.",
      "Ich fühle mich nicht wohl dabei, mich Partner:innen gegenüber zu öffnen.",
      "Ich bin Partner:innen lieber nicht zu nah.",
      "Es ist mir unangenehm, wenn ein:e Partner:in sehr viel Nähe will.",
      "Es fällt mir relativ leicht, meinem/meiner Partner:in nahezukommen.",
      "Es ist nicht schwer für mich, meinem/meiner Partner:in nah zu sein.",
      "Ich bespreche meine Probleme und Sorgen normalerweise mit meinem/meiner Partner:in.",
      "In schwierigen Zeiten hilft es mir, mich an meine:n Partner:in zu wenden.",
      "Ich erzähle meinem/meiner Partner:in so gut wie alles.",
      "Ich rede Dinge mit meinem/meiner Partner:in durch.",
      "Ich werde nervös, wenn Partner:innen mir zu nah kommen.",
      "Ich fühle mich wohl dabei, mich auf Partner:innen zu verlassen.",
      "Es fällt mir leicht, mich auf Partner:innen zu verlassen.",
      "Es fällt mir leicht, meinem/meiner Partner:in gegenüber zärtlich zu sein.",
      "Mein:e Partner:in versteht mich und meine Bedürfnisse wirklich."
    ]
  };

  // I 4 profili (lettura del quadrante). Le dimensioni restano il dato principale.
  const STYLES = {
    it: {
      secure:      {n:"Sicuro", tag:"Vicino senza paura", g:"🌿",
        desc:"Ti fidi con relativa facilità: la vicinanza non ti spaventa e la distanza non ti fa andare in allarme. Sai chiedere aiuto e sai darlo, e quando c'è un problema tendi a parlarne invece di scappare o aggrapparti. Non vuol dire che non soffri mai: vuol dire che la relazione è per te una base, non un campo minato.",
        tip:"Il tuo punto di forza è la stabilità. Usala per fare da porto sicuro anche a chi ha uno stile più inquieto, senza però caricarti tutto sulle spalle."},
      preoccupied: {n:"Preoccupato", tag:"Vicino, ma con il cuore in gola", g:"🌊",
        desc:"Desideri molta vicinanza e la vivi intensamente, ma con un sottofondo di allarme: un messaggio che tarda, un tono freddo, e la mente parte a cercare segnali di abbandono. Sei generoso/a con l'affetto e spesso dai più di quanto ricevi, e questo squilibrio ti pesa.",
        tip:"Quando senti salire l'ansia, distingui il fatto («non ha risposto») dalla storia che ti racconti («mi sta lasciando»). Chiedere rassicurazione va bene: chiederla in modo chiaro funziona meglio che mettere l'altro alla prova."},
      dismissing:  {n:"Distanziante", tag:"Sto bene da solo/a, grazie", g:"🏔",
        desc:"Ti senti a tuo agio nella tua autonomia e tendi a tenere una certa distanza emotiva: aprirti fino in fondo o dipendere da qualcuno non ti viene naturale. Non hai grandi paure di abbandono; piuttosto, è la troppa vicinanza a farti chiudere.",
        tip:"L'indipendenza è una risorsa, ma la vicinanza non è una minaccia. Prova a condividere una cosa piccola e vera prima di sentirti «pronto/a»: chi ti ama non vuole invaderti, vuole solo esserci."},
      fearful:     {n:"Timoroso", tag:"Vorrei, ma ho paura", g:"🌪",
        desc:"Desideri la vicinanza e allo stesso tempo la temi: ti avvicini, poi ti ritiri, poi ti manca. Puoi sentire sia la paura di essere lasciato/a sia il disagio quando qualcuno si avvicina troppo. Spesso il risultato è un tira e molla che stanca te per primo/a.",
        tip:"Non devi scegliere tra vicinanza e sicurezza. Vai piano, con persone prevedibili, e dai un nome a quello che senti («ora ho voglia di scappare») invece di agirlo. Se il tema pesa, parlarne con un professionista aiuta davvero."}
    },
    en: {
      secure:      {n:"Secure", tag:"Close without fear", g:"🌿",
        desc:"You trust fairly easily: closeness doesn't scare you and distance doesn't set off alarms. You can ask for help and give it, and when there's a problem you tend to talk about it rather than run or cling. It doesn't mean you never hurt — it means the relationship is a base for you, not a minefield.",
        tip:"Your strength is stability. Use it to be a safe harbour for partners with a more restless style — without carrying everything on your own shoulders."},
      preoccupied: {n:"Preoccupied", tag:"Close, with your heart in your throat", g:"🌊",
        desc:"You want a lot of closeness and feel it intensely, but with an undercurrent of alarm: a late reply, a cool tone, and your mind starts scanning for signs of abandonment. You're generous with affection and often give more than you get, and that imbalance weighs on you.",
        tip:"When the anxiety rises, separate the fact (“they didn't reply”) from the story (“they're leaving me”). Asking for reassurance is fine — asking clearly works better than testing the other person."},
      dismissing:  {n:"Dismissing", tag:"I'm fine on my own, thanks", g:"🏔",
        desc:"You're comfortable in your independence and tend to keep some emotional distance: fully opening up or depending on someone doesn't come naturally. You don't fear abandonment much; it's too much closeness that makes you shut down.",
        tip:"Independence is a resource, but closeness isn't a threat. Try sharing one small, true thing before you feel “ready”: the people who love you don't want to invade, they just want to be there."},
      fearful:     {n:"Fearful", tag:"I want to, but I'm afraid", g:"🌪",
        desc:"You long for closeness and fear it at the same time: you come close, pull back, then miss it. You can feel both the fear of being left and discomfort when someone gets too close. The result is often a push-and-pull that exhausts you first.",
        tip:"You don't have to choose between closeness and safety. Go slowly, with predictable people, and name what you feel (“right now I want to run”) instead of acting on it. If this weighs on you, talking to a professional genuinely helps."}
    },
    fr: {
      secure:      {n:"Sécure", tag:"Proche sans peur", g:"🌿",
        desc:"Tu fais confiance assez facilement : la proximité ne te fait pas peur et la distance ne déclenche pas d'alarme. Tu sais demander de l'aide et en donner, et quand il y a un problème tu en parles plutôt que de fuir ou de t'accrocher. Ça ne veut pas dire que tu ne souffres jamais : ça veut dire que la relation est une base pour toi, pas un champ de mines.",
        tip:"Ta force, c'est la stabilité. Sers-t'en pour être un port sûr aussi pour ceux qui ont un style plus inquiet, sans tout porter sur tes épaules."},
      preoccupied: {n:"Préoccupé", tag:"Proche, mais le cœur serré", g:"🌊",
        desc:"Tu désires beaucoup de proximité et tu la vis intensément, mais avec un fond d'alarme : un message qui tarde, un ton froid, et ton esprit part à la recherche de signes d'abandon. Tu es généreux(se) en affection et tu donnes souvent plus que tu ne reçois, et ce déséquilibre te pèse.",
        tip:"Quand l'anxiété monte, sépare le fait (« il/elle n'a pas répondu ») de l'histoire que tu te racontes (« il/elle me quitte »). Demander à être rassuré(e), c'est bien : le demander clairement marche mieux que de tester l'autre."},
      dismissing:  {n:"Détaché", tag:"Je vais bien tout(e) seul(e), merci", g:"🏔",
        desc:"Tu es à l'aise dans ton autonomie et tu gardes une certaine distance émotionnelle : t'ouvrir complètement ou dépendre de quelqu'un ne te vient pas naturellement. Tu n'as pas grand-peur de l'abandon ; c'est plutôt trop de proximité qui te fait te refermer.",
        tip:"L'indépendance est une ressource, mais la proximité n'est pas une menace. Essaie de partager une petite chose vraie avant de te sentir « prêt(e) » : ceux qui t'aiment ne veulent pas t'envahir, juste être là."},
      fearful:     {n:"Craintif", tag:"Je voudrais, mais j'ai peur", g:"🌪",
        desc:"Tu désires la proximité et tu la crains en même temps : tu t'approches, tu te retires, puis elle te manque. Tu peux ressentir à la fois la peur d'être quitté(e) et le malaise quand quelqu'un se rapproche trop. Le résultat est souvent un va-et-vient qui t'épuise en premier.",
        tip:"Tu n'as pas à choisir entre proximité et sécurité. Vas-y doucement, avec des personnes prévisibles, et nomme ce que tu ressens (« là, j'ai envie de fuir ») au lieu de l'agir. Si le sujet pèse, en parler à un professionnel aide vraiment."}
    },
    es: {
      secure:      {n:"Seguro", tag:"Cerca y sin miedo", g:"🌿",
        desc:"Confías con relativa facilidad: la cercanía no te asusta y la distancia no te pone en alerta. Sabes pedir ayuda y darla, y cuando hay un problema tiendes a hablarlo en vez de huir o aferrarte. No significa que nunca sufras: significa que la relación es para ti una base, no un campo minado.",
        tip:"Tu punto fuerte es la estabilidad. Úsala para ser puerto seguro también para quien tiene un estilo más inquieto, sin cargar con todo tú."},
      preoccupied: {n:"Preocupado", tag:"Cerca, pero con el corazón en un puño", g:"🌊",
        desc:"Deseas mucha cercanía y la vives con intensidad, pero con un fondo de alarma: un mensaje que tarda, un tono frío, y la mente empieza a buscar señales de abandono. Eres generoso/a con el cariño y a menudo das más de lo que recibes, y ese desequilibrio te pesa.",
        tip:"Cuando suba la ansiedad, separa el hecho («no ha contestado») de la historia que te cuentas («me está dejando»). Pedir que te tranquilicen está bien: pedirlo con claridad funciona mejor que poner a prueba al otro."},
      dismissing:  {n:"Evitativo", tag:"Estoy bien solo/a, gracias", g:"🏔",
        desc:"Te sientes a gusto en tu autonomía y tiendes a mantener cierta distancia emocional: abrirte del todo o depender de alguien no te sale natural. No tienes grandes miedos al abandono; más bien, es el exceso de cercanía lo que te hace cerrarte.",
        tip:"La independencia es un recurso, pero la cercanía no es una amenaza. Prueba a compartir algo pequeño y verdadero antes de sentirte «listo/a»: quien te quiere no quiere invadirte, solo estar ahí."},
      fearful:     {n:"Temeroso", tag:"Quiero, pero me da miedo", g:"🌪",
        desc:"Deseas la cercanía y a la vez la temes: te acercas, te retiras, y luego la echas de menos. Puedes sentir tanto el miedo a que te dejen como la incomodidad cuando alguien se acerca demasiado. El resultado suele ser un tira y afloja que te agota a ti primero.",
        tip:"No tienes que elegir entre cercanía y seguridad. Ve despacio, con personas predecibles, y ponle nombre a lo que sientes («ahora tengo ganas de huir») en vez de actuarlo. Si el tema pesa, hablarlo con un profesional ayuda de verdad."}
    },
    pt: {
      secure:      {n:"Seguro", tag:"Perto e sem medo", g:"🌿",
        desc:"Você confia com relativa facilidade: a proximidade não assusta e a distância não dispara alarmes. Sabe pedir ajuda e dar ajuda, e quando há um problema tende a conversar em vez de fugir ou se agarrar. Não significa que nunca sofra: significa que o relacionamento é uma base para você, não um campo minado.",
        tip:"Seu ponto forte é a estabilidade. Use-a para ser um porto seguro também para quem tem um estilo mais inquieto, sem carregar tudo sozinho(a)."},
      preoccupied: {n:"Preocupado", tag:"Perto, mas com o coração na mão", g:"🌊",
        desc:"Você deseja muita proximidade e a vive intensamente, mas com um fundo de alarme: uma mensagem que demora, um tom frio, e a mente sai procurando sinais de abandono. É generoso(a) com o carinho e muitas vezes dá mais do que recebe, e esse desequilíbrio pesa.",
        tip:"Quando a ansiedade subir, separe o fato («não respondeu») da história que você conta a si mesmo(a) («vai me deixar»). Pedir segurança é ok: pedir com clareza funciona melhor do que testar o outro."},
      dismissing:  {n:"Evitativo", tag:"Estou bem sozinho(a), obrigado(a)", g:"🏔",
        desc:"Você se sente bem na sua autonomia e tende a manter certa distância emocional: se abrir por completo ou depender de alguém não vem naturalmente. Não tem grandes medos de abandono; é o excesso de proximidade que faz você se fechar.",
        tip:"Independência é um recurso, mas proximidade não é ameaça. Tente compartilhar uma coisa pequena e verdadeira antes de se sentir «pronto(a)»: quem te ama não quer invadir, só quer estar presente."},
      fearful:     {n:"Temeroso", tag:"Eu quero, mas tenho medo", g:"🌪",
        desc:"Você deseja a proximidade e ao mesmo tempo a teme: se aproxima, recua, depois sente falta. Pode sentir tanto o medo de ser deixado(a) quanto o desconforto quando alguém chega perto demais. O resultado costuma ser um vai-e-vem que cansa você primeiro.",
        tip:"Não precisa escolher entre proximidade e segurança. Vá devagar, com pessoas previsíveis, e dê nome ao que sente («agora estou com vontade de fugir») em vez de agir. Se o tema pesa, conversar com um profissional ajuda de verdade."}
    },
    de: {
      secure:      {n:"Sicher", tag:"Nah, ohne Angst", g:"🌿",
        desc:"Du vertraust relativ leicht: Nähe macht dir keine Angst und Distanz löst keinen Alarm aus. Du kannst um Hilfe bitten und sie geben, und bei Problemen redest du eher, statt zu fliehen oder dich zu klammern. Das heißt nicht, dass du nie leidest – es heißt, dass die Beziehung für dich eine Basis ist, kein Minenfeld.",
        tip:"Deine Stärke ist Stabilität. Nutze sie, um auch für unruhigere Stile ein sicherer Hafen zu sein – ohne alles allein zu tragen."},
      preoccupied: {n:"Ängstlich-verstrickt", tag:"Nah, aber mit Herzklopfen", g:"🌊",
        desc:"Du wünschst dir viel Nähe und erlebst sie intensiv, aber mit einem Unterton von Alarm: eine späte Antwort, ein kühler Ton, und der Kopf sucht nach Zeichen des Verlassenwerdens. Du bist großzügig mit Zuneigung und gibst oft mehr, als du bekommst – und dieses Ungleichgewicht belastet dich.",
        tip:"Wenn die Angst steigt, trenne die Tatsache („keine Antwort“) von der Geschichte („er/sie verlässt mich“). Um Bestätigung zu bitten ist okay – klar darum zu bitten funktioniert besser, als den anderen auf die Probe zu stellen."},
      dismissing:  {n:"Vermeidend", tag:"Mir geht's allein gut, danke", g:"🏔",
        desc:"Du fühlst dich wohl in deiner Unabhängigkeit und hältst eine gewisse emotionale Distanz: dich ganz zu öffnen oder dich auf jemanden zu verlassen, fällt dir nicht leicht. Verlassenwerden fürchtest du kaum – eher ist es zu viel Nähe, die dich dichtmachen lässt.",
        tip:"Unabhängigkeit ist eine Ressource, aber Nähe keine Bedrohung. Teile eine kleine, wahre Sache, bevor du dich „bereit“ fühlst: Wer dich liebt, will dich nicht vereinnahmen, sondern einfach da sein."},
      fearful:     {n:"Ängstlich-vermeidend", tag:"Ich will, aber ich habe Angst", g:"🌪",
        desc:"Du sehnst dich nach Nähe und fürchtest sie zugleich: du kommst näher, ziehst dich zurück, vermisst sie dann. Du kannst sowohl die Angst, verlassen zu werden, als auch Unbehagen spüren, wenn jemand zu nah kommt. Oft entsteht ein Hin und Her, das dich als Erste:n erschöpft.",
        tip:"Du musst nicht zwischen Nähe und Sicherheit wählen. Geh langsam, mit berechenbaren Menschen, und benenne, was du fühlst („jetzt will ich weg“), statt es auszuagieren. Wenn das Thema belastet, hilft ein Gespräch mit einer Fachperson wirklich."}
    }
  };

  // Lettura per fascia (z < -0.5 bassa, > +0.5 alta rispetto al campione di Fraley)
  const BANDS = {
    it: {
      anx:{low:"Ansia bassa: raramente temi di essere lasciato/a o di non contare abbastanza per il partner.",
           mid:"Ansia nella media: qualche preoccupazione sull'amore del partner c'è, come per la maggior parte delle persone.",
           high:"Ansia alta: la paura di perdere il partner o di non essere ricambiato/a è spesso in primo piano."},
      avo:{low:"Evitamento basso: la vicinanza ti è comoda; aprirti e appoggiarti al partner non ti pesa.",
           mid:"Evitamento nella media: alterni apertura e riservatezza, come la maggior parte delle persone.",
           high:"Evitamento alto: tendi a tenere una distanza emotiva e a fare da solo/a piuttosto che appoggiarti al partner."}
    },
    en: {
      anx:{low:"Low anxiety: you rarely fear being left or not mattering enough to your partner.",
           mid:"Average anxiety: some worry about your partner's love is there, as for most people.",
           high:"High anxiety: the fear of losing your partner or not being loved back is often front and centre."},
      avo:{low:"Low avoidance: closeness feels comfortable; opening up and leaning on your partner doesn't weigh on you.",
           mid:"Average avoidance: you alternate openness and reserve, like most people.",
           high:"High avoidance: you tend to keep emotional distance and handle things alone rather than lean on your partner."}
    },
    fr: {
      anx:{low:"Anxiété basse : tu crains rarement d'être quitté(e) ou de ne pas compter assez pour ton/ta partenaire.",
           mid:"Anxiété dans la moyenne : quelques inquiétudes sur l'amour de l'autre, comme la plupart des gens.",
           high:"Anxiété élevée : la peur de perdre l'autre ou de ne pas être aimé(e) en retour est souvent au premier plan."},
      avo:{low:"Évitement bas : la proximité te va bien ; t'ouvrir et t'appuyer sur l'autre ne te pèse pas.",
           mid:"Évitement dans la moyenne : tu alternes ouverture et réserve, comme la plupart des gens.",
           high:"Évitement élevé : tu gardes une distance émotionnelle et tu te débrouilles seul(e) plutôt que de t'appuyer sur l'autre."}
    },
    es: {
      anx:{low:"Ansiedad baja: rara vez temes que te dejen o no importar lo suficiente a tu pareja.",
           mid:"Ansiedad en la media: hay alguna preocupación por el amor de tu pareja, como en la mayoría de la gente.",
           high:"Ansiedad alta: el miedo a perder a tu pareja o a no ser correspondido/a suele estar en primer plano."},
      avo:{low:"Evitación baja: la cercanía te resulta cómoda; abrirte y apoyarte en tu pareja no te pesa.",
           mid:"Evitación en la media: alternas apertura y reserva, como la mayoría de la gente.",
           high:"Evitación alta: tiendes a mantener distancia emocional y a arreglártelas solo/a en vez de apoyarte en tu pareja."}
    },
    pt: {
      anx:{low:"Ansiedade baixa: raramente teme ser deixado(a) ou não importar o bastante para o parceiro(a).",
           mid:"Ansiedade na média: alguma preocupação com o amor do parceiro(a) existe, como na maioria das pessoas.",
           high:"Ansiedade alta: o medo de perder o parceiro(a) ou de não ser correspondido(a) costuma estar em primeiro plano."},
      avo:{low:"Evitação baixa: a proximidade é confortável; se abrir e se apoiar no parceiro(a) não pesa.",
           mid:"Evitação na média: você alterna abertura e reserva, como a maioria das pessoas.",
           high:"Evitação alta: tende a manter distância emocional e a resolver sozinho(a) em vez de se apoiar no parceiro(a)."}
    },
    de: {
      anx:{low:"Niedrige Angst: du fürchtest selten, verlassen zu werden oder deinem/deiner Partner:in nicht genug zu bedeuten.",
           mid:"Durchschnittliche Angst: ein paar Sorgen um die Liebe des anderen gibt es, wie bei den meisten Menschen.",
           high:"Hohe Angst: die Furcht, den anderen zu verlieren oder nicht zurückgeliebt zu werden, steht oft im Vordergrund."},
      avo:{low:"Niedrige Vermeidung: Nähe ist angenehm; dich zu öffnen und anzulehnen fällt dir nicht schwer.",
           mid:"Durchschnittliche Vermeidung: du wechselst zwischen Offenheit und Zurückhaltung, wie die meisten Menschen.",
           high:"Hohe Vermeidung: du hältst emotionale Distanz und regelst Dinge lieber allein, statt dich anzulehnen."}
    }
  };

  // Norme: campione online di Fraley (17.000+ persone, inizio anni 2000)
  const NORMS = { anx:{m:3.56, sd:1.12}, avo:{m:2.92, sd:1.19} };
  const REVERSE = new Set([9, 11, 20, 22, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36]);

  // Funzione di ripartizione normale (approssimazione Abramowitz-Stegun)
  function cdf(z){
    const t = 1/(1+0.2316419*Math.abs(z));
    const d = 0.3989423*Math.exp(-z*z/2);
    let p = d*t*(0.3193815+t*(-0.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));
    return z>0 ? 1-p : p;
  }

  // answers: array di 36 numeri 1..7 (indice 0 = item 1)
  const NORMS_SEX = { all: NORMS, m: { anx:{m:3.57, sd:1.10}, avo:{m:2.94, sd:1.13} }, f: { anx:{m:3.56, sd:1.13}, avo:{m:2.92, sd:1.21} } };
  function score(answers, sex){
    const N = NORMS_SEX[sex] || NORMS;
    let anx=0, avo=0;
    for(let i=0;i<36;i++){
      const n=i+1; let v=answers[i];
      if(REVERSE.has(n)) v=8-v;
      if(n<=18) anx+=v; else avo+=v;
    }
    anx/=18; avo/=18;
    const za=(anx-N.anx.m)/N.anx.sd, zv=(avo-N.avo.m)/N.avo.sd;
    const band=z=>z<-0.5?"low":(z>0.5?"high":"mid");
    const hiA=anx>=N.anx.m, hiV=avo>=N.avo.m;
    const style = !hiA&&!hiV ? "secure" : (hiA&&!hiV ? "preoccupied" : (!hiA&&hiV ? "dismissing" : "fearful"));
    const pct=z=>Math.min(99,Math.max(1,Math.round(cdf(z)*100)));
    return {anx, avo, za, zv, pA:pct(za), pV:pct(zv), bandA:band(za), bandV:band(zv), style, norms:N};
  }

  window.ATTACH = { ITEMS, STYLES, BANDS, NORMS, NORMS_SEX, REVERSE, score };
})();

/* ---- definizione per test.html?t=ecrr (render dedicato) ---- */
(function(){
  const A=window.ATTACH; const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const fmt=(x,L)=>x.toFixed(2).replace(".", L==="en"?".":",");
  const ORDER=[]; for(let i=1;i<=18;i++){ORDER.push(i);ORDER.push(i+18);}
  const LABELS={"it":["Per niente d'accordo","Poco d'accordo","Un po' in disaccordo","Né d'accordo né in disaccordo","Un po' d'accordo","Abbastanza d'accordo","Del tutto d'accordo"],"en":["Strongly disagree","Disagree","Somewhat disagree","Neither agree nor disagree","Somewhat agree","Agree","Strongly agree"],"fr":["Pas du tout d'accord","Pas d'accord","Plutôt pas d'accord","Ni d'accord ni pas d'accord","Plutôt d'accord","D'accord","Tout à fait d'accord"],"es":["Totalmente en desacuerdo","En desacuerdo","Algo en desacuerdo","Ni de acuerdo ni en desacuerdo","Algo de acuerdo","De acuerdo","Totalmente de acuerdo"],"pt":["Discordo totalmente","Discordo","Discordo um pouco","Nem concordo nem discordo","Concordo um pouco","Concordo","Concordo totalmente"],"de":["Stimme gar nicht zu","Stimme nicht zu","Stimme eher nicht zu","Weder noch","Stimme eher zu","Stimme zu","Stimme völlig zu"]};
  const TEXT={"it":{"title":"Come ami, davvero?","lede":"36 domande, 6 minuti. Scopri il tuo stile di attaccamento con l'ECR-R, il test usato nella ricerca. Tutto resta sul tuo telefono.","meta":["36 domande","~6 minuti","6 lingue","Nessun dato inviato"],"instr":"Le frasi riguardano come ti senti nelle relazioni <b>sentimentali in generale</b>, non solo in quella attuale: se ora non hai un partner, pensa alle relazioni passate o a come ti sentiresti. Per ogni frase scegli quanto sei d'accordo, da 1 a 7.","how":"18 domande misurano l'ansia da attaccamento, 18 l'evitamento; ogni dimensione è la media delle risposte da 1 a 7 (14 domande sono invertite). La «sicurezza» è la media delle due dimensioni ribaltata in percentuale, come suggerito da Fraley. Il confronto è con il suo campione online. Tutto è calcolato sul tuo dispositivo.","cite":"L'ECR-R (Fraley, Waller & Brennan, 2000, Journal of Personality and Social Psychology, 78, 350-365) è di pubblico dominio per uso non commerciale. Strumento di auto-esplorazione, non una diagnosi: gli autori sconsigliano le categorie rigide, le due dimensioni sono continue."},"en":{"title":"How do you really love?","lede":"36 questions, 6 minutes. Discover your attachment style with the ECR-R, the test used in research. Everything stays on your phone.","meta":["36 questions","~6 minutes","6 languages","Nothing sent"],"instr":"The statements concern how you feel in <b>emotionally intimate relationships in general</b>, not just your current one: if you are not in a relationship now, think of past ones or how you would feel. For each statement, choose how much you agree, from 1 to 7.","how":"18 questions measure attachment anxiety, 18 avoidance; each dimension is the mean of answers from 1 to 7 (14 questions are reverse-keyed). “Security” is the average of the two dimensions flipped into a percentage, as Fraley suggests. The comparison is with his online sample. Everything is computed on your device.","cite":"The ECR-R (Fraley, Waller & Brennan, 2000, Journal of Personality and Social Psychology, 78, 350-365) is public domain for non-commercial use. A self-exploration tool, not a diagnosis: the authors advise against strict categories, the two dimensions are continuous."},"fr":{"title":"Comment tu aimes, vraiment ?","lede":"36 questions, 6 minutes. Découvre ton style d'attachement avec l'ECR-R, le test utilisé en recherche. Tout reste sur ton téléphone.","meta":["36 questions","~6 minutes","6 langues","Rien n'est envoyé"],"instr":"Les phrases concernent ce que tu ressens dans les relations <b>amoureuses en général</b>, pas seulement dans ta relation actuelle : si tu n'as pas de partenaire, pense aux relations passées ou à ce que tu ressentirais. Pour chaque phrase, choisis ton degré d'accord, de 1 à 7.","how":"18 questions mesurent l'anxiété d'attachement, 18 l'évitement ; chaque dimension est la moyenne des réponses de 1 à 7 (14 questions sont inversées). La « sécurité » est la moyenne des deux dimensions retournée en pourcentage, comme le suggère Fraley. La comparaison se fait avec son échantillon en ligne. Tout est calculé sur ton appareil.","cite":"L'ECR-R (Fraley, Waller & Brennan, 2000, Journal of Personality and Social Psychology, 78, 350-365) est du domaine public pour usage non commercial. Outil d'auto-exploration, pas un diagnostic : les auteurs déconseillent les catégories strictes, les deux dimensions sont continues."},"es":{"title":"¿Cómo amas, de verdad?","lede":"36 preguntas, 6 minutos. Descubre tu estilo de apego con el ECR-R, el test usado en investigación. Todo se queda en tu teléfono.","meta":["36 preguntas","~6 minutos","6 idiomas","No se envía nada"],"instr":"Las frases tratan de cómo te sientes en las relaciones <b>de pareja en general</b>, no solo en la actual: si ahora no tienes pareja, piensa en relaciones pasadas o en cómo te sentirías. Para cada frase, elige cuánto estás de acuerdo, de 1 a 7.","how":"18 preguntas miden la ansiedad de apego y 18 la evitación; cada dimensión es la media de las respuestas de 1 a 7 (14 preguntas están invertidas). La «seguridad» es la media de las dos dimensiones invertida en porcentaje, como sugiere Fraley. La comparación es con su muestra online. Todo se calcula en tu dispositivo.","cite":"El ECR-R (Fraley, Waller & Brennan, 2000, Journal of Personality and Social Psychology, 78, 350-365) es de dominio público para uso no comercial. Herramienta de autoexploración, no un diagnóstico: los autores desaconsejan las categorías rígidas, las dos dimensiones son continuas."},"pt":{"title":"Como você ama, de verdade?","lede":"36 perguntas, 6 minutos. Descubra seu estilo de apego com o ECR-R, o teste usado em pesquisa. Tudo fica no seu celular.","meta":["36 perguntas","~6 minutos","6 idiomas","Nada é enviado"],"instr":"As frases falam de como você se sente nos relacionamentos <b>amorosos em geral</b>, não só no atual: se não tem parceiro(a) agora, pense nos relacionamentos passados ou em como se sentiria. Para cada frase, escolha o quanto concorda, de 1 a 7.","how":"18 perguntas medem a ansiedade de apego e 18 a evitação; cada dimensão é a média das respostas de 1 a 7 (14 perguntas são invertidas). A «segurança» é a média das duas dimensões invertida em porcentagem, como sugere Fraley. A comparação é com a amostra online dele. Tudo é calculado no seu dispositivo.","cite":"O ECR-R (Fraley, Waller & Brennan, 2000, Journal of Personality and Social Psychology, 78, 350-365) é de domínio público para uso não comercial. Ferramenta de autoexploração, não um diagnóstico: os autores desaconselham categorias rígidas, as duas dimensões são contínuas."},"de":{"title":"Wie liebst du wirklich?","lede":"36 Fragen, 6 Minuten. Entdecke deinen Bindungsstil mit dem ECR-R, dem Test aus der Forschung. Alles bleibt auf deinem Handy.","meta":["36 Fragen","~6 Minuten","6 Sprachen","Nichts wird gesendet"],"instr":"Die Aussagen betreffen, wie du dich in <b>Liebesbeziehungen allgemein</b> fühlst, nicht nur in der aktuellen: wenn du gerade keine:n Partner:in hast, denk an frühere Beziehungen oder daran, wie du dich fühlen würdest. Wähle bei jeder Aussage, wie sehr du zustimmst, von 1 bis 7.","how":"18 Fragen messen die Bindungsangst, 18 die Vermeidung; jede Dimension ist der Mittelwert der Antworten von 1 bis 7 (14 Fragen sind umgepolt). Die „Sicherheit“ ist der Mittelwert beider Dimensionen, in einen Prozentwert umgekehrt, wie Fraley vorschlägt. Verglichen wird mit seiner Online-Stichprobe. Alles wird auf deinem Gerät berechnet.","cite":"Der ECR-R (Fraley, Waller & Brennan, 2000, Journal of Personality and Social Psychology, 78, 350-365) ist für nicht-kommerzielle Nutzung gemeinfrei. Ein Werkzeug zur Selbsterkundung, keine Diagnose: die Autoren raten von starren Kategorien ab, die beiden Dimensionen sind kontinuierlich."}};
  const R={"it":{"security":"Sicurezza","anx":"Ansia","avo":"Evitamento","pct":p=>`${p}° percentile`,"mean":"media","dims":"Le due dimensioni","mapT":"La mappa dell'attaccamento","axAnx":"ansia →","axAvo":"evitamento →","mapTxt":"In orizzontale l'<b>ansia</b> (paura di perdere l'altro), in verticale l'<b>evitamento</b> (disagio nella vicinanza). Il punto sei tu; le linee tratteggiate sono le medie del campione online di Fraley (17.000+ persone). I quattro quadranti sono letture, non caselle: più sei vicino al centro, più i profili si mescolano.","tip":"Cosa può aiutarti","summary":(S,r,L)=>`Il mio stile di attaccamento (ECR-R): ${S.n} — ansia ${fmt(r.anx,L)}/7, evitamento ${fmt(r.avo,L)}/7`},"en":{"security":"Security","anx":"Anxiety","avo":"Avoidance","pct":p=>`${p}th percentile`,"mean":"mean","dims":"The two dimensions","mapT":"The attachment map","axAnx":"anxiety →","axAvo":"avoidance →","mapTxt":"Horizontal is <b>anxiety</b> (fear of losing the other), vertical is <b>avoidance</b> (discomfort with closeness). The dot is you; the dashed lines are the means of Fraley's online sample (17,000+ people). The four quadrants are readings, not boxes: the closer to the centre, the more the profiles blend.","tip":"What can help","summary":(S,r,L)=>`My attachment style (ECR-R): ${S.n} — anxiety ${fmt(r.anx,L)}/7, avoidance ${fmt(r.avo,L)}/7`},"fr":{"security":"Sécurité","anx":"Anxiété","avo":"Évitement","pct":p=>`${p}e percentile`,"mean":"moyenne","dims":"Les deux dimensions","mapT":"La carte de l'attachement","axAnx":"anxiété →","axAvo":"évitement →","mapTxt":"À l'horizontale l'<b>anxiété</b> (peur de perdre l'autre), à la verticale l'<b>évitement</b> (malaise dans la proximité). Le point, c'est toi ; les pointillés sont les moyennes de l'échantillon en ligne de Fraley (17 000+ personnes). Les quatre quadrants sont des lectures, pas des cases : plus tu es près du centre, plus les profils se mélangent.","tip":"Ce qui peut t'aider","summary":(S,r,L)=>`Mon style d'attachement (ECR-R) : ${S.n} — anxiété ${fmt(r.anx,L)}/7, évitement ${fmt(r.avo,L)}/7`},"es":{"security":"Seguridad","anx":"Ansiedad","avo":"Evitación","pct":p=>`percentil ${p}`,"mean":"media","dims":"Las dos dimensiones","mapT":"El mapa del apego","axAnx":"ansiedad →","axAvo":"evitación →","mapTxt":"En horizontal la <b>ansiedad</b> (miedo a perder al otro), en vertical la <b>evitación</b> (incomodidad con la cercanía). El punto eres tú; las líneas discontinuas son las medias de la muestra online de Fraley (17.000+ personas). Los cuatro cuadrantes son lecturas, no casillas: cuanto más cerca del centro, más se mezclan los perfiles.","tip":"Qué puede ayudarte","summary":(S,r,L)=>`Mi estilo de apego (ECR-R): ${S.n} — ansiedad ${fmt(r.anx,L)}/7, evitación ${fmt(r.avo,L)}/7`},"pt":{"security":"Segurança","anx":"Ansiedade","avo":"Evitação","pct":p=>`percentil ${p}`,"mean":"média","dims":"As duas dimensões","mapT":"O mapa do apego","axAnx":"ansiedade →","axAvo":"evitação →","mapTxt":"Na horizontal a <b>ansiedade</b> (medo de perder o outro), na vertical a <b>evitação</b> (desconforto com a proximidade). O ponto é você; as linhas tracejadas são as médias da amostra online de Fraley (17.000+ pessoas). Os quatro quadrantes são leituras, não caixas: quanto mais perto do centro, mais os perfis se misturam.","tip":"O que pode ajudar","summary":(S,r,L)=>`Meu estilo de apego (ECR-R): ${S.n} — ansiedade ${fmt(r.anx,L)}/7, evitação ${fmt(r.avo,L)}/7`},"de":{"security":"Sicherheit","anx":"Angst","avo":"Vermeidung","pct":p=>`${p}. Perzentil`,"mean":"Mittel","dims":"Die zwei Dimensionen","mapT":"Die Bindungskarte","axAnx":"Angst →","axAvo":"Vermeidung →","mapTxt":"Horizontal die <b>Angst</b> (Furcht, den anderen zu verlieren), vertikal die <b>Vermeidung</b> (Unbehagen bei Nähe). Der Punkt bist du; die gestrichelten Linien sind die Mittelwerte von Fraleys Online-Stichprobe (17.000+ Personen). Die vier Quadranten sind Lesarten, keine Schubladen: je näher der Mitte, desto mehr mischen sich die Profile.","tip":"Was helfen kann","summary":(S,r,L)=>`Mein Bindungsstil (ECR-R): ${S.n} — Angst ${fmt(r.anx,L)}/7, Vermeidung ${fmt(r.avo,L)}/7`}};
  const mp=v=>((v-1)/6*100).toFixed(1)+"%";
  function mapSVG(r,L,u){
    const S=A.STYLES[L]||A.STYLES.en; const W=300,P=26; const sc=v=>(v-1)/6*(W-2*P);
    const x=P+sc(r.anx), y=W-P-sc(r.avo), mx=P+sc(r.norms.anx.m), my=W-P-sc(r.norms.avo.m);
    let g=""; for(let v=2;v<7;v++){const t=P+sc(v); g+=`<line x1="${t}" y1="${P}" x2="${t}" y2="${W-P}"/><line x1="${P}" y1="${t}" x2="${W-P}" y2="${t}"/>`;}
    const q=(k,x0,y0,x1,y1)=>`<rect class="quad${r.style===k?" on":""}" x="${x0}" y="${y0}" width="${x1-x0}" height="${y1-y0}" rx="10"/>`;
    const lab=(k,x,y,a)=>`<text class="qlab${r.style===k?" on":""}" x="${x}" y="${y}" text-anchor="${a}">${esc(S[k].n)}</text>`;
    return `<svg viewBox="0 0 ${W} ${W}" role="img" aria-label="${esc(u.mapT)}">
      ${q("dismissing",P,P,mx,my)}${q("fearful",mx,P,W-P,my)}${q("secure",P,my,mx,W-P)}${q("preoccupied",mx,my,W-P,W-P)}
      <g class="grid">${g}</g><rect class="frame" x="${P}" y="${P}" width="${W-2*P}" height="${W-2*P}" rx="14"/>
      <line class="mean" x1="${mx}" y1="${P}" x2="${mx}" y2="${W-P}"/><line class="mean" x1="${P}" y1="${my}" x2="${W-P}" y2="${my}"/>
      ${lab("dismissing",P+10,P+18,"start")}${lab("fearful",W-P-10,P+18,"end")}${lab("secure",P+10,W-P-10,"start")}${lab("preoccupied",W-P-10,W-P-10,"end")}
      <text class="axl" x="${W/2}" y="${W-6}" text-anchor="middle">${esc(u.axAnx)}</text>
      <text class="axl" x="9" y="${W/2}" text-anchor="middle" transform="rotate(-90 9 ${W/2})">${esc(u.axAvo)}</text>
      <circle cx="${x}" cy="${y}" r="11" fill="var(--pur)" stroke="#fff" stroke-width="4"/><circle cx="${x}" cy="${y}" r="15" fill="none" stroke="var(--pur)" stroke-width="1.5" opacity=".5"/>
    </svg>`;
  }
  function render(r,L){
    const u=R[L]||R.it, ST=A.STYLES[L]||A.STYLES.en, S=ST[r.style], Bd=A.BANDS[L]||A.BANDS.en, C=(window.PSY_GEN&&PSY_GEN.COMMON[L])||PSY_GEN.COMMON.it;
    const sec=Math.round((1-(((r.anx+r.avo)/2)-1)/6)*100);
    const html=`
      <div class="card"><div class="k">${esc(C.scoreK)}</div>
        <div class="score"><div class="ring" style="--p:${sec}%"><div>${sec}%<small>${esc(u.security).toUpperCase()}</small></div></div>
          <div><p class="bandname">${esc(S.n)} · ${esc(S.tag)}</p><p class="bandtxt">${esc(S.desc)}</p>
          <div class="chipsrow"><span class="p">${esc(u.anx)} ${fmt(r.anx,L)}</span><span>${esc(u.avo)} ${fmt(r.avo,L)}</span><span class="p">${esc(u.pct(r.pA))}</span><span>${esc(u.pct(r.pV))}</span></div></div></div></div>
      <div class="card"><div class="k">${esc(u.dims)}</div><div class="dims">
        <div class="dim"><div class="h"><span>${esc(u.anx)}</span><span>${fmt(r.anx,L)} / 7</span></div><div class="bar"><i style="width:${mp(r.anx)}"></i><em style="left:${mp(r.norms.anx.m)}" data-l="${esc(u.mean)} ${fmt(r.norms.anx.m,L)}"></em></div><p class="t" style="margin-top:22px">${esc(Bd.anx[r.bandA])}</p></div>
        <div class="dim"><div class="h"><span>${esc(u.avo)}</span><span>${fmt(r.avo,L)} / 7</span></div><div class="bar"><i style="width:${mp(r.avo)}"></i><em style="left:${mp(r.norms.avo.m)}" data-l="${esc(u.mean)} ${fmt(r.norms.avo.m,L)}"></em></div><p class="t" style="margin-top:22px">${esc(Bd.avo[r.bandV])}</p></div>
      </div></div>
      <div class="card"><div class="k">${esc(u.mapT)}</div><div class="map">${mapSVG(r,L,u)}<div class="legend">
        ${["secure","preoccupied","dismissing","fearful"].map(k=>`<div class="r"><b>${esc(ST[k].n)}</b><span>${esc(ST[k].tag)}</span></div>`).join("")}<p>${u.mapTxt}</p></div></div></div>
      <div class="pc green" style="margin-top:16px"><div class="k">${esc(u.tip)}</div><p>${esc(S.tip)}</p></div>`;
    return {html, summary:u.summary(S,r,L), headline:S.n, sub:S.tag+" — "+S.desc};
  }
  window.PSY_TESTS=window.PSY_TESTS||{};
  PSY_TESTS.ecrr={code:"ECR-R",n:36,sexNorms:true,order:ORDER,labels:LABELS,items:A.ITEMS,text:TEXT,scales:[],score:A.score,render};
})();
