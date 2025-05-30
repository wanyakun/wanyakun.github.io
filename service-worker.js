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
    "revision": "b3c1a903d6b24354edd30deb4eefb164"
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
    "url": "assets/js/100.40f37d21.js",
    "revision": "01c70370fae05faf418c432bb8fe4425"
  },
  {
    "url": "assets/js/101.5ab4f630.js",
    "revision": "9ee9b75cc9cb3af36969a1a8b72194b9"
  },
  {
    "url": "assets/js/102.9dbab371.js",
    "revision": "da569740fec409f7155cf3fb3e15e0d0"
  },
  {
    "url": "assets/js/103.b4cdb397.js",
    "revision": "1a580ffd049efc03e3fdf63a02942fe5"
  },
  {
    "url": "assets/js/104.8908a4c6.js",
    "revision": "9bbceeec152ccaff1e14e4a0575372f9"
  },
  {
    "url": "assets/js/105.5be89106.js",
    "revision": "2e852f6a0e5e4f84c4d590a57d401b6b"
  },
  {
    "url": "assets/js/106.075a42a1.js",
    "revision": "2fb017907572b7ddf37811ced44f53ec"
  },
  {
    "url": "assets/js/107.422cb138.js",
    "revision": "339a1ea5e0e2e2def33a155908bad239"
  },
  {
    "url": "assets/js/108.b6e14442.js",
    "revision": "6964ca559265e36af960e0e08f42912b"
  },
  {
    "url": "assets/js/109.0ff358b1.js",
    "revision": "25d51ab4a5a36ea74f253a3c5a932478"
  },
  {
    "url": "assets/js/11.269645d6.js",
    "revision": "bfcbd27c305e2df2a2583d6f4539ed5e"
  },
  {
    "url": "assets/js/110.df0db161.js",
    "revision": "c62aad3c6e38fc34b110eab0518602bd"
  },
  {
    "url": "assets/js/111.803ea644.js",
    "revision": "2b3b484c4fa42cd95e4ea7866cc12ce3"
  },
  {
    "url": "assets/js/112.0734f61a.js",
    "revision": "4073ab7fad8d1e812698e24df2d18426"
  },
  {
    "url": "assets/js/113.8f5107cb.js",
    "revision": "5690638dc12479e0aa7eb7401ed1efce"
  },
  {
    "url": "assets/js/114.4cc9eb88.js",
    "revision": "af4ad0c54341fe05e8d607a831d91894"
  },
  {
    "url": "assets/js/115.343d58a7.js",
    "revision": "9113fe73bb92264d37255c1bacd747d6"
  },
  {
    "url": "assets/js/116.84dd1b49.js",
    "revision": "2f68cfb2978d34a71739961d2e37754e"
  },
  {
    "url": "assets/js/117.715df933.js",
    "revision": "ba600d60b5538e6c24dce816f59f7c89"
  },
  {
    "url": "assets/js/118.407cea4b.js",
    "revision": "439db0de4709131c7e7e50b7431c6d9c"
  },
  {
    "url": "assets/js/119.965d1432.js",
    "revision": "80a0c4b55c1a82c339caac64902f121d"
  },
  {
    "url": "assets/js/12.33654836.js",
    "revision": "1f4503bd10d1f04999db84a2915c9186"
  },
  {
    "url": "assets/js/120.3eecc88e.js",
    "revision": "ed98d2306c60eb0d4bee330e3bf1c245"
  },
  {
    "url": "assets/js/121.8af35d6d.js",
    "revision": "19af404ad9a99b55afa3b149ece275ce"
  },
  {
    "url": "assets/js/122.8eee5078.js",
    "revision": "1aa5c3cfbd64b69b27b2ecdf5b0deab3"
  },
  {
    "url": "assets/js/123.a3187115.js",
    "revision": "8b42e672e8d4f438419332b9273d3a81"
  },
  {
    "url": "assets/js/124.cca8b66d.js",
    "revision": "ce5fa26c57b88dd3cedd23b36b996e50"
  },
  {
    "url": "assets/js/125.35b6c44c.js",
    "revision": "98399b3faef2e3acc5b53bc8a1ef6a2e"
  },
  {
    "url": "assets/js/126.07d55487.js",
    "revision": "e265f48dcc9a657e93cd44deb9115b68"
  },
  {
    "url": "assets/js/127.009e4628.js",
    "revision": "7bfbea4f2915f94d4b0cb1c8c1f08411"
  },
  {
    "url": "assets/js/128.39c9517f.js",
    "revision": "54ef711a8a0b2e790fe662e31fdedd04"
  },
  {
    "url": "assets/js/129.107b6677.js",
    "revision": "a3f8a3b7a6305aeec737976ca0f9cd89"
  },
  {
    "url": "assets/js/13.d5bc7185.js",
    "revision": "cb2ac19eca313dcfab983e0d47cff453"
  },
  {
    "url": "assets/js/130.889150b6.js",
    "revision": "f7b0dabaed05b3a29c65cc48ee6fe75d"
  },
  {
    "url": "assets/js/131.8f1d5d24.js",
    "revision": "848433b62a0df678b2975eba427b7e2b"
  },
  {
    "url": "assets/js/132.b424845f.js",
    "revision": "908370d8f0ad436cb83d9611c23ec4b9"
  },
  {
    "url": "assets/js/133.5d8fb3b2.js",
    "revision": "0e7f087dbd40de91276d776b630d2bd0"
  },
  {
    "url": "assets/js/134.e1addbdb.js",
    "revision": "7b2b07a089ddf8fcc2daeab032c6cff1"
  },
  {
    "url": "assets/js/135.f58409d0.js",
    "revision": "491abc00cb560473df6b21dce56f8e67"
  },
  {
    "url": "assets/js/136.98dbd623.js",
    "revision": "1e86ad9dd1cac13a81a3252ab7d89405"
  },
  {
    "url": "assets/js/137.a45a2d91.js",
    "revision": "40cb16f011df0b55828e7bc740cb3402"
  },
  {
    "url": "assets/js/138.13d5517b.js",
    "revision": "d199246189bdfe19990db0729b0cb2ec"
  },
  {
    "url": "assets/js/14.ec05e296.js",
    "revision": "ca398a5f980f4906515d98d65bf86486"
  },
  {
    "url": "assets/js/15.85cd93d5.js",
    "revision": "9cc95046e681da3f8e41a129a9d22494"
  },
  {
    "url": "assets/js/16.3bfe27f5.js",
    "revision": "c75c9631fdce2b47f9b3ca3ab9714d16"
  },
  {
    "url": "assets/js/17.e426dfc7.js",
    "revision": "693fa23e05b8c71f9473658e9c8a2a13"
  },
  {
    "url": "assets/js/18.4525070f.js",
    "revision": "1977e452ce84dc9851505ae4b5e40f58"
  },
  {
    "url": "assets/js/19.f658e047.js",
    "revision": "a304ee3e0d8e99bd264d157d761fe128"
  },
  {
    "url": "assets/js/20.101d2cc1.js",
    "revision": "f646d8ffad9ce76eadee4782b5bf9275"
  },
  {
    "url": "assets/js/21.a45c470b.js",
    "revision": "d1bff663123095b2aa5f44cb1dd83fb2"
  },
  {
    "url": "assets/js/22.cf36b366.js",
    "revision": "f82f54d7b8733df20468ff1af4991477"
  },
  {
    "url": "assets/js/23.ce6495af.js",
    "revision": "3eb72e9310f19ee70fdc78e8f82282e2"
  },
  {
    "url": "assets/js/24.56ccf285.js",
    "revision": "7ed6155967f55bd987eb2508e18537f3"
  },
  {
    "url": "assets/js/25.bad9a788.js",
    "revision": "e940cdb5db4a4d63fa58fd14ea914518"
  },
  {
    "url": "assets/js/26.2599b2bb.js",
    "revision": "3f220c2ee4e5bc4ba330f6f093d5987d"
  },
  {
    "url": "assets/js/27.955b4982.js",
    "revision": "15b219df7100031b35ad8afaff29e889"
  },
  {
    "url": "assets/js/28.d517136e.js",
    "revision": "04d8e35a93ea6467399d49e707669d56"
  },
  {
    "url": "assets/js/29.758957aa.js",
    "revision": "f931c65592c29ac3de7bafa7ec8d9396"
  },
  {
    "url": "assets/js/30.ddbd55c9.js",
    "revision": "e919e8659e2bd55a572748e37746b681"
  },
  {
    "url": "assets/js/31.3a7aac3e.js",
    "revision": "490d08d25b466cef975f225addef4f57"
  },
  {
    "url": "assets/js/32.f4bd6720.js",
    "revision": "a1b143c6e2cbf9a0a36c9c253579d92e"
  },
  {
    "url": "assets/js/33.99a8e05d.js",
    "revision": "18b27f69409783987993d9faa7b1fca6"
  },
  {
    "url": "assets/js/34.cff630c6.js",
    "revision": "9e7af675d9d3f620375d3ed841717150"
  },
  {
    "url": "assets/js/35.3d72175c.js",
    "revision": "0c7dbb7c4a47bc436c628dfda1bde8de"
  },
  {
    "url": "assets/js/36.0627faf4.js",
    "revision": "490a339d6ec31b8afb6dc045e63ceed6"
  },
  {
    "url": "assets/js/37.8f1bc02a.js",
    "revision": "632ec88bb85944efab1ac6ee00e88d09"
  },
  {
    "url": "assets/js/38.212e32f3.js",
    "revision": "67d9af3e65eda3f8656b32f5389e6c3c"
  },
  {
    "url": "assets/js/39.abcbee7e.js",
    "revision": "e76c4d2d065bd8bb7373d30684a28334"
  },
  {
    "url": "assets/js/4.c013567b.js",
    "revision": "617930ebb7c7496bd408934309472ea6"
  },
  {
    "url": "assets/js/40.3af38f89.js",
    "revision": "6c4aafba50666d1b8f35fb76b4ed96ac"
  },
  {
    "url": "assets/js/41.6a64dd23.js",
    "revision": "63db5aba27726eb94151873c640eaf7c"
  },
  {
    "url": "assets/js/42.7f20c5f1.js",
    "revision": "1842ccfb8a84a42ac1d8b9fb1afd5f14"
  },
  {
    "url": "assets/js/43.dc1d498e.js",
    "revision": "141b448b788834100da6affcc9649188"
  },
  {
    "url": "assets/js/44.ca686dc8.js",
    "revision": "c94625ae2b3b63be32b5497e7fab5ede"
  },
  {
    "url": "assets/js/45.4b91e630.js",
    "revision": "438ce1a301623dd3feead9f2d12fc7df"
  },
  {
    "url": "assets/js/46.8082a3e9.js",
    "revision": "966a1d6bc40505ed498e837a0934f7b5"
  },
  {
    "url": "assets/js/47.fc25e639.js",
    "revision": "b9dc7c4c73da92616a089d6c956fdce6"
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
    "url": "assets/js/5.50ad3c73.js",
    "revision": "2aeb1770a90b0f4d555ba667571ee2f2"
  },
  {
    "url": "assets/js/50.4ce69ba2.js",
    "revision": "be2918d2b0d5f039b2a580a2fef79395"
  },
  {
    "url": "assets/js/51.acae6ee4.js",
    "revision": "0d86267aeec2d649c80270447018cb94"
  },
  {
    "url": "assets/js/52.f12f9942.js",
    "revision": "a6d6c3e01463cd0c70df469789a7f60d"
  },
  {
    "url": "assets/js/53.0cb13048.js",
    "revision": "18db78594a787b3206cec528baec75a8"
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
    "url": "assets/js/56.167dd27c.js",
    "revision": "328c03db391147a9aa41f99d4a0d5403"
  },
  {
    "url": "assets/js/57.95b7b145.js",
    "revision": "d3555ae15208a808f171f36e987cb2a5"
  },
  {
    "url": "assets/js/58.54bdc2f8.js",
    "revision": "2f295baceb4bc22ec0dadbf7eafec238"
  },
  {
    "url": "assets/js/59.dda34027.js",
    "revision": "09919be8b326c532ce505a4555826856"
  },
  {
    "url": "assets/js/6.37938189.js",
    "revision": "5d29585cb2d578cc24368f4dae83d70d"
  },
  {
    "url": "assets/js/60.ea7237b2.js",
    "revision": "40f7850cecdf9fdfc286b3b9767c9a77"
  },
  {
    "url": "assets/js/61.f3783176.js",
    "revision": "37a1d91af25b092e238ea4fa06e2a763"
  },
  {
    "url": "assets/js/62.aa9dee16.js",
    "revision": "d5e9bd1c3eeffaf5025ee41ab46b26ec"
  },
  {
    "url": "assets/js/63.0e221ffd.js",
    "revision": "a13c06ed32cad70e87b39528ea9fa9dc"
  },
  {
    "url": "assets/js/64.58c4865a.js",
    "revision": "558e4954464fdaaef668f9127070a27f"
  },
  {
    "url": "assets/js/65.573d27fe.js",
    "revision": "923ddd12e86694ac93f4d43423c7f613"
  },
  {
    "url": "assets/js/66.0454f139.js",
    "revision": "9d85e301ebaadfa8cbcedadb797ef131"
  },
  {
    "url": "assets/js/67.c03f1c87.js",
    "revision": "48450a911ccf2fade137586f9b6b65e4"
  },
  {
    "url": "assets/js/68.6ec7695e.js",
    "revision": "5086f3f47d7da76f0a1e5f1707d921d4"
  },
  {
    "url": "assets/js/69.6475574a.js",
    "revision": "d661da62f7c83c90f4076f0d34543725"
  },
  {
    "url": "assets/js/7.c5cdb388.js",
    "revision": "3175d21e674535029a97371dec5e33db"
  },
  {
    "url": "assets/js/70.629e5850.js",
    "revision": "b82f0f4fba65d08e3a80fb67536d3ea2"
  },
  {
    "url": "assets/js/71.dee8057d.js",
    "revision": "8b8c6e881f5f6dc3b51964b0c6a4f494"
  },
  {
    "url": "assets/js/72.f0b752d5.js",
    "revision": "65bfff7cbccd91a974ced0efd0b1743c"
  },
  {
    "url": "assets/js/73.914e0299.js",
    "revision": "c81a07d954d572b05a2c422b0cfad55c"
  },
  {
    "url": "assets/js/74.0893b289.js",
    "revision": "53637d02ca1dfed22bb2bf957d594743"
  },
  {
    "url": "assets/js/75.c0c6982c.js",
    "revision": "0d60e8f3be861590cd5d4e805c21a6f2"
  },
  {
    "url": "assets/js/76.07c26747.js",
    "revision": "49c7152fe123f86271b16c5184d76e2e"
  },
  {
    "url": "assets/js/77.eb57ace9.js",
    "revision": "41ff03dca69a1cc0c5552487de269492"
  },
  {
    "url": "assets/js/78.f80f31ed.js",
    "revision": "d1775b9f9ef07fe5393818edd65571a6"
  },
  {
    "url": "assets/js/79.aaad27ae.js",
    "revision": "863cec6da7c61a59f4708a0d4a805e8a"
  },
  {
    "url": "assets/js/8.22215299.js",
    "revision": "f1bc4cd071abde0db146946be7bbabe2"
  },
  {
    "url": "assets/js/80.01e34481.js",
    "revision": "f4a1d20f62d21333be6c1fa8ab7111a7"
  },
  {
    "url": "assets/js/81.5ad172c5.js",
    "revision": "f9582e4bfcd07469592b0e850c833d59"
  },
  {
    "url": "assets/js/82.d73d4c19.js",
    "revision": "8ec46cb05db9b34204a777575b3d51d9"
  },
  {
    "url": "assets/js/83.cbe68229.js",
    "revision": "69f9d417fa3232dcf4c0b89f99a67bad"
  },
  {
    "url": "assets/js/84.cef47ab9.js",
    "revision": "f40fcf06f9c12737b411ab5606c9a1e7"
  },
  {
    "url": "assets/js/85.57e4e780.js",
    "revision": "688dfc7ea3e0d68d44c8cfa0b0df1561"
  },
  {
    "url": "assets/js/86.d3d3bff3.js",
    "revision": "b02165d9e089ad7225ed640dc78b4f46"
  },
  {
    "url": "assets/js/87.2df05caa.js",
    "revision": "57aa93253d1c41066c119a589b933de5"
  },
  {
    "url": "assets/js/88.90287411.js",
    "revision": "ffaf92aae65ea08fd3a35bb656c5fb07"
  },
  {
    "url": "assets/js/89.01e97593.js",
    "revision": "1a79d5e024fe8b245be51e53baa1aed1"
  },
  {
    "url": "assets/js/9.4fb105ca.js",
    "revision": "b3ef2783bff00c64677d496f63e16941"
  },
  {
    "url": "assets/js/90.dd63e504.js",
    "revision": "635da0d8cfe26b660e266c656764ebb0"
  },
  {
    "url": "assets/js/91.ad31da0a.js",
    "revision": "6d7aa44823d6456824b5c102205e192d"
  },
  {
    "url": "assets/js/92.2605f3eb.js",
    "revision": "d89f83a7d888bd2b09165bf6fd592a25"
  },
  {
    "url": "assets/js/93.17bdb93a.js",
    "revision": "53e4e6bdcae81143dc463666d1719f06"
  },
  {
    "url": "assets/js/94.0946b27a.js",
    "revision": "32f3f468570b98751de544b8d9a72aeb"
  },
  {
    "url": "assets/js/95.e65539e0.js",
    "revision": "f0ed0ba48337583dfe5c311a8d190994"
  },
  {
    "url": "assets/js/96.aec61e7e.js",
    "revision": "6820271951d6f778685983e1d6a71483"
  },
  {
    "url": "assets/js/97.28b411ca.js",
    "revision": "e90155acd5cc92ba47e7f722c5983a9a"
  },
  {
    "url": "assets/js/98.1bc4a6bf.js",
    "revision": "358f021bbe21092467ad4bffeeaf139d"
  },
  {
    "url": "assets/js/99.8222a010.js",
    "revision": "6968a4d8c1e69e0b85508c472fb5ea6b"
  },
  {
    "url": "assets/js/app.16a46ca5.js",
    "revision": "862bab6c1cebde44a8039a44e95aca63"
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
    "revision": "ff0cb7ed77ee85059ec1ba3de43756eb"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "c6dc60d0f455892e29ce254916ec49d9"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "50744cc9ada50c21cfa6c79a2ef91b31"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "58b670dad6d97475c32e54acf2e6fe66"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "24a1e70c019620c885932895f4e029f8"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "b656e2d4df9940454afec2c79e8f9d94"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "6e781bf1a4d172416e8839527b0572a3"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "0654380bc421b90b4da358689794addd"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "cc0597d6847c2d2ff0f68e305cd6abf7"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "3a733c556abf7dd33c6f0b9b55540f6a"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "b7ff38355c5eb7f015f7d3dcfd1f1d6e"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "84f7b7a9487816d08b386419cbce0499"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "7e0f86232ca1920bce7d0e3b56472365"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "451623344d427f49e934e41a155d0e30"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "42f910e54b0334ee9b3d3e4f9ea59b1a"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "17a10180b50cb74d7b7225da815824f3"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "141b83dfac7ccf5f14dcbb382bece4d6"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "3b478af479a3591f0108397fba0e10c7"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "37313369acc25e376fb61235bc6bf747"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "02b625ce29630f7aa349573057cd510a"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "0f8ecba9c0cfcf6c4a611f4c7db21efb"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "8688c08bcac89c51b352cca2f539db5a"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "7ca7209adc5619c13d4b2320f018c5b6"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "f9b5c1b9048ef4ddd4b0ff7125dd62ab"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "6b4e73598fcd72e0c5b402d6aca0183d"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "d3aa7ef20f74c7dcb4bc0cfd8584faa0"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "34718216698ce81e528ae38c565b478d"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d51d7aef1bd9b030a3ad8744a4e5f434"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "056313b963e3147d74b82a2321a9ce5a"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "3f9b9d621645dd9f008466d338df4abe"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "1b87f49e28a5119126a8fbde12ba86b4"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "bb64c321b91f708701a92f17815adeb8"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "7f38d848b07d3fb025fb0c4b36a15e0f"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "4d5b557dd35459d0aba6f571e0aabdde"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "8561b11c2912f1149db5423e9baa9cc5"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "13712a22b8f70a4595a126c883714e30"
  },
  {
    "url": "blogs/code/2025/2025-05-30-java-interface-concurrent-order-inventory-processing-solution.html",
    "revision": "81a65a97de4018cd7ea9a413b94d038f"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "c5b6b90780224f40b5e1bae08ffacf98"
  },
  {
    "url": "categories/index.html",
    "revision": "140e225a9409de8aafe212de03e106b5"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d36da4336d7701f87fedc23af206edd9"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "4f7e706fd073b174bb2bc4fa127e935b"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "897ddc2b96cf5b74f1e8d6a80981e34d"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "a22122d5572661a53d272ca815e650f0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "6a34fd66fa19a933891d100c5cb31423"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "924e2caa89d3f91bf51d6bce58d33028"
  },
  {
    "url": "front/css/animation.html",
    "revision": "1c3300d21fe16025fcb71528edcdbca4"
  },
  {
    "url": "front/css/bfc.html",
    "revision": "4562ecf15ff590bb88515da66fbe4ed8"
  },
  {
    "url": "front/css/box.html",
    "revision": "d1f46b29bdcfaea5c0ad239e9035630e"
  },
  {
    "url": "front/css/center.html",
    "revision": "4a7950495e71a812deaa9a0aa9d66d25"
  },
  {
    "url": "front/css/column-layout.html",
    "revision": "654bcd7a46ef1ad0a867a75923f8278d"
  },
  {
    "url": "front/css/css-performance.html",
    "revision": "4b72f01a046a6f861b39847cfdd23974"
  },
  {
    "url": "front/css/css3-features.html",
    "revision": "1a0b59b31e3d39ce3e32693bfe382bc8"
  },
  {
    "url": "front/css/flexbox.html",
    "revision": "745dda55fc74f449061de576d0c855a5"
  },
  {
    "url": "front/css/grid.html",
    "revision": "c612bc3e590de7af92b07659de8ff24c"
  },
  {
    "url": "front/css/hide-attributes.html",
    "revision": "62ee95ea2634f1467ddbc612b4bc8f60"
  },
  {
    "url": "front/css/pixel.html",
    "revision": "829a3c7798d50ac113fac6ecae2a21cc"
  },
  {
    "url": "front/css/responsive-layout.html",
    "revision": "92d5faba69baf01f28b2102cf2f9a76b"
  },
  {
    "url": "front/css/selector.html",
    "revision": "00349fab608d6fec3b55984d4a282806"
  },
  {
    "url": "front/css/unit.html",
    "revision": "8cfb6cc8ab98d1f0cced325e78fbcbee"
  },
  {
    "url": "front/css/visual-scrolling.html",
    "revision": "0d71089f8fdc51800df98f0e63ca526f"
  },
  {
    "url": "front/es6/array.html",
    "revision": "634ec174c5983049f3269a5b9f5e73d2"
  },
  {
    "url": "front/es6/decorator.html",
    "revision": "494b7d35d489581f079cc77c3c51956a"
  },
  {
    "url": "front/es6/function.html",
    "revision": "5801878aadf4e5894c3e7d8f9a79bb3f"
  },
  {
    "url": "front/es6/generator.html",
    "revision": "84578ea060e90c3885264ffcb32dc554"
  },
  {
    "url": "front/es6/module.html",
    "revision": "8c44e106df85e85613b14a20e15abf3d"
  },
  {
    "url": "front/es6/object.html",
    "revision": "478ca00f057455c3f10dc01977ceb38d"
  },
  {
    "url": "front/es6/promise.html",
    "revision": "bc51e5be9076b074af7816cd5567fa65"
  },
  {
    "url": "front/es6/proxy.html",
    "revision": "bc13c4d8779805625fba65c233e03b10"
  },
  {
    "url": "front/es6/set-map.html",
    "revision": "cddd1370444e2bedaa777fa805599de5"
  },
  {
    "url": "front/es6/var-let-const.html",
    "revision": "3f88dbec41afe27fd60f86d5a619d2c3"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "5c6118c479d5376383c5fb767171a1de"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "74146c70fcebcd0d12c7b5511c0811e1"
  },
  {
    "url": "front/index.html",
    "revision": "dca286bb355b6009d578c7c46165ef5b"
  },
  {
    "url": "front/js/array-api.html",
    "revision": "f5ab4fd75abfa2e63595ce4cf715ca59"
  },
  {
    "url": "front/js/closure.html",
    "revision": "3fe153e0d971b64528d766564ec8ec8e"
  },
  {
    "url": "front/js/data-type.html",
    "revision": "b6b750bf91a2cebfc863e040860ce85f"
  },
  {
    "url": "front/js/debounce-throttle.html",
    "revision": "f0781b16825623d3e2560f860226e0af"
  },
  {
    "url": "front/js/event-loop.html",
    "revision": "a7f610021809c70f0e0abc602d38e7c3"
  },
  {
    "url": "front/js/prototype.html",
    "revision": "9e36dc9dd81c73401b364c2c13441bb6"
  },
  {
    "url": "front/js/scope.html",
    "revision": "ed09aecfb0ce555968f3e4922f022ebc"
  },
  {
    "url": "front/js/this.html",
    "revision": "d25f0f82a4c7f7d186657a66ce6003b0"
  },
  {
    "url": "front/js/visible.html",
    "revision": "d33386eb3b93846c7dd3b4d137914fb5"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "16430c5563c4ac35499d0c717eca6099"
  },
  {
    "url": "front/network/dns.html",
    "revision": "5b16a440385c69097aa1491f95778ac2"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "dd6d6c6b5fcf51c6a1b8d84f3ce1fa19"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "57a8f3f96fae44fba031b05ac58c12a8"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "f2d2ec39d3e3314a9188d019912fa310"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "ba71547acdb2666dd1c16dc5412115fb"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "bc6fde6d732b008b2789ad67af088914"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "5d3e0e8a533ba8e4f44aaed34df40c4a"
  },
  {
    "url": "front/network/https.html",
    "revision": "e32891da31b20f73aaffbe1b99ea656f"
  },
  {
    "url": "front/network/osi.html",
    "revision": "9cf0beed21e6a0ec0d22fd8e8c917bab"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "f4d0ec416daba558d775113c873e76e3"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "7af993576bc7c98f17b3444e88cd268a"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "08a1d3392071e4e26a0c181f6c6143c5"
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
    "revision": "8415c08198bed8d7571747df4b0c4f92"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "a369623ae0926d36bc08f1a9fdf384c2"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "914a483837d9019eb694be6105039517"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "f4aaafb1ee99ecfaa1f65e6c74e074b4"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "fb71f9d211e71b7f9452489ea26a8975"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "482a10a93670a291b351a1ca2195d6d2"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "e1d63e7ca16113946c54efc27cf4bd68"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "993f325e021ed78ec1d82a205a855176"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "566012ca297d395abdd250ea9de12317"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "8944df634d6ebae184c6370732e510ca"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "f267d12fb24f3f7b83b64f4b8c1bac82"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "28f0f792c4072561b8df4090634227c6"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "5952e13674e5eeb91be2a80340dc9ebb"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "ef0c9e601fd7ced7790fc8ece863c6d0"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "7ea38a4898a46665b3ce3f9874fee384"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "4643ff118e812b8b3547a13987ff8d19"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "bebea63e05fc90a17e1079565d48c17e"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "287fc07a3fbc9cc9a1e244993bc70993"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "8d469cb1a668d9182afeb39a2ad36ed8"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "8bb3cc68cda5165d08c6742f9c2ccbb6"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "bbfc743bbba3946661cba749582ce2f9"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "1bb908b866ca23fa40ebbccfeebb8e33"
  },
  {
    "url": "ios/index.html",
    "revision": "421e94879fc9c1853a4ef4008842fb62"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "681513224bd46722413f4d8de1585120"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "082129a92b768a07da4121f78aac94ef"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "682cfe40933ac4b8b4701fd76a4aabe9"
  },
  {
    "url": "notes/git/tag.html",
    "revision": "0baa50e2d79ca9279c5b9227f63fd815"
  },
  {
    "url": "notes/index.html",
    "revision": "79e448e0c22c932561f82d51cc7218f1"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "b41d402db096b4d027b4c84bd2376b4a"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "c90048c620c214b446b87fb2e7a78d06"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "2db117cb23430ab4482cf2ab2cc70bfd"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "f50085cc0a7090ff3b905ecf94539a41"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "43c0e94a09fe234e5521fa29799fd0fd"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "ed3c1ce8ec44ff6952c879d20fd4d80f"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "0b11e0bbb10558d2294fbe3cb2fec19f"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "5c3757f0b5006874c9593e76349cd845"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "4c6922a2d66a0d529f0fe5a9615d2285"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "a26284b47b3be34dfa21427a5f72c79b"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "c1f1eb087df9aa495f68b4149f6f12f0"
  },
  {
    "url": "tag/index.html",
    "revision": "b9b5c6d621701a40bc5b1514454ec729"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "c8f6ba761684f8227c0dff9515080e88"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "a623f33590b067f1f51d67f85eedab21"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "060e50ec4708fb6738d24fabdb41460d"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "a5e9702797d1013eb18a0c7612615417"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "914401bafa71f65afb5b7d3795421995"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "640be1b8509b66b8276bd64bd05a25ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "c4dab6c84b78e97a0375ec6b19ae29ad"
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
