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
    "revision": "e0ee7e9a55e5bf02f214d6dd11badc39"
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
    "url": "assets/js/app.6adc412b.js",
    "revision": "0d13d4fc580f55abc009c0cb8f1d92ab"
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
    "revision": "c6eaac683cf09eb083b3f48fcb034c09"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "c9cb864c400d7023394dfeaf6a694cc3"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "96c28f8597589d130c3840cba39dc768"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "3121cb8e52cb77054b38403a1f6f5942"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "63f3b28dab384c8a9457a862c2e409e5"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "f900f20d16059c5fe1100500183b1329"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "ef051dceeb6a0d2c527113dad9ffad2e"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "1f5a396c9256305427172759f5d72922"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "fffb29b7d8693787b98aaf68d2a59130"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "395d24c37ca3dfddc84fc8acf4ee2432"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "d181ec9283d6daf5541834fed3309c5a"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "8d22a9c581db909ec2fb31cadb2d3bdd"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "2834bf196612f6f587127fb208d615de"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "073419f7ed930b41d90a74ba836364b6"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "ba848e76963bf1b9c5655a479ef83958"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "c25b1e766129387b1a41f40d4998155c"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "3175eb7c3cb8544a4d4da77194719a6a"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "154ae750f21311cd941de10977565d37"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "306a376a420ffbfdace1dc668de4820a"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "ad8755b1c3308f6a7ba4c5d104f98fbd"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "b23bac52c502fda144f72b0dde7967f1"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "600fda73ffca97ccd0d6b3cf094dc99c"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "f74eeaeb5cbe35f5361be79b4ecfae3b"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "fc2e315befa4d0c69827b25ae6aae0ef"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "68d0ccc1ba3ecce531d6b451798d9a36"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "8098cb8141c74f014709ff8b0fe27e30"
  },
  {
    "url": "categories/index.html",
    "revision": "ce14267a223c44673bd438fdcaf8733a"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "1e4eb39b3c1132610ff8e947e32321ab"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "71fcd324c5b3a88468fcc1c1e3c686b9"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "6320f4c257c5d468af6f6a17ec694e9a"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "2e339b3b6110d177b1c3a8338c034070"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "7271b590ab1b5a96a2bb25d39e767be2"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "08fe2b7087adab32af5ac0e0e6b3d475"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "ce41f0e3aa6dc9938c78b5bbef8cdbb7"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "8181865a68ef6b47150ed535990686c5"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "1934a1360aea86a2150f90a6987a0aee"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "ccfe755fea84867b92d851570f52e1e4"
  },
  {
    "url": "notes/index.html",
    "revision": "745e3b0a976f75ef1071ae69c43d1a97"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "705d6d7aaac75adfdd257fd7cbe35245"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "a66b2c313f0b0c9c73d92a9a0224cefc"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "a002610cc6c2e335a6a95b171db132fb"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "4da709543691f141917361073b6cc352"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "50cb308625c505c24ded9e8f42b7fac1"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "8e27c436752c7bf0b559f35f689d9ec5"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "64c331c1c4b514ffe21d1662b92d8bfb"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "389f15e6711de12606b4f32d491c9c29"
  },
  {
    "url": "tag/index.html",
    "revision": "2a5cefb89fd57adf3e9803fb8be3dfa0"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "8f51c8aa881c3e8f244b64753dfbfe55"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "dd9670efe875b3ac94fabeab79e507cc"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "d523e35daaa920beb259509b30110267"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "6112a2a3cb1ba69493b7cf57480dea64"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "ff449007e867602fd7262b627bd061a4"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "f9eab0c6087f4e5f1f599f45970a5585"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "771717c8b02acdc39c13440d8d5e5455"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "722c3db9fd23a454def24e105b8f57de"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "7d683d840ddc1637d60b8b0df1bca83d"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "ac9bfaa11eb40d2ef434b76351e46b58"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "268071976ad2a6238a3f9648a19c62e8"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "71b49d6a5d2a8e37e82a75c068ba500b"
  },
  {
    "url": "timeline/index.html",
    "revision": "d927ae154702c9cb3f596cc6821ee239"
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
