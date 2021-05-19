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
    "revision": "4a8bdc191bcfda25b05487c6975de492"
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
    "url": "assets/img/2018/config-add-msk.jpg",
    "revision": "aff21eb878f57154c6993a39dfcbb61b"
  },
  {
    "url": "assets/img/2018/config-component-flow.jpg",
    "revision": "9bc98a76f143e7842057ccbef37c4bc5"
  },
  {
    "url": "assets/img/2018/config-import-msk.jpg",
    "revision": "d5135c8265342aeb3f3a8ca307bd2e06"
  },
  {
    "url": "assets/img/2018/config-list-app-msk.jpg",
    "revision": "ed2b6e57add5a0e3b0eb5eb16474bf7c"
  },
  {
    "url": "assets/img/2018/config-list-component-msk.jpg",
    "revision": "97d7a3ae95c4b89a681ea1287f6701e4"
  },
  {
    "url": "assets/img/2018/launch-premain.jpg",
    "revision": "6efb05463719cb2cd265be4f44887644"
  },
  {
    "url": "assets/img/2018/launch-statistics.jpg",
    "revision": "f267e41141570af89ed9199a347195c5"
  },
  {
    "url": "assets/img/2018/loader-architecture.jpg",
    "revision": "eb0c28a960c578ca8886a9bd619ac6a7"
  },
  {
    "url": "assets/img/2018/loader-load-cache-network.jpg",
    "revision": "01bb8d11b26fea01a8269a5436a023a0"
  },
  {
    "url": "assets/img/2018/loader-load-cache.jpg",
    "revision": "8d2a77e918277d28aec8d058b447398c"
  },
  {
    "url": "assets/img/2018/loader-load-first.jpg",
    "revision": "1ddb9f2f6e16c9d2f145f71b3c495ba0"
  },
  {
    "url": "assets/img/2018/loader-load-url.png",
    "revision": "08b3ca02386e66d21ae8a64e753ac6e9"
  },
  {
    "url": "assets/img/2018/loader-tingyun.png",
    "revision": "42108fe6049724556c475ce00f7e0b1c"
  },
  {
    "url": "assets/img/2018/loader-unzip-update.png",
    "revision": "f5c4cb3355e35dc2762724aa56f0ee99"
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
    "url": "assets/js/11.0c3924c2.js",
    "revision": "35c848db755e76488f240969b26dd219"
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
    "url": "assets/js/17.98fea2fe.js",
    "revision": "3fa5d8e63d315e628db86a6c444f1e78"
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
    "url": "assets/js/25.62380001.js",
    "revision": "312e67d2c54aeab2dd5bf3f2fcfa0861"
  },
  {
    "url": "assets/js/26.acba0af1.js",
    "revision": "5a053d5db8b791816eca2874026c5b2f"
  },
  {
    "url": "assets/js/27.222b2570.js",
    "revision": "6e5fbfbe64cd20f90953ea5a88708387"
  },
  {
    "url": "assets/js/28.4fd99388.js",
    "revision": "19f8fa8e8cfbae1f124fcb3b4f9295e8"
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
    "url": "assets/js/35.23153298.js",
    "revision": "ff68eace55355d2612e665c196694cf1"
  },
  {
    "url": "assets/js/36.21d3c30d.js",
    "revision": "e617fc8ebb2f4e5927f8efcde8fb52f7"
  },
  {
    "url": "assets/js/37.cb83945a.js",
    "revision": "89a7287746cdfe06c1ee770c5f32d1e9"
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
    "url": "assets/js/41.5443c711.js",
    "revision": "889638bb3b428403cc341b352bd3db7f"
  },
  {
    "url": "assets/js/42.b91f2582.js",
    "revision": "4d2f7d3df6f90dd0d1254d17b76abd88"
  },
  {
    "url": "assets/js/43.c6843fca.js",
    "revision": "6c939da4f924b859ca2ca636c6047bdb"
  },
  {
    "url": "assets/js/44.9d5840b6.js",
    "revision": "08205c45d34ebe12f904bb958214b60d"
  },
  {
    "url": "assets/js/45.b8c86210.js",
    "revision": "b40c24ad5c6eb1f6fa6114d3f8a714b7"
  },
  {
    "url": "assets/js/46.81db8a6e.js",
    "revision": "3e76903f321998077e41a55deac8e7d1"
  },
  {
    "url": "assets/js/47.f1454be6.js",
    "revision": "cdb1a9faf0fd030aee433680dcc52a2d"
  },
  {
    "url": "assets/js/48.add24f0f.js",
    "revision": "b5c4cbf1befd8b0858d46843e157b093"
  },
  {
    "url": "assets/js/49.b90f8dc6.js",
    "revision": "e8068ee700dadc356b0f4d46666a016c"
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
    "url": "assets/js/app.c382792b.js",
    "revision": "fd9ba73b025263eca0a073cd1eef0f80"
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
    "revision": "4b175c4583a3b1053f381deaf859ae8f"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "c8302d3b76a820fe99f80d3bffeefb20"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "a4ab4342be1e27dd311447728523ae6b"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "5f6da7e90460dc0d2da82a3202ebc71a"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "5c1d1b5f6e6921e24d7e68636a6a4767"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "3c6792e65bc2244e1f5928f7ef3fee47"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "d4f63581d3cced60037cbba705615bac"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "8ae0f3ddd37680d8bbc5cf30afc613c2"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "ddf821287265448a6c6639baa68d6543"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "f99208c664dff43f8d3d557ca4595989"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "234ea7b805f43c8f35f25a2241b22b42"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "85609230f3dd035f94679fd2a7fdf8d0"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "349839f03441f61970ee2c39535b7e38"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "98cd9baac518392517bf5c3a96e4a3a0"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "de14e76b733e07f205161e28080e88e4"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "36e67bbea74433a2b9bd58726fe4efc8"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "30d67bdc8368b2c06420086b564f7001"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "455c17dc999e9ec56d2c2af9c92dae9b"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "32e19503189e4bf02c50c2624b4d02df"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "9a88be69ba82db21a75e34ef0d69b8d3"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "c741c3d1b8c432b6cc2d66854589051f"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "8e14b3bd6c82171d44794c5a5e96f6af"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "5ea6091d637e6dfbf47935759ade8c46"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "aa3990b1c97bcef4ed53b79e8ed00628"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "fc2652611be0499ab98b21c914cb4cc2"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "6eb2b4e1552779e462d3c0274dbc5a46"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "a255022fe7ea2d946383187921d16698"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "6cda29d2d772452dce18b14f9134344e"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "ff808e2677982902398c6de8f85123c9"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "cdfd86200eab1753a610e71e149f2c56"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "079df2c5be495c7c8f3dd67169757cee"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "50ba8e498ad4893d99ba8b9fdda504e4"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "b127403f90c7de22648701f70e2a95ab"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "e3c00cb4096cc884598d791f0890c5aa"
  },
  {
    "url": "categories/index.html",
    "revision": "91198431d7642a8eaff09eb345f8c580"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "70c1208b392d9b35ecace5b4f8094180"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "4100167d9fa3e0d1d9162323b26ddbe9"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "6cd7b178e39e0e7407a988d6b3152768"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "1cdebb851e323ca886cacfa63a977d9a"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "c8e9c66d043b75f8df668545dbf48746"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1aa9516010bc1ecaef49f07e035bd64d"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "a9d7361980d7e6c0b86c8e570e882c49"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "72a4e7214dd85eabd0e1d314e1a92376"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "da0a5c65f9229c22c2c749ed8c1806b5"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "32690d72400e6af436d4de478c7b2b04"
  },
  {
    "url": "tag/index.html",
    "revision": "46e196d1b86e61141137b8470e598a16"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "44e2120e32725a8d396077f2f6d14d35"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "ecbc9df17381f0969ef669fcca967759"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "8e5bace15d6c1d5bd4f5e28155b7326f"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "7341871af64d51771d4fa7b802cc4bdb"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "f99a8f124c24a5184371273b5b884e74"
  },
  {
    "url": "timeline/index.html",
    "revision": "338ac51a34b37710401985762c340e92"
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
