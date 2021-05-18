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
    "revision": "dba9eeedcade838bfd13cbceb2ec0aab"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
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
    "url": "assets/js/11.e4619243.js",
    "revision": "e62726258ce2726db228c9781195be98"
  },
  {
    "url": "assets/js/12.4bfe85e1.js",
    "revision": "e22b35d3b5b158cb4eeb105793d08112"
  },
  {
    "url": "assets/js/13.0477179e.js",
    "revision": "cc5a07d7a8c5d17c954d996430b395df"
  },
  {
    "url": "assets/js/14.7aacbe9b.js",
    "revision": "a3a469dca52e4e844b21d09c4f468f61"
  },
  {
    "url": "assets/js/15.717c7e00.js",
    "revision": "d6c21eb62956640594d9cc28a1e6ac64"
  },
  {
    "url": "assets/js/16.089ea69a.js",
    "revision": "bdf81c8851a41fe713f30dbc08d661a1"
  },
  {
    "url": "assets/js/17.b38be980.js",
    "revision": "2e62837ad74240ebd5b1b90aed66ff82"
  },
  {
    "url": "assets/js/18.7954498b.js",
    "revision": "107f034c1e27f778453aaf5f66886f4c"
  },
  {
    "url": "assets/js/19.ae882529.js",
    "revision": "6dab2c1935424288f7b96987a878c3a7"
  },
  {
    "url": "assets/js/20.87ebee7f.js",
    "revision": "4a55e10a261e53bef6432db6c1662752"
  },
  {
    "url": "assets/js/21.2834c2d6.js",
    "revision": "bdad37a3afa4d7bb292c88d8686ea1ac"
  },
  {
    "url": "assets/js/22.10a26a85.js",
    "revision": "ba7ecc679450bc9030f97e9f5e590ec9"
  },
  {
    "url": "assets/js/23.3f612920.js",
    "revision": "ebc6ddffbf3984ce14d728ef7bbca7d7"
  },
  {
    "url": "assets/js/24.7ab6c0fe.js",
    "revision": "88674a5089f570a3dbc92480e36a77c8"
  },
  {
    "url": "assets/js/25.4176fa40.js",
    "revision": "1a6a32617b01d5c4a4f77865d801e42d"
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
    "url": "assets/js/28.90eeccbc.js",
    "revision": "c381218ccbed0e69dd2c03f3968c0fdf"
  },
  {
    "url": "assets/js/29.7e618a94.js",
    "revision": "c7d987d2503755b5c1c64030ddc46a31"
  },
  {
    "url": "assets/js/3.45fd2d9d.js",
    "revision": "23c2981647a4d5391bf9ffb3f1a995f3"
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
    "url": "assets/js/32.241de0e1.js",
    "revision": "8b2e379a2e700d5ec8f86350775c69aa"
  },
  {
    "url": "assets/js/33.2867f6b6.js",
    "revision": "c18e061aa37c5f813b22fa1b70b76e4b"
  },
  {
    "url": "assets/js/34.a00f2eee.js",
    "revision": "fbea6f2d4ea8c19aac7c2b7f986e4872"
  },
  {
    "url": "assets/js/35.5aa95a18.js",
    "revision": "297e51d4b05ec62b3d6ebe4dda1577a3"
  },
  {
    "url": "assets/js/36.21d3c30d.js",
    "revision": "e617fc8ebb2f4e5927f8efcde8fb52f7"
  },
  {
    "url": "assets/js/37.75798187.js",
    "revision": "b34aee2a10807fe4907e79b74b167214"
  },
  {
    "url": "assets/js/38.a2c44e51.js",
    "revision": "b4f185b2f2338abb5afdd956d21b19a1"
  },
  {
    "url": "assets/js/39.667c5f4f.js",
    "revision": "17431491597fe9e7bea590080b9f7081"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.b7da1782.js",
    "revision": "1afd86ceb06e813f6a370bf9d38b910c"
  },
  {
    "url": "assets/js/41.000e1d46.js",
    "revision": "a662fb40aadf7503f832d94e3012ec0c"
  },
  {
    "url": "assets/js/42.bcd3d720.js",
    "revision": "1b2045d3d8780aafb5281ad109de2619"
  },
  {
    "url": "assets/js/43.d492c200.js",
    "revision": "5bc81bcbf2d4f4e30d0aadeba60d1711"
  },
  {
    "url": "assets/js/44.6dfdb713.js",
    "revision": "5cfdadae531e86ca085cc5d4b77b1e7f"
  },
  {
    "url": "assets/js/45.39024a11.js",
    "revision": "c194282b5347eb81850c9569fb90fd1e"
  },
  {
    "url": "assets/js/46.dfad99b8.js",
    "revision": "cd70b1ec695ac6e800dd645e87211274"
  },
  {
    "url": "assets/js/47.d601d30f.js",
    "revision": "caf5808f5ba045581892e8929b4c0acb"
  },
  {
    "url": "assets/js/48.177c8c1f.js",
    "revision": "3f8ecd624db6438acc07fce49bd4e1d9"
  },
  {
    "url": "assets/js/49.90946938.js",
    "revision": "2d3fbf2e77233a50023d727f815b3ccc"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.f34c8f90.js",
    "revision": "30217e2ed45825943b09909f20149046"
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
    "url": "assets/js/9.22f4f37c.js",
    "revision": "d36e224a9f60ea03d6f4fd7ebe816910"
  },
  {
    "url": "assets/js/app.b99fe040.js",
    "revision": "7519e6c4af19ec64abbe65397e353f5a"
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
    "revision": "b9c6a32b929b61ddc60a162549cb20cc"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "2d841b0b72e3d3e9ea8dea5784b3de0e"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "f16cc79d575c175031e34f472653fa4f"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "3a7aa60e79f6f2e26cb83674e7bd9c6b"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "56475f3f345638729bce7387d8d1044f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "222f30a5a012b0ceeed9a478fdb0d828"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "c3f5a93657cc0317123772d84424a051"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "2298a07eaebe5eeced765dedcbeb8578"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "f616f2aebad9b00963577aa43ee9a5a7"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "d880098f699d3ae51b886ee9ea26b1e0"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "2edfb1d0017231b3e92531a970966065"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ff9bdf022c705213a5b3e00cb50d3def"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "5c041909ea8338f35800c15ec22c2123"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "7231aa7d9843551e2464800ba9018841"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "6c8f611c23d9636187f0f219c542b4e9"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "3fb73aaaf4cea4853e59f33f22d58cd5"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "1c60bd22f6032ce14ee4d5b6e973e8ca"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "b6695193c82d108a8cc600023f62791c"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "5f07ad544ca6a64d3837758cc1e77f76"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "7b7820599e9262efc6efd581d8d1356f"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "05a8ed03548d3782c79445d17ccbeb41"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "df365714bf27b898ad12d9e63aa47d05"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "055f856223edca28198adf4901c3e85d"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "4f4e0382464255cfa54c21c4cd7f7620"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "aae02addbd02912890cfef7b7ff19aad"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "9bcfabeb59ff48af99f4dbbb5a0e3eaa"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "cf50ae15c6b6b44d92b15ab1e95a6cf9"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d0dd4197b62092ac3cbdb00a6c5465d7"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "f4c32ae7b3371220c4916fe3250e0b68"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "a718dfeea2ab8441e017fb42fe33e8bd"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "f1ced4ef5a179e02bf988c86525401e3"
  },
  {
    "url": "categories/index.html",
    "revision": "972c3064af6bc61e79c9fcefe870ffc8"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "3e03c7b33cc4d9c75ae62534c7214854"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "790aaa7f07d0f2ec970574e6a8d0aedc"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e77bc10e77926df2cf72d8416074e524"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "d5c0aaa1b5b77ff60784b4799c679074"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "ccec6880eda9f51e39678807b5b30df8"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b4153fe129d4f76bc949930a8d07966f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "a79a08e92f34a532161dd0f59f7f0356"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "4c5f984374927dd77593023e94900c88"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "b87f8b497345e263c790b62a403f5623"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "4c3e96c33cff4b6eacf6a2e227bb62aa"
  },
  {
    "url": "notes/index.html",
    "revision": "9ef39139043e913b37e24a95286868b4"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "c385a964f77cd184c5a39a9e3ed8c933"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "c2f46709c5311103d3c39f58927f5fef"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "2beb44886d393f4ee15ca3a3b06bda77"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "dee2045fd4010a711aebdca481999302"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "d47cad3476d459aafde4d3628f379b93"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "144475b3700cc4e0e67de94f52b61a4c"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "0bbd7f34a22a7bd9728501484ced03a0"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "a293657dfa83f77d4b5cbddcc78887b0"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "689c0c4c58f3bfdb29ebf7620dd8eb07"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "41876f337fb4e74ae7b21e979ac0108c"
  },
  {
    "url": "tag/index.html",
    "revision": "ae723e1b8f3bfa03693dfab4946b1d93"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "ffc19926d8ff47de75b2c7e03ddeda6d"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "3fae218e3710e4145181a1d9fc444ec8"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "88f17b209e5b4438819250a8a2d1a973"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "dffc43fc5d527909a25690b7faf7f68f"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "86609b4b0a28ae61edef871ded0cb8fe"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "525dea19e3fa628c0e5026dd23a9c9d3"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "ab59ecc5e73780101a729fbb5ccd9960"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "e68bc3594106617a0893a99a1104467f"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "221296d1a3528ae6d1cc604cf486acff"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "1e7276d46350aba6f31b52f11f2a022a"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "a37a16c3d08be0d7d865f70bec85b1e1"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "616f09cc3f986c54f0448eace3cc902b"
  },
  {
    "url": "timeline/index.html",
    "revision": "551151c5012bc0b3c6aa95a7d0203e38"
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
