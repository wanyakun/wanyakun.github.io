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
    "revision": "67cc34a69665b087b6ea5ca42409a902"
  },
  {
    "url": "assets/css/0.styles.994e4abf.css",
    "revision": "52aec7fa39d37e2187a38e538edfa264"
  },
  {
    "url": "assets/img/2018/annotation_3.png",
    "revision": "89d00ad823a5d1f61569356425265ec2"
  },
  {
    "url": "assets/img/2018/annotation_4.png",
    "revision": "da239e6c5588a9584030719610675d33"
  },
  {
    "url": "assets/img/2018/app-architecture.png",
    "revision": "5f0fc1a24b4ef7713c83c8c2197a2b5c"
  },
  {
    "url": "assets/img/2018/ios-architecture.png",
    "revision": "b384ce9f9fdcec61539f046f3857d30c"
  },
  {
    "url": "assets/img/2018/matrix.png",
    "revision": "843592bd5b0216144656a213af04fc59"
  },
  {
    "url": "assets/img/2018/order_bundle.png",
    "revision": "4d77fc7581167dc7dd6c59f34ee188bf"
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
    "url": "assets/js/11.f2b1fa7a.js",
    "revision": "c4e7ab9f9c2af99a9a3fe84367c92c40"
  },
  {
    "url": "assets/js/12.27d40ab2.js",
    "revision": "b2082d1182806e0fceb3d1e43b03ff0e"
  },
  {
    "url": "assets/js/13.203ed358.js",
    "revision": "bdf1eb530eab9fc062b04ee37d96c352"
  },
  {
    "url": "assets/js/14.60b64611.js",
    "revision": "713722a83eecd34dd1d2a2ea2c81d493"
  },
  {
    "url": "assets/js/15.b15d9680.js",
    "revision": "fa8c1f203eab0e5aedd6ed712bc2aeaa"
  },
  {
    "url": "assets/js/16.e0439855.js",
    "revision": "dee2382a29b5f42ed377a3d50f61e247"
  },
  {
    "url": "assets/js/17.bbf8b451.js",
    "revision": "6d9f482f9aa4fbb78135150838cb1df5"
  },
  {
    "url": "assets/js/18.775bac23.js",
    "revision": "9a5eea641157b48d65182c357e8e976f"
  },
  {
    "url": "assets/js/19.908c1a09.js",
    "revision": "1005252847097154c4312ddb8e8ff181"
  },
  {
    "url": "assets/js/20.545d8b90.js",
    "revision": "4a498c7532469429d9cf4321d6603e89"
  },
  {
    "url": "assets/js/21.60a4291d.js",
    "revision": "0475e2e87b058c1b948cf1b5ac3e4d31"
  },
  {
    "url": "assets/js/22.c21ea964.js",
    "revision": "051e3543533d6f7abc7560ede00d25d0"
  },
  {
    "url": "assets/js/23.27186853.js",
    "revision": "ae0c20bf3371094d5115c800389f7b55"
  },
  {
    "url": "assets/js/24.517fca0d.js",
    "revision": "fbf0981679dfd456dd969618b0abd333"
  },
  {
    "url": "assets/js/25.2816b101.js",
    "revision": "aee9b3714dc36b2a64669b54549d30fd"
  },
  {
    "url": "assets/js/26.510453cf.js",
    "revision": "4ab072fdc2e7e7071169ecc0dbb0896f"
  },
  {
    "url": "assets/js/27.6318a635.js",
    "revision": "9b352a6ca7d14cb3484601f68519ca6a"
  },
  {
    "url": "assets/js/28.1ddea4ad.js",
    "revision": "c2e9e48ca12eaa2cd81b73c0d7f82d03"
  },
  {
    "url": "assets/js/29.e4af6ca8.js",
    "revision": "cd50dc11da3574b4629124bd441bd7ca"
  },
  {
    "url": "assets/js/3.45fd2d9d.js",
    "revision": "23c2981647a4d5391bf9ffb3f1a995f3"
  },
  {
    "url": "assets/js/30.e1ba454c.js",
    "revision": "2a59f8e1a3b80e1c9c636a28cd35bee1"
  },
  {
    "url": "assets/js/31.ea70695f.js",
    "revision": "3f2b490459c4f92d81d6a787fb266460"
  },
  {
    "url": "assets/js/32.ded9a273.js",
    "revision": "f1f7b3a33bd798e9708222971163921d"
  },
  {
    "url": "assets/js/33.f204f352.js",
    "revision": "3764d0c2aee099ec0c93c656162fa1ee"
  },
  {
    "url": "assets/js/34.0d2fa8ab.js",
    "revision": "2b82702e20fcb88e2fcf65cea00471cc"
  },
  {
    "url": "assets/js/35.7407ac71.js",
    "revision": "2e84fed2b2c0afb6430724ce74e10669"
  },
  {
    "url": "assets/js/36.343bd9ad.js",
    "revision": "613df0973841f0ee9540592a88ab46e5"
  },
  {
    "url": "assets/js/37.c3fa7ca7.js",
    "revision": "d6f09e4124c2e8b866e95636ac472399"
  },
  {
    "url": "assets/js/38.d85d310e.js",
    "revision": "403016e109398df4aa854fc22ed4566e"
  },
  {
    "url": "assets/js/39.c3191a6c.js",
    "revision": "83a1d236cd4116ad6161cc9e432b1658"
  },
  {
    "url": "assets/js/4.14a660d9.js",
    "revision": "926e2dee1b9f3db33af628e5b6afa48e"
  },
  {
    "url": "assets/js/40.b2dfde13.js",
    "revision": "82d3979a500f7ad4e77a99c25d765a89"
  },
  {
    "url": "assets/js/41.13ba8c94.js",
    "revision": "9dd1191cbcfba656ac65b377fb7e4bd8"
  },
  {
    "url": "assets/js/5.d764b8e6.js",
    "revision": "97c601eb2cb6b9df1b9a3b2fa951404e"
  },
  {
    "url": "assets/js/6.879ffd08.js",
    "revision": "9873bdd786404b53a6fd21755cd836cd"
  },
  {
    "url": "assets/js/7.c46eb775.js",
    "revision": "8d1f027508d28c37d73726bc18fe54d1"
  },
  {
    "url": "assets/js/8.f448fe9c.js",
    "revision": "14956e0180e097f09f7c3164127b420d"
  },
  {
    "url": "assets/js/9.158fd4e3.js",
    "revision": "aba8392eb16fb83ba254425191aaed79"
  },
  {
    "url": "assets/js/app.21e0320a.js",
    "revision": "35a2aa99ec0cf9696a6f607a10db6cfa"
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
    "revision": "b694771f055bfe1e4558058bae1dbc2c"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "1e537cc00f9e23331cd1e9bc73dcaa24"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "0aab745857540ee3efc03ca802e32ba4"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "d56a7cb9c0d73e0b1c917992508a8fdb"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "451f1fb98303738eac7d073e5d3a6c8d"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "5b1641957c1819f2876a042b236193c9"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "e431dbf63e8419f7ca5347707a4481bb"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "6abc9e0195f62c3ecec6f9d97eab1940"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "1dd28221085244aba63e9001b4b25410"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "05495320548b59ca4ec8676ee00f95ac"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "67e62838d612e85028cbad26dd98bfb0"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ae3509b58e2ec143ec839f4e03717663"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "b27d6e0b82a71ec7ab2863a16f3670b5"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "57d4fd5e0b5cec5f478e371f727cb7bc"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "74b918e4b03ddb604eebe9cdcd2464d4"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "89cf78a350e9e80cd9c3ec1b872add34"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "d3e67587e47a597561c8ac4b36824fb5"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "f2fa390ce6018bbcd381f5d55fbe445a"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "03d1106dd8ba14334b743a36d98ab2ac"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "e2db4ceee6f9a882799b5d7108778fc7"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2a1e702d39c3a1374fa15192593c0e64"
  },
  {
    "url": "blogs/code/2017/2017-04-07-ios-private-pod-specs.html",
    "revision": "25c59b6735bc252305d5f0e5a15fcc55"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "865e630c53bde0de5937337f85346193"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "4d161a579e1ab2ec041aba52f9fea259"
  },
  {
    "url": "categories/index.html",
    "revision": "b6392d96790fde9677af951e5a2a6272"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "1de735633c34deee9055fbc63932ddd5"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "02a9f3e268b649be71ebeca9adeba61f"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "20259e6831ab2efa35b86087c7eb2aab"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "214347da3886838ef17aca4bba71660e"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "eb9f9a0e9f70b745664a0ebebbad7df5"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "eb8c4a54b4ea35640358963079dc0851"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "8f794a0c7c01f3bddbb922b66e151f32"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "7f3aa3469b4192b454353a3ce352dc34"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "0b3dc25eb08b148de5a58cafc4d56593"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "b5ed804e31afb6a81806d4c4ca5e1072"
  },
  {
    "url": "notes/index.html",
    "revision": "fb57750fc4052be6299eb695019f97a1"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "c16853544a883d7664e18825c54d1b00"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "7c8c69761c8a8a219f4fdcefe7f2bc5d"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "1d6d9fb171eb0f06492a7d42997e493c"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "119ee0de10d73366332c23e1512eb149"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "919512056add972bea8a3d65b8e8a137"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "d74195ed4c40eda44b270609651a4c37"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "f2a1ea6e75a58d4a55c7b73ee46ff958"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "98b29a3948d4cc66bb6bbe0da044a001"
  },
  {
    "url": "tag/index.html",
    "revision": "c61940b68f1413a789c58cc0433b2c61"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "fe3113da1ef5ae4aa752d34eef7f4f37"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "1d404712040e0a67373ba1fc289a40b4"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "7cf349c04444a6ae02e00b52e21d7315"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "3776d3acf1b6cbfa7389313d85f0022b"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "5a9dc220f9b7d87a994660350611851f"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "c86f4790415e698c1234d911090f5e59"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "284e8827272d07c80f5168afd8982c61"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "08ed4f8ca0527af144cac557e91d53a9"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "a9eb51e0fb72d7d14beb1190b94d22ae"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "fb846fcb5f6e5db6ef8c2e0e63df0a64"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "bb9dafded060a328b967ba2ecb270dc0"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "c7ee3e499bc602cde5f26c7177e5fc78"
  },
  {
    "url": "timeline/index.html",
    "revision": "390f5991d72c8f26861b21ffd388a96f"
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
