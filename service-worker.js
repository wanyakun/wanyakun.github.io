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
    "revision": "395a295e7c5f224f356825644af5b8ee"
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
    "url": "assets/js/11.8127f633.js",
    "revision": "ed958758c4becd0539a51e1101768d64"
  },
  {
    "url": "assets/js/12.fc066721.js",
    "revision": "8d88c521b75a2e383ab00f77f17370a8"
  },
  {
    "url": "assets/js/13.8588de22.js",
    "revision": "ac2e816557799769cd8fb79be7c9e68b"
  },
  {
    "url": "assets/js/14.13b56f07.js",
    "revision": "d15245b6ac6a3ffdf5de0fe25b981cf8"
  },
  {
    "url": "assets/js/15.5cbd71d1.js",
    "revision": "cd59f385d8d51627084da94785d50050"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.4db374db.js",
    "revision": "47328efb31bde2c4364760e1647fe9ca"
  },
  {
    "url": "assets/js/18.b64bf781.js",
    "revision": "8a0ac79f2dabbb47c1281a40f18529ca"
  },
  {
    "url": "assets/js/19.37c5cb3a.js",
    "revision": "ac43045f93239589873248b9ad4b9b0c"
  },
  {
    "url": "assets/js/20.104b00b5.js",
    "revision": "c35f06764b590eef0ee23d52e94a12c5"
  },
  {
    "url": "assets/js/21.d935eb60.js",
    "revision": "a00d680d9c1d490a5adb2b036fd59796"
  },
  {
    "url": "assets/js/22.6ba2665d.js",
    "revision": "c1d643e963b22749c29802ba4d0b2e4a"
  },
  {
    "url": "assets/js/23.ea6f4acd.js",
    "revision": "bbd839be144ee970d9ddedf4d4d82528"
  },
  {
    "url": "assets/js/24.b34881a8.js",
    "revision": "2adb4bdad69711842bab154f7254aad5"
  },
  {
    "url": "assets/js/25.34efcbe5.js",
    "revision": "0b81eca4b0c9ce019340925dbebbf997"
  },
  {
    "url": "assets/js/26.51911ab9.js",
    "revision": "9d9cc271eef1bde2e4444ba61be996d8"
  },
  {
    "url": "assets/js/27.4080a346.js",
    "revision": "0ba1ab1ed857b3a869870e5445b4e620"
  },
  {
    "url": "assets/js/28.69f903a8.js",
    "revision": "96a61d560422d707961b242bb904c201"
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
    "url": "assets/js/32.42ad97ce.js",
    "revision": "f89a9892980230056faad8e78df7bc3c"
  },
  {
    "url": "assets/js/33.f6a36aa0.js",
    "revision": "cf585da19d3dde2104d8588cbf87c3e9"
  },
  {
    "url": "assets/js/34.ace3cfee.js",
    "revision": "d7fe33a9b6eb202806da31bc70b803ef"
  },
  {
    "url": "assets/js/35.57096b91.js",
    "revision": "97b3d35cabd2ed7d4b32b74873a905af"
  },
  {
    "url": "assets/js/36.9603199e.js",
    "revision": "ffc3c53c265bd0f5fc7cde3640cc0b96"
  },
  {
    "url": "assets/js/37.23426989.js",
    "revision": "ce82f5372268f6f430331eee23febd3c"
  },
  {
    "url": "assets/js/38.2a94afb0.js",
    "revision": "58505e983b98e7b9caede02d4b6d40f5"
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
    "url": "assets/js/40.a543dbb7.js",
    "revision": "1afd86ceb06e813f6a370bf9d38b910c"
  },
  {
    "url": "assets/js/41.60283cae.js",
    "revision": "48ef6b6823e3b4f48037cb4eeac07768"
  },
  {
    "url": "assets/js/42.3c6b62e8.js",
    "revision": "13c5589b5d0ad1c818c18d3663284d4e"
  },
  {
    "url": "assets/js/43.5c8ae4f8.js",
    "revision": "0238725aea7d11b4ec4c8ebeb811999c"
  },
  {
    "url": "assets/js/44.cc3cb83d.js",
    "revision": "1cddd55705c8ca3374916d557604797d"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.32b09b97.js",
    "revision": "e6d19e96c878753e83389fba8a8a2c70"
  },
  {
    "url": "assets/js/47.df2d6c88.js",
    "revision": "da5f600c35b0c105d4d9edd255d10633"
  },
  {
    "url": "assets/js/48.b14194ca.js",
    "revision": "5f4729390248004646eeec27f09051de"
  },
  {
    "url": "assets/js/49.09d8da52.js",
    "revision": "91f6a225d0e3f73a5ba6ee9c7980243c"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.d8c8cc7a.js",
    "revision": "6278dc8c37b83ff5e80a56b5f8639569"
  },
  {
    "url": "assets/js/51.fe4a2e2d.js",
    "revision": "4edc68023ae43d356aafa31a888cf632"
  },
  {
    "url": "assets/js/52.a2e6cf60.js",
    "revision": "5041dd9f3813584103fc65ba70ba468a"
  },
  {
    "url": "assets/js/53.6832bb27.js",
    "revision": "55f02280efa86e4a2316307035359c57"
  },
  {
    "url": "assets/js/54.c56f1c13.js",
    "revision": "ca4b91091c4514fb7f6d9d2889bd1f43"
  },
  {
    "url": "assets/js/55.8cd71f0b.js",
    "revision": "ee2b8f0662a4d8da040f3e98cf3569b7"
  },
  {
    "url": "assets/js/56.2bbfe014.js",
    "revision": "5ebdd1a68d37b9aa86c3347aec863285"
  },
  {
    "url": "assets/js/57.3214193c.js",
    "revision": "f08d37c053172276beb0a24e0f5d35f0"
  },
  {
    "url": "assets/js/58.5abe82fd.js",
    "revision": "1891f91ba68512d70e49480e8a71e526"
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
    "url": "assets/js/60.ede204c9.js",
    "revision": "0331909dbb941f0e7ae31ff40d2eb186"
  },
  {
    "url": "assets/js/61.b3b84ba4.js",
    "revision": "7b9f8d1fa74c25450f2780c90c7a09f0"
  },
  {
    "url": "assets/js/62.2b021266.js",
    "revision": "6c6dd1e86a2e921a825cca6d7c530b4d"
  },
  {
    "url": "assets/js/63.2fbe77b2.js",
    "revision": "45d5d1fd9b39433d6a2386ddb747275f"
  },
  {
    "url": "assets/js/64.5b915a12.js",
    "revision": "9397e98d85482cf4379fe51af620ca73"
  },
  {
    "url": "assets/js/65.d0753461.js",
    "revision": "e932d555980a947b3596aa6c779c81a7"
  },
  {
    "url": "assets/js/66.bd60f967.js",
    "revision": "0d9629aa72c0dbac871092ca4e304196"
  },
  {
    "url": "assets/js/67.7007f98a.js",
    "revision": "7292c2423a9f13503fdaf7e028359072"
  },
  {
    "url": "assets/js/68.bf91d6c3.js",
    "revision": "8054c15c746412794145a82788032f32"
  },
  {
    "url": "assets/js/69.07234753.js",
    "revision": "b0322ac3618987f1a4b83ecbd9fecb48"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.749d7f7a.js",
    "revision": "99e03a7aa2a80b8466efd1c0655e2a99"
  },
  {
    "url": "assets/js/71.7f26b2e9.js",
    "revision": "186dc75395ac32b6af3eaf3826a60045"
  },
  {
    "url": "assets/js/72.d1a356d3.js",
    "revision": "f8a403d96c35d0d1dfcfec49b6c556a8"
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
    "url": "assets/js/app.c3858eb9.js",
    "revision": "3eeda65e4a84c95818eb167b73efbcc7"
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
    "revision": "a93f5a40444008fb51206b710507155c"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "354671153d66817803f3d30dc0f3e9cf"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "53dbcb8fe3a9115c3f97c40fa946f94f"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "d71b0c5fa34feb8040f8c380cc4e40b0"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "80778e83ac2c874e5d93edaade8cec04"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "12a63c0283ca01467b97e31993a34ca8"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "9bb9a5b227d4d87666d276b1fb9b65d2"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "9a3468070d26b0b17370daaebbbd0d98"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "33f2e6819d4e3e91be0ba2ca5e05dc8a"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "e0f610dcd2059aad4f56dfaa56f5970b"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "fbd189a1e2cf612053648b09ae893445"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "7498f1658d00f8f3927430c9a7562ae8"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "96216f1cdb051ae1f88d28dd2737352b"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "4d781b97d96e0c4b118893f9b460e426"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "c28afcc7945f55d1b6ae8b0e86a47e49"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "d420003e80bdbcde203e8b9de019c8b6"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "cd90aa26a31d6ac265ea9b82f0c94bfb"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "17e2616113dbef227048c74de85a1677"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "8653dd61f81b26e36d681595c19c705a"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "4e6cfeeaca5cae0133280c131d19686b"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "0fea321019a352e00959e0bfead2b41d"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "63496873e1722c44d69641255498fd4b"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "a76c7404615b2fd0c06db7fffc4e8a49"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "1ab191289ffdeb6aafacf095645b6b1f"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "5478b5ad3f3c27c0e17082f18df6da44"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "2c6c60e469438ae315f47de5da797933"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "971a4cb174ca456c997a1cbf2ade8711"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "524e31ab1531461f834dd8276b4241e8"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "7afec2c006152e92e28d8a928d982fba"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "b17c6d7c91350fae2c2d8066a1a2b605"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "77659c95961c1297849f7edee9d554b0"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "af1aa7474bee55d3d6b8d745ebb1ad61"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "b86872aedc6db34722754bfaa1f7b9eb"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "4945ef2a0abf250e4afde3d642a2fb3c"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "5ef27411077b953cfca772cff3a96f85"
  },
  {
    "url": "categories/index.html",
    "revision": "c8791c7fbb45619306a10ffe06d77c3c"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "5ccf4f14fa71557a80d3395a30704316"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "7b3b5646f81d07402d93269829289ac6"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "0b83dddc06bf2ce9218314e517839336"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "46404607d350c1ff693c518f16cbd86a"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "126411609c777efde96e59ba94e17d94"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "cfa34600ba708cf93e40a712c862b30b"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "b86b7d8bc0d7b45bb03cf23a22961085"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "dd08884b990222eded14e1cbdadd7e35"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "03be01660f66259a4dec874d8362b0dc"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "feefd48cd723acba588c19d82b5e4bf9"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "6e9163e765afc95d6ed9a44c05b52eb2"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "be41e60053c0292f2640d6dea0545e09"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "0e3ee107ef63b1cc1fc6a5351db34076"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "d05979324f85d76365b1c8afbb174105"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "a65a1b1c92685db6fcdb67b952a29179"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "70a255a94b8ed4ba4a104846abae3d55"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "d739d8b04291c16729d96f5b55f60027"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "45033749d3c2847ad3d667f1dc79e156"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "0a14c6d685515a456201bec138a5ccbf"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "38eaf3b16564e7b6a7da1bf5b4e6839d"
  },
  {
    "url": "ios/index.html",
    "revision": "97c8b9ca0d4d660d14eaf9ee23667b0a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "4c2cfbcdf87aca7a16759c4d1b953d61"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "3edf0f6a383a84f729cc1d296fbfbfbc"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "58801e344f0b49e4c6623dd52da04ca3"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "4b73dc06820ed91fbbc20bddc1a06617"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "990a7892adda2fe6a3776b48afe5290e"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "d762149da32c691da7af0098c9e0d61b"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "8ba0c339d37d17691dc18c656061bcd0"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "910df35892c400d6903218896d6e4e0c"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "93d1515c05f42c72d3b58787d7e22420"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "434356725345d26082742c449264826d"
  },
  {
    "url": "tag/index.html",
    "revision": "265f03ea9ce4df1ebfc760e7d456379e"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2e865a6954f0c285e3aa16b340506da6"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "05786c8fc4253da9b279a3cfdccbec5d"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "4e1b172d93702d7007c62079aadd24fb"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "4ed29f6240e04f2b88c8c732d1422b7c"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "55bc143022f88352494e239652b64d9f"
  },
  {
    "url": "timeline/index.html",
    "revision": "302b180d0bed2f2e7aaee9cde01ddb8f"
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
