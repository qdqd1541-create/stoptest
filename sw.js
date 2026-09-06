self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 요청을 가로채지 않고 그대로 통과시킴 (설치 조건 충족용)
self.addEventListener('fetch', () => {});
