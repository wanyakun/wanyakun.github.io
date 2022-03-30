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
    "revision": "b311776fb06a99f0c544864b0c152977"
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
    "url": "assets/js/11.e173af71.js",
    "revision": "55f859a842bde888a8e0ad85b58cccb0"
  },
  {
    "url": "assets/js/12.5cbefd2c.js",
    "revision": "ac50a4f8fc500dc1514665f5123aaf6c"
  },
  {
    "url": "assets/js/13.8d89ac96.js",
    "revision": "4a452ca4de7d5fbd0fe96d2579f0c593"
  },
  {
    "url": "assets/js/14.371a82e4.js",
    "revision": "04169d43ad4782d4f21c5d1146803c5c"
  },
  {
    "url": "assets/js/15.c9692ffd.js",
    "revision": "f8943cc5932cc10b5f777fcc5873ffa8"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.21cc729d.js",
    "revision": "3faf24dc0f86b29a36836f7913c5244c"
  },
  {
    "url": "assets/js/18.8d9a28f4.js",
    "revision": "8b83833326fdf5fe6606d4c3c6853ef7"
  },
  {
    "url": "assets/js/19.f1304435.js",
    "revision": "212b40ae7f9f5a946d936d6e298c6b32"
  },
  {
    "url": "assets/js/20.6aeb1da4.js",
    "revision": "3fe32a879b770fe953863d84220f5540"
  },
  {
    "url": "assets/js/21.57d0f626.js",
    "revision": "c18931819f66369e5cdb7917eceb0265"
  },
  {
    "url": "assets/js/22.759534b7.js",
    "revision": "51a3ba6330999ff58dcd321c574678af"
  },
  {
    "url": "assets/js/23.287e51af.js",
    "revision": "a6e8e5f769b206ef24f894f8b2e80869"
  },
  {
    "url": "assets/js/24.0a51b733.js",
    "revision": "de8028a780cd2c4cd2a33aadf033e78f"
  },
  {
    "url": "assets/js/25.642f549f.js",
    "revision": "bdb1af56943c59dbc4e812af56da5c15"
  },
  {
    "url": "assets/js/26.5c299478.js",
    "revision": "c51ba6c1b8f8b293235268c63100b5e3"
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
    "url": "assets/js/32.b6cd6a00.js",
    "revision": "aa3481a50e1e9dfe2c14315d73b47fcd"
  },
  {
    "url": "assets/js/33.a685f000.js",
    "revision": "faf1431b72a844a3c52b63494398a3ff"
  },
  {
    "url": "assets/js/34.7eb4b884.js",
    "revision": "1c71a3319e6d07322390b81659a810d2"
  },
  {
    "url": "assets/js/35.6baef01d.js",
    "revision": "5d298db723ab6918523a73c08496b337"
  },
  {
    "url": "assets/js/36.1684f4f1.js",
    "revision": "9638419585e0b6dbd6028cf548d80666"
  },
  {
    "url": "assets/js/37.4081fefa.js",
    "revision": "d01c7ecf6036f98bb2d8846d65e8af71"
  },
  {
    "url": "assets/js/38.a945bd6c.js",
    "revision": "13ba3c06ac7dd7b7a3279dc64a3a9b90"
  },
  {
    "url": "assets/js/39.f4e97bf2.js",
    "revision": "996a783283de8e6da1e31e8d2cdfef1c"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.9f6c516d.js",
    "revision": "b477ded7773637088e7e37c15a8b8f5d"
  },
  {
    "url": "assets/js/41.66b4d2ed.js",
    "revision": "bd06f957e15a84e63d2f413a65ea25fc"
  },
  {
    "url": "assets/js/42.6025b5c0.js",
    "revision": "95fb75b55507f9472c728a45bb967892"
  },
  {
    "url": "assets/js/43.75bcb318.js",
    "revision": "d0759c3608af6637b123b9a096138e75"
  },
  {
    "url": "assets/js/44.0e6bc4ff.js",
    "revision": "18f5c1f871daa38be12285f3ac6b8242"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.688457e0.js",
    "revision": "ca9a0758c1483861af04b18d28745117"
  },
  {
    "url": "assets/js/47.870f612c.js",
    "revision": "d0c6de0837a689263a466c73278015a6"
  },
  {
    "url": "assets/js/48.a445167d.js",
    "revision": "61596274840be41d3f96e6f1097a7678"
  },
  {
    "url": "assets/js/49.c8a2251c.js",
    "revision": "6fcee7acc7f810274ecbd375679c5798"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.0d089171.js",
    "revision": "6ddb2154ef0da9f907c8fe1c7e2ca0df"
  },
  {
    "url": "assets/js/51.c5bf0f5b.js",
    "revision": "8a5a3a2c571c29aa74a64b1f70db727a"
  },
  {
    "url": "assets/js/52.3153e60e.js",
    "revision": "d3fcd6a970d1a53055177d10585fbddc"
  },
  {
    "url": "assets/js/53.6832bb27.js",
    "revision": "55f02280efa86e4a2316307035359c57"
  },
  {
    "url": "assets/js/54.5ab0dc37.js",
    "revision": "2c29c15197874fc3978502bb5666e774"
  },
  {
    "url": "assets/js/55.d93877be.js",
    "revision": "3ae6b8e42f48bbfff10ac7c2df37afa4"
  },
  {
    "url": "assets/js/56.576b6950.js",
    "revision": "ca5c1249872106961c97f19cdaf572da"
  },
  {
    "url": "assets/js/57.5277b5f3.js",
    "revision": "ef7c16bb0ffb5b91307557b2e7acad8b"
  },
  {
    "url": "assets/js/58.23f4c5ad.js",
    "revision": "778290d79d08df7a0a230893d54022d7"
  },
  {
    "url": "assets/js/59.6f6aea89.js",
    "revision": "4a397bf7e809466d9ec6422264baf65c"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.f327d227.js",
    "revision": "4b834a14bc712bc3747b001cb6872130"
  },
  {
    "url": "assets/js/61.abf5b6d6.js",
    "revision": "954af2ea09287b62a07350cb0dbec0fd"
  },
  {
    "url": "assets/js/62.cea805b4.js",
    "revision": "f6142890049841fb0d7189ac90371533"
  },
  {
    "url": "assets/js/63.45c0a1d5.js",
    "revision": "da8ea4498f2df50d650fdcd68f4172b5"
  },
  {
    "url": "assets/js/64.3b6f2893.js",
    "revision": "be48280a6d52fbfd80dc6c3f345b917a"
  },
  {
    "url": "assets/js/65.7b7f30a8.js",
    "revision": "7b309e89ee804877cb8ba7025b9b7bc9"
  },
  {
    "url": "assets/js/66.f9f4a0d8.js",
    "revision": "f43eb4750d9f9c4201402096a5a1d6e3"
  },
  {
    "url": "assets/js/67.986d3c23.js",
    "revision": "5de11873eadffb19ba8e13fb640c339f"
  },
  {
    "url": "assets/js/68.5902c9eb.js",
    "revision": "cccfe4245c26fe8729213cdb1b2e2089"
  },
  {
    "url": "assets/js/69.b8d578c6.js",
    "revision": "d0f23097894dfaa1bc96b01c2ba0a34c"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.788df390.js",
    "revision": "d222219572520db5b816108c2825b287"
  },
  {
    "url": "assets/js/71.c717f666.js",
    "revision": "2684fd3f28d174b19870466b6882cc47"
  },
  {
    "url": "assets/js/72.c1c1f13d.js",
    "revision": "851181e5b913b6e7a1b8b9adce0c1cfb"
  },
  {
    "url": "assets/js/73.5162116d.js",
    "revision": "84f9bc7213681d55d273b3e4fa562458"
  },
  {
    "url": "assets/js/74.87b58cd0.js",
    "revision": "08d536943663498ba0fbfe5e8263fbf6"
  },
  {
    "url": "assets/js/75.17ceac6a.js",
    "revision": "5adaae41973dcd0ff74bb28959096f89"
  },
  {
    "url": "assets/js/76.20ee29b6.js",
    "revision": "cac28277b0b6901003773f95b647b931"
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
    "url": "assets/js/app.412c0468.js",
    "revision": "fb2ee464c9228df8e6cc0ec1a1879045"
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
    "revision": "b7b3e78d52c7bf5a0687d1ab5e1e4368"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "b279669552b764112a839d5b900a0000"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "0194d33afee45dafe1feba216fbbc20c"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "ab43aeb780588209e146e3cc5fdb22c0"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "7b4698b9c037a7db9b08d1a15cbebd45"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "5a3fa6e2882a4d25b060a78cdfab298b"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "307912716c7ffb5af7761da0af3fe5f1"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "11fe617222ea8f6f6b7c68a861c75705"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "e89c1d2e03c05aba27fec9507d9c2cf8"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "1e97803f59dd472beeb42e7e4fcf05ab"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "8ea1462fca7ab27b62d05de6bfc4513d"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "89f56f0c54af3fd085e5be5af8c51adf"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "65ae9e56736edddb0f56f89f7fd5f6b5"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "e6e04a52b8b6bf59c9f0cb1173a060b1"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "a2a23d5a10d6c7c586082e750aebbeb4"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "e82e9665059291bcc923ece324537291"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "b174c89edb60c54940ab31e627bf0ac9"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "4882273aa0f9c33d7118556891ffdab7"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "b59bb24b630029198d5bed17852ce276"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "67c6b144c33d9ddb174b3740515298d8"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "a14726370d75857a940fadb10d8538fe"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "7e0aacfae21940b35892b4e64ddfa0d0"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "90f4626599d75e93a4e322cae5c32dc6"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "d878f92cb472da959c5223857f1d8ee3"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "d20f922b4d9868a2e59b6fe7b734e6d1"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "a2d5bf0b88ffe743d9c6177dd2055d76"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "c3b50ef0f9f0dd6dbcb140a2a1849c5e"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d1cf4db62ec770dcbfe652de7b58f3bf"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "69804e3c1857534b665737436376ba01"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "57364d09f93963941130c2d58acc4f06"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "13628acc88d10b133d6edb365584ed5c"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "fb5b6804580e2691e0b2c97623d56521"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "3b6ba2219a024419a04f629b6c2aafa7"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "8b7d17b3f49804b244048b5695e35ecd"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "b17e0c8454cf6a09131a490898a88b7d"
  },
  {
    "url": "categories/index.html",
    "revision": "994ba4c0eaef2eeff33e17c53e1c4bdd"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "5132aa8729210b638dd0e3543d4fe5fd"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "60253eb5bb60549182a10739621103d3"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "eff92103cd7d1ced1b8bf06c9b7c8e06"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "74af56786cad20b3a8d053b1a308edd0"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "62770a17c164714e8fdd5bb6745447d3"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "5099f1b7d463964c3e731b236164cf6b"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "b9133400aa6286f127c5432eaf43ad90"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "dbaf069bda8eca196fe511df04b33e88"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "0b470673a57963d08b71c7d8e35ff92f"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "6bc862b5a0961ecf5824bc2550a33637"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "0873aa928e0122904d9644964da88f71"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "e41d80aa1237d6fe78fe09320b49c875"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "84c9d8ccca027fbc8818d5356d35d64c"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "5fb6e7bcbc0035d28ccf656b599ed1bc"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "cebfeb106a56d3749e047ac74c46f056"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "ec9ba4adae9958c57d5e0ca8f297d5f5"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "7462085ef3d338cf7355600b5c83d4c1"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "7e5593ff78f0b461da0956874b8c4dca"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "d90d67a928ac39b0ddacfe98819e25ba"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "fc693917da31ed60cf1f1229ba41eb41"
  },
  {
    "url": "ios/index.html",
    "revision": "94afb62f8b1168a75a3ab13943589c81"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "b662acee930c78573b08cd2cbc6cd4a8"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "d411f41f8cacc2f902890f7f5f3104bb"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "5d7550f9f29223ee84d27c1cfa5ad98c"
  },
  {
    "url": "notes/index.html",
    "revision": "2e354e8357b8cf596a800b17c0efc230"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "5e8164f1fa6822569fcb4db339f90ebc"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "33f1ba9f3206aae8c53349b204ec76b5"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "d75bccfa218adb13a0f02dba30cc6db7"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "2ce0cb8d57f9ff74778344309335140a"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "9f4da2778b7c7a8c4c3b2a575d66916e"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "74c3469513fca4cff5dc29cfe9b5b090"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "1247aeae599b10e349da87e57c05937f"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "d9f27285cf67d66278bcf9652b539892"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "081aad99616860b575a61f013827e1bd"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "58d22a2cf77dc006beec901e6ac17fbc"
  },
  {
    "url": "tag/index.html",
    "revision": "c5121ebf4cac09881a043ecab52efb2a"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "fd4ab8bee6044402a25ce1a02eb83aee"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "a6dbacde302317af5f75b0916c6d0c50"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "93ff6209ab8e4a179ca3a7d075eb411d"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "d67d3de10158e21297014130b27595ad"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "a7e1fcd3c80904307cbbdee28baccb16"
  },
  {
    "url": "timeline/index.html",
    "revision": "7950c6458d2193e038464d376c835b53"
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
