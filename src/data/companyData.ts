import { Sector, CityHub, ValueItem, NewsItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'KBK GROUP SARL',
  form: 'Société à Responsabilité Limitée (SARL)',
  tagline: 'Un groupe engagé, des secteurs d\'avenir',
  slogan: 'L\'effort fait le fort',
  hqCity: 'Kinshasa',
  country: 'République démocratique du Congo',
  directorGeneral: 'Olivier Kanyinda',
  directorTitle: 'Directeur Général',
  directorAffiliations: [
    'Directeur Général de KBK GROUP SARL',
    'Responsable de OLKAN TRANSP SARL',
    'Fondateur du Club des entrepreneurs à succès'
  ],
  directorPassions: [
    'Entrepreneuriat & Développement économique',
    'Golf & Pratiques sportives de rigueur'
  ],
  directorPortraitPath: '/images/team/olivier-kanyinda.jpg',
  socials: {
    linkedin: 'https://www.linkedin.com/in/kbk-group-sarl-946884319/',
    twitterHandle: '@Olivierkanyind',
    twitterUrl: 'https://x.com/Olivierkanyind'
  },
  logoPath: '/images/brand/kbk-group-logo.png',
  logoPng: '/images/brand/kbk-group-logo.png',
  logoWhitePng: '/images/brand/kbk-group-logo-white.png',
  logoTransparentPng: '/images/brand/kbk-group-logo-transparent.png',
  heroImage: '/images/optimized/hero_corporate_kinshasa.webp',
  boardroomImage: '/images/optimized/about_boardroom.webp',
  partnershipImage: '/images/optimized/contact_partnership.webp',
  editorialDisclaimer: 'Contenu éditorial initial en cours de validation par la direction générale de KBK GROUP SARL avant publication finale.'
};


export const SECTORS: Sector[] = [
  {
    id: 'mines',
    slug: 'mines',
    name: 'Mines',
    tagline: 'Valorisation des ressources et écosystème minier',
    description: 'Secteur d\'activité annoncé du groupe. KBK GROUP SARL ambitionne de se positionner au cœur des dynamiques de la filière minière en République démocratique du Congo, premier producteur mondial de cobalt et acteur clé du cuivre.',
    detailedScope: [
      'Positionnement sur la chaîne de valeur des minerais stratégiques (cuivre, cobalt, 3T)',
      'Services d\'appui et sous-traitance industrielle aux exploitants selon les règles de l\'ARSP',
      'Relations partenariales et développement de synergies de contenu local',
      'Veille aux exigences environnementales, sociétales et de traçabilité éthique'
    ],
    strategicFocus: 'Accompagner les exigences d\'efficience opérationnelle et de conformité du secteur minier congolais.',
    contextDRC: 'La RDC recèle plus de 70% des réserves mondiales de cobalt et d\'immenses gisements de cuivre de haute teneur dans la Copperbelt (Katanga et Lualaba). Le secteur minier constitue le moteur des exportations nationales et offre des opportunités majeures pour des prestataires locaux rigoureux et structurés.',
    prospectiveAvenues: [
      'Fourniture de consommables et pièces de rechange certifiées pour sites miniers',
      'Services de maintenance sur site et gestion des bases de vie industrielles',
      'Partenariats de sous-traitance agréés par l\'ARSP pour les opérateurs miniers internationaux',
      'Études préliminaires de faisabilité pour le transport et le stockage sécurisé des minerais'
    ],
    image: '/images/optimized/sector_mines.webp',
    keyDrivers: ['Cuivre & Cobalt', 'Sous-traitance qualifiée', 'Ancrage Haut-Katanga & Lualaba']
  },
  {
    id: 'numerique',
    slug: 'numerique',
    name: 'Numérique',
    tagline: 'Technologies, digitalisation et infrastructures data',
    description: 'Secteur d\'activité annoncé du groupe. Développer des solutions technologiques et des services numériques adaptés aux impératifs de modernisation des organisations privées et publiques en RDC.',
    detailedScope: [
      'Conseil en transformation digitale et réingénierie des processus administratifs',
      'Solutions de traçabilité, de gestion de données et intégration logicielle pour entreprises',
      'Infrastructures réseau, télécoms et sécurisation des flux d\'information sensibles',
      'Développement de compétences technologiques et accompagnement au changement'
    ],
    strategicFocus: 'Faire du digital un levier de compétitivité, de transparence et d\'intégration économique.',
    contextDRC: 'En pleine transition numérique, la RDC voit son marché de la data et des télécommunications croître rapidement avec le déploiement des câbles sous-marins et des réseaux terrestres. Les entreprises recherchent des partenaires de proximité pour moderniser leurs systèmes de gestion et sécuriser leurs échanges.',
    prospectiveAvenues: [
      'Déploiement de plateformes ERP et de gestion commerciale adaptées aux PME congolaises',
      'Solutions logicielles de suivi logistique en temps réel pour corridors de fret',
      'Services managés de cybersécurité et de sauvegarde de données critiques',
      'Conception d\'outils numériques pour la digitalisation des procédures de négoce'
    ],
    image: '/images/optimized/sector_numerique.webp',
    keyDrivers: ['Transformation numérique', 'Sécurité des données', 'Outils de gestion d\'entreprise']
  },
  {
    id: 'negoce',
    slug: 'negoce',
    name: 'Négoce',
    tagline: 'Intermédiation commerciale et approvisionnements stratégiques',
    description: 'Secteur d\'activité annoncé du groupe. Structurer des flux d\'échanges commerciaux rigoureux, reliant les besoins d\'équipements et de matières premières aux meilleurs standards de fourniture nationaux et internationaux.',
    detailedScope: [
      'Sourcing international et centralisation des achats pour projets majeurs',
      'Intermédiation commerciale et partenariats de distribution exclusive',
      'Sécurisation contractuelle et gestion du risque de change et de transport',
      'Approvisionnement en équipements industriels, outillage et intrants'
    ],
    strategicFocus: 'Bâtir des relations d\'affaires durables fondées sur la transparence et la fiabilité des livraisons.',
    contextDRC: 'Le marché intérieur congolais et les grands chantiers d\'infrastructures requièrent des filières d\'approvisionnement fiables face aux fluctuations des cours et aux contraintes douanières. Le négoce structuré crée une passerelle indispensable entre fabricants mondiaux et acteurs économiques locaux.',
    prospectiveAvenues: [
      'Intermédiation dans l\'importation de matériels d\'ingénierie et d\'équipements miniers',
      'Courtage de produits manufacturés et matériaux de construction certifiés',
      'Mise en place de lignes de crédit documentaire avec des partenaires bancaires agréés',
      'Valorisation de circuits de commercialisation directe pour limiter les intermédiaires'
    ],
    image: '/images/optimized/sector_negoce.webp',
    keyDrivers: ['Sourcing certifié', 'Flux internationaux', 'Relations d\'affaires éthiques']
  },
  {
    id: 'logistique',
    slug: 'logistique',
    name: 'Logistique',
    tagline: 'Transport multimodal et maîtrise des corridors congolais',
    description: 'Secteur d\'activité annoncé du groupe. Répondre au défi crucial de la connectivité et du désenclavement en développant des prestations d\'acheminement et de coordination logistique fiables à travers la RDC.',
    detailedScope: [
      'Acheminement de fret lourd et marchandises générales par route et voie d\'eau',
      'Synergies multimodales reliant le port maritime aux centres de consommation et d\'extraction',
      'Couverture des corridors vitaux (axe Kinshasa - Matadi, dorsale Katangaise)',
      'Coordination de flotte et suivi des délais de dédouanement et de transit'
    ],
    strategicFocus: 'Assurer la fluidité des flux de marchandises sur les principaux axes économiques nationaux.',
    contextDRC: 'Avec une superficie de 2,34 millions de km², la maîtrise des transports est le défi économique majeur de la RDC. L\'axe routier et ferroviaire Matadi-Kinshasa et les corridors du Katanga vers l\'Afrique australe concentrent la majorité des échanges de biens et d\'équipements.',
    prospectiveAvenues: [
      'Prestations de traction routière et acheminement de conteneurs sous douane',
      'Entreposage tampon et gestion de parcs logistiques sur les axes stratégiques',
      'Optimisation des retours à vide pour réduire l\'empreinte économique et carbone',
      'Partenariats de transport conventionnel et exceptionnel pour pièces industrielles'
    ],
    image: '/images/optimized/sector_logistique.webp',
    keyDrivers: ['Corridor Kinshasa-Matadi', 'Fret industriel', 'Coordination logistique']
  }
];

export const CITIES: CityHub[] = [
  {
    id: 'kinshasa',
    name: 'Kinshasa',
    province: 'Ville-Province de Kinshasa',
    role: 'Siège Administratif & Décisionnel',
    description: 'Capitale politique et mégapole économique de la RDC de plus de 15 millions d\'habitants. Centre névralgique de gouvernance de KBK GROUP SARL, carrefour des institutions financières, des représentations diplomatiques et du commerce national.',
    strategicImportance: 'Pilotage stratégique du groupe, négociation institutionnelle, pilotage des investissements et gouvernance centrale.',
    coordinates: { x: 20.9, y: 52.3 },
    geoCoordinates: { lat: -4.325, lon: 15.322 },
    keyCorridors: ['Corridor Ouest vers Matadi (RN1)', 'Voie fluviale fleuve Congo vers Mbandaka et Kisangani']
  },
  {
    id: 'matadi',
    name: 'Matadi',
    province: 'Kongo Central',
    role: 'Pôle Maritime & Porte Océanique',
    description: 'Principal port maritime de la République démocratique du Congo, situé en eau profonde sur la rive gauche du fleuve Congo. Point d\'entrée et de sortie fondamental pour le fret maritime international et les approvisionnements de la capitale.',
    strategicImportance: 'Jonction maritime internationale, réception du fret d\'importation et corridors d\'évacuation vers Kinshasa et l\'hinterland.',
    coordinates: { x: 12.3, y: 59.6 },
    geoCoordinates: { lat: -5.817, lon: 13.450 },
    keyCorridors: ['Corridor portuaire RN1 vers Kinshasa (350 km)', 'Liaisons maritimes internationales']
  },
  {
    id: 'kolwezi',
    name: 'Kolwezi',
    province: 'Lualaba',
    role: 'Pôle Minier Mondial (Cobalt & Cuivre)',
    description: 'Capitale mondiale du cobalt et cœur battant de l\'industrie extractive du Lualaba. La région concentre les plus gigantesques gisements miniers et complexes hydrométallurgiques de la planète.',
    strategicImportance: 'Opportunités majeures de sous-traitance industrielle, fourniture de biens d\'équipement minier et services de terrain.',
    coordinates: { x: 67.4, y: 83.6 },
    geoCoordinates: { lat: -10.716, lon: 25.472 },
    keyCorridors: ['Corridor de Lobito vers l\'Atlantique (CFB)', 'Axe routier minier vers Lubumbashi et la Zambie']
  },
  {
    id: 'lubumbashi',
    name: 'Lubumbashi',
    province: 'Haut-Katanga',
    role: 'Carrefour Industriel & Économique du Sud-Est',
    description: 'Deuxième ville de la RDC et capitale économique historique du Katanga. Nœud d\'échanges stratégique reliant le pays aux corridors commerciaux d\'Afrique australe (SADC, port de Durban et Dar es Salaam).',
    strategicImportance: 'Hub commercial transfrontalier, industrie lourde, services bancaires d\'affaires et plateformes de distribution logistique.',
    coordinates: { x: 76.6, y: 88.2 },
    geoCoordinates: { lat: -11.660, lon: 27.479 },
    keyCorridors: ['Corridor Nord-Sud vers Kasumbalesa (frontière Zambie)', 'Liaison ferrée SNCC vers le centre du pays']
  }
];

export const CORPORATE_VALUES: ValueItem[] = [
  {
    name: 'Engagement',
    description: 'Se consacrer avec rigueur aux projets entrepris et tenir ses engagements envers les partenaires, les clients et la nation.',
    quote: 'Chaque initiative est portée avec détermination et constance.'
  },
  {
    name: 'Travail',
    description: 'La conviction inébranlable que seule l\'ardeur au labeur façonne les grandes réussites durables.',
    quote: '« L\'effort fait le fort » : devise fondatrice de notre trajectoire.'
  },
  {
    name: 'Intégrité',
    description: 'Conduire chaque opération avec transparence, loyauté contractuelle et respect absolu de la parole donnée.',
    quote: 'La confiance mutuelle est notre premier actif immatériel.'
  },
  {
    name: 'Innovation',
    description: 'Rechercher en permanence des approches méthodologiques et technologiques plus performantes adaptées au contexte africain.',
    quote: 'Moderniser les méthodes traditionnelles pour bâtir l\'avenir.'
  },
  {
    name: 'Esprit entrepreneurial',
    description: 'Saisir les opportunités d\'investissement, créer de la valeur concrète et stimuler l\'émulation économique locale.',
    quote: 'Transformer les potentiels économiques en réalisations tangibles.'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    slug: 'structuration-strategique-activites-kinshasa',
    title: 'Structuration stratégique des activités multisectorielles à Kinshasa',
    category: 'Institutionnel',
    date: '15 Mars 2026',
    readTime: '3 min',
    summary: 'Mise en place des orientations prioritaires du groupe autour des 4 piliers d\'activités : Mines, Numérique, Négoce et Logistique.',
    content: [
      'Dans le cadre du déploiement de sa vision d\'entreprise multisectorielle, la Direction Générale de KBK GROUP SARL affine sa feuille de route opérationnelle depuis son siège de Kinshasa.',
      'L\'accent est mis sur la rigueur de gestion, la conformité absolue aux dispositions du droit des affaires OHADA, et l\'identification des synergies entre les secteurs de base de l\'économie congolaise.',
      'Cette étape fondatrice vise à doter le groupe des outils de gouvernance indispensables pour établir des partenariats fiables et durables avec les investisseurs nationaux et internationaux.'
    ],
    image: '/images/optimized/news_corp_kinshasa.jpg',
    imageCaption: 'Séance de travail et de concertation stratégique au siège de KBK GROUP SARL à Kinshasa.',
    isDemo: true,
    status: 'Communiqué à valider',
    featured: true
  },
  {
    id: 'news-2',
    slug: 'analyse-flux-logistiques-kinshasa-matadi',
    title: 'Analyse préliminaire des flux logistiques sur l\'axe Kinshasa - Matadi',
    category: 'Logistique',
    date: '28 Février 2026',
    readTime: '4 min',
    summary: 'Évaluation des corridors de transport multimodal et identification des besoins en approvisionnement des opérateurs économiques.',
    content: [
      'Le corridor reliant le port de Matadi à la capitale Kinshasa demeure l\'artère vitale du commerce extérieur congolais, concentrant l\'essentiel des marchandises importées par voie maritime.',
      'Face aux enjeux de délais de transit et d\'optimisation des coûts de fret terrestre, KBK GROUP SARL mène des réflexions sur les modèles d\'acheminement et de mutualisation des capacités de transport.',
      'Les perspectives intègrent l\'articulation entre transport routier et solutions d\'entreposage pour fluidifier la distribution au sein du bassin de consommation kinois.'
    ],
    image: '/images/optimized/news_logistics_matadi.jpg',
    imageCaption: 'Installations portuaires et flux multimodaux de l\'axe Matadi - Kinshasa sur le fleuve Congo.',
    isDemo: true,
    status: 'Communiqué à valider',
    featured: false
  },
  {
    id: 'news-3',
    slug: 'perspectives-sous-traitance-secteur-minier-lualaba',
    title: 'Perspectives de sous-traitance et conformité dans le secteur minier du Lualaba',
    category: 'Mines',
    date: '20 Janvier 2026',
    readTime: '4 min',
    summary: 'Veille réglementaire sur la loi sur la sous-traitance en RDC (ARSP) et opportunités de partenariats à Kolwezi et Lubumbashi.',
    content: [
      'L\'environnement minier en République démocratique du Congo est encadré par des exigences réglementaires précises visant la promotion du contenu local et la montée en compétence des entreprises congolaises.',
      'À Kolwezi et Lubumbashi, KBK GROUP SARL suit avec une attention particulière les critères d\'éligibilité et de certification délivrés par l\'Autorité de Régulation de la Sous-traitance dans le secteur Privé (ARSP).',
      'Le groupe prépare ses processus opérationnels afin d\'offrir aux sociétés minières un niveau de conformité, de traçabilité et de sécurité technique aligné sur les exigences internationales.'
    ],
    image: '/images/optimized/news_mines_kolwezi.jpg',
    imageCaption: 'Supervision technique et standards de sécurité industrielle sur un site d\'extraction du Lualaba.',
    isDemo: true,
    status: 'Communiqué à valider',
    featured: false
  },
  {
    id: 'news-4',
    slug: 'digitalisation-operateurs-infrastructures-data-rdc',
    title: 'Digitalisation des opérations et développement d\'infrastructures data',
    category: 'Numérique',
    date: '10 Janvier 2026',
    readTime: '3 min',
    summary: 'Étude d\'opportunités pour l\'intégration de solutions logicielles d\'entreprise et la sécurisation des flux numériques en RDC.',
    content: [
      'La modernisation des processus industriels et tertiaires en RDC requiert des infrastructures logicielles résilientes, capables d\'interconnecter sièges décisionnels et sites opérationnels décentralisés.',
      'KBK GROUP SARL structure son approche numérique autour de plateformes de gestion unifiée (ERP) et d\'outils d\'analyse de performance en temps réel.',
      'L\'objectif est de proposer des solutions numériques éprouvées, pensées pour la réalité du terrain africain et les impératifs de souveraineté des données.'
    ],
    image: '/images/optimized/news_tech_data.jpg',
    imageCaption: 'Cellule technique et ingénierie logicielle mobilisée sur les projets de transformation digitale.',
    isDemo: true,
    status: 'Communiqué à valider',
    featured: false
  }
];

export const DEMO_NEWS = NEWS_ITEMS;

export const CAREER_DATA = {
  heroImage: '/images/optimized/careers_corp_team.jpg',
  motto: 'L\'effort fait le fort',
  introTitle: 'Bâtir une trajectoire d\'excellence au cœur de l\'économie congolaise',
  introDescription: 'Chez KBK GROUP SARL, nous croyons au talent congolais, à la rigueur méthodologique et au travail bien fait. En phase avec notre devise « L\'effort fait le fort », nous construisons un groupe multisectoriel fondé sur le mérite, l\'éthique professionnelle et l\'esprit d\'initiative.',
  transparencyNotice: 'Politique de recrutement transparente : KBK GROUP SARL structure méthodiquement le déploiement de ses activités. Aucun poste fictif n\'est publié. Nous recevons et instruisons en permanence les candidatures spontanées qualifiées pour anticiper nos montées en charge opérationnelles à Kinshasa, Kolwezi, Lubumbashi et Matadi.',
  poles: [
    {
      id: 'mines',
      name: 'Mines & Géologie',
      sectorSlug: 'mines',
      description: 'Accompagner l\'essor de la Copperbelt et les exigences techniques des exploitants miniers.',
      roles: [
        'Ingénieurs des mines & géologues d\'exploration',
        'Responsables Hygiène, Sécurité & Environnement (HSE)',
        'Techniciens de maintenance d\'équipements lourds',
        'Spécialistes de conformité ARSP & contenu local'
      ]
    },
    {
      id: 'numerique',
      name: 'Numérique & Systèmes d\'Information',
      sectorSlug: 'numerique',
      description: 'Concevoir et maintenir les architectures logicielles et les réseaux d\'entreprise.',
      roles: [
        'Architectes logiciels & développeurs Full-Stack',
        'Administrateurs réseaux, systèmes & cybersécurité',
        'Analystes de données & spécialistes ERP',
        'Chefs de projet de transformation digitale'
      ]
    },
    {
      id: 'negoce',
      name: 'Négoce & Approvisionnements Stratégiques',
      sectorSlug: 'negoce',
      description: 'Maîtriser les circuits de fourniture industrielle et la négociation contractuelle internationale.',
      roles: [
        'Acheteurs industriels & gestionnaires de sourcing',
        'Spécialistes commerce international & crédit documentaire',
        'Juristes d\'affaires & conformité contractuelle',
        'Chargés de relations commerciales grands comptes'
      ]
    },
    {
      id: 'logistique',
      name: 'Logistique & Transport Multimodal',
      sectorSlug: 'logistique',
      description: 'Optimiser la fluidité des corridors Kinshasa-Matadi et Katanga-Afrique australe.',
      roles: [
        'Coordinateurs de transport & répartiteurs de flotte',
        'Transitistes & spécialistes des procédures douanières',
        'Responsables de plateformes logistiques & entreposage',
        'Superviseurs de fret multimodal fleuve/route'
      ]
    },
    {
      id: 'support',
      name: 'Gouvernance & Fonctions Support',
      description: 'Garantir la solidité juridique, financière et organisationnelle du groupe.',
      roles: [
        'Contrôleurs de gestion & comptables certifiés OHADA',
        'Responsables Ressources Humaines & gestion des talents',
        'Chargés de communication institutionnelle & relations presse',
        'Auditeurs internes & responsables qualité'
      ]
    }
  ],
  culturePillars: [
    {
      title: 'Culture du mérite & de l\'effort',
      desc: 'Conformément à notre devise « L\'effort fait le fort », nous valorisons l\'engagement authentique, la rigueur opérationnelle et la volonté continue de progresser.'
    },
    {
      title: 'Intégrité & Déontologie',
      desc: 'Toutes nos relations professionnelles et managériales reposent sur la transparence absolue, le respect des normes OHADA et la probité contractuelle.'
    },
    {
      title: 'Développement des compétences locales',
      desc: 'Priorité accordée au renforcement des capacités des professionnels congolais, avec un accompagnement sur le terrain et un transfert continu d\'expertise.'
    },
    {
      title: 'Vision panafricaine & ouverture',
      desc: 'Une capacité d\'action ancrée en RDC, enrichie par les apports d\'experts de la diaspora et de partenaires internationaux de référence.'
    }
  ],
  recruitmentSteps: [
    {
      step: '01',
      title: 'Dépôt de candidature spontanée',
      description: 'Soumission en ligne de votre profil, de votre spécialité sectorielle et de votre parcours professionnel avec références vérifiables.'
    },
    {
      step: '02',
      title: 'Revue de conformité & présélection',
      description: 'Examen attentif du dossier par notre cellule RH pour évaluer l\'adéquation avec nos orientations stratégiques et le référentiel des métiers.'
    },
    {
      step: '03',
      title: 'Entretiens d\'évaluation technique & managériale',
      description: 'Échanges approfondis avec les responsables de pôles pour vérifier les compétences opérationnelles, le leadership et l\'alignement culturel.'
    },
    {
      step: '04',
      title: 'Validation & intégration contractuelle',
      description: 'Proposition d\'embauche formelle dans le strict respect de la législation du travail congolaise et parcours d\'intégration structuré.'
    }
  ],
  faqs: [
    {
      question: 'Quels sont les profils prioritaires pour KBK GROUP SARL ?',
      answer: 'Nous recherchons des professionnels expérimentés ou de jeunes talents motivés dans les métiers techniques des mines, du transport multimodal, des architectures logicielles et du négoce international, ainsi que dans les fonctions d\'audit et de gestion OHADA.'
    },
    {
      question: 'Les professionnels de la diaspora congolaise peuvent-ils postuler ?',
      answer: 'Absolument. KBK GROUP SARL encourage vivement les compétences congolaises de l\'étranger désireuses de mettre leur savoir-faire au service du développement économique national à nous transmettre leur candidature spontanée.'
    },
    {
      question: 'Comment sont traitées les candidatures spontanées ?',
      answer: 'Chaque dossier soumis via notre formulaire officiel reçoit un numéro de transmission unique (ex : KBK-TALENT-2026-XXXX). Les dossiers sont classés par pôle d\'expertise dans notre vivier de compétences et consultés en priorité dès l\'ouverture effective d\'un besoin opérationnel.'
    },
    {
      question: 'KBK GROUP SARL accueille-t-il des stagiaires ?',
      answer: 'Oui, dans le cadre de partenariats académiques avec les universités et instituts supérieurs congolais, nous accueillons des stagiaires de fin d\'études sur des projets précis d\'ingénierie, de logistique ou de gestion.'
    }
  ]
};
