'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "645015025aaf3b555bde3ad9783bd512",
".git/config": "56d090b6704e046b09e9bf413d86d6e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d229e2b04ee5031c986ec125a8b52ab3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3aa2df1d940fc12ad28f2d0cf9a2d1bd",
".git/logs/refs/heads/main": "d6a27bc3efa9d83ab5abfd73df4b816f",
".git/logs/refs/remotes/origin/main": "c75ad5c50f4fa993099ac05bf5a398aa",
".git/objects/01/8c46556c0044df09bab7b2a151115f56b15c07": "b80f039df0e37127a9276c8ca8e39a9d",
".git/objects/03/03e24c196d09a5e4f7709160040c487026d7c0": "8bee2e94be39e7a028d5ecd564c2b638",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/202c33cb385a4ba93ec2aaf6d8fc72242a11ea": "d56627e451e2036744ff06dca94ab9fe",
".git/objects/06/7cf4dac4b5029f643086e0e30071f214a1ce33": "9bd883eadd93bf2f6879604fdd0afee5",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/484f553fca3c623d882595a291cdb7eb2ccd81": "046610b932ddace2a514b4ebd59e8152",
".git/objects/08/b0db75225d60ba7486ff5a8465a9cf5106889e": "6051ac0f163901c80af1b4dbdc26c9a4",
".git/objects/09/60acf611b37c49cb2c09dcce3846b2e90887a0": "8ed2ad2edaa362a4f2382e480edb55b1",
".git/objects/0d/21ac5da618da62c16d7616d4c1be177cf6610a": "bd542376ace24e793df4c3033b6b8384",
".git/objects/12/6c1868b5aa83d817e2ed5ddf9f1b5dec3fe6bd": "28a167e5e8c656e907a1cb4b592e8a82",
".git/objects/1b/add9efa4c31934e5a385d053215bf87abd4218": "59eb996670c8f42f5f45a1aae3c7218c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/7ddc74a40c76abc0818e8049803dbc339a4c4f": "08a1fc911dfc76b115bd65029669b7e1",
".git/objects/24/5c207574065e2ca979fcc536a511065fe6da2b": "cc90260be32c8f622710ee0ec69acd4b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2e/dc7046236620604c2db7a29d6c00ed59b38ab8": "d09f7e9f5bccef3c73b6166d782c451d",
".git/objects/30/383798e78bf7511e8a467b5e28119ca2c850a9": "097e6cb7c3c00446a96ba76fde332257",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/0afc5b536724b8465150b5d8ec16c3a037b01a": "202ce55b43a659dad0d645b1602dc144",
".git/objects/34/7e91b055b77af1f177748e61c9da1d0970ba68": "3279873a69f398c424248fd330c20ec8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/c7274c8d6cc2b82978e3e385b7e83c2a3fa678": "2fe99797181a9d365c562c3b8115297a",
".git/objects/3b/b36f8d4ff815dccc6721fb7a3cf45048151177": "1383fe8355acf38f8aaf0d6fc36bbb24",
".git/objects/3e/7273bca6af84e0ff25280c5fad4b54abe7bb52": "51f95731fe1458ff04bf0f9775c4c167",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/87a1cacf2d6d7a91af5469758998e82f3d913b": "1d59ba5732cd6a3ea2cf1fcb358409ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/93c3c501d06e6a4f7dcf44d4abf6400d0afcc0": "b73a9cbb529ccddc0e1e911579902d94",
".git/objects/57/a4f0a40ca7ce61b437b1bc287cf1b941ae3d00": "823e38221e4689ae16ef32de65c6e767",
".git/objects/61/6ded84031aeb9827f1b62e1cdcbe406f22e7c7": "0968aca3f22373ab75bb6dab53727455",
".git/objects/63/ce198dc6a33f594c7dc4e9656caa9852423c25": "e8bfe0ba45feaebe1b515187223a0c6c",
".git/objects/67/5f68b17931caf60452e96a230f282afe424dd5": "ddb3c95893c8a5779a1887c36a03df44",
".git/objects/69/301fa13814383df33befe9100ddc473db8ceec": "5d3eafc27e59653e077d4213808da63a",
".git/objects/69/5ac63d78400e86c7f2468475b61973a689146c": "9209f05f7b962217aef173bbe93bf57a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/d342dc09dea46ca3924d259ad7ee18cf8969f5": "df3b9a116d0d284be3055687857244d2",
".git/objects/6f/8565480ff22f43c833e9c46d88fa419746d9ac": "d3708d2d7ab9ed3c2e858d148f06d357",
".git/objects/70/3b3d2ae025597bf03bf21b5deef6881135daec": "8d2e003f4a797a7dc16652abb94428e9",
".git/objects/79/e6a4bc698bba0dd041fda7966e4859ad2b999e": "9d2266b2bad21836656408b95c4e1cfc",
".git/objects/82/3814289cae518a4bd064eb95f98ec8dccff89d": "7e51c0439bdb356de856dc35ff5bc3f9",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/4926171820f95229c9bb2ba04fe70cba8eec3e": "25da73c560e7d5c1336daf5856eec8d0",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/c60ce18498ef225cf578896ec8c049bc3fa545": "dda65ef670ae05a09ebff4eb7017bf93",
".git/objects/a4/58e8328e85596341eb08ed0b145e7985295f5e": "fe17fec7ae23d558fd2eff03eecd17e7",
".git/objects/a5/28882190914a18ab2bf9c42920a79c55831f91": "f72656705b6db0fa984fb34e5d4178a4",
".git/objects/ae/9e426b2a38cbc5068cea306896b61722734300": "c980df33d47da53f23c23d864b123aa5",
".git/objects/af/74b08f17117bcb7670641893a0f56676227ec8": "e4e0d668dd9b66f79deefc578eed2016",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/a5463d3dd9122ccafb713c5d1b7ba992a3605c": "b51dd0764a551ca6b322f7c1abe91a7c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/64a341194d7e27ab7eb0cfdbb52acccbef629d": "02805d9469962a82fb6dd15c09d60847",
".git/objects/c2/0257f195fb1dd6e42b1ff604443f9b9fa7971c": "cd2f1b2d91dbaacda2e50f216a906568",
".git/objects/c6/8eee10cf0a94352804e3297dee4413de0c2ddf": "234f6aee1a76d2de6664103921abe4d0",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/df5f6c60f2af8bfb1fc0a9fa40b3f3b00fbee5": "b31b81dde2e6c4b16b388545edfbdef7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/580303a16770b2c8b36c5154187667a7ac1826": "f1104af90c512aa0320192de3fa4b66b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/1b258f40327ba89da68044acee3af3a3abb2f0": "c201ff88d81c80372636a3ba38cea895",
".git/objects/dc/e4cbdc4824846049bf9d26682576a1dd43837a": "6231255336cb9e92a91cd06b14b6e799",
".git/objects/dd/841e8c0eb480b5ba2593cac14b9a8958f23dc0": "082007c67acd982ef37af9ae518c32e6",
".git/objects/dd/fddb047e0ee030d191a1c5369bddf6a802e7d9": "90f037c2bc3dd3df86834519c39f97bc",
".git/objects/de/b4a67635e31d250c7e3ead51863fca0f54256d": "229fa7e057d62315d546aa8d3f3002bc",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/9ee81e816251208a3ee18154b175bad0851d42": "97f9e1a173cb6f2b9a6f4b31da0a15a5",
".git/objects/eb/09b92f8804e025d417b134b7081dd2fc36f681": "05adca7ee8643d9b02006f4d7d21a20c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/54a8a174a570dea574442cc56d89ddb64c77e6": "f9bebc89ab8a08f447f526d9aa591f20",
".git/objects/f1/ed061368f3cff3fa224e8cdb75a19bea4a5356": "ef28627bd0c356bc00eb12f88d509aa4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b8cd00bb2cdaf4ad94f368ad5917bc1c3c6219": "bc6d574f1885c5e10ffecc3abf5d9908",
".git/objects/ff/90966c6e6c03e44d55659b9ef1d7d0a8991359": "f78ed9a6361ab75b9d05f0bf1cda9913",
".git/refs/heads/main": "4215c7e59c766cc32315a6540905aadb",
".git/refs/remotes/origin/main": "4215c7e59c766cc32315a6540905aadb",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6590ec40485e17a27f9d92ff39aeaee8",
"assets/NOTICES": "a09c9b2a4d4cfd699c4e9bc8af574fba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3475743825881ea8166ec7e79f2a27d7",
"icons/Icon-192.png": "9ee5e81640241b34bf909c045385460b",
"icons/Icon-512.png": "5e73dd7e9670816a70a32d406d736ea7",
"icons/Icon-maskable-192.png": "39fc5a261d4ac0f53255985d8a4a3916",
"icons/Icon-maskable-512.png": "c3bb0e9094251466a8ff64e2921eb965",
"index.html": "964b064ac9b24749706afa4a948ac861",
"/": "964b064ac9b24749706afa4a948ac861",
"main.dart.js": "e2358977fa12d357d5bb750de86dff55",
"manifest.json": "42aef2745974bc92240f3e61e3b00ef8",
"OneSignalSDKUpdaterWorker.js": "b6c9218b26d1ce7060219e29a6b9af00",
"OneSignalSDKWorker.js": "bb342b01d13bebb317c67b881692efd3",
"version.json": "05d008a7e242c71a9b736bf814fba2da"};
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
