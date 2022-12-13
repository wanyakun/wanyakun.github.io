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
    "revision": "1b7b921ef16acdc40349dc602ebfb778"
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
    "url": "assets/img/2021/relation.png",
    "revision": "1b1627f3315358c74427b3ef8e2d49d1"
  },
  {
    "url": "assets/img/2021/version-relation.png",
    "revision": "0f27e54a07d535b39456ad3f45eeec70"
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
    "url": "assets/img/notes/front/engineering.png",
    "revision": "04b1d91c8314c53e3f15d95ce754687c"
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
    "url": "assets/js/11.8c55ad41.js",
    "revision": "a179a79439d0140e679d16d73f2dd131"
  },
  {
    "url": "assets/js/12.65a54f8c.js",
    "revision": "f78cb680719b49536c195f3f968d263d"
  },
  {
    "url": "assets/js/13.db30ea92.js",
    "revision": "ca32db0f873da266a02cfe16c85ac1dc"
  },
  {
    "url": "assets/js/14.bf8fb784.js",
    "revision": "9f55b5fbfbb60aa3469bac2b68e47e21"
  },
  {
    "url": "assets/js/15.f117f477.js",
    "revision": "cf93ad7301c0774f4681eb4c2fb803b6"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.301bc23d.js",
    "revision": "4a9653b5058363ccb20ad88564948210"
  },
  {
    "url": "assets/js/18.d1228d12.js",
    "revision": "d0e139f0ff6e65af470c8d1bdac7e568"
  },
  {
    "url": "assets/js/19.8ea614b0.js",
    "revision": "0f9f48a9378bab29f12a628b60b49cd1"
  },
  {
    "url": "assets/js/20.e9695369.js",
    "revision": "0be1e078bfe14e529ef6a9ab3c24ddf8"
  },
  {
    "url": "assets/js/21.68e08ef0.js",
    "revision": "ebaff636965061b0f044bb97075a8dfe"
  },
  {
    "url": "assets/js/22.c4f7ac3d.js",
    "revision": "636eb8139d42dab4108089371783e4a8"
  },
  {
    "url": "assets/js/23.35b4bbd0.js",
    "revision": "f957a556358cb30444dee75ab631aaea"
  },
  {
    "url": "assets/js/24.1aa6ca62.js",
    "revision": "130d3fb65363574b8ff5367f05a6942a"
  },
  {
    "url": "assets/js/25.7e9e4d3a.js",
    "revision": "af1a05a7b77b1179420f33578a78c18d"
  },
  {
    "url": "assets/js/26.d539b5e3.js",
    "revision": "5bcb85bbdcaa2a235a48ce7914b75dda"
  },
  {
    "url": "assets/js/27.4080a346.js",
    "revision": "0ba1ab1ed857b3a869870e5445b4e620"
  },
  {
    "url": "assets/js/28.d1269431.js",
    "revision": "23e0d4d0cfc2d5a36ebff4196ac329fe"
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
    "url": "assets/js/32.6a51179d.js",
    "revision": "43051a79c50a95e4963c174369a786b9"
  },
  {
    "url": "assets/js/33.f2d7b6bc.js",
    "revision": "b14603f5f58ce0478d3b4aac6d8c022b"
  },
  {
    "url": "assets/js/34.49eb0543.js",
    "revision": "f3ad9c82b79479af0299a2e39fc36fd3"
  },
  {
    "url": "assets/js/35.e6058814.js",
    "revision": "35b464e8d76a7151799af754733ae6f7"
  },
  {
    "url": "assets/js/36.e5608578.js",
    "revision": "641ae44109f67b8a001377590e8fbe77"
  },
  {
    "url": "assets/js/37.cd5981f2.js",
    "revision": "08632c1bbd2d8354b68b17f534b14598"
  },
  {
    "url": "assets/js/38.fd0c483f.js",
    "revision": "3079791f0a45acc0d08c4109343948b4"
  },
  {
    "url": "assets/js/39.04d147fd.js",
    "revision": "5e32e409e83c623729b093117d0c9a15"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.d6af343f.js",
    "revision": "32a20a48c52393d522ec2a75a6999d0b"
  },
  {
    "url": "assets/js/41.fccfdeef.js",
    "revision": "950ecb360ef7811211cc83f78db60b53"
  },
  {
    "url": "assets/js/42.1088bc57.js",
    "revision": "18309f0c2914623fe2f1b13ce1fa537e"
  },
  {
    "url": "assets/js/43.2daab030.js",
    "revision": "c5b6f6e157b9ca37cd36723f76e3f2c2"
  },
  {
    "url": "assets/js/44.a9faf5a8.js",
    "revision": "47b2193b1eb12db45bf29f854973074b"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.2663f63f.js",
    "revision": "d1e42a086edd35111876e07d5bd744bd"
  },
  {
    "url": "assets/js/47.008c82e6.js",
    "revision": "e1295de749cc3c2194e90ea9009ce08d"
  },
  {
    "url": "assets/js/48.d9c5cc66.js",
    "revision": "0fbc17e23272217528f65f0eafe69e8b"
  },
  {
    "url": "assets/js/49.38a77cbc.js",
    "revision": "9b9e8de6a9af7006bdfe2d19dfd8613a"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.831b2d59.js",
    "revision": "33eb2c0f893b4c142ffb21cd57c91cbc"
  },
  {
    "url": "assets/js/51.c8730bbe.js",
    "revision": "014881e7257ac25b3e7d8dc7053b7be7"
  },
  {
    "url": "assets/js/52.cd8add6d.js",
    "revision": "e9dbd1f8779d19db76e3bcc4555861aa"
  },
  {
    "url": "assets/js/53.12233999.js",
    "revision": "bd993a8824741f0cbb4d21e0db49956d"
  },
  {
    "url": "assets/js/54.d25df5c9.js",
    "revision": "c73a1aacaafedca2156e66033eebaec5"
  },
  {
    "url": "assets/js/55.11c62439.js",
    "revision": "e58aa9e1cd234639d0fa976261ecd710"
  },
  {
    "url": "assets/js/56.57914ed7.js",
    "revision": "206f0daef15cbf912697b7a66bc92178"
  },
  {
    "url": "assets/js/57.32fa3c0e.js",
    "revision": "e0ee4f45545955bfb1146a218ec9b2bf"
  },
  {
    "url": "assets/js/58.b4372961.js",
    "revision": "5c86d6da3c106e00efa8930c2a95c58d"
  },
  {
    "url": "assets/js/59.e8e8f5a6.js",
    "revision": "e18824b859146b855255bc1e2bb5d25c"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.871bda71.js",
    "revision": "9e5b13dfd8d84d7fe020738157816da6"
  },
  {
    "url": "assets/js/61.b53aa4a4.js",
    "revision": "52e8543e2355a7c8238ccb1baf541ce7"
  },
  {
    "url": "assets/js/62.9cd863c5.js",
    "revision": "cc38eb41f04bdfe9255454840875d8b4"
  },
  {
    "url": "assets/js/63.e58eb7f9.js",
    "revision": "b615a50b055ef5f328093d178b04b8b9"
  },
  {
    "url": "assets/js/64.eb17574f.js",
    "revision": "1d75b432d6861feff6f93b85a598b583"
  },
  {
    "url": "assets/js/65.f938054f.js",
    "revision": "335041e44345a54f03d3d14741a6d5db"
  },
  {
    "url": "assets/js/66.4d7f991b.js",
    "revision": "9583cdb62f331cd01f94a40d33a9db09"
  },
  {
    "url": "assets/js/67.bdcbb413.js",
    "revision": "d0eb06146b3b840250e1f7e88b00b09d"
  },
  {
    "url": "assets/js/68.d33781ea.js",
    "revision": "b06dd810004555746c4ea17152098335"
  },
  {
    "url": "assets/js/69.e45e9caa.js",
    "revision": "28f15465b129103193ba56c956b4f0bb"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.4739c28c.js",
    "revision": "dc84bc88a374480402e1a843a83e638c"
  },
  {
    "url": "assets/js/71.07a4752b.js",
    "revision": "0e1b2d7d3f8487875a1e678ca1ff332d"
  },
  {
    "url": "assets/js/72.6cfd5a52.js",
    "revision": "2f50c922e226437043ebe9477d168b9c"
  },
  {
    "url": "assets/js/73.ef9ae1cb.js",
    "revision": "b2e3fc8e11cf0fc5b573fcc5605c94ea"
  },
  {
    "url": "assets/js/74.54964bbf.js",
    "revision": "2d59419de6121651dd34e94bc0a4573a"
  },
  {
    "url": "assets/js/75.f29dbe67.js",
    "revision": "4936437fba6beb6df5e195769fc045eb"
  },
  {
    "url": "assets/js/76.39bef679.js",
    "revision": "55f89c93ef2e24dcb9b5135428d7a4f8"
  },
  {
    "url": "assets/js/77.bb65d0b5.js",
    "revision": "cf4b457e0cf91b379f8b6ec3f035fac3"
  },
  {
    "url": "assets/js/78.77e33d45.js",
    "revision": "89df7f09cb2c1797e2e103285a8606fb"
  },
  {
    "url": "assets/js/79.1e61adf4.js",
    "revision": "6ab643d23d1f53c8aa3c3f75cf416f11"
  },
  {
    "url": "assets/js/8.f958ee79.js",
    "revision": "a2a3cd48ba63e4adb09eb2e518782542"
  },
  {
    "url": "assets/js/80.4f0be390.js",
    "revision": "a63d7d2f7faf21fd8281e0380fe10dc1"
  },
  {
    "url": "assets/js/9.288067d1.js",
    "revision": "4ec017d8918fd958fa53aedcf6cd03a5"
  },
  {
    "url": "assets/js/app.2ce19e88.js",
    "revision": "9089ff094e3a4ec1a52179ac0c2e4061"
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
    "revision": "9d44cb26a43644d24baefa48ab970461"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "655494fdf7a775b347388637710b9dff"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "47196af8fcb28d7bdb8bb88f36b80068"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "655fe4e4630cc727868075c03c17d5a6"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "c492852fe4eb87418a193811275fb6df"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "da0bf7feab005834fa50f7db2da7918f"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "0812abe9d22cd29922674db9d0a54917"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "5549706586e4cddf43f4c4e895090157"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "8f7412732221a5c4b58e233851233229"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "b8d37e309d6e1d38e6c532e2671f44da"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "214acf0d369e99dda16baf5c90585151"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "c96701d79da9a8fc78aec6227947385d"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "4a1210c6aaedd49f1b120615dcf8c1c4"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "ec12484f349e7d6605dd44592c673459"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "907c1382a4b5e4a8f089101d6ea42fe3"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "c606b05ebc4551fc5e82e4957ab6fcfa"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "36064df33e49a58cacd781d27f81b9c5"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "319e175c9adbdac7eb68ae3de7300d38"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "923a71232d403fe0d4c04d21b8121f55"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "3739d382c1f4e501c7c6df033ebf426b"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "ec4ba3a490bef22f928aa4eed51cc822"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "0c602391d48c3f7557e6cb408657e161"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "6026a5aab6b34da48e7ff8b6d1c33a04"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "8683ff03c75d3acd6c30ccb9519f3e74"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "153c1835610aac07064af454fe72ec51"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "8513b9502bec0a927b8cde4fc5460f9e"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "558fc9eb3908ad44c32fae43fe38ceae"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "3efb9158a7c1926d600277467ee79bd8"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "e2dff9085ad1d9502e5b46fd12cc9cc0"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "ae816cf11c210411ff912e6b9b019a06"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "6511421db82241802f6a689398432b6c"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "e4da127989591a5c4882f92abc894b73"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "f51a5e778182193bcd0fb08a8c7ec5d1"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "740f6d8c20dc2b8243a5aaefa5b3505e"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "822d60fae62519fda8a573a21c6348be"
  },
  {
    "url": "blogs/code/2021/3d-basic-concept.html",
    "revision": "406ffee26df392e9531e095e30581cf7"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "623c4241f3c3b6c62f7e63cbbc0e6f95"
  },
  {
    "url": "categories/index.html",
    "revision": "67cdb0861bed60772fa87a93a1a72803"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "368f0f84ddfd43ba05a90c53e3aa4857"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "a3eb902d866c8aef93c9664ea6986771"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "34f79abb54d40b67ae26eac5553329f7"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "44f1d63b43d730ba1d669c5adc26cef4"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "ffbe690cdf50dffc05d5e5deff4e71a2"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "af61889a33fecac1da234d3e3da6f156"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "b5e074c84026bb6a7f418fe80ae0b16b"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "09d866c42af42bc08f3525298ed92129"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "9988e289169b56f15059fb7fc50a44d0"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "761655246b71a8594f13160cc9c46f55"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "a55ff86ac8b3a92e511d0b94c8309ac7"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "698b275f6e858fe5fe7f33af64828a81"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "27090f38283c637aa80a426830ed1fae"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "7592fe0f32444ccfd2ea78bbc26a0236"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "ed70bd2d6396fdf133bf500cdc064ab1"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "548d13baf0a453ddc7ef25d7a9ba9bc5"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "cebf170785cad0ecd5a22ddd46968e52"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "985a2d32cb14997aeccf9151fb4a28c7"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "8132c1a9addb5078157ae3116f567d4d"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "3ad52a584b6a942faad1a82af4ff9e42"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "d5018cf335bda91d6d72bafdb55d39e7"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "25bca8fc04c2a6c2d1b4d266b867126a"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "fe41bfe58d84e29b2f07177b20084e5a"
  },
  {
    "url": "ios/index.html",
    "revision": "d397dc3dcd70a20eb5185f3b71da24a3"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "78f964c078c1c8e46bd740a32c117f36"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "544d259ab2cfb75a6f4c52d55aefc72d"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "eda02debe0ae0d648bc4c611df459663"
  },
  {
    "url": "notes/index.html",
    "revision": "0460d99575b3829648bb124cad59eecf"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "b77cb2e225ce70454121be69b49e7a77"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "68299883c39886a1cbecd3cd4d2c1c74"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "95c4d3db914ec677988f176153c5e885"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "b8b1d8a02d3de98e2300c32ce543ed00"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "bc45866a27c5915d14b7b9e7c21a72f0"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "f02e596dbd2e9266a1e50769e000f2dd"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "7511e255da79c905ca9e9e38e6f7547f"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "1f92fe0c1c310dec45ec3b38f0da83d7"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "d162138b30863ff4febcebdddd8b682f"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "ab337b893e7a6d035bdc8838a3f3280d"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "d384e90e15f5b99d7f838b49f57265a9"
  },
  {
    "url": "tag/index.html",
    "revision": "ee7f18f9c1448d037c937712b300ad21"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2ae73f98d74052a7ff0f0f96afa5a443"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "bdaaecceedc486271c2ba902b1bc288b"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "0ef903548f7a0f6779c1010474ccb94b"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "18b3ce18bf708bb5688bc3dda1cb0a49"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "79c8b6ae69d7e7a322445c08fbbd7edb"
  },
  {
    "url": "timeline/index.html",
    "revision": "ab9ab6c637f8aa86dbfeff9c3c4ff1a3"
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
