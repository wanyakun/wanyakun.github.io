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
    "revision": "020e70507d29ed9ac5ed39c6495ca322"
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
    "url": "assets/js/17.8bc9b687.js",
    "revision": "51e92871a14abaa5524a601d86883e0c"
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
    "url": "assets/js/25.80074885.js",
    "revision": "1436d71aabede9dbf10167bd3032536b"
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
    "url": "assets/js/35.43ee87df.js",
    "revision": "f289d2d9f44587db5d368fc1be684dc5"
  },
  {
    "url": "assets/js/36.bb066824.js",
    "revision": "74d710137d47c4638d7b22b6141ae07e"
  },
  {
    "url": "assets/js/37.e17009ac.js",
    "revision": "800ca82bed0e2f780b3e8d56a90856e3"
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
    "url": "assets/js/41.a1acb677.js",
    "revision": "ce1bf6ac19423cfa83a4d2920c70c9d4"
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
    "url": "assets/js/49.1c8c3e7f.js",
    "revision": "84eb9560ca67bd63c4f11d32cfa06b62"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.5d839ca6.js",
    "revision": "92cf757867f5583312587b5a0a941bb3"
  },
  {
    "url": "assets/js/51.a13e5d35.js",
    "revision": "6c37ec442284942fd427df78a2579bf8"
  },
  {
    "url": "assets/js/52.bc5ac9ed.js",
    "revision": "55c13e478cb8d4f332ceca570247a904"
  },
  {
    "url": "assets/js/53.106b3740.js",
    "revision": "12ff7c91c9b3d25840a2fc09bf871983"
  },
  {
    "url": "assets/js/54.e7e3f086.js",
    "revision": "0972933ef3032eb8e5397d6492854752"
  },
  {
    "url": "assets/js/55.21c300df.js",
    "revision": "fcca57f1345760435ef594accb7db45d"
  },
  {
    "url": "assets/js/56.341eb103.js",
    "revision": "f3240039d774301c409418bf4ea4abba"
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
    "url": "assets/js/app.84ca5ab8.js",
    "revision": "3111598a40de88315d78e1ac2669b98c"
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
    "revision": "de0bb0b4cdb3a14592f19b3018eccdde"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "d36d407cd2f503f12d3c9a633f24472d"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "fc92fcf5b67ab6f2197906c982c459ed"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "10e5d91987d07a5f9049848c9e0f6ac1"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "acaf8380f8f8c92aa783ac8b5416a7bc"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "90a9294ad3c0d7583fe3f7c55225e522"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "dacd2a5e8f1d8fe680e70f4c7b85c9a6"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "db3b6a81e5e4d6ec27a7c410b763ebc3"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "d2da19f9276bcd278c107d9eca1a7f68"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "0cdde98496791d517707247c1fb735b6"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "2c97c80b7973e1287289215e73666287"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "f71e1cabdadb0765d4214e372b02eac3"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "43132cc99b8c7663a0cccc7d1262cffa"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "12e4020027e1ccbbe7f40f2b855ac5fd"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "ee73a1382c800aafe85930b83c255b64"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "d94e54aab5178ca62254195ed6647c01"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "49dc0b464af2f74e8cf3329afa8df93d"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "012e50a31c2f8c1b0e53795490fdff5d"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "5e7802ff5f9289e10888eb1c9e07f6e2"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "857afb59d37fde065f9a13e50cf9c240"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "591d588e08905017f47ac1ede48e3f49"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "0a57df45a0b1b8d6a629716f22967eed"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "705f0054c4b75bd5631ef7de4a9ce08f"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "973f008b2686563b19097a09179cd13d"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "4b2f33329779fe0297f5244f3c450657"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "dcb3669d78c2fa6e94c49a86bf83ede4"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "06ac28ae1348e30141922ca895adb664"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "67eb095943fc87b24e668b7ccac23d87"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "dc33a8ed35b56964da1010f275d7ca4f"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "fae2330fb51d141b64cb31370217c5b1"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "fabd4a36f0f1a3962a2e463a6f522867"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "4ab293e20b1933f532305d079f4ef66f"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "e520cc006fbc73f5f113c818f3df4e99"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "6c376c8a0b0ffb5a6ce39cedd27c3daa"
  },
  {
    "url": "categories/index.html",
    "revision": "fbb22ed390206357ba5f946b2cdf0312"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "a2ce639e7b7becc3304420c479bd5055"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "25745f906c7700fd0ccb778d1cbf3465"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "bbe38b7d0585a4783c7fc4b055b87a0d"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "e4e0f6db89d04aaee78fb4891151702c"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "882e277d84f185662f92834a143bdd5d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "3b5fa7ad8ce2c259c2165714e654423a"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "a257f787853885199fe7d0d864054495"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "b4d6cdfca3fd654aa049651f547bf7ff"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "3da0a0a2b7742e67384452419ddcf098"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "03bbf254d5106b14b14ea9c34277d0fd"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "d97445174bdb40ee141e1e6a7d83211d"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "3f9eff32b20f8bb93e7af8c59f918160"
  },
  {
    "url": "ios/index.html",
    "revision": "4556960e997ef95e698d2d4c4b1837f7"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "57d0e2d834e6e9bfff5c494d2ce5c025"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "1c03f3c33b0d0de8d7cc271000402e79"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "4b671b880bc43253a0f4b5c4e43fa9cd"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "fa2503adebd8ddf44e5fe66f4399216f"
  },
  {
    "url": "tag/index.html",
    "revision": "7a7e867a6e2af61497acbdd431d11783"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "394b0d0af40ebcd16b09239f8d15d631"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "e3fa209a52531fd7481028fbd7bd1569"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "361f0d2a7bc222b8482264722ce7e488"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "a09eb46d045b563e4553d8f495c5ab4f"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "d50ef47c60befab318ec1c9dd8d9330c"
  },
  {
    "url": "timeline/index.html",
    "revision": "0d31bfce75b117a11ec330987130b874"
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
