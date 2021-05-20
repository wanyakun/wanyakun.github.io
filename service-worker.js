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
    "revision": "945950a6a47a1f062fd49dbecbfb7083"
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
    "url": "assets/js/52.3ffcc07b.js",
    "revision": "56c9cd5559a011fdf277d0e24770b387"
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
    "url": "assets/js/app.e04dbc6b.js",
    "revision": "240eb1cf7b87923b6ffd71a6de2e0924"
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
    "revision": "e1c055b399a336fba63701bcc7979b52"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "754df08a183b9ce494af9ea2679c9a68"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "52404ed1228ea61b5959c6d802488da3"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "882d890d98e3773f56ceb64efbe9c6c6"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "a7ac223cff5facff524afe2ab2e4a577"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "1a2c2935f5ddec0ef4a9164a085966b2"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "1340e72af187cf0b6e03b468bc2a048d"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "6e7399dbdb1057397875d966c5c775d5"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "f78c6e08d5b74100cff39379c51bd4ca"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "06fb3a35c1375498127bb42ebb282fbd"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "4d57af3f1880e952cfe71f73db716751"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "a2a95842c0397a0f48ddf2c8ec3d7dd1"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "7609a416ee2e223393d5ee4d8460f696"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "05da7a408226824655acd993214504fb"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "8bcc4383ea6761176ad8fd3f82673c39"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "e05213b9fd6e94d917ea5d54871cfdfb"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "99a09933acac8e48e062a3404dd19fae"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "d2ec3b3e95a144c232e4ba82f7a7374e"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "4696a047a0025b426c034a2a8510d13a"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "1cd207bdfb6d981ee8f3071b73dadbbb"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "edf98bb6f1ce6db43d2149774dc0fe6e"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "b32dac9c8c154fc17541c00b7737037b"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "b46b4b566b563db00320b8efae0ab03d"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "7df6c661491e7301bfd86a4c85bded0b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "7a3d49a12df2760bd43a4fb8ad185372"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "ccfbadc34cc19153a46a2b68492347d5"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "f0adce51c6e226ccdcaecff6db1e6008"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "91f925d33a451cb24580cc95ae58e190"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "9aeb13bc9760ca617639fdd05e8f58ad"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "8cc5b38d8bb041850297a7f6a61bb182"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "7881d41d91e6e50048c24953eca65607"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "7a501c717b7ce7fe82305b5fa751cd63"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "4da3d5949d2bd5f984b30535c5ed3d41"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "070d1092fa6d4123e39a46ab099c757a"
  },
  {
    "url": "categories/index.html",
    "revision": "532530e4f60426876eee7126de9da0e0"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "634968f72ab07cc37efcd170a288af4c"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "0563e6bd3130abd3b41acea788379003"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "60ba42e5360b99c380f33f20e6df177d"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "4e24d1b3225bec9a74576da8c3a7ab8d"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "430c2aa2b5f5285b53112f80dbe133ef"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d64ad56b4f1c1fc4ed39d665979ccb4f"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "3425acdac8d8364631b53e4cc5d52e01"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "3e4efabef378f8af150f6dd11e45ce08"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "5601b99085a09bb1d8660b97bb863ca3"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "361edaed0c45695f93fe56ad2601ad5e"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "ccdb2aa29da2bcfea350e997adf6e776"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "1d36751b3fb65c4c9978eca2b283d675"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "1a5c29540b62559085be2ffccf135a80"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "cf4095f4fb65b547b32031f1d298fd44"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "db1c28e49c4b26d77cda66c61d49c3d5"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "2c6c31f082730e4e690cfe099e46705f"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "fdc440b9ef6097347181d1f7f0dad074"
  },
  {
    "url": "ios/index.html",
    "revision": "4360f79379df3d29c25ba8058cdfd5e8"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "aacb6946e8bd7b43472d40879db21f83"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "6c1ee8ad9c447e464a9846775bf27285"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "da25e8283313a977770db01663b7308d"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "5968b0bde67f0694a141ccdc3a0bd3d6"
  },
  {
    "url": "tag/index.html",
    "revision": "b64c640198daa5a1366b6e50156bacc0"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "67105a1656148cde36d9c90d7af810ad"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "4e93740e494d5f28a6e4d77c687da7ff"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "807367f97eb57499ba9033b3e6b44577"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "21d9cf2e1863cfbb122d208985766175"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "6227d1706fad2c0f43c533eaba2a44dc"
  },
  {
    "url": "timeline/index.html",
    "revision": "7eb1f3cbbc4d2eb191f9cc23ce216d7c"
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
