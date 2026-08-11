/* ============================================================
   MecaniqueAutoQuest — Données du programme DEP 5298 (Mécanique automobile)
   Données converties depuis l'app source vers le moteur web (PWA).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   Les questions QCM sont des EXEMPLES à valider par les enseignants du programme.
   ============================================================ */

const PROGRAM = {
  fr: { title: "Mécanique automobile", subtitle: "DEP 5298 — 1800 heures — 120 unités" },
  en: { title: "Automotive Mechanics", subtitle: "DVS 5298 — 1800 hours — 120 credits" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est maintenant
   divisée en 3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "meca01",
  "order": 1,
  "code": "343401",
  "hours": 15,
  "title_fr": "Métier et formation",
  "title_en": "Trade and Training",
  "icon": "🧭",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel diplôme obtient-on à la fin du programme Mécanique automobile 5298?",
      "en": "What diploma is awarded at the end of the Automotive Mechanics 5298 program?",
      "choices": [
       {
        "fr": "Un diplôme d'études professionnelles (DEP)",
        "en": "A Diploma of Vocational Studies (DVS)",
        "correct": true
       },
       {
        "fr": "Un diplôme d'études collégiales (DEC)",
        "en": "A Diploma of College Studies (DEC)",
        "correct": false
       },
       {
        "fr": "Une attestation d'études collégiales (AEC)",
        "en": "An Attestation of College Studies (AEC)",
        "correct": false
       },
       {
        "fr": "Un baccalauréat",
        "en": "A Bachelor's degree",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel métier ce programme prépare-t-il principalement à exercer?",
      "en": "What trade does this program mainly prepare students for?",
      "choices": [
       {
        "fr": "Mécanicien(ne) automobile",
        "en": "Automotive mechanic",
        "correct": true
       },
       {
        "fr": "Électricien du bâtiment",
        "en": "Building electrician",
        "correct": false
       },
       {
        "fr": "Plombier",
        "en": "Plumber",
        "correct": false
       },
       {
        "fr": "Comptable",
        "en": "Accountant",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le programme Mécanique automobile 5298 comporte 29 modules.",
      "en": "The Automotive Mechanics 5298 program has 29 modules.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Combien d'heures totalise le programme Mécanique automobile 5298?",
      "en": "How many hours does the Automotive Mechanics 5298 program total?",
      "choices": [
       {
        "fr": "1800 heures",
        "en": "1800 hours",
        "correct": true
       },
       {
        "fr": "1650 heures",
        "en": "1650 hours",
        "correct": false
       },
       {
        "fr": "900 heures",
        "en": "900 hours",
        "correct": false
       },
       {
        "fr": "1185 heures",
        "en": "1185 hours",
        "correct": false
       }
      ]
     },
     {
      "fr": "Combien d'unités totalise le programme (1 unité = 15 heures)?",
      "en": "How many credits does the program total (1 credit = 15 hours)?",
      "choices": [
       {
        "fr": "120 unités",
        "en": "120 credits",
        "correct": true
       },
       {
        "fr": "110 unités",
        "en": "110 credits",
        "correct": false
       },
       {
        "fr": "60 unités",
        "en": "60 credits",
        "correct": false
       },
       {
        "fr": "79 unités",
        "en": "79 credits",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le mécanicien automobile effectue des travaux d'entretien préventif et correctif sur les véhicules.",
      "en": "An automotive mechanic performs preventive and corrective maintenance work on vehicles.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Le module « Réparation de systèmes de transmission de pouvoir » dure 105 heures. Combien d'unités cela représente-t-il?",
      "en": "The 'Powertrain System Repair' module lasts 105 hours. How many credits does that represent?",
      "choices": [
       {
        "fr": "7 unités",
        "en": "7 credits",
        "correct": true
       },
       {
        "fr": "5 unités",
        "en": "5 credits",
        "correct": false
       },
       {
        "fr": "6 unités",
        "en": "6 credits",
        "correct": false
       },
       {
        "fr": "8 unités",
        "en": "8 credits",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle proportion des heures du programme est consacrée aux compétences directement liées aux tâches du métier?",
      "en": "What proportion of the program's hours is dedicated to competencies directly tied to trade tasks?",
      "choices": [
       {
        "fr": "885 heures sur 1800, le reste étant des compétences générales",
        "en": "885 out of 1800 hours, with the rest being general competencies",
        "correct": true
       },
       {
        "fr": "Toutes les heures sans exception",
        "en": "All hours without exception",
        "correct": false
       },
       {
        "fr": "Moins de 100 heures",
        "en": "Less than 100 hours",
        "correct": false
       },
       {
        "fr": "Aucune heure spécifique n'est prévue",
        "en": "No specific hours are allocated",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un mécanicien automobile doit vérifier les véhicules pour cerner les problèmes de fonctionnement et en trouver la source.",
      "en": "An automotive mechanic must inspect vehicles to identify operational problems and locate their source.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca02",
  "order": 2,
  "code": "343412",
  "hours": 30,
  "title_fr": "Santé, sécurité et protection de l'environnement",
  "title_en": "Health, Safety and Environmental Protection",
  "icon": "🦺",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel équipement de protection individuelle est essentiel en atelier de mécanique?",
      "en": "What personal protective equipment is essential in a mechanical workshop?",
      "choices": [
       {
        "fr": "Les lunettes de sécurité et les gants adaptés",
        "en": "Safety glasses and appropriate gloves",
        "correct": true
       },
       {
        "fr": "Aucun équipement n'est requis",
        "en": "No equipment is required",
        "correct": false
       },
       {
        "fr": "Uniquement des gants de jardinage",
        "en": "Only gardening gloves",
        "correct": false
       },
       {
        "fr": "Uniquement une casquette",
        "en": "Only a cap",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi disposer correctement de l'huile usagée plutôt que de la jeter n'importe où?",
      "en": "Why properly dispose of used oil rather than throwing it away anywhere?",
      "choices": [
       {
        "fr": "Pour éviter de contaminer l'environnement",
        "en": "To avoid contaminating the environment",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "L'huile usagée n'est jamais polluante",
        "en": "Used oil is never a pollutant",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un cric hydraulique bien calé est suffisant pour travailler en sécurité sous un véhicule, sans besoin de chandelles supplémentaires.",
      "en": "A well-set hydraulic jack alone is enough to safely work under a vehicle, without needing additional jack stands.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que faire si l'on repère une fuite de liquide dangereux dans l'atelier?",
      "en": "What should you do if you spot a hazardous fluid leak in the workshop?",
      "choices": [
       {
        "fr": "La nettoyer selon les procédures et signaler la situation au besoin",
        "en": "Cleaning it up per procedures and reporting the situation if needed",
        "correct": true
       },
       {
        "fr": "L'ignorer",
        "en": "Ignoring it",
        "correct": false
       },
       {
        "fr": "Continuer à travailler sans rien dire",
        "en": "Continuing to work without saying anything",
        "correct": false
       },
       {
        "fr": "La contourner sans avertir personne",
        "en": "Working around it without warning anyone",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi porter un masque lors de certains travaux générant de la poussière de frein?",
      "en": "Why wear a mask during certain tasks that generate brake dust?",
      "choices": [
       {
        "fr": "Pour éviter d'inhaler des particules potentiellement nocives",
        "en": "To avoid inhaling potentially harmful particles",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "La poussière de frein n'est jamais nocive",
        "en": "Brake dust is never harmful",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La ventilation adéquate d'un atelier réduit les risques liés aux vapeurs et gaz d'échappement.",
      "en": "Adequate workshop ventilation reduces risks related to fumes and exhaust gases.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un collègue ne porte pas son équipement de protection en atelier. Quelle est la bonne pratique?",
      "en": "A coworker isn't wearing their protective equipment in the workshop. What is the correct practice?",
      "choices": [
       {
        "fr": "L'aviser du danger et, si nécessaire, en informer le superviseur",
        "en": "Warning them of the danger and, if necessary, informing the supervisor",
        "correct": true
       },
       {
        "fr": "Ignorer la situation",
        "en": "Ignoring the situation",
        "correct": false
       },
       {
        "fr": "Se moquer de lui",
        "en": "Making fun of them",
        "correct": false
       },
       {
        "fr": "Faire pareil pour ne pas se démarquer",
        "en": "Doing the same to avoid standing out",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la gestion responsable des matières dangereuses (huiles, liquides de refroidissement) est-elle une responsabilité professionnelle importante?",
      "en": "Why is responsible management of hazardous materials (oils, coolants) an important professional responsibility?",
      "choices": [
       {
        "fr": "Pour protéger la santé des travailleurs et l'environnement",
        "en": "To protect workers' health and the environment",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Les matières dangereuses ne posent jamais de risque",
        "en": "Hazardous materials never pose a risk",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La culture de sécurité en atelier est uniquement la responsabilité du superviseur; les autres travailleurs n'ont pas à s'en soucier.",
      "en": "Workshop safety culture is solely the supervisor's responsibility; other workers don't need to worry about it.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "meca03",
  "order": 3,
  "code": "343423",
  "hours": 45,
  "title_fr": "Recherche d'information technique",
  "title_en": "Technical Information Research",
  "icon": "📖",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel document contient les spécifications techniques d'un véhicule?",
      "en": "Which document contains a vehicle's technical specifications?",
      "choices": [
       {
        "fr": "Le manuel de service du fabricant",
        "en": "The manufacturer's service manual",
        "correct": true
       },
       {
        "fr": "Une facture d'épicerie",
        "en": "A grocery receipt",
        "correct": false
       },
       {
        "fr": "Un contrat de vente",
        "en": "A sales contract",
        "correct": false
       },
       {
        "fr": "Une carte postale",
        "en": "A postcard",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi consulter les bulletins techniques (TSB) d'un fabricant?",
      "en": "Why check a manufacturer's technical service bulletins (TSBs)?",
      "choices": [
       {
        "fr": "Pour connaître les problèmes connus et solutions recommandées pour un modèle donné",
        "en": "To learn about known issues and recommended solutions for a given model",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier d'entretien, sans lien avec la performance",
        "en": "It only serves to follow the maintenance schedule, unrelated to performance",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "Les bulletins techniques n'existent pas vraiment",
        "en": "Technical bulletins don't really exist",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les logiciels de diagnostic automobile donnent souvent accès à des bases de données techniques.",
      "en": "Automotive diagnostic software often provides access to technical databases.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier le numéro d'identification du véhicule (NIV) avant de consulter la documentation technique?",
      "en": "Why check the vehicle identification number (VIN) before consulting technical documentation?",
      "choices": [
       {
        "fr": "Pour s'assurer d'utiliser les spécifications exactes du bon modèle et de la bonne année",
        "en": "To ensure using the exact specifications for the correct model and year",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le NIV n'a jamais de lien avec les spécifications",
        "en": "The VIN never relates to specifications",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si deux sources d'information technique semblent se contredire?",
      "en": "What should you do if two technical information sources seem to contradict each other?",
      "choices": [
       {
        "fr": "Vérifier auprès d'une source officielle ou d'un superviseur avant de procéder",
        "en": "Checking with an official source or a supervisor before proceeding",
        "correct": true
       },
       {
        "fr": "Choisir arbitrairement une des deux versions",
        "en": "Arbitrarily choosing one of the two versions",
        "correct": false
       },
       {
        "fr": "Ignorer les deux sources",
        "en": "Ignoring both sources",
        "correct": false
       },
       {
        "fr": "Deviner la bonne réponse",
        "en": "Guessing at the right answer",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Se fier uniquement à l'expérience personnelle, sans jamais consulter la documentation technique, donne généralement les diagnostics les plus fiables.",
      "en": "Relying only on personal experience, without ever consulting technical documentation, generally gives the most reliable diagnoses.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un véhicule présente un problème rare non documenté clairement dans le manuel standard. Quelle est la bonne pratique?",
      "en": "A vehicle has a rare problem not clearly documented in the standard manual. What is the correct practice?",
      "choices": [
       {
        "fr": "Rechercher des sources complémentaires (forums techniques officiels, bulletins, collègues) avant de conclure",
        "en": "Researching complementary sources (official technical forums, bulletins, coworkers) before concluding",
        "correct": true
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Remplacer des pièces au hasard",
        "en": "Replacing parts at random",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la capacité à bien rechercher l'information technique est-elle de plus en plus importante avec la complexité croissante des véhicules?",
      "en": "Why is the ability to effectively research technical information increasingly important as vehicles become more complex?",
      "choices": [
       {
        "fr": "Aucun mécanicien ne peut mémoriser toutes les spécifications de tous les modèles",
        "en": "No mechanic can memorize every specification of every model",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les véhicules modernes ne nécessitent jamais de recherche",
        "en": "Modern vehicles never require research",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La recherche d'information technique est une compétence utile seulement en début de carrière; elle devient inutile avec l'expérience.",
      "en": "Technical information research skill is useful only early in one's career; it becomes useless with experience.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "meca04",
  "order": 4,
  "code": "343433",
  "hours": 45,
  "title_fr": "Chauffe, soudage et coupage",
  "title_en": "Heating, Welding and Cutting",
  "icon": "🔥",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi un mécanicien automobile doit-il connaître des techniques de base en soudage?",
      "en": "Why must an automotive mechanic know basic welding techniques?",
      "choices": [
       {
        "fr": "Pour effectuer certaines réparations mineures sur des composants métalliques",
        "en": "To perform certain minor repairs on metal components",
        "correct": true
       },
       {
        "fr": "Cela n'a aucune utilité en mécanique automobile",
        "en": "It has no use in automotive mechanics",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape purement administrative",
        "en": "To follow a purely administrative step",
        "correct": false
       },
       {
        "fr": "Le soudage n'est jamais utilisé en mécanique",
        "en": "Welding is never used in mechanics",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi porter des lunettes de sécurité lors du coupage ou du soudage?",
      "en": "Why wear safety glasses during cutting or welding?",
      "choices": [
       {
        "fr": "Pour se protéger des étincelles et des éclats projetés",
        "en": "To protect against sparks and flying debris",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour améliorer la précision du travail",
        "en": "To improve work precision",
        "correct": false
       },
       {
        "fr": "Ce n'est jamais nécessaire",
        "en": "It is never necessary",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le chalumeau oxyacétylénique peut être utilisé pour chauffer une pièce grippée avant de la retirer.",
      "en": "An oxy-acetylene torch can be used to heat a seized part before removing it.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi éviter de souder à proximité du réservoir de carburant d'un véhicule?",
      "en": "Why avoid welding near a vehicle's fuel tank?",
      "choices": [
       {
        "fr": "En raison du risque d'incendie ou d'explosion lié aux vapeurs de carburant",
        "en": "Due to the fire or explosion risk from fuel vapours",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "Il n'y a jamais de risque particulier",
        "en": "There is never any particular risk",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel type de coupage est souvent utilisé pour retirer rapidement un boulon rouillé et grippé?",
      "en": "What type of cutting is often used to quickly remove a rusted, seized bolt?",
      "choices": [
       {
        "fr": "Le coupage à la meuleuse ou au chalumeau",
        "en": "Cutting with a grinder or a torch",
        "correct": true
       },
       {
        "fr": "Le découpage aux ciseaux",
        "en": "Cutting with scissors",
        "correct": false
       },
       {
        "fr": "Aucune méthode de coupage n'est jamais nécessaire",
        "en": "No cutting method is ever necessary",
        "correct": false
       },
       {
        "fr": "Le découpage au couteau de cuisine",
        "en": "Cutting with a kitchen knife",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Refroidir fortement une pièce grippée, plutôt que la chauffer, est la méthode recommandée pour faciliter son retrait.",
      "en": "Strongly cooling a seized part, rather than heating it, is the recommended method to make removal easier.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un composant proche d'un capteur électronique sensible doit être chauffé. Quelle est la bonne pratique?",
      "en": "A component near a sensitive electronic sensor must be heated. What is the correct practice?",
      "choices": [
       {
        "fr": "Protéger ou retirer le capteur avant la chauffe pour éviter de l'endommager",
        "en": "Protecting or removing the sensor before heating to avoid damaging it",
        "correct": true
       },
       {
        "fr": "Chauffer sans se soucier des composants environnants",
        "en": "Heating with no regard for surrounding components",
        "correct": false
       },
       {
        "fr": "Ignorer le risque pour le capteur",
        "en": "Ignoring the risk to the sensor",
        "correct": false
       },
       {
        "fr": "Toujours remplacer le capteur avant de commencer",
        "en": "Always replacing the sensor before starting",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi maîtriser des techniques de soudage de base reste-t-il pertinent malgré la complexité électronique croissante des véhicules?",
      "en": "Why does mastering basic welding techniques remain relevant despite vehicles' growing electronic complexity?",
      "choices": [
       {
        "fr": "Certaines réparations structurelles ou mécaniques nécessitent encore ces compétences de base",
        "en": "Some structural or mechanical repairs still require these basic skills",
        "correct": true
       },
       {
        "fr": "Le soudage n'est plus jamais utilisé en mécanique moderne",
        "en": "Welding is no longer ever used in modern mechanics",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le respect des consignes de sécurité est particulièrement important lors de travaux de chauffe et de soudage près d'un véhicule.",
      "en": "Following safety guidelines is particularly important during heating and welding work near a vehicle.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca05",
  "order": 5,
  "code": "343445",
  "hours": 75,
  "title_fr": "Travail d'atelier",
  "title_en": "Shop Work",
  "icon": "🔧",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil sert à serrer un boulon à un couple précis?",
      "en": "What tool is used to tighten a bolt to a precise torque?",
      "choices": [
       {
        "fr": "Une clé dynamométrique",
        "en": "A torque wrench",
        "correct": true
       },
       {
        "fr": "Un marteau",
        "en": "A hammer",
        "correct": false
       },
       {
        "fr": "Une pince",
        "en": "Pliers",
        "correct": false
       },
       {
        "fr": "Un tournevis plat",
        "en": "A flathead screwdriver",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi maintenir un espace de travail propre et organisé en atelier?",
      "en": "Why keep a clean and organized workspace in the shop?",
      "choices": [
       {
        "fr": "Pour travailler efficacement et en toute sécurité",
        "en": "To work efficiently and safely",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "L'organisation n'a jamais d'impact",
        "en": "Organization never has any impact",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un cric hydraulique doit être utilisé sur une surface plane et stable.",
      "en": "A hydraulic jack must be used on a flat, stable surface.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi entretenir régulièrement les outils d'atelier?",
      "en": "Why regularly maintain shop tools?",
      "choices": [
       {
        "fr": "Pour assurer un travail précis et sécuritaire",
        "en": "To ensure precise and safe work",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation générale de l'atelier",
        "en": "To follow a general shop presentation standard",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire avant de lever un véhicule avec un pont élévateur?",
      "en": "What should you do before lifting a vehicle with a shop lift?",
      "choices": [
       {
        "fr": "Vérifier les points de levage recommandés par le fabricant",
        "en": "Checking the lift points recommended by the manufacturer",
        "correct": true
       },
       {
        "fr": "Lever le véhicule n'importe où sous la carrosserie",
        "en": "Lifting the vehicle anywhere under the body",
        "correct": false
       },
       {
        "fr": "Ignorer les recommandations du fabricant",
        "en": "Ignoring the manufacturer's recommendations",
        "correct": false
       },
       {
        "fr": "Ne rien vérifier avant de lever",
        "en": "Checking nothing before lifting",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le rangement des outils après usage est une tâche facultative qui n'a aucun effet sur le travail des autres employés.",
      "en": "Putting tools away after use is an optional task that has no effect on other employees' work.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un outil d'atelier montre des signes d'usure ou de défaillance. Quelle est la bonne pratique?",
      "en": "A shop tool shows signs of wear or failure. What is the correct practice?",
      "choices": [
       {
        "fr": "Le retirer du service et le signaler pour réparation ou remplacement",
        "en": "Removing it from service and reporting it for repair or replacement",
        "correct": true
       },
       {
        "fr": "L'utiliser tel quel sans problème",
        "en": "Using it as-is with no issue",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Le cacher pour ne pas être blâmé",
        "en": "Hiding it to avoid being blamed",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une bonne gestion du temps en atelier est-elle importante pour un mécanicien professionnel?",
      "en": "Why is good time management in the shop important for a professional mechanic?",
      "choices": [
       {
        "fr": "Pour respecter les délais promis aux clients tout en maintenant la qualité",
        "en": "To meet deadlines promised to clients while maintaining quality",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "La rapidité prime toujours sur la qualité",
        "en": "Speed always takes priority over quality",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un travail d'atelier organisé et méthodique réduit les risques d'erreurs et d'accidents.",
      "en": "Organized, methodical shop work reduces the risk of errors and accidents.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca06",
  "order": 6,
  "code": "343452",
  "hours": 30,
  "title_fr": "Communication en milieu de travail",
  "title_en": "Workplace Communication",
  "icon": "💬",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi bien expliquer un problème mécanique à un client dans des termes simples?",
      "en": "Why clearly explain a mechanical problem to a client in simple terms?",
      "choices": [
       {
        "fr": "Pour qu'il comprenne bien la situation et prenne une décision éclairée",
        "en": "So they understand the situation well and make an informed decision",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter le ton professionnel attendu avec le client",
        "en": "To maintain the expected professional tone with the client",
        "correct": false
       },
       {
        "fr": "Pour respecter le protocole de communication standard de l'atelier",
        "en": "To follow the shop's standard communication protocol",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la communication claire avec les collègues est-elle importante en atelier?",
      "en": "Why is clear communication with coworkers important in the shop?",
      "choices": [
       {
        "fr": "Pour éviter les erreurs et assurer un bon travail d'équipe",
        "en": "To avoid errors and ensure good teamwork",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour respecter une méthode de classement imposée par l'atelier",
        "en": "To follow a filing method required by the shop",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'écoute active consiste à reformuler pour confirmer sa compréhension.",
      "en": "Active listening means rephrasing to confirm understanding.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un client est insatisfait du délai de réparation de son véhicule. Quelle est la bonne attitude?",
      "en": "A client is unhappy about their vehicle's repair timeline. What is the right attitude?",
      "choices": [
       {
        "fr": "Écouter sa préoccupation et expliquer la situation clairement",
        "en": "Listening to their concern and clearly explaining the situation",
        "correct": true
       },
       {
        "fr": "Ignorer sa plainte",
        "en": "Ignoring the complaint",
        "correct": false
       },
       {
        "fr": "Argumenter fermement",
        "en": "Arguing firmly",
        "correct": false
       },
       {
        "fr": "Le renvoyer sans explication",
        "en": "Sending them away with no explanation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi documenter clairement les réparations effectuées sur un bon de travail?",
      "en": "Why clearly document repairs performed on a work order?",
      "choices": [
       {
        "fr": "Pour assurer un suivi précis et faciliter la communication avec le client ou un futur mécanicien",
        "en": "To ensure accurate tracking and facilitate communication with the client or a future mechanic",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "La documentation n'est jamais nécessaire",
        "en": "Documentation is never necessary",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un mécanicien n'a pas besoin de bien communiquer avec ses clients tant que le travail technique est bien fait.",
      "en": "A mechanic doesn't need to communicate well with clients as long as the technical work is done well.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un client remet en question un diagnostic technique complexe. Quelle est la meilleure approche?",
      "en": "A client questions a complex technical diagnosis. What is the best approach?",
      "choices": [
       {
        "fr": "Expliquer patiemment le raisonnement avec des termes accessibles, sans être condescendant",
        "en": "Patiently explaining the reasoning in accessible terms, without being condescending",
        "correct": true
       },
       {
        "fr": "Refuser de discuter davantage",
        "en": "Refusing to discuss it further",
        "correct": false
       },
       {
        "fr": "Se fâcher contre le client",
        "en": "Getting upset with the client",
        "correct": false
       },
       {
        "fr": "Ignorer ses questions",
        "en": "Ignoring their questions",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une communication efficace entre le conseiller technique et le mécanicien est-elle cruciale?",
      "en": "Why is effective communication between the service advisor and the mechanic crucial?",
      "choices": [
       {
        "fr": "Pour éviter les malentendus qui pourraient mener à des réparations incorrectes",
        "en": "To avoid misunderstandings that could lead to incorrect repairs",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Le mécanicien n'a jamais besoin d'informations du conseiller",
        "en": "The mechanic never needs information from the advisor",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne communication en milieu de travail contribue à la satisfaction des clients et à l'efficacité de l'équipe.",
      "en": "Good workplace communication contributes to client satisfaction and team efficiency.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca07",
  "order": 7,
  "code": "343465",
  "hours": 75,
  "title_fr": "Vérification de l'état général de moteurs à combustion interne",
  "title_en": "Internal Combustion Engine Condition Check",
  "icon": "🔍",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil aide à vérifier la compression d'un cylindre de moteur?",
      "en": "What tool helps check a cylinder's compression?",
      "choices": [
       {
        "fr": "Un compressiomètre",
        "en": "A compression tester",
        "correct": true
       },
       {
        "fr": "Un thermomètre",
        "en": "A thermometer",
        "correct": false
       },
       {
        "fr": "Une balance de cuisine",
        "en": "A kitchen scale",
        "correct": false
       },
       {
        "fr": "Un chronomètre seul",
        "en": "A stopwatch alone",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier le niveau et l'état de l'huile moteur régulièrement?",
      "en": "Why regularly check the engine oil's level and condition?",
      "choices": [
       {
        "fr": "Pour prévenir l'usure prématurée et détecter d'éventuels problèmes",
        "en": "To prevent premature wear and detect potential problems",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier fixé par le fabricant",
        "en": "To follow the manufacturer's schedule",
        "correct": false
       },
       {
        "fr": "L'huile moteur n'a jamais besoin d'être vérifiée",
        "en": "Engine oil never needs to be checked",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un bruit anormal du moteur est habituellement causé par l'état de la route et n'a aucun lien avec l'état mécanique du véhicule.",
      "en": "An abnormal engine noise is usually caused by road conditions and has no connection to the vehicle's mechanical state.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi effectuer une vérification visuelle complète du moteur avant tout diagnostic approfondi?",
      "en": "Why perform a complete visual inspection of the engine before any in-depth diagnosis?",
      "choices": [
       {
        "fr": "Pour repérer rapidement des indices évidents (fuites, dommages visibles)",
        "en": "To quickly spot obvious clues (leaks, visible damage)",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier d'entretien, sans lien avec la performance",
        "en": "It only serves to follow the maintenance schedule, unrelated to performance",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "Une vérification visuelle n'apporte jamais d'information",
        "en": "A visual inspection never provides useful information",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel symptôme peut indiquer un problème de compression dans un cylindre?",
      "en": "What symptom can indicate a compression problem in a cylinder?",
      "choices": [
       {
        "fr": "Une perte de puissance ou un fonctionnement irrégulier du moteur",
        "en": "A loss of power or rough engine running",
        "correct": true
       },
       {
        "fr": "Les symptômes observables sont presque toujours liés à l'usure normale des pneus",
        "en": "Observable symptoms are almost always related to normal tire wear",
        "correct": false
       },
       {
        "fr": "Une amélioration soudaine de la performance",
        "en": "A sudden improvement in performance",
        "correct": false
       },
       {
        "fr": "Une réduction de la consommation de carburant",
        "en": "A reduction in fuel consumption",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La vérification de l'état général du moteur combine souvent inspection visuelle, mesures et écoute attentive.",
      "en": "Checking an engine's overall condition often combines visual inspection, measurements and careful listening.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un moteur montre plusieurs symptômes qui pourraient avoir des causes différentes. Quelle est la bonne démarche?",
      "en": "An engine shows several symptoms that could have different causes. What is the correct approach?",
      "choices": [
       {
        "fr": "Procéder de façon méthodique, en éliminant les causes possibles une à une",
        "en": "Proceeding methodically, ruling out possible causes one by one",
        "correct": true
       },
       {
        "fr": "Remplacer des pièces au hasard en espérant régler le problème",
        "en": "Replacing parts at random hoping to fix the problem",
        "correct": false
       },
       {
        "fr": "Ignorer certains symptômes pour simplifier",
        "en": "Ignoring some symptoms to simplify",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une vérification rigoureuse de l'état général du moteur est-elle essentielle avant d'entreprendre une réparation majeure?",
      "en": "Why is a rigorous overall engine condition check essential before undertaking a major repair?",
      "choices": [
       {
        "fr": "Pour éviter de réparer le mauvais problème et de gaspiller temps et argent",
        "en": "To avoid fixing the wrong problem and wasting time and money",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Une vérification n'est jamais nécessaire avant une réparation",
        "en": "A check is never necessary before a repair",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un diagnostic précis de l'état général du moteur guide efficacement les étapes de réparation qui suivent.",
      "en": "An accurate overall engine condition diagnosis effectively guides the repair steps that follow.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca08",
  "order": 8,
  "code": "343476",
  "hours": 90,
  "title_fr": "Réparation de moteurs à combustion interne",
  "title_en": "Internal Combustion Engine Repair",
  "icon": "⚙️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une tâche courante en réparation de moteur?",
      "en": "What is a common task in engine repair?",
      "choices": [
       {
        "fr": "Remplacer des composants usés ou défectueux (joints, courroies, pièces internes)",
        "en": "Replacing worn or defective components (gaskets, belts, internal parts)",
        "correct": true
       },
       {
        "fr": "Repeindre la carrosserie du véhicule",
        "en": "Repainting the vehicle's body",
        "correct": false
       },
       {
        "fr": "Réparer les sièges",
        "en": "Repairing the seats",
        "correct": false
       },
       {
        "fr": "Nettoyer les tapis",
        "en": "Cleaning the carpets",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi suivre le couple de serrage spécifié lors du remontage d'un moteur?",
      "en": "Why follow the specified torque when reassembling an engine?",
      "choices": [
       {
        "fr": "Pour éviter d'endommager les composants ou de causer une fuite",
        "en": "To avoid damaging components or causing a leak",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Pour respecter l'ordre de remontage recommandé par le fabricant",
        "en": "To follow the manufacturer's recommended reassembly order",
        "correct": false
       },
       {
        "fr": "Le couple de serrage n'a jamais d'importance",
        "en": "Torque never matters",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une fuite d'huile ou de liquide de refroidissement provient presque toujours d'une pièce usée, jamais d'un joint mal installé.",
      "en": "An oil or coolant leak almost always comes from a worn part, never from a poorly installed gasket.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi suivre une séquence précise lors du démontage d'un moteur?",
      "en": "Why follow a precise sequence when disassembling an engine?",
      "choices": [
       {
        "fr": "Pour faciliter le remontage correct et éviter d'endommager des pièces",
        "en": "To make correct reassembly easier and avoid damaging parts",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de réparation",
        "en": "To follow a repair-file presentation standard",
        "correct": false
       },
       {
        "fr": "La séquence de démontage n'a jamais d'importance",
        "en": "The disassembly sequence never matters",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si une pièce remplacée ne correspond pas exactement aux spécifications du fabricant?",
      "en": "What should you do if a replacement part doesn't exactly match the manufacturer's specifications?",
      "choices": [
       {
        "fr": "Vérifier la compatibilité avant de l'installer",
        "en": "Checking compatibility before installing it",
        "correct": true
       },
       {
        "fr": "L'installer quand même sans vérification",
        "en": "Installing it anyway with no check",
        "correct": false
       },
       {
        "fr": "Ignorer la différence",
        "en": "Ignoring the difference",
        "correct": false
       },
       {
        "fr": "Modifier la pièce sans expertise",
        "en": "Modifying the part with no expertise",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un moteur réparé doit être testé avant d'être remis au client pour confirmer que le problème est résolu.",
      "en": "A repaired engine must be tested before being returned to the client to confirm the problem is resolved.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un moteur réparé présente encore un symptôme après la réparation. Quelle est la bonne pratique?",
      "en": "A repaired engine still shows a symptom after the repair. What is the correct practice?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier une cause non traitée",
        "en": "Resuming the diagnosis to identify an untreated cause",
        "correct": true
       },
       {
        "fr": "Livrer le véhicule tel quel sans vérification supplémentaire",
        "en": "Delivering the vehicle as-is with no further check",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme restant",
        "en": "Ignoring the remaining symptom",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une réparation de moteur mal exécutée peut-elle avoir des conséquences graves pour le client?",
      "en": "Why can a poorly executed engine repair have serious consequences for the client?",
      "choices": [
       {
        "fr": "Elle peut entraîner une panne dangereuse ou coûteuse plus tard",
        "en": "It can lead to a dangerous or costly breakdown later",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Une réparation mal faite s'améliore toujours avec le temps",
        "en": "A poorly done repair always improves over time",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rigueur et la précision sont essentielles en réparation de moteur pour assurer la fiabilité et la sécurité du véhicule.",
      "en": "Rigour and precision are essential in engine repair to ensure the vehicle's reliability and safety.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca09",
  "order": 9,
  "code": "343484",
  "hours": 60,
  "title_fr": "Vérification de systèmes liés à la tenue de route",
  "title_en": "Steering and Suspension System Check",
  "icon": "🚗",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quels systèmes sont liés à la tenue de route d'un véhicule?",
      "en": "What systems relate to a vehicle's steering and suspension?",
      "choices": [
       {
        "fr": "La suspension, la direction et les pneus",
        "en": "Suspension, steering and tires",
        "correct": true
       },
       {
        "fr": "Le système audio uniquement",
        "en": "Only the audio system",
        "correct": false
       },
       {
        "fr": "Le système de climatisation uniquement",
        "en": "Only the air conditioning system",
        "correct": false
       },
       {
        "fr": "Les sièges chauffants uniquement",
        "en": "Only the heated seats",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier l'usure des pneus lors d'une inspection de la tenue de route?",
      "en": "Why check tire wear during a steering and suspension inspection?",
      "choices": [
       {
        "fr": "Une usure irrégulière peut indiquer un problème d'alignement ou de suspension",
        "en": "Uneven wear can indicate an alignment or suspension problem",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "L'usure des pneus n'a jamais de lien avec la tenue de route",
        "en": "Tire wear never relates to handling",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un véhicule qui tire d'un côté est presque toujours causé par un problème de moteur, jamais par l'alignement.",
      "en": "A vehicle pulling to one side is almost always caused by an engine problem, never by alignment.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier les amortisseurs lors d'une inspection de suspension?",
      "en": "Why check the shock absorbers during a suspension inspection?",
      "choices": [
       {
        "fr": "Des amortisseurs usés affectent la stabilité et la sécurité du véhicule",
        "en": "Worn shock absorbers affect the vehicle's stability and safety",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Les amortisseurs ne s'usent jamais",
        "en": "Shock absorbers never wear out",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel test simple peut aider à évaluer l'état général de la suspension d'un véhicule?",
      "en": "What simple test can help assess a vehicle's overall suspension condition?",
      "choices": [
       {
        "fr": "Appuyer fermement sur un coin du véhicule et observer le rebond",
        "en": "Firmly pushing down on a corner of the vehicle and observing the rebound",
        "correct": true
       },
       {
        "fr": "Vérifier uniquement la couleur des pneus",
        "en": "Only checking the tires' colour",
        "correct": false
       },
       {
        "fr": "Aucun test simple n'existe",
        "en": "No simple test exists",
        "correct": false
       },
       {
        "fr": "Écouter la radio du véhicule",
        "en": "Listening to the vehicle's radio",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un bruit anormal en virage peut indiquer un problème lié aux composants de direction ou de suspension.",
      "en": "An abnormal noise when turning can indicate a problem with steering or suspension components.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un véhicule présente une vibration au volant à haute vitesse. Quelle est une cause possible?",
      "en": "A vehicle shows steering wheel vibration at high speed. What is a possible cause?",
      "choices": [
       {
        "fr": "Un déséquilibre des roues ou un problème d'alignement",
        "en": "Wheel imbalance or an alignment problem",
        "correct": true
       },
       {
        "fr": "La couleur du véhicule",
        "en": "The vehicle's colour",
        "correct": false
       },
       {
        "fr": "Le prix de l'essence",
        "en": "The price of gas",
        "correct": false
       },
       {
        "fr": "La cause est presque toujours liée à l'âge du véhicule, peu importe les symptômes",
        "en": "The cause is almost always related to the vehicle's age, regardless of symptoms",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une vérification rigoureuse de la tenue de route est-elle particulièrement importante pour la sécurité du client?",
      "en": "Why is a rigorous steering and suspension check particularly important for client safety?",
      "choices": [
       {
        "fr": "Ces systèmes affectent directement le contrôle et la stabilité du véhicule",
        "en": "These systems directly affect the vehicle's control and stability",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "La tenue de route n'affecte jamais la sécurité",
        "en": "Handling never affects safety",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre habituel des vérifications de l'atelier",
        "en": "To follow the shop's usual inspection order",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un diagnostic précis des systèmes de tenue de route aide à orienter efficacement les réparations nécessaires.",
      "en": "An accurate diagnosis of steering and suspension systems effectively guides the necessary repairs.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca10",
  "order": 10,
  "code": "343496",
  "hours": 90,
  "title_fr": "Réparation de systèmes liés à la tenue de route",
  "title_en": "Steering and Suspension System Repair",
  "icon": "🔧",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une réparation courante liée à la suspension?",
      "en": "What is a common suspension repair?",
      "choices": [
       {
        "fr": "Le remplacement d'amortisseurs ou de ressorts usés",
        "en": "Replacing worn shock absorbers or springs",
        "correct": true
       },
       {
        "fr": "Le remplacement des sièges",
        "en": "Replacing the seats",
        "correct": false
       },
       {
        "fr": "La réparation du système audio",
        "en": "Repairing the audio system",
        "correct": false
       },
       {
        "fr": "Le remplacement des essuie-glaces",
        "en": "Replacing the wiper blades",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi effectuer un alignement des roues après avoir remplacé certaines pièces de suspension?",
      "en": "Why perform a wheel alignment after replacing certain suspension parts?",
      "choices": [
       {
        "fr": "Pour assurer une usure uniforme des pneus et une bonne tenue de route",
        "en": "To ensure even tire wear and good handling",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "L'alignement n'est jamais nécessaire après une réparation",
        "en": "Alignment is never necessary after a repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les couples de serrage indiqués par le fabricant sont de simples suggestions; un mécanicien expérimenté peut les ignorer sans risque.",
      "en": "The manufacturer's torque specifications are just suggestions; an experienced mechanic can safely ignore them.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi remplacer les pièces de suspension par paires (ex. les deux amortisseurs avant) plutôt qu'individuellement?",
      "en": "Why replace suspension parts in pairs (e.g. both front shocks) rather than individually?",
      "choices": [
       {
        "fr": "Pour maintenir un comportement équilibré et symétrique du véhicule",
        "en": "To maintain balanced, symmetrical vehicle behaviour",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "Remplacer une seule pièce est toujours préférable",
        "en": "Replacing a single part is always preferable",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir réparé un composant de direction?",
      "en": "What should be checked after repairing a steering component?",
      "choices": [
       {
        "fr": "Le bon fonctionnement et l'absence de jeu excessif dans la direction",
        "en": "Proper function and the absence of excessive play in the steering",
        "correct": true
       },
       {
        "fr": "Uniquement le kilométrage affiché au tableau de bord",
        "en": "Only the mileage shown on the dashboard",
        "correct": false
       },
       {
        "fr": "Uniquement la marque du composant",
        "en": "Only the component's brand",
        "correct": false
       },
       {
        "fr": "Uniquement le modèle du véhicule",
        "en": "Only the vehicle's model",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un essai routier après une réparation de suspension permet de confirmer que le problème est résolu.",
      "en": "A road test after a suspension repair confirms the problem is resolved.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation de suspension ne règle pas complètement le symptôme initial du client. Quelle est la bonne pratique?",
      "en": "A suspension repair doesn't completely resolve the client's initial symptom. What is the correct practice?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier une cause additionnelle",
        "en": "Resuming the diagnosis to identify an additional cause",
        "correct": true
       },
       {
        "fr": "Livrer le véhicule tel quel sans vérification supplémentaire",
        "en": "Delivering the vehicle as-is with no further check",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme restant",
        "en": "Ignoring the remaining symptom",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les réparations liées à la tenue de route exigent-elles une attention particulière à la sécurité?",
      "en": "Why do steering and suspension repairs require particular attention to safety?",
      "choices": [
       {
        "fr": "Une erreur peut compromettre gravement le contrôle du véhicule par le conducteur",
        "en": "An error can seriously compromise the driver's control of the vehicle",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Ces réparations n'affectent jamais la sécurité",
        "en": "These repairs never affect safety",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rigueur dans les réparations de tenue de route contribue directement à la sécurité routière du client.",
      "en": "Rigour in steering and suspension repairs directly contributes to the client's road safety.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca11",
  "order": 11,
  "code": "343506",
  "hours": 90,
  "title_fr": "Vérification de systèmes électriques et électroniques",
  "title_en": "Electrical and Electronic System Check",
  "icon": "⚡",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil sert à mesurer la tension, le courant et la résistance dans un circuit électrique?",
      "en": "What tool is used to measure voltage, current and resistance in an electrical circuit?",
      "choices": [
       {
        "fr": "Un multimètre",
        "en": "A multimeter",
        "correct": true
       },
       {
        "fr": "Un compressiomètre",
        "en": "A compression tester",
        "correct": false
       },
       {
        "fr": "Une clé dynamométrique",
        "en": "A torque wrench",
        "correct": false
       },
       {
        "fr": "Un pied à coulisse",
        "en": "A caliper",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier l'état de la batterie d'un véhicule?",
      "en": "Why check a vehicle's battery condition?",
      "choices": [
       {
        "fr": "Pour s'assurer qu'elle fournit suffisamment de puissance pour démarrer et alimenter le véhicule",
        "en": "To ensure it provides enough power to start and run the vehicle",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "La batterie ne s'affaiblit jamais",
        "en": "The battery never weakens",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un fusible grillé coupe habituellement l'alimentation de tous les circuits électriques du véhicule en même temps.",
      "en": "A blown fuse usually cuts power to all of the vehicle's electrical circuits at once.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi suivre un schéma électrique lors du diagnostic d'un problème électrique complexe?",
      "en": "Why follow a wiring diagram when diagnosing a complex electrical problem?",
      "choices": [
       {
        "fr": "Pour comprendre le circuit et localiser efficacement la source du problème",
        "en": "To understand the circuit and effectively locate the source of the problem",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "Un schéma électrique n'apporte jamais d'information utile",
        "en": "A wiring diagram never provides useful information",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel symptôme peut indiquer un problème de mise à la masse (ground) dans un circuit électrique?",
      "en": "What symptom can indicate a grounding problem in an electrical circuit?",
      "choices": [
       {
        "fr": "Un fonctionnement intermittent ou anormal d'un composant électrique",
        "en": "Intermittent or abnormal operation of an electrical component",
        "correct": true
       },
       {
        "fr": "Les symptômes observables dépendent uniquement du style de conduite",
        "en": "Observable symptoms depend only on driving style",
        "correct": false
       },
       {
        "fr": "Une amélioration soudaine de la performance",
        "en": "A sudden improvement in performance",
        "correct": false
       },
       {
        "fr": "Une réduction de la consommation de carburant",
        "en": "A reduction in fuel consumption",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La vérification de systèmes électriques se fait généralement au hasard, sans suivre le circuit de façon méthodique.",
      "en": "Checking electrical systems is generally done randomly, without methodically following the circuit.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un problème électrique intermittent est difficile à reproduire en atelier. Quelle est une bonne pratique?",
      "en": "An intermittent electrical problem is hard to reproduce in the shop. What is a good practice?",
      "choices": [
       {
        "fr": "Recréer les conditions décrites par le client (vibrations, température) pour tenter de reproduire le problème",
        "en": "Recreating the conditions described by the client (vibrations, temperature) to try to reproduce the problem",
        "correct": true
       },
       {
        "fr": "Ignorer le problème car il n'est pas reproductible",
        "en": "Ignoring the problem since it's not reproducible",
        "correct": false
       },
       {
        "fr": "Remplacer des pièces au hasard",
        "en": "Replacing parts at random",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les systèmes électriques et électroniques sont-ils de plus en plus complexes à diagnostiquer dans les véhicules modernes?",
      "en": "Why are electrical and electronic systems increasingly complex to diagnose in modern vehicles?",
      "choices": [
       {
        "fr": "Les véhicules intègrent de plus en plus de modules électroniques interconnectés",
        "en": "Vehicles increasingly integrate interconnected electronic modules",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Les systèmes électriques deviennent toujours plus simples",
        "en": "Electrical systems are always becoming simpler",
        "correct": false
       },
       {
        "fr": "Pour suivre une liste de vérification standardisée de l'atelier",
        "en": "To follow the shop's standardized checklist",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise du diagnostic électrique est une compétence de plus en plus valorisée avec l'électrification des véhicules.",
      "en": "Mastering electrical diagnosis is an increasingly valued skill as vehicles become more electrified.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca12",
  "order": 12,
  "code": "343514",
  "hours": 60,
  "title_fr": "Réparation de systèmes d'éclairage",
  "title_en": "Lighting System Repair",
  "icon": "💡",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une réparation courante liée à l'éclairage d'un véhicule?",
      "en": "What is a common repair related to a vehicle's lighting?",
      "choices": [
       {
        "fr": "Le remplacement d'une ampoule ou d'un phare défectueux",
        "en": "Replacing a burnt-out bulb or a defective headlight",
        "correct": true
       },
       {
        "fr": "Le remplacement des pneus",
        "en": "Replacing the tires",
        "correct": false
       },
       {
        "fr": "La réparation du moteur",
        "en": "Repairing the engine",
        "correct": false
       },
       {
        "fr": "Le remplacement des freins",
        "en": "Replacing the brakes",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier le bon fonctionnement de tous les feux avant de remettre un véhicule au client?",
      "en": "Why check that all lights work properly before returning a vehicle to the client?",
      "choices": [
       {
        "fr": "Pour assurer la sécurité du conducteur et le respect du code de la route",
        "en": "To ensure driver safety and compliance with traffic laws",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter la procédure de remise standard de l'atelier",
        "en": "To follow the shop's standard hand-back procedure",
        "correct": false
       },
       {
        "fr": "Les feux n'ont jamais besoin d'être vérifiés",
        "en": "Lights never need to be checked",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'alignement des phares n'a aucun effet sur la visibilité ou la sécurité des autres conducteurs.",
      "en": "Headlight alignment has no effect on visibility or the safety of other drivers.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier un fusible avant de conclure qu'une ampoule est défectueuse?",
      "en": "Why check a fuse before concluding that a bulb is defective?",
      "choices": [
       {
        "fr": "Un fusible grillé peut causer le même symptôme qu'une ampoule brûlée",
        "en": "A blown fuse can cause the same symptom as a burnt-out bulb",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Les fusibles ne grillent jamais",
        "en": "Fuses never blow",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir remplacé un phare?",
      "en": "What should be checked after replacing a headlight?",
      "choices": [
       {
        "fr": "L'alignement du faisceau lumineux",
        "en": "The beam's alignment",
        "correct": true
       },
       {
        "fr": "Seulement la date du dernier changement d'huile",
        "en": "Only the date of the last oil change",
        "correct": false
       },
       {
        "fr": "Uniquement le prix de l'ampoule",
        "en": "Only the bulb's price",
        "correct": false
       },
       {
        "fr": "Uniquement la marque des pneus installés",
        "en": "Only the brand of the installed tires",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes d'éclairage modernes peuvent inclure des composants électroniques complexes (DEL, xénon).",
      "en": "Modern lighting systems can include complex electronic components (LED, xenon).",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un système d'éclairage à DEL présente un dysfonctionnement inhabituel. Quelle est la bonne pratique?",
      "en": "An LED lighting system shows an unusual malfunction. What is the correct practice?",
      "choices": [
       {
        "fr": "Consulter la documentation technique spécifique à ce type de système avant de procéder",
        "en": "Consulting the technical documentation specific to this type of system before proceeding",
        "correct": true
       },
       {
        "fr": "Traiter le problème comme un système d'éclairage traditionnel sans vérification",
        "en": "Treating the problem like a traditional lighting system with no check",
        "correct": false
       },
       {
        "fr": "Ignorer le dysfonctionnement",
        "en": "Ignoring the malfunction",
        "correct": false
       },
       {
        "fr": "Remplacer tout le système sans diagnostic",
        "en": "Replacing the entire system with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la réparation de systèmes d'éclairage modernes exige-t-elle des connaissances plus poussées qu'auparavant?",
      "en": "Why does repairing modern lighting systems require more advanced knowledge than before?",
      "choices": [
       {
        "fr": "Les systèmes intègrent de plus en plus d'électronique et de capteurs",
        "en": "Systems increasingly integrate electronics and sensors",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les systèmes d'éclairage deviennent toujours plus simples",
        "en": "Lighting systems are always becoming simpler",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La sécurité routière dépend directement du bon fonctionnement des systèmes d'éclairage d'un véhicule.",
      "en": "Road safety directly depends on a vehicle's lighting systems working properly.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca13",
  "order": 13,
  "code": "343524",
  "hours": 60,
  "title_fr": "Vérification de systèmes de base commandés par ordinateur",
  "title_en": "Basic Computer-Controlled System Check",
  "icon": "💻",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil sert à lire les codes de diagnostic d'un système commandé par ordinateur?",
      "en": "What tool is used to read diagnostic codes from a computer-controlled system?",
      "choices": [
       {
        "fr": "Un lecteur de codes OBD (outil de diagnostic)",
        "en": "An OBD code reader (diagnostic tool)",
        "correct": true
       },
       {
        "fr": "Un thermomètre",
        "en": "A thermometer",
        "correct": false
       },
       {
        "fr": "Une balance de cuisine",
        "en": "A kitchen scale",
        "correct": false
       },
       {
        "fr": "Un chronomètre seul",
        "en": "A stopwatch alone",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce qu'un code de diagnostic (DTC)?",
      "en": "What is a diagnostic trouble code (DTC)?",
      "choices": [
       {
        "fr": "Un code qui indique un problème détecté par l'ordinateur du véhicule",
        "en": "A code that indicates a problem detected by the vehicle's computer",
        "correct": true
       },
       {
        "fr": "Un code de sécurité pour démarrer le véhicule",
        "en": "A security code for starting the vehicle",
        "correct": false
       },
       {
        "fr": "Un numéro de série du véhicule",
        "en": "The vehicle's serial number",
        "correct": false
       },
       {
        "fr": "Une facture de réparation",
        "en": "A repair invoice",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un voyant allumé au tableau de bord est presque toujours un simple bogue électronique sans lien avec un code de diagnostic.",
      "en": "A dashboard warning light is almost always just an electronic glitch unrelated to any diagnostic code.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi ne pas se fier uniquement au code de diagnostic pour conclure un diagnostic final?",
      "en": "Why not rely solely on the diagnostic code to reach a final diagnosis?",
      "choices": [
       {
        "fr": "Un code indique souvent un symptôme général, pas nécessairement la cause exacte du problème",
        "en": "A code often indicates a general symptom, not necessarily the exact cause of the problem",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Le code de diagnostic donne toujours la réponse complète",
        "en": "The diagnostic code always gives the complete answer",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire après avoir corrigé un problème identifié par un code de diagnostic?",
      "en": "What should you do after fixing a problem identified by a diagnostic code?",
      "choices": [
       {
        "fr": "Effacer le code et vérifier qu'il ne revient pas après un essai routier",
        "en": "Clearing the code and checking it doesn't return after a road test",
        "correct": true
       },
       {
        "fr": "Ignorer le code sans le vérifier de nouveau",
        "en": "Ignoring the code without checking it again",
        "correct": false
       },
       {
        "fr": "Ne rien faire de plus",
        "en": "Doing nothing further",
        "correct": false
       },
       {
        "fr": "Supposer que le problème est toujours résolu sans vérification",
        "en": "Assuming the problem is always resolved with no check",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système commandé par ordinateur peut inclure plusieurs modules qui communiquent entre eux.",
      "en": "A computer-controlled system can include several modules that communicate with each other.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Plusieurs codes de diagnostic apparaissent en même temps sur un véhicule. Quelle est la bonne démarche?",
      "en": "Several diagnostic codes appear at the same time on a vehicle. What is the correct approach?",
      "choices": [
       {
        "fr": "Analyser les codes de façon méthodique pour identifier une cause commune possible",
        "en": "Methodically analyzing the codes to identify a possible common cause",
        "correct": true
       },
       {
        "fr": "Traiter chaque code indépendamment sans réflexion globale",
        "en": "Treating each code independently with no overall thinking",
        "correct": false
       },
       {
        "fr": "Ignorer tous les codes sauf un au hasard",
        "en": "Ignoring all codes except one at random",
        "correct": false
       },
       {
        "fr": "Remplacer toutes les pièces mentionnées sans vérification",
        "en": "Replacing all mentioned parts with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la compréhension des systèmes commandés par ordinateur est-elle de plus en plus essentielle en mécanique automobile?",
      "en": "Why is understanding computer-controlled systems increasingly essential in automotive mechanics?",
      "choices": [
       {
        "fr": "Les véhicules modernes intègrent de nombreux systèmes électroniques interconnectés",
        "en": "Modern vehicles integrate many interconnected electronic systems",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les véhicules modernes n'utilisent jamais l'électronique",
        "en": "Modern vehicles never use electronics",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des systèmes de base commandés par ordinateur est une fondation essentielle pour les diagnostics plus avancés.",
      "en": "Mastering basic computer-controlled systems is an essential foundation for more advanced diagnostics.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca14",
  "order": 14,
  "code": "343536",
  "hours": 90,
  "title_fr": "Vérification de systèmes de transmission de pouvoir",
  "title_en": "Powertrain System Check",
  "icon": "🔗",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel composant transmet la puissance du moteur aux roues?",
      "en": "What component transmits power from the engine to the wheels?",
      "choices": [
       {
        "fr": "La transmission et l'arbre de transmission",
        "en": "The transmission and driveshaft",
        "correct": true
       },
       {
        "fr": "Le système audio",
        "en": "The audio system",
        "correct": false
       },
       {
        "fr": "Le climatiseur",
        "en": "The air conditioner",
        "correct": false
       },
       {
        "fr": "Les phares",
        "en": "The headlights",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier le niveau et l'état du liquide de transmission?",
      "en": "Why check the transmission fluid's level and condition?",
      "choices": [
       {
        "fr": "Pour assurer un fonctionnement fluide et prévenir l'usure prématurée",
        "en": "To ensure smooth operation and prevent premature wear",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Pour suivre une liste de contrôle standard de l'atelier",
        "en": "To follow the shop's standard checklist",
        "correct": false
       },
       {
        "fr": "Le liquide de transmission n'a jamais besoin d'être vérifié",
        "en": "Transmission fluid never needs to be checked",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Des à-coups lors des changements de vitesse sont normaux et ne nécessitent jamais de vérification.",
      "en": "Jerking during gear changes is normal and never requires inspection.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi effectuer un essai routier lors de la vérification d'une transmission?",
      "en": "Why perform a road test when checking a transmission?",
      "choices": [
       {
        "fr": "Pour observer le comportement réel de la transmission en conditions de conduite",
        "en": "To observe the transmission's actual behaviour under driving conditions",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier d'entretien, sans lien avec la performance",
        "en": "It only serves to follow the maintenance schedule, unrelated to performance",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "Un essai routier ne sert qu'à évaluer le confort de conduite, jamais la mécanique",
        "en": "A road test is only useful for assessing driving comfort, never mechanics",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel symptôme peut indiquer un problème avec un joint homocinétique (CV)?",
      "en": "What symptom can indicate a problem with a CV joint?",
      "choices": [
       {
        "fr": "Un bruit de cliquetis en virage",
        "en": "A clicking noise when turning",
        "correct": true
       },
       {
        "fr": "Les symptômes observables sont presque toujours liés à l'usure normale des pneus",
        "en": "Observable symptoms are almost always related to normal tire wear",
        "correct": false
       },
       {
        "fr": "Une amélioration de l'accélération",
        "en": "Improved acceleration",
        "correct": false
       },
       {
        "fr": "Une réduction de la consommation de carburant",
        "en": "A reduction in fuel consumption",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La vérification d'une transmission automatique diffère de celle d'une transmission manuelle.",
      "en": "Checking an automatic transmission differs from checking a manual transmission.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une transmission montre un symptôme intermittent difficile à reproduire. Quelle est une bonne pratique?",
      "en": "A transmission shows an intermittent symptom that's hard to reproduce. What is a good practice?",
      "choices": [
       {
        "fr": "Recréer les conditions décrites par le client pour tenter d'observer le symptôme",
        "en": "Recreating the conditions described by the client to try to observe the symptom",
        "correct": true
       },
       {
        "fr": "Ignorer le symptôme car il n'est pas reproductible",
        "en": "Ignoring the symptom since it's not reproducible",
        "correct": false
       },
       {
        "fr": "Remplacer la transmission au hasard",
        "en": "Replacing the transmission at random",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le diagnostic des systèmes de transmission de pouvoir exige-t-il une bonne compréhension mécanique et parfois électronique?",
      "en": "Why does diagnosing powertrain systems require good mechanical and sometimes electronic understanding?",
      "choices": [
       {
        "fr": "Les transmissions modernes combinent souvent des composants mécaniques et des commandes électroniques",
        "en": "Modern transmissions often combine mechanical components with electronic controls",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Les transmissions n'ont jamais de composants électroniques",
        "en": "Transmissions never have electronic components",
        "correct": false
       },
       {
        "fr": "Pour suivre une liste de vérification standardisée de l'atelier",
        "en": "To follow the shop's standardized checklist",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un diagnostic précis des systèmes de transmission évite des réparations inutiles et coûteuses.",
      "en": "An accurate powertrain system diagnosis avoids unnecessary and costly repairs.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca15",
  "order": 15,
  "code": "343547",
  "hours": 105,
  "title_fr": "Réparation de systèmes de transmission de pouvoir",
  "title_en": "Powertrain System Repair",
  "icon": "🔧",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une réparation courante liée à la transmission?",
      "en": "What is a common transmission-related repair?",
      "choices": [
       {
        "fr": "Le remplacement du liquide de transmission ou d'un joint homocinétique",
        "en": "Replacing the transmission fluid or a CV joint",
        "correct": true
       },
       {
        "fr": "Le remplacement des sièges",
        "en": "Replacing the seats",
        "correct": false
       },
       {
        "fr": "La réparation du système audio",
        "en": "Repairing the audio system",
        "correct": false
       },
       {
        "fr": "Le remplacement des essuie-glaces",
        "en": "Replacing the wiper blades",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi utiliser le type exact de liquide de transmission spécifié par le fabricant?",
      "en": "Why use the exact type of transmission fluid specified by the manufacturer?",
      "choices": [
       {
        "fr": "Un liquide inapproprié peut endommager la transmission",
        "en": "An inappropriate fluid can damage the transmission",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Tous les liquides de transmission sont identiques",
        "en": "All transmission fluids are identical",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un essai routier après une réparation de transmission est optionnel si le mécanicien est expérimenté.",
      "en": "A road test after a transmission repair is optional if the mechanic is experienced.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certaines réparations de transmission nécessitent-elles des outils spécialisés?",
      "en": "Why do some transmission repairs require specialized tools?",
      "choices": [
       {
        "fr": "La complexité et la précision requises pour ces composants l'exigent",
        "en": "The complexity and precision required for these components demand it",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "Aucun outil spécialisé n'est jamais nécessaire",
        "en": "No specialized tool is ever necessary",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si une pièce de transmission remplacée ne résout pas complètement le symptôme initial?",
      "en": "What should you do if a replaced transmission part doesn't fully resolve the initial symptom?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier une cause additionnelle",
        "en": "Resuming the diagnosis to identify an additional cause",
        "correct": true
       },
       {
        "fr": "Livrer le véhicule tel quel sans vérification supplémentaire",
        "en": "Delivering the vehicle as-is with no further check",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme restant",
        "en": "Ignoring the remaining symptom",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La réparation de systèmes de transmission de pouvoir peut impliquer un travail précis sur des composants internes complexes.",
      "en": "Repairing powertrain systems can involve precise work on complex internal components.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation de transmission complexe nécessite le démontage complet de l'unité. Quelle est la bonne pratique?",
      "en": "A complex transmission repair requires completely disassembling the unit. What is the correct practice?",
      "choices": [
       {
        "fr": "Suivre rigoureusement la procédure du fabricant et documenter chaque étape",
        "en": "Rigorously following the manufacturer's procedure and documenting each step",
        "correct": true
       },
       {
        "fr": "Improviser sans suivre de procédure précise",
        "en": "Improvising with no precise procedure",
        "correct": false
       },
       {
        "fr": "Ignorer l'ordre de démontage recommandé",
        "en": "Ignoring the recommended disassembly order",
        "correct": false
       },
       {
        "fr": "Ne rien documenter durant le processus",
        "en": "Documenting nothing during the process",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une réparation de transmission mal exécutée peut-elle avoir des conséquences particulièrement coûteuses?",
      "en": "Why can a poorly executed transmission repair have particularly costly consequences?",
      "choices": [
       {
        "fr": "Les transmissions sont des composants coûteux et complexes à remplacer entièrement",
        "en": "Transmissions are costly, complex components to replace entirely",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les transmissions sont toujours faciles et peu coûteuses à réparer",
        "en": "Transmissions are always easy and inexpensive to repair",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rigueur et la précision sont particulièrement critiques en réparation de systèmes de transmission de pouvoir.",
      "en": "Rigour and precision are particularly critical in powertrain system repair.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca16",
  "order": 16,
  "code": "343555",
  "hours": 75,
  "title_fr": "Vérification de systèmes de démarrage, de charge et d'accessoires électromagnétiques",
  "title_en": "Starting, Charging and Electromagnetic Accessory System Check",
  "icon": "🔋",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel composant permet de démarrer le moteur d'un véhicule?",
      "en": "What component starts a vehicle's engine?",
      "choices": [
       {
        "fr": "Le démarreur",
        "en": "The starter",
        "correct": true
       },
       {
        "fr": "Le climatiseur",
        "en": "The air conditioner",
        "correct": false
       },
       {
        "fr": "La radio",
        "en": "The radio",
        "correct": false
       },
       {
        "fr": "Les essuie-glaces",
        "en": "The wipers",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel composant recharge la batterie pendant que le moteur tourne?",
      "en": "What component recharges the battery while the engine runs?",
      "choices": [
       {
        "fr": "L'alternateur",
        "en": "The alternator",
        "correct": true
       },
       {
        "fr": "Le radiateur",
        "en": "The radiator",
        "correct": false
       },
       {
        "fr": "Le filtre à air",
        "en": "The air filter",
        "correct": false
       },
       {
        "fr": "Le pare-chocs",
        "en": "The bumper",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une batterie faible après une longue conduite est toujours causée par la batterie elle-même, jamais par le système de charge.",
      "en": "A weak battery after a long drive is always caused by the battery itself, never by the charging system.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi tester la tension de la batterie et de l'alternateur ensemble lors d'un diagnostic de démarrage?",
      "en": "Why test the battery and alternator voltage together during a starting diagnosis?",
      "choices": [
       {
        "fr": "Pour déterminer si le problème vient de la batterie, de l'alternateur ou d'un autre composant",
        "en": "To determine whether the problem comes from the battery, the alternator or another component",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "Un seul test suffit toujours à identifier la cause",
        "en": "A single test is always enough to identify the cause",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel symptôme peut indiquer un problème avec le démarreur?",
      "en": "What symptom can indicate a problem with the starter?",
      "choices": [
       {
        "fr": "Un clic sans que le moteur ne tourne lors du démarrage",
        "en": "A click with no engine cranking when starting",
        "correct": true
       },
       {
        "fr": "Les symptômes observables dépendent uniquement du style de conduite",
        "en": "Observable symptoms depend only on driving style",
        "correct": false
       },
       {
        "fr": "Une amélioration soudaine du démarrage",
        "en": "A sudden improvement in starting",
        "correct": false
       },
       {
        "fr": "Une réduction de la consommation de carburant",
        "en": "A reduction in fuel consumption",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les accessoires électromagnétiques (comme certains relais) peuvent aussi affecter le démarrage d'un véhicule.",
      "en": "Electromagnetic accessories (like certain relays) can also affect a vehicle's starting.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un véhicule démarre difficilement seulement par temps froid. Quelle est une cause possible?",
      "en": "A vehicle starts with difficulty only in cold weather. What is a possible cause?",
      "choices": [
       {
        "fr": "Une batterie affaiblie dont la capacité diminue davantage par temps froid",
        "en": "A weakened battery whose capacity decreases further in cold weather",
        "correct": true
       },
       {
        "fr": "La couleur du véhicule",
        "en": "The vehicle's colour",
        "correct": false
       },
       {
        "fr": "Le prix de l'essence",
        "en": "The price of gas",
        "correct": false
       },
       {
        "fr": "La cause est généralement impossible à confirmer sans remplacer toutes les pièces",
        "en": "The cause is generally impossible to confirm without replacing all the parts",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi un diagnostic méthodique du système de démarrage et de charge est-il important avant de remplacer des pièces?",
      "en": "Why is a methodical diagnosis of the starting and charging system important before replacing parts?",
      "choices": [
       {
        "fr": "Pour éviter de remplacer inutilement une pièce qui n'est pas en cause",
        "en": "To avoid unnecessarily replacing a part that isn't at fault",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Le remplacement de pièces au hasard est toujours la meilleure approche",
        "en": "Randomly replacing parts is always the best approach",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La vérification des systèmes de démarrage et de charge n'a aucune influence sur le nombre de pièces remplacées inutilement.",
      "en": "Checking the starting and charging systems has no influence on the number of unnecessarily replaced parts.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "meca17",
  "order": 17,
  "code": "343565",
  "hours": 75,
  "title_fr": "Réparation de systèmes de démarrage, de charge et d'accessoires électromagnétiques",
  "title_en": "Starting, Charging and Electromagnetic Accessory System Repair",
  "icon": "🔋",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une réparation courante liée au système de démarrage?",
      "en": "What is a common repair related to the starting system?",
      "choices": [
       {
        "fr": "Le remplacement d'un démarreur ou d'une batterie défectueuse",
        "en": "Replacing a defective starter or battery",
        "correct": true
       },
       {
        "fr": "Le remplacement des pneus",
        "en": "Replacing the tires",
        "correct": false
       },
       {
        "fr": "La réparation du moteur",
        "en": "Repairing the engine",
        "correct": false
       },
       {
        "fr": "Le remplacement des freins",
        "en": "Replacing the brakes",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier les bornes de la batterie lors d'une réparation liée au démarrage?",
      "en": "Why check the battery terminals during a starting-related repair?",
      "choices": [
       {
        "fr": "La corrosion ou un mauvais contact peuvent causer des problèmes de démarrage",
        "en": "Corrosion or poor contact can cause starting problems",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "Les bornes de la batterie n'ont jamais besoin d'être vérifiées",
        "en": "Battery terminals never need to be checked",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un alternateur neuf n'a pas besoin d'être testé après l'installation puisqu'il fonctionne toujours correctement dès la sortie d'usine.",
      "en": "A new alternator doesn't need to be tested after installation since it always works correctly right out of the factory.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certains véhicules nécessitent-ils une procédure spéciale après le remplacement de la batterie?",
      "en": "Why do some vehicles require a special procedure after replacing the battery?",
      "choices": [
       {
        "fr": "Pour réinitialiser ou reprogrammer certains modules électroniques",
        "en": "To reset or reprogram certain electronic modules",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "Aucune procédure spéciale n'est jamais nécessaire",
        "en": "No special procedure is ever necessary",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir remplacé un démarreur?",
      "en": "What should be checked after replacing a starter?",
      "choices": [
       {
        "fr": "Le bon fonctionnement du démarrage à plusieurs reprises",
        "en": "Proper starting function through several attempts",
        "correct": true
       },
       {
        "fr": "Uniquement le nom du mécanicien qui a fait l'inspection",
        "en": "Only the name of the mechanic who did the inspection",
        "correct": false
       },
       {
        "fr": "Uniquement l'âge approximatif du démarreur",
        "en": "Only the starter's approximate age",
        "correct": false
       },
       {
        "fr": "Uniquement le modèle du véhicule",
        "en": "Only the vehicle's model",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un relais défectueux peut affecter le fonctionnement d'accessoires électromagnétiques comme le klaxon ou les phares.",
      "en": "A defective relay can affect electromagnetic accessories like the horn or the headlights.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation de système de charge ne règle pas complètement le symptôme initial du client. Quelle est la bonne pratique?",
      "en": "A charging system repair doesn't completely resolve the client's initial symptom. What is the correct practice?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier une cause additionnelle",
        "en": "Resuming the diagnosis to identify an additional cause",
        "correct": true
       },
       {
        "fr": "Livrer le véhicule tel quel sans vérification supplémentaire",
        "en": "Delivering the vehicle as-is with no further check",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme restant",
        "en": "Ignoring the remaining symptom",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la réparation des systèmes de démarrage et de charge exige-t-elle une attention particulière à la sécurité électrique?",
      "en": "Why does repairing starting and charging systems require particular attention to electrical safety?",
      "choices": [
       {
        "fr": "Les courants élevés impliqués peuvent présenter des risques de brûlure ou de court-circuit",
        "en": "The high currents involved can pose risks of burns or short circuits",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Il n'y a jamais de risque électrique en mécanique automobile",
        "en": "There is never an electrical risk in automotive mechanics",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rigueur dans la réparation des systèmes de démarrage et de charge assure la fiabilité électrique du véhicule.",
      "en": "Rigour in repairing starting and charging systems ensures the vehicle's electrical reliability.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca18",
  "order": 18,
  "code": "343573",
  "hours": 45,
  "title_fr": "Vérification de systèmes liés à la température du moteur et de l'habitacle",
  "title_en": "Engine and Cabin Temperature System Check",
  "icon": "🌡️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel système régule la température du moteur?",
      "en": "What system regulates engine temperature?",
      "choices": [
       {
        "fr": "Le système de refroidissement",
        "en": "The cooling system",
        "correct": true
       },
       {
        "fr": "Le système audio",
        "en": "The audio system",
        "correct": false
       },
       {
        "fr": "Le système d'éclairage",
        "en": "The lighting system",
        "correct": false
       },
       {
        "fr": "Le système de freinage",
        "en": "The braking system",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier le niveau de liquide de refroidissement régulièrement?",
      "en": "Why regularly check the coolant level?",
      "choices": [
       {
        "fr": "Pour prévenir la surchauffe du moteur",
        "en": "To prevent engine overheating",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier fixé par le fabricant",
        "en": "To follow the manufacturer's schedule",
        "correct": false
       },
       {
        "fr": "Le niveau de liquide de refroidissement n'a jamais besoin d'être vérifié",
        "en": "The coolant level never needs to be checked",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une température moteur légèrement élevée est sans conséquence et ne doit jamais être vérifiée.",
      "en": "A slightly elevated engine temperature is harmless and should never be checked.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi tester le fonctionnement du thermostat lors d'un diagnostic de surchauffe?",
      "en": "Why test the thermostat's operation when diagnosing overheating?",
      "choices": [
       {
        "fr": "Un thermostat bloqué peut empêcher une bonne circulation du liquide de refroidissement",
        "en": "A stuck thermostat can prevent proper coolant circulation",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier d'entretien, sans lien avec la performance",
        "en": "It only serves to follow the maintenance schedule, unrelated to performance",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "Le thermostat n'affecte jamais la température du moteur",
        "en": "The thermostat never affects engine temperature",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel système régule la température de l'habitacle d'un véhicule?",
      "en": "What system regulates a vehicle's cabin temperature?",
      "choices": [
       {
        "fr": "Le système de climatisation et de chauffage",
        "en": "The air conditioning and heating system",
        "correct": true
       },
       {
        "fr": "Le système de freinage",
        "en": "The braking system",
        "correct": false
       },
       {
        "fr": "Le système d'échappement",
        "en": "The exhaust system",
        "correct": false
       },
       {
        "fr": "Le système de direction",
        "en": "The steering system",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un ventilateur de refroidissement défectueux peut causer une surchauffe, surtout à basse vitesse ou à l'arrêt.",
      "en": "A faulty cooling fan can cause overheating, especially at low speed or when stopped.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un moteur surchauffe uniquement lors de conduite en ville, jamais sur l'autoroute. Quelle est une cause possible?",
      "en": "An engine overheats only when driving in the city, never on the highway. What is a possible cause?",
      "choices": [
       {
        "fr": "Un problème avec le ventilateur de refroidissement, moins sollicité à haute vitesse",
        "en": "A problem with the cooling fan, which is less needed at high speed",
        "correct": true
       },
       {
        "fr": "La couleur du véhicule",
        "en": "The vehicle's colour",
        "correct": false
       },
       {
        "fr": "Le prix de l'essence",
        "en": "The price of gas",
        "correct": false
       },
       {
        "fr": "La cause est presque toujours liée à l'âge du véhicule, peu importe les symptômes",
        "en": "The cause is almost always related to the vehicle's age, regardless of symptoms",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi un diagnostic précis des systèmes liés à la température est-il important avant une réparation majeure?",
      "en": "Why is an accurate diagnosis of temperature-related systems important before a major repair?",
      "choices": [
       {
        "fr": "Pour éviter de remplacer inutilement des pièces coûteuses qui ne sont pas en cause",
        "en": "To avoid unnecessarily replacing costly parts that aren't at fault",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Le remplacement de pièces au hasard est toujours la meilleure approche",
        "en": "Randomly replacing parts is always the best approach",
        "correct": false
       },
       {
        "fr": "Pour suivre une liste de vérification standardisée de l'atelier",
        "en": "To follow the shop's standardized checklist",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une surchauffe non traitée peut causer des dommages sérieux et coûteux au moteur.",
      "en": "Untreated overheating can cause serious and costly engine damage.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca19",
  "order": 19,
  "code": "343583",
  "hours": 45,
  "title_fr": "Entretien et réparation des systèmes liés à la température du moteur et de l'habitacle",
  "title_en": "Engine and Cabin Temperature System Maintenance and Repair",
  "icon": "❄️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une tâche courante d'entretien du système de refroidissement?",
      "en": "What is a common cooling system maintenance task?",
      "choices": [
       {
        "fr": "Le remplacement du liquide de refroidissement selon l'intervalle recommandé",
        "en": "Replacing the coolant according to the recommended interval",
        "correct": true
       },
       {
        "fr": "Le remplacement des pneus",
        "en": "Replacing the tires",
        "correct": false
       },
       {
        "fr": "La réparation du système audio",
        "en": "Repairing the audio system",
        "correct": false
       },
       {
        "fr": "Le remplacement des essuie-glaces",
        "en": "Replacing the wiper blades",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi utiliser le type exact de liquide de refroidissement spécifié par le fabricant?",
      "en": "Why use the exact type of coolant specified by the manufacturer?",
      "choices": [
       {
        "fr": "Un liquide inapproprié peut endommager le système ou causer une corrosion",
        "en": "An inappropriate fluid can damage the system or cause corrosion",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Tous les liquides de refroidissement sont identiques",
        "en": "All coolants are identical",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier fixé par le fabricant",
        "en": "To follow the manufacturer's schedule",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "N'importe quel type de réfrigérant peut être utilisé pour recharger un système de climatisation, tant que la quantité est suffisante.",
      "en": "Any type of refrigerant can be used to recharge an air conditioning system, as long as the quantity is sufficient.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi purger l'air d'un système de refroidissement après une réparation?",
      "en": "Why bleed air from a cooling system after a repair?",
      "choices": [
       {
        "fr": "De l'air emprisonné peut réduire l'efficacité du refroidissement",
        "en": "Trapped air can reduce cooling efficiency",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "L'air n'affecte jamais le système de refroidissement",
        "en": "Air never affects the cooling system",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir réparé une fuite dans le système de refroidissement?",
      "en": "What should be checked after repairing a leak in the cooling system?",
      "choices": [
       {
        "fr": "L'absence de nouvelles fuites et le maintien d'une pression normale",
        "en": "The absence of new leaks and normal pressure being maintained",
        "correct": true
       },
       {
        "fr": "Uniquement le kilométrage affiché au tableau de bord",
        "en": "Only the mileage shown on the dashboard",
        "correct": false
       },
       {
        "fr": "Uniquement la marque du liquide utilisé",
        "en": "Only the brand of fluid used",
        "correct": false
       },
       {
        "fr": "Uniquement la marque des pneus installés",
        "en": "Only the brand of the installed tires",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes de climatisation modernes utilisent des réfrigérants spécifiques qui doivent être manipulés selon des normes environnementales.",
      "en": "Modern air conditioning systems use specific refrigerants that must be handled according to environmental standards.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation du système de refroidissement ne règle pas complètement le symptôme initial du client. Quelle est la bonne pratique?",
      "en": "A cooling system repair doesn't completely resolve the client's initial symptom. What is the correct practice?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier une cause additionnelle",
        "en": "Resuming the diagnosis to identify an additional cause",
        "correct": true
       },
       {
        "fr": "Livrer le véhicule tel quel sans vérification supplémentaire",
        "en": "Delivering the vehicle as-is with no further check",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme restant",
        "en": "Ignoring the remaining symptom",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la manipulation des réfrigérants de climatisation est-elle réglementée strictement?",
      "en": "Why is the handling of air conditioning refrigerants strictly regulated?",
      "choices": [
       {
        "fr": "Pour protéger l'environnement contre les émissions de gaz nocifs",
        "en": "To protect the environment from harmful gas emissions",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les réfrigérants ne présentent jamais de risque",
        "en": "Refrigerants never pose a risk",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure interne sans lien direct avec la réparation",
        "en": "To follow an internal procedure unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'entretien des systèmes de température n'a pratiquement aucun effet sur la durée de vie du véhicule.",
      "en": "Maintaining temperature systems has almost no effect on the vehicle's lifespan.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "meca20",
  "order": 20,
  "code": "343593",
  "hours": 45,
  "title_fr": "Vérification de systèmes de sécurité actifs et passifs",
  "title_en": "Active and Passive Safety System Check",
  "icon": "🛡️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un système de sécurité actif dans un véhicule?",
      "en": "What is an active safety system in a vehicle?",
      "choices": [
       {
        "fr": "Un système qui aide à prévenir un accident, comme les freins antiblocage (ABS)",
        "en": "A system that helps prevent an accident, like anti-lock brakes (ABS)",
        "correct": true
       },
       {
        "fr": "Un système qui n'a aucune fonction de sécurité",
        "en": "A system with no safety function at all",
        "correct": false
       },
       {
        "fr": "Le système audio",
        "en": "The audio system",
        "correct": false
       },
       {
        "fr": "Le système de climatisation",
        "en": "The air conditioning system",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce qu'un système de sécurité passif dans un véhicule?",
      "en": "What is a passive safety system in a vehicle?",
      "choices": [
       {
        "fr": "Un système qui protège les occupants lors d'un accident, comme les coussins gonflables",
        "en": "A system that protects occupants during an accident, like airbags",
        "correct": true
       },
       {
        "fr": "Un système qui empêche toujours tout accident",
        "en": "A system that always prevents any accident",
        "correct": false
       },
       {
        "fr": "Le système d'éclairage uniquement",
        "en": "Only the lighting system",
        "correct": false
       },
       {
        "fr": "Le système de divertissement",
        "en": "The entertainment system",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un voyant de coussin gonflable allumé est habituellement un faux témoin sans conséquence sur la sécurité.",
      "en": "An illuminated airbag warning light is usually a false indicator with no safety consequence.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier le système de freins antiblocage (ABS) lors d'une inspection de sécurité?",
      "en": "Why check the anti-lock braking system (ABS) during a safety inspection?",
      "choices": [
       {
        "fr": "Il aide à maintenir le contrôle du véhicule lors d'un freinage d'urgence",
        "en": "It helps maintain vehicle control during emergency braking",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "L'ABS n'a jamais d'impact sur la sécurité",
        "en": "ABS never has an impact on safety",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on faire avec prudence lors de la manipulation de composants liés aux coussins gonflables?",
      "en": "What must be handled carefully when working with airbag-related components?",
      "choices": [
       {
        "fr": "Suivre rigoureusement les procédures de sécurité du fabricant en raison du risque de déclenchement accidentel",
        "en": "Rigorously following the manufacturer's safety procedures due to the risk of accidental deployment",
        "correct": true
       },
       {
        "fr": "Aucune précaution particulière n'est nécessaire",
        "en": "No particular precaution is necessary",
        "correct": false
       },
       {
        "fr": "Les manipuler comme n'importe quel autre composant",
        "en": "Handling them like any other component",
        "correct": false
       },
       {
        "fr": "Ignorer les procédures de sécurité",
        "en": "Ignoring the safety procedures",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes de sécurité actifs et passifs travaillent souvent ensemble pour protéger les occupants du véhicule.",
      "en": "Active and passive safety systems often work together to protect the vehicle's occupants.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un voyant de système de sécurité reste allumé même après une vérification de base. Quelle est la bonne pratique?",
      "en": "A safety system warning light stays on even after a basic check. What is the correct practice?",
      "choices": [
       {
        "fr": "Effectuer un diagnostic approfondi avec les outils appropriés avant de conclure",
        "en": "Performing an in-depth diagnosis with the appropriate tools before concluding",
        "correct": true
       },
       {
        "fr": "Ignorer le voyant si le véhicule semble fonctionner normalement",
        "en": "Ignoring the light if the vehicle seems to function normally",
        "correct": false
       },
       {
        "fr": "Débrancher le voyant sans régler le problème",
        "en": "Disconnecting the light without fixing the problem",
        "correct": false
       },
       {
        "fr": "Remplacer des pièces au hasard",
        "en": "Replacing parts at random",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la vérification des systèmes de sécurité est-elle particulièrement critique dans le métier de mécanicien?",
      "en": "Why is checking safety systems particularly critical in the mechanic trade?",
      "choices": [
       {
        "fr": "Une défaillance non détectée peut avoir des conséquences graves pour les occupants du véhicule",
        "en": "An undetected failure can have serious consequences for the vehicle's occupants",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Les systèmes de sécurité ne présentent jamais de risque en cas de défaillance",
        "en": "Safety systems never pose a risk if they fail",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre habituel des vérifications de l'atelier",
        "en": "To follow the shop's usual inspection order",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rigueur dans la vérification des systèmes de sécurité actifs et passifs est une responsabilité professionnelle majeure du mécanicien.",
      "en": "Rigour in checking active and passive safety systems is a major professional responsibility for the mechanic.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca21",
  "order": 21,
  "code": "343604",
  "hours": 60,
  "title_fr": "Réparation de systèmes de sécurité actifs et passifs",
  "title_en": "Active and Passive Safety System Repair",
  "icon": "🛡️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une réparation courante liée aux systèmes de freinage antiblocage?",
      "en": "What is a common repair related to anti-lock braking systems?",
      "choices": [
       {
        "fr": "Le remplacement d'un capteur de vitesse de roue défectueux",
        "en": "Replacing a faulty wheel speed sensor",
        "correct": true
       },
       {
        "fr": "Le remplacement des sièges",
        "en": "Replacing the seats",
        "correct": false
       },
       {
        "fr": "La réparation du système audio",
        "en": "Repairing the audio system",
        "correct": false
       },
       {
        "fr": "Le remplacement des essuie-glaces",
        "en": "Replacing the wiper blades",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi suivre rigoureusement les procédures du fabricant lors d'une réparation liée aux coussins gonflables?",
      "en": "Why rigorously follow the manufacturer's procedures during an airbag-related repair?",
      "choices": [
       {
        "fr": "Pour éviter un déclenchement accidentel dangereux",
        "en": "To avoid a dangerous accidental deployment",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "Les procédures ne sont jamais nécessaires pour ce type de réparation",
        "en": "Procedures are never necessary for this type of repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une vérification rigoureuse après une réparation de système de sécurité est utile mais pas essentielle si le travail semble bien fait.",
      "en": "A rigorous check after a safety system repair is helpful but not essential if the work looks well done.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certains systèmes de sécurité nécessitent-ils une calibration après une réparation?",
      "en": "Why do some safety systems require calibration after a repair?",
      "choices": [
       {
        "fr": "Pour assurer leur bon fonctionnement selon les spécifications du fabricant",
        "en": "To ensure proper operation according to the manufacturer's specifications",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "La calibration n'est jamais nécessaire",
        "en": "Calibration is never necessary",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir réparé un système de freinage antiblocage?",
      "en": "What should be checked after repairing an anti-lock braking system?",
      "choices": [
       {
        "fr": "L'absence de codes d'erreur et le bon fonctionnement du système",
        "en": "The absence of error codes and the system's proper operation",
        "correct": true
       },
       {
        "fr": "Seulement la date du dernier changement d'huile",
        "en": "Only the date of the last oil change",
        "correct": false
       },
       {
        "fr": "Uniquement le bruit émis par les freins",
        "en": "Only the noise made by the brakes",
        "correct": false
       },
       {
        "fr": "Uniquement le modèle du véhicule",
        "en": "Only the vehicle's model",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le remplacement d'un coussin gonflable déployé doit toujours suivre la procédure exacte du fabricant.",
      "en": "Replacing a deployed airbag must always follow the manufacturer's exact procedure.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation de système de sécurité laisse un voyant d'avertissement allumé. Quelle est la bonne pratique?",
      "en": "A safety system repair leaves a warning light on. What is the correct practice?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier la cause avant de remettre le véhicule au client",
        "en": "Resuming the diagnosis to identify the cause before returning the vehicle to the client",
        "correct": true
       },
       {
        "fr": "Livrer le véhicule malgré le voyant allumé",
        "en": "Delivering the vehicle despite the light being on",
        "correct": false
       },
       {
        "fr": "Débrancher le voyant sans régler le problème",
        "en": "Disconnecting the light without fixing the problem",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la réparation des systèmes de sécurité comporte-t-elle une responsabilité légale et éthique particulière?",
      "en": "Why does repairing safety systems carry a particular legal and ethical responsibility?",
      "choices": [
       {
        "fr": "Une erreur peut mettre directement en danger la vie des occupants du véhicule",
        "en": "An error can directly endanger the lives of the vehicle's occupants",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les systèmes de sécurité ne présentent jamais de risque",
        "en": "Safety systems never pose a risk",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La rigueur et l'honnêteté professionnelle sont essentielles lors de la réparation de systèmes de sécurité actifs et passifs.",
      "en": "Rigour and professional honesty are essential when repairing active and passive safety systems.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca22",
  "order": 22,
  "code": "343614",
  "hours": 60,
  "title_fr": "Entretien général d'un véhicule automobile",
  "title_en": "General Vehicle Maintenance",
  "icon": "🧰",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qui fait partie d'un entretien général courant d'un véhicule?",
      "en": "What is part of routine general vehicle maintenance?",
      "choices": [
       {
        "fr": "La vidange d'huile et le remplacement des filtres selon l'intervalle recommandé",
        "en": "Oil changes and filter replacement per the recommended interval",
        "correct": true
       },
       {
        "fr": "Le remplacement du système audio",
        "en": "Replacing the audio system",
        "correct": false
       },
       {
        "fr": "La peinture de la carrosserie",
        "en": "Painting the body",
        "correct": false
       },
       {
        "fr": "Le remplacement des sièges",
        "en": "Replacing the seats",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi suivre le calendrier d'entretien recommandé par le fabricant?",
      "en": "Why follow the maintenance schedule recommended by the manufacturer?",
      "choices": [
       {
        "fr": "Pour prévenir les pannes et prolonger la durée de vie du véhicule",
        "en": "To prevent breakdowns and extend the vehicle's lifespan",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier fixé par le fabricant",
        "en": "To follow the manufacturer's schedule",
        "correct": false
       },
       {
        "fr": "Le calendrier d'entretien n'a jamais d'utilité",
        "en": "The maintenance schedule is never useful",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'entretien général régulier sert surtout à respecter le calendrier du fabricant et rarement à repérer des problèmes réels.",
      "en": "Regular general maintenance mostly serves to follow the manufacturer's schedule and rarely helps catch real problems.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier plusieurs systèmes différents lors d'un entretien général plutôt qu'un seul?",
      "en": "Why check several different systems during general maintenance rather than just one?",
      "choices": [
       {
        "fr": "Pour offrir une vue d'ensemble de l'état du véhicule et prévenir des problèmes futurs",
        "en": "To provide an overview of the vehicle's condition and prevent future problems",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier fixé par le fabricant",
        "en": "To follow the manufacturer's schedule",
        "correct": false
       },
       {
        "fr": "Un seul système suffit toujours",
        "en": "A single system is always enough",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un entretien général révèle un problème inattendu chez un véhicule?",
      "en": "What should you do if general maintenance reveals an unexpected problem with a vehicle?",
      "choices": [
       {
        "fr": "Informer le client et discuter des options de réparation possibles",
        "en": "Informing the client and discussing the possible repair options",
        "correct": true
       },
       {
        "fr": "Réparer sans en informer le client",
        "en": "Repairing without informing the client",
        "correct": false
       },
       {
        "fr": "Ignorer le problème découvert",
        "en": "Ignoring the discovered problem",
        "correct": false
       },
       {
        "fr": "Cacher l'information au client",
        "en": "Hiding the information from the client",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'entretien général peut inclure la vérification des niveaux de fluides, des freins, des pneus et des lumières.",
      "en": "General maintenance can include checking fluid levels, brakes, tires and lights.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un entretien général révèle plusieurs petits problèmes en même temps. Quelle est la bonne pratique?",
      "en": "General maintenance reveals several small problems at the same time. What is the correct practice?",
      "choices": [
       {
        "fr": "Présenter clairement les priorités au client en distinguant l'urgent du non urgent",
        "en": "Clearly presenting priorities to the client, distinguishing urgent from non-urgent items",
        "correct": true
       },
       {
        "fr": "Réparer tous les problèmes sans consulter le client",
        "en": "Fixing all the problems with no consultation with the client",
        "correct": false
       },
       {
        "fr": "Ignorer les problèmes mineurs",
        "en": "Ignoring the minor problems",
        "correct": false
       },
       {
        "fr": "Exagérer la gravité pour vendre plus de réparations",
        "en": "Exaggerating the severity to sell more repairs",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi l'entretien général préventif est-il souvent plus économique pour le client à long terme?",
      "en": "Why is preventive general maintenance often more cost-effective for the client in the long run?",
      "choices": [
       {
        "fr": "Il permet d'éviter des réparations majeures coûteuses causées par des problèmes négligés",
        "en": "It helps avoid costly major repairs caused by neglected problems",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "L'entretien préventif coûte toujours plus cher qu'une panne majeure",
        "en": "Preventive maintenance always costs more than a major breakdown",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier d'entretien du fabricant",
        "en": "To follow the manufacturer's maintenance schedule",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un entretien général rigoureux et honnête renforce la confiance du client envers l'atelier.",
      "en": "Rigorous, honest general maintenance builds the client's trust in the shop.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca23",
  "order": 23,
  "code": "343624",
  "hours": 60,
  "title_fr": "Vérification de systèmes d'allumage électronique",
  "title_en": "Electronic Ignition System Check",
  "icon": "⚡",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel composant produit l'étincelle qui allume le mélange air-carburant dans un moteur à essence?",
      "en": "What component produces the spark that ignites the air-fuel mixture in a gasoline engine?",
      "choices": [
       {
        "fr": "La bougie d'allumage",
        "en": "The spark plug",
        "correct": true
       },
       {
        "fr": "Le filtre à huile",
        "en": "The oil filter",
        "correct": false
       },
       {
        "fr": "Le radiateur",
        "en": "The radiator",
        "correct": false
       },
       {
        "fr": "Le pare-chocs",
        "en": "The bumper",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier l'état des bougies d'allumage lors d'un entretien?",
      "en": "Why check the spark plugs' condition during maintenance?",
      "choices": [
       {
        "fr": "Des bougies usées peuvent causer des ratés d'allumage et une perte de puissance",
        "en": "Worn spark plugs can cause misfires and a loss of power",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier fixé par le fabricant",
        "en": "To follow the manufacturer's schedule",
        "correct": false
       },
       {
        "fr": "Les bougies ne s'usent jamais",
        "en": "Spark plugs never wear out",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un raté d'allumage ne peut jamais être détecté par un code de diagnostic; seule une inspection visuelle le révèle.",
      "en": "A misfire can never be detected by a diagnostic code; only a visual inspection reveals it.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi tester une bobine d'allumage lors d'un diagnostic de raté?",
      "en": "Why test an ignition coil when diagnosing a misfire?",
      "choices": [
       {
        "fr": "Une bobine défectueuse peut empêcher une étincelle adéquate",
        "en": "A faulty coil can prevent an adequate spark",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier d'entretien, sans lien avec la performance",
        "en": "It only serves to follow the maintenance schedule, unrelated to performance",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "La bobine n'affecte jamais l'allumage",
        "en": "The coil never affects ignition",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel symptôme peut indiquer un problème d'allumage électronique?",
      "en": "What symptom can indicate an electronic ignition problem?",
      "choices": [
       {
        "fr": "Un moteur qui tourne de façon irrégulière ou perd de la puissance",
        "en": "An engine that runs roughly or loses power",
        "correct": true
       },
       {
        "fr": "Les symptômes observables sont presque toujours liés à l'usure normale des pneus",
        "en": "Observable symptoms are almost always related to normal tire wear",
        "correct": false
       },
       {
        "fr": "Une amélioration soudaine de la performance",
        "en": "A sudden improvement in performance",
        "correct": false
       },
       {
        "fr": "Une réduction du bruit du moteur",
        "en": "A reduction in engine noise",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes d'allumage électronique modernes utilisent souvent un module de commande informatisé.",
      "en": "Modern electronic ignition systems often use a computerized control module.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un moteur présente des ratés intermittents difficiles à reproduire. Quelle est une bonne pratique?",
      "en": "An engine shows intermittent misfires that are hard to reproduce. What is a good practice?",
      "choices": [
       {
        "fr": "Utiliser un outil de diagnostic pour surveiller les données en temps réel durant un essai routier",
        "en": "Using a diagnostic tool to monitor live data during a road test",
        "correct": true
       },
       {
        "fr": "Ignorer le problème car il n'est pas reproductible",
        "en": "Ignoring the problem since it's not reproducible",
        "correct": false
       },
       {
        "fr": "Remplacer toutes les bougies et bobines sans diagnostic",
        "en": "Replacing all the spark plugs and coils with no diagnosis",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi un diagnostic précis du système d'allumage est-il important avant de remplacer des pièces coûteuses?",
      "en": "Why is an accurate ignition system diagnosis important before replacing costly parts?",
      "choices": [
       {
        "fr": "Pour éviter de remplacer inutilement des composants qui ne sont pas en cause",
        "en": "To avoid unnecessarily replacing components that aren't at fault",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Le remplacement au hasard est toujours la meilleure approche",
        "en": "Random replacement is always the best approach",
        "correct": false
       },
       {
        "fr": "Pour suivre une liste de vérification standardisée de l'atelier",
        "en": "To follow the shop's standardized checklist",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système d'allumage bien diagnostiqué et entretenu contribue à l'efficacité énergétique du véhicule.",
      "en": "A well-diagnosed, well-maintained ignition system contributes to the vehicle's fuel efficiency.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca24",
  "order": 24,
  "code": "343634",
  "hours": 60,
  "title_fr": "Réparation de systèmes d'allumage électronique",
  "title_en": "Electronic Ignition System Repair",
  "icon": "⚡",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une réparation courante liée à l'allumage?",
      "en": "What is a common ignition-related repair?",
      "choices": [
       {
        "fr": "Le remplacement de bougies d'allumage usées",
        "en": "Replacing worn spark plugs",
        "correct": true
       },
       {
        "fr": "Le remplacement des pneus",
        "en": "Replacing the tires",
        "correct": false
       },
       {
        "fr": "La réparation du système audio",
        "en": "Repairing the audio system",
        "correct": false
       },
       {
        "fr": "Le remplacement des essuie-glaces",
        "en": "Replacing the wiper blades",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi respecter l'écartement spécifié lors de l'installation de nouvelles bougies?",
      "en": "Why follow the specified gap when installing new spark plugs?",
      "choices": [
       {
        "fr": "Un mauvais écartement peut affecter la qualité de l'étincelle et la performance du moteur",
        "en": "An incorrect gap can affect spark quality and engine performance",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "L'écartement n'a jamais d'importance",
        "en": "The gap never matters",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une fois la pièce remplacée, il n'est pas nécessaire de refaire un essai puisque le problème est automatiquement résolu.",
      "en": "Once the part is replaced, there's no need to retest since the problem is automatically resolved.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi remplacer les bobines d'allumage par des pièces de qualité équivalente ou supérieure?",
      "en": "Why replace ignition coils with parts of equivalent or higher quality?",
      "choices": [
       {
        "fr": "Des pièces de mauvaise qualité peuvent causer une panne prématurée",
        "en": "Poor-quality parts can cause premature failure",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du mécanicien",
        "en": "It depends only on the mechanic's personal preferences",
        "correct": false
       },
       {
        "fr": "Toutes les pièces sont toujours identiques",
        "en": "All parts are always identical",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un nouveau raté apparaît peu après une réparation d'allumage?",
      "en": "What should you do if a new misfire appears shortly after an ignition repair?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier la cause précise",
        "en": "Resuming the diagnosis to identify the precise cause",
        "correct": true
       },
       {
        "fr": "Ignorer le nouveau symptôme",
        "en": "Ignoring the new symptom",
        "correct": false
       },
       {
        "fr": "Supposer que c'est normal",
        "en": "Assuming it's normal",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La réparation de systèmes d'allumage électronique peut impliquer le remplacement de modules de commande.",
      "en": "Repairing electronic ignition systems can involve replacing control modules.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation d'allumage résout un raté mais un nouveau code de diagnostic apparaît. Quelle est la bonne pratique?",
      "en": "An ignition repair fixes a misfire but a new diagnostic code appears. What is the correct practice?",
      "choices": [
       {
        "fr": "Investiguer ce nouveau code avant de considérer la réparation terminée",
        "en": "Investigating this new code before considering the repair complete",
        "correct": true
       },
       {
        "fr": "Ignorer le nouveau code",
        "en": "Ignoring the new code",
        "correct": false
       },
       {
        "fr": "Livrer le véhicule sans vérification supplémentaire",
        "en": "Delivering the vehicle with no further check",
        "correct": false
       },
       {
        "fr": "Effacer le code sans investigation",
        "en": "Clearing the code with no investigation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la réparation des systèmes d'allumage modernes exige-t-elle une bonne compréhension de l'électronique?",
      "en": "Why does repairing modern ignition systems require a good understanding of electronics?",
      "choices": [
       {
        "fr": "Les systèmes d'allumage sont de plus en plus contrôlés par des modules électroniques",
        "en": "Ignition systems are increasingly controlled by electronic modules",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle du véhicule",
        "en": "It only concerns the vehicle's visual presentation",
        "correct": false
       },
       {
        "fr": "Les systèmes d'allumage n'utilisent jamais l'électronique",
        "en": "Ignition systems never use electronics",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un système d'allumage bien réparé améliore la performance, l'économie de carburant et réduit les émissions polluantes.",
      "en": "A well-repaired ignition system improves performance, fuel economy and reduces pollutant emissions.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca25",
  "order": 25,
  "code": "343644",
  "hours": 60,
  "title_fr": "Vérification de systèmes d'injection électronique et antipollution",
  "title_en": "Electronic Fuel Injection and Emission Control System Check",
  "icon": "🌫️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel composant injecte le carburant dans un moteur à injection électronique?",
      "en": "What component injects fuel in an electronic fuel-injected engine?",
      "choices": [
       {
        "fr": "L'injecteur de carburant",
        "en": "The fuel injector",
        "correct": true
       },
       {
        "fr": "Le filtre à air",
        "en": "The air filter",
        "correct": false
       },
       {
        "fr": "Le radiateur",
        "en": "The radiator",
        "correct": false
       },
       {
        "fr": "Le pare-chocs",
        "en": "The bumper",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel est le rôle du convertisseur catalytique dans un véhicule?",
      "en": "What is the catalytic converter's role in a vehicle?",
      "choices": [
       {
        "fr": "Réduire les émissions polluantes des gaz d'échappement",
        "en": "Reducing pollutant emissions from exhaust gases",
        "correct": true
       },
       {
        "fr": "Refroidir le moteur",
        "en": "Cooling the engine",
        "correct": false
       },
       {
        "fr": "Alimenter la radio",
        "en": "Powering the radio",
        "correct": false
       },
       {
        "fr": "Éclairer la route",
        "en": "Lighting the road",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un capteur d'oxygène défectueux n'a aucun effet sur le mélange air-carburant ni sur les émissions.",
      "en": "A faulty oxygen sensor has no effect on the air-fuel mixture or on emissions.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier les capteurs du système d'injection lors d'un diagnostic de performance?",
      "en": "Why check the injection system's sensors when diagnosing performance issues?",
      "choices": [
       {
        "fr": "Des capteurs défectueux peuvent fausser le calcul du mélange air-carburant",
        "en": "Faulty sensors can distort the air-fuel mixture calculation",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de vérification standard, peu importe les symptômes",
        "en": "To follow the standard check order, regardless of symptoms",
        "correct": false
       },
       {
        "fr": "Les capteurs n'affectent jamais la performance du moteur",
        "en": "Sensors never affect engine performance",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel symptôme peut indiquer un problème avec le système antipollution?",
      "en": "What symptom can indicate a problem with the emission control system?",
      "choices": [
       {
        "fr": "Un voyant moteur allumé accompagné d'une odeur ou d'une performance réduite",
        "en": "An illuminated check engine light along with an odour or reduced performance",
        "correct": true
       },
       {
        "fr": "Les symptômes observables dépendent uniquement du style de conduite",
        "en": "Observable symptoms depend only on driving style",
        "correct": false
       },
       {
        "fr": "Une amélioration soudaine de la performance",
        "en": "A sudden improvement in performance",
        "correct": false
       },
       {
        "fr": "Une réduction du bruit du moteur",
        "en": "A reduction in engine noise",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes d'injection électronique modernes sont étroitement liés aux systèmes antipollution.",
      "en": "Modern electronic fuel injection systems are closely linked to emission control systems.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un véhicule échoue à un test d'émissions malgré un fonctionnement apparemment normal. Quelle est la bonne démarche?",
      "en": "A vehicle fails an emissions test despite seemingly normal operation. What is the correct approach?",
      "choices": [
       {
        "fr": "Effectuer un diagnostic approfondi des capteurs et du convertisseur catalytique",
        "en": "Performing an in-depth diagnosis of the sensors and catalytic converter",
        "correct": true
       },
       {
        "fr": "Ignorer l'échec du test",
        "en": "Ignoring the test failure",
        "correct": false
       },
       {
        "fr": "Remplacer des pièces au hasard",
        "en": "Replacing parts at random",
        "correct": false
       },
       {
        "fr": "Supposer que le test est erroné sans vérification",
        "en": "Assuming the test is wrong with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les normes environnementales rendent-elles le diagnostic des systèmes antipollution particulièrement important?",
      "en": "Why do environmental standards make diagnosing emission control systems particularly important?",
      "choices": [
       {
        "fr": "Les véhicules doivent respecter des limites d'émissions strictes pour rester conformes",
        "en": "Vehicles must meet strict emission limits to remain compliant",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       },
       {
        "fr": "Il n'existe aucune norme d'émissions",
        "en": "No emission standards exist",
        "correct": false
       },
       {
        "fr": "Pour suivre une liste de vérification standardisée de l'atelier",
        "en": "To follow the shop's standardized checklist",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un diagnostic des systèmes d'injection et antipollution ne concerne que la performance du moteur, jamais la conformité environnementale.",
      "en": "Diagnosing fuel injection and emission control systems only concerns engine performance, never environmental compliance.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "meca26",
  "order": 26,
  "code": "343655",
  "hours": 75,
  "title_fr": "Entretien et réparation de systèmes d'injection électronique et antipollution",
  "title_en": "Electronic Fuel Injection and Emission Control System Maintenance and Repair",
  "icon": "🌫️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est une tâche courante d'entretien du système d'injection?",
      "en": "What is a common fuel injection system maintenance task?",
      "choices": [
       {
        "fr": "Le nettoyage ou le remplacement des injecteurs de carburant",
        "en": "Cleaning or replacing fuel injectors",
        "correct": true
       },
       {
        "fr": "Le remplacement des sièges",
        "en": "Replacing the seats",
        "correct": false
       },
       {
        "fr": "La réparation du système audio",
        "en": "Repairing the audio system",
        "correct": false
       },
       {
        "fr": "Le remplacement des essuie-glaces",
        "en": "Replacing the wiper blades",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi remplacer le filtre à carburant à intervalle régulier?",
      "en": "Why replace the fuel filter at regular intervals?",
      "choices": [
       {
        "fr": "Pour éviter que des contaminants n'endommagent les injecteurs",
        "en": "To prevent contaminants from damaging the injectors",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier fixé par le fabricant",
        "en": "To follow the manufacturer's schedule",
        "correct": false
       },
       {
        "fr": "Le filtre à carburant n'a jamais besoin d'être remplacé",
        "en": "The fuel filter never needs to be replaced",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le remplacement d'un capteur d'oxygène n'a généralement aucun effet mesurable sur la consommation de carburant.",
      "en": "Replacing an oxygen sensor generally has no measurable effect on fuel consumption.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi effectuer un essai routier après une réparation du système antipollution?",
      "en": "Why perform a road test after an emission control system repair?",
      "choices": [
       {
        "fr": "Pour confirmer que le code de diagnostic ne revient pas et que le système fonctionne bien",
        "en": "To confirm the diagnostic code doesn't return and that the system works properly",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier d'entretien, sans lien avec la performance",
        "en": "It only serves to follow the maintenance schedule, unrelated to performance",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "Un essai routier est utile seulement pour les gros véhicules commerciaux",
        "en": "A road test is only useful for large commercial vehicles",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier après avoir remplacé un convertisseur catalytique?",
      "en": "What should be checked after replacing a catalytic converter?",
      "choices": [
       {
        "fr": "L'absence de codes d'erreur liés aux émissions et le bon fonctionnement général",
        "en": "The absence of emissions-related error codes and proper overall operation",
        "correct": true
       },
       {
        "fr": "Uniquement le nom du mécanicien qui a fait l'inspection",
        "en": "Only the name of the mechanic who did the inspection",
        "correct": false
       },
       {
        "fr": "Uniquement le poids du convertisseur",
        "en": "Only the converter's weight",
        "correct": false
       },
       {
        "fr": "Uniquement la marque des pneus installés",
        "en": "Only the brand of the installed tires",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'entretien des systèmes d'injection et antipollution contribue directement à la conformité environnementale du véhicule.",
      "en": "Maintaining fuel injection and emission control systems directly contributes to the vehicle's environmental compliance.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une réparation du système antipollution ne règle pas complètement le symptôme initial du client. Quelle est la bonne pratique?",
      "en": "An emission control system repair doesn't completely resolve the client's initial symptom. What is the correct practice?",
      "choices": [
       {
        "fr": "Reprendre le diagnostic pour identifier une cause additionnelle",
        "en": "Resuming the diagnosis to identify an additional cause",
        "correct": true
       },
       {
        "fr": "Livrer le véhicule tel quel sans vérification supplémentaire",
        "en": "Delivering the vehicle as-is with no further check",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme restant",
        "en": "Ignoring the remaining symptom",
        "correct": false
       },
       {
        "fr": "Facturer une nouvelle réparation sans diagnostic",
        "en": "Billing for a new repair with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la réparation des systèmes d'injection et antipollution combine-t-elle des compétences mécaniques et environnementales?",
      "en": "Why does repairing fuel injection and emission control systems combine mechanical and environmental skills?",
      "choices": [
       {
        "fr": "Ces systèmes affectent à la fois la performance du véhicule et son impact environnemental",
        "en": "These systems affect both the vehicle's performance and its environmental impact",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Ces systèmes n'ont aucun lien avec l'environnement",
        "en": "These systems have no connection to the environment",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec la réparation",
        "en": "To follow an internal administrative step unrelated to the repair",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des systèmes d'injection et antipollution est de plus en plus valorisée avec le durcissement des normes environnementales.",
      "en": "Mastering fuel injection and emission control systems is increasingly valued as environmental standards tighten.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca27",
  "order": 27,
  "code": "343665",
  "hours": 75,
  "title_fr": "Vérification du fonctionnement du groupe motopropulseur",
  "title_en": "Powertrain Performance Check",
  "icon": "🏎️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que le groupe motopropulseur d'un véhicule?",
      "en": "What is a vehicle's powertrain?",
      "choices": [
       {
        "fr": "L'ensemble des composants qui génèrent et transmettent la puissance (moteur, transmission)",
        "en": "The set of components that generate and transmit power (engine, transmission)",
        "correct": true
       },
       {
        "fr": "Le système audio uniquement",
        "en": "Only the audio system",
        "correct": false
       },
       {
        "fr": "Le système d'éclairage uniquement",
        "en": "Only the lighting system",
        "correct": false
       },
       {
        "fr": "Les sièges du véhicule",
        "en": "The vehicle's seats",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi effectuer un essai routier pour évaluer la performance globale du groupe motopropulseur?",
      "en": "Why perform a road test to evaluate the powertrain's overall performance?",
      "choices": [
       {
        "fr": "Pour observer le comportement réel du véhicule en conditions de conduite",
        "en": "To observe the vehicle's actual behaviour under driving conditions",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour suivre une grille d'évaluation standard",
        "en": "To follow a standard evaluation grid",
        "correct": false
       },
       {
        "fr": "Un essai routier ne sert qu'à évaluer le confort de conduite, jamais la mécanique",
        "en": "A road test is only useful for assessing driving comfort, never mechanics",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une vérification du groupe motopropulseur se limite toujours au moteur seul, sans tenir compte de la transmission.",
      "en": "A powertrain check is always limited to the engine alone, without considering the transmission.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi une perte de puissance globale peut-elle avoir plusieurs causes possibles dans le groupe motopropulseur?",
      "en": "Why can overall power loss have several possible causes in the powertrain?",
      "choices": [
       {
        "fr": "Le moteur, la transmission ou d'autres systèmes interconnectés peuvent tous être en cause",
        "en": "The engine, transmission or other interconnected systems could all be at fault",
        "correct": true
       },
       {
        "fr": "Il n'y a jamais qu'une seule cause possible",
        "en": "There is never more than one possible cause",
        "correct": false
       },
       {
        "fr": "La perte de puissance n'a jamais de cause identifiable",
        "en": "Power loss never has an identifiable cause",
        "correct": false
       },
       {
        "fr": "Cela concerne surtout la paperasse du dossier client, jamais la mécanique",
        "en": "It mainly concerns the client file's paperwork, never the mechanics",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel outil aide à évaluer la performance globale d'un moteur et d'une transmission ensemble?",
      "en": "What tool helps assess overall engine and transmission performance together?",
      "choices": [
       {
        "fr": "Un outil de diagnostic avec surveillance de données en temps réel",
        "en": "A diagnostic tool with live data monitoring",
        "correct": true
       },
       {
        "fr": "Un simple thermomètre",
        "en": "A simple thermometer",
        "correct": false
       },
       {
        "fr": "Aucun outil n'est nécessaire",
        "en": "No tool is necessary",
        "correct": false
       },
       {
        "fr": "Une balance de cuisine",
        "en": "A kitchen scale",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La vérification du groupe motopropulseur permet souvent de détecter des problèmes qui ne sont pas évidents lors d'inspections isolées.",
      "en": "Checking the powertrain often helps detect problems that aren't obvious during isolated inspections.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un véhicule montre une performance globale réduite sans code de diagnostic évident. Quelle est une bonne pratique?",
      "en": "A vehicle shows reduced overall performance with no obvious diagnostic code. What is a good practice?",
      "choices": [
       {
        "fr": "Effectuer une série de tests méthodiques couvrant les différents composants du groupe motopropulseur",
        "en": "Performing a series of methodical tests covering the different powertrain components",
        "correct": true
       },
       {
        "fr": "Remplacer des pièces au hasard",
        "en": "Replacing parts at random",
        "correct": false
       },
       {
        "fr": "Ignorer le symptôme car il n'y a pas de code",
        "en": "Ignoring the symptom since there's no code",
        "correct": false
       },
       {
        "fr": "Deviner la cause sans vérification",
        "en": "Guessing at the cause with no verification",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la vérification globale du groupe motopropulseur est-elle une compétence clé en fin de formation?",
      "en": "Why is overall powertrain verification a key skill toward the end of training?",
      "choices": [
       {
        "fr": "Elle intègre plusieurs compétences acquises précédemment (moteur, transmission, électronique)",
        "en": "It integrates several previously acquired skills (engine, transmission, electronics)",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "C'est en fait la compétence la plus facile du programme",
        "en": "It is actually the easiest skill in the program",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucune compétence acquise précédemment",
        "en": "It requires no previously acquired skills",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La capacité à évaluer la performance globale du groupe motopropulseur démontre une bonne intégration des compétences du programme.",
      "en": "The ability to assess overall powertrain performance demonstrates good integration of the program's skills.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "meca28",
  "order": 28,
  "code": "343671",
  "hours": 15,
  "title_fr": "Recherche d'emploi",
  "title_en": "Job Search",
  "icon": "📄",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel document présente généralement le parcours et les compétences d'un candidat?",
      "en": "Which document generally presents a candidate's background and skills?",
      "choices": [
       {
        "fr": "Un curriculum vitae (CV)",
        "en": "A résumé (CV)",
        "correct": true
       },
       {
        "fr": "Une carte postale",
        "en": "A postcard",
        "correct": false
       },
       {
        "fr": "Un reçu de caisse",
        "en": "A sales receipt",
        "correct": false
       },
       {
        "fr": "Une facture",
        "en": "An invoice",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi mentionner ses certifications (ex. SAAQ, fabricant) sur son CV en mécanique automobile?",
      "en": "Why mention your certifications (e.g. SAAQ, manufacturer) on your résumé in automotive mechanics?",
      "choices": [
       {
        "fr": "Pour démontrer sa qualification aux employeurs potentiels",
        "en": "To demonstrate your qualifications to potential employers",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du logiciel de facturation",
        "en": "It only serves to fill a mandatory field in the billing software",
        "correct": false
       },
       {
        "fr": "Pour suivre les conseils habituels d'un conseiller en emploi",
        "en": "To follow a job counsellor's usual advice",
        "correct": false
       },
       {
        "fr": "Les certifications n'ont jamais d'importance dans ce métier",
        "en": "Certifications never matter in this trade",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La préparation avant une entrevue d'embauche n'a pratiquement aucune influence sur le résultat; seule l'expérience compte.",
      "en": "Preparing before a job interview has almost no influence on the outcome; only experience matters.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Lors d'une entrevue, pourquoi est-il utile de préparer des exemples concrets de diagnostics réussis?",
      "en": "During an interview, why is it useful to prepare concrete examples of successful diagnoses?",
      "choices": [
       {
        "fr": "Pour démontrer clairement ses compétences techniques à l'employeur",
        "en": "To clearly demonstrate your technical skills to the employer",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier d'entretien, sans lien avec la performance",
        "en": "It only serves to follow the maintenance schedule, unrelated to performance",
        "correct": false
       },
       {
        "fr": "Pour allonger inutilement l'entrevue",
        "en": "To needlessly lengthen the interview",
        "correct": false
       },
       {
        "fr": "Pour impressionner sans preuve",
        "en": "To impress without proof",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quels outils peuvent aider à trouver des offres d'emploi en mécanique automobile?",
      "en": "Which tools can help find automotive mechanics job postings?",
      "choices": [
       {
        "fr": "Les sites d'emploi, le réseau professionnel et les visites en atelier",
        "en": "Job sites, professional networking and shop visits",
        "correct": true
       },
       {
        "fr": "Aucun outil n'est utile",
        "en": "No tool is useful",
        "correct": false
       },
       {
        "fr": "Uniquement les journaux imprimés",
        "en": "Only printed newspapers",
        "correct": false
       },
       {
        "fr": "Uniquement le bouche-à-oreille sans autre démarche",
        "en": "Only word of mouth with no other approach",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un suivi poli après une entrevue peut démontrer le sérieux d'un candidat.",
      "en": "A polite follow-up after an interview can demonstrate a candidate's seriousness.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un employeur pose une question difficile sur une lacune du CV pendant l'entrevue. Quelle est la bonne attitude?",
      "en": "An employer asks a difficult question about a gap in the résumé during the interview. What is the right attitude?",
      "choices": [
       {
        "fr": "Répondre honnêtement et de façon posée, en mettant l'accent sur les apprentissages tirés",
        "en": "Answering honestly and calmly, emphasizing lessons learned",
        "correct": true
       },
       {
        "fr": "Éviter complètement la question",
        "en": "Completely avoiding the question",
        "correct": false
       },
       {
        "fr": "Mentir pour paraître parfait",
        "en": "Lying to appear perfect",
        "correct": false
       },
       {
        "fr": "Se fâcher contre l'employeur",
        "en": "Getting upset with the employer",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi est-il utile de rechercher de l'information sur un concessionnaire ou un atelier avant une entrevue?",
      "en": "Why is it useful to research a dealership or shop before an interview?",
      "choices": [
       {
        "fr": "Pour montrer un intérêt sincère et poser des questions pertinentes",
        "en": "To show genuine interest and ask relevant questions",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour perdre du temps",
        "en": "To waste time",
        "correct": false
       },
       {
        "fr": "Pour suivre un modèle standard de préparation, peu importe le poste visé",
        "en": "To follow a standard preparation template, regardless of the position",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne recherche d'emploi repose uniquement sur l'envoi du plus grand nombre possible de candidatures, sans autre préparation.",
      "en": "A good job search relies solely on sending out as many applications as possible, with no other preparation.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "meca29",
  "order": 29,
  "code": "343686",
  "hours": 90,
  "title_fr": "Intégration au milieu de travail",
  "title_en": "Workplace Integration",
  "icon": "🎓",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Lors d'une entrevue d'embauche pour un poste de mécanicien automobile, il est important de...",
      "en": "In a job interview for an automotive mechanic position, it is important to...",
      "choices": [
       {
        "fr": "Préparer des exemples concrets de ses compétences et certifications",
        "en": "Preparing concrete examples of your skills and certifications",
        "correct": true
       },
       {
        "fr": "Ne rien préparer",
        "en": "Preparing nothing",
        "correct": false
       },
       {
        "fr": "Refuser de parler de ses compétences",
        "en": "Refusing to talk about your skills",
        "correct": false
       },
       {
        "fr": "Éviter toutes les questions",
        "en": "Avoiding all questions",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle attitude convient le mieux dès le premier jour dans un nouvel atelier?",
      "en": "Which attitude works best on the very first day at a new shop?",
      "choices": [
       {
        "fr": "Observer, poser des questions et suivre les consignes de sécurité",
        "en": "Observing, asking questions and following safety instructions",
        "correct": true
       },
       {
        "fr": "Tout changer immédiatement selon ses propres méthodes",
        "en": "Immediately changing everything to your own methods",
        "correct": false
       },
       {
        "fr": "Rester silencieux sans jamais poser de question",
        "en": "Staying silent and never asking questions",
        "correct": false
       },
       {
        "fr": "Ignorer les consignes de sécurité",
        "en": "Ignoring safety instructions",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'intégration au travail devrait se limiter strictement aux tâches techniques, sans aucune interaction sociale avec les collègues.",
      "en": "Workplace integration should be strictly limited to technical tasks, without any social interaction with coworkers.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un bon comportement professionnel en stage inclut...",
      "en": "Good professional conduct during an internship includes...",
      "choices": [
       {
        "fr": "La ponctualité, le respect des consignes de sécurité et l'écoute des collègues",
        "en": "Punctuality, following safety instructions and listening to coworkers",
        "correct": true
       },
       {
        "fr": "Le retard fréquent",
        "en": "Frequent lateness",
        "correct": false
       },
       {
        "fr": "Le non-respect des règles de sécurité",
        "en": "Disregard for safety rules",
        "correct": false
       },
       {
        "fr": "L'absentéisme",
        "en": "Absenteeism",
        "correct": false
       }
      ]
     },
     {
      "fr": "Recevoir une rétroaction constructive d'un superviseur de stage devrait mener à...",
      "en": "Receiving constructive feedback from an internship supervisor should lead to...",
      "choices": [
       {
        "fr": "Ajuster son travail et poser des questions au besoin",
        "en": "Adjusting your work and asking questions as needed",
        "correct": true
       },
       {
        "fr": "Ignorer la rétroaction",
        "en": "Ignoring the feedback",
        "correct": false
       },
       {
        "fr": "Se sentir offensé et cesser d'essayer",
        "en": "Feeling offended and giving up",
        "correct": false
       },
       {
        "fr": "Contester systématiquement",
        "en": "Systematically arguing back",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un stage réussi peut mener à une offre d'emploi dans le même atelier.",
      "en": "A successful internship can lead to a job offer at the same shop.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Pendant un stage, on te demande d'effectuer une tâche pour laquelle tu ne te sens pas suffisamment formé(e). Quelle est la meilleure attitude?",
      "en": "During an internship, you're asked to do a task you don't feel adequately trained for. What is the best attitude?",
      "choices": [
       {
        "fr": "Communiquer honnêtement la situation à ton superviseur et demander de l'encadrement",
        "en": "Honestly communicate the situation to your supervisor and ask for guidance",
        "correct": true
       },
       {
        "fr": "Refuser d'obéir sans explication",
        "en": "Refuse to comply without explanation",
        "correct": false
       },
       {
        "fr": "Faire la tâche sans rien dire même en cas de doute sérieux sur la sécurité",
        "en": "Do the task without saying anything even with serious safety doubts",
        "correct": false
       },
       {
        "fr": "Quitter le stage immédiatement",
        "en": "Leave the internship immediately",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle attitude professionnelle est la plus susceptible de mener à une embauche après le stage?",
      "en": "Which professional attitude is most likely to lead to a job offer after the internship?",
      "choices": [
       {
        "fr": "Faire preuve de rigueur, de fiabilité et d'un souci constant de la sécurité et de la qualité",
        "en": "Showing rigour, reliability and a constant concern for safety and quality",
        "correct": true
       },
       {
        "fr": "Faire le strict minimum sans engagement",
        "en": "Doing the bare minimum with no commitment",
        "correct": false
       },
       {
        "fr": "Éviter les interactions avec les collègues",
        "en": "Avoiding interactions with coworkers",
        "correct": false
       },
       {
        "fr": "Contester régulièrement les méthodes de l'atelier",
        "en": "Regularly challenging the shop's methods",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le stage d'intégration au milieu de travail représente une part importante du programme, avec 90 heures qui lui sont consacrées.",
      "en": "The workplace integration internship represents a significant part of the program, with 90 hours dedicated to it.",
      "isTrue": true
     }
    ]
   }
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "MecaniqueAutoQuest",
    tagline: "Deviens chef d'atelier mécanique — DEP 5298",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "MecaniqueAutoQuest",
    tagline: "Become a shop foreman — DVS 5298",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
