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
    "revision": "1f0320c8c1df9279f91bc608369d5c9a"
  },
  {
    "url": "assets/css/0.styles.30817c8f.css",
    "revision": "e7a3a88a2b8398e11c81de586fd2a617"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
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
    "url": "assets/img/front/css/dpr.png",
    "revision": "30c4174e5fd3ad6d4b92274c6b56a748"
  },
  {
    "url": "assets/img/front/css/ppi.png",
    "revision": "745660a1dd1b8b1ad995ca9355cc5939"
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
    "url": "assets/js/1.9612af45.js",
    "revision": "5d8accad98161165c6dd2da0f60aceba"
  },
  {
    "url": "assets/js/10.3af24e07.js",
    "revision": "15d4c8343a5acb977544c3d702058bda"
  },
  {
    "url": "assets/js/100.26e720ba.js",
    "revision": "700f9babc5714b0848cda833370f9d67"
  },
  {
    "url": "assets/js/101.04834018.js",
    "revision": "a1eff116cf803a5949e1ae9019034f6e"
  },
  {
    "url": "assets/js/102.7e53357e.js",
    "revision": "1be260df48bf16767c2a8a01bf593ff5"
  },
  {
    "url": "assets/js/103.d4edf9e0.js",
    "revision": "9353e9d51300d3cbb73239552f0835ca"
  },
  {
    "url": "assets/js/104.3971151a.js",
    "revision": "684169f3e5b872709ddef4a35b5683e6"
  },
  {
    "url": "assets/js/105.bef85182.js",
    "revision": "9cc14a736043858a0316c6745e498e0f"
  },
  {
    "url": "assets/js/106.e4dc4542.js",
    "revision": "98a0307de17e6ff0026980aa68c181f3"
  },
  {
    "url": "assets/js/107.086ffacb.js",
    "revision": "a32593949d0627512595778a9d1d2a9d"
  },
  {
    "url": "assets/js/108.73bf8338.js",
    "revision": "105ec89cf4b875bc540c50849df8de75"
  },
  {
    "url": "assets/js/11.53f3c1f0.js",
    "revision": "8debbf78792a8f4289d692c24cc6252e"
  },
  {
    "url": "assets/js/12.b4a2fa5d.js",
    "revision": "1d7aa7fa38b2fc8d51d276a0d9d7a1f5"
  },
  {
    "url": "assets/js/13.9a3173f2.js",
    "revision": "d352ab6830f70c75e58be3864b758c19"
  },
  {
    "url": "assets/js/14.61fda700.js",
    "revision": "3d5a491c3b61e3e8faf675ca2d27f363"
  },
  {
    "url": "assets/js/15.0e62f507.js",
    "revision": "d10931b46c2f45f146cf35ab1874ddd5"
  },
  {
    "url": "assets/js/16.a1099c65.js",
    "revision": "6ff8fff7f14d86d44e11848163b95b22"
  },
  {
    "url": "assets/js/17.6bf5489f.js",
    "revision": "4be8bc40a5e0d98ef5dd270b62b6e0ea"
  },
  {
    "url": "assets/js/18.0e79fea5.js",
    "revision": "865e7ae96da2edde9614ffd4d9777407"
  },
  {
    "url": "assets/js/19.051f38b6.js",
    "revision": "b9e83e46e56bf69216ab1d88d4905763"
  },
  {
    "url": "assets/js/20.63137fb6.js",
    "revision": "307807997f56db9d60a0b0b305f76791"
  },
  {
    "url": "assets/js/21.37881860.js",
    "revision": "54d18dcd380a21906793f74cc4d77412"
  },
  {
    "url": "assets/js/22.1d006f01.js",
    "revision": "48dd284b8546e1572d6f2d0fc776295c"
  },
  {
    "url": "assets/js/23.8e9b888b.js",
    "revision": "792714f3d32deb0e10728334cec1e47a"
  },
  {
    "url": "assets/js/24.7cf74c25.js",
    "revision": "fe7b3a803d201a01dd35c8793e927bcf"
  },
  {
    "url": "assets/js/25.ea165378.js",
    "revision": "4cb7be24d2fe94492f79ef014022f4d0"
  },
  {
    "url": "assets/js/26.9b28b6b2.js",
    "revision": "2fa9372c92f1d29f3e26595e00f775d2"
  },
  {
    "url": "assets/js/27.76bddb6d.js",
    "revision": "25a483ffd03a06ff66e2709cb5f244f7"
  },
  {
    "url": "assets/js/28.2dd7e148.js",
    "revision": "06c2963ec3916300bc48c567f86f6b1e"
  },
  {
    "url": "assets/js/29.2cc0e530.js",
    "revision": "124b1e9b97c5eb60a32c3e758547a381"
  },
  {
    "url": "assets/js/30.80afca65.js",
    "revision": "c7eb5f92ad23864751eba1a50f4cce51"
  },
  {
    "url": "assets/js/31.62c35332.js",
    "revision": "0556c5192cb53051e4ec521b847dd36b"
  },
  {
    "url": "assets/js/32.72e7d0a3.js",
    "revision": "d953c6fc65fde88c9803fcb1cf8abc17"
  },
  {
    "url": "assets/js/33.6921557e.js",
    "revision": "d5772de14a92055fb4ce8fbd37abb430"
  },
  {
    "url": "assets/js/34.ee002920.js",
    "revision": "12337704f63e97b0b369030299055911"
  },
  {
    "url": "assets/js/35.389e8976.js",
    "revision": "c19de4b81bee6e1ee32355b478111158"
  },
  {
    "url": "assets/js/36.d6f904ca.js",
    "revision": "91db5b62792b4f45a9189c78238d5fdb"
  },
  {
    "url": "assets/js/37.42d13c33.js",
    "revision": "5adfa47f7ec33646ce90246c7dad4308"
  },
  {
    "url": "assets/js/38.f39fbbc8.js",
    "revision": "169dccef5c78b3834401f51e33566085"
  },
  {
    "url": "assets/js/39.21ecbc64.js",
    "revision": "d2491040783a317c98eff9829593b4e4"
  },
  {
    "url": "assets/js/4.61838b58.js",
    "revision": "8d311bb1553a76c0bb017fba1099c5ad"
  },
  {
    "url": "assets/js/40.b7bb6b9b.js",
    "revision": "6d13ff8ccc4671c9e553a8ce45fe1f35"
  },
  {
    "url": "assets/js/41.3bc0e734.js",
    "revision": "083f162c4ea9f95f860cf9c7871475e3"
  },
  {
    "url": "assets/js/42.07aeac06.js",
    "revision": "c885e29245670737f523848800633309"
  },
  {
    "url": "assets/js/43.b5d6b1dd.js",
    "revision": "f0c8e3b4d4a095dc8c9cc3928481b028"
  },
  {
    "url": "assets/js/44.12e6e71f.js",
    "revision": "69bab570e4eb2595d40f8a78180eae11"
  },
  {
    "url": "assets/js/45.22399285.js",
    "revision": "2731b3b22082d56aecd325531caccd70"
  },
  {
    "url": "assets/js/46.d807b0b4.js",
    "revision": "10b8e2cda06e70442e8db6d6966a2bbc"
  },
  {
    "url": "assets/js/47.6fbeab9a.js",
    "revision": "b63825bf32f0be5e95ff33c9a78c059c"
  },
  {
    "url": "assets/js/48.31848c41.js",
    "revision": "862bdc44964c34a1f17ab69f55bd8f38"
  },
  {
    "url": "assets/js/49.2e0aebf5.js",
    "revision": "5252715e03d89ff202ef556295a0f15f"
  },
  {
    "url": "assets/js/5.be4f267e.js",
    "revision": "9445b76ae678e572d34ace677214602a"
  },
  {
    "url": "assets/js/50.061b1c2b.js",
    "revision": "85c9845407177b86b0c5e8a34e09674d"
  },
  {
    "url": "assets/js/51.f19303e5.js",
    "revision": "61803e2db73d4a71699db32970d362cc"
  },
  {
    "url": "assets/js/52.930f360d.js",
    "revision": "37a6d22fb1a29fa2959a82a49b0c0b9d"
  },
  {
    "url": "assets/js/53.c605b13f.js",
    "revision": "e8525d62f550a54a736f92db2c55a2b9"
  },
  {
    "url": "assets/js/54.83cfbff8.js",
    "revision": "fef80fbfd43e5fda6bcc9f3957f6d57a"
  },
  {
    "url": "assets/js/55.7326b61b.js",
    "revision": "726c99fbd27c96edd32c8218b50d363a"
  },
  {
    "url": "assets/js/56.c5790d2f.js",
    "revision": "0dc732e8833424eb639fcc324fbf4492"
  },
  {
    "url": "assets/js/57.12d0e7f0.js",
    "revision": "0953455004003d6d4204c69859db8daf"
  },
  {
    "url": "assets/js/58.247d891e.js",
    "revision": "24509e22329d3a15fadcf7d14fc18e39"
  },
  {
    "url": "assets/js/59.a792ce37.js",
    "revision": "1edd239c23e82042b116e80a3efc9bce"
  },
  {
    "url": "assets/js/6.2e92ab9f.js",
    "revision": "c68880f33f91989981f3d2fa1b56ffda"
  },
  {
    "url": "assets/js/60.2364e93e.js",
    "revision": "275930c88bfeaaddee1b0d892d0e7917"
  },
  {
    "url": "assets/js/61.70a317b8.js",
    "revision": "4416c1c68c534bc11875b1f5a9ac197c"
  },
  {
    "url": "assets/js/62.6899a527.js",
    "revision": "ac02016ab69032973e4a330ff1d64997"
  },
  {
    "url": "assets/js/63.9b468552.js",
    "revision": "c043f67485dcf300f82f8220ad6ec662"
  },
  {
    "url": "assets/js/64.f55df842.js",
    "revision": "fc1b23a6969ec202480313c5df67d428"
  },
  {
    "url": "assets/js/65.f498c308.js",
    "revision": "f0d519369e39f22853a992cf44af5b80"
  },
  {
    "url": "assets/js/66.9c2ae6a7.js",
    "revision": "8da310457223daa4e1679b6c30d40923"
  },
  {
    "url": "assets/js/67.407a52d6.js",
    "revision": "28828ca290a98df68de60ded7c41941a"
  },
  {
    "url": "assets/js/68.3be53b81.js",
    "revision": "1d5e78a9cd86b63a9467828baa4cef06"
  },
  {
    "url": "assets/js/69.cf659bfe.js",
    "revision": "c93255ee4b0609672113403ae47ad8c9"
  },
  {
    "url": "assets/js/7.48a55568.js",
    "revision": "63a072572f08a1a7218e2b651d1617dd"
  },
  {
    "url": "assets/js/70.db8bfec5.js",
    "revision": "533be4ba4f21db6b0cc2dfb1c10ce50c"
  },
  {
    "url": "assets/js/71.eb96ae31.js",
    "revision": "390046b8662c77940854b1f91061d40b"
  },
  {
    "url": "assets/js/72.7aa7846e.js",
    "revision": "e3cc8262f3adcaf0ecc80843464fa052"
  },
  {
    "url": "assets/js/73.4b1eaf6c.js",
    "revision": "a53fa7626ed815424a2fabdf80c1fc46"
  },
  {
    "url": "assets/js/74.832a1d4c.js",
    "revision": "7934665ebf24289205a968015a556ee9"
  },
  {
    "url": "assets/js/75.a758544d.js",
    "revision": "5ad2a4c41b8bf2d4fa219a8e67c08da8"
  },
  {
    "url": "assets/js/76.383c8ea6.js",
    "revision": "c992351abc4abb75e9fb29e44df5da91"
  },
  {
    "url": "assets/js/77.126ef615.js",
    "revision": "3c10326b8796fd3308a9563ae56b855a"
  },
  {
    "url": "assets/js/78.7a8d5e28.js",
    "revision": "cbc517d01707cd283717887498ba60df"
  },
  {
    "url": "assets/js/79.6b8c14eb.js",
    "revision": "f730274b5a046906ece417e10345bbdb"
  },
  {
    "url": "assets/js/8.6f0c4da0.js",
    "revision": "077ed6df8ab97bf0512d201a517311ef"
  },
  {
    "url": "assets/js/80.b006beaf.js",
    "revision": "2d2c7690c3b76681fce8167719338e45"
  },
  {
    "url": "assets/js/81.26d7b8bf.js",
    "revision": "7e930624c744d7753a9cf2651aaea06b"
  },
  {
    "url": "assets/js/82.6d9be529.js",
    "revision": "63406c69c91f3d207511efb4d321d17a"
  },
  {
    "url": "assets/js/83.52cb883e.js",
    "revision": "e1e33deff3e44623463ee2495f7625b6"
  },
  {
    "url": "assets/js/84.91ee36da.js",
    "revision": "ee10840dcaa851f2bcb811444bc8fa89"
  },
  {
    "url": "assets/js/85.9d1cfcfd.js",
    "revision": "667f8639d196de9e79f6f5ed347c2dcf"
  },
  {
    "url": "assets/js/86.b8fc9691.js",
    "revision": "4bb8996ed40c17e4d68240a92524a3ff"
  },
  {
    "url": "assets/js/87.96dfad97.js",
    "revision": "1e1f69109f1f0723f2d31a5b3a23bfd3"
  },
  {
    "url": "assets/js/88.8aef6485.js",
    "revision": "498e0eafdd62110a6777a79fad8c3fdd"
  },
  {
    "url": "assets/js/89.2217213f.js",
    "revision": "6118f4a83f2d2fb9d0b5cc476960402c"
  },
  {
    "url": "assets/js/9.ab412c2a.js",
    "revision": "c965fc4650a9035bb6e9e3209fee2b9c"
  },
  {
    "url": "assets/js/90.56168238.js",
    "revision": "97f729b2476e57b45908a1ce6805f251"
  },
  {
    "url": "assets/js/91.0f22853e.js",
    "revision": "dfce917cfd8ab67554797f3ba603742e"
  },
  {
    "url": "assets/js/92.5df3bd1e.js",
    "revision": "75f4fc062f911bf0f4b7aee1c8d783c7"
  },
  {
    "url": "assets/js/93.2e585798.js",
    "revision": "974e1ec14efd31adf2e8f2e733f2ea76"
  },
  {
    "url": "assets/js/94.841f3c51.js",
    "revision": "7fbf6b4457615da27afab4d6c08f87e4"
  },
  {
    "url": "assets/js/95.48a36569.js",
    "revision": "67a1697595d58c36a58e18b82ed0d6c1"
  },
  {
    "url": "assets/js/96.3fa8dfff.js",
    "revision": "8fb50caa612242fe078ea9e7d38c8bee"
  },
  {
    "url": "assets/js/97.ea9f041b.js",
    "revision": "0abbe406fa7e2fbd4a8b14fef7f6c80b"
  },
  {
    "url": "assets/js/98.29ca79d9.js",
    "revision": "d402c7a7a08bdac34dd6f685b4421c92"
  },
  {
    "url": "assets/js/99.fef27abb.js",
    "revision": "f0754ce96a0fea866b671665830d4b75"
  },
  {
    "url": "assets/js/app.75378197.js",
    "revision": "2eaef114a713c2eff328151e88d89cfd"
  },
  {
    "url": "assets/js/vendors~flowchart.d76850d2.js",
    "revision": "57be6c6ee393979b3ba1c0e320a1eb9c"
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
    "revision": "81744ba6e47c01a5a239724259f2e1e5"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "d2459b9c5a8437646fb6d949cc9ac5a8"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "f63124c3cfe036afaabf6d703278bc2b"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "55c995d9b3d339bd4bb60224526fd11d"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "68befbde592155d849657648bb414a07"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "e7a14c4e20873809eee35239cf160929"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "7188a979ea724fba61b4e026e8e3dc23"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "8b6e5d7a0066863b6f50890c85fab842"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "f51c8032f005b3045c02ab514ce31990"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "7b7f16920a5d4c913bee985913062030"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "06e0cb7fc1753db1c7ba384620ec3f03"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "6c01d11af839ecf380ffaac7a1443b1c"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "e2fc379afc218441243cfc8cb14bfdcb"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "b90187985c6b9ff843a2ec3f7e5df0c3"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "65c22d785a720aa84271f9cf1cf18f70"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "53fbb4b1a6e1dfff6c11687b87ebd5d4"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "33ab7f87fe5196dc284bb831af6e789c"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "7406d7b26526b69c15e8210a197174dd"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "06cfd2c7c764ace428110d9d39aadf90"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "2d7b197784494fd346d34aea61812309"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "d9bb1e60d61a58f23e3ee023cf55e564"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "25a5bd2afa2bc341d800798f308d02b6"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "f604cae9940c74a14401c4882129ba5b"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "a70d50c5234428e526516a60355632b2"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "9a0777d9387c7e6290c3e2712c38fe28"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "cd65d9a6f8473f964ad82b905ed65aa7"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "424bec77c3d8edc9f007401aee127378"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d06f0bcb9ac59699e18c533c83d174bc"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "b6681bfc1fffccd36726ddf763d4234c"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "8ee1b83174365c0a55f576ead6db0802"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "30b9ad7a85b5d006b6dcb71db44c2189"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "c1b6f4245f0bd785fbfd9bd4fc6a4b3f"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "c615e26ca3caa24b24c395899bd31185"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "b1ff05c9a537d3f9a8b3d6758a1c897e"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "84bdee78a18c214a8d347466eade6e9d"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "84c7513a70859cfa7c72cad94c74ecf5"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "8665813ce7c948b4fd4b94db95998fe4"
  },
  {
    "url": "categories/index.html",
    "revision": "b331b6915aa8734c62363ea9dcaf70e4"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "9975f763fbc7818717af552ff65e3721"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "6d572e1df1551e4a753c06578481eee7"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "7c8f4f569e04fa70c1e430040c9f1a50"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "e315ad94391eaad1115d17e49e7cccab"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "07c091a97016d410df98fad47dd6bfcb"
  },
  {
    "url": "front/css/bfc.html",
    "revision": "e902756f517572c163ba9f436a7327b6"
  },
  {
    "url": "front/css/box.html",
    "revision": "1e2c0b6553d79c6f6021ad8774b4e7d9"
  },
  {
    "url": "front/css/hide-attributes.html",
    "revision": "f02df897b4996cf84581f4f7cfcafcf5"
  },
  {
    "url": "front/css/pixel.html",
    "revision": "8ac8e321303ad85b2d4b9d4d6037e189"
  },
  {
    "url": "front/css/selector.html",
    "revision": "58b2cc1293186e621a66988e316136b1"
  },
  {
    "url": "front/css/unit.html",
    "revision": "ca4fc6be8d235db740d0ed7d8e0536f1"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "9c70c93c5182d6b1cbc7027ae44234ef"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "d17b4a84a4e63dcf30550783a13ccac9"
  },
  {
    "url": "front/index.html",
    "revision": "719040e9f2e35a6dfd815d057719d4a8"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "fe6fc84fa653b0d9ae391fcb256a663f"
  },
  {
    "url": "front/network/dns.html",
    "revision": "eb2278e58fdfea28d279d71d61dd9f3e"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "110c2b05ae5c27a801da7d256fb129be"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "51c5569719ec1ebf674ec0d5fc905f6d"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "fbd3d3bb651b98e1150d99ba125d3dd8"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "efabe28a7132a5348fbcde599c426deb"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "458d42cc24ae09847c054ab3ea17e5f0"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "f1aa8ef4b0f872062d452fab669587d1"
  },
  {
    "url": "front/network/https.html",
    "revision": "e90bf222c7c67944af9a5ffa5027b743"
  },
  {
    "url": "front/network/osi.html",
    "revision": "361b80f9ca4156fe6031fae9aca3f316"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "f0cb6a11b0b701ea1b08597b683df326"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "17423211be4e8bad931db44fd3557c2f"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "8a337b65acb8a82c4be0e24d23659a61"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "765c3403ecd34bfdc738a2cac12a38d1"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "0be6e6d477dfb6c7c8c6715428a48381"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "00f2f1a691876bde9a44106d221c1df4"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "8862a8396f5fe1496b765bb80fc0c2bb"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "62ed3438675c43b7e192ffdb7a63ac55"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "b7009ec588dd41aad183e5de9b0e6efd"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "147d3692f2263d5814aafdb118c6d745"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "28172da552208c24fa7ba23beb093aab"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "7001b3081690ca9669e9dcf31a14797d"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "c1e64fc8b87cedc2903fee361eadeb29"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "b3b8ac5672331442a994e6d7b604aedd"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "fd596f61c5e418a9cbf7775cf8226668"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "125fc805fdb7fa2f9d103e7c4f7c5f5e"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "7cd01745538b1f53edae4179ea2872f3"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "e2a8ad1b915396845e3aa674771b1cd5"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "0001ff10d531ca127f4eb97ed179d40d"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "2c981db9cf774bc690fca5b030269edc"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "c77382969628c5c28dfe74fa3b315f94"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "7f09726269d829cc0813c5190b6bb536"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "74b8552fcace72be3da613e5ac8ea124"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "3050f060dfda01dea5bb08dfbcc784e6"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "f89029999983b4599c92d24406ed17c3"
  },
  {
    "url": "ios/index.html",
    "revision": "511c34fb94f56531fab86bcbcda9fb01"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "ffba4d4cfb2cb03996ef94db1a473634"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "e8afcad8644ca21b7a757ac8d22b8608"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "d128b4316fd30cb6e8b768440d9c253d"
  },
  {
    "url": "notes/index.html",
    "revision": "71c948546ee85a9639fcace9d4bfbd48"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "3ced079b09b4a76dc3bd35fcc6169f69"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "ed2f0da65b6e81be9109f2bbb4656ed8"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "6ee0011919260f66c1367a7327d251ea"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "d2aed7e4f0985528a9f3b228b5359d11"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "8bf5e438bf81974125d8fe97b0e86f22"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "7d1e128130ea4bf684700c3f32944ac1"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "20a22c560d1426eb0ab857778e55160b"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "bf3def346f38797efd224b888e1e85dd"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "4f7fb9bbe98b94967949c054c3e477a1"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "1064367bbaf1c621fa9f5c41fc104b8d"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "392671db106e68946216e6773822fe8b"
  },
  {
    "url": "tag/index.html",
    "revision": "d525eb26683a084288f17b3c576b8e93"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "42e957c629e167114266137a31ee708e"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "215da9a8c6b7a57314fc2bb6cc21be23"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "36dca94ea3bef217af95bd50015d8d94"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "577992302e3ccad4754b37cabbbde4cc"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "b682f451c8df3b7ea021987538645661"
  },
  {
    "url": "timeline/index.html",
    "revision": "ce27e715fee16a0717ce1f3534da3926"
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
