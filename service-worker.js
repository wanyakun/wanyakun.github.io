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
    "revision": "1d609fb0220daf3173cc731755b1640c"
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
    "url": "assets/js/11.8e4607f9.js",
    "revision": "dc67bf1d4c4a78ca2e7c727991f46c49"
  },
  {
    "url": "assets/js/12.83530915.js",
    "revision": "376d541e28cadb03c71b30b1f2c679cf"
  },
  {
    "url": "assets/js/13.7f01aa10.js",
    "revision": "f478b4f931612790db46d7e7f9dd520b"
  },
  {
    "url": "assets/js/14.982b8282.js",
    "revision": "8239c3df10b2a0daaec8868d5200743c"
  },
  {
    "url": "assets/js/15.1f493416.js",
    "revision": "19db9fc33b7a9d966fdfd3579a8abf89"
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
    "url": "assets/js/18.83498454.js",
    "revision": "2c0772c730275e1555b29d674ef9b6c0"
  },
  {
    "url": "assets/js/19.8fade610.js",
    "revision": "715deec00601b147b9d77d4b8b8f5ea4"
  },
  {
    "url": "assets/js/20.8da4f399.js",
    "revision": "0533cdb6a3cb1bfcbec8449a29c81505"
  },
  {
    "url": "assets/js/21.e7f16326.js",
    "revision": "865cb28051f11e882efc1a2540d09bbd"
  },
  {
    "url": "assets/js/22.4d3835bd.js",
    "revision": "689dee37846af58b4464bb1aa997ddc8"
  },
  {
    "url": "assets/js/23.8be811ea.js",
    "revision": "ab822372aad69cfb247e7d379ae6013e"
  },
  {
    "url": "assets/js/24.2ac3527e.js",
    "revision": "81ec950689911377292e70513154642b"
  },
  {
    "url": "assets/js/25.1004e6e2.js",
    "revision": "c807ceb6d5d09a00ac73a5131f8ad063"
  },
  {
    "url": "assets/js/26.acba0af1.js",
    "revision": "5a053d5db8b791816eca2874026c5b2f"
  },
  {
    "url": "assets/js/27.2ea77b65.js",
    "revision": "b508bc2738497bca2d5235162f8efb5c"
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
    "url": "assets/js/30.56344785.js",
    "revision": "9fbdc1a55811aa917f07ea386a9961ec"
  },
  {
    "url": "assets/js/31.bb1e2da9.js",
    "revision": "27275ddcf2531ada7ae902ebb8505875"
  },
  {
    "url": "assets/js/32.4639aa50.js",
    "revision": "3990ba5d187c82e77da7b08cab690c2f"
  },
  {
    "url": "assets/js/33.9efe49e7.js",
    "revision": "026377055f7d611c1ddbb561db1d362f"
  },
  {
    "url": "assets/js/34.74c04084.js",
    "revision": "4535d8f0729be61faa197809f7d4a1de"
  },
  {
    "url": "assets/js/35.14143603.js",
    "revision": "ce103638bf4b7160ebb6e6ebb8b69b22"
  },
  {
    "url": "assets/js/36.46d97df7.js",
    "revision": "47e61face7b1e42421a5b0697f386c20"
  },
  {
    "url": "assets/js/37.9a3c4dae.js",
    "revision": "090b47907eb4eb5e992d597b3c53990d"
  },
  {
    "url": "assets/js/38.2fef0f60.js",
    "revision": "dee3e541ff4c6131e3768716ee4c9f79"
  },
  {
    "url": "assets/js/39.947c703f.js",
    "revision": "2a3c681030b5058ede9ec8097a839b91"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.693be74c.js",
    "revision": "e9182abe801709628f193cc44e4addc0"
  },
  {
    "url": "assets/js/41.33bad622.js",
    "revision": "2c360b2b05b1d51fc83e4e9937dd958d"
  },
  {
    "url": "assets/js/42.5c5ee255.js",
    "revision": "f0c2970f2040017ca2edc99a0aad91ee"
  },
  {
    "url": "assets/js/43.932ac323.js",
    "revision": "1265bb3ddf2375845a7dc3e23e16097b"
  },
  {
    "url": "assets/js/44.4c2f5a93.js",
    "revision": "a8f17295e22d84084ad8222b0c2ad24c"
  },
  {
    "url": "assets/js/45.f58d89ce.js",
    "revision": "12a5419c118f5bf45d45497e425db92e"
  },
  {
    "url": "assets/js/46.da1422b4.js",
    "revision": "5e21002e0861ca5a7021a815643aac5f"
  },
  {
    "url": "assets/js/47.c5b0a2c6.js",
    "revision": "1d7fb3f535bb354ca9a0ec95160a36fb"
  },
  {
    "url": "assets/js/48.7f0cd649.js",
    "revision": "b7a3ccf055eb33bf13f12f8f8f5f0fd0"
  },
  {
    "url": "assets/js/49.8a051be7.js",
    "revision": "cd7d167ded4ac8c91f30a67dac431777"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.3c2a5377.js",
    "revision": "becd8414c1387846cee9a8c3c333b053"
  },
  {
    "url": "assets/js/51.d835c9b6.js",
    "revision": "f66fa98c2471e6b91b34885a5aeaeb30"
  },
  {
    "url": "assets/js/52.81365a33.js",
    "revision": "57998f9424772241baaccf06e8d337b5"
  },
  {
    "url": "assets/js/53.248eb300.js",
    "revision": "b27c88d0de020a5aae561287f6398c0f"
  },
  {
    "url": "assets/js/54.eb7fbce7.js",
    "revision": "6f70404367b8e8e73fd45da48bd503c3"
  },
  {
    "url": "assets/js/55.1dff94fa.js",
    "revision": "2d57d5db475cf00f6f8f08d3acbed8d9"
  },
  {
    "url": "assets/js/56.a641d32f.js",
    "revision": "412183e2a0d762134050b611ea49499c"
  },
  {
    "url": "assets/js/57.94bb3e21.js",
    "revision": "2d4b2ed91932feb652ce037f9e298b89"
  },
  {
    "url": "assets/js/58.e9994bbd.js",
    "revision": "7f5f6c9ab238bdf06b96f9a90bf51409"
  },
  {
    "url": "assets/js/59.a828882f.js",
    "revision": "5a0a50cb4d57af718c54341fe6f8288b"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
  },
  {
    "url": "assets/js/60.2ed79ae2.js",
    "revision": "3441ff42fae775568c309a9b7e2d8546"
  },
  {
    "url": "assets/js/61.c0656e97.js",
    "revision": "f993724efd9e483ee6ecf1eccd2c4059"
  },
  {
    "url": "assets/js/62.b8641af8.js",
    "revision": "5a0f171a9b36913a6d6db9975cbcb4d8"
  },
  {
    "url": "assets/js/63.38802f6c.js",
    "revision": "b3c27040708792ff5e7aaa7168af87f0"
  },
  {
    "url": "assets/js/64.4f80f699.js",
    "revision": "bf6dc1bcabb9376effbbdeb6c09b531a"
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
    "url": "assets/js/app.e38c42b1.js",
    "revision": "19a8aafa588a25841a5ab8464c24c32a"
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
    "revision": "de59e982d755321a46accdedccb25d0d"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "062fbbc37f6fd9aff038807f8a893d43"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "b9e869ed48f44ce043de82466c0775ca"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "2e3f6c416ad96cf292c1128bf669d956"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "58178100e4640179e540fc02321295a3"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "62cff9ba1f8dc7d57be265fd97e66e3a"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "641ced055e30cfcab1e24e317323f3da"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "11f67a90791f7c00479e89bc2181c45f"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "7a28cf8e5f9f8f545e8f395b0b0c2298"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "25e75d40c4624ea9c52809fa25732921"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "9f504af6d803a12ec2a22a546ac8f408"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "289ed69a6dccd7d4e6eb9609e4a06d17"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "cecc49a858f1fdd34cb67d0b00704f1c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "bb42247550220d8b7b3f42d69e002082"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "b1f829dd1f11c0fc9db43c6de321c3e1"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "d0e9609bd80fab72ff7fd660bc91b3dc"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "9e0e7870870c2960908ff2db5af83ef3"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "36a07c8fba88f9be95a0ea52bb33781c"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "89c5ea5b65cd45d6e0af9f94d0e98d3c"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "2562b4d6b2755c48a96a5ff2e661c424"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "5658688e237259c694792c477c94d9f9"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "b535552193801c2771ef6fd7912f0827"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "cfdc92d47e1794a925d6f288a41bb3cc"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "40cd6d3e2a28bae85e4b340bf8f4d136"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "7e565749419f1b6ca049c212c990b6b4"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "72f22ebd5d75626e4e00f10215681b99"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "38bfdf557d4c0d08ec5a894e2d8f2a15"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d490a6c5ce0b84a6a0622ec0a43778ad"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "01fdb2f7536caf1c5d1e6ed51edd3c76"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "aba066f366082bdde975a7d426b34048"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "54c29dddf7d66221e78175d2e4cf7a50"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "8fe00cef31c83abb75dd9095dd237c74"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "964cf3b319af149f30c4d5ab01940ae5"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "0817b4a754994d8a22464ed555570a75"
  },
  {
    "url": "categories/index.html",
    "revision": "0391ccc78046bf823533448e868b7942"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "252c829751e285e12c0084df9577374e"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "e1c1322d86b8d884e329c5016fda473d"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "ce9cb8d3e5933aed4b409c188d888060"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "555d074c9e9a2fd235655e57129a893f"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "5e7b0746f09f8afde06cc6e62a625860"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "bcc54190903dbbdf53bed266ddcb9215"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "ebfdc7dd1c14230b60528f73378aa7d6"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "a5182286537e3a0024037f5f0718fe1c"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "259dd76c19c13c98114c12d95514b628"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "8caf10c50aa5c87bf4385209d7d03541"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "2ed6ddf49c4aeb487bb139d7e0bc44d7"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "92f70c01dde8dba6c0d98fb2a1a8b87c"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "23f90932b5342e24118228b11eb01a6a"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "f302a1276f98dbb68fcf1e8475d0c52a"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "438c07fdee993931dad1b61ec777c6c4"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "1b24aaa6ece6c41cbf765f7e116ad92b"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "d9f73d1f7641126e0230f5ab36a00bd5"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "ab9f87e7bc43b387b03a921eaec02693"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "d768554ea42d1eb332c913f80a64fba2"
  },
  {
    "url": "ios/index.html",
    "revision": "a0b31f13f43bb3bfacef4402b77d9de4"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "b8ebedc41b291b98e8a554bc27ff6663"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "7099781414793f4e11b3082a0d6b4b15"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "d1f4936f1224e784ec286793eec0b230"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "78bd95033a6bd87add6a73f3c5c85659"
  },
  {
    "url": "tag/index.html",
    "revision": "aa943c59e390c8566db5c11063f343f0"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "f5731618599dca162dfdc40c1c552a4a"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "754f02eed28f333bdc668ab5fc00ae8b"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "1f72f8f559f2c99114e4858fb20a0a64"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "ed86574157980bfa49b471318905590c"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "3bd0304238bfb1e0fb1e6e2e0789782a"
  },
  {
    "url": "timeline/index.html",
    "revision": "092a84d8ff6c1adb14233b98b27348f1"
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
