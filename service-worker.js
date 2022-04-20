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
    "revision": "e54f56898e38b2601a54f6386cbe6b3b"
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
    "url": "assets/js/11.8594c13b.js",
    "revision": "00c085943ba47bc5441dfd966d748e89"
  },
  {
    "url": "assets/js/12.d9c5bd21.js",
    "revision": "540b1cf47d4e1b77b63fa30bc9b27b2b"
  },
  {
    "url": "assets/js/13.a6c5f096.js",
    "revision": "5e60cc1dc61301efa43e60750a43cb6e"
  },
  {
    "url": "assets/js/14.ea9f3731.js",
    "revision": "71683b3d6c9fc853594a2721d3d8d5fd"
  },
  {
    "url": "assets/js/15.f7f30fd3.js",
    "revision": "70795d075bbc9f112b6d2ca4ff634eb7"
  },
  {
    "url": "assets/js/16.1509de0a.js",
    "revision": "92c7a7db7618ff08dbaaa1d294d59dcd"
  },
  {
    "url": "assets/js/17.749f2a81.js",
    "revision": "0c3a5fafa0a24f3b542b4f4ee4b27ba3"
  },
  {
    "url": "assets/js/18.ca24fcea.js",
    "revision": "1347a2f86e079ac5aabdfa8a06fb8fda"
  },
  {
    "url": "assets/js/19.f34005ac.js",
    "revision": "5b372a0632e4bfc3277b921e7f87ee57"
  },
  {
    "url": "assets/js/20.709687ea.js",
    "revision": "e591125b7b5a485a00195570fb0db55c"
  },
  {
    "url": "assets/js/21.16f48892.js",
    "revision": "ccd3b2aae11e9c9a1d07a07c2b70ddf4"
  },
  {
    "url": "assets/js/22.70698c25.js",
    "revision": "d5a6983c028311e50fdcb0914c6b3cb7"
  },
  {
    "url": "assets/js/23.ea115bef.js",
    "revision": "e2bb09c2a492e1be44d1e9d5a3c6cc3e"
  },
  {
    "url": "assets/js/24.6c98d532.js",
    "revision": "e1e582c589373cb4752740e88249da98"
  },
  {
    "url": "assets/js/25.3c7b2318.js",
    "revision": "6b10638f2e386573d329cf3d5d385a6c"
  },
  {
    "url": "assets/js/26.78a27914.js",
    "revision": "85f7048240c38f941a6fd7b3b00c7a29"
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
    "url": "assets/js/32.5432109f.js",
    "revision": "b6e4fce5f340899cd3cae17c8c4ccd02"
  },
  {
    "url": "assets/js/33.3c5ed2ea.js",
    "revision": "4006d8d79fd6e3f513a4c9b9cde2c754"
  },
  {
    "url": "assets/js/34.fc9ee6a7.js",
    "revision": "2a6e6f777071199fa9e65e6c74a22135"
  },
  {
    "url": "assets/js/35.adaf44a3.js",
    "revision": "ed090436a0d0ef010f901c9c1b9f8a5a"
  },
  {
    "url": "assets/js/36.e03619c9.js",
    "revision": "a8162c8b75d016d02ab5512e1143fd89"
  },
  {
    "url": "assets/js/37.8f7e127c.js",
    "revision": "85cebcf8e71c03ae678549a1c1a87d4c"
  },
  {
    "url": "assets/js/38.6bfd8fd5.js",
    "revision": "ae8924f669aad7b921436de50f4265c2"
  },
  {
    "url": "assets/js/39.e14d2f41.js",
    "revision": "c9a2f5b82711b6f3671363d547427647"
  },
  {
    "url": "assets/js/4.f145c5b8.js",
    "revision": "ec03dc799c090ebfb8d72ad7ed9730d4"
  },
  {
    "url": "assets/js/40.dfd12449.js",
    "revision": "50b1eb9b664471332ae3578c8cdb8786"
  },
  {
    "url": "assets/js/41.eebd27cd.js",
    "revision": "e0027e557016f59cb95796ff4752681d"
  },
  {
    "url": "assets/js/42.6025b5c0.js",
    "revision": "95fb75b55507f9472c728a45bb967892"
  },
  {
    "url": "assets/js/43.a000733f.js",
    "revision": "e4767c3d755cb33372f14e1d8144f69f"
  },
  {
    "url": "assets/js/44.af925e4c.js",
    "revision": "47efdd1aed14ac55d633b823c1d9a22e"
  },
  {
    "url": "assets/js/45.eb85426f.js",
    "revision": "e38a4588c882b7290728ef2545fa1307"
  },
  {
    "url": "assets/js/46.5f31caaf.js",
    "revision": "1f91f720a35910846b182fad81a12f32"
  },
  {
    "url": "assets/js/47.764ebdc0.js",
    "revision": "ef7135b262091f768f40236c6c7c2d88"
  },
  {
    "url": "assets/js/48.3176ed0a.js",
    "revision": "baebcd14ecb5429edd7bef569e6a3e1d"
  },
  {
    "url": "assets/js/49.57b66cb3.js",
    "revision": "b315d89ca3b2ae19d5b68f611bb6fae9"
  },
  {
    "url": "assets/js/5.78d71686.js",
    "revision": "a357f9ce548549265d64619adefbd7e6"
  },
  {
    "url": "assets/js/50.81751f35.js",
    "revision": "d08fc9aaa09fc26c15ea6e87351e6129"
  },
  {
    "url": "assets/js/51.36b3346a.js",
    "revision": "73355d5aa94cf95ac70053cc75880731"
  },
  {
    "url": "assets/js/52.5ee33138.js",
    "revision": "2009ec291c97951e76245913bb3c787b"
  },
  {
    "url": "assets/js/53.a2669bda.js",
    "revision": "6cb27b6cf3b1ac62a7023c0af42143d9"
  },
  {
    "url": "assets/js/54.d25df5c9.js",
    "revision": "c73a1aacaafedca2156e66033eebaec5"
  },
  {
    "url": "assets/js/55.450b7f7d.js",
    "revision": "8ec1f136b7248534d132065b6e71ff1a"
  },
  {
    "url": "assets/js/56.5143fbdf.js",
    "revision": "611080cfc4dda52ed2d0887ce96fc36d"
  },
  {
    "url": "assets/js/57.e9aabd87.js",
    "revision": "3112e60f25810f7ad5b88a416adcc81e"
  },
  {
    "url": "assets/js/58.9a71ced0.js",
    "revision": "be6f0928a1cf5a036fb3745afa47fefb"
  },
  {
    "url": "assets/js/59.153a44f5.js",
    "revision": "7ed4c4d5a61b353ad9f65b09d1a3ffc0"
  },
  {
    "url": "assets/js/6.83709ec8.js",
    "revision": "d98b3748c1745a08969e526685273bd9"
  },
  {
    "url": "assets/js/60.2bd3ed9a.js",
    "revision": "2b897202537f9f21681d0b45c0a358f1"
  },
  {
    "url": "assets/js/61.c8e243b3.js",
    "revision": "954af2ea09287b62a07350cb0dbec0fd"
  },
  {
    "url": "assets/js/62.8a3459dd.js",
    "revision": "a3c423f5735ae300e32cf367d5755097"
  },
  {
    "url": "assets/js/63.ba6be54f.js",
    "revision": "a9dc0a68a2fea5a1838c2f21ac59c4df"
  },
  {
    "url": "assets/js/64.850549ff.js",
    "revision": "735e8ae3ba62c84a25b4117f50ca0d4a"
  },
  {
    "url": "assets/js/65.69b26c27.js",
    "revision": "445910ee30c66b0c6fddf25646406c0f"
  },
  {
    "url": "assets/js/66.b7ef13ee.js",
    "revision": "3e313450947bdb67d3a947ece11e434f"
  },
  {
    "url": "assets/js/67.2f930df2.js",
    "revision": "50b506c70347d7c73919b7e3b7b6f181"
  },
  {
    "url": "assets/js/68.7c3af5ef.js",
    "revision": "ae602273b5ff4f07e8bc035a7866b834"
  },
  {
    "url": "assets/js/69.9a668304.js",
    "revision": "a0d980b8893b44ac0cc2cf9bf722491d"
  },
  {
    "url": "assets/js/7.e3d199cb.js",
    "revision": "8539d6844e7a16866d0001a7261e8fe1"
  },
  {
    "url": "assets/js/70.e656009c.js",
    "revision": "bb31f8e4eaea4fd5db1d486d375297a3"
  },
  {
    "url": "assets/js/71.a058490d.js",
    "revision": "401ca66fb12eb067817eebebaa84abc1"
  },
  {
    "url": "assets/js/72.aa9cf086.js",
    "revision": "b12e3ba4963c71c42d32f626b7d11fc0"
  },
  {
    "url": "assets/js/73.7d948133.js",
    "revision": "846e05cca0c0cad6eb23eff7b0692768"
  },
  {
    "url": "assets/js/74.502d48ea.js",
    "revision": "c3ecb0108c181186665437c8a950d04e"
  },
  {
    "url": "assets/js/75.b1ed25aa.js",
    "revision": "97d16638aad846cfdd27df5a6a1fd81b"
  },
  {
    "url": "assets/js/76.f932aae6.js",
    "revision": "bd80733193ba4559747c300fce49ca4f"
  },
  {
    "url": "assets/js/77.057ed719.js",
    "revision": "ab4735725b799f018fee81ac87b00c03"
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
    "url": "assets/js/app.ab64678b.js",
    "revision": "66c36d37d3bb5611e5e960abfa00f492"
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
    "revision": "c79c1e55c5ec2e9cf0fdd9b2c9a09d8a"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "39e510250094baa7dad0e1711dd651dc"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "079d2cadb67b58f66295404661a2f235"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "363aada94845f892ec294b0543c0a651"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "fd37cd78d0ef954e00f149babbfab195"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "644934d435d28ff12187e7ff7c385cb4"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "51ca53dcdb7c6ddc1da87ee83eb88bb6"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "551182e293d3134374241e39eedc14e2"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "933634f77ec96fdb13ec7746a691d59b"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "ebbd6eb1733a80b2b52cbdaa86606aa4"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "3f8ffca3bf869e29d4f61415b8d52331"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "5aa156be9e197bb919c8847f13666237"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "2775aeeb982be8e79856e2bd43e29f53"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "7937e3f6e99c6db9bd1fcbede2875f1b"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "07c55f3dd62fc16df301c6935da0959b"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "e6a29fb323e813c74c7529c899a1e011"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "e41afeb85965a96eab0e026ea6ddc535"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "ffde2ba71a0ff94f2528b0523c6394c3"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "90a621c4b151ecd36cd8229572a7f8fb"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "5b22f073038402c60ccccc842d8b2829"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2c59fd3e633793b7ab605b22e4647065"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "22d994977fdcaf68f5d2c0eac2743c84"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "008d6221c0932727c5d26512c628bb41"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "5b12dd92c869743039f4f42e1f064b71"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "f123e57beaa67d1ab2355cf39e36a57b"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "5b69fe9cf4ea7d0e789abbb32940aa81"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "e8ce4bbdc3932bee04e92c2948066611"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "8f101dd0210ea8d868b891e7671cafdf"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "93922fb815bb1f4524df2e46e44f2063"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "cdc1f9acc31b0f8a0ecf9fc3cce9f571"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "a670b2bf55156be9b75a61ac3806ecd1"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "57b49c5c115f19b81cef1e0040f8f121"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "44c27eac34690d5f427726e7eabd32f0"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "f7872f55ecbcc344dcdab80ba931fac1"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "a4ae07a9ac7ec37cdceb2e998e605f65"
  },
  {
    "url": "blogs/code/2021/3d-basic-concept.html",
    "revision": "508db009129f5bbe23f00f5a84afe7da"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "41a20d79dd4851f0a71fc71c404c70c5"
  },
  {
    "url": "categories/index.html",
    "revision": "d2bd447a04f02d71eed84dc25a9523d7"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "eddcb52581d2bd320b1b39e24c68843c"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "19014a3d37dc97a36966dae99f95a036"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "7488d0b2ae3c07d5ec1504307d987cb0"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "7e0359ccf76e1e934839f53df5a8bc7e"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "50e7ad953d275d73d2f36108a4acd7cf"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "20659e74aaee0f03cbe25b91bc1eaf1f"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "07dc10895bbdaac297b3caea5523e4cb"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "6ef2d01c2043cb2864e31137c41e05c8"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "ed7e209d52729d4879d0d95dc763687c"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "3b8444186e19841430852ed6616d260e"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "379f0bc4e75f6ca49e91fdf2d0cd36ee"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "f84fd3a49446764bfbc1269ca542e03c"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "c897b8b133b744c60a62d57453a3d04d"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "d491b28a51c656910862079636bd158c"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "91d6aa0b3c621dd7896b18c607050ff2"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "34a06442d7375f562504aeb3dc49673f"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "5278a74b43239a376c204ce903a2b793"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "3855dbb95ffd5efda83613f5db763a16"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "c8faa72e126a629099241ceec8d7c6a6"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "f886a26c33ac854f491ce175dced297c"
  },
  {
    "url": "ios/index.html",
    "revision": "40d427263f468a114bdc3456d14e75ea"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "6f0a6396fa03829a04af8eb42e62f135"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "d1bfd6e9fb1e137e22069f49d58f30c9"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "131e5a359fdf81c3fe78a5a027c088a7"
  },
  {
    "url": "notes/index.html",
    "revision": "a12def47798d549f496c11c1903254cc"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "0e7c0b3b296c8add8876bfa307229c10"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "9c40e8f2d2b5489f0075c9cda30780b5"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "6e2acf63dab53cf3770bfb2e986e82a8"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "e265c77401213d94de3154cda956b2bb"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "669a3279340710f58f97730a24a39c19"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "d1c1a485870a0d4d5b5d92d03d59737d"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "23daf1b8a84a791ba49931f93bf1f841"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "6b5998ecf20ff917d926ba6b896ca5c4"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "1e876e8442cc813bf5b9398f63dc2beb"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "6321576e59e987fddf943b4677df5b57"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "27dc45bdd6d42409ff35419724e0bc15"
  },
  {
    "url": "tag/index.html",
    "revision": "2cf33cc631613a76e7c3bd31af3c1483"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "867bd667a14e2ef9bf3cef0210514428"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "42ed8b3a53be4a019f0e57dba86fce8a"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "826b4e7b6942c7830c677cfad03d170c"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "81a1d26ad3f263315a5de2d040a98b0f"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "e6c50243e6176c66222d4380b6376c4c"
  },
  {
    "url": "timeline/index.html",
    "revision": "2d9e8150ea0e7480945841043e6391a8"
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
