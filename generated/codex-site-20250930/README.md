# SafeIntelligence – snapshot 2025-09-30

Ce dossier contient une version entièrement hors ligne d'un site web consacré à la sécurité des intelligences artificielles. L'ensemble des fichiers (HTML, CSS, JS, manifest, service worker, tests et placeholders) est prêt à être copié tel quel dans un dépôt Git.

## Fonctionnalités principales
- **Progressive Web App** avec manifest et service worker en stratégie cache-first.
- **25 pages thématiques** couvrant alignement, interprétabilité, red teaming, gouvernance, etc.
- **Animations CSS et JavaScript** : transitions glassmorphism, effets de défilement, particules canvas et interactions accessibles.
- **Illustrations génératives** : chaque page et la galerie d'accueil utilisent un canvas procédural et des palettes définies localement.
- **Aucune dépendance distante** : aucune ressource CDN ou police externe, tout fonctionne hors connexion.

## Structure
```
generated/codex-site-20250930/
├─ index.html
├─ README.md
├─ manifest.json
├─ service-worker.js
├─ css/
│  └─ styles.css
├─ js/
│  ├─ app.js
│  ├─ page-data.js
│  └─ sw-register.js
├─ assets/
│  ├─ images/
│  │  └─ hero.jpg.placeholder
│  └─ icons/
│     ├─ icon-192.png.placeholder
│     └─ icon.svg
├─ pages/
│  ├─ alignment.html
│  ├─ adversarial-learning.html
│  ├─ auditing.html
│  ├─ contact.html
│  ├─ dataset-security.html
│  ├─ differential-privacy.html
│  ├─ ethics.html
│  ├─ evaluation.html
│  ├─ fail-safes.html
│  ├─ governance.html
│  ├─ hardware-security.html
│  ├─ human-in-the-loop.html
│  ├─ incident-response.html
│  ├─ interpretability.html
│  ├─ monitoring.html
│  ├─ oversight.html
│  ├─ policy.html
│  ├─ red-teaming.html
│  ├─ regulation.html
│  ├─ robustness.html
│  ├─ scheming.html
│  ├─ secure-architecture.html
│  ├─ supply-chain.html
│  ├─ threat-modeling.html
│  └─ transparency.html
└─ test/
   └─ check_site.js
```

## Personnaliser les contenus
Les textes, timelines, checklists et palettes d'illustrations sont centralisés dans `js/page-data.js`. Modifiez ce fichier pour adapter les contenus, les couleurs ou les accroches. Les pages consomment ces données dynamiquement à l'affichage.

## Remplacer les placeholders binaires
- `assets/images/hero.jpg.placeholder` → remplacez par votre visuel `hero.jpg` (même nom, sans l'extension `.placeholder`).
- `assets/icons/icon-192.png.placeholder` → remplacez par une icône carrée 192×192 `icon-192.png`.

Supprimez les fichiers `.placeholder` une fois vos médias en place et ajustez, si nécessaire, les références dans `manifest.json` et `index.html`.

## Lancer un serveur local
Le service worker requiert un contexte sécurisé. Utilisez un serveur de développement simple :

```bash
cd generated/codex-site-20250930
python -m http.server 8000
```

Ensuite, ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur. Après le premier chargement, le service worker mettra les ressources en cache pour une navigation hors connexion.

## Tests
Le script `test/check_site.js` vérifie que la page d'accueil répond correctement et contient la balise `meta` indiquant la compatibilité hors ligne. Exécutez :

```bash
cd generated/codex-site-20250930
node test/check_site.js
```

## Intégration Git – branche `main`
Pour intégrer ce dossier dans votre branche locale `main` :

```bash
git checkout main
git pull
cp -R generated/codex-site-20250930 <chemin-destination>
cd <racine-du-dépôt>
git add generated/codex-site-20250930
git commit -m "Add offline IA security site snapshot 20250930"
git push origin main
```

Adaptez `<chemin-destination>` et `<racine-du-dépôt>` à votre environnement si vous déplacez les fichiers.

## Création d'une PR depuis `codex-site-fresh-20250930`
Si vous préférez ouvrir une Pull Request :

```bash
git checkout -b codex-site-fresh-20250930
git add generated/codex-site-20250930
git commit -m "Add offline IA security site snapshot 20250930"
git push origin codex-site-fresh-20250930
# puis créez la PR (ex. via GitHub CLI)
gh pr create --base main --head codex-site-fresh-20250930 --fill
```

Remplacez la dernière commande par votre méthode de création de PR si vous n'utilisez pas GitHub CLI.
