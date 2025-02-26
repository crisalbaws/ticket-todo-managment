/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-ed3775ef'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "android/android-launchericon-144-144.png",
    "revision": "f028a1684d0d613d03646fd99c8d0494"
  }, {
    "url": "android/android-launchericon-192-192.png",
    "revision": "7bb1a45cc045c2e51693807881a175ac"
  }, {
    "url": "android/android-launchericon-48-48.png",
    "revision": "d7456329dc1b1a1351540be4b737262f"
  }, {
    "url": "android/android-launchericon-512-512.png",
    "revision": "b5d5c99c89536c371b9bdb2fe1ef5586"
  }, {
    "url": "android/android-launchericon-72-72.png",
    "revision": "8286e61c3b52f6ad86046b57576e2dd8"
  }, {
    "url": "android/android-launchericon-96-96.png",
    "revision": "4a713a83cdb12b24cda6d8c7a3944358"
  }, {
    "url": "assets/browser-CXiH_03t.js",
    "revision": null
  }, {
    "url": "assets/index-BS84_GeK.js",
    "revision": null
  }, {
    "url": "assets/index-DyaLgYNK.css",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "c67d98f29cf11ac950cd8d88f55bd78d"
  }, {
    "url": "ios/100.png",
    "revision": "e61a22173362acceb88c5fad5dc3c8bb"
  }, {
    "url": "ios/1024.png",
    "revision": "c495a1495a268abe414b05ade7a3fbf5"
  }, {
    "url": "ios/114.png",
    "revision": "02b85b7db54a7f56032593ff7a95bd69"
  }, {
    "url": "ios/120.png",
    "revision": "3667eab719fef5f568f56ac044002366"
  }, {
    "url": "ios/128.png",
    "revision": "579250db6dac6db40efcc409edeba2ef"
  }, {
    "url": "ios/144.png",
    "revision": "f028a1684d0d613d03646fd99c8d0494"
  }, {
    "url": "ios/152.png",
    "revision": "cdaaafe067263f0cb43a8edbb23d2ee4"
  }, {
    "url": "ios/16.png",
    "revision": "0899fbc602f6a0e1d9be5d8fa38af7ce"
  }, {
    "url": "ios/167.png",
    "revision": "eff623ff82dcae65b962885ac7ab61fe"
  }, {
    "url": "ios/180.png",
    "revision": "99a3e21d6632b640df25845169191cee"
  }, {
    "url": "ios/192.png",
    "revision": "7bb1a45cc045c2e51693807881a175ac"
  }, {
    "url": "ios/20.png",
    "revision": "5b373e7e57cd4efe58695e77abdee0c5"
  }, {
    "url": "ios/256.png",
    "revision": "a4692ca13f595aca23811d9113015e61"
  }, {
    "url": "ios/29.png",
    "revision": "f7439ed8a1d0911fc5cb3b73c22cd2ce"
  }, {
    "url": "ios/32.png",
    "revision": "b7b8cb57132773ec3331e0fcf57dcf30"
  }, {
    "url": "ios/40.png",
    "revision": "dc10cc1d5b6a4e16fa11dd95f4e47de3"
  }, {
    "url": "ios/50.png",
    "revision": "f0a6773f95e12920438d362479fb86b4"
  }, {
    "url": "ios/512.png",
    "revision": "b5d5c99c89536c371b9bdb2fe1ef5586"
  }, {
    "url": "ios/57.png",
    "revision": "6f4b72a86ab701f3cfc80bf39768e8d8"
  }, {
    "url": "ios/58.png",
    "revision": "be4fd2773ecd84b3f3c97f5dc075f606"
  }, {
    "url": "ios/60.png",
    "revision": "113e5f172cc18270b7660b37e3f8c608"
  }, {
    "url": "ios/64.png",
    "revision": "023683f527adf5b3e16b4abb259f4ed4"
  }, {
    "url": "ios/72.png",
    "revision": "8286e61c3b52f6ad86046b57576e2dd8"
  }, {
    "url": "ios/76.png",
    "revision": "607183acd46eb3dc9fa3e847c5b09659"
  }, {
    "url": "ios/80.png",
    "revision": "9fdb80df86777b0c2e7be0fb783f2ce0"
  }, {
    "url": "ios/87.png",
    "revision": "e438cc91a890cba488a8b2697a9257b0"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "windows11/LargeTile.scale-100.png",
    "revision": "61b435d3774c0e95b39432b8000ffc8c"
  }, {
    "url": "windows11/LargeTile.scale-125.png",
    "revision": "e57e7e254460e9e91bb1ebfb80a7fd19"
  }, {
    "url": "windows11/LargeTile.scale-150.png",
    "revision": "993fa4171c9fd39a62a59481f71b451c"
  }, {
    "url": "windows11/LargeTile.scale-200.png",
    "revision": "5539a37c312d6e590868c4ba7d728e5a"
  }, {
    "url": "windows11/LargeTile.scale-400.png",
    "revision": "ae5d72b19926467fd95a729f1933f951"
  }, {
    "url": "windows11/SmallTile.scale-100.png",
    "revision": "527e1042b5c68eed03c5012a5f7ff708"
  }, {
    "url": "windows11/SmallTile.scale-125.png",
    "revision": "ba6dca835f4ebd6c42ab414badf0ff4d"
  }, {
    "url": "windows11/SmallTile.scale-150.png",
    "revision": "71fc93a8e91e1fe485228f35d3c48d52"
  }, {
    "url": "windows11/SmallTile.scale-200.png",
    "revision": "c9e868b56bea82c7353c62ef4acc4542"
  }, {
    "url": "windows11/SmallTile.scale-400.png",
    "revision": "b22354040a93e60dac47d3af74a1d2ab"
  }, {
    "url": "windows11/SplashScreen.scale-100.png",
    "revision": "db04b63f3e211a9b54ee437f163824a1"
  }, {
    "url": "windows11/SplashScreen.scale-125.png",
    "revision": "fe8bebfd0d11a4cfee9dfb0a95277c6f"
  }, {
    "url": "windows11/SplashScreen.scale-150.png",
    "revision": "8492d678193cb3b47b35ce0dcef1cf2b"
  }, {
    "url": "windows11/SplashScreen.scale-200.png",
    "revision": "91870ee0a35fef5b5b34c606c66fd92e"
  }, {
    "url": "windows11/SplashScreen.scale-400.png",
    "revision": "e118dc666ca746e51e4ecba07de22de6"
  }, {
    "url": "windows11/Square150x150Logo.scale-100.png",
    "revision": "927faf8055615529638846cb9faba0a8"
  }, {
    "url": "windows11/Square150x150Logo.scale-125.png",
    "revision": "a0902fa15ac919365a41b08a461f449f"
  }, {
    "url": "windows11/Square150x150Logo.scale-150.png",
    "revision": "1202619e49892e1ac17f362dbc13ac40"
  }, {
    "url": "windows11/Square150x150Logo.scale-200.png",
    "revision": "218355589b9371c3b613a840be5fa5d7"
  }, {
    "url": "windows11/Square150x150Logo.scale-400.png",
    "revision": "c185abc15a825f34e92a09416fbc33a1"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "revision": "df1a1b20c427cc356faa9a8576241896"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "revision": "8dfb31bf00d166052c71b40162d31199"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "revision": "ee9de589c4abe434b7185dea5102f588"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "revision": "a9b07fbc7c1853d1f8c87a337d4626af"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "revision": "396cddede19b32ab2de3b46c6294248c"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "revision": "9807b7a3aec2c4412ee233cb2ce66367"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "revision": "be778707aaf334bd6484341fbfcedfeb"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "revision": "57ce07123fce023bc4abf82f46080bd5"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "revision": "56abb6c27c7bbe82c78c53d3a999a45b"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "revision": "7aef20e2ecd291418f004dbd263787ed"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "revision": "163876504eeac1774106b8bcd76c7977"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "revision": "2aa2d50e2cbea352b9af6486035c9bb2"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "revision": "a94be6e7d9603df46077c2226b0a9d3d"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "revision": "5ca7c4a864bc6c912ed7d1a143a93bf7"
  }, {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "revision": "1fd8659717ae8f618e34b9112f4657a9"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    "revision": "df1a1b20c427cc356faa9a8576241896"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    "revision": "8dfb31bf00d166052c71b40162d31199"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    "revision": "ee9de589c4abe434b7185dea5102f588"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    "revision": "a9b07fbc7c1853d1f8c87a337d4626af"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    "revision": "396cddede19b32ab2de3b46c6294248c"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    "revision": "9807b7a3aec2c4412ee233cb2ce66367"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    "revision": "be778707aaf334bd6484341fbfcedfeb"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    "revision": "57ce07123fce023bc4abf82f46080bd5"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    "revision": "56abb6c27c7bbe82c78c53d3a999a45b"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    "revision": "7aef20e2ecd291418f004dbd263787ed"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    "revision": "163876504eeac1774106b8bcd76c7977"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    "revision": "2aa2d50e2cbea352b9af6486035c9bb2"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    "revision": "a94be6e7d9603df46077c2226b0a9d3d"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    "revision": "5ca7c4a864bc6c912ed7d1a143a93bf7"
  }, {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    "revision": "1fd8659717ae8f618e34b9112f4657a9"
  }, {
    "url": "windows11/Square44x44Logo.scale-100.png",
    "revision": "56abb6c27c7bbe82c78c53d3a999a45b"
  }, {
    "url": "windows11/Square44x44Logo.scale-125.png",
    "revision": "93392e128f92eed6d4fdf6d85e3bcb0e"
  }, {
    "url": "windows11/Square44x44Logo.scale-150.png",
    "revision": "c3b4b926e151ec16b06cc7bf51463baf"
  }, {
    "url": "windows11/Square44x44Logo.scale-200.png",
    "revision": "3405493adfbb598fecc42278934dc3a4"
  }, {
    "url": "windows11/Square44x44Logo.scale-400.png",
    "revision": "e05c0140046a05e90e7a6645676f76e6"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-16.png",
    "revision": "df1a1b20c427cc356faa9a8576241896"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-20.png",
    "revision": "8dfb31bf00d166052c71b40162d31199"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-24.png",
    "revision": "ee9de589c4abe434b7185dea5102f588"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-256.png",
    "revision": "a9b07fbc7c1853d1f8c87a337d4626af"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-30.png",
    "revision": "396cddede19b32ab2de3b46c6294248c"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-32.png",
    "revision": "9807b7a3aec2c4412ee233cb2ce66367"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-36.png",
    "revision": "be778707aaf334bd6484341fbfcedfeb"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-40.png",
    "revision": "57ce07123fce023bc4abf82f46080bd5"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-44.png",
    "revision": "56abb6c27c7bbe82c78c53d3a999a45b"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-48.png",
    "revision": "7aef20e2ecd291418f004dbd263787ed"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-60.png",
    "revision": "163876504eeac1774106b8bcd76c7977"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-64.png",
    "revision": "2aa2d50e2cbea352b9af6486035c9bb2"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-72.png",
    "revision": "a94be6e7d9603df46077c2226b0a9d3d"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-80.png",
    "revision": "5ca7c4a864bc6c912ed7d1a143a93bf7"
  }, {
    "url": "windows11/Square44x44Logo.targetsize-96.png",
    "revision": "1fd8659717ae8f618e34b9112f4657a9"
  }, {
    "url": "windows11/StoreLogo.scale-100.png",
    "revision": "f0a6773f95e12920438d362479fb86b4"
  }, {
    "url": "windows11/StoreLogo.scale-125.png",
    "revision": "cc4e28c340c07fbb5ab79b24133a0c8d"
  }, {
    "url": "windows11/StoreLogo.scale-150.png",
    "revision": "b11ded45c3b46ad3dcee51e169f606d0"
  }, {
    "url": "windows11/StoreLogo.scale-200.png",
    "revision": "e61a22173362acceb88c5fad5dc3c8bb"
  }, {
    "url": "windows11/StoreLogo.scale-400.png",
    "revision": "76e13ebc12d024b2fd32a746357e682b"
  }, {
    "url": "windows11/Wide310x150Logo.scale-100.png",
    "revision": "c639e39eddea29affc30e0f11e029a27"
  }, {
    "url": "windows11/Wide310x150Logo.scale-125.png",
    "revision": "de04ff7dfbbeb2774b07d045ab3152b2"
  }, {
    "url": "windows11/Wide310x150Logo.scale-150.png",
    "revision": "07e9ee29ebf56d1f9915bc70ed72c41c"
  }, {
    "url": "windows11/Wide310x150Logo.scale-200.png",
    "revision": "db04b63f3e211a9b54ee437f163824a1"
  }, {
    "url": "windows11/Wide310x150Logo.scale-400.png",
    "revision": "91870ee0a35fef5b5b34c606c66fd92e"
  }, {
    "url": "manifest.webmanifest",
    "revision": "9b169066dab46ef1a6268bdd6fa935f9"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/api\.*/i, new workbox.NetworkFirst({
    "cacheName": "api-cache",
    "networkTimeoutSeconds": 10,
    plugins: [new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
