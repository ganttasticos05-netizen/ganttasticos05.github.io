const VERSION = "1.16"
const CACHE = "pwamd"

const ARCHIVOS = [
 "ayuda.html",
 "favicon.ico",
 "index.html",
 "site.webmanifest",

 "css/baseline.css",
 "css/colors.css",
 "css/elevation.css",
 "css/estilos.css",
 "css/material-symbols-outlined.css",
 "css/md-headline.css",
 "css/md-list.css",
 "css/md-tab.css",
 "css/motion.css",
 "css/palette.css",
 "css/roboto.css",
 "css/shape.css",
 "css/state.css",
 "css/transicion_pestanas.css",
 "css/typography.css",
 "css/theme/dark.css",
 "css/theme/light.css",

 "fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].codepoints",
 "fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].ttf",
 "fonts/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].woff2",
 "fonts/roboto-v32-latin-regular.woff2",

 "img/BALTA.png",
 "img/HECTOR.png",
 "img/icon-192.png",
 "img/icon-512-maskable.png", 
 "img/ITATI.png",
 "img/maskable_icon_x48.png",
 "img/maskable_icon_x72.png",
 "img/maskable_icon_x96.png",
 "img/maskable_icon_x128.png",
 "img/maskable_icon_x192.png",
 "img/maskable_icon_x384.png",
 "img/maskable_icon_x512.png",
 "img/Icono2048.png", 
 "img/maskable_icon.png",
 "img/MENDIETA.png",
 "img/ROBER.png",
 "img/screenshot_horizontal.png",
 "img/screenshot_vertical.png",
 "img/Vanne.png",             

 "js/nav-tab-fixed.js",
 "js/lib/getAttribute.js",
 "js/lib/querySelector.js",
 "js/lib/registraServiceWorker.js",
 "js/lib/resaltaSiEstasEn.js",

 "ungap/custom-elements.js"

]

if (self instanceof ServiceWorkerGlobalScope) {

 self.addEventListener("install", (evt) => {
  evt.waitUntil(llenaElCache())
 })

 self.addEventListener("fetch", (evt) => {
  if (evt.request.method === "GET") {
   evt.respondWith(buscaLaRespuestaEnElCache(evt))
  }
 })

 self.addEventListener("activate", (evt) => {
  evt.waitUntil(self.clients.claim())
 })
}

async function llenaElCache() {

 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }

 const cache = await caches.open(CACHE)

 for (const archivo of ARCHIVOS) {
  try {
   await cache.add(archivo)
  } catch (e) {
   console.error("Error cacheando:", archivo)
  }
 }
}

async function buscaLaRespuestaEnElCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 return response || fetch(evt.request)
}