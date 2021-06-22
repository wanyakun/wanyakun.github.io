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
    "revision": "301b7b61e1a4a85c2c3f0f827f3a7510"
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
    "url": "assets/js/11.0b60049f.js",
    "revision": "2c8842ff4fa5236b81ea71e4c6b953cd"
  },
  {
    "url": "assets/js/12.ed12aa9e.js",
    "revision": "6a1f92b0e7914c039398ea5b5c0a658b"
  },
  {
    "url": "assets/js/13.93ece332.js",
    "revision": "abae44e35e926afb776525c3ebe41225"
  },
  {
    "url": "assets/js/14.c888913e.js",
    "revision": "4e8047baf1528539dabf6cf8b1f5b6f4"
  },
  {
    "url": "assets/js/15.ffe1887d.js",
    "revision": "c338f632e8a4bb9a8568856c7c766c1e"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.35e0c6f0.js",
    "revision": "7930b22efa1f034531f3325c5709be72"
  },
  {
    "url": "assets/js/18.065684c4.js",
    "revision": "32830edbc1f3fe1bea09429bdd385f91"
  },
  {
    "url": "assets/js/19.efdef423.js",
    "revision": "eb2dffa54a1967718dba6f9612b40051"
  },
  {
    "url": "assets/js/20.cd7761ac.js",
    "revision": "bde9373347dd0cdb4eee5bd035ebac35"
  },
  {
    "url": "assets/js/21.f0711365.js",
    "revision": "266ccee6f5f6afdc94634437b0326652"
  },
  {
    "url": "assets/js/22.de86ec16.js",
    "revision": "2abd19ff95fae1d2d6ed859383445a28"
  },
  {
    "url": "assets/js/23.e1161d51.js",
    "revision": "8cc4721a277498af6309bb3ed9338460"
  },
  {
    "url": "assets/js/24.9518d13f.js",
    "revision": "ace1dfec0751403322f90bdb9fc9bb20"
  },
  {
    "url": "assets/js/25.e04be5ce.js",
    "revision": "cd0bf1fcbecbb109f7940b81360938ca"
  },
  {
    "url": "assets/js/26.1af54ef1.js",
    "revision": "3962702a6eba85bfc9199fdf26451b13"
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
    "url": "assets/js/32.cff2a6e3.js",
    "revision": "1553a979f862bfa46fe4257aa756a0fc"
  },
  {
    "url": "assets/js/33.c7fb3978.js",
    "revision": "5063da0eb0ce7699f59c7030c6acec4b"
  },
  {
    "url": "assets/js/34.7b88a507.js",
    "revision": "e038de7a9f90e5f56e5d915c311d79aa"
  },
  {
    "url": "assets/js/35.875e1503.js",
    "revision": "cdd27907988f057e0589ed5ca2b97a9f"
  },
  {
    "url": "assets/js/36.8a7a6181.js",
    "revision": "637336c889161c652df32c53d7ed73cd"
  },
  {
    "url": "assets/js/37.3882ad16.js",
    "revision": "7ae716d5c506e480bc571a81c5ede8b9"
  },
  {
    "url": "assets/js/38.80b07080.js",
    "revision": "badcb58dcc9c4e83ccdebf419b391c70"
  },
  {
    "url": "assets/js/39.1d32e73c.js",
    "revision": "cfdf81ea66efb227c17094a36eefb92e"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.c69f069e.js",
    "revision": "c841e78af1fef6a3cd0edaefd9cc7776"
  },
  {
    "url": "assets/js/41.1cf317aa.js",
    "revision": "2a846d3eb01a5bde88b799cadabf0d08"
  },
  {
    "url": "assets/js/42.176b1e48.js",
    "revision": "b6319eec2101b0d297275d103caf91bc"
  },
  {
    "url": "assets/js/43.6484d85f.js",
    "revision": "6c939da4f924b859ca2ca636c6047bdb"
  },
  {
    "url": "assets/js/44.cb58a898.js",
    "revision": "0865b4b6c82a995f8fa6023ab8dff84c"
  },
  {
    "url": "assets/js/45.d03aee32.js",
    "revision": "fe24f5996c32b4c6137a9c66bb0eccf1"
  },
  {
    "url": "assets/js/46.32202302.js",
    "revision": "2cb18ef7d2e077bb48e0fe0171c59870"
  },
  {
    "url": "assets/js/47.4d4c5247.js",
    "revision": "8b157e3a74ccd7d3cb11948172d6bb93"
  },
  {
    "url": "assets/js/48.09a47713.js",
    "revision": "243e69b8bff2248423f523c6cf6a9fd1"
  },
  {
    "url": "assets/js/49.c9c5b6de.js",
    "revision": "0cfe726afc0979811da2133251ee1bee"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.477ecd61.js",
    "revision": "feca9b6aff8cd734f11984402ddcdde6"
  },
  {
    "url": "assets/js/51.5b5cb17f.js",
    "revision": "a8e29af1098a7db7e576f303def7e5e5"
  },
  {
    "url": "assets/js/52.be54bf13.js",
    "revision": "8d49a359b3a0121447ee9ee5f7f7d39c"
  },
  {
    "url": "assets/js/53.6832bb27.js",
    "revision": "55f02280efa86e4a2316307035359c57"
  },
  {
    "url": "assets/js/54.61309909.js",
    "revision": "9b77a47b19faf5e7576c083b60fad50d"
  },
  {
    "url": "assets/js/55.62e3ee4a.js",
    "revision": "f2579029f1c5e848f7e4ee8cd7395708"
  },
  {
    "url": "assets/js/56.9ebeefda.js",
    "revision": "f72ae23ab7a98d3c6c9332083d567caf"
  },
  {
    "url": "assets/js/57.35614dc8.js",
    "revision": "0848507a2b8371c78b5d1e384f35a3b8"
  },
  {
    "url": "assets/js/58.e70f84a0.js",
    "revision": "900afa711ead376137155f583671cf79"
  },
  {
    "url": "assets/js/59.9696ce60.js",
    "revision": "26c9675a654c81181be54863bec41398"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.854af369.js",
    "revision": "bb1f1ce4067959b4c2f46b937372fc0e"
  },
  {
    "url": "assets/js/61.46dcb24b.js",
    "revision": "b83d45e766370954dba1e5ddbf1050cc"
  },
  {
    "url": "assets/js/62.c87505e0.js",
    "revision": "1d12491fa5572e5d2ac684fdc7c2f97d"
  },
  {
    "url": "assets/js/63.1f34553f.js",
    "revision": "1803f7e80d0ebee6e58cca9538d7d611"
  },
  {
    "url": "assets/js/64.9c661659.js",
    "revision": "bc551643a141f13ad2200e7187e2612c"
  },
  {
    "url": "assets/js/65.cbcea57a.js",
    "revision": "18a7fcc30b6610e309436acc7f78b72c"
  },
  {
    "url": "assets/js/66.a4e530ed.js",
    "revision": "c0059e02840b8fb92ee27d4d2244a9e4"
  },
  {
    "url": "assets/js/67.b63bf2a5.js",
    "revision": "ee90a248f7b1264ae10533f524836914"
  },
  {
    "url": "assets/js/68.500729b6.js",
    "revision": "fb6b481aa3ffd748d0647bb996cdf4a6"
  },
  {
    "url": "assets/js/69.c05f842f.js",
    "revision": "1221622d2dd7397d04d56d15fe045dcc"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.877e3105.js",
    "revision": "1073bcab70a99c66ce2f0ba26c8d7843"
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
    "url": "assets/js/app.5786095e.js",
    "revision": "118be1f4b21b28684774c3313da7286c"
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
    "revision": "8fac4950c21bd1924b1f9c052549053f"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "3f37bb96e9bc7cc2bb61fcd8677e2bfa"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "87182d2fc268f7709d392ee3e8bab451"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "92b93a824291d4f481fe9a861ef80bf5"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "86f7310c0d9b09103a37e69a2125dd58"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "02c21b852d87a36a97ddb8e9dc26e07d"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "bf3aeac11b41c4332b7f50657db7e416"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "eab90e2f11d7855d28083e02b43da7f7"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "39695609d7a17eae6732fddecdcf6251"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "4b0d7317d44499a99b7b3eea86ecd8b7"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "48a60ce3eff5df2d4c615c5a9bdcc8a4"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "6549ec5ab8a9e433300b428b274a1b9c"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "4232e3e7401718aded5800811dfd4660"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "58d7140892d1ddf7d51c61b36b696591"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "e293b70972e67fff385b412a4b47c0c6"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "e15f4bd470d7964512ffbdaea7334f5e"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "7f590ebc6fbe6bd4c25451614da70b5d"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "16e77b0de8a747e34ee3e3405fe588ca"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "34eff45a48f0c00fb36664eab5084227"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "f7539ee6fbdd1ab599c2dfaaefab9e78"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "e3e95498227bb8647dcf43a4ba29d08e"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "04b6b1b3d6c8c45429775620494e25ee"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "5912321d6ca487c0f7613757d4aaa882"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "c344c18e27c73e0a35a659f1cae2720d"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "64316969a15107af645910bcda5de20e"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "2fe8dab858fb9302c26278bf83e96fbc"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "6bae24d6c070cd97cd531901f75bab9a"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "26247380fc685dfdee903b13593b7df5"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "2b0c4ccf93fbcdf5b24d961f3c36e1a0"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "37a37e9537474183b8e6fc64a7190e84"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "5ed8833b7976639c85c9d375226f061e"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "bdbb72e79263f1e5fb63f4bd01f9a24f"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "0874968e8f85a4cd778520083bdc9e8b"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "19a889cda9c0e91bceb70536cdad1b0c"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "311c7c0fe09dc278a970dd4e2ab4875b"
  },
  {
    "url": "categories/index.html",
    "revision": "96d8cf9bcca40f35e4a5f9621f0c5af4"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "67fb0c28a5a4ba77a51b0b70ec68df5c"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "e98b592f78cf5f2b01484ca081789e3c"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "1fa52b8c21508dbf001a050b6ba7c7a2"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "e0bb7fdaa348940f04afd970bda8e80b"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "2c8bb60b07d0c745c1d02149c0189d32"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "4938bc737af9b6d3161904b435bc379b"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "e59b3fcce417085d7db7a1fc919e8363"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "6b3b1c43aac9bcb34c3436eadf649316"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "e026aa31fd7ab9613a976bf69d1db001"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "cc66729d042dc9bc43b5a76e45c969d6"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "4d6c91339ec55f8788cfa00f9325b4f1"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "a5803a5456d71cb2f4b61d3f4c7bc32d"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "7554cbb7f129da907ad7b4269845798b"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "367a6b43cd0011bf24dbfa93df6fe691"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "4219588e36a815ec35da4cb6f9df6646"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "1bfb50f99b35a4e71a4595243c8ce974"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "dc1f848c009b27ee3b376d8271a19572"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "95d4b3c6242de9cd4537510003f18e66"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "5ca2ba487ee11c1f04f3f106b4ab84a0"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "8b96e223d141861d207d8d331b80e71a"
  },
  {
    "url": "ios/index.html",
    "revision": "3366a625fa5999acca6b96485c40eb0e"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "489fa58c4ce4850641e89d6bfea663a6"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "a73c1eda57e90fb5e73029ec4e02a47b"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "2af085a51123cce0f9b16e6c35337296"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "6dfcaed69461261eeec12da773f4fe43"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "db1dd17081b5fe85bfebeaca4e61c83a"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "15032422cd567bcea4e7390d40fbaa9f"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "490ea48c03574f93f26dc5a95ede2286"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "e0d67174507692fb9dbb38de09b66fd4"
  },
  {
    "url": "tag/index.html",
    "revision": "91ea2f2a3716c0bb394857017b35cc26"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "d27800726844285376b876508230cc90"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "83336be24b43730a5341cc4a0eff2e76"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "b9dad1d522e5e45a4b6e41d1e4e17fb5"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "d47c3075df75af832d3d83de5a700277"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "0625e9c351dcf998f70d0eb28929e52b"
  },
  {
    "url": "timeline/index.html",
    "revision": "18df885e7c3b045ee3b245da5a82b347"
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
