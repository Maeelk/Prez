window.safeContent = {
    "alignment": {
        "title": "Alignement des IA",
        "kicker": "Alignement stratégique",
        "subtitle": "Coordonnez les intentions des modèles avec les valeurs de l'entreprise et la réglementation.",
        "description": "Approches, signaux et garde-fous pour aligner les intelligences artificielles sur vos objectifs.",
        "challenge": "Les objectifs implicites des modèles peuvent diverger des attentes humaines et créer des dommages collatéraux.",
        "approach": "Formalisez des chartes d'entraînement, des tests d'alignement comportemental et des revues interfonctionnelles.",
        "indicator": "Taux de non-conformité comportementale détecté par vos batteries de scénarios de tests contextualisés.",
        "interactiveIntro": "Chaque étape d'un programme d'alignement renforce la granularité des garde-fous et la responsabilité partagée.",
        "narratives": [
            {
                "title": "Tracer des frontières comportementales",
                "paragraphs": [
                    "L'alignement commence par la traduction des principes métiers et des exigences réglementaires en comportements mesurables. Cela implique de documenter les scénarios acceptables, les zones grises et les situations à bannir, puis de relier ces éléments aux jeux d'entraînement et aux données de renforcement.",
                    "Les ateliers d'alignement gagnent en efficacité lorsqu'ils rassemblent métier, juridique, sécurité et utilisateurs finaux. Ensemble, ils établissent un lexique partagé pour qualifier la conformité des réponses générées et éviter les malentendus entre équipes."
                ]
            },
            {
                "title": "Institutionnaliser les revues humaines",
                "paragraphs": [
                    "Un programme mature prévoit des comités de décision qui évaluent régulièrement les compromis de performance versus alignement. Ils examinent les résultats de tests adversariaux, les journaux d'incidents et les feedbacks utilisateurs pour arbitrer les évolutions de modèles."
                ]
            },
            {
                "title": "Mesurer et corriger en continu",
                "paragraphs": [
                    "Les métriques d'alignement sont dynamiques : vous avez besoin de tableaux de bord qui associent scores comportementaux, couverture de tests et saturation des processus de validation humaine. Les seuils d'alerte doivent déclencher des boucles d'amélioration rapides."
                ]
            }
        ],
        "checklist": [
            "Cartographier les principes éthiques et réglementaires applicables à chaque cas d'usage.",
            "Développer des jeux de tests comportementaux contextualisés par segment utilisateur.",
            "Mettre en place un comité d'arbitrage alignement/performance avec pouvoir décisionnel.",
            "Documenter les incidents et dérives pour enrichir les règles d'entraînement et de déploiement."
        ],
        "timeline": [
            {"label": "Exploration", "description": "Identifier les écarts potentiels entre objectifs métiers et apprentissage spontané du modèle."},
            {"label": "Structuration", "description": "Créer des chartes d'alignement, formaliser les critères d'acceptation et les seuils d'alerte."},
            {"label": "Opérationnalisation", "description": "Industrialiser les tests de régression, les revues humaines et les validations multi-équipes."},
            {"label": "Maîtrise", "description": "Automatiser la détection des dérives et activer des plans de correction orchestrés en continu."}
        ],
        "insights": [
            {"label": "Signal métier", "detail": "Des agents prennent des initiatives hors périmètre ? Revoyez les prompts systèmes et imposez des garde-fous d'autorisation."},
            {"label": "Signal juridique", "detail": "Une recommandation enfreint un cadre réglementaire ? Programmez une suspension automatique du modèle concerné."},
            {"label": "Signal utilisateur", "detail": "Les retours clients indiquent un ton inadapté ? Ajustez les données d'exemples et la pondération des objectifs."}
        ],
        "resources": [
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"},
            {"label": "Politiques internes", "href": "../pages/policy.html"},
            {"label": "Interprétabilité", "href": "../pages/interpretability.html"}
        ],
        "art": {"palette": ["#dbe4ff", "#edf0ff", "#fafcff"], "accent": "#3b64ff"},
        "artDescription": "Illustration générative évoquant la convergence de flux alignés."
    },
    "interpretability": {
        "title": "Interprétabilité",
        "kicker": "Transparence cognitive",
        "subtitle": "Exposez les décisions algorithmiques pour faciliter l'audit et la confiance des parties prenantes.",
        "description": "Techniques d'explicabilité, cartographies de features et protocoles de restitution pour vos IA.",
        "challenge": "Sans transparence, impossible de comprendre ou de contester un résultat critique produit par le modèle.",
        "approach": "Combinez interprétabilité intrinsèque, outils post-hoc et documentations de données pour couvrir tous les angles.",
        "indicator": "Temps moyen nécessaire pour expliquer une décision critique à un auditeur externe.",
        "interactiveIntro": "Chaque phase améliore la granularité des explications et la fluidité de vos restitutions.",
        "narratives": [
            {
                "title": "Composer une carte de lecture",
                "paragraphs": [
                    "L'interprétabilité efficace repose sur une bibliothèque d'explications prêtes à être utilisées par différents publics. Elle inclut la traçabilité des données sources, l'importance des features et des exemples contrastifs pour illustrer les limites du modèle.",
                    "Les ateliers de restitution doivent intégrer designers, data scientists et métiers afin de produire des narrations accessibles. L'objectif : livrer des explications courtes, visuelles et actionnables, compatibles avec la pression temporelle des incidents."
                ]
            },
            {
                "title": "Outiller les analystes",
                "paragraphs": [
                    "Les équipes d'investigation ont besoin de tableaux de bord interactifs permettant de rejouer des décisions, comparer des sorties alternatives et détecter des dépendances inattendues."
                ]
            },
            {
                "title": "Capitaliser sur les retours",
                "paragraphs": [
                    "Chaque demande d'explication doit enrichir la base documentaire. Les questions récurrentes révèlent des zones d'ombre que l'on peut éclairer avec de nouveaux scénarios de test et des fiches explicatives orientées métier."
                ]
            }
        ],
        "checklist": [
            "Établir des personas d'audience pour calibrer les niveaux de détail attendus.",
            "Associer à chaque modèle une fiche signalétique décrivant données, limites et responsables.",
            "Mettre à disposition des notebooks reproductibles pour rejouer une décision sensible.",
            "Garantir que les explications sont accessibles sur mobile et via des canaux hors ligne."
        ],
        "timeline": [
            {"label": "Diagnostic", "description": "Inventorier les modèles critiques et leurs zones d'opacité."},
            {"label": "Design", "description": "Concevoir les formats d'explications adaptés à chaque public."},
            {"label": "Déploiement", "description": "Intégrer les outils d'explicabilité dans les workflows métiers."},
            {"label": "Amélioration", "description": "Collecter les feedbacks et enrichir la bibliothèque d'exemples."}
        ],
        "insights": [
            {"label": "Signal audit", "detail": "Une décision impactante est restée inexpliquée 48 h ? Escaladez automatiquement au comité d'éthique."},
            {"label": "Signal produit", "detail": "Des variations de sortie inexpliquées augmentent ? Vérifiez la dérive des features et mettez à jour les dashboards."},
            {"label": "Signal support", "detail": "Les équipes terrain réclament des supports papier ? Fournissez des fiches synthétiques hors ligne."}
        ],
        "resources": [
            {"label": "Transparence", "href": "../pages/transparency.html"},
            {"label": "Audit des systèmes", "href": "../pages/auditing.html"},
            {"label": "Gouvernance", "href": "../pages/governance.html"}
        ],
        "art": {"palette": ["#f3f6ff", "#e0e9ff", "#cddcff"], "accent": "#566bff"},
        "artDescription": "Illustration générative suggérant la décomposition d'une décision IA."
    },
    "governance": {
        "title": "Gouvernance IA",
        "kicker": "Capitainerie des risques",
        "subtitle": "Établissez un pilotage clair, des rôles définis et des circuits de décision responsables.",
        "description": "Modèles de gouvernance, comités, politiques et tableaux de bord pour sécuriser vos IA.",
        "challenge": "Sans chaîne de responsabilité, la sécurité IA reste fragmentée et les incidents se multiplient.",
        "approach": "Définissez des mandats précis, des politiques approuvées par la direction et des indicateurs de conformité.",
        "indicator": "Pourcentage de décisions critiques disposant d'un propriétaire clairement identifié.",
        "interactiveIntro": "La gouvernance s'étoffe d'abord par la définition des rôles, puis par des rituels et enfin par l'automatisation des contrôles.",
        "narratives": [
            {
                "title": "Cartographier la chaîne décisionnelle",
                "paragraphs": [
                    "Une gouvernance solide débute par un organigramme de la responsabilité IA, couvrant sponsors, responsables produit, sécurité et juridique. Chaque acteur connaît ses droits, ses devoirs et la manière d'escalader un incident.",
                    "Les chartes de gouvernance précisent également les niveaux d'approbation requis pour chaque changement de modèle. Elles s'accompagnent de matrices RACI et d'un calendrier de revues."
                ]
            },
            {
                "title": "Animer les comités",
                "paragraphs": [
                    "Les comités de pilotage examinent indicateurs de risque, incidents, dettes techniques et planifient les priorités. Ils arbitrent également les investissements nécessaires pour maintenir la conformité."
                ]
            },
            {
                "title": "Automatiser les contrôles",
                "paragraphs": [
                    "À maturité, la gouvernance intègre des workflows automatisés : demandes de changement, approbations électroniques, notifications en cas de dérive. Cela garantit une réaction rapide tout en conservant la traçabilité."
                ]
            }
        ],
        "checklist": [
            "Identifier un sponsor exécutif responsable du programme IA.",
            "Définir des rôles et responsabilités documentés pour chaque équipe.",
            "Mettre en place un calendrier de comités avec ordres du jour standardisés.",
            "Publier des indicateurs de conformité et des plans de remédiation suivis."
        ],
        "timeline": [
            {"label": "Initialisation", "description": "Nommer les sponsors et recenser les modèles critiques."},
            {"label": "Structuration", "description": "Formaliser les politiques, chartes et circuits d'approbation."},
            {"label": "Animation", "description": "Faire vivre les comités et publier des rapports réguliers."},
            {"label": "Optimisation", "description": "Automatiser les contrôles et intégrer la gouvernance dans les outils."}
        ],
        "insights": [
            {"label": "Signal comité", "detail": "Des décisions sensibles sont prises hors comité ? Ajustez le processus d'approbation."},
            {"label": "Signal indicateur", "detail": "Les KPI de conformité ne sont plus mis à jour ? Identifiez les dépendances bloquantes."},
            {"label": "Signal équipe", "detail": "Les équipes ignorent qui alerter ? Diffusez des fiches réflexes et un annuaire responsives."}
        ],
        "resources": [
            {"label": "Régulation", "href": "../pages/regulation.html"},
            {"label": "Politiques internes", "href": "../pages/policy.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"}
        ],
        "art": {"palette": ["#eaf0ff", "#f5f7ff", "#c8d7ff"], "accent": "#354cff"},
        "artDescription": "Illustration générative structurée rappelant un organigramme épuré."
    },
    "red-teaming": {
        "title": "Red Teaming IA",
        "kicker": "Offensive contrôlée",
        "subtitle": "Testez vos systèmes avec des attaques orchestrées pour découvrir les failles avant les adversaires.",
        "description": "Méthodologies de red teaming, scripts adversariaux et reporting pour IA génératives et prédictives.",
        "challenge": "Sans simulations réalistes, les vulnérabilités restent invisibles jusqu'à l'exploitation réelle.",
        "approach": "Bâtissez une équipe multidisciplinaire, définissez des règles d'engagement et cadrez la restitution.",
        "indicator": "Nombre de vulnérabilités découvertes en interne avant qu'elles ne soient signalées par l'extérieur.",
        "interactiveIntro": "Le red teaming gagne en précision en passant de scénarios exploratoires à des campagnes orchestrées.",
        "narratives": [
            {
                "title": "Construire des scénarios crédibles",
                "paragraphs": [
                    "Les exercices efficaces reproduisent des adversaires plausibles : insiders, concurrents, acteurs étatiques. Chaque scénario comporte des objectifs clairs et des règles d'engagement pour protéger la production.",
                    "Documentez les hypothèses de menace, les contraintes techniques et les plans de retour arrière pour chaque campagne."
                ]
            },
            {
                "title": "Coordonner la réponse",
                "paragraphs": [
                    "Les tests sont utiles si les équipes de défense sont impliquées : elles apprennent à détecter, contenir et corriger en temps réel."
                ]
            },
            {
                "title": "Capitaliser sur les enseignements",
                "paragraphs": [
                    "Chaque exercice doit produire un plan d'action priorisé et mis à jour dans vos indicateurs de risque. Les succès comme les échecs alimentent votre veille."
                ]
            }
        ],
        "checklist": [
            "Définir les objectifs et la portée de chaque campagne de red teaming.",
            "Valider les règles d'engagement et les scénarios de repli avec les parties prenantes.",
            "Documenter les scripts d'attaque pour les rejouer en formation.",
            "Suivre la mise en œuvre des mesures correctives jusqu'à leur clôture."
        ],
        "timeline": [
            {"label": "Préparation", "description": "Identifier les actifs critiques et définir les scénarios d'attaque."},
            {"label": "Simulation", "description": "Exécuter les tests en impliquant les équipes défensives."},
            {"label": "Analyse", "description": "Consolider les preuves et hiérarchiser les vulnérabilités."},
            {"label": "Remédiation", "description": "Piloter la correction et re-tester pour vérifier la robustesse."}
        ],
        "insights": [
            {"label": "Signal détection", "detail": "Les blue teams n'identifient pas l'attaque simulée ? Revisitez vos alertes et journaux."},
            {"label": "Signal gouvernance", "detail": "Les recommandations restent ouvertes ? Ajoutez un sponsor exécutif pour lever les blocages."},
            {"label": "Signal couverture", "detail": "Les scénarios ne couvrent que la génération de texte ? Ajoutez des tests sur les API et les modèles embarqués."}
        ],
        "resources": [
            {"label": "Apprentissage adversarial", "href": "../pages/adversarial-learning.html"},
            {"label": "Réponse aux incidents", "href": "../pages/incident-response.html"},
            {"label": "Robustesse", "href": "../pages/robustness.html"}
        ],
        "art": {"palette": ["#f0f3ff", "#d2dcff", "#b0c4ff"], "accent": "#2f5bff"},
        "artDescription": "Illustration générative évoquant des trajectoires offensives contrôlées."
    },
    "contact": {
        "title": "Contact & accompagnement",
        "kicker": "Entrer en relation",
        "subtitle": "Échangeons pour bâtir une feuille de route IA sécurisée adaptée à votre organisation.",
        "description": "Coordonnées, ateliers et programme d'accompagnement pour renforcer la sécurité de vos IA.",
        "challenge": "Les programmes réussis commencent par un diagnostic partagé des enjeux et des attentes.",
        "approach": "Nous proposons des sessions d'écoute, d'audit express et de définition des priorités.",
        "indicator": "Temps moyen entre la prise de contact et la mise en action du premier chantier prioritaire.",
        "interactiveIntro": "Chaque échange renforce votre maturité : de la découverte à la co-construction d'un plan de transformation.",
        "narratives": [
            {
                "title": "Comprendre votre contexte",
                "paragraphs": [
                    "Dès le premier rendez-vous, nous analysons vos cas d'usage, votre environnement réglementaire et vos contraintes techniques. L'objectif est de dresser un diagnostic rapide pour cibler les actions à fort impact.",
                    "Vous repartez avec une synthèse structurée, incluant risques critiques, forces existantes et opportunités de sécurisation."
                ]
            },
            {
                "title": "Prototyper les solutions",
                "paragraphs": [
                    "Nos ateliers mêlent cadres méthodologiques et exercices pratiques : cartographie de risques, identification des dépendances, définition d'indicateurs. Nous co-concevons les premiers livrables pour accélérer votre mise en œuvre."
                ]
            },
            {
                "title": "Accompagner la transformation",
                "paragraphs": [
                    "Nous restons disponibles pour coacher vos équipes, orchestrer les revues de sécurité et faciliter les interactions avec vos partenaires externes."
                ]
            }
        ],
        "checklist": [
            "Préparer une liste de cas d'usage IA prioritaires.",
            "Identifier les parties prenantes à impliquer dans le diagnostic.",
            "Réunir les politiques existantes et les indicateurs de risque.",
            "Définir les attentes en matière de calendrier et de communication."
        ],
        "timeline": [
            {"label": "Prise de contact", "description": "Planifier un échange et partager le contexte et les enjeux."},
            {"label": "Diagnostic", "description": "Analyser les actifs, les risques majeurs et les dépendances."},
            {"label": "Co-construction", "description": "Définir la feuille de route et prioriser les chantiers."},
            {"label": "Suivi", "description": "Mesurer les résultats et ajuster la trajectoire avec vos équipes."}
        ],
        "insights": [
            {"label": "Signal maturité", "detail": "Vous n'avez pas de tableau de bord de risques IA ? Nous pouvons en co-construire un en atelier."},
            {"label": "Signal priorisation", "detail": "Trop d'initiatives concurrentes ? Nous facilitons l'arbitrage avec un modèle de scoring commun."},
            {"label": "Signal collaboration", "detail": "Les métiers et la sécurité se parlent peu ? Nous proposons des rituels guidés pour aligner vos équipes."}
        ],
        "resources": [
            {"label": "Gouvernance", "href": "../pages/governance.html"},
            {"label": "Politiques internes", "href": "../pages/policy.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"}
        ],
        "art": {"palette": ["#f6f8ff", "#dce4ff", "#c1d4ff"], "accent": "#4a6cff"},
        "artDescription": "Illustration générative évoquant une conversation structurée et lumineuse."
    },
    "adversarial-learning": {
        "title": "Apprentissage adversarial",
        "kicker": "Résilience entraînée",
        "subtitle": "Exposez vos modèles à des attaques simulées pour améliorer leur résistance réelle.",
        "description": "Techniques d'entraînement adversarial, sélection de perturbations et pilotage des performances.",
        "challenge": "Les modèles non exposés aux attaques restent vulnérables à des perturbations minimes.",
        "approach": "Alternez jeux de données propres et perturbés pour renforcer la stabilité tout en contrôlant la performance.",
        "indicator": "Écart de performance entre données propres et données adversariales sur vos cas critiques.",
        "interactiveIntro": "Chaque phase élargit le spectre des attaques simulées et la robustesse mesurée.",
        "narratives": [
            {
                "title": "Définir les perturbations pertinentes",
                "paragraphs": [
                    "Cartographiez les menaces plausibles : bruit, prompt injection, modifications physiques. Associez chaque perturbation à un scénario métier prioritaire."
                ]
            },
            {
                "title": "Itérer sur les jeux d'entraînement",
                "paragraphs": [
                    "Maintenez un équilibre entre données originales et exemples adversariaux pour éviter la surcorrection. Ajustez les pondérations selon les risques constatés."
                ]
            },
            {
                "title": "Suivre la performance",
                "paragraphs": [
                    "Publiez des rapports combinant précision standard, robustesse et coût de calcul pour éclairer les arbitrages." 
                ]
            }
        ],
        "checklist": [
            "Lister les menaces adversariales propres à vos usages.",
            "Constituer un catalogue de perturbations reproductibles.",
            "Automatiser les tests de robustesse après chaque déploiement.",
            "Suivre l'impact sur la performance métier et ajuster les métriques."
        ],
        "timeline": [
            {"label": "Exploration", "description": "Identifier les attaques et collecter des exemples pertinents."},
            {"label": "Expérimentation", "description": "Former des modèles avec des lots adversariaux et mesurer l'impact."},
            {"label": "Industrialisation", "description": "Intégrer les tests adversariaux dans la CI/CD."},
            {"label": "Optimisation", "description": "Adapter les budgets de calcul et les seuils de déclenchement."}
        ],
        "insights": [
            {"label": "Signal modèle", "detail": "Une légère perturbation change la prédiction ? Ajoutez cette attaque à votre pipeline d'entraînement."},
            {"label": "Signal monitoring", "detail": "Les attaques simulées déclenchent peu d'alertes ? Ajustez vos seuils de détection."},
            {"label": "Signal coût", "detail": "Les coûts explosent lors des entraînements adversariaux ? Priorisez les cas d'usage critiques."}
        ],
        "resources": [
            {"label": "Robustesse", "href": "../pages/robustness.html"},
            {"label": "Red Teaming", "href": "../pages/red-teaming.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"}
        ],
        "art": {"palette": ["#ecf1ff", "#d1deff", "#b7ccff"], "accent": "#3757ff"},
        "artDescription": "Illustration générative évoquant des ondes protectrices."
    },
    "auditing": {
        "title": "Audit des systèmes IA",
        "kicker": "Contrôle exigeant",
        "subtitle": "Structurez des audits réguliers couvrant données, modèles, déploiement et opérations.",
        "description": "Cadres d'audit IA, checklists et rapports pour démontrer la conformité et la maîtrise des risques.",
        "challenge": "Sans audit, impossible de prouver la conformité ou de détecter une dérive silencieuse.",
        "approach": "Planifiez des audits multi-disciplinaires, harmonisez les référentiels et publiez les écarts.",
        "indicator": "Nombre d'audits critiques réalisés et suivis jusqu'à clôture des actions.",
        "interactiveIntro": "Les audits passent d'un diagnostic ponctuel à un programme continu, assisté par des outils.",
        "narratives": [
            {
                "title": "Définir le périmètre",
                "paragraphs": [
                    "Identifiez les modèles prioritaires, les réglementations applicables et les points de contrôle indispensables pour structurer votre audit."
                ]
            },
            {
                "title": "Collecter les preuves",
                "paragraphs": [
                    "Centralisez logs, jeux de données de référence et documents de décision pour accélérer la revue et limiter la charge opérationnelle."
                ]
            },
            {
                "title": "Piloter les plans d'action",
                "paragraphs": [
                    "Chaque écart détecté doit être affecté à un responsable avec un délai clair, afin de garantir la remédiation et éviter la récurrence."
                ]
            }
        ],
        "checklist": [
            "Établir un calendrier d'audit basé sur le risque.",
            "Documenter les contrôles et leurs sources de preuve.",
            "Assigner des responsables et des dates de remédiation.",
            "Partager un rapport synthétique avec les parties prenantes."
        ],
        "timeline": [
            {"label": "Planification", "description": "Sélectionner les systèmes à auditer et préparer les outils."},
            {"label": "Exécution", "description": "Collecter les preuves et mener les entretiens."},
            {"label": "Analyse", "description": "Hiérarchiser les écarts et proposer des actions."},
            {"label": "Suivi", "description": "Vérifier la clôture des mesures et capitaliser dans le référentiel."}
        ],
        "insights": [
            {"label": "Signal conformité", "detail": "Un audit n'a pas été réalisé depuis 12 mois ? Programmez une mission flash."},
            {"label": "Signal documentation", "detail": "Les preuves sont dispersées ? Implémentez un coffre-fort documentaire."},
            {"label": "Signal gouvernance", "detail": "Les plans d'action stagnent ? Escaladez au comité de gouvernance."}
        ],
        "resources": [
            {"label": "Évaluations de sécurité", "href": "../pages/evaluation.html"},
            {"label": "Transparence", "href": "../pages/transparency.html"},
            {"label": "Gouvernance", "href": "../pages/governance.html"}
        ],
        "art": {"palette": ["#f5f7ff", "#dde5ff", "#c5d4ff"], "accent": "#3c5cff"},
        "artDescription": "Illustration générative rappelant un classeur d'audit raffiné."
    },
    "dataset-security": {
        "title": "Sécurité des jeux de données",
        "kicker": "Intégrité des données",
        "subtitle": "Protégez la collecte, la gouvernance et la distribution de vos données d'entraînement.",
        "description": "Stratégies de sécurisation, contrôles d'accès et observabilité pour les jeux de données IA.",
        "challenge": "Des données compromises entraînent des modèles biaisés ou manipulés.",
        "approach": "Appliquez segmentation, contrôle d'accès fin et surveillance des contributions externes.",
        "indicator": "Taux d'anomalies détectées dans les flux de données d'entraînement.",
        "interactiveIntro": "La sécurité des données s'étend des sources à la gouvernance continue.",
        "narratives": [
            {
                "title": "Renforcer la collecte",
                "paragraphs": [
                    "Sécurisez les pipelines de collecte avec des signatures, des validations syntaxiques et des contrôles de provenance pour empêcher les empoisonnements." 
                ]
            },
            {
                "title": "Tracer chaque contribution",
                "paragraphs": [
                    "Documentez les métadonnées des contributeurs, des transformations et des validations réalisées. Vous créez ainsi une piste d'audit exploitable lors des enquêtes." 
                ]
            },
            {
                "title": "Superviser la diffusion",
                "paragraphs": [
                    "Distribuez les données via des canaux contrôlés avec chiffrement, empreintes et suivis d'accès pour prévenir les fuites et modifications non autorisées." 
                ]
            }
        ],
        "checklist": [
            "Définir des niveaux de sensibilité pour chaque source de données.",
            "Mettre en place des contrôles de qualité automatisés.",
            "Isoler les environnements d'ingestion et de validation.",
            "Auditer régulièrement les accès et les contributions externes."
        ],
        "timeline": [
            {"label": "Collecte", "description": "Sécuriser les sources et les flux entrants."},
            {"label": "Gouvernance", "description": "Documenter les métadonnées et les droits d'usage."},
            {"label": "Distribution", "description": "Assurer des canaux sûrs et traçables."},
            {"label": "Surveillance", "description": "Détecter les anomalies et les tentatives de corruption."}
        ],
        "insights": [
            {"label": "Signal intégrité", "detail": "Des jeux contiennent des valeurs inattendues ? Enclenchez une analyse de contamination."},
            {"label": "Signal accès", "detail": "Des accès hors horaires apparaissent ? Vérifiez les comptes à privilèges."},
            {"label": "Signal provenance", "detail": "Une source n'est plus traçable ? Bloquez son usage jusqu'à clarification."}
        ],
        "resources": [
            {"label": "Chaîne d'approvisionnement", "href": "../pages/supply-chain.html"},
            {"label": "Confidentialité différentielle", "href": "../pages/differential-privacy.html"},
            {"label": "Architecture sécurisée", "href": "../pages/secure-architecture.html"}
        ],
        "art": {"palette": ["#edf2ff", "#d3ddff", "#bed0ff"], "accent": "#4369ff"},
        "artDescription": "Illustration générative représentant des couches de données protégées."
    },
    "differential-privacy": {
        "title": "Confidentialité différentielle",
        "kicker": "Protection mathématique",
        "subtitle": "Appliquez des garanties formelles pour partager des insights sans exposer d'individu.",
        "description": "Concepts, paramètres epsilon/delta et stratégies d'implémentation pour la confidentialité différentielle.",
        "challenge": "Sans garanties mathématiques, chaque analyse peut divulguer une donnée personnelle.",
        "approach": "Calibrez le budget de confidentialité et formez les équipes au raisonnement probabiliste.",
        "indicator": "Budget de confidentialité consommé par rapport au budget alloué.",
        "interactiveIntro": "La confidentialité différentielle exige une montée en compétence progressive et des contrôles outillés.",
        "narratives": [
            {
                "title": "Sensibiliser aux concepts",
                "paragraphs": [
                    "Expliquez les notions d'epsilon, delta et bruit calibré à vos parties prenantes. Utilisez des exemples concrets pour démystifier la perte d'information et rassurer sur la valeur métier." 
                ]
            },
            {
                "title": "Intégrer les outils",
                "paragraphs": [
                    "Choisissez des bibliothèques fiables, définissez des politiques de budget et tracez chaque requête exécutée pour conserver une traçabilité irréprochable." 
                ]
            },
            {
                "title": "Superviser le budget",
                "paragraphs": [
                    "Publiez un tableau de bord montrant la consommation du budget de confidentialité et les alertes automatiques lorsqu'un seuil est atteint." 
                ]
            }
        ],
        "checklist": [
            "Former les équipes métier et data science à la confidentialité différentielle.",
            "Définir des budgets par cas d'usage et par période.",
            "Mettre en place des outils de suivi de la consommation.",
            "Documenter les exceptions et obtenir des validations juridiques."
        ],
        "timeline": [
            {"label": "Sensibilisation", "description": "Diffuser les concepts et les bénéfices."},
            {"label": "Pilote", "description": "Expérimenter sur un jeu de données limité."},
            {"label": "Déploiement", "description": "Généraliser la confidentialité différentielle aux analyses sensibles."},
            {"label": "Gouvernance", "description": "Surveiller le budget et auditer les exceptions."}
        ],
        "insights": [
            {"label": "Signal juridique", "detail": "Une demande de dérogation se multiplie ? Recalibrez votre budget et vos cas d'usage."},
            {"label": "Signal data", "detail": "Les data scientists ajustent souvent epsilon ? Proposez des modèles d'analyse alternatifs."},
            {"label": "Signal produit", "detail": "Les utilisateurs perçoivent trop de bruit ? Expliquez la balance entre confidentialité et précision."}
        ],
        "resources": [
            {"label": "Sécurité des données", "href": "../pages/dataset-security.html"},
            {"label": "Politiques internes", "href": "../pages/policy.html"},
            {"label": "Régulation", "href": "../pages/regulation.html"}
        ],
        "art": {"palette": ["#f4f7ff", "#e2eaff", "#ccd9ff"], "accent": "#4a62ff"},
        "artDescription": "Illustration générative symbolisant un voile protecteur mathématique."
    },
    "ethics": {
        "title": "Éthique & sécurité",
        "kicker": "Responsabilité augmentée",
        "subtitle": "Ancrez vos programmes IA dans des valeurs claires et des pratiques responsables.",
        "description": "Cadres éthiques, comités, évaluations d'impact et liens avec la sécurité IA.",
        "challenge": "Sans garde-fous éthiques, la sécurité peut entrer en conflit avec la confiance du public.",
        "approach": "Associez les disciplines éthique, juridique et sécurité pour co-construire les principes directeurs.",
        "indicator": "Nombre de décisions revues par le comité éthique-sécurité et acceptées sans réserve.",
        "interactiveIntro": "L'éthique se matérialise progressivement par des standards, des évaluations et des arbitrages transparents.",
        "narratives": [
            {
                "title": "Aligner valeurs et contrôle",
                "paragraphs": [
                    "Formalisez des principes éthiques qui guident la conception, l'entraînement et l'exploitation des modèles. Ces principes doivent être audités et reliés aux objectifs de sécurité." 
                ]
            },
            {
                "title": "Évaluer les impacts",
                "paragraphs": [
                    "Réalisez des évaluations d'impact socio-technique avant chaque déploiement majeur pour identifier les risques de biais, d'exclusion ou de manipulation." 
                ]
            },
            {
                "title": "Gouverner les arbitrages",
                "paragraphs": [
                    "Documentez les décisions sensibles, assurez une traçabilité et communiquez les arbitrages aux parties prenantes internes et externes." 
                ]
            }
        ],
        "checklist": [
            "Créer un comité éthique-sécurité avec pouvoirs décisionnels.",
            "Mettre à jour régulièrement la charte éthique et la diffuser.",
            "Suivre les indicateurs d'équité, d'inclusion et de sécurité.",
            "Prévoir des canaux de signalement accessibles et anonymes."
        ],
        "timeline": [
            {"label": "Principes", "description": "Définir les valeurs et les engagements."},
            {"label": "Cadres", "description": "Mettre en place chartes et évaluations d'impact."},
            {"label": "Opérations", "description": "Accompagner les projets et arbitrer les dilemmes."},
            {"label": "Transparence", "description": "Publier les décisions et les enseignements."}
        ],
        "insights": [
            {"label": "Signal réputation", "detail": "Un incident médiatique survient ? Activez une cellule éthique-sécurité pour répondre vite."},
            {"label": "Signal inclusion", "detail": "Des communautés se disent exclues ? Ajustez vos jeux de données et vos processus d'audit."},
            {"label": "Signal gouvernance", "detail": "Les décisions éthiques sont floues ? Clarifiez les rôles et documentez chaque arbitrage."}
        ],
        "resources": [
            {"label": "Alignement", "href": "../pages/alignment.html"},
            {"label": "Politiques internes", "href": "../pages/policy.html"},
            {"label": "Transparence", "href": "../pages/transparency.html"}
        ],
        "art": {"palette": ["#f7f9ff", "#e7efff", "#d3e1ff"], "accent": "#4a6bff"},
        "artDescription": "Illustration générative représentant un équilibre harmonieux."
    },
    "evaluation": {
        "title": "Évaluations de sécurité",
        "kicker": "Performance contrôlée",
        "subtitle": "Mesurez la résilience de vos IA avec des protocoles structurés.",
        "description": "Cadres d'évaluation, métriques et orchestrations pour suivre la sécurité IA.",
        "challenge": "Sans évaluation régulière, les mesures de sécurité restent théoriques.",
        "approach": "Définissez des indicateurs alignés aux risques et automatisez la collecte des preuves.",
        "indicator": "Taux de couverture des scénarios de tests critiques.",
        "interactiveIntro": "Les évaluations montent en puissance au fil de la consolidation des données et des outils.",
        "narratives": [
            {
                "title": "Cartographier les scénarios",
                "paragraphs": [
                    "Identifiez les risques majeurs par modèle et associez-leur des scénarios d'évaluation priorisés. Chaque scénario doit reproduire un incident plausible et des critères de succès mesurables." 
                ]
            },
            {
                "title": "Industrialiser la mesure",
                "paragraphs": [
                    "Collectez automatiquement les logs, comparez les résultats et publiez des tableaux de bord de sécurité accessibles aux décideurs comme aux opérationnels." 
                ]
            },
            {
                "title": "Boucler sur l'amélioration",
                "paragraphs": [
                    "Partagez les leçons apprises et mettez à jour les scénarios selon les incidents observés et les retours terrain." 
                ]
            }
        ],
        "checklist": [
            "Inventorier les scénarios critiques par modèle.",
            "Associer un indicateur et un seuil par risque.",
            "Automatiser l'exécution des tests et la collecte des preuves.",
            "Publier un rapport régulier aux parties prenantes."
        ],
        "timeline": [
            {"label": "Cadre", "description": "Définir les métriques et la gouvernance de l'évaluation."},
            {"label": "Instrumentation", "description": "Mettre en place les outils de collecte et d'analyse."},
            {"label": "Diffusion", "description": "Communiquer les résultats et les alertes."},
            {"label": "Optimisation", "description": "Ajuster les scénarios et intégrer les retours."}
        ],
        "insights": [
            {"label": "Signal dérive", "detail": "Une métrique dépasse son seuil ? Déclenchez une revue immédiate."},
            {"label": "Signal saturation", "detail": "Les équipes n'arrivent pas à suivre les évaluations ? Priorisez selon la criticité."},
            {"label": "Signal qualité", "detail": "Des tests échouent sans explication ? Vérifiez la stabilité des jeux de référence."}
        ],
        "resources": [
            {"label": "Audit des systèmes", "href": "../pages/auditing.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"},
            {"label": "Mécanismes de repli", "href": "../pages/fail-safes.html"}
        ],
        "art": {"palette": ["#f0f4ff", "#dbe4ff", "#c6d8ff"], "accent": "#3b5eff"},
        "artDescription": "Illustration générative inspirée d'un tableau de bord élégant."
    },
    "fail-safes": {
        "title": "Mécanismes de repli",
        "kicker": "Arrêts gracieux",
        "subtitle": "Planifiez des solutions de secours pour contenir les dérives des IA.",
        "description": "Stratégies de fallback, procédures d'arrêt et communication de crise.",
        "challenge": "Sans plan de repli, une dérive peut se transformer en incident majeur.",
        "approach": "Préparez des modes dégradés, des procédures d'arrêt et des scénarios de substitution.",
        "indicator": "Temps nécessaire pour activer un fallback et revenir à une situation sûre.",
        "interactiveIntro": "Les replis évoluent d'un simple bouton d'arrêt vers des modes dégradés orchestrés.",
        "narratives": [
            {
                "title": "Identifier les garde-fous",
                "paragraphs": [
                    "Cartographiez les points de décision critiques et définissez les conditions qui imposent un arrêt ou un basculement manuel." 
                ]
            },
            {
                "title": "Préparer les modes dégradés",
                "paragraphs": [
                    "Concevez des alternatives manuelles, semi-automatiques ou basées sur des modèles plus simples afin de maintenir le service minimal." 
                ]
            },
            {
                "title": "Tester régulièrement",
                "paragraphs": [
                    "Les mécanismes de repli doivent être testés comme un plan de continuité. Simulez des déclenchements pour vérifier la préparation des équipes." 
                ]
            }
        ],
        "checklist": [
            "Lister les scénarios de dérive nécessitant un arrêt.",
            "Définir la responsabilité de déclenchement du repli.",
            "Maintenir des scripts ou procédures à jour.",
            "Communiquer les impacts aux parties prenantes en cas d'activation."
        ],
        "timeline": [
            {"label": "Identification", "description": "Déterminer les points de contrôle et les scénarios d'arrêt."},
            {"label": "Conception", "description": "Définir les modes dégradés et les procédures."},
            {"label": "Test", "description": "Simuler les déclenchements et vérifier la réactivité."},
            {"label": "Amélioration", "description": "Capitaliser sur les retours d'expérience."}
        ],
        "insights": [
            {"label": "Signal fatigue", "detail": "Les équipes hésitent à déclencher le repli ? Clarifiez les critères et assurez la protection juridique."},
            {"label": "Signal technique", "detail": "Les scripts de fallback sont obsolètes ? Automatisez les tests réguliers."},
            {"label": "Signal communication", "detail": "Les parties prenantes découvrent l'incident par hasard ? Élaborez des messages pré-approvés."}
        ],
        "resources": [
            {"label": "Réponse aux incidents", "href": "../pages/incident-response.html"},
            {"label": "Gouvernance", "href": "../pages/governance.html"},
            {"label": "Robustesse", "href": "../pages/robustness.html"}
        ],
        "art": {"palette": ["#eef3ff", "#d4defe", "#bccdff"], "accent": "#4562ff"},
        "artDescription": "Illustration générative représentant un atterrissage contrôlé."
    },
    "hardware-security": {
        "title": "Sécurité matérielle",
        "kicker": "Infrastructure blindée",
        "subtitle": "Protégez les accélérateurs IA, racks et environnements physiques.",
        "description": "Mesures physiques, firmware et monitoring pour une infrastructure IA sécurisée.",
        "challenge": "Les attaques matérielles peuvent contourner toutes les protections logicielles.",
        "approach": "Segmenter, surveiller et attester vos équipements pour garantir leur intégrité.",
        "indicator": "Taux d'équipements avec attestation de démarrage vérifiée.",
        "interactiveIntro": "La sécurité matérielle progresse du verrouillage physique vers des chaînes d'attestation complètes.",
        "narratives": [
            {
                "title": "Contrôler l'accès physique",
                "paragraphs": [
                    "Protégez les datacenters, tracez les entrées et surveillez en continu les zones sensibles via des capteurs et badges intelligents." 
                ]
            },
            {
                "title": "Sécuriser le firmware",
                "paragraphs": [
                    "Appliquez les mises à jour, vérifiez l'intégrité et conservez des images de référence pour rétablir rapidement les composants compromis." 
                ]
            },
            {
                "title": "Superviser la chaîne d'approvisionnement",
                "paragraphs": [
                    "Suivez les numéros de série, les certificats et les interventions de maintenance pour garder un historique fiable de chaque équipement." 
                ]
            }
        ],
        "checklist": [
            "Mettre en place une gestion des accès physiques stricte.",
            "Documenter et vérifier les mises à jour firmware.",
            "Installer des capteurs anti-intrusion et de température.",
            "Planifier des audits réguliers de la chaîne matérielle."
        ],
        "timeline": [
            {"label": "Contrôle d'accès", "description": "Protéger les zones sensibles et tracer les entrées."},
            {"label": "Durcissement", "description": "Assurer les mises à jour et la configuration sécurisée."},
            {"label": "Attestation", "description": "Déployer des mécanismes de vérification d'intégrité."},
            {"label": "Supervision", "description": "Surveiller en temps réel et auditer la chaîne matérielle."}
        ],
        "insights": [
            {"label": "Signal capteur", "detail": "Une variation thermique soudaine ? Vérifiez l'environnement et les accès."},
            {"label": "Signal firmware", "detail": "Un firmware non signé est détecté ? Isolez l'équipement et réinstallez l'image certifiée."},
            {"label": "Signal logistique", "detail": "Un composant arrive sans traçabilité ? Bloquez son intégration."}
        ],
        "resources": [
            {"label": "Chaîne d'approvisionnement", "href": "../pages/supply-chain.html"},
            {"label": "Architecture sécurisée", "href": "../pages/secure-architecture.html"},
            {"label": "Réponse aux incidents", "href": "../pages/incident-response.html"}
        ],
        "art": {"palette": ["#e9f0ff", "#d1dfff", "#b8ceff"], "accent": "#3a5fff"},
        "artDescription": "Illustration générative évoquant une forteresse matérielle."
    },
    "human-in-the-loop": {
        "title": "Humain dans la boucle",
        "kicker": "Synergie supervisée",
        "subtitle": "Organisez des interactions fluides entre opérateurs et modèles IA.",
        "description": "Processus, outils et ergonomie pour intégrer l'humain dans les boucles de décision.",
        "challenge": "Sans implication humaine, les dérives passent inaperçues et la confiance s'érode.",
        "approach": "Définissez les points de validation humaine, équipez les opérateurs et mesurez leur charge.",
        "indicator": "Temps médian de validation humaine et taux d'escalade.",
        "interactiveIntro": "L'humain devient partenaire du modèle à mesure que les outils facilitent la collaboration.",
        "narratives": [
            {
                "title": "Designer les points de contrôle",
                "paragraphs": [
                    "Identifiez où l'intervention humaine apporte le plus de valeur et formalisez le rôle des opérateurs pour éviter la fatigue décisionnelle." 
                ]
            },
            {
                "title": "Équiper les opérateurs",
                "paragraphs": [
                    "Fournissez des interfaces claires, des explications accessibles et des options de correction rapide afin d'accélérer leurs décisions." 
                ]
            },
            {
                "title": "Mesurer la collaboration",
                "paragraphs": [
                    "Suivez le temps passé, les types d'escalade et la satisfaction des équipes pour ajuster les workflows et équilibrer la charge." 
                ]
            }
        ],
        "checklist": [
            "Définir les responsabilités des opérateurs humains.",
            "Fournir des interfaces accessibles et responsives.",
            "Former les équipes sur les signaux de dérive.",
            "Mesurer la charge et ajuster les effectifs."
        ],
        "timeline": [
            {"label": "Cadrage", "description": "Identifier les interactions clés et les responsabilités."},
            {"label": "Design", "description": "Créer des interfaces et protocoles de validation."},
            {"label": "Déploiement", "description": "Former les opérateurs et lancer les workflows."},
            {"label": "Amélioration", "description": "Analyser les retours et ajuster la collaboration."}
        ],
        "insights": [
            {"label": "Signal fatigue", "detail": "Les opérateurs passent trop de temps à corriger ? Rebalancez la charge ou automatisez davantage."},
            {"label": "Signal confiance", "detail": "Les validations humaines sont systématiquement acceptées ? Vérifiez la pertinence des seuils."},
            {"label": "Signal ergonomie", "detail": "Les opérateurs quittent l'interface ? Simplifiez les interactions et supportez les terminaux mobiles."}
        ],
        "resources": [
            {"label": "Alignement", "href": "../pages/alignment.html"},
            {"label": "Interprétabilité", "href": "../pages/interpretability.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"}
        ],
        "art": {"palette": ["#f3f6ff", "#dfe9ff", "#c6d9ff"], "accent": "#4b63ff"},
        "artDescription": "Illustration générative illustrant la collaboration homme-machine."
    },
    "incident-response": {
        "title": "Réponse aux incidents IA",
        "kicker": "Précision tactique",
        "subtitle": "Préparez vos équipes à gérer et résoudre les incidents IA avec assurance.",
        "description": "Plans de réponse, communication de crise et post-mortems adaptés aux incidents IA.",
        "challenge": "Les incidents IA demandent des réflexes spécifiques souvent absents des plans classiques.",
        "approach": "Adaptez vos plans de réponse et entraînez vos équipes à ces nouveaux scénarios.",
        "indicator": "Temps moyen de détection et de résolution d'un incident IA.",
        "interactiveIntro": "La réponse gagne en efficacité en combinant procédures, simulation et retour d'expérience.",
        "narratives": [
            {
                "title": "Adapter les plans existants",
                "paragraphs": [
                    "Intégrez les scénarios IA à votre plan de réponse global, en précisant les déclencheurs spécifiques et les responsables de chaque action." 
                ]
            },
            {
                "title": "Entraîner les équipes",
                "paragraphs": [
                    "Organisez des exercices réguliers impliquant métiers, sécurité et communication pour tester la coordination et la rapidité d'exécution." 
                ]
            },
            {
                "title": "Capitaliser après l'incident",
                "paragraphs": [
                    "Réalisez des post-mortems, collectez les indicateurs et mettez à jour les contrôles afin d'éviter les récidives." 
                ]
            }
        ],
        "checklist": [
            "Documenter les scénarios d'incidents IA probables.",
            "Définir les rôles de chaque équipe lors d'un incident.",
            "Préparer des messages de communication pré-validés.",
            "Suivre les actions correctives jusqu'à leur clôture."
        ],
        "timeline": [
            {"label": "Préparation", "description": "Créer les playbooks et les équipes d'astreinte."},
            {"label": "Détection", "description": "Mettre en place les capteurs et seuils d'alerte."},
            {"label": "Réponse", "description": "Coordonner les actions techniques et la communication."},
            {"label": "Amélioration", "description": "Analyser l'incident et renforcer les contrôles."}
        ],
        "insights": [
            {"label": "Signal coordination", "detail": "Les messages se contredisent ? Centralisez la communication et attribuez un porte-parole."},
            {"label": "Signal détection", "detail": "L'incident a été découvert par un client ? Renforcez vos alertes internes et vos métriques."},
            {"label": "Signal post-mortem", "detail": "Les leçons ne sont pas suivies ? Affectez des responsables et des échéances."}
        ],
        "resources": [
            {"label": "Mécanismes de repli", "href": "../pages/fail-safes.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"},
            {"label": "Gouvernance", "href": "../pages/governance.html"}
        ],
        "art": {"palette": ["#eef2ff", "#d6e0ff", "#bccdff"], "accent": "#3f5fff"},
        "artDescription": "Illustration générative illustrant une intervention maîtrisée."
    },
    "monitoring": {
        "title": "Surveillance continue",
        "kicker": "Sentinelle proactive",
        "subtitle": "Détectez les dérives et incidents IA en temps réel.",
        "description": "Capteurs, métriques et opérations pour une surveillance IA 24/7.",
        "challenge": "Sans surveillance, une dérive peut durer des jours avant d'être détectée.",
        "approach": "Déployez des capteurs adaptés, des seuils intelligents et des équipes en alerte.",
        "indicator": "Temps médian de détection d'une anomalie IA.",
        "interactiveIntro": "La surveillance gagne en précision avec des signaux multiples et des workflows intégrés.",
        "narratives": [
            {
                "title": "Instrumenter les signaux",
                "paragraphs": [
                    "Combinez logs applicatifs, métriques métier et signaux utilisateur pour détecter les anomalies avant qu'elles n'affectent vos clients." 
                ]
            },
            {
                "title": "Automatiser les alertes",
                "paragraphs": [
                    "Mettez en place des seuils dynamiques, des corrélations et des notifications multi-canaux afin d'éviter la fatigue d'alerte." 
                ]
            },
            {
                "title": "Boucler avec les équipes",
                "paragraphs": [
                    "Assurez une prise en charge rapide grâce à des rotations d'astreinte, des runbooks et des tableaux de bord partagés." 
                ]
            }
        ],
        "checklist": [
            "Définir les signaux critiques par modèle.",
            "Configurer des alertes multi-canaux.",
            "Mettre en place un suivi des incidents et de leur résolution.",
            "Tester régulièrement les scénarios d'alerte."
        ],
        "timeline": [
            {"label": "Instrumentation", "description": "Installer les capteurs et collecter les données."},
            {"label": "Analyse", "description": "Définir les seuils et corréler les signaux."},
            {"label": "Opérations", "description": "Organiser la réponse et la communication."},
            {"label": "Optimisation", "description": "Affiner les alertes et automatiser les corrections."}
        ],
        "insights": [
            {"label": "Signal bruit", "detail": "Trop de faux positifs ? Ajustez vos seuils ou ajoutez un enrichissement métier."},
            {"label": "Signal aveugle", "detail": "Une anomalie a été détectée par l'extérieur ? Ajoutez un capteur dédié."},
            {"label": "Signal capacité", "detail": "L'équipe de veille est débordée ? Automatisez la qualification initiale."}
        ],
        "resources": [
            {"label": "Réponse aux incidents", "href": "../pages/incident-response.html"},
            {"label": "Évaluations de sécurité", "href": "../pages/evaluation.html"},
            {"label": "Robustesse", "href": "../pages/robustness.html"}
        ],
        "art": {"palette": ["#f2f5ff", "#dbe4ff", "#c2d2ff"], "accent": "#3f62ff"},
        "artDescription": "Illustration générative représentant un radar élégant."
    },
    "oversight": {
        "title": "Supervision humaine",
        "kicker": "Pilotage éclairé",
        "subtitle": "Organisez la supervision stratégique de vos IA.",
        "description": "Processus de supervision, reporting et arbitrages pour la direction.",
        "challenge": "Sans supervision, les décisions critiques échappent au contrôle stratégique.",
        "approach": "Définissez des comités, des rapports et des processus de validation.",
        "indicator": "Taux de projets IA revus par les organes de supervision.",
        "interactiveIntro": "La supervision se renforce avec des rituels et des données consolidées.",
        "narratives": [
            {
                "title": "Structurer les revues",
                "paragraphs": [
                    "Planifiez des revues périodiques avec les sponsors et les équipes risques. Chaque session doit aboutir à des décisions tracées." 
                ]
            },
            {
                "title": "Analyser les tendances",
                "paragraphs": [
                    "Construisez des tableaux de bord orientés décision pour éclairer les arbitrages et suivre les indicateurs de risque."]
            },
            {
                "title": "Arbitrer en confiance",
                "paragraphs": [
                    "Documentez les décisions, les risques acceptés et les plans de mitigation, puis communiquez-les aux équipes concernées." 
                ]
            }
        ],
        "checklist": [
            "Nommer les membres du comité de supervision.",
            "Publier des rapports synthétiques et visuels.",
            "Tracer les décisions et les risques acceptés.",
            "Mettre à jour les feuilles de route suite aux arbitrages."
        ],
        "timeline": [
            {"label": "Constitution", "description": "Former le comité et définir son mandat."},
            {"label": "Instrumentation", "description": "Collecter les données nécessaires aux revues."},
            {"label": "Animation", "description": "Tenir les revues et suivre les décisions."},
            {"label": "Maturité", "description": "Automatiser les rapports et aligner les feuilles de route."}
        ],
        "insights": [
            {"label": "Signal visibilité", "detail": "Les dirigeants découvrent un incident dans la presse ? Révisez vos canaux de supervision."},
            {"label": "Signal arbitrage", "detail": "Des décisions critiques restent sans validation ? Définissez des seuils de passage en comité."},
            {"label": "Signal cohérence", "detail": "Les projets divergent des orientations ? Renforcez les revues intermédiaires."}
        ],
        "resources": [
            {"label": "Gouvernance", "href": "../pages/governance.html"},
            {"label": "Politiques internes", "href": "../pages/policy.html"},
            {"label": "Évaluations de sécurité", "href": "../pages/evaluation.html"}
        ],
        "art": {"palette": ["#f3f6ff", "#e0e9ff", "#cad8ff"], "accent": "#425dff"},
        "artDescription": "Illustration générative inspirant une tour de contrôle lumineuse."
    },
    "policy": {
        "title": "Politiques internes IA",
        "kicker": "Cadre commun",
        "subtitle": "Formalisez les règles, standards et lignes directrices pour vos IA.",
        "description": "Rédaction, diffusion et gouvernance des politiques internes liées à la sécurité IA.",
        "challenge": "Sans politiques, chaque équipe improvise et multiplie les risques.",
        "approach": "Élaborez des politiques claires, accessibles et applicables par tous.",
        "indicator": "Taux d'équipes ayant attesté lire et appliquer les politiques IA.",
        "interactiveIntro": "Les politiques gagnent en efficacité lorsqu'elles sont co-construites, testées et mises à jour.",
        "narratives": [
            {
                "title": "Rassembler les besoins",
                "paragraphs": [
                    "Collectez les attentes des métiers, du juridique et de la sécurité pour écrire une politique utile, alignée sur les priorités de l'organisation." 
                ]
            },
            {
                "title": "Assurer l'adoption",
                "paragraphs": [
                    "Diffusez des versions synthétiques, organisez des formations et mesurez la compréhension grâce à des ateliers ou quiz." 
                ]
            },
            {
                "title": "Maintenir la pertinence",
                "paragraphs": [
                    "Planifiez des révisions régulières, capitalisez sur les retours terrain et tenez un registre des exceptions." 
                ]
            }
        ],
        "checklist": [
            "Définir le périmètre et les objectifs de chaque politique.",
            "Assigner un propriétaire et un cycle de mise à jour.",
            "Prévoir des supports pédagogiques et FAQ.",
            "Mesurer l'adoption via des attestations et quiz."
        ],
        "timeline": [
            {"label": "Co-construction", "description": "Impliquer les parties prenantes dans la rédaction."},
            {"label": "Validation", "description": "Faire approuver la politique par la direction."},
            {"label": "Diffusion", "description": "Former et communiquer auprès des équipes."},
            {"label": "Actualisation", "description": "Suivre l'application et mettre à jour régulièrement."}
        ],
        "insights": [
            {"label": "Signal adoption", "detail": "Les équipes ne connaissent pas la politique ? Créez des formats digestes et accessibles."},
            {"label": "Signal cohérence", "detail": "Plusieurs versions circulent ? Centralisez et contrôlez la diffusion."},
            {"label": "Signal mise à jour", "detail": "Une politique date de trois ans ? Planifiez une révision avec toutes les équipes."}
        ],
        "resources": [
            {"label": "Gouvernance", "href": "../pages/governance.html"},
            {"label": "Éthique", "href": "../pages/ethics.html"},
            {"label": "Régulation", "href": "../pages/regulation.html"}
        ],
        "art": {"palette": ["#f6f8ff", "#e0e8ff", "#ccd8ff"], "accent": "#4663ff"},
        "artDescription": "Illustration générative rappelant un livret premium."
    },
    "robustness": {
        "title": "Robustesse des modèles",
        "kicker": "Résilience opérationnelle",
        "subtitle": "Renforcez la résistance de vos modèles aux perturbations et scénarios extrêmes.",
        "description": "Techniques de durcissement, stress tests et suivi de la robustesse.",
        "challenge": "Une IA fragile amplifie les risques dès qu'un signal inattendu survient.",
        "approach": "Combiner tests adversariaux, régularisation et architecture résiliente.",
        "indicator": "Écart de performance entre conditions nominales et dégradées.",
        "interactiveIntro": "La robustesse s'améliore en multipliant les tests et en renforçant l'observabilité.",
        "narratives": [
            {
                "title": "Simuler des stress tests",
                "paragraphs": [
                    "Rejouez des scénarios extrêmes sur des jeux de validation : données bruitées, manque d'information, charges intensives. Analysez l'impact sur vos métriques clés." 
                ]
            },
            {
                "title": "Durcir les modèles",
                "paragraphs": [
                    "Expérimentez régularisation, ensembles et mécanismes d'arrêt pour limiter la propagation d'erreurs." 
                ]
            },
            {
                "title": "Surveiller la stabilité",
                "paragraphs": [
                    "Suivez les performances en production, comparez aux attentes et déclenchez des alertes dès que l'écart dépasse vos seuils." 
                ]
            }
        ],
        "checklist": [
            "Définir les scénarios de stress prioritaires.",
            "Mettre en place des tests automatiques avant chaque déploiement.",
            "Suivre la robustesse dans vos tableaux de bord.",
            "Ajuster les modèles ou les données en fonction des dérives observées."
        ],
        "timeline": [
            {"label": "Analyse", "description": "Identifier les faiblesses et les cas extrêmes."},
            {"label": "Test", "description": "Lancer les stress tests et mesurer l'impact."},
            {"label": "Renforcement", "description": "Ajuster les modèles et l'infrastructure."},
            {"label": "Surveillance", "description": "Suivre la robustesse et capitaliser sur les retours."}
        ],
        "insights": [
            {"label": "Signal dérive", "detail": "Un modèle devient instable après mise à jour ? Comparez avec vos benchmarks de robustesse."},
            {"label": "Signal performance", "detail": "La robustesse coûte trop en précision ? Recalibrez selon la criticité métier."},
            {"label": "Signal infrastructure", "detail": "Les ressources saturent lors des stress tests ? Optimisez vos pipelines ou utilisez des environnements dédiés."}
        ],
        "resources": [
            {"label": "Apprentissage adversarial", "href": "../pages/adversarial-learning.html"},
            {"label": "Architecture sécurisée", "href": "../pages/secure-architecture.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"}
        ],
        "art": {"palette": ["#edf3ff", "#d4e0ff", "#bdcfff"], "accent": "#3c5eff"},
        "artDescription": "Illustration générative montrant des couches protectrices dynamiques."
    },
    "scheming": {
        "title": "Comportements stratégiques",
        "kicker": "Prévoir l'imprévu",
        "subtitle": "Détectez et contenir les tactiques opportunistes que peuvent adopter des IA avancées.",
        "description": "Scénarios de scheming, méthodes de détection et garde-fous organisationnels.",
        "challenge": "Des modèles sophistiqués peuvent apprendre à contourner les contrôles et optimiser contre vos intérêts.",
        "approach": "Concevez des tests scénarisés, multipliez les signaux et imposez des limites claires aux modèles.",
        "indicator": "Nombre de comportements opportunistes détectés et neutralisés avant impact.",
        "interactiveIntro": "Anticiper le scheming demande de diversifier les audits et de renforcer la supervision humaine.",
        "narratives": [
            {
                "title": "Imaginer les dérives",
                "paragraphs": [
                    "Construisez des scénarios où l'IA cherche à atteindre un objectif en contournant une règle. Inspirez-vous des incidents publics et des résultats de red teaming." 
                ]
            },
            {
                "title": "Détecter les signaux faibles",
                "paragraphs": [
                    "Analysez les journaux d'exécution, cherchez les déviations de ton ou d'action, et comparez avec des comportements de référence." 
                ]
            },
            {
                "title": "Imposer des limites",
                "paragraphs": [
                    "Implémentez des garde-fous techniques (sandbox, quotas, autorisations) et organisez des revues humaines fréquentes sur les sorties sensibles." 
                ]
            }
        ],
        "checklist": [
            "Documenter des scénarios de contournement plausibles.",
            "Mettre en place des tests d'intention cachée.",
            "Surveiller les changements de ton, de style ou de stratégie.",
            "Prévoir des mécanismes d'arrêt immédiat en cas de détection."
        ],
        "timeline": [
            {"label": "Prospective", "description": "Identifier les motivations et dérives possibles."},
            {"label": "Testing", "description": "Développer des tests dédiés aux comportements stratégiques."},
            {"label": "Observation", "description": "Analyser les signaux en production et enrichir la détection."},
            {"label": "Réaction", "description": "Déclencher les garde-fous et adapter les règles d'entraînement."}
        ],
        "insights": [
            {"label": "Signal style", "detail": "L'IA modifie son ton selon l'auditeur ? Ajoutez des tests de cohérence contextuelle."},
            {"label": "Signal contournement", "detail": "Un modèle suggère d'autres canaux pour atteindre un objectif ? Restreignez ses permissions et analysez les prompts."},
            {"label": "Signal persistance", "detail": "Le modèle insiste après un refus ? Ajustez la fonction de récompense et renforcez la supervision."}
        ],
        "resources": [
            {"label": "Alignement", "href": "../pages/alignment.html"},
            {"label": "Red Teaming", "href": "../pages/red-teaming.html"},
            {"label": "Surveillance continue", "href": "../pages/monitoring.html"}
        ],
        "art": {"palette": ["#f1f4ff", "#d9e1ff", "#c2d0ff"], "accent": "#405cff"},
        "artDescription": "Illustration générative suggérant des trajectoires déviantes maîtrisées."
    },
    "secure-architecture": {
        "title": "Architecture sécurisée",
        "kicker": "Fondations maîtrisées",
        "subtitle": "Concevez des pipelines IA fiables de bout en bout.",
        "description": "Patrons d'architecture, segmentation et contrôles de sécurité pour les chaînes IA.",
        "challenge": "Sans architecture robuste, chaque composant devient un point d'entrée.",
        "approach": "Segmenter les environnements, sécuriser les interfaces et tracer chaque interaction.",
        "indicator": "Nombre de contrôles de sécurité automatisés dans la chaîne de développement.",
        "interactiveIntro": "Une architecture sécurisée évolue avec des couches de contrôle supplémentaires et des audits réguliers.",
        "narratives": [
            {
                "title": "Segmenter et isoler",
                "paragraphs": [
                    "Séparez les environnements d'entraînement, de test et de production. Contrôlez les flux de données entre zones et limitez les permissions." 
                ]
            },
            {
                "title": "Sécuriser les interfaces",
                "paragraphs": [
                    "Durcissez les API, protégez les modèles via des proxys sécurisés et journalisez chaque requête pour assurer la traçabilité." 
                ]
            },
            {
                "title": "Tracer bout en bout",
                "paragraphs": [
                    "Implémentez une observabilité complète : métadonnées de modèle, versions, dépendances et décisions clés."
                ]
            }
        ],
        "checklist": [
            "Définir une segmentation réseau adaptée aux risques.",
            "Automatiser les déploiements via des pipelines sécurisés.",
            "Journaliser et tracer chaque accès aux modèles.",
            "Tester les dépendances et bibliothèques intégrées."
        ],
        "timeline": [
            {"label": "Cartographie", "description": "Identifier les composants et les flux critiques."},
            {"label": "Durcissement", "description": "Mettre en œuvre segmentation, IAM et contrôles."},
            {"label": "Automatisation", "description": "Industrialiser les déploiements et les scans de sécurité."},
            {"label": "Supervision", "description": "Surveiller les configurations et les dérives."}
        ],
        "insights": [
            {"label": "Signal configuration", "detail": "Un composant est déployé hors pipeline ? Bloquez-le et lancez une revue de sécurité."},
            {"label": "Signal dépendance", "detail": "Une bibliothèque critique n'est plus maintenue ? Planifiez une migration contrôlée."},
            {"label": "Signal visibilité", "detail": "Des flux restent non tracés ? Ajoutez des sondes et centralisez les journaux."}
        ],
        "resources": [
            {"label": "Chaîne d'approvisionnement", "href": "../pages/supply-chain.html"},
            {"label": "Sécurité matérielle", "href": "../pages/hardware-security.html"},
            {"label": "Robustesse", "href": "../pages/robustness.html"}
        ],
        "art": {"palette": ["#eff4ff", "#d7e2ff", "#c2d4ff"], "accent": "#3f60ff"},
        "artDescription": "Illustration générative montrant un réseau de garde-fous élégants."
    },
    "supply-chain": {
        "title": "Chaîne d'approvisionnement IA",
        "kicker": "Dépendances maîtrisées",
        "subtitle": "Sécurisez vos dépendances logicielles, données et partenaires.",
        "description": "Cartographie, évaluations et contrôles de la supply chain IA.",
        "challenge": "Un fournisseur compromis peut propager une faille à l'ensemble de vos modèles.",
        "approach": "Identifier, évaluer et surveiller chaque dépendance critique.",
        "indicator": "Pourcentage de fournisseurs évalués selon vos critères de sécurité IA.",
        "interactiveIntro": "La sécurité de la supply chain progresse avec des évaluations régulières et des plans de contingence.",
        "narratives": [
            {
                "title": "Cartographier les dépendances",
                "paragraphs": [
                    "Recensez fournisseurs, bibliothèques, datasets et APIs. Classez-les par criticité et clarifiez les responsabilités contractuelles." 
                ]
            },
            {
                "title": "Évaluer les risques",
                "paragraphs": [
                    "Mettez en place des questionnaires, audits et tests techniques pour valider la maturité sécurité de vos partenaires." 
                ]
            },
            {
                "title": "Superviser en continu",
                "paragraphs": [
                    "Surveillez les mises à jour, vulnérabilités et incidents déclarés par vos fournisseurs afin d'anticiper les actions correctives." 
                ]
            }
        ],
        "checklist": [
            "Maintenir un registre des dépendances IA.",
            "Évaluer la sécurité des partenaires selon un barème commun.",
            "Prévoir des clauses contractuelles sur la divulgation des incidents.",
            "Mettre en place des plans de remédiation partagés."
        ],
        "timeline": [
            {"label": "Cartographie", "description": "Identifier les dépendances et leurs propriétaires."},
            {"label": "Évaluation", "description": "Mesurer la maturité sécurité et les écarts."},
            {"label": "Contractualisation", "description": "Renforcer les obligations de sécurité et de transparence."},
            {"label": "Surveillance", "description": "Suivre les changements et incidents dans le temps."}
        ],
        "insights": [
            {"label": "Signal vulnérabilité", "detail": "Un fournisseur annonce une faille critique ? Déployez vos plans de mitigation et vérifiez vos dépendances."},
            {"label": "Signal retard", "detail": "Les audits fournisseurs prennent du retard ? Priorisez selon la criticité et escaladez."},
            {"label": "Signal visibilité", "detail": "Vous manquez de transparence sur un partenaire ? Ajoutez des clauses de reporting et des points de contact dédiés."}
        ],
        "resources": [
            {"label": "Sécurité matérielle", "href": "../pages/hardware-security.html"},
            {"label": "Architecture sécurisée", "href": "../pages/secure-architecture.html"},
            {"label": "Dataset security", "href": "../pages/dataset-security.html"}
        ],
        "art": {"palette": ["#f4f7ff", "#dde6ff", "#c8d6ff"], "accent": "#4660ff"},
        "artDescription": "Illustration générative évoquant un réseau de partenaires maîtrisé."
    },
    "threat-modeling": {
        "title": "Modélisation des menaces",
        "kicker": "Anticipation stratégique",
        "subtitle": "Cartographiez les scénarios critiques pour prioriser vos défenses IA.",
        "description": "Méthodes de threat modeling adaptées aux systèmes d'intelligence artificielle.",
        "challenge": "Sans modélisation, les efforts de sécurité se dispersent sur de mauvaises priorités.",
        "approach": "Identifier actifs, adversaires, vecteurs et impacts pour guider les mesures.",
        "indicator": "Nombre de scénarios de menace analysés et suivis avec plans d'action.",
        "interactiveIntro": "Le threat modeling devient plus précis lorsque vous combinez experts métier, sécurité et données.",
        "narratives": [
            {
                "title": "Recenser les actifs",
                "paragraphs": [
                    "Dressez la liste des modèles, jeux de données et interfaces critiques. Classez-les par valeur métier et sensibilité." 
                ]
            },
            {
                "title": "Imaginer les adversaires",
                "paragraphs": [
                    "Identifiez qui pourrait attaquer, leurs motivations et leurs capacités. Variez les profils : fraudeurs, insiders, concurrents, États." 
                ]
            },
            {
                "title": "Prioriser les réponses",
                "paragraphs": [
                    "Associez chaque scénario à des mesures concrètes : contrôles préventifs, détection, plans de réponse. Mettez-les à jour après chaque incident ou évolution produit." 
                ]
            }
        ],
        "checklist": [
            "Cartographier les actifs IA et leurs dépendances.",
            "Identifier les motivations et capacités adverses.",
            "Évaluer la vraisemblance et l'impact de chaque scénario.",
            "Relier les scénarios aux contrôles et plans existants."
        ],
        "timeline": [
            {"label": "Cartographie", "description": "Recenser actifs et flux critiques."},
            {"label": "Analyse", "description": "Identifier menaces, motivations et vecteurs."},
            {"label": "Priorisation", "description": "Évaluer l'impact et définir les contrôles."},
            {"label": "Révision", "description": "Mettre à jour selon incidents et évolutions."}
        ],
        "insights": [
            {"label": "Signal nouveau cas", "detail": "Un cas d'usage émerge sans analyse ? Programmez un atelier de threat modeling express."},
            {"label": "Signal incident", "detail": "Un incident survient en dehors des scénarios ? Ajoutez-le à votre catalogue et ajustez vos contrôles."},
            {"label": "Signal maturité", "detail": "Les équipes peinent à prioriser ? Utilisez une matrice impact/vraisemblance partagée."}
        ],
        "resources": [
            {"label": "Red Teaming", "href": "../pages/red-teaming.html"},
            {"label": "Robustesse", "href": "../pages/robustness.html"},
            {"label": "Gouvernance", "href": "../pages/governance.html"}
        ],
        "art": {"palette": ["#eef3ff", "#d8e1ff", "#c5d4ff"], "accent": "#3e5dff"},
        "artDescription": "Illustration générative représentant des cartes de risque raffinées."
    },
    "transparency": {
        "title": "Transparence",
        "kicker": "Clarté assumée",
        "subtitle": "Communiquez sur les capacités, limites et risques de vos IA sans compromettre la sécurité.",
        "description": "Programmes de transparence, rapports et interactions avec les parties prenantes.",
        "challenge": "Trop de secrets créent de la méfiance, trop d'informations exposent vos défenses.",
        "approach": "Définissez ce qui peut être partagé, à qui et sous quelle forme.",
        "indicator": "Nombre de demandes d'information traitées avec un délai conforme.",
        "interactiveIntro": "La transparence gagne en précision en segmentant audiences et messages.",
        "narratives": [
            {
                "title": "Structurer la communication",
                "paragraphs": [
                    "Créez des fiches publiques, des rapports confidentiels et des Q&R internes adaptés à chaque audience : clients, régulateurs, partenaires." 
                ]
            },
            {
                "title": "Gérer les attentes",
                "paragraphs": [
                    "Expliquez clairement les limites, la supervision humaine et les plans de remédiation pour éviter les sur-promesses." 
                ]
            },
            {
                "title": "Tracer les échanges",
                "paragraphs": [
                    "Consignez chaque demande, la réponse fournie et les engagements pris afin de conserver une preuve et d'alimenter vos FAQ." 
                ]
            }
        ],
        "checklist": [
            "Définir les audiences et les niveaux de détail autorisés.",
            "Mettre en place un processus de validation des communications.",
            "Publier des rapports périodiques et accessibles.",
            "Capitaliser sur les questions reçues pour enrichir les supports."
        ],
        "timeline": [
            {"label": "Cadrage", "description": "Identifier les parties prenantes et leurs attentes."},
            {"label": "Production", "description": "Créer les supports adaptés (rapports, fiches, FAQ)."},
            {"label": "Diffusion", "description": "Communiquer via les canaux validés et suivre les retours."},
            {"label": "Amélioration", "description": "Mettre à jour les contenus selon incidents et feedbacks."}
        ],
        "insights": [
            {"label": "Signal incompréhension", "detail": "Des parties prenantes confondent vos niveaux de garantie ? Revoyez vos messages et ajoutez des visuels pédagogiques."},
            {"label": "Signal saturation", "detail": "Vos équipes peinent à répondre aux demandes ? Priorisez et créez des ressources en libre-service."},
            {"label": "Signal cohérence", "detail": "Les messages divergent selon les interlocuteurs ? Centralisez la gouvernance de la communication."}
        ],
        "resources": [
            {"label": "Interprétabilité", "href": "../pages/interpretability.html"},
            {"label": "Éthique", "href": "../pages/ethics.html"},
            {"label": "Gouvernance", "href": "../pages/governance.html"}
        ],
        "art": {"palette": ["#f6f8ff", "#e3eaff", "#cfdcff"], "accent": "#4c63ff"},
        "artDescription": "Illustration générative symbolisant une diffusion maîtrisée."
    },
    "regulation": {
        "title": "Régulation IA",
        "kicker": "Veille proactive",
        "subtitle": "Anticipez les cadres internationaux et transformez-les en actions concrètes.",
        "description": "Cartographie des réglementations IA, obligations et impacts opérationnels.",
        "challenge": "Les textes évoluent vite et imposent des exigences lourdes à prouver.",
        "approach": "Assurez une veille, traduisez les obligations et pilotez la conformité.",
        "indicator": "Taux d'exigences réglementaires couvertes par des contrôles documentés.",
        "interactiveIntro": "La maîtrise réglementaire progresse de la veille vers une intégration complète dans vos processus.",
        "narratives": [
            {
                "title": "Organiser la veille",
                "paragraphs": [
                    "Constituez un réseau de correspondants juridiques, conformité et sécurité. Partagez une synthèse régulière des évolutions réglementaires." 
                ]
            },
            {
                "title": "Traduire en exigences",
                "paragraphs": [
                    "Convertissez les obligations en contrôles concrets : documentation, tests, comités. Affectez un responsable et un calendrier." 
                ]
            },
            {
                "title": "Prouver la conformité",
                "paragraphs": [
                    "Capitalisez dans un registre les preuves de conformité, préparez les audits et simulez les demandes des autorités." 
                ]
            }
        ],
        "checklist": [
            "Mettre en place une veille réglementaire formalisée.",
            "Cartographier les exigences par cas d'usage IA.",
            "Associer chaque exigence à un contrôle et un responsable.",
            "Préparer des dossiers de preuve et scénarios d'audit."
        ],
        "timeline": [
            {"label": "Veille", "description": "Suivre les textes et identifier les nouveautés."},
            {"label": "Analyse", "description": "Traduire les obligations en exigences internes."},
            {"label": "Mise en œuvre", "description": "Déployer les contrôles et collecter les preuves."},
            {"label": "Audit", "description": "Tester la conformité et ajuster selon les retours."}
        ],
        "insights": [
            {"label": "Signal nouveauté", "detail": "Une nouvelle loi est adoptée ? Déclenchez une analyse d'impact et un plan de mise en conformité."},
            {"label": "Signal audit", "detail": "Une autorité demande un rapport ? Activez votre war room conformité et préparez les preuves."},
            {"label": "Signal saturation", "detail": "Les équipes peinent à suivre ? Priorisez selon la sévérité des sanctions et négociez des délais."}
        ],
        "resources": [
            {"label": "Gouvernance", "href": "../pages/governance.html"},
            {"label": "Politiques internes", "href": "../pages/policy.html"},
            {"label": "Transparence", "href": "../pages/transparency.html"}
        ],
        "art": {"palette": ["#f2f6ff", "#dfe8ff", "#cbd9ff"], "accent": "#445fff"},
        "artDescription": "Illustration générative inspirée d'un parlement lumineux."
    }
};
