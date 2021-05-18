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
    "revision": "414282e289ce39906c1c29cd09a5a403"
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
    "url": "assets/js/10.6df3a46e.js",
    "revision": "ffcc9d42f0c6b624c4a1aacd4ad412c1"
  },
  {
    "url": "assets/js/11.9a43d115.js",
    "revision": "2e77fbb5c31985362cc770293aa52aa7"
  },
  {
    "url": "assets/js/12.500ac024.js",
    "revision": "f1f69e2e0c4f714b6d8b70d51fa0298c"
  },
  {
    "url": "assets/js/13.7f01aa10.js",
    "revision": "f478b4f931612790db46d7e7f9dd520b"
  },
  {
    "url": "assets/js/14.5edc5dd0.js",
    "revision": "46387c8515c98191b97e855433bfdfe5"
  },
  {
    "url": "assets/js/15.a185b7de.js",
    "revision": "0197d34ba645662d66358a4e4d32076b"
  },
  {
    "url": "assets/js/16.089ea69a.js",
    "revision": "bdf81c8851a41fe713f30dbc08d661a1"
  },
  {
    "url": "assets/js/17.98fea2fe.js",
    "revision": "3fa5d8e63d315e628db86a6c444f1e78"
  },
  {
    "url": "assets/js/18.804ad980.js",
    "revision": "31ad6ccceb83f7520a15b6151ef9f816"
  },
  {
    "url": "assets/js/19.4513c47e.js",
    "revision": "baf216e014c4d02b3637ae48ae16ae01"
  },
  {
    "url": "assets/js/20.4dc41792.js",
    "revision": "1cfa3105cdc1f3477abdf3731dfe28be"
  },
  {
    "url": "assets/js/21.22c35f44.js",
    "revision": "05ad1400015a40cf11331cb8be336353"
  },
  {
    "url": "assets/js/22.4eebafe2.js",
    "revision": "3e77884d201bfdefa003ba2391c31271"
  },
  {
    "url": "assets/js/23.599ebbb0.js",
    "revision": "e4aa593ef0ea3866aadd5fb0703c9d4d"
  },
  {
    "url": "assets/js/24.7087ceaa.js",
    "revision": "9010aa8f7377af232cb025e27e337175"
  },
  {
    "url": "assets/js/25.62380001.js",
    "revision": "312e67d2c54aeab2dd5bf3f2fcfa0861"
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
    "url": "assets/js/32.c6c79192.js",
    "revision": "370fba866a01db7c789261a9dbcba6cc"
  },
  {
    "url": "assets/js/33.c74569f0.js",
    "revision": "875fb74e7a2278501197bcc7a40c8a78"
  },
  {
    "url": "assets/js/34.11427f69.js",
    "revision": "122cb3738704602e4919b92e1c4ee175"
  },
  {
    "url": "assets/js/35.23153298.js",
    "revision": "ff68eace55355d2612e665c196694cf1"
  },
  {
    "url": "assets/js/36.31fee3aa.js",
    "revision": "61b2c07afcd1aa0e3ee0d38840c50102"
  },
  {
    "url": "assets/js/37.cb83945a.js",
    "revision": "89a7287746cdfe06c1ee770c5f32d1e9"
  },
  {
    "url": "assets/js/38.33c076d9.js",
    "revision": "e69aafefa3d2da21996ee88af155c801"
  },
  {
    "url": "assets/js/39.2041f631.js",
    "revision": "28c1569d34531ba5f591a4a9c621b4e6"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.08df3f4f.js",
    "revision": "8015f3e5115bd2a676dd55d6090bed2e"
  },
  {
    "url": "assets/js/41.000e1d46.js",
    "revision": "a662fb40aadf7503f832d94e3012ec0c"
  },
  {
    "url": "assets/js/42.5a1d7f5f.js",
    "revision": "cf5e1c935d83be275ad0a12fd011dadf"
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
    "url": "assets/js/46.898a2327.js",
    "revision": "90974b05e08ea2131b52ac8f46d71379"
  },
  {
    "url": "assets/js/47.429e27c8.js",
    "revision": "b0bb3d220d3811e7256a9b735cc2ca61"
  },
  {
    "url": "assets/js/48.f84435c8.js",
    "revision": "63fb8f28ed6c8dda5f21de9f62836148"
  },
  {
    "url": "assets/js/49.dbabfe81.js",
    "revision": "17f054bd90a18fc703fa46a46cb923fe"
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
    "url": "assets/js/app.6423d76c.js",
    "revision": "d59560cd6d6af48877797ca3153990a1"
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
    "revision": "a32c59e18ff7780f9347518bed92bb3c"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "830f595f9cb0ba9e160c9a372761a253"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "c8704380d2915d7052c97f1db9b30cf9"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "d6973efcc75a6a5e205396a63efc7d51"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "2f2fa1319f89f50b4e7c006074227aa2"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "762d3c62581874f52abb54785767ebeb"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "7f4062b0e8c33aed7307da17036f5acb"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "ebbe0cf8edb6020a78768abe9ff49267"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "0a09ced465cb79c5da61c95ac98076ef"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "da561a7f6cd435e04d487cf34e6ebe19"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "d45d4a95c8d1ae7343c2ed4bec913d29"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "544180a98ec9a586e01bbddb6ed9edbe"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "c6ba0fc0b276ed2cfb71494a4db08369"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "a1cd2003e0619a2b697d8bf394a48815"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "5957dc3f460a67fc081e05b1bebb223d"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "c529c621605aca79ec40410ff4c9d518"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "66de1ea9f37605ff39ea1c0ba214ba6f"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "d3b878eaf414c0841aaf6b3ceb4a6049"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "d3538dfd22e0f77a10b0f345066c1135"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "50de2ad0c6f21619ecf4df63d5725bf6"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "be7a6cb048cbbf2e807527f56458a773"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "55f864c2bc17acf30605b61c84a978d2"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "59bc436f14860c1a07a90c2455f93a3b"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "17f87872fe32dd6ee99a44bc8671ef4b"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "7a5c7a2830c189026b274717c8057ee6"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "55cabd73d29f5e681654c0f0de28e18e"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "d846a0fbb43fcefad0f2f6220229e3e6"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "5fa2562fbbdc7ca4457bcad58030d791"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "6fefee2cfd03a0844cf30c63af9522a5"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "2f5f11bf683e460b7be6df013736d0d6"
  },
  {
    "url": "categories/index.html",
    "revision": "b31d94251745a508968e9028e7a75230"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "cc53896d29a60f73f889e0ea9ddf670f"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "60a5eab395e7aaa66114065a7185ac8e"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "b321cd1f7834fac06cadb58479874eb7"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "69dd2114612b1b360b4575e22e2ca280"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "ecc5a05772008352e2f5a3bcc2e89a5b"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1b118a09c2aa85da9c838d81be1de61c"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "3588d40f65d67724ac7d4ff2dd553922"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "2c94fe87ec86bf91b8bd6b2554c0856d"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "96bd31e77553ed3d2b5fd9e05555b33d"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "69070947c4b8e531f2d5d579927db172"
  },
  {
    "url": "notes/index.html",
    "revision": "3e472fe8b35d498b6775c03e5d34ca52"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "7dbdac091ae782cde0a1ceb367f060fa"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "f57edc908b1cd09a28adfcee8c08765c"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "672b863092e93c4b62ba9f64e0f5e148"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "aafcd7b48282ce0983968180cf6e4fee"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "32c9c1ceb35c6bf895eeaa56497a55bb"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "9231a42e266785ed8cd5b65bce583d14"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "c17c288c6cb2f00477d52de3bd11d98e"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "ea55d7b1d30cdb5bb5c4a38602e04b80"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "ac1d885b9594ee730fceb390021bc232"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "f31f1d82e63eb3ebfd3aecf24a284423"
  },
  {
    "url": "tag/index.html",
    "revision": "bac86e2bc2db4bb890ed569cff5d6183"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "9ef9c9441cf90ee158dca57f5e79b81a"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "d4b75b324d7d38f0313b0420de8741cf"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "9f70de202c3eb9b8b587bace867a2ed7"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "63450a7bee98c90d276213535ea4747f"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "07f48a1a3ad10c39455b0fa24357e557"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "70105f718c2445af23fbfd3128061e98"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "500342bd14843a106957a97a8ee17665"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "965517da74cc53930fd5d065e183c8af"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "9e11d1a577961162c5e6a4ecf01a923b"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "1b2bfd5467b1bf9ef1ba603a30b709d5"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "30a7d2eeda6afa8d07eddec656e1aa35"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "f80ff86875ab90e3a7748dcd90ce668d"
  },
  {
    "url": "timeline/index.html",
    "revision": "5533629146cbcf48af5f02243f0fbd91"
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
