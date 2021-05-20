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
    "revision": "459a9983f4d7ffe6f1243db63be5885b"
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
    "url": "assets/img/ios/basic/block-struct.jpg",
    "revision": "705338173fb3ab8e976e21ce917b1bcc"
  },
  {
    "url": "assets/img/ios/ios.png",
    "revision": "7c32758abb37e4720232ebe1a2ada38d"
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
    "url": "assets/js/11.e5031348.js",
    "revision": "2100be93285c01d7b58746ceb9d17c9d"
  },
  {
    "url": "assets/js/12.a25d59b7.js",
    "revision": "c82bde14d12e15f6dfe00a9bcfa91f8d"
  },
  {
    "url": "assets/js/13.b0e578ec.js",
    "revision": "286b58aacc416e388dd1b14680fd0cc1"
  },
  {
    "url": "assets/js/14.f0d71146.js",
    "revision": "8bd00c4718f8f05a425e53d90e05bd99"
  },
  {
    "url": "assets/js/15.599a70f4.js",
    "revision": "9d00db3e522a9e3da8bf2630ce639904"
  },
  {
    "url": "assets/js/16.089ea69a.js",
    "revision": "bdf81c8851a41fe713f30dbc08d661a1"
  },
  {
    "url": "assets/js/17.75148ec9.js",
    "revision": "7ece2465485b6a13da185b378e76569b"
  },
  {
    "url": "assets/js/18.35acc15c.js",
    "revision": "a09c70d105a6f7946552ff76652fe2b6"
  },
  {
    "url": "assets/js/19.ddc7dc7c.js",
    "revision": "59ac9e695f7902c678842ae54b54ac13"
  },
  {
    "url": "assets/js/20.db1e89c6.js",
    "revision": "e8d34d588f17bb2b76a151091cba7371"
  },
  {
    "url": "assets/js/21.16f48892.js",
    "revision": "ccd3b2aae11e9c9a1d07a07c2b70ddf4"
  },
  {
    "url": "assets/js/22.e91049d4.js",
    "revision": "9d2fb6285275dbee8a682d66689a639a"
  },
  {
    "url": "assets/js/23.456a398a.js",
    "revision": "ef717c5b7698ca06e8a83013fae9902c"
  },
  {
    "url": "assets/js/24.1a61690a.js",
    "revision": "0d1cf30ee6a998df75de340c742061ab"
  },
  {
    "url": "assets/js/25.b9957966.js",
    "revision": "f892fa5a4aee1e6320e5fbfa4130b17b"
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
    "url": "assets/js/29.87cfeeee.js",
    "revision": "33d4eedae3ccd6678f6cd3a6675d314b"
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
    "url": "assets/js/32.ded9a273.js",
    "revision": "f1f7b3a33bd798e9708222971163921d"
  },
  {
    "url": "assets/js/33.f303fb56.js",
    "revision": "40094c12043de98fdcff2da5c72dfcf9"
  },
  {
    "url": "assets/js/34.cf29da5f.js",
    "revision": "86aadcdc02912ceef781e05c95c900e7"
  },
  {
    "url": "assets/js/35.ee3794a9.js",
    "revision": "728cd499fa5be4e7833f7c883ee7c487"
  },
  {
    "url": "assets/js/36.bb066824.js",
    "revision": "74d710137d47c4638d7b22b6141ae07e"
  },
  {
    "url": "assets/js/37.1d6ed746.js",
    "revision": "65c252bda40108ad0cbb1b6783c437b9"
  },
  {
    "url": "assets/js/38.b2ecd417.js",
    "revision": "25983940cf0349fcc35c93c2fc6ecc28"
  },
  {
    "url": "assets/js/39.f136eb4d.js",
    "revision": "6bba88a7714fdc41901b527592c64ee8"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.2053dd48.js",
    "revision": "9e332c5b0d60a0d85c7dfa1d44bb2ed1"
  },
  {
    "url": "assets/js/41.b5ec6161.js",
    "revision": "f5ee0588f580e0077e3d886b1f6b9b32"
  },
  {
    "url": "assets/js/42.471f509c.js",
    "revision": "19b995314d4bcdbbf53743e91b8d29bc"
  },
  {
    "url": "assets/js/43.a875f563.js",
    "revision": "b07eb0281cffb1206e8ec4ec45dc8919"
  },
  {
    "url": "assets/js/44.682dd723.js",
    "revision": "47b2193b1eb12db45bf29f854973074b"
  },
  {
    "url": "assets/js/45.b8c86210.js",
    "revision": "b40c24ad5c6eb1f6fa6114d3f8a714b7"
  },
  {
    "url": "assets/js/46.bd554706.js",
    "revision": "d5b7c69c59ce57211a9ec3e646d962dd"
  },
  {
    "url": "assets/js/47.9b02731c.js",
    "revision": "6f0913ec78c6a517547cf7cd2ed06ba6"
  },
  {
    "url": "assets/js/48.e8c39ed8.js",
    "revision": "5c6856b9dd811e4bf04e440d0df66775"
  },
  {
    "url": "assets/js/49.3e90592c.js",
    "revision": "b6055e61e8e722f729411d93f7e0a2e4"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.b7891fa6.js",
    "revision": "6ad4a1d94bc965591ff7947d8e0cdf4a"
  },
  {
    "url": "assets/js/51.ef8fe25f.js",
    "revision": "d14cef4fa8eb794e91428848a55e49f4"
  },
  {
    "url": "assets/js/52.7877b2e6.js",
    "revision": "53e5a5c8aba4643d0456f36c18eac79b"
  },
  {
    "url": "assets/js/53.bde9991f.js",
    "revision": "32f1e855c3dc0e40af0383733a3a7157"
  },
  {
    "url": "assets/js/54.aadba525.js",
    "revision": "dfbfdbc4e2183cbbee5af28bdf971205"
  },
  {
    "url": "assets/js/55.973f5b5f.js",
    "revision": "1cea1c66bc77f2604f249009f2981480"
  },
  {
    "url": "assets/js/56.9e1ee0b9.js",
    "revision": "f9186d0d660ea6d5ed14bfa210ff6296"
  },
  {
    "url": "assets/js/57.bee2f2d8.js",
    "revision": "96401c68393512060aa74d45c4249bf4"
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
    "url": "assets/js/app.ef669a5a.js",
    "revision": "d36715198b34cb3e4e0e19d2d7ea59a3"
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
    "revision": "724b5bfb3434e0e5369b703e14f9c92f"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "ed381cf76793bad9b3cc5c909ec952bf"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "1b78d59b2cf4847b1ff0d7a9cd771387"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "7b9b98269aee9e47092fd40994b83a7a"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "619983ba02a8162bd78b804dd9f3254c"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "e3b91664545791f48d06164904a45b72"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "287eef380f64532339a989a2f34b5b57"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "64c4db507e7052ebf0950a3277ed5cf4"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "3eec67441477ca590042426b5d8270c4"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "bf59ffbabc0d9f0403bed9eafc177cbd"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "570f04b064716f6710abd0bb1b15c478"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "226f0cd0638a4bf7aa70ef01798ffa02"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "12a50fbc8c1ab9737e63aa7dc7846e8b"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "fe0054a8ceeb47473e8fdc9bcce7e540"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "2dd097dd45270c7e060147d36222a4ca"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "5d2d7002a64a68c7448f28236f1bec47"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "bfdabced9356b8ebfef7d2630bfddf30"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "e2f2e8c5f01883aaa25d26595920c79e"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "7197cffcd423c64b776b911f561a8e46"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "2a315e88ac6f7f5c863818996f23d473"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "1249d15f0e59895d81f6c1f55797279d"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "5fb88f2b2ca0a22abacaa9bbebda7363"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "27a355ba97d95db9e7bdb2bd62541d34"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "d88f6cd496b77fa6218d3f25aeb6005a"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "76d6a189d7b7e16a5f83a69cb849d97c"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "3a6e7574ddff8e6d64c68f2528263cda"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "9c7bf84801ca758e7096d219e31f57b9"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "b2eda7813ba8e20aa3c516e9b8dbbc49"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "9eea02f682b9fd86826608113e372fad"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "473380adae5da44cbf53f87908ef1167"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "6d03857bf7aa1c32158fd1a6923e9361"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "48fbc171dbb737fcac3b824b523bbcdd"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "bc638154253b75e91b1e0960e0d3c28b"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "82b6cd9d467d9c67c04aaab9027e28cc"
  },
  {
    "url": "categories/index.html",
    "revision": "f0cefcea13a02f4a015a96740b2d504e"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "6d2265a6681b60e4a9a38f85c78f0639"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "8e5ea3b42283d76318fa1ce0949a57b8"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "f033cdc5b5110c4aa55220e44a2a7a21"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "9c6e236e2b76848310cb809c3e5e8184"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "9e3e571550375370944434c1e63c4d06"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "c95a2f783c21e93b351eb8b96ef40f0c"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "2d4e4f739b24cb058697234cc79f9b22"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "adc22b93edcd905e032098b0e89a01a7"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "02364583265bb37c40950df7289b75db"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "ffc5b62089047430b0d17ee45fd53355"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "6835dd3c901ea7814ccb30f6222947f1"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "2250a1f7f19e5e0bd9be474bc9318ced"
  },
  {
    "url": "ios/index.html",
    "revision": "a790e66b42327fe2aea1a8f105acbc6e"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "8cc4c026e010ef47c2f51f0e2249baea"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "b888c4bb996d92255f300fa60912d44b"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "f30de6354456e21e0f67372fd03b3733"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "99ed044a26144bd56d5cb7633a86453e"
  },
  {
    "url": "tag/index.html",
    "revision": "2a797eb179f25b404822896cf088ac6a"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "7cec01e61758a43b0e5420e67f935096"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "07c5c8f222ec2540f2ddef8f8e31bf07"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "56db9c9c2fcc46fe0b1d275f6b338e85"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "0ce5078dc7a02401b01556519f971c7d"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "ea154a8606bce667ffbb169d3ac6faca"
  },
  {
    "url": "timeline/index.html",
    "revision": "4907760e9de627b050f7082b3935038a"
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
