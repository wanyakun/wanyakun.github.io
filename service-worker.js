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
    "revision": "c16419b319f62b55304470cab39a14e9"
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
    "url": "assets/img/2017/RAC.png",
    "revision": "afc2d6c434830b6a8fdba9b4d833bf16"
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
    "url": "assets/js/100.b007b780.js",
    "revision": "340f06b5bd31807fbf9f8aa44d9aaa79"
  },
  {
    "url": "assets/js/101.df40f2af.js",
    "revision": "9c3dee3f8187332245fc809638d5a9a6"
  },
  {
    "url": "assets/js/102.feab7fd6.js",
    "revision": "e3966e4f1dc91d2f0fbffdcc7621b813"
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
    "url": "assets/js/134.a63e658e.js",
    "revision": "145196ab6bea3c7d462bd39e114e6c34"
  },
  {
    "url": "assets/js/135.a726f86d.js",
    "revision": "3693c8512147a65b73518d65d9da5e9f"
  },
  {
    "url": "assets/js/136.40947aa3.js",
    "revision": "e4a13d0449b6bf5f34a613347535f995"
  },
  {
    "url": "assets/js/137.6a617702.js",
    "revision": "92ef14e2480d33ef47ba954e3e0bdab8"
  },
  {
    "url": "assets/js/138.d6f50f60.js",
    "revision": "799aef30dfd22c7acfed1795b88fcfb2"
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
    "url": "assets/js/19.5bff5eb6.js",
    "revision": "22e4fd09d04959abebacfac8b1238a61"
  },
  {
    "url": "assets/js/20.1e7009f2.js",
    "revision": "eb5020ce46f4abfd1ea478e6c6dab54e"
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
    "url": "assets/js/23.ee92cbf1.js",
    "revision": "67367860c1d36bb49109ce0fe74de85d"
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
    "url": "assets/js/37.979f83b7.js",
    "revision": "7adfebb995353bcd2735e7b76fd99588"
  },
  {
    "url": "assets/js/38.3a8469bb.js",
    "revision": "3605abbbb8d2c3722224381866c6a35b"
  },
  {
    "url": "assets/js/39.304962a8.js",
    "revision": "dc083297b3920bbe44e76b54c03a2976"
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
    "url": "assets/js/5.2771440f.js",
    "revision": "65cac860ec2e43bb38f8265aa570b266"
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
    "url": "assets/js/77.8c56c147.js",
    "revision": "9e91847ab4deb0ede452d865da043111"
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
    "url": "assets/js/87.e4e49533.js",
    "revision": "7e922002cb1371fef4512aa8f651a46a"
  },
  {
    "url": "assets/js/88.57814e1a.js",
    "revision": "a2722d4e11ebdfc9c9e6106bbf0f5ed6"
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
    "url": "assets/js/99.0a6e828e.js",
    "revision": "556b86e3c140098552348f5cc428d4a5"
  },
  {
    "url": "assets/js/app.313c9395.js",
    "revision": "38ac4aabb17e07349cd968338e3395a5"
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
    "revision": "1ddbe205f6fc951ac550e8d05f648e87"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "cb591f04c259ed60f331e74dfa5e82ed"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "aabb259d8978ad067f1f4be262545c7d"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "df8b97cd8c32dbcc8ddbb2b45e69a95e"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "9560cb58b68c62ca22ddcfac48e97ee8"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "988707fa4c937bb7f65d5f278810228b"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "916257263a26ea960180fc219a5bbe4f"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "9af3787555be486b219a19a5adb9322a"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "aa2b923d07e7712e264771d96075b3da"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "bbd28c13ce9c25080a7db04d5a7f80a4"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "43357dbd15045e48a7756bc3359d2c79"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "11eac38bb120eed8aff81c5a4a1603df"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "bb1ad32146ec3a246003b37b90a825a5"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "57eb55e15e1f3046d2d85f202fb2429a"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "2ae0ed8f52bb6eb220ef28e5d260d778"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "6aba06d76ba6ab0e52cafb906a3906c0"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "909fd1b67da844a06010cf3a856c646c"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "57edb8611577127b0395daa4482bf433"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "7749409545f795fdad28456decaa2352"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "624db7ee160de0717b0320df0b4790f8"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "449157346a9396f4596220e09ef1f0c7"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "d14424a447d95060f3a6773bb0c38ea0"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "7ef906e495a3e22adbd0c04380201194"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "931aec2f8f50f7ce03b44436e581d9e3"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "3f219ea971b14ecac0c1ed24aaa5c07f"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "7a2d8abfb3025a7e8ff48afbd3cbe220"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "fc7c0bd1ecfd683b7bf573f21f8bb813"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "706ac0a6b08a136a7c242788a3f01bfb"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "6d8471563049ce907eba214be9d71966"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "9175ae5bb3c812142bf8ec432b7ea65a"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "d804ae0037a01339b6b65375371e7dd5"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "4a3daea16dad1ad9ab64081ddca49bc8"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "2429dae1519a79a9e99fb2b4edc9aae7"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "e67e61f2b5b5e43e872a62b17be0ca93"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "743d5c1bfe5cebbb654c96176c83671a"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "cd17d88655d08a49f4c6741005e88b4f"
  },
  {
    "url": "blogs/code/2025/2025-05-30-java-interface-concurrent-order-inventory-processing-solution.html",
    "revision": "a4c74c39c16b6275147a56199c5a0b0f"
  },
  {
    "url": "blogs/code/2025/2025-08-02-ios-app-extension.html",
    "revision": "56a50d297f1216929d5750a997af6dfd"
  },
  {
    "url": "blogs/code/2025/2025-08-03-spring-boot-alibailian.html",
    "revision": "b1deee085534e1ecfa9438c39750fbd7"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "052e58ca8ad95521a94946f14e01af3e"
  },
  {
    "url": "categories/index.html",
    "revision": "80103209f9dfefbe2f1085fda820bb95"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "b69611b4d8cd12669f6048c223a1843e"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "3d4072faaac4b75fcdc2b80d37953255"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "9945b875ff1b0151491e86621dd6d7c5"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "8eb05b7f4a5970e732155d54730a7ae6"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "2e345a1e5a3a59d965854359f689584d"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "1ce4bca41940338a4764e817c4625a0d"
  },
  {
    "url": "front/css/animation.html",
    "revision": "ad3b7234ce5a76d4e3efb0992f789ca4"
  },
  {
    "url": "front/css/bfc.html",
    "revision": "b15f7899351fd0ba9818187dd6518834"
  },
  {
    "url": "front/css/box.html",
    "revision": "07c9a2baaa16ef007dad9b3f0e6b5b79"
  },
  {
    "url": "front/css/center.html",
    "revision": "7b720ab3f3b3c05b7ae7a83e4caaef80"
  },
  {
    "url": "front/css/column-layout.html",
    "revision": "4506a389fd2e01aea762d0e03c821377"
  },
  {
    "url": "front/css/css-performance.html",
    "revision": "1fba541f5eb9e4a46fd6fb04f727ebec"
  },
  {
    "url": "front/css/css3-features.html",
    "revision": "519e09193c61d9b4756c442d1d24437b"
  },
  {
    "url": "front/css/flexbox.html",
    "revision": "351b92fa3bb1755be38c7590b2122e5a"
  },
  {
    "url": "front/css/grid.html",
    "revision": "9cee7542d625d68eed16ce6e4c354b54"
  },
  {
    "url": "front/css/hide-attributes.html",
    "revision": "0464df60c4cc23f437295a2bc166465a"
  },
  {
    "url": "front/css/pixel.html",
    "revision": "abb76a8d8838be1139fe6f0d84c46e2c"
  },
  {
    "url": "front/css/responsive-layout.html",
    "revision": "1ed29415ed040dee4192b83501fcaf5a"
  },
  {
    "url": "front/css/selector.html",
    "revision": "5e2688c886574885cabe45e99473040c"
  },
  {
    "url": "front/css/unit.html",
    "revision": "8c7ea1d812489bd2254ca74997089680"
  },
  {
    "url": "front/css/visual-scrolling.html",
    "revision": "5ad4a00eeb128c213aaab7a91fb48438"
  },
  {
    "url": "front/es6/array.html",
    "revision": "1f57cfa3d48a5e1eacb29edc7b3cc73a"
  },
  {
    "url": "front/es6/decorator.html",
    "revision": "b2a78fd740babbebb50edc58b996d2ba"
  },
  {
    "url": "front/es6/function.html",
    "revision": "1b28f0f55f2d8ea42fb13b9475553363"
  },
  {
    "url": "front/es6/generator.html",
    "revision": "4a901a2a2977513940ca9b16f14906f8"
  },
  {
    "url": "front/es6/module.html",
    "revision": "2de355a058527457d018f729c0f728fb"
  },
  {
    "url": "front/es6/object.html",
    "revision": "98c3e204cf9f5f45db6cf01494ed8383"
  },
  {
    "url": "front/es6/promise.html",
    "revision": "3678cd30f957b92f5a76710b444e8e4a"
  },
  {
    "url": "front/es6/proxy.html",
    "revision": "2410e3d0a967502355ca5b74015386c2"
  },
  {
    "url": "front/es6/set-map.html",
    "revision": "957646b0120fc5e647662f84dfe25ad7"
  },
  {
    "url": "front/es6/var-let-const.html",
    "revision": "9b833ae577a0712e8c76dab606c020ea"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "3c53ee82b9c329780bffa6a897760373"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "dec5c5b8d1aede813d776ffa5fe590e1"
  },
  {
    "url": "front/index.html",
    "revision": "126c831d015de7ae1841e938ec81d9a3"
  },
  {
    "url": "front/js/array-api.html",
    "revision": "b3d271398e6fab9a8975f5030921daa4"
  },
  {
    "url": "front/js/closure.html",
    "revision": "1fa1b213576f964a376746a89ba1e09a"
  },
  {
    "url": "front/js/data-type.html",
    "revision": "e34568d2fa5b5984299045105a5a107f"
  },
  {
    "url": "front/js/debounce-throttle.html",
    "revision": "bc6c018de6f2991149326582d6d290bb"
  },
  {
    "url": "front/js/event-loop.html",
    "revision": "b1404bbf746fff6a1ed53690f02e0dad"
  },
  {
    "url": "front/js/prototype.html",
    "revision": "75621b3cecb6ad23962129e6fcd9d5e0"
  },
  {
    "url": "front/js/scope.html",
    "revision": "203ff1d81c506f06f02fb8a6fc72bb2d"
  },
  {
    "url": "front/js/this.html",
    "revision": "314f3116f031406615f9051d7b8c5ff5"
  },
  {
    "url": "front/js/visible.html",
    "revision": "005c7e54fc79dfc642f2bbdccc5d6d76"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "b4809f53d3496caab5bbb35d601e490a"
  },
  {
    "url": "front/network/dns.html",
    "revision": "5253f08e8227cb27c7becf097ad73bc1"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "2d5d9d166840cf1efe03ff903f0f44fb"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "887d4aa28ee508ce32579ab74d564fb5"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "cc44b2d792b4a91754001c12c6a95b01"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "e40de20679cc485930c91c06b55335c6"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "a8217173770d96f6240fdfdc112f09c0"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "43605e5cb5f3166df09979e59fb80294"
  },
  {
    "url": "front/network/https.html",
    "revision": "549fa35b0a7923bf495cee590aa7a05a"
  },
  {
    "url": "front/network/osi.html",
    "revision": "f89bf2ed60c976fb44d33bdc39eb23cc"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "8e17f37e0a1fbcd3aa638ba94c796bdd"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "e3e53da44b8b04466586b64c3afb4a48"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "66f67aedb730b962c97e4dd3c756e59a"
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
    "revision": "55cc87430da8d143aa09e03e242df2c4"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "03ce0df2ef88798977bbbd810b7f373a"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "27f3e40eb57f9bccb1f302d6d7e4c0df"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "9282719a7e9c069913399e1167f4c97f"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "d92c11bee57bfb11619ec4045b89603b"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "ee77a0c766b33c4692dcb17d834711ea"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "62de7a09ec39e9785902ca1cf7cbd720"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "f1e2f7edcb53b000b4dfc82334ba29e4"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "a92b20e30d4bf7eec7bd781b5a95daa0"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "49cd735bddfe5bf2b95f234b00456916"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "4e7de263210cf4776d7d78f99839a91d"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "aa54e6a0208e888ac8d242c998388dac"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "d304e901b4e14c378144a71957664ef6"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "1aed7ad4da22625b770f86c0c80b20fe"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "7c27a856db533e17cd36699c3614b2ab"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "1d26ca6048d8acd4872ce806cd39e5fc"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "1a9b864c5fe7b3484e1e23b783cdb924"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "af951cce08d03af34d6cc0682d02b927"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "650764ec7f539a722fb2d4e4f5dc9772"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "1c9844dec0f477b25f226e10f727ad44"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "b7916bf4fce622ab3fd870db8953e1fa"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "9e341ec24af4c62bdc5d2e826c45f8c6"
  },
  {
    "url": "ios/index.html",
    "revision": "e2fe2480aa2e946dae512d235e6df4b7"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "b097b593eba1d4da2c17891927e5e273"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "b2c4aacf1ea5249f47198692f877a7e3"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "6eb611b61de63aa2b0dc30d001324184"
  },
  {
    "url": "notes/git/tag.html",
    "revision": "091fc767a8912effc08ebcb3ccf19bb9"
  },
  {
    "url": "notes/index.html",
    "revision": "5209f38738ade73488910a0aa9b5d1fa"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "9ac3d0b05d2d9d08f93a867bed363423"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "fbeb13bb614f81acb7f9d09b308ccc48"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "ca328878824df45b496cf57aaf4ee89f"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "4b9d928d06ba257cf25ba1c9c7dece83"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "3b252a6bceb359be2d83441c4b50a673"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "3ecae5e3bdf42c83b09f21343fd386f4"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "dfa4d213805754b1bddf5ef5ca0b5d2d"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "325f0d64140f96119f5e7f8547d06653"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "c767530776830f541b921a28ea92fbd5"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "9b24ecbb0e4925f6558a0cdc3dede297"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "1b92db359ff5a71eaafec310757e1740"
  },
  {
    "url": "tag/Extension/index.html",
    "revision": "828a0f49cd75c1d91c66fb05c6e294ec"
  },
  {
    "url": "tag/index.html",
    "revision": "b4906712cdc9666416bfd4dee7a208cc"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "83ab854f8ce21188168047e2bf17314a"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "9586c733b04f358ec2c56f10246517f1"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "a694ffddd0d1af6aaee6fe1257ab68b4"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "cb51d08372f9baeb08a67a083871baaf"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "628d6bcd3cc4d970dc9a77161164ffed"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "0020b2a31288dc5fe65fe2edf4f0bfa6"
  },
  {
    "url": "timeline/index.html",
    "revision": "148baf2db8032dd6366a212e147e1382"
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
