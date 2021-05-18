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
    "revision": "93ef287985c04aee81563e8eab7a8b45"
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
    "url": "assets/js/10.37a2f5af.js",
    "revision": "425a10a935cbf75eba5e6954d2aa8347"
  },
  {
    "url": "assets/js/11.1dda27c0.js",
    "revision": "0bc1d6d30c96eb43a2ff530a5d544391"
  },
  {
    "url": "assets/js/12.0fc8e6f5.js",
    "revision": "67e9b8b156f5a33f2379fc338aaf5300"
  },
  {
    "url": "assets/js/13.29b28e65.js",
    "revision": "57a53b789dcfa64c9d0181e2a76e01e1"
  },
  {
    "url": "assets/js/14.bdedd038.js",
    "revision": "3dc9b6b0811818388efaf4b50a699ae9"
  },
  {
    "url": "assets/js/15.ebbf076e.js",
    "revision": "1889b2bb2d71194fb892f8d7a8988d69"
  },
  {
    "url": "assets/js/16.089ea69a.js",
    "revision": "bdf81c8851a41fe713f30dbc08d661a1"
  },
  {
    "url": "assets/js/17.970122da.js",
    "revision": "2ebbff84b5e793155e98ce1b63552cf8"
  },
  {
    "url": "assets/js/18.eeebed78.js",
    "revision": "d80aaab0455ff70e56902a8a5b1298d9"
  },
  {
    "url": "assets/js/19.8b133948.js",
    "revision": "45239b229990ec07cdda1e60858a83d0"
  },
  {
    "url": "assets/js/20.32215976.js",
    "revision": "84129b6ff3816b4d20d33b60e67edced"
  },
  {
    "url": "assets/js/21.0a41bcb6.js",
    "revision": "09056fb765b342897c277a2d805dc77a"
  },
  {
    "url": "assets/js/22.345dce4d.js",
    "revision": "a992308978c12017022849af4b0a252b"
  },
  {
    "url": "assets/js/23.b47ef22e.js",
    "revision": "2e27ad748ef0c84b0e7c755d8a48a5c1"
  },
  {
    "url": "assets/js/24.c865e24c.js",
    "revision": "b2b5a8aa16c94e8210848c5a9203aed9"
  },
  {
    "url": "assets/js/25.08ca5fc8.js",
    "revision": "d92751e0c13660ea657f5d797cef314c"
  },
  {
    "url": "assets/js/26.9bfd9a96.js",
    "revision": "77c75bffa22077769fbb682516a3643a"
  },
  {
    "url": "assets/js/27.818b814b.js",
    "revision": "dcf78aa71de8f0b9f061fd79623ba194"
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
    "url": "assets/js/32.72a65a77.js",
    "revision": "fa0cc11129a05673d1ae94973362ecf5"
  },
  {
    "url": "assets/js/33.50908f8d.js",
    "revision": "586c4d403428bbc5248ed59bd0dbdc7e"
  },
  {
    "url": "assets/js/34.07b5eb94.js",
    "revision": "005dd42e68ed0edee1ea1af51f6a35e7"
  },
  {
    "url": "assets/js/35.878965ce.js",
    "revision": "af6cd9c0e3b0e69ebe27cb3ce1f4abbf"
  },
  {
    "url": "assets/js/36.8f757a77.js",
    "revision": "8b187261a13d5a45726dfe8067bd1400"
  },
  {
    "url": "assets/js/37.ebb89336.js",
    "revision": "aaa575a72e94174bde79a43b401ce38d"
  },
  {
    "url": "assets/js/38.33c076d9.js",
    "revision": "e69aafefa3d2da21996ee88af155c801"
  },
  {
    "url": "assets/js/39.8190ed39.js",
    "revision": "7b7e886e13eda5bbdf2ff8dcb699cf95"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.104f4181.js",
    "revision": "1238d0714ca8ee2c573f9e028318e50e"
  },
  {
    "url": "assets/js/41.000e1d46.js",
    "revision": "a662fb40aadf7503f832d94e3012ec0c"
  },
  {
    "url": "assets/js/42.2f4a152b.js",
    "revision": "7a68afe4b8f0f0f11d676b06f3170d1b"
  },
  {
    "url": "assets/js/43.427d1803.js",
    "revision": "11a6fb79fbe024bfa0b0d1100ea64a81"
  },
  {
    "url": "assets/js/44.aa0b1d72.js",
    "revision": "d251357993aa1166a3f6f37d9af15f45"
  },
  {
    "url": "assets/js/45.e9ac8caa.js",
    "revision": "c194282b5347eb81850c9569fb90fd1e"
  },
  {
    "url": "assets/js/46.2eec5604.js",
    "revision": "96ee3cb03153bef94aae9eab19a4ff4e"
  },
  {
    "url": "assets/js/47.397959ca.js",
    "revision": "50ce7f8fb702fdedec5bd08b22fe8c27"
  },
  {
    "url": "assets/js/48.9a87f7e4.js",
    "revision": "8eca0427a93db46e2bf7307791d682b3"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/6.53c2a4ab.js",
    "revision": "5110609ed555c26cbe1b4ea43d44741d"
  },
  {
    "url": "assets/js/7.596d808b.js",
    "revision": "d25a75a9dbe8f0bfd15525dca9a098b5"
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
    "url": "assets/js/app.4b92da0b.js",
    "revision": "24e8dd233ec80bd4b180c921790cecc9"
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
    "revision": "28d2385cfcd4dd798c4554fb3f06fa07"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "1372c0b8f4105e7f18b5a0d45d9f8874"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "adc722cb47deb1b105205d8bb3308892"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "c3ee0357e91e5f5542b3df145c69f6d7"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "52328b3a7d38ee0b0ba1329da4197924"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "a063d1f928f4fc12a5b7740e6c9ab6df"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "0b068b7df0878b45932367aeb6b53292"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "187a7abebdcd7f0193ea1d0761fd021d"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "763e0fdde1dd4c293fa01577890ced0d"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "9be64f8642280c89d30fe71994e0fcf5"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "b28991489be5bf13ed279d13aafd29c0"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "61685b5859661c40a5bc43b104eb5ab6"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "e0de6dcc7a43fb926e35b5cf6efff894"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "429b8c61f1ef269284010ce245430da6"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "0c28a51e37ed661f99dc3681c9a3196b"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "8a1b6861278cc4bab50bb6c50f49dd7f"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "e041e8aab68f9dd87083897f770e8f94"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "300c075b0343206daa029d1787e36a4b"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "20ad39a86c8ff3a120e79cef80c74f7a"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "ccf5d36f719927462d0529128f477618"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "3e8dbfbf65354d295e08b70fe3901a64"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "a065e9c4dc9c22a7b7905c8ab4b29ef5"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "160ae8194941f1c05364d4a6b7d047f5"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "e44ec265f1738205d363a8a7dcee0328"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "e9f49bd29ca5d2c94ebc4783a127a6d6"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "79a7281fbf935df3dd564c18402100f6"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "66ba836e578ba01b604002da4526b0ab"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "80c737e59d9a019112bc1763a8f1c742"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "08ab739bccbfa7b10b799a8fe83025ad"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "b144ccf25a506f973a66cb516c763dda"
  },
  {
    "url": "categories/index.html",
    "revision": "4613ad7968031fd482ef0b4dbb73b6c7"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "1738d167a2f08d18d27390d35f2c8380"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "73d007e7bf1fbff0c66cd20b337e9d45"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "72d88c7228ceabaf4cf6b760d0cdaeef"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "d70f4ec8cb771de5c4b0ad1f4e07cc99"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "0c65c36327345f28f99ef8bbea7c0769"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "a648a79f58f4f8cb4bde27cfc080bce9"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "a964d2ab7705ead069be18aabaaea530"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "280865eee3c8481997e00c8437b0da47"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "f44d67894372e70d05cddc011c9b1453"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "7b310ebed3ea9068bd1d9d80f10ea031"
  },
  {
    "url": "notes/index.html",
    "revision": "527852ab420145487435065e536e390e"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "ba8d8dcd0645889792b22f67316c6b35"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "c832252e256cc412a2bbf8b4c60ea56a"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "420e4d0e95e399654910badf28786536"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "ead6dc459b6a8bcd9c0f45235eacace7"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "af5ec646adb4023a25a1fb649c334a84"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "460b9d9b377afffe74c4a1d1fac50ac1"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "6499d85823cea1da9d709c484876024d"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "e50ea6997178623bcff36afb09b655c6"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "3c99ccbb1b9c27a80e8b3750a3e027fe"
  },
  {
    "url": "tag/index.html",
    "revision": "2dadd5f590a1b89aaba6f2214dc9a9bf"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "219227efa58b228251671d4e99381dcf"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "a2c9622671994420491a10435817966f"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "78ca407178c0f8e4071cdd9825c4c128"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "b56668b4d08eb4dc367a714f14e130da"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "0e1920bcc0ae5713f8d2cd301e274e5e"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "4e36b3a258c92d3e2a1b23bd6227260b"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "f5effbcbd5206df7ae506ebd91773a82"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "43307b365bf796dbe10d209615fb4a2e"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "d830441509d1112b6cb6bbe382fa8c3c"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "76359556d5f8575c3e5d6b081a4396ec"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "6826a27a5ffbe61f83920029bd1b25de"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "76885c3bb1bc1a424c24395f2c6e56e6"
  },
  {
    "url": "timeline/index.html",
    "revision": "5ad6ed201c8dc6a50cc66f3b9ce5bd20"
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
