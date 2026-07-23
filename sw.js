// Service Worker cơ bản để Chrome Android kích hoạt PWA App
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Cho phép app tải dữ liệu bình thường
  e.respondWith(fetch(e.request));
});
