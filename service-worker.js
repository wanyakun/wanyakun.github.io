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
    "revision": "2751c9d1ef9eccb451452c9ae5a9847c"
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
    "url": "assets/img/2019/component-platform-app-dependency.png",
    "revision": "758d2fc41c32b776076b4d74f83093ef"
  },
  {
    "url": "assets/img/2019/component-platform-app-publish.jpg",
    "revision": "27f472b50c26db21f5b5c6828e8d1232"
  },
  {
    "url": "assets/img/2019/component-platform-c1.jpg",
    "revision": "9e52f57a5bc0bed4de8f2a5ad6cd5d9a"
  },
  {
    "url": "assets/img/2019/component-platform-c2.jpg",
    "revision": "2433d1b302046229978be190970b1510"
  },
  {
    "url": "assets/img/2019/component-platform-component-create.jpg",
    "revision": "c1c2fa57a4924237fd624c787ee9dd8a"
  },
  {
    "url": "assets/img/2019/component-platform-component-publish.jpg",
    "revision": "2956676d8bd75657a8e3afc922afc9ea"
  },
  {
    "url": "assets/img/2019/component-platform-config-center.png",
    "revision": "a85f8ac6b49f194601e2be93faba5968"
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
    "url": "assets/js/11.04e3b57b.js",
    "revision": "8970abe2cbfcb7718540238d87047214"
  },
  {
    "url": "assets/js/12.62bac2c2.js",
    "revision": "c45e5f6832757de6a01f849e55c2bdac"
  },
  {
    "url": "assets/js/13.289c2b2b.js",
    "revision": "9c8e8db5f0048193b4933ef55a51b9fe"
  },
  {
    "url": "assets/js/14.0e1ab2f4.js",
    "revision": "6504264f98cd6467e7c253349f3f4a01"
  },
  {
    "url": "assets/js/15.2446dd37.js",
    "revision": "322f1e7a6efc16db5331608d0540acb9"
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
    "url": "assets/js/18.577b5252.js",
    "revision": "4bdc1e065e43e191ef129882ababa404"
  },
  {
    "url": "assets/js/19.be677064.js",
    "revision": "c3d3457cb2635486093b82c35345313a"
  },
  {
    "url": "assets/js/20.351b0cb7.js",
    "revision": "d0347342e9c3e64634cef6b06b7e0447"
  },
  {
    "url": "assets/js/21.a5480365.js",
    "revision": "80e54edca6244cf38318656006358708"
  },
  {
    "url": "assets/js/22.a5d27160.js",
    "revision": "682589fba527f619b8e349ac478d68af"
  },
  {
    "url": "assets/js/23.58dd921e.js",
    "revision": "572a327cef2ff5f11b950ff6526a0677"
  },
  {
    "url": "assets/js/24.943b94e3.js",
    "revision": "718e1a15b49b3c80f509b44127264edf"
  },
  {
    "url": "assets/js/25.db30b0b1.js",
    "revision": "88adb4e39b086feff59b66f2b0764e63"
  },
  {
    "url": "assets/js/26.6a4402ec.js",
    "revision": "623f8439c8c559048ffa2229f2b6e7a6"
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
    "url": "assets/js/32.d36b63fe.js",
    "revision": "5a224052dd6913699ef40675eea5b9fa"
  },
  {
    "url": "assets/js/33.c049407b.js",
    "revision": "35c9024cd629cbab49f2f88ba4ad90cc"
  },
  {
    "url": "assets/js/34.82db14b4.js",
    "revision": "cf2b5c3f5efaf134abdd299f31b23959"
  },
  {
    "url": "assets/js/35.3f3d98ff.js",
    "revision": "1c3a59469c121824ea52fc01ffcaa315"
  },
  {
    "url": "assets/js/36.b37d1eb6.js",
    "revision": "1f2cca26b5a73a6c91d0383f555fa93a"
  },
  {
    "url": "assets/js/37.06455ddb.js",
    "revision": "09547ba06b80d725ec75e9bee439f777"
  },
  {
    "url": "assets/js/38.eadf74e3.js",
    "revision": "623d5ccf8d36e6c69864a2aeee07b53a"
  },
  {
    "url": "assets/js/39.2041f631.js",
    "revision": "28c1569d34531ba5f591a4a9c621b4e6"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.25f30bb1.js",
    "revision": "02b8fa689bfbfba7d4b10889eb276450"
  },
  {
    "url": "assets/js/41.fe44885f.js",
    "revision": "7996755d021b59ee27859dc386eeba9f"
  },
  {
    "url": "assets/js/42.b91f2582.js",
    "revision": "4d2f7d3df6f90dd0d1254d17b76abd88"
  },
  {
    "url": "assets/js/43.1bf3094f.js",
    "revision": "0c1320f4b7865802aa77f08b02755b48"
  },
  {
    "url": "assets/js/44.6ba20c6d.js",
    "revision": "6a9e28548d515829e276646aab6a9fb7"
  },
  {
    "url": "assets/js/45.8043e1c8.js",
    "revision": "8eb5d3edcb5cc35cfd07f337e91d7ceb"
  },
  {
    "url": "assets/js/46.fb50ecb4.js",
    "revision": "cb3137e758200778469e383b33355253"
  },
  {
    "url": "assets/js/47.34d5dce5.js",
    "revision": "b87eb2943d8b6de41c77c33310b02aaf"
  },
  {
    "url": "assets/js/48.eca31f98.js",
    "revision": "f4a5a0ada691e464c26c94853e357145"
  },
  {
    "url": "assets/js/49.7ccc096b.js",
    "revision": "80cb090c1000099ed8672e9c462766eb"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.de40ee5a.js",
    "revision": "3823d2d25d27bcacad5e8b52e57d686c"
  },
  {
    "url": "assets/js/51.fc62a759.js",
    "revision": "f925c9f2e7cb09c4c64103be3753200b"
  },
  {
    "url": "assets/js/52.52977409.js",
    "revision": "196c1981a84215cb4d25ec76969e0d1c"
  },
  {
    "url": "assets/js/53.a30d48d4.js",
    "revision": "47eee6e3d4d5ad1a765263b5c8be801f"
  },
  {
    "url": "assets/js/54.82a6cc6f.js",
    "revision": "605c4143d80a5cdee185ee59ca537d1c"
  },
  {
    "url": "assets/js/55.d93877be.js",
    "revision": "3ae6b8e42f48bbfff10ac7c2df37afa4"
  },
  {
    "url": "assets/js/56.ca959a84.js",
    "revision": "b1225b1851682a8caa8ebd5cd1166bee"
  },
  {
    "url": "assets/js/57.5832556f.js",
    "revision": "9311d93288be5248948e3b78140ebe0d"
  },
  {
    "url": "assets/js/58.23832b05.js",
    "revision": "1ec0c229852adb821219f9b377d46570"
  },
  {
    "url": "assets/js/59.dc31ce50.js",
    "revision": "6ce16a5428f8212fd267ede1cdd85143"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
  },
  {
    "url": "assets/js/60.dded4bf6.js",
    "revision": "1b858949d4599899895dff0ca6282a92"
  },
  {
    "url": "assets/js/61.3c008052.js",
    "revision": "96f2c3ee3c891f7339a63df96024d62e"
  },
  {
    "url": "assets/js/62.6b9896a4.js",
    "revision": "6115eb07dd4519e9c1da203e492fcfc1"
  },
  {
    "url": "assets/js/63.9330bd14.js",
    "revision": "d4fccb4c9cabd21d14974c6b002ea821"
  },
  {
    "url": "assets/js/64.d612f8cb.js",
    "revision": "075eb5435f2a49996b30440ae1e78f68"
  },
  {
    "url": "assets/js/65.19072e44.js",
    "revision": "2404d8d326f9baa523dfc3e6738ae63c"
  },
  {
    "url": "assets/js/66.0a71ef8a.js",
    "revision": "77c2c18115b6c127057d66795290508e"
  },
  {
    "url": "assets/js/67.cb585335.js",
    "revision": "972d570c9bdfa9491eaebd86a621d78a"
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
    "url": "assets/js/9.da5fc6c3.js",
    "revision": "84e1c038bbc6542fb866f6f551fd5d05"
  },
  {
    "url": "assets/js/app.469b006d.js",
    "revision": "1769dedde3b50eb5f8c5add0f6bb72c5"
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
    "revision": "32ee023c7dea2389a9945d81f72de557"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "663f53562f284e7e1053ba9f85831409"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "8e6a0d0c6d2048e4f07b38d1e12b1e81"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "5cb88ad634ca572ab2dfa9f105caebb4"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "707dd172cfc9c9561cda66d7c7fb409d"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "3b2fd78b50efda7e9ed74baf3a98670e"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "30f892480a590bbaa1a2b6e2e1daec66"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "738338f061e42f5135d573aa19965546"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "d1b8d216edddbfdeb4c0453a465f9722"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "94ff15ad9957a0467f94de2db39efb6a"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "3de05aaabd6dd2d957bb9a1adbb30950"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "653c88aca17f2dcc997936a469e03077"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "4f36b310aeaecb1a9663993d8906990c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "f7f3bad18e991ba674517c4353f70854"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "9ee7bf780747a527bd1507b61f97bd8c"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "35b6aab553770bdf719e56fc408d2985"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "2efa9e34221bb16b044934bd05265ed2"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "8f4bdcc4578ec603002ca8894cbe1119"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "24009ad7ce96232fb4cc0addf23f4bce"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "e5d6ced06f64b70d48cd67f1d98f92da"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "274653de0df106359d0a708cfd266467"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "5e45a611670c022a5d985a5938c62c9f"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "dbbb892e4a814f2516c2a3d76800d4bd"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "fff69cd0abfb125b8942f97b11b0c8f8"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "d70e583c534bb43ddd8b08796fb36810"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "c61caa4d99c05cdc4f3de976ba26c8ef"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "1ac37dbe08bba4ab588407768655ae62"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d2df07dfe67ba6a8e2838365d7739805"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "a8a15980385e386c7f3f6c0bdd7e6ab2"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "bfda5639a10673a66470f732de220eb5"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "0983b443cf600e76b1e2cfe60ace7318"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "5cb225ec78dff2a4732e1e2e01556bf8"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "0328c065e8206e6235456e1f4d2fed79"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "79fa0488e10cf22a95edf71b0b5d2f97"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "c194d2b7bb137710d76a8a779671298f"
  },
  {
    "url": "categories/index.html",
    "revision": "c3da07a267875b5d17a39fddf792ac28"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d6c4999aae009951edc4f6abc6969dfe"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "059c3f650fd16104adda14210a00c216"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "0a7282525ddc0e73e9bcd5a0bf94dec1"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "c83eb3053cac6e8dc07df21414018d4f"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "22600d5812e09cf02e36549b008519f1"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "ed663ddd7d20226ab84b16a4c32302c2"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "99992116fcc7c8eb610ca32ef52052b7"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "10da50241b2914a8d1215d0c47b6b8dd"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "fa3bdb4ddacab5192f31e9d39633a55f"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "41c330c7e076c005975a467088041680"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "8bd50d710a6ae9bd25c7ad3e0883163d"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "cb31bf7b7e5f2bf10c7119bb5f4cdf3a"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "e264b687d29f60528b74fe8f41a1c7df"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "5528b688d5dd64b6b9b02b381a90aee8"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "8239aa36ca964c3da28b7a3223c3bd1f"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "fbae0dcb4404446083b2667f488b71d5"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "8fd9123e7bc182066c6a52fda70babcd"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "26832f0e3e0da45cee8ae2bf648448e0"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "813936e20f34d148ed026f920ed3d683"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "97fa718bb9919335617795f37ab3b939"
  },
  {
    "url": "ios/index.html",
    "revision": "5e692c98612b6a835dcf38660e3107c8"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "a0d67ea16024156d5a283820a50b12b3"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "dfcf794abb7812596a8f6f6d16f02073"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "9799e140ebe5cf1beb63ec9616edc494"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "0f069c128b11b10c3b367bea988994f0"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "ff23203fccd3681cc201e39a1845f2e3"
  },
  {
    "url": "tag/index.html",
    "revision": "d4fe3e6e8c1bf1ae31f2c1a13380ec92"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2f89189fba26dee41d6763cd94539b98"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "1c3c4418667f5b989f45264b9485f7a3"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "20db7adfb5e491df78f524dead5b92d0"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "a66fcdcedffaeb61321dc32bdb5efc9e"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "b1258cbc2465d8d9f74fed5403cd0b9b"
  },
  {
    "url": "timeline/index.html",
    "revision": "e13f0ccf562c6b76ad3fc5a52d6c9195"
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
