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
    "revision": "547e4fa8b8e8bd69ed3135e01a45b80e"
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
    "url": "assets/js/1.83f0b6a5.js",
    "revision": "de95e650e86fb506f79c17d9cbbe35ba"
  },
  {
    "url": "assets/js/10.a8358855.js",
    "revision": "66a1d23432ca53aa9c54325f3cb38b40"
  },
  {
    "url": "assets/js/11.d4a348c3.js",
    "revision": "6c9e45b9db2f4a2950dc2745a8a10264"
  },
  {
    "url": "assets/js/12.c9f28cf1.js",
    "revision": "d6633d3d923f4937562abad565be49b4"
  },
  {
    "url": "assets/js/13.9f5f4e9b.js",
    "revision": "4a55904772ffad7acd32c3bb9c5affab"
  },
  {
    "url": "assets/js/14.fafc43d4.js",
    "revision": "8fe0a5a59c5ef5e69c6ab05fe8027c50"
  },
  {
    "url": "assets/js/15.62de3dda.js",
    "revision": "8d3fb78555461f3acc471fd3031eb3f9"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.b7405d28.js",
    "revision": "81e2607b61c07ad86dd869c58360de2e"
  },
  {
    "url": "assets/js/18.90cbc5a0.js",
    "revision": "37c57dfc76b91a5f458983cfd7c564e8"
  },
  {
    "url": "assets/js/19.937871c0.js",
    "revision": "63c58770747c7be78cbbbdf61e693651"
  },
  {
    "url": "assets/js/20.635b52da.js",
    "revision": "2fa613a0efa4c60eff600fc865ee9901"
  },
  {
    "url": "assets/js/21.c7979b8a.js",
    "revision": "e51637cada7e0eb225ef80d91d277fbd"
  },
  {
    "url": "assets/js/22.8262c7fa.js",
    "revision": "7083d9ad7d6bfafff60ca8d276e3f648"
  },
  {
    "url": "assets/js/23.4559637d.js",
    "revision": "5f272a52a203830bc557f4e009b2dd7b"
  },
  {
    "url": "assets/js/24.0488297e.js",
    "revision": "675bf3b9974e971d6fdb2568bf3a477e"
  },
  {
    "url": "assets/js/25.bade7766.js",
    "revision": "8f7117a2f21084bcd64f074376a59f23"
  },
  {
    "url": "assets/js/26.0a326c01.js",
    "revision": "cec263cf78b58c9e2141fccb34a9a674"
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
    "url": "assets/js/3.efb9f3e8.js",
    "revision": "096c0cb2bca62db801eb8a58970bf237"
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
    "url": "assets/js/32.a64153e1.js",
    "revision": "736ab8b846d2cce84ffaaef135a6be3c"
  },
  {
    "url": "assets/js/33.9a250ac1.js",
    "revision": "663c21aeee266578c2bd9fa44c483651"
  },
  {
    "url": "assets/js/34.6207354e.js",
    "revision": "8bc29f6724bf8474e5751d85f5a94c8b"
  },
  {
    "url": "assets/js/35.f87dc42d.js",
    "revision": "a022f6e48f8b5bedb72a828501965471"
  },
  {
    "url": "assets/js/36.e29d734d.js",
    "revision": "07014122f3b7ce3d7086ce90020a92cc"
  },
  {
    "url": "assets/js/37.e651c3e0.js",
    "revision": "11c00322af987bac8c612c0c7d538fc6"
  },
  {
    "url": "assets/js/38.fb48fc3e.js",
    "revision": "415cac03d2a5d89406e1017f89b5ea9c"
  },
  {
    "url": "assets/js/39.b3448ef8.js",
    "revision": "9387cef1ee1052de0a734d681a50d587"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.612e5914.js",
    "revision": "bd0df47e894e004dd0c09a2ffbce1637"
  },
  {
    "url": "assets/js/41.31ad12bd.js",
    "revision": "56a3c07dc8aaacb4e72f2360b23a277f"
  },
  {
    "url": "assets/js/42.42a59715.js",
    "revision": "00c86166f2d6ca930ee1afcaac48c614"
  },
  {
    "url": "assets/js/43.3b850463.js",
    "revision": "d40ab15a9b3051e003abcf5643f5fd6d"
  },
  {
    "url": "assets/js/44.8677d5e0.js",
    "revision": "96746ff517f659abb03ff8f216073695"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.5e86de8b.js",
    "revision": "15f8cbc04d2280b515621dd9afc39181"
  },
  {
    "url": "assets/js/47.038df315.js",
    "revision": "fe3ab5bb631f1881d1ffe430d585ce39"
  },
  {
    "url": "assets/js/48.8cbffddf.js",
    "revision": "4f35fe66bd2e7d6dd17a6dde51f3ba33"
  },
  {
    "url": "assets/js/49.087cfd96.js",
    "revision": "9c23c31a7f46351ae96025aa36d31c79"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.918a0b11.js",
    "revision": "cc61be0290ac3e4d33909eec26ec19e8"
  },
  {
    "url": "assets/js/51.8bdb6606.js",
    "revision": "f41c5c8a8491352d631040e9d9586c8a"
  },
  {
    "url": "assets/js/52.8ab96d53.js",
    "revision": "653bfd52d97af71545d14222c746c94c"
  },
  {
    "url": "assets/js/53.6832bb27.js",
    "revision": "55f02280efa86e4a2316307035359c57"
  },
  {
    "url": "assets/js/54.99fc55d2.js",
    "revision": "a5f506f523cd0ff058c451cdb0832b53"
  },
  {
    "url": "assets/js/55.b5fb73f1.js",
    "revision": "fa99059210a583f550ab4a329c411ae5"
  },
  {
    "url": "assets/js/56.d28a875f.js",
    "revision": "01e637744028a60e397ee2b1f54869f2"
  },
  {
    "url": "assets/js/57.54556b34.js",
    "revision": "165ed2b1215154fb956e0d6130d1b7e2"
  },
  {
    "url": "assets/js/58.d14efe05.js",
    "revision": "c64fd37c5a0dd23272341d6c431bf900"
  },
  {
    "url": "assets/js/59.ddbc973d.js",
    "revision": "b1e36d0a33174a98b9bfb2dbce855062"
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
    "url": "assets/js/61.b1374412.js",
    "revision": "ded550493f434f4623e6a3dff0c5b648"
  },
  {
    "url": "assets/js/62.926d3cdd.js",
    "revision": "c6fa9d73a04d2165028684a1903f461c"
  },
  {
    "url": "assets/js/63.d175082a.js",
    "revision": "f8b3f72bf42eafce4e426dec31761b54"
  },
  {
    "url": "assets/js/64.4ced0b7a.js",
    "revision": "7736ebb98ba5ef682c9b0414a81833d4"
  },
  {
    "url": "assets/js/65.410de373.js",
    "revision": "dbf2a801a92e4237cfec2a70fef9bd67"
  },
  {
    "url": "assets/js/66.2c48e5f7.js",
    "revision": "623f4561e1ace07373aecc6c5c31fb26"
  },
  {
    "url": "assets/js/67.509b888f.js",
    "revision": "647acba2277678a432f3a076bae64d39"
  },
  {
    "url": "assets/js/68.bafd2696.js",
    "revision": "f7c4c54d8a79464483d21e42490a1957"
  },
  {
    "url": "assets/js/69.2c044a40.js",
    "revision": "00c212a8ca4da3b6bdbf10011e2a84b2"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.dd9b0537.js",
    "revision": "c75dba66a0fb31f061806f6d66b3851c"
  },
  {
    "url": "assets/js/71.4b8a1318.js",
    "revision": "3e3021aaa36fd6578bcf2a2f70dc1245"
  },
  {
    "url": "assets/js/72.801c0e93.js",
    "revision": "86f0bb41d45b2baa9a3882010d3631ba"
  },
  {
    "url": "assets/js/73.8e747984.js",
    "revision": "322ab88ec8d24423a8cb39c3e072ef49"
  },
  {
    "url": "assets/js/74.ff9c5aab.js",
    "revision": "899381f090c377fd2a69c98f4b15fdee"
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
    "url": "assets/js/app.43aadb7f.js",
    "revision": "d3473d443a443f00cd3cdf7feedb2708"
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
    "revision": "ebbdcdc0fa7b22a5ac7a99d555949e7a"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "d75663ba5afd731fbe5ae8693bb3ffdc"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "2a5b8cfbd8e811b0d87d9856c5daf2b8"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "4178f2277e0eac0ef33e376bc4231c20"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "d4c63738dfb9bb9592c69ec3c6964ef2"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "2f38ac4fb1db9d0a9baeadf3444bc27c"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "de996cb63eb065d3d2bfd52c03208c2c"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "abe6f06d5ad423c63dce1e7a10f3adb7"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "5701ef8441722b2686e6b6eb42f528b8"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "db41cb16d2a5680cb5bd4d23e7d6bd90"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "6bf7241d9d4f26ab1035a129994bd98b"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "33078bb33fa4ab47a5761ce8ac585c12"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "17e9ca6319c50d5eafd922a844d6d2b1"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "71904e15b24af611478bf0a00827297b"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "dad9a652dbbd4dc9294df1f97c428543"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "0fb059e73a1f0c88f2d516981403bdfb"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "03a25a55fa9e555d88ea821995e06264"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "914ec7f3c37cf32e94f9a01b84311c5c"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "4086f129a9baa8fafc842e38d2597181"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "034d5752d2970232058cc9b8773abcd7"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "40694b72fef7298e6ae2a0e39fc032fa"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "9f6d111c4323b907bd4dd1497729a856"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "3cf3aa90383c9d0b44b1a27a60c0edde"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "b9afac4944798357d870d9ea39057a2d"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "04090b690d63fe90804475d2ef8eba00"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "7438ab6b5e34b426519ea78ec33abcc5"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "73bded41c9523c339c6d75a71aba1517"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "f9887722d7b8c5251ce534561653979b"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "948150fa08853e0ddeaa903fb1f7313e"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "f1521acb122665419655a1ebf17c5a56"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "7651ad4cd8d65804ff70aa7bb308c2bc"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "44a4dcb4496fd64a6accc8e52595f18e"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "9b994c70967ce0cfd44d6bf849ee6ed1"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "352d7093e7eb70b3489d0eece35e21c7"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "031200c52097f91f91e479f05d0cb2a0"
  },
  {
    "url": "categories/index.html",
    "revision": "563ebd707ff73571e402a39127d7d580"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "8c430a3ee825f884469b31b53efb56f9"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "f5cf5486eaa83010d58eff19d1410d3d"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "b4cbf35c980c82eb2ab38135b17c8bf6"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "f3886390a2880b9d40a30d4f532d4ec7"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "2d438d335ab89ec71ae0745891df0dc4"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "38e6071d7edd58dd91e03e5eee34a376"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "e0c79c6f5f4898301c943ad670672828"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "6b613532a1091333b9553a600a848856"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "0326a2a8e6a307995311df559d076e80"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "2f54660e85395a6abcb210311d2b91a3"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "989bed07137aa4fbe63e5c9fa02ed7fb"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "0a70d98ffe1e69e7f0765f7d099f846f"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "fdfb760b6bf6a62fb3187c56a5762933"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "c75b0c16d1986ed4fa1b848105fbbbae"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "44f75aaf53f691a6b9c4cb147162d1f9"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "901ac8e51de15b0603c3e172970354c4"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "e8ebdcc900662cfa8f34951de8069b2c"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "9ce31bf7783ac8107a0a87612f9d9432"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "aa3418a2852df1648974c5f2221f4b7b"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "47720f2022eb90d0d94e3eafb49c5b7c"
  },
  {
    "url": "ios/index.html",
    "revision": "69ac3afc7e398df4b3945abfff0ab81d"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "1345f661f3e6d466c644a9ceb7ed87a7"
  },
  {
    "url": "notes/index.html",
    "revision": "b913bdbb2fc6b22c8abd5424cd518196"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "e7db7f7394c04c603a9ddfc6b847e554"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "3f984b26e3d9e42234f8e52d7c92ea9e"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "f603c000cb08452e28a5d538c2317cb9"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "d8c1ca871600cab412749c2485759a57"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "120fc96bbb0d043ff60aca0157a796b2"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "c88159cb29d71cb13eb8bf02c5bdd637"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "2fc88ad9ddff0fc814811ca4bfe97293"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "b6b77200f2deed8027e3260a5b8b6b37"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "c0f435b6bcb940c031fda71347f3b222"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "d5e9481a591016e176fbf3c6f43b2034"
  },
  {
    "url": "tag/index.html",
    "revision": "1c50aac64b149101e4d6300eb37d758a"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "71772baee49f85053830d26635faf5da"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "316cd1a572b356b3c4964ed03ff44be7"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "ecb7bac0f92d1879cf7b21fbcd49da89"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "76ecd7760110f262ffa64154b02f7a37"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "7599710996131a34d71ca72e85314b2d"
  },
  {
    "url": "timeline/index.html",
    "revision": "6205fef59d320ab4c67867d489a28c46"
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
