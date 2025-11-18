const CACHE_NAME = "nutrien-cache-v7"; // Atau v8, jika v7 masih bermasalah
const urlsToCache = [
    "./index.html",
    "./manifest.json",
    "./iconNutrien-192.png", // Tambah
    "./iconNutrien-512.png"  // Tambah
];
self.addEventListener("install", e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache))); });
self.addEventListener("fetch", e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
