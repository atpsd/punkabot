    const grammar = `


I ::=   "title:    PunkaBot v.3\\n"
      ^ "author:   fb.me/atpsd - archivefever.tk@gmail.com \\n"
      ^ "language: italian \\n"
      ^ "status:   refinable \\n"
      ^ "topic:    politics \\n"
      ^ "comment:  generatore di frasi per conquistare bellissime punkabbestia \\n"
      ^ "warning:  dice solo sincere verita' \\n"
      ^ "created:  20/02/2023"
;



(************************************)
(*************** FRASE **************)
(************************************)


S ::= \\ 
      (
        (* Frase08  *)
        Frase01 | Frase02 | Frase03 | --Frase04 | Frase05 | +++Frase06 | ++Frase07 | Frase08


      ) ^"."
      ;


(* Frase 08 sei bella come ---ismo *)
Frase08 ::= \\       
      (

      SuUnMuro ::= su un (muro|portone|muretto) | su una (parete|facciata|vetrata) | su una persiana; 
      SulMuro ::= sul (muro|portone|muretto) | sulla (parete|facciata|vetrata) | sulle persiane; 
      SuUnMezzoDiTrasporto ::= su un (treno[regionale[veloce]]|camion|\\t^\\i^\\r|autoarticolato) |su un'auto [abbandonata|presa a rate|non di lusso|con l'adesivo baby onboard]| su un'autobotte | su un vagone della metro [di \\roma|di \\milano|della \\milano di \\sala|all'estero]; 
      Sbombolettato ::= sbombolettato|taggato|inciso|graffitato|pennellato|pirografato|scolpito; 

SuUnLuogo ::=
            (
            SuUnMuro [altrui|a casaccio|scelto a caso|come tutti gli altri|anonimo|di periferia|del centro]
          | SulMuro di (un \\c^\\o^\\m^\\p^\\r^\\o \\o^\\r^\\o|una (chiesa|cattedrale|parrocchia)|un panificio|una caserma[dei \\carabinieri|della \\guardia di \\finanza|dell'^\\esercito[\\italiano]|dell'^\\aviazione]|una pasticceria|un benzinaio|una rosticceria|un'universit^"&agrave" [occupata]|una scuola(elementare|media)|un liceo|un'isola ecologica|un kebabbaro|una sede (dell'^\\agenzia delle \\entrate|dell'^\\a^\\n^\\p^\\i|dell'^\\a^\\n^\\c^\\i|dell'^\\a^\\c^\\l^\\i))
          | SulMuro (di casa (della tua ex|tua|di tua (mamma|zia|nonna|sorella|cognata|figlia|moglie))|del tuo (condominio|ufficio|garage|casotto degli attrezzi|box auto|appartamento))
          | --sulla casetta del tuo cane [pitbull]
          | SuUnMezzoDiTrasporto [in fiamme|_|_]
          | SulMuro di (un ex^"-"^brigatista[ormai (in libert^"&agrave"  vigilata|ai domiciliari|[perfettamente] reintegrato nella societ^"&agrave" |talvolta intervistato in tv)]|un rifugiato politico|un compagno imbianchino|un richiedente asilo|un [fratello]migrante|un povero|un indigente|uno squattrinato|un esodato|un pensionato|una massaia|un trappatore)
          | (sul graffito|sul murales|sull'opera) di un altro (vandalo|writer|(artista|imbianchino) di strada|street artist|\\banksy mancato)

            ) 
            ; 

            (

            (SeiBella:
          \\s^\\e^\\i (\\b^\\e^\\l^\\l^\\a|\\g^\\n^\\o^\\c^\\c^\\a|\\n^\\o^\\n^\\b^\\r^\\u^\\t^\\t^\\a|\\a^\\v^\\v^\\e^\\n^\\e^\\n^\\t^\\e|\\p^\\i^\\a^\\c^\\e^\\n^\\t^\\e|\\s^\\e^\\x^\\y|\\m^\\o^\\z^\\z^\\a^\\f^\\i^\\a^\\t^\\o|\\b^\\o^\\n^\\a|\\f^\\r^\\e^\\g^\\n^\\a) 
          | NonSeiBrutta: \\n^\\o^\\n \\s^\\e^\\i [\\c^\\e^\\r^\\t^\\o] \\b^\\r^\\u^\\t^\\t^\\a
            )

        \\c^\\o^\\m^\\e 

       ( SeiBella: \\l'^\\a^\\n^\\t^\\i^ | NonSeiBrutta: \\i^\\l )

        (\\t^\\o^\\t^\\a^\\l^\\i^\\t^\\a^\\r|\\m^\\e^\\l^\\o^\\n|\\f^\\a^\\s^\\c|\\p^\\a^\\p|\\n^\\i^\\c^\\h^\\i^\\l|\\b^\\e^\\r^\\l^\\u^\\s^\\c^\\o^\\n|\\g^\\r^\\i^\\l^\\l|\\r^\\e^\\n^\\z|\\r^\\a^\\z^\\z|\\n^\\a^\\z|\\c^\\o^\\n^\\s^\\e^\\r^\\v^\\a^\\t^\\o^\\r|\\l^\\e^\\g^\\h|\\s^\\a^\\l^\\v^\\i^\\n|\\b^\\o^\\o^\\m^\\e^\\r|\\l^\\a^\\v^\\o^\\r|\\s^\\o^\\v^\\r^\\a^\\n|\\p^\\r^\\o^\\i^\\b^\\i^\\z^\\i^\\o^\\n|\\s^\\e^\\s^\\s|\\l^\\i^\\b^\\e^\\r)^\\i^\\s^\\m^\\o 
            ).(SeiBella|NonSeiBrutta)

        ^"<br>"

        "("^
            (Sbombolettato [a sfregio|ostinatamente[nonostante varie (cancellazioni|denunce[verso ignoti])]|pi^"&ugrave" [e pi^"&ugrave"] volte [senza motivo]|senza motivo|senza preavviso] SuUnLuogo 
            | --Sbombolettato (ovunque|a caso|su un monumento)
            | tatuato (su|sul (braccio|bicipite|gluteo|polpaccio) di|sulla (coscia|gamba|faccia|spalla|schiena|fronte|nuca|mano)di) (un punkabbestia|una [bellissima]punkabbestia)
            | ----{[stranamente|contro ogni(previsione|probabilit^"&agrave" |pronostico)]}{Sbombolettato} su un muro libero
            | esposto in una galleria d'arte [a (\\londra|\\new \\york|\\dallas|\\firenze|\\busto \\arsizio|\\milano|\\torino|\\palermo|\\civitavecchia|\\termoli|\\gallarate|\\rho|\\brescia|\\bologna|\\belluno)]
            | -in copertina su (un inserto culturale|un giornalino universitario|un settimanale di nondestra|un mensile[di giardinaggio|sulle barche di lusso|automobilistico])
            | ----scritto nel bagno di un bar [antagonista]
            | ----a tutto schermo sul sito defacciato di (un alimentari|un'autorimessa|un blog di videogiochi|un ricettario online|una escort|un mercatino dell'usato|un gruppetto musicale|un giornalino locale|un ristorante|un bnb|un negozio di telefonia|un supermercato|un commercialista|un avvocato|una dog sitter)
            | -----pubblicato da questo stesso \\punka^\\bot
            | Sbombolettato ((sul cofano|sul tettuccio|sulla fiancata|sul parabrezza[impolverato]|sul lunotto) della tua auto|sul (serbatoio[appena customizzato]|parafango|sedile[in pelle]) della tua moto) 
            | Sbombolettato da un writer eroe SulMuro di un palazzo [semidistrutto] (ad \\aleppo|in \\siria|in \\ucraina|in una zona di guerra|in una zona bombardata in \\medioriente)  
            | impresso sui (megaschermi|fondali) in studio a (\\piazzapulita|\\propaganda \\live|\\l'aria che tira|\\in mezz'ora|\\otto e mezzo|\\dimarted^"&igrave" |\\maratona \\mentana)
            | proiettato [illegalmente|clandestinamente|in occasione di un'iniziativa di strada|da alcuni punkabbestia] su un palazzo [storico|della \\provincia|della \\regione]
            | riscritto [senza alcuna retorica|per arginare IlConcetto.Negativo] (dal vignettista|dall'illustratore|dal satiraio|dal bozzettista|dall'intellettuale) (satirico|in servizio permanente effettivo|indipendente|non cooptato) di un (quotidiano|settimanale|periodico|quindicinale) (impegnato|non fascista|di buonsenso|a favore DelConcetto.Positivo|che si oppone AlConcetto.Negativo)


            )
        ^")"

      )
      ;





(* Frase 07 discrimina tra concetti maschili e femminili - nominalismo *)
Frase07 ::= \\       
      (
        UnaParolaDiGenereBase := 
            ( 
                ((una parola|un termine|un vocabolo|un'espressione|-----un lemma|-------un polisillabo) [di (genere|gender)|al])
            ) 
            ;

        UnaParolaDiGenere ::= 
            (
                UnaParolaDiGenereBase (M: maschile | F:femminile) 
            )
            ;

        CoincidenzeNonCredo ::=
            (
                  coincidenze^"?" \\non credo
                | ((non c'^"&egrave" nulla|non mi sembra [che] ci sia nulla) di cui|(nulla di che|non c'^"&egrave" da|non c'^"&egrave" di che)) stupirsi
                | e la storia si ripete
                | e nessuno fa niente
                | la cosa non mi stupisce
                | e non "&egrave" ([solo] un caso[fortuito|sfortunato]|una coincidenza|una [mera]casualit^"&agrave" )
                | ed ecco servito IlConcettoMaschile.Negativo (signori|signore e signori|cari miei|amici all'ascolto|telespettatrici e telespettatori|spettatrici e spettatori) 
                | nulla di pi^"&ugrave" (scontato|naturale|normale)
                | ogni riferimento a (++++cose e persone|fenomeni|problemi sociali) realmente esistenti "&egrave" puramente (intenzionale|casuale)
                | piove sul bagnato
            )    
            ;

        EQuestoLaDiceLunga ::= 
            (
                [e] gi^"&agrave"  questo la dice lunga
              | (ripartiamo dal|ascoltiamo il|studiamo il) linguaggio
              | [e questo] non pu^"&ograve" essere un caso [fortuito]  
              | [molto] probabilmente non "&egrave" [solo] una coincidenza 
              | causa ed effetto 
              | dovremmo (stabilire(una connessione|un legame forte|un legame d'empatia)) (con il linguaggio|con la lingua[italiana]|con le parole che usiamo [ogni giorno|[nella vita di]tutti i giorni|quotidianamente]) 
              | dovremmo fare pi^"&ugrave" attenzione (al linguaggio|alla lingua[italiana]|alle parole che usiamo [ogni giorno|[nella vita di]tutti i giorni|quotidianamente])
              | e credo ci sia un motivo [se le cose stanno cos^"&igrave" ]
              | e non (c'^"&egrave"|credo ci sia) nulla di pi^"&ugrave" naturale  
              | e questo non "&egrave" certo un complotto [mondiale|mondialista|internazionale]  
              | "&egrave" (dal linguaggio|dalla lingua[italiana]) che bisogna ripartire
              | guarda le coincidenze alle volte
              | il (dizionario|vocabolario) [\\zanichelli|\\treccani|\\hoepli|\\zingarelli|\\devoto \\oli|dell'^\\accademia \\della \\crusca|\\de \\mauro] non mente
              | la nostra lingua (ci d^"&agrave"  dei segnali|vuole dirci qualcosa|non va ignorata)
              | mi stupirei del contrario
              | non (fingiamo|facciamo finta|illudiamoci|credo[proprio]) che sia (una coincidenza|soltanto un caso|un caso fortuito)
              | non so perch^"&eacute" ma la cosa non mi (stupisce|sorprende|meraviglia|sconvolge) [affatto|per niente|nemmeno un p^"&ograve"|neanche un p^"&ograve"]
              | se (tutti|molti|(gli|i migliori) esperti) l'hanno notato (un motivo|una ragione) ci sar^"&agrave" 
            )
            ;   

        EIrrilevante ::=
            (
                  "&egrave" irrilevante
                | "&egrave" solo (una coincidenza|un caso fortuito|una [mera]casualit^"&agrave"  senza alcun (senso|nesso con la realt^"&agrave" ))
                | non c'entra ([assolutamente]niente|un beneamato|un piffero)
                | "&egrave" un caso senza alcuna (base|rilevanza|risultanza|attinenza) (scientifica|storiografica|linguistica|etimologica|antropologica)
                | non ([mi]rappresenta|significa) niente
                | non ha alcuna attinenza [con la realt^"&agrave" |con i problemi reali[che interessano agli italiani]]
                | "&egrave" qualcosa che (fanno notare|tirano fuori|sottolineano|ripetono|twittano) solo (gli ottenebrati|gli stupidi|i minus habens|gli analfabeti(funzionali|emotivi|di ritorno))

            )    
            ;

        non a caso {IlConcettoMaschile.Negativo "&egrave" UnaParolaDiGenere.M} ^"," mentre {IlConcettoFemminile.Positivo "&egrave" UnaParolaDiGenere.F}
      | non a caso {"\\""^ConcettoMaschile.Negativo^"\\"" "&egrave" UnaParolaDiGenere.M} ^"," mentre {"\\""^ConcettoFemminile.Positivo^"\\""  "&egrave" UnaParolaDiGenere.F}

      |  non "&egrave" un caso che IlConcettoMaschile.Negativo sia UnaParolaDiGenere.M ^"," mentre IlConcettoFemminile.Positivo "&egrave" UnaParolaDiGenere.F
      |  non "&egrave" un caso che IlConcettoFemminile.Positivo sia UnaParolaDiGenere.F ^"," mentre IlConcettoMaschile.Negativo "&egrave" UnaParolaDiGenere.M
      
      |  [guardacaso]IlConcettoMaschile.Negativo "&egrave" maschio mentre IlConcettoFemminile.Positivo "&egrave" femmina^"." \\ CoincidenzeNonCredo

      | UnaParolaDiGenere.M a (caso|-----random)^"?" "\\""^\\ConcettoMaschile.Negativo^"\\"" ^"." \\ CoincidenzeNonCredo
      | "\\""^ \\ConcettoFemminile.Positivo^"\\"" "&egrave" UnaParolaDiGenere.F^"." \\ EQuestoLaDiceLunga
      | che "\\""^ConcettoFemminile.Negativo^"\\"" sia UnaParolaDiGenere.F EIrrilevante (^"," EIrrilevante)+ ^"," Conclusione
      )
      ;




Frase06 ::= \\       
      (
        SeguoSempre ::=   (
                      seguo [sempre]
                    | apprezzo molto
                    | ascolto [ogni volta che ( posso|mi capita|mi "&egrave" possibile ) | con attenzione]
                    | do credito (alle(argomentazioni|lezioni|teorie|invettive)|ai(discorsi|teoremi|panegirici|monologhi)|agli(spiegoni|spiegoni)) di 
                    | do credito a 
                    | faccio affidamento su
                    | leggo [volentieri | con (attenzione|interesse|piacere)]
                    | mi fido [solo] di
                    | non mi perdo  (un discorso|un tweet|un post|un podcast|un articolo) di 
                    | ogni volta che (posso|mi capita) ascolto
                    | tengo d'occhio 
                    | sono un [convinto] sostenitore di
                    ) 
                    ; 

        SulSocial ::= (
                        su (\\facebook|facciabuco)
                      | (su|sulla) \\rai^(\\play|(1|2|3|4|5|6|7|8|9))
                      | su (\\whats|\\tik|\\you|\\twit|\\snap)^(\\app|\\chat|\\snap|\\tak|\\tok|\\t^[r]^ap)
                      | su 4chan
                      | su (1|2|3|4|5|6|7|8|9)^chan
                      | su 9gag
                      | su \\img^\\flip
                      | su \\instagram 
                      | su \\know^\\your^\\meme
                      | su \\pinterest
                      | su \\reddit
                      | su \\telegram
                      | su \\tik^\\tok
                      | su \\twitter
                      | su \\vk ["("^ il controverso social[dell'odio] russo^")"]
                      | su \\wikipedia
                      | su \\you^\\tube
                      | su qualsiasi device
                      | sul [^(l'obsoleto)] feed rss
                      | sul \\podcast (di|della) \\radio^(1|2|3|4|5|6|7|8|9|24) 
                      | sul suo blog
                      | sul telefonetto
                      | sull'i^\\phone [(\\max|\\plus|\\deluxe|\\pro|(1|2)^(1|2|3|4|5|6|7|8|9))]
                      | sulla smart tv
                      | sullo smartphone
                      
                    )
                    ;

        (* "Social" non deve essere preceduto da articolo *)
        Social ::= (
                        (\\facebook|facciabuco)
                      | (\\whats|\\tik|\\you|\\twit|\\snap)^(\\app|\\chat|\\tak|\\tok|\\tap)
                      | 4chan
                      | \\instagram 
                      | \\pinterest
                      | \\rai^(\\play|(1|2|3|4|5|6|7|8|9))
                      | \\reddit
                      | \\telegram
                      | \\tik^\\tok
                      | \\twitter
                      | \\vk ["("^ il controverso social[dell'odio] russo^")"]
                      | \\you^\\tube
                      
                    )
                    ;                    

        VistoChe ::= (
                        (dato |dal momento | visto | ----poich^"&eacute") che       
                      )
                      ;

        (* "DiceCoseIntelligenti" verr^"&agrave"  seguito da "al riguardo" *)
        DiceCoseIntelligenti ::= (
                        dice [spesso|sempre] cose (intelligenti|interessanti)
                      | argomenta (con intelligenza|con propriet^"&agrave"  di (termini|linguaggio)| bene|in modo valido)
                      | dice (la sua|come la pensa)
                      | ha argomenti (validi|non banali|convincenti)
                      | non (mente mai|racconta balle) 
                      | non dice mai (banalit^"&agrave" |cose banali) 
                      | non intorbida mai le acque
                      | non rinnega le proprie (idee|convinzioni)
                      | non ripete a pappagallo (le [solite]banalit^"&agrave" |i soliti luoghi comuni|quello che hanno gi^"&agrave"  detto gli altri) 
                      | non sbaglia mai un colpo
                      | non tira fuori mai([le solite]banalit^"&agrave" |[i soliti]luoghi comuni) 
                      | rifugge (le [solite]banalit^"&agrave" |i [soliti] luoghi comuni) 
                      | sa (argomentare | giudicare)
                      | sta alla larga (dalle [solite]banalit^"&agrave" |dai [soliti]luoghi comuni) 
                      )
                      ;

        SulTema ::= (
                         ++++SulConcetto.(Positivo|Negativo)
                      |  (sul tema|sui temi) DelConcetto.(Positivo|Negativo)
                      | sul legame tra (Concetto e Concetto).(Positivo|Negativo)       
                      | SulConcetto.Negativo e le {conseguenze}{[nefaste]} per IlConcetto.Positivo 
                      | SulConcetto.Negativo e le {ricadute}{[nefaste]} per IlConcetto.Positivo       
                      | sulle connivenze tra (Concetto e Concetto).Negativo  
                      )
                      ;


LaPersonaDaAscoltare ::= (
                         la persona a cui dare retta
                      |  chi DiceCoseIntelligenti [al riguardo|su questi temi]
                      |  la persona che [al riguardo|su questi temi] DiceCoseIntelligenti   
                      |  la persona (che sta dalla parte (giusta|della ragione)|esperta in questo campo)   
                      )
                      ;


(* "MoltiSeLaPrendono" puo' essere seguito da "con" *)
MoltiSeLaPrendono ::= (
                        (molti|tanti|gli ignoranti|i minus habens|i noncompagni) (* NemiciIdeologici *)
                        (se la prendono|si (infuriano|arrabbiano))
                      | (la gente[qualunque]|la massa|il popol^(ino|o [bue]))(se la prende|s'infuria|bisticcia|s'accapiglia)
                      )
                      ;

HoFruitoLInfoprodotto ::= 
                      (
                        ho letto l'ultimo(libro|post|articolo)
                      | ho visto (l'ultimo (intervento televisivo|video)|l'ultima(diretta|\\l^\\i^\\v^\\e))   
                      | SulSocial ho visto 
                        (
                            l'ultimo (intervento [televisivo]|video|balletto|dissing|spiegone|appello)
                           |l'ultima(polemica|diretta|\\l^\\i^\\v^\\e|dichiarazione|provocazione)
                        ) 
                      )
                      ;

BattagliaCulturale ::= 
                      (
                        (battaglia|cortina fumogena|macchina del fango|lotta|campagna|operazione|manipolazione|appropriazione|discordia)(culturale|mediatica|propagandistica|comunicativa)
                      | (polverone|scontro|conflitto|scandalismo|sensazionalismo)(culturale|mediatico|propagandistico|comunicativo)   
                      )
                      ;


          {SeguoSempre Intellettuale} ^"," {VistoChe DiceCoseIntelligenti [SulTema]}

        | vuoi sapere chi DiceCoseIntelligenti SulTema^"?"  \\Intellettuale

        | vuoi sapere chi (seguire|--------followare) SulSocial^"?"  \\Intellettuale 
          [^"," VistoChe DiceCoseIntelligenti [SulTema] ]

        | SulTema SeguoSempre Intellettuale [^"," VistoChe DiceCoseIntelligenti]

        | Concetto.(Positivo|Negativo)              
            (^","Concetto.(Positivo|Negativo))+
            (^","|-----(e come se non bastasse|per non farci mancare niente|tanto per gradire)) Concetto.(Positivo|Negativo) ^"?"
            \\ LaPersonaDaAscoltare "&egrave" Intellettuale

        | MoltiSeLaPrendono con Intellettuale perch^"&eacute" (DiceCoseIntelligenti SulTema|creare un nemico "&egrave" alla base di ogni BattagliaCulturale)
        | (Social "&egrave" il luogo migliore | Social e Social sono i luoghi migliori) dove trovare contenuti SulTema
        | SulSocial seguo (Intellettuale|---Intellettuale e Intellettuale)^"," mentre [contemporaneamente] SulSocial seguo Intellettuale
        |  [per qualche[incomprensibile|imperscrutabile]motivo] non so pi^"&ugrave" se sono io a pensarla (esattamente come|allo stesso modo di|uguale uguale a) IntellettualeFisso o se [guardacaso] "&egrave" IntellettualeFisso a pensarla [proprio] come me
        |  SulTema "("^ ma anche SulTema ^")" se ascolterai Intellettuale [per una qualche coincidenza] saprai anche [esattamente] come (la penso|la vedo|ragiono) io
        |  (io e Intellettuale|Intellettuale ed io) la pensiamo allo stesso modo [su tutto| ^"."\\ (indifferentemente|pi^"&ugrave" o meno|direi|quasi) su tutto] [^"." \\ pi^"&ugrave" (passa il tempo|va avanti|vado avanti|passano [i mesi e] gli anni) e pi^"&ugrave" sono persuaso (dalle sue frasi|dai suoi enunciati|dai suoi tormentoni|da ci^"&ograve" che dice|dai suoi discorsi|dai concetti che espone|dalle sue parole|dalle sue battaglie|dalle cose che ripete[sempre])]
        | 
          ( 
              ( 
                ((non so che darei per [poter seguire|vedere|seguire]) | (mi piacerebbe vedere un)) un [bel|appassion^(ato|ante)|istruttivo|interessante|infuocato]
              ) 
            dibattito tra Intellettuale e Intellettuale 
            [(SulSocial [ oppure [^","perch^"&eacute" no ^"?" anche] SulSocial]|SulTema)] 
          )   
        | la penso come Intellettuale VirgolaConclusioneImprobabile
        | (da quando|dacch^"&eacute") esiste Social metto like acritico a ogni (post|video|infoprodotto) di Intellettuale
        | HoFruitoLInfoprodotto di Intellettuale e 
        (ora|devo dire che|devo ammettere che|(per il|al) momento) 
        (si batte meglio di|lotta pi^"&ugrave" di|"&egrave"  pari merito con|mi sembra al livello di|non sfigurerebbe in un dibattito con) Intellettuale
      )
      ;














Frase05 ::= \\ 
      
      (
        CeUnaBellaDifferenza ::=
          c'^"&egrave" una bella (differenza|diversit^"&agrave" )
        | sono impossibili (paragoni|confronti)
        ; 

        NonCeDifferenza ::=
          non c'^"&egrave" [alcuna] differenza
        | [personalmente] non (vedo|trovo) [alcuna] differenza
        | non cambia ([un bel] niente|[letteralmente]nulla)
        | c'^"&egrave" (unit^"&agrave" |un'unione) d'intenti
        ; 

        IlDialogoNonEPossibile ::=
           non c'^"&egrave" possibilit^"&agrave"  di dialogo
         | il dialogo ("&egrave" impossibile|non "&egrave" possibile)
         | {un dialogo} {non pu^"&ograve" (esistere|sussitere)}
        ;

        CambiaTutto ::=
          cambia tutto
        | cambia il mondo
        ;

        NonCeNienteDaDire ::=
          non c'^"&egrave" niente da dire
        | non c'^"&egrave" molto da (discutere|dire)
        | non c'^"&egrave" tanto da ragionare
        | "&egrave" stato gi^"&agrave"  detto tutto
        | ogni (discussione|speculazione) "&egrave" (inutile|fuori luogo|superflua|da evitare)
        | "&egrave" inutile discutere
        ;

        CeMoltoDaDire ::=
           c'^"&egrave" ancora (molto|tutto) da dire
         | va fatto [tutto] un lavoro di approfondimento (culturale|storiografico|letterario|teatrale)
         | va fatto un lavoro culturale
         | vanno promosse delle iniziative
         | vanno (promossi|spinti|organizzati) dei (post|contenuti) (virali|di successo|apprezzati dai giovani)
         | vanno (organizzate|costruite) delle (manifestazioni|iniziative|occasioni di (discussione|ritrovo|confronto)) [dal basso|spontanee]
         | va fatta cultura (nelle scuole|nelle piazze|in tutte le sedi istituzionali|nei posti di lavoro|nelle fabbriche[di selfie|di telefonetti|siderurgiche|di scarpe|di biciclette elettriche|di auto elettriche|farina di grillo]| in ogni luogo di aggregazione [sociale])
         ;

      PremessaImprobabile
      {TraIlConcetto.Negativo e IlConcetto.Positivo} 
      {CeUnaBellaDifferenza}
      VirgolaConclusioneImprobabile

      |

      PremessaImprobabile
      {TraIlConcetto.Positivo e IlConcetto.Negativo} 
      {CeUnaBellaDifferenza}
      VirgolaConclusioneImprobabile

      |

      PremessaImprobabile
      TraIlConcetto.Positivo e IlConcetto.Positivo 
      NonCeDifferenza
      VirgolaConclusioneImprobabile

      |

      PremessaImprobabile
      DalConcetto.Positivo AlConcetto.Negativo 
      CambiaTutto
      VirgolaConclusioneImprobabile

      |

      PremessaImprobabile 
      TraIlConcetto.Positivo e IlConcetto.Negativo 
      IlDialogoNonEPossibile
      VirgolaConclusioneImprobabile

      |

      PremessaImprobabile
      SulConcetto.Negativo 
      NonCeNienteDaDire
      VirgolaConclusioneImprobabile

      |

      PremessaImprobabile
      SulConcetto.Positivo 
      CeMoltoDaDire
      VirgolaConclusioneImprobabile
      
      |

      SulConcetto.Negativo 
      NonCeNienteDaDire 
      ^"," mentre
      SulConcetto.Positivo 
      CeMoltoDaDire



      )
      ;


Frase04 ::= \\ 
      (

      IlConcetto.Positivo "&egrave" Concetto.Positivo "e" Conclusione
      |      
      IlConcetto.Negativo "&egrave" Concetto.Negativo "e" Conclusione
      |
      Conclusione^":" IlConcetto.Positivo "&egrave" Concetto.Positivo 
      |
      Conclusione^":" IlConcetto.Negativo "&egrave" Concetto.Negativo 
      |
      (IlConcetto "&egrave" Concetto).(Positivo|Negativo) 

      )
      ;



Frase03 ::= \\ 
      (

      (* 1 - Permutazione con "cultura di" Concetto *)
      (IlConcetto| ------la cultura DelConcetto).Negativo non "&egrave" Concetto.Positivo ^"," "&egrave" Concetto.Negativo
      |

      IlConcetto.Negativo non "&egrave" (Concetto| ------cultura DelConcetto).Positivo ^"," "&egrave" Concetto.Negativo
      |

      IlConcetto.Negativo non "&egrave" Concetto.Positivo ^"," "&egrave" (Concetto| ------cultura DelConcetto).Negativo
      |

      (* inversione Negativo Positivo *)
      (IlConcetto| ------la cultura DelConcetto).Positivo non "&egrave" Concetto.Negativo ^"," "&egrave" Concetto.Positivo
      |

      IlConcetto.Positivo non "&egrave" (Concetto| ------cultura DelConcetto).Negativo ^"," "&egrave" Concetto.Positivo
      |

      IlConcetto.Positivo non "&egrave" Concetto.Negativo ^"," "&egrave" (Concetto| ------cultura DelConcetto).Positivo
      |



      (* 2 - Permutazione con "guerra a" Concetto*)

      (la guerra AlConcetto).Positivo non "&egrave" Concetto.Positivo ^"," "&egrave" Concetto.Negativo
      |
      IlConcetto.Positivo non "&egrave" (guerra AlConcetto).Positivo ^"," "&egrave" Concetto.Positivo
      |
      IlConcetto.Negativo non "&egrave" Concetto.Positivo ^"," "&egrave" (guerra AlConcetto).Positivo
      |

      (la guerra AlConcetto).Negativo non "&egrave" Concetto.Negativo ^"," "&egrave" Concetto.Positivo
      |
      IlConcetto.Negativo non "&egrave" (guerra AlConcetto).Negativo ^"," "&egrave" Concetto.Negativo
      |
      IlConcetto.Positivo non "&egrave" Concetto.Negativo ^"," "&egrave" (guerra AlConcetto).Negativo
      
      )
      ;



Frase02 ::= \\       
      (
      senza (Concetto| ------cultura DelConcetto).Positivo non c'^"&egrave"
        (   vero ConcettoNome.M.(IlI|LGli|--------------LoGli)
          | vera ConcettoNome.F.(LLe|++++++++LaLe)
         ).S.Positivo

      | senza (Concetto non c'^"&egrave" vera cultura DelConcetto).Positivo
      | (IlConcetto "&egrave" alla base DelConcetto).Positivo

      )
      ;



Frase01 ::= \\       
      (
        Abolire ::=   (
                        denunciare|distruggere|togliere di mezzo|dimenticarci[una volta per tutte]|mandare a casa|far fuori|eliminare|sgomberare|abolire|cancellare|marginalizzare|mettere ai margini|estromettere[dal consesso civile|dalla societ^"&agrave" |dal discorso pubblico]|ridicolizzare|sopprimere|delegittimare|sconfiggere
                      ) 
                      ; 

        Sostenere ::= (
                      realizzare[pienamente|finalmente|una volta per tutte]|legittimare|sdoganare|affermare|rendere possibile|supportare|concretizzare|reificare|far trionfare|far vincere|twittare [su \\facebook]|-------far impazzare sui social|------far comparire sui giornali[della cosiddetta "Italia"]
                      )
                      ;

        LUnicoModo ::= (
                      l'unica (via|prospettiva[possibile]|possibilit^"&agrave" |speranza)|l'unico (modo|strumento(possibile|che abbiamo a disposizione))
                      )
                      ;

      {Abolire IlConcetto.Negativo | Sostenere IlConcetto.Positivo  } 
      "&egrave" 
      {LUnicoModo per (Sostenere IlConcetto.Positivo | Abolire IlConcetto.Negativo)}

      )
      ;






















(* ABBREVIAZIONI CASI COMUNI CONCETTO *)


(* Concetto Singolare senza Articolo, dovrà essere specificato se Positivo o Negativo *)
Concetto ::= 
            (
                ConcettoNome.M.(IlI|LGli|--------------LoGli)
              | ConcettoNome.F.(LLe|++++++++LaLe)
            ).S
            ;           

(* Articolo Determinativo + Concetto Singolare , dovrà essere specificato se Positivo o Negativo *)
IlConcetto ::= 
            (
                ( Art ConcettoNome ).M.(IlI|LGli|--------------LoGli)
              | ( Art ConcettoNome ).F.(LLe|++++++++LaLe)
            ).S.Det
            ;           



(* Articolo Determinativo + Concetto Singolare Maschile , dovrà essere specificato se Positivo o Negativo - usato in Frase07*)
IlConcettoMaschile ::= 
            (  
               (Art ConcettoNome).M.(IlI|LGli|--------------LoGli)
            ).S.Det
            ;           

(* Articolo Determinativo + Concetto Singolare Femminile , dovrà essere specificato se Positivo o Negativo  - usato in Frase07*)
IlConcettoFemminile ::= 
            (  
                ( Art ConcettoNome ).F.(LLe|++++++++LaLe)
            ).S.Det
            ;           

(* Articolo Determinativo + Concetto Singolare Maschile , dovrà essere specificato se Positivo o Negativo - usato in Frase07*)
ConcettoMaschile ::= 
            (  
               (ConcettoNome).M.(IlI|LGli|--------------LoGli)
            ).S.Det
            ;           

(* Articolo Determinativo + Concetto Singolare Femminile , dovrà essere specificato se Positivo o Negativo  - usato in Frase07*)
ConcettoFemminile ::= 
            (  
                (ConcettoNome ).F.(LLe|++++++++LaLe)
            ).S.Det
            ;           







(* CONCETTO CON PREPOSIZIONE ARTICOLATA )
(* Per tutte le forme con prep articolata andrà specificato se Positivo o Negativo *)
     
DelConcetto   ::=  ConcettoPrepArticolataDet.Di;      
AlConcetto    ::=  ConcettoPrepArticolataDet.A ;   
DalConcetto   ::=  ConcettoPrepArticolataDet.Da;
NelConcetto   ::=  ConcettoPrepArticolataDet.In;    
ColConcetto   ::=  ConcettoPrepArticolataDet.Con;    
SulConcetto   ::=  ConcettoPrepArticolataDet.Su;   
PerIlConcetto ::=  ConcettoPrepArticolataDet.Per;    
TraIlConcetto ::=  ConcettoPrepArticolataDet.Tra;    
FraIlConcetto ::=  ConcettoPrepArticolataDet.Fra;    


ConcettoPrepArticolataDet ::= 
            (
                ( Prep.PrepArticolata ConcettoNome ).M.(IlI|LGli|--------------LoGli)
              | ( Prep.PrepArticolata ConcettoNome ).F.(LLe|++++++++LaLe)
            ).S.Det

            ;


ConcettoNome ::= (

          Positivo:(

              M:(          (* CONCETTO POSITIVO MASCHILE @CONCPM      @CONCMP      *)
                  LoGli:(  (* CONCETTO POSITIVO MASCHILE @CONCPMLOGLI @CONCMPLOGLI *)
                      ( S: stato di diritto   | P: stato di diritto   )
                    | ( S: stato di diritto   | P: stati di diritto   )
                    )

                |  LGli:(  (* CONCETTO POSITIVO MASCHILE @CONCPMLGLI @CONCMPLGLI *)
                      ( S: antifascismo       | P: antifascismi       )
                    | ( S: ambientalismo      | P: ambientalismi      )
                    | ( S: animalismo         | P: animalismi         )
                    | ( S: antagonismo        | P: antagonismi        )
                    | ( S: antispecismo       | P: antispecismi       )
                    | ( S: ateismo            | P: ateismi            )
                    | ( S: empowerment        | P: empowerment        )
                    | ( S: esproprio proletario   | P: espropri proletari   )
                    | ( S: europeismo         | P: europeismi         )
                    | ( S: egalitarismo       | P: egalitarismi       )
                    | ( S: egualitarismo      | P: egualitarismi      )
                    | ( S: illuminismo        | P: illuminismi        )
                    | ( S: internazionalismo  | P: internazionalismi  )
                    | ( S: immigrazionismo    | P: immigrazionismi    )
                    )

                |  IlI:(   (* CONCETTO POSITIVO MASCHILE @CONCPMILI @CONCMPILI *)
                      ( S: solidarismo        | P: solidarismo        )
                    | ( S: [semplice] buonsenso      | P: boicottaggio       )
                    | ( S: bondage [estremo]  | P: bondage [estremo]  )
                    | ( S: collettivismo      | P: collettivismi      )
                    | ( S: diritto all'aborto | P: diritti all'aborto      )
                    | ( S: diritto all'interruzione di gravidanza | P: diritti all'interruzione di gravidanza      )
                    | ( S: femminismo         | P: femminismi         )
                    | ( S: libero pensiero    | P: liberi pensieri    )
                    | ( S: matriarcato        | P: matriarcato        )
                    | ( S: garantismo         | P: garantismi         )
                    | ( S: comunismo          | P: comunismi         )
                    | ( S: meticciato         | P: meticciati         )
                    | ( S: mondialismo        | P: mondialismi        )
                    | ( S: monopattino elettrico       | P: monopattini elettrici        )
                    | ( S: pacifismo          | P: pacifismi          )
                    | ( S: pluralismo         | P: pluralismi         )
                    | ( S: progresso          | P: progressi          )
                    | ( S: rispetto           | P: rispetti           )
                    | ( S: rispetto della \\costituzione              | P: rispetti            )
                    | ( S: sex working        | P: sex working        )
                    | ( S: socialismo         | P: socialismi         )
                    | ( S: terzomondismo      | P: terzomondismi      )
                    )
                )



          |  F:(           (* CONCETTO POSITIVO FEMMINILE @CONCPF     @CONCFP     *)

                  LaLe:(   (* CONCETTO POSITIVO FEMMINILE @CONCPFLALE @CONCFPLALE *)
                      (* liberta' *)  
                      ( 
                      S: libert^"&agrave"  (di pensiero | d'opinione | di coscienza | di parola | d'espressione | di stampa | d'informazione | d'associazione | di riunione | sindacale | di culto | religiosa |  d'azione | di movimento | individuale | personale)
                      | P: libert^"&agrave"   (di pensiero | d'opinione | di coscienza | di parola | d'espressione | di stampa | d'informazione | d'associazione | di riunione | sindacali | di culto | religiose |  d'azione | di movimento | individuali | personali)
                      ) 
                    | ( S: [semplice]civilt^"&agrave"          | P: [semplici]civilt^"&agrave"         )
                    | ( S: \\cultura queer             | P: culture queer           )
                    | ( S: \\resistenza                | P: razionalit^"&agrave"             )
                    | ( S: \\rivoluzione               | P: \\rivoluzioni           )
                    | ( S: \\teoria del \\gender        | P: \\teorie del \\gender     )
                    | ( S: \\z^\\t^\\l                   | P: \\z^\\t^\\l        )
                    | ( S: city bike [elettrica]      | P: city bike [elettriche]        )
                    | ( S: complessit^"&agrave"                | P: complessit^"&agrave"         )
                    | ( S: democrazia                 | P: democrazie            )
                    | ( S: dittatura del proletariato | P: dittature del proletariato        )
                    | ( S: diversit^"&agrave"                  | P: diversit^"&agrave"         )
                    | ( S: farina di grillo           | P: farine di grillo        )
                    | ( S: goliardia                  | P: goliardie               )
                    | ( S: legalizzazione dell^(a cannabis|e canne|e droghe leggere[e perch^"&eacute" no anche pesanti]) | P: legalizzazioni dell^(a cannabis|e canne|e droghe leggere[e perch^"&eacute" no anche pesanti]) ) | ( S: libert^"&agrave"  d'opinione        | P: libert^"&agrave"  d'opinione)
                    | ( S: meritocrazia           | P: meritocrazie        )
                    | ( S: militanza                  | P: militanze             )
                    | ( S: pillola del giorno dopo    | P: pillole del giorno dopo )
                    | ( S: profondit^"&agrave"            | P: profondit^"&agrave"         )
                    | ( S: razionalit^"&agrave"                | P: razionalit^"&agrave"             )
                    | ( S: riassegnazione di gender | P: riassegnazioni di gender            )
                    | ( S: satira                     | P: satire                  )
                    | ( S: scienza                    | P: scienze               )
                    | ( S: solidariet^"&agrave"            | P: solidariet^"&agrave"         )
                    | ( S: sostenibilit^"&agrave"  ambientale | P: sostenibilit^"&agrave"  ambientali )
                    | ( S: transizione di genere      | P: transizioni di genere     )
                    )

                |  LLe:(
                      ( S: empatia            | P: empatie            )
                    | ( S: evoluzione         | P: evoluzioni         )
                    | ( S: integrazione       | P: integrazioni       )
                    | ( S: accoglienza        | P: accoglienze       )
                    | ( S: anarchia           | P: anarchie       )
                    | ( S: autodeterminazione | P: autodeterminazioni       )
                    | ( S: intelligenza di quartiere  | P: le intelligenze di quartiere )
                    | ( S: osmosi sociale     | P: osmosi sociali     )
                    | ( S: auto (elettrica|a idrogeno|a olio di colza|ad acqua)     | P: auto (elettriche|a idrogeno|a olio di colza|ad acqua)     )
                    | ( S: umanit^"&agrave"            | P: umanit^"&agrave"            )
                    )
                )


            ) (* CONCETTO POSITIVO - FINE *)


        | Negativo:(



              M:(          (* CONCETTO NEGATIVO MASCHILE @CONCNM      @CONCMN      *)
                  LoGli:(  (* CONCETTO NEGATIVO MASCHILE @CONCNMLOGLI @CONCMNLOGLI *)
                      ( S: stalking           | P: stalking           )
                    | ( S: sciacallaggio      | P: sciacallaggi       )
                    | ( S: specismo           | P: specismi           )
                    | ( S: squadrismo         | P: squadrismi         )
                    | ( S: scientismo         | P: scientismo         )
                    | ( S: stupro             | P: stupro             )
                    )

                |  LGli:(  (* CONCETTO NEGATIVO MASCHILE @CONCNMLGLI @CONCMNLGLI *)
                      ( S: hate speech        | P: hate speech        )
                    | ( S: abilismo           | P: abilismi           )
                    | ( S: abusivismo         | P: abusivismi         )
                    | ( S: antieuropeismo     | P: antieuropeismi     )
                    | ( S: arbitrio           | P: arbitrii           )
                    | ( S: autoritarismo      | P: autoritarismi      )
                    | ( S: inquinamento       | P: inquinamenti       )
                    | ( S: egoismo            | P: egoismi            )
                    | ( S: integralismo       | P: integralismi       )
                    | ( S: odio               | P: insulti            )
                    | ( S: oltranzismo        | P: oltranzismi        )
                    )

                |  IlI:(   (* CONCETTO NEGATIVO MASCHILE @CONCNMILI @CONCMNILI *)
                      ( S: [Prefisso^]fascismo  | P: [Prefisso^]fascismi           )
                    | ( S: (bitch|fat|kink)^"-"^shaming  | P: (bitch|fat|kink)^"-"^shaming )
                    | ( S: [cyber^"-"^]bullismo      | P: [cyber^"-"^]bullismi               )
                    | ( S: [Prefisso^]nazismo   | P: [Prefisso^]nazismo            )
                    | ( S: \\capitalismo         | P: doxxing                       )
                    | ( S: berlusconismo        | P: berlusconismi                 )
                    | ( S: binarismo di genere  | P: binarismi di genere           )
                    | ( S: boicottaggio         | P: boicottaggio                  )
                    | ( S: cat^"-"^calling      | P: cat^"-"^calling               )
                    | ( S: chiacchiericcio      | P: chiacchiericci                )
                    | ( S: cinismo              | P: cinismi                       )
                    | ( S: climate change       | P: climate change                )
                    | ( S: complottismo         | P: complottismi                  )
                    | ( S: creazionismo         | P: creazionismi                  )
                    | ( S: discorso d'odio      | P: discorsi d'odio               )
                    | ( S: melonismo            | P: melonismi                     )
                    | ( S: doxxing              | P: doxxing                       )
                    | ( S: familismo amorale    | P: familismi amorali             )
                    | ( S: fideismo             | P: fideismi                      )
                    | ( S: fondamentalismo cattolico  | P: fondamentalismi cattolici )
                    | ( S: killeraggio mediatico| P: killereaggio mediatico        )
                    | ( S: lavaggio del cervello| P: lavaggi del cervello          )
                    | ( S: linciaggio mediatico | P: linciaggio mediatico          )
                    | ( S: manspreading         | P: manspreading                  )
                    | ( S: monoteismo           | P: monoteismi                    )
                    | ( S: nazionalismo         | P: nazionalismi                  )
                    | ( S: nichilismo           | P: nichilismi                    )
                    | ( S: patriarcato          | P: patriarcati                   )
                    | ( S: populismo            | P: populismi                     )
                    | ( S: qualunquismo         | P: qualunquismi                  )
                    | ( S: razzismo [sistemico] | P: razzismi [sistemici]          )
                    | ( S: revenge porn         | P: revenge porn                  )
                    | ( S: sea^"-"^lioning      | P: sea^"-"^lioning               )
                    | ( S: secessionismo        | P: secessionismi                 )
                    | ( S: separatismo          | P: separatismi                   )
                    | ( S: settarismo           | P: settarismi                    )
                    | ( S: sovranismo           | P: sovranismi                    )
                    | ( S: totalitarismo        | P: totalitarismi                 )
                    | ( S: tradizionalismo      | P: tradizionalismi               )
                    | ( S: tribalismo           | P: tribalismi                    )
                    )
                )



          |  F:(           (* CONCETTO NEGATIVO FEMMINILE @CONCNF     @CONCFN     *)
                  LaLe:(   (* CONCETTO NEGATIVO FEMMINILE @CONCNFLALE @CONCFNLALE *)
                      ( S: violenza           | P: violenza           )

                      (* AGGETTIVO NEG. + DIFESA DEGLI INTERESSI NAZIONALI *)
                    | ( 
                        S: (meschina|egoistica|medievale|cieca) difesa degli interessi nazionali    
                      | P: (meschine|egoistiche|medievali|cieche) difese degli interessi nazionali    
                      )
                    | ( S: \\repressione       | P: repressioni        )
                    | ( S: barbarie           | P: barbarie           )
                    | ( S: cattiveria         | P: cattiveria         )
                    | ( S: censura            | P: censure            )
                    | ( S: demagogia          | P: demagogie )
                    | ( S: diffamazione       | P: diffamazioni       )
                    | ( S: faziosit^"&agrave"          | P: faziosit^"&agrave"          )
                    | ( S: macchina del fango | P: macchine del fango )
                    | ( S: mafia              | P: mafie              )
                    | ( S: mascolinit^"&agrave"  tossica| P: mascolinit^"&agrave"  tossiche)
                    | ( S: normalizzazione    | P: normalizzazioni    )
                    | ( S: religione          | P: religioni          )
                    | ( S: sinofobia          | P: sinofobie          )
                    | ( S: stupidit^"&agrave"          | P: stupidit^"&agrave"          )
                    | ( S: subcultura         | P: subculture         )
                    | ( S: sottocultura       | P: sottoculture       )
                    | ( S: superficialit^"&agrave"     | P: superficialit^"&agrave"     )
                    | ( S: tifoseria          | P: tifoseria          )
                    | ( S: transfobia         | P: transfobie         )
                    | ( S: violenza carceraria| P: violenze carcerarie)
                    | ( S: xenofobia          | P: xenofobia          )
                    )

                |  LLe:(   (* CONCETTO NEGATIVO FEMMINILE @CONCNFLLE @CONCFNLLE *)
                      ( S: ignavia            | P: ignavia            )
                    | ( S: autocrazia         | P: autocrazie         )
                    | ( S: esclusione sociale | P: esclusioni sociali )
                    | ( S: eugenetica         | P: eugenetiche        )
                    | ( S: evasione fiscale   | P: evasioni fiscali   )
                    | ( S: ignoranza          | P: ignoranze          )
                    | ( S: illazione          | P: illazioni          )
                    | ( S: illegalit^"&agrave"         | P: illegalit^"&agrave"         )
                    | ( S: impotenza          | P: impotenze          )
                    | ( S: incapacit^"&agrave"         | P: incapacit^"&agrave"         )
                    | ( S: indifferenza       | P: indifferenze       )
                    | ( S: oggettificazione (della (donna|femmina))   | P: oggettificazioni (della (donna|femmina))            )
                    | ( S: ingiuria           | P: ingiurie           )
                    | ( S: ingiustizia[sociale] | P: ingiustizie[sociali])
                    | ( S: intolleranza       | P: intolleranze       )
                    | ( S: islamofobia        | P: islamofobie        )
                    | ( S: omofobia           | P: omofobie           )
                    | ( S: omotransfobia      | P: omotransfobie      )
                    | (S: (antistorica|assurda|irrazionale) difesa degli interessi nazionali | P: (antistoriche|assurde|irrazionali) difese degli interessi nazionali) 

                    )
                )


            ) (* CONCETTO NEGATIVO - FINE *)



        ); (* CONCETTO - FINE *)







(************************************************)
(* CONCLUSIONE OVVERO CIRCOSTANZIALE APODITTICA *)
(************************************************)

PremessaImprobabile ::=
                    [-----------(Conclusione^"." \\)|+++++++++++_]
                    ;

VirgolaConclusioneImprobabile ::=
                    [^"," Conclusione|+++++++++++_]
                    ;


Conclusione ::= 
          (
          PerCapirlo ::= per 
            (
            capirlo[una volta per (tutte|sempre)]
            | afferrare (((il|questo) concetto)|l'idea)
            | farsene (una ragione|un'idea)
            | impararlo
            | (metterselo|ficcarselo) (in testa|nella zucca)
            | metterselo in mente
            | pensarla come (ogni persona (sana di mente|di buonsenso|ragionevole))
            | farne un proprio bagaglio culturale
            | introiettarlo
            | negare il contrario
            );          
          
            non c'^"&egrave" altro ( da (dire|obiettare)|di cui discutere)
          | non c'^"&egrave" storia
          | l'ho sentito (al bar|al \\circolo \\arci|durante la manifestazione[di piazza]|in barca da amici|a cena da amici|in vacanza[a \\dubai])
          | va (detto|ribadito|comunicato|fatto girare|inoltrato|twittato|postato|instagrammato) a tutte e tutti
          | bisogna avere il coraggio di (dirlo[a [tutte e]tutti|senza se e senza ma|senza (paura|ambiguit^"&agrave" |compromessi)]|essere chiari[al riguardo]|farlo notare|affermarlo con (forza|chiarezza|lucidit^"&agrave" |precisione))
          | non c'^"&egrave" che dire [(signori|signore e signori)]
          | non c'^"&egrave" molto da aggiungere
          | tocca ribadire l'ovvio
          | puoi giurarci
          | non (serve|"&egrave"  necessaria) una [geniale] vignetta (di \\vauro | di \\mauro \\biani | del \\manifesto | del \\corriere della \\sera) PerCapirlo
          | che vada di traverso a chi ci vuol male
          | chi non "&egrave" d'accordo pu^"&ograve" anche (togliermi l'amicizia|cancellarmi dai like|cambiare strada|sparire per sempre|tornare nelle fogne|evitarmi|smettere di (parlarmi|discutere[con me]|frequentarmi|infastidirmi|assillarmi|menarmela))
          | ("&egrave" |sar^"&agrave" |sembrer^"&agrave" ) un'ovviet^"&agrave"  (ma a quanto pare (qualcuno ancora non lo capisce|repetita iuvant|bisogna ancora affermarlo [con forza]))
          | non c'^"&egrave" (critica| Concetto.Negativo | guerra AlConcetto.Positivo ) che tenga
          | non veniteci a raccontare il contrario
          | da parte mia sosterr^"&ograve" sempre IlConcetto.Positivo
          | da parte mia combatter^"&ograve" sempre IlConcetto.Negativo
          | mi sembra giusto [che sia|che le cose (vadano|stiano)] cos^"&igrave" 
          | l'ho (letto|imparato) nell'ultimo articolo di Intellettuale
          | chi (lo nega|lo omette) o "&egrave" (un falso|stupido|fuori dal mondo|un retrogrado) o "&egrave" (un finto tonto|in malafede|in contraddizione|[intellettualmente]disonesto)
          | chi ((sostiene|afferma) il contrario|non "&egrave" d'accordo|la pensa(diversamente|in un altro modo)|non la pensa(cos^"&igrave" |in questo modo)) 
                ("&egrave"  un noncompagno|
                  non ha capito niente 
                  [della vita|di come va il mondo|di come vanno le cose|dell'\\italia|di questo paese|di questa societ^"&agrave" |della societ^"&agrave"  civile|della temperie sociale[in cui ci troviamo]|della deriva antropologica in corso])
          | lo capirebbe
            (chiunque [tranne un (lettore (di \\libero|della \\verit^"&agrave" )|servo(dei padroni|del \\capitale|dei borghesi|dei fasci[sti])|minus habens|analfabeta (funzionale|emotivo)|[conclamato]noncompagno)]|anche un bambino)
          | non serve un abbonamento (a \\repubblica| a \\internazionale | alla \\stampa | all'^\\espresso) per capirlo
          (* Sezione intellettuali *)
          | non serve 
            ( Intellettuale|
            un [paludato|affermato|famoso]editorialista|un genio|uno scienziato|avere 
            (tre|quattro|cinque|sei|venti) lauree|un ((ospite|giornalista|interventista) televisivo)|un influencer[con almeno (centomila|mille|(sett|ott|nov)^anta^(due|tre|quattro|nove)^[mila]) like]|-----un'influencer [-----socialmente impegnata] [[armata di telefonetto]mentre si fa un selfie[-----molto sexy|hot|che far^"&agrave"  molto parlare]])
                  PerCapirlo
          | non deve certo (sottoscriverlo|scriverci(un articolo|un editoriale|un'articolessa|un libro|un instant book|un tweet|un post)) Intellettuale
          | l'ha detto [anche] Intellettuale ieri sera (in tv|sullo schermo del mio (telefonetto|smartphone|device|tablet)|sulla 7|da \\floris|da \\formigli|dalla \\gruber|su \\rai3)

      )   
      ; 












(* COGNOME E/O NOME INTELLETTUALE DI GRIDO vivente *)

IntellettualeFisso := Intellettuale
                   ;

IntellettualeFisso2 := Intellettuale
                   ;

Intellettuale ::= 
            \\chiara \\ferragni
      |     (\\diego \\bianchi [detto \\zoro]| \\zoro)
      |     (\\fedez| \\fed^\\ex) 
      |     \\lucia \\annunziata
      |     \\michela \\murgia
      |     [\\alessandro] \\barbero
      |     [\\alessandro] \\baricco
      |     [\\andrea] \\scanzi
      |     [\\angelo]  \\panebianco
      |     [\\antonio] \\scurati
      |     [\\corrado] \\augias 
      |     [\\corrado] \\formigli
      |     [\\david] \\parenzo
      |     [\\fabio] \\fazio 
      |     [\\gianrico] \\carofiglio
      |     [\\giovanni] \\floris
      |     [\\massimo] \\gramellini
      |     [\\massimo] \\recalcati 
      |     [\\piergiorgio] \\odifreddi
      |     [\\umberto] \\galimberti
      |     \\adriano \\sof^[f]^ri
      |     \\chef \\rublo 
      |     \\renzo \\toso 
      |     \\emilia \\molla 
      |     \\(c|k|ch)^at^(i|y|j)^a \\(laponte|l'aborre|daporre|decorre|melchiorre|soccorre) 
      |     \\concita \\de (\\gregorio | \\gregori "(cantautrice)")
      |     \\dacia \\maraini
      |     \\dietlinde \\gruber [detta \\lilli]
      |     \\erri \\de \\luca 
      |     \\ezio \\mauro
      |     \\francesco \\merlo 
      |     \\gad \\lerner
      |     \\carola \\rackete
      |     \\gianni \\vattimo
      |     \\giulio \\sapelli
      |     \\ilvo \\diamanti
      |     \\luca \\sofri
      |     \\makkox
      |     \\marco \\damilano [++_|o \\dadove^\\je\\^pare]
      |     \\saverio (\\tommasi|---\\tomasi di \\lampedusa) 
      |     \\myrta [\\maga] \\merlino
      |     \\mario \\calabresi
      |     \\mariolina \\sattanino
      |     \\massimo \\cacciari
      |     \\massimo \\giannini
      |     \\(m|----v)^auro \\biani
      |     \\michele \\serra
      |     \\selvaggia \\lucarelli
      |     \\moni \\ovadia
      |     (\\nanni|---\\nano) \\moretti
      |     \\paola \\egonu
      |     \\paolo \\pagliaro
      |     \\furio \\colombo
      |     \\enrico \\ment^(a|---i)^na
      |     \\(ro|----nor)^berto \\saviano
      |     \\rula \\jebreal
      |     [\\michele] \\santoro
      |     \\sandro \\veronesi
      |     \\alessandro \\de \\angelis
      |     \\stefano \\massini
      |     \\stefano \\zurlo
      |     \\tomaso \\montanari
      |     \\toni (\\negri|\\n^"-"^parola) 
      |     \\tullio \\de \\mauro 
      |     \\vauro [\\senesi]
      |     \\zero^(calcare|----calcagno)
      ;













(************************)
(** PREFISSO GENERICO ***)
(************************)

(* ricordarsi di sostituire trattino d'unione in html *)
Prefisso ::= (neo|vetero|post|proto|pan|super)^"-";















Art ::= (

    Det: ( (* Articolo Determinativo *)
          S:(
              M:( LoGli: lo  | LGli: l'^ | IlI: il )
            | F:( LaLe:  la  | LLe:  l'^           )
            )
        | P: (
              M:( LoGli: gli | LGli: gli | IlI: i  )
            | F:( LaLe:  le  | LLe:  le            )
            )
      )

  | Indet: ( (* Articolo Indeterminativo *)
          S:(
              M:( LoGli: uno  | LGli: un | IlI: un )
            | F:( LaLe:  una  | LLe:  un'^         )
            )
        (* plurale di un Articolo Indeterminativo = Articolo Partitivo *)
        | P: Art.(Part)
      )

    (* Da sistemare:                                          *)
    (* Articolo Partitivo = a Preposizione PrepArticolata Di + il *)
  | Part: ( (* Articolo Partitivo *)
          S:(
              M:( LoGli: dello  | LGli: dell'^ | IlI: del )
            | F:( LaLe:  della  | LLe:  dell'^            )
            )
        | P: (
              M:( LoGli: degli  | LGli: degli | IlI: dei  )
            | F:( LaLe:  delle  | LLe:  delle             )
            )
      )

  );












Prep ::= (

    PrepArticolata: (

      PrepGenArticolata ::= Prep.PrepArticolata.(Di|A|Da|In|Con|Su|Per|Tra|Fra);

      Det: ( (*PREPOSIZIONE ARTICOLATA DET*)


          PrepGen: PrepGenArticolata
      
        |

          Di: (
                S:(
                    M:( LoGli: dello  | LGli: dell'^ | IlI: del )
                  | F:( LaLe:  della  | LLe:  dell'^            )
                  )
              | P: (
                    M:( LoGli: degli  | LGli: degli | IlI: dei  )
                  | F:( LaLe:  delle  | LLe:  delle             )
                  )
            )
      
        | A: (
                S:(
                    M:( LoGli: allo   | LGli: all'^ | IlI: al   )
                  | F:( LaLe:  alla   | LLe:  all'^             )
                  )
              | P: (
                    M:( LoGli: agli   | LGli: agli  | IlI: ai   )
                  | F:( LaLe:  alle   | LLe:  alle              )
                  )
            )
      
        | Da: (
                S:(
                    M:( LoGli: dallo  | LGli: dall'^ | IlI: dal )
                  | F:( LaLe:  dalla  | LLe:  dall'^            )
                  )
              | P: (
                    M:( LoGli: dagli  | LGli: dagli | IlI: dai  )
                  | F:( LaLe:  dalle  | LLe:  dalle             )
                  )
            )
      
        | In: (
                S:(
                    M:( LoGli: nello  | LGli: nell'^ | IlI: nel    )
                  | F:( LaLe:  nella  | LLe:  nell'^               )
                  )
              | P: (
                    M:( LoGli: negli  | LGli: negli | IlI: nei     )
                  | F:( LaLe:  nelle  | LLe:  nelle                )
                  )
            )
      
        | Con: (
              (* Scelta casuale tra versione staccata e "univerbata"(?) *)
              (* entrambe sono ugualmente corrette *)
      
              (* Versione staccata *)
      
              ( S:(
                    M:( LoGli: con lo | LGli: con l'^ | IlI: con il)
                  | F:( LaLe:  con la | LLe:  con l'^              )
                  )
              | P: (
                    M:( LoGli: con gli| LGli: con gli | IlI: con i )
                  | F:( LaLe:  con le | LLe:  con le               )
                  )
              )
      
              |
      
              (* Versione "univerbata"(?), meno probabile *)
              ------------
              ( S:(
                    M:( LoGli: collo  | LGli: con l'^ | IlI: col   )
                  | F:( LaLe:  colla  | LLe:  con l'^              )
                  )
              | P: (
                    M:( LoGli: cogli  | LGli: cogli   | IlI: coi   )
                  | F:( LaLe:  colle  | LLe:  colle                )
                  )
              )
      
            )
      
        | Su: (
                S:(
                    M:( LoGli: sullo  | LGli: sull'^ | IlI: sul    )
                  | F:( LaLe:  sulla  | LLe:  sull'^               )
                  )
              | P: (
                    M:( LoGli: sugli  | LGli: sugli  | IlI: sui    )
                  | F:( LaLe:  sulle  | LLe:  sulle                )
                  )
            )
      
        | Per: (
                S:(
                    M:( LoGli: per lo | LGli: per l'^| IlI: per il )
                  | F:( LaLe:  per la | LLe:  per l'^              )
                  )
              | P: (
                    M:( LoGli: per gli| LGli: per gli| IlI: per i  )
                  | F:( LaLe:  per le | LLe:  per le               )
                  )
            )
      
        | Tra: (
                S:(
                    M:( LoGli: tra lo | LGli: tra l'^| IlI: tra il )
                  | F:( LaLe:  tra la | LLe:  tra l'^              )
                  )
              | P: (
                    M:( LoGli: tra gli| LGli: tra gli| IlI: tra i  )
                  | F:( LaLe:  tra le | LLe:  tra le               )
                  )
            )
      
        | Fra: (
                S:(
                    M:( LoGli: fra lo | LGli: fra l'^| IlI: fra il )
                  | F:( LaLe:  fra la | LLe:  fra l'^              )
                  )
              | P: (
                    M:( LoGli: fra gli| LGli: fra gli| IlI: fra i )
                  | F:( LaLe:  fra le | LLe:  fra le              )
                  )
            ) 

        ) (*FINE PREPOSIZIONE ARTICOLATA DET*)
        
        |             

         
      Indet: (  (*PREPOSIZIONE ARTICOLATA INDET*)


          PrepGen: PrepGenArticolata

                             (* "di dei, di delle" sarebbe scorretto *)
                             (* controllare per event. soluzione migliore *) 
        | Di:   (S: di  Art | P: di  (M: alcuni | F: alcune) )       
        | A:    (S: a   Art | P: a   Art                     )      
        | Da:   (S: da  Art | P: da  Art                     )       
        | In:   (S: in  Art | P: in  Art                     )       
        | Con:  (S: con Art | P: con Art                     )        
        | Su:   (S: su  Art | P: su  Art                     )       
        | Per:  (S: per Art | P: per Art                     )        
        | Tra:  (S: tra Art | P: tra Art                     )        
        | Fra:  (S: fra Art | P: fra Art                     )        



        )  (*FINE PREPOSIZIONE ARTICOLATA INDET*)


    ) (*FINE PREPOSIZIONE ARTICOLATA*)
      
  | PrepSemplice: (

      PrepGenSemplice ::= di|a|da|in|con|su|per|tra|fra;

             PrepGen: PrepGenSemplice
           | Di:  di
           | A:   a
           | Da:  da
           | In:  in
           | Con: con
           | Su:  su
           | Per: per
           | Tra: tra
           | Fra: fra

    ) (*FINE PREPOSIZIONE SEMPLICE*)


); (*FINE PREPOSIZIONE*)










`
