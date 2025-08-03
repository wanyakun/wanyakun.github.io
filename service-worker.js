/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "15fc18a50e5f81d6c42db2d2648578ca"
  },
  {
    "url": "assets/css/0.styles.399dca10.css",
    "revision": "5ad99dc8d4b217a956301b4440acae46"
  },
  {
    "url": "assets/img/2017/annotation_3.png",
    "revision": "89d00ad823a5d1f61569356425265ec2"
  },
  {
    "url": "assets/img/2017/annotation_4.png",
    "revision": "da239e6c5588a9584030719610675d33"
  },
  {
    "url": "assets/img/2017/app-architecture.png",
    "revision": "5f0fc1a24b4ef7713c83c8c2197a2b5c"
  },
  {
    "url": "assets/img/2017/app-fun.png",
    "revision": "cda19ba7b4d4113d78e88cb80f9503ce"
  },
  {
    "url": "assets/img/2017/CocoaPods.png",
    "revision": "03b3d8a72e1b663adc4b6f42ecd988bc"
  },
  {
    "url": "assets/img/2017/component-fmk-podspec.png",
    "revision": "0e37919b86c7a4d24f4ba052608951ec"
  },
  {
    "url": "assets/img/2017/component-fmk-publish.jpg",
    "revision": "af104479a89478f00d2c1d0906b237b4"
  },
  {
    "url": "assets/img/2017/component-lib-podspec.png",
    "revision": "fd3209cc14583124c7a6d0737f78068e"
  },
  {
    "url": "assets/img/2017/component-login.jpeg",
    "revision": "e59c7508461f93905a1d78b5b465444b"
  },
  {
    "url": "assets/img/2017/component-project.png",
    "revision": "d177f8320dd8481ea00cc5bb530f8c4b"
  },
  {
    "url": "assets/img/2017/fastlane.jpg",
    "revision": "d77cd6b1e9c0d6630b73f6ce3c2adc25"
  },
  {
    "url": "assets/img/2017/folder.png",
    "revision": "0731bc19fa29db5a598036ff135f8668"
  },
  {
    "url": "assets/img/2017/ios-architecture.png",
    "revision": "b384ce9f9fdcec61539f046f3857d30c"
  },
  {
    "url": "assets/img/2017/matrix.png",
    "revision": "843592bd5b0216144656a213af04fc59"
  },
  {
    "url": "assets/img/2017/module.png",
    "revision": "d4fdeb88f0c460190f09089b95b2dc74"
  },
  {
    "url": "assets/img/2017/order_bundle.png",
    "revision": "4d77fc7581167dc7dd6c59f34ee188bf"
  },
  {
    "url": "assets/img/2017/shell-project-plan.jpg",
    "revision": "5f2a7b9f2a9e2d16d6bfae33b12043c7"
  },
  {
    "url": "assets/img/2018/config-add-msk.jpg",
    "revision": "aff21eb878f57154c6993a39dfcbb61b"
  },
  {
    "url": "assets/img/2018/config-component-flow.jpg",
    "revision": "9bc98a76f143e7842057ccbef37c4bc5"
  },
  {
    "url": "assets/img/2018/config-import-msk.jpg",
    "revision": "d5135c8265342aeb3f3a8ca307bd2e06"
  },
  {
    "url": "assets/img/2018/config-list-app-msk.jpg",
    "revision": "ed2b6e57add5a0e3b0eb5eb16474bf7c"
  },
  {
    "url": "assets/img/2018/config-list-component-msk.jpg",
    "revision": "97d7a3ae95c4b89a681ea1287f6701e4"
  },
  {
    "url": "assets/img/2018/launch-premain.jpg",
    "revision": "6efb05463719cb2cd265be4f44887644"
  },
  {
    "url": "assets/img/2018/launch-statistics.jpg",
    "revision": "f267e41141570af89ed9199a347195c5"
  },
  {
    "url": "assets/img/2018/loader-architecture.jpg",
    "revision": "eb0c28a960c578ca8886a9bd619ac6a7"
  },
  {
    "url": "assets/img/2018/loader-load-cache-network.jpg",
    "revision": "01bb8d11b26fea01a8269a5436a023a0"
  },
  {
    "url": "assets/img/2018/loader-load-cache.jpg",
    "revision": "8d2a77e918277d28aec8d058b447398c"
  },
  {
    "url": "assets/img/2018/loader-load-first.jpg",
    "revision": "1ddb9f2f6e16c9d2f145f71b3c495ba0"
  },
  {
    "url": "assets/img/2018/loader-load-url.png",
    "revision": "08b3ca02386e66d21ae8a64e753ac6e9"
  },
  {
    "url": "assets/img/2018/loader-tingyun.png",
    "revision": "42108fe6049724556c475ce00f7e0b1c"
  },
  {
    "url": "assets/img/2018/loader-unzip-update.png",
    "revision": "f5c4cb3355e35dc2762724aa56f0ee99"
  },
  {
    "url": "assets/img/2019/component-platform-app-dependency.png",
    "revision": "758d2fc41c32b776076b4d74f83093ef"
  },
  {
    "url": "assets/img/2019/component-platform-app-publish.jpg",
    "revision": "27f472b50c26db21f5b5c6828e8d1232"
  },
  {
    "url": "assets/img/2019/component-platform-c1.jpg",
    "revision": "9e52f57a5bc0bed4de8f2a5ad6cd5d9a"
  },
  {
    "url": "assets/img/2019/component-platform-c2.jpg",
    "revision": "2433d1b302046229978be190970b1510"
  },
  {
    "url": "assets/img/2019/component-platform-component-create.jpg",
    "revision": "c1c2fa57a4924237fd624c787ee9dd8a"
  },
  {
    "url": "assets/img/2019/component-platform-component-publish.jpg",
    "revision": "2956676d8bd75657a8e3afc922afc9ea"
  },
  {
    "url": "assets/img/2019/component-platform-config-center.png",
    "revision": "a85f8ac6b49f194601e2be93faba5968"
  },
  {
    "url": "assets/img/2022/relation.png",
    "revision": "1b1627f3315358c74427b3ef8e2d49d1"
  },
  {
    "url": "assets/img/2022/version-relation.png",
    "revision": "0f27e54a07d535b39456ad3f45eeec70"
  },
  {
    "url": "assets/img/2025/add-order-flow.png",
    "revision": "4f510fe1caa408f468cf65057642b264"
  },
  {
    "url": "assets/img/2025/share-panel.png",
    "revision": "99883f4d58711396040be1749487c4e5"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
  },
  {
    "url": "assets/img/front/css/align-content.png",
    "revision": "976d95b078a08a62374ff3820f68c019"
  },
  {
    "url": "assets/img/front/css/align-self.png",
    "revision": "9efbe189594eed7a3709e58a1296071b"
  },
  {
    "url": "assets/img/front/css/box-3d.png",
    "revision": "8c0b33735d02e647c0ecd8af53ed8d45"
  },
  {
    "url": "assets/img/front/css/box-ie.png",
    "revision": "460e0d01ce52e4a05336f6bd89bb04aa"
  },
  {
    "url": "assets/img/front/css/box.png",
    "revision": "fa5a808ce225abe2bb7d6bd218e564f3"
  },
  {
    "url": "assets/img/front/css/center.png",
    "revision": "25cb992bf9b5b6a9c94ea33890c63aa8"
  },
  {
    "url": "assets/img/front/css/css-grid-layout.png",
    "revision": "e4af6b502b66b13a7cdd099c5daa6aff"
  },
  {
    "url": "assets/img/front/css/dpr.png",
    "revision": "30c4174e5fd3ad6d4b92274c6b56a748"
  },
  {
    "url": "assets/img/front/css/flex-direction.png",
    "revision": "7f34c1e33db5950e7cf6afd9ec7c2aec"
  },
  {
    "url": "assets/img/front/css/flex-grow-1.png",
    "revision": "e652cf1c1ce0f8b19006002d07bddf58"
  },
  {
    "url": "assets/img/front/css/flex-grow-2.png",
    "revision": "cae1e56d02ab754bfd8601a89aa2eca2"
  },
  {
    "url": "assets/img/front/css/flex-shrink-0.png",
    "revision": "640b99c567e828f23b4f18c2b1701e2c"
  },
  {
    "url": "assets/img/front/css/flex.png",
    "revision": "81266bcd2e3c24f4dc790c476ff944e2"
  },
  {
    "url": "assets/img/front/css/grid-1.png",
    "revision": "02f6ddd92605129b07339df4442a7629"
  },
  {
    "url": "assets/img/front/css/grid-2.png",
    "revision": "7a69b3114a8bcc840109c38c3e8a3d6d"
  },
  {
    "url": "assets/img/front/css/justify-content.png",
    "revision": "95421628fdfc5d41ca6b480da0f99091"
  },
  {
    "url": "assets/img/front/css/ppi.png",
    "revision": "745660a1dd1b8b1ad995ca9355cc5939"
  },
  {
    "url": "assets/img/front/css/responsive-layout.png",
    "revision": "457270a5bd67fd75b593464259bc7cb8"
  },
  {
    "url": "assets/img/front/css/translate-3d.png",
    "revision": "a794cacf0c8d2fc528059de6e6f6b791"
  },
  {
    "url": "assets/img/front/es6/promise.png",
    "revision": "b69b0ae8c017fe666602f03c45c305f5"
  },
  {
    "url": "assets/img/front/explorer/browser.png",
    "revision": "10c98496548deacb44ffb6a4279969c6"
  },
  {
    "url": "assets/img/front/explorer/cssom.png",
    "revision": "d41ed73c8ef1bdca374aa4863356fc34"
  },
  {
    "url": "assets/img/front/explorer/dom-tree.png",
    "revision": "0a6fb2ea6ad4576ba1e8070aea5ce075"
  },
  {
    "url": "assets/img/front/explorer/http-request.png",
    "revision": "e1203d0faa8b541d7e1ef1084efc2d47"
  },
  {
    "url": "assets/img/front/explorer/http-response.png",
    "revision": "623671f5fbea8d4b9c0110ba77b3eb42"
  },
  {
    "url": "assets/img/front/explorer/layout.png",
    "revision": "000cb4709a1d5c60a28fcc1803bb2f03"
  },
  {
    "url": "assets/img/front/explorer/optimized-rendering.png",
    "revision": "43eae4cbe72de8aeb1423d636747756c"
  },
  {
    "url": "assets/img/front/explorer/paint.png",
    "revision": "8bf7132db1fc7b1e21c5c29e78aa2c58"
  },
  {
    "url": "assets/img/front/explorer/render-tree.png",
    "revision": "d6a78348902a83f9c3f6382b6287b37f"
  },
  {
    "url": "assets/img/front/explorer/render.png",
    "revision": "e17c9ae0aeda1cf0c703f3bec011df7d"
  },
  {
    "url": "assets/img/front/explorer/url-resolve.png",
    "revision": "1aa6edf791ecef8c29f9962176665eca"
  },
  {
    "url": "assets/img/front/explorer/webkit.png",
    "revision": "8f4f4428810e5da317fc4a1cfda5dd8b"
  },
  {
    "url": "assets/img/front/js/client-rect.png",
    "revision": "52d6dec6dc51e2f83b62217253a6a7cf"
  },
  {
    "url": "assets/img/front/js/debounce-throttle.png",
    "revision": "217833d41d8e6ce78b50dd3d1a20d758"
  },
  {
    "url": "assets/img/front/js/heap.png",
    "revision": "fdcf09aa2ad693cb1bb55b4f7effe45e"
  },
  {
    "url": "assets/img/front/js/offset.png",
    "revision": "4c83ea13699651c4feb432ada620dce7"
  },
  {
    "url": "assets/img/front/js/prototype-chain.png",
    "revision": "eb3df7aab6c38a02d77c370d3ca59bee"
  },
  {
    "url": "assets/img/front/js/prototype-person.png",
    "revision": "191bbb8bf633f4a6ee6d4fff8421ba40"
  },
  {
    "url": "assets/img/front/js/scope-example.png",
    "revision": "13c35f24bef950af7717a6551c4177d4"
  },
  {
    "url": "assets/img/front/js/scope.png",
    "revision": "43c8b87eb281962f6d8526a41413c61a"
  },
  {
    "url": "assets/img/front/js/stack.png",
    "revision": "601894069874141d1c4e5a0e15b80dce"
  },
  {
    "url": "assets/img/front/js/visible.png",
    "revision": "74487848c9273d557f2a0b7d7498adf5"
  },
  {
    "url": "assets/img/front/network/cdn.png",
    "revision": "99512c819e0c9d5412edc73e9d4452e1"
  },
  {
    "url": "assets/img/front/network/dns-lookup.png",
    "revision": "43e8b400fc66373927b88dbb55434d64"
  },
  {
    "url": "assets/img/front/network/dns-lookup1.png",
    "revision": "3e0452b40ab9e6e627f48a18033135c9"
  },
  {
    "url": "assets/img/front/network/dns-lookup2.png",
    "revision": "5b64a006105197950f86cd5d26e5f99e"
  },
  {
    "url": "assets/img/front/network/domain.png",
    "revision": "170687bcdba29caee33fe013ebf88e4b"
  },
  {
    "url": "assets/img/front/network/http-push.png",
    "revision": "e27a6ac130d3940eacb2b3ebaf4f7b51"
  },
  {
    "url": "assets/img/front/network/http1.0.png",
    "revision": "ae81f5c013dc577aa74678ad852e03c8"
  },
  {
    "url": "assets/img/front/network/http1.1.png",
    "revision": "7f1c0cf9ab18679e10fff9e3e5449986"
  },
  {
    "url": "assets/img/front/network/http2-header.png",
    "revision": "f47774bf88d7cac51548407b397a3904"
  },
  {
    "url": "assets/img/front/network/http2.png",
    "revision": "4fab1ea8990a3649fdb1ec7a9bd88d2f"
  },
  {
    "url": "assets/img/front/network/https.png",
    "revision": "46a5853b3cc8279720b74ec43d0f44b0"
  },
  {
    "url": "assets/img/front/network/osi.png",
    "revision": "f59abdf213fe9b1dfb79cf3a86a4f566"
  },
  {
    "url": "assets/img/front/network/tcp-ip.png",
    "revision": "34e65a7225cacd2df7b451d9fae4c762"
  },
  {
    "url": "assets/img/front/network/tcp.png",
    "revision": "c11ef50b129fd43b2630d2efcdcadd76"
  },
  {
    "url": "assets/img/front/network/udp.png",
    "revision": "24fbebcd5a19c0ed1e95363d5309378e"
  },
  {
    "url": "assets/img/ios/basic/block-struct.jpg",
    "revision": "705338173fb3ab8e976e21ce917b1bcc"
  },
  {
    "url": "assets/img/ios/basic/load-images-2.png",
    "revision": "6511f1af8715fb1eba63fe5d9b269387"
  },
  {
    "url": "assets/img/ios/basic/load-images.png",
    "revision": "62c8c8089c5b570e39208cf275d12356"
  },
  {
    "url": "assets/img/ios/basic/map-images.png",
    "revision": "c1b09dd060e9bfa38b24d9359e611ca0"
  },
  {
    "url": "assets/img/ios/basic/named-table.jpg",
    "revision": "2b7b6f5d66975a98c646e0473c41a662"
  },
  {
    "url": "assets/img/ios/basic/notification-add.png",
    "revision": "87f0fd22af3a2116c274f5f09fc5fbdd"
  },
  {
    "url": "assets/img/ios/basic/notification-post.png",
    "revision": "b295dfc500984e1bdaddc6e3d07a7b7a"
  },
  {
    "url": "assets/img/ios/basic/unnamed-table.jpg",
    "revision": "f17876142c64866272d9e3d242ab0641"
  },
  {
    "url": "assets/img/ios/ios.png",
    "revision": "7c32758abb37e4720232ebe1a2ada38d"
  },
  {
    "url": "assets/img/ios/memory/memory1.png",
    "revision": "d69208a6bbd0a5f0f08a7c03d80b048e"
  },
  {
    "url": "assets/img/ios/memory/memory2.png",
    "revision": "7abda9c33335e9716d5fbb3f282dd4f1"
  },
  {
    "url": "assets/img/ios/multithread/trap.png",
    "revision": "9ab7c40616549a74394b7520390fa5ad"
  },
  {
    "url": "assets/img/ios/runtime/cache-t.png",
    "revision": "c41f00dd200652728b2c877dde585ca8"
  },
  {
    "url": "assets/img/ios/runtime/class-ro-t.png",
    "revision": "355bd972d5d8aaa5b0853a8083b4dc95"
  },
  {
    "url": "assets/img/ios/runtime/class-rw-t.png",
    "revision": "b65dad03817f8623641377bf88ea5d72"
  },
  {
    "url": "assets/img/ios/runtime/isa-bitfield.png",
    "revision": "62b4d1c420550e24c080c3bd313143b4"
  },
  {
    "url": "assets/img/ios/runtime/objc-class.png",
    "revision": "e3d473a8fa49a554dceaa9cd781fa910"
  },
  {
    "url": "assets/img/notes/front/engineering.png",
    "revision": "04b1d91c8314c53e3f15d95ce754687c"
  },
  {
    "url": "assets/js/1.9dc3b061.js",
    "revision": "b3c63f26a29c2e78f1323a670dd0267c"
  },
  {
    "url": "assets/js/10.70e929af.js",
    "revision": "fb58921f6d271fc83b079460009ab47a"
  },
  {
    "url": "assets/js/100.65f79901.js",
    "revision": "9ebf1cc6a2b66fb272c45f424e66d081"
  },
  {
    "url": "assets/js/101.df40f2af.js",
    "revision": "9c3dee3f8187332245fc809638d5a9a6"
  },
  {
    "url": "assets/js/102.e0014095.js",
    "revision": "e988edf228a408b82034f512ac54fbc6"
  },
  {
    "url": "assets/js/103.194bc101.js",
    "revision": "2b04b2a0efbda23cbb94917b8f1935ec"
  },
  {
    "url": "assets/js/104.0edbfe50.js",
    "revision": "70805e636973dfefd7b6e1d53c962301"
  },
  {
    "url": "assets/js/105.01f3443f.js",
    "revision": "8d07ea1bb385e6f025c10df0d9c79a1d"
  },
  {
    "url": "assets/js/106.b3e92cd0.js",
    "revision": "524b7cb22142bacb678017c68f570464"
  },
  {
    "url": "assets/js/107.a3e9f2e5.js",
    "revision": "f217376038e131572f40b0ea207b3018"
  },
  {
    "url": "assets/js/108.aefbe848.js",
    "revision": "ec69dec7c03a7890a68568d3de1e2fbd"
  },
  {
    "url": "assets/js/109.915c38b7.js",
    "revision": "7ab93aa313a09236375dc7423f72708b"
  },
  {
    "url": "assets/js/11.269645d6.js",
    "revision": "bfcbd27c305e2df2a2583d6f4539ed5e"
  },
  {
    "url": "assets/js/110.f29fb976.js",
    "revision": "2e3946097e8fc936ecf00567575ebd44"
  },
  {
    "url": "assets/js/111.86a8c7be.js",
    "revision": "52006aec4664dc8f7042c7c5d682d9eb"
  },
  {
    "url": "assets/js/112.f728817b.js",
    "revision": "5823175a94eeef61e87f6d984e38039a"
  },
  {
    "url": "assets/js/113.494822ac.js",
    "revision": "594a484627e5c532e40b6d47dcc02410"
  },
  {
    "url": "assets/js/114.0c42a4a0.js",
    "revision": "b16e8ba85bd6534816100dfacdd2def6"
  },
  {
    "url": "assets/js/115.15e7493b.js",
    "revision": "76cf778f07bbdb1343d96ae23f0a4bfc"
  },
  {
    "url": "assets/js/116.b8183b18.js",
    "revision": "f81889685939a3a8ab8006b42f895384"
  },
  {
    "url": "assets/js/117.34f023d6.js",
    "revision": "6671b4e9b90a476a5f5456aaa0b35db6"
  },
  {
    "url": "assets/js/118.4aff09d8.js",
    "revision": "46fda0553bb11e090df6ff3a65aaae7f"
  },
  {
    "url": "assets/js/119.0f35ef8e.js",
    "revision": "efee3950038d51a6ba7401e8261c5056"
  },
  {
    "url": "assets/js/12.33654836.js",
    "revision": "1f4503bd10d1f04999db84a2915c9186"
  },
  {
    "url": "assets/js/120.7f5c0ea9.js",
    "revision": "39b5400085a6883f271ec38c74c9a4d4"
  },
  {
    "url": "assets/js/121.37e8b4f6.js",
    "revision": "c8b896e55bf12ff348ab65b2b300655d"
  },
  {
    "url": "assets/js/122.68240ee8.js",
    "revision": "8a8a2436f7b548dd26dd698bf0724f00"
  },
  {
    "url": "assets/js/123.4a7df6e3.js",
    "revision": "312f4996b0fc8ce64e4b32682122f1da"
  },
  {
    "url": "assets/js/124.62cae3d1.js",
    "revision": "1dccbd324fd17d7c4aaba7b9902fe8bc"
  },
  {
    "url": "assets/js/125.4fc2cdc0.js",
    "revision": "a8a5847bdc2e76ff2198cb9e1f1a8949"
  },
  {
    "url": "assets/js/126.00c42ac6.js",
    "revision": "84e4a34ec0d4d6085f25b620259c6f49"
  },
  {
    "url": "assets/js/127.078363eb.js",
    "revision": "79c8c034839892bae01e4903ac78b00d"
  },
  {
    "url": "assets/js/128.a205c440.js",
    "revision": "dfd49c3ccb0a87042400fbd2061fcdcc"
  },
  {
    "url": "assets/js/129.d2f60db4.js",
    "revision": "4096d644b3664df3371e82971ecda68b"
  },
  {
    "url": "assets/js/13.d5bc7185.js",
    "revision": "cb2ac19eca313dcfab983e0d47cff453"
  },
  {
    "url": "assets/js/130.e8a2db4f.js",
    "revision": "982e2d0dad17638b5ed9867f2ee191b1"
  },
  {
    "url": "assets/js/131.bbe13739.js",
    "revision": "f8b9894978746870853024311d306fcb"
  },
  {
    "url": "assets/js/132.78d2cc81.js",
    "revision": "661d6d379882c4379b3c834c79527521"
  },
  {
    "url": "assets/js/133.27cbd29a.js",
    "revision": "6f4adb1cfa822f6f48acf7a942d47c4e"
  },
  {
    "url": "assets/js/134.6b15f2b8.js",
    "revision": "2ecc1d11cbea9e5df06ec0654d12a45f"
  },
  {
    "url": "assets/js/135.756b4678.js",
    "revision": "f6c45e9a3c42959a343e2c174ced2e36"
  },
  {
    "url": "assets/js/136.4ff1edfb.js",
    "revision": "19e607721d42e15f7fa2b6527b6be84c"
  },
  {
    "url": "assets/js/137.c5851035.js",
    "revision": "e941ce1b9724a705f3e3dcc996d6b749"
  },
  {
    "url": "assets/js/138.6e06f66c.js",
    "revision": "2b9fa68a37bfda244c8d76068c611be5"
  },
  {
    "url": "assets/js/139.6ef9f9fd.js",
    "revision": "5463878a5ff1371bb428925452abda2d"
  },
  {
    "url": "assets/js/14.ec05e296.js",
    "revision": "ca398a5f980f4906515d98d65bf86486"
  },
  {
    "url": "assets/js/140.551f2a1f.js",
    "revision": "8113cc376df3fa43baf3ac78ed514707"
  },
  {
    "url": "assets/js/15.baec35d7.js",
    "revision": "68b314bd84a60d53bc3ef0f57d7edc7b"
  },
  {
    "url": "assets/js/16.4c0bd22f.js",
    "revision": "b34d8bf0285868de0ea83e947a8adffc"
  },
  {
    "url": "assets/js/17.75cf2cb0.js",
    "revision": "0b876b36990045079a3d1c20b9bfe975"
  },
  {
    "url": "assets/js/18.414ddcf9.js",
    "revision": "52db0b7f11acf5f996f4b7d216886e25"
  },
  {
    "url": "assets/js/19.73aa6342.js",
    "revision": "a665bdc73655f86f93f93178348caceb"
  },
  {
    "url": "assets/js/20.a4458ea0.js",
    "revision": "5511a304171e67d17c73076399e6a842"
  },
  {
    "url": "assets/js/21.be57cd0d.js",
    "revision": "04a77289dab831be4200dff01ca6c04d"
  },
  {
    "url": "assets/js/22.f0e54d61.js",
    "revision": "2e447e98bc060a82e97f7bf0058c33cb"
  },
  {
    "url": "assets/js/23.4ae4ae28.js",
    "revision": "683f22076f3882f549b34784415a149a"
  },
  {
    "url": "assets/js/24.860631c8.js",
    "revision": "3d7b9965a8c71b996f0f24c6dcc18a78"
  },
  {
    "url": "assets/js/25.71267a6c.js",
    "revision": "ce8ab63a9087ca4e44ac64b06b087efa"
  },
  {
    "url": "assets/js/26.46663cc9.js",
    "revision": "1ffc876b8d11c4d7adac3279efd43554"
  },
  {
    "url": "assets/js/27.c446c99a.js",
    "revision": "5ea15fb50277473c92faf81be353d9bd"
  },
  {
    "url": "assets/js/28.df45f245.js",
    "revision": "355a8fa1fe71bf2599f99e0051820825"
  },
  {
    "url": "assets/js/29.a1d082cd.js",
    "revision": "fea0f67dd48ab2a767ae068ba8ca85fb"
  },
  {
    "url": "assets/js/30.9564a827.js",
    "revision": "30fe616e1ed46f7bf7a862304f11598e"
  },
  {
    "url": "assets/js/31.7763c2b5.js",
    "revision": "4e026d434227178638ecbbfeea64ff0c"
  },
  {
    "url": "assets/js/32.9e693805.js",
    "revision": "58b9782c41e384825b27bd6a2ece3335"
  },
  {
    "url": "assets/js/33.ed9ac9b7.js",
    "revision": "9ea3e9fe743f06949352813d1ff9bdb2"
  },
  {
    "url": "assets/js/34.3411b238.js",
    "revision": "b8ae82e182c726d4b94146fb7a38c5cd"
  },
  {
    "url": "assets/js/35.956d5a86.js",
    "revision": "2e8511d8f1c49ac1aa4ed291a6a6df0e"
  },
  {
    "url": "assets/js/36.0982d6f8.js",
    "revision": "2d9b1563a47c5b27c5a3385d616b3029"
  },
  {
    "url": "assets/js/37.af1aa97b.js",
    "revision": "978067d3d248a0918f04b2defd5b95da"
  },
  {
    "url": "assets/js/38.3a8469bb.js",
    "revision": "3605abbbb8d2c3722224381866c6a35b"
  },
  {
    "url": "assets/js/39.82ddea84.js",
    "revision": "4a40397ddc1a668555dde3103d3650ab"
  },
  {
    "url": "assets/js/4.c013567b.js",
    "revision": "617930ebb7c7496bd408934309472ea6"
  },
  {
    "url": "assets/js/40.370a6852.js",
    "revision": "85dcb4f3dbeef4612421e16e40691d3c"
  },
  {
    "url": "assets/js/41.b7def476.js",
    "revision": "da603aaa4ea662ee21ed546a85ef0748"
  },
  {
    "url": "assets/js/42.9369985c.js",
    "revision": "7f182fc8b4e866a8399996bbded8f2d3"
  },
  {
    "url": "assets/js/43.b4ea46c8.js",
    "revision": "a386d7e22c55e4e46cb14e96cc20192d"
  },
  {
    "url": "assets/js/44.164c8d87.js",
    "revision": "58777eff22159a3a46df56249d094e21"
  },
  {
    "url": "assets/js/45.372a6a16.js",
    "revision": "b9d2c9d51799302a8dd6cc2df12f1034"
  },
  {
    "url": "assets/js/46.6d4f36c6.js",
    "revision": "3c1f0df9df517c37de547c4f66f9b5b9"
  },
  {
    "url": "assets/js/47.2e032b24.js",
    "revision": "8022a0669f16bcd1f641e12556e7c3d5"
  },
  {
    "url": "assets/js/48.634c6f20.js",
    "revision": "d04bddaf0de55e4a352c1a1605904ef0"
  },
  {
    "url": "assets/js/49.9a2d042b.js",
    "revision": "2e54f78c5c446fdadc3317d3a745a363"
  },
  {
    "url": "assets/js/5.57b6886a.js",
    "revision": "83523c3825dfaae0a4fe806863925f90"
  },
  {
    "url": "assets/js/50.00a90b75.js",
    "revision": "990fb3fc33d10fb33e17ed7c8b671517"
  },
  {
    "url": "assets/js/51.acae6ee4.js",
    "revision": "0d86267aeec2d649c80270447018cb94"
  },
  {
    "url": "assets/js/52.a3356884.js",
    "revision": "9818401c54082201e45e3fd66135be36"
  },
  {
    "url": "assets/js/53.95416775.js",
    "revision": "7e02e681b05ad42e459bb0c983b461e8"
  },
  {
    "url": "assets/js/54.768238bf.js",
    "revision": "044acab516ae78abe4c5847d1654f3e0"
  },
  {
    "url": "assets/js/55.920b24c3.js",
    "revision": "dfd87bd6a56ab47d703d5e1d769a181b"
  },
  {
    "url": "assets/js/56.5689d4d8.js",
    "revision": "e9b228c43083cdfbd36af45f0c4abd8f"
  },
  {
    "url": "assets/js/57.3754604f.js",
    "revision": "ccbcab54a8b1d1756f637f3a6e47d67e"
  },
  {
    "url": "assets/js/58.9aa4bf2f.js",
    "revision": "efb8482f4fc58e626c89aca54ecbf3ea"
  },
  {
    "url": "assets/js/59.747c8198.js",
    "revision": "1636ea1cd34bc017c12792f68a66d00e"
  },
  {
    "url": "assets/js/6.4fd3854b.js",
    "revision": "02d951d409c127f199f43e705f25f33b"
  },
  {
    "url": "assets/js/60.32fccd6c.js",
    "revision": "83fffcd328fc4d4fc3c0d93809285e20"
  },
  {
    "url": "assets/js/61.e976af6f.js",
    "revision": "18bc599f8ed9bb5a06072d3decf22d38"
  },
  {
    "url": "assets/js/62.d40e7467.js",
    "revision": "1deb10487ed18b5995b8c7fcd5bc968a"
  },
  {
    "url": "assets/js/63.4162dcde.js",
    "revision": "2a702b16115ad044b148f9f2ddbe3a1b"
  },
  {
    "url": "assets/js/64.7fe95844.js",
    "revision": "17d7f3e8b13a961d1054c7a153b0d1c0"
  },
  {
    "url": "assets/js/65.8e9a605e.js",
    "revision": "7237b2c4533735c68f22e012786b616c"
  },
  {
    "url": "assets/js/66.a0036fbc.js",
    "revision": "f6b023a7cf7c55c4f363aaad72bdd332"
  },
  {
    "url": "assets/js/67.7f54499d.js",
    "revision": "692f0b69b3cf761ccdcec63293b3f4fb"
  },
  {
    "url": "assets/js/68.cf879b25.js",
    "revision": "69d88b84c401e55c2b6551d62709ba04"
  },
  {
    "url": "assets/js/69.608360c9.js",
    "revision": "d7c02e6c2a38c10259d144cc1fd44e5e"
  },
  {
    "url": "assets/js/7.c5cdb388.js",
    "revision": "3175d21e674535029a97371dec5e33db"
  },
  {
    "url": "assets/js/70.60a35671.js",
    "revision": "bf2a1ce41d8526c46dd4222356954843"
  },
  {
    "url": "assets/js/71.a5ab1ccf.js",
    "revision": "8b6041661d0c2247919c39775be83f6e"
  },
  {
    "url": "assets/js/72.73b37e15.js",
    "revision": "c9e3535eae75817422b778caa3c4c91a"
  },
  {
    "url": "assets/js/73.39bfadb8.js",
    "revision": "a568e246dd75b0403e01fa8556a38382"
  },
  {
    "url": "assets/js/74.fd22f3de.js",
    "revision": "5a197f4437d5917de20fa672305d6fc9"
  },
  {
    "url": "assets/js/75.2b685ea1.js",
    "revision": "69685d85865e8062cb29be914aa161f5"
  },
  {
    "url": "assets/js/76.4fc0ce40.js",
    "revision": "efc1ebb5f5b92f9829fee3f5c14c120b"
  },
  {
    "url": "assets/js/77.0fa8005e.js",
    "revision": "76e88106064750cc0bb5fbf189d898c4"
  },
  {
    "url": "assets/js/78.bf9da78c.js",
    "revision": "f1ad81bbde2a01a3b9f411d0dd64d8b3"
  },
  {
    "url": "assets/js/79.7afbcdeb.js",
    "revision": "4e6ac562480f52df00781c689336114b"
  },
  {
    "url": "assets/js/8.22215299.js",
    "revision": "f1bc4cd071abde0db146946be7bbabe2"
  },
  {
    "url": "assets/js/80.cde16e0e.js",
    "revision": "2e2eae0d813cf6bccce06f491cdaa42e"
  },
  {
    "url": "assets/js/81.ec61943b.js",
    "revision": "3d643665131727be61d03ce313222234"
  },
  {
    "url": "assets/js/82.7d177cb4.js",
    "revision": "24b94f1fdaac6c557c2da58433593bed"
  },
  {
    "url": "assets/js/83.f437bf90.js",
    "revision": "604e63a097b32579905bafe9ab1d0101"
  },
  {
    "url": "assets/js/84.a48b71f0.js",
    "revision": "8814673756d936d1aad95d993f646c7c"
  },
  {
    "url": "assets/js/85.3228f874.js",
    "revision": "2cced2181b3eed208e2c6a257c035bd0"
  },
  {
    "url": "assets/js/86.f1b69bb5.js",
    "revision": "282ed42ccd60b27d86ac1dc24977865b"
  },
  {
    "url": "assets/js/87.b3aafc73.js",
    "revision": "4606f66039ffc9bedc50df3b56c2434f"
  },
  {
    "url": "assets/js/88.dd5b1c3d.js",
    "revision": "6a0d6cd3dcd67eb6df088319b54614c2"
  },
  {
    "url": "assets/js/89.6c12ef06.js",
    "revision": "bd12b596e3c01f40495641c73f5461a1"
  },
  {
    "url": "assets/js/9.4fb105ca.js",
    "revision": "b3ef2783bff00c64677d496f63e16941"
  },
  {
    "url": "assets/js/90.45b4d9a0.js",
    "revision": "eb15de6cbd2025e179c9573d269a0b31"
  },
  {
    "url": "assets/js/91.c4c6cf85.js",
    "revision": "8b30761b9c52ac9df24678618e065b4f"
  },
  {
    "url": "assets/js/92.f6e70e76.js",
    "revision": "9426740fc0fd5eb71bca81943a7de52e"
  },
  {
    "url": "assets/js/93.91a4ee8b.js",
    "revision": "404e5ae5a077afc5e1b7a48d43850cf5"
  },
  {
    "url": "assets/js/94.3330e128.js",
    "revision": "fcd6003b11012ae5fd456c9eca7cd7f9"
  },
  {
    "url": "assets/js/95.80d96aa4.js",
    "revision": "22d9b816eb026d79c3bc2aec846f119c"
  },
  {
    "url": "assets/js/96.6db3551a.js",
    "revision": "95ddec5fb3d531089e5d1085468a0171"
  },
  {
    "url": "assets/js/97.2ae33596.js",
    "revision": "d9a0ebf4292043b9f2c74b7d2ba478e9"
  },
  {
    "url": "assets/js/98.75dfe42e.js",
    "revision": "263f0404960c1070ffe4c791e7d71f2d"
  },
  {
    "url": "assets/js/99.aa6df13f.js",
    "revision": "f1d5e0890e5f4c6fba477a7f93f376cf"
  },
  {
    "url": "assets/js/app.8326a855.js",
    "revision": "7134f9c2639273298601612160274fbf"
  },
  {
    "url": "assets/js/vendors~flowchart.9bdcec82.js",
    "revision": "f1208c64f9bdeea05f21ecf1087d5920"
  },
  {
    "url": "avatar.jpg",
    "revision": "5b32278a9a2913dab1e460ab737a0a3c"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/code/2016/2016-03-19-ios-memory-optimize.html",
    "revision": "36c47e88693522df8caf065a9bac8b1b"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "02bd5c993caebf75e0d6f77fbb38f604"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "c19645b996ed754ad940c9bc04695a7a"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "872d7ed9e1e66e508e232c01f3ce3f3f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "410a29c8311f57919cabf1956e3c52fd"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "645c59193b02f9d4b00448e449430903"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "a9e4ec14d95e930c6ed8e3226a7d9a06"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "279d28472cffc858ba2ddb6b3c8262a7"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "f46d155ad01862874fee44b0680f80cb"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "8d525c7d458b7aaa2a6d6ebea8072f58"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "43af2178683dcfc91595c50a7d29f439"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "3d6f366c7445937b6e48980eed9f5d74"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "ca21d937f9a1c6212ada674b0a4f5a41"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "2a946317af420fbe2a62a7beceb75d41"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "57a5716c7c345e02f93eba4b3e25da6d"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "27dbaa7562fa396f0d586e337f046a49"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "37be99145e26c53fb06881d06393266d"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "0f6255ea2c3fb7b7ead731617399c863"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "48e1c1c9831830c5980acb98a5875e63"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "324c431e0e25b300664909dbd3571adf"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "322833c3e52a829a99cdba96e4866327"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "5cdf9c2296fe7c21f553610c464c4595"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "0e483ecba08b57cc48b3a41134838ac4"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "342a587093b5d2a4dccb0f6fea37fc66"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "bf39423eb1c3f713ee118139b43b11f5"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "9d5e45efcafa5e74d3cf2488ecb2fd1c"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "a5a4e3e419769520c23a8f9f56b98432"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "fbc1d6f5f18fadaaf29412e81dda2e23"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "24f334f6a7e886c2f6ce097bc86b8276"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "0d80882ec5963bafc089c07cef821965"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "fd9b08368762b10f54637fbd86344f77"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "74448f8ff4946b64259c512b95b817db"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "3d35c998ee2fa6926d311fbad2617b3f"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "1e74deb97b1ead3871fde37270451811"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "6a30c300d8192e35d7f0442f194e1389"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "25224d7f0c240861befd01bae16ec78d"
  },
  {
    "url": "blogs/code/2025/2025-05-30-java-interface-concurrent-order-inventory-processing-solution.html",
    "revision": "f9d7119a491437dd31045443c0dba125"
  },
  {
    "url": "blogs/code/2025/2025-08-02-ios-app-extension.html",
    "revision": "2bffbfb20f51217eccfb218d44d770f6"
  },
  {
    "url": "blogs/code/2025/2025-08-03-spring-boot-alibailian.html",
    "revision": "7f1b06581de90a3f9fd8434db2378992"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "7c628c9ce1071bdca7129c4629d6a301"
  },
  {
    "url": "categories/index.html",
    "revision": "178c0bdebb56fb3a9d4624b548df957d"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "08cc9498a0562a9b5f1c59e566afab64"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "74e483f06dcc0d61635d2ce68d8856bf"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "ca91313bc1c7b2389d599073ca76df4e"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "5266f7e82a766f708e9c94ef18caac63"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "9e3a33f3fd38a9735ce09b01eabede12"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "1d3b2c902d6d0c00a50a1e054407cf6e"
  },
  {
    "url": "front/css/animation.html",
    "revision": "236e1e93001c2d4c34cacf36ff55826b"
  },
  {
    "url": "front/css/bfc.html",
    "revision": "2047aa609ffa34ad8117b4bd42e90531"
  },
  {
    "url": "front/css/box.html",
    "revision": "f35bd2831d12b53f6bf2957c7fb77546"
  },
  {
    "url": "front/css/center.html",
    "revision": "f1735fbec509f3c368447ca149cefa28"
  },
  {
    "url": "front/css/column-layout.html",
    "revision": "f994f7aca69b2a98d7c0387ed19d598b"
  },
  {
    "url": "front/css/css-performance.html",
    "revision": "b17b92398a6f707ed8993162d0948984"
  },
  {
    "url": "front/css/css3-features.html",
    "revision": "5ca1fbae04f87caf615a81f0b2e26c0c"
  },
  {
    "url": "front/css/flexbox.html",
    "revision": "e763b4346ccbf70af21a05b7612cc250"
  },
  {
    "url": "front/css/grid.html",
    "revision": "9deec4a6c248e3e750e1392399761282"
  },
  {
    "url": "front/css/hide-attributes.html",
    "revision": "6a7dc3dfb8f338170ac992a680909f74"
  },
  {
    "url": "front/css/pixel.html",
    "revision": "34aec8ab0c3115c6919bc2e0c722a3c0"
  },
  {
    "url": "front/css/responsive-layout.html",
    "revision": "e8cc36238dfdbf2624a91aac402f4b66"
  },
  {
    "url": "front/css/selector.html",
    "revision": "27ae3b9291d577fa04c4590e98078161"
  },
  {
    "url": "front/css/unit.html",
    "revision": "653067f4836457b6c441b7daf00d311b"
  },
  {
    "url": "front/css/visual-scrolling.html",
    "revision": "ffbd4f788ef9b24be063af28e8636fa2"
  },
  {
    "url": "front/es6/array.html",
    "revision": "572fadee4bff66aaf31f371f251360c5"
  },
  {
    "url": "front/es6/decorator.html",
    "revision": "b508f2a8bc26db14b1f56fcedfeaae09"
  },
  {
    "url": "front/es6/function.html",
    "revision": "4382a1207a3b262d8e27493f35fc384e"
  },
  {
    "url": "front/es6/generator.html",
    "revision": "25b512c774bbe62f3259d62b3c627874"
  },
  {
    "url": "front/es6/module.html",
    "revision": "93a0dd0528c7fb0b7fcd71b427f4618d"
  },
  {
    "url": "front/es6/object.html",
    "revision": "890f28b169420900ea359be150a76eed"
  },
  {
    "url": "front/es6/promise.html",
    "revision": "0bb7325f6b84c82c138438af966cc0e6"
  },
  {
    "url": "front/es6/proxy.html",
    "revision": "e5160edb003688d3cd589b3804f03f48"
  },
  {
    "url": "front/es6/set-map.html",
    "revision": "7d2c09ba50183e55d86bceb1d7f2a1ec"
  },
  {
    "url": "front/es6/var-let-const.html",
    "revision": "3ad4202e6a2f4d0107f05005c3ed9381"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "08fdb930a8d6a1fe17d675a57375b2ae"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "d1593b5f1f94c2ba4bdb4df9b2e866bc"
  },
  {
    "url": "front/index.html",
    "revision": "1e34ff5d108be61039a55645e1139f32"
  },
  {
    "url": "front/js/array-api.html",
    "revision": "7c9dc4f8d6f0676310c5ab284c7d63fd"
  },
  {
    "url": "front/js/closure.html",
    "revision": "aeb662cd85d05288c5b0ede088e42e74"
  },
  {
    "url": "front/js/data-type.html",
    "revision": "3188b05a7e34e14e26170758fe27dda5"
  },
  {
    "url": "front/js/debounce-throttle.html",
    "revision": "9aab907e0e9b42e5b20dfbc33bcb453c"
  },
  {
    "url": "front/js/event-loop.html",
    "revision": "fffdfcf5e87f3fa7c11e5977c411c328"
  },
  {
    "url": "front/js/prototype.html",
    "revision": "a97981d85ef08cd881caffd8173e69d4"
  },
  {
    "url": "front/js/scope.html",
    "revision": "1187e8a113a804678224ba2a9d25a263"
  },
  {
    "url": "front/js/this.html",
    "revision": "f8b6b3803367dd1198e4e62c7ad9a32a"
  },
  {
    "url": "front/js/visible.html",
    "revision": "e1021bcf3777cc27e38a6c9a3e937fb9"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "7d819fbce46d13683e5ccf94a8ee126e"
  },
  {
    "url": "front/network/dns.html",
    "revision": "35c52986a06a23ba24afe4536ffde2a0"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "4040967f460b2648c57fefd1d6fa12fd"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "84481a2371011b79519d71b4cafdb474"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "b69b82d009a7f12bbb44559a5e92b097"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "623015773457ae72e0a2a099b0071df9"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "437695acd5abe7ae9310e4bf667db172"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "6ad047ec5b0fade3ad1f045a08e06c69"
  },
  {
    "url": "front/network/https.html",
    "revision": "3f145e52ed0abb87bc0ad0fe3dfdf41d"
  },
  {
    "url": "front/network/osi.html",
    "revision": "0b388ef0381c1022d3b3070197724642"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "24acaeca88046ee82e640f5dc99c3937"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "3d3ef8b530c230872352ae0325fea57e"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "22141acae3bd74269b80c5bec9bb4028"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "html/background-attachment.html",
    "revision": "ed0352033aeaa31b132fb5af1927f4cb"
  },
  {
    "url": "html/translate-3d.html",
    "revision": "6f2f5935fd8e891dc5f6a964fedcb6f0"
  },
  {
    "url": "index.html",
    "revision": "55213e58b1c7192e57e0abcaa39d6ac6"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "73f4c6ba3768b579bc3920eeec2e035a"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "7cdda093074e95da663f3102f740cdff"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "795b914ec883897a984cb4bac4467b81"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "f1e4b90bcb24aa498a9564dad6b4cb71"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "f15d378d570626dde86132094ab7496c"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "544934ac5484b264bef8dbabc6bf52ca"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "65cf7e164d811f8358925b552c4df637"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "c154dfa414a57e318c14aac0d9727eef"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "7648dd080cefc159267d0b108b9972b6"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "18bb333fb0756651dbffa53ebd70799c"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "68806c1b3943e739b063b665560a6fe1"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "143b0e10bf9c5255304106a10855810e"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "76296f21fce7cb858a3e6e68ab60fe9c"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "c1a81cdf14e35e12dcf19fb7548c5a85"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "34597c23d60e6f81a4c2686168929695"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "5e329ce5d37f5a69b2988fe2937342f3"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "36faa326dff943b60ca30af09124e5fc"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "a654ae91e7b7ccea5b430024551263a5"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "5dc47ccf9d66e5811fb26c57b13b2da4"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "ea7b4e543e6b98382f19a01a41d652d7"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "21fe5effda1053d096806e19bc9660fa"
  },
  {
    "url": "ios/index.html",
    "revision": "a5636e9cacbad7d00a6b388851bbd9a0"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "f8a64d6d2df3474295855651973de74b"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "050a02f13ea4f04f5e2626399573857b"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "594ccb704920acf72b7e12fc3c8b0832"
  },
  {
    "url": "notes/git/tag.html",
    "revision": "3eb868503dedb23c4f3c330bb14c08b4"
  },
  {
    "url": "notes/index.html",
    "revision": "a0b1b61f14c3600446657aad1a52b550"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "e27be8c86d868dc2ed9961d806922b0f"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "54c0081f1339770c21602abc30d3c391"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "22de50774cc6bde80b3489661be978ec"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "acd69a22d1d3dc3d8aab3f45a2103a69"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "cd63a5ec180e410219edbd532973a143"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "fda10bc0eb5bedb22e6e1a23bca7a387"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "3b985f2d92b8b6c72523c569548aafef"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "1d0071f85cae56940dd9136e29d426d4"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "9d1f57e5152ff7fc369f3fbf5642a336"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "c7ca99f3d631ef9e62852bb5f2f01ee3"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "dcac5079935ea132aa2dd643f2df06f0"
  },
  {
    "url": "tag/Extension/index.html",
    "revision": "ea838857a777189aa7d887dab3a76117"
  },
  {
    "url": "tag/index.html",
    "revision": "59881c8c38accfc37ff2071c419d8c9b"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "04c26f05c81303a2903e35fb930e0643"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "46a45c83e6c0b4bb8ae129c621d0847f"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "c3f77aa4d114c706ca8229d92794f2e4"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "9c58d619919349ebf6a620cb7f999fcf"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "9bae6b3b42bc9ae67dde3c7827c6411c"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "8c4e9f7079f9730b7cfaa7652f90e7e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c6e8cb98e959c8735f13293754f16b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
