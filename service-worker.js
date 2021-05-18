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
    "revision": "3306878e4bf220cbc067ad93cbffc6fb"
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
    "url": "assets/js/42.b91f2582.js",
    "revision": "4d2f7d3df6f90dd0d1254d17b76abd88"
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
    "url": "assets/js/app.84f41f8f.js",
    "revision": "1ad72183a06fdb2b9e2ca618434c63b3"
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
    "revision": "58c2702f76dc25091e2d47abe5bf3a50"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "c831c0a02193abd2f7ef9cbd6e76713b"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "6bdd59c119f1ba8c2a0d532db8eb60fb"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "e8a6cc487ebd9f53eb0d2549d6a6755a"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "581da82fc637a4dff9ee00ad4cf131c9"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "00d83003ccc8e313c7fdc84d899aeb78"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "7ed2320d2501651e03c76c0b8265fd33"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "3acb895d4e7d6ae6659384b66196a715"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "b72732520c82badc8912071f7c014cbd"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "43db3c3be7bf5574654908e4e1e3cc59"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "5f8e3bdd3ad5d28a5c6291c42f677b4c"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "da9be253cbb6c51f2c42937aa6a1bd94"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "4dbabb7574a5496e217a81c53cebb39c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "2d3fbd22b334158f54f25a386d4adf84"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "976846cc777e5baaf58749d58f4dfe7c"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "cf62c7ce8cf7865c539464e1f64c44c5"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "3d1d71adf6d230ccf00f2a83a0a73007"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "3f91f7eec70f6433ee72f28866b49a4d"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "bfd3d81227201d086d8e7478ade036a9"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "4cb80449167f947bcbc806a4d539b100"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "d6c40929a88a6e704b064a36c4f64163"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "8dc8be28313f88a9492e4b01eadbfaf5"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "d13d53894c1f5dc93c56833e03d39712"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "802a9fc97ffde765a48a1b49dffc10ba"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "1fa278ac0b7d33060458596407a78d8c"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "d3487cd2fd90502c5f63bd7d55d3fb3f"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "0af3cf6c5f974299ca2a2a1364425a3e"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "35a852b1a8f79550c9b833f1e260f199"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "621e00f63f253ad7d4cf33a08931bf0d"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "81f7b340609e66d706a6b8fff9f5ddd5"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "62a5543c7ddf06af43423fc0f084cf83"
  },
  {
    "url": "categories/index.html",
    "revision": "fc5fe7786590d55361e0c8d81ece3408"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "0ee6a81313ff14628d16aa9840001c62"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "ef24fade144c8adfb4cd96d8ec1c59b6"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "f381ab1b904f0804ca34ebc463e038c9"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "280a0d26dc6ad008597aa4aa9d40d9d6"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "485412ee99361cceee72df4292541fbd"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "97fb3a852f24907e5231069406b472fa"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "ee95ffa53c4f0ea3247466f7b4d69fa7"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "7b051f69ff19b42535d24564067c0e19"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "b80395786e98d1f9114d07dc2b25c554"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "389c2d754fc086aeaa04c2ee6e8d93a2"
  },
  {
    "url": "notes/index.html",
    "revision": "bc1781980e7b4b9c1d9845ec21633656"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "de3d07ab629d57c79269587f426f9a02"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "ea69b63f7ceef13a113e6f76edea2eb7"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "f4069d72355459d8b7c174e38127e43f"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "623ea531d30040674df9d391e93743b8"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "c45d354151b6452e01d3e45b4396d335"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "4204f73adb98f26b2fcf2f92081a83a7"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "4da186e5b85e790d20df42c0b8481c2f"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "0a88d092a4acef0b18eb33813ee69040"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "e919a7004d9c13bf5d3df3941b900905"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "f709484aeec72f53cb10d311041cbe6b"
  },
  {
    "url": "tag/index.html",
    "revision": "d10b4eaaa7b81486d38bccd14eff178c"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "822f69d83e2888f48542ff7ac98502aa"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "0b9bbe43b6c9d85562a4b661056c19a8"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "3f1b0860cdf6a8886b260f59d5c369d0"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "f2feff2e5b52acbfd3474dc5b5dfe5f0"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "fae3bd05762489dcae9c7533755ecd92"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "d18f9ecfc54d1d43e4071df6e96e1b2a"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "6c94800f23108a4b2fc9a6c4ea3d3631"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "51d5d9f2968d84b70aae54a870f82552"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "f165ca2a98ee0cd810525b0ff5394060"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "aac89e4f2c623899cd43be58d90f2e06"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "4af2fe6f55e8cc3ad9079f5e80ca18c8"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "5ac1570b37f314ead707594fc82732b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "2bb5c2a4bb8f910cba929d2e57dc2b88"
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
