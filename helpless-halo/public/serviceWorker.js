const cacheVersion = "v3";
const cacheAssets = [
  "/",
  "/blog/",
  "/instrumentenkauf/",
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
  "/klarinettenunterricht/",
  // Weitere URLs hinzufügen...
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheVersion).then((cache) => {
      return cache.addAll(cacheAssets).catch((error) => {
        console.error("Failed to cache assets during install", error);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        if (event.request.method === "GET") {
          return caches.open(cacheVersion).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        }
        return response;
      }).catch(() => {
        // Optional: Rückfall auf eine offline-freundliche Antwort
        return caches.match('/offline.html');
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== cacheVersion)
          .map((cacheName) => caches.delete(cacheName))
      );
    }).catch((error) => {
      console.error("Failed to clean up old caches during activation", error);
    })
  );
});
