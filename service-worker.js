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
    "revision": "2822a4035ff9daa9c23d1b6f17c6e0bc"
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
    "url": "assets/js/100.c44a3afe.js",
    "revision": "e045e2800923f51c8e844dffed125112"
  },
  {
    "url": "assets/js/101.4d365fbd.js",
    "revision": "262665b8002dfef9ecbbbd3dfe1c57a5"
  },
  {
    "url": "assets/js/102.59c6277c.js",
    "revision": "bc8f60622f532e5378e4112f59c359ca"
  },
  {
    "url": "assets/js/103.0a9987f1.js",
    "revision": "6702e8794d8750f7ac84e19d43c04b0f"
  },
  {
    "url": "assets/js/104.01c0ce15.js",
    "revision": "97527e075509aa423b0a2a07449f33b4"
  },
  {
    "url": "assets/js/105.94260449.js",
    "revision": "94b1b86c7a5bc6f5b97255f0d37ec3e4"
  },
  {
    "url": "assets/js/106.0c07e878.js",
    "revision": "47e62bd59a72fc39835ef85a2f42612c"
  },
  {
    "url": "assets/js/107.1d4c6baa.js",
    "revision": "a910d0a3257b399b8ccc17feca24df11"
  },
  {
    "url": "assets/js/108.b195e914.js",
    "revision": "0f3d7377951919d7fb9213c74035238c"
  },
  {
    "url": "assets/js/109.e884844d.js",
    "revision": "2b98deabf9b7a632aef15bd0d4df46de"
  },
  {
    "url": "assets/js/11.cb5f8fac.js",
    "revision": "b6ed371a910187c8a55dc5753ed1f629"
  },
  {
    "url": "assets/js/110.ef062fdb.js",
    "revision": "240cd7b60646a8857b10563cdd5aa5d1"
  },
  {
    "url": "assets/js/111.76dd696c.js",
    "revision": "0a95ff1662e5f48d56cf3398f64b7dd5"
  },
  {
    "url": "assets/js/112.206a62bb.js",
    "revision": "768cc38180ed3cfbbd0125a743493502"
  },
  {
    "url": "assets/js/113.81a7063c.js",
    "revision": "15e8c344b3c8db4f4d7f1d62c8a554d1"
  },
  {
    "url": "assets/js/114.80f75773.js",
    "revision": "e62126a0854ce469403e727c3c821eb4"
  },
  {
    "url": "assets/js/115.f3006dcd.js",
    "revision": "406891378a7c73fcbc9c404359e769c4"
  },
  {
    "url": "assets/js/116.5147f7a6.js",
    "revision": "ed446bcb0b5976797abad39a597833fe"
  },
  {
    "url": "assets/js/117.a1aa5dd6.js",
    "revision": "30c27538ccf49b0f55cd015b268a5d67"
  },
  {
    "url": "assets/js/118.06fce3a5.js",
    "revision": "2fac0fb2aa118bf160d67a5484b7ca1b"
  },
  {
    "url": "assets/js/119.b2454b97.js",
    "revision": "1ccab57e81da159e1f53ab6ab6c41645"
  },
  {
    "url": "assets/js/12.1fbb27b8.js",
    "revision": "b539cc548a6ddaf8885da17809258780"
  },
  {
    "url": "assets/js/120.2318d08f.js",
    "revision": "1d0fbbdec240e9390cfb099d16dcea2b"
  },
  {
    "url": "assets/js/121.b4ce4d98.js",
    "revision": "10b43e38adb1376bc5a1d2ff13c3065f"
  },
  {
    "url": "assets/js/122.2ffc903a.js",
    "revision": "e3a4f15c803b021ea7e5e5b678fa56d8"
  },
  {
    "url": "assets/js/123.350ee9f3.js",
    "revision": "8e45ec4d36231d5b629d3277c19dd8f7"
  },
  {
    "url": "assets/js/124.914889e1.js",
    "revision": "0c833df71b103b00a389201128bd160e"
  },
  {
    "url": "assets/js/125.a098ffa0.js",
    "revision": "63ad7286170fd9177d22a6a2cc5bcd8c"
  },
  {
    "url": "assets/js/126.2295fbb2.js",
    "revision": "49747fa7eda7483d67201dee0ca15935"
  },
  {
    "url": "assets/js/127.7be90fbd.js",
    "revision": "82457ff00d8de32432e25e6e619bcf9c"
  },
  {
    "url": "assets/js/128.2225ad61.js",
    "revision": "d2f60f93941f4657cf4ddc09bbb8db48"
  },
  {
    "url": "assets/js/129.4fe1ed01.js",
    "revision": "88f073665fa1e38a605ac0a884616723"
  },
  {
    "url": "assets/js/13.a352ea6a.js",
    "revision": "183061f767b307542748d0fa461d968c"
  },
  {
    "url": "assets/js/130.abb3ff32.js",
    "revision": "7a19dbb9084164f22ec121bf067ec672"
  },
  {
    "url": "assets/js/131.4182154f.js",
    "revision": "c89fb46c80167665e52f457418cec23a"
  },
  {
    "url": "assets/js/132.d12d02be.js",
    "revision": "7ce996e621b7a81a7035b6a347f94c72"
  },
  {
    "url": "assets/js/133.cc5b6aaf.js",
    "revision": "7b20ce15307de3d67184e4b9b26fd247"
  },
  {
    "url": "assets/js/134.c0459faf.js",
    "revision": "ae568c19e2ce31f088fa2d6bde66b8cb"
  },
  {
    "url": "assets/js/135.09ef4660.js",
    "revision": "c1c6c4565112344245c50214c37bb5f7"
  },
  {
    "url": "assets/js/136.a5e31caa.js",
    "revision": "20e00c52fa05a698baa149cf6fc3b107"
  },
  {
    "url": "assets/js/137.68f0219b.js",
    "revision": "0bea5df7a03b16b0f2554d65c43abbad"
  },
  {
    "url": "assets/js/138.bda596a6.js",
    "revision": "f1dc2982c673d9f751957948b070ca68"
  },
  {
    "url": "assets/js/139.5036a1ee.js",
    "revision": "32d8e43fa1d5922bc5ddfd485ae47318"
  },
  {
    "url": "assets/js/14.ec05e296.js",
    "revision": "ca398a5f980f4906515d98d65bf86486"
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
    "url": "assets/js/24.155670fd.js",
    "revision": "a36951ed8041fa514505ddaa9a47c51d"
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
    "url": "assets/js/30.2c8fa10b.js",
    "revision": "4410ba22c553f3ebef576177322f28e4"
  },
  {
    "url": "assets/js/31.b46aa032.js",
    "revision": "0d19d8d32ee8ccec323aad070149deff"
  },
  {
    "url": "assets/js/32.00f96f60.js",
    "revision": "4470519c4177c986193671ffe8c9792d"
  },
  {
    "url": "assets/js/33.ed9ac9b7.js",
    "revision": "9ea3e9fe743f06949352813d1ff9bdb2"
  },
  {
    "url": "assets/js/34.6154670b.js",
    "revision": "2fd054ab744d4bd66402b38993d8656d"
  },
  {
    "url": "assets/js/35.4098e46e.js",
    "revision": "003a50bbcdff9efc044aebb14fe1f771"
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
    "url": "assets/js/38.7b66a314.js",
    "revision": "7ad0cd16004552e126ac48dd43274b49"
  },
  {
    "url": "assets/js/39.39623d52.js",
    "revision": "74ffeaee36d45df2dacd654e0abdbea3"
  },
  {
    "url": "assets/js/4.c013567b.js",
    "revision": "617930ebb7c7496bd408934309472ea6"
  },
  {
    "url": "assets/js/40.d5c3802a.js",
    "revision": "a25074e6adcb6ba5b9a6940af19e232c"
  },
  {
    "url": "assets/js/41.e73a2530.js",
    "revision": "a819957fee7e4a6c58eef065bb125a42"
  },
  {
    "url": "assets/js/42.75e01d32.js",
    "revision": "e8b0ba317fffad20d1f1218661def6a8"
  },
  {
    "url": "assets/js/43.15dc619e.js",
    "revision": "a54ebf4277c683d277d5ec3119a0d196"
  },
  {
    "url": "assets/js/44.164c8d87.js",
    "revision": "58777eff22159a3a46df56249d094e21"
  },
  {
    "url": "assets/js/45.54a210e0.js",
    "revision": "98f8d6214d75099a412a24db03b00eb3"
  },
  {
    "url": "assets/js/46.fb98f4de.js",
    "revision": "3e4b829c1b315a3b010ee9a1cb61fea5"
  },
  {
    "url": "assets/js/47.2e032b24.js",
    "revision": "8022a0669f16bcd1f641e12556e7c3d5"
  },
  {
    "url": "assets/js/48.2f5381ae.js",
    "revision": "0d6c31cedc912cd791ab269b1b7be4f6"
  },
  {
    "url": "assets/js/49.f6f08542.js",
    "revision": "b0ba83445e6321822228d858fa22748b"
  },
  {
    "url": "assets/js/5.2771440f.js",
    "revision": "65cac860ec2e43bb38f8265aa570b266"
  },
  {
    "url": "assets/js/50.bd7b7996.js",
    "revision": "b949dba41dd34739064cb6eb9b4fb263"
  },
  {
    "url": "assets/js/51.acae6ee4.js",
    "revision": "0d86267aeec2d649c80270447018cb94"
  },
  {
    "url": "assets/js/52.d32a3c89.js",
    "revision": "fb2e8e88ad2fa0fe354fa241096c89c4"
  },
  {
    "url": "assets/js/53.a9c2e7de.js",
    "revision": "97efb71e7397bf105b60a766c76d8071"
  },
  {
    "url": "assets/js/54.a52258b0.js",
    "revision": "3a09c9a3cbdb9059944c083ada8ac48a"
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
    "url": "assets/js/57.0be809b5.js",
    "revision": "38a5f701c6bf72d2f9ed5d03a9cdb3e4"
  },
  {
    "url": "assets/js/58.46e84c48.js",
    "revision": "4ac41c895cf231da630dd4b2be92642e"
  },
  {
    "url": "assets/js/59.4f55fb0d.js",
    "revision": "b9b5cb0fda03e34b4a9cf5446f34fa68"
  },
  {
    "url": "assets/js/6.4fd3854b.js",
    "revision": "02d951d409c127f199f43e705f25f33b"
  },
  {
    "url": "assets/js/60.54679fdf.js",
    "revision": "2225bd7ff2d5574785f905fff1ebb694"
  },
  {
    "url": "assets/js/61.ee3cc388.js",
    "revision": "5ae813eabc7b0bcc7f867ae3cabf9195"
  },
  {
    "url": "assets/js/62.080c1c04.js",
    "revision": "ae491619c4c2caf35237e4f317ae1ec8"
  },
  {
    "url": "assets/js/63.2551a920.js",
    "revision": "a74aba46cfe65df1b5a720b295423dfd"
  },
  {
    "url": "assets/js/64.a11d7a86.js",
    "revision": "af8eec272e54b1b0d39e295db701fc09"
  },
  {
    "url": "assets/js/65.38118bf8.js",
    "revision": "c04223330c4ed9a4e453da5817b44905"
  },
  {
    "url": "assets/js/66.47d4cd7f.js",
    "revision": "6b34b3d8e05a12dcc7b2b55e3adc97ae"
  },
  {
    "url": "assets/js/67.d0b0ac50.js",
    "revision": "92532ab8ea32d45c732537ab87b45d19"
  },
  {
    "url": "assets/js/68.449b54ba.js",
    "revision": "3cf16736112dd4e5e815dcb28db687f4"
  },
  {
    "url": "assets/js/69.4d8c7a9e.js",
    "revision": "b717f3487d0a11bd672866ea68b08c15"
  },
  {
    "url": "assets/js/7.c5cdb388.js",
    "revision": "3175d21e674535029a97371dec5e33db"
  },
  {
    "url": "assets/js/70.b4797bfd.js",
    "revision": "3bdc375eab82ad929da6ba1dc4f429e8"
  },
  {
    "url": "assets/js/71.a5e05769.js",
    "revision": "cd200cb5486b06681073da0407a1d081"
  },
  {
    "url": "assets/js/72.335444d2.js",
    "revision": "8908e8e833e3dc867f21cfe512676835"
  },
  {
    "url": "assets/js/73.b3968ee3.js",
    "revision": "56374ee48d0182f91037b1b6eb304df1"
  },
  {
    "url": "assets/js/74.7e7813d1.js",
    "revision": "c6b4517916f57ea1055e98f56b41eded"
  },
  {
    "url": "assets/js/75.266f3d45.js",
    "revision": "00cee147017f99cfbdad6118ec942f87"
  },
  {
    "url": "assets/js/76.9621e679.js",
    "revision": "01c2e588d88e4ff6d71c42dc34fad324"
  },
  {
    "url": "assets/js/77.10256ea5.js",
    "revision": "b47858472206cfa474327aa6f74d5af5"
  },
  {
    "url": "assets/js/78.9ec09956.js",
    "revision": "82d29790f28922ed5c2ba48444f6593d"
  },
  {
    "url": "assets/js/79.fa839690.js",
    "revision": "ee9366ae5240d149872e88f6f6623d80"
  },
  {
    "url": "assets/js/8.22215299.js",
    "revision": "f1bc4cd071abde0db146946be7bbabe2"
  },
  {
    "url": "assets/js/80.e4361744.js",
    "revision": "7c5b6b98e00e353dadd82ce2620d3e46"
  },
  {
    "url": "assets/js/81.b321ef33.js",
    "revision": "3a8775632d23b9cdf388ed61c43a6476"
  },
  {
    "url": "assets/js/82.ce7c0347.js",
    "revision": "66125492881474b79c0d957c84dd5107"
  },
  {
    "url": "assets/js/83.fc97c427.js",
    "revision": "394423a057e5c5e3b2ac5aa48ae396d2"
  },
  {
    "url": "assets/js/84.095301b1.js",
    "revision": "87449a9d82c4d4095e0de123bd5385f9"
  },
  {
    "url": "assets/js/85.3558a69c.js",
    "revision": "ef8a80343a9c91c2a24901f5471c7298"
  },
  {
    "url": "assets/js/86.d66a69f7.js",
    "revision": "e3e96246b0dd1d29425ffaac878df2e3"
  },
  {
    "url": "assets/js/87.b201f2a7.js",
    "revision": "eebd2851ec0b3dcb169a0672c7f96e26"
  },
  {
    "url": "assets/js/88.887ec29a.js",
    "revision": "2f32cee4f912fc42d5a91a428caab20d"
  },
  {
    "url": "assets/js/89.6e9a2ee8.js",
    "revision": "01bda99cb05ddb5733a06d52e938ac1a"
  },
  {
    "url": "assets/js/9.8f2b0a3c.js",
    "revision": "dcaf11b6100260634ff8be3ad9a5c9a7"
  },
  {
    "url": "assets/js/90.57d5f3d9.js",
    "revision": "ba6e2eb5cf654bebc8787f7790fb5a40"
  },
  {
    "url": "assets/js/91.b9a02264.js",
    "revision": "cfa442f1b3ed985bdf5273e1b248b7c1"
  },
  {
    "url": "assets/js/92.3b4bbbb8.js",
    "revision": "8a4d4093d676b9d34ba735414626a606"
  },
  {
    "url": "assets/js/93.2733e5d0.js",
    "revision": "11669f94d95cb64481e9e11e0a5f3c98"
  },
  {
    "url": "assets/js/94.c4e2068b.js",
    "revision": "9b6ec99af14f9a8dfe863fe15c85c939"
  },
  {
    "url": "assets/js/95.5a50096e.js",
    "revision": "9d23edbb56b70747c9a2881652362369"
  },
  {
    "url": "assets/js/96.d3571a43.js",
    "revision": "71eeb2f7f38adcbf0181b38cb42cf72f"
  },
  {
    "url": "assets/js/97.2989e4d1.js",
    "revision": "ba0be284014917f5490c37b2297a8fb3"
  },
  {
    "url": "assets/js/98.d5734425.js",
    "revision": "70c08e1785ddcefe54be81691b68af78"
  },
  {
    "url": "assets/js/99.1fe39a2f.js",
    "revision": "823f80dd74f16297eb00f68a514759a0"
  },
  {
    "url": "assets/js/app.8e01d254.js",
    "revision": "1115ed88c44187a08b68d1406e122dc6"
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
    "revision": "5ee34fe8d5fc79a08df5461a71d925a5"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "1bd7d3124e1f79cb01b53f313ba67fa7"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "325a00d04e2a872273b7f5f072a107d1"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "d8be0a4333183f2647010ae55dda8027"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "9d9ee946cc9ae9822e23e70dbec77f16"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "e8760be82dac1e01881cbb11a672fc6b"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "78032737de770ae8c8acadcbd971b30c"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "f555978c8d04cc362e368ddbec17f258"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "e4cec748e85f579d4786ae398ae95c5b"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "1b71624326f709e6a0f22ce3b5944b28"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "dd219c773229fd375d0cfcb17e6f5c80"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "43ae7ced38e3f4bdf95d401f0505b4d8"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "d03a0c5d1ab7d551d96e87ffbb5097be"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "d2061dc76c0a3216a338e17d16a7591f"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "36a2598a30a27bccc298e1ec29b8aff0"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "bbbeeda5206f8287a909a8c078d2bcc0"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "0304a3c8eb78151e893590f2e3266736"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "45773b79b7bf6647f2195a7d470d1c58"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "02b8a66023a018ba19d7f2e3eed3cea7"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "87ac59a3a288ca76f1b5b6b137773d1e"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "72ff04a26c7c725f5b3dda1adff6ee62"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "6b3ae9c3b7a10ea06e4b62cc825fd9d6"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "3d62f1ff50c9878a1f44b8330ba6ea80"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "4b509bb9bd4982c594ae3edbc0d4029b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "af3254cc55639a3a4f9d1b82db1f2a03"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "aafb3a9bbce49547de213df729a1edf2"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "74b2166067c3acdb70fa9ff93035bff3"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "e40174e99f3032b5967eee89c8bee271"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "0969201e41e56897a1fe47115d8d71ed"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "410d1ea8066a051c49c72b3b45c7fbb2"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "2c15bded7a77fc90b741280a9ae277ca"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "02166e4e26d1b9c7d4559f238ebbca9a"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "93b7fdd30ab0673ff36b0bbd61bc5e73"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "b43a7cf9e0a3c320428e4b3201aabe30"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "e31fd4b08a2032b3ac439cf049e1dbc0"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "f1771339c5b08aefe88d5ef89f48017e"
  },
  {
    "url": "blogs/code/2025/2025-05-30-java-interface-concurrent-order-inventory-processing-solution.html",
    "revision": "29f608ea5d3fbc2222a17f58eadbe4d2"
  },
  {
    "url": "blogs/code/2025/2025-08-02-ios-app-extension.html",
    "revision": "c7d06c05c5ccc11d3744aa10bb7119a8"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "caa2d4213f748343f84685a4cf874539"
  },
  {
    "url": "categories/index.html",
    "revision": "73debb5dd01c76cc377887f136f628bb"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "f6009cbc54e6d95854793634d4c0bb97"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "2bb550ff764fe4fe2f8173cebdf94bb7"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "aa6f26e25635a91b148ad2eacd27f84e"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "7bbab6bb440d799af5691e22daf14ba9"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "e152ef3b3b5d0e809c41239e9c18a8a0"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "ab54b729a8df9198093d68e8470a827d"
  },
  {
    "url": "front/css/animation.html",
    "revision": "2d18bf0b3cccfc217084940adc7195f5"
  },
  {
    "url": "front/css/bfc.html",
    "revision": "411e507c76b2fb796e5706c20916efcd"
  },
  {
    "url": "front/css/box.html",
    "revision": "231ad42b686e188dbf9bb12aa7320974"
  },
  {
    "url": "front/css/center.html",
    "revision": "02be398cf51bad9d8f075d9fbee0ffe4"
  },
  {
    "url": "front/css/column-layout.html",
    "revision": "a8994219661ff5bd25ec834b1546bceb"
  },
  {
    "url": "front/css/css-performance.html",
    "revision": "0d7911adf9a2e0eeac0fa67a0f25b473"
  },
  {
    "url": "front/css/css3-features.html",
    "revision": "22c49b7b07c0b7214920b64db490ac74"
  },
  {
    "url": "front/css/flexbox.html",
    "revision": "0c0484bb0d0cd9eda0a1fcc33fe6bd2c"
  },
  {
    "url": "front/css/grid.html",
    "revision": "468ac7097dea3d42af8344ab06210b5c"
  },
  {
    "url": "front/css/hide-attributes.html",
    "revision": "7d754f022b180519f81620278951a906"
  },
  {
    "url": "front/css/pixel.html",
    "revision": "6e4551ff9c522d8a70ff976df6334181"
  },
  {
    "url": "front/css/responsive-layout.html",
    "revision": "cb4b65e7a4708d27ba7ce666302d0463"
  },
  {
    "url": "front/css/selector.html",
    "revision": "a61c0fa8907dbf023ac4c3e129cdad10"
  },
  {
    "url": "front/css/unit.html",
    "revision": "874165eeed28bf8f3a5c265050665c70"
  },
  {
    "url": "front/css/visual-scrolling.html",
    "revision": "0d7fad0960f17f7ea7ed1491cb45ad3b"
  },
  {
    "url": "front/es6/array.html",
    "revision": "05e4d9f18e5a14d6d73bb5dbbfdc71be"
  },
  {
    "url": "front/es6/decorator.html",
    "revision": "5ee4578f3652d8287bc81e2a803b3e03"
  },
  {
    "url": "front/es6/function.html",
    "revision": "7751bc8a6c5dc556fcc1e8abb6304b3b"
  },
  {
    "url": "front/es6/generator.html",
    "revision": "d69fcd4b4326c2ac0716412736a9cf6e"
  },
  {
    "url": "front/es6/module.html",
    "revision": "c0f7e4c2ae86edf1606556534a4dd607"
  },
  {
    "url": "front/es6/object.html",
    "revision": "d7328b6923b77afb9e073ec21f920308"
  },
  {
    "url": "front/es6/promise.html",
    "revision": "a7029154dcce6cbafb2b622d809cc639"
  },
  {
    "url": "front/es6/proxy.html",
    "revision": "4b737056d3699c8c4615d1235453224b"
  },
  {
    "url": "front/es6/set-map.html",
    "revision": "753eccb8bfc8a81a75463eb18b0eb831"
  },
  {
    "url": "front/es6/var-let-const.html",
    "revision": "d7cadbb1ef0e2720bd74cccfabd86aae"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "537a6b00c9cc9c48f43d1cf2c2f5c770"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "05f49c11f8b24c078965d92914312633"
  },
  {
    "url": "front/index.html",
    "revision": "e76ef1360fae7b3eb09d6461228b6bb4"
  },
  {
    "url": "front/js/array-api.html",
    "revision": "3223d6fed7d05c9ee20ef6ba1c5fdc86"
  },
  {
    "url": "front/js/closure.html",
    "revision": "ec6284a141f532640e95c8438db5c12c"
  },
  {
    "url": "front/js/data-type.html",
    "revision": "8a19490e81c0ac6f229048a1c44409f8"
  },
  {
    "url": "front/js/debounce-throttle.html",
    "revision": "461aa4bfe563666c66e5415a0cbc5738"
  },
  {
    "url": "front/js/event-loop.html",
    "revision": "fc813075d131c78823457a2b92a1d262"
  },
  {
    "url": "front/js/prototype.html",
    "revision": "cef41df93de74a43850151dbe91d138f"
  },
  {
    "url": "front/js/scope.html",
    "revision": "afbaf0b92f44f8372347a2ad02efbed7"
  },
  {
    "url": "front/js/this.html",
    "revision": "bee8c083c22585eaa9f7c25bb14a7fdc"
  },
  {
    "url": "front/js/visible.html",
    "revision": "425151c41f35c9384353378bfcea8ff2"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "f5d21fcaf11b305ccb942f46269e9ade"
  },
  {
    "url": "front/network/dns.html",
    "revision": "08d41dfb1e0b89a579c0596b7fe9e438"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "c3e4c26f24f044b73b1a2fef27f84763"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "a6a1185b8d46bac7a86940cc6b7f0cd5"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "b412ceb44008b2f41017a3b54a4cdd0c"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "41a2bdc5faca98f1edd7d30fb850e4a6"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "86ca8bcf5615ffd7b70a1aff9aab925d"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "57d3d031f9eb47a994fd0fb956052725"
  },
  {
    "url": "front/network/https.html",
    "revision": "8ce715d1163c54f6d0e5ace4ba9c2ef9"
  },
  {
    "url": "front/network/osi.html",
    "revision": "3494adbb7aa2b7a9b2f842917614d5d8"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "0e5c7e6ebe5e8f0a900ff8867665aa7a"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "8c7181efd1055db0539e08b5b2481ded"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "d5b1b0a67364b046b495e47c73b68e18"
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
    "revision": "f948c16d1b6c324b4bcbf49d535ba856"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "6f336cdc7fe6693723c40ab598d35461"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "b32f7a1133f5695f705ca0d0122ab2e7"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "c37a1414db35faf96d1d9798a52862f9"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "6ce50086f4c5ef77ec557f7aa7dbbaf0"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "9c450974aec9a61222e70aa89e3eed11"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "a01e8af32fb026947ab8c9082e6620ff"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "a7e7d222a6b44ff29fb65880d5ae89b3"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "3df48e0657c7f4b8b926895e4fc2df72"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "6da461c91c73ca54b05dabd83a72af13"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "7bb3b8da5ab7d7588cb1405bb7fc44d5"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "de28dddc0b4e4a2b10e3e4c8927645b3"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "95d3ef2e8ac4fe435d0b32b1d175abdf"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "a16c01962f284edc3b7650e813486ce0"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "f136cbd111dca52933528ff1acf347a8"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "c12b52df17cf831f25c5dd7391355d76"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "6bf4edf5744cd0358e9a0d879430ba58"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "e4d6d53bce37ac63a94bdc46656cb566"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "e37b1b40ed13b670e17295b5fd055132"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "749cc2d9abbea5f75937b69efa7746cc"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "90d626d210cfa3a6fe1bcd30fedad54b"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "e49d89f240b7d9d8f017d3215f3dbaaf"
  },
  {
    "url": "ios/index.html",
    "revision": "8ee7159b1a6187c070e41af1349ef46f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "1772376e808835e44bbf64adf34719ec"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "924982eed3673338300c6d3f4236cd3d"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "d1600e3a5cb830b3fd3d40b9ff4864a8"
  },
  {
    "url": "notes/git/tag.html",
    "revision": "6be0d87e1e3cf3ec73580f58ea41ba83"
  },
  {
    "url": "notes/index.html",
    "revision": "cb5c4df9d873e199e3688a40753fb1e6"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "8e5b7378a8c33bffaddbd81b0be772f4"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "01a2ca177ca3f036d7f9a17675a87c27"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "4fb3d761bb1bf8eb6f500279c3583309"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "a0bb791f1b0901001e1fe6fb390508c6"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "fe544dc0d2ab5b52888b7a2d65d03f8b"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "ba2b753198a5a2b4e554b425ef9fa0e7"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "d6eb29c768ca147b4d8e669bd4ec316e"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "36f4974fef57daaa1c0c1083778c2c75"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "fff8acde95f74158fcf065926fbbc668"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "b8fe415177f4b27ab130aeeace0cf6c4"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "f8434337bd56dc2d45403a523231cec1"
  },
  {
    "url": "tag/Extension/index.html",
    "revision": "13c764acdcc4c5d2a2eef67aebbccdf5"
  },
  {
    "url": "tag/index.html",
    "revision": "aa639534828194c9faa0aacc6615710c"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "28a442e2d746b3f3b77fcf4a89b11461"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "b37e45ca42ee47b6f2f306e8f386816a"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "3b3ec9c5452b85b2f4f11bdf1ed03deb"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "aaf5c941db672c4c09301bfd19fd40e3"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "2383c923c9f8bdaf45dc6f032de02567"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "1c599820eb453b8b870f25fde8a7f154"
  },
  {
    "url": "timeline/index.html",
    "revision": "463d55fb239f1e4917651cd2ff6f74f1"
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
