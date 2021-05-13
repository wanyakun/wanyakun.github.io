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
    "revision": "db91188d59bf463cdaf5196df85c5021"
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
    "url": "assets/js/11.31b2a09b.js",
    "revision": "4e76ea8e1678f6f125840ae6afd990bb"
  },
  {
    "url": "assets/js/12.6b4a751c.js",
    "revision": "02117a5788e6de01432b8a40b832cd66"
  },
  {
    "url": "assets/js/13.88e6f212.js",
    "revision": "7cd10342a35baf5c95d3f149543d4853"
  },
  {
    "url": "assets/js/14.657d5af1.js",
    "revision": "7c57e99872d3edf62b02a689978069a4"
  },
  {
    "url": "assets/js/15.6e872dbe.js",
    "revision": "9eabefb53dc8649ea87bc589a85eb7b0"
  },
  {
    "url": "assets/js/16.2b7ee73f.js",
    "revision": "83a00f2b25a2b868a2eefb04c6a02848"
  },
  {
    "url": "assets/js/17.41662c24.js",
    "revision": "82cd837755d324c34e57b7e178c16d0f"
  },
  {
    "url": "assets/js/18.fea80f22.js",
    "revision": "8de73951adac00357c8277b8dce4bacf"
  },
  {
    "url": "assets/js/19.6695e144.js",
    "revision": "d7b3e97bc57bd504c42af3bc05b0253a"
  },
  {
    "url": "assets/js/20.513c723b.js",
    "revision": "36e2e94ba5e10bf0018a8a0e43822ae7"
  },
  {
    "url": "assets/js/21.82d6e10f.js",
    "revision": "0c1b18a5e6bcf1f3a454c02bc40670f0"
  },
  {
    "url": "assets/js/22.0fd3c360.js",
    "revision": "31e6318558659adb66ae7d89cca93afe"
  },
  {
    "url": "assets/js/23.7ad3e540.js",
    "revision": "eaf7dd312fbf5d312260fe0a2b728b6f"
  },
  {
    "url": "assets/js/24.730555ae.js",
    "revision": "093fe783f940fae1cfc7a3c6e713a97c"
  },
  {
    "url": "assets/js/25.f742d25e.js",
    "revision": "c7eaa26b8827a8b1f0ecae8817266ca1"
  },
  {
    "url": "assets/js/26.8be969a4.js",
    "revision": "7dc89c78a7870017b3b726c143aea6c7"
  },
  {
    "url": "assets/js/27.818b814b.js",
    "revision": "dcf78aa71de8f0b9f061fd79623ba194"
  },
  {
    "url": "assets/js/28.b45e5f56.js",
    "revision": "03bc2a94060dcf11920d55239ca212cf"
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
    "url": "assets/js/30.67054500.js",
    "revision": "e8995ead59c6663e44e82be9058f4629"
  },
  {
    "url": "assets/js/31.a96cd289.js",
    "revision": "41d074980406cc09f967e938f86e61b1"
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
    "url": "assets/js/34.69447592.js",
    "revision": "d959638fd6318562a26ae31a9f1dd342"
  },
  {
    "url": "assets/js/35.222336d0.js",
    "revision": "6aa0b183d93486b0ad531c944ec49e20"
  },
  {
    "url": "assets/js/36.169134ec.js",
    "revision": "312e0cb589df318646b8115911d93edd"
  },
  {
    "url": "assets/js/37.54704829.js",
    "revision": "5b21ed1d6b3b7ce90d1586725fd33c1f"
  },
  {
    "url": "assets/js/38.b1a66cce.js",
    "revision": "2f43368fee992b4f0ce057762d35dd5d"
  },
  {
    "url": "assets/js/39.16287392.js",
    "revision": "8c32b2cc5424acee3c23c730978b0b4b"
  },
  {
    "url": "assets/js/4.14a660d9.js",
    "revision": "926e2dee1b9f3db33af628e5b6afa48e"
  },
  {
    "url": "assets/js/40.a059d4a5.js",
    "revision": "af7f6d69bb030fc9e0755059622cb9ed"
  },
  {
    "url": "assets/js/41.f96d4f52.js",
    "revision": "88c2f709d1f111ca9965df0ec9f05aec"
  },
  {
    "url": "assets/js/42.d615857f.js",
    "revision": "8e7f1e601f1d078600e590fe6d13a245"
  },
  {
    "url": "assets/js/43.4b2417fb.js",
    "revision": "2c0671dd2655604416c0da96439267dc"
  },
  {
    "url": "assets/js/44.ee194809.js",
    "revision": "82daade19b34a12bbf772ff17e297bcc"
  },
  {
    "url": "assets/js/45.04eb312c.js",
    "revision": "6c5eeea852011472af3fb749820ec0d1"
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
    "url": "assets/js/9.0fc1a5ac.js",
    "revision": "ad145bd20a3d315285d1bd07e82f5056"
  },
  {
    "url": "assets/js/app.d66916e6.js",
    "revision": "74b786de8621a5c8295ab3b2e29c9d31"
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
    "revision": "c5b298c858642d092c8c17de61486f87"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "38d42de5af0f8cb12af02acdf115e46c"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "1979e40c3a0183993db9e6703b4f7ca1"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "7e69653e8e550cc89f7339a4c23a0413"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "d5d8fdb2ca32617500a9c3f887ef2e7f"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "fba09e7af0ac4af43b4cdc8d270fabd8"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "4b1639ac44541e6a87f921ebab6f94f8"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "7e26df248d53f229541aebbbc4fc56da"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "e067b5f34cc65b84f13dc25598db5fe0"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "9bc26db8a90d3beaa7da0ec060ec900a"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "7ce1bab21e22818abb1d8587e279f785"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "400372261957dd13478d3da480c662cd"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "bcd0b87ccddf5147921ace468292df35"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "663998d57a64bce6fdcd657038cca61e"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "7b487da6fb00e84e0e459ebc7f7c868a"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "f6d571ad54e9f65f04974f60e7e47704"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "239cf71eda4dfeb90ee519c86d285574"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "04393158975c2d242942be45a8ca393f"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "c6d11806136f138edca5d92647508811"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "91492b83a9b4def2ab676278391090a3"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2a72a4efb8e27771655c0bfb229bb105"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "483835e9275f26c199acd052b2df82c4"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "20ebd3e82111a1d7d00d9ff7d14529ef"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "639e0d37df631ec3581fe0ba57547c6a"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "16aa9435b4540802194877a5010ed32c"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "446046df15389ca957bdfeaff17f0347"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "a505994c9d5e62f965f8f112858c026a"
  },
  {
    "url": "categories/index.html",
    "revision": "bd2e3f1fbff5fd5531d9561c7c7ad0eb"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "c6fc5434658ed4210de07dc334be6c1b"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "3fceb6bc9d7471b84ef01ba382072458"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "ede06dcd2c6a23db438dfd19758d252c"
  },
  {
    "url": "categories/年终总结/index.html",
    "revision": "82d95c62c4a91835e17fbe02ba608745"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "adfe0d607ded33fa0a5dadaee61cec96"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "2d3074a6424e411b4655e53ba10c6fdd"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/fe/test1.html",
    "revision": "58767994be5e4f1ea95d1cdc501811e3"
  },
  {
    "url": "notes/fe/test2.html",
    "revision": "11195212d9e957d74b2e0b1beeec7506"
  },
  {
    "url": "notes/fin/hai-gui-jiao-yi-fa-ze.html",
    "revision": "59aa79b51024bb91cb3791ed35d09e8f"
  },
  {
    "url": "notes/fin/test1.html",
    "revision": "d7275c401fdc55d9ebe36b5bcbb93d32"
  },
  {
    "url": "notes/index.html",
    "revision": "3b2949bc46705f1d02b710ec0a9a8df0"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "7169551731a5219a26001477ac2dbb31"
  },
  {
    "url": "tag/Block/index.html",
    "revision": "3e19a281408670a542437fc4bb846c16"
  },
  {
    "url": "tag/CocoaPods/index.html",
    "revision": "a2b5f17f8aba9f270b0449df46668f60"
  },
  {
    "url": "tag/concurrent/index.html",
    "revision": "f49921a2f46e07b41c880471e7899d68"
  },
  {
    "url": "tag/CoreData/index.html",
    "revision": "8f7b9bf067ea0ce7cad39e0895346b73"
  },
  {
    "url": "tag/Crash/index.html",
    "revision": "c4fa7a2b5b8fc85bcd1313598ac7e87e"
  },
  {
    "url": "tag/EventHandling/index.html",
    "revision": "48e306288e498d79dcba0eecc188c676"
  },
  {
    "url": "tag/GCD/index.html",
    "revision": "a2cc6ec3a1a63d316314764e573f1354"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "1c6ccda11717cf9f98201f55ccf05f2d"
  },
  {
    "url": "tag/index.html",
    "revision": "fe814900dcd2f70aec04a491d0cf1756"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "988cc97d765abe0f4ab5324b54b4eac5"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "d9ef0316516e84e6e33f39f9ac2831f6"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "58ac8d713bc1af886e481c24bce11908"
  },
  {
    "url": "tag/KVC/index.html",
    "revision": "15254b89879dacf337194feef42924a2"
  },
  {
    "url": "tag/KVO/index.html",
    "revision": "0d6c7f459bc8b93216c610bba3c81a36"
  },
  {
    "url": "tag/notification/index.html",
    "revision": "7a8ec1c01b2ae0fc117865e2155290f9"
  },
  {
    "url": "tag/Notification/index.html",
    "revision": "53101fc957c5da37c172aaf568b727ee"
  },
  {
    "url": "tag/Observer/index.html",
    "revision": "81be4b68ab67612eb4c393ba03337e87"
  },
  {
    "url": "tag/RAC/index.html",
    "revision": "f05a78982597d47f381c9c3bc13584a5"
  },
  {
    "url": "tag/ReactiveCocoa/index.html",
    "revision": "58577959a0662dc833906225cd53c7ef"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "bc439d29d0508d9a6718003457d5edef"
  },
  {
    "url": "tag/年终总结/index.html",
    "revision": "7d48374818ac243f47e617f2428f688e"
  },
  {
    "url": "timeline/index.html",
    "revision": "54ab8d44a6f3ffb31741c9ef7ddd23a9"
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
