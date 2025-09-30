# My Offline Site

Ce dépôt contient un site web entièrement hors ligne explorant les enjeux de la sécurité des intelligences artificielles.

## Fonctionnalités principales
- **Progressive Web App** avec manifest et service worker en cache-first.
- **25 pages de contenu** couvrant alignement, interprétabilité, gouvernance, résilience, etc.
- **Animations CSS et JavaScript** (défilement, particules canvas) pour un rendu moderne et dynamique.
- **Accessibilité et responsive design** inspiré d'une charte graphique sobre et élégante.
- **Dépendances 100 % locales** : aucune ressource distante, aucune police externe.

## Structure
```
my-offline-site/
├─ index.html
├─ README.md
├─ manifest.json
├─ service-worker.js
├─ css/
│  └─ styles.css
├─ js/
│  ├─ app.js
│  └─ sw-register.js
├─ assets/
│  ├─ images/
│  │  └─ hero.jpg.placeholder
│  └─ icons/
│     ├─ icon-192.png.placeholder
│     └─ icon.svg
└─ test/
   └─ check_site.js
```

## Remplacer les placeholders binaires

- `assets/images/hero.jpg.placeholder` → remplacez par votre visuel `hero.jpg` (même nom sans l'extension `.placeholder`).
- `assets/icons/icon-192.png.placeholder` → remplacez par une icône carrée 192×192 `icon-192.png`.

Supprimez les fichiers `.placeholder` après les avoir remplacés et, si nécessaire, ajustez les références dans `manifest.json` et `index.html`.

## Lancer un serveur local

Le service worker requiert un contexte sécurisé. Utilisez un serveur de développement simple :

```bash
cd my-offline-site
python -m http.server 8000
```

Ensuite, ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur. Après le premier chargement, le service worker mettra les ressources en cache pour une navigation hors connexion.

## Tests
Le script `test/check_site.js` vérifie que la page d'accueil répond correctement et contient la balise `meta` indiquant la compatibilité hors ligne. Exécutez :

```bash
node test/check_site.js
```

## Licence
Projet mis à disposition sans licence spécifique. Utilisation libre.
