const CACHE_NAME = 'odakla-v3';

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(event){
  // Network-only for now: no caching, to guarantee the latest version always loads
  // while the app is under active development. Offline caching can be reintroduced later.
});
