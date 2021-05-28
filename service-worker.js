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
    "revision": "1fa150c7ad8230438c56375631e581e2"
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
    "url": "assets/js/17.c6c74a92.js",
    "revision": "323977a3b183a1b5cab2b33ed4f72675"
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
    "url": "assets/js/25.d344f0ab.js",
    "revision": "f5e0559b7fa93a5af9d43b08d28b8829"
  },
  {
    "url": "assets/js/26.96a60f3c.js",
    "revision": "34f813d7c1e052e4d8b305f4c07b2232"
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
    "url": "assets/js/31.701d2bfb.js",
    "revision": "3380c7db34f87ced387f2d8371b80d32"
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
    "url": "assets/js/35.3f3d98ff.js",
    "revision": "1c3a59469c121824ea52fc01ffcaa315"
  },
  {
    "url": "assets/js/36.46d97df7.js",
    "revision": "47e61face7b1e42421a5b0697f386c20"
  },
  {
    "url": "assets/js/37.8a19325b.js",
    "revision": "147cb05acc11426570fda49a048cb472"
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
    "url": "assets/js/41.1703dbac.js",
    "revision": "2a69f6f13192b80eeb4a7d55ab914503"
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
    "url": "assets/js/45.8043e1c8.js",
    "revision": "8eb5d3edcb5cc35cfd07f337e91d7ceb"
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
    "url": "assets/js/51.eac6ddb8.js",
    "revision": "3ceb18526079383d3183adb47d27ef4e"
  },
  {
    "url": "assets/js/52.394fe2c7.js",
    "revision": "55a41161304561330bbab786791329d9"
  },
  {
    "url": "assets/js/53.ca16dffb.js",
    "revision": "2c33691d2b0f819e2891ddab7d1d45a6"
  },
  {
    "url": "assets/js/54.7c5e90cf.js",
    "revision": "0645a2b8bd8eb7235fc70dc607871e45"
  },
  {
    "url": "assets/js/55.1f03fd1a.js",
    "revision": "4f76c427a8f06f7efbeb7400b91bfecf"
  },
  {
    "url": "assets/js/56.98e25e20.js",
    "revision": "d50e2701c17500491cd6d8fa312559e0"
  },
  {
    "url": "assets/js/57.977e5de9.js",
    "revision": "1df88d84f7d61ee3675f2b371c89641b"
  },
  {
    "url": "assets/js/58.c074186f.js",
    "revision": "be10bd40750b1b72bd43be704f609c3e"
  },
  {
    "url": "assets/js/59.731214ca.js",
    "revision": "09006426da352549fda1154185c25802"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
  },
  {
    "url": "assets/js/60.65e906cf.js",
    "revision": "cbbcd8e585519d59c68a4329cef872b0"
  },
  {
    "url": "assets/js/61.8bcbad97.js",
    "revision": "fcc2a6df6225f8e39ba742f938cb229c"
  },
  {
    "url": "assets/js/62.e9b2317f.js",
    "revision": "9d07f8b8ed4d0b75997d95b770ca35fb"
  },
  {
    "url": "assets/js/63.163d2130.js",
    "revision": "5316e646bb5908e51432f7e569e570a8"
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
    "url": "assets/js/app.a9588a80.js",
    "revision": "3f680552f1399e82c5f124de09193d4c"
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
    "revision": "504aa866dc55fa3887937a36928b8808"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "ae5d11733dc8abc1211d4a82064a8fdf"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "d7692e8e91a1ce504f575eca0278096c"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "988b56559520184db4887b999002013f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "f6eebcdd673f47964c274a33f27f61cd"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "80427bda300cbe12030cbe7c6fe38edd"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "eb347215587cd9f1bb3a0e9ec703e80a"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "17cc8585a3a315739c6ba5326fade45b"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "033a3b8a487ee8de708a3dcc8b305ced"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "2a4b188752f08269085257585664ae13"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "0fe48b973dde62bc6068ef7905821453"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "3cc00822f0682585104af6142d638d63"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "3e9e9083081f48f69fd8ef6f331befcd"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "09c8be2aeef1fe5833faef86d0bf585f"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "27f47177157cb9658cbdca7061255b11"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "cc2d71f2e5d1ea4e5bb92503c0fc60d1"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "040788644307a8b89a2fafb0ea60adf9"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "53ebecb3f46ddb2e749d2adea4b5acef"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "e147b76bc72e135a203e9a176660e443"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "49b547fea9a52817d672abbf304a3205"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "ce3ec52a3b0e899d85b5dc3f6c2ec748"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "0569b1f9041840421e2fc3a9dbe7b4da"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "684b3e99d8aede89dbfa827137eda567"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "f85fe90cb9f94d5097096753d5baf665"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "f97602b59ebcf89439381c45aca97338"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "52e3980c6869602b0bd1627d7ff9bc64"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "cd21b3c70404ed7c179d0c2b839e8a39"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "de2d1eb3c16df1dfc28615a4f9daad82"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "786998088f2e2f7d2b88c8bfa6e1b49a"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "f08ca647737ae91858c0f3a8617f3e0e"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "f71904cd235037d27bb0e2bab18ab8e2"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "eb6f4728177a1e650bd1fb6c0e30db62"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "25564556ad78be8ce8ce06440681fce0"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "34108d3fb4460410cb5e547691049119"
  },
  {
    "url": "categories/index.html",
    "revision": "8989377127e0c976d41fde86968f862b"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d7c62ecd9ce6bfc8792ebd721fe2fdf8"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "454d618f542057f71a2ca0b2b93fb5b6"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "6cc66b2d44585cf94db7bf464f2bd7df"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "eb2cd92050f9d22aea900cdbfde185bc"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "897135788b9524ad6292b2ecf855debe"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "fb9e41646dfc98f6e92c4b9cdbb459f9"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "3ac91ed7c203de327afec9078c34818c"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "44a51b86fffd11a591e5bf4ef7957e12"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "fdc08493fdb6ba34fad663d2210f6221"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "cc06be9bb85dc6d7a1be7aa60c2481ce"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "6535f6b72816a0ed0f1d8cf815af4fa3"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "434d2678d6922dae242ce96fd6600da0"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "d8272be960c7269fc255f47668657e82"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "ee660bc5e1b6a75be6e569049cba5638"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "b2d59498e71234f5b92c7ad1a618ee32"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "81406da46819bbf6db4a1797f0f41e1c"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "5afbf9ad7e998606b7cde964b860a14d"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "28edd0b83a4e843da227f7cca2aa4827"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "7bab3d1999f4ab05100d691570ff4408"
  },
  {
    "url": "ios/index.html",
    "revision": "6edf5e4c4635b5338e17e3dbedf89d21"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "37145a58eb3d6cd317fdc290a81d80a3"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "9fc0798c57c48b966d59589385649323"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "9ca131bf73a2099d6e9414467478c09b"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "96e57d750cfcbc4f40eca90a87d512e5"
  },
  {
    "url": "tag/index.html",
    "revision": "4f77cfb510305ce313084319ff90b0ef"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "144ca6669306d1b9c118d6015bbac472"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "35b3d3858cfaa184d026f2a085f375e3"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "1ad838e8306a36ff425249311d3b858f"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "759978b190d98df66a9bcaf2004c11b9"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "13e3bb23a0d8c2863c75a4bed9f063e8"
  },
  {
    "url": "timeline/index.html",
    "revision": "c10d78428d9bfb50c1ea3115ec987d44"
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
