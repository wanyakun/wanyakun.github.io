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
    "revision": "ab6c1a66f1d65955bc93bbe99b54720b"
  },
  {
    "url": "assets/css/0.styles.994e4abf.css",
    "revision": "52aec7fa39d37e2187a38e538edfa264"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/ios/basic/block-struct.jpg",
    "revision": "705338173fb3ab8e976e21ce917b1bcc"
  },
  {
    "url": "assets/img/ios/ios.png",
    "revision": "7c32758abb37e4720232ebe1a2ada38d"
  },
  {
    "url": "assets/js/1.5fe79815.js",
    "revision": "b76e1e039946defa39780f75118d0314"
  },
  {
    "url": "assets/js/10.2f9f2a33.js",
    "revision": "f2f69be4b04eede5028f75d128f906d5"
  },
  {
    "url": "assets/js/11.68e2bd77.js",
    "revision": "b49ecc9b47ad05c5aed40521554f6b57"
  },
  {
    "url": "assets/js/12.0fc8e6f5.js",
    "revision": "67e9b8b156f5a33f2379fc338aaf5300"
  },
  {
    "url": "assets/js/13.cd7fa973.js",
    "revision": "d2fa1146411733086a257ccefc540159"
  },
  {
    "url": "assets/js/14.0c18a1d3.js",
    "revision": "4a9798ee0ab393eef6d2b51af53de9f2"
  },
  {
    "url": "assets/js/15.55a01126.js",
    "revision": "6729cc1ce8f7f3d4c92f7a4403331a92"
  },
  {
    "url": "assets/js/16.04bc0dcb.js",
    "revision": "07705a9140406a46721bfb6f3f85ed6a"
  },
  {
    "url": "assets/js/17.d622698f.js",
    "revision": "42a46d0d31aa087eed314870ea1f484e"
  },
  {
    "url": "assets/js/18.9f571570.js",
    "revision": "cf57c0a7ac94331c1c6c4f4ab4ea0b08"
  },
  {
    "url": "assets/js/19.38f9f5b9.js",
    "revision": "798631d8f57ba1739625703770a74ef8"
  },
  {
    "url": "assets/js/20.e11966a1.js",
    "revision": "88dfbbff8f1dbbccd4558cca16b258cd"
  },
  {
    "url": "assets/js/21.00d1fe01.js",
    "revision": "c2f154c999922ad67316259c5eec27c6"
  },
  {
    "url": "assets/js/22.ca9a6bbc.js",
    "revision": "aafd826e997d825e73bc6cd3f0e4b193"
  },
  {
    "url": "assets/js/23.e658921c.js",
    "revision": "3f72bd476ad63d83df7dc05cba1e7772"
  },
  {
    "url": "assets/js/24.730555ae.js",
    "revision": "093fe783f940fae1cfc7a3c6e713a97c"
  },
  {
    "url": "assets/js/25.db30b0b1.js",
    "revision": "88adb4e39b086feff59b66f2b0764e63"
  },
  {
    "url": "assets/js/26.acba0af1.js",
    "revision": "5a053d5db8b791816eca2874026c5b2f"
  },
  {
    "url": "assets/js/27.222b2570.js",
    "revision": "6e5fbfbe64cd20f90953ea5a88708387"
  },
  {
    "url": "assets/js/28.4fd99388.js",
    "revision": "19f8fa8e8cfbae1f124fcb3b4f9295e8"
  },
  {
    "url": "assets/js/29.87cfeeee.js",
    "revision": "33d4eedae3ccd6678f6cd3a6675d314b"
  },
  {
    "url": "assets/js/3.45fd2d9d.js",
    "revision": "23c2981647a4d5391bf9ffb3f1a995f3"
  },
  {
    "url": "assets/js/30.56344785.js",
    "revision": "9fbdc1a55811aa917f07ea386a9961ec"
  },
  {
    "url": "assets/js/31.02c8ad9e.js",
    "revision": "07c9111c26ca90428b769bb86b0fca2c"
  },
  {
    "url": "assets/js/32.3cc153f5.js",
    "revision": "7415954ed3717c5e342c9b17c7ff826c"
  },
  {
    "url": "assets/js/33.8bf7bc0f.js",
    "revision": "552f136df16b052b6af31b60073b9800"
  },
  {
    "url": "assets/js/34.4a011618.js",
    "revision": "c207183e7b4bfeade40546c76f5684a3"
  },
  {
    "url": "assets/js/35.3f3d98ff.js",
    "revision": "1c3a59469c121824ea52fc01ffcaa315"
  },
  {
    "url": "assets/js/36.e06948f6.js",
    "revision": "3cc35665e6d96b881547c15f1c38283f"
  },
  {
    "url": "assets/js/37.8a19325b.js",
    "revision": "147cb05acc11426570fda49a048cb472"
  },
  {
    "url": "assets/js/38.fa462d32.js",
    "revision": "62e41b7c80be0feac6a48362191b38ed"
  },
  {
    "url": "assets/js/39.80ea55d5.js",
    "revision": "e9fa3ad3d0514d78b38be65bbacf914c"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.8ba34b57.js",
    "revision": "fafcdced9091fc5a839741676633cb4e"
  },
  {
    "url": "assets/js/41.1703dbac.js",
    "revision": "2a69f6f13192b80eeb4a7d55ab914503"
  },
  {
    "url": "assets/js/42.ecb2b43d.js",
    "revision": "735e8a7d2ce8a560149811ca90077641"
  },
  {
    "url": "assets/js/43.2caf0f1d.js",
    "revision": "6ee5ca636553bde1a793436eebaa71e2"
  },
  {
    "url": "assets/js/44.ce57f483.js",
    "revision": "1a73aafd0d29dd167171e63740f82f68"
  },
  {
    "url": "assets/js/45.b8c86210.js",
    "revision": "b40c24ad5c6eb1f6fa6114d3f8a714b7"
  },
  {
    "url": "assets/js/46.63c79118.js",
    "revision": "2bbcfebbf15e9cb0346c13b091bedd6d"
  },
  {
    "url": "assets/js/47.e85d3cc9.js",
    "revision": "1539d9360178b9b70d2aba766089bf83"
  },
  {
    "url": "assets/js/48.15b8bf2c.js",
    "revision": "45dbbd539ac2e72f7b0ae6451207bcdb"
  },
  {
    "url": "assets/js/49.795ab859.js",
    "revision": "91f6a225d0e3f73a5ba6ee9c7980243c"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.84c610ca.js",
    "revision": "4fa9cd477d92c58d42db32d4f5a4cf8f"
  },
  {
    "url": "assets/js/51.eac6ddb8.js",
    "revision": "3ceb18526079383d3183adb47d27ef4e"
  },
  {
    "url": "assets/js/52.1f493f4b.js",
    "revision": "9efcd6d1bb9ccd09a24501c6e5072176"
  },
  {
    "url": "assets/js/53.33d4d689.js",
    "revision": "aa374f338275fe82edc59cff42bb72a5"
  },
  {
    "url": "assets/js/54.59468080.js",
    "revision": "496cc8eb95ce852699ab365c24b42936"
  },
  {
    "url": "assets/js/55.ba6108a5.js",
    "revision": "c18c691cbba278761ebc20a21536c409"
  },
  {
    "url": "assets/js/56.6d2734a8.js",
    "revision": "e7d35b4d097eaee0f7b970ea733be813"
  },
  {
    "url": "assets/js/57.2a307d18.js",
    "revision": "80158f88d1e0787e576fbe8e82d0b008"
  },
  {
    "url": "assets/js/58.e3e0d423.js",
    "revision": "0b6fcb45a4220eb5266ea561e6b40e0f"
  },
  {
    "url": "assets/js/59.6e8f70c2.js",
    "revision": "e1adf202fef5462920a766f7c6f563c8"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
  },
  {
    "url": "assets/js/60.ba8df85d.js",
    "revision": "dff4ee9eb037da07e1be62dfae6d622f"
  },
  {
    "url": "assets/js/61.64a9258d.js",
    "revision": "741901a15541142728a29b3876f48cca"
  },
  {
    "url": "assets/js/62.9f1cc6ae.js",
    "revision": "ebd99993b3f4ab028efbc410f38001a8"
  },
  {
    "url": "assets/js/7.09f5704b.js",
    "revision": "f62ce6fcb2caf0926c559fe2cc5a9b21"
  },
  {
    "url": "assets/js/8.f448fe9c.js",
    "revision": "14956e0180e097f09f7c3164127b420d"
  },
  {
    "url": "assets/js/9.e6da8299.js",
    "revision": "f989940a6428b11f4f072b163b027e21"
  },
  {
    "url": "assets/js/app.33f12252.js",
    "revision": "53dfcc3f333f87f9c0b513b76fa4c8a5"
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
    "revision": "93788dfa540f116cce5a6e81022140d4"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "4301f961e0c35d31f81cd1a43d411efe"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "d57f0ff838046a63a1e798b3a482fd1f"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "374400847a80cf3ad106880cc514ebf7"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "14c16796d57f5d3afeb08897addb52d3"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "cf939d87837c887cdc9d3b40c9a54f00"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "863feed9a143c1eff0e5bcccbb84446f"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "83ea40b9236b21b8615b60abc549f7a6"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "9a158e670e688c95dcf0aa5da32cfec7"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "5f3a1ffcc00181d827cafb5af425c982"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "5105dfd49496fb25bf8fa9590b714abc"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ce940e0e0cd01ce2617754315d4e54bd"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "4e0bb1835298397f2326cda59862842b"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "2912b17a97acd3cfead5913ed92f5f38"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "3d054b5064513efb0fecdcc4a16b4d0d"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "8305cd0662caa5aae6b2b50ce4516a2d"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "7bb0cac21e13cab45518adf883407934"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "0550190a0f20c29e28c21e92f594688e"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "ef406cd81cc3f299f8e910ce1b8801a0"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "b78ac1f4f2ca1788151ab40eef8c9bda"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "769c0cd5e8360af7d947aa27591b7a0d"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "a2d966ef03c4778687a2efbb040abadc"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "54e983f6a995e03cfba7286e9b9c36d7"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "d5abef49a8e834c0df0e848b7c4b4a48"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "082291b77c5831f9c4d46e8bd754fee2"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "e88c199b2238c101bbf5303ac3c447f8"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "3d879d0106649b221c8161798eca4b89"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "94431a7b3d6249dcf369a7f15694046e"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "42321720a96d51604c0273c5c41c634d"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "f6fecfad782f4634b41f1a07eef9522b"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "3c4638e810d4cc0c1500514394beda24"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "68580961f489f485f660246dc3a81904"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "9251c0adcdac5c5c63dfc74e0fcb4b51"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "82598c6a03b6e1d99e1346cc877b21d5"
  },
  {
    "url": "categories/index.html",
    "revision": "28d323f1e9be63cf61774b013b4cfb73"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "2d8463c8a396d0ce2c1cb1b52c562445"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "2796410a91cf36f8d4d1c1f4ec431c1e"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "578f7f29cc031666e1336a9dad8434dd"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "5c090d4cc315ee41d4f12549722aa318"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "1915978fa527bdfa49cce900821cd4b3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "947b75da7e8b22f5495157ecb0e95aa9"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "f34b7384b4bf5986d88798c11332a7f1"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "fd4306480f4ccf1869a39db6a9fe7e3b"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "4c5968e4c6e4049f50a4277e03fe9ab9"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "8ccbc75f7357a3bdaacf350e18963e45"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "69acb51e22bb6c7cd22e3255016c4542"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "7b22edf27b1d4ddc8dfd0afcbfe60f8b"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "ab1585bef1da9d4fff87acd08fad7769"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "8187767d6839ae3bf7903c0978a607c5"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "82b58c8b68f540201e9af2c528545021"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "12eb30f38c7229ec80d005e12dd1f00d"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "d4c63a250b11cf9d9d40009b4a092e51"
  },
  {
    "url": "ios/index.html",
    "revision": "de32ac9e2e1503b2062d0c6118159777"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "cb4032abcc03de42f7a72a05d5678cfd"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "76d4628f5943e095d33f34f74c3964dd"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "51927a76ef82a3f7842f3c50de0001d1"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "331665782769eafa793e6f58ac40076e"
  },
  {
    "url": "tag/index.html",
    "revision": "9d3aa7a241d633fec074e09c9d9cd15c"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "a66f47c17867b1f1809c572a2cd4ce64"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "540f57e4332f52f67801bdea2091c244"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "ebc4d4bb5f1d2d65b82f3e096a5a44e4"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "b55dec49c7459947e996b969200be655"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "fbf14b901d9fec8e894a17c5e6987000"
  },
  {
    "url": "timeline/index.html",
    "revision": "05325c0d0af4cb39b978157677cbd3b5"
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
