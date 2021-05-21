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
    "revision": "48b4f8365023ad9249abccd3fb41edb6"
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
    "url": "assets/js/55.d2c720b5.js",
    "revision": "684b416e51f93e403763b86ba35654b3"
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
    "url": "assets/js/app.d55757dc.js",
    "revision": "d1839fa1cdddf41409948834b78c312c"
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
    "revision": "566d7e66f3b37a91c892d9ba4b5f4b11"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "582312c7053cf974a08667791684e656"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "0672d4eb90f6b985e780f76e16c64f3a"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "293ef534ac82501c3bd2d2180ba9fc46"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "6bf9712e2b87c4c028b698cee258f5ba"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "5272b3ce2b12d18cf0e3afb0d0176e29"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "7d2c3c7621f850eba1235435ce6638a1"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "b4fdd40922e464712186819a9c29764c"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "25737894af71354a08e92248e79e6ea3"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "d379380c5104ba32201479cdc1447650"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "6439b6b2fc5404e9f89962301b887fa7"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "79211e6a321c53b424581508ed2ca6c0"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "079094560939dfb60b7f2e93b48c98b4"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "009d0d7aa9f8939404c16a010c0b94e5"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "8746c881744774dd0287d52d0d97d717"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "74796ff61409d3b78058c13cffe85ee9"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "b5bda9e85cb82cf3fa856bd3a5b17e34"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "ed71e0df3f18e5710b0ddf72c95e99c6"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "e58fe15c52cafb5800d19243d23051ad"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "bdb59d62238198e7c4c830acce6dade2"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "faaecf1b340ec22eb68068b6d65f6a96"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "5818f671dc926ad5fa04dd9b81a2a72f"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "5f15c3600042bcf754720403c3f1e430"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "7870483c35a43f3b6ce6d04e381ce802"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "48e5ac533428a736116878b8a7a7fbe2"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "10d38cf0efa5e0f42b16b7e7d1068871"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "8e9a00c783a8101b7fb033ded9f0dffa"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "512410e543853460d56e8b590e0d826b"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "2faacd31bd15b142ef89918a53e33ed6"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "7a569a53bc7121d6ba8de14b9b777e6c"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "544b7691da17c8577bb7381526466e3e"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "7f9d83df4cfd3cb80449c66989c23ecd"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "106364f2aee3fb2a577f0740881755bb"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "a3fb6d4294fce0691a94dde5738ee62b"
  },
  {
    "url": "categories/index.html",
    "revision": "74d8782e83365e2ee6a82af35d979b17"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "72206fdc74d6f06da228dcabf52fabb5"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "9fa09df27d6bba15c199489468f22f06"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "0aa01a02ecb2d80aeb1d52018d40d59f"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "1cd7694378815fdff7be6650646abc90"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "8b6eac4ae9d683e924db83d6029fa177"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "527eaf4c734589dc001349726c345793"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "e9b1ec0bcb1057febce7152c4f049eae"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "3063ff355658e8f9a16636c55771d257"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "c8c9776ede28852b3016d21861b42489"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "b6bf806b14205189f60a55910c65a481"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "35593b248a59194691788fafd7ae35b9"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "bd0cd04df4f0aef0a1c01d8755309a6e"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "1faf7b4ae75a9436077972f077e0b837"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "d65c92f84b9d9321b77b3ce4e33029a9"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "2a7ad3f86ef8a5a63105937e7c71cdd9"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "759d81b751e488b6b5efbdc916c4e421"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "cdd6092aefff3377d35f4f1ff9b6296c"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "db3b37890e07659fc86a8c432de0303b"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "d513800b5c39deb820161ad0f3b280bc"
  },
  {
    "url": "ios/index.html",
    "revision": "bf8fd58ea79e3e8198c644b6f2459969"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/index.html",
    "revision": "6818bf1a53c93db51e7bc13de56361f0"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "5e8d41be0cdd325216292145c24a6aa0"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "49dc66512c1eab1e56e416b64db9e0bd"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "c9930efceff00f682cee786f501567a6"
  },
  {
    "url": "tag/index.html",
    "revision": "0135ad0da03817f434d97282d58a2058"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "e30deec4c393d21d9db4352b3d0267bf"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "6867716649f91dd22905ae4f9f517f1b"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "21096cace0e399614c26fda2430aa300"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "4e6f3f4bb0a5a2d65f0c3ede36e705c4"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "510c322dfc73de0cfeb113c97739121b"
  },
  {
    "url": "timeline/index.html",
    "revision": "2062f6f9ed0629beff726a2fa3fba39a"
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
