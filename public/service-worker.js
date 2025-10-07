
const CACHE_NAME = 'krishi-mitra-static-v2';
const DYNAMIC_CACHE_NAME = 'krishi-mitra-dynamic-v2';

const APP_SHELL_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.svg',
];


self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Precaching App Shell...');
      return cache.addAll(APP_SHELL_FILES);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME && key !== DYNAMIC_CACHE_NAME) {
          console.log('[SW] Removing old cache:', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    if (url.origin !== self.location.origin) {
        event.respondWith(fetch(request));
        return;
    }

    if (url.pathname.match(/\.(mp4|jpg|png|jpeg|svg|gif)$/)) {
        event.respondWith(
            caches.match(request).then(response => {
                return response || fetch(request).then(fetchRes => {
                    return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
                        cache.put(request.url, fetchRes.clone());
                        return fetchRes;
                    });
                });
            })
        );
    } else {
        event.respondWith(
            caches.match(request).then(response => {
                const fetchPromise = fetch(request).then(networkResponse => {
                    return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
                        cache.put(request, networkResponse.clone());
                        return networkResponse;
                    });
                }).catch(err => {
                     console.warn('[SW] Fetch failed, serving from cache if available.', err);
                });
                return response || fetchPromise;
            })
        );
    }
});
