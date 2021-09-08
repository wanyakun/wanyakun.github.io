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
    "revision": "a7000dd26ef099269786fba09aba8ab5"
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
    "url": "assets/js/app.a7071c4c.js",
    "revision": "1d25212f826449ef01b111debca26738"
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
    "revision": "4ff0c303cdd2b1263c11822791e3357d"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "c1d996cc2c797cabeb0f0334bf2a955c"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "2f3a6561c51ce7463cd5290412df4af1"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "cbc3a4e1a08f1e26ae152c61a977c52f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "2c15aefef950c717bddc0410c92af26e"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "0e260c0a5d30f504828a5d54d0d67c6d"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "cf446ae264470930c239e02d396f1c63"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "2ede3c51035fda739fe7a11a560446e3"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "b3b45d5c41222b797443d2b3395a756b"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "55febeb12923167a147379ecee1a9cbd"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "4597648258d03f7652f44f95a68c2d4b"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "780c8ac3e74241b9bc609ed541e63e28"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "85b9640ad5d324f73be5a7ea1ca8c095"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "5688aeba970ade59b058d12786358b36"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "a5cd1003bdabe88632166abe70644205"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "6962bc9784721edbaddeb5a1b6f47128"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "49c96580758aa0c40230394fa97732b4"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "01f31011942f93ad3b0e68237e1629bc"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "cf4660ece167a2f7321a2f15c120540f"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "416730f6ec0b24eced9234eb19502e6b"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "8f59fb932a224c73277b02ddaa43b2a2"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "3daa3608fac626b0a7534445fd41bc67"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "c5dcb80e7dbd7e90606e8c699f5b8cea"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "07950b331f72168bfc317d3bfa4e8fbe"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "cfce7a15cc3bf29b1ad92a4e9e057be8"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "0929ba5861885b9d0236d43acaf1ebf3"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "655b6c3fbd311ead55c2f3b509eeffb1"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "b986f8220e3b3f2b705391ffa83a46e7"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "664b1acefa558a623d854692a0dbcba2"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "3b93c5d228aab3ab61616a41f3426092"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "63a5bb4ca59c148486f431ae541e1265"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "bd4c2ec94bc17959a26351379b2cf175"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "246855fb50247052c8491040d570f9f7"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "07e0c77f665f554841a98b6685119eab"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "829621302eb25cf0bb3bae1ee58f2290"
  },
  {
    "url": "categories/index.html",
    "revision": "a2ccc4f1e9e3c049bc1dd46ff86c469d"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "5afbc94708576b56c7cdb80143f72916"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "d23e46e12ac533b7a87bb706b3c9c0d4"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "de9505d99a61002d085c542e2bd78835"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "916975943272fe8d9c36d82b984184e2"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "be4c68699f676f6059bc442adfa3df0e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e8c47c44d22d299387d2ce1d5b3ac583"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "22ef3f25403d3d601fcea108bb9aab81"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "750ec5ac1babfb96faa23ba5aa20147f"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "a8fcf9d81a82dc01b7672953a20abc15"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "a1e6942cbc42a3d3fdeabe5f44759f07"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "7139783ef0b4cc8be79583fa4b89b401"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "cc17d4a3a5d9701b0ae2ca7692f54cfd"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "ee24f0d55d69aadd95b55ed988cd2e22"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "9fba5ff0ae825c076d8620cc6ba2ac05"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "93fb1987406f63ac3eea2faa03ddab5c"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "7df81c38565ca96fca34cffa59517cfe"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "abf125a516fc3873b9af94d9b02169c1"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "760172a33b2d150a3f9d9cf60b9df9e4"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "38331262da0a7948d9e680e6d8fd2930"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "9b5859c08810aa72be801211565c7375"
  },
  {
    "url": "ios/index.html",
    "revision": "5e296acd7d504d8617534295efad6829"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "fee3ced7f08fd7caa0a99fc768ef00c2"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "395a5605007dae2fac7176076fa3548c"
  },
  {
    "url": "notes/index.html",
    "revision": "3bf02b0316507ae86db48ce7767adbe4"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "9160607889ba22a90995590280f81bf9"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "18506a1fe1891afb83fd60801678ee88"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "c9c4503c6f6c732e4c58d0fa1059991f"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "ba8d65f78099258c42b9b76be1b35708"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "cddc4e6cbd3d0b500d753e5725372958"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "e7a95d5b168ff6d94461ca83434d4653"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "94f0d17e425e92ce88d0f24b94e5f36f"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "132ee593684ec06c76304a1fa3d6f340"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "857fea429d8728172f7a2caa01b554f9"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "0d179cb085de819505ecbe49282ef3ef"
  },
  {
    "url": "tag/index.html",
    "revision": "b262f24c81e142344ec9a43fe30fb451"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "a4f26daa75333073b916f13fd9c7a750"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "d7a8adba4e1b227374f036120817421c"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "bd769c211e3cccb8754346cf0b9b409f"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "91c4396bc96adcd4e19d236d155e0e9f"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "2b893f870dadb01a682b49acb264accc"
  },
  {
    "url": "timeline/index.html",
    "revision": "e8f23c49ac8ad8bec0a1adb3e9175f20"
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
