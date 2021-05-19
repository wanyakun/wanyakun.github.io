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
    "revision": "df54d0504c13cca08cc99bef66ec71d5"
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
    "url": "assets/js/39.c5f26943.js",
    "revision": "cdfb7c0e794269605b6b293931c40f98"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.e47d34dc.js",
    "revision": "cd2e663085b8cfb66ea046c2923850a2"
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
    "url": "assets/js/49.6e5bd088.js",
    "revision": "ef0f08c7dd1180517b5edaf3f067abe0"
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
    "url": "assets/js/app.49271919.js",
    "revision": "b89b27f0622a7fc2c3390d06eb6d1c70"
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
    "revision": "94d9a3065b0ca68f045031189ee941ba"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "1967f8fc3ea7d363c616c1bb74ce8a7c"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "8d648ea56764dc9707321c0b1e7aea64"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "5a70ff67d2d9e405095248b27b5bf6e5"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "e234583407abba7d5750e8f5ee96ed61"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "a6667d8826a3e59f1421bd3adf244d97"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "cfff42c7692848bf763be6ff28cce7a5"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "298e32369029f86d24a8abec1ae29130"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "aec0555bf817fdea0584d771e20d6383"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "d4ffc8d11c427755f2645fdd01fed375"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "295b5042f841d8deef5124fef16a6247"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "23b3fe5998feec405b928f2c3f908803"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "408f18407dbd57bf9b6c68fb4cc9246e"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "7b54c0bca1310bc1385dad2afd2720c2"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "63277bc606e02751a35d893799720d4c"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "70ec697ef7219262a685ccb999f06611"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "3fa798fb505bac880d5eef34de9e47e2"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "c94a346a8f8a89bf0a22b89eb7375f2c"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "d6bc6d477d81cc37958c48f2db6e20c6"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "8f01efe7d6f0d554309f251e08654bb5"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2077558444ba50b6abd95d852a5c2062"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "f52def6912e4c146e4279643e999bf6b"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "a83242706f84d56e217c66c57e066679"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "0db524c7a666d9faeca74f843d8d6ffe"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "84f56bb029472fc63ec965baeee52c44"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "9fe7c0177142961dd1bbfd6fd0b441a6"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "212269571b71d1dc5d781917cee9ca23"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "9cb336028d54c88a28a29885bd18b021"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "fef0e6ecf1287a816b574c1348ab86e0"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "79cefcd8277e9a8819c96d6cf1cff86d"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "00ac9bbb8fa9788ddfbbb988e2a1ed75"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "4d5fc09d8e96fa9c3e6aa87962b5739d"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "0657b5c5a28d256d79e087a38492dfd4"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "fe992477c0bf25136307c54a436dcb2d"
  },
  {
    "url": "categories/index.html",
    "revision": "7acf5f1b36cda16993bd7d66bd161161"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "3e270ace15e7be77bec7f780aa99e1d2"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "d8d9504b8c3cb4c6ebd8fdab6f2ddd23"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e14bf5959fe4914f40f837fded2ccc4a"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "8f781da0736d71fe96e698469d5e1b2b"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "ad1af030827d351b667e6879430219b1"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e2dbb43cc96118a51c4d54cd5758282a"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "ccae1596e7612adc8eb5ead3fd711b51"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "3f985f98ec21516cfa1a74e4e47d8a9d"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "e7c44a94d13b1d8a6ff424e14cf10a40"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "d45fdda2ad1b467346c3cb5bcb083ecc"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "4b790bc84fdb62e58777e2f7d2d073d9"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "57bbfc56e63f747462af36dfd32813df"
  },
  {
    "url": "ios/index.html",
    "revision": "ff272fd6f1875bd9ac0646d8c132ffb8"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "ba014b5cd47db58610ce0f35f1de6535"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "e41df1921fb3712c095de1f184fab4c3"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "9204d18bf9d40d508af1927d917ed1c6"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "7dc1cbc2b2aca18c749c50525c262a47"
  },
  {
    "url": "tag/index.html",
    "revision": "e8425842b3a4c40b9a649a5ef0bd2afb"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "55933412746bca4b2e3db0c18013a698"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "a5af2ebfc75dc87cd86695d699cc7c71"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "b4d747eb21860b0b930a530d9808845d"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "a26bd236011fe2afedc01252cfb2cbd7"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "b20bfac8c3fc44f02a4a723f7a915696"
  },
  {
    "url": "timeline/index.html",
    "revision": "96c9e88419fa23c5aa102d064a7a2758"
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
