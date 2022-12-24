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
    "revision": "b32b76237cf32341053f0a8f63f901c6"
  },
  {
    "url": "assets/css/0.styles.91675566.css",
    "revision": "1ab465a8de527ed85655ec605da93f15"
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
    "url": "assets/js/1.b2724231.js",
    "revision": "e96f5066d75b0bc41167392e368fc833"
  },
  {
    "url": "assets/js/10.3ed9434f.js",
    "revision": "7abf50d16e9d11e677a0477d8e9de2ec"
  },
  {
    "url": "assets/js/100.cb989008.js",
    "revision": "9a3e738d69efdad599055dbb1abfe05c"
  },
  {
    "url": "assets/js/101.35a5ccae.js",
    "revision": "c5a8343d3145c8cad48f98dc820bccbb"
  },
  {
    "url": "assets/js/102.89b9a8a4.js",
    "revision": "9791c4a591c221b47d906c4b4aec99a3"
  },
  {
    "url": "assets/js/103.59219fee.js",
    "revision": "4ad87e1667a1584da718fca69fdedc54"
  },
  {
    "url": "assets/js/104.5bda2a39.js",
    "revision": "a08d76755bb2e8ef9423b36b06908665"
  },
  {
    "url": "assets/js/105.f00b9566.js",
    "revision": "fb4e624226560d92e9fc1e413681e74d"
  },
  {
    "url": "assets/js/106.43816362.js",
    "revision": "77026df1f679d808a599e8846e2fa0cd"
  },
  {
    "url": "assets/js/11.a6693458.js",
    "revision": "72f113f4bf9505fef0f18601ef50a7e1"
  },
  {
    "url": "assets/js/12.4f400ebc.js",
    "revision": "d00245ef296239215ee53c2329f19900"
  },
  {
    "url": "assets/js/13.f3df739e.js",
    "revision": "19b4b8a48b6cc877850a66c7016b022c"
  },
  {
    "url": "assets/js/14.98d4c51c.js",
    "revision": "a38adeff4a930f5f1859083d7a011f7e"
  },
  {
    "url": "assets/js/15.82ee5431.js",
    "revision": "655570f3328c099d5414364907db43b6"
  },
  {
    "url": "assets/js/16.501b2bbb.js",
    "revision": "1de2f9ee9ec1edbc82b0e51d169ad105"
  },
  {
    "url": "assets/js/17.6f30b859.js",
    "revision": "acdd9c2676266dc72a8ec403be2325b0"
  },
  {
    "url": "assets/js/18.e54ec9cc.js",
    "revision": "741dc647ce632ad1a88246c40f9e9222"
  },
  {
    "url": "assets/js/19.f42cfb7f.js",
    "revision": "bc1fbe76232b149a9ac5ac9afc7eb81d"
  },
  {
    "url": "assets/js/20.0b301474.js",
    "revision": "0782fe96b239a066637a1aa5f48d2f3b"
  },
  {
    "url": "assets/js/21.bf67ae68.js",
    "revision": "a80307337cf2d0d65cc5133b49331226"
  },
  {
    "url": "assets/js/22.7116101f.js",
    "revision": "90b2be71c4890e19ca970ef52e302fc9"
  },
  {
    "url": "assets/js/23.80c41d67.js",
    "revision": "e887afbb5bf90da5e229d7d6586bede0"
  },
  {
    "url": "assets/js/24.1f13edc3.js",
    "revision": "f8347750de815f47d4bb047e6b64d552"
  },
  {
    "url": "assets/js/25.bebc5721.js",
    "revision": "75da78601cb0049cb9eb03eff736c5b8"
  },
  {
    "url": "assets/js/26.fed5348c.js",
    "revision": "d05279e087f4af13e1ecbc4d5072da8d"
  },
  {
    "url": "assets/js/27.875fdca1.js",
    "revision": "0a1333d63fc6e350513f1f0780d2cf38"
  },
  {
    "url": "assets/js/28.5b59b539.js",
    "revision": "b57d0104db6b454f0c904f8e1ecbb634"
  },
  {
    "url": "assets/js/29.4f42f0f5.js",
    "revision": "6ce23d31003c43b790080a6adba9fc4a"
  },
  {
    "url": "assets/js/30.8c56543c.js",
    "revision": "c095cb5c1559ccb72411f8ddcb4d05d6"
  },
  {
    "url": "assets/js/31.0a8a1d80.js",
    "revision": "393570b7b14db77dfa4c2333e482444e"
  },
  {
    "url": "assets/js/32.9784b164.js",
    "revision": "3efd84b7971700e462e9e275bc41677a"
  },
  {
    "url": "assets/js/33.19cd87f7.js",
    "revision": "e15a5659ef84ca4e85f93b741652b8a9"
  },
  {
    "url": "assets/js/34.91428d9b.js",
    "revision": "91d64d10097fd3a6f5b07cdd2f3fcc7c"
  },
  {
    "url": "assets/js/35.64ffd4fb.js",
    "revision": "b48f2a23689c2ef64e4d6b8a7d93fd5e"
  },
  {
    "url": "assets/js/36.0d6c16ae.js",
    "revision": "785ddc5e4699ddf8c17de5fcc18f54e1"
  },
  {
    "url": "assets/js/37.6a88b68d.js",
    "revision": "d6f1dd2381ac12b57b6a229b4e1f3095"
  },
  {
    "url": "assets/js/38.e58aa667.js",
    "revision": "d5e4aead6cb50b464e5833a769998575"
  },
  {
    "url": "assets/js/39.16ea68d6.js",
    "revision": "2919bcba12a8b85882ccb3c14331ca07"
  },
  {
    "url": "assets/js/4.24377c97.js",
    "revision": "e84fefa35c2a7d52af34bcc13228fc2b"
  },
  {
    "url": "assets/js/40.1807a356.js",
    "revision": "46424b7879ef5dab6871d31adc66da93"
  },
  {
    "url": "assets/js/41.81511b72.js",
    "revision": "07dbf8bd2e5a3f435ba54f62d2f35f95"
  },
  {
    "url": "assets/js/42.915999df.js",
    "revision": "cdf2c73927cf0802b0f6b1144ab97db0"
  },
  {
    "url": "assets/js/43.48000630.js",
    "revision": "729cff1ead257f5fc47ee457d78eb74a"
  },
  {
    "url": "assets/js/44.e78f3e03.js",
    "revision": "eae4a3cef72e03ae8d8b45ebbf177c3d"
  },
  {
    "url": "assets/js/45.cf3f1259.js",
    "revision": "5a1be048c7aaed5d3485b93121f472f5"
  },
  {
    "url": "assets/js/46.0d726ab7.js",
    "revision": "2e8f1ec5cf49c19454b2c3c37ea213b7"
  },
  {
    "url": "assets/js/47.5dbb042b.js",
    "revision": "9c6538ead7d2ed6b7e39a65cc173e904"
  },
  {
    "url": "assets/js/48.8a3b175a.js",
    "revision": "7fd07726dfe00e482f1a4ab34fa03707"
  },
  {
    "url": "assets/js/49.9b3a0e37.js",
    "revision": "2b83c135e7861d4676f401b549e2cf76"
  },
  {
    "url": "assets/js/5.da3929a7.js",
    "revision": "0317fc4a2bb45ae0b3b4a2642f07132d"
  },
  {
    "url": "assets/js/50.2cccd3f9.js",
    "revision": "4e21b9bd19cdcef468a4a03e4a01d8b0"
  },
  {
    "url": "assets/js/51.5e23435f.js",
    "revision": "2ed3dd401aadb59cfec455a1566a869f"
  },
  {
    "url": "assets/js/52.fa0365a7.js",
    "revision": "2fdc251081a44a8311e16c41bb8d4672"
  },
  {
    "url": "assets/js/53.de7dd92f.js",
    "revision": "a277e48179e35535f8b1c61b5c2ee53f"
  },
  {
    "url": "assets/js/54.cac4b947.js",
    "revision": "78d154a98c1556168676b17cdee96ffb"
  },
  {
    "url": "assets/js/55.80bef3c8.js",
    "revision": "1027b88913af7cb5900af747f5b82619"
  },
  {
    "url": "assets/js/56.4814bd83.js",
    "revision": "21829d94b2faca871ca3b4fef71c7b4d"
  },
  {
    "url": "assets/js/57.f6a74cc5.js",
    "revision": "292275ff281ed29ffe85b5fbe42106eb"
  },
  {
    "url": "assets/js/58.18a912a5.js",
    "revision": "c59c4dadf2f90b5118242ca0cecac989"
  },
  {
    "url": "assets/js/59.6520f7d1.js",
    "revision": "fdbbcc083c3fd210705d03d62d47735c"
  },
  {
    "url": "assets/js/6.e39f5ca0.js",
    "revision": "154d3d5975cba6297e5741dfcbc748c3"
  },
  {
    "url": "assets/js/60.e0db7dc0.js",
    "revision": "5fd692cd39e63296fe77596b3cad63fe"
  },
  {
    "url": "assets/js/61.6ba5e2ec.js",
    "revision": "edb6914933e95fb927f80c15974c7ce7"
  },
  {
    "url": "assets/js/62.f439a077.js",
    "revision": "558d4df6aa743e5c761f1938d50e5d6d"
  },
  {
    "url": "assets/js/63.8e96afef.js",
    "revision": "ab59daa3d2a190b5f6fe16737e84d05a"
  },
  {
    "url": "assets/js/64.52babae7.js",
    "revision": "0a6599fec5a00d40c1cd27840b03db00"
  },
  {
    "url": "assets/js/65.f0800308.js",
    "revision": "a78752a8934a6a064379a4fd2ba286fb"
  },
  {
    "url": "assets/js/66.9f7b68fc.js",
    "revision": "8585cf79377e147c823cc40b904c65e3"
  },
  {
    "url": "assets/js/67.9f8294e8.js",
    "revision": "d9c0227e3ef299f7f08f70b960b0f546"
  },
  {
    "url": "assets/js/68.d3b51862.js",
    "revision": "a6f657a29f8354021fd1a3208d8cecce"
  },
  {
    "url": "assets/js/69.19dfe383.js",
    "revision": "0b834dd428e4ca2df9815728ddf47425"
  },
  {
    "url": "assets/js/7.694cc372.js",
    "revision": "d9b5278744075f4a7231500858ab1c44"
  },
  {
    "url": "assets/js/70.b8a280bc.js",
    "revision": "d3dc03f6411e6e83e7dad0a3576b3322"
  },
  {
    "url": "assets/js/71.7b8524f9.js",
    "revision": "66384e3df1b991ce738616ff518d94f9"
  },
  {
    "url": "assets/js/72.ad5377af.js",
    "revision": "27c47b22a250fe727e1222d03fd1bdf2"
  },
  {
    "url": "assets/js/73.0bedae6b.js",
    "revision": "246b4f4dc9e04ad878679b1e739b103b"
  },
  {
    "url": "assets/js/74.3e66b443.js",
    "revision": "f90302f80420d9bb92fbdbe8f66190c1"
  },
  {
    "url": "assets/js/75.e7f6d1a3.js",
    "revision": "7037c987cb784c9a221546402e238dbd"
  },
  {
    "url": "assets/js/76.8fb99eae.js",
    "revision": "c671c9db16e40c71c635c5a9e1f68db3"
  },
  {
    "url": "assets/js/77.25d2e469.js",
    "revision": "c0e83e8e34caf340b8ef8426a0ba9da5"
  },
  {
    "url": "assets/js/78.52acb3d4.js",
    "revision": "eaf7f3151ea391aa8a5efb911f44bdf4"
  },
  {
    "url": "assets/js/79.31cb1d8b.js",
    "revision": "a453f71b043f0f2c9e326d0b3e00490b"
  },
  {
    "url": "assets/js/8.762d7cfc.js",
    "revision": "d48cb53362fdd4a360a81d8b327ce8c5"
  },
  {
    "url": "assets/js/80.2610fe44.js",
    "revision": "01e9e157b0c4a64eef203b16e8f4d7fe"
  },
  {
    "url": "assets/js/81.de10dcb9.js",
    "revision": "f544b9d440441c7e452c8452eacba7f9"
  },
  {
    "url": "assets/js/82.329324a0.js",
    "revision": "22452d800f3ebbcbd76690a3a1c1ced5"
  },
  {
    "url": "assets/js/83.c4e2081e.js",
    "revision": "64b1146a86f90feba4530414afba2303"
  },
  {
    "url": "assets/js/84.b5e12eea.js",
    "revision": "090aeb197cea4244a1f47cc8c435420d"
  },
  {
    "url": "assets/js/85.71f66dc5.js",
    "revision": "3cb0fb5822dce5e5a6b1abd1300574d7"
  },
  {
    "url": "assets/js/86.8c083037.js",
    "revision": "7c1e1706f1fca95aeadcdb5c9478d41f"
  },
  {
    "url": "assets/js/87.4a4fc641.js",
    "revision": "8ed936469a52b43e28b78bc624615321"
  },
  {
    "url": "assets/js/88.f0e0d572.js",
    "revision": "c6a7c0e70644d28eeeb3f6572d7ff08b"
  },
  {
    "url": "assets/js/89.53848e6a.js",
    "revision": "cc230157604d488fd3a18ba0a73b74dd"
  },
  {
    "url": "assets/js/9.1417a78f.js",
    "revision": "a02261500b6eac32a2c47c69af71a3cc"
  },
  {
    "url": "assets/js/90.76db58aa.js",
    "revision": "4f6a4fd032c1d25eaeea40dcbe9de5f7"
  },
  {
    "url": "assets/js/91.7d2f1218.js",
    "revision": "730e298c3071fe6138a91212c8cc36e6"
  },
  {
    "url": "assets/js/92.eee99b8c.js",
    "revision": "e9c5b637463ba9866cbbf77da834a212"
  },
  {
    "url": "assets/js/93.fd972e1d.js",
    "revision": "0e8b0a7b544671bc337c0f86bfc93381"
  },
  {
    "url": "assets/js/94.90fb1c24.js",
    "revision": "8f28d205d3abaca383690b46c4497129"
  },
  {
    "url": "assets/js/95.ff804603.js",
    "revision": "562404699348cf5dbc6c74b5d92eee31"
  },
  {
    "url": "assets/js/96.fe18dde5.js",
    "revision": "19db35af92b4849ae1c19b1aee6de4ff"
  },
  {
    "url": "assets/js/97.b4cfb684.js",
    "revision": "3513ecad215c96c922d2e2a8f66776ae"
  },
  {
    "url": "assets/js/98.330e8097.js",
    "revision": "d4eeb7fb5f7b8507cde18ef657ca6c4c"
  },
  {
    "url": "assets/js/99.75be948b.js",
    "revision": "77a8017006f32ccb09f8e3b70b937be5"
  },
  {
    "url": "assets/js/app.6375932f.js",
    "revision": "c65c5ac13a4cf31d6b687c81b051d320"
  },
  {
    "url": "assets/js/vendors~flowchart.254f7798.js",
    "revision": "e8b7aee10d00ac96c3d3561a4c121e64"
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
    "revision": "90be071b03fed8eb8594e3afe08a358f"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "71033ecdbb69680eb5c13002646df477"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "e3956d9c587afe8e53668f9764d38281"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "e787f22858a0caaf6bbeeaa8c5e47924"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "ce453002b40a97f588e8e613691f0e25"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "bed88859b757ab00497f9506c7fd9958"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "60a01c634998b7a91f51857a91393a91"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "06829ca8b022d02ddfae3fa555367496"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "c6ac5cfbe1ccd6ad7f0675cc602b0c8f"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "f134b082dec53f5a8f4c11b02c5da160"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "43d7adb469b67b4097dbeb20d8bb239c"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "8f5cf42bea45179ab6f412e136d4eea6"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "7774b4029ac5d04a3af5dcb684a70df9"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "0dee9db45c3d68afd7838225c7d9af67"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "25a4bc2be6e9b15bd22de1d967604a64"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "c3112a72f571eb047a51110ab99b5639"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "fdcaab4093499b69aa3ae47a611d911a"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "429fb46fcea094953af1530934b5f925"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "ab9d736d1f749340a31ee02fa592840b"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "6c20c7cf3ab7bfb247f516c92731fc87"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "c39d5e0fa07ddefcb74ecd940ed6bf16"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "6f5621ced6319f7dfab6b72fba3b30c2"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "aad69bc853dc718b868b8e2105949c43"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "d2bb9d8b5e49e420dc15fa9ec67b7552"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "1efc18dd1bf2b1001381d63afacc7d4f"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "11bd8d0f0d4218c1713d859be51b03e2"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "c0096d9286330dc40cbb0d104c7bff4b"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "2dd23c069964ac725fdec1bd75e5474f"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "4c35ed2dab994fff3e12f68d7584a363"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "9b45a2d7b30d74daa6eaaff01d1fcf3a"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "c866451fcc2c0ce392c30a4f7efbdbd5"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "a597a9aab67aac452de4b6fbf267a466"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "731b94a0b4f0c7273bf510d8a52686dd"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "f1b4e6bc518e7ed4000f697eaabf59ce"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "87031240a981f9f9e88ec28f1a6d63f5"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "397b263c0f3a0a942b71248925980229"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "21e71ec2a6423213ff72620448f7cd86"
  },
  {
    "url": "categories/index.html",
    "revision": "b615ac4c6e786ab0209c80c6b2b7453b"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "4d11c167af048d6ca8155e4ff4b8cabb"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "4381bfc77c0f0c6655dd5212f3a2510b"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "951ad503df4a4da5ae0d7e0b1c48ff2d"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "09b27a8a94ad7a2a3745cff9a46d3052"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "c782006e0f305fcb3f6eeed562ef0282"
  },
  {
    "url": "front/css/box.html",
    "revision": "0bb407c559958dd576925a1b6877e551"
  },
  {
    "url": "front/css/pixel.html",
    "revision": "d2f6af298e63309eb8285e0446c81239"
  },
  {
    "url": "front/css/selector.html",
    "revision": "4ebdcbfa1bea82f6f223cbc0cd0fe70e"
  },
  {
    "url": "front/css/unit.html",
    "revision": "2a09551ec4a3e349f8eb47d3d999134e"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "79596ac3f6d639f37a198a634ce3efdc"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "7c127da9429ac0f2db8b3050b3bc09ce"
  },
  {
    "url": "front/index.html",
    "revision": "6ed25fb86cd6680b4ae4ad46c5906153"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "727643d41cb076d9b2b3281ce6196ac6"
  },
  {
    "url": "front/network/dns.html",
    "revision": "bf943780f7c0abd9a92c401546f1af1e"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "0d0ed2239bfd96667e5dcd8439a9fd7c"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "e9c3b1ba2c71eb32c4893de6558222ad"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "7737fc85a50897ceef851c1a8ed2fba4"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "5f5a1541545c1716106467bba8f55517"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "17f33d3fdd22850b9ed1286b5a345468"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "6dede85dbd30303357ecbb41df416d73"
  },
  {
    "url": "front/network/https.html",
    "revision": "942ba9113dd82fd7f8e74b65e0f203a9"
  },
  {
    "url": "front/network/osi.html",
    "revision": "0b54ded575dbaa6a6e67a88ac5ef7d91"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "c8dfceccd44a085068de5503060507ee"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "38ef1455431f6b62f2d50670b8d09f16"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "32edbd96165738a7e868763eba4f6656"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e3de4c1e63ba9fa2fb6154ca1d1e143c"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "58c65e36da98fc42ca9b003cf14bc4d4"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "149ea21545572896b760e7ae4efd01ce"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "e22dbef15ac4a2adf1c6888a666e01af"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "db513fa792b569b26e183cde81f6e9e3"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "342f3f62b14c0255efa0d75e62d19d2b"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "fda9e0150eabfaacec2fd1eb345771f6"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "c79fb5a3766ff2f482e5328568ff49d2"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "75a07c26682a686f46c444623b7f80e6"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "7569bd3c8a10b8b013689ca02b2e82c1"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "ca3ca4c0033784656d0067d72e16a05b"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "4cf0cce8cb5a6a91f7c8f64107e701c8"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "640f199fc1a0d098b6d7a983dc7d0451"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "fc4e1aa3e0426497faabdf5475df0f70"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "9fbb8f97514026ec287607c30b6fd8a4"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "7d99b100c77b69f02928d3e50369aefc"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "17bbdb3d10bf557c61f62bdb020d6384"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "389e881fa7ec8e5e674d76c2c6c7d333"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "4adac779326b150b2e753c95859ee3c6"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "7b87588fcc2f39ee613f3401858a57aa"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "ad0490fd0d11352b5cec888acab5cc2a"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "d1e4557ab5bef1f456d50a46d8a16cd9"
  },
  {
    "url": "ios/index.html",
    "revision": "6ea5aa3db9ad1755fea0d27d198a8c4f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "6a0c28aae22c9d0bcc64d95183f7932c"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "0f1ce24b50cb698403a059e66f689da7"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "597ac716b24d14e889baf3b002abc512"
  },
  {
    "url": "notes/index.html",
    "revision": "a65e4eaff62fd4421e9d148ce29978e4"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "9736aa8dab4b23913dd942c2575c8cbf"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "b74a97ed46e51f14a747545e2cfb928e"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "86044a205603ec49fe4d9a62aa243ee6"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "5350fe76b17dcfc3cc0a5a2c93d0bec3"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "135096e86d20d9279b5391bec340a479"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "d0bd046ce10d886ea6e0d021b9de471c"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "e2d18783d11027da44916b92a592ec2f"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "31a7f9c16c279b8133577e8313aff1a2"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "4455c04d904d53786c70db17c115c583"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "afbf256fb4b3db96f642e70307d4930e"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "19774aa48948db4e1a3e6f0aedbf64be"
  },
  {
    "url": "tag/index.html",
    "revision": "c5a16690167dbb14927da2840bcf2505"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "47e7efe3cf0b76af437ea1af997645a3"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "c31bf048397c1ab4bbb4065f17f42abc"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "f608fcf42e08cbc487e79a8a70008d75"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "cf755e45e6582066a840aa745bfc6cf6"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "a3db63c6886ee433efc9d8f17daa3b4b"
  },
  {
    "url": "timeline/index.html",
    "revision": "bc2c55b950e69af2c19a7c0dced19edf"
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
