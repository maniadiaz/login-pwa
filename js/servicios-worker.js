const CACHE_NAME = 'login-pwa-v1';
const FILES_TO_CACHE = [
  '/login-pwa/',
  '/login-pwa/index.html',
  '/login-pwa/dashboard.html',
  '/login-pwa/css/styles.css',
  '/login-pwa/js/main.js',
  '/login-pwa/assets/icons/icon-192.png',
  '/login-pwa/assets/icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css'
];

self.addEventListener('install',(e) =>{
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache)=>{
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
    .then((response) => response || fetch(e.request))
  );
});