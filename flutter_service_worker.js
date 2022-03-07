'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5da66f931912a6590d9109937a0e6e52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/2020010311352134879.png": "b2ae29ad28899dd0e328d2bcf471d294",
"assets/images/2020022017252827007.png": "4d328d77ee1768135594ba82c14733d8",
"assets/images/2020030519415152701.png": "e581d923c161f01926cba4175373c0d1",
"assets/images/2020031618522830538.png": "b2ae29ad28899dd0e328d2bcf471d294",
"assets/images/2020060220525531988.png": "26df7dfed0366db816715dd7f9a906de",
"assets/images/2020082817414588799.png": "bcf7d45517a8d3607fe1ba6a7646897b",
"assets/images/2020112310525611957.png": "5bb922cdb5979f216874b10478338724",
"assets/images/2021010519290354247.png": "f983469684d470be250be8498e777ab2",
"assets/images/2021012215472837805.png": "e9cf5a7377f609763e9b6ba5e0710a9f",
"assets/images/2021022415001674243.png": "f228437f3b163282dd4f72e98fcd6dd1",
"assets/images/2021051011361876265.png": "8655de134863ca662ea1f5ad22263ec6",
"assets/images/2021080311592610976.png": "a8687f596a66d5f93d00d0f1aa8123c2",
"assets/images/Arataki-Itto-Splash-Art.png": "08627048094069db979b72e5fbefd3a6",
"assets/images/ayaka.png": "eb317ec89688901ecf57a4e30abd08e4",
"assets/images/ayakalarge.png": "b708736739b1c96ba5bc82d5e4ffc955",
"assets/images/Character_Ganyu_Portrait.png": "4a18a82fa9021dc7e86a48b2c8658fb9",
"assets/images/Character_Raiden_Shogun_Portrait.png": "6ea865d88420471d5bc3f95ad9c7ec5b",
"assets/images/eula.png": "4ad9b62208a576735cb911d0a058c265",
"assets/images/ganyu.png": "a12f04337d6143b3539ea70fbeea6c96",
"assets/images/hutao.png": "e3fed4c9df8745a0c1fa91e954fde2ad",
"assets/images/icon.png": "53856c509adfa6ce004de65819f39f70",
"assets/images/Icon_Circlet_of_Logos.png": "81d3b09a70bcedc669b143593b885797",
"assets/images/Icon_Flower_of_Life.png": "c52f1e5c6b97dfc1a208ee2eae7759ba",
"assets/images/Icon_Goblet_of_Eonothem.png": "d0ce90ab349d31b5d8742f2a48aac2fd",
"assets/images/Icon_Plume_of_Death.png": "1846a7ba843caf5368380763aac9d090",
"assets/images/Icon_Sands_of_Eon.png": "8ae562990de4e122da5c5da057abc8b3",
"assets/images/Item_Bloodstained_Flower_of_Iron.png": "ce102b3a963c6b9fb2ecde27c65fa27e",
"assets/images/Item_Bloom_Times.png": "693db6729eabb9b9a814a9d68e627542",
"assets/images/Item_Flower_of_Accolades.png": "ccb884212f7c4919455660133de82898",
"assets/images/Item_Flower_of_Creviced_Cliff.png": "1bbf2169879d923325ae69118da9774a",
"assets/images/Item_Gladiator_Nostalgia.png": "cf2f1210ba178460be93bd2f73ad5a4f",
"assets/images/Item_In_Remembrance_of_Viridescent_Fields.png": "dcc7a8a984cd85a7a5f088ca7d15238e",
"assets/images/Item_Magnificent_Tsuba.png": "ba570ff6e274b335e57a3146d11b533a",
"assets/images/Item_Maiden's_Distant_Love.png": "b611a36152d1a89abb8217fa821c5777",
"assets/images/Item_Reminiscence_of_Shime.png": "4f945edce0982d33c55ebbb34ef54492",
"assets/images/Item_Royal_Flora.png": "41cc3f3f6b2da1cc3802b1454d865f36",
"assets/images/Item_Snowswept_Memory.png": "a0ee2d2b82b06e6e109fa2793e12a53c",
"assets/images/Item_Stainless_Bloom.png": "e7df44900851a69e4204d22bbf13080a",
"assets/images/Item_Summer_Night_Bloom.png": "1369cc09f03f2e5dbce44094f6b6ac0c",
"assets/images/Item_Thunderbird's_Mercy.png": "242f458f37e9248c09e79b536705bb07",
"assets/images/Item_Thundersoother's_Heart.png": "90d5964f3970a23a09d69d3f8ac0a896",
"assets/images/Item_Troupes_Dawnlight.png": "7fc9b4cf77eb493f4329d8653b317542",
"assets/images/Item_Witch's_Flower_of_Blaze.png": "3c5d2df1beb87d9c66d42bc49f8319ec",
"assets/images/itto.png": "a74aced496aa0552ca0fd699725d72f8",
"assets/images/raiden.png": "f06170bd13dcd9abfe0816500b70129f",
"assets/images/weapon/Icon_Bow.png": "48e5e93a06ff9f31fccfeeae59e2dbf0",
"assets/images/weapon/Icon_Catalyst.png": "4b3b30059c6cacc8c62676275d26605c",
"assets/images/weapon/Icon_Claymore.png": "3d8d3313b91f5d3fe62c7198fe0848fd",
"assets/images/weapon/Icon_Polearm.png": "cf6fa88a199a72dfa37fcbc54c0f5547",
"assets/images/weapon/Icon_Sword.png": "487c91af285b1fd941b26a9a4b7b5e8c",
"assets/images/weapon/ittobis.png": "a21f9c4381baff2a43e2d356de1f71fe",
"assets/images/weapon/Weapon_Alley_Hunter.png": "fdbd85c7223e1ac4d21e03c20b311837",
"assets/images/weapon/Weapon_Amenoma_Kageuchi.png": "060af4a78e0021cdd7b77393868a05ff",
"assets/images/weapon/Weapon_Amos.png": "377764f08e63aca76600da29bdd68620",
"assets/images/weapon/Weapon_Blackcliff_Longsword.png": "aa26f313885fa348b9d16b10a5570788",
"assets/images/weapon/Weapon_Blackcliff_Warbow.png": "926d2c11955639ea7dfd56a755d3456d",
"assets/images/weapon/Weapon_Black_Tassel.png": "3edb9ced6e60605141fb1f63d34ced73",
"assets/images/weapon/Weapon_Compound_Bow.png": "09a54d4369633f5005d996cb71359e9a",
"assets/images/weapon/Weapon_Crescent_Pike.png": "433e40a7658df3b9562e5356440232ae",
"assets/images/weapon/Weapon_Deathmatch.png": "e95f748fe83da6c32faf89a503cae8ad",
"assets/images/weapon/Weapon_Dragonspine_Spear.png": "23bb7e4f8c24a8eb07a20983bdf67165",
"assets/images/weapon/Weapon_Dragons_Bane.png": "173fe545b547e75890914161231c9000",
"assets/images/weapon/Weapon_Ebony_Bow.png": "5e9fe1938e3330dc203ddbf0feec27b5",
"assets/images/weapon/Weapon_Elegy_for_the_End.png": "3f8d8a7721021081423d43c1250416b6",
"assets/images/weapon/Weapon_Engulfing_Lightning.png": "8eba09d307fd9e9df0bfd7f676ac349d",
"assets/images/weapon/Weapon_Favonius_Lance.png": "29afed7e4be1c310410234d8f933e3ec",
"assets/images/weapon/Weapon_Favonius_Warbow.png": "82451de6e4a60ec90bc22988064d5875",
"assets/images/weapon/Weapon_Hamayumi.png": "ff154600ebc973a0e662f189b9e56441",
"assets/images/weapon/Weapon_Lost_Prayer_to_the_Sacred_Winds.png": "98f36a14dede85f03db6d35dcfb3bd7d",
"assets/images/weapon/Weapon_Luxurious_Sea-Lord.png": "27e93a87770ca17166ee8176e46c53d7",
"assets/images/weapon/Weapon_Memory_of_Dust.png": "6ef83d562dc204d8af55ae2497c3657f",
"assets/images/weapon/Weapon_Messenger.png": "7149cfb69dec4ff8d063c0fa90074c9b",
"assets/images/weapon/Weapon_Mistsplitter_Reforged.png": "fa0f77070e60908aa3e0d7be58f6068a",
"assets/images/weapon/Weapon_Polar_Star.png": "ec982cfdaea61726d0eff0765c4e3fa7",
"assets/images/weapon/Weapon_Primordial_Jade_Cutter.png": "6c1b8df0ba68541a098ea7bac20d7c1e",
"assets/images/weapon/Weapon_Primordial_Jade_Winged_Spear.png": "b4c7041c160ef527eed1637337a87e6b",
"assets/images/weapon/Weapon_Prototype_Crescent.png": "ae6fb6459726630c187b65befa46b0e1",
"assets/images/weapon/Weapon_Raven_Bow.png": "73f6cff9c22ec49e67eeb3cf48ec2aed",
"assets/images/weapon/Weapon_Recurve_Bow.png": "474066dfc56a5f959b8a4ca4f61d9164",
"assets/images/weapon/Weapon_Royal_Bow.png": "4bfa584f9528549fcfc9dfdb98e4eaa3",
"assets/images/weapon/Weapon_Rust.png": "ee23136a545ad1ee2bae44aee56cdf71",
"assets/images/weapon/Weapon_Sacrificial_Bow.png": "a5364ded6b8fa678df8c79bf80ef0423",
"assets/images/weapon/Weapon_Serpent_Spine.png": "cd649c7857ccb7d6e9ab1308a36a9ea4",
"assets/images/weapon/Weapon_Sharpshooter_Oath.png": "22fc9c0d9dcce6732e4014d4fc9b0773",
"assets/images/weapon/Weapon_Skyward_Atlas.png": "76129a888dee0764044ceb597e4753f3",
"assets/images/weapon/Weapon_Skyward_Blade.png": "2f91b1cc9b9c9f698ae63a5e0cc57125",
"assets/images/weapon/Weapon_Skyward_Harp.png": "c3f2b5cf0cf38e2387fca10bbe0e46a2",
"assets/images/weapon/Weapon_Skyward_Pride.png": "dd15850e31d8ccaab05e6e6bce8dfb00",
"assets/images/weapon/Weapon_Skyward_Spine.png": "ff991399c1cc85a06ff13e99d1f41503",
"assets/images/weapon/Weapon_Slingshot.png": "868f3bbfd456f5e871faf4e685ea28e6",
"assets/images/weapon/Weapon_Snow-Tombed_Starsilver.png": "5602a0893e9839912743de656ed0fc9f",
"assets/images/weapon/Weapon_Song_of_Broken_Pines.png": "2a580f79353267beee12bc0fe32b0a03",
"assets/images/weapon/Weapon_Staff_of_Homa.png": "6ac07ea499d96d71794e0c0699563359",
"assets/images/weapon/Weapon_The_Black_Sword.png": "ebb15f7f3d59ee66a84eb33c1fb219e9",
"assets/images/weapon/Weapon_The_Catch.png": "c5614345ee4772d69b963f6803c38c61",
"assets/images/weapon/Weapon_The_Stringless.png": "0dd895f344d5c19aa5d4c4ef3e058dbf",
"assets/images/weapon/Weapon_The_Unforged.png": "129bb5a1d9156e65e56dc0acff5bf925",
"assets/images/weapon/Weapon_The_Viridescent_Hunt.png": "65a4d6125959ece649a72d528874da2a",
"assets/images/weapon/Weapon_The_Widsith.png": "add714c7fa5cee23f5970e048447ab86",
"assets/images/weapon/Weapon_Thundering_Pulse.png": "9f9e000ea19c89bdf6559580070d5d64",
"assets/images/weapon/Weapon_Vortex_Vanquisher.png": "20dcf1575e3a9b282320ccbc11ab864e",
"assets/images/weapon/Weapon_White_Tassel.png": "7e830d95ba7bdb7ead6c513f398fc07b",
"assets/images/weapon/Weapon_Windblume_Ode.png": "c07975c903954937c2e4b94e583abee5",
"assets/images/weapon/Weapon_Wolfs_Gravestone.png": "6f2b2b9b7f2da51a2a0491ad5b593aaf",
"assets/images/weapon/yaebis.png": "af5992c1c6293d918c2b04973de2c466",
"assets/images/xiao.png": "0cd7e28ff558e07643f07bf6861aeda7",
"assets/images/yaemiko.png": "d745ff2b128aa352c3ee4b9e4b79bf37",
"assets/images/yaemiko_splash.png": "88c2a0b3ab00ac0af4d0cb001b73572e",
"assets/images/yoimiya.png": "c3e6e82527f3735354ff445516b33e62",
"assets/images/yoimiyalarge.png": "bb1781e54e30e8da8e15bdaa8be694a4",
"assets/images/zhongli.png": "5c08e30e37f435fc7668dc1379ac5e21",
"assets/langs/en.json": "fae484c43f597b827bca6520258bace6",
"assets/langs/ja-JP.json": "c2835249bd0588c79d24fea6743e608d",
"assets/langs/zh-Hans.json": "51f10d71dd81c31e9042e2ca97aefae7",
"assets/NOTICES": "831ac7fb775dc12900c2c9f95183c3e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/android-icon-144x144.png": "fbc822f1cce5183df6d85ed32551d4bf",
"icons/android-icon-192x192.png": "303282f3a473e8a81202835db40e2866",
"icons/android-icon-36x36.png": "b24259d0f5e7ac4572353d3451da2846",
"icons/android-icon-48x48.png": "199d5850255b6dcd6dfb5b4fecebb3d5",
"icons/android-icon-72x72.png": "b798a0d59e6996eebe057f24631b6d46",
"icons/android-icon-96x96.png": "72e06534af9df7ba1b04218aeeb3e47d",
"icons/apple-icon-114x114.png": "cd7fc9b4aad7ec784f32b4522c055b5c",
"icons/apple-icon-120x120.png": "379118c35c5df5496d72e4a881515145",
"icons/apple-icon-144x144.png": "fbc822f1cce5183df6d85ed32551d4bf",
"icons/apple-icon-152x152.png": "b8c6ff76109d6369b1735a889f454044",
"icons/apple-icon-180x180.png": "9d23f12d18e2c62796b0c319c301fd15",
"icons/apple-icon-57x57.png": "0a078de8883ec3377c6c7a5d75d73f4f",
"icons/apple-icon-60x60.png": "95162660f5f05291c7ebdd32810f2492",
"icons/apple-icon-72x72.png": "b798a0d59e6996eebe057f24631b6d46",
"icons/apple-icon-76x76.png": "82fc0a6443c5ace86823082fe2995bcc",
"icons/apple-icon-precomposed.png": "6c05c7fc548e5331e8ebd030e04d76c6",
"icons/apple-icon.png": "6c05c7fc548e5331e8ebd030e04d76c6",
"icons/favicon-16x16.png": "c95a7af99b2b1019673408d599c5dd47",
"icons/favicon-32x32.png": "a187db09bad7115186b9d377cdfaf182",
"icons/favicon-96x96.png": "72e06534af9df7ba1b04218aeeb3e47d",
"icons/favicon.ico": "86cb45d99ac81e1997b517d4a4a039f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "fbc822f1cce5183df6d85ed32551d4bf",
"icons/ms-icon-150x150.png": "3edf5e2aa0de5999da10f910e6211d6e",
"icons/ms-icon-310x310.png": "a12f04337d6143b3539ea70fbeea6c96",
"icons/ms-icon-70x70.png": "4107a56871634c033816d1dac7a25fb5",
"index.html": "b3b658660c47de15746c43d3edafb0ab",
"/": "b3b658660c47de15746c43d3edafb0ab",
"main.dart.js": "e1c17455c0835445a24da57b1d09b893",
"manifest.json": "00a6620dc8b5a9d24c03ceb1787f805c",
"version.json": "5360cb7282ea1bfa39cd13e5e067617a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
