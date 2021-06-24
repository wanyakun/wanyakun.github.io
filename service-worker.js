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
    "revision": "cc34681929831aed0d984776be18b827"
  },
  {
    "url": "assets/css/0.styles.615df1fc.css",
    "revision": "0374aab4296a932c96d198405f8a031e"
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
    "url": "assets/img/copy.461f2286.svg",
    "revision": "461f22861ca3b3207f41f4914639140e"
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
    "url": "assets/js/1.83f0b6a5.js",
    "revision": "de95e650e86fb506f79c17d9cbbe35ba"
  },
  {
    "url": "assets/js/10.a8358855.js",
    "revision": "66a1d23432ca53aa9c54325f3cb38b40"
  },
  {
    "url": "assets/js/11.d6bcce69.js",
    "revision": "e7a987c8abaf7f813ff0ad1c3d56c599"
  },
  {
    "url": "assets/js/12.95d8e19a.js",
    "revision": "9f249b3a49be9204da9c350153371cb2"
  },
  {
    "url": "assets/js/13.4ee91739.js",
    "revision": "0ca172e3bb37652409c12cef84841d8f"
  },
  {
    "url": "assets/js/14.b3bd61a9.js",
    "revision": "32de4107033bb783a731da455b096438"
  },
  {
    "url": "assets/js/15.f1c855fe.js",
    "revision": "e32d9219ab511b8a8be3d4ab06cf6069"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.1cb75786.js",
    "revision": "faa381d95a95ebe73e9d57820f863c91"
  },
  {
    "url": "assets/js/18.4f5c9333.js",
    "revision": "5f607bca787bc3d32f1903a5090912c6"
  },
  {
    "url": "assets/js/19.66a9ab22.js",
    "revision": "ed8db02b0fad054c27f5f1d215dde097"
  },
  {
    "url": "assets/js/20.bf853c56.js",
    "revision": "b82294161a133395075249d70cbe065f"
  },
  {
    "url": "assets/js/21.5895965a.js",
    "revision": "97caa473a90da7ae35e3373f8ebcc13f"
  },
  {
    "url": "assets/js/22.b9ee47bc.js",
    "revision": "25d84841b8078d595d652fd158ac8bad"
  },
  {
    "url": "assets/js/23.a9722b8f.js",
    "revision": "271c1979a384edee50edc2fa62a2a44c"
  },
  {
    "url": "assets/js/24.22a4fecd.js",
    "revision": "d751cd74d23f1b4c2a1e030064cc38c8"
  },
  {
    "url": "assets/js/25.20ab2de3.js",
    "revision": "aca61003cf52f655d82818a3225a74ce"
  },
  {
    "url": "assets/js/26.023d00ee.js",
    "revision": "e388b72aa044230ee9bab9a7d4697b04"
  },
  {
    "url": "assets/js/27.4080a346.js",
    "revision": "0ba1ab1ed857b3a869870e5445b4e620"
  },
  {
    "url": "assets/js/28.07b15574.js",
    "revision": "953d873de5a2659f23688936ddcd26d1"
  },
  {
    "url": "assets/js/29.fc6f5ead.js",
    "revision": "577c0e76d5c659c25381aa72d99164c1"
  },
  {
    "url": "assets/js/3.efb9f3e8.js",
    "revision": "096c0cb2bca62db801eb8a58970bf237"
  },
  {
    "url": "assets/js/30.b17bda62.js",
    "revision": "c1a3b1980101916ae7cf759508532539"
  },
  {
    "url": "assets/js/31.50ac1f28.js",
    "revision": "7f1d2e65ad9157d91a08c2eadd44b14a"
  },
  {
    "url": "assets/js/32.e335f5c1.js",
    "revision": "32a658d42c89f163e084485fc870ae67"
  },
  {
    "url": "assets/js/33.caef3334.js",
    "revision": "dc9ae517d3896cdaa934208af6a0f5e7"
  },
  {
    "url": "assets/js/34.ace3cfee.js",
    "revision": "d7fe33a9b6eb202806da31bc70b803ef"
  },
  {
    "url": "assets/js/35.bc3a6e82.js",
    "revision": "abb2d4bf3936d89224b6273fa688173f"
  },
  {
    "url": "assets/js/36.5a436125.js",
    "revision": "36f4732795029daaf58a93ff4d7c545c"
  },
  {
    "url": "assets/js/37.8425d02e.js",
    "revision": "68134d7d3549fc53ce3e612f94908ee7"
  },
  {
    "url": "assets/js/38.7001dd81.js",
    "revision": "5e2e0f82136771ab7b3576687ffa27fe"
  },
  {
    "url": "assets/js/39.76d5c3a5.js",
    "revision": "839a3619e9ffffb2784796816b79c5c6"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.18599a87.js",
    "revision": "53bc8e7e0f28a184a1e9686372f27f17"
  },
  {
    "url": "assets/js/41.487b1dd3.js",
    "revision": "28deb762ff90bbf472feb527291f1e89"
  },
  {
    "url": "assets/js/42.3c549402.js",
    "revision": "b18c1f9d0eb46b9fa5661e78a0707eed"
  },
  {
    "url": "assets/js/43.7e72e053.js",
    "revision": "fe3d24e57f179522542aa9271772faa8"
  },
  {
    "url": "assets/js/44.1df3d31c.js",
    "revision": "3d0b1994db972036c71f2e1bc514d3e4"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.41aae702.js",
    "revision": "d748e31f666f4581ee0ccf43f88e3ffb"
  },
  {
    "url": "assets/js/47.20be7e43.js",
    "revision": "c1cd8322cdcea9880654ceb9c054353c"
  },
  {
    "url": "assets/js/48.87611086.js",
    "revision": "d4d2f003948aa15afeaf33491bea6aaa"
  },
  {
    "url": "assets/js/49.5d539b80.js",
    "revision": "24bc4db090d90917dd9cf4718eed4f87"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.7cb9def2.js",
    "revision": "e5fb1aa0fe0b7fa5c9251fb904169d82"
  },
  {
    "url": "assets/js/51.38fc6258.js",
    "revision": "ca046e5299710095ca37b143165d8697"
  },
  {
    "url": "assets/js/52.066acf98.js",
    "revision": "67e67544b540b62e2657adff9eb98c97"
  },
  {
    "url": "assets/js/53.6832bb27.js",
    "revision": "55f02280efa86e4a2316307035359c57"
  },
  {
    "url": "assets/js/54.fe4c23de.js",
    "revision": "53114646d1db05dd9fb57fbb93daaaf0"
  },
  {
    "url": "assets/js/55.aeabed7c.js",
    "revision": "392d60bec787cfd53859f39669823c7b"
  },
  {
    "url": "assets/js/56.b5199c25.js",
    "revision": "0aa70701c8aa4c08ffea39d05183eb0c"
  },
  {
    "url": "assets/js/57.5451cc24.js",
    "revision": "0e4d08604736f2a7c5ea55329d93fb57"
  },
  {
    "url": "assets/js/58.653e0617.js",
    "revision": "f9567204ebb939e5d0452a95e05104c3"
  },
  {
    "url": "assets/js/59.af8324ec.js",
    "revision": "bced09936767be6d91ed3da8a9c3d627"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.e1387edd.js",
    "revision": "7e9cf1ef4f1ab18029d242e8302fa895"
  },
  {
    "url": "assets/js/61.ba8a3d38.js",
    "revision": "1ec0b83beeb2434749cfa0d6d1b170f4"
  },
  {
    "url": "assets/js/62.2b021266.js",
    "revision": "6c6dd1e86a2e921a825cca6d7c530b4d"
  },
  {
    "url": "assets/js/63.a7e0dc60.js",
    "revision": "ad5f84554c387ee46f6db9f5e55ce9ee"
  },
  {
    "url": "assets/js/64.7a81c86e.js",
    "revision": "f421963a32c74b360e38e803ab0ce145"
  },
  {
    "url": "assets/js/65.a215a7c9.js",
    "revision": "dd352b03c69218c8ae77a25941a621b7"
  },
  {
    "url": "assets/js/66.4018a8f3.js",
    "revision": "91461e04eee0754d35a9ba5c26615670"
  },
  {
    "url": "assets/js/67.cee425df.js",
    "revision": "132f06c0c91d52086e9a24b3119d512b"
  },
  {
    "url": "assets/js/68.683d9ebb.js",
    "revision": "482d6bf9613e773dd5d9a2d960a79c5e"
  },
  {
    "url": "assets/js/69.1ace4164.js",
    "revision": "17c780dca1c781b276e2de214e78af0f"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.10c0ba75.js",
    "revision": "27eed6c13ac9eb0e4986d715f2133706"
  },
  {
    "url": "assets/js/71.45c295ec.js",
    "revision": "6994ae7a48bdb214bf25f7c1ac2245af"
  },
  {
    "url": "assets/js/72.a0121a0e.js",
    "revision": "5efeded2990ec1cae1196b2b9131b507"
  },
  {
    "url": "assets/js/73.3db67bcd.js",
    "revision": "8b1d22eae277e351439bbe7ff4053d94"
  },
  {
    "url": "assets/js/8.f958ee79.js",
    "revision": "a2a3cd48ba63e4adb09eb2e518782542"
  },
  {
    "url": "assets/js/9.288067d1.js",
    "revision": "4ec017d8918fd958fa53aedcf6cd03a5"
  },
  {
    "url": "assets/js/app.54fd68ff.js",
    "revision": "c070ed48b33998ce72053785ec2a6ac4"
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
    "revision": "ebd2f945c6dbfb4614b47754b8b5b520"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "2ff98b436de43f6da8349fd767af2cdb"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "693bdb8ba4aaaea9294c7c8c54a1d978"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "0a8db35eb65f7048d6620171ce5de058"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "57b3bebe2c1b91138c6c55fce5158745"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "4bc056f3035bbcc48f14f0ff785994f6"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "e975cf6a7a6ede0489ed0f6a234a14e9"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "a9cde76c1e6acb611e622bdf6161a97a"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "eb7bfdeb61a9a42134d8fc82d9d18da0"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "d449e801da9ea32f79fdf50b343d77b6"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "b872cd8424e9bae81facb67beab524dc"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "db5ef911d5f0772b2cfa38f05a197469"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "c98da21d730fdc60f2061a805827efd0"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "a465e6062738941d078f6ce43a0b99dc"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "6ef6839a623107f7eaa46cd574529e81"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "c199d1ff8a47a88f617a8965d4b329e5"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "27ae4be07c1dac1779fdcf39b548a15e"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "d2e546a8eae68f8b78912122cb49c353"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "18b5cae08979421c1823bbc4837bf9da"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "be9e4dac470cb65281e0ee707823b021"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "e12d2e24e88cb1afa613beae59bd5ee3"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "2c170ef8342fe1670ab42643831d542d"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "bdd9842746da099f02ffe06aadb4f93f"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "30e0fe7a5d96c53b52e94cc4b79dc027"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "5ae2ae993df7f7b101b8724b8cdd5730"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "fdba2ee0e5ee1d6512d3e94cc7af18cd"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "b63dce0d7797418f1a0e26a4044ece0a"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "c37bfe0ac25c7557661c851312add933"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "a4f4c2909759b223794959e3f031892e"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "002016b403102249c2ed43d379aa164d"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "07c6225e51b75f6c1b8d39053d174f09"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "464b95b626e3a1aaaa4151c2294aa6d8"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "4291e96a1f255c93f5bc66db4f915e35"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "bae127f6df3029b7b876a19e468b205c"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "79e7fdf29c24b972e5537c0c1ef74de2"
  },
  {
    "url": "categories/index.html",
    "revision": "3a8a1a38ec100f2cc5a2058f6253c0a2"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "d32d1d1328cbb0ad8f56245aaf29ab1e"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "50feb34f16292eea7bc2a03d73d67077"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e7fb0e2e8a5355aa7c88410494c72333"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "e027917ad1813be7abd0580bc21085fb"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "f3b0b1270a7cf431b78c734b5fb5f9df"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "1d3b6e638fb05ec5d32b2f638f6fc798"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "9416ebb9a4b5b36d3a72413bcd4fc125"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "0d63c4f1a09a1ff774a10447fa84798b"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "eda8dc595d63614eb30d24010fb78e98"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "266e733d395cf0a92707fb5f17f459ed"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "aa5031e7aeb0e1efe88a711396dde982"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "8517cb821dea60a50bc74f3ef37c896b"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "ee51fde14dfdee679268b3bfef9833ae"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "873622f9ec07de3c923301da5ba9347f"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "7f77974ac159caff64d9614d09adb19a"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "92b6689f5f65a574688ef7a77158d247"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "cb80505ca3db11a158f8ad6482149e02"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "1368263e32956f72ad19ad2a1d894a45"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "bda88d505068c01e6a0256fe46ba585f"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "d11fd5e92d7786e0d372e62b9eb14fa4"
  },
  {
    "url": "ios/index.html",
    "revision": "436f5f89d16f681e24dd54a35764647a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "4247385a36f892eb4a1268ba73c4293c"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "815ac0276221c3f9d9980a2729cde526"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "f9aa3e4efcc545416d71bf5784557bd9"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "fef05c5f19dceb7bcdb2a4240ffba73b"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "f08c6f458cc409b253fe3fa9ce2e8123"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "54f552456bed51491c99f73f3cc7ce8c"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "bf005bd3614aaade79f22a24e790c8ae"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "f5aabe76e2db9dbd9e50ae74a729aed9"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "f2d47e6b08e2d4ed8bc9fdfd3b8bfecf"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "bf0e6272ca9b6cc48c69f04086f7defc"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "4c9a2b8f56b9fb6502f3765f35638c50"
  },
  {
    "url": "tag/index.html",
    "revision": "685f74c3d121875076d94ff24a645948"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "74d964bbd44032c584f4d8e2b288c751"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "cc16b5c2e837536e40f28b7d8b0cf81b"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "c1aa0be32c1bef1bcab07c40aa2531e9"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "1020863ba8c4b4da71d2250fc7d85bd4"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "0dc3d90919e3bfc26541583a7545f2d8"
  },
  {
    "url": "timeline/index.html",
    "revision": "95db51bbc5bedc0d626ea26cd0d555cd"
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
