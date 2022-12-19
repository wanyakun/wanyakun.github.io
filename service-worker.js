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
    "revision": "691c211e112a5287e2f5a9a8e57de910"
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
    "url": "assets/js/18.f9d49c88.js",
    "revision": "d3979734604eab621836e692b9d22d2e"
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
    "url": "assets/js/26.2281ed39.js",
    "revision": "4c3d7dc9bfa10ba762c7215c5befdc7a"
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
    "url": "assets/js/36.1365ebd6.js",
    "revision": "4007a2e5de4f03860eebbc2395d712e5"
  },
  {
    "url": "assets/js/37.8948a581.js",
    "revision": "23fd2f195b1afc10ecf248e415f3126c"
  },
  {
    "url": "assets/js/38.4e046b8c.js",
    "revision": "50e12057f45e311fc4fce17dc88f2d14"
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
    "url": "assets/js/42.5c996885.js",
    "revision": "3715a71c68dd1ba92a5c6a72d1220ef7"
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
    "url": "assets/js/47.8723f6c3.js",
    "revision": "6846c322456369d363b83815550f13a9"
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
    "url": "assets/js/50.28b5a245.js",
    "revision": "b80d9bf539368723aee94fb58a54fe9b"
  },
  {
    "url": "assets/js/51.1bbf6dd5.js",
    "revision": "2c97462eb376793cedc81d33c039c9e8"
  },
  {
    "url": "assets/js/52.fadb1288.js",
    "revision": "39717a99a12fa6aa8be3fee65f33b4a5"
  },
  {
    "url": "assets/js/53.01f54925.js",
    "revision": "242a7718148547da7b4a56f9738a1367"
  },
  {
    "url": "assets/js/54.9483d7d6.js",
    "revision": "9fcdd11b56f656983659a13e5e4219b5"
  },
  {
    "url": "assets/js/55.891aa168.js",
    "revision": "3a1ad7a91d0721df79a8b9cfbe208646"
  },
  {
    "url": "assets/js/56.39abb303.js",
    "revision": "db5ccbe7e25b73d7b45e5ddafec87db4"
  },
  {
    "url": "assets/js/57.e9a846b8.js",
    "revision": "ca7491c90ebc8028b25b2db1e05db422"
  },
  {
    "url": "assets/js/58.e5f17b0e.js",
    "revision": "7898e339117ddc6d71a830e409c3cc73"
  },
  {
    "url": "assets/js/59.a2df9f83.js",
    "revision": "f8fab5495d955e5a96c46ee06a8c4d5f"
  },
  {
    "url": "assets/js/6.7b9d618b.js",
    "revision": "a8e29e54baaec1bbc9ae1acf5e2ffd93"
  },
  {
    "url": "assets/js/60.f70861e7.js",
    "revision": "d62e0cae5532b5ac230ac9e91b277cea"
  },
  {
    "url": "assets/js/61.d65c79a1.js",
    "revision": "3f50ce491cb568685d9012eadc5dede0"
  },
  {
    "url": "assets/js/62.6f5e5fea.js",
    "revision": "0c7c68d4410d87879337c09dca06a984"
  },
  {
    "url": "assets/js/63.4739ee84.js",
    "revision": "cbfc642b0dd514082330f032bb4e42e2"
  },
  {
    "url": "assets/js/64.0986e622.js",
    "revision": "91d619694f2e64a7bfd22ec485618cdb"
  },
  {
    "url": "assets/js/65.25c68bbd.js",
    "revision": "079e86de3df77adb5c31024c0e356208"
  },
  {
    "url": "assets/js/66.36783117.js",
    "revision": "01479e68dd85e7f9709d701ec66b4711"
  },
  {
    "url": "assets/js/67.abc9514f.js",
    "revision": "22a71a4370b71cd7496f8a36a0d4d8b4"
  },
  {
    "url": "assets/js/68.afdaf4eb.js",
    "revision": "a50d99dadfbbb4f9d557e952611e0955"
  },
  {
    "url": "assets/js/69.7137437e.js",
    "revision": "3bc3d0822747897a74169f41521a11f5"
  },
  {
    "url": "assets/js/7.8e53943c.js",
    "revision": "44ae10287149f3fa42797e85c08cd020"
  },
  {
    "url": "assets/js/70.f7ef0a40.js",
    "revision": "7e5f1fedd5a590e2c48aaf9e94d87c62"
  },
  {
    "url": "assets/js/71.d2dc7665.js",
    "revision": "07fe51a331657da8e5245c49bda8206f"
  },
  {
    "url": "assets/js/72.917f7339.js",
    "revision": "da79527bf222439322fe1837c7d51a4d"
  },
  {
    "url": "assets/js/73.1c4e9220.js",
    "revision": "5ee506dd74f8726458dad37de1d458b1"
  },
  {
    "url": "assets/js/74.85a55abf.js",
    "revision": "6cd9a98a1e4f5180b811cebfcaaa2ac3"
  },
  {
    "url": "assets/js/75.ee6baa86.js",
    "revision": "f6b101eae3b96e7eb238f9c047da0b38"
  },
  {
    "url": "assets/js/76.4082d227.js",
    "revision": "d1940475282cd3916f9b43e1efd16e3d"
  },
  {
    "url": "assets/js/77.017e5411.js",
    "revision": "d793c55b5a607e582ace8447040b16bb"
  },
  {
    "url": "assets/js/78.383bf50b.js",
    "revision": "21ee41f2dc08dd879ea430d0955c82ea"
  },
  {
    "url": "assets/js/79.caac873b.js",
    "revision": "a766f1a83ace2faa862f75e5f1214e20"
  },
  {
    "url": "assets/js/8.6d44c641.js",
    "revision": "e4b068d12a8f73d79dd2d54d495707cb"
  },
  {
    "url": "assets/js/80.83589b23.js",
    "revision": "057146842c8468804237f0c91fac1c52"
  },
  {
    "url": "assets/js/81.ceb9ed37.js",
    "revision": "94dc4ff308a3709c86ff2acbf6a0e31c"
  },
  {
    "url": "assets/js/82.a1c60ae9.js",
    "revision": "471fb8a50f8b4d6cc9687576afe324f3"
  },
  {
    "url": "assets/js/83.30dde9f1.js",
    "revision": "f40e126697ebea8a05d4f86d504c95cd"
  },
  {
    "url": "assets/js/84.7f7573bb.js",
    "revision": "bf89eb39d06898a6a55f22a2a634edd1"
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
    "url": "assets/js/app.51d7fe68.js",
    "revision": "3ed6ac9d4e408bdd6d8e947765ba0b33"
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
    "revision": "be2277ced326c3d4b146d3eef5f4312a"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "028bfa008290e5e7a3bf3b5c2596f47b"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "cc62b78d36fefdac6bdab82accbf9e7e"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "84e532c0a0c421c2747b77e1ab546df5"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "6a54fc57ff5415be03bbed877644ad7e"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "f1a6ebd50dc8dc2ac72b4e43e3f5d636"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "4361d6c6eecb71219ddc20b9666b7f2f"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "a9570fb2e81cb27081e22776e9391e77"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "7c13d45428f2b7b5aaae350e07380df9"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "3cf4e1fb570cc37519e6d99545fa06d7"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "2ddd0edc21ef76a904801f82e90342bb"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "d0e52dd45b491685505097cdc3955b51"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "9520244bf6a8e19bda32bb9d4b6d30f4"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "7ad4756211f747e57ff4964e4c416a03"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "e5f1a182b167ce8d6b11841623f14a6d"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "429095646e1661301ce507247577a423"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "f2c66e89f008c5fd5c34e91a9beb2f7d"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "c2d375334ff356d655cf89373a093748"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "e2ece1cfe39ac9079f70cd66c6ae3ddb"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "fb66088eca15c5bfe758e9572c5d467a"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "e27799e2c61883914992d9009c4cd352"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "bde188a545705dc253d5912bbf29e333"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "04dc488ce04670bf348223368084b3a3"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "5951aa1daeb0f83f071d280d7e61187b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "597953ccd700315b8c5e954270ed47a2"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "3b619cab5299f3d4f4803e3cc19eb6b3"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "c348510ea82147fa8337d52e23d399b5"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "150a70a316b1075ab3dafea40a77e7bc"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "5fc4f89918eb12badaf093c3dcaafc70"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "edad9fe6dad6c38c5ccc439185a0f533"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "ba7f05c9dc605b3ba85a8d57829454d9"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "a04f8f1c09b3ad4d8c14a9f7cce31b51"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "da02ba66a1e8de19cf1c4f3a2001cfde"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "bdac9abd3c3b58e88a18cee9103bf65c"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "156c06b5199cd35782ca0b0853b16835"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "090bf2c0b80b609d8a0098b404f605b1"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "5b138088897af5fbcfa2d61103edd336"
  },
  {
    "url": "categories/index.html",
    "revision": "3ad85632a3b1d5399701c7f45b8dd4e8"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "1ea4b7d909a71d18325759fd9397ee91"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "781d598848df1860d1bce7f4a99bf87d"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "9f9ca22e61f733777de2ae36312aa40d"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "3fe3ab32b632f1ac3f2c71b2e076164f"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "50cde51adeffa9f047a57cb7086513ed"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "cc82e0a6ab760893f8ea420a22124e54"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "d386d3a46464cde2af8541ba454fa91d"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "b660d540a21574b5c5869373633232f1"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "ae006bd05bc27f60d4d6ca89fabe4cd2"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "04dd5510e729d4cfb32a64f44caf98e0"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "f8f2de3d9712485881fc17c313b88d5a"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "263c4cb3d38c5eb78738b94fb1512463"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "5ab8bbf9e6285d3588d9bf99b78f769e"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "143e0e9fd6747b5c2fc35f1df0d900ba"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "561ac165614b89edfc53ec0075937703"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "eccd44e9553f0774520d0f539de9b81a"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "1b2649ecf218725dc1b8165ccff490f2"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "4411f9c77e3d5dc679fce8ae711a3cec"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "9b41c66e9857bf432f4d6655260187ea"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "00d4be73f5dd60a0a319e8d5b830775c"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "9c001ec4835da2ef93cc586967787864"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "c51b2d027c47880a1f9ed49a1fc71005"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "d8d7de104c4d86392df466c246dcdea3"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "c1d20299c721abcdd546d5aad06b686a"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "cd3d09b1cd8f716b38a078a2b430aeba"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "f034534fba29152fa526fd063b85acff"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "44a6775b0b52a09b3278c7cd09f75093"
  },
  {
    "url": "ios/index.html",
    "revision": "6736bc0a22484f3bffc914f80b75bb6f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "f74d46bcbca08cc84cedba475be98135"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "b391a5e39bfa188a4e1dbc119164f5a5"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "d2a14e6f5dfb14b8f45d750e4ca7a0fa"
  },
  {
    "url": "notes/index.html",
    "revision": "0bf60b7b86c5711c2c11c2315c5e8691"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "414edba16ef24f3c6adc7f81e91213f5"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "3b841161b449f78f708fd2183ad9ca00"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "967d967e8909574d3cbd1e8f06b84aaf"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "eab11f922ff6b429fac30013dd12aec6"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "64513f3e8e18e3743309fdeb9992f7f7"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "12f8c275bc42c346fa90377a67516abd"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "c5d73e5736f5ded4681662a68ac0ba00"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "75e707b9a6066a5b3775eca8e4aad789"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "640d9b9bf054c21c3a2712a66621d436"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "5c13a5170e7278f7871f64415142de13"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "3a2262444f20870256164979de48abae"
  },
  {
    "url": "tag/index.html",
    "revision": "a023cc6ce9172d6e1a259a40998d29d6"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "040ba5a91ccc0757e567ceb8f38dbc4f"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "5723bda1b226d23d57a75148c6d0ffe8"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "058ff283c26c562d289ed47834e102a5"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "b4c0c525ab086a42eda0ab8ce6ba79af"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "3c6b7236e007b301cd3acd54e7314b60"
  },
  {
    "url": "timeline/index.html",
    "revision": "0859f6c32cef3c9a381d69303a8c3024"
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
