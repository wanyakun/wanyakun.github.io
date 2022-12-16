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
    "revision": "d50d8c6844a80f01ee756bbed1f199e1"
  },
  {
    "url": "assets/css/0.styles.c5a5a911.css",
    "revision": "079435b1597c7f896df997b8dbb1f18d"
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
    "url": "assets/js/1.8ccafe63.js",
    "revision": "327465fd8726a8c98c534d9904f7547d"
  },
  {
    "url": "assets/js/10.741ede35.js",
    "revision": "0dad501e9bda85bdb007cf53580cf041"
  },
  {
    "url": "assets/js/11.a85702b3.js",
    "revision": "3d6922c7dedf3c2af6c54fe2af80e345"
  },
  {
    "url": "assets/js/12.347906ad.js",
    "revision": "e8f36c5c54eaadd393be709fa8cb6bd9"
  },
  {
    "url": "assets/js/13.7369d608.js",
    "revision": "b01af34938e2e1bff14f52d432b94b8c"
  },
  {
    "url": "assets/js/14.739ea284.js",
    "revision": "13c546017dcd1c80751aae1243a250b5"
  },
  {
    "url": "assets/js/15.c1c2d0db.js",
    "revision": "9bffdc90e50a63c9dbb42ca4fc0bcd6f"
  },
  {
    "url": "assets/js/16.7b40f1da.js",
    "revision": "131809de8f58a6f04069164e29b23fe1"
  },
  {
    "url": "assets/js/17.55fe65d3.js",
    "revision": "cc1aa733631cc28c8d995fec94936cd5"
  },
  {
    "url": "assets/js/18.2f588a79.js",
    "revision": "dbc8da6bbae3c13819123b4aaf8fc984"
  },
  {
    "url": "assets/js/19.0e622fd3.js",
    "revision": "84966702465b83d53652d6023a639f03"
  },
  {
    "url": "assets/js/20.7c1ae395.js",
    "revision": "bc3bb07a7fd1b25c1d614a7c32cbbdaa"
  },
  {
    "url": "assets/js/21.d7239386.js",
    "revision": "90f1bc9c5154b3504634a61e455103ae"
  },
  {
    "url": "assets/js/22.3a807ed3.js",
    "revision": "453c023121ff74a95db3046bf00cd769"
  },
  {
    "url": "assets/js/23.04a75389.js",
    "revision": "1ce1c3e7e7e15bb7778488fc6d9d4ce4"
  },
  {
    "url": "assets/js/24.eedb947a.js",
    "revision": "64db8ed4e7ad6c2bc8a962046faeac69"
  },
  {
    "url": "assets/js/25.04701ded.js",
    "revision": "a6cc54f564178ecb57374973a4a0280c"
  },
  {
    "url": "assets/js/26.e2db7cf2.js",
    "revision": "dc8857532d189059825dc8c3f97c326f"
  },
  {
    "url": "assets/js/27.e8644467.js",
    "revision": "6672912949c7605c72ea0ab73f4874ed"
  },
  {
    "url": "assets/js/28.0facce7b.js",
    "revision": "4e634db908e4de39f4fe6a3fdc8f4860"
  },
  {
    "url": "assets/js/29.91e07671.js",
    "revision": "19975ff063154ab67fd196db0ab12ed7"
  },
  {
    "url": "assets/js/30.04d99795.js",
    "revision": "38de9d078934a5e8a993ac763685dccb"
  },
  {
    "url": "assets/js/31.299d67ce.js",
    "revision": "ee066b09e2a7b0e797e60cfbca9bd326"
  },
  {
    "url": "assets/js/32.509b9cb9.js",
    "revision": "4de8295ee840cbb9a5483aa9ec91eac3"
  },
  {
    "url": "assets/js/33.59764abc.js",
    "revision": "4aada7412e91dbcd81a4a54a9c85d97e"
  },
  {
    "url": "assets/js/34.60758a2b.js",
    "revision": "467667fa624eecfe536bad984f9c7b55"
  },
  {
    "url": "assets/js/35.ff2a1cbc.js",
    "revision": "b020b6016b523462e969d3e9555af4fb"
  },
  {
    "url": "assets/js/36.4bfe97f5.js",
    "revision": "939a9cd0e36c971cb93a918c9ff4f04a"
  },
  {
    "url": "assets/js/37.8948a581.js",
    "revision": "23fd2f195b1afc10ecf248e415f3126c"
  },
  {
    "url": "assets/js/38.f2dfb46d.js",
    "revision": "ec6a106ebcaa0d1658cfe5af25fddd53"
  },
  {
    "url": "assets/js/39.96fd5430.js",
    "revision": "347ed9b01f253d34359c7049ba709ce6"
  },
  {
    "url": "assets/js/4.e1fab7d0.js",
    "revision": "808ed3ef0e7098097d71600dd3d8dccf"
  },
  {
    "url": "assets/js/40.9f47038e.js",
    "revision": "617a5e3f938e7826a285057e9fa16e98"
  },
  {
    "url": "assets/js/41.48b85a35.js",
    "revision": "14c1076909c06ed66f8ec0ead183e463"
  },
  {
    "url": "assets/js/42.118e365d.js",
    "revision": "e549cd7d0e861cfa073b6ef3dc22ec9a"
  },
  {
    "url": "assets/js/43.32bd54ac.js",
    "revision": "31a71fedb8bbaf73b8614a6274837243"
  },
  {
    "url": "assets/js/44.150d1a4c.js",
    "revision": "bd3fb713270a69cc71b1dbd7ba6641a0"
  },
  {
    "url": "assets/js/45.43ea3416.js",
    "revision": "f74d2103200bfad59214309557002fcd"
  },
  {
    "url": "assets/js/46.45094780.js",
    "revision": "b58afa2688af03b0d30de2b09e7d4d23"
  },
  {
    "url": "assets/js/47.10a1c3c1.js",
    "revision": "fe40a121f3aed957d6820a6ccce0e51d"
  },
  {
    "url": "assets/js/48.598f0e73.js",
    "revision": "a7fa2edcb4a146f91ac86f72670eecce"
  },
  {
    "url": "assets/js/49.6c4eb5c8.js",
    "revision": "fe63dbd2f70998c7d00d02a12d111311"
  },
  {
    "url": "assets/js/5.07d4d959.js",
    "revision": "ce8a3c81078cd075db019f5fdd1addc3"
  },
  {
    "url": "assets/js/50.774dc90f.js",
    "revision": "47357c612a8e8d07d929fb17f1a139dd"
  },
  {
    "url": "assets/js/51.78f49ba3.js",
    "revision": "deb99d11ffe7e6b2bb3d4a5199eef3d9"
  },
  {
    "url": "assets/js/52.0304cbcf.js",
    "revision": "07dc98eca6d57538b9e53e9db722fb75"
  },
  {
    "url": "assets/js/53.4f878984.js",
    "revision": "4ec344da5fb57c9fbe832235ed9c4c49"
  },
  {
    "url": "assets/js/54.75fca48f.js",
    "revision": "b21e41d75879789adc347ed540bb62f9"
  },
  {
    "url": "assets/js/55.bac3ed6b.js",
    "revision": "5d0fab6b938008df756ec8ec03657078"
  },
  {
    "url": "assets/js/56.5a65a91f.js",
    "revision": "a66945466c53af39766356163d2e7314"
  },
  {
    "url": "assets/js/57.2934d5b0.js",
    "revision": "e0469a7487d5845a96a2e2b672c76421"
  },
  {
    "url": "assets/js/58.d7173e2e.js",
    "revision": "d5850a28e9337bf78f8674db88e93eac"
  },
  {
    "url": "assets/js/59.8ebc61ed.js",
    "revision": "a3a0d2b3d89045fea19a193323bcdb30"
  },
  {
    "url": "assets/js/6.7b9d618b.js",
    "revision": "a8e29e54baaec1bbc9ae1acf5e2ffd93"
  },
  {
    "url": "assets/js/60.f192e0ee.js",
    "revision": "c01809b45c20cd9428c3252924ae46a4"
  },
  {
    "url": "assets/js/61.8e94e56e.js",
    "revision": "764032eb080978c565ef35e07276457b"
  },
  {
    "url": "assets/js/62.0f6f0238.js",
    "revision": "5ca08c70dbac2f4b1e0e1066265c7a84"
  },
  {
    "url": "assets/js/63.edaa23cc.js",
    "revision": "07518d89d1a9dab543108e51d5799b85"
  },
  {
    "url": "assets/js/64.c61b05a9.js",
    "revision": "8aa3994a68c5b4b4a93dfc8ee470a558"
  },
  {
    "url": "assets/js/65.9b0a4be0.js",
    "revision": "8dace0e4fdcea47e40899efa34763b8e"
  },
  {
    "url": "assets/js/66.9ca1436e.js",
    "revision": "6f05e4225b8a9798d5f514d6306e6957"
  },
  {
    "url": "assets/js/67.c7677f9b.js",
    "revision": "a05bd987b8e2a469759f3c80ec6bbaf0"
  },
  {
    "url": "assets/js/68.baed439a.js",
    "revision": "122cbc26f40c90221c45dba1635deeaa"
  },
  {
    "url": "assets/js/69.e0ff6fe9.js",
    "revision": "7b15b020c3f56d00d5d1e84d8fae1c16"
  },
  {
    "url": "assets/js/7.8e53943c.js",
    "revision": "44ae10287149f3fa42797e85c08cd020"
  },
  {
    "url": "assets/js/70.95cc753c.js",
    "revision": "03215e3659b791f836df75ce0da05201"
  },
  {
    "url": "assets/js/71.568bf71e.js",
    "revision": "34219d65759ed94a0959848f8204cde7"
  },
  {
    "url": "assets/js/72.efa3a527.js",
    "revision": "c68f63701c87098ea13ea4769310efc5"
  },
  {
    "url": "assets/js/73.9b53f433.js",
    "revision": "3daaa33230d79fd6bb13822ac98f55ea"
  },
  {
    "url": "assets/js/74.4b92062f.js",
    "revision": "4f4950e9bf38e8c7b42e684214db956a"
  },
  {
    "url": "assets/js/75.9fb4cb01.js",
    "revision": "0d5bac66861bc7af34c6f4c3665be239"
  },
  {
    "url": "assets/js/76.99993b29.js",
    "revision": "46fd2427274b84e7305384bf972fc85b"
  },
  {
    "url": "assets/js/77.75ca28c9.js",
    "revision": "ae6f267838e98376ed0ede73b0834517"
  },
  {
    "url": "assets/js/78.61a83aee.js",
    "revision": "5bec792f64a81d8e2a4391c572f846e6"
  },
  {
    "url": "assets/js/79.4c0fb3aa.js",
    "revision": "8d41effd9d46ff4ac104df76f57c01f7"
  },
  {
    "url": "assets/js/8.6d44c641.js",
    "revision": "e4b068d12a8f73d79dd2d54d495707cb"
  },
  {
    "url": "assets/js/80.203a3856.js",
    "revision": "4347751ce7d0cb005b7974090225fead"
  },
  {
    "url": "assets/js/81.0a5b03ab.js",
    "revision": "7ff12f70486dc2b83fafa99346b1d09e"
  },
  {
    "url": "assets/js/82.568c7213.js",
    "revision": "7f2a0894c2b1ae85612041f62f68d275"
  },
  {
    "url": "assets/js/83.8404a7fd.js",
    "revision": "bf8c537a631e1b93fb1e197ab0779224"
  },
  {
    "url": "assets/js/84.8c6fcc55.js",
    "revision": "1f78c9d5da8d1445e1dfc34e488a4b34"
  },
  {
    "url": "assets/js/85.c1461dea.js",
    "revision": "d2358863dbabcdbefe0ed26ea9b1afcd"
  },
  {
    "url": "assets/js/9.a821f59e.js",
    "revision": "582868647c9335097eb13c005d162115"
  },
  {
    "url": "assets/js/app.11384395.js",
    "revision": "ed7bdabc1341a8f326f95430729034c9"
  },
  {
    "url": "assets/js/vendors~flowchart.44dc48c7.js",
    "revision": "5547a9d1bd6916f43d475a59bb92b332"
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
    "revision": "7d7af615b50ca23e799b655efa378773"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "25222376ed8d4312a8d9872576cd9eed"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "e92680741f25d5092215db9867541592"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "bc3ebb480711e39bcc6bbe69853df200"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "c795eb1dca23fc72e117a61859c0d78a"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "3f912e541b013312d67ffd04bc5c8a19"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "c054adc7afa73fb2114ae05fbc495741"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "4d69c7f298e0f06d892c89f3c1b11579"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "15740bbc5380f7937b0e9b302384450a"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "9ff3719678c590959e16a7e61c5c4b7b"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "fd37363bfaaf0bec54db7cedc23cb296"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "f8231464c704efeecc4e55f2207da36d"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "366dc1006c124bc3af533e252921ce5f"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "0a08340c66520f97a180fb0d705406d2"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "ad29a0ee5275533894c8490d42194924"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "1fa25a073d073a00b5a357687c1367ca"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "a106c5072cd8de9c27c6f0c369c4202e"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "dca1d74c4b235bcca4e897f17bd13e70"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "b32a115ec46cc2559f9c0f07071f1ede"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "51988f86e939de43aced375031a2a901"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2b16cb69c95dc554e7a24e4b74691196"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "e230bd297682ee8f722caa67f3c8d6e9"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "f25e90800031c91b3e863d51a1bff284"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "d1fe301f46af3d2dd08c47408250a21b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "538af4f2469d560f1bb8dc7041a4e3c0"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "8b0540908664cf4708d118f825de7a02"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "e81e3ec55346903e6be16f9c2132b705"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "edf6f37cd1e70da3210ab3e7776bd342"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "3aef3d53103fa79863511f405815ffae"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "80d19662001f2179ec36acd2477e5e0b"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "f36801a02a2bc9256fc3284b3d3569da"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "2ba83a4a91f011a9509d5026f187108e"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "b040ba3f24b7de6b489b8f222fe79113"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "ce0d7fa2ed80cca62de80de7220d2c86"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "531bcbb62417d0d30b86ec4f0933bdd9"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "331cf961f9a50e102d539f4619c6fbe3"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "cbb0923caef2b75dcd039ba6858ab826"
  },
  {
    "url": "categories/index.html",
    "revision": "bffb821d44a86db30a76e10703ce3f07"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "e8b8012866bc179e52fd177a53c91a45"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "0c3419e34bfa1cdc785925c056332e3a"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e9dbfa9dfc5a80cf7f354347793f8aac"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "a3bc1d3be10dd0ac6931e4ed905b4710"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "226108079e18b2189a72eaa65d6536d9"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "cf0be3dc549aecd5d3ab8e5586034339"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "db49a6beabacc5253ebee410cac389de"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "05f78ef5c75032a37685b7994686daa2"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "b97c059b2c1d5b0e417b3ea7c41dba0c"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "ec077276fe021e4f54ee33561703b681"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "13153d0e311657c7dad5ad1274721239"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "82d0ba8a9ecd35e6b4bf6ed69bc07898"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "42d04be0afb2b736427f9cdbb5e7b4e8"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "0872277caae5f18c5e0a59312acafdaa"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "cc017200739ecf0276d87344f51873da"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "74f7d217cb3c92c0892792ff4130398a"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "7fe9094cb6df11d73a7023f5db4adc75"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "2c693b095a326794f56002a8c9c81384"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "6d85b1aef40700d42fcfe05e7f530099"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "c03b672016a7ca15ce4f18dac0ce574f"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "8826bf00624d87651ad7080ae0575bfa"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "c4a4cf125f02b0d65f62fa20c13c09ca"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "b2db4320eed4a47c13ee3e0fdeb0bbf7"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "64d6f5dcb4e83a4a999e9c0dd7fd6ec9"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "2f64415981866a4e538969f785d416ae"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "810011665617f9239aa7e418e2309554"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "d6a0fe3a5f55a8d1f14bc36bf24fc9b3"
  },
  {
    "url": "ios/index.html",
    "revision": "3d244db82913d3b12fdaa6a93aa6664c"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "67e8494f72136cdc3ffe3d01f8a8477f"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "8a56b9d35e63874d2c29bcd944c31f29"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "0390321a289b2a8509cc15ccdf7b1620"
  },
  {
    "url": "notes/index.html",
    "revision": "888f1d80f5d6f81b43724b0551b851b8"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "f1fbcce8815659238211122a99cb8305"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "16a88e66d0a38fe9814fbe1dac9e452f"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "848fba49266d27daa7ccdc2b4076c05b"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "f352d24b9faa68c56919198ff6a5e459"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "fdb2ad37217da0d7cc2ddd28a597e2fc"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "22d09660d21c97dce2dabcae86c267d2"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "19cb5cf808d6d28715004e34ba2cc4d3"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "bf13423eb67835c32ba7ba4e79fa439c"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "ded54a8f787e6c3586e985a41ff3dee6"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "b6c074693a459695f3cccff95168aad1"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "fed92f454a8c63d0bab72f989d0fdcfb"
  },
  {
    "url": "tag/index.html",
    "revision": "0fde290d408a5ab2be89148f2da2278e"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2cfbdd8c15106c1615c945fe11f96d22"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "0c8488bd6e50b546f7100d3575de0774"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "971c22de3904ac8d66283b402f731fb4"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "9e2ada3daadc9b93feba491c8052b199"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "ea4381469330e29b3a061a355dee424f"
  },
  {
    "url": "timeline/index.html",
    "revision": "060d150777a9a162950ff758486ef50d"
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
