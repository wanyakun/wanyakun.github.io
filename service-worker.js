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
    "revision": "e5f6c92542c2d99e711edb5c5f7994e0"
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
    "url": "assets/js/11.aed56048.js",
    "revision": "96c53969e10e9f8f1c9977db7d8a9cd7"
  },
  {
    "url": "assets/js/12.1f8ead41.js",
    "revision": "29eb1b46f81e6e1edee385da6c2b8b0e"
  },
  {
    "url": "assets/js/13.51758c7f.js",
    "revision": "6a474026f1d848d2052a45681a7ffa13"
  },
  {
    "url": "assets/js/14.3a9ab971.js",
    "revision": "06276e9715736cc623bc5c26312b212c"
  },
  {
    "url": "assets/js/15.c94a7a68.js",
    "revision": "cc0ad51c3ebeef1493dc87e6dbdb43e4"
  },
  {
    "url": "assets/js/16.a4233105.js",
    "revision": "f87a5248e607033a784bc0bbb0b94135"
  },
  {
    "url": "assets/js/17.6f30b859.js",
    "revision": "acdd9c2676266dc72a8ec403be2325b0"
  },
  {
    "url": "assets/js/18.e578febf.js",
    "revision": "c2dcd42fbcdfdd8a4366402676e80a2b"
  },
  {
    "url": "assets/js/19.3fa33749.js",
    "revision": "03671d03930b16adff6980dc10d02c41"
  },
  {
    "url": "assets/js/20.9630be6c.js",
    "revision": "fbeafe94f3fa5a5ef03df2dc3ec86542"
  },
  {
    "url": "assets/js/21.cd369d54.js",
    "revision": "b2e9a49e6b2d9098fe5bd8fd980907d0"
  },
  {
    "url": "assets/js/22.9abcef04.js",
    "revision": "6aefc3f5d852746d1438494d5f54fb08"
  },
  {
    "url": "assets/js/23.de1edffb.js",
    "revision": "ece9f8fa334f026af08015b871b4a554"
  },
  {
    "url": "assets/js/24.ba146aa3.js",
    "revision": "28e6c9be5c145ac1325b825bc02b1f36"
  },
  {
    "url": "assets/js/25.5b1229ff.js",
    "revision": "07ded5c137d143abaaf59062dd18f6de"
  },
  {
    "url": "assets/js/26.7f248221.js",
    "revision": "cea31791080f4c6e878c8e0afca64ca6"
  },
  {
    "url": "assets/js/27.1dd7ed63.js",
    "revision": "aadafcb6bf6c70482047d969e7ecf6ea"
  },
  {
    "url": "assets/js/28.5b59b539.js",
    "revision": "b57d0104db6b454f0c904f8e1ecbb634"
  },
  {
    "url": "assets/js/29.7edbf5a9.js",
    "revision": "2421d8d97f805f40135720685498118a"
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
    "url": "assets/js/33.3aa8e4d2.js",
    "revision": "2a79a864b9c974056b785c851a65e8d1"
  },
  {
    "url": "assets/js/34.e7b7d7f5.js",
    "revision": "585cde2a830abeec13acb2221d7d1683"
  },
  {
    "url": "assets/js/35.385365cc.js",
    "revision": "853106cef093c66fa044c2d33308cd11"
  },
  {
    "url": "assets/js/36.2bc887ad.js",
    "revision": "372f97b2b8da8d77c8dae27cbc78d438"
  },
  {
    "url": "assets/js/37.9ef268d6.js",
    "revision": "1b0bd4c47221db2055d1ea85505bb23b"
  },
  {
    "url": "assets/js/38.b4b6d239.js",
    "revision": "5847d0b08106182dd4bc78e9bf16cffc"
  },
  {
    "url": "assets/js/39.59d9531a.js",
    "revision": "3b1ebd8003489d504dfb5e75179f1af4"
  },
  {
    "url": "assets/js/4.10069921.js",
    "revision": "1d3e1d00c3c99c8885b1f14c4407af77"
  },
  {
    "url": "assets/js/40.2464b994.js",
    "revision": "979d9edd5ebe3e089b6f6db257d7987c"
  },
  {
    "url": "assets/js/41.36eea191.js",
    "revision": "2cf4fed0b91241ddbad8528d50b80b87"
  },
  {
    "url": "assets/js/42.a305dbfe.js",
    "revision": "5d9d9a4d5493f221bd2b9113c8d382d1"
  },
  {
    "url": "assets/js/43.91d4c79a.js",
    "revision": "1ad9462262429f2b58cc1772646ae423"
  },
  {
    "url": "assets/js/44.3cd693ca.js",
    "revision": "24503db023812bee4ac6ae19ef5363f4"
  },
  {
    "url": "assets/js/45.aa27106b.js",
    "revision": "a55409e092e8a32c883e284940632faa"
  },
  {
    "url": "assets/js/46.db5b6099.js",
    "revision": "87fadc8ca88bec47c5b4b678f522247c"
  },
  {
    "url": "assets/js/47.ef96827f.js",
    "revision": "5ceb843b843d95dff84cdbd4d1e70b48"
  },
  {
    "url": "assets/js/48.e347414e.js",
    "revision": "a8af7760fca2a8696361ac68ba10d05e"
  },
  {
    "url": "assets/js/49.5961cb14.js",
    "revision": "113a57ea1edd05af76a534d26250ec51"
  },
  {
    "url": "assets/js/5.80f527e9.js",
    "revision": "69011c89bdcace402a214a6e12bfac9e"
  },
  {
    "url": "assets/js/50.3bd57e38.js",
    "revision": "39f99fc70da77514f2de9250e9c21671"
  },
  {
    "url": "assets/js/51.607ab44c.js",
    "revision": "a6904435f01dd0ff722800f14b1efd8f"
  },
  {
    "url": "assets/js/52.fad4a450.js",
    "revision": "ef1d6f79f0155401dc84ef44b26c7e2e"
  },
  {
    "url": "assets/js/53.bbd20528.js",
    "revision": "27757b3f59c6082c90f970d8cbdf96fe"
  },
  {
    "url": "assets/js/54.00aad14f.js",
    "revision": "ea6b6eab9c4a72339643e43dd534f44c"
  },
  {
    "url": "assets/js/55.c5b87af6.js",
    "revision": "2a077c40b78f738d80a174640ff959c9"
  },
  {
    "url": "assets/js/56.afa94631.js",
    "revision": "3978ac3c0f032a6b4379b24316b52976"
  },
  {
    "url": "assets/js/57.6a4fb97c.js",
    "revision": "38059eda873875d0e6327418f4e78de2"
  },
  {
    "url": "assets/js/58.fad24ab9.js",
    "revision": "743591a78b11259906bbefe0ce1a842e"
  },
  {
    "url": "assets/js/59.4a5d23c1.js",
    "revision": "76a0ef62d64c05384ec56737d754a564"
  },
  {
    "url": "assets/js/6.b43c5f26.js",
    "revision": "24cec3481184a052614e9e8054c808ff"
  },
  {
    "url": "assets/js/60.603142e8.js",
    "revision": "446ebdffbe02154a9543d59f25150fc1"
  },
  {
    "url": "assets/js/61.22516c30.js",
    "revision": "c5a15513005da04c34f49ff344a2350b"
  },
  {
    "url": "assets/js/62.d689cc86.js",
    "revision": "3328725e43a2946de4ecb13fc40490dd"
  },
  {
    "url": "assets/js/63.c7a8e959.js",
    "revision": "6f1fae105657c1a38bb0d31e9c95dd2e"
  },
  {
    "url": "assets/js/64.62a1b898.js",
    "revision": "ac6abdd3276bf2a4c2375fa301962521"
  },
  {
    "url": "assets/js/65.fb57d5f5.js",
    "revision": "72d66885c401f056373abc39679edd11"
  },
  {
    "url": "assets/js/66.a6538b13.js",
    "revision": "c9e513ccd8d0e6d74a1359eb3d8ec759"
  },
  {
    "url": "assets/js/67.3cf75688.js",
    "revision": "df14e61f2312c4874e5b5772547dd261"
  },
  {
    "url": "assets/js/68.24da6a5c.js",
    "revision": "0aef34ddd7b15b70b2d3042305fbb2a0"
  },
  {
    "url": "assets/js/69.7e9a3686.js",
    "revision": "c8f386c1d28d23f4e6ea7b8fd397e96b"
  },
  {
    "url": "assets/js/7.8959939b.js",
    "revision": "bb65761f895bed923a24d1040d3066a8"
  },
  {
    "url": "assets/js/70.6229e903.js",
    "revision": "9ddc76fe9aa0bd9601587e5962bdc4c8"
  },
  {
    "url": "assets/js/71.e9642090.js",
    "revision": "4eea82877895a4c24b022dacceaf5a48"
  },
  {
    "url": "assets/js/72.8c9fa1b9.js",
    "revision": "e4a7dd0c357c7e15f4bff334d6cfd656"
  },
  {
    "url": "assets/js/73.05a11e3e.js",
    "revision": "905b38b45dbe32f47343a56aba3aaa93"
  },
  {
    "url": "assets/js/74.f7969de8.js",
    "revision": "b04fc510752f9036e82609bffbdbf743"
  },
  {
    "url": "assets/js/75.b5865ce1.js",
    "revision": "86ce931fd4fd927e16f245e4a43a5114"
  },
  {
    "url": "assets/js/76.de1fe201.js",
    "revision": "f40971a632d6ca4d765bee5889fd1997"
  },
  {
    "url": "assets/js/77.0b6682b5.js",
    "revision": "864b7a57b8a3fbbc6b2d8e2fb13db3cd"
  },
  {
    "url": "assets/js/78.f53adfac.js",
    "revision": "94e65efd0484e16dda221af1d29f9ba7"
  },
  {
    "url": "assets/js/79.44d73517.js",
    "revision": "a4be8aff9905f40df45470de222a4f7a"
  },
  {
    "url": "assets/js/8.e4cf861b.js",
    "revision": "3ebcff6627fb04837306492e3ad1b1dc"
  },
  {
    "url": "assets/js/80.3d0e5dbd.js",
    "revision": "f3372afc686ff0b7e07b22ad1c6adcd1"
  },
  {
    "url": "assets/js/81.316b7e6e.js",
    "revision": "00af9020369fa3fa4454233e2bcd9684"
  },
  {
    "url": "assets/js/82.0bc814e8.js",
    "revision": "7d92d99d43c5ae2e5134f8db8becd93a"
  },
  {
    "url": "assets/js/83.d5f17a31.js",
    "revision": "2be86500352b4a1516644b06418bd020"
  },
  {
    "url": "assets/js/84.f92963e5.js",
    "revision": "b3ca56cfe9aafe786348d5ce3a8a3518"
  },
  {
    "url": "assets/js/85.348f40a7.js",
    "revision": "0ebcfbd8024ddd0d96536bf89c9d5509"
  },
  {
    "url": "assets/js/86.ef46007b.js",
    "revision": "6767354dc7f30e079f7b5a58d4c98aab"
  },
  {
    "url": "assets/js/87.6854e67c.js",
    "revision": "c68b5d2b9e16ed3e82d1b6a4ec07b1eb"
  },
  {
    "url": "assets/js/88.6edf1e47.js",
    "revision": "e9851caf101d97898d9c302e8e297e7b"
  },
  {
    "url": "assets/js/89.e14f1b58.js",
    "revision": "a9f868ad105f7867bd35d824712e7192"
  },
  {
    "url": "assets/js/9.1417a78f.js",
    "revision": "a02261500b6eac32a2c47c69af71a3cc"
  },
  {
    "url": "assets/js/90.07a9eaac.js",
    "revision": "bd067ddde4b740a7fb47da40ea7ff45e"
  },
  {
    "url": "assets/js/91.d1e44e74.js",
    "revision": "c9845835beca897caf96fef099966a52"
  },
  {
    "url": "assets/js/92.d921fba9.js",
    "revision": "659bfd7307320817e915d1bfa50ff0b4"
  },
  {
    "url": "assets/js/app.0e0b6264.js",
    "revision": "0891ea424fa92e818d69d1eba3069f65"
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
    "revision": "003aa8c2ca64597859ab44b0144da8f3"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "a550758c7e59ce9731c6a152e933251e"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "f312a2e2d2af2a5db117852d2123dec8"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "c9bfe5d08bcd561c9c4dd6c45dbe4853"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "69f230e044246cf028581c99593e5049"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "f01d2a9250b8a28c175f81ad52e040ca"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "167706ac7769c8eac1588bc1440f5d7e"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "ea4870aa74b35a8fecb03f85eadbf1b5"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "ec4a6fe144d540d2c9709e55553f8144"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "dafeb1ed1751ec817886a8b3cf0c5f42"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "9b362b53dbcc80e477aec432d8875135"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ca11ae78dc8cbe1b1e21125135ecf23d"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "7d88f26887f3fd217111ccf2496d60a2"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "8b7bc4f1861b6e58802594e06d9b85cd"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "3976baf38d3ad66df6d5e12714e4a28d"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "7d45fcb3dc5b2b65cf19907bab0d65a8"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "fb19979c2244ca66c2b977ad29d68f42"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "8825322d96b0fbbc7e0c25ccdc8459df"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "3edc9cca66bf9782f2a79297abea9998"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "63d297807fa1e45e8db8fc40f5fbd48a"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "6f8d33707c0a0cecbb81ff0ed5899ebc"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "c0137fbcb86b5d0d690704b22402223e"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "8f69c8a03732196996397d0f1b70e994"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "b53553e160add36529d980082f4005b3"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "bbc163669c158e3d2649a061a6c1282b"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "892219d274a040d4af38a1760473ca1c"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "c856c1f6d75e46379756d9492a3d8f6b"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "915b08564f5c59c7026c780404c35ef4"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "7326fb369b67ca8dc6d0d4becc665e58"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "fa85b75e4f585cd58371fca75925fe5a"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "64eb3467183bef1b8ad26f00e107409c"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "a9c794ee6cbb70d6376f9c1722065e36"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "b879a5037aaf050befad76895326215a"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "97647b624eaf38c79a671f40426eef67"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "fb2e49216b2bef5806e268d02861b84c"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "578370f31e219db0e5344abe5ca40229"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "22daa10e9a93d1f44bbba65323d7cd33"
  },
  {
    "url": "categories/index.html",
    "revision": "05550773a9b4301898e71c083c5eccd2"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "0572edf5a809747745143aab51fa88e9"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "052f474dca2b08f2e1b2be618e65ccff"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "2e7b0505289f1d454dba7a447159b792"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "cd4e548a367abf343a37d38ca9091229"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "13861a5321d9118596454ce13aa8d54b"
  },
  {
    "url": "front/index.html",
    "revision": "f55f1caec672b0d454d10c6281825da7"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "0c39672f935abac66501d4c1dba4b984"
  },
  {
    "url": "front/network/https.html",
    "revision": "d59ab9ba12aadec257df8e1f4091f828"
  },
  {
    "url": "front/network/osi.html",
    "revision": "43b89718220cc5d6066b24fd22e0f151"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "33af176cfb7c49179a3f36662556b13d"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "be0ad9811779bf5857cc983d56999956"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "8c254e23febaea386c8741d60582f293"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "d8fe8117ba11da75bb375792eaffffb1"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "3b279ca3eea252737de0f508c499ec8b"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "33d4de74848faf9b93a655c6f24992ed"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "125752acf44fb572f45a5d5904ad83aa"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "33efe076647e65d838358bcd9f23c224"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "9782e859b9378c3ac3f369646003d8b5"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "9d7f218ebc579e413bc1d8feeff2f791"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "eb3b8362796b7188f51b78f800e8fbc0"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "d3276bd86b89098d7488ac525f7ee25e"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "abef7872067e0c15726d14dc3fbb4239"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "d05c6baffd5a1fc82458e0e7d2e56e31"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "1224e0c12e2344af09d6b0b8650871ec"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "5fbc7881344c50ce401beefa8c3bde86"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "a065436e0f8fd31c41f0d58d8bdd5952"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "fa8b8a15377867f211c78443dc7c0b4c"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "ca224aad4ebe4644619220b1bf878cef"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "0eceb0a59822d011182e02ce6f7db614"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "d36441bfd1d4f0f6bcbe904b37e0f22e"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "aff3b2467ea58749a4551f8de977c9a5"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "75e3a28e6afa101a71976df417612dab"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "86493a72d7e876b8a91a455545ddf6d2"
  },
  {
    "url": "ios/index.html",
    "revision": "80036932ae16ea05b2e458b478b74b03"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "0c9c78ff6f00284d115ee320a6a9f55e"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "07cf278afefae827483d3226cd9c0c6b"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "66f33cf8c25a330ab0ccc2a680b6b323"
  },
  {
    "url": "notes/index.html",
    "revision": "4b8ed60d80e470ca2bc1c0aad7be8bfc"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "d38fa023689c29c17262f674d07b7ea7"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "78eb80f1fd32b49d1495c5c88fad4ee9"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "53150356c10c76c7e1d3b93045b4e3cf"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "9f0d73cbeb74e7fd0e6f4b5d422b1c66"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "3196568dbf8e432a1176b20e1dfe3ef6"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "4b58645417d3d188e3dad8ea72da332f"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "de026531db4b353efbaf5d98701e9f32"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "448dbe8b504929c9008f11000bf88de8"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "0523645295e5b8f52d048597102c764d"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "796449fd77fac06f4d256dfa55a121f9"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "d0c1049aadd14c976c9a87a605236c22"
  },
  {
    "url": "tag/index.html",
    "revision": "9a0344c522b1fd5de29d888a49abbb44"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "0863c44aad30c62ca6eb211f2806cdc2"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "ad40c3096acae6eb7a2777d5b7e48f6a"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "99790d8d4c899f33e2fcf2d4ddf7a216"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "722a49d44d63b0afd7919afc28e49312"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "ba5e8f27ff72f7fdcad3f5c8f9c61a53"
  },
  {
    "url": "timeline/index.html",
    "revision": "c9a7e1bf4351688f6eb9e57b7e5b8466"
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
