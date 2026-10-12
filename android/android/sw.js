const CACHE='lazixiang-android-test-v1';
const LOCAL=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(LOCAL)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin||!u.pathname.includes('/android/'))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
