/* LOUBICHKA® · application web
   Réseau d'abord : la cliente voit toujours la dernière version du site.
   La copie gardée sur le téléphone ne sert que si elle est hors connexion. */
const CACHE = 'loubichka-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || r.headers.has('range')) return;
  const u = new URL(r.url);
  if (u.origin !== location.origin || /\.(mp4|webm|mp3|pdf)$/i.test(u.pathname)) return;
  e.respondWith(
    fetch(r).then(res => {
      if (res.ok && res.type === 'basic') { const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)); }
      return res;
    }).catch(() => caches.match(r).then(m => m || (r.mode === 'navigate' ? caches.match('/piercing-party/') : undefined)))
  );
});
