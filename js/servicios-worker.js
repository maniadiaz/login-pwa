const CACHE_NAME = 'login-pwa-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/css/styles.css',
  '/js/main.js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css'
];

self.addEventListener('install',(e) =>{
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then((caches) => caches.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
    .then((response) => response || fetch(e.request))
  );
});