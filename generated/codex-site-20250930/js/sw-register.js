(() => {
    if (!('serviceWorker' in navigator)) {
        console.warn('Service worker non pris en charge.');
        return;
    }

    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('service-worker.js')
            .then((registration) => {
                console.info('Service worker enregistré.', registration.scope);
            })
            .catch((error) => {
                console.error('Échec de l\'enregistrement du service worker :', error);
                const announcement = document.createElement('div');
                announcement.className = 'sw-error';
                announcement.setAttribute('role', 'status');
                announcement.textContent = 'Mode hors ligne indisponible. Veuillez vérifier votre navigateur.';
                document.body.append(announcement);
            });
    });
})();
