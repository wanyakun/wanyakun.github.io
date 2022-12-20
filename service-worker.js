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
    "revision": "1c717b48c5104d79744426361c226078"
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
    "url": "assets/js/22.8ea8b544.js",
    "revision": "8560722cb0fa3a29e66cdcf5ba0e7d89"
  },
  {
    "url": "assets/js/23.dd0a70e6.js",
    "revision": "95cf26b1ca71231999c4c5fcb1047468"
  },
  {
    "url": "assets/js/24.90cecae6.js",
    "revision": "2ee4d1468f24d8576aa2d75f4bf23be9"
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
    "url": "assets/js/53.1ad0436e.js",
    "revision": "f018c96f6bfcbfa453fa4cbab1b682fd"
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
    "url": "assets/js/app.582e79a0.js",
    "revision": "4dc1d408c58452ac1383cbd7b20d1aaf"
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
    "revision": "457f38d34dddec82c03db31f0c030183"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "897517d60312be8ec6b6543cc217600d"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "515668d43bf4cd7bbe342c862e6d8c27"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "34c6202918978b3a51dd769bfd46b525"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "57a79242dcf2ab50792d8f2f2d8ef060"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "d0ac0aab433d96ce98feb472091255a7"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "af34b7d6183d9927e7a432155afe23a6"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "281225c263bc9e1d5842407a02d9ccad"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "4828c68259af1682a6368862cf8e6f9d"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "d5669a56e53a21050b24b295e9fda671"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "64533181a6b831cfedd06ae46d7abb42"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "3c110426f5254d9915ef3d7f26ef1128"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "380c3ef8067977e4840a1be8d4e06e72"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "3d118b353ca38f7217a62ae94f382d8b"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "57c15d80516e0d385567604755ede927"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "25e6fce23d948cf1c3e31c8a5da3ce3f"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "0267f4ce13c0d1725e65a305c0cec036"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "a6d21622949db293771828dc15e65ae4"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "b949f8440c542cbb2349b576c00f5163"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "3c76ebdd31c392b8196cf1d77ec0dc0b"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "62fadb18c77c8068b65a50d1038afc10"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "8c4b96510277fbf81343cb6638ae0cba"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "219f91e4b335a29eded965a7bc87442a"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "45f2331496e6fbb41968308cd598c688"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "9eb37ae042c22b5fcdd2299aa5ae5630"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "166d0da63b7167a71784076037a65d2f"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "0415b2a76c855319308b33f379558e5b"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "c3b38a8454352bc5064bd5333a442d1c"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "2b4296d1a69ce09ce9c5f47878c42c2f"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "3f175feb373658e4aed82916a56e7fd5"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "34e8ab39d9705c9d07c0fabf4d0ad67e"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "62265eaef785703bfa54a244645730b6"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "74828e09dee788983322716ffcb6fe38"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "adbea150e1d65ca51df0fe80c5c97589"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "cef316163e9195c297d76408afd84acb"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "fb6db7150a691e3e0187a6fb787932b7"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "de6b99fac42de5be7b921072d4c566b9"
  },
  {
    "url": "categories/index.html",
    "revision": "55a2abed2ea9c7dba023c83b7c10b44c"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "8bbb34af46ce229e2850fd005aafbbe1"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "ab051aa3f76f1ddde542ed256096c7e3"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "71e12df53a29d61ef4751312a5912fe7"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "3e14b00017f1f9ddef235111db0ef83f"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "a38f7bf3142744f9be29874357ab903c"
  },
  {
    "url": "front/index.html",
    "revision": "7d3a7d506cc75522deebff86d9484f01"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "92cfb903b8417365a69ae75f47417de0"
  },
  {
    "url": "front/network/https.html",
    "revision": "6e28f867a5b6a0202d525f2f9c775316"
  },
  {
    "url": "front/network/osi.html",
    "revision": "0c87526f5f67aea0be2b38c49e53ec11"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "10a96cb93d44f421ca3e5036e4d4d239"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "a9c0d6f54d5b36abf6d680aec03c5204"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "9d698979005a0d3dbd19604d4935384a"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "9daa12f290fa8ed172a8b8583cbf856b"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "da663dd489d41c2ae117b46dc74e159c"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "355c8d786c053aecb0723bfd9da92b30"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "b395df33802638633243175b933c1c44"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "60dc56a9e225538d78b15c2f323c6af2"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "b2dd5b3840de5be89fc3ea6f597d52d6"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "1ebfd492a7a7c9fd3186c758dae9e7e1"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "68c6ceb9a933cfe98c8616031e8e2fe9"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "e729b3ebfcc5609472e9478e25f3b40a"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "039d798cf708110b02f74d5aebee2c90"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "973461216e0cf26a009372bd92c19400"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "de9ce4df11ac3b292f29835feb1c1025"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "c5f71cbc956349235cbe5587328220a5"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "ecea48ed4aaea7b575b633c76a49aff0"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "a7c02582c6df3e7f4a665418fa0c3d88"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "5dbb093e01f27ead54f5af7628aaa0bb"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "c2795a9d428894586ae9a3a1748efe44"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "1d218461040d2f5eca6400e72c9aece4"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "9a7f637e2bbe3a2cb4e55e152443a5e2"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "a3277880cd38f88890de5a79351cad31"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "d00f1a8abb853b17e32e9115140b9dda"
  },
  {
    "url": "ios/index.html",
    "revision": "4b5e207e54b37ccb82899d2c3e229a48"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "b372af6843230e7e4e83dd6779483210"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "11c474c7a1e9d8b437a07d813aea8170"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "e483b77bc2924f68ce197b7bbb9a323e"
  },
  {
    "url": "notes/index.html",
    "revision": "19cbdb2e303f5cfbecc3e16fbe529133"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "79fa9522693be57e55af518cfbded79f"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "580096c28fe231638166d16b2af5afb5"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "7eb5475a35d639262855b36b8e7eb05c"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "0647cdeebc0517b613248d6c60a39c08"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "ae6178f8e879aa979fbd5cf7a9d3d119"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "9a58abcd059cf7d6b91b349c105c9635"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "66138c21094b4417614ff429920c51e4"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "10a7edaff5a8c37990db7adf086ab34f"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "0b4a184e84c977c6912c75d8206e1cd8"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "9ef1dc49de940c68f42187910c3fc3bd"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "c5740eadca33a3cb8d0372b1505fe9d6"
  },
  {
    "url": "tag/index.html",
    "revision": "a4e1ab81067495ea0903387100fae99e"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "fe5b5d8f1b4ffa9201c791056944e242"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "c8740ba5389836792739b8895a1b1dbf"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "e7fc8374e51c79d371104037e58c771c"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "40f1fa6d8768c66268360811cbf2ec00"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "b154c2c707128fef52c625d91ca8f2ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6048b1e9d4db0077898b1bd7272807c"
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
