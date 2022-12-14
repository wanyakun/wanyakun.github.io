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
    "revision": "1fea37dfc945025efb99642063ad2290"
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
    "url": "assets/img/2022/relation.png",
    "revision": "1b1627f3315358c74427b3ef8e2d49d1"
  },
  {
    "url": "assets/img/2022/version-relation.png",
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
    "url": "assets/img/ios/memory/memory1.png",
    "revision": "d69208a6bbd0a5f0f08a7c03d80b048e"
  },
  {
    "url": "assets/img/ios/memory/memory2.png",
    "revision": "7abda9c33335e9716d5fbb3f282dd4f1"
  },
  {
    "url": "assets/img/notes/front/engineering.png",
    "revision": "04b1d91c8314c53e3f15d95ce754687c"
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
    "url": "assets/js/11.6a8071ec.js",
    "revision": "f10707392dde2a3a74c54cda549d562b"
  },
  {
    "url": "assets/js/12.e3a7b510.js",
    "revision": "03ea5f2e0c9be97c21ed94d324d437f8"
  },
  {
    "url": "assets/js/13.bd45f9f1.js",
    "revision": "620f7c851fcdfc54dbfd62c838098a53"
  },
  {
    "url": "assets/js/14.98e9686a.js",
    "revision": "ff0a84e95d34f0b2abdd4a5f4c725d61"
  },
  {
    "url": "assets/js/15.0b0e398e.js",
    "revision": "7e9e110ee4e660736e875b8b822cebaf"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.e2d7a8c3.js",
    "revision": "b5d3a2c43c3e87a9115a5586ea455afb"
  },
  {
    "url": "assets/js/18.10241c84.js",
    "revision": "1aa29381de20c337fba91a83241419c9"
  },
  {
    "url": "assets/js/19.7e9ce300.js",
    "revision": "8ad4da4c18b739bc46586914c48718f5"
  },
  {
    "url": "assets/js/20.37653754.js",
    "revision": "96c63d2fecf39c7177fe993c4a9f5a78"
  },
  {
    "url": "assets/js/21.78c8447d.js",
    "revision": "01a1b600844657aabf66337979207336"
  },
  {
    "url": "assets/js/22.b7853144.js",
    "revision": "3f5c34d2a1c1ff1315a2da453fa422bb"
  },
  {
    "url": "assets/js/23.b00a3c52.js",
    "revision": "bf12c99a8336963f16e81303312cb752"
  },
  {
    "url": "assets/js/24.ca464406.js",
    "revision": "6e3da6071481bf45b6bc798bd5a967fe"
  },
  {
    "url": "assets/js/25.a0fedbd8.js",
    "revision": "c495bdc784380fdf0960a55615351ab1"
  },
  {
    "url": "assets/js/26.8c38914f.js",
    "revision": "8491830c4a738f33e57b00ce26d6be78"
  },
  {
    "url": "assets/js/27.4080a346.js",
    "revision": "0ba1ab1ed857b3a869870e5445b4e620"
  },
  {
    "url": "assets/js/28.f11b87aa.js",
    "revision": "2f00fea8de16002a2ea8c2ee99c0dd07"
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
    "url": "assets/js/32.c5ba901b.js",
    "revision": "7704ca593eedc0883105c75a4b3e3d45"
  },
  {
    "url": "assets/js/33.531c6876.js",
    "revision": "15d8c821b86afcfb5ab71bc055ec705c"
  },
  {
    "url": "assets/js/34.27df337c.js",
    "revision": "c51da83c56dd9d0d3749ecba4f235900"
  },
  {
    "url": "assets/js/35.5af85e69.js",
    "revision": "811f28f95edc6e666d1561a372e406cd"
  },
  {
    "url": "assets/js/36.aa446cd0.js",
    "revision": "c994dfa8487c219262f08dc3a5c3541e"
  },
  {
    "url": "assets/js/37.1d960f7f.js",
    "revision": "def6ba8b9b1429bcaad3d39876fa957b"
  },
  {
    "url": "assets/js/38.8fe077b6.js",
    "revision": "e43ca2993ac9f6027d19d014d89625d5"
  },
  {
    "url": "assets/js/39.bf0dbc8c.js",
    "revision": "6b7ae12d5a7161fc43c40467c52227c8"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.e1e01c5e.js",
    "revision": "5dc9680ce41390d6c01daab80142003a"
  },
  {
    "url": "assets/js/41.79bb1632.js",
    "revision": "b1cff08adba85e21d8d4011edc2a8a52"
  },
  {
    "url": "assets/js/42.02198fb2.js",
    "revision": "a1cd488fcf05c3366aeee79924d2f831"
  },
  {
    "url": "assets/js/43.8d264a45.js",
    "revision": "89a2ee3f020cb385e3d039946d93e016"
  },
  {
    "url": "assets/js/44.33a8ad01.js",
    "revision": "57afdb04eb69fdc29a2878edb2b689cb"
  },
  {
    "url": "assets/js/45.886f0e58.js",
    "revision": "00ee1159fdad420fcd02dd6f470c63d5"
  },
  {
    "url": "assets/js/46.d4d93a78.js",
    "revision": "2d3e9803083eec31c9b14c21da95f64d"
  },
  {
    "url": "assets/js/47.5bba4d0f.js",
    "revision": "4b67cfb9bcf2670e9a94cb93645060e5"
  },
  {
    "url": "assets/js/48.3bfd9fb5.js",
    "revision": "76d44522295fa5aae2a578033319932e"
  },
  {
    "url": "assets/js/49.c5cbbeaa.js",
    "revision": "91ead88034c46780cfc9d70d9ea1a9a4"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.874df37d.js",
    "revision": "211aa5217bfef6b672881444fea13a8c"
  },
  {
    "url": "assets/js/51.fdd83f58.js",
    "revision": "d46bcbd8ee33c6f63f1c41ccfa2cd427"
  },
  {
    "url": "assets/js/52.e779d9ca.js",
    "revision": "542d0b7c3b2955475bd19fa1eabc5c6d"
  },
  {
    "url": "assets/js/53.da5933a0.js",
    "revision": "c51e8707099361969f560bb6ce43c2d5"
  },
  {
    "url": "assets/js/54.d25df5c9.js",
    "revision": "c73a1aacaafedca2156e66033eebaec5"
  },
  {
    "url": "assets/js/55.5b5dc4a3.js",
    "revision": "1651f51174bc3d5d43d568720de11e7a"
  },
  {
    "url": "assets/js/56.0f3706b3.js",
    "revision": "d2859d4c185a8b1a57d4d0b6404ffc6b"
  },
  {
    "url": "assets/js/57.f251a6ca.js",
    "revision": "d4aa52c048ab41ee8b8ccfa41bd07988"
  },
  {
    "url": "assets/js/58.254b1f1c.js",
    "revision": "376664bb0aa395940f8b8aa793820cf8"
  },
  {
    "url": "assets/js/59.021cd5cb.js",
    "revision": "fbe13962316d94acf2e13b5534a32d77"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.f1524338.js",
    "revision": "4e88c380c87350578c20c71d6ffa37d7"
  },
  {
    "url": "assets/js/61.5821970b.js",
    "revision": "c5aa50cbaaa0698e61c0581228d15cdc"
  },
  {
    "url": "assets/js/62.3171deca.js",
    "revision": "3736528e7ae41e0d04bd8b90107f26ad"
  },
  {
    "url": "assets/js/63.2976b831.js",
    "revision": "eea6bc216d3fe00b074e381e321a7240"
  },
  {
    "url": "assets/js/64.74ded151.js",
    "revision": "c359b62e44785687ffbca82d5695de6f"
  },
  {
    "url": "assets/js/65.41517686.js",
    "revision": "d96864f005b09a3c24c263dc3b313304"
  },
  {
    "url": "assets/js/66.cb2ce0e1.js",
    "revision": "9e53717d3ff32a5400747e1b86038be4"
  },
  {
    "url": "assets/js/67.e5681a72.js",
    "revision": "24c6fbe7d0d03acc9afc027c3788a57e"
  },
  {
    "url": "assets/js/68.9520bbc6.js",
    "revision": "b6b1ec46288b20f1d27b88456fa91ada"
  },
  {
    "url": "assets/js/69.3b001468.js",
    "revision": "6a3d2de046a961a85fba408c5069779f"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.aa2bd857.js",
    "revision": "f7b5ca0e2ce1fe4820978550aeb7af61"
  },
  {
    "url": "assets/js/71.a3d447b7.js",
    "revision": "4d8fc1b5e2ac518f6dbd7c96a682c2f5"
  },
  {
    "url": "assets/js/72.ece94440.js",
    "revision": "7fb6068b13fd97c2be682aa23c2f2028"
  },
  {
    "url": "assets/js/73.00655834.js",
    "revision": "7f42c34963578e471395d404ac11ce9f"
  },
  {
    "url": "assets/js/74.dcfb2a03.js",
    "revision": "e73bdd6a609a7acbbd0f11d8486d9a53"
  },
  {
    "url": "assets/js/75.29b8a7eb.js",
    "revision": "7a8a4af6542527f8072ced2ac0bb1bfa"
  },
  {
    "url": "assets/js/76.82528e86.js",
    "revision": "40e1cbf9deb564d672d1879da302adb2"
  },
  {
    "url": "assets/js/77.244532fa.js",
    "revision": "4bbaf11f5344bff0ab7095df91d441ec"
  },
  {
    "url": "assets/js/78.9bea4ebb.js",
    "revision": "58db4e08192fdf7aed1010cba5b9f252"
  },
  {
    "url": "assets/js/79.621cc39c.js",
    "revision": "37f0ae2def6b173adfa4847bc1a6c296"
  },
  {
    "url": "assets/js/8.f958ee79.js",
    "revision": "a2a3cd48ba63e4adb09eb2e518782542"
  },
  {
    "url": "assets/js/80.9477edbb.js",
    "revision": "c9b43c0b3c8f061e103e4a792cdb3d88"
  },
  {
    "url": "assets/js/81.ec00a4fe.js",
    "revision": "0cd5135e15f04d128da037b9eedd873b"
  },
  {
    "url": "assets/js/82.e650a40f.js",
    "revision": "518b98e075cbde37dc6403a9be36137a"
  },
  {
    "url": "assets/js/83.3b0292b8.js",
    "revision": "0bcbd1e1c4f82378ba60a8cd2c35a994"
  },
  {
    "url": "assets/js/84.f4d3d432.js",
    "revision": "2175808b44486792e234f65ea8a8a84a"
  },
  {
    "url": "assets/js/9.288067d1.js",
    "revision": "4ec017d8918fd958fa53aedcf6cd03a5"
  },
  {
    "url": "assets/js/app.acc20546.js",
    "revision": "0c5e54e9a75c174834ddca8bd41986c2"
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
    "revision": "eb12190eb86a020e12d7833dfb2cb42a"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "fc7744a608aa0318f4c2de96d33ba8cd"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "10609396e539e45415bd81fdfc0a3974"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "bc0001b649d449f05c4100e3ca577616"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "8b2af4514f8f825ceca6a902f437f3d5"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "5d721fc3e9b5b8ddf1784c4e201585b5"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "198c1650099d39217661f9b576e1d47a"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "be55fb1e9d0924ab4948af4edf6ff7db"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "619bf647318e9a40578cc74b78d7c991"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "18d0a4b148a68224bffffa3ae8ffbd9d"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "55eac45c25df6c0e76d0f47e61489b34"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "6a50a9edc8626019dce1c297a0cdf9a0"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "e9ca8701e9207276e0fbcad79c072d28"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "ecb09693adc76f2870aa9612be46759e"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "c4d3f140bc12a019dd1b02ab12da8a25"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "0446031c0d324dcf3d0cce4a92dcb845"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "0dcc2210f23aa9b8d7712e11f188d860"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "90c8336ca13298ec6e7eba1df7426df3"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "11087e633378f172cf84e36e077d9ba1"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "81372327f9c0a40b1ef35c1a428e3def"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "dc8627d7438d03d99dc2b5aa292ab2fc"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "52d3b781865a92ad31ba63a65ab6d2c2"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "03cbdc6df615326d01aedf5be9d581ab"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "df5a2e2676214875c81fe8e554a31346"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "9072e721a7a1d7ca43a8b953728ef676"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "cdf3fc000e875bc230fe6f956ebc83c6"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "640de0920f3bc2e0a937ef8670788b0d"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "eef1c238a99f74455c00880222cfc86e"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "fe53ef776e4f2a952fae3765bdea17a6"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "f7f78c82791bf03c61f59fb1699c623a"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "8d3da5e8027ad04bbc2a3328f73b9159"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "d1af7b13dafdceef767d00a108fd9a52"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "6086d70c604409655a7ea78f23af0523"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "55e14f1597b19ff6a23d861ab1ddb614"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "c8a0c6bb54f0f23c7aedbb16267debd6"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "441b2024267df314944a95991f504af1"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "26ccf6c734a3f59d4c437cd9afa05cff"
  },
  {
    "url": "categories/index.html",
    "revision": "4c181f5922e6612f97b3f6f347cf63f1"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "fb583c2141ec2489affb8d5be9fb0f3d"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "d27e28e42b1085507b7cb6dd7606e7a8"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "4ff1ea748bb7d0d5b7a66ecd6d4acb6f"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "3ddac867a548257031171f2c2adad568"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "2a74dfc16a8f2ac1a241df83903aee80"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "816a82ee13e01f39724bd2fd176c4fba"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "f00ae9693ed5bd0f65fa2d2656b71004"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "3a297ba2627f6e69d1a1676d428380c5"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "d6d9adb68e08010e9cfff729949ee233"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "6c7edd818b3aee45a17a44fe766a6f08"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "b271b6c5af074b0e784d7faedb437071"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "d8d3753f01565e20402dea7c188a0c81"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "48f28074dcd9d7fd32dc4b2be441158c"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "a75434782fbb5489775489717ce430f3"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "9a8756e9ea4fb88a631ed2d72a2a07a2"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "74dc2ed307f5266a48d1dad5837b8e59"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "b8e4e597aac59f03cee4c9acc1c19b78"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "387e04a5111505e9d223fa5898b91540"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "c1b0518d38db09c1707cf4f011f39e2a"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "9ffd23c1303c0cc3588c5854e9cb3cca"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "ac313a3bb177dcf0584774bfdaeb77a1"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "7899c038c438ee3445c570ca3c8b6d60"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "97f2a60705e8c321888aca44d81722ba"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "22bbcc90f9e40eb57bbb5529a0c078fa"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "048d0537e6a833bf21161d67f4f6f1f7"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "c56e410ddcc806cf61c29869ba2fa35e"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "4bda9d2aa8bdd315f21ad5df8468c67b"
  },
  {
    "url": "ios/index.html",
    "revision": "1833e82a85e87323e37178d2d30f879b"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "7b257b1d4bafda30baf3820f774851c4"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "76cd7e9dbd3e79c42030e3eb6fd5e141"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "3bc85027cb3174efa15dc21b99ce7529"
  },
  {
    "url": "notes/index.html",
    "revision": "8d0e61b67a3349a61acd06c1c0164299"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "7fc35e6d751da13165c35e4b05d64f6c"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "3bb56534588b78b8ab2ae5966f88a635"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "62ca4db67f4bb807e1f58f6dc819ede6"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "0db220172a41b11598a3211a02f1773d"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "99e1b0f589e2163bef2ac10d52084542"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "3441097411810d1a7ed2de053f8f3617"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "056352b41f6b09fee93633ae1ed42e95"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "80dbd14c8ed7381dd1cbc0c1fbcd69ca"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "9ff9d958c47abbc2adc88f82119e9963"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "1df557cf8b1eab7f6e392c1a54fdbbee"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "470bc0bb6a0fd774368485a766fc7717"
  },
  {
    "url": "tag/index.html",
    "revision": "513ba1bcc4ecb1b9d3a286ef9ecc67b9"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "f2ad39974eba72c2134aa642af90a409"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "150a14e55caa8e13a439bf96c5d2258e"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "9318f2ca5a0fd4cd2fe7bd3e2d6011c7"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "52c0dfe11b72b635879727772bb01ccf"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "dd8c862bba0e23102785241b76a4ad54"
  },
  {
    "url": "timeline/index.html",
    "revision": "8302db15b5178cfe76f0fb0cd857d46f"
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
