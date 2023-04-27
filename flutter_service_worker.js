'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9c01f994a573af227cee8f7e34dad7cb",
"train.png": "db4acb455d43321f29f32d0a70feebb4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"manifest.json": "39f85feea3ba7e9f6e1bf54e57055197",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "932838ed43bbde72a89875bb49ff2ee7",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/NOTICES": "ec4914daacd49c88a3c0f233f75204cc",
"assets/assets/pdf/logo.svg": "6793043eebe054f683b5bf7fceb02780",
"assets/assets/pdf/pdf_footer.svg": "9b1eb93be32cd307f4d04cb430f78e9c",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/NotoSerif.ttf": "d1513e50a633aa74f136ae0b586472e9",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/NotoSerif-Bold.ttf": "2f1856f40c23b5110a880830be70ef57",
"assets/assets/images/Logo_Open_Camera.png": "db7813d0112f9d23e2da9814d8ce414d",
"assets/assets/icons/statistics.svg": "51e86e38004ba58dcd4cdfb07ff4a97e",
"assets/assets/icons/transaction.svg": "6a141469789a55a87a0f954a3dccd7e2",
"assets/assets/icons/checkbox_unchecked.svg": "cbd7d874151ce156b2c13f94c146620b",
"assets/assets/icons/settings.svg": "ec23fc06cdf77cf62f89960ac373e787",
"assets/assets/icons/inventory.svg": "ba577450f1b704d7f9be29024f8c6abf",
"assets/assets/icons/tax.svg": "7cbc4d21582078a81333bbb103a92ef8",
"assets/assets/icons/notification.svg": "aa53e911a94f1758ff18cd2e87622be0",
"assets/assets/icons/category.svg": "1ad904632979ac0f5cb6b33fa6a90820",
"assets/assets/icons/checkbox_checked.svg": "868ea6ea9ffcad92f48a1cd5d3d14047",
"assets/assets/icons/orders.svg": "79df215fc856f5ef32b7ccf2832e77da",
"assets/assets/icons/logo.svg": "6793043eebe054f683b5bf7fceb02780",
"assets/assets/icons/offers.svg": "1466d26296fafa1a0be919c6351b82f5",
"assets/assets/icons/search.svg": "dec0b8814500e0c47ad903738c7c34fc",
"assets/assets/icons/account.svg": "c7373b683c39fbdb56b8c345fa884beb",
"assets/assets/icons/delivery.svg": "49e88c123cddb9d5d557f4e1962a8917",
"assets/assets/icons/dashboard.svg": "4bc9b207820ead0703257ff138344306",
"assets/assets/icons/products.svg": "6c929aee9101169a3c23af5de8e1db95",
"assets/assets/icons/brand.svg": "2574834881dc2e0c451ddad95ed1e872",
"assets/assets/icons/certificate.svg": "034ef42e0c7c523695b6b0506a0b514a",
"assets/assets/icons/product_header.svg": "333cae3dacece5e5993fa11cbf75f465",
"assets/assets/languages/en-US.json": "7e3098ba552ab9e65c0f8bc868b94b3f",
"assets/assets/languages/ml.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "4f95b2f41c5b603633caebd71820d797",
"main.dart.js": "34a715db4ae3e8471655301950545a0c",
"index.html": "1b9c387846f0315f6d7e86c5ece26a9f",
"/": "1b9c387846f0315f6d7e86c5ece26a9f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
