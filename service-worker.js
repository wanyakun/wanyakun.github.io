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
    "revision": "b8d2906b872bffab2dab9662c908cfa8"
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
    "url": "assets/js/45.f58d89ce.js",
    "revision": "12a5419c118f5bf45d45497e425db92e"
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
    "url": "assets/js/53.bac75513.js",
    "revision": "f23b7ef9a0a6e362e5450661091b7695"
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
    "url": "assets/js/app.9651b2ed.js",
    "revision": "e601391d2528775a50f2323494c720c3"
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
    "revision": "d3869c4c23d36887ccd92892b5c09c69"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "6ff4323259cf092116a984cc27642a00"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "720a543e84674cedb140540130ccc72b"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "1ac3bf0466a235b7cf95738ff2d9d3f9"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "15c01c2638410dcff523f831bbf4ecb6"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "1e2e3e5ca16ab397e8df75cf9793adc2"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "5e0d54e341aa5b8227d3ee4d081524ea"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "08e2fd7ea69660639d9c82c78e87741f"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "a5554f6258129775cfa6c6487f14bc61"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "0db31bb232ef7e9b218bdd5a934d219d"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "5b0ad286d7112783f2fe334dcf1270ee"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "9fc979fe06e762c41568c402dc3eb5df"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "8aa8d9a093550048ec6a353b1f0ed48e"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "822132520d3a5edfa1735c4ae63c300a"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "de9acb595bcb6d542ca533085cc95d06"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "9b72541d5df4cee2dcac98e0728ae249"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "7201b27f8074f3b8aaad46920c720286"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "1f6057f16bf61448a4449c7508a64448"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "5d18fd44e3944d1b08e6b6b5a955c60d"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "6619bbd99258272e7753d71b1ce3bb7a"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "99fb602c1e9f649581244ea758c8212f"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "a5836d9ec0f7d883a082f577f3688ecb"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "6a3b5dfac61c4968022339469c596293"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "2e8f4dc9b8fbcf012b918809f1ab8f86"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "e3a66c6a71181578fe4ef0cfc769c80c"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "c95dbcc30d57274c3a71e43b66bc74da"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "e3abf6d6cb29c89779963180bd7b8ae7"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d95d8eff84b7facf2510e38217e4ad05"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "7c472e19f67d4ac353f9a75b5ebb658d"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "08ec8d1211bb075a630a791faa697f38"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "7d7b966d37b891c3d2e41544dff5440e"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "429d3f7e58368c0b446394a11cf7aede"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "b2e2bd72a783bf91d27068e4e3156f24"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "39b35f0ba452f591c386d94882d0f405"
  },
  {
    "url": "categories/index.html",
    "revision": "64a9d8582d33256b4a2a3d974fd23589"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "5c037d79b24ac051fe3938ea59beb3b1"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "ed69735b3326a2368aa7d8db4e20ca4f"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "608316116fd67af2e326d764cdb09fde"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "3fb33c783fe9fd843f3c8cab446c0581"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "11ffcccad626fae4f6cd506f251a0792"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1e96d24757400c7612520e205f1799dd"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "3b4e3b366b71f9e77ee784b1f62a0af8"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "8e9fe1bfa7cf468c6a0fd0096741842f"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "0780243171ef64bfb5502a82c78b4176"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "b4a98f43a7193358c1e00b1f6a7385c7"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "c01f8517e37faadd50da8e5c412c8e44"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "0840d6adc90a9a3548dc1581961b2b1a"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "e65497899628c55c2381ba5e89a0e7a3"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "b67621ff3ffce27262949ae4b2904761"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "d7a90c8343318b716f0cc5e0bc5b07bb"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "d61f85cff4c647b589068f57ee958fd2"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "38799a8e8201693cf4b1644f2a83a73c"
  },
  {
    "url": "ios/index.html",
    "revision": "12f5620ee1fbeefe9e0794dd013a7a5b"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "5d404a192237869938f9f89f35de9907"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "4e65db02dcc5d19eb6aee3ca399fdaea"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "10ac280e73bf8ee7c8d6249ed381f4b4"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "c6d458843182dd97604656744cd52dae"
  },
  {
    "url": "tag/index.html",
    "revision": "6fd6f1274fb0ecceba9fa42040b3b3a9"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "d5afe460906135bb9ed47115189ace63"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "0029be97f20ea63a1dbd82b1b8b7fae1"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "7db850d69215b07c5488cf1e1668cc03"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "4744eec2e4f80be8b7b565bed02eaf09"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "0d495bc4d83112177c26a858d1cffb7f"
  },
  {
    "url": "timeline/index.html",
    "revision": "d5d4431a93c85a6a449875ad92b84123"
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
