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
    "revision": "7676025432eb9204992726857e539ca3"
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
    "url": "assets/js/11.89aae49e.js",
    "revision": "2816419b662728c0f1391e626be4c9aa"
  },
  {
    "url": "assets/js/12.5069a09b.js",
    "revision": "25bdd45814d9fb9512fa1345769727bf"
  },
  {
    "url": "assets/js/13.4b7f1202.js",
    "revision": "e934871b50129f83b01f99242b82c921"
  },
  {
    "url": "assets/js/14.59329ffa.js",
    "revision": "f3f31a8640a43cfa24ba5b3cdf4d9e8a"
  },
  {
    "url": "assets/js/15.f048012d.js",
    "revision": "dc5789411815a7b5012198638759be14"
  },
  {
    "url": "assets/js/16.04bc0dcb.js",
    "revision": "07705a9140406a46721bfb6f3f85ed6a"
  },
  {
    "url": "assets/js/17.d622698f.js",
    "revision": "42a46d0d31aa087eed314870ea1f484e"
  },
  {
    "url": "assets/js/18.6b50a31c.js",
    "revision": "05b7b1d72e592cbd8a96d2df400f0656"
  },
  {
    "url": "assets/js/19.1be6aeec.js",
    "revision": "2a20f73e20a6350a00476154821d4a8f"
  },
  {
    "url": "assets/js/20.125532fd.js",
    "revision": "d44046c4ed73cf726a07b287e31f285a"
  },
  {
    "url": "assets/js/21.e94672e9.js",
    "revision": "41ac82996e28bc9e712556efc5e2561b"
  },
  {
    "url": "assets/js/22.f660b9b2.js",
    "revision": "45463b5108b78dd30e3383a38cfb761b"
  },
  {
    "url": "assets/js/23.51e663c5.js",
    "revision": "c92702d9070ee4c741da3a43f308a88b"
  },
  {
    "url": "assets/js/24.cfeb715a.js",
    "revision": "eb7dce892aa17d43ffc54c5b83c322a0"
  },
  {
    "url": "assets/js/25.db30b0b1.js",
    "revision": "88adb4e39b086feff59b66f2b0764e63"
  },
  {
    "url": "assets/js/26.18770b48.js",
    "revision": "d214b369aef64593c715a91301c926d0"
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
    "url": "assets/js/31.8a5bb165.js",
    "revision": "d12cf7b6961c7d7428bfaa4b39c9191b"
  },
  {
    "url": "assets/js/32.acf57ef9.js",
    "revision": "ec0162b93c69f992b48040b8c3152cf2"
  },
  {
    "url": "assets/js/33.4d0fa1e7.js",
    "revision": "5f1c0e4f8560ab69ccdccca103697b94"
  },
  {
    "url": "assets/js/34.82db14b4.js",
    "revision": "cf2b5c3f5efaf134abdd299f31b23959"
  },
  {
    "url": "assets/js/35.14143603.js",
    "revision": "ce103638bf4b7160ebb6e6ebb8b69b22"
  },
  {
    "url": "assets/js/36.c359c2b8.js",
    "revision": "9e2292c3097d33673a1214b51483a391"
  },
  {
    "url": "assets/js/37.06455ddb.js",
    "revision": "09547ba06b80d725ec75e9bee439f777"
  },
  {
    "url": "assets/js/38.dc42f8dc.js",
    "revision": "95123b016853e76f387cb3528201eee6"
  },
  {
    "url": "assets/js/39.0dda9a2a.js",
    "revision": "b2add451f1b238503966550b25d81dbd"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.104f4181.js",
    "revision": "1238d0714ca8ee2c573f9e028318e50e"
  },
  {
    "url": "assets/js/41.fe44885f.js",
    "revision": "7996755d021b59ee27859dc386eeba9f"
  },
  {
    "url": "assets/js/42.ec8f1079.js",
    "revision": "15359d0205ad8da32d8a114469c73fcf"
  },
  {
    "url": "assets/js/43.fe1d794c.js",
    "revision": "fcfde12be7dd6f168913af86590e893b"
  },
  {
    "url": "assets/js/44.d570451f.js",
    "revision": "40f9fd2a0542b617ad04e85986ed98ae"
  },
  {
    "url": "assets/js/45.8043e1c8.js",
    "revision": "8eb5d3edcb5cc35cfd07f337e91d7ceb"
  },
  {
    "url": "assets/js/46.81567474.js",
    "revision": "7b4c6911b9eddad5b7e96efd6ace5144"
  },
  {
    "url": "assets/js/47.4f9468b6.js",
    "revision": "d8df58be524c8592ecbba86739f09771"
  },
  {
    "url": "assets/js/48.378aa4cf.js",
    "revision": "48952cea095cfd2bcaa420f0102ad13c"
  },
  {
    "url": "assets/js/49.b1c30c1d.js",
    "revision": "97a96c481d4e58ebb4f2785cd9953941"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.14b323ce.js",
    "revision": "a1360d840dfc55505677dae05b3ac7dd"
  },
  {
    "url": "assets/js/51.4bcf0afb.js",
    "revision": "c68564e6309f8f1b35fdc333acfb9647"
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
    "url": "assets/js/54.81298d19.js",
    "revision": "9c8fa7ac1a6726cdef98e858cdb06b6d"
  },
  {
    "url": "assets/js/55.f1ab1049.js",
    "revision": "b7d9d7ece682bd7b451fa1ac5e91053c"
  },
  {
    "url": "assets/js/56.eee1c924.js",
    "revision": "43d0d35dcd43a1b416bca2096233b602"
  },
  {
    "url": "assets/js/57.aee8bebe.js",
    "revision": "07b3ec15602681fa6cf6119924171b6e"
  },
  {
    "url": "assets/js/58.b99b06ff.js",
    "revision": "a900ff8ad9e7e787287a01f48474dfef"
  },
  {
    "url": "assets/js/59.6fb3def1.js",
    "revision": "98447c6beb3996c66e142ef34b27be26"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
  },
  {
    "url": "assets/js/60.de06ac2f.js",
    "revision": "5b8c6c0fc3eba2b554058e1078ced466"
  },
  {
    "url": "assets/js/61.4ec5a8ee.js",
    "revision": "91ef42f4d13e75a71a7772b5aac4b4b0"
  },
  {
    "url": "assets/js/62.00cb06c6.js",
    "revision": "6388ee828c1bb78301f0dccff1c66da3"
  },
  {
    "url": "assets/js/63.1802b3c7.js",
    "revision": "acc9a9f66d8ccbf070ed2954fc84e491"
  },
  {
    "url": "assets/js/64.1ad12db1.js",
    "revision": "7c822e1b8b8aafd0f48f79850a57d1a4"
  },
  {
    "url": "assets/js/65.07c83647.js",
    "revision": "ba88d8a9fa4246373f0de9617f6aa152"
  },
  {
    "url": "assets/js/66.033de507.js",
    "revision": "e00900b1d9ea423dd67d418d55a75882"
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
    "url": "assets/js/9.a5878d48.js",
    "revision": "b07c47a14c8a0417c863d2f31900d4c8"
  },
  {
    "url": "assets/js/app.994b94bb.js",
    "revision": "627f78fb1b52d22618b8cac69aa8a9d1"
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
    "revision": "207f8e97601348714e84471b37b18544"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "8872dfbd8aac2161dd6091ae49b5721e"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "c1eeae71a98a0ce6c279d9054cceacb2"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "d85ed7fd45051ac7dc5dd56dd1c6dedc"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "4d7a7e0eea04e919c2ef0f2a77b00115"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "532b91d327be1191db6084c831b470c6"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "0e21ada4836b7b26f8b987151738bea2"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "f1eb42191c5c60abd146b9935b5a4d59"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "9f9861d99afab33871b53ab471559659"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "efb3fdffdad5f6d611a2fc409d5f2bd1"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "de1035480892e088da480d3fa585712c"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "64302dd8d301ee9e6260cd763375c1e4"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "17146bcb6929fb0ac13a2b2d611b5603"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "56168a910b9c75aec461a9b3e6e477c0"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "da722a654d33d5f3670bd18260c6ec75"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "cb329884f487917b6fbb59656bf65a2e"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "d7f14a5406c1f6acdbafd6ee35b89135"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "ed964a74ac012fea71886a85be86a3e7"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "62744709e781c532cf33ba8e697928ad"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "fdcef7b5db3efe758e853ad52017e139"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "a5f84f05c4b8832af377f074a566c53f"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "636f8f9c1fd895c46a630218a05f260d"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "724c2e3555fe16bd546108a7c501e3bc"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "0b97425b994f19ee6e3cf13f32463251"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "aa744a2f1f3673ee8abda5591d2d3c63"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "8efb71ae5b8293d5204b83aacd537e2e"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "7a460e2d6e467ccb0b24fcb9a2cf776e"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "814bfd5fe4daaa98b3e5ecff5d996737"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "be98c35e34c559935c9330f12b769d39"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "3745f90e22d1c0d130d7564d6b5616a7"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "7f330ae270957583ee4bc1558cc2e9c4"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "f145a6d6fbc7ab10730a90f34bbe5c35"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "a1d9b43539ba088a963e50dc0c373a90"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "317f82cf5eda03dbb0d0e3b5580fbffe"
  },
  {
    "url": "categories/index.html",
    "revision": "a9c27209697489978c3bb2cab602befa"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "a64fe44d11e152e0248cc9746451e3bd"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "f1bc62ca973fe9b185533738f3f0587b"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "b66d9f127233877b5bac6d4004bfe2c1"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "05eea1ea93cd175fa1382d583615e503"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "9f6f1f4b2ad66f5cf9e373a42220e02d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "19aead228728883138708b9a4ff39d26"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "d95454a6b4b99d5ede13d829eb441c64"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "b71a9149e4c3a277df36f411da77a036"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "ef373ebb4bdc165b99614416aa12de39"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "5f39e16dd5618fc2fb83ea76d4dc9fb8"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "fe599b9bdf8afeba2776c6c4eeaa3e54"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "c554d8adb1fbd2868667aba9a9d4c32c"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "b26d3af99d7b6d3c44b5aba456f2c322"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "d37024a8789bb97e464ea8325d7b6747"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "e27b521dd379cef96c20a1508ec052b6"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "b26f214961ad4904776d83d64de5149b"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "31556337498ac37828da4f625fad98a2"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "3e1083e77d9edc353d3e9f583f42baac"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "b445a2489f12e6dbf0807f631d497861"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "cd00174b9cf779efe0b623a2cac538e7"
  },
  {
    "url": "ios/index.html",
    "revision": "f62714dcc42230662722bf2922aed70c"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "163a23801d1c96554ed1a6e1fca97012"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "019d2fc4387281bd11260cd0408ec9fe"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "77ca5eb80e7c4dc180536ecf9f244f0a"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "19504434d0c3c02c8c1fc0ea49123ccd"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "e13904be524b9d12c3ae2d2ba45f271e"
  },
  {
    "url": "tag/index.html",
    "revision": "8f1b201100ae1cfedd34f8f0378ae28b"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "d66305e83d19dab163c0b7ae6ed8511e"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "be5743237a16490fea6bec03dfa7b22c"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "ab77db982552ae4c6d32be48dffa8a8b"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "3fa60f5ae0ab83b4bd948a8e453535cd"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "c9a83a763862834950923dea28340a30"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac4a204f83ac51a513d24ae74e4ce3fe"
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
