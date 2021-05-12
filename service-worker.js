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
    "revision": "7145602e449265bcea049bfb26502f02"
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
    "url": "assets/img/2017/CocoaPods.png",
    "revision": "03b3d8a72e1b663adc4b6f42ecd988bc"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.5fe79815.js",
    "revision": "b76e1e039946defa39780f75118d0314"
  },
  {
    "url": "assets/js/10.37a2f5af.js",
    "revision": "425a10a935cbf75eba5e6954d2aa8347"
  },
  {
    "url": "assets/js/11.2deda18e.js",
    "revision": "ff1e4e7bb96469180d3520e0b9394a67"
  },
  {
    "url": "assets/js/12.a76a2700.js",
    "revision": "52c2a567053f1b0da960f94c2ecdea1f"
  },
  {
    "url": "assets/js/13.e80ecb24.js",
    "revision": "80f8d71fd09187c1f91c45c280b6087e"
  },
  {
    "url": "assets/js/14.19bb8b92.js",
    "revision": "6351275e536b855d9a7757d8f3e532fc"
  },
  {
    "url": "assets/js/15.97c90c7e.js",
    "revision": "e9a31dd3eaa03bff2904ee9e93da84f0"
  },
  {
    "url": "assets/js/16.2b7ee73f.js",
    "revision": "83a00f2b25a2b868a2eefb04c6a02848"
  },
  {
    "url": "assets/js/17.da0bbb3d.js",
    "revision": "8eaa3988620bd39ceff8268131fa213c"
  },
  {
    "url": "assets/js/18.dab7b16c.js",
    "revision": "bae0e48f8244dcb829da0517a4edc9b8"
  },
  {
    "url": "assets/js/19.d7e5413b.js",
    "revision": "1ac025da13eb75e5ab4676cd17cfc40b"
  },
  {
    "url": "assets/js/20.753b475b.js",
    "revision": "639935363e8aa4c82c5dd9a0233c2bc1"
  },
  {
    "url": "assets/js/21.42a718d8.js",
    "revision": "421a889b1792c5191ebd0bb6db67ad5c"
  },
  {
    "url": "assets/js/22.9cdc02e2.js",
    "revision": "440b09d084b155892b2ee09926d78002"
  },
  {
    "url": "assets/js/23.c592f90a.js",
    "revision": "c894565fb8796c973a8b9942f143574e"
  },
  {
    "url": "assets/js/24.517fca0d.js",
    "revision": "fbf0981679dfd456dd969618b0abd333"
  },
  {
    "url": "assets/js/25.9dab25f1.js",
    "revision": "335463020c745d7fb87308f00e1ede41"
  },
  {
    "url": "assets/js/26.8be969a4.js",
    "revision": "7dc89c78a7870017b3b726c143aea6c7"
  },
  {
    "url": "assets/js/27.32331cfd.js",
    "revision": "e4de9c58b958cc187dcff35210e44099"
  },
  {
    "url": "assets/js/28.b45e5f56.js",
    "revision": "03bc2a94060dcf11920d55239ca212cf"
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
    "url": "assets/js/30.67054500.js",
    "revision": "e8995ead59c6663e44e82be9058f4629"
  },
  {
    "url": "assets/js/31.4449fc80.js",
    "revision": "b98e8c4c1df457b57120c43d7ec45b6b"
  },
  {
    "url": "assets/js/32.ded9a273.js",
    "revision": "f1f7b3a33bd798e9708222971163921d"
  },
  {
    "url": "assets/js/33.cff6954d.js",
    "revision": "c00b1e48721cd6037489d9dc1799259d"
  },
  {
    "url": "assets/js/34.46a68e93.js",
    "revision": "685cf981c7503cc8c7599ab0f7bb03c0"
  },
  {
    "url": "assets/js/35.05409272.js",
    "revision": "55217694102b4172d9c04e592777a129"
  },
  {
    "url": "assets/js/36.02e68fc6.js",
    "revision": "dd5dfeb98bc352913f3d7fcd8144f818"
  },
  {
    "url": "assets/js/37.60be6fb8.js",
    "revision": "800c76be700364a563700b9522a06660"
  },
  {
    "url": "assets/js/38.ed52fb40.js",
    "revision": "06c18514ff9229a4f7644a88b57b114f"
  },
  {
    "url": "assets/js/39.570b2c2f.js",
    "revision": "f07c89fe2b62c433d105ecf48287844f"
  },
  {
    "url": "assets/js/4.14a660d9.js",
    "revision": "926e2dee1b9f3db33af628e5b6afa48e"
  },
  {
    "url": "assets/js/40.93476ef3.js",
    "revision": "32d3ee158994bad9dbadd65a022400ca"
  },
  {
    "url": "assets/js/41.154df40e.js",
    "revision": "0670b55b1b93a1d650520ada7661dd2a"
  },
  {
    "url": "assets/js/42.1114b221.js",
    "revision": "46ac4bcd53470b76eef4a48b8d8ea330"
  },
  {
    "url": "assets/js/43.c8fa9752.js",
    "revision": "056b859b185c2b3922477176dd8824ca"
  },
  {
    "url": "assets/js/5.d764b8e6.js",
    "revision": "97c601eb2cb6b9df1b9a3b2fa951404e"
  },
  {
    "url": "assets/js/6.1a073a2f.js",
    "revision": "2d0c2e308cbc0c2a4287e1c8a29729ec"
  },
  {
    "url": "assets/js/7.daa99d20.js",
    "revision": "5ad62373dfcdf855a295b307c33ac35a"
  },
  {
    "url": "assets/js/8.f448fe9c.js",
    "revision": "14956e0180e097f09f7c3164127b420d"
  },
  {
    "url": "assets/js/9.0fc1a5ac.js",
    "revision": "ad145bd20a3d315285d1bd07e82f5056"
  },
  {
    "url": "assets/js/app.bb69720d.js",
    "revision": "03c11c7976ed32211c7b35a0ce714e39"
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
    "revision": "cc7854a7d57701195d69cf7452382fa8"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "48a660d56505295f355bc9e9ec1178e9"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "25c306314f8aabbbd5215164cef6d8d8"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "58fb2552158ab1d8ade2675e251650ad"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "1c6de30bfe9f20a134902cc0906c6957"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "160c8d12895a5d0a29c6b20a8b091a1b"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "88d280ac7b12edbdc48a07b3f1d83d6f"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "771320df9db23e0e473a25dcee18c353"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "84e2286b518cb19b47d50bf9ad1d350f"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "763cac593828e83b5e3e66ede9d5b613"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "ac11d56d42a7fe3055f807f6f4391681"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "cd6947619cb41fc1200b5dc9a0c28e6b"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "9a1d7345aa458d95d943c3a4909ffb7e"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "8345cd75ff2fce390f50c7d5cfcde956"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "02a9246754cebccb9b7756b6fb5d4b3d"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "db9f29da7774f4b80c48707d8775278d"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "995ea01f5191301585d4b89bdb345c74"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "ae8662246f83eefc6f438cbb147a07cb"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "076858a97eede6dc85ae93476d17ba3e"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "85ca1f6ed08a0e0b19cfb2dd90e2a746"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2e12b60d5fb4dfe9c2c424689f8c03ee"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "c423a7a6ae7104ceb3b629952f0c9f35"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "871407ca2bac35bd7030f173fa1deda0"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "d47483c6baa7c74136f590b41aef0a01"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "dbad9404ef3b0006302e48918080cd3c"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "c905362010bbdd4dafcfc25bfdf136c2"
  },
  {
    "url": "categories/index.html",
    "revision": "0245bb977d425cadd6bbebe31e2f7c68"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "6914e4a3379eb913d152bde112a586c9"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "2184197e43a8fc7f2c959906c3635e2b"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "d21c26c12a6346cc4b7d93185ba9b5d5"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "7f879460b3c3cb9b56146c26132d2af0"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "370ebf17a46d94efc4ca230aefd95d9d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b65f2ec2aedb2a7b68431f7d756e6da7"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "540ef5b5aeaeec2be9dc9c4e52651f74"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "03791d2b1ed88b302483e2a88b9aa8ae"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "2b952b16efc916cf616a622e90441222"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "4fd65e50a2395c867ed39cfb6b33b932"
  },
  {
    "url": "notes/index.html",
    "revision": "855145555ee1bee322795ba96d6e682c"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "ffecdb22a817c92472dddce35d5a55c6"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "8b361ef54282080bdf4e7f574b94dedd"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "9994d90394236df52c139b22f3151ec7"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "924f719581b399998a4aec13ec2286b1"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "d02d1d8d1add3840626a41489f2646d2"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "be823981dd08fb02c0b8bbd425da4cad"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "7f1295c62f608248f2fd47af3273450b"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "32f3469296f5d192401f1550568c6b92"
  },
  {
    "url": "tag/index.html",
    "revision": "3a0d22043203f4f2961e5ac21ed73b9d"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "236770727a1385a9172932af203330b0"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "bba70d411a8caac0c94aa898b50003df"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "c161f2376ea71694e0df11211a5e94c7"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "87acae8dcd3925617b1913663533ac5e"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "dafd3d9eeee1952eaf4979143793fc33"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "7b4d4e7f57a22d8ac28fbde113cfb6ff"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "0ca8005df8fc2db55041a17fc294684c"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "be15b54752476097a08fc8647f4a4c85"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "e58dc61907513f424017f79872dd0a2c"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "be458c57d6b99c6be68cc2ba3781a4a0"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "8aee1d4204c4fb7f2da759a3b2f02d19"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "f38102c4ebaee4b01baafc38fc531e4a"
  },
  {
    "url": "timeline/index.html",
    "revision": "aa4f6ffbb1e8c0672e4904a4d75e80a3"
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
