'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fdc43bc3c611458500b53f5b778868c3",
"assets/AssetManifest.bin.json": "49013f07e267a23f81a6c280bf33150d",
"assets/AssetManifest.json": "18c2103288b0af893c2f19bdf99f0e82",
"assets/assets/ai/ai.PNG": "90681ce383bdf8b4c94b2bb3ac9e9256",
"assets/assets/ai/comaprePhoto.jpeg": "ce26650e744b535fa0bd92ab41e02e1a",
"assets/assets/ai/measuresurfacespace.jpeg": "26120d3f731d55d08b88946e6bfaa2e8",
"assets/assets/ai/vrtesting.jpeg": "0d7dc4180c6a10d1375861debdd8c535",
"assets/assets/backgroung.jpg": "82e29474c96c8e918d5417a18874106e",
"assets/assets/logo.png": "140b6fb0b3107a522fe1e2350b89d80b",
"assets/assets/mobile/addnew.jpg": "76023a4df022fa80880f68c409b2ba1a",
"assets/assets/mobile/calneder.jpg": "ac97f408027b52b1fc75acc48feb2595",
"assets/assets/mobile/does.jpg": "c83a2a0b47e3ce31c829a403fccd8a92",
"assets/assets/mobile/ecommercai_onborading.PNG": "55476dfb989bc4b140310f2b4ea6bc1f",
"assets/assets/mobile/ecommerce_login.PNG": "7397d8c1e65f2d2ae010140dd0d09b12",
"assets/assets/mobile/homepae2.jpg": "b84af327457f35e8148e27af8aa71689",
"assets/assets/mobile/homepage1.jpg": "f016ba49d99678466660cc83d9e1627d",
"assets/assets/mobile/homepage3.jpg": "aa2921bd2f13d2b30c6fb39ba6e77631",
"assets/assets/mobile/homepage5.jpg": "99eb86198c59155d9a93120d0c253335",
"assets/assets/mobile/login.jpg": "e282319107f6d084c5c38ca8d167b7b7",
"assets/assets/mobile/login2.jpg": "19bd1f8129e6ec394cf0a9761a9c03c6",
"assets/assets/mobile/login3.jpg": "fd7a87e730a6b48c53d5a0e2d46c68e4",
"assets/assets/mobile/login4.jpg": "69751993d38882d8d923d3b0dfb17fe8",
"assets/assets/mobile/notification.jpg": "38b85eb9c18dd5221fd01c27523a4720",
"assets/assets/mobile/post.jpg": "21c94006771d00e11f0980c9572ff1d2",
"assets/assets/mobile/settings.jpg": "4f23de5b6c9c93f6678378ccc0f411b5",
"assets/assets/mobile/signup.jpg": "1c2ed1f1b5865293b1e97d1ace96e8c1",
"assets/assets/mobile/signup3.jpg": "660f238a12e72953a9f4fa892c15b8a1",
"assets/assets/mobile/splach.jpg": "b25fd6f72f05bf74145b4b2b85a5c945",
"assets/assets/mobile/splach2.jpg": "96b8b1f9735712fe7426a4153ed753c4",
"assets/assets/mobile/type.jpg": "ee50806e5e279bdc0f1812311f8441fe",
"assets/assets/mobile/type2.jpg": "dc6172cfb8d73b78f95ba0307a409641",
"assets/assets/mobile/type3.jpg": "7b183283cdf8cd173b14b168b2351549",
"assets/assets/teacher.PNG": "4a1f0098a470f97dcdd158d513bcb493",
"assets/assets/web/card/Screenshot%2520(214).png": "c80fcd73806fb72f58088be2ae166538",
"assets/assets/web/card/Screenshot%2520(215).png": "729d95bd77a0212d2fae0829e26d9952",
"assets/assets/web/card/Screenshot%2520(216).png": "f58c79ec55e45c2a36c983afb1a3f666",
"assets/assets/web/card/Screenshot%2520(217).png": "72b0b0186552a26772b7cf076d3a6ca7",
"assets/assets/web/card/Screenshot%2520(218).png": "b82e82e2fb87cbd9ac1da679c75b0779",
"assets/assets/web/card/Screenshot%2520(219).png": "7c36610dfa83c41196952b0f2243c354",
"assets/assets/web/card/Screenshot%2520(220).png": "47d10d504fa291dce749ff867b02c961",
"assets/assets/web/card/Screenshot%2520(221).png": "1a54fb36a3548ee1d96a46df86f22ae6",
"assets/assets/web/card/Screenshot%2520(222).png": "5e48bd537c495fbec77d31d02b4c282a",
"assets/assets/web/card/Screenshot%2520(223).png": "464f7429e66c3d020dba9925cbd1fec8",
"assets/assets/web/card/Screenshot%2520(224).png": "0d9e97df0080013e2be2f377e480f8fb",
"assets/assets/web/card/Screenshot%2520(225).png": "ed992bac99fd0e62a5e66aecbc648b60",
"assets/assets/web/card/Screenshot%2520(226).png": "06980b03b22c786315a51779a30a86fd",
"assets/assets/web/card/Screenshot%2520(227).png": "a9ab3e6ba2747f55d30b21d1e0102263",
"assets/assets/web/card/Screenshot%2520(228).png": "7de19b75fc2ec64489b7a0ce61289e40",
"assets/assets/web/card/Screenshot%2520(229).png": "cb6fbf8220aab6db1dd58f507da76c16",
"assets/assets/web/card/Screenshot%2520(230).png": "9adb04f4cd242780cf7b8f0b701b99dc",
"assets/assets/web/card/Screenshot%2520(231).png": "fc4903092f894d3e7636f6ea7b1c55c0",
"assets/assets/web/card/Screenshot%2520(232).png": "9668fd1f0cf21ebb4c49dcff79658ff7",
"assets/assets/web/card/Screenshot%2520(233).png": "2a3ac231a9e4fa3afa4f1d9ef7b9f1ea",
"assets/assets/web/card/Screenshot%2520(234).png": "e27fd1935f37ea0d821ef9ccf1832b8a",
"assets/assets/web/card/Screenshot%2520(235).png": "909215c7803168f0d35d61cc6ad90326",
"assets/assets/web/card/Screenshot%2520(236).png": "f20ca55700b6ca29a2efa4e6032b9114",
"assets/assets/web/card/Screenshot%2520(237).png": "e470a8f567a7ff8b41ebbc71d4c78ce3",
"assets/assets/web/card/Screenshot%2520(238).png": "ad44f33399180222680578289aaf3fb2",
"assets/assets/web/card/Screenshot%2520(239).png": "ddbbb2076d9538a5cef3d1ff91b0f446",
"assets/assets/web/card/Screenshot%2520(240).png": "cd41f3a47dd9a422f372a9cb09d22c1d",
"assets/assets/web/card/Screenshot%2520(241).png": "21fa0c8836b278e2c976dc979d3da948",
"assets/assets/web/card/Screenshot%2520(242).png": "e5d5b8bd53daff4d5948155ca1b026c6",
"assets/assets/web/card/Screenshot%2520(243).png": "04dbbe99387a4e5ce853a3a8d176b3d0",
"assets/assets/web/card/Screenshot%2520(244).png": "31204cec20b1bbb16fabafded1ed9a71",
"assets/assets/web/card/Screenshot%2520(245).png": "36a1893361a9e55a6563b511a1689e36",
"assets/assets/web/card/Screenshot%2520(246).png": "9e55ea5581e9ef1cbef9a3869d2e820c",
"assets/assets/web/card/Screenshot%2520(247).png": "40b2cac7254c17b79a99d5c286040a10",
"assets/assets/web/card/Screenshot%2520(248).png": "5c4629b5d5b31b725989f86185b3a329",
"assets/assets/web/card/Screenshot%2520(249).png": "3975ba2967cdcea912f56874acfb273e",
"assets/assets/web/card/Screenshot%2520(250).png": "7802cf711573c65cb91f10d6e265357e",
"assets/assets/web/card/Screenshot%2520(251).png": "acb33a781f788648547bcb45179280f2",
"assets/assets/web/card/Screenshot%2520(252).png": "b62f3d11d58b118d8150fec958a43853",
"assets/assets/web/card/Screenshot%2520(253).png": "33d5d615796112a44405b0202107201f",
"assets/assets/web/card/Screenshot%2520(254).png": "502bf95ad7fb406298606ce4feae24b8",
"assets/assets/web/card/Screenshot%2520(255).png": "251e6217d1aff80bbc94526fd563fcf0",
"assets/assets/web/card/Screenshot%2520(256).png": "adc3c6626a24a92bc863f48dad64d020",
"assets/assets/web/store/Screenshot%2520(168).png": "e51a5bf0aab2e7c39a691b6dfc283098",
"assets/assets/web/store/Screenshot%2520(169).png": "020d6a2f3189aa3e8f9e520a27d83598",
"assets/assets/web/store/Screenshot%2520(170).png": "9432099b94ee68d5e3dde00d4e31798b",
"assets/assets/web/store/Screenshot%2520(171).png": "53802ebedc4638f9be25334c9dffc673",
"assets/assets/web/store/Screenshot%2520(172).png": "64f0e0ece02d965b79ab2021a89c054a",
"assets/assets/web/store/Screenshot%2520(173).png": "cd4dce70044e8e143121559fa1df0160",
"assets/assets/web/store/Screenshot%2520(174).png": "effa68aac4331581f878b9fabec07b98",
"assets/assets/web/store/Screenshot%2520(175).png": "994840a0f163837e36f250ccbe6beb20",
"assets/assets/web/store/Screenshot%2520(176).png": "d4335dccea31846509fb36095793862d",
"assets/assets/web/store/Screenshot%2520(177).png": "8dc2f82db542cce8c6a291bf0e8313bb",
"assets/assets/web/store/Screenshot%2520(178).png": "ad25aea0f533275bd446a021b3eb07a5",
"assets/assets/web/store/Screenshot%2520(179).png": "bd86a0396e87b39a685b800be8657f66",
"assets/assets/web/store/Screenshot%2520(180).png": "a3ec0630c90773b784294dd57d092833",
"assets/assets/web/store/Screenshot%2520(181).png": "e2035e93f722a8ee13496d25d7601256",
"assets/assets/web/store/Screenshot%2520(182).png": "4286a10042e5f6e07fb093c62dedb719",
"assets/assets/web/store/Screenshot%2520(183).png": "428effdd8e61be8cc51d045b940f8ce5",
"assets/assets/web/store/Screenshot%2520(184).png": "466bb180472e15b851b566a1294fd8e6",
"assets/assets/web/store/Screenshot%2520(185).png": "a0dd44b7b08eb8a124a123c7103b15f5",
"assets/assets/web/store/Screenshot%2520(186).png": "3f05e62935faa818ca7311990422b132",
"assets/assets/web/store/Screenshot%2520(187).png": "06dfba4a7a6a3c62bf651320ff02ef76",
"assets/assets/web/store/Screenshot%2520(188).png": "af40498d9859ded82d4beb2201d097db",
"assets/assets/web/store/Screenshot%2520(189).png": "422d8c16daaf3b93e8b586e1bb399c7b",
"assets/assets/web/store/Screenshot%2520(190).png": "a8b9ef6a4a2472be10c02b8c573db38f",
"assets/assets/web/store/Screenshot%2520(191).png": "f6ade2a85be5289d86da48bd4db9788a",
"assets/assets/web/store/Screenshot%2520(192).png": "727c6c5e135976a22c7adc71cd883773",
"assets/assets/web/store/Screenshot%2520(193).png": "cf508b991a0bfc3b8db9dc2a380c38a2",
"assets/assets/web/store/Screenshot%2520(194).png": "33db6a3bf979233ac63490911e5e37c1",
"assets/assets/web/store/Screenshot%2520(195).png": "bbd6bc1f9433a744b0ba12473e41f6a1",
"assets/assets/web/store/Screenshot%2520(196).png": "4abbfde7925c861fef69cbd225be51bc",
"assets/assets/web/store/Screenshot%2520(197).png": "8d330dd38a44e4c0518db2b3fa8090f6",
"assets/assets/web/store/Screenshot%2520(198).png": "c9b4b0edaf38dbad4de3933634e234c2",
"assets/assets/web/store/Screenshot%2520(199).png": "3cd82e821264f1daca7d36431b065aac",
"assets/assets/web/store/Screenshot%2520(200).png": "ef93560c04d9d8d0cf04b2c00d084e8b",
"assets/assets/web/store/Screenshot%2520(201).png": "d96974d63d3f97cd6093f96b74e80a81",
"assets/assets/web/store/Screenshot%2520(202).png": "cbcf8c92e38e6cebe37f9a4822ee18cb",
"assets/assets/web/store/Screenshot%2520(203).png": "b5edc92c71cae5cdcfe68ef4b772dc93",
"assets/assets/web/store/Screenshot%2520(204).png": "e7e5e4e5277e355a4924040aee02d391",
"assets/assets/web/store/Screenshot%2520(205).png": "926ccf8c5dc9366a171f018ae80f4290",
"assets/assets/web/store/Screenshot%2520(206).png": "9b4fb555e0b859b73039ecc6a9b82fef",
"assets/assets/web/store/Screenshot%2520(207).png": "27914a0501ba82c8ff3a7a7e4e1af265",
"assets/assets/web/store/Screenshot%2520(208).png": "1153473973dc67e2e4a09fa6b5806a02",
"assets/assets/web/store/Screenshot%2520(209).png": "3d7c495979ed120cad9b3b0fae7f28bd",
"assets/assets/web/store/Screenshot%2520(210).png": "a0da89fcd5c1cdce2b859b52e99fe7d7",
"assets/assets/web/store/Screenshot%2520(211).png": "6114b2e6f33ddaf1985c24829822c921",
"assets/assets/web/store/Screenshot%2520(212).png": "2057c33de2df63127dd8a9707292e651",
"assets/assets/web/store/Screenshot%2520(213).png": "6601566ee8f2d85f6a43bc0673009f46",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "801b9071543607c1d4f3cca9116d1cee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ce882d2209293ec0fd65a13ff18e19d5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e2e8e7aebfea0f2a036443cd1ad52d93",
"/": "e2e8e7aebfea0f2a036443cd1ad52d93",
"main.dart.js": "8092e7a16396b007f57c4f7411af2e67",
"manifest.json": "b37debb332b2c1e3f3ff5f7cca246503",
"version.json": "da84d992d068aef54f8f91b1c9901600"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
