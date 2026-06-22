const episodes = [
    {
        value: '138.webp',
        text: "Sérénade",
        description: 'i think i like you VF episode 138 HD',
        preview: '138-preview.webp',
        url: ['138-1.webp', '138-2.webp', '138-3.webp', '138-4.webp', '138-5.webp', '138-6.webp'],
        multi: true
    },
    {
        value: '137.png',
        text: "Promenade",
        description: 'i think i like you VF episode 137 HD',
        preview: '137-preview.webp',
        url: ['137-1.png', '137-2.png'],
        multi: true
    },
    {
        value: '136.png',
        text: "GYM bros",
        description: 'i think i like you VF episode 136 HD',
        preview: '136-preview.webp',
        url: ['136-1.png', '136-2.png'],
        multi: true
    },
    {
        value: '135.png',
        text: "On s'en fout",
        description: 'i think i like you VF episode 135 HD',
        preview: '135-preview.webp',
        url: ['135-1.png', '135-2.png'],
        multi: true
    },
    {
        value: '134.png',
        text: "Eau des Fidji",
        description: 'i think i like you VF episode 134 HD',
        preview: '134-preview.webp',
        url: ['134-1.png', '134-2.png'],
        multi: true
    },
    {
        value: '133.png',
        text: "Point de vue",
        description: 'i think i like you VF episode 133 HD',
        preview: '133-preview.webp',
        url: ['133-1.png', '133-2.png'],
        multi: true
    },
    {
        value: '132.png',
        text: "Elle est de retour !",
        description: 'i think i like you VF episode 132 HD',
        preview: '132-preview.webp',
        url: ['132-1.png', '132-2.png'],
        multi: true
    },
    {
        value: '131.png',
        text: "Soirée entre couples",
        description: 'i think i like you VF episode 131 HD',
        preview: '131-preview.webp',
        url: ['131-1.png', '131-2.png'],
        multi: true
    },
    {
        value: '130.png',
        text: "Le gang de Ray",
        description: 'i think i like you VF episode 130 HD',
        preview: '130-preview.webp',
        url: ['130-1.png', '130-2.png'],
        multi: true
    },
    {
        value: '129.png',
        text: "Safeword",
        description: 'i think i like you VF episode 129 HD',
        preview: '129-preview.webp',
        url: ['129-1.png', '129-2.png'],
        multi: true
    },
    {
        value: '128.png',
        text: "Il est de retour !",
        description: 'i think i like you VF episode 128 HD',
        preview: '128-preview.webp',
        url: ['128-1.png', '128-2.png'],
        multi: true
    },
    {
        value: '127.png',
        text: "Tempête",
        description: 'i think i like you VF episode 127 HD',
        preview: '127-preview.webp',
        url: ['127-1.png', '127-2.png'],
        multi: true
    },
    {
        value: '126.png',
        text: "Rattraper le temps perdu",
        description: 'i think i like you VF episode 126 HD',
        preview: '126-preview.webp',
        url: ['126-1.png', '126-2.png'],
        multi: true
    },
    {
        value: '125.png',
        text: "Inattendu",
        description: 'i think i like you VF episode 125 HD',
        preview: '125-preview.webp',
        url: ['125-1.png', '125-2.png'],
        multi: true
    },
    { value: '', text: '/\\ Saison 4  /\\', description: 'i think i like you VF HD saison 4', disabled: true },
    {
        value: '124.png',
        text: "Communication",
        description: 'i think i like you VF episode 124 HD',
        preview: '124-preview.webp',
        url: ['124-1.png', '124-2.png'],
        multi: true
    },
    {
        value: '123.png',
        text: "Le park",
        description: 'i think i like you VF episode 123 HD',
        preview: '123-preview.webp',
        url: ['123-1.png', '123-2.png'],
        multi: true
    },
    {
        value: '122.png',
        text: "Aveugle",
        description: 'i think i like you VF episode 122 HD',
        preview: '122-preview.webp',
        url: ['122-1.png', '122-2.png'],
        multi: true
    },
    {
        value: '121.png',
        text: "Il faut qu'on parle",
        description: 'i think i like you VF episode 121 HD',
        preview: '121-preview.webp',
        url: ['121-1.png', '121-2.png'],
        multi: true
    },
    {
        value: '120.png',
        text: 'Skatepark',
        description: 'i think i like you VF episode 120 HD',
        preview: '120-preview.webp',
        url: ['120-1.png', '120-2.png'],
        multi: true
    },
    {
        value: '119.png',
        text: 'De retour !',
        description: 'i think i like you VF episode 119 HD',
        preview: '119-preview.webp',
        url: ['119-1.png', '119-2.png'],
        multi: true
    },
    {
        value: '118.png',
        text: 'Le Verdict',
        description: 'i think i like you VF episode 118 HD',
        preview: '118-preview.webp',
        url: ['118-1.png', '118-2.png'],
        multi: true
    },
    { value: 'polaroid117.webp', text: "Polaroid #117", description: 'i think i like you VF polaroid n°13', url: 'polaroid117.webp' },
    {
        value: '117.png',
        text: 'Le Procès',
        description: 'i think i like you VF episode 117 HD',
        preview: '117-preview.webp',
        url: ['117-1.png', '117-2.png'],
        multi: true
    },
    { value: 'polaroid116.webp', text: "Polaroid #116", description: 'i think i like you VF polaroid n°12', url: 'polaroid116.webp' },
    {
        value: '116.png',
        text: 'Réunion',
        description: 'i think i like you VF episode 116 HD',
        preview: '116-preview.webp',
        url: ['116-1.png', '116-2.png'],
        multi: true
    },
    { value: 'polaroid115.webp', text: "Polaroid #115", description: 'i think i like you VF polaroid n°11', url: 'polaroid115.webp' },
    {
        value: '115.png',
        text: 'Petit ami protecteur',
        description: 'i think i like you VF episode 115 HD',
        preview: '115-preview.webp',
        url: ['115-1.png', '115-2.png'],
        multi: true
    },
    { value: 'polaroid114.webp', text: "Polaroid #114", description: 'i think i like you VF polaroid n°10', url: 'polaroid114.webp' },
    {
        value: '114.png',
        text: 'Anubis',
        description: 'i think i like you VF episode 114 HD',
        preview: '114-preview.webp',
        url: ['114-1.png', '114-2.png'],
        multi: true
    },
    { value: 'polaroid113.webp', text: "Polaroid #113", description: 'i think i like you VF polaroid n°9', url: 'polaroid113.webp' },
    {
        value: '113.png',
        text: 'Nouvelle région',
        description: 'i think i like you VF episode 113 HD',
        preview: '113-preview.webp',
        url: ['113-1.png', '113-2.png', '113-3.png'],
        multi: true
    },
    { value: 'polaroid112.webp', text: "Polaroid #112", description: 'i think i like you VF polaroid n°8', url: 'polaroid112.webp' },
    { value: '112.png', text: "Vote obtenu", description: 'i think i like you VF episode 112 HD', preview: '112-preview.webp', url: '112.png' },
    { value: 'polaroid111.webp', text: "Polaroid #111", description: 'i think i like you VF polaroid n°7', url: 'polaroid111.webp' },
    { value: '111.png', text: "Thé avec Cerbère", description: 'i think i like you VF episode 111 HD', preview: '111-preview.webp', url: '111.png' },
    { value: 'polaroid110.webp', text: "Polaroid #110", description: 'i think i like you VF polaroid n°6', url: 'polaroid110.webp' },
    { value: '110.png', text: "Malédictions", description: 'i think i like you VF episode 110 HD', preview: '110-preview.webp', url: '110.png' },
    { value: 'polaroid109.webp', text: "Polaroid #109", description: 'i think i like you VF polaroid n°5', url: 'polaroid109.webp' },
    { value: '109.png', text: "Cerbère", description: 'i think i like you VF episode 109 HD', preview: '109-preview.webp', url: '109.png' },
    { value: 'polaroid108.webp', text: "Polaroid #108", description: 'i think i like you VF polaroid n°4', url: 'polaroid108.webp' },
    {
        value: '108.png',
        text: 'Nouvelle ville',
        description: 'i think i like you VF episode 108 HD',
        preview: '108-preview.webp',
        url: ['108-1.png', '108-2.png'],
        multi: true
    },
    { value: 'polaroid107.webp', text: "Polaroid #107", description: 'i think i like you VF polaroid n°3', url: 'polaroid107.webp' },
    { value: '107.png', text: "Procrastination", description: 'i think i like you VF episode 107 HD', preview: '107-preview.webp', url: '107.png' },
    { value: 'polaroid106.webp', text: "Polaroid #106", description: 'i think i like you VF polaroid n°2', url: 'polaroid106.webp' },
    {
        value: '106.png',
        text: 'Le vrai voyage commence',
        description: 'i think i like you VF episode 106 HD',
        preview: '106-preview.webp',
        url: ['106-1.png', '106-2.png'],
        multi: true
    },
    { value: 'polaroid105.webp', text: "Polaroid #105", description: 'i think i like you VF polaroid n°1', url: 'polaroid105.webp' },
    { value: '105.png', text: "Réunion", description: 'i think i like you VF episode 105 HD', preview: '105-preview.webp', url: '105.png' },
    { value: '104.png', text: "Nous arrivons", description: 'i think i like you VF episode 104 HD', preview: '104-preview.webp', url: '104.png' },
    { value: '103.png', text: 'Leshy', description: 'i think i like you VF episode 103 HD', preview: '103-preview.webp', url: ['103-1.png', '103-2.png'], multi: true },
    { value: '102.png', text: "Début du voyage", description: 'i think i like you VF episode 102 HD', preview: '102-preview.webp', url: '102.png' },
    { value: '101.png', text: "Descente", description: 'i think i like you VF episode 101 HD', preview: '101-preview.webp', url: '101.png' },
    { value: '100.png', text: "Bons amis", description: 'i think i like you VF episode 100 HD', preview: '100-preview.webp', url: '100.png' },
    { value: '99ff.png', text: "Fête foraine", description: 'i think i like you VF episode 99 HD', preview: '99-preview.webp', url: '99.png' },
    { value: '98ff.png', text: "Spot habituel", description: 'i think i like you VF episode 98 HD', preview: '98-preview.webp', url: '98.png' },
    { value: '97.png', text: "Pouvoirs", description: 'i think i like you VF episode 97 HD', preview: '97-preview.webp', url: '97.png' },
    { value: '96.png', text: "Et tu Brute", description: 'i think i like you VF episode 96 HD', preview: '96-preview.webp', url: '96.png' },
    {
        value: '95.webp', text: "Inquiet",
        description: 'i think i like you VF episode 95 HD',
        preview: '95-preview.webp', url: ['95-1.webp', '95-2.webp', '95-3.webp', '95-4.webp'], multi: true
    },
    {
        value: '94.webp', text: "Rencontre",
        description: 'i think i like you VF episode 94 HD',
        preview: '94-preview.webp', url: ['94-1.webp', '94-2.webp', '94-3.webp', '94-4.webp'], multi: true
    },
    {
        value: '93.webp', text: "Virée nocturne",
        description: 'i think i like you VF episode 93 HD',
        preview: '93-preview.webp', url: ['93-1.webp', '93-2.webp', '93-3.webp', '93-4.webp', '93-5.webp'], multi: true
    },
    {
        value: '92.webp', text: "L'irrésistible Ray",
        description: 'i think i like you VF episode 92 HD',
        preview: '92-preview.webp', url: ['92-1.webp', '92-2.webp', '92-3.webp', '92-4.webp'], multi: true
    },
    {
        value: '91.webp', text: "Excès",
        description: 'i think i like you VF episode 91 HD',
        preview: '91-preview.webp', url: ['91-1.webp', '91-2.webp', '91-3.webp', '91-4.webp', '91-5.webp'], multi: true
    },
    {
        value: '90.webp', text: "Faire face",
        description: 'i think i like you VF episode 90 HD',
        preview: '90-preview.webp', url: ['90-1.webp', '90-2.webp', '90-3.webp', '90-4.webp'], multi: true
    },
    {
        value: '89.webp', text: "Révélation",
        description: 'i think i like you VF episode 89 HD',
        preview: '89-preview.webp', url: ['89-1.webp', '89-2.webp', '89-3.webp', '89-4.webp'], multi: true
    },
    {
        value: '88.webp', text: "L'homme parfait pour ce job",
        description: 'i think i like you VF episode 88 HD',
        preview: '88-preview.webp', url: ['88-1.webp', '88-2.webp', '88-3.webp', '88-4.webp', '88-5.webp'], multi: true
    },
    {
        value: '87.webp', text: "Décisions",
        description: 'i think i like you VF episode 87 HD',
        preview: '87-preview.webp', url: ['87-1.webp', '87-2.webp', '87-3.webp', '87-4.webp', '87-5.webp'], multi: true
    },
    {
        value: '86.webp', text: "Seuil critique",
        description: 'i think i like you VF episode 86 HD',
        preview: '86-preview.webp', url: ['86-1.webp', '86-2.webp', '86-3.webp', '86-4.webp'], multi: true
    },
    {
        value: '85.webp', text: "Bandes blanchissantes",
        description: 'i think i like you VF episode 85 HD',
        preview: '85-preview.webp', url: ['85-1.webp', '85-2.webp', '85-3.webp', '85-4.webp', '85-5.webp'], multi: true
    },
    {
        value: '84.webp', text: "Trouvé",
        description: 'i think i like you VF episode 84 HD',
        preview: '84-preview.webp', url: ['84-1.webp', '84-2.webp', '84-3.webp', '84-4.webp'], multi: true
    },
    { value: '', text: '/\\ Saison 3  /\\', description: 'i think i like you VF HD saison 3', disabled: true },
    {
        value: '83.webp', text: "Amis",
        description: 'i think i like you VF episode 83 HD',
        preview: '83-preview.webp', url: ['83-1.webp', '83-2.webp', '83-3.webp', '83-4.webp', '83-5.webp'], multi: true
    },
    {
        value: '82.webp', text: "Promenade",
        description: 'i think i like you VF episode 82 HD',
        preview: '82-preview.webp', url: ['82-1.webp', '82-2.webp', '82-3.webp', '82-4.webp', '82-5.webp'], multi: true
    },
    {
        value: '81.webp', text: "Perdus et Retrouvés",
        description: 'i think i like you VF episode 81 HD',
        preview: '81-preview.webp', url: ['81-1.webp', '81-2.webp', '81-3.webp', '81-4.webp'], multi: true
    },
    {
        value: '80.webp', text: "Fin du voyage",
        description: 'i think i like you VF episode 80 HD',
        preview: '80-preview.webp', url: ['80-1.webp', '80-2.webp', '80-3.webp', '80-4.webp', '80-5.webp', '80-6.webp', '80-7.webp'], multi: true
    },
    {
        value: '79.webp', text: "La Mort de Sky",
        description: 'i think i like you VF episode 79 HD',
        preview: '79-preview.webp', url: ['79-1.webp', '79-2.webp', '79-3.webp', '79-4.webp', '79-5.webp'], multi: true
    },
    {
        value: '78.webp', text: "Tourtereaux",
        description: 'i think i like you VF episode 78 HD',
        preview: '78-preview.webp', url: ['78-1.webp', '78-2.webp', '78-3.webp', '78-4.webp'], multi: true
    },
    {
        value: '77.webp', text: "Merci",
        description: 'i think i like you VF episode 77 HD',
        preview: '77-preview.webp', url: ['77-1.webp', '77-2.webp', '77-3.webp', '77-4.webp'], multi: true
    },
    {
        value: '76.webp', text: "L'Intrus",
        description: 'i think i like you VF episode 76 HD',
        preview: '76-preview.webp', url: ['76-1.webp', '76-2.webp', '76-3.webp', '76-4.webp', '76-5.webp'], multi: true
    },
    {
        value: '75.webp', text: "Nouveau lieu",
        description: 'i think i like you VF episode 75 HD',
        preview: '75-preview.webp', url: ['75-1.webp', '75-2.webp', '75-3.webp', '75-4.webp'], multi: true
    },
    {
        value: '74.webp', text: "Résolution",
        description: 'i think i like you VF episode 74 HD',
        preview: '74-preview.webp', url: ['74-1.webp', '74-2.webp', '74-3.webp', '74-4.webp'], multi: true
    },
    {
        value: '73.webp', text: "Discussion",
        description: 'i think i like you VF episode 73 HD',
        preview: '73-preview.webp', url: ['73-1.webp', '73-2.webp', '73-3.webp', '73-4.webp'], multi: true
    },
    {
        value: '72.webp', text: "Écoute Red",
        description: 'i think i like you VF episode 72 HD',
        preview: '72-preview.webp', url: ['72-1.webp', '72-2.webp', '72-3.webp', '72-4.webp'], multi: true
    },
    {
        value: '71.webp', text: "Nouvel ami",
        description: 'i think i like you VF episode 71 HD',
        preview: '71-preview.webp', url: ['71-1.webp', '71-2.webp', '71-3.webp', '71-4.webp'], multi: true
    },
    {
        value: '70.webp', text: "Partenaire",
        description: 'i think i like you VF episode 70 HD',
        preview: '70-preview.webp', url: ['70-1.webp', '70-2.webp', '70-3.webp', '70-4.webp'], multi: true
    },
    {
        value: '69.webp', text: "Potes de muscu",
        description: 'i think i like you VF episode 69 HD',
        preview: '69-preview.webp', url: ['69-1.webp', '69-2.webp', '69-3.webp', '69-4.webp', '69-5.webp'], multi: true
    },
    {
        value: '68.webp', text: "Vérité",
        description: 'i think i like you VF episode 68 HD',
        preview: '68-preview.webp', url: ['68-1.webp', '68-2.webp', '68-3.webp', '68-4.webp'], multi: true
    },
    {
        value: '67.webp', text: "Amour fraternel",
        description: 'i think i like you VF episode 67 HD',
        preview: '67-preview.webp', url: ['67-1.webp', '67-2.webp', '67-3.webp', '67-4.webp', '67-5.webp'], multi: true
    },
    {
        value: '66.webp', text: "Courrier livré",
        description: 'i think i like you VF episode 66 HD',
        preview: '66-preview.webp', url: ['66-1.webp', '66-2.webp', '66-3.webp', '66-4.webp', '66-5.webp'], multi: true
    },
    {
        value: '65.webp', text: "Courrier reçu !",
        description: 'i think i like you VF episode 65 HD',
        preview: '65-preview.webp', url: ['65-1.webp', '65-2.webp', '65-3.webp', '65-4.webp'], multi: true
    },
    {
        value: '64.webp', text: "Je t'ai eu !",
        description: 'i think i like you VF episode 64 HD',
        preview: '64-preview.webp', url: ['64-1.webp', '64-2.webp', '64-3.webp', '64-4.webp', '64-5.webp'], multi: true
    },
    {
        value: '63.webp', text: "Le lendemain",
        description: 'i think i like you VF episode 63 HD',
        preview: '63-preview.webp', url: ['63-1.webp', '63-2.webp', '63-3.webp', '63-4.webp'], multi: true
    },
    {
        value: '62.webp', text: "Conneries Nocturnes",
        description: 'i think i like you VF episode 62 HD',
        preview: '62-preview.webp', url: ['62-1.webp', '62-2.webp', '62-3.webp', '62-4.webp'], multi: true
    },
    {
        value: '61.webp', text: "Prêteur sur gages 24h24",
        description: 'i think i like you VF episode 61 HD',
        preview: '61-preview.webp', url: ['61-1.webp', '61-2.webp', '61-3.webp', '61-4.webp', '61-5.webp', '61-6.webp', '61-7.webp'], multi: true
    },
    {
        value: '60.webp', text: "Double perception",
        description: 'i think i like you VF episode 60 HD',
        preview: '60-preview.webp', url: ['60-1.webp', '60-2.webp', '60-3.webp', '60-4.webp'], multi: true
    },
    {
        value: '59.webp', text: "Juste toi et moi",
        description: 'i think i like you VF episode 59 HD',
        preview: '59-preview.webp', url: ['59-1.webp', '59-2.webp', '59-3.webp', '59-4.webp'], multi: true
    },
    {
        value: '58.webp', text: "Crush",
        description: 'i think i like you VF episode 58 HD',
        preview: '58-preview.webp', url: ['58-1.webp', '58-2.webp', '58-3.webp'], multi: true
    },
    {
        value: '57.webp', text: "Retour à la surface",
        description: 'i think i like you VF episode 57 HD',
        preview: '57-preview.webp', url: ['57-1.webp', '57-2.webp', '57-3.webp', '57-4.webp'], multi: true
    },
    {
        value: '56.webp', text: "L'Underground",
        description: 'i think i like you VF episode 56 HD',
        preview: '56-preview.webp', url: ['56-1.webp', '56-2.webp', '56-3.webp', '56-4.webp'], multi: true
    },
    {
        value: '55.webp', text: "Rencontrer et saluer",
        description: 'i think i like you VF episode 55 HD',
        preview: '55-preview.webp', url: ['55-1.webp', '55-2.webp', '55-3.webp', '55-4.webp'], multi: true
    },
    {
        value: '54.webp', text: "Nos chemins se recroisent",
        description: 'i think i like you VF episode 54 HD',
        preview: '54-preview.webp', url: ['54-1.webp', '54-2.webp', '54-3.webp', '54-4.webp'], multi: true
    },
    {
        value: '53.webp', text: "Bad boy",
        description: 'i think i like you VF episode 53 HD',
        preview: '53-preview.webp', url: ['53-1.webp', '53-2.webp', '53-3.webp', '53-4.webp'], multi: true
    },
    {
        value: '52.webp', text: "Crise existentielle",
        description: 'i think i like you VF episode 52 HD',
        preview: '52-preview.webp', url: ['52-1.webp', '52-2.webp', '52-3.webp', '52-4.webp', '52-5.webp'], multi: true
    },
    {
        value: '51.webp', text: "Tête-à-tête",
        description: 'i think i like you VF episode 51 HD',
        preview: '51-preview.webp', url: ['51-1.webp', '51-2.webp', '51-3.webp'], multi: true
    },
    {
        value: '50.webp', text: "Fais tes preuves",
        description: 'i think i like you VF episode 50 HD',
        preview: '50-preview.webp', url: ['50-1.webp', '50-2.webp', '50-3.webp', '50-4.webp'], multi: true
    },
    {
        value: '49.webp', text: "Fratrie",
        description: 'i think i like you VF episode 49 HD',
        preview: '49-preview.webp', url: ['49-1.webp', '49-2.webp', '49-3.webp', '49-4.webp'], multi: true
    },
    {
        value: '48.webp', text: "Urgence",
        description: 'i think i like you VF episode 48 HD',
        preview: '48-preview.webp', url: ['48-1.webp', '48-2.webp', '48-3.webp', '48-4.webp', '48-5.webp'], multi: true
    },
    {
        value: '47.webp', text: "Espionnage innocent",
        description: 'i think i like you VF episode 47 HD',
        preview: '47-preview.webp', url: ['47-1.webp', '47-2.webp', '47-3.webp', '47-4.webp'], multi: true
    },
    {
        value: '46.webp', text: "Protégé",
        description: 'i think i like you VF episode 46 HD',
        preview: '46-preview.webp', url: ['46-1.webp', '46-2.webp', '46-3.webp', '46-4.webp'], multi: true
    },
    {
        value: '45.webp', text: "Pas de cette façon",
        description: 'i think i like you VF episode 45 HD',
        preview: '45-preview.webp', url: ['45-1.webp', '45-2.webp', '45-3.webp', '45-4.webp'], multi: true
    },
    {
        value: '44.webp', text: "Je crois que je te connais",
        description: 'i think i like you VF episode 44 HD',
        preview: '44-preview.webp', url: ['44-1.webp', '44-2.webp', '44-3.webp', '44-4.webp'], multi: true
    },
    { value: '', text: '/\\ Saison 2  /\\', description: 'i think i like you VF saison 2 HD', disabled: true },
    {
        value: '43.webp', text: "Spécial DnD - Part 4 - Célébration",
        description: 'i think i like you VF episode 43 HD',
        preview: '43-preview.webp', url: ['43-1.webp', '43-2.webp', '43-3.webp', '43-4.webp', '43-5.webp', '43-6.webp'], multi: true
    },
    {
        value: '42.webp', text: "Spécial DnD - Part 3 - Château de la mort",
        description: 'i think i like you VF episode 42 HD',
        preview: '42-preview.webp', url: ['42-1.webp', '42-2.webp', '42-3.webp'], multi: true
    },
    {
        value: '41.webp', text: "Spécial DnD - Part 2 - Le Pacte",
        description: 'i think i like you VF episode 41 HD',
        preview: '41-preview.webp', url: ['41-1.webp', '41-2.webp', '41-3.webp', '41-4.webp'], multi: true
    },
    {
        value: '40.webp', text: "Spécial DnD - Part 1 - L'aventure commence !",
        description: 'i think i like you VF episode 40 HD',
        preview: '40-preview.webp', url: ['40-1.webp', '40-2.webp', '40-3.webp', '40-4.webp'], multi: true
    },
    {
        value: '39.webp', text: "Halloween",
        description: 'i think i like you VF episode 39 HD',
        preview: '39-preview.webp', url: ['39-1.webp', '39-2.webp', '39-3.webp', '39-4.webp'], multi: true
    },
    {
        value: '38.webp', text: "Je t'aime",
        description: 'i think i like you VF episode 38 HD',
        preview: '38-preview.webp', url: ['38-1.webp', '38-2.webp', '38-3.webp'], multi: true
    },
    {
        value: '37.webp', text: "Je crois que je t'aime",
        description: 'i think i like you VF episode 37 HD',
        preview: '37-preview.webp', url: ['37-1.webp', '37-2.webp', '37-3.webp', '37-4.webp', '37-5.webp'], multi: true
    },
    {
        value: '36.webp', text: "Limite dépassée",
        description: 'i think i like you VF episode 36 HD',
        preview: '36-preview.webp', url: ['36-1.webp', '36-2.webp', '36-3.webp', '36-4.webp'], multi: true
    },
    {
        value: '35.webp', text: "Limite atteinte",
        description: 'i think i like you VF episode 35 HD',
        preview: '35-preview.webp', url: ['35-1.webp', '35-2.webp', '35-3.webp', '35-4.webp'], multi: true
    },
    {
        value: '34.webp', text: "Ray, l'Omniscient",
        description: 'i think i like you VF episode 34 HD',
        preview: '34-preview.webp', url: ['34-1.webp', '34-2.webp', '34-3.webp', '34-4.webp'], multi: true
    },
    {
        value: '33.webp', text: "Réception du colis à temps",
        description: 'i think i like you VF episode 33 HD',
        preview: '33-preview.webp', url: ['33-1.webp', '33-2.webp', '33-3.webp', '33-4.webp'], multi: true
    },
    {
        value: '32.webp', text: "Rival Blessé",
        description: 'i think i like you VF episode 32 HD',
        preview: '32-preview.webp', url: ['32-1.webp', '32-2.webp', '32-3.webp', '32-4.webp'], multi: true
    },
    {
        value: '31.webp', text: "Intervention",
        description: 'i think i like you VF episode 31 HD',
        preview: '31-preview.webp', url: ['31-1.webp', '31-2.webp', '31-3.webp', '31-4.webp'], multi: true
    },
    {
        value: '30.webp', text: "Spécial Roadtrip - Part 6 - Excellente compagnie",
        description: 'i think i like you VF episode 30 HD',
        preview: '30-preview.webp', url: ['30-1.webp', '30-2.webp', '30-3.webp', '30-4.webp'], multi: true
    },
    {
        value: '29.webp', text: "Spécial Roadtrip - Part 5 - Bonne compagnie",
        description: 'i think i like you VF episode 29 HD',
        preview: '29-preview.webp', url: ['29-1.webp', '29-2.webp', '29-3.webp', '29-4.webp'], multi: true
    },
    {
        value: '28.webp', text: "Spécial Roadtrip - Part 4 - Compagnie",
        description: 'i think i like you VF episode 28 HD',
        preview: '28-preview.webp', url: ['28-1.webp', '28-2.webp', '28-3.webp', '28-4.webp'], multi: true
    },
    {
        value: '27.webp', text: "Spécial Roadtrip - Part 3 - Bonne nuit",
        description: 'i think i like you VF episode 27 HD',
        preview: '27-preview.webp', url: ['27-1.webp', '27-2.webp', '27-3.webp'], multi: true
    },
    {
        value: '26.webp', text: "Spécial Roadtrip - Part 2 - Roadtrip",
        description: 'i think i like you VF episode 26 HD',
        preview: '26-preview.webp', url: ['26-1.webp', '26-2.webp', '26-3.webp', '26-4.webp'], multi: true
    },
    {
        value: '25.webp', text: "Spécial Roadtrip - Part 1 - Roadtrip",
        description: 'i think i like you VF episode 25 HD',
        preview: '25-preview.webp', url: ['25-1.webp', '25-2.webp', '25-3.webp', '25-4.webp'], multi: true
    },
    {
        value: '24.webp', text: "En retard",
        description: 'i think i like you VF episode 24 HD',
        preview: '24-preview.webp', url: ['24-1.webp', '24-2.webp', '24-3.webp', '24-4.webp'], multi: true
    },
    {
        value: '23.webp', text: "Soirée entre potes - Part 2",
        description: 'i think i like you VF episode 23 HD',
        preview: '23-preview.webp', url: ['23-1.webp', '23-2.webp', '23-3.webp', '23-4.webp'], multi: true
    },
    {
        value: '22.webp', text: "Soirée entre potes - Part 1",
        description: 'i think i like you VF episode 22 HD',
        preview: '22-preview.webp', url: ['22-1.webp', '22-2.webp', '22-3.webp', '22-4.webp'], multi: true
    },
    {
        value: '21.webp', text: "Dev déteste",
        description: 'i think i like you VF episode 21 HD',
        preview: '21-preview.webp', url: ['21-1.webp', '21-2.webp', '21-3.webp', '21-4.webp'], multi: true
    },
    {
        value: '20.webp', text: "Pride - Part 2",
        description: 'i think i like you VF episode 20 HD',
        preview: '20-preview.webp', url: ['20-1.webp', '20-2.webp', '20-3.webp', '20-4.webp'], multi: true
    },
    {
        value: '19.webp', text: "Pride - Part 1",
        description: 'i think i like you VF episode 19 HD',
        preview: '19-preview.webp', url: ['19-1.webp', '19-2.webp', '19-3.webp', '19-4.webp'], multi: true
    },
    {
        value: '18.webp', text: "Escapade à la plage - Part 2",
        description: 'i think i like you VF episode 18 HD',
        preview: '18-preview.webp', url: ['18-1.webp', '18-2.webp', '18-3.webp'], multi: true
    },
    {
        value: '17.webp', text: "Escapade à la plage - Part 1",
        description: 'i think i like you VF episode 17 HD',
        preview: '17-preview.webp', url: ['17-1.webp', '17-2.webp', '17-3.webp'], multi: true
    },
    {
        value: '16.webp', text: "Brunch",
        description: 'i think i like you VF episode 16 HD',
        preview: '16-preview.webp', url: ['16-1.webp', '16-2.webp', '16-3.webp'], multi: true
    },
    {
        value: '15.webp', text: "Rivalité",
        description: 'i think i like you VF episode 15 HD',
        preview: '15-preview.webp', url: ['15-1.webp', '15-2.webp', '15-3.webp'], multi: true
    },
    {
        value: '14.webp', text: "Un ami",
        description: 'i think i like you VF episode 14 HD',
        preview: '14-preview.webp', url: ['14-1.webp', '14-2.webp', '14-3.webp'], multi: true
    },
    {
        value: '13.webp', text: "Expression Impassible",
        description: 'i think i like you VF episode 13 HD',
        preview: '13-preview.webp', url: ['13-1.webp', '13-2.webp', '13-3.webp'], multi: true
    },
    {
        value: '12.webp', text: "Partage de loisirs",
        description: 'i think i like you VF episode 12 HD',
        preview: '12-preview.webp', url: ['12-1.webp', '12-2.webp', '12-3.webp'], multi: true
    },
    {
        value: '11.webp', text: "I think I craft you",
        description: 'i think i like you VF episode 11 HD',
        preview: '11-preview.webp', url: ['11-1.webp', '11-2.webp', '11-3.webp'], multi: true
    },
    {
        value: '10.webp', text: "Jour pluvieux",
        description: 'i think i like you VF episode 10 HD',
        preview: '10-preview.webp', url: ['10-1.webp', '10-2.webp'], multi: true
    },
    {
        value: '9.webp', text: "Café",
        description: 'i think i like you VF episode 9 HD',
        preview: '9-preview.webp', url: ['9-1.webp', '9-2.webp'], multi: true
    },
    {
        value: '8.webp', text: "Sortie entre potes",
        description: 'i think i like you VF episode 8 HD',
        preview: '8-preview.webp', url: ['8-1.webp', '8-2.webp'], multi: true
    },
    {
        value: '7.webp', text: "Salut ! Moi, c'est...",
        description: 'i think i like you VF episode 7 HD',
        preview: '7-preview.webp', url: ['7-1.webp', '7-2.webp'], multi: true
    },
    {
        value: '6.webp', text: "Reste sur tes gardes",
        description: 'i think i like you VF episode 6 HD',
        preview: '6-preview.webp', url: ['6-1.webp', '6-2.webp', '6-3.webp'], multi: true
    },
    {
        value: '5.webp', text: "Quelle coïncidence !",
        description: 'i think i like you VF episode 5 HD',
        preview: '5-preview.webp', url: ['5-1.webp', '5-2.webp', '5-3.webp'], multi: true
    },
    {
        value: '4.webp', text: "Livraison retardée - Ça en valait la peine !",
        description: 'i think i like you VF episode 4 HD',
        preview: '4-preview.webp', url: ['4-1.webp', '4-2.webp'], multi: true
    },
    {
        value: '3.webp', text: "Évaluez votre livraison - Très insatisfait",
        description: 'i think i like you VF episode 3 HD',
        preview: '3-preview.webp', url: ['3-1.webp', '3-2.webp'], multi: true
    },
    {
        value: '2.webp', text: "Statut de livraison - de retour sur le planning",
        description: 'i think i like you VF episode 2 HD',
        preview: '2-preview.webp', url: ['2-1.webp', '2-2.webp'], multi: true
    },
    {
        value: '1.webp', text: "Livraison de colis",
        description: 'i think i like you VF episode 1 HD',
        preview: '1-preview.webp', url: ['1-1.webp', '1-2.webp'], multi: true
    },
    { value: 'cover.png', text: 'Cover', description: 'i think i like you VF episode cover', preview: 'cover-preview.png', url: 'cover.png' },
    { value: '', text: '/\\ Saison 1  /\\', description: 'i think i like you VF saison 1 HD', disabled: true }
];