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
    "revision": "05f70df3007c7d2a48eca6fbe16e130b"
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
    "url": "assets/js/1.c288e991.js",
    "revision": "e5c9b7a1c1c44a85f534309da9e92062"
  },
  {
    "url": "assets/js/10.3ed9434f.js",
    "revision": "7abf50d16e9d11e677a0477d8e9de2ec"
  },
  {
    "url": "assets/js/100.fa901c4d.js",
    "revision": "200ba19cbc9d3adecde57c5b133091d4"
  },
  {
    "url": "assets/js/101.cdd053cd.js",
    "revision": "a4634422bc1eba65daf6143839f59102"
  },
  {
    "url": "assets/js/102.0251f401.js",
    "revision": "088398f77d82ef496e6e07e2a449c89c"
  },
  {
    "url": "assets/js/11.a6693458.js",
    "revision": "72f113f4bf9505fef0f18601ef50a7e1"
  },
  {
    "url": "assets/js/12.2e880116.js",
    "revision": "f10382c80dd74676bc6e97a033543502"
  },
  {
    "url": "assets/js/13.80335f39.js",
    "revision": "a2570486afcce770b56ba52e4162a20a"
  },
  {
    "url": "assets/js/14.ffd894ca.js",
    "revision": "95967c8103e7e4891f1c9a9270590ebd"
  },
  {
    "url": "assets/js/15.89531ed0.js",
    "revision": "5bb937c39d7cbaf28804491621c18deb"
  },
  {
    "url": "assets/js/16.e7942625.js",
    "revision": "1cb4820abb991ef18b1d44d20f7e555e"
  },
  {
    "url": "assets/js/17.6f30b859.js",
    "revision": "acdd9c2676266dc72a8ec403be2325b0"
  },
  {
    "url": "assets/js/18.eb9c8310.js",
    "revision": "f42552355e4117f6bd3419906493d3a3"
  },
  {
    "url": "assets/js/19.e9353a96.js",
    "revision": "61e9dd438eb36a6779d3be12162eaaa7"
  },
  {
    "url": "assets/js/20.20996294.js",
    "revision": "4723bd57f758e46effa8bdf0c3d13179"
  },
  {
    "url": "assets/js/21.a28ca72c.js",
    "revision": "d6a30df32319ae648e4231425c65931a"
  },
  {
    "url": "assets/js/22.6ef7b6a2.js",
    "revision": "202ef5f396ef38eae18ac2ef1b367e3a"
  },
  {
    "url": "assets/js/23.c0313df7.js",
    "revision": "86f21bef4d5a6416a97021615b3a912a"
  },
  {
    "url": "assets/js/24.773abc82.js",
    "revision": "b960d8f99472131e3a2886cd29192577"
  },
  {
    "url": "assets/js/25.b4e9e073.js",
    "revision": "6f3dc2effc723f964456b596102b79a5"
  },
  {
    "url": "assets/js/26.fed5348c.js",
    "revision": "d05279e087f4af13e1ecbc4d5072da8d"
  },
  {
    "url": "assets/js/27.35ccc14b.js",
    "revision": "0b08c2a717c692d0c11cb273420dd0ee"
  },
  {
    "url": "assets/js/28.5b59b539.js",
    "revision": "b57d0104db6b454f0c904f8e1ecbb634"
  },
  {
    "url": "assets/js/29.033a2429.js",
    "revision": "18d09522464c0b3f2fb5fa50b65776e9"
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
    "url": "assets/js/33.9c36cd77.js",
    "revision": "4c3cc355c2a897ddf1dc38823bedec26"
  },
  {
    "url": "assets/js/34.55a29e37.js",
    "revision": "f164593920efce5090eae0c4c48e3ea6"
  },
  {
    "url": "assets/js/35.a00d6970.js",
    "revision": "23e0aa8ec1871b6736e1ca39d48ff078"
  },
  {
    "url": "assets/js/36.f7f96931.js",
    "revision": "79755ad369b0a44992a810d221fc28bc"
  },
  {
    "url": "assets/js/37.1c140229.js",
    "revision": "265e2882fd5d080a46718f4a833ba61c"
  },
  {
    "url": "assets/js/38.e19d1e55.js",
    "revision": "328b218d6d204ac19e19800ba3751a8c"
  },
  {
    "url": "assets/js/39.85ea9a14.js",
    "revision": "dcf278e56d0ed440fced83d4d8bbade8"
  },
  {
    "url": "assets/js/4.10069921.js",
    "revision": "1d3e1d00c3c99c8885b1f14c4407af77"
  },
  {
    "url": "assets/js/40.410f9a63.js",
    "revision": "4bbeb83d4394f89c69cf9134fb16518c"
  },
  {
    "url": "assets/js/41.a2193986.js",
    "revision": "ce867b8dac2e0d9a8ab5963e590c5452"
  },
  {
    "url": "assets/js/42.212bc6a4.js",
    "revision": "8378ce2098a51cc62fd8b41e5cd3ce1e"
  },
  {
    "url": "assets/js/43.9d4ec479.js",
    "revision": "47ff4c6f2a6b003c866d32c34444b083"
  },
  {
    "url": "assets/js/44.bbe4e5de.js",
    "revision": "996200d6c8cc719996d884770f8ae50c"
  },
  {
    "url": "assets/js/45.5e8dca7b.js",
    "revision": "718b86df481f8c3b4d0a94645593f625"
  },
  {
    "url": "assets/js/46.0d726ab7.js",
    "revision": "2e8f1ec5cf49c19454b2c3c37ea213b7"
  },
  {
    "url": "assets/js/47.399e34db.js",
    "revision": "65d2c8f48a4a1dbc23dff847e80b56aa"
  },
  {
    "url": "assets/js/48.a3036e65.js",
    "revision": "df6e2617e67274025ced91f20edd0ff5"
  },
  {
    "url": "assets/js/49.899c50a1.js",
    "revision": "f77fc81f5c0ee78fd289b3b6cc426e83"
  },
  {
    "url": "assets/js/5.da3929a7.js",
    "revision": "0317fc4a2bb45ae0b3b4a2642f07132d"
  },
  {
    "url": "assets/js/50.2a6aef37.js",
    "revision": "3219584c0dad30314e4d57c407ea047b"
  },
  {
    "url": "assets/js/51.77de6b86.js",
    "revision": "d5ad71319ff57afd29a9fcf5e9070b38"
  },
  {
    "url": "assets/js/52.34430815.js",
    "revision": "599490c44d36bb05747c648f3214cd1f"
  },
  {
    "url": "assets/js/53.e298b416.js",
    "revision": "4805b4c253f098defe6098e8673a8b9b"
  },
  {
    "url": "assets/js/54.a0638887.js",
    "revision": "35852fe4efcc8ad23dcba421287ef133"
  },
  {
    "url": "assets/js/55.21517304.js",
    "revision": "3f284c98a8421c6abec41ac13bdce554"
  },
  {
    "url": "assets/js/56.8f2ebec8.js",
    "revision": "e0958cef1c350a426b58eb2e5594d8f2"
  },
  {
    "url": "assets/js/57.cab99a32.js",
    "revision": "1b27f733a652aa25546d384a7b94bea9"
  },
  {
    "url": "assets/js/58.63d246a9.js",
    "revision": "6cc4e1efa3dd6170793e40454c937591"
  },
  {
    "url": "assets/js/59.4277086c.js",
    "revision": "2a8b8c000fefbf7275e9e661d0337d87"
  },
  {
    "url": "assets/js/6.e39f5ca0.js",
    "revision": "154d3d5975cba6297e5741dfcbc748c3"
  },
  {
    "url": "assets/js/60.bc333cb8.js",
    "revision": "150589f044f4237c8a3612363edc3123"
  },
  {
    "url": "assets/js/61.5a424c7f.js",
    "revision": "1cc9bc96d1108023192e1cb8c9974fc7"
  },
  {
    "url": "assets/js/62.7adc686f.js",
    "revision": "cac347ff56a6d86e2a94facbbd2325ea"
  },
  {
    "url": "assets/js/63.c50face7.js",
    "revision": "e79cc08778baa2c02fb8c535c9851d46"
  },
  {
    "url": "assets/js/64.3ab22c7d.js",
    "revision": "03fae6d0c1d7c053be347a6fa6b87cfa"
  },
  {
    "url": "assets/js/65.49a77af0.js",
    "revision": "31a72161410d45acfc33a2ec283bc626"
  },
  {
    "url": "assets/js/66.f74b86c1.js",
    "revision": "4ea3e32c1c95b603d86140b90a09a31a"
  },
  {
    "url": "assets/js/67.a7794b45.js",
    "revision": "a3c0f5789fdf342be0681644d9d0c9bc"
  },
  {
    "url": "assets/js/68.2023979f.js",
    "revision": "66859659bb1ff6102557973545c710be"
  },
  {
    "url": "assets/js/69.8c7721ee.js",
    "revision": "3a7aa7b3499e63ba6178b0883220aedd"
  },
  {
    "url": "assets/js/7.694cc372.js",
    "revision": "d9b5278744075f4a7231500858ab1c44"
  },
  {
    "url": "assets/js/70.c837a105.js",
    "revision": "dcd7a980ab41292f7f8636fa90b3674b"
  },
  {
    "url": "assets/js/71.593a8163.js",
    "revision": "1922a1f20a6407f82adc67c9e1a12406"
  },
  {
    "url": "assets/js/72.c145565e.js",
    "revision": "c69ac62afb951d1dc96f3ea32cce6336"
  },
  {
    "url": "assets/js/73.6c284ed8.js",
    "revision": "9919fed2aa76c7a49b300a735d4d3b09"
  },
  {
    "url": "assets/js/74.713d03f3.js",
    "revision": "1d19176800101941ac1e8d5b352d9de3"
  },
  {
    "url": "assets/js/75.3091dd08.js",
    "revision": "03eace1aef6db8f47b2c22987c8d5c0d"
  },
  {
    "url": "assets/js/76.d5eecf1b.js",
    "revision": "e7bc9d72d7340530d57a84357eb496ff"
  },
  {
    "url": "assets/js/77.68b537f6.js",
    "revision": "a23a1d5964a97b869c636dc3363e199a"
  },
  {
    "url": "assets/js/78.7f26a50c.js",
    "revision": "bf8a2599cc32e709c4194378b142d781"
  },
  {
    "url": "assets/js/79.4cab3279.js",
    "revision": "9154d3a8a2f2a0a779f9334de7a17cea"
  },
  {
    "url": "assets/js/8.762d7cfc.js",
    "revision": "d48cb53362fdd4a360a81d8b327ce8c5"
  },
  {
    "url": "assets/js/80.764c4018.js",
    "revision": "52d45bf2e325f22016d6db12ee900641"
  },
  {
    "url": "assets/js/81.cfdf726f.js",
    "revision": "fe458d7dcf2c487b612d9a6782b018d9"
  },
  {
    "url": "assets/js/82.89fe1b6b.js",
    "revision": "e5d3e0d1ba26ff602c1a9d30bbd4a8ea"
  },
  {
    "url": "assets/js/83.9b7cde73.js",
    "revision": "822301f26fad8a9bca44cc9bde6c9582"
  },
  {
    "url": "assets/js/84.cb9f1c8c.js",
    "revision": "dd73d056e39a266f7293049be0331707"
  },
  {
    "url": "assets/js/85.9f01ab26.js",
    "revision": "667e7d7195c05acebf1efd11eeba7566"
  },
  {
    "url": "assets/js/86.89bcd1da.js",
    "revision": "a86d0814d024eaf0cff73a3043002e91"
  },
  {
    "url": "assets/js/87.cb854294.js",
    "revision": "cf493ced082d10f75736eb6dfbb80878"
  },
  {
    "url": "assets/js/88.c93205c6.js",
    "revision": "0aba89aba8caebe730c8c295d8dfa9dd"
  },
  {
    "url": "assets/js/89.710cd1f3.js",
    "revision": "fe0fcdf264e6e82d895f0be1da093f05"
  },
  {
    "url": "assets/js/9.1417a78f.js",
    "revision": "a02261500b6eac32a2c47c69af71a3cc"
  },
  {
    "url": "assets/js/90.6271fd01.js",
    "revision": "6d5d7aca1061f5df417c49578ce73738"
  },
  {
    "url": "assets/js/91.2ebfb8a1.js",
    "revision": "f0f5c99941ca71f4cfd754d528145171"
  },
  {
    "url": "assets/js/92.b736829a.js",
    "revision": "4d4bf21cc81ec6fe6835144693b26d88"
  },
  {
    "url": "assets/js/93.f3de7541.js",
    "revision": "0cb930ff4dbbfc73661cb78b6b1eb56a"
  },
  {
    "url": "assets/js/94.11400c8d.js",
    "revision": "48f59e27c263e23b5b536d6ea560a184"
  },
  {
    "url": "assets/js/95.c5edf39a.js",
    "revision": "8a17ef085cdadc84d2789dd8ca2d5641"
  },
  {
    "url": "assets/js/96.c92647a6.js",
    "revision": "ac1f6dc95f3bb2dfa3c70c2324fe59d1"
  },
  {
    "url": "assets/js/97.599e7f06.js",
    "revision": "58e2c360ba39c541672a7a401d003e02"
  },
  {
    "url": "assets/js/98.826272d9.js",
    "revision": "525a4b110e9431037112bfb0d25c416e"
  },
  {
    "url": "assets/js/99.67d131b1.js",
    "revision": "2c3ddfd9397a87c007298169943054a9"
  },
  {
    "url": "assets/js/app.86aa6019.js",
    "revision": "bee47cfed8031630f022d7deec0270d7"
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
    "revision": "9bc89fd44cf5b69b6ef6a3342dc9629c"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "393c0e2cf79fcae7fd969bb3178cdfa1"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "5ba38c64679963614a9f0a48a072d203"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "4728e7a2eb343e77d043a5841b35639c"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "7a250ec9980862082046c2e84111400d"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "c8d5a68d0f3302d21f8bdbfd2f8d405d"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "e5fa3841b5f21289f448029d22c31ed2"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "4d723bb3a0003c51c37622db1497dae5"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "cbc3e6811a7d258e2d7330c7ea107e82"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "254b545435844dc54509bdc23cd4f103"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "2ca14c1126f5f443e73c25cf8deda9b5"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "0fed52e1e278ac8096864ef94e1a9d6f"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "3f3858fdaafa00d15f000de1ba79bd47"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "444f2311f6a7760c4f5c6c3789b54ffa"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "d84b54c32bf9d42669438d081fa42901"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "8abbc776467ce7e5e58dcfe121d9d258"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "52047ab1edd55387ea661278b81aae26"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "0c088ddc264033a6ffa4b4bce495f173"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "d313134f23e6747bfbe017ccdcf6c3e4"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "aa86a36601fa97bab0bbc0f5b569dfb6"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "53d269241417cf22d56b31c2dd384559"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "db3ed89b30bc5f0d4fa684686ded3299"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "d93721a84ea863258149c1ca0ff18531"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "178a75ecc060abe8e927226bc3381851"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "44b226fa86c3ce50695700529a648c5f"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "794a3e64e725683504ce47fec3122678"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "247e484f3dcb7c68e67528472498d37b"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "a49e63d1c3f136e0e69040e596458ed7"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "908f67399fb875ecbc6c48c5da9fcfa6"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "01c63e4e95f5a7962db547829f63576e"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "828d267250c7b291ecf2807584bc40df"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "b88a8366ae3e65f57bac810a87a26ef5"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "6e784eb87271ac8d803fe79e426c2148"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "127be0255d4d689a9b8d55821d5fb9da"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "3a3c0049de6605ff4e91d3e52b16209f"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "8d2ebf5a55dfd97bc40b20dbeefacd5f"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "c8a30852a66df85ade560fea99fc2347"
  },
  {
    "url": "categories/index.html",
    "revision": "cb1e1f4e88eb1c036eee1e6be8f777d0"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "2f34cdeb0fa7cc6bd58acdd011a74c6b"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "447af6055d776b4678b23b87a3d54e86"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "799bc4d91126b420b774615b884f99c6"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "92ddf78418db95a6637d9c088d75de43"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "6b3a75a9bf7ecca22fab1fbdb40f8d30"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "05b9d68980b82cd7fa922e88c90a3489"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "c37813ca8296868e83c1153e277d0905"
  },
  {
    "url": "front/index.html",
    "revision": "32d0f9607a1db17f76f4c01fb50a0d08"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "22cb5460299ae2a93e21bc914e67df2f"
  },
  {
    "url": "front/network/dns.html",
    "revision": "677511f747f196f637145e8f56ff29be"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "7cf4ca9b3ec10b177722e7f921a9e381"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "fd8e86d60e6ab0d0beb7fe2809639ce6"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "cec1bef29053f6167e95b0861f3c72bc"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "d49be30fb4e07c6e52f02c90bfcd2eea"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "032d4da89a0f7b2089e3c7de55719aa4"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "424887e5a3fb8d7047aad8abad2c2d25"
  },
  {
    "url": "front/network/https.html",
    "revision": "5888602541c87481700156711e251f01"
  },
  {
    "url": "front/network/osi.html",
    "revision": "6ca4b20f4d5e312792b79ab5d8d148d0"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "3b7b8dc278977e11bba0317ce4fd9972"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "cece52abdd013a9e181f96655d7a53b6"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "6285593dc3a79fd3ea0f9da35077eb2c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "3c9bccbd83be453c97fc4929ac46d953"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "6adf08097e9f0195a542b5347becd9c7"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "73d8dd7010871d2b885635a8ec087d10"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "e1368a51c28a38907120da089e162a00"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "62d49923664604c96773cb5ec228307c"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "8615b203f0d94c386f829ef0052e2ea6"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "ec15dd551f08d9b07cddc49b67781546"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "f33250f605fe2bf33f240c83bd408f49"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "727a9c9bf129786fba604be304bf7888"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "37cc511e55a965448ce2fa2b5b7f2dbf"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "eb32db51fde8cab78d0bbb1caca4bdec"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "29605b9c93b8af5b21a5bfa018543984"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "4f94f4937d9b31523154968b19b56251"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "cb9db7cabbb21a3cf4daa160ea82d3f0"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "0a2185550822bcfde7a4679e45554689"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "053545abf7b5a4a40c38a3afeea005f9"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "8e6bac94148589c74cf29a7e5cd95454"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "4033699e6b17f1f4f52551a24411f6d2"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "1c6989c209a6c20bb2871493d2339ac8"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "ce466f5786cbd0d429bde6e5cc7e69cd"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "efa074d528752b744aa0cadcb634ded4"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "948f1524864f7d633edbd4809e96cd0a"
  },
  {
    "url": "ios/index.html",
    "revision": "fc1c2e44aa3a06b0286edb9ef6778d33"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "761a891c279fa9b7f1b0811f3d2f6496"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "6f6f2f9d999bd452335fd2c1df4379c9"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "867aefd969181de681fdd838a0d118f5"
  },
  {
    "url": "notes/index.html",
    "revision": "0e8cb9619f2eacd6a6dd3719caa4263d"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "546dc76069abf70f54d6d0d041168dda"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "400022305d6a45a23d1c17b7f10d7440"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "1e47a54e19abdd8f2ad1cf4b9dd0ede1"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "f581b567af5f11ed6bcd0ecdfa5b1821"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "0ab5ee287702cf9a9c02cd98e89052cc"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "0fde4dc247da709bca47e969c2ef82a8"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "9c18e70a38c89cc969d07a702cb4610c"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "0f5f08d60dad9469fe92997aaf925468"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "91ba52f80be4b5852debd92e25290d1b"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "412d9af5737b4a86eb4d50b0fe074e26"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "560312528ec8f57f8bd81e2d92f7d106"
  },
  {
    "url": "tag/index.html",
    "revision": "3bbfce4e3555433cf828805cceffc4db"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "92cfb51fa2a878866460261330e6373e"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "db6b81e111b78db14276f2c3189a7b47"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "d1afbb428967c05e3fd1ea5eb3c98dbf"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "0bb8c6a4d9a943b56deea1b8b03736dd"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "56058c51bd4d3998c2fd916f3ae42827"
  },
  {
    "url": "timeline/index.html",
    "revision": "5dee3aa511a4eb4b195a84bf23edf7d2"
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
