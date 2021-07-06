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
    "revision": "5acd266dab040a3db7eaff774f71a78b"
  },
  {
    "url": "assets/css/0.styles.615df1fc.css",
    "revision": "0374aab4296a932c96d198405f8a031e"
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
    "url": "assets/img/notes/front/engineering.png",
    "revision": "04b1d91c8314c53e3f15d95ce754687c"
  },
  {
    "url": "assets/js/1.d91856e4.js",
    "revision": "73abf37dc0af1b2e8b652ff433a4445a"
  },
  {
    "url": "assets/js/10.a8358855.js",
    "revision": "66a1d23432ca53aa9c54325f3cb38b40"
  },
  {
    "url": "assets/js/11.cbca4f1a.js",
    "revision": "88d6ac8ee720c8f8b656864351229855"
  },
  {
    "url": "assets/js/12.5c5f7abd.js",
    "revision": "58a13c578aa3ba49945e8c8f84db3144"
  },
  {
    "url": "assets/js/13.10bcc32e.js",
    "revision": "973ee5f85d4f374090c5beae41fc73ce"
  },
  {
    "url": "assets/js/14.a3bdec6e.js",
    "revision": "7f9c26ab80a98bc6c1ab725ca40d61e7"
  },
  {
    "url": "assets/js/15.64548a34.js",
    "revision": "af7bd51b912786e2c6ce4161cbbfdccc"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.9aaff213.js",
    "revision": "1004922b0c78890fadd9622dcf883c66"
  },
  {
    "url": "assets/js/18.182895a8.js",
    "revision": "f918fb4ba0457481492315095e1b6e6a"
  },
  {
    "url": "assets/js/19.e4d757c9.js",
    "revision": "c0e8ba48438013634cd6d3cb66a0074e"
  },
  {
    "url": "assets/js/20.d817dd7b.js",
    "revision": "9b406895bc25712398f16545ac041e0b"
  },
  {
    "url": "assets/js/21.f946c2be.js",
    "revision": "013cfdca152c18a7a1087c7586256f06"
  },
  {
    "url": "assets/js/22.7f8d9aeb.js",
    "revision": "d4263f78d234c95c0b52b747a802ab7d"
  },
  {
    "url": "assets/js/23.7d7ce180.js",
    "revision": "bfee88c9cc672f338a8a4529a9f8e1f1"
  },
  {
    "url": "assets/js/24.4f8f785c.js",
    "revision": "2576419fae971d99e125852022290c45"
  },
  {
    "url": "assets/js/25.cba33bbc.js",
    "revision": "9ad36f4b86d9c32b3865cc12f732e67a"
  },
  {
    "url": "assets/js/26.b55f1186.js",
    "revision": "9d86047cdfc2e9f9224b5804c2ca40af"
  },
  {
    "url": "assets/js/27.4080a346.js",
    "revision": "0ba1ab1ed857b3a869870e5445b4e620"
  },
  {
    "url": "assets/js/28.d1269431.js",
    "revision": "23e0d4d0cfc2d5a36ebff4196ac329fe"
  },
  {
    "url": "assets/js/29.fc6f5ead.js",
    "revision": "577c0e76d5c659c25381aa72d99164c1"
  },
  {
    "url": "assets/js/3.2ddc2e9f.js",
    "revision": "fc3fe116cde3e025d1d61e48c299e006"
  },
  {
    "url": "assets/js/30.b17bda62.js",
    "revision": "c1a3b1980101916ae7cf759508532539"
  },
  {
    "url": "assets/js/31.50ac1f28.js",
    "revision": "7f1d2e65ad9157d91a08c2eadd44b14a"
  },
  {
    "url": "assets/js/32.08184969.js",
    "revision": "632b196555ec340f7da8761ad8bb5fa7"
  },
  {
    "url": "assets/js/33.2b93880b.js",
    "revision": "addabd41818cec3a266bca69c6c6eabb"
  },
  {
    "url": "assets/js/34.2dfd9b6c.js",
    "revision": "420d95fe20bfa81814e57b8299e53973"
  },
  {
    "url": "assets/js/35.39087612.js",
    "revision": "b9a10ead88102dbf6879dd9db08f780a"
  },
  {
    "url": "assets/js/36.cbf376fc.js",
    "revision": "0d4b95d18be17e5f66f58a105da28486"
  },
  {
    "url": "assets/js/37.e2e2606d.js",
    "revision": "44f0deba58d5a028461f505073ed4a6a"
  },
  {
    "url": "assets/js/38.35c0f69c.js",
    "revision": "1be968c1ceabc9778ceffc1067a58430"
  },
  {
    "url": "assets/js/39.f6e4d3f3.js",
    "revision": "0e70366c7d001e32b0d246f889c0d70d"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.1ae75188.js",
    "revision": "e523bf0fc18f6b7d6f44781e6df4b519"
  },
  {
    "url": "assets/js/41.10a5b247.js",
    "revision": "5736b876508a982a698e8007461493a8"
  },
  {
    "url": "assets/js/42.3aa83300.js",
    "revision": "8f867d0d62b48572664713285e0a984a"
  },
  {
    "url": "assets/js/43.45e228e3.js",
    "revision": "9e0f2f5e62ff81c82cd2b7a026fa5739"
  },
  {
    "url": "assets/js/44.d2e25faf.js",
    "revision": "9a048d79f2415d1014d81792b686394e"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.85faac89.js",
    "revision": "058f7f665e43c8ef40a3e3c7e1b9391c"
  },
  {
    "url": "assets/js/47.8689ac92.js",
    "revision": "c7356091d018046372e0c6092ed7a95e"
  },
  {
    "url": "assets/js/48.6e4a0787.js",
    "revision": "9a4b307edb83b3de97503716af26ddb3"
  },
  {
    "url": "assets/js/49.1a5936a8.js",
    "revision": "32adeaf49ac610647ea2cc6300d2947d"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.cc163ff3.js",
    "revision": "2838ada3c5ec03b9347ef9b827f61d7a"
  },
  {
    "url": "assets/js/51.dd8f58e0.js",
    "revision": "c29dd8f7ed3abe76bddeca1c82c7aa73"
  },
  {
    "url": "assets/js/52.02f27996.js",
    "revision": "bff8229d7e5e5b2269b9296e36d923cc"
  },
  {
    "url": "assets/js/53.6832bb27.js",
    "revision": "55f02280efa86e4a2316307035359c57"
  },
  {
    "url": "assets/js/54.be3e68a3.js",
    "revision": "7d8fab7c95544e888dc460fd68e397c6"
  },
  {
    "url": "assets/js/55.4beb9d6c.js",
    "revision": "b65a1be4d1ea33b2d426480d2b711a32"
  },
  {
    "url": "assets/js/56.9f51e514.js",
    "revision": "5151496f5490c5daab1ac295fe1aa497"
  },
  {
    "url": "assets/js/57.3770f511.js",
    "revision": "926c587ccded6046e844459d5f6ec733"
  },
  {
    "url": "assets/js/58.e02b2e68.js",
    "revision": "dc393b61902b5d7a5dd6d14199e6beff"
  },
  {
    "url": "assets/js/59.c4d3ebf3.js",
    "revision": "8bb8694b231c1e814ff8c36e71b97cbc"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.1f6bf3a1.js",
    "revision": "4cdadcf65dcfb2cec3a1806e1c015bdb"
  },
  {
    "url": "assets/js/61.3dfd95e3.js",
    "revision": "c6949827969892f12f795b21c5c1d869"
  },
  {
    "url": "assets/js/62.d2e2f6c0.js",
    "revision": "7eb91b9aa00018a45dbe73b2a7a995c9"
  },
  {
    "url": "assets/js/63.765e3744.js",
    "revision": "3fa8e351f3c70d0654115a561aea9892"
  },
  {
    "url": "assets/js/64.29d169e0.js",
    "revision": "00c2f881b2e59875bc4261ac5f4271e4"
  },
  {
    "url": "assets/js/65.8eaf11c6.js",
    "revision": "1ebb9745877fad10593b24b9b33f9348"
  },
  {
    "url": "assets/js/66.5be3ee05.js",
    "revision": "90b96b905bc62d50f0b009e61a5dc5a9"
  },
  {
    "url": "assets/js/67.5bf8b085.js",
    "revision": "137334a8951e9da7cd5fefbced2f0a3a"
  },
  {
    "url": "assets/js/68.63daa980.js",
    "revision": "7a79152b94627117e693c55129169933"
  },
  {
    "url": "assets/js/69.f8976b1c.js",
    "revision": "b1a6b07d8b7ecb9f22e84428c3dae019"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.60487aad.js",
    "revision": "d574739c68ac27ffcbf96223ff873612"
  },
  {
    "url": "assets/js/71.07fe6ed8.js",
    "revision": "4ff4e60ce52aaaa66edfe8c4e2c46ee4"
  },
  {
    "url": "assets/js/72.8acc503e.js",
    "revision": "d070d978bfed6aa11b6cfa8ddc56a75e"
  },
  {
    "url": "assets/js/73.3f06f4ea.js",
    "revision": "94edee1603edbd056250bce6065380e9"
  },
  {
    "url": "assets/js/74.751a12c8.js",
    "revision": "bd528c36b9154bf2f185265c693be56b"
  },
  {
    "url": "assets/js/75.cd7bbd04.js",
    "revision": "219b8453eda15919bf2477bdbc4a872f"
  },
  {
    "url": "assets/js/8.f958ee79.js",
    "revision": "a2a3cd48ba63e4adb09eb2e518782542"
  },
  {
    "url": "assets/js/9.288067d1.js",
    "revision": "4ec017d8918fd958fa53aedcf6cd03a5"
  },
  {
    "url": "assets/js/app.2232c9f3.js",
    "revision": "3cc93f19d599529ccd25fad98887abeb"
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
    "revision": "d4cde66041f224ea94cf80b17963d2ec"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "073e20985b54c6a151337ec3da2037bb"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "fde534c0ebb0b55fc08164d8b9f72b66"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "2d33e4de82249dbb8402cec9ad7b6130"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "1e6f86763e18e6e4462336bcd736be2f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "f750fef10534b8f69c1e7ae712c05de2"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "02c9f82e04c5bf43c81d3bc49d50fee7"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "08787b82e79b77f40751239389999817"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "56424a5c3963d5d91a037e99117b354b"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "153096919c4870410d01bfd819c1a12d"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "658d4abde8403dd62202ce9dca1b5a07"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "bc5e80cb21ff48bd9d55b49544783541"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "d7f1a155da66f8c9a20009d61f1a5b4a"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "1215f1c5cacd13a1d7294aca80e237b2"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "e95789586c6a7802e3dd35ac72cbb187"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "37c814fab747662ce4b9ecb5140f3b81"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "a09a1ebda2b86bd6007e90f1b7e81d83"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "f0f730f0a7830fd2e3efa7041858ad20"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "124cceb81577574a74e134645c102993"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "2ec41ff7100d8c107525178e9242f69b"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "cb860a6aba3af395410272671a44c00b"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "0a8aceb1cc432304b9c75897c649afba"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "28e87da12e6f72331c69487cc5db6c97"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "b5fd34e375ecde836722ea03adee634c"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "25c4f00cedb0e1f75f899e69d9968fab"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "7111ace592d0b3d70c92431eca9a94f1"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "9c90bc968fd1c236cb480ae4fe7cce0d"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "18ed1c0c558e6fccfaaf2ee24ca0e479"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "b48f7a3869e49a01bf872fd33729e879"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "eb1143f9248d977104dde41705a2eb07"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "0a95896e9f88f8da52e66a4253b05ef7"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "3bfd24ae20098ba6afaa3766e27521df"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "61dd4b4b0f1ec427b1d89bac7490d4ea"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "0878602be26c52e4d019474e8ee02ab1"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "9bea3f06129b571666b7a3861647e4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "0e6f89dc2469b559ef9801e60d2f9d19"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "af87a26588e41b151e6dec8631e8c72f"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "3e97bab5caeb0576f5d3c91f1101e689"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "a16600bebee152a5cdf6e11e71204eee"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "259db1d68f941c793f7d985f6649ea8c"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "b8b34d4efabe2502b2bc019830f63e94"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6a107266bb824d7aa440662a9651a00c"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "89b41e4708fc0bc31c160fdcaa981ad6"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "b46ee5d43097b69372cc1433f31e4873"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "b84c46e40a6c511c307dfd08f32a741e"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "376b11ceb122abdd610659ddbe1cf34e"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "bafbee85f89fe85324c808c4f2dd93e6"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "d9568d42edf171f3d3e661246560b30b"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "f7dbca0004631ab5eb3daeb38a0b598d"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "d2157e1e79418501dcc2c245cfb3e3bb"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "ac49f1c93b17ab0405600a1ae8465eb2"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "461a252f6320ffada6380f6100fab543"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "dfd71d3ec360c04b691f42f16f4d3fc0"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "4f4194b750ce2d34225280325177a705"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "92c99eeacc83964ea1032363d6c109d1"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "9730e33147f3f45e25b85365918339cf"
  },
  {
    "url": "ios/index.html",
    "revision": "27bd9997162661db74769f100417902d"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "f4ca1a9b2afc5b8560e8bf31d298e2d4"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "4b4e331ad6ddf93bc84479905bded4e0"
  },
  {
    "url": "notes/index.html",
    "revision": "f74ff2212f82dafc83eacf1f8dc32306"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "9319e38fec49fb5126297549118cbcf9"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "3821afb70d4f7b069cdd3d8b05431577"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "642c26f513478148ac2ea04cae17ac8b"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "70b29d609018155a5327f0cafc8b1dcb"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "0b08db010dce08a289e8da6a34b46c9b"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "c314f03d863b177bf93eaa2441562195"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "18a45b309082e97d02353048fae16541"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "0fd934593a8a524aeecb4f83d4f1f2f6"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "de2d3bd2843290b2a60d2d2fda7b60b3"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "8e187652ff9e69d721a288e4d68ade92"
  },
  {
    "url": "tag/index.html",
    "revision": "11828b9a28aaee9ae802f0994d0604cc"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "83debe1d110fcf61a4583edd49efa5de"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "ba1095f57d25f03c6575b22fd3c7d1bc"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "2bfc06d38e4ee7108635275ba1f90c2b"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "be5e87739443a2d5e0c80ffeb1915380"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "97b8853da8bde7f5cea34a6209931146"
  },
  {
    "url": "timeline/index.html",
    "revision": "0ca13f5180073f9ab7ebac4eaaab317f"
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
