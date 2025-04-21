// service-worker.js

const CACHE_NAME = 'foodie-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/foodie.css',
  '/foodie.js',
  '/cardP1.jpg',
  '/cardP2.jpg',
  '/cardP3.jpg',
  '/cardP4.jpg',
  '/cardP5.jpg',
  '/cardP6.jpg',
  '/cardP7.jpg',
  '/cardP8.jpg',
  '/cardP9.jpg',
  '/cardP10.jpg',
  '/cardP15.jpg',
  '/cardP16.jpg',
  '/cardP17.jpg',
  '/aboutp.jpg',
  '/blog.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
