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
    "revision": "2a095a6b1d2fd8c576ec2807a91e2f76"
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
    "url": "assets/js/app.9fb0a6c1.js",
    "revision": "be7dd23a0e95365967947e9023484100"
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
    "revision": "a9ec40b996b55da7575da494cef7afcb"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "33316374f23a56b98dedeeff646bcf64"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "a97397ec02d1508e954664801170f957"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "9d1f0063bcc84ab87643e3c05abd0740"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "1a2b894e54bae5df9a6a1282dbad99ff"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "d0d80af9a9d0204b9b3315898233ec47"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "b5c700881d4083f51bdbcde4c5034fa9"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "6f0bc6cc71ce316bea4a98457de0a34c"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "ac436094fe25aef6a02e6c3cece05e2e"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "6b23cf08e01df30ce7fcf452032e151f"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "e19996b5c56aac9508cc4334b57613e7"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "44ccbcbf2faa54dd540633c69c9f86ad"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "d9e127bc29b20e755aeee74e89c75a8b"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "5549f9d3b8c585bbec2321d349b74678"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "0941b86e6df2211fa1470af9eb0e9d7b"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "fdd5cb61c492c97938c199f298fe3a0f"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "8a593c307cd4a2b470b5d2768ec2ba5e"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "5a634d3ad06f75488a0e31550b817ead"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "43d217f033e0a8f087b831d282a6e823"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "3bdb9810be49dfbed1529c665b3916db"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "aba10e823cd6fcc0f8484a1a3b2a975d"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "6c2d6cd44a71d5564a3dbec2ee4931da"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "8f5f9a66332846b8570cb9011b23a5a8"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "c4484032f5e0d7732022239700c40709"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "85b1b4b8d45977931dfc3ffe1640c276"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "86063445e4ab87e57b2380ed0f914814"
  },
  {
    "url": "categories/index.html",
    "revision": "f20449b4962ad78cbbab2503aacdd6f5"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "14ef31fbddebc64074d8748550247b4a"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "01c6ab696fea545658fb5df41317a625"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "6cc6bb0ed1fd21842c1fd76189d94d9a"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "a78b42be4d0da73b8bfb0665e5454617"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "7e5394181f21fcdb2f7bc413011ba31a"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "080f5bc5a67409170e1c121d1f4f9d22"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "0902efff34e860a6550201d33d084791"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "8d43a3e14e7cc381fbd6bb4b31ba2a59"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "9552c0d53c2b450019e51f4561e77f9f"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "9703dc00e130e6c9560f7a6d51773939"
  },
  {
    "url": "notes/index.html",
    "revision": "9d127376009a93f2f1e33117dc497022"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "c76d3a57c98419350046f2640d4b46e7"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "1e3e1ff6ec9e4b728d6eae521ec9f439"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "30e67a1486ad2b3f0835bdfc4602377f"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "1553bf495814bafc38ee80b5c757be95"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "2684b020d60b8754f6d956a38229e5c8"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "d5c6e4ed243bd1f13670ef8342db57cd"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "bef359513969a4e3ddb4610b4618a475"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "3c362b0f7a953fcb076f430be6676362"
  },
  {
    "url": "tag/index.html",
    "revision": "105353b2c9199eae7acc1ede0f3138cc"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "da6c67a25c1277eb938fb23cffe1d73d"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "887fae47a34b4433bf51f9806418c86e"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "54e162364ab25c21fd3aad27de7761dc"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "62c6578878221d4606508ef5b50db1c0"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "b02f84acb79263632ea7736e0de50d7f"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "935578f7c164eea34f4c36e2197bc992"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "71d411676612a141a09088e8ba0bf7a9"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "807abe973387b452818bbf74cf6ebb3a"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "b3e9c3fba8eed592206056c3a6ce1dd0"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "3fc836d5198a4203fd6c787f56c476e6"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "555afbe87c571f92194dcc3720ba9b64"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "73d4c9dfd3d8fb3e61a585be55679a7f"
  },
  {
    "url": "timeline/index.html",
    "revision": "4b59682804bb6bf4fc795805fa477bf7"
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
