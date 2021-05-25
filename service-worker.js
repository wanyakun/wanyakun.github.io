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
    "revision": "8d0dfbf7cc75e40dfae10b97ef942a84"
  },
  {
    "url": "assets/css/0.styles.994e4abf.css",
    "revision": "52aec7fa39d37e2187a38e538edfa264"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/ios/basic/block-struct.jpg",
    "revision": "705338173fb3ab8e976e21ce917b1bcc"
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
    "url": "assets/img/ios/basic/unnamed-table.jpg",
    "revision": "f17876142c64866272d9e3d242ab0641"
  },
  {
    "url": "assets/img/ios/ios.png",
    "revision": "7c32758abb37e4720232ebe1a2ada38d"
  },
  {
    "url": "assets/js/1.5fe79815.js",
    "revision": "b76e1e039946defa39780f75118d0314"
  },
  {
    "url": "assets/js/10.2f9f2a33.js",
    "revision": "f2f69be4b04eede5028f75d128f906d5"
  },
  {
    "url": "assets/js/11.8e4607f9.js",
    "revision": "dc67bf1d4c4a78ca2e7c727991f46c49"
  },
  {
    "url": "assets/js/12.83530915.js",
    "revision": "376d541e28cadb03c71b30b1f2c679cf"
  },
  {
    "url": "assets/js/13.7f01aa10.js",
    "revision": "f478b4f931612790db46d7e7f9dd520b"
  },
  {
    "url": "assets/js/14.982b8282.js",
    "revision": "8239c3df10b2a0daaec8868d5200743c"
  },
  {
    "url": "assets/js/15.1f493416.js",
    "revision": "19db9fc33b7a9d966fdfd3579a8abf89"
  },
  {
    "url": "assets/js/16.04bc0dcb.js",
    "revision": "07705a9140406a46721bfb6f3f85ed6a"
  },
  {
    "url": "assets/js/17.922758e8.js",
    "revision": "7bbf39aeee87c3a3bbda51775fde8efd"
  },
  {
    "url": "assets/js/18.83498454.js",
    "revision": "2c0772c730275e1555b29d674ef9b6c0"
  },
  {
    "url": "assets/js/19.8fade610.js",
    "revision": "715deec00601b147b9d77d4b8b8f5ea4"
  },
  {
    "url": "assets/js/20.8da4f399.js",
    "revision": "0533cdb6a3cb1bfcbec8449a29c81505"
  },
  {
    "url": "assets/js/21.e7f16326.js",
    "revision": "865cb28051f11e882efc1a2540d09bbd"
  },
  {
    "url": "assets/js/22.4d3835bd.js",
    "revision": "689dee37846af58b4464bb1aa997ddc8"
  },
  {
    "url": "assets/js/23.8be811ea.js",
    "revision": "ab822372aad69cfb247e7d379ae6013e"
  },
  {
    "url": "assets/js/24.2ac3527e.js",
    "revision": "81ec950689911377292e70513154642b"
  },
  {
    "url": "assets/js/25.998fb10d.js",
    "revision": "774cdbc8546dec345e59de89bc1b130b"
  },
  {
    "url": "assets/js/26.acba0af1.js",
    "revision": "5a053d5db8b791816eca2874026c5b2f"
  },
  {
    "url": "assets/js/27.2ea77b65.js",
    "revision": "b508bc2738497bca2d5235162f8efb5c"
  },
  {
    "url": "assets/js/28.4fd99388.js",
    "revision": "19f8fa8e8cfbae1f124fcb3b4f9295e8"
  },
  {
    "url": "assets/js/29.87cfeeee.js",
    "revision": "33d4eedae3ccd6678f6cd3a6675d314b"
  },
  {
    "url": "assets/js/3.45fd2d9d.js",
    "revision": "23c2981647a4d5391bf9ffb3f1a995f3"
  },
  {
    "url": "assets/js/30.56344785.js",
    "revision": "9fbdc1a55811aa917f07ea386a9961ec"
  },
  {
    "url": "assets/js/31.bb1e2da9.js",
    "revision": "27275ddcf2531ada7ae902ebb8505875"
  },
  {
    "url": "assets/js/32.4639aa50.js",
    "revision": "3990ba5d187c82e77da7b08cab690c2f"
  },
  {
    "url": "assets/js/33.9efe49e7.js",
    "revision": "026377055f7d611c1ddbb561db1d362f"
  },
  {
    "url": "assets/js/34.74c04084.js",
    "revision": "4535d8f0729be61faa197809f7d4a1de"
  },
  {
    "url": "assets/js/35.b8e1fe92.js",
    "revision": "049d5f8e14efd81a9bf1916d90430265"
  },
  {
    "url": "assets/js/36.46d97df7.js",
    "revision": "47e61face7b1e42421a5b0697f386c20"
  },
  {
    "url": "assets/js/37.06455ddb.js",
    "revision": "09547ba06b80d725ec75e9bee439f777"
  },
  {
    "url": "assets/js/38.2fef0f60.js",
    "revision": "dee3e541ff4c6131e3768716ee4c9f79"
  },
  {
    "url": "assets/js/39.947c703f.js",
    "revision": "2a3c681030b5058ede9ec8097a839b91"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.693be74c.js",
    "revision": "e9182abe801709628f193cc44e4addc0"
  },
  {
    "url": "assets/js/41.fe44885f.js",
    "revision": "7996755d021b59ee27859dc386eeba9f"
  },
  {
    "url": "assets/js/42.5c5ee255.js",
    "revision": "f0c2970f2040017ca2edc99a0aad91ee"
  },
  {
    "url": "assets/js/43.932ac323.js",
    "revision": "1265bb3ddf2375845a7dc3e23e16097b"
  },
  {
    "url": "assets/js/44.4c2f5a93.js",
    "revision": "a8f17295e22d84084ad8222b0c2ad24c"
  },
  {
    "url": "assets/js/45.f58d89ce.js",
    "revision": "12a5419c118f5bf45d45497e425db92e"
  },
  {
    "url": "assets/js/46.da1422b4.js",
    "revision": "5e21002e0861ca5a7021a815643aac5f"
  },
  {
    "url": "assets/js/47.c5b0a2c6.js",
    "revision": "1d7fb3f535bb354ca9a0ec95160a36fb"
  },
  {
    "url": "assets/js/48.7f0cd649.js",
    "revision": "b7a3ccf055eb33bf13f12f8f8f5f0fd0"
  },
  {
    "url": "assets/js/49.8a051be7.js",
    "revision": "cd7d167ded4ac8c91f30a67dac431777"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.3c2a5377.js",
    "revision": "becd8414c1387846cee9a8c3c333b053"
  },
  {
    "url": "assets/js/51.4bcf0afb.js",
    "revision": "c68564e6309f8f1b35fdc333acfb9647"
  },
  {
    "url": "assets/js/52.77d86b22.js",
    "revision": "2918175a038bfd285d147f89f454a338"
  },
  {
    "url": "assets/js/53.248eb300.js",
    "revision": "b27c88d0de020a5aae561287f6398c0f"
  },
  {
    "url": "assets/js/54.eb7fbce7.js",
    "revision": "6f70404367b8e8e73fd45da48bd503c3"
  },
  {
    "url": "assets/js/55.deb61334.js",
    "revision": "00e92f66d750fcee048f8b3e8aac9933"
  },
  {
    "url": "assets/js/56.6fe49f38.js",
    "revision": "c46b4759158c0cab1bb33ebc371dc190"
  },
  {
    "url": "assets/js/57.2d1a6564.js",
    "revision": "a9455f3b3f22736808db134f0db79773"
  },
  {
    "url": "assets/js/58.4e02a764.js",
    "revision": "865b37200ce202c13411995409cf3285"
  },
  {
    "url": "assets/js/59.0c293ef2.js",
    "revision": "f0b874280c1908acfde737f74b08abc2"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
  },
  {
    "url": "assets/js/60.6ab21b22.js",
    "revision": "fc3bcacb88baa9b45a99f0f9d1204454"
  },
  {
    "url": "assets/js/61.455316d5.js",
    "revision": "1ba111aa416ceda9274702a4b6174482"
  },
  {
    "url": "assets/js/62.0df2a2c9.js",
    "revision": "3447e09de8a370e501e6cd2b6d0b78e8"
  },
  {
    "url": "assets/js/63.2febc7cf.js",
    "revision": "177425fc10ee1185ac3599997f58315f"
  },
  {
    "url": "assets/js/64.4f80f699.js",
    "revision": "bf6dc1bcabb9376effbbdeb6c09b531a"
  },
  {
    "url": "assets/js/7.09f5704b.js",
    "revision": "f62ce6fcb2caf0926c559fe2cc5a9b21"
  },
  {
    "url": "assets/js/8.f448fe9c.js",
    "revision": "14956e0180e097f09f7c3164127b420d"
  },
  {
    "url": "assets/js/9.e6da8299.js",
    "revision": "f989940a6428b11f4f072b163b027e21"
  },
  {
    "url": "assets/js/app.0c2d1e50.js",
    "revision": "5cb086ea9508da4d72b799938000e01a"
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
    "revision": "5982096136355df567516f51c68b0ceb"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "d106b824a62c426f39eed01a609916e2"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "06580291dba0125291e426240070efad"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "911ae71714045056fb905d53b66d5461"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "20728592bd5c58ac8f05ba405761547f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "b2e1ed9ad08ba9cfc100a214958d6c20"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "64bf4ef541a3ffe9fd90c763f957207c"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "ce3bb4acb93ea6dc14dfe4122fc9c214"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "f62d0d49e7ba50372a5e67424fe34afa"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "72b3d3d676280fbe51d98daab30f277f"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "e8a93adb6fad7e7805abae1d0397219b"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "482f8540738a93924d58f9999e4ab437"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "35fca77499360ad276de4a263bbff694"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "346ed553a2f6e4830fbe83a75e405335"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "38e0fb869776f1c59ac13c05164bbf34"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "8a2b189f35f3ad3764abb0716b9b14ba"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "b111706ce3db0dd96801a22c1b6de682"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "09a08f8df96e86ba293470de17e09406"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "50f17ede0242861627e044669709ed09"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "48783e5eb64e86678c8186b5abaf768e"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "91bfd647cd0cbbd373efa3c54829634b"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "75419a96a0610ae5f2446ecf9dda6d41"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "dd4b2e9c34d4a882792dff4ed443565d"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "a9804bd98912aefcc33242e100872498"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "90ca859bbb663e67571871255b35cfb3"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "18fa780c357fedc23280ef158d765494"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "c286ec0a603ed5b26c14332caf5e9334"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "b9a03f1da1f230703b09b11f3f44df07"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "b151f68dff42dd1ad1e734bcb27caed3"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "03a706778cc02a1e889a647d398484c7"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "3c1446ec36de9ca82885ba1660e38a8a"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "805c2845ac97c6fb2da23d26bd6a2f77"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "95da8a89de50f9d692e750055c83a554"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "c904dbfd1184993337bceb80a2ddfa8e"
  },
  {
    "url": "categories/index.html",
    "revision": "d3576bc8c46e1292ea5f370746fdf777"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "c7937ffd3dc470b873f0744e00d5de6a"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "710fa230a488ea74b95b773bcb868de2"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e6fa739a2b7050764efcfe0646f37036"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "a362e7518d5ecfa0125a973be43302ca"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "f6d724066eb2be53087ca6d71e4a9738"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "c425043614ef4d69ec2400b7f90ee963"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "98011efd9ebc69078302243286ffcf3f"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "3ab0354b5a452e72668374b4ab801206"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "c70e2cae764fd1ddd16083b26687e14b"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "e6c2210dba7d12ceddebb9002640b436"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "d96a9b9d02c151ec18dc1342d777e88b"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "527ac1cfb024b320625b8060225fd22f"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "4dc26f419cdd086a1b56d6d05af23ccf"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "1b25f7cc4e2910cb78e5e9fec10442c3"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "3213ff7ca7cf530795cfbaeda560a5ac"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "f8ed008df2c296a1f7d0a080ff0cd211"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "b4fd6564850742219d4984009e29d2d6"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "8f5d78cb2fca0d23084153edd44d24b0"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "48cfbad22eca8a991461f6ebe6be0df7"
  },
  {
    "url": "ios/index.html",
    "revision": "783b1987235ebef351f9d5d0c1abddac"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "761feaf4a902ae1ad93d101d9125a89d"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "819fb18ab0bf16d052d33b749f653fde"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "198b82495dd1d10c185f010778e99e46"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "60fafd8212863150ddb0126157f40b73"
  },
  {
    "url": "tag/index.html",
    "revision": "00ccab16dacd1c74454c622afce11815"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "f546404661f49dcfabbdc2b44f1e3eab"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "eecf2c96c01a4975b4fcdc813e3162cc"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "990c5f6e6666cc24bf45820c16f232b9"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "0177b8e079ec2dcf40be4d67c975e583"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "25925105bdf9b37e2e805a8d7dbc26ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "ffc882cb92c3c6fa864d2d76a1ae956b"
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
