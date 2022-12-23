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
    "revision": "627c2d037ae68f6d9a8bf1c3bfdce6e1"
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
    "url": "assets/js/51.cc144e6a.js",
    "revision": "8fc24e3aba459c95630d76cdab83afeb"
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
    "url": "assets/js/app.6ecbb7b5.js",
    "revision": "3c0b4f8663c01e1d0d835a9fbf9cea56"
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
    "revision": "9dca6babb0ebb1285d7cd0891e2c4452"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "b365d20775f7c6aa61815b82e56a4a91"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "81d7b485bb0105a0ce7186b2807b6318"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "4d21ea5c08519c53c1d30d50677dd872"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "bf0d70e0e5341fc0d777d565d22cf3f6"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "ba7a11232d4eeee9bd2f51eab1e9d787"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "4090f33bbf52c7d0610795e9229c9c6b"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "e437ba137d2b8f372f323840016d34c1"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "7287f6c0e77b3ffe399eae6f1fa2c98d"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "45c3d6dcd72df831904ef609bf291974"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "69019bd484024b444cb8457cf9f47c25"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "df841481853417ac94caf61e3340117d"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "94ed989e6107dcf2ea0f130c76dbdc9a"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "1d07bfff3f133ef6dbb53c4be5844d20"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "add64f1f4f4e3941d5494b1ea4fda2ef"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "8b3d52adf808f0f20c47b8ca444919fd"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "c951858991973dab590ea78f859e51cf"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "42b7702422d0323b9783f6ce054e037b"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "db0c0986da66e8d67e65591e5c4b3d0b"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "dc9b911c33cc894919b68e6de1ed337d"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "48cb5c34d8cf76c1ad7d5d1c7780791c"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "9a230c2d7757cd19da4dad386efa8eb7"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "62dd08d1fded1056b559b62d43632d72"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "8ed4bc6e4f6c52b5554259cd0b93d61b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "af6da0e8a5f3fe230dc12e41b17a52c9"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "be39cbe8b4dbded10c7ce98160398756"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "f1967b16598eea9987d0ed137614144f"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "23f3d3d86db37cae1f4589cdc780a8f5"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "ca32b1ba333a9d200e6e75c6c294aef2"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "d0710234f38c747c939c3b84fa032dae"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "5c56c9a6bc6444d763df6781aca17e49"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "47012a058abec346c269c978bdf6dd62"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "d911df4344dba90f3ea3e49875600190"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "9d467090497ca8e7a09d18bfa7933312"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "999a41aeb3e142a8075b8a3e9c2fa1af"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "5826c0a151f8229d080164d97c230242"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "99e60f61799b2c9422b4c5c97761d4e5"
  },
  {
    "url": "categories/index.html",
    "revision": "a79b6801f80367380eddeb78544bb2ca"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "6be40364b99f241a597842ad21872314"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "08317124016636651495dcf2e83d4541"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e273e6a75f3c0286e67c95466afec660"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "2774d648c5d0c773f66bcf519e691455"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "5c86ad17d6105bc10a7d4e48a82cf90d"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "fd65238a6c9f36b006c6190661638fd3"
  },
  {
    "url": "front/explorer/browser.html",
    "revision": "845f6171aee1036ad5956298435c376a"
  },
  {
    "url": "front/index.html",
    "revision": "c66980cfd8bb0f7bfb12221743384d52"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "8f6730875fc12d61f50a36bdb1642848"
  },
  {
    "url": "front/network/dns.html",
    "revision": "d63ae27639b798c4e978e08f555a4abc"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "8b4269eeb1b2fc903b9caac30738c6e5"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "4fdd41fcf9ca9f042df928d44ceee783"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "8eeee2b4f81c4cbea456aabf36d7b267"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "1993ab5ca7647afe87806c52de29e418"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "63666d6b18d2a7f590c97985887f2fc9"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "809ccd41ae48507ad304196816464384"
  },
  {
    "url": "front/network/https.html",
    "revision": "5eef13ad16e946cfbe127860883f85b7"
  },
  {
    "url": "front/network/osi.html",
    "revision": "491acbd293aa503c4458c0598c54d9f9"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "174212144e016916904d2f4e52ca1f74"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "8071c0030af75848116bab44274496fc"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "1412a515ac68dda93c4ecfb49e770d6e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "877e82a150678b49197d37e0a535829d"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "9c20c408d5d953850072825b61e49ee7"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "d13e4804e7324149c67aa96ba3fa02fd"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "52950f71c405cbb4b70d1a4741ae2759"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "97badbaa1754c3cd43c58c35e89f903a"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "eb3042f790cd8f7ff681c9d8cd1467c8"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "e683c1c8fa1087b678fce19b8c1bf40c"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "69ab01050be85078a31ee0e5dae19cad"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "8921dbe39c14ea9d2939641d3bf75738"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "1392967dab915168682d80e4589bd3a9"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "9d341c1b65a08007d0d5389183dfdcf8"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "3affdd7da9e4c7a0886323ebbe689407"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "9bb3c756445cae687739d09885e20608"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "ed40731768db9eb387ec55382791c72a"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "609d52f7656309cc4eb956bc9185f539"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "f8fe538d10a8876095adbf18888b5bb2"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "54f01931081da2c663a1e83f3ab00d70"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "8a72deee538ff9de1ebfe7a7bd342729"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "2e45dac6831a854ce3e34949b294c028"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "37b3edb77fdf2836423c99d5a3c9623a"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "194bbb22f2aaa5269560dcf9f5830b0a"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "d7af27f686def491d6099dbd84e4b7e3"
  },
  {
    "url": "ios/index.html",
    "revision": "b7bddf5790851ed0132a1d1a8911c0fe"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "0bee410b2520c7b819030369fac8f940"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "d0ab6621ba1ea9ec8d60ee11774166c8"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "2b78ad6aab35723155c92e328c76c470"
  },
  {
    "url": "notes/index.html",
    "revision": "9d0a04f7e1a8ddba6f7b65ff275e9d2c"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "1e8511a2bd7a7a4612a66a096601e30a"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "54991162a1aa80864c54f47e9e4a5d31"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "4e94cc45f26afc77a9276fd12363f6a6"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "af62f4853ccd85d9c3983b3b3d1531ee"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "8f7f9363d1391d66831e548ec38aa055"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "25276b9e6ae8fd3b59271776b94fdfb8"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "90044dc79a84c6bb0138292365738f7c"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "471365d0b17c01ee7cb4caeab8a6fde4"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "88cf91d34fd188e34a6f735b497deb5f"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "5a54206f9379a31ee0e2545a9d2e2dd0"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "bbd1f8019f0693b99e2ab90fe3ca520c"
  },
  {
    "url": "tag/index.html",
    "revision": "34c864b36006ace777db1c7b2be313d7"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "e920ed160c72db534235293d7a26a797"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "9a75d4239e4474a835247250a936ce5c"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "709ca3514372d50223d722a72ea9e4d2"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "dd7833d7740bb3be99ba607a0ce106ab"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "d6d0c0a6af20dd28f95ac43eb9d56135"
  },
  {
    "url": "timeline/index.html",
    "revision": "398ca95d2e2a82fe8b29711076a452a3"
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
