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
    "revision": "95561598a8258fdbd8f7cdb47b531745"
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
    "url": "assets/js/1.d91856e4.js",
    "revision": "73abf37dc0af1b2e8b652ff433a4445a"
  },
  {
    "url": "assets/js/10.a8358855.js",
    "revision": "66a1d23432ca53aa9c54325f3cb38b40"
  },
  {
    "url": "assets/js/11.6c650397.js",
    "revision": "5dd99b882fe198520ca5270831f9a11b"
  },
  {
    "url": "assets/js/12.56da2bd6.js",
    "revision": "2878b0885282c2c9ce81870330f56a8e"
  },
  {
    "url": "assets/js/13.9282617c.js",
    "revision": "79cc08a57d5489ebc94bbdf67e422d6d"
  },
  {
    "url": "assets/js/14.f35fbc18.js",
    "revision": "6a36f47907db53d493bf1bbcfc1fba68"
  },
  {
    "url": "assets/js/15.746b5cb8.js",
    "revision": "21267d20e31f0f4e5035acc6f9f7bd20"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.1c780d42.js",
    "revision": "c27cf89645b6228eea7cfa4b691d06cf"
  },
  {
    "url": "assets/js/18.a9f1fae0.js",
    "revision": "90fa6bb32253ba51d0c27a2df8c65598"
  },
  {
    "url": "assets/js/19.30e5fb73.js",
    "revision": "c25bb2fd856a069c887b99aca8cc44e3"
  },
  {
    "url": "assets/js/20.5353f44e.js",
    "revision": "052e34dda19da6a0a1c28145f2404013"
  },
  {
    "url": "assets/js/21.e328614d.js",
    "revision": "663ce4bf8872c4409e544d0536753802"
  },
  {
    "url": "assets/js/22.653a6df6.js",
    "revision": "01acc9c364faaa5b9a48f1a9f058e6e3"
  },
  {
    "url": "assets/js/23.df591bff.js",
    "revision": "cd7b746f4b2ccc642eeafac33614715d"
  },
  {
    "url": "assets/js/24.8d06ab54.js",
    "revision": "8d2c5b613fd22f0aa2c8bb39a116edd2"
  },
  {
    "url": "assets/js/25.19493bad.js",
    "revision": "6230fc2ccaffa086b6deefb979e4d288"
  },
  {
    "url": "assets/js/26.a33b16fd.js",
    "revision": "8c72c03b01acc1adaad21e929b062535"
  },
  {
    "url": "assets/js/27.4080a346.js",
    "revision": "0ba1ab1ed857b3a869870e5445b4e620"
  },
  {
    "url": "assets/js/28.8dc57679.js",
    "revision": "b81e95970904e44019013faf392ed8e3"
  },
  {
    "url": "assets/js/29.fc6f5ead.js",
    "revision": "577c0e76d5c659c25381aa72d99164c1"
  },
  {
    "url": "assets/js/3.2ddc2e9f.js",
    "revision": "fc3fe116cde3e025d1d61e48c299e006"
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
    "url": "assets/js/32.190a3971.js",
    "revision": "626af484ade4bfa117d75ec6ab115758"
  },
  {
    "url": "assets/js/33.f6a36aa0.js",
    "revision": "cf585da19d3dde2104d8588cbf87c3e9"
  },
  {
    "url": "assets/js/34.f29584a3.js",
    "revision": "002279dc46a4b7a7ca8505abac29e2c0"
  },
  {
    "url": "assets/js/35.f5a8bdae.js",
    "revision": "9d4b9a64ab8b4a8b61702d311745ecea"
  },
  {
    "url": "assets/js/36.869ef0ee.js",
    "revision": "89a781adc80d26ec977b70b1bdde34e5"
  },
  {
    "url": "assets/js/37.5b5777e0.js",
    "revision": "e5a526bfa4bd03530632531ec971f6a9"
  },
  {
    "url": "assets/js/38.80b07080.js",
    "revision": "badcb58dcc9c4e83ccdebf419b391c70"
  },
  {
    "url": "assets/js/39.a2b7eab5.js",
    "revision": "101efdca5dc4f8dcca68d26aea6c2990"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.57e10b81.js",
    "revision": "8015f3e5115bd2a676dd55d6090bed2e"
  },
  {
    "url": "assets/js/41.89890946.js",
    "revision": "1f20e023aee98f8a78f1e62f865d02c7"
  },
  {
    "url": "assets/js/42.a0d0afee.js",
    "revision": "dd44da00f9bf2a5aa8e81ec7134683e1"
  },
  {
    "url": "assets/js/43.ca68cd64.js",
    "revision": "286aeaea3a6c7fa8b2318b23f2c782b3"
  },
  {
    "url": "assets/js/44.f842ad8d.js",
    "revision": "7d5fd2b159710fc539f29e5db11340af"
  },
  {
    "url": "assets/js/45.941ef750.js",
    "revision": "11a37a0fb09b914ab488ec76ffe5cfa6"
  },
  {
    "url": "assets/js/46.ee70e4ef.js",
    "revision": "72adfe414cd37fdf28d410b010d1e1bb"
  },
  {
    "url": "assets/js/47.64ee96a8.js",
    "revision": "066578dabad735d11ce27f95f9252014"
  },
  {
    "url": "assets/js/48.644666ba.js",
    "revision": "b17c1cb7edf758f6f6ac795da83e29ea"
  },
  {
    "url": "assets/js/49.63a0a018.js",
    "revision": "a52b5698921193de721fcecb06c26cb6"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.741fdf73.js",
    "revision": "e47ef4e2dca7654c58520c10b64492da"
  },
  {
    "url": "assets/js/51.c67f706e.js",
    "revision": "08f2ca9677077642d2916a817b64c32a"
  },
  {
    "url": "assets/js/52.99293dce.js",
    "revision": "772fcf68aead92154b17fa861fd0795d"
  },
  {
    "url": "assets/js/53.6832bb27.js",
    "revision": "55f02280efa86e4a2316307035359c57"
  },
  {
    "url": "assets/js/54.1498b13c.js",
    "revision": "06034ec063a5e95ccdaa261cd0b1cfbc"
  },
  {
    "url": "assets/js/55.c0315c38.js",
    "revision": "939626ae54829e92a53176c6a10f88da"
  },
  {
    "url": "assets/js/56.b4e78b40.js",
    "revision": "6ad64b70f5c35e87a7416bbfd24d0434"
  },
  {
    "url": "assets/js/57.70d8e67c.js",
    "revision": "cbdde871123e878d7021dee2896d2514"
  },
  {
    "url": "assets/js/58.e70f84a0.js",
    "revision": "900afa711ead376137155f583671cf79"
  },
  {
    "url": "assets/js/59.537e3db4.js",
    "revision": "b0ea1314799f75a6f406043ab4c038de"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.9e822e64.js",
    "revision": "3504f75e6a9fbf3779db621b1ffd9e55"
  },
  {
    "url": "assets/js/61.b3b84ba4.js",
    "revision": "7b9f8d1fa74c25450f2780c90c7a09f0"
  },
  {
    "url": "assets/js/62.d846a40a.js",
    "revision": "ded9979b91ed7e47431eff8913e21075"
  },
  {
    "url": "assets/js/63.7200c90b.js",
    "revision": "fbe52100f668655d8665da560162c795"
  },
  {
    "url": "assets/js/64.912d7ad6.js",
    "revision": "0c001db7a53ffaad5f9eee8f2cfdfab5"
  },
  {
    "url": "assets/js/65.a5962603.js",
    "revision": "12981873c6d64d8a0ae11eef9755a939"
  },
  {
    "url": "assets/js/66.0a17e933.js",
    "revision": "01b5bc76df03ed40fc2f05cb8ff743a0"
  },
  {
    "url": "assets/js/67.cc4accbd.js",
    "revision": "8099ef0f8825372e72c96bf6967a93c1"
  },
  {
    "url": "assets/js/68.56f75580.js",
    "revision": "69a1cdc8567db4b7c3567c4cbbf2b2c1"
  },
  {
    "url": "assets/js/69.b5c74a3a.js",
    "revision": "737a4046146e710ead9a427f05b819a7"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.9dc00ec9.js",
    "revision": "374e59a15d2bcbd0e5ac1582a9264859"
  },
  {
    "url": "assets/js/71.614a61e3.js",
    "revision": "edab43e53eeee40a994ccdbc32989ab3"
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
    "url": "assets/js/app.692f3dd6.js",
    "revision": "31ff20ad6a9f88a4c3fe3af0584ded0d"
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
    "revision": "6736193ff79c3e08606e8575086b9322"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "637beb0133fa86e4119b0271a61ae56f"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "2a2977c0c7408b871b4e21009c5d8f64"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "788372b4e87aea0220ed175a710c0a00"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "3db5352cdd7f74c7b54498401950930b"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "b03d7a1fcdb15724d6690e9cc08e0876"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "5501b76fb831bf8ed791e152a3e016e5"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "7afd98d8870889461077d47a582fa1f6"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "80c82658da74d1a82b79c7f2e1e7a588"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "f8820908c61ba3405a38aee1e71a1b55"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "fd1cd4de78194fa70617dfecee5dc0fe"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ebee05f41be3370469ab44e84ba796ab"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "bf7a82388094e93da304740116fe31cb"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "a4bf8bd6cf5d3e0bfe0bdce3bfb8921c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "692218073ec81b18b177dc90516f56a1"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "6f8571f8cd8d1cbe48b0461cf04d8bec"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "c76cbc86d1f15fee1cb150e9074ddd6e"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "c0e4e4a9172ef87360c4b0bb7e062828"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "af08493b604c2dbec4ef643f42c7912f"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "de57c5268cf072fba78b7ce28ac734b1"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "27aa235bfef9ae12269e49422076a8fc"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "e441148e69a4b1c1a8dde16428c3b975"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "ef5b7273db577526ae12e8b156bf4384"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "a0da053d647c3dcb9835f809a79d3be7"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "2a5f029ccd334715d58887203ad0b73e"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "7169d4bee9958ef9ff60c5933b1b80a0"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "48073b0f910392238aca6e0ce2e5bd45"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "cb65abefb0a40bdcc4bbcbebd61bdee9"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "fab89d9f4e569bf92c4e1c5b10f4299a"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "a7f1bd49e3210ddcdaac4b72049f95a9"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "5deae4f78cd039aa65f1b06ae42d595d"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "ee2ba03f084fa5da1f29215594125a2c"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "c51cd73fe7b44f22c1e36bc3111cb6ef"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "e669c128dc0d2839c7aff32c623e84f4"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "e6d6b47c1d6307d7d3009aa9272c1edd"
  },
  {
    "url": "categories/index.html",
    "revision": "f94aa4cf86058be9c56241233f2d52e6"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "60d9f2952535ff6d5e86ec4107d92bcf"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "e6d0aaa079454d8dc00d395443cfe252"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "0dc037fb6f83a187e27ff732dcb47fa4"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "f7e79f739ac115edd95abb51da595a7f"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "afb6020a734afbac6d4c323bf35be79d"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "76ddd8c77603095e02fce4bfaf4ecd4c"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "ba09f4521ab615b4177f2f57ba31c951"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "9a028a3cee64cfaf2326766d31f4e3ba"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "bdadfadc43a5362fa7b279c51103a3a5"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "882604ae092004e3a180957b52e89e12"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "eb3c61285bdc01434e88b30f9aab535a"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "66f61f25b500adfe7ad9254060b9c2ba"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "449a8858dbebd0e76ac329f5e62bb2cd"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "72d32c0e771501de03efe8ef83f9f009"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "3225190a1d2ef958aff8c0233e539605"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "a87c9fbd573631f47fc998c89906f370"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "b0ed6530c6f46c550dd55bbf4178ada6"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "9aaac4f14963009e99a933ae8fce41f2"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "4fa0f9f1beba3a664f9c3aa676254485"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "cbba650894b83fa3bc5604fb0b0f10b2"
  },
  {
    "url": "ios/index.html",
    "revision": "cde8b04f16b6147c9d592f23b8ec4990"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "c5ff2049d5fd4b106f0e086a41b7a8d0"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "727d37c748dc03dc4f9e68896c58373a"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "c08bb69d32a6f7a29579e6b1287a0b1b"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "83703d669101535875df0cb44be78909"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "afb99288bb2e2d9795c918cf1c282d98"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "4d5bd42c4d69b17bffb796a9c8a7119c"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "cad8a3310a1b7f24a5707c1b78d038ac"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "29000b958d0ef72628acafe0660fb8df"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "f57c5d30ca48dc96ad4f42007bd30f49"
  },
  {
    "url": "tag/index.html",
    "revision": "4f91ad5e665923a64940f4cd3d279f32"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "b5818be2ce0f8f8a9d05fb1a6d451fc3"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "eff98881d086078c46a63d42bf7d6de6"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "09abfa69b90f1e60be77ac55f5dd5fe2"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "420c999b1757254aae76e403547a3948"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "cef43c510ace4cb9dc19af8b957ceaba"
  },
  {
    "url": "timeline/index.html",
    "revision": "861076d81d58c437c664c5770bfe5f51"
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
