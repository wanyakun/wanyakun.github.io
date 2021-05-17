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
    "revision": "14e570385e37fecc8476655a0d9bc316"
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
    "url": "assets/img/2017/component-login.jpeg",
    "revision": "e59c7508461f93905a1d78b5b465444b"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.5fe79815.js",
    "revision": "b76e1e039946defa39780f75118d0314"
  },
  {
    "url": "assets/js/10.37a2f5af.js",
    "revision": "425a10a935cbf75eba5e6954d2aa8347"
  },
  {
    "url": "assets/js/11.57951282.js",
    "revision": "e1e5e42f7967b0116947d238ac505872"
  },
  {
    "url": "assets/js/12.cd51de1c.js",
    "revision": "e68f15015f35baaad9b19584d56f3de3"
  },
  {
    "url": "assets/js/13.773d043e.js",
    "revision": "b45458d85b0228153f4b9ab9445b7b19"
  },
  {
    "url": "assets/js/14.5e3082ba.js",
    "revision": "f84d7e7a02cc8b1eea6db71e1702e69a"
  },
  {
    "url": "assets/js/15.44318a26.js",
    "revision": "9e028843f8e187a73f123c4ef3659502"
  },
  {
    "url": "assets/js/16.2b7ee73f.js",
    "revision": "83a00f2b25a2b868a2eefb04c6a02848"
  },
  {
    "url": "assets/js/17.28d8d99b.js",
    "revision": "1542147bbc9abadff1d56491cb492a74"
  },
  {
    "url": "assets/js/18.64b8edec.js",
    "revision": "84072c368c325006da2613723c4ff86a"
  },
  {
    "url": "assets/js/19.00630e1f.js",
    "revision": "dd5c3674dffcac4ba820dfea0ef52a93"
  },
  {
    "url": "assets/js/20.5c0060b1.js",
    "revision": "39f864a909d7f4a7012f93aaad32085a"
  },
  {
    "url": "assets/js/21.dc522ac1.js",
    "revision": "c019f472bcc3875c2c63ed89839c47e3"
  },
  {
    "url": "assets/js/22.ac555aa0.js",
    "revision": "87aa0eb9e0f7e9f306a42c88f35b7f60"
  },
  {
    "url": "assets/js/23.987c5289.js",
    "revision": "e33b6bc03d7d47c43decc8d0d2613a15"
  },
  {
    "url": "assets/js/24.998e2fbc.js",
    "revision": "bc33e285fa62b348a4cd9005bc2d55f9"
  },
  {
    "url": "assets/js/25.3b1caf19.js",
    "revision": "989e588fb0307023208f0ea3575e7a1f"
  },
  {
    "url": "assets/js/26.8be969a4.js",
    "revision": "7dc89c78a7870017b3b726c143aea6c7"
  },
  {
    "url": "assets/js/27.32331cfd.js",
    "revision": "e4de9c58b958cc187dcff35210e44099"
  },
  {
    "url": "assets/js/28.b45e5f56.js",
    "revision": "03bc2a94060dcf11920d55239ca212cf"
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
    "url": "assets/js/30.67054500.js",
    "revision": "e8995ead59c6663e44e82be9058f4629"
  },
  {
    "url": "assets/js/31.a96cd289.js",
    "revision": "41d074980406cc09f967e938f86e61b1"
  },
  {
    "url": "assets/js/32.c43b710b.js",
    "revision": "c1f8a807589644772770983d20d2251b"
  },
  {
    "url": "assets/js/33.4d0fa1e7.js",
    "revision": "5f1c0e4f8560ab69ccdccca103697b94"
  },
  {
    "url": "assets/js/34.46a68e93.js",
    "revision": "685cf981c7503cc8c7599ab0f7bb03c0"
  },
  {
    "url": "assets/js/35.5f1aaaf1.js",
    "revision": "4107a4b401bd3aa162dd62143dd718db"
  },
  {
    "url": "assets/js/36.169134ec.js",
    "revision": "312e0cb589df318646b8115911d93edd"
  },
  {
    "url": "assets/js/37.c5342e0b.js",
    "revision": "ed720946d75332cefa32396574a11fab"
  },
  {
    "url": "assets/js/38.33c076d9.js",
    "revision": "e69aafefa3d2da21996ee88af155c801"
  },
  {
    "url": "assets/js/39.eb8794b0.js",
    "revision": "31678e01020d84dce71090b962bfcfd4"
  },
  {
    "url": "assets/js/4.2289047a.js",
    "revision": "986ddf774985f361a3c0ba2127f71531"
  },
  {
    "url": "assets/js/40.c94ff116.js",
    "revision": "cbbcf7c79508b840d68c234e575ac890"
  },
  {
    "url": "assets/js/41.3d1e8790.js",
    "revision": "998870ecd03c1eea9b2415f0b461dc42"
  },
  {
    "url": "assets/js/42.5aa079d4.js",
    "revision": "f6eef042e1b7a6262d3fa4ef0ebc9f24"
  },
  {
    "url": "assets/js/43.6b8f61a5.js",
    "revision": "569f0eefb592bda427aeeb9edbde8f33"
  },
  {
    "url": "assets/js/44.88a6ddfc.js",
    "revision": "d251357993aa1166a3f6f37d9af15f45"
  },
  {
    "url": "assets/js/45.bd035617.js",
    "revision": "6aef5ed2fc928579c9d8f43beb25e163"
  },
  {
    "url": "assets/js/46.e79e541f.js",
    "revision": "4bfed8d9253eced2f63b9d7992311fdf"
  },
  {
    "url": "assets/js/47.52a577a6.js",
    "revision": "0f884393630acc7609cd812449587b8a"
  },
  {
    "url": "assets/js/5.c1750247.js",
    "revision": "bf69da2347d60fc3365838639d42b715"
  },
  {
    "url": "assets/js/6.1a073a2f.js",
    "revision": "2d0c2e308cbc0c2a4287e1c8a29729ec"
  },
  {
    "url": "assets/js/7.596d808b.js",
    "revision": "d25a75a9dbe8f0bfd15525dca9a098b5"
  },
  {
    "url": "assets/js/8.f448fe9c.js",
    "revision": "14956e0180e097f09f7c3164127b420d"
  },
  {
    "url": "assets/js/9.22f4f37c.js",
    "revision": "d36e224a9f60ea03d6f4fd7ebe816910"
  },
  {
    "url": "assets/js/app.721fb269.js",
    "revision": "3664c5dcfdb0d82122c1e83750e81d77"
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
    "revision": "3b1dd7180ffae724d8ecdb892db360f0"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "6bf7eb3619dca304cee547ba45e3996b"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "2c30269cc5b9fc90b9bfe8fcb19d40b9"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "abf1af0c2d0b1d59fb8da03d77be80d3"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "e51c8aff999b7b64eb569a4e3ae9523b"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "d5992436587dfff26914ab14e9f93c0e"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "30166fd54c8898982fecca011b4185dc"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "8c559fbc9aff1336022009630b681acc"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "b036c117c0843bd8bae11682c18ef50d"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "eeddc73881b431e9f35a41e67e788b49"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "27c1248f9a2a3afb921da613e5453cfd"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "90f0624044443288c1c47342c0b1a95d"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "34965133ecd467681b1c4f189e66113c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "4ffab6c8f8322cc6d756b3cc939107f9"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "e1596b285ae629c516744e03ea9ab66d"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "a578a5b7f55ccf53aad05135e56a85af"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "422d8f9bc476b2c0ed3359bdad2e3d56"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "3e024d3cd8e7ec631a16790a85fa4590"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "baa2eba53940af53cd5fa83e91e39150"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "c3ba11fde9ca057e10af06494b64230a"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "60ff0e98bc861e08d028f40d25da930f"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "7dcc97fa1bc4bc83d021f04f8a08c9ab"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "a29b4cf48051d8cf5d400fe89b85b45b"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "500b3811c4e98898afadcbbf64917bbf"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "abb5faad5fdcbf31362b80f4af608544"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "ecdbfe926ac0d04c2d2dca84dc88ca57"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "cc11c9040f7d5aa192deba5b5107b3bb"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "d72f13d5f08369d6eafc053c7ab0f218"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "2acae5ad89b93cd60119fb055b4e915a"
  },
  {
    "url": "categories/index.html",
    "revision": "d74379d7d5679afb54fe13d18c338828"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "165d8e4186f3a0dcaa542086cb87bb90"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "839c0f0b6f9d62d3c4c9c81f140520d3"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "9c7e8b29fe0ca8169067e0648750fa46"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "39867471f20066ea80e5ed96957dc86a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "e5c235eded4b4179c177b69f9de73cdc"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d187029d23a7b0ea273e469302105fca"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "23996f8300e614df38771d635806eb3e"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "06df03a5a23227fb437060a0ea4aab33"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "fedea1db463b91214df0e06e7ae60924"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "70516c3f5403581bdc501c9b7aff1661"
  },
  {
    "url": "notes/index.html",
    "revision": "decf85a588c7055643bdd7b3681642bb"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "bf26ab2b20254b6a3f63e9631e2261f4"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "ba2df7982581390e658370144ce633a7"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "b6a73f0db029992153dbad1a31b3d5e2"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "e334ddefffb2f22f99362223e3a6a866"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "15f96b6d832c048af650c6ba47c59def"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "f5925d24b35a92583a950589f137c83e"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "d96a761a8881e7ef1d0bf27819f388fe"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "acb88f939a1bcfcf78485d28302da684"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "6e305ae216ebdb7b2070679e644acf56"
  },
  {
    "url": "tag/index.html",
    "revision": "dabddade275e696080bc9128a54b42ab"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "96b606ad5b660f0c7a1356b8cbed77fe"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "3e774a67224f3a040adae3152e78cd20"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "6b71f0e3c9c90829dcfa2ece4a0ad926"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "c8ba0eb61c7432e9dc848dd85df7d8fd"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "52a21ce6d833cdacdfbb2706f8730ec9"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "d0afd3df99e2cf2e1f29b7981f6211ea"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "e5db4d07833a575fa63e8363d413feac"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "16a902a9a02a3ee2b74f8caf15a29da2"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "d046d93eb70c6722d5981ed9f59aeb06"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "af5e8a94057802fd7ce55c910cf8856a"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "9e9ce4723ea6c8e38ca1b9f90a9f8176"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "3e1a4beac8753abe7f6f3ffaf8bbfff6"
  },
  {
    "url": "timeline/index.html",
    "revision": "7878e127ae8b86d73f874af7056789c2"
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
