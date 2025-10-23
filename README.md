# Goat Survivors

Goat Survivors est un clone mono-page de Survivor-like jouable dans le navigateur. Tout le gameplay, les données et l'interface sont livrés en TypeScript (build Vite) avec rendu Canvas 2D.

## Fonctionnalités clés

- 4 héros chèvres jouables avec passifs distincts.
- 12 armes évolutives et 8 passifs, alimentés par des fichiers JSON éditables dans `data/`.
- Vagues d'ennemis progressives sur 7 minutes avec mini-boss et boss final.
- Système ECS léger, gestion seedable via `SeededRandom`.
- Sauvegarde locale du meilleur score et des options (audio, accessibilité, mode performance).
- Support desktop (clavier) et mobile (stick virtuel + bouton Dash).
- PWA simple (service worker + manifest) pour usage offline après premier chargement.

## Structure du dépôt

```
├── assets/ASSETS_TO_PRODUCE.txt   # liste exhaustive des assets attendus
├── data/                          # JSON gameplay (héros, armes, ennemis...)
├── public/                        # manifest + service worker
├── src/                           # code TypeScript (ECS, logique jeu, UI)
├── index.html                     # point d'entrée unique
├── package.json                   # scripts npm
└── README.md
```

## Développement

```bash
npm install
npm run dev
```

La page est accessible via `http://localhost:5173`. Pour un build de production :

```bash
npm run build
npm run preview
```

## Données

Toutes les valeurs d'équilibrage sont dans `data/`. Modifier un JSON ne nécessite pas de recompilation grâce au chargement dynamique.

- `heroes.json` : stats de base et passifs.
- `weapons.json` : armes, améliorations, évolutions.
- `passives.json` : passifs in-run.
- `ennemis.json` : trash/elites/boss.
- `waves.json` : pacing et hazards par biome.
- `xp_curve.json` : courbe de niveaux.

## Contrôles

| Plateforme | Contrôles |
|------------|-----------|
| Desktop    | ZQSD ou flèches pour se déplacer, `Espace` pour dash, `Échap` pour pause. |
| Mobile     | Stick virtuel gauche, bouton Dash à droite. |

Le tir est automatique, sans visée manuelle.

## Accessibilité

- Mode daltonisme paramétrable.
- Taille de police ajustable.
- Réglage de l'intensité des effets et mode performance.
- Volumes SFX/BGM indépendants.

## Offline

Un service worker (cache shell) est enregistré au chargement pour permettre une exécution offline après la première visite.

## Sauvegardes locales

- Options : `localStorage` clé `goat_survivors_options_v1`.
- High score : `localStorage` clé `goat_survivors_highscore_v1`.

Pour réinitialiser, supprimer les entrées correspondantes dans le stockage du navigateur.
