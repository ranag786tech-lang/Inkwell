// ═══════════════════════════════════════════════════
//  INKWELL — Service Worker
//  Strategy: Cache-first for app shell, network-first
//  for fonts. Works fully offline after first load.
// ═══════════════════════════════════════════════════

const CACHE_NAME = 'inkwell-v1';

// Files to cache on install (app shell)
const PRECACHE = [
  './',
  './index.html',
];

// ── INSTALL ───────────────────────────────────────
// Cache the app shell immediately
self.addEventListener('install', event => {
  self.skipWaiting(); // activate immediately, don't wait
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE).catch(err => {
        // Silently fail if precache misses (e.g. local file://)
        console.warn('[SW] Precache partial fail:', err);
      });
    })
  );
});

// ── ACTIVATE ──────────────────────────────────────
// Delete old caches when a new SW takes over
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim()) // take control immediately
  );
});

// ── FETCH ─────────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = event.request.url;
  const method = event.request.method;

  // Only handle GET requests
  if (method !== 'GET') return;

  // Skip chrome-extension and non-http requests
  if (!url.startsWith('http')) return;

  // NETWORK-FIRST for Google Fonts (always want fresh fonts when online)
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request)) // offline fallback
    );
    return;
  }

  // CACHE-FIRST for everything else (app shell, assets)
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache it
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Completely offline and not cached — return nothing gracefully
        console.warn('[SW] Fetch failed for:', url);
      });
    })
  );
});

// ── MESSAGE ───────────────────────────────────────
// Allow the app to trigger SW updates manually
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
