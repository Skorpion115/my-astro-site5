// Globe Variablen
const assets = [
  "/",
  "/instrumentenkauf/",
  "/honorar/",
  "/leistungen/",
  "/faq/",
  "/download/",
  "/harmonielehre/",
  "/impressum/",
  "/contact/",
  "/thankyou/",
  "/contact_4/",
  "/klavierunterricht/",
  "/keyboardunterricht/",
  "/gitarrenunterricht/",
  "/e-bassunterricht/",
  "/e-gitarrenunterricht/",
  "/banjounterricht/",
  "/akkordeon-unterricht/",
  "/saxophonunterricht/",
  "/klarinettenunterricht/"
  
];
const cacheTypes = ["main", "font", "image"];
const cacheVersion = "_v3";

self.addEventListener("install", (event) => {
  // waitUntil - hält den SW in installing status etwas zu machen bevor Event abgeschlossen wird
  event.waitUntil(
    // Zugriff auf die Cache API im Browser um komplette Requests und Response zu speichern
    caches
      .open(cacheTypes[0] + cacheVersion)
      .then((cache) => {
        //Fügt alle Assets zum cache hinzu
        return cache.addAll(assets);
      })
      //.then(self.skipWaiting())
  );
});

function putInCache(request, response) {
  //Console.log(request, response);

  let cacheKey = cacheTypes.includes(request.destination)
    ? request.destination
    : "main";
  caches.open(cacheKey + cacheVersion).then((caches) => {
    caches.match(request, response);
  });
}

async function cacheFirst(request) {
    let responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
  
    let responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
}

async function networkFirst(request) {
    try {
      const responseFromNetwork = await fetch(request);
      putInCache(request, responseFromNetwork.clone());
      return responseFromNetwork;
    } catch {
      const responseFromCache = await caches.match(request);
      if (responseFromCache) {
        return responseFromCache;
      }
    }
}

self.addEventListener("fetch", (event) => {
    //console.log (event.request);
    let response = "";
  switch (event.request.destination) {
    case "font":
      response = cacheFirst(event.request);
      break;
    case "image":
      response = cacheFirst(event.request);
      break;
    default:
      response = networkFirst(event.request);
  }
  event.respondWith(response);
});

// Aktivate SW
async function deleteOldCaches() {
  // Welche Caches sollen erhalten bleiben
  let cacheKeepList = [];
  cacheTypes.forEach((element) => {
    cacheKeepList.push(element + cacheVersion);
  });

  // All caches werden ermittelt und gefiltert
  let keyList = await caches.keys();
  let cacheToDelete = keyList.filter((key) => !cacheKeepList.includes(key));

  // Löschen der Caches welche nicht benötigt werden
  return Promise.all(
    cacheToDelete.map((key) => {
      if (!cacheAllowList.includes(key)) {
        return caches.delete(key);
      }
    })
  );
}

self.addEventListener("activate", (event) => {
  console.log("service worker aktivated");
  event.waitUntil(
    deleteOldCaches().then(() => {
      //Damit alle Clients (Tabs im Browser) den aktivierten Service Worker nutzen
      // sonst erst nach erneutem Reload der Seite
      clients.claim();
    })
  );
});
