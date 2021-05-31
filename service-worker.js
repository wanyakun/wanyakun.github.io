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
    "revision": "4609096af7f652f36ac4b47b9be9b9ec"
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
    "url": "assets/js/50.88976eac.js",
    "revision": "f79af92d2739f437422f620c0642bc6f"
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
    "url": "assets/js/55.ab7080cd.js",
    "revision": "421d4b3607ae6fa1706baf172657ee7c"
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
    "url": "assets/js/app.a4610b30.js",
    "revision": "913e037443ac3d298e9419e77b15ded7"
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
    "revision": "c5d6b1067b1a49a89fa5dba2b11b117e"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "209a641ab3f81feddf2c3d9a3b0fd6e9"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "a9eaa715047e0d31890db5735e7f64dd"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "682d3fdac2778d3596e448195eead8ec"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "0004b91fd51b057c5db784c1afd5e89f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "fa1c60cf5af4807131073fcd18003140"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "fcb8f798f017964128a8c84682881749"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "41c77fcde1b744e3ebdae57d1a29b3e6"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "8890164a80379646efcd22d7bcd0e728"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "ce7f0b27bb2bc5314951e5a09d3242e2"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "40ab27b2fdf9a0994bcfcac4357b4803"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "4f1d5e367f75a3941b9518fb35a40b68"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "4b044fb38bbbb5670b4cbbff790540d7"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "ad9feb26efb03253564e59584996b44a"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "1cf60e0c51b1a37421f18e3cd173a2dd"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "2b35fb464dc97b60e8461bd54b89584e"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "e87fa305388fcc777b6070e584d331d0"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "2fa640b42a399b50541ac2f09979649a"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "a1b4a2361dad66cc3d9c2f274b3d0a05"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "99d066e7f53e91d9f3b8e2b85779deef"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2d8ccb18abbe6a1fa54d7ba2bd65520f"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "6baedd3b7e1f6d0c5bad578ef60dd0e9"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "28965cef1a5b631f1744e06f47028bdd"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "4f401ef1467201134405ffa5e7d6c50d"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "c850d9b66fb83f4e4d49863e30b251b8"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "fb31c500ed9afd23cc8f383bfcd5d9c7"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "b98aa9eaf36fe1904a53d0ae435e8fc6"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "63862f05815dab10fabdec6ce03498b2"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "ec41d9318ae8d25ec8b43717423cbffb"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "ebd1d57185405f81b991b835f0ea6666"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "6ace1ab683f9ea55c8d95441c9ba664b"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "38b32768eb883528ead2c2ce26226fcf"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "84cdcf8078faa329eab637d9ec4b593e"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "98d3d3ccd19e1ada9c1a74df21626c1b"
  },
  {
    "url": "categories/index.html",
    "revision": "076f3d72b99f7f57ed953008f416a6ae"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "2067f457fa9a2ecf045f404f14d9f83d"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "54dd3358547e4bcd8c48e8c93582b087"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "f1a060c91688b5335ede53020d32c51c"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "3933393bf45152039a94f5aa1415abeb"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "a61d60b045c6ac1342877cb88355a0b7"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1ae982c472fa050a5315b9a990ef02e7"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "74e08e31f5a8aaeb1dd41647921f5876"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "b08b916ddae1a3753a0b34c2f9b7c44c"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "7eb3562e5524abec8a66582a2bab48dd"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "9bf5ef3be3497608c72bfbde30ca6db1"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "af776e62493db2a8e17c0e526322fcbe"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "74073c7b44c78cf9149e3fb676f9bb3a"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "8afae68d6c852a9e7c9f22d7c8837990"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "a98b9b6a402609bcf1a2ae9df3a9d7d6"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "d9c5201536462e461c0ebbcf78fa6963"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "ebb404a8d8ac6719f62ebf7c96e442f2"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "62d88482e17b6813dda3f7c48ad23010"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "af2964fbdb86ab61f446d113d1be6bb6"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "9c1c2e815a475b99893fa8bf50a4abc8"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "54c62ba3413c5ea05698bf7cb302978a"
  },
  {
    "url": "ios/index.html",
    "revision": "e03b8ad8a9ede4e68bf72fd8d3cd5a26"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "d68491bd251df14313981dc88daebf34"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "0f65739c1789ca1cab72881ba9ea71fe"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "b42ec73bb6d751d0b81caf0890ff3f01"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "2434b0201bbd3a753412ac887a34aaed"
  },
  {
    "url": "tag/index.html",
    "revision": "c80669a97e26afefa322e597ffe82a40"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "8778e3a519968f49b7670d84fda6f954"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "17477b36ba4533b38866c9c8992355ce"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "7854c028e741c3115ae5ddea6c25b41e"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "7bcf77e5039450abc657e62f659493f2"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "6c4b89eb683267ce6f24020d52ddad94"
  },
  {
    "url": "timeline/index.html",
    "revision": "40c9f08ce011607ff43588cdad0f22a9"
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
