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
    "revision": "f562071eca397d165540c5144c5ae6e1"
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
    "url": "assets/js/app.1b4b0170.js",
    "revision": "8a89244c4b2eac11766cfff62f094f56"
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
    "revision": "eada58b63d9b5a7c07320277dbeaa867"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "4adb01a1a6ff54cbf4355d66538cff93"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "854fb68d657bd74d31cd65d8e6f32d33"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "a6dafafa4b52ca3a2463cbb36227df3b"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "86c82d371aea3369df7ef10b2d1a844b"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "7e102978a06c26de36861a44973d797c"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "13083eb9ea0f04b6483de1d36899eec3"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "44807cd0a89a48f4e868da649ab18c71"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "8769cf892f5c97178e153ace838b1a1f"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "327e13896ee025ea57d9ad72560e5b98"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "fd341f993d895267532c5218cbe08840"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "337c061c0ddf9116a00e8e5f45a326e2"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "1e4a01bc60f58571e36d72840e49fbb4"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "35b38616ede0ab80ade0b9db08a23acf"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "632d2782bdc1a716ed3eb33edb1487a4"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "b36b175f193cd5bd623e682ecd2cf8bc"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "0b9b53a59b4bfcc4bf6c9ab184c4aa40"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "e179366be3a55670044299fc144f5750"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "19a6f8d43a5990f7fcabe5da5221f286"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "06876e533be13ee802aa2986beccc4fc"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "f1e0ace12644d038d99c9c2d056542e1"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "54bf6cdb82ccd1bdce6fb18db0ad2b10"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "cc42ecf45b4c214d60f133c90aaf718d"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "6618efd4eff7eb343041a32a18bb45d2"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "8afd9507192567b08dfe47beba2080e2"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "c3850df8ba2063850542421a3fce97c0"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "bd638239229af21733c824d883a6e0bb"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "f1397ba486e29186fe780fe34982e932"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "3573c5a5a828d0db938adcdbea43802c"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "435a326f1fda29dbc5056486f42d4235"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "36530457847bb42d7620a484beb9a176"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "f7b5f5ffe9d48f125c9045bc9d3d83d7"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "b930f8b6b21391b706e7818683afd0ae"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "9b3ad326ea669e6e879a777cedce49c6"
  },
  {
    "url": "categories/index.html",
    "revision": "705db06a444f250e22c19c51afd12ac8"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "bf92087bd191575a544fbc54359d70e1"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "3ab052ffb783905f361e34767338b829"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "663df0e11924df79acb134b0820d16e2"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "2e2791343828d0492fbb855698a967b7"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "ba0f9d628727b9235c578c8825fe2db5"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d02f9f9cb243a0fec6ef637a5fc298b4"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "735f4ca5d7193dae4a93227b2b3cc08b"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "03e52d8d5697c066c5c8cf2c0a2664e0"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "4f19bce3b3dcf0ee6616be2b039f2013"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "2adad633e28ffdbe1bc8a92424051da4"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "98f56381bd79a97cf7fec8f4fb6437e6"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "d223ede0470e10e64293e77c3b27dfb3"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "21bf2edcf030496e165e3ec54ed72713"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "be4014dd30423056d3c19024ad407602"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "d6949f3ca7203955a60f4e8020bfe074"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "df17afc9c61583edc30985386d5480c5"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "d459b33161b9b8b9f53b90acd77d0ba0"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "2cc686539358fbf400ae7223d1c9b3a5"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "45428bf2230950c5ce807341ce02738c"
  },
  {
    "url": "ios/index.html",
    "revision": "9f48ede93ceef294347e9aed2a5c0d0f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "d20ed8a17018c16acc9371d124533606"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "6b051d3137b8a416aa43e2ad421774a1"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "8347e061d6d630070303f42ffec112b3"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "66c1423675e7df6c3e460d8f5fbb1205"
  },
  {
    "url": "tag/index.html",
    "revision": "0f67804cc96b92141e992cef092b3f46"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "d639e8ca4ef9d6585d58db0ef7cad2eb"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "0639260be59234876681e0cba0124a84"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "7c3f185aa15bfdc422e730622590c382"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "efa3356d1c28268eb3b7f1cdfb20a5b7"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "b4f543789b41b8e249ef934718f7df1d"
  },
  {
    "url": "timeline/index.html",
    "revision": "357a1d6af7c4f49a982feb6cebdbbef3"
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
