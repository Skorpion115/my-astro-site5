const cacheVersion = "_v3";

const cacheAssets = [
  "/",
  "/instrumentenkauf/",
  "/blog/",
  "/tags/",
  "/contact_2/",
  "/thankyou/",
  "/danke-seite/",
  "/contact_4/",
  "/honorar/",
  "/unterricht/",
  "/faq/",
  "/download/",
  "/harmonielehre/",
  "/impressum/",
  "/datenschutz/",
  "/klavierunterricht/",
  "/keyboardunterricht/",
  "/gitarrenunterricht/",
  "/e-bassunterricht/",
  "/e-gitarrenunterricht/",
  "/banjounterricht/",
  "/akkordeonunterricht/",
  "/saxophonunterricht/",
  "/pupils-download/",
  "/querfloetenunterricht/",
  "/klarinettenunterricht/"
  // Füge hier die URLs für deine anderen Ressourcen hinzu...
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheVersion).then((cache) => {
      return cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((response) => {
        return caches.open(cacheVersion).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("service worker aktivated");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== cacheVersion;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
