    const grammar = `

I ::=   "title:    PunkaBot\\n"
      ^ "author:   fb.me/atpsd - archivefever.tk@gmail.com \\n"
      ^ "language: italian \\n"
      ^ "status:   refinable \\n"
      ^ "topic:    politics \\n"
      ^ "comment:  generatore di frasi per conquistare bellissime punkabbestia \\n"
      ^ "warning:  dice solo sincere verita' \\n"
      ^ "created:  12/02/2023"
;



(************************************)
(*************** FRASE **************)
(************************************)

S ::= \\ 
      (

      (* 1 - Permutazione con "cultura di" Concetto *)
      (IlConcetto| ------la cultura DelConcetto).Negativo non "&egrave" Concetto.Positivo ^"," "&egrave" Concetto.Negativo
      |

      IlConcetto.Negativo non"&egrave"(Concetto| ------cultura DelConcetto).Positivo ^"," "&egrave" Concetto.Negativo
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
      |




      (* 3 - versione con conclusione apodittica *)
      IlConcetto.Positivo "&egrave" Concetto.Positivo "e" Conclusione
      |      
      IlConcetto.Negativo "&egrave" Concetto.Negativo "e" Conclusione
      |
      Conclusione^":" IlConcetto.Positivo "&egrave" Concetto.Positivo 
      |
      Conclusione^":" IlConcetto.Negativo "&egrave" Concetto.Negativo 

      )
      ^"."






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

(* Prep Articolata A+il  Concetto Singolare , dovrà essere specificato se Positivo o Negativo *)
AlConcetto ::= 
            (
                ( Prep.PrepArticolata.A ConcettoNome ).M.(IlI|LGli|--------------LoGli)
              | ( Prep.PrepArticolata.A ConcettoNome ).F.(LLe|++++++++LaLe)
            ).S.Det
            ;        


(* Prep Articolata Di+il  Concetto Singolare , dovrà essere specificato se Positivo o Negativo *)
DelConcetto ::= 
            (
                ( Prep.PrepArticolata.Di ConcettoNome ).M.(IlI|LGli|--------------LoGli)
              | ( Prep.PrepArticolata.Di ConcettoNome ).F.(LLe|++++++++LaLe)
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
                    | ( S: ascensore sociale  | P: ascensori sociali  )
                    | ( S: ateismo            | P: ateismi            )
                    | ( S: empowerment        | P: empowerment        )
                    | ( S: esproprio proletario   | P: espropri proletari   )
                    | ( S: europeismo         | P: europeismi         )
                    | ( S: illuminismo        | P: illuminismi        )
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
                    | ( S: meticciato         | P: meticciati         )
                    | ( S: mondialismo        | P: mondialismi        )
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
                      ( S: libert^"&agrave" d'espressione     | P: libert^"&agrave" d'espressione)
                    | ( S: [semplice]civilt^"&agrave"    | P: [semplici]civilt^"&agrave"        )
                    | ( S: \\cultura queer             | P: culture queer     )
                    | ( S: \\resistenza           | P: razionalit^"&agrave"            )
                    | ( S: \\rivoluzione               | P: \\rivoluzioni           )
                    | ( S: \\teoria del \\gender        | P: \\teorie del \\gender     )
                    | ( S: complessit^"&agrave"          | P: complessit^"&agrave"        )
                    | ( S: democrazia                 | P: democrazie            )
                    | ( S: farina di grillo           | P: farine di grillo        )
                    | ( S: goliardia                  | P: goliardie               )
                    | ( S: legalizzazione dell^(a cannabis|e canne|e droghe leggere[e perch^"&eacute" no anche pesanti]) 
                        | P: legalizzazioni dell^(a cannabis|e canne|e droghe leggere[e perch^"&eacute" no anche pesanti])            
                      )
                    | ( S: libert^"&agrave" d'opinione        | P: libert^"&agrave" d'opinione)
                    | ( S: meritocrazia           | P: meritocrazie        )
                    | ( S: pillola del giorno dopo    | P: pillole del giorno dopo )
                    | ( S: profondit^"&agrave"           | P: profondit^"&agrave"        )
                    | ( S: razionalit^"&agrave"               | P: razionalit^"&agrave"            )
                    | ( S: riassegnazione di gender | P: riassegnazioni di gender            )
                    | ( S: satira                     | P: satire                  )
                    | ( S: scienza                    | P: scienze               )
                    | ( S: solidariet^"&agrave"           | P: solidariet^"&agrave"        )
                    | ( S: sostenibilit^"&agrave" ambientale | P: sostenibilit^"&agrave" ambientali )
                    | ( S: transizione di genere      | P: transizioni di genere     )
                    )

                |  LLe:(
                      ( S: empatia            | P: empatie            )
                    | ( S: evoluzione         | P: evoluzioni         )
                    | ( S: integrazione       | P: integrazioni       )
                    | ( S: intelligenza di quartiere  | P: le intelligenze di quartiere )
                    | ( S: osmosi sociale     | P: osmosi sociali     )
                    | ( S: umanit^"&agrave"           | P: umanit^"&agrave"           )
                    )
                )


            ) (* CONCETTO POSITIVO - FINE *)


        | Negativo:(



              M:(          (* CONCETTO NEGATIVO MASCHILE @CONCNM      @CONCMN      *)
                  LoGli:(  (* CONCETTO NEGATIVO MASCHILE @CONCNMLOGLI @CONCMNLOGLI *)
                      ( S: stalking           | P: stalking           )
                    | ( S: specismo           | P: specismi           )
                    | ( S: squadrismo         | P: squadrismi         )
                    | ( S: stupro             | P: stupro             )
                    )

                |  LGli:(  (* CONCETTO NEGATIVO MASCHILE @CONCNMLGLI @CONCMNLGLI *)
                      ( S: hate speech        | P: hate speech        )
                    | ( S: abilismo           | P: abilismi           )
                    | ( S: arbitrio           | P: arbitrii           )
                    | ( S: autoritarismo      | P: autoritarismi      )
                    | ( S: egoismo            | P: egoismi            )
                    | ( S: integralismo       | P: integralismi       )
                    | ( S: odio               | P: insulti            )
                    | ( S: oggettificazione (della (donna|femmina))   | P: insulti            )
                    | ( S: oltranzismo        | P: oltranzismi        )
                    )

                |  IlI:(   (* CONCETTO NEGATIVO MASCHILE @CONCNMILI @CONCMNILI *)
                      ( S: [Prefisso^]fascismo  | P: [Prefisso^]fascismi           )
                    | ( S: (bitch|fat|kink)^"-"^shaming  | P: (bitch|fat|kink)^"-"^shaming )
                    | ( S: [cyber]bullismo      | P: [cyber]bullismi               )
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
                    | ( S: discorso d'odio      | P: discorsi d'odio               )
                    | ( S: doxxing              | P: doxxing                       )
                    | ( S: familismo amorale    | P: familismi amorali             )
                    | ( S: fideismo             | P: fideismi                      )
                    | ( S: fondamentalismo cattolico  | P: fondamentalismi cattolici )
                    | ( S: killeraggio mediatico| P: killereaggio mediatico        )
                    | ( S: linciaggio mediatico | P: linciaggio mediatico          )
                    | ( S: manspreading         | P: manspreading                  )
                    | ( S: monoteismo           | P: monoteismi                    )
                    | ( S: nazionalismo         | P: nazionalismi                  )
                    | ( S: patriarcato          | P: patriarcati                   )
                    | ( S: qualunquismo         | P: qualunquismi                  )
                    | ( S: razzismo [sistemico] | P: razzismi [sistemici]          )
                    | ( S: revenge porn         | P: revenge porn                  )
                    | ( S: sea lioning          | P: sea lioning                   )
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
                    | ( S: (meschina|egoistica|antistorica|medievale|cieca|assurda|irrazionale)difesa degli interessi nazionali    | P: (meschina|egoistica|antistorica|medievale|cieca|assurda|irrazionale)difese degli interessi nazionali    )
                    | ( S: \\repressione        | P: repressioni        )
                    | ( S: barbarie           | P: barbarie           )
                    | ( S: cattiveria         | P: cattiveria         )
                    | ( S: censura            | P: censure            )
                    | ( S: diffamazione       | P: diffamazioni       )
                    | ( S: faziosit^"&agrave"         | P: faziosit^"&agrave"         )
                    | ( S: macchina del fango | P: macchine del fango )
                    | ( S: mafia              | P: mafie              )
                    | ( S: mascolinit^"&agrave" tossica | P: mascolinit^"&agrave" tossiche       )
                    | ( S: normalizzazione    | P: normalizzazioni    )
                    | ( S: religione          | P: religioni          )
                    | ( S: sinofobia          | P: sinofobie          )
                    | ( S: stupidit^"&agrave"         | P: stupidit^"&agrave"         )
                    | ( S: superficialit^"&agrave"    | P: superficialit^"&agrave"    )
                    | ( S: tifoseria          | P: tifoseria          )
                    | ( S: transfobia         | P: transfobie   )
                    | ( S: xenofobia          | P: xenofobia          )
                    )

                |  LLe:(   (* CONCETTO NEGATIVO FEMMINILE @CONCNFLLE @CONCFNLLE *)
                      ( S: ignavia            | P: ignavia            )
                    | ( S: esclusione sociale | P: esclusioni sociali )
                    | ( S: eugenetica         | P: eugenetiche         )
                    | ( S: ignoranza          | P: ignoranze          )
                    | ( S: illazione          | P: illazioni          )
                    | ( S: illegalit^"&agrave"        | P: illegalit^"&agrave"        )
                    | ( S: impotenza          | P: impotenze          )
                    | ( S: incapacit^"&agrave"        | P: incapacit^"&agrave"        )
                    | ( S: indifferenza       | P: indifferenza       )
                    | ( S: ingiuria           | P: ingiurie           )
                    | ( S: ingiustizia[sociale] | P: ingiustizie[sociali])
                    | ( S: intolleranza       | P: intolleranze       )
                    | ( S: islamofobia        | P: islamofobie        )
                    | ( S: omofobia           | P: omofobie           )
                    | ( S: omotransfobia      | P: omotransfobie       )

                    )
                )


            ) (* CONCETTO NEGATIVO - FINE *)



        ); (* CONCETTO - FINE *)







(************************************************)
(* CONCLUSIONE OVVERO CIRCOSTANZIALE APODITTICA *)
(************************************************)


Conclusione ::= 
            non c'^"&egrave" altro ( da (dire|obiettare)|di cui discutere)
          | non c'^"&egrave" storia
          | non c'^"&egrave" che dire [(signori|signore e signori)]
          | non c'^"&egrave" molto da aggiungere
          | tocca ribadire l'ovvio
          | ("&egrave"|sar^"&agrave"|sembrer^"&agrave") un'ovviet^"&agrave" (ma a quanto pare (qualcuno ancora non lo capisce|repetita iuvant|bisogna ancora affermarlo [con forza]))
          | non c'^"&egrave" (critica| Concetto.Negativo | guerra AlConcetto.Positivo ) che tenga
          | non veniteci a raccontare il contrario
          | chi (lo nega|lo omette) o "&egrave" (un falso|stupido|fuori dal mondo|un retrogrado) o "&egrave" (un finto tonto|in malafede|in contraddizione|[intellettualmente]disonesto)
          | chi ((sostiene|afferma) il contrario|non "&egrave" d'accordo|la pensa(diversamente|in un altro modo)|non la pensa(cosi"&igrave"|in questo modo)) 
                ("&egrave" un noncompagno|
                  non ha capito niente 
                  [della vita|di come va il mondo|di come vanno le cose|dell'\\italia|di questo paese|di questa societ^"&agrave"|della societ^"&agrave" civile|della temperie sociale[in cui ci troviamo]|della deriva antropologica in corso])
          | lo capirebbe
            (chiunque [tranne un (lettore (di \\libero|della \\verit^"&agrave")|minus habens|analfabeta (funzionale|emotivo)|[conclamato]noncompagno)]|anche un bambino)
          | non serve un abbonamento (a \\repubblica| a \\internazionale | alla \\stampa | all'\\espresso) per capirlo
          (* Sezione intellettuali *)
          | non serve 
            ( CognomeEONomeIntellettuale|
            un [paludato|affermato|famoso]editorialista|un genio|uno scienziato|avere 
            (tre|quattro|cinque|sei|venti) lauree|un ((ospite|giornalista|interventista) televisivo)|un influencer[con almeno (centomila|mille|(sett|ott|nov)^anta^(due|tre|quattro|nove)^[mila]) like]|-----un'influencer [-----socialmente impegnata] [[armata di telefonetto]mentre si fa un selfie[-----molto sexy|hot|che far^"&agrave" molto parlare]])
                  per (capirlo[una volta per (tutte|sempre)]|afferrare il concetto|farsene una ragione)
          | non deve certo (sottoscriverlo|scriverci(un articolo|un editoriale|un'articolessa|un libro|un instant book|un tweet|un post)) CognomeEONomeIntellettuale
      ; 












(* COGNOME E/O NOME INTELLETTUALE DI GRIDO *)

CognomeEONomeIntellettuale ::= 
            \\umberto \\eco
      |     (\\chiara|la) \\ferragni
      |     (\\lucia|la) \\annunziata
      |     (\\michela|la) \\murgia
      |     [\\corrado] \\augias 
      |     [\\corrado] \\formigli
      |     [\\eugenio] \\scalfari
      |     [\\fabio] \\fazio 
      |     [\\gianrico] \\carofiglio
      |     [\\massimo] \\gramellini
      |     [\\massimo] \\recalcati 
      |     [\\umberto] \\galimberti
      |     \\adriano \\sofri
      |     \\adriano \\sofri
      |     \\concita \\de (\\gregorio | \\gregori "(cantautrice)")
      |     \\dietlinde \\gruber [detta \\lilli]
      |     \\ezio \\mauro
      |     (\\fedez| \\fed\\ex) 
      |     \\ilvo \\diamanti
      |     \\massimo \\damilano
      |     \\massimo \\giannini
      |     \\mauro \\biani
      |     \\michele \\serra
      |     \\moni \\ovadia
      |     \\paola \\egonu
      |     \\rula \\jebreal
      ;













(************************)
(** PREFISSO GENERICO ***)
(************************)

Prefisso ::= (neo|vetero|post|proto|pan|ultra|super)^"-";















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



















(*  

  Prep.PrepSemplice.(Di|A|Da|In|Con|Su|Per|Tra|Fra)                                   
  Prep.PrepArticolata.(Det|Indet).(Di|A|Da|In|Con|Su|Per|Tra|Fra) 

  L'etichetta PrepGen seleziona una preposizione a caso, articolata o semplice.
  es: Prep.(PrepSemplice|PrepArticolata).PrepGen

  NB: Per comodità d'utilizzo anche le preposizioni articolate possono essere "indeterminative" anche se cio' non ha riscontro, cioe' non sono affatto "preposizioni articolate" perchè non c'è alcuna unione tra preposizione e articolo. È però molto comodo per passare da Det a Indet liberamente.

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
