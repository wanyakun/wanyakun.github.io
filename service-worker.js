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
    "revision": "aafc0af73c8f6f311a4b2269702c2215"
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
    "url": "assets/js/33.adf1be1c.js",
    "revision": "a44e5bfce39ef07e5cbfd381e32aa4d7"
  },
  {
    "url": "assets/js/34.80a634fd.js",
    "revision": "a3bbd98bf7d936b10a50e98959b226e6"
  },
  {
    "url": "assets/js/35.62a62e5e.js",
    "revision": "37c65f4bd1741c948f55edcf1fae1db3"
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
    "url": "assets/js/app.a9b82176.js",
    "revision": "cf0749e0a4ecb5b7e3c412c569ee3b68"
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
    "revision": "b79256217ebe7d8a75d17c209d84d079"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "a68c9d2a0b9e5297dd5d62b65ca60c51"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "6c6c0cf683e724b873eddf5d44a99374"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "d84c97c3f104043c689bbc75f1882234"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "2d883c1283bd1a0ccd7ea1ae43beefaa"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "3bcc99b09e75f21adf1d857353bd465a"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "b21d72d75c3d69edb47eb67628c50353"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "9810ff5d43beb4ec172721299b386152"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "0c3c9100a74ea2312877247d52a15148"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "9fde86058fa1b835763c8d8a4cec8278"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "6b0bc8582d161c05da8456c2271314a2"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "187298584c8e23eb2ff6ffedd48ab42a"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "3b2be391e16bfbaa315444a6aa74fc36"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "03617f9c4f14d00d7163472f7b3eacc6"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "b194f7e6fc804878ddff634ef76e2593"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "6d27c17032e263099f9c50aa78f3e660"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "e5df415844fc796073dc7cfe063acc5e"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "0e83cdb6e174ddc747e100c2a1c6acc4"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "aaf125e7e11badea15b592f1bc71348e"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "c4e77df0d4498cf65f133db2a661d4eb"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "bd3da54a97dfeb04212df9fe8fc2f4b2"
  },
  {
    "url": "blogs/code/2017/2017-04-07-ios-private-pod-specs.html",
    "revision": "d3d53ad8ad64a58b5ceaf4838e21584a"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "ef6967ceb0a0d2bc9d0f23e4c553e8c4"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "f4cf3bedbfe22d01753a481e8e5a24fb"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "1de7d6191d5aafd7ac47536deba29b6a"
  },
  {
    "url": "categories/index.html",
    "revision": "f414105bf09123a0900683ccd6e37ba5"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "a126e2acc6a4ccb1dd277170533af83a"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "598f5798dc50becfb2b4191816545772"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "089760d2304d76629391d4bdc1aecb44"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "42d0c8b5ca7e90f02d9cc5a464137edb"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "4004191f987c9aae63fec50f0473c98e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "2e3b5ccfff387bca59a610c633746b01"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "b1b69e65749db47ac4d732f50a921200"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "8884778516797eb5a4b1a626d2d45442"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "1c95fcd37edc1150068d612d2fbafc85"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "8d34b80cc3f633192702e6b8e1e6690b"
  },
  {
    "url": "notes/index.html",
    "revision": "054ea63b91173cbe669d6ee9e8a1f6fa"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "84026ac6b3890793bac270c9f7d65ef5"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "caba588806b97b8b4a8722f7699c5556"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "7ef67dd0fa48b893571574340c07f557"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "af6d09732e9a022fb956e42f93adf8f6"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "d96a463512817bcc556b66657a8858e9"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "231103722ae187f8d52c82290fb438f3"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "d6686111380fd54b842b0089e6774175"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "301b74ec134179431b480675bdfd4c42"
  },
  {
    "url": "tag/index.html",
    "revision": "747cec3e9a0007293231769d33b71133"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "8e69a99f5bc316d46fa1549ded6d73be"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "89bda09092e15c2d3aacfc2b4b4e2eab"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "e46a464bc88842877781a16d85fa9eb6"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "3c82c8f73e9bdffa26cde0086513449f"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "b67361dced8bd5cab11a5fe2aafbd865"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "fb16eab2d21f010427fc4a3b3148932c"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "701673b415985116e3aaa0fb377b0b81"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "1f2a4134ef7c4eb57c7011dff8692624"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "3221a0ed343a2c7179b7113149709d22"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "81127c201d54e15826f37650d2f64217"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "b4417fb854d23110542045cb0bdadcf0"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "83fb413607dba1c4573a0dc06c306e72"
  },
  {
    "url": "timeline/index.html",
    "revision": "b434baa12ef5a3f05d79558542e9a2df"
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
