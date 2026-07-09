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
    "revision": "ab620776ca5fb7ec60841b2018c3ce89"
  },
  {
    "url": "assets/css/0.styles.32814ca1.css",
    "revision": "90b9ebb323e9c5d1c7cf100dd93310fb"
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
    "url": "assets/js/10.829280c0.js",
    "revision": "b0794b8b86657627a124fb202d8eaedb"
  },
  {
    "url": "assets/js/100.e82f3f0a.js",
    "revision": "a743c0848464b13b57f742b93201a09b"
  },
  {
    "url": "assets/js/101.ee14751c.js",
    "revision": "f4e76c8d0de3033b4f6ed1acca97e927"
  },
  {
    "url": "assets/js/102.ed5311c7.js",
    "revision": "1b956e7e1c5372cfe355158bc57b586b"
  },
  {
    "url": "assets/js/103.a9a9fb01.js",
    "revision": "dfebfef43185737a2434efc3696d829f"
  },
  {
    "url": "assets/js/104.8236d454.js",
    "revision": "2c3aee8a602136edba09596383817dd9"
  },
  {
    "url": "assets/js/105.854f85d0.js",
    "revision": "1035e793370210e470127eb2a8f50f73"
  },
  {
    "url": "assets/js/106.c33cc216.js",
    "revision": "91a294f518f4f1d5b15f5961114ab499"
  },
  {
    "url": "assets/js/107.99cff80c.js",
    "revision": "9871302eb2b611553081d8f808f58bc8"
  },
  {
    "url": "assets/js/108.66261071.js",
    "revision": "bd818673ea99ea6d34312fa2f294421b"
  },
  {
    "url": "assets/js/109.2289a498.js",
    "revision": "7e1362ee6c743fa5250826fd2fd4fa48"
  },
  {
    "url": "assets/js/11.269645d6.js",
    "revision": "bfcbd27c305e2df2a2583d6f4539ed5e"
  },
  {
    "url": "assets/js/110.1b08f1f0.js",
    "revision": "ff74274c7a77befd5cbffd278cd380de"
  },
  {
    "url": "assets/js/111.6bbbcec8.js",
    "revision": "22196e7039cd08b4ae09fda6d68fc6ea"
  },
  {
    "url": "assets/js/112.372ec7b8.js",
    "revision": "5456aede22c8e3127b8f988e146138d7"
  },
  {
    "url": "assets/js/113.f5b2e83d.js",
    "revision": "8549205e7651177961922a1b49735694"
  },
  {
    "url": "assets/js/114.bb3db4c5.js",
    "revision": "dded898667fb4db8d857099fc8782506"
  },
  {
    "url": "assets/js/115.0411f3b9.js",
    "revision": "f0b6d2fc386824bf3c80284b9a82c816"
  },
  {
    "url": "assets/js/116.ec5ad256.js",
    "revision": "3436302af7490a8574fb5ed7e7d98c71"
  },
  {
    "url": "assets/js/117.87210063.js",
    "revision": "e66a04c7a4553ff6f48467b7256b2121"
  },
  {
    "url": "assets/js/118.99587830.js",
    "revision": "d02f1d5526a66e5eb4b2736208357f6a"
  },
  {
    "url": "assets/js/119.97279df8.js",
    "revision": "2e3349d5b5aa9dc3a707d4b286ca20e6"
  },
  {
    "url": "assets/js/12.fbffe583.js",
    "revision": "45d08e2285a93d00ab349d74109ca988"
  },
  {
    "url": "assets/js/120.b351df58.js",
    "revision": "ce7686fd9f8e8eecd9acb28b85c90987"
  },
  {
    "url": "assets/js/121.07988a8f.js",
    "revision": "a8d3ec99687424980a6a0c68e7626c71"
  },
  {
    "url": "assets/js/122.1fe768ab.js",
    "revision": "18bbb543f5f328c267101f60288e19fe"
  },
  {
    "url": "assets/js/123.e13989d6.js",
    "revision": "324867ae289b10b033c0cedc88d9a57f"
  },
  {
    "url": "assets/js/124.f27d54dd.js",
    "revision": "8854be1af523b3053aeb001bf7ac4793"
  },
  {
    "url": "assets/js/125.f27f529f.js",
    "revision": "ecdeb66928453df5d01ddf979b41cadb"
  },
  {
    "url": "assets/js/126.4b73005c.js",
    "revision": "31b8d0382aa748bdabe383710d386515"
  },
  {
    "url": "assets/js/127.2c695166.js",
    "revision": "35a50bcfd5b4f073de6372699611c252"
  },
  {
    "url": "assets/js/128.c7467625.js",
    "revision": "dbfe500d21d96014dd788e29d3fd531d"
  },
  {
    "url": "assets/js/129.b1769e19.js",
    "revision": "f839181c352de2123cc3bec52dcee742"
  },
  {
    "url": "assets/js/13.d5bc7185.js",
    "revision": "cb2ac19eca313dcfab983e0d47cff453"
  },
  {
    "url": "assets/js/130.e8a4cd62.js",
    "revision": "ca814fe44100b30fb3f47cdd15d5dfd8"
  },
  {
    "url": "assets/js/131.fbb39bc6.js",
    "revision": "adeec33026693dadf0e9241009cec5a4"
  },
  {
    "url": "assets/js/132.1caa5f8e.js",
    "revision": "3fa7e7a6d38791cdd0b64436d8a6917d"
  },
  {
    "url": "assets/js/133.44c3b4b9.js",
    "revision": "a8e2d0fe323efee2e832321d51591c18"
  },
  {
    "url": "assets/js/134.7cd49a0d.js",
    "revision": "717b6c2c75170efc3ece6681b529f57a"
  },
  {
    "url": "assets/js/135.419935b8.js",
    "revision": "182ff3a12b753e4a9a17638163a2a7fe"
  },
  {
    "url": "assets/js/136.10c637c7.js",
    "revision": "1888306fca8e93699af8b52466dd95f8"
  },
  {
    "url": "assets/js/137.1ea50f44.js",
    "revision": "f0ee087c903d7fa0595004f701a85cb3"
  },
  {
    "url": "assets/js/138.f46fd1b7.js",
    "revision": "24e5d949f291a764d0587561842127ae"
  },
  {
    "url": "assets/js/139.de11989f.js",
    "revision": "8401a63914ab7c70c66dd035c5db0495"
  },
  {
    "url": "assets/js/14.ec05e296.js",
    "revision": "ca398a5f980f4906515d98d65bf86486"
  },
  {
    "url": "assets/js/140.bef3efd4.js",
    "revision": "c438e03116aefebc3d53d3674a81fff0"
  },
  {
    "url": "assets/js/141.6245b9ae.js",
    "revision": "7a4634d51c6ffd396b7033ea3799e0b6"
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
    "url": "assets/js/17.4c0e5dde.js",
    "revision": "534c103c2db325e21fb8d770955a7172"
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
    "url": "assets/js/23.ee92cbf1.js",
    "revision": "67367860c1d36bb49109ce0fe74de85d"
  },
  {
    "url": "assets/js/24.db266133.js",
    "revision": "6eb93d9a5d211eb4950f34e05fbe740b"
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
    "url": "assets/js/28.77bea762.js",
    "revision": "cdc8a06c6b24c36c056b55d5620922b4"
  },
  {
    "url": "assets/js/29.042f3169.js",
    "revision": "26a2e3e88d1356089d6646de24486bb2"
  },
  {
    "url": "assets/js/30.9287bbfd.js",
    "revision": "2e93fae4a23743c3296119830ba2e35f"
  },
  {
    "url": "assets/js/31.772a0efa.js",
    "revision": "ecb70357573782fc82d122328d8d910b"
  },
  {
    "url": "assets/js/32.00f96f60.js",
    "revision": "4470519c4177c986193671ffe8c9792d"
  },
  {
    "url": "assets/js/33.c4e198ef.js",
    "revision": "0f7b9dd8ee1c38c80d9f4e5059a3dc18"
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
    "url": "assets/js/39.c29b90b0.js",
    "revision": "aa1c40a52672015cdc78f736f839de6e"
  },
  {
    "url": "assets/js/4.c013567b.js",
    "revision": "617930ebb7c7496bd408934309472ea6"
  },
  {
    "url": "assets/js/40.bf7842dd.js",
    "revision": "7aa7ec6e6821515a89bab6bb814c37a3"
  },
  {
    "url": "assets/js/41.70c5f875.js",
    "revision": "e488fef8010e209c6e291cffd09fffc8"
  },
  {
    "url": "assets/js/42.21cfdb58.js",
    "revision": "873941c52f88221750f920d5501b8ac9"
  },
  {
    "url": "assets/js/43.a656f0f3.js",
    "revision": "262fdd3a55d646f7d344d1adf9a01c32"
  },
  {
    "url": "assets/js/44.495212cb.js",
    "revision": "c11b4a8dd8d38d2bcd1681a5c49b4704"
  },
  {
    "url": "assets/js/45.6233250a.js",
    "revision": "5bb318af09a0d5a05936a316862b302f"
  },
  {
    "url": "assets/js/46.b9e9e5a8.js",
    "revision": "500cbcebf2ce59bfd8ff54aceb218503"
  },
  {
    "url": "assets/js/47.f0de69f7.js",
    "revision": "3d31342aa5281f3d3bc225f872aa6986"
  },
  {
    "url": "assets/js/48.4252f9f8.js",
    "revision": "f63e2802bcda9c14917f0de5e0481ddc"
  },
  {
    "url": "assets/js/49.3c914f97.js",
    "revision": "5890b3f99d0b7ac356a4ab47b40cf968"
  },
  {
    "url": "assets/js/5.b95ce785.js",
    "revision": "dd9296538d8b453967a8a3df0197ff86"
  },
  {
    "url": "assets/js/50.af6bea59.js",
    "revision": "4099be0be113cf70fb18a411a45e9341"
  },
  {
    "url": "assets/js/51.f2718198.js",
    "revision": "31ff76224380e1d7a8a8f8b647fea04b"
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
    "url": "assets/js/54.d0ea3935.js",
    "revision": "906600f55c51a0ce370157ee857d154c"
  },
  {
    "url": "assets/js/55.fba18fd2.js",
    "revision": "d64544bc11a58026f55a96c0ffbf9fac"
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
    "url": "assets/js/58.ab11fdd3.js",
    "revision": "6708f3b7262a579901a8fa346a734b32"
  },
  {
    "url": "assets/js/59.ab57aa9e.js",
    "revision": "3caeb693b5cd4c46ad8cf4c911615fd9"
  },
  {
    "url": "assets/js/6.72fd2097.js",
    "revision": "ce65955f4c0e2003bb8f14f51e046807"
  },
  {
    "url": "assets/js/60.82e9567b.js",
    "revision": "8ac08f9c28344255fae3316b23a582d9"
  },
  {
    "url": "assets/js/61.7967bbc5.js",
    "revision": "9c66870a4644a8aa1d3b6284b3b33560"
  },
  {
    "url": "assets/js/62.91bfeda1.js",
    "revision": "bd64aa9b9137f73c1b52582363f901fd"
  },
  {
    "url": "assets/js/63.b2f69439.js",
    "revision": "ca242140def8f9d2be0391beeb6f68fa"
  },
  {
    "url": "assets/js/64.1475b922.js",
    "revision": "aff2743a9a4fe6369f7de26e151aabc8"
  },
  {
    "url": "assets/js/65.a1e0f9df.js",
    "revision": "36afac1ff9c7d9d2122f1568583993d2"
  },
  {
    "url": "assets/js/66.819f4129.js",
    "revision": "c5f66719f0ad73eda6d879fc0b54ef5d"
  },
  {
    "url": "assets/js/67.d5c2677e.js",
    "revision": "f520cdb02aee76e360596a9069aa2a44"
  },
  {
    "url": "assets/js/68.87c99d37.js",
    "revision": "8b049bb779a48c4f6835e71eb7214e9a"
  },
  {
    "url": "assets/js/69.81d6acac.js",
    "revision": "4fd37cc237ba55fab03683a903c6b9d6"
  },
  {
    "url": "assets/js/7.c5cdb388.js",
    "revision": "3175d21e674535029a97371dec5e33db"
  },
  {
    "url": "assets/js/70.34cac8d3.js",
    "revision": "d990a79415a450edb5765a27848e7244"
  },
  {
    "url": "assets/js/71.f3628cc3.js",
    "revision": "40c32820f38b8147045e8b04d103ac89"
  },
  {
    "url": "assets/js/72.c4174f41.js",
    "revision": "a4cd1c0bdb895faa26fa5fec2ccb109b"
  },
  {
    "url": "assets/js/73.9fe28944.js",
    "revision": "1dfcc6af08b8dbd3777080e50539905d"
  },
  {
    "url": "assets/js/74.d5c2f611.js",
    "revision": "5537ddbc2b9c9f0a42ecbf1a6bc38f1b"
  },
  {
    "url": "assets/js/75.84a30fd5.js",
    "revision": "b6cae96f86b7c488e628c581ab120cf1"
  },
  {
    "url": "assets/js/76.a3afe2ad.js",
    "revision": "0ba33a35e3d9de9f0f9224344f257009"
  },
  {
    "url": "assets/js/77.fd5bc826.js",
    "revision": "492da8008aa8be5d3ae0e77797c292da"
  },
  {
    "url": "assets/js/78.f7ffbf25.js",
    "revision": "fa9433c906aa4272e164280fe02c67a1"
  },
  {
    "url": "assets/js/79.3efd31ea.js",
    "revision": "0a12d84c0ed12d8757e9aaa0e341a1cc"
  },
  {
    "url": "assets/js/8.22215299.js",
    "revision": "f1bc4cd071abde0db146946be7bbabe2"
  },
  {
    "url": "assets/js/80.d42c2307.js",
    "revision": "cd4f554d1da6b51c41f0f95dc9881d67"
  },
  {
    "url": "assets/js/81.59340352.js",
    "revision": "316978bfa5e1cc45d04e03d9a3189e29"
  },
  {
    "url": "assets/js/82.5d5e7c4c.js",
    "revision": "2f6ca7f3d9cc0275046a930e48eff7e5"
  },
  {
    "url": "assets/js/83.6265e22d.js",
    "revision": "3ac7f1316c3205743f953f7b2b5431b1"
  },
  {
    "url": "assets/js/84.8fb03807.js",
    "revision": "3c18b40c641cd4a98f0dbc037b2c09f6"
  },
  {
    "url": "assets/js/85.d47e1cf1.js",
    "revision": "70076d7990eb1a38763ddfddc6420f2b"
  },
  {
    "url": "assets/js/86.7be86b96.js",
    "revision": "e1291940b2bac2ae3b43c18bbd7c1f49"
  },
  {
    "url": "assets/js/87.13b0894e.js",
    "revision": "33a08ba1308bee1678de597ae2ee8d1c"
  },
  {
    "url": "assets/js/88.a228aa54.js",
    "revision": "aaf9894e39ceba84ed82aca408aa8481"
  },
  {
    "url": "assets/js/89.99c3ea86.js",
    "revision": "e9639d48ce96e0e133a03c73d4affb67"
  },
  {
    "url": "assets/js/9.538d8919.js",
    "revision": "01006c6822b2f55f29d29481507fffb2"
  },
  {
    "url": "assets/js/90.87e0b509.js",
    "revision": "2b7b67c4534b20e430bcf74a93cde1fc"
  },
  {
    "url": "assets/js/91.0fb74712.js",
    "revision": "43ddb3e6abffd21b17a3da3cf2f88c8e"
  },
  {
    "url": "assets/js/92.f7b8a3fc.js",
    "revision": "4b5fa6d08d1deaed309bdb8ceaa2e599"
  },
  {
    "url": "assets/js/93.5a4d680b.js",
    "revision": "0abf55529df8d3eda844328d582cfe42"
  },
  {
    "url": "assets/js/94.ff084a59.js",
    "revision": "774fd71a4ccc94679f13397f381b7267"
  },
  {
    "url": "assets/js/95.02f37ce5.js",
    "revision": "f3de74929f0802ed505b92c588ac3ad8"
  },
  {
    "url": "assets/js/96.44858372.js",
    "revision": "a34420141814fbbfcb8559cb49ca7dab"
  },
  {
    "url": "assets/js/97.54235c5d.js",
    "revision": "c43dd76003db284d1004213a69a4dc11"
  },
  {
    "url": "assets/js/98.04d5e639.js",
    "revision": "ff2e003d6d6726eab2cf677065f8bfdd"
  },
  {
    "url": "assets/js/99.625537de.js",
    "revision": "363c7e2bac770971ec98841ff7cb2d39"
  },
  {
    "url": "assets/js/app.53e9182c.js",
    "revision": "5f5c7a1e81a0387b6c93fdebd4f92b12"
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
    "revision": "90a1548c1de58c9896e818d0323b064e"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "6c4097af77e5c2a0c0e0584d3a502cff"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "87e12088104503ef188805f64ce91b36"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "3aa4df483f9a9a3f652b6843d8340a0f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "dbf89739df3381bc149895585b4261e9"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "4b174000a5639997b5a36940653b1ab1"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "4f1e5e277edebbf82a97beaf6c3e5600"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "7979f760dddbc95f44934078a7cdb0d9"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "df83d68887314e8aecc65bded6c9f1bf"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "4842ff032b2c5f9a836e7dbe362887d7"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "db490d7d7b79ae30b42324a108fd1d08"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "f6752a04d502ca1f8aa0c994af4c8a6c"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "60f76c688a8d2614ca4b7962b40b96aa"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "46f558b27d0640c02911f9e03d4bb4a7"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "81864981ae697e4283a197d2e187aa54"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "9dfa4b7fba75f3f869c6f06a9d15bff1"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "ddd9490932c6fe97c770027286e3edb5"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "8f3a109a8af90dabaa95e3ac9beccee0"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "3f93ef884c43d084274414804ade4166"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "e0d0ad1f0b5954612794fc8d638d7a32"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "c481e244697b5034085b337b04c0e717"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "2d53030a64837ce9e6c3446ea20a685c"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "109a550b78d5a391f73dc506890abfad"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "338c54db749307e9839b401863559e1b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "2f00ba3521075491088b313c4e74b95f"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "52eca59e82f8d611546727cd7e214b06"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "5b753acb31877764e6b7d216d8b06445"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "8ddface2dad2828fb1223dbd8fa5b2f2"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "948bb67d8fd88962618f3a03210e3407"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "02442929954096b16d928f15cebc839b"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "bbb07afc9f4ef281c0c0ca7ecf21059d"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "685b1abdc283aa2d1a9f937997be4680"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "c5d3fcb902432be1e0a8af155969f7fc"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "f678bfa1ad8c9740b29ba0d31208fe08"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "4c7a76b647bc63f073a95cd105b5ba20"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "1618c0fe8d616540a9e69f5e1fd5e0a2"
  },
  {
    "url": "blogs/code/2025/2025-05-30-java-interface-concurrent-order-inventory-processing-solution.html",
    "revision": "5a86350569ac1d659d59efd84e87859a"
  },
  {
    "url": "blogs/code/2025/2025-08-02-ios-app-extension.html",
    "revision": "5645feb78ffcc7910768bfd2671cd71e"
  },
  {
    "url": "blogs/code/2025/2025-08-03-spring-boot-alibailian.html",
    "revision": "3846cb28ad9ecccfd7dbb759e14a9565"
  },
  {
    "url": "blogs/code/2026/2026-07-09-ios-cross-platform.html",
    "revision": "4d4d013ea8ad28cd2bbe1870268e33d1"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "d8cf0a7440e14f17794625de146c704f"
  },
  {
    "url": "categories/index.html",
    "revision": "3e5ec28bd7172745b5d012d312bc1752"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "7d0efd6fd5a34214d745fc6460a748c7"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "7e14802730ea23cc86a0c07cfda0987b"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "d1641a9236cbf85f66879188eface727"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "6611c3396fc9f2e465bc19b345b5ec7d"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "7246b63aa2c325cd5da5a30c2871b56c"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "2862325dc9404d43b8abd74fd6bee5e6"
  },
  {
    "url": "categories/跨平台/index.html",
    "revision": "9f2a7d4ef18e7b16875bb67d0e246fad"
  },
  {
    "url": "front/css/animation.html",
    "revision": "4552388dea5a894ba4707c59d21f241e"
  },
  {
    "url": "front/css/bfc.html",
    "revision": "0beb0096acc3174c04b9d859c1e6e4f4"
  },
  {
    "url": "front/css/box.html",
    "revision": "2b2eb50d60a691ecda7efede1f567bec"
  },
  {
    "url": "front/css/center.html",
    "revision": "81ea02e3244b783f11831926a1115972"
  },
  {
    "url": "front/css/column-layout.html",
    "revision": "28f2f9326f75b87a9e94b018e7cefee8"
  },
  {
    "url": "front/css/css-performance.html",
    "revision": "05f0cda1c8cd2c4f66726cc36c1140e2"
  },
  {
    "url": "front/css/css3-features.html",
    "revision": "4aed2f744f16c582470be56cf7fc5764"
  },
  {
    "url": "front/css/flexbox.html",
    "revision": "6b306ba4145812c0659fd853f1eac854"
  },
  {
    "url": "front/css/grid.html",
    "revision": "2bdb5db4cf743ef38cd70709f9f73ff2"
  },
  {
    "url": "front/css/hide-attributes.html",
    "revision": "661a5fba7c8f96ba0e4064915293b9c5"
  },
  {
    "url": "front/css/pixel.html",
    "revision": "48d8e0424fbedac3a88a036b936a1d03"
  },
  {
    "url": "front/css/responsive-layout.html",
    "revision": "4c46a9dbbd1a65d16e2ad68386f70a83"
  },
  {
    "url": "front/css/selector.html",
    "revision": "760fd601622308f6c050cf9d0b2757a7"
  },
  {
    "url": "front/css/unit.html",
    "revision": "6eba72451c42b339f3b34d23ed1be97c"
  },
  {
    "url": "front/css/visual-scrolling.html",
    "revision": "547ef35bc6d0152dc07f4ca46667b00b"
  },
  {
    "url": "front/es6/array.html",
    "revision": "018e3c124398c561b2230e17ae748eb3"
  },
  {
    "url": "front/es6/decorator.html",
    "revision": "96fda400e8e2daa7d3b4c793b60938c4"
  },
  {
    "url": "front/es6/function.html",
    "revision": "9c2c5ccbbec2dae5ff6996b3643909fd"
  },
  {
    "url": "front/es6/generator.html",
    "revision": "2eaaece182c731accae33a74711d7da9"
  },
  {
    "url": "front/es6/module.html",
    "revision": "b9393ca0c1d24a0cde6d97ad9727db37"
  },
  {
    "url": "front/es6/object.html",
    "revision": "34267fe4ac3fbfe623631987c9f3033a"
  },
  {
    "url": "front/es6/promise.html",
    "revision": "c3bf604ed53f490425e9b57ceb2611f9"
  },
  {
    "url": "front/es6/proxy.html",
    "revision": "ef2393d39cc5131d322cfd9fa5b000ae"
  },
  {
    "url": "front/es6/set-map.html",
    "revision": "d74f8ea66711ec20236743a65699baa3"
  },
  {
    "url": "front/es6/var-let-const.html",
    "revision": "f674ab85f72227413a2d69e0af03513f"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "cf37f65bb2b7a014f6041c4d3ef4f7c2"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "da80d4844f198fb0b59ecccf02c3c77d"
  },
  {
    "url": "front/index.html",
    "revision": "1fc17d9610cea36b5f6155037f6f2adf"
  },
  {
    "url": "front/js/array-api.html",
    "revision": "a4107f7dcc43480f7bc29f1d5d2e5ee0"
  },
  {
    "url": "front/js/closure.html",
    "revision": "c006ad6cb969950534a16d52948ce1c4"
  },
  {
    "url": "front/js/data-type.html",
    "revision": "31bd91b19158998cddf340e0a568ef8e"
  },
  {
    "url": "front/js/debounce-throttle.html",
    "revision": "6151be574bb46ce92f859d0b1762b234"
  },
  {
    "url": "front/js/event-loop.html",
    "revision": "158808550ea4baa28a96356f5fcd40e4"
  },
  {
    "url": "front/js/prototype.html",
    "revision": "0d76e9862afd1de9a5f4d267a8db7c34"
  },
  {
    "url": "front/js/scope.html",
    "revision": "ae12629a011b10c74df8c8a37852c711"
  },
  {
    "url": "front/js/this.html",
    "revision": "2f9392b335f22a578c0d6878893999cd"
  },
  {
    "url": "front/js/visible.html",
    "revision": "6d6bbba9ce233f727a6b36bf545d10e5"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "a925148184623cc4a8ed319388f09977"
  },
  {
    "url": "front/network/dns.html",
    "revision": "a2461b87727639bd10f3b6e0aa81dfc3"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "788948fa66af9b105703945e4f14a417"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "ee057a02dcfa123b9e6c09774a9e602e"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "6bbe9ab6dea6de538973c2168386beb9"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "01462a8cb8f7ab22dff4b9896373e5ec"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "1a56901b6dbbbfbfb28b46d870e593aa"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "51a9b7961864250e0d527d63631a3a37"
  },
  {
    "url": "front/network/https.html",
    "revision": "8234829e50aba6fe441906c62e1c216d"
  },
  {
    "url": "front/network/osi.html",
    "revision": "21ae66f43342c620c01a5931b8894d73"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "1524bf7b60d0b33e08f6832e7695ebba"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "43d7331eba5b80de32b8d366d2fda92e"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "156592c4d8be0ed0d44adc75bc47f2d8"
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
    "revision": "235609f8e62d4b63671a49ef7164d4e3"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "67d88f210e295a81655ef672e87fa9b1"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "52aadb43ed2c9cf105aff170ec0e7c66"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "3aebc5fa7b6eccb2b5b06f2e602dfcf6"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "ac4417e274435d9926f15bcdf42a1b75"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "8de0074ad76100e14989aae605b839b0"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "8355fa5230a5a0ab37bb4d21c826ddc5"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "32ec48e9ebb0f0a40bdecb16b0505234"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "86da054f50cd561bbd3b8b8f4930507b"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "32832f92bf0c7bd01d8b7df35873fe93"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "cf37ea1b0bb917041c3435dc61386ffd"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "3b5d5de5820857cac260a5696c0428ac"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "479154e76afb2b4c466a5f988ffc7d15"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "ff1a38576149caba55e90d13aa62578c"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "90f3af493d54507a9e641386747cfc8b"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "01e806db32f37a25ec1e7ebfe18e40de"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "4d77fef1ddfa801221bd5639bb7a0cd3"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "8912f6c368b040dab55a07dc8a2e2bd2"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "6837cb28635657da72e29638f07fa6c2"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "56806cade060aa4ad7b88c7168787b3c"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "0e6549e9bc935db5e7ca856be620d842"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "779e630099e1078281562b49bc40a0f9"
  },
  {
    "url": "ios/index.html",
    "revision": "26d30851d1fb5e068ce00965db45b289"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "fbc40e8d9bbaf6e5064262421df26ebc"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "c5da77baaca2767d5d25c8bd219f3e7a"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "26e9a7672c7ebcd11f35360f5120e12d"
  },
  {
    "url": "notes/git/tag.html",
    "revision": "d5a3a0082d3ebdcc7390f23fa819ebc3"
  },
  {
    "url": "notes/index.html",
    "revision": "088c3bfe3d164e4277c300bde261d94d"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "2e16ee7f0d96516e219e69c3022244c6"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "d257c3668e197173179b618b521deb5b"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "4740c84d2a1b99118f26654d3358545c"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "e2068202972e7f9b698032c72ad960b8"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "025f5d57df0030422bcfe04a31e5cf89"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "f3fd3a6004b8ae7db717d5e1082cfaf5"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "fc5aaf18821e23f69ee46c9b5e0cfc4b"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "f1027f60673c0e9e8d2dc7f5dcc717cd"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "c9af6f88126b3ecde213ad8e19bedaa9"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "e36fb8491d47975dfc6441632d1cc1d4"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "c1e3b308074a99ec9d40f5c4ac7010ca"
  },
  {
    "url": "tag/Android/index.html",
    "revision": "de9e4f6c31fbc4919cf1371025951272"
  },
  {
    "url": "tag/Extension/index.html",
    "revision": "c9d2af8d29960f0652ba2ae0dbbf153c"
  },
  {
    "url": "tag/index.html",
    "revision": "c0d92a8a2320c403d71d71fd863be4df"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "c126160379dfd1a2b745db6a23fceb8b"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "fa19fed1685297318fe41fbce9007d8d"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "7e109cdf4c1ef5a5dc7d71242a53fd51"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "ba7c34fc81d4d639adcbb8a247ab3a40"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "fff5f4f399acc559fc8e2ff975d262e0"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "8d7ed40e02b72482c55ef9fb0831fdeb"
  },
  {
    "url": "tag/跨平台/index.html",
    "revision": "871a843f998d436f04b0ec3805168666"
  },
  {
    "url": "timeline/index.html",
    "revision": "d08ced84a8ea338183f5bba0285c56dd"
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
