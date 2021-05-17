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
    "revision": "f533bcb8536d7a326b3fc25979aab5c9"
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
    "url": "assets/js/11.0fc7ff87.js",
    "revision": "18c323a17a394530bec2e996c6210c25"
  },
  {
    "url": "assets/js/12.bd732bed.js",
    "revision": "8849bf496237c0135fe502ece45dcdcf"
  },
  {
    "url": "assets/js/13.a5dbd4d4.js",
    "revision": "f4cb904a39de160d4d03128bf1b7565a"
  },
  {
    "url": "assets/js/14.ee0ad09d.js",
    "revision": "9e424d661e5b03b5cb18c91c3f8abc23"
  },
  {
    "url": "assets/js/15.4b15fd1b.js",
    "revision": "aa335fc88803fac4da0c0538cdd029f6"
  },
  {
    "url": "assets/js/16.2b7ee73f.js",
    "revision": "83a00f2b25a2b868a2eefb04c6a02848"
  },
  {
    "url": "assets/js/17.d51ec0c7.js",
    "revision": "bdcc5fd01edd200669eca0b3677ca8e0"
  },
  {
    "url": "assets/js/18.ec6a39b7.js",
    "revision": "a263e2334698248b311e364af9042c29"
  },
  {
    "url": "assets/js/19.83e287f4.js",
    "revision": "c086ae3bcd80fbb04b4f31a709c55c19"
  },
  {
    "url": "assets/js/20.d547b927.js",
    "revision": "5fe1191da6c74467b7fe13eb389c209a"
  },
  {
    "url": "assets/js/21.01fab888.js",
    "revision": "a9a46bb28493d8c36f8a0d54b6cba04f"
  },
  {
    "url": "assets/js/22.06a1376a.js",
    "revision": "250a7e1eaf21ce6b2aa3e8363b32500a"
  },
  {
    "url": "assets/js/23.4f440b41.js",
    "revision": "b4bcde2a1fdec2262e1cef8ee957a309"
  },
  {
    "url": "assets/js/24.4fc2fe71.js",
    "revision": "4620ab046ae5c501df3c63dde7a158ed"
  },
  {
    "url": "assets/js/25.afabb494.js",
    "revision": "cf80bf4b76b1dfb62353c37d5474fc69"
  },
  {
    "url": "assets/js/26.8be969a4.js",
    "revision": "7dc89c78a7870017b3b726c143aea6c7"
  },
  {
    "url": "assets/js/27.818b814b.js",
    "revision": "dcf78aa71de8f0b9f061fd79623ba194"
  },
  {
    "url": "assets/js/28.b45e5f56.js",
    "revision": "03bc2a94060dcf11920d55239ca212cf"
  },
  {
    "url": "assets/js/29.a16bc782.js",
    "revision": "c9085b242e6d45a891d3ab44577b7e3c"
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
    "url": "assets/js/31.a96cd289.js",
    "revision": "41d074980406cc09f967e938f86e61b1"
  },
  {
    "url": "assets/js/32.4639aa50.js",
    "revision": "3990ba5d187c82e77da7b08cab690c2f"
  },
  {
    "url": "assets/js/33.cff6954d.js",
    "revision": "c00b1e48721cd6037489d9dc1799259d"
  },
  {
    "url": "assets/js/34.69447592.js",
    "revision": "d959638fd6318562a26ae31a9f1dd342"
  },
  {
    "url": "assets/js/35.c69c9c4a.js",
    "revision": "14da5c898044992f5e4d214dcf544d74"
  },
  {
    "url": "assets/js/36.169134ec.js",
    "revision": "312e0cb589df318646b8115911d93edd"
  },
  {
    "url": "assets/js/37.8646eaef.js",
    "revision": "b8bb6c578d1f750980e30d4d088c7524"
  },
  {
    "url": "assets/js/38.eadf74e3.js",
    "revision": "623d5ccf8d36e6c69864a2aeee07b53a"
  },
  {
    "url": "assets/js/39.85a755fa.js",
    "revision": "61a77d199f9f633b21c79fd839a2934f"
  },
  {
    "url": "assets/js/4.42d5b1f2.js",
    "revision": "95188b2909097f754b2e8ec2634cbf31"
  },
  {
    "url": "assets/js/40.15528808.js",
    "revision": "127037c99ac1e7bb12a646e3442ec050"
  },
  {
    "url": "assets/js/41.6f2ffee9.js",
    "revision": "62c94bc6d5721dd20e6b218b036ce6e5"
  },
  {
    "url": "assets/js/42.d882c8ae.js",
    "revision": "8e7f1e601f1d078600e590fe6d13a245"
  },
  {
    "url": "assets/js/43.07f5745c.js",
    "revision": "569f0eefb592bda427aeeb9edbde8f33"
  },
  {
    "url": "assets/js/44.07ee41b7.js",
    "revision": "3a81609f15d839666283155c1ae8fd04"
  },
  {
    "url": "assets/js/45.8de1c415.js",
    "revision": "ab81aa901530ce8771c527dec8abade4"
  },
  {
    "url": "assets/js/46.6eb132e0.js",
    "revision": "78ac5e0b49981d7e71699ae7eb227231"
  },
  {
    "url": "assets/js/5.d764b8e6.js",
    "revision": "97c601eb2cb6b9df1b9a3b2fa951404e"
  },
  {
    "url": "assets/js/6.879ffd08.js",
    "revision": "9873bdd786404b53a6fd21755cd836cd"
  },
  {
    "url": "assets/js/7.b7428721.js",
    "revision": "f196be2ef6c8d05ceaa1e20400ab816b"
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
    "url": "assets/js/app.69713603.js",
    "revision": "eed09a09127fad42513ec83ae9fbd2f1"
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
    "revision": "02933f73c6a280b2041ca92c07602d7e"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "c5397d3f1d0b26384b2f72f9ab368839"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "37cc346f8bf4c755f57c1b2bad86ee8e"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "0edd6bb4d6009bf6e036c8b4bd0113f7"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "6fe45d847ebe3e1697aeb0fc7ac92bdf"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "e1e5bbf81c5c90c2af444a676a32fb02"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "d6fbee7e2fa65c2ed4cf492f720ae6b8"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "fe47ddcaf56e3389e739e12f7653bdf6"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "adba4ec198c59204318344989e770fe8"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "733d8fee77ba581c94e58bdf0cd6f80f"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "16fcd74159b8f09ac4f3fdbd3d7123bf"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "9afc8367af6f531187ff02d697e4c35b"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "5194fa396979edd684ec4a4c61860b24"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "150957a8b9d0877ba213aebcfaa2aec4"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "366b4213d9b5d342c64a7b690238ff56"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "b2a22d94a9f61917859967d5102492ac"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "5951af369b13ef593b805ec3e5534eed"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "bbda06b303cc50be8d9b6b50fc901ec7"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "3ba919b036c880e6c7390ccfc1ac9838"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "1949063bdea12b1e32562792eef82331"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "6dc2e6ab7d6a3989b6d1002a4340c7c0"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "8e84c5ea4a1701edc6efc02fd033b8bf"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "2214d1912145f8ad38cf01dac0a67627"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "c3c269ae3a8894e15a13a690507b9b2b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "2181ebad58180cceda7ae2ab96ce4a81"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "ec6758a42bb972a218068f6ef9651c13"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "5a2ff530fb1f53e3c62c52e24e183178"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "dd4c637deaa0183751f2864a5bac4e4e"
  },
  {
    "url": "categories/index.html",
    "revision": "659f30d969e123059cc7e3c0e6ae4397"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "67642a7220c8f5434bae9cb0d1423d38"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "77fa34f337fdc04190bbb7c96a2cc426"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "f8163bd69e5117a6095ec0e5570e845b"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "f76c70788030d25818989915b63c69ba"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "937bd8cdca5f59cb62410ee3decd083d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "b06f6209cdbb3b0ca0c466e8df9e60e7"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "8e0e0161cd1152ff443d1fda514bdc75"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "28abd71dce0e99323cdd38e0802d7db7"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "1e7d76182b3327a9ddd57fae92dd6aef"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "adb6f05bea593e97c4ed947232b802d1"
  },
  {
    "url": "notes/index.html",
    "revision": "73a1f3ed631e979c5ad8b89dd8af7a7d"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "fc1c06f0cb04b0f2cd558cc14c307d90"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "69f56075900dfa1be272e29f9c40c8d5"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "3783ee85898f1f73c358ec72ac3f4aa9"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "eca47ff2b6b1c4dc66b428dea88ded1e"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "80d2b727c047ba6dc84e2f75b2250278"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "2680e9ca27d5b752155c8c0d1b7adf0e"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "f9a1ce571a7e1ab3c8293b2a17f00c65"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "f6d99eeeff5145f077a133ff12fed269"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "211242c1739670ac51f66574f1b5900b"
  },
  {
    "url": "tag/index.html",
    "revision": "8eb7bd27c0afe9ff43679e46151491a6"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "e8c053cb591afc8ef3dc12edc408bdf2"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "be68783cd22c97b3eb061e28234f1044"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "2b5f658587eb3cccc4c5de2c65a54833"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "6273a8af8334b4b8436772f3bd0bba5f"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "ad0d71daaeaa704f0cd862b547c3ec8d"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "ef2d819b583fe02e26211034d480ff45"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "d379bc83cb688ebeae453d766e343649"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "4c19569f0211bafab0c39255d0a6dce2"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "efac84830de59a7468dcaa7a7a474091"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "5e77efaed8f12bc21a66b37b009ab016"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "4e5d5f18c07baaa4a9c3d6dba6ea443d"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "132aa0b73c0ca8036c4eb834a7c64a40"
  },
  {
    "url": "timeline/index.html",
    "revision": "4a564ca49ef9e273343a5bb25ca5dc74"
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
