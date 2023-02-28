    const grammar = `


I ::=   "title:    PunkaBot v.4 \\n"
      ^ "author:   fb.me/atpsd - archivefever.tk@gmail.com \\n"
      ^ "language: italian \\n"
      ^ "status:   refinable \\n"
      ^ "topic:    politics \\n"
      ^ "comment:  generatore di frasi per conquistare bellissime punkabbestia \\n"
      ^ "warning:  dice solo sincere verita'  \\n"
      ^ "created:  28/02/2023"
;



(* @TODOLIST To do list 
- concetti: dividere tra Valori - Oggetti - Status Symbol etc
- giornali di destra e sinistra
- improbabili appropriazioni culturali (dell'odio, della violenza, del fascismo stesso)
- nomi di influencer inventati Lo Zappa il Turacciolo etc
- nomi nomi di associazioni con data random
- nomi occasioni di incontro con presentazioni di libri o scrittori
- tema fake news e postverita'
– complimento diretto alla punkabbestia
– frasi sul PunkaBot stesso o pubblicita' -concorrenza nei confronti degli altri bot in generale
– inserire fallacie logiche
– name dropping di intellettuali di grido, pero'  stranieri
– nomi di discipline, titoli di studio, campi di ricerca, etc
– nomi di reti e trasmissioni televisive
– nomi nemici e amici ideologici
– pagine facebook cooptate con titoli asintattici
– video di frasi del punkabot con musica di sottofondo e-o con text to speech
– video di frasi del punkabot da fermare a caso - stile vecchie gif
– preposizione d' con apostrofo
*)







(**************************************************************************************************************)
(*** @FRASE ***************************************************************************************************)
(**************************************************************************************************************)


S ::= \\ 
      >>(
        Frase01 | Frase02 | Frase03 | --Frase04 | Frase05 | ++Frase06 | ++Frase07 | Frase08 | -Frase09 | ++Frase10 | ----Frase11 | --------Frase12
      )<< ^"."
      ;


(* Frase12 punk a' verbio *)
Frase12 ::= \\
        ( Panca ::= punka|panca|panka|banca|\\fanta|barca|Bestia;
          Bestia ::= capra|carta|carpa|bestia|banca|Panca;
          Campa ::= campa|canta|casca|calca;
          Pan ::= pan|can|fan|\\zan|karma;
          Crepa ::= lega|crepa|prega|sega|bega|sbrega|--\\mecha|----crema|^\\bot|^bbestia|"&egrave" (mega|nera|vera)|---"&egrave" lenta;

          {sopra} (la Panca | ---lo Pan) (la Bestia Campa|non Campa Bestia)^"," {sotto} (la Panca | ---lo Pan) la Bestia Crepa
        )
        ;



(* Frase11 ATPSD fecit *)
Frase11 ::= \\ (

        ATPSD ::= 
    \\(  
        (   apparire
            ( trascendentale per (superare il divenire|divenir superamento)
            | superante per (trascendere il divenire|divenir la trascendenza)
            | diveniente per (trascendere il superamento|superar la trascendenza)
            )
        )
        
        |
        (   trascendenza
            ( superante per (divenire l'apparire|apparire il divenire)
            | diveniente per (apparire superante|superare l'apparire)
            | apparente per (superare il divenire|divenir superamento)
            )
        )

        |
        (   superar
            ( ^e il divenire per (trascender l'apparire|apparir la trascendenza)
            | la trascendenza per (divenire l'apparire|apparire il divenire)
            | ^e l'apparire per (trascendere il divenire|divenir la trascendenza)
            )
        )
            |
        (   divenir
            ( ^e l'apparire per (trascendere il superamento|superar la trascendenza)
            | trascendentale per (superare l'apparire|apparir superamento)
            | ^e superante per (trascender l'apparire|apparir trascendentale)
            )
        )

    )
    ;

    ("a creare me, il PunkaBot," "&egrave" stato | il mio creatore "&egrave" | "Punkabot" "&egrave" stato creato da) ATPSD
    | ATPSD fecit "A.D. MMXXIII"

)    
;




(* Frase10 Interpolati slogan vari *)
Frase10 ::= \\     
    (   

    Vietato ::= vietato | --non "&egrave" permesso ;
    Vietare ::= vietare | --non permettere ;
    IlConcettoFisso := IlConcetto.Positivo ;

        dieci^"," cento^"," mille Concetti.Positivo
      | "CHI NON SALTA" Concetto.Negativo "&Egrave" "&Egrave"
      | [IlConcetto.Positivo distrugger^"&agrave"  IlConcetto.Negativo e] UnConcetto.Positivo vi seppellir^"&agrave"   
      | con IlConcetto.Negativo oppure con IlConcetto.Positivo^":" scegli  
      | Concetto.Positivo al potere
      | Concetto.Positivo senza se e senza ma
      | Concetto.Positivo subito
      | Concetto.Positivo^"," per ((riportare|ridare) fiducia alle nuove generazioni|nuovi orizzonti|realizzare quello che (i cittadini|gli elettori) vogliono|fare la cosa giusta|(avere un|(guardare|pensare) al|(immaginare|progettare|migliorare)[insieme] il) domani)
      | fate IlConcetto.Positivo^"," non IlConcetto.Negativo
      | IlConcetto.Negativo qui non ha cittadinanza
      | IlConcetto.Positivo "&egrave" al lavoro con te^"," per IlConcetto.Positivo
      | IlConcetto.Positivo non si vota^"," si fa  
      | IlConcetto.Positivo vive e lotta con noi
      | IlConcettoFemminile.Negativo ha bisogno di te^"," tu non di lei  
      | IlConcettoMaschile.Negativo ha bisogno di te^"," tu non di lui  
      | l'impegno con la comunit^"&agrave" ^"," guardando AlConcetto.Positivo
      | meglio un giorno di Concetto.Positivo che cento anni di Concetto.Negativo 
      | mettete DeiConcetti.Positivo nei vostri cannoni
      | nel segreto dell'urna IlConcetto.Positivo ti vede^"," IlConcetto.Negativo no
      | per superare IlConcetto.Negativo insieme^"," serve IlConcetto.Positivo
      | potere AlConcetto.Positivo
      | se dal futuro vuoi il ((Positivo: meglio|Negativo: peggio)^"," scegli IlConcetto).(Positivo|Negativo)
      | se IlConcettoFisso diventa fuorilegge^"," solo i fuorilegge avranno IlConcettoFisso  
      | tremate^"," tremate^"," (((Art ConcettoNome).F.(LLe|++++++++LaLe)).P.Det.Positivo) son tornate
      | Vietato Vietare IlConcetto.Positivo  
      | vogliamo IlConcetto.Positivo e subito  

      )
      ;



(* Frase09 Citazione di Eleanor Roosevelt, per^"&ograve"  utile alla causa *)
Frase09 ::= \\
grandi menti parlano di Intellettuale^"," menti mediocri parlano di Concetto.Positivo^"," menti piccole parlano di Concetto.Negativo
;




(* Frase 08 sei bella come ---ismo *)
Frase08 ::= \\       
      (

      SuUnMuro ::= su un (muro|portone|muretto) | su una (parete|facciata|vetrata|persiana); 
      SulMuro ::= sul (muro|portone|muretto) | sulla (parete|facciata|vetrata) | sulle persiane; 
      SuUnMezzoDiTrasporto ::= su un (treno[regionale[veloce]]|camion|\\t^\\i^\\r|autoarticolato) |su un'auto [abbandonata|presa a rate|non di lusso|con l'adesivo baby onboard]| su un'autobotte | su un vagone della metro [di \\roma|di \\milano|della \\milano di \\sala|all'estero]; 
      Sbombolettato ::= sbombolettato|taggato|inciso|graffitato|pennellato|pirografato|scolpito|impresso|---affrescato; 

SuUnLuogo ::=
            (
            SuUnMuro [altrui|a casaccio|scelto a caso|come tutti gli altri|anonimo|di periferia|del centro]
          | (sul graffito|sul murales|sull'opera) di un altro (vandalo|writer|(artista|imbianchino) di strada|street artist|\\banksy mancato)
          | --sulla casetta del tuo cane [pitbull]
          | SulMuro (di casa (della tua ex|tua|di tua (mamma|zia|nonna|sorella|cognata|figlia|moglie))|del tuo (condominio|ufficio|garage|casotto degli attrezzi|box auto|appartamento))
          | SulMuro di (un "COMPRO ORO"|una (chiesa|cattedrale|parrocchia)|un panificio|una caserma[dei \\carabinieri|della \\guardia di \\finanza|dell'^\\esercito[\\italiano]|dell'^\\aviazione]|una pasticceria|un benzinaio|una rosticceria|un'universit^"&agrave" [occupata]|una scuola(elementare|media)|un liceo|un'isola ecologica|un kebabbaro|una sede (dell'^\\agenzia delle \\entrate|dell'^\\a^\\n^\\p^\\i|dell'^\\a^\\n^\\c^\\i|dell'^\\a^\\c^\\l^\\i))
          | SulMuro di (un ex^"-"^brigatista[ormai (in libert^"&agrave"  vigilata|ai domiciliari|[perfettamente] reintegrato nella societ^"&agrave" |talvolta intervistato in tv)]|un rifugiato politico|un compagno imbianchino|un richiedente asilo|un [fratello]migrante|un povero|un indigente|uno squattrinato|un esodato|un pensionato|una massaia|un trappatore)
          | SuUnMezzoDiTrasporto [in fiamme|_|_]

            ) 
            ; 

            (

            (SeiBella:
          "SEI" ("BELLA"|"GNOCCA"|"NONBRUTTA"|"AVVENENTE"|"PIACENTE"|"SEXY"|"MOZZAFIATO"|"BONA"|"FREGNA") 
          | NonSeiBrutta: "NON SEI" ["CERTO"] "BRUTTA"
            )

        "COME"

       ( SeiBella: "L'ANTI"^ | NonSeiBrutta: "IL" )

        ("TOTALITAR"|"MELON"|"FASC"|"PAP"|"NICHIL"|"BERLUSCON"|"GRILL"|"RENZ"|"RAZZ"|"NAZ"|"CONSERVATOR"|"LEGH"|"SALVIN"|"BOOMER"|"LAVOR"|"SOVRAN"|"PROIBIZION"|"SESS"|"LIBER"|"NAZIONAL"|"CREAZION"|"CLASS")^"ISMO" 
            ).(SeiBella|NonSeiBrutta)



        ^"\\n"

        "("^
            (Sbombolettato [a sfregio|ostinatamente[nonostante varie (cancellazioni|denunce[verso ignoti])]|pi^"&ugrave" [e pi^"&ugrave"] volte [senza motivo]|senza motivo|senza preavviso] SuUnLuogo 
            | -----pubblicato da questo stesso \\punka^\\bot
            | ----a tutto schermo sul sito defacciato di (un alimentari|un'autorimessa|un blog di videogiochi|un ricettario online|una escort|un mercatino dell'usato|un gruppetto musicale|un giornalino locale|un ristorante|un bnb|un negozio di telefonia|un supermercato|un commercialista|un avvocato|una dog sitter)
            | ----scritto nel bagno di (un bar [antagonista]|un autogrill|una gelateria|un liceo[occupato]|una scuola elementare|un convento)
            | ----{[stranamente|contro ogni(previsione|probabilit^"&agrave" |pronostico)]}{Sbombolettato} su un muro libero
            | --Sbombolettato (ovunque|a caso|su un monumento)
            | -in copertina su (un inserto culturale|un giornalino universitario|un settimanale di nondestra|un mensile[di giardinaggio|sulle barche di lusso|automobilistico])
            | esposto in una galleria d'arte [a (\\londra|\\new \\york|\\dallas|\\firenze|\\busto \\arsizio|\\milano|\\torino|\\palermo|\\civitavecchia|\\termoli|\\gallarate|\\rho|\\brescia|\\bologna|\\belluno)]
            | impresso sui (megaschermi|fondali) in studio a (\\piazzapulita|\\propaganda \\live|\\l'aria che tira|\\in mezz'ora|\\otto e mezzo|\\dimartedi'|\\maratona \\mentana)
            | proiettato [illegalmente|clandestinamente|in occasione di un'iniziativa di strada|da alcuni punkabbestia] su un palazzo [storico|della \\provincia|della \\regione]
            | riscritto [senza alcuna retorica|per arginare IlConcetto.Negativo] (dal vignettista|dall'illustratore|dal satiraio|dal bozzettista|dall'intellettuale) (satirico|in servizio permanente effettivo|indipendente|non cooptato) di un (quotidiano|settimanale|periodico|quindicinale) (impegnato|non fascista|di buonsenso|a favore DelConcetto.Positivo|che si oppone AlConcetto.Negativo)
            | Sbombolettato ((sul cofano|sul tettuccio|sulla fiancata|sul parabrezza[impolverato]|sul lunotto) della tua auto|sul (serbatoio[appena customizzato]|parafango|sedile[in pelle]) della tua moto) 
            | Sbombolettato da un writer eroe SulMuro di un ((edificio|palazzo)[storico]|ospedale) [semidistrutto|deflagrato|appena (ricostruito|ristrutturato|sistemato|ritinteggiato|restaurato)][con fondi europei] (ad \\aleppo|in \\siria|in \\ucraina|in una zona di guerra|in una zona bombardata in \\medioriente)  
            | tatuato (su|sul (braccio|bicipite|gluteo|polpaccio) di|sulla (coscia|gamba|faccia|spalla|schiena|fronte|nuca|mano)di) (un punkabbestia|una [bellissima]punkabbestia)


            )
        ^")"

      )
      ;





(* Frase 07 discrimina tra concetti maschili e femminili - nominalismo *)
(* LinguaggioNome e articolazioni all'esterno della frase *)
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
                | e non "&egrave" ([solo] un caso[fortuito|sfortunato]|una coincidenza|una [mera]casualit^"&agrave" )
                | ed ecco servito IlConcettoMaschile.Negativo (signori|signore e signori|cari miei|amici all'ascolto|telespettatrici e telespettatori|spettatrici e spettatori) 
                | la cosa non mi stupisce
                | nulla di pi^"&ugrave" (scontato|naturale|normale)
                | ogni riferimento a (++++cose e persone|fenomeni|problemi sociali) realmente esistenti "&egrave" puramente (intenzionale|casuale)
                | piove sul bagnato
            )    
            ;



        EQuestoLaDiceLunga ::= 
            (
                [e] gi^"&agrave"  questo la dice lunga
              | (diamo (ascolto|fiducia|credito)|affidiamoci) AlLinguaggioDellePersone
              | [e questo] non pu^"&ograve"  essere un caso [fortuito]  
              | [molto] probabilmente non "&egrave" [solo] una coincidenza 
              | ascoltiamo IlLinguaggioDellePersone
              | causa ed effetto 
              | dovremmo (stabilire(una connessione|un legame forte|un legame d'empatia)) ConIlLinguaggioDellePersone 
              | dovremmo fare pi^"&ugrave" attenzione (al linguaggio|alla lingua[italiana]|alle parole che usiamo [ogni giorno|[nella vita di]tutti i giorni|quotidianamente])
              | dovremmo fare pi^"&ugrave" attenzione AlLinguaggioDellePersone
              | e credo ci sia un motivo [se le cose stanno  cos^"&igrave" ]
              | e non (c'^"&egrave"|credo ci sia) nulla di pi^"&ugrave" naturale  
              | e questo non "&egrave" certo un complotto [mondiale|mondialista|internazionale]  
              | "&egrave" DalLinguaggio che bisogna ripartire
              | fidiamoci DelLinguaggioDellePersone
              | guarda le coincidenze alle volte
              | il (dizionario|vocabolario) [\\zanichelli|\\treccani|\\hoepli|\\zingarelli|\\devoto \\oli|dell'^\\accademia \\della \\crusca|\\de \\mauro] non mente
              | IlLinguaggioDellePersone (ci d^"&agrave"  dei segnali[evidenti|molto chiari|inequivocabili]|vuole dirci qualcosa|non si pu^"&ograve"  ignorare)
              | mi stupirei del contrario
              | non (fingiamo|facciamo finta|illudiamoci|credo[proprio]) che sia (una coincidenza|soltanto un caso|un caso fortuito)
              | non so perch^"&eacute" ma la cosa non mi (stupisce|sorprende|meraviglia|sconvolge) [affatto|per niente|nemmeno un po' |neanche un po' ]
              | ripartiamo DalLinguaggioDellePersone
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



(* Frase06 intellettuali seguiti sui social *)
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
                      | su \\netflix
                      | su \\tik^\\tok
                      | su \\twitter
                      | su \\vk ["("^ il controverso social [dell'odio] (russo|putiniano)^")"]
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
                      | (1|2|3|4|5|6|7|8|9)^chan
                      | (\\whats|\\tik|\\you|\\twit|\\snap)^(\\app|\\chat|\\snap|\\tak|\\tok|\\t^[r]^ap)
                      | (il|l'obsoleto) feed rss
                      | 4chan
                      | 9gag
                      | \\img^\\flip
                      | \\instagram 
                      | \\know^\\your^\\meme
                      | \\netflix
                      | \\pinterest
                      | \\rai^(\\play|(1|2|3|4|5|6|7|8|9))
                      | \\reddit
                      | \\telegram
                      | \\tik^\\tok
                      | \\twitter
                      | \\vk ["("^ il controverso social [dell'odio] (russo|putiniano)^")"]
                      | \\wikipedia
                      | \\you^\\tube
                      | il \\podcast (di|della) \\radio^(1|2|3|4|5|6|7|8|9|24) 
                      | il telefonetto
                      | l'i^\\phone [(\\max|\\plus|\\deluxe|\\pro|(1|2)^(1|2|3|4|5|6|7|8|9))]
                      | la smart tv
                      | qualsiasi device

                      
                    )
                    ;                    

        VistoChe ::= (
                        ((dato|dal momento|visto) che|poich^"&eacute")       
                     )
                     ;

        (* "DiceCoseIntelligenti" verr^"&agrave"  seguito da "al riguardo" *)
        DiceCoseIntelligenti ::= (
                        dice [spesso|sempre] cose (intelligenti|interessanti|[[davvero]molto]condivisibili)
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
                      | (sulle connivenze|sull'alleanza[nera|scellerata|nefasta]) tra (Concetto e Concetto).Negativo  
                      )
                      ;


LaPersonaDaAscoltare ::= (
                         la persona a cui dare retta
                      |  chi DiceCoseIntelligenti [al riguardo|su questi temi]
                      |  la persona che [al riguardo|su questi temi] DiceCoseIntelligenti   
                      |  la persona (che sta dalla parte (giusta|della ragione)|esperta in questo campo)   
                      )
                      ;


(* "MoltiSeLaPrendono" pu^"&ograve"  essere seguito da "con" *)
MoltiSeLaPrendono ::= (
                        (molti|tanti|gli ignoranti|i minus habens|le persone(meno attrezzate|con meno strumenti[interpretativi])|(i|---gli onnipresenti) noncompagni) (* NemiciIdeologici *)
                        (se la prendono|si (infuriano|arrabbiano)|s'infuriano|bisticciano|s'accapigliano)
                      | (la gente[qualunque]|la massa|il popol^(ino|o [bue]))(se la prende|s'infuria|bisticcia|s'accapiglia)
                      )
                      ;

HoFruitoLInfoprodotto ::= 
                      (
                        ho letto l'ultimo(libro|post|articolo)
                      | ho visto (l'ultimo (intervento televisivo|video)|l'ultima(diretta|\\l^\\i^\\v^\\e))   
                      | SulSocial ho (visto|avuto modo di (vedere|seguire)|seguito) 
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
        |  (io e Intellettuale|Intellettuale ed io) la pensiamo allo stesso modo [su tutto| ^"."\\ (indifferentemente|pi^"&ugrave" o meno|direi|quasi) su tutto] [^"." \\ pi^"&ugrave" (passa il tempo|va avanti|vado avanti|passano [i mesi e] gli anni) e pi^"&ugrave" sono persuaso (dalle sue frasi|dai suoi enunciati|dai suoi tormentoni|da ci^"&ograve"  che dice|dai suoi discorsi|dai concetti che espone|dalle sue parole|dalle sue battaglie|dalle cose che ripete[sempre])]
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
        (si batte meglio di|lotta pi^"&ugrave" di|"&egrave" pari merito con|mi sembra al livello di|non sfigurerebbe in un dibattito con) Intellettuale
      )
      ;




(* Frase05 confronti tra ismi *)
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
        | c'^"&egrave" una grande somiglianza
        | il confine "&egrave" (sottile|molto labile)
        | la somiglianza "&egrave" impressionante
        ; 

        IlDialogoNonEPossibile ::=
          non c'^"&egrave" possibilit^"&agrave"  di dialogo
        | il dialogo ("&egrave" impossibile|non "&egrave" possibile)
        | {un dialogo} {non pu^"&ograve"  [e non deve|++_] (esistere|sussitere)}
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
        | "&egrave" meglio calare un velo pietoso
        | la \\storia (si e gi^"&agrave"  espressa|ha gi^"&agrave"  (formulato il suo giudizio|giudicato|detto la sua|messo la parola fine))
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

          (   PremessaImprobabile
             (
               {(TraIlConcetto.Negativo e IlConcetto.Positivo | TraIlConcetto.Positivo e IlConcetto.Negativo)} {CeUnaBellaDifferenza} 
             | (TraIlConcetto e IlConcetto).(Positivo|Negativo) NonCeDifferenza
             | DalConcetto.Positivo AlConcetto.Negativo CambiaTutto
             | TraIlConcetto.Positivo e IlConcetto.Negativo IlDialogoNonEPossibile
             | ( SulConcetto.Negativo NonCeNienteDaDire | SulConcetto.Positivo CeMoltoDaDire )
             )
             VirgolaConclusioneImprobabile 
          )

          | 

          {SulConcetto.Negativo NonCeNienteDaDire} ^"," mentre {SulConcetto.Positivo CeMoltoDaDire}
      
      )
      ;


(* Frase 04 identit^"&agrave"  concetti *)
Frase04 ::= \\ 
      (
        IlConcettoEstConcetto ::= 
        (IlConcetto "&egrave" Concetto).(Positivo|Negativo)
        ;

        IlConcettoEstConcetto ["e" Conclusione]
      | Conclusione^":" IlConcettoEstConcetto

      )
      ;



(* Frase03 confronti tra ismi *)
Frase03 ::= \\ 
      (

        (* Guerra "al" concetto *)
        GuerraAlConcettoBase ::=             
            (
                  (Art: la  | NoArt: _) (guerra|lotta|resistenza|contrariet^"&agrave" ) AlConcetto
            |     (Art: il  | NoArt: _) (monitoraggio|monitoraggio) DelConcetto
            |     (Art: il  | NoArt: _) (rifiuto|rifiuto) DelConcetto
            |     (Art: il  | NoArt: _) (tab^"&ugrave"|risentimento) nei confronti DelConcetto
            |     (Art: l'^ | NoArt: _) (indignazione|intervento) nei confronti DelConcetto
            |     (Art: l'^ | NoArt: _) (odio|osservazione) DelConcetto
            |     (Art: l'^ | NoArt: _) (opposizione|opposizione) AlConcetto
            |     (Art: la  | NoArt: _) (battaglia|battaglia) contro IlConcetto
            |     (Art: la  | NoArt: _) (delegittimazione|sorveglianza|marginalizzazione) DelConcetto
            |     (Art: la  | NoArt: _) (mobilitazione|mobilitazione) contro IlConcetto
            |     (Art: la  | NoArt: _) (repressione|critica|cancellazione) DelConcetto
            |  ---(Art: l'^ | NoArt: _) (ostracismo|ostracismo) (verso IlConcetto|nei confronti DelConcetto)
            |-----(Art: la  | NoArt: _) (non collaborazione|non collaborazione) nei confronti DelConcetto
            |-----(Art: il  | NoArt: _) (non allineamento|non asservimento) AlConcetto
            ) 
        ;
        GuerraAlConcetto     ::= GuerraAlConcettoBase.NoArt ;
        LaGuerraAlConcetto   ::= GuerraAlConcettoBase.Art ;

        ConcettoEsteso ::= 
          NoArt: (  
            Negativo: ((Concetto| ----- cultura DelConcetto).Negativo. | ---(GuerraAlConcetto).Positivo.) 
          | Positivo: ((Concetto| ----- cultura DelConcetto).Positivo. | ---(GuerraAlConcetto).Negativo.) 
          )
          |
          Art: (  
            Negativo: ((IlConcetto| ----- la cultura DelConcetto).Negativo. | ---(LaGuerraAlConcetto).Positivo.) 
          | Positivo: ((IlConcetto| ----- la cultura DelConcetto).Positivo. | ---(LaGuerraAlConcetto).Negativo.) 
          )
        ;   

        IlConcettoEstesoNegativo ::= ConcettoEsteso.Negativo.Art ;
        ConcettoEstesoNegativo ::= ConcettoEsteso.Negativo.NoArt ;
        IlConcettoEstesoPositivo ::= ConcettoEsteso.Positivo.Art ;
        ConcettoEstesoPositivo ::= ConcettoEsteso.Positivo.NoArt ;

        NonPuoEsserci ::= 
            (non (pu^"&ograve"  esserci|esiste|c'^"&egrave"|"&egrave" possibile [che esista|---_]|(si realizzer^"&agrave" |ci sar^"&agrave" |esister^"&agrave" |vedremo)mai) )
        ;   

        NonEst ::= (non "&egrave"|----^"," ben lungi dall'essere) 
        ;

        FaRimaCon ::= (fa rima con|significa|implica|"&egrave" sinonimo di)
        ;

           IlConcettoEstesoNegativo NonEst ConcettoEstesoPositivo ^"," "&egrave" ConcettoEstesoNegativo
         | IlConcettoEstesoPositivo NonEst ConcettoEstesoNegativo ^"," "&egrave" ConcettoEstesoPositivo
         | IlConcettoEstesoPositivo ("&egrave" ConcettoEstesoPositivo|(coincide) con IlConcettoEstesoPositivo)
         | ConcettoEstesoPositivo FaRimaCon ConcettoEstesoPositivo
         | {NonPuoEsserci ConcettoEstesoPositivo} {senza ConcettoEstesoPositivo}

      )
      ;




(* Frase02 senza concetto non c'è vero concetto *)
Frase02 ::= \\
      (
      senza (Concetto| ------cultura DelConcetto).Positivo non c'^"&egrave"
        (   vero ConcettoMaschile
          | vera ConcettoFemminile
         ).Positivo

      | senza (Concetto non c'^"&egrave" vera cultura DelConcetto).Positivo
      | (IlConcetto "&egrave" alla base DelConcetto).Positivo

      )
      ;


(* Frase01 abolire o sostenere concetto *)
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













(**************************************************************************************************************)
(** @CONCETTO *************************************************************************************************)
(**************************************************************************************************************)

(* ABBREVIAZIONI CASI COMUNI CONCETTO - INIZIO *)
(* Dovranno essere selezionati con label Positivo o Negativo *)


ArtOPrep   ::= (Art: Art| NoArt: _ |Prep: Prep);

ConcettoM  ::= (ArtOPrep ConcettoNome).M.(IlI|LGli|-----------LoGli) ;
ConcettoF  ::= (ArtOPrep ConcettoNome).F.(LLe|++++++++LaLe) ;
ConcettoMF ::= (ConcettoM|ConcettoF);

ConcettoMFSP ::= ConcettoMF.NoArt.(S|P);
IlIConcettoMFSP ::= ConcettoMF.Art.Det.(S|P);

Concetto   ::= ConcettoMF.NoArt.S ;
Concetti   ::= ConcettoMF.NoArt.P ;


IlConcetto          ::= ConcettoMF.S.Det.Art ;
IConcetti           ::= ConcettoMF.P.Det.Art ;
UnConcetto          ::= ConcettoMF.S.Indet.Art ;
AlcuniConcetti      ::= ConcettoMF.P.Indet.Art ;

IlConcettoMaschile  ::= ConcettoM.S.Det.Art ;
IlConcettoFemminile ::= ConcettoF.S.Det.Art ;
ConcettoMaschile    ::= ConcettoM.S.NoArt  ;
ConcettoFemminile   ::= ConcettoF.S.NoArt ;


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

DeiConcetti   ::=  ConcettiPrepArticolataDet.Di;      
AiConcetti    ::=  ConcettiPrepArticolataDet.A ;   
DaiConcetti   ::=  ConcettiPrepArticolataDet.Da;
NeiConcetti   ::=  ConcettiPrepArticolataDet.In;    
ConIConcetti  ::=  ConcettiPrepArticolataDet.Con;    
SuiConcetti   ::=  ConcettiPrepArticolataDet.Su;   
PerIConcetti  ::=  ConcettiPrepArticolataDet.Per;    
TraIConcetti  ::=  ConcettiPrepArticolataDet.Tra;    
FraIConcetti  ::=  ConcettiPrepArticolataDet.Fra;    

DiUnConcetto  ::=  ConcettoPrepArticolataIndet.Di; 
AUnConcetto   ::=  ConcettoPrepArticolataIndet.A ;   
DaUnConcetto  ::=  ConcettoPrepArticolataIndet.Da;
InUnConcetto  ::=  ConcettoPrepArticolataIndet.In;    
ConUnConcetto ::=  ConcettoPrepArticolataIndet.Con;    
SuUnConcetto  ::=  ConcettoPrepArticolataIndet.Su;   
PerUnConcetto ::=  ConcettoPrepArticolataIndet.Per;    
TraUnConcetto ::=  ConcettoPrepArticolataIndet.Tra;    
FraUnConcetto ::=  ConcettoPrepArticolataIndet.Fra; 

DiAlcuniConcetti  ::=  ConcettiPrepArticolataIndet.Di; 
ADeiConcetti      ::=  ConcettiPrepArticolataIndet.A ;   
DaDeiConcetti     ::=  ConcettiPrepArticolataIndet.Da;
InDeiConcetti     ::=  ConcettiPrepArticolataIndet.In;    
ConDeiConcetti    ::=  ConcettiPrepArticolataIndet.Con;    
SuDeiConcetti     ::=  ConcettiPrepArticolataIndet.Su;   
PerDeiConcetti    ::=  ConcettiPrepArticolataIndet.Per;    
TraDeiConcetti    ::=  ConcettiPrepArticolataIndet.Tra;    
FraDeiConcetti    ::=  ConcettiPrepArticolataIndet.Fra; 


ConcettoPrepArticolata      ::= ConcettoMF.Prep.PrepArticolata ;
ConcettoPrepArticolataDet   ::= ConcettoPrepArticolata.S.Det ;
ConcettiPrepArticolataDet   ::= ConcettoPrepArticolata.P.Det ;
ConcettoPrepArticolataIndet ::= ConcettoPrepArticolata.S.Indet ;
ConcettiPrepArticolataIndet ::= ConcettoPrepArticolata.P.Indet ;





(* ABBREVIAZIONI CASI COMUNI CONCETTO - FINE *)






ConcettoNome ::= (

          Positivo:(

              M:(          (* CONCETTO POSITIVO MASCHILE @CONCPM      @CONCMP      *)
                  LoGli:(  (* CONCETTO POSITIVO MASCHILE @CONCPMLOGLI @CONCMPLOGLI *)
                      ( S: stato di diritto   | P: stati di diritto   )
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
                    | ( S: esproprio proletario | P: espropri proletari)
                    | ( S: europeismo         | P: europeismi         )
                    | ( S: egalitarismo       | P: egalitarismi       )
                    | ( S: egualitarismo      | P: egualitarismi      )
                    | ( S: \\illuminismo       | P: illuminismi        )
                    | ( S: internazionalismo  | P: internazionalismi  )
                    | ( S: immigrazionismo    | P: immigrazionismi    )
                    | ( S: imperialismo       | P: imperialismi       )
                    )

                |  IlI:(   (* CONCETTO POSITIVO MASCHILE @CONCPMILI @CONCMPILI *)
                      ( S: solidarismo        | P: solidarismi        )
                    | ( S: [semplice] buonsenso | P: boicottaggi      )
                    | ( S: bondage [estremo]  | P: bondage [estremi]  )
                    | ( S: collettivismo      | P: collettivismi      )
                    | ( S: diritto all'aborto | P: diritti all'aborto )
                    | ( S: diritto all'interruzione di gravidanza | P: diritti all'interruzione di gravidanza)
                    | ( S: femminismo         | P: femminismi         )
                    | ( S: libero pensiero    | P: liberi pensieri    )
                    | ( S: matriarcato        | P: matriarcati        )
                    | ( S: [freudo^]marxismo  | P: [freudo^]marxismi  )
                    | ( S: garantismo         | P: garantismi         )
                    | ( S: comunismo          | P: comunismi          )
                    | ( S: cambiamento        | P: cambiamenti        )
                    | ( S: meticciato         | P: meticciati         )
                    | ( S: mondialismo        | P: mondialismi        )
                    | ( S: monopattino elettrico | P: monopattini elettrici )
                    | ( S: pacifismo          | P: pacifismi          )
                    | ( S: pluralismo         | P: pluralismi         )
                    | ( S: progresso          | P: progressi          )
                    | ( S: rispetto           | P: rispetti           )
                    | ( S: rispetto della \\costituzione | P: rispetti )
                    | ( S: sex working        | P: sex working        )
                    | ( S: socialismo         | P: socialismi         )
                    | ( S: terzomondismo      | P: terzomondismi      )
                    )
                )



          |  F:(           (* CONCETTO POSITIVO FEMMINILE @CONCPF     @CONCFP     *)

                  LaLe:(   (* CONCETTO POSITIVO FEMMINILE @CONCPFLALE @CONCFPLALE *)
                      (* libert^"&agrave"  *)  
                      ( 
                      S: libert^"&agrave"  (di pensiero | d'opinione | di coscienza | di parola | d'espressione | di stampa | d'informazione | d'associazione | di riunione | sindacale | di culto | religiosa |  d'azione | di movimento | individuale | personale)
                      | P: libert^"&agrave"   (di pensiero | d'opinione | di coscienza | di parola | d'espressione | di stampa | d'informazione | d'associazione | di riunione | sindacali | di culto | religiose |  d'azione | di movimento | individuali | personali)
                      ) 
                    | ( S: [semplice]civilt^"&agrave"          | P: [semplici]civilt^"&agrave"       )
                    | ( S: \\cultura queer             | P: culture queer           )
                    | ( S: \\resistenza                | P: razionalit^"&agrave"             )
                    | ( S: \\rivoluzione               | P: \\rivoluzioni            )
                    | ( S: \\teoria del \\gender        | P: \\teorie del \\gender     )
                    | ( S: \\z^\\t^\\l                   | P: \\z^\\t^\\l                )
                    | ( S: city bike [elettrica]      | P: city bike [elettriche]  )
                    | ( S: complessit^"&agrave"                | P: complessit^"&agrave"             )
                    | ( S: democrazia                 | P: democrazie              )
                    | ( S: dittatura del proletariato | P: dittature del proletariato )
                    | ( S: diversit^"&agrave"                  | P: diversit^"&agrave"               )
                    | ( S: farina di grillo           | P: farine di grillo        )
                    | ( S: goliardia                  | P: goliardie               )
                    | ( S: legalizzazione dell^(a cannabis|e canne|e droghe leggere[e perch^"&eacute" no anche pesanti]) | P: legalizzazioni dell^(a cannabis|e canne|e droghe leggere[e perch^"&eacute" no anche pesanti]) ) | ( S: libert^"&agrave"  d'opinione        | P: libert^"&agrave"  d'opinione)
                    | ( S: meritocrazia               | P: meritocrazie            )
                    | ( S: militanza                  | P: militanze               )
                    | ( S: pillola del giorno dopo    | P: pillole del giorno dopo )
                    | ( S: profondit^"&agrave"                 | P: profondit^"&agrave"              )
                    | ( S: razionalit^"&agrave"                | P: razionalit^"&agrave"             )
                    | ( S: riassegnazione di gender   | P: riassegnazioni di gender)
                    | ( S: satira                     | P: satire                  )
                    | ( S: scienza                    | P: scienze                 )
                    | ( S: solidariet^"&agrave"                | P: solidariet^"&agrave"             )
                    | ( S: sostenibilit^"&agrave"  ambientale  | P: sostenibilit^"&agrave"  ambientali)
                    | ( S: transizione di genere      | P: transizioni di genere   )
                    )

                |  LLe:(
                      ( S: empatia                    | P: empatie                 )
                    | ( S: evoluzione                 | P: evoluzioni              )
                    | ( S: egemonia culturale         | P: egemonie culturali      )
                    | ( S: integrazione               | P: integrazioni            )
                    | ( S: accoglienza                | P: accoglienze             )
                    | ( S: anarchia                   | P: anarchie                )
                    | ( S: autodeterminazione         | P: autodeterminazioni      )
                    | ( S: intelligenza di quartiere  | P: intelligenze di quartiere )
                    | ( S: osmosi sociale             | P: osmosi sociali          )
                    | ( S: auto (elettrica|a idrogeno|a olio di colza|ad acqua)     | P: auto (elettriche|a idrogeno|a olio di colza|ad acqua)     )
                    | ( S: umanit^"&agrave"                    | P: umanit^"&agrave"                 )
                    )
                )


            ) (* CONCETTO POSITIVO - FINE *)


        | Negativo:(



              M:(          (* CONCETTO NEGATIVO MASCHILE @CONCNM      @CONCMN      *)
                  LoGli:(  (* CONCETTO NEGATIVO MASCHILE @CONCNMLOGLI @CONCMNLOGLI *)
                      ( S: stalking                   | P: stalking                )
                    | ( S: sciacallaggio              | P: sciacallaggi            )
                    | ( S: specismo                   | P: specismi                )
                    | ( S: squadrismo                 | P: squadrismi              )
                    | ( S: scientismo                 | P: scientismi              )
                    | ( S: stupro                     | P: stupirei                  )
                    )

                |  LGli:(  (* CONCETTO NEGATIVO MASCHILE @CONCNMLGLI @CONCMNLGLI *)
                      ( S: hate speech                | P: hate speech             )
                    | ( S: abilismo                   | P: abilismi                )
                    | ( S: abusivismo                 | P: abusivismi              )
                    | ( S: antieuropeismo             | P: antieuropeismi          )
                    | ( S: arbitrio                   | P: arbitrii                )
                    | ( S: autoritarismo              | P: autoritarismi           )
                    | ( S: egoismo                    | P: egoismi                 )
                    | ( S: inquinamento               | P: inquinamenti            )
                    | ( S: integralismo               | P: integralismi            )
                    | ( S: odio                       | P: insulti                 )
                    | ( S: oltranzismo                | P: oltranzismi             )
                    )         

                |  IlI:(   (* CONCETTO NEGATIVO MASCHILE @CONCNMILI @CONCMNILI *)
                      ( S: [Prefisso^]fascismo  | P: [Prefisso^]fascismi           )
                    | ( S: (bitch|fat|kink)^"-"^shaming  | P: (bitch|fat|kink)^"-"^shaming )
                    | ( S: [cyber^"-"^]bullismo      | P: [cyber^"-"^]bullismi     )
                    | ( S: [Prefisso^]nazismo   | P: [Prefisso^]nazismo            )
                    | ( S: \\capitalismo         | P: doxxing                       )
                    | ( S: berlusconismo        | P: berlusconismi                 )
                    | ( S: consumo di suolo     | P: consumi di suolo              )
                    | ( S: binarismo di genere  | P: binarismi di genere           )
                    | ( S: boicottaggio         | P: boicottaggi                   )
                    | ( S: cat^"-"^calling      | P: cat^"-"^calling               )
                    | ( S: chiacchiericcio      | P: chiacchiericci                )
                    | ( S: cinismo              | P: cinismi                       )
                    | ( S: climate change       | P: climate change                )
                    | ( S: complottismo         | P: complottismi                  )
                    | ( S: creazionismo         | P: creazionismi                  )
                    | ( S: discorso d'odio      | P: discorsi d'odio               )
                    | ( S: doxxing              | P: doxxing                       )
                    | ( S: familismo amorale    | P: familismi amorali             )
                    | ( S: fideismo             | P: fideismi                      )
                    | ( S: fondamentalismo cattolico | P: fondamentalismi cattolici)
                    | ( S: killeraggio mediatico| P: killereaggio mediatico        )
                    | ( S: lavaggio del cervello| P: lavaggi del cervello          )
                    | ( S: linciaggio mediatico | P: linciaggio mediatico          )
                    | ( S: manspreading         | P: manspreading                  )
                    | ( S: melonismo            | P: melonismi                     )
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
                        S: (meschina|medievale|cieca) difesa degli interessi nazionali    
                      | P: (meschine|medievali|cieche) difese degli interessi nazionali    
                      )
                    | ( S: \\repressione       | P: repressioni        )
                    | ( S: barbarie           | P: barbarie           )
                    | ( S: cattiveria         | P: cattiveria         )
                    | ( S: censura            | P: censure            )
                    | ( S: demagogia          | P: demagogie          )
                    | ( S: diffamazione       | P: diffamazioni       )
                    | ( S: faziosit^"&agrave"          | P: faziosit^"&agrave"          )
                    | ( S: macchina del fango | P: macchine del fango )
                    | ( S: mafia              | P: mafie              )
                    | ( S: mascolinit^"&agrave"  tossica| P: mascolinit^"&agrave"  tossiche)
                    | ( S: normalizzazione    | P: normalizzazioni    )
                    | ( S: religione          | P: religioni          )
                    | ( S: sinofobia          | P: sinofobie          )
                    | ( S: sottocultura       | P: sottoculture       )
                    | ( S: stupidit^"&agrave"          | P: stupidit^"&agrave"          )
                    | ( S: subcultura         | P: subculture         )
                    | ( S: superficialit^"&agrave"     | P: superficialit^"&agrave"     )
                    | ( S: tifoseria          | P: tifoseria          )
                    | ( S: transfobia         | P: transfobie         )
                    | ( S: violenza carceraria| P: violenze carcerarie)
                    | ( S: xenofobia          | P: xenofobia          )
                    )

                |  LLe:(   (* CONCETTO NEGATIVO FEMMINILE @CONCNFLLE @CONCFNLLE *)

                      (* AGGETTIVO NEG. + DIFESA DEGLI INTERESSI NAZIONALI *)
                     ( 
                        S: (egoistica|assurda|irrazionale) difesa degli interessi nazionali    
                      | P: (egoistiche|assurde|irrazionali) difese degli interessi nazionali    
                      )

                    | ( S: autocrazia         | P: autocrazie         )
                    | ( S: esclusione sociale | P: esclusioni sociali )
                    | ( S: eugenetica         | P: eugenetiche        )
                    | ( S: evasione fiscale   | P: evasioni fiscali   )
                    | ( S: ignavia            | P: ignavie            )
                    | ( S: ignoranza          | P: ignoranze          )
                    | ( S: illazione          | P: illazioni          )
                    | ( S: illegalit^"&agrave"         | P: illegalit^"&agrave"         )
                    | ( S: impotenza          | P: impotenze          )
                    | ( S: incapacit^"&agrave"         | P: incapacit^"&agrave"         )
                    | ( S: indifferenza       | P: indifferenze       )
                    | ( S: ingiuria           | P: ingiurie           )
                    | ( S: ingiustizia[sociale] | P: ingiustizie[sociali])
                    | ( S: intolleranza       | P: intolleranze       )
                    | ( S: islamofobia        | P: islamofobie        )
                    | ( S: oggettificazione (della (donna|femmina))   | P: oggettificazioni (della (donna|femmina)) )
                    | ( S: omofobia           | P: omofobie           )
                    | ( S: omotransfobia      | P: omotransfobie      )
                    | (S: (antistorica|assurda|irrazionale) difesa degli interessi nazionali | P: (antistoriche|assurde|irrazionali) difese degli interessi nazionali) 

                    )
                )


            ) (* CONCETTO NEGATIVO - FINE *)



        ); (* CONCETTO - FINE *)











(**************************************************************************************************************)
(******************************************* @LINGUAGGIO ******************************************************)
(**************************************************************************************************************)


(* @LINGUAGGIO articolazioni - INIZIO *)
Linguaggio      ::=  LinguaggioMF.S ;
Linguaggi       ::=  LinguaggioMF.P ;
LinguaggioMF    ::=  LinguaggioNome.M.(IlI|---LGli) | LinguaggioNome.F.(LLe|++LaLe);

IlLinguaggio    ::=  ArtLinguaggioMF.S.Det ;
ILinguaggi      ::=  ArtLinguaggioMF.P.Det ;
UnLinguaggio    ::=  ArtLinguaggioMF.S.Indet ;
AlcuniLinguaggi ::=  ArtLinguaggioMF.P.Indet ;
ArtLinguaggioMF ::=  (Art LinguaggioNome).M.(IlI|---LGli) | (Art LinguaggioNome).F.(LLe|++LaLe);

DelLinguaggio   ::=  LinguaggioPrepArticolataMF.S.Det.Di;      
AlLinguaggio    ::=  LinguaggioPrepArticolataMF.S.Det.A ;   
DalLinguaggio   ::=  LinguaggioPrepArticolataMF.S.Det.Da;
NelLinguaggio   ::=  LinguaggioPrepArticolataMF.S.Det.In;    
ConIlLinguaggio ::=  LinguaggioPrepArticolataMF.S.Det.Con;    
SulLinguaggio   ::=  LinguaggioPrepArticolataMF.S.Det.Su;   
PerIlLinguaggio ::=  LinguaggioPrepArticolataMF.S.Det.Per;    
TraIlLinguaggio ::=  LinguaggioPrepArticolataMF.S.Det.Tra;    
FraIlLinguaggio ::=  LinguaggioPrepArticolataMF.S.Det.Fra;
DiUnLinguaggio  ::=  LinguaggioPrepArticolataMF.S.Indet.Di;      
AUnLinguaggio   ::=  LinguaggioPrepArticolataMF.S.Indet.A ;   
DaUnLinguaggio  ::=  LinguaggioPrepArticolataMF.S.Indet.Da;
InUnLinguaggio  ::=  LinguaggioPrepArticolataMF.S.Indet.In;    
ConUnLinguaggio ::=  LinguaggioPrepArticolataMF.S.Indet.Con;    
SuUnLinguaggio  ::=  LinguaggioPrepArticolataMF.S.Indet.Su;   
PerUnLinguaggio ::=  LinguaggioPrepArticolataMF.S.Indet.Per;    
TraUnLinguaggio ::=  LinguaggioPrepArticolataMF.S.Indet.Tra;    
FraUnLinguaggio ::=  LinguaggioPrepArticolataMF.S.Indet.Fra;
DeiLinguaggi    ::=  LinguaggioPrepArticolataMF.P.Det.Di;      
AiLinguaggi     ::=  LinguaggioPrepArticolataMF.P.Det.A ;   
DaiLinguaggi    ::=  LinguaggioPrepArticolataMF.P.Det.Da;
NeiLinguaggi    ::=  LinguaggioPrepArticolataMF.P.Det.In;    
ConILinguaggi   ::=  LinguaggioPrepArticolataMF.P.Det.Con;    
SuiLinguaggi    ::=  LinguaggioPrepArticolataMF.P.Det.Su;   
PerILinguaggi   ::=  LinguaggioPrepArticolataMF.P.Det.Per;    
TraILinguaggi   ::=  LinguaggioPrepArticolataMF.P.Det.Tra;    
FraILinguaggi   ::=  LinguaggioPrepArticolataMF.P.Det.Fra;
LinguaggioPrepArticolataMF ::= ( Prep.PrepArticolata LinguaggioNome ).M.(IlI|----LGli) | ( Prep.PrepArticolata LinguaggioNome ).F.(LLe|+LaLe) ;


(* @LINGUAGGIO DELLE PERSONE articolazioni *)
LinguaggioDellePersone      ::=  LinguaggioDellePersoneMF.S ;
LinguaggiDellePersone       ::=  LinguaggioDellePersoneMF.P ;
LinguaggioDellePersoneMF    ::=  (LinguaggioNome DellePersone).M.(IlI|----LGli) | (LinguaggioNome DellePersone).F.(LLe|++LaLe);

IlLinguaggioDellePersone    ::=  ArtLinguaggioDellePersoneMF.S.Det ;
ILinguaggiDellePersone      ::=  ArtLinguaggioDellePersoneMF.P.Det ;
UnLinguaggioDellePersone    ::=  ArtLinguaggioDellePersoneMF.S.Indet ;
AlcuniLinguaggiDellePersone ::=  ArtLinguaggioDellePersoneMF.P.Indet ;
ArtLinguaggioDellePersoneMF ::=  ( Art LinguaggioNome DellePersone).M.(IlI|----LGli) | ( Art LinguaggioNome DellePersone).F.(LLe|++++++++LaLe);

DelLinguaggioDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.Di;      
AlLinguaggioDellePersone    ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.A ;   
DalLinguaggioDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.Da;
NelLinguaggioDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.In;    
ConIlLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.Con;    
SulLinguaggioDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.Su;   
PerIlLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.Per;    
TraIlLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.Tra;    
FraIlLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Det.Fra; 
DiUnLinguaggioDellePersone  ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.Di;      
AUnLinguaggioDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.A ;   
DaUnLinguaggioDellePersone  ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.Da;
InUnLinguaggioDellePersone  ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.In;    
ConUnLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.Con;    
SuUnLinguaggioDellePersone  ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.Su;   
PerUnLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.Per;    
TraUnLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.Tra;    
FraUnLinguaggioDellePersone ::=  LinguaggioDellePersonePrepArticolataMF.S.Indet.Fra; 
DeiLinguaggiDellePersone    ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.Di;      
AiLinguaggiDellePersone     ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.A ;   
DaiLinguaggiDellePersone    ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.Da;
NeiLinguaggiDellePersone    ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.In;    
ConILinguaggiDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.Con;    
SuiLinguaggiDellePersone    ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.Su;   
PerILinguaggiDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.Per;    
TraILinguaggiDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.Tra;    
FraILinguaggiDellePersone   ::=  LinguaggioDellePersonePrepArticolataMF.P.Det.Fra;
LinguaggioDellePersonePrepArticolataMF ::= ( Prep.PrepArticolata LinguaggioNome DellePersone ).M.(IlI|----LGli) | ( Prep.PrepArticolata LinguaggioNome DellePersone).F.(LLe|+LaLe);







LinguaggioNome ::= 
            (
              M:(          
                  IlI:(   
                      ( S: linguaggio                        | P: linguaggi              )
                    | ( S: discor^(s|z)^o                    | P: discor^(s|z)^i         )
                    | ( S: modo di esprimersi                | P: modi di esprimersi     )
                    | ( S: dizionario                        | P: dizionari              )
                    | ( S: di^(b|bb|bbb|bbbb)^attito         | P: di^(b|bb|bbb|bbbb)^attiti )
                    | ( S: lessico                           | P: lessici                )
                    | ( S: passaparola                       | P: passaparola            )
                    | ( S: gergo                             | P: gerghi                 )
                    | ( S: sentiment                         | P: sentiment              )
                    | ( S: passaparola                       | P: tic linguistici        ) (*solo plurale*)
                    | ( S: passaparola                       | P: modi di dire           ) (*solo plurale*)
                    | ( S: frasario                          | P: frasari                )
                    | ( S: vocabolario                       | P: vocabolari             )
                    )
                |  LGli:(   
                      ( S: inconscio collettivo              | P: inconsci collettivi    )
                    | ( S: uso del linguaggio                | P: usi del linguaggio     )
                    | ( S: uso della lingua                  | P: usi delle lingue       )
                    | ( S: uso della parola                  | P: usi della parola       )

                    )
                )

          |  F:(           
                  LaLe:(   
                       
                      (  S: lingua                            | P: lingue                 )
                    | (  S: comunicazione                     | P: comunicazioni          )
                    | (  S: dialettica                        | P: dialettiche            )
                    | (  S: conversazione                     | P: conversazioni          )
                    )
                |  LLe:(
                      ( S: espressione                       | P: espressioni             )
                    | ( S: epistemologia                     | P: epistemologie           )
                    )
                )
             )
            ;


DellePersone ::= 
            ( 
             OA ::=^(S:(F: a| M:o)|P:(F: e| M:i));
             EI ::=^(S:(F: e| M:e)|P:(F: i| M:i));

             delle persone
           | (comune|normal|solita|banal)^mente (usat|intes|utilizzat)OA
           | (del (telespettatore|radioascoltatore)|dell'^(ascoltatore|internauta)) a casa
           | (radicat OA|gi^"&agrave"  present EI) nella realt^"&agrave" 
           | (usat|adoperat|condivis) OA (da [tutte e] tutti|dai giovani|dalle nuove generazioni)
           | +++della gente [normale|qualsiasi|ordinaria]
           | [(di|del) senso] comune
           | [attualmente] in voga
           | [di uso] comune
           | aggiornat OA
           | al passo coi tempi
           | contemporane OA
           | degli internauti
           | degli ultimi anni
           | dei (telespettatori|radioascoltatori|salariati) [di oggi]
           | del [\\]popol^(o|etto|ino)
           | del [sub^]proletariato
           | del pubblico
           | dell'immaginario collettivo
           | della classe (lavoratrice|subalterna|proletaria|svantaggiata|meno (benestante|abbiente|fortunata|avvantaggiata))
           | delle (fasce|classi) (lavoratrici|subalterne|proletarie|svantaggiate|meno (benestanti|abbienti|fortunate|avvantaggiate))
           | generalmente intes OA
           | modern OA
           | pi^"&ugrave" (diffus|aggiornat|affermat) OA [ultimamente|negli ultimi tempi]
           | pi^"&ugrave" alla moda
           | pi^"&ugrave" attual EI
           | pop
           | popolar EI
           | pubblic OA
           | radicat OA nella sensibilit^"&agrave"  (contemporanea|(d'|dell')^oggi)
           | televisiv OA
           | urban OA
           )
           ;


(* @LINGUAGGIO articolazioni - FINE *)















(**************************************************************************************************************)
(*** @CONCLUSIONE CIRCOSTANZIALE APODITTICA *******************************************************************)
(**************************************************************************************************************)

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
            | (metterselo|ficcarselo) (in testa|nella zucca)
            | afferrare (((il|questo) concetto)|l'idea)
            | farne un proprio bagaglio culturale
            | farsene (una ragione|un'idea)
            | impararlo
            | introiettarlo
            | metterselo in mente
            | negare il contrario
            | pensarla come (ogni persona (sana di mente|di buonsenso|ragionevole))
            );          
          
            non c'^"&egrave" altro ( da (dire|obiettare)|di cui discutere)
          | ("&egrave"|sar^"&agrave" |sembrer^"&agrave" ) un'ovviet^"&agrave"  (ma a quanto pare (qualcuno ancora non lo capisce|repetita iuvant|bisogna ancora affermarlo [con forza]))
          | bisogna avere il coraggio di (dirlo[a [tutte e]tutti|senza se e senza ma|senza (paura|ambiguit^"&agrave" |compromessi)]|essere chiari[al riguardo]|farlo notare|affermarlo con (forza|chiarezza|lucidit^"&agrave" |precisione))
          | che vada di traverso a chi ci vuol male
          | chi (lo nega|lo omette) o "&egrave" (un falso|stupido|fuori dal mondo|un retrogrado) o "&egrave" (un finto tonto|in malafede|in contraddizione|[intellettualmente]disonesto)
          | chi non "&egrave" d'accordo pu^"&ograve"  anche (togliermi l'amicizia|cancellarmi dai like|cambiare strada|sparire per sempre|tornare nelle fogne|evitarmi|smettere di (parlarmi|discutere[con me]|frequentarmi|infastidirmi|assillarmi|menarmela))
          | da parte mia combatter^"&ograve"  sempre IlConcetto.Negativo
          | da parte mia sosterr^"&ograve"  sempre IlConcetto.Positivo
          | l'ho (letto|imparato) nell'ultimo articolo di Intellettuale
          | l'ho sentito (al bar|al \\circolo \\arci|durante la manifestazione[di piazza]|in barca da amici|a cena da amici|in vacanza[a \\dubai])
          | mi sembra giusto [che sia|che le cose (vadano|stiano)]  cos^"&igrave" 
          | non (serve|"&egrave" necessaria) una [geniale] vignetta (di \\vauro | di \\mauro \\biani | del \\manifesto | del \\corriere della \\sera) PerCapirlo
          | non c'^"&egrave" (critica| Concetto.Negativo | guerra AlConcetto.Positivo ) che tenga
          | non c'^"&egrave" che dire [(signori|signore e signori)]
          | non c'^"&egrave" molto da aggiungere
          | non c'^"&egrave" storia
          | non sono solo slogan [al vento]
          | non veniteci a raccontare il contrario
          | puoi giurarci
          | senza se e senza ma
          | tocca ribadire l'ovvio
          | va (detto|ribadito|comunicato|fatto girare|inoltrato|twittato|postato|instagrammato) a tutte e tutti
          | chi ((sostiene|afferma) il contrario|non "&egrave" d'accordo|la pensa(diversamente|in un altro modo)|non la pensa( cos^"&igrave" |in questo modo)) 
                ("&egrave" un noncompagno|
                  non ha capito niente 
                  [della vita|di come va il mondo|di come vanno le cose|dell'\\italia|di questo paese|di questa societ^"&agrave" |della societ^"&agrave"  civile|della temperie sociale[in cui ci troviamo]|della deriva antropologica in corso])
          | lo capirebbe
            (chiunque [tranne un (lettore (di \\libero|della \\verit^"&agrave" )|servo(dei padroni|del \\capitale|dei borghesi|dei fasci[sti])|minus habens|analfabeta (funzionale|emotivo)|[conclamato]noncompagno)]|anche un bambino)
          | non serve un abbonamento (a \\repubblica| a \\internazionale | alla \\stampa | all'^\\espresso) per capirlo
          (* Sezione intellettuali *)
          | non serve 
            ( Intellettuale|
            un [paludato|affermato|famoso]editorialista|un genio|uno scienziato|avere 
            (tre|quattro|cinque|sei|venti) lauree|un ((ospite|giornalista|interventista) televisivo)|un influencer[con almeno (centomila|mille|(sett|ott|nov)^anta^(due|tre|quattro|nove)^[mila]) like]|-----un'influencer [-----socialmente impegnata] [[armata di telefonetto]mentre si fa un selfie[-----molto sexy|hot|shock|^"-"^provocazione|che far^"&agrave"  molto parlare]])
                  PerCapirlo
          | non deve certo (sottoscriverlo|scriverci(un articolo|un editoriale|un'articolessa|un libro|un instant book|un tweet|un post)) Intellettuale
          | l'ha detto [anche] Intellettuale ieri sera (in tv|sullo schermo del mio (telefonetto|smartphone|device|tablet)|sulla 7|da \\floris|da \\formigli|dalla \\gruber|su \\rai3)

      )   
      ; 











(**************************************************************************************************************)
(** @INTELLETTUALE ********************************************************************************************)
(**************************************************************************************************************)

IntellettualeFisso := Intellettuale
                   ;

IntellettualeFisso2 := Intellettuale
                   ;

Intellettuale ::= 
            \\chiara \\ferragni
      |     (\\diego \\bianchi [detto \\zoro]| \\zoro)
      |     (\\fedez| \\fed^\\ex) 
      |     (\\nanni|---\\nano) \\moretti
      |     (\\ze^(ro^(calcare|----calcagno))|---\\zo^(ro^(col^((c|k)^ane|\\camel))|----o^\\recalcati))
      |     [\\alessandro] \\barbero
      |     [\\alessandro] \\baricco
      |     [\\andrea] \\scanzi
      |     [\\angelo]  \\panebianco
      |     [\\antonio] \\scurati
      |     [\\beppe] \\severgni^[g|gnig]^ni 
      |     [\\corrado] \\augias 
      |     [\\corrado] \\formigli
      |     [\\david] \\parenzo
      |     [\\fabio] \\fazio 
      |     [\\gianrico] \\carofiglio
      |     [\\giovanni] \\floris
      |     [\\massimo] \\gramellini
      |     [\\massimo] \\recalcati 
      |     [\\michele] \\santoro
      |     [\\piergiorgio] \\odifreddi
      |     [\\umberto] \\galimberti
      |     \\(c|k|ch)^at^(i|y|j)^a \\(laponte|l'aborre|daporre|decorre|melchiorre|soccorre) 
      |     \\(m|----v)^auro \\biani
      |     \\(ro|----nor)^berto \\saviano
      |     \\adriano \\sof^[f]^ri
      |     \\alessandro \\de \\angelis
      |     \\bianca \\berlinguer
      |     \\carola \\rackete
      |     \\chef \\rublo 
      |     \\concita \\de (\\gregorio | \\gregori "("^cantautrice^")")
      |     \\dacia \\maraini
      |     \\dietlinde \\gruber [detta \\lilli]
      |     \\emilia \\molla 
      |     \\enrico \\ment^(a|---i)^na
      |     \\erri \\de \\luca 
      |     \\ezio \\mauro
      |     \\francesco \\merlo 
      |     \\furio [\\cristoforo] \\colombo
      |     \\gad \\lerner
      |     \\gianni \\vattimo
      |     \\giulio \\sapelli
      |     \\ilvo \\diamanti
      |     \\luca \\sofri
      |     \\lucia \\annunziata
      |     \\makkox
      |     \\marco \\damilano [++_|o \\dadove^\\je\\^pare]
      |     \\mario \\calabresi
      |     \\mariolina \\sattanino
      |     \\massimo \\cacciari
      |     \\massimo \\giannini
      |     \\michela \\murgia
      |     \\michele \\serra
      |     \\moni \\ovadia
      |     \\myrta [\\maga] \\merlino
      |     \\paola \\egonu
      |     \\paolo \\pagliaro
      |     \\pino \\corrias
      |     \\renzo \\toso 
      |     \\rosi \\braidotti [filosofa dell'^\\universit^"&agrave"  di \\utrecht[in \\olanda]]
      |     \\rula \\jebreal
      |     \\sandro \\veronesi
      |     \\saverio (\\tommasi|---\\tomasi di \\lampedusa) 
      |     \\selvaggia \\lucarelli
      |     \\stefano \\massini
      |     \\stefano \\zurlo
      |     \\tomaso \\montanari
      |     \\toni (\\negri|\\n^"-"^parola) 
      |     \\tullio \\de \\mauro 
      |     \\vauro [\\senesi]
      ;













(**************************************************************************************************************)
(** @PREFISSO GENERICO ****************************************************************************************)
(**************************************************************************************************************)

(* ricordarsi di sostituire trattino d'unione in html *)
Prefisso ::= (neo|vetero|post|proto|pan|super)^"-";







(**************************************************************************************************************)
(** @ARTICOLI *************************************************************************************************)
(**************************************************************************************************************)

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







(**************************************************************************************************************)
(** @PREPOSIZIONI *********************************************************************************************)
(**************************************************************************************************************)

(*  

  Prep.PrepSemplice.(Di|A|Da|In|Con|Su|Per|Tra|Fra)                                   
  Prep.PrepArticolata.(Det|Indet).(Di|A|Da|In|Con|Su|Per|Tra|Fra) 

  L'etichetta PrepGen seleziona una preposizione a caso, articolata o semplice.
  es: Prep.(PrepSemplice|PrepArticolata).PrepGen

  NB: Per comodità d'utilizzo anche le preposizioni articolate possono essere "indeterminative" anche se ci^"&ograve"  non ha riscontro, cio"&egrave" non sono affatto "preposizioni articolate" perchè non c'è alcuna unione tra preposizione e articolo. È però molto comodo per passare da Det a Indet liberamente.

*)



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
