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
    "revision": "145b7fc3f5ff5ba868090120ce8cfda0"
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
    "url": "assets/js/11.4019ce3d.js",
    "revision": "8fc501e458752b3f73cc672ff948d4ed"
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
    "url": "assets/js/app.da79ef42.js",
    "revision": "05a179dbc8dac8f996220a2d4354c533"
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
    "revision": "ab273f06ee530e8a403646196adc81d4"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "07bc60307e1af96f215d5ccc61f47d58"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "89c5fa21b5a2ab0ad6cdb76339e057f0"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "da0a2e743ba412331b748310f1263e57"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "99498f5661e7707ce5767cd42b296207"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "d04720164b41d472eb53e0f29534d2ac"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "8ed73927e4739fce3b81c2bc2fe40c35"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "07aef202387da98f8c9529bacb326311"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "cb0a3938035db4edd4bd830048ffa96b"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "cfa3d0a35d57116d97875d0bb8043e90"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "1106fe8276bb164b24b1227033f7a7bc"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ef55de6d3ea92f3a3fdbb21e55b96055"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "32c629c30d3264d006e4506c31417539"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "cdf294532f0984aaf70c022c216d1747"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "8801b36f532ded2b88fba5e1f42c634c"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "cc7e3496fae50b4005811c34d49f9117"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "efc5d5cdf1fc07f888647f4f6e17bc72"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "0bf4fb35205d09f039d915e4acfb5f8e"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "db40ecc866b34b0579be53b2194086d0"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "a7516f8e91b0689fcef1ab7c9a57b1a4"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "fd2cd5472690cba30ea5f0efddaebcde"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "351feba6718df3136fe58d4f0bdda10a"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "5e9f731ede45798b1c8d98b7d65fc93a"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "497e32f1398b20fa0b1d1a31f3ac0b88"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "44de7ea2436c7a4ae21426d14d2ed2ff"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "460d077a829a594085645a5154a18a68"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "0e1dd1e5f130505f8b7aa028c203d225"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "fc975ccfca2c8503a6e1275d60b9c895"
  },
  {
    "url": "categories/index.html",
    "revision": "c89bb4aa0bceed988599b15c4eb5fc14"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "ec97dfc670a10a51cf2bdc8bceab3751"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "e42aaad8f31a35665a6efa027779e746"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "0a26159ce3d0d704174af8178460e157"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "325696081dd650da72853c5b31a2617c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "99cf6d105399ecfe155c49899db1edf3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e9935b4d85ec037859e9e9a6124afa41"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "68d74bd371688ec1641b4c03fd010c23"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "b6991a784c5dca4fc9dce2b69c9d2c4e"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "6f4456ecdfae39066a54333813532c17"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "eacb5f4ae7aa458ced4221325216c121"
  },
  {
    "url": "notes/index.html",
    "revision": "4897972c558f1a689d0e83aff802c3b3"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "9020b1c6dd2a246014a7ecb5a00cadad"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "3632aa6f6f279e6120176a1b5cf9a85d"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "57d08a02e4cf9e9422745fa5a71e8094"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "25cfacbcdb0273004a9722a98a344a5f"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "baca9c2d99be3b674557be45f180e980"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "36147f11b78ac3389de39d47d2dbdd20"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "38074401349f957b9a84ff73ac24ae29"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "43fb37c7e9480ca502c24af4e93238fd"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "68b1bff47fc904de3b71aaab90b249d5"
  },
  {
    "url": "tag/index.html",
    "revision": "ff108b828d3586ddb98365d0b1d3599a"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "92a8fe66a7ab75b024f563bfbbd6502c"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "f6add4a30c96dbd715c8122ff7df3e04"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "c55aa9995a4eb06b5cbda0af7d297727"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "89568a389f9728755af485ee5c1f0d8f"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "d58c9e7585d8c2451c8f0ce49b0dfee7"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "a028b9c3d0452e83804a06854ccbf505"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "bc56af026c9ec2d769e72aa860523751"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "7e3993bcbdbd54d62929cfc52972c439"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "0119d16c7202d3a769c6836658208d90"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "7f3d4b2c5224ca34fc5e3ba8e7eaa92e"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "2547da9e763d9698d654cbfb161aa8f9"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "b37e9004a2afb5fb0e11595c4b16e0e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "b842521ed43b27df3e45a919727f03e3"
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
