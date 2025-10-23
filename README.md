# Goat Survivors (édition monopage)

Goat Survivors est un mini survivor-like 100 % contenu dans un unique fichier `index.html`. Aucun build ni asset graphique externe
n'est requis : toutes les entités sont rendues par des emojis ou des formes procédurales sur un canvas HTML5.

## Lancer le jeu

1. Télécharger ou cloner le dépôt.
2. Ouvrir `index.html` dans un navigateur moderne (Chrome, Edge, Firefox, Safari).
3. Le jeu fonctionne hors-ligne après le premier chargement grâce au stockage local pour les options et le high score.

## Fonctionnalités principales

- **4 héros chèvres** avec passifs distincts (gain d'XP, aura de gel, tank, foudre).
- **12 armes emblématiques** (Boule de feu Mario, Boomerang Zelda, Anneaux Sonic, etc.) et **8 passifs** disponibles lors des montées
de niveau.
- **Run de 7 minutes** avec pacing progressif, élites fréquents et trois boss déclenchés aux minutes 2:30, 5:00 et 7:00.
- **Biomes procéduraux** (Alpage, Cimetière) comportant des hazards dynamiques (bourrasques, cloches étourdissantes).
- **Contrôles desktop et mobile** : ZQSD/Flèches ou stick virtuel, dash sur Espace ou zone tactile dédiée.
- **Accessibilité** : mode daltonisme, taille d'interface ajustable, mode performance, volume audio réglable.
- **Sauvegarde locale** : options (`localStorage` clé `goat_survivors_options_v2`) et meilleur score (`goat_survivors_highscore_v2`).

## Structure du dépôt

```
├── index.html   # jeu complet (HTML + CSS + JS)
└── README.md
```

## Personnalisation rapide

Le haut du script contient les définitions des héros, armes, passifs, biomes, vagues et boss. Pour ajuster l'équilibrage ou ajouter un
contenu supplémentaire, modifier directement les objets JavaScript correspondants dans `index.html`.

## Contrôles détaillés

| Plateforme | Contrôles |
|------------|-----------|
| Desktop    | `ZQSD` ou flèches pour se déplacer • `Espace` pour dash • `P` pour pause |
| Mobile     | Stick virtuel (gauche) • Tap sur le coin inférieur droit pour dash |

Le tir et les effets sont automatiques en fonction des armes débloquées.

## Accessibilité et options

- **Mode daltonisme** : palette alternative en un clic.
- **Taille UI** : curseur de 85 % à 125 %.
- **Mode performance** : réduit la densité de spawn pour les appareils modestes.
- **Volume global** : réglage entre 0 et 100 %, activation audio au premier input pour compatibilité mobile.

## Données persistantes

- Supprimer ou réinitialiser les options via le bouton "Réinitialiser" du menu ou en vidant les clés de `localStorage`.
- Les seeds de run sont affichées sur l'écran de fin pour rejouer un record.

## Crédit

Jeu conçu pour démontrer un survivor-like "Goat Survivors" entièrement procédural, sans pipeline d'assets.
