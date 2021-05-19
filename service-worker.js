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
    "revision": "a0ce7d62c8cf11b88380350c1f3e035d"
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
    "url": "assets/js/11.986184a1.js",
    "revision": "a8e81249d89a1c770a444cec82abec31"
  },
  {
    "url": "assets/js/12.aed96a20.js",
    "revision": "e447527b28bfd72b4a05cbde98f47344"
  },
  {
    "url": "assets/js/13.dc3c17f0.js",
    "revision": "5dcb7b926b02682fb8f692292772ffb6"
  },
  {
    "url": "assets/js/14.a7506155.js",
    "revision": "15d26fca9e00ffde3799d8d63008fca2"
  },
  {
    "url": "assets/js/15.f81238e6.js",
    "revision": "08569e082d4f6bf7ed66b2d94cb67b60"
  },
  {
    "url": "assets/js/16.089ea69a.js",
    "revision": "bdf81c8851a41fe713f30dbc08d661a1"
  },
  {
    "url": "assets/js/17.b55d45f6.js",
    "revision": "6468956a91cd26a4244d55938e46e808"
  },
  {
    "url": "assets/js/18.912ed518.js",
    "revision": "5b3335bcece487a8e4ff964daedc5d5c"
  },
  {
    "url": "assets/js/19.a74a87fb.js",
    "revision": "a169dceb698fe4a33691f3ee0b98b214"
  },
  {
    "url": "assets/js/20.5ac93648.js",
    "revision": "a891ecca8feb911598277c55ec696f0f"
  },
  {
    "url": "assets/js/21.519d1949.js",
    "revision": "70bf7899831749f1c97609ce588c0d79"
  },
  {
    "url": "assets/js/22.86e45791.js",
    "revision": "feb71ac6c8139e30f5e584ce4a01cdc7"
  },
  {
    "url": "assets/js/23.10257a60.js",
    "revision": "4f252555dd3c8f2d4b5ba4032c53e43a"
  },
  {
    "url": "assets/js/24.37e4f944.js",
    "revision": "e4303c7b5c7e8d3ccb23cd5908180f11"
  },
  {
    "url": "assets/js/25.ed658a03.js",
    "revision": "3af08ce30435d697d648afecbdc3efcc"
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
    "url": "assets/js/28.18607357.js",
    "revision": "540a932774eff09cdb2e1b7fa947582c"
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
    "url": "assets/js/32.39b6ecce.js",
    "revision": "f3665cb0551f9c863670ee63572f6a18"
  },
  {
    "url": "assets/js/33.eb4b6f18.js",
    "revision": "166b14a44e7a3184f2b838d2335784b6"
  },
  {
    "url": "assets/js/34.ec546440.js",
    "revision": "e14d3caf139966fab90874e19fce0e41"
  },
  {
    "url": "assets/js/35.7729e1b6.js",
    "revision": "918eacd2b3fb530130a5291b9a747004"
  },
  {
    "url": "assets/js/36.20b78da5.js",
    "revision": "224d78a3e78eb9b0e767c087b50fe289"
  },
  {
    "url": "assets/js/37.11d312da.js",
    "revision": "c22c18eddc9c4f7c9ee05ef4bc9c147a"
  },
  {
    "url": "assets/js/38.88bfa91b.js",
    "revision": "badcb58dcc9c4e83ccdebf419b391c70"
  },
  {
    "url": "assets/js/39.c48bf461.js",
    "revision": "3563a26fa2cf2235b91ae2af09fd9762"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.36f2b39c.js",
    "revision": "e523bf0fc18f6b7d6f44781e6df4b519"
  },
  {
    "url": "assets/js/41.000e1d46.js",
    "revision": "a662fb40aadf7503f832d94e3012ec0c"
  },
  {
    "url": "assets/js/42.be303c33.js",
    "revision": "52669751bc46c6f86d7f17f5e673d070"
  },
  {
    "url": "assets/js/43.316cfead.js",
    "revision": "89a2ee3f020cb385e3d039946d93e016"
  },
  {
    "url": "assets/js/44.7d6a8ee2.js",
    "revision": "162a822c8a6f4aec7d51238e9b1aa02e"
  },
  {
    "url": "assets/js/45.8175140b.js",
    "revision": "469fdff3618c11d5f5bad3be7f09984f"
  },
  {
    "url": "assets/js/46.a03b2006.js",
    "revision": "9946e28181e7a271c711e36ad113b7d5"
  },
  {
    "url": "assets/js/47.fbe74d1e.js",
    "revision": "e29f74529d5a20fa16a9bb61f6c657c7"
  },
  {
    "url": "assets/js/48.c1a68b6a.js",
    "revision": "803ef2358c9b38f2b0f447ff85bcf745"
  },
  {
    "url": "assets/js/49.438522fd.js",
    "revision": "00ad2b780b8c4082c99e9adff377351d"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.55f3b55b.js",
    "revision": "59245fed20a49111d410e224ffd70d0f"
  },
  {
    "url": "assets/js/51.a345de76.js",
    "revision": "e81575deb3b3fa242c19ef044c7cd754"
  },
  {
    "url": "assets/js/52.bd14dce8.js",
    "revision": "b4006f618885853ccd9eaba0da460141"
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
    "url": "assets/js/9.e6da8299.js",
    "revision": "f989940a6428b11f4f072b163b027e21"
  },
  {
    "url": "assets/js/app.268668c0.js",
    "revision": "166e524fe228933167c313c5d793ecbf"
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
    "revision": "8b347316e65e33dc19daa17e0423c049"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "265ec7d280c1b409e1800aaefca805a8"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "60f6ab5fcdff761b9d78fdc1026ce3dc"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "865e1e63f73a00eaf7f7037a26e4c81a"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "9c95462b594d30cfc7111941df91fa69"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "d046e3c916856cc18d4a72d08c2d1323"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "563a3c0a3908642bcf65a0d6c1b4085b"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "419d7fcace997274b8b4b5e19499191f"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "042ac6bfe8896738d7249a24dc8980e7"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "d4e3c96bf3aea1437166d537aea7fa58"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "8850efb1ad0a54e51b2c0b4a61a51e7f"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "a44b1b2eb11b33645f57170370a29906"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "d3cafa03217b69091fc661e44b0e5d60"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "0123bdd5404ffcb12f81fc0944582fa3"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "b78e0ecf529b8cdbae32a126ae2146ca"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "9803e0aaf66b7cfa9ff34060bf2d6c19"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "439fde1c5edeebb8171373e9dbb976a8"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "6031a8a8c138f3ba61b1e5906b7a61b1"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "bdd5522dbff7bebff1f0779ad8125b29"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "5a95946e741913f3b517af3543f3b44f"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2b68baabb372b233b0e487cf1ac0d396"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "008e6536fd504c2459b9d86d5e316693"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "e9d71bf413862c43129ae962268b3838"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "f7a683ee83facb7a41d6cd777c6b0d20"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "7712af78f429a79a79e014af85443e7c"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "75da071c59b86feb85b88cedf2cbda68"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "46bbdf9ea485560f2c500040f0f3b91b"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "7cba753ae60b242147d02c1242555c28"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "5c468a8e131b5dbba273a440418ee2ee"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "629feb343099c814324742e004e711e4"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "3fd2921353e54f4482603583c8ded1bb"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "b809822b5abe63f4d2bcc20a0aa34112"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "539c289f267ff54feeaeeeebdbe301b2"
  },
  {
    "url": "categories/index.html",
    "revision": "915207455f3651cf86fbe785b8fc3607"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "e55940e7c1ce62913e2a9a5005a80178"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "a64e1652c3ce3faddb2131b147e1c62f"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "c6515ef5112b8973081e606ccc74e476"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "da63d3cb5bb9e94d92f594bb9ee7b3ae"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "316f12d4497ae0c90df9697656f0914c"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "d60593fc25001e873ea2b97ac452963a"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "34b4e3b330c692af3392d04b39f6a1cc"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "7794e342b4d839aae381653b37ccbd53"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "d54e4722fdce30b1ecf6242a1f361f0e"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "1d2200f5d028850c2174b5f5c43b1743"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "875163aaa592b4fe3a90466a4d04de35"
  },
  {
    "url": "notes/index.html",
    "revision": "862d972d45be341b44643711b524dc94"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "9fe519e89906d1a4a98c29ee63061f02"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "4c43606c9ae19434333a33de10ea5020"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "b312d9b04862fff851fbef452013eeac"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "417e27b140b4c9605a926cb61577f890"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "2dbf1c62c75512d832a05c83b8f1e992"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "4db102327fc4031baed40e931db1c323"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "9696e7e281d5fb3f493ab6dcd8b6a0f6"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "a4bca5134ed1d4865eb5ae2d5b3909bc"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "b4c2e58f5fd8a444425d306f4d0a6e35"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "2c0d52826fae7a419c11608628cdff0b"
  },
  {
    "url": "tag/index.html",
    "revision": "7b06988e6219c62a10709bd7307c7798"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "e7b3ee87f01d1c9827d83d54f974b97d"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "a81ddd9430464de4e751d08ff298eb4e"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "d38421fffc61ba368c5cfa9f72a9385b"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "5155094ccaf2fd2f635dd23e2cdc7493"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "1b2080be04eaff4e4652513a1870f101"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "c067e48475d25797f18c819167400317"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "891cef648057c4f8c9b20a2eedf383da"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "8da7acb2cc62a69a4df7d5054e8510e7"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "31dfa20fbc478fb5b81e08f98ac06e38"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "ceff39d2fc52270ae77b4a8f6777923e"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "1e0b3480ee7cc087b50347b2397656f5"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "ad7543d1e4e659827e2bbde94ddbfdb3"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "c0596a70a9782bef3ff99a4080f4b5ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "7d60b311cb608e96a550cd8b874c7902"
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
