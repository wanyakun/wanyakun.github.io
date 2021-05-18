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
    "revision": "6f2fbd066cda719d36ecfa1952830e3a"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.366b1f35.js",
    "revision": "f9b8d284a4923899865d5df126617ac9"
  },
  {
    "url": "assets/js/10.2f9f2a33.js",
    "revision": "f2f69be4b04eede5028f75d128f906d5"
  },
  {
    "url": "assets/js/11.2b1dd9e6.js",
    "revision": "9c79cff503e1fc234a714e1f4b53572c"
  },
  {
    "url": "assets/js/12.676e8c95.js",
    "revision": "733b8d76038abb07dbbb5de060261bb5"
  },
  {
    "url": "assets/js/13.6aae877a.js",
    "revision": "e7fc0f95f478ea96ff4df953ca2b0dde"
  },
  {
    "url": "assets/js/14.0e1ab2f4.js",
    "revision": "6504264f98cd6467e7c253349f3f4a01"
  },
  {
    "url": "assets/js/15.deeeadbe.js",
    "revision": "71665f1efac3f71b4c019d2b7ddb8f2f"
  },
  {
    "url": "assets/js/16.089ea69a.js",
    "revision": "bdf81c8851a41fe713f30dbc08d661a1"
  },
  {
    "url": "assets/js/17.c5d0fd5b.js",
    "revision": "8d9d6ef166727d7120a0781b44738db9"
  },
  {
    "url": "assets/js/18.370c9b27.js",
    "revision": "0fd1ceb9ceedba4f3ff3c5e851915a1b"
  },
  {
    "url": "assets/js/19.67341682.js",
    "revision": "ffbb689783ce062c6183b8d918737eda"
  },
  {
    "url": "assets/js/20.79bc07e4.js",
    "revision": "964ebef4d9720b6abe8aed1f223438ed"
  },
  {
    "url": "assets/js/21.0b857c02.js",
    "revision": "636bd97e0b9b3330dc8d19b2cd90919d"
  },
  {
    "url": "assets/js/22.526bea5a.js",
    "revision": "72799227c01ba23f688dc3d39798bcba"
  },
  {
    "url": "assets/js/23.d46cd946.js",
    "revision": "21cc3ad816c3300e3eea9bf1a1db83c3"
  },
  {
    "url": "assets/js/24.e92df099.js",
    "revision": "63ef026bdaa4bb1fb7a0cb9f11d8d314"
  },
  {
    "url": "assets/js/25.6c78a6e6.js",
    "revision": "f18e318186559ab95acdf1567b121e1b"
  },
  {
    "url": "assets/js/26.9bfd9a96.js",
    "revision": "77c75bffa22077769fbb682516a3643a"
  },
  {
    "url": "assets/js/27.222b2570.js",
    "revision": "6e5fbfbe64cd20f90953ea5a88708387"
  },
  {
    "url": "assets/js/28.18607357.js",
    "revision": "540a932774eff09cdb2e1b7fa947582c"
  },
  {
    "url": "assets/js/29.7e618a94.js",
    "revision": "c7d987d2503755b5c1c64030ddc46a31"
  },
  {
    "url": "assets/js/3.f98d8e46.js",
    "revision": "6587fa598204a0b7cc21b80c0cf8d4d4"
  },
  {
    "url": "assets/js/30.6f41f354.js",
    "revision": "104d7673065288e8359420fd35c88ec3"
  },
  {
    "url": "assets/js/31.9ecfcb81.js",
    "revision": "f17bf432e76a2bb09120ac0bfb8deb6c"
  },
  {
    "url": "assets/js/32.563afb93.js",
    "revision": "ed1776aeb028ff77eaad2409ba685fe2"
  },
  {
    "url": "assets/js/33.1b4ea882.js",
    "revision": "3715ef34066d558ee6f5dad43400fb79"
  },
  {
    "url": "assets/js/34.df7b2e1b.js",
    "revision": "6f1ca01d5b11c43fbffa7262f1db7905"
  },
  {
    "url": "assets/js/35.5ef0c75e.js",
    "revision": "d05167893bfac1de0941533faece2ddd"
  },
  {
    "url": "assets/js/36.1a717566.js",
    "revision": "1e65542bb31f4b4d17122693363cab99"
  },
  {
    "url": "assets/js/37.05102d25.js",
    "revision": "b62c9dac59a0f611e6f44c3db0134425"
  },
  {
    "url": "assets/js/38.8a7786f5.js",
    "revision": "6aaf538338a40e9a5fde6e6eb6462054"
  },
  {
    "url": "assets/js/39.22d5d963.js",
    "revision": "e41fef2fd4ca7df4d754aac875b2f8b7"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.0188f536.js",
    "revision": "5119f7efaa75600fd2c969dcdf5b3231"
  },
  {
    "url": "assets/js/41.000e1d46.js",
    "revision": "a662fb40aadf7503f832d94e3012ec0c"
  },
  {
    "url": "assets/js/42.b255bc0a.js",
    "revision": "00c86166f2d6ca930ee1afcaac48c614"
  },
  {
    "url": "assets/js/43.357fe2c4.js",
    "revision": "6a653151895b0b65dfc162b1a73d2798"
  },
  {
    "url": "assets/js/44.c8d1b482.js",
    "revision": "f7d0581fc0e6bae18fa98a3eedf0a868"
  },
  {
    "url": "assets/js/45.b2213d0a.js",
    "revision": "52af0f2c8eb1141266773ffe78d8d47f"
  },
  {
    "url": "assets/js/46.6bde8ab7.js",
    "revision": "cd70b1ec695ac6e800dd645e87211274"
  },
  {
    "url": "assets/js/47.a93390e5.js",
    "revision": "e29f74529d5a20fa16a9bb61f6c657c7"
  },
  {
    "url": "assets/js/48.f5e51e34.js",
    "revision": "69dbd9d1a2d45d6aab7f6fe3500ecf9b"
  },
  {
    "url": "assets/js/49.19196990.js",
    "revision": "b3cae849d08d1fb6aabfdcba49433a64"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.73e1b109.js",
    "revision": "5d2f1f9c34921347e930f556b947d2d3"
  },
  {
    "url": "assets/js/51.846c72df.js",
    "revision": "28dad51c2bddb32403b3bc5fd329a2ad"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
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
    "url": "assets/js/app.ece8bd61.js",
    "revision": "b595b79bb0e2eb84587ad4d236a39f11"
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
    "revision": "d128b126fc54d78ff08473b19c7dce2e"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "29624b6502dab1f92cf824e5bade426f"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "b860c0eaecfc8be94fc81687ccf079f1"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "8e4115786e243333088863abd0021650"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "10b7bf49e504d11a939cc431c44aeb47"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "cb8b2c64fad6c9906f1f1420408f375e"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "e4e902811c4ce44bf27562d9d3d3e246"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "5844fe5b5e7233553652db2692eca1df"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "c9c90a0969e9ae21b6db0d58d1ddd151"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "691da4469da8837578487214077fe599"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "4c2770f0950447f15e9fbafaece9dd62"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "2556dbae09f0228ad930aa7009b1eb0d"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "471b0e4b5fe3960d935bab445356fb59"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "0b255bb3ab72d142726aba0d23df01aa"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "d81e87d3dd242528c2d75bb05ed5739c"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "f9da41b1a8d99a66ceb0043d75958bf6"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "631ddf68d5bda87226246c0dd373af70"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "a268f6349595bc2b294a04a7a553ad33"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "bbd7f78a4a0a4837318640141c733d0d"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "6432fdb28801a38a9c9a33f120bc9798"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "33a4f38646d62f393837ed91c2f9de1f"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "688d53ccd30f16fc82bad326341e265a"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "dfa5eeb7b2ad1f8b25dedec72fe8df8b"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "c070412af42d237d4d2090676f1ea3a7"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "415d3bbabb6ccdd421cfd709ea1b69b1"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "4ef34fcf8633ba9ca7134e9cae205bd1"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "52805f265fa77dc24b6d2c907943ff84"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "469c9b42e83cd81e2bf7c698d92a51c1"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "d50035dfcc8402b0233a14a816c2a87e"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "a9f2477f1f9080a6f1fcdfac41c6b3e6"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "e139410aff92a758ce2bd41067bf3bb5"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "f9f3d56b823863338f46e4c756a3118f"
  },
  {
    "url": "categories/index.html",
    "revision": "b8f96ff281c3b0864b5b9fb109727813"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "09b233bcf8c16c241764151f1e8e9c2c"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "aefcdaec47eeb9c8e759144282b6adda"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "461c2c1b1c9a49396400b9c2a711ed31"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "7f1a5abd87df58923261bcad87cdfe06"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "d356bf69b21b0a799c816196b9a0e68d"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "9d0c8e9d8554089622d6bd36deb37f69"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "8cfdef2dddba4001149646a4f819dd22"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "fb3be95be5f463f18d93b30df8c151f6"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "8df6bf517f7ff34f8493fa65fafd50ee"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "3eaddd638d2d8f644ef15522d5d482e7"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "92eb26dcdc16abfcf35794b9b476459c"
  },
  {
    "url": "notes/index.html",
    "revision": "848a0912346ba1b2587281265fb9c881"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "b88a756663afa012d9e4b25a3f43cc67"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "503067e0e8e7052aeecd9e777c941be6"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "ace6055765d7e6f79a0a92e9023735e4"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "fee5048bd194ec31e11684e0e145a964"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "9d357c5ba4627b8059d97fc7d93015f9"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "d0a25a281943891bef9d034407fe333b"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "adad538c9a899d1a228f3495e95a92e5"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "1fd9206a1e0ca507d97cda0716d9c6b4"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "5b70399464fdae3f7ab17bc4c76eb18c"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "fd73bf43a7be8f3f32f5d98699568908"
  },
  {
    "url": "tag/index.html",
    "revision": "f9f5b083c2a0b26dda35e24c8c57587b"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "ebd7a990b4b7ef335ffc5a69e667885a"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "99c94a45d5c59cbf131e99bf82ab82ca"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "465c0ef657158bdc2d3c58ba9aebf2f4"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "857672076dcadd12ae400db4140adee1"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "db94bf4de3d4872fc8eff0e54c518a44"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "eca4212b401a57c5bb2f2f141df1d8cd"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "8c841e43320b74d63a822bd10fccfbc8"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "a4222ccae59cb215b452d8176669524a"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "7a149221bda95d6427dd7197e640abfc"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "b2f985ea8861593f971271a418a41be0"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "c127ace0d9222eb139715c49fb9c72ee"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "63668266d94261bfc549fb11b75bca65"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "f4ab38ac4b203958a4f733e12f192413"
  },
  {
    "url": "timeline/index.html",
    "revision": "73652ac8d034be86a2650cf67483ebfc"
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
