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
    "revision": "a694505f7b6e8c79e4632d84201f184d"
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
    "url": "assets/js/1.5fe79815.js",
    "revision": "b76e1e039946defa39780f75118d0314"
  },
  {
    "url": "assets/js/10.2f9f2a33.js",
    "revision": "f2f69be4b04eede5028f75d128f906d5"
  },
  {
    "url": "assets/js/11.54e8910b.js",
    "revision": "9a8e391f3eb6ccfa8e7c2bebba12f4e3"
  },
  {
    "url": "assets/js/12.0afeb37d.js",
    "revision": "31c4935413daa97f093d61640b20a7a1"
  },
  {
    "url": "assets/js/13.1b14b774.js",
    "revision": "ff19815ea6b08d3c556d7ba3f99778d1"
  },
  {
    "url": "assets/js/14.c5ee062e.js",
    "revision": "003a9d49e63d6b13e63d0548150e9ffa"
  },
  {
    "url": "assets/js/15.f6dee25e.js",
    "revision": "c5ae01db51a5ebbe931a666e85be9010"
  },
  {
    "url": "assets/js/16.089ea69a.js",
    "revision": "bdf81c8851a41fe713f30dbc08d661a1"
  },
  {
    "url": "assets/js/17.b55d45f6.js",
    "revision": "6468956a91cd26a4244d55938e46e808"
  },
  {
    "url": "assets/js/18.5ab34b44.js",
    "revision": "3f333b76770d6a1ae040e7acc723cf0c"
  },
  {
    "url": "assets/js/19.21b3a41f.js",
    "revision": "a1e9d1abac5f1300c1b4c279cc16949a"
  },
  {
    "url": "assets/js/20.61160d0d.js",
    "revision": "9e9e73f03f00bca63bfc5f627b64ae46"
  },
  {
    "url": "assets/js/21.00d5ddc0.js",
    "revision": "95ebbf4a82fa1e6ae6f4a71405fef3dc"
  },
  {
    "url": "assets/js/22.d2122d6e.js",
    "revision": "c7e6653845d23c71d5fd9a1320a09c25"
  },
  {
    "url": "assets/js/23.27186853.js",
    "revision": "ae0c20bf3371094d5115c800389f7b55"
  },
  {
    "url": "assets/js/24.cdfa2e94.js",
    "revision": "4867e916452be800e0d9d58e268eff1c"
  },
  {
    "url": "assets/js/25.ed658a03.js",
    "revision": "3af08ce30435d697d648afecbdc3efcc"
  },
  {
    "url": "assets/js/26.acba0af1.js",
    "revision": "5a053d5db8b791816eca2874026c5b2f"
  },
  {
    "url": "assets/js/27.222b2570.js",
    "revision": "6e5fbfbe64cd20f90953ea5a88708387"
  },
  {
    "url": "assets/js/28.18607357.js",
    "revision": "540a932774eff09cdb2e1b7fa947582c"
  },
  {
    "url": "assets/js/29.7e618a94.js",
    "revision": "c7d987d2503755b5c1c64030ddc46a31"
  },
  {
    "url": "assets/js/3.45fd2d9d.js",
    "revision": "23c2981647a4d5391bf9ffb3f1a995f3"
  },
  {
    "url": "assets/js/30.6f41f354.js",
    "revision": "104d7673065288e8359420fd35c88ec3"
  },
  {
    "url": "assets/js/31.9ecfcb81.js",
    "revision": "f17bf432e76a2bb09120ac0bfb8deb6c"
  },
  {
    "url": "assets/js/32.8a5c5dcf.js",
    "revision": "88cb2bdc84584525a2a53d283933978e"
  },
  {
    "url": "assets/js/33.5c816627.js",
    "revision": "5c0c7dbf52d0ba8ad890fdb4a3bc12b3"
  },
  {
    "url": "assets/js/34.12648dde.js",
    "revision": "27fe86682e403062154196e9a7764ff1"
  },
  {
    "url": "assets/js/35.7729e1b6.js",
    "revision": "918eacd2b3fb530130a5291b9a747004"
  },
  {
    "url": "assets/js/36.d09b06bf.js",
    "revision": "27fb732af6652e8d4f9a49f365f75fe4"
  },
  {
    "url": "assets/js/37.11d312da.js",
    "revision": "c22c18eddc9c4f7c9ee05ef4bc9c147a"
  },
  {
    "url": "assets/js/38.c81337ce.js",
    "revision": "49fd5a2ce16757f31b2b73ca7d446a16"
  },
  {
    "url": "assets/js/39.3066b0e7.js",
    "revision": "839a3619e9ffffb2784796816b79c5c6"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.08a82139.js",
    "revision": "73aa37fc09d57ec4fab5a82e693b2426"
  },
  {
    "url": "assets/js/41.93e94740.js",
    "revision": "71b6a8725a51240136ff0297c8ae2e2e"
  },
  {
    "url": "assets/js/42.804c4209.js",
    "revision": "39f6a872ed9ea1dbc61737995b5fc792"
  },
  {
    "url": "assets/js/43.ec125364.js",
    "revision": "e4767c3d755cb33372f14e1d8144f69f"
  },
  {
    "url": "assets/js/44.acfb38b7.js",
    "revision": "ee995d5bcdeabc8b7aa88128b68c5dec"
  },
  {
    "url": "assets/js/45.b8c86210.js",
    "revision": "b40c24ad5c6eb1f6fa6114d3f8a714b7"
  },
  {
    "url": "assets/js/46.dd2ea466.js",
    "revision": "598cb505e0788981aca5b585ea240474"
  },
  {
    "url": "assets/js/47.53e5a235.js",
    "revision": "90ababd62280ab67bd35515f68b03d27"
  },
  {
    "url": "assets/js/48.b3de23e8.js",
    "revision": "37a658fe2c159468268c1223b1767948"
  },
  {
    "url": "assets/js/49.8f02e54e.js",
    "revision": "a850943681e3862fd0c308e5a445ddbf"
  },
  {
    "url": "assets/js/5.39230002.js",
    "revision": "9d36b37e17d72d14db0d9b74575e344a"
  },
  {
    "url": "assets/js/50.3f514984.js",
    "revision": "15520c1d431961845b178d0232d42ac4"
  },
  {
    "url": "assets/js/51.b2cf6f52.js",
    "revision": "5d03e419b03ee4fe29aba0563846472d"
  },
  {
    "url": "assets/js/52.f5d30e95.js",
    "revision": "ec4b97e81ac2d51619b5b5f3960c61fd"
  },
  {
    "url": "assets/js/53.3cdd716a.js",
    "revision": "dd308e2096f8a18b25b21f8d3988276b"
  },
  {
    "url": "assets/js/6.e5e5a94b.js",
    "revision": "ed12b2710e4b47f766dac9381f5f11e1"
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
    "url": "assets/js/app.f70e62ad.js",
    "revision": "124ac13714ef7f3f94784340d4f191c4"
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
    "revision": "06a19ddcf3b2bd001db49b2cb40dee83"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "2827e30bbc57060f0f0f515651e6df8c"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "fccd8fa31f488babfcd6fdaa218807d3"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "6c5cf6d448eb5b249206b053d02ef7b9"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "1476920ae408b33f4e3e22290afba42e"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "d4a104959648998b39ebea995ab03f5d"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "6c266301d5cda687e37690d7eaa531f0"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "8bb03985bc6600ca94b431b1856a56cf"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "ee462a18a0736dcf2cee838415468116"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "f3486692a113f2c65efabe32e75e0809"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "1c149cc0062318b101a48cb9aa4d4122"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "f6197a73341636db753c70cff808f95a"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "002342e4b4f7a1d9058e3dff7f52d11e"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "d887ad3b16d9609a0d81bca451d300dd"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "30712a92c73b575f8aee1072515d5262"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "e45b3cdc26b15a5756f8f4c609b087c6"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "c6f7b865d684756ddc22b6ff1ed40af2"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "4c08881074bd225b782f4e14a142689b"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "241c2924194215e9a80952132f3acaa3"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "025a725c5663a4b6f4b6483821f976eb"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "c7a67ad8ca102fad2c3e8687fe6ead21"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "6680445343191433760ea3a0930a6263"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "5c02c9adaf4eb9d540d721193444babf"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "dfb47df5d7d42261eca0f390b7afda73"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "2b0b715891f2d5b834866507ac42f088"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "c2385b2e407b7bf32d6ff1451cb29460"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "9cb2213964a8d672925929087c7cffc9"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "ac6d8e690368a1b957f9a7b8a6e85531"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "ba0bcaa8d46043e9f2c3ad59264c3de6"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "be2a5a04ed12402e88555f321ba0700a"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "f8dd894f610b72570c5d4d47daa70d94"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "e3ef461c44c5f63001f01e69e8460313"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "27ac9e8587a73b737dc5c4ebae36246c"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "644a4e55399658b5d11a9c4378b23cc8"
  },
  {
    "url": "categories/index.html",
    "revision": "da2611f20486ab54d4c9ccfec0583e21"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "2e478d76a0863780873d48008d07efef"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "d29b48269323882ca039af22c9c84cd1"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "74a817f52d712f2d35c265c9d1b4a1d0"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "904bc24f44f6d60e366468e93d22361a"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "dc0371060f96c3f9095548c3905484ed"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "4c87335e772be2c25330fd42a89cb337"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "228d0ab25ba9104de0f0f821c0248cc7"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "4e4561a84620b755e02063d2adc4e2b0"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "6bb1880e69684c7038ecb4f47e5d5cd6"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "e9711d2f868ac1c33efa071a53c23e87"
  },
  {
    "url": "notes/index.html",
    "revision": "bd30f032dc8ce2cbbb8e42fe557b446f"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "9b5135cb8bc89a3a66031f79ef01e1b5"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "d45e844ba06ef58b6db3b7cb4fa3fe8d"
  },
  {
    "url": "tag/index.html",
    "revision": "8b5d5cd8e08e4a1b5343e80d7a2bfebb"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "86cf8082084817460ff11a478a3a2352"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "6511e17b59f32c905b91f18e1346defa"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "a3a8eed8a20eef562b05056cf6ad9636"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "17f6a34934a46fa55887e12a6c06762c"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "69cf26f1a72ff01b1f18f570bfa4d5c2"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2a532bdacbe48ee98f9f42a1ac53a8f"
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
