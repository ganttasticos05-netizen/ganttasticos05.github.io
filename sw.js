const VERSION = "1.16"
const CACHE = "pwamd-v2"

const ARCHIVOS = [
  "index.html",
  "ayuda.html",
  "site.webmanifest",
  "favicon.ico",

  "css/estilos.css",
  "css/transicion_pestanas.css",
  "css/md-tab.css",
  "css/material-symbols-outlined.css",
  "css/md-list.css",
  "css/theme/light.css",
  "css/theme/dark.css",

  "img/BALTA.png",
  "img/HECTOR.png",
  "img/ITATI.png",
  "img/MENDIETA.png",
  "img/ROBER.png",
  "img/Vanne.png",

  "img/maskable_icon_x192.png",
  "img/maskable_icon_x512.png",
  "img/icon-192.png",
  "img/icon-512-maskable.png",

  "img/screenshot_horizontal.png",
  "img/screenshot_vertical.png",

  "js/nav-tab-fixed.js",
  "js/lib/getAttribute.js",
  "js/lib/querySelector.js",
  "js/lib/resaltaSiEstasEn.js"
]

self.addEventListener("install", (evt) => {
  console.log("SW instalado v" + VERSION)

  evt.waitUntil(
    caches.open(CACHE).then(cache => {
      return Promise.allSettled(
        ARCHIVOS.map(url =>
          cache.add(url).catch(() =>
            console.log("No cacheado:", url)
          )
        )
      )
    })
  )

  self.skipWaiting()
})

self.addEventListener("activate", (evt) => {
  console.log("SW activado")

  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE)
          .map(key => caches.delete(key))
      )
    )
  )

  self.clients.claim()
})

self.addEventListener("fetch", (evt) => {
  if (evt.request.method !== "GET") return

  evt.respondWith(
    caches.match(evt.request).then(res => {
      return res || fetch(evt.request)
    })
  )
})