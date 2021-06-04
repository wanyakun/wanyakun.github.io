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
    "revision": "10a4fba6ff8c7c6b1f0da624405ad085"
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
    "url": "assets/img/ios/basic/load-images-2.png",
    "revision": "6511f1af8715fb1eba63fe5d9b269387"
  },
  {
    "url": "assets/img/ios/basic/load-images.png",
    "revision": "62c8c8089c5b570e39208cf275d12356"
  },
  {
    "url": "assets/img/ios/basic/map-images.png",
    "revision": "c1b09dd060e9bfa38b24d9359e611ca0"
  },
  {
    "url": "assets/img/ios/basic/named-table.jpg",
    "revision": "2b7b6f5d66975a98c646e0473c41a662"
  },
  {
    "url": "assets/img/ios/basic/notification-add.png",
    "revision": "87f0fd22af3a2116c274f5f09fc5fbdd"
  },
  {
    "url": "assets/img/ios/basic/notification-post.png",
    "revision": "b295dfc500984e1bdaddc6e3d07a7b7a"
  },
  {
    "url": "assets/img/ios/basic/unnamed-table.jpg",
    "revision": "f17876142c64866272d9e3d242ab0641"
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
    "url": "assets/js/11.5ba2ff45.js",
    "revision": "4d9038247be63090178ef5419295b5ed"
  },
  {
    "url": "assets/js/12.02a40724.js",
    "revision": "cf00436397105efe6c5f0be72a89371e"
  },
  {
    "url": "assets/js/13.0477179e.js",
    "revision": "cc5a07d7a8c5d17c954d996430b395df"
  },
  {
    "url": "assets/js/14.7e8d4e03.js",
    "revision": "551c5f22406be789f0748999fd858456"
  },
  {
    "url": "assets/js/15.8ca81e78.js",
    "revision": "0832f92908b054a984f7f1a3d0e74a6c"
  },
  {
    "url": "assets/js/16.04bc0dcb.js",
    "revision": "07705a9140406a46721bfb6f3f85ed6a"
  },
  {
    "url": "assets/js/17.7ff8a652.js",
    "revision": "92f850d645e6833adcb765eb39315ec7"
  },
  {
    "url": "assets/js/18.a4b05477.js",
    "revision": "d859c40823528371c56b4889b4658f55"
  },
  {
    "url": "assets/js/19.89065b54.js",
    "revision": "d2dd50471c94c226e336a34e3eb051f8"
  },
  {
    "url": "assets/js/20.31c857ee.js",
    "revision": "0da9e09d31df4e30d7b8c6d3ab6657de"
  },
  {
    "url": "assets/js/21.3fe04725.js",
    "revision": "2a2a37f50a2d4e9da91470c7b7b17ff6"
  },
  {
    "url": "assets/js/22.26269d9f.js",
    "revision": "10d923c2da2cfc1dbdc265ff99b666d0"
  },
  {
    "url": "assets/js/23.ebef3516.js",
    "revision": "4423713a8cd0a1c10dfc2968e0c4c35b"
  },
  {
    "url": "assets/js/24.e275bbdd.js",
    "revision": "e62d85200dcc10202ea6e2725e596057"
  },
  {
    "url": "assets/js/25.9c2cd31e.js",
    "revision": "765ba5aec76343996e5a9a72cc948891"
  },
  {
    "url": "assets/js/26.5dd579c1.js",
    "revision": "9c3da7092512c2b50b6cc69e0382ee73"
  },
  {
    "url": "assets/js/27.ba06555d.js",
    "revision": "ee6534926c803aa52957c3be9eda5e9f"
  },
  {
    "url": "assets/js/28.9ef9d8e4.js",
    "revision": "50e6152c8153e84f44ceb133a5ebadf5"
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
    "url": "assets/js/30.56344785.js",
    "revision": "9fbdc1a55811aa917f07ea386a9961ec"
  },
  {
    "url": "assets/js/31.08bdfc00.js",
    "revision": "11ad565c6a6ba99b03790119b16fd314"
  },
  {
    "url": "assets/js/32.19e10993.js",
    "revision": "8aff2bd92cfcd3c4abbdaba83f2eaa82"
  },
  {
    "url": "assets/js/33.9efe49e7.js",
    "revision": "026377055f7d611c1ddbb561db1d362f"
  },
  {
    "url": "assets/js/34.ee3876bf.js",
    "revision": "eefb2822e30633617a1d7ae9582fa183"
  },
  {
    "url": "assets/js/35.3f3d98ff.js",
    "revision": "1c3a59469c121824ea52fc01ffcaa315"
  },
  {
    "url": "assets/js/36.3b82fb7a.js",
    "revision": "cf96ff799f51569305ef6dd4074d5172"
  },
  {
    "url": "assets/js/37.9a3c4dae.js",
    "revision": "090b47907eb4eb5e992d597b3c53990d"
  },
  {
    "url": "assets/js/38.7532b148.js",
    "revision": "1d30beec1e0057caf7129c4fd741608f"
  },
  {
    "url": "assets/js/39.699c482a.js",
    "revision": "a15568270e29e7fc3e35ea84a3fbaf50"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.f0e97ccf.js",
    "revision": "7c2ce1bd0e79175562bab491d6680c3b"
  },
  {
    "url": "assets/js/41.33bad622.js",
    "revision": "2c360b2b05b1d51fc83e4e9937dd958d"
  },
  {
    "url": "assets/js/42.4704fcfd.js",
    "revision": "9ef2620ece03c037fd0fd3587345aa08"
  },
  {
    "url": "assets/js/43.c251fb88.js",
    "revision": "2b436f91566f16f369aa7249e1e8127b"
  },
  {
    "url": "assets/js/44.1b2ae26b.js",
    "revision": "9ad4ca3fbf96681ad45fc0e40c41a08f"
  },
  {
    "url": "assets/js/45.8043e1c8.js",
    "revision": "8eb5d3edcb5cc35cfd07f337e91d7ceb"
  },
  {
    "url": "assets/js/46.715d4cfd.js",
    "revision": "47094db06604d0b2d3f86055a5d458b4"
  },
  {
    "url": "assets/js/47.e0f97a24.js",
    "revision": "3a2f30cf6c1a6004046b9e397d0c84b9"
  },
  {
    "url": "assets/js/48.e22329d4.js",
    "revision": "8308ac3412d081d0159804e3cd81d4df"
  },
  {
    "url": "assets/js/49.b4ba732f.js",
    "revision": "389f33e6a4c28eddc45ef0158802691c"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.7d91c8d8.js",
    "revision": "1f1b7a9a598bfcb8f55d4964872cc128"
  },
  {
    "url": "assets/js/51.d835c9b6.js",
    "revision": "f66fa98c2471e6b91b34885a5aeaeb30"
  },
  {
    "url": "assets/js/52.394fe2c7.js",
    "revision": "55a41161304561330bbab786791329d9"
  },
  {
    "url": "assets/js/53.84a1391f.js",
    "revision": "d273dd0cbf7335cb2b0a270fc03987e6"
  },
  {
    "url": "assets/js/54.b6f05c5a.js",
    "revision": "58f1ad16cf54f59c7cd0a3bc8e5bca5b"
  },
  {
    "url": "assets/js/55.5a6e1058.js",
    "revision": "517fa867612e58b0a668bde5bfb79815"
  },
  {
    "url": "assets/js/56.d3ecfa5b.js",
    "revision": "e962b083a94ac0328c06bb4910e46d15"
  },
  {
    "url": "assets/js/57.e5b887a1.js",
    "revision": "3d19cae74803c6b3ef9f4d33c1800fe1"
  },
  {
    "url": "assets/js/58.66eb2a39.js",
    "revision": "22be369dfb5ad4b90d3a1cf4aed9ad01"
  },
  {
    "url": "assets/js/59.f29196ca.js",
    "revision": "88284c6e4e463828d56674b546368f3f"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
  },
  {
    "url": "assets/js/60.47eb3168.js",
    "revision": "a8648e52089c3dbf05110f1f3e68679e"
  },
  {
    "url": "assets/js/61.84c509fc.js",
    "revision": "389582658a4fb1dab0bae8643f5a3ea7"
  },
  {
    "url": "assets/js/62.e1f9d1a0.js",
    "revision": "2100950a294027d67e1f5223bd58bbae"
  },
  {
    "url": "assets/js/63.1090d0ce.js",
    "revision": "1bc2b2a5baba02ca6f89b88a5d79f398"
  },
  {
    "url": "assets/js/64.38ae4d79.js",
    "revision": "9ac9193db14813ea039e7aca4c894054"
  },
  {
    "url": "assets/js/65.e5d66f84.js",
    "revision": "f9b80acf156234614a85ca2943413166"
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
    "url": "assets/js/app.0d99226e.js",
    "revision": "8158f30a2264fd7149e0912fa2d3041e"
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
    "revision": "9856663ffe1d3e49c74903cdf375e350"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "3c9a096006d16aaec9f7d9a491fd26be"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "e87033e4a17aecb3bbe9e20aef5e16aa"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "4dccc5a19eeb91b0379c3fbcc5f7ad67"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "43b3b9c06de9fd1f912997844a417349"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "45f3b0032c504bb0594fd916e689d8ef"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "a769cdf5066f18a6254bf08f7a18117a"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "719a71729669e612d207b6301efc37f9"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "1e48e7a5e66856d2103b51f5a6b24a04"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "093e2a42550fdc62db34c811e576acdd"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "f72ffb7bf9f97a595632e952928ba42e"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "be07c3af060044f190d1650b3ae6d5b3"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "863f1757e9c3e3d8e748e7f68d1af2ed"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "2adb7c8097ccbdd1c1b116f02a21ed2c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "99b401cecf66ff596f0a06b5d97daf48"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "a8c3e15ead5a733d0920923c313b0d61"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "2801e0eb7eb681738c01084aef539e63"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "16096ac03ead4c946cc643763fdc937e"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "e526cca46b68202f482103f599b98318"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "2b69a643c260e7e3d1f1dda337f7de31"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "1687c40ee3ca70d6ea2d952c60a864e6"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "ccd5b2a7ac827a4db24f0bdd2d05b537"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "2bac4e9e912e97cd7f01bb7e12f64191"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "e3c09ecc4f5dd31fac7955c42a20d750"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "869067abea54b2785317a47cfac38105"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "e8289db49ee3bc426088a7b74e774dc2"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "6968f36ed6b48526fd8c98b2770ba13b"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "dd5665c52bdfe023c99514dbdb6d1108"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "8cd83e26411f107f83748edb206d387f"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "7f2853683b1e3df61f905744807ee9b4"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "839d359e7ec5e42c7026382ce829740c"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "2bee72e14d1a6396eaf923828435df65"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "3422aac8c8de8821300a42c2ff1fb92d"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "aff6863e6a079813f4d6c091a25511b9"
  },
  {
    "url": "categories/index.html",
    "revision": "c3a974cfe61b1452eb8b61ba00d64085"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d37ca9fd85a21448f7d14a70d21ab277"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "5c268eb74f78ed9c05def87ffe7ab1a1"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "f6a515c136500d25a7f236e005d28906"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "bf7707e3e0c31686732a5c306e2013fc"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "268c4ffef341d3ef21430499849a856b"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "e52901e3590cbcb646ae2577a9e8c26a"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "61517cc9974117e79f6b97674d862978"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "85fe8d113493234cc1c2c5164f2b2483"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "f5c040aa305e5af4f038def62260ff58"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "87e3148f14136ec6091fb46f40476a49"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "bfb5f1058277ead4e1ad6364f705e281"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "bd43675cc992e68421c9ff2661140e73"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "7b297cf35c45d8ca83e76021809986ed"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "17fc20d278e715e610ea08fe9fb39a5a"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "7907f6fbbdc0123aab7dd42bdc53eb20"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "b23ab58db9fa14012c8a485d93aa7f48"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "c306c9d00e1ea92ab11f5469ffdb657b"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "8261f95952858538dc95435809a5b91f"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "0efd42bcf31bd108229927863f8451c3"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "47dc56a5eabd6df8d9d50d6a833cb952"
  },
  {
    "url": "ios/index.html",
    "revision": "14cdac63914cad036d6f2f1b03ca04fc"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "0174cfb9c25841ba1c233eeaf55a12fd"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "fc4adb48e0f4e58c2d90fce4e4433977"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "e2a1e4a0ccd45ad22e8eb2e7a72ae9b6"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "883fd0d1fbdb3f9f930f7a5dd95ceff4"
  },
  {
    "url": "tag/index.html",
    "revision": "07aa238bb365029b2abf16f8282bb61e"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "64071cd50e0c8a6495a1ec27c494d5ed"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "d522bd6905fdc9f77c206afb0ef0d052"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "0fec48ae2077f2b432e5c3571bdc1eb5"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "9b65d9fe5a9839d68f545d5ee33b362d"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "e0a903e2b7389e1d8de6ddd383af8763"
  },
  {
    "url": "timeline/index.html",
    "revision": "e2d09bf8be283df9d18a4f92310509a1"
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
