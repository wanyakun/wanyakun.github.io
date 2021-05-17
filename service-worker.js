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
    "revision": "3c90ba1082ccdf655ac1a5573a8b7dd2"
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
    "url": "assets/js/app.ae48f6a6.js",
    "revision": "6323781bfd05d0900645866dd22ddb29"
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
    "revision": "8544e3216c2d694a363b30e76a7689fd"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "5c8fdc892df627d6dc566d0fb650e116"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "cee3118dd81e5eec2f85e5340ec1eb58"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "2bf4c8bcd7c2cd1a7cd9aa4a3f5fcf05"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "549a17d2640db957d812b28fd9724c30"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "94c0a95b2521a82ad2aa22c3265e53e7"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "dcf498df3ea2355f2a3b5b71102ea8db"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "a159c011edec48dbcf240634aac17b5d"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "1edd12714c2376cc48c04b498511b7fb"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "277e4f2ea933fcc8ff0e38ec4f3188bb"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "92789d4f09da6e870e6b6e46d5521052"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "9404d42d768e0e64f1dd09236b9673fb"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "31360909f220f8c629881102aa08df00"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "26d01175e60fa5499b80d08ab3af57d8"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "8ba7a32d0fe57a211704c6a697d08fdb"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "36027f19e45fa95bc924b125b11e884d"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "03a43bef5234dc6baee2779aeb78aca5"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "aebe952b2d9d723780b1c5ab90a381e2"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "2ecb67b2d4f6506d0b5c2f63a7f87fcb"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "79e87cde50e607f490d2438421a81b1c"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "426c0a44de1c60dfe38f426e5eb409e5"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "9d6333eeb77e469bd08e4b17d733c8b6"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "bc8fd81fbb7274ab5e595c38648b2d6b"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "64b6b4eca2e64b4a98c9a8e30c8247fe"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "688bf539a3699403f9889fe87bdca092"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "8652d4bf4b3a9cb9e3c2935142d1a33f"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "b770c2746a58946e32f516c930ac14d2"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "e55604a3fd7f46a2edad21543187497c"
  },
  {
    "url": "categories/index.html",
    "revision": "5f42b17bca7b2cab7750feeff0be3eec"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "5f76cc598fe5f6e177979d5b01dde46b"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "e7ee38d4ffd2cc98c4f8e98434de2ac3"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e5fef7bcb157204aa2ea3e9cc9a7f6b3"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "e691e9909bed20cc5d5a92c572616306"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "311886a02f4052ef5704eeb929119233"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6435356565931d5742c6988795b3c8aa"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "8183694c214da8e204b6c139b2a3f47d"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "5b4c7cc48cb3b544cf5c4e3a6834ed8b"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "f3dcfdd0f71cd2694c4a5ed89a762252"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "b4d015b89f43873fd14c4f83b8ae1b49"
  },
  {
    "url": "notes/index.html",
    "revision": "b00f02297580fe30cc94c20e2d9c396a"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "a871d3adae4fa7d6cb7213736fd29063"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "e13803659480a27653bf532fcb97a280"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "00ffbb86826c4687b0ad7a57312201d8"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "4569800e7f8d0209672949f36444abcc"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "e2d1206f4c8671a5f3705a848b2b9f5d"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "4c226fbd5db08757d0acb2c44d5598a3"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "ee8774bcccaf789b2dc86a97ed9e3da3"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "1ac409edbae85c566d630011255ff5c3"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "244ae34c905c1f061512219ce47a5715"
  },
  {
    "url": "tag/index.html",
    "revision": "8f15ada07be48bd97f037eb91096831d"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "94d5b818204818160b50f3894acb5193"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "7ecfce396c0a507317669e7e18c053e4"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "6fa0591cc07ecb586243c1bf2a302d7c"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "436d118a6c04d22814e364a8bd7b8c57"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "b6e4934f9981379e3a2f307ec2262799"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "dabf9a3e148afa84fc381e506e306003"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "8028c30fef7a2ada40f162a07f41693b"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "d7ef8ce18a566a649c6a1e3b59dcd3fa"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "98f6706a5acd8c88e85d14188fa07f73"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "90276e4a2589d7f06545e8ce64404ddf"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "ba93a30dc8ae98f2acf488fb644db2bb"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "cc44b1755a9380f7b2927d27890fe056"
  },
  {
    "url": "timeline/index.html",
    "revision": "70c0aa99c90f6ae123a24d9a40d49c4a"
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
