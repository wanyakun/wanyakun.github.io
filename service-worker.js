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
    "revision": "81d89b519cbfcb5685e6a77e23694ba2"
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
    "url": "assets/js/11.60912475.js",
    "revision": "a7b16383056e3db7d17f359389e9bd9f"
  },
  {
    "url": "assets/js/12.3d72d085.js",
    "revision": "783fb460a1c18676ca1d3fce0bf138bb"
  },
  {
    "url": "assets/js/13.8217353a.js",
    "revision": "522d34c58f2eed948d666829421432f0"
  },
  {
    "url": "assets/js/14.428bd62b.js",
    "revision": "5c3a2a098649645b0d8056e64d23c453"
  },
  {
    "url": "assets/js/15.4d9a0705.js",
    "revision": "72bd0590668a4a384fed258335882f22"
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
    "url": "assets/js/18.b24d5eec.js",
    "revision": "8cddde5ce7619d065a0dc9dca56ac9a2"
  },
  {
    "url": "assets/js/19.571874b7.js",
    "revision": "0f650576a69cc23bb565197e7f97b00b"
  },
  {
    "url": "assets/js/20.97025a1c.js",
    "revision": "135454c4335869174cc0acc001672ee3"
  },
  {
    "url": "assets/js/21.14e425bb.js",
    "revision": "e9670fbe78341f066749a697cb1f6110"
  },
  {
    "url": "assets/js/22.e935a988.js",
    "revision": "ce8e2ae625defabde2dc9aa4dcc5bfa2"
  },
  {
    "url": "assets/js/23.87e7c710.js",
    "revision": "d1c8dc9881d5e5c779ba510ce2239969"
  },
  {
    "url": "assets/js/24.83e6da95.js",
    "revision": "1090dc51de09d9a9fdc719088c474238"
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
    "url": "assets/js/32.86419e28.js",
    "revision": "b71110e6539ab649016a60d48dfa5dbc"
  },
  {
    "url": "assets/js/33.01a5c51f.js",
    "revision": "3e016eaeb1ed29456e4d6bda45f032e0"
  },
  {
    "url": "assets/js/34.e190ed0e.js",
    "revision": "7968bec7da0e15defc7c510d17585f7c"
  },
  {
    "url": "assets/js/35.5af85e69.js",
    "revision": "811f28f95edc6e666d1561a372e406cd"
  },
  {
    "url": "assets/js/36.a0d25905.js",
    "revision": "f16a8ae875f624fb4c5f23b9ef4d729f"
  },
  {
    "url": "assets/js/37.cac7fb1f.js",
    "revision": "c5fdaa9774ac8f94b6624cf41130f209"
  },
  {
    "url": "assets/js/38.bba747e5.js",
    "revision": "db655dad2c6a6d05ba8f1d1390db9886"
  },
  {
    "url": "assets/js/39.6bbaa4bd.js",
    "revision": "af480ec704f75c74e57ce4aada6cce2f"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.8725d5f4.js",
    "revision": "fcef7f6aa077f3e041bcd5a31e40aefa"
  },
  {
    "url": "assets/js/41.a7857c8c.js",
    "revision": "8da0212b60df0452b807d7c8a140085a"
  },
  {
    "url": "assets/js/42.a0d0be53.js",
    "revision": "5d0120fff92c6084bffc7e41c4b4076b"
  },
  {
    "url": "assets/js/43.b798a39f.js",
    "revision": "48a696741748f4ddc37aa15c75d06959"
  },
  {
    "url": "assets/js/44.264577a8.js",
    "revision": "09521b5dc228f27a2d6e844066e3e12e"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.d4d93a78.js",
    "revision": "2d3e9803083eec31c9b14c21da95f64d"
  },
  {
    "url": "assets/js/47.bef6c8a7.js",
    "revision": "1f2a8030f60c81d53f4e0e9c33192d93"
  },
  {
    "url": "assets/js/48.19d86a0e.js",
    "revision": "7ce5c75c494e2e02bb1cf810ebca807d"
  },
  {
    "url": "assets/js/49.28d3930b.js",
    "revision": "a01db63b88ca4ad944a5bd42eca889f0"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.eb4e74fc.js",
    "revision": "8a8077ec228d7d37ed4c00aa7a32373c"
  },
  {
    "url": "assets/js/51.585abf25.js",
    "revision": "bf4d15ce416209378baf7eebe6ead7db"
  },
  {
    "url": "assets/js/52.d1be5fc5.js",
    "revision": "c32187f9b5da465713ac6aa836a6786c"
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
    "url": "assets/js/55.7ddef306.js",
    "revision": "7174aaef6fa82e3bf675825227cee811"
  },
  {
    "url": "assets/js/56.dacfc58d.js",
    "revision": "2f0c22c75063e42506e6dabd78203d28"
  },
  {
    "url": "assets/js/57.2f1caac6.js",
    "revision": "bc019b038e7d60405b4883e8ccb2bb73"
  },
  {
    "url": "assets/js/58.254b1f1c.js",
    "revision": "376664bb0aa395940f8b8aa793820cf8"
  },
  {
    "url": "assets/js/59.7f81c86f.js",
    "revision": "156320916f6d68ce89390e929f6f2f13"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.3611e51c.js",
    "revision": "524787c10612a0c0d4ca0b945473de00"
  },
  {
    "url": "assets/js/61.fb695817.js",
    "revision": "6fb529e1ae0cb0640ccd17fc951b755e"
  },
  {
    "url": "assets/js/62.774c4fe8.js",
    "revision": "16f64a6e83513735e5aac6065d0724d6"
  },
  {
    "url": "assets/js/63.4d33e6de.js",
    "revision": "d9ce68b061e4d48638864f9498e51e3f"
  },
  {
    "url": "assets/js/64.b4bfcf17.js",
    "revision": "1d32c7026ef9adab1ec53ad388375bf2"
  },
  {
    "url": "assets/js/65.e6903c78.js",
    "revision": "ef2202be9d1a71e49ee938450842ea81"
  },
  {
    "url": "assets/js/66.8eed388c.js",
    "revision": "5bdb254c408604db16535fbb2cb3244b"
  },
  {
    "url": "assets/js/67.c39abac3.js",
    "revision": "953d9abfd3feaaebc26b04a10b5de483"
  },
  {
    "url": "assets/js/68.754fbd86.js",
    "revision": "8903ca8c7a13ed7ec0b5f3e879af8482"
  },
  {
    "url": "assets/js/69.a173f3bc.js",
    "revision": "876c2d923537af6f2e391dac818b264b"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.e5841f1d.js",
    "revision": "b997208262592506191a21c8e86fc180"
  },
  {
    "url": "assets/js/71.2d442952.js",
    "revision": "7fbc12ff2926a48931e24fb5e63b3b6c"
  },
  {
    "url": "assets/js/72.6e15dbe0.js",
    "revision": "51fe27a6f7d1ff9229fc7f0d5e4afaed"
  },
  {
    "url": "assets/js/73.92469423.js",
    "revision": "8846964952229f47db3b37aea90fde5a"
  },
  {
    "url": "assets/js/74.ec0be3b7.js",
    "revision": "2696f516f47f54e43976c60ad9bae756"
  },
  {
    "url": "assets/js/75.e79ded30.js",
    "revision": "4723bf12117d1d92a4d3a66d3ffd468f"
  },
  {
    "url": "assets/js/76.a581e159.js",
    "revision": "babf8565c83638271652f6377faa86b5"
  },
  {
    "url": "assets/js/77.93ab6424.js",
    "revision": "a57db8f96fc3cbd692d7ef336aed540c"
  },
  {
    "url": "assets/js/78.ac24b750.js",
    "revision": "8dbebcb915c46de753b21d01fd72a52c"
  },
  {
    "url": "assets/js/79.a66d83f4.js",
    "revision": "8294545a9066ec86695f78e8238bbaf7"
  },
  {
    "url": "assets/js/8.f958ee79.js",
    "revision": "a2a3cd48ba63e4adb09eb2e518782542"
  },
  {
    "url": "assets/js/80.64d6f85f.js",
    "revision": "6419581e9e3f57bbd831d4ca2efa2ac5"
  },
  {
    "url": "assets/js/81.9725d783.js",
    "revision": "417993efa549233f281c251929dd3231"
  },
  {
    "url": "assets/js/82.743f5866.js",
    "revision": "75109552c79e58b3a7467148fd257b4c"
  },
  {
    "url": "assets/js/83.7ae293c4.js",
    "revision": "65a2662f7196fc2846334035f6b92f03"
  },
  {
    "url": "assets/js/9.288067d1.js",
    "revision": "4ec017d8918fd958fa53aedcf6cd03a5"
  },
  {
    "url": "assets/js/app.9be65824.js",
    "revision": "f2f9a4a527c7f1c02efa105b351054db"
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
    "revision": "640385150e1ac3b4d0c30c22177ccd76"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "b9fd97061dba06aeca9f102c44264943"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "2125b4235a4f84c045369bd7b6fb6ba4"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "a16fd979277c7b50a91d48639cadc558"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "10e3f01045688fddef35329f149af7eb"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "f860abed388784177b77795e08d70e28"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "412dd62cb09d47e5a816281f3a1311fe"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "e965d81c2533b72774ff4119a25dda6c"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "d9f99f0a66aa2e915a18e39b786b07a4"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "12d6f49a20076bdbed9dadba6184bbb6"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "f3d8858f8e1e21918962087e464ef849"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "cfd6bd26ba8749f699436e5bbfc1a9c5"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "36422bb4baf6e746ad0b4a4dc674cba1"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "fc60b45db9d09c473a987c61b0a8d5be"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "278858fe6930b7793295e365b3787b9f"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "9bf8e68b742c54f7ce51b1037353889a"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "6b04d097bf0994ca387268d2bd15efe6"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "4a00c0e5debc85e22fd64e639fb78398"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "cc27495b9f90cebb5c199528ed65436b"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "4c0674905af58811a35a68705906d2fe"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "3b2d2880bac363370b6e3d33c8177bf4"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "db3caa1460ae02165ab47a63996a216f"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "2e2df560d60d25bb777ab1f9461349e2"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "d429088d3816e8e0852d782bc47769f2"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "da1242926da83cf1b015ed5602cadc2a"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "78f732b6ae527a7be5efc973dbeb8aa4"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "858185ae48d913bd4e23a6bce42378ae"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "90f86b02e2bfc09bc863ad232ec5cc23"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "366ab52435bbe18281f21f1d6568e7b4"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "ffb503e7a87f0a1411db47e4c3c3fa47"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "17234ba2774b13b9dba8fa149175fd1b"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "8592d741d46e8e45d224da718c4cbef8"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "58de6bac1a5208ab518838d04a63c0c3"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "6edb5272e2bf5953aa6d856dc1905bf8"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "f037b49a5fe9abb266ca020e656cde25"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "c16006af5a1d8c58ae3da09ff792edc5"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "737babda866d0a7d493a7e9ec4753b0b"
  },
  {
    "url": "categories/index.html",
    "revision": "3a627d1d33e336a2c81bbc44a98b95de"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "89ee5c20ad0cf1fc8a53f0339ea20624"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "997996d2e566507ffd9e7517aa30bcaf"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "9ea630e53435795228a50a92a03a9774"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "abb03b888602be92bb02b75a6a126edd"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "69613e9c1f371a1e1796eb46de957c89"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "9d83f27367bb45e09c89ac08b295ade2"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "11f6121473fbe72ab505516264b3c5b8"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "a718d7d9169ad91bf8787e123a6f855f"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "67e5e3a2e7c999215ef3ef22c24759c1"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "2e89534b5822acf3fa3e3dc97e117724"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "0a94e25050821ce5827f260e9b629ccb"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "6f26e667268bc6cf98e584f2e4ec0a75"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "49b82c8a6b07c5baa32ae8a8b7a6915b"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "6a97e4d994e7fc98f0252423e79cab47"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "1a1bfe052355cf9e9c310f3bda26ce90"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "979c1d40e18cf9731fcc3ce2b2de2d95"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "72a9726678589345438ed481a52171c7"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "9cfe3eac99624b5ed61af2cfd7b298b7"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "af0850a82dbcfcdec2a5526b03d8e439"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "c7e25cba32f1c2268369d2de529490d6"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "def9cd5797822c72f6b5752b56aa5667"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "7ecf744180c44fe7716b6beaa25323f6"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "655f15e0ead8610ced913153cfd9c791"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "553ad7575dbf2b2ab506721bb2000761"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "94d3bec7496f64430e821d06842c5a62"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "013bd75024f4501eed2d28dffed25783"
  },
  {
    "url": "ios/index.html",
    "revision": "440d32c9dd463318e414e27feb7768f8"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "9f3b468f45b9b169668ca4f9b3a3d6f0"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "bcfe61fa2b68beef83df4c1d0e208ba0"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "a0f164c1f27831cd9760c589e02f77a7"
  },
  {
    "url": "notes/index.html",
    "revision": "95890d9e7f8bbda9bcc7ddffe2ed9677"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "a1ca96a9474ab8b2ccfc204b90867f33"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "949e085db385cf7c2d61273c00243d5a"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "dda035f2d0025bcfd1beb42ae9b6628b"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "ab1e3c103fa09f32c057e85699ab35ac"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "03d999fa535a06ce6a4350d41449c713"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "24cb1100f1a89b8584ae43a91fd0d84c"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "f0f7b1e9641689f5a2e6ad6632aa66d7"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "839ce84a2285fe68c191ea117baec2ee"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "8de7ad3813e3c2877231de5b716fa020"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "19d84aab0ec731a23092a40f35563e88"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "1703ba6a205be84809c606c1f7e60498"
  },
  {
    "url": "tag/index.html",
    "revision": "86bf13c93f917a275e626df289e33621"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "b05fedfa345f266fb11ac509002b6ef5"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "f7a589d40f8bd4eb23886ea03f379bb2"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "870fcfcbbe960058b4cfff4599522140"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "80f74e0cf7a6bbbe5f934f4082444198"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "c87fd69c2f49db370a643aa974417c38"
  },
  {
    "url": "timeline/index.html",
    "revision": "1350b9092dbf66c127cf261f8ede5e53"
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
