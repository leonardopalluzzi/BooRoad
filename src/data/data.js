const gite = [
  {
    id: 1,
    immagine: "/images/lago_como.jpg",
    nome: "Gita al Lago di Como",
    città: "Como",
    dataInizio: "2025-05-10",
    dataFine: "2025-05-12",
    partecipanti: [
      { id: 1, nome: "Luca", cognome: "Rossi", email: "luca.rossi@example.com", telefono: "3281234567", codiceFiscale: "RSSLCU90A01H501Z", contattoEmergenza: { nome: "Giovanni Rossi", telefono: "3289988776", relazione: "Padre" } },
      { id: 2, nome: "Maria", cognome: "Bianchi", email: "maria.bianchi@example.com", telefono: "3292345678", codiceFiscale: "BNCMRA85C45H501E", contattoEmergenza: { nome: "Elena Bianchi", telefono: "3297766554", relazione: "Madre" } },
      { id: 3, nome: "Andrea", cognome: "Ferrari", email: "andrea.ferrari@example.com", telefono: "3203456789", codiceFiscale: "FRRNDR92D10F205W", contattoEmergenza: { nome: "Carla Ferrari", telefono: "3209988771", relazione: "Sorella" } },
      { id: 4, nome: "Chiara", cognome: "Romano", email: "chiara.romano@example.com", telefono: "3274567890", codiceFiscale: "RMNCHR88E22L219A", contattoEmergenza: { nome: "Alessandro Romano", telefono: "3276655443", relazione: "Fratello" } },
      { id: 24, nome: "Matteo", cognome: "Esposito", email: "matteo.esposito@example.com", telefono: "3287654321", codiceFiscale: "SPTMTE95D12H501K", contattoEmergenza: { nome: "Giulia Esposito", telefono: "3281122334", relazione: "Sorella" } }
    ],
    accompagnatori: [
      { id: 1, nome: "Giovanni", cognome: "Rossi", email: "giovanni.rossi@example.com", telefono: "3281122334" },
      { id: 2, nome: "Elena", cognome: "Bianchi", email: "elena.bianchi@example.com", telefono: "3292233445" }
    ]
  },
  {
    id: 2,
    immagine: "/images/firenze_weekend.jpg",
    nome: "Weekend a Firenze",
    città: "Firenze",
    dataInizio: "2025-06-01",
    dataFine: "2025-06-03",
    partecipanti: [
      { id: 5, nome: "Giulia", cognome: "Verdi", email: "giulia.verdi@example.com", telefono: "3399876543", codiceFiscale: "VRDGLL91G55D612X", contattoEmergenza: { nome: "Laura Verdi", telefono: "3392211333", relazione: "Madre" } },
      { id: 6, nome: "Marco", cognome: "Neri", email: "marco.neri@example.com", telefono: "3368765432", codiceFiscale: "NRIMRC89H12H501B", contattoEmergenza: { nome: "Gianni Neri", telefono: "3361122334", relazione: "Padre" } },
      { id: 7, nome: "Elisa", cognome: "Conti", email: "elisa.conti@example.com", telefono: "3347654321", codiceFiscale: "CNTELS93A34D612Z", contattoEmergenza: { nome: "Serena Conti", telefono: "3342233445", relazione: "Sorella" } },
      { id: 8, nome: "Davide", cognome: "Galli", email: "davide.galli@example.com", telefono: "3316543210", codiceFiscale: "GLLDVD87T18F205M", contattoEmergenza: { nome: "Valeria Galli", telefono: "3315566778", relazione: "Moglie" } },
      { id: 25, nome: "Pietro", cognome: "Galli", email: "pietro.galli@example.com", telefono: "3365556666", codiceFiscale: "GLLPTR94E20H501N", contattoEmergenza: { nome: "Anna Galli", telefono: "3364443333", relazione: "Sorella" } },
      { id: 31, nome: "Sara", cognome: "Esposito", email: "sara.esposito@example.com", telefono: "3371234567", codiceFiscale: "SPTSRA92F10H501R", contattoEmergenza: { nome: "Giuseppe Esposito", telefono: "3377654321", relazione: "Padre" } }
    ],
    accompagnatori: [
      { id: 3, nome: "Laura", cognome: "Verdi", email: "laura.verdi@example.com", telefono: "3393344556" },
      { id: 4, nome: "Gianni", cognome: "Neri", email: "gianni.neri@example.com", telefono: "3364455667" }
    ]
  },
  {
    id: 3,
    immagine: "/images/gran_sasso.jpg",
    nome: "Escursione sul Gran Sasso",
    città: "L'Aquila",
    dataInizio: "2025-07-15",
    dataFine: "2025-07-17",
    partecipanti: [
      { id: 9, nome: "Simone", cognome: "Leoni", email: "simone.leoni@example.com", telefono: "3405678912", codiceFiscale: "LNSSMN94B03L219H", contattoEmergenza: { nome: "Alberto Leoni", telefono: "3401122334", relazione: "Padre" } },
      { id: 10, nome: "Federica", cognome: "Russo", email: "federica.russo@example.com", telefono: "3416789123", codiceFiscale: "RSSFRC90F41H501P", contattoEmergenza: { nome: "Giulia Russo", telefono: "3419988776", relazione: "Sorella" } },
      { id: 11, nome: "Paolo", cognome: "Barbieri", email: "paolo.barbieri@example.com", telefono: "3427891234", codiceFiscale: "BRBPLA85T12D612U", contattoEmergenza: { nome: "Carlo Barbieri", telefono: "3424433221", relazione: "Padre" } },
      { id: 12, nome: "Laura", cognome: "Grandi", email: "laura.grandi@example.com", telefono: "3438912345", codiceFiscale: "GRNLRR91S15H501C", contattoEmergenza: { nome: "Marta Grandi", telefono: "3433344556", relazione: "Madre" } },
      { id: 26, nome: "Francesca", cognome: "Marino", email: "francesca.marino@example.com", telefono: "3402233445", codiceFiscale: "MRNFRS93H07H501M", contattoEmergenza: { nome: "Davide Marino", telefono: "3409988776", relazione: "Fratello" } },
      { id: 32, nome: "Lorenzo", cognome: "Ricci", email: "lorenzo.ricci@example.com", telefono: "3456789123", codiceFiscale: "RCCLRZ91R01H501S", contattoEmergenza: { nome: "Maria Ricci", telefono: "3450011223", relazione: "Madre" } },
      { id: 33, nome: "Valentina", cognome: "Neri", email: "valentina.neri@example.com", telefono: "3467891234", codiceFiscale: "NERVLT92A02H501T", contattoEmergenza: { nome: "Angelo Neri", telefono: "3460022334", relazione: "Padre" } },
      { id: 34, nome: "Matteo", cognome: "Conti", email: "matteo.conti@example.com", telefono: "3478912345", codiceFiscale: "CNTMTT90B03H501U", contattoEmergenza: { nome: "Federica Conti", telefono: "3470033445", relazione: "Sorella" } },
      { id: 35, nome: "Giulia", cognome: "De Luca", email: "giulia.deluca@example.com", telefono: "3489123456", codiceFiscale: "DLCGLL93C04H501V", contattoEmergenza: { nome: "Marco De Luca", telefono: "3480044556", relazione: "Fratello" } }
    ],
    accompagnatori: [
      { id: 5, nome: "Alberto", cognome: "Leoni", email: "alberto.leoni@example.com", telefono: "3405566778" },
      { id: 6, nome: "Giulia", cognome: "Russo", email: "giulia.russo@example.com", telefono: "3416677889" }
    ]
  },
  {
    id: 4,
    immagine: "/images/cinque_terre.jpg",
    nome: "Tour delle Cinque Terre",
    città: "La Spezia",
    dataInizio: "2025-08-20",
    dataFine: "2025-08-24",
    partecipanti: [
      { id: 13, nome: "Silvia", cognome: "Marchetti", email: "silvia.marchetti@example.com", telefono: "3449123456", codiceFiscale: "MRCSLV88R20H501K", contattoEmergenza: { nome: "Enrico Marchetti", telefono: "3445566778", relazione: "Padre" } },
      { id: 14, nome: "Antonio", cognome: "Villa", email: "antonio.villa@example.com", telefono: "3451234567", codiceFiscale: "VLLNTN86M10F205T", contattoEmergenza: { nome: "Sofia Villa", telefono: "3456677889", relazione: "Madre" } },
      { id: 15, nome: "Beatrice", cognome: "Testa", email: "beatrice.testa@example.com", telefono: "3462345678", codiceFiscale: "TSTBRC92N30D612V", contattoEmergenza: { nome: "Alessandro Testa", telefono: "3467788990", relazione: "Fratello" } },
      { id: 16, nome: "Francesco", cognome: "Gentile", email: "francesco.gentile@example.com", telefono: "3473456789", codiceFiscale: "GNTFNC90P22H501R", contattoEmergenza: { nome: "Lucia Gentile", telefono: "3478899001", relazione: "Madre" } },
      { id: 27, nome: "Luca", cognome: "De Santis", email: "luca.desantis@example.com", telefono: "3475566778", codiceFiscale: "DSNLCA92L28H501P", contattoEmergenza: { nome: "Marco De Santis", telefono: "3472233445", relazione: "Fratello" } }
    ],
    accompagnatori: [
      { id: 7, nome: "Enrico", cognome: "Marchetti", email: "enrico.marchetti@example.com", telefono: "3447788990" },
      { id: 8, nome: "Sofia", cognome: "Villa", email: "sofia.villa@example.com", telefono: "3458899001" }
    ]
  },
  {
    id: 5,
    immagine: "/images/castelli_duca.jpg",
    nome: "Visita ai Castelli del Ducato",
    città: "Parma",
    dataInizio: "2024-10-10",
    dataFine: "2024-10-12",
    partecipanti: [
      { id: 17, nome: "Alessandro", cognome: "Bianchi", email: "alessandro.bianchi@example.com", telefono: "3481234567", codiceFiscale: "BNCLSZ92A01H501F", contattoEmergenza: { nome: "Sofia Bianchi", telefono: "3487654321", relazione: "Sorella" } },
      { id: 18, nome: "Martina", cognome: "Russo", email: "martina.russo@example.com", telefono: "3492345612", codiceFiscale: "RSSFRT90B02H501G", contattoEmergenza: { nome: "Luca Russo", telefono: "3498765432", relazione: "Fratello" } },
      { id: 28, nome: "Chiara", cognome: "Moretti", email: "chiara.moretti@example.com", telefono: "3483344556", codiceFiscale: "MRTCHR91M18H501Q", contattoEmergenza: { nome: "Marco Moretti", telefono: "3489988776", relazione: "Padre" } },
      { id: 29, nome: "Davide", cognome: "Ferrara", email: "davide.ferrara@example.com", telefono: "3494455667", codiceFiscale: "FRRDVD92F05H501S", contattoEmergenza: { nome: "Sara Ferrara", telefono: "3492233445", relazione: "Moglie" } },
      { id: 30, nome: "Anna", cognome: "Lombardo", email: "anna.lombardo@example.com", telefono: "3495566778", codiceFiscale: "LMBNNA93L23H501T", contattoEmergenza: { nome: "Stefano Lombardo", telefono: "3493344556", relazione: "Marito" } },
      { id: 36, nome: "Stefania", cognome: "Rossi", email: "stefania.rossi@example.com", telefono: "3491234567", codiceFiscale: "ROSSFN94D05H501W", contattoEmergenza: { nome: "Anna Rossi", telefono: "3490055667", relazione: "Madre" } },
      { id: 37, nome: "Diego", cognome: "Ferri", email: "diego.ferri@example.com", telefono: "3502345678", codiceFiscale: "FRRDG001E06H501X", contattoEmergenza: { nome: "Luca Ferri", telefono: "3500066778", relazione: "Padre" } }
    ],
    accompagnatori: [
      { id: 9, nome: "Sofia", cognome: "Bianchi", email: "sofia.bianchi@example.com", telefono: "3486677889" },
      { id: 10, nome: "Luca", cognome: "Russo", email: "luca.russo@example.com", telefono: "3497788990" }
    ]
  },
  {
    id: 6,
    immagine: "/images/road_trip_sicilia.jpg",
    nome: "Road Trip in Sicilia",
    città: "Palermo",
    dataInizio: "2025-04-27",
    dataFine: "2025-05-07",
    partecipanti: [
      { id: 19, nome: "Giovanna", cognome: "Esposito", email: "giovanna.esposito@example.com", telefono: "3501234598", codiceFiscale: "SPTGVN93C03H501H", contattoEmergenza: { nome: "Marco Esposito", telefono: "3509876543", relazione: "Padre" } },
      { id: 20, nome: "Riccardo", cognome: "Fiore", email: "riccardo.fiore@example.com", telefono: "3512345690", codiceFiscale: "FRRCCD91D04H501I", contattoEmergenza: { nome: "Sara Fiore", telefono: "3510987654", relazione: "Madre" } },
      { id: 21, nome: "Elena", cognome: "Marino", email: "elena.marino@example.com", telefono: "3523456789", codiceFiscale: "MRNELN92E05H501J", contattoEmergenza: { nome: "Davide Marino", telefono: "3529876546", relazione: "Fratello" } },
      { id: 22, nome: "Stefano", cognome: "Lombardi", email: "stefano.lombardi@example.com", telefono: "3534567890", codiceFiscale: "LMBSDN94F06H501K", contattoEmergenza: { nome: "Anna Lombardi", telefono: "3539876547", relazione: "Madre" } },
      { id: 23, nome: "Valentina", cognome: "Greco", email: "valentina.greco@example.com", telefono: "3545678901", codiceFiscale: "GRCVLN95G07H501L", contattoEmergenza: { nome: "Lorenzo Greco", telefono: "3549876548", relazione: "Fratello" } },
      { id: 38, nome: "Chiara", cognome: "Villa", email: "chiara.villa@example.com", telefono: "3513456789", codiceFiscale: "VLLCHR95F07H501Y", contattoEmergenza: { nome: "Sofia Villa", telefono: "3510077889", relazione: "Madre" } },
      { id: 39, nome: "Marco", cognome: "Marchetti", email: "marco.marchetti@example.com", telefono: "3524567890", codiceFiscale: "MRCMRC96G08H501Z", contattoEmergenza: { nome: "Enrico Marchetti", telefono: "3520088990", relazione: "Padre" } },
      { id: 40, nome: "Elisa", cognome: "Testa", email: "elisa.testa@example.com", telefono: "3535678901", codiceFiscale: "TSTELS97H09H501A", contattoEmergenza: { nome: "Beatrice Testa", telefono: "3530099001", relazione: "Sorella" } },
      { id: 41, nome: "Francesco", cognome: "Lombardi", email: "francesco.lombardi@example.com", telefono: "3546789012", codiceFiscale: "LMBFNC98P10H501B", contattoEmergenza: { nome: "Anna Lombardi", telefono: "3540010112", relazione: "Madre" } },
      { id: 42, nome: "Alessandra", cognome: "Bianchi", email: "alessandra.bianchi@example.com", telefono: "3557890123", codiceFiscale: "BNCLSN99B11H501C", contattoEmergenza: { nome: "Giovanni Bianchi", telefono: "3550021223", relazione: "Padre" } }
    ],
    accompagnatori: [
      { id: 11, nome: "Marco", cognome: "Esposito", email: "marco.esposito@example.com", telefono: "3508899001" },
      { id: 12, nome: "Sara", cognome: "Fiore", email: "sara.fiore@example.com", telefono: "3519900112" }
    ]
  }
];

export default gite;