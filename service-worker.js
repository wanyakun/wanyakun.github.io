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
    "revision": "3948b7e51c2e2d217b1733396007236b"
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
    "url": "assets/js/11.088a805f.js",
    "revision": "d7eba76845d0f15c2720f3e63d317f03"
  },
  {
    "url": "assets/js/12.035d1ce1.js",
    "revision": "3fda28464eb3f6ea0a82c13baa043b57"
  },
  {
    "url": "assets/js/13.b909023f.js",
    "revision": "5ae853ddaec3e2bf073b934e0d1039f9"
  },
  {
    "url": "assets/js/14.da9b1187.js",
    "revision": "a60fa7e98ea8e1bb60f19843053e744a"
  },
  {
    "url": "assets/js/15.233b0d61.js",
    "revision": "705c7a95cdc0001b639ffbcabfb441c3"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.48535489.js",
    "revision": "bc5c3514e6b4b75b824caf62a8e02941"
  },
  {
    "url": "assets/js/18.1af61006.js",
    "revision": "d96aadae183b16615aa81cbc2218dbd1"
  },
  {
    "url": "assets/js/19.213d6c4b.js",
    "revision": "9b28ab5585b928a3b5b5303210b014e8"
  },
  {
    "url": "assets/js/20.66df9886.js",
    "revision": "0f6f35aa18350a0ceb60f03618cc63a7"
  },
  {
    "url": "assets/js/21.1694cff0.js",
    "revision": "55a7569b7842d775b0ae87d7086d8488"
  },
  {
    "url": "assets/js/22.cca81a35.js",
    "revision": "dde2c5176ed401a74c92b14ddf6f5c3c"
  },
  {
    "url": "assets/js/23.351b3bfc.js",
    "revision": "20a48c50b2e57a1a7094c08f7d0038e9"
  },
  {
    "url": "assets/js/24.b199fabf.js",
    "revision": "3c03b788e2fcedc2efa9495961d6cbc1"
  },
  {
    "url": "assets/js/25.9cdbc2cb.js",
    "revision": "e66dff19be80399f933dfd54b1515e88"
  },
  {
    "url": "assets/js/26.617f8500.js",
    "revision": "b1890ead766dd558c44b37f10589ab1d"
  },
  {
    "url": "assets/js/27.9ca1662d.js",
    "revision": "b46a5e7fbdacd2b7c5f306c4473c4b6c"
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
    "url": "assets/js/32.d5bbd965.js",
    "revision": "e28505ac981c4d27e998e217dd280d2a"
  },
  {
    "url": "assets/js/33.3eef59f1.js",
    "revision": "fa9a668c7089d6341605c3363ab258bc"
  },
  {
    "url": "assets/js/34.9143ddbf.js",
    "revision": "38e2e0c653e8d69cf1e6c50f42ea6dfc"
  },
  {
    "url": "assets/js/35.4f8e4dad.js",
    "revision": "4eeec5e170501df6a5b1c7172d6585ec"
  },
  {
    "url": "assets/js/36.1a717566.js",
    "revision": "1e65542bb31f4b4d17122693363cab99"
  },
  {
    "url": "assets/js/37.4d76f423.js",
    "revision": "b35118529c7f467269565ddd0fd42317"
  },
  {
    "url": "assets/js/38.3870cd27.js",
    "revision": "d7eb95fef05d037ee1bc577c660b474d"
  },
  {
    "url": "assets/js/39.8190ed39.js",
    "revision": "7b7e886e13eda5bbdf2ff8dcb699cf95"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.369eaeb2.js",
    "revision": "1f1e31fd6bfda814cb1395f337357ba5"
  },
  {
    "url": "assets/js/41.07db55df.js",
    "revision": "4cbdaa2edcc428320a207352d4b1464f"
  },
  {
    "url": "assets/js/42.14f76411.js",
    "revision": "76abf5e7816a28b495fe802f7ed3fdea"
  },
  {
    "url": "assets/js/43.5b7bd1bd.js",
    "revision": "2d7a38a633ad2ab223373d3e8d96a18b"
  },
  {
    "url": "assets/js/44.62fa2e8c.js",
    "revision": "d60636505caa7ef9d0f116b9c5d2a45d"
  },
  {
    "url": "assets/js/45.4b4ec47f.js",
    "revision": "4f2ab2c427e9bc3db75ae39a1858bfbb"
  },
  {
    "url": "assets/js/46.a5ae293f.js",
    "revision": "de64aaf9970d94f450e7e7d7a5fea5c7"
  },
  {
    "url": "assets/js/47.dfacbb4b.js",
    "revision": "6bef639bade7d23d255c694e07678114"
  },
  {
    "url": "assets/js/48.8deb5db8.js",
    "revision": "12f689aa000cb977a0927714c7be60f6"
  },
  {
    "url": "assets/js/49.d7ce1e29.js",
    "revision": "a4455cfdb6d6951597e1f31a7655a727"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.d953af53.js",
    "revision": "18490e0ab9582bc66cf4574d6a67f1df"
  },
  {
    "url": "assets/js/51.cc16eb80.js",
    "revision": "f5bc611334ed261e833d1da691fa1b96"
  },
  {
    "url": "assets/js/52.7483abc9.js",
    "revision": "4bb729a95cab4e19f0315ae36bdbc60c"
  },
  {
    "url": "assets/js/53.12747e83.js",
    "revision": "d287c910c56ec1c543380039fb3d9e79"
  },
  {
    "url": "assets/js/54.38496f80.js",
    "revision": "91fff001a68235763f29aa68740f1c06"
  },
  {
    "url": "assets/js/55.db7bea93.js",
    "revision": "23fd2ac2c9220a433794570df530841e"
  },
  {
    "url": "assets/js/56.efdbf34d.js",
    "revision": "25781df242e9da5095e9a78fd968c223"
  },
  {
    "url": "assets/js/57.c1e5dd85.js",
    "revision": "34af0cb8915bb1ae77704c04db00e42f"
  },
  {
    "url": "assets/js/58.5f91ce78.js",
    "revision": "4e7cf6e9914df4b3b79bd27b7a5ce81f"
  },
  {
    "url": "assets/js/59.0b570db1.js",
    "revision": "a6c5270f6cd6ebe2c8ebe5ba7f7cd184"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.90bb754f.js",
    "revision": "e6188035dc1b218d511b753eafeaa286"
  },
  {
    "url": "assets/js/61.baadcf54.js",
    "revision": "0cedc4961966adb4de7e46814f6f8429"
  },
  {
    "url": "assets/js/62.f06da2b3.js",
    "revision": "a6a5eead84e2c70d5c2ca66f7aace61d"
  },
  {
    "url": "assets/js/63.51be9621.js",
    "revision": "be602d33acb75f5a2f604196778ee427"
  },
  {
    "url": "assets/js/64.ec0f1f71.js",
    "revision": "7cd05717aa4062c43361b1362372350d"
  },
  {
    "url": "assets/js/65.cb562ee8.js",
    "revision": "27a5dbb0e4216e0447850f7bf9c35518"
  },
  {
    "url": "assets/js/66.facdece7.js",
    "revision": "06b638be626ce8901d37acf33aede980"
  },
  {
    "url": "assets/js/67.9c8310e5.js",
    "revision": "8e95878c4ec16ab4348bfa6a7eb20dbf"
  },
  {
    "url": "assets/js/68.395ff589.js",
    "revision": "399fcf7f1d0e17be8be38c62e4bd6bc5"
  },
  {
    "url": "assets/js/69.1098dcf6.js",
    "revision": "d820ab90dc328e44a8dbd832c0ab1dad"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
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
    "url": "assets/js/app.7b928d92.js",
    "revision": "25df7e7d40ade02780d5f708b0b3b606"
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
    "revision": "de30bc1ea0eabaebe367378c7d974b39"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "bce64fe64fa202537e74b24c248260b2"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "554bc7fc7762cfa70525310794e91e89"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "c9e6784a31f176421773e18c264d48a4"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "3b8c76e2f4e7b160cf9d875dec789874"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "69559d51e8c0dbe36274a02096aa9cc9"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "579325887594e025088c9d155143c549"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "d5e10ecd8d55b7f26df4d06fe2a64742"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "85d488af268d7b0c23796b3998baafcb"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "b487a592d06bb1d86c8a1378c141d208"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "482d987be2ae184ecb0097fb538553b0"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "51450bb09b91403ae9e128b9e9eb303b"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "00fc27461fd31990aeea77e93c872e9a"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "19a84339c1dba3f973e40680af135089"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "bcf1c9619fc503f4556ef684450fb252"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "10de0321b2ee6abb32fe792b83db32d9"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "b36b2eebe257a1079c27df025f605056"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "ae5b72c391a97d4d0d934028eff1a930"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "997715b681d79087970a7d51d57decbb"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "c48b65680cfc56ebd938ab99561542b1"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "f2d896bb228013423a383bad9f4391b2"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "82c095bf0b7bab3b520da3127a67aa77"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "14e104a6ca393fa51416a406fd9efe0f"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "7501f5d6f6e503f0418585a027660b79"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "400187b7cbbc8b59bd8884aaa5031277"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "c32d94f0000df4fb7d5b0a8ab8478295"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "79f7d68d1bb496cceb8a8ef847f81c4f"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d42f77d0f8250ca8b46b6e6f445dc6df"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "36c5245be333dd10a708244ec098464a"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "b1d5e351a6338c3f2fa506f613cd49b3"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "e81e632e67bc1836e917a4ca81961278"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "8af6a8d5641abd6fa11889931aadcfe0"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "7b67bd3afa6f68233da2a1997881cd8c"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "ff3276a302c57368c5434fb9b3c186d1"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "4a0855617292a11ed68d614a0ede480a"
  },
  {
    "url": "blogs/code/2021/2021-06-15-windows-hyper-v.html",
    "revision": "94d6a63ddef71cf2644304e91ad148c8"
  },
  {
    "url": "blogs/code/2021/2021-06-16-install-ngnix-centos7.html",
    "revision": "f3171cf74d32d1930a43aeb78e485ff4"
  },
  {
    "url": "categories/index.html",
    "revision": "5b296ab40532658f252bb9e4fa0f5e6e"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "4a0cf419233bc87089582780b5b84525"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "0a4e41a86e9fd78665ac2fadcef92161"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "1d3664741a0d790562c5d34606a6316b"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "27b6c512ece7dfc648da6c3783c09c64"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "15531a077e7be70d0558a273f846510f"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "d7eac57d1f0d6c35969c851cf0d90f9e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "23870d1441ca9d65e185f37e0494e1b2"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "75055003c912629e363da572b81813db"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "a645348322591b49e459724ded788c4c"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "09825082c6a5803c72506d3a3ee19253"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "a11f9fac141c91133daf660aea1c2c81"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "9a3f213576e23466e7e862a7b0c9047b"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "0685fd01f72116617aa8e80937aae2b1"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "7eee87df47733dc86b94b569af0fcc18"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "5fc12020efad7e85b7bde54dc6e0bbb9"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "a4fab8916a5acf6573e3738d5de246eb"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "5c22b1f573fdb9406d04bbb320c78839"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "4dd47e654d85cf30039a6cd829e5c17f"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "44f50afa4b3f39a4c6a02ab16be650f7"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "5b4bdda7bee655f6a49eea3474d9b1e6"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "44ed556580b929cd319d9f05ff949b2c"
  },
  {
    "url": "ios/index.html",
    "revision": "60504345b09fab753539438c5244989c"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "7579cc7c78c82c92a391bfe52371969b"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "15894cda11b39868c0655441cf71a8bd"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "20386cff85f3c1bde77368d5c723938f"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "6327bdfb9cf4d8e44f4e6bc89bf87f59"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "c1712ba5c24b4c1000eebc6b822cb0da"
  },
  {
    "url": "tag/index.html",
    "revision": "57579b10ec429703e48356ce38b77351"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "8b2d07225c96b2f8231ae715dbb01506"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "6ec07bb9ec64b88888cf9da2b7832c77"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "cfd2cd0f4ca48af06080186220947234"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "124585c37726b74c1b5e40a1aeb9735c"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "9c9372c06c4afd0fad3cd49800bcc506"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "93e04824996a0a139782296408d5a926"
  },
  {
    "url": "timeline/index.html",
    "revision": "29f0bfafed2f3fd0a3586765ba0a932b"
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
