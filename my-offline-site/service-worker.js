const CACHE_NAME = 'safeintelligence-v1';
const ASSETS = [
    './',
    './assets/icons/icon.svg',
    './css/styles.css',
    './index.html',
    './js/app.js',
    './js/sw-register.js',
    './manifest.json',
    './pages/adversarial-learning.html',
    './pages/alignment.html',
    './pages/auditing.html',
    './pages/contact.html',
    './pages/dataset-security.html',
    './pages/differential-privacy.html',
    './pages/ethics.html',
    './pages/evaluation.html',
    './pages/fail-safes.html',
    './pages/governance.html',
    './pages/hardware-security.html',
    './pages/human-in-the-loop.html',
    './pages/incident-response.html',
    './pages/interpretability.html',
    './pages/monitoring.html',
    './pages/oversight.html',
    './pages/policy.html',
    './pages/red-teaming.html',
    './pages/regulation.html',
    './pages/robustness.html',
    './pages/scheming.html',
    './pages/secure-architecture.html',
    './pages/supply-chain.html',
    './pages/threat-modeling.html',
    './pages/transparency.html'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(request).then((networkResponse) => {
                const cloned = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, cloned));
                return networkResponse;
            }).catch(() => caches.match('./index.html'));
        })
    );
});
