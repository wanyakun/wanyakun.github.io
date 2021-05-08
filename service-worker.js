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
    "revision": "a975b7b32f0883a0d10f99660e01d94e"
  },
  {
    "url": "assets/css/0.styles.0774e410.css",
    "revision": "e9a2de39b414e0736cb18483403ba172"
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
    "url": "assets/js/34.eb0d1258.js",
    "revision": "8ae51a539da1ff112b3d22227d99b15a"
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
    "url": "assets/js/40.37c3eaa0.js",
    "revision": "5b7fdb8cdc059a8dff9edf819209edcb"
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
    "url": "assets/js/app.1ba39782.js",
    "revision": "04eff7142ae1b1341e44bcfcf7a12161"
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
    "revision": "be657712860a79e9804657e2db84dcf3"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "2ee00c3328c2b08624d75affe30e095d"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "b59fd808fab6bee2520bd9b3b9807ad2"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "9343ab42f9d8968d09f56f0cfdba1f13"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "0d9cab262da7471ae426f092a274715d"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "b52a523cca2257963b4e9a6ae973b498"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "7b411add4ae49f0be2aec75815d3661b"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "fc53720afa79d80a3c9b817f99e93a49"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "4ce6d51b0ab69a3b6fedcab6527c98fa"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "1de7604f604ab538aa33e6d8b9d2e35b"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "7341f32ca4fb6ccbbd95b5c0470dd7d9"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "95391c9d34a1637f37eb85c6096f7e75"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "a11866d1d9e2116a3b9448cecf712440"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "fb085241a0e6fb24892b4946fb58e94c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "006266342b1f0156bbbe80d99a0ae69a"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "56ba69f0ef387ede236109b28fd3c8f8"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "eb5d2c6c7b2932e5d8e85de51d62d8df"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "d0255551dae574c97f63296f32d93fe8"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "c3f47dac8353c786dab970a1a76d033a"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "48cdfdcf5d06577fa70bee8d1bf4724b"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "bb4552be46836900870ba885c6768c0d"
  },
  {
    "url": "blogs/code/2017/2017-04-07-ios-private-pod-specs.html",
    "revision": "b3b915dad4ddab3621e27cbd4f0e3e10"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "3ca8e1108cf750a0f1e583778e2d5c7a"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "bc17df6e19948a8cf520b29a899c4fba"
  },
  {
    "url": "categories/index.html",
    "revision": "573f3a5fd5ea347a873901723f2cd35c"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "e4045aa13ad0ddee8d70847403b98114"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "4d85fc5d4cc7a320bdd0282333c29fe2"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "2d63277c9016e1b7e24fd35303af726c"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "4c09fdcb7559cbcd24f84f32aab69fd5"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "85456ba6b01a12d8864c6fb46c71fcfe"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "bd9928a4ee37b7eeec63c8d463743b56"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "a52fc0076933868c5808571a78c7f79a"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "61a96094b6a21f6d5d36ae193854edb8"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "c58490639d37bd2be3be565900a7cabd"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "d40e31f49a8652092ebc20c4db2259f9"
  },
  {
    "url": "notes/index.html",
    "revision": "c82bb597a37d35b5dfcf9fd90db7ec83"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "ffdaecef320c4adf0fcecce6d1136496"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "ba62a62383d2839aa26cade3431b1e6a"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "52303ab0f9248d5ec2a923bc76127b1c"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "15894d89078f7de36e652163263d8d3f"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "fc6fad197640505e64ab737775a9fbe5"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "576438924342c3890055a7f11ca874ea"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "f9a260d2c5ae1fcf0a43110029232af4"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "6832865494b6fac8e82615b89328cbd4"
  },
  {
    "url": "tag/index.html",
    "revision": "f0811ffbfc45ab92fea926a2e54ffff0"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "2bf0298d76632310e536ce8863c0031f"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "1e2e06edb834a024bea60aa742d979af"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "bd3eb4dd1044a12b8a10a1cc2a27931d"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "13aa541f8c0a43f7c24c32e3d71a9f2c"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "28058c590dc8a36e967135615677966c"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "9f6ce98d0228cfd334c58c731617657e"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "9dfd745cbf105cb6e69fb06d87a9f5d0"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "c4dbfcb8e7a167bfafe0f51a2541b39a"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "850f5b8b3b89becc825340f070a84440"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "27eb232eb308854d27b31d95af2f38b2"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "22ddd48bb06f059c7248e878288388c6"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "f9d928fb2b1be27e1b2a3e8b7a9b7eb5"
  },
  {
    "url": "timeline/index.html",
    "revision": "4708dc15400252c97c718056894ffa65"
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
