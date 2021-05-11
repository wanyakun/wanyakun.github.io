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
    "revision": "c2426719d16307d71f2eed0bd200c2fc"
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
    "url": "assets/img/2017/CocoaPods.png",
    "revision": "03b3d8a72e1b663adc4b6f42ecd988bc"
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
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.366b1f35.js",
    "revision": "f9b8d284a4923899865d5df126617ac9"
  },
  {
    "url": "assets/js/10.37a2f5af.js",
    "revision": "425a10a935cbf75eba5e6954d2aa8347"
  },
  {
    "url": "assets/js/11.5fa6ad6f.js",
    "revision": "8bb9a6dd2744a42787d52144adc2cdce"
  },
  {
    "url": "assets/js/12.b200a173.js",
    "revision": "2a856c17c2c206193e003808c0b5ed29"
  },
  {
    "url": "assets/js/13.58759fe8.js",
    "revision": "27fb4ba8f54de96aee999ed9a73da79a"
  },
  {
    "url": "assets/js/14.b4d07fa6.js",
    "revision": "e9e1eb1adb21aac3217082f59d58d7f9"
  },
  {
    "url": "assets/js/15.e7a3e995.js",
    "revision": "df2283f9a20847d2a31cff8e382d8392"
  },
  {
    "url": "assets/js/16.18a4c133.js",
    "revision": "fa4a5b420e4412a6d3ffbb7c02218b6b"
  },
  {
    "url": "assets/js/17.6053b0aa.js",
    "revision": "6fe385e971f0210e308300e75c8e00ef"
  },
  {
    "url": "assets/js/18.5a939334.js",
    "revision": "ad59e129e0f0183d9c435189a9db49c1"
  },
  {
    "url": "assets/js/19.31ecb5cf.js",
    "revision": "e5d70ad416082b73930b8067492ea631"
  },
  {
    "url": "assets/js/20.eb946890.js",
    "revision": "6da0bcac71a02dcb672917eb032b9cb1"
  },
  {
    "url": "assets/js/21.21384a93.js",
    "revision": "8a87842b7ea7ec96b2fa355aced3b500"
  },
  {
    "url": "assets/js/22.f57406dd.js",
    "revision": "2aec472021b94d9b4fb7793552fb7778"
  },
  {
    "url": "assets/js/23.e4975209.js",
    "revision": "ecef3c88f7633ed82bed6879fed29395"
  },
  {
    "url": "assets/js/24.517fca0d.js",
    "revision": "fbf0981679dfd456dd969618b0abd333"
  },
  {
    "url": "assets/js/25.33ba4930.js",
    "revision": "836506f4f6a6caa82c1ad2ad726132ec"
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
    "url": "assets/js/29.a16bc782.js",
    "revision": "c9085b242e6d45a891d3ab44577b7e3c"
  },
  {
    "url": "assets/js/3.f98d8e46.js",
    "revision": "6587fa598204a0b7cc21b80c0cf8d4d4"
  },
  {
    "url": "assets/js/30.e1ba454c.js",
    "revision": "2a59f8e1a3b80e1c9c636a28cd35bee1"
  },
  {
    "url": "assets/js/31.21c016de.js",
    "revision": "c98bd9fabcc58f2d4d58fc0f856ac76e"
  },
  {
    "url": "assets/js/32.ded9a273.js",
    "revision": "f1f7b3a33bd798e9708222971163921d"
  },
  {
    "url": "assets/js/33.cff6954d.js",
    "revision": "c00b1e48721cd6037489d9dc1799259d"
  },
  {
    "url": "assets/js/34.46a68e93.js",
    "revision": "685cf981c7503cc8c7599ab0f7bb03c0"
  },
  {
    "url": "assets/js/35.df480829.js",
    "revision": "eb1fe44895f20b65cb7af57fcf99b3b4"
  },
  {
    "url": "assets/js/36.16ee965c.js",
    "revision": "1e5689530208e5118009fb4b0404ae18"
  },
  {
    "url": "assets/js/37.8971c0d3.js",
    "revision": "851cae4dd50dc110ccd325645271024f"
  },
  {
    "url": "assets/js/38.477e41e0.js",
    "revision": "209a09293b5dc0c49c076ef52f0d5e71"
  },
  {
    "url": "assets/js/39.f082719c.js",
    "revision": "83a1d236cd4116ad6161cc9e432b1658"
  },
  {
    "url": "assets/js/4.14a660d9.js",
    "revision": "926e2dee1b9f3db33af628e5b6afa48e"
  },
  {
    "url": "assets/js/40.3b60d65f.js",
    "revision": "32d3ee158994bad9dbadd65a022400ca"
  },
  {
    "url": "assets/js/41.da431fcb.js",
    "revision": "84caf1c8454de244a0e8d483bcfb4296"
  },
  {
    "url": "assets/js/42.6393f2e2.js",
    "revision": "9bdbb995a7d601a84108bc22cb8415fe"
  },
  {
    "url": "assets/js/5.d764b8e6.js",
    "revision": "97c601eb2cb6b9df1b9a3b2fa951404e"
  },
  {
    "url": "assets/js/6.1a073a2f.js",
    "revision": "2d0c2e308cbc0c2a4287e1c8a29729ec"
  },
  {
    "url": "assets/js/7.daa99d20.js",
    "revision": "5ad62373dfcdf855a295b307c33ac35a"
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
    "url": "assets/js/app.549b60a9.js",
    "revision": "6c0abb86aaff28912f4b328ce780210b"
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
    "revision": "42f85c1ddf7a4a820e5878ce94a9f34d"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "7b06229d5192bb1ab616da4b395b60dc"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "802f5fcda3bc6a78ac61a2253d24a9d0"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "c9494e46dca14ea06d735a057e015c1d"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "5f40068b44ddc509f8316193d7723689"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "6d621010429dae9369571e630ad5355b"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "c925b613a9f0ae99536176f2153e265e"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "aca792fd5e26da4168038a7560d1c0ff"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "52232ad576496e845037d275085cecdd"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "a4ad9faa77a72bcf8b3ef8bbac6b9681"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "fbc9195c4d7908be2290e406bd07e618"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ec237c9234e3ed1eba1bde10a2527e29"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "967dc0003de6fbba216a854d53db78da"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "5e2934276c3c376f8096ed7805411ac4"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "0a7ec80636afb9600c9f33b4c6982c36"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "b5500116959ae9eeddc15dbecc3543a2"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "8f34a39bcbce7d387a8bb5bdd0e809d7"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "70deaacf30c66b881f0684e0c5db0fb7"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "176323ef323b8e00fd9b5b9f7bdf1027"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "e2c979dcb2cadd62e8ae816e4f0aeff3"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "a63caf6e0dbd0c86df343cb6ba8db5ea"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "be18d6d362662e2920d43750cb10445f"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "9ebde0985ae4178afa2f67e68b14c513"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "a0bfdcc141c284579c74a8aa22782588"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "bcbf53e6265da64cfa2fa3be1f46e214"
  },
  {
    "url": "categories/index.html",
    "revision": "9f849009ab356b758e88307756308b44"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "3e8227738e6007c293552ac6d88d8810"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "b6aff6e145a362310aad6dd2b439e0fe"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "2af9173cc88e745036613e774c747b13"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "f7f63716c902ff642ba28a40ebfa0864"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "e5622e4838c9c820e057be6924ba9e5c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "6844778d4549ef9f609c92b8b42c8dd1"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "988a0acd343249f4b884ce46e3eef74b"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "33aceb59f35fda388a24bd49e1af5e3e"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "f4c3a5e193e9ab224a9aa1d7155d02c7"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "84c5bfedef6708bb43cd07bdd4cfc2d3"
  },
  {
    "url": "notes/index.html",
    "revision": "eea6c417863b98eb37d37708f53c5597"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "fd9bd3e0ddc1e3479865c3d8899e680d"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "b44e7dd3a949a8a6fdef1a2d676390c9"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "aec533f93b19d9ff9bb16d6b34f90d53"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "c2d56919cf602e98e1a89d4c9c425824"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "fb6fd3e5d9f5b17ed4e03a6d22181237"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "6094107b24d95bfb5018ff9be5e482d9"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "38e05939b766812a9a0ff5688e81106a"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "db2afbd38bbc03c30e71ad6cf9eb187c"
  },
  {
    "url": "tag/index.html",
    "revision": "0084271095fa201a162c16fe0efdd075"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "b7ac72f8a270c882db6db6e9d580ed73"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "67f2bd9749c1cf2a9f178ff2d91c4a93"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "33d4b8e5b6b188dfc36fc68c03143480"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "97a748d5e60dc0f0411b354a0753fe88"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "ed852c9bb7cdc03efb7f6c5155502f88"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "ee93c2d3bc72acd5cd41316daf7fcaaa"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "b90e60b9b59d3a202073d06c6b99e840"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "084d3256bd79fee9fe445d7086de0bc8"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "c6f95fbbe0a68c945b85c6d61a55fafa"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "3b6fdfb4bdb7dad8b32afb7dafb229c5"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "163fb61c5e285f23246b634ef4ca8928"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "f6eb84183aca217221866616db9f662d"
  },
  {
    "url": "timeline/index.html",
    "revision": "880e32cdc36b46393df8d7cd1620724d"
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
