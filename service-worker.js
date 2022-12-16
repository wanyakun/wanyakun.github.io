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
    "revision": "9512f06102bae086cdd4c38cc23d999b"
  },
  {
    "url": "assets/css/0.styles.c5a5a911.css",
    "revision": "079435b1597c7f896df997b8dbb1f18d"
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
    "url": "assets/img/2022/relation.png",
    "revision": "1b1627f3315358c74427b3ef8e2d49d1"
  },
  {
    "url": "assets/img/2022/version-relation.png",
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
    "url": "assets/img/ios/memory/memory1.png",
    "revision": "d69208a6bbd0a5f0f08a7c03d80b048e"
  },
  {
    "url": "assets/img/ios/memory/memory2.png",
    "revision": "7abda9c33335e9716d5fbb3f282dd4f1"
  },
  {
    "url": "assets/img/ios/runtime/cache-t.png",
    "revision": "c41f00dd200652728b2c877dde585ca8"
  },
  {
    "url": "assets/img/ios/runtime/class-ro-t.png",
    "revision": "355bd972d5d8aaa5b0853a8083b4dc95"
  },
  {
    "url": "assets/img/ios/runtime/class-rw-t.png",
    "revision": "b65dad03817f8623641377bf88ea5d72"
  },
  {
    "url": "assets/img/ios/runtime/isa-bitfield.png",
    "revision": "62b4d1c420550e24c080c3bd313143b4"
  },
  {
    "url": "assets/img/ios/runtime/objc-class.png",
    "revision": "e3d473a8fa49a554dceaa9cd781fa910"
  },
  {
    "url": "assets/img/ios/runtime/objc-msg-send1.png",
    "revision": "f4d170a8f9f40cdb1f09c0c4aaf41338"
  },
  {
    "url": "assets/img/notes/front/engineering.png",
    "revision": "04b1d91c8314c53e3f15d95ce754687c"
  },
  {
    "url": "assets/js/1.8ccafe63.js",
    "revision": "327465fd8726a8c98c534d9904f7547d"
  },
  {
    "url": "assets/js/10.741ede35.js",
    "revision": "0dad501e9bda85bdb007cf53580cf041"
  },
  {
    "url": "assets/js/11.a85702b3.js",
    "revision": "3d6922c7dedf3c2af6c54fe2af80e345"
  },
  {
    "url": "assets/js/12.347906ad.js",
    "revision": "e8f36c5c54eaadd393be709fa8cb6bd9"
  },
  {
    "url": "assets/js/13.7369d608.js",
    "revision": "b01af34938e2e1bff14f52d432b94b8c"
  },
  {
    "url": "assets/js/14.739ea284.js",
    "revision": "13c546017dcd1c80751aae1243a250b5"
  },
  {
    "url": "assets/js/15.c1c2d0db.js",
    "revision": "9bffdc90e50a63c9dbb42ca4fc0bcd6f"
  },
  {
    "url": "assets/js/16.7b40f1da.js",
    "revision": "131809de8f58a6f04069164e29b23fe1"
  },
  {
    "url": "assets/js/17.f165c298.js",
    "revision": "ad2e69e2996428ad2d3e4e00e0247349"
  },
  {
    "url": "assets/js/18.1698415a.js",
    "revision": "a5cc8fcc05a54af115db7e0cd8de4932"
  },
  {
    "url": "assets/js/19.0e622fd3.js",
    "revision": "84966702465b83d53652d6023a639f03"
  },
  {
    "url": "assets/js/20.7c1ae395.js",
    "revision": "bc3bb07a7fd1b25c1d614a7c32cbbdaa"
  },
  {
    "url": "assets/js/21.d7239386.js",
    "revision": "90f1bc9c5154b3504634a61e455103ae"
  },
  {
    "url": "assets/js/22.3a807ed3.js",
    "revision": "453c023121ff74a95db3046bf00cd769"
  },
  {
    "url": "assets/js/23.04a75389.js",
    "revision": "1ce1c3e7e7e15bb7778488fc6d9d4ce4"
  },
  {
    "url": "assets/js/24.eedb947a.js",
    "revision": "64db8ed4e7ad6c2bc8a962046faeac69"
  },
  {
    "url": "assets/js/25.04701ded.js",
    "revision": "a6cc54f564178ecb57374973a4a0280c"
  },
  {
    "url": "assets/js/26.c5ff1fbe.js",
    "revision": "2d58311db06e291b18c5949455dee1ab"
  },
  {
    "url": "assets/js/27.ac3e2dd9.js",
    "revision": "8d961ddf3cdd88e787c9505311e5627b"
  },
  {
    "url": "assets/js/28.c3d57aac.js",
    "revision": "b5636391f28bade515d22afbca06d3d4"
  },
  {
    "url": "assets/js/29.fdccb8c3.js",
    "revision": "f692f6bacd98376bf990c7c5272d14d6"
  },
  {
    "url": "assets/js/30.a1431aed.js",
    "revision": "ce61c36919c3a7a2444fc45d8e1db2fe"
  },
  {
    "url": "assets/js/31.29d7a773.js",
    "revision": "b877de8c4dbaf31f015ef49b06182dbd"
  },
  {
    "url": "assets/js/32.ca9b6d43.js",
    "revision": "68c6b146c96a3e6b3c9c3475e02f187f"
  },
  {
    "url": "assets/js/33.59764abc.js",
    "revision": "4aada7412e91dbcd81a4a54a9c85d97e"
  },
  {
    "url": "assets/js/34.60758a2b.js",
    "revision": "467667fa624eecfe536bad984f9c7b55"
  },
  {
    "url": "assets/js/35.ff2a1cbc.js",
    "revision": "b020b6016b523462e969d3e9555af4fb"
  },
  {
    "url": "assets/js/36.6d83a385.js",
    "revision": "f2f0da78a42d64155402fa7f51afc0ed"
  },
  {
    "url": "assets/js/37.8948a581.js",
    "revision": "23fd2f195b1afc10ecf248e415f3126c"
  },
  {
    "url": "assets/js/38.fbb78996.js",
    "revision": "054d673142d98d14689637e4327201f9"
  },
  {
    "url": "assets/js/39.96fd5430.js",
    "revision": "347ed9b01f253d34359c7049ba709ce6"
  },
  {
    "url": "assets/js/4.e1fab7d0.js",
    "revision": "808ed3ef0e7098097d71600dd3d8dccf"
  },
  {
    "url": "assets/js/40.9f47038e.js",
    "revision": "617a5e3f938e7826a285057e9fa16e98"
  },
  {
    "url": "assets/js/41.48b85a35.js",
    "revision": "14c1076909c06ed66f8ec0ead183e463"
  },
  {
    "url": "assets/js/42.011d8262.js",
    "revision": "a286e210891a94d90604f148bf5c6d54"
  },
  {
    "url": "assets/js/43.32bd54ac.js",
    "revision": "31a71fedb8bbaf73b8614a6274837243"
  },
  {
    "url": "assets/js/44.150d1a4c.js",
    "revision": "bd3fb713270a69cc71b1dbd7ba6641a0"
  },
  {
    "url": "assets/js/45.43ea3416.js",
    "revision": "f74d2103200bfad59214309557002fcd"
  },
  {
    "url": "assets/js/46.13f5032d.js",
    "revision": "12ec491bdb96680e670720e3dfd9da14"
  },
  {
    "url": "assets/js/47.d3a555ff.js",
    "revision": "18c127528bcf8743adcfe3ecf3f2c354"
  },
  {
    "url": "assets/js/48.598f0e73.js",
    "revision": "a7fa2edcb4a146f91ac86f72670eecce"
  },
  {
    "url": "assets/js/49.6c4eb5c8.js",
    "revision": "fe63dbd2f70998c7d00d02a12d111311"
  },
  {
    "url": "assets/js/5.07d4d959.js",
    "revision": "ce8a3c81078cd075db019f5fdd1addc3"
  },
  {
    "url": "assets/js/50.774dc90f.js",
    "revision": "47357c612a8e8d07d929fb17f1a139dd"
  },
  {
    "url": "assets/js/51.12f36d39.js",
    "revision": "0a116dd5be7635a10c54aa82c4d911a4"
  },
  {
    "url": "assets/js/52.0304cbcf.js",
    "revision": "07dc98eca6d57538b9e53e9db722fb75"
  },
  {
    "url": "assets/js/53.4f878984.js",
    "revision": "4ec344da5fb57c9fbe832235ed9c4c49"
  },
  {
    "url": "assets/js/54.5b220504.js",
    "revision": "fd5092dc27e1801535edb1e15e75bdc7"
  },
  {
    "url": "assets/js/55.6f221374.js",
    "revision": "e98af056a3d6cc6c4e53f30c8b154819"
  },
  {
    "url": "assets/js/56.5a65a91f.js",
    "revision": "a66945466c53af39766356163d2e7314"
  },
  {
    "url": "assets/js/57.2934d5b0.js",
    "revision": "e0469a7487d5845a96a2e2b672c76421"
  },
  {
    "url": "assets/js/58.d7173e2e.js",
    "revision": "d5850a28e9337bf78f8674db88e93eac"
  },
  {
    "url": "assets/js/59.935ce652.js",
    "revision": "1b3e6147ed3c513bf835f8d7f32630df"
  },
  {
    "url": "assets/js/6.7b9d618b.js",
    "revision": "a8e29e54baaec1bbc9ae1acf5e2ffd93"
  },
  {
    "url": "assets/js/60.f192e0ee.js",
    "revision": "c01809b45c20cd9428c3252924ae46a4"
  },
  {
    "url": "assets/js/61.1f9b0272.js",
    "revision": "fd8875c944c6e2d0bb78da5f7864e1f3"
  },
  {
    "url": "assets/js/62.be4f8ea3.js",
    "revision": "168becc8d0760ba17461755069c05158"
  },
  {
    "url": "assets/js/63.8b57b06c.js",
    "revision": "488ed33bfd970c4888291b137b33cf0f"
  },
  {
    "url": "assets/js/64.7471b37b.js",
    "revision": "b8cba3e742b3b4fc81cb496a840115e9"
  },
  {
    "url": "assets/js/65.fc664df0.js",
    "revision": "dab59a713a5cb6059e5f4001eab319c5"
  },
  {
    "url": "assets/js/66.cbb01427.js",
    "revision": "8aaff0e301a93bc76318a49aae82e0f6"
  },
  {
    "url": "assets/js/67.b133f842.js",
    "revision": "f6a0ced80968ce2d8acd31373a1b9c8e"
  },
  {
    "url": "assets/js/68.a0b01755.js",
    "revision": "0996c8eba7e53923906e5a83184c7ddc"
  },
  {
    "url": "assets/js/69.e6a62613.js",
    "revision": "d50a4c7c28d4302ed3db754491dc040a"
  },
  {
    "url": "assets/js/7.8e53943c.js",
    "revision": "44ae10287149f3fa42797e85c08cd020"
  },
  {
    "url": "assets/js/70.c9b2d6bb.js",
    "revision": "1ccb0ec759f6931b7a44b96ec8884ee6"
  },
  {
    "url": "assets/js/71.3c839dfc.js",
    "revision": "984c0d8ed871977ea88aaa7e143f6fb6"
  },
  {
    "url": "assets/js/72.dfa13ad2.js",
    "revision": "790dcbb6f75ecaa78031fc50471b87e9"
  },
  {
    "url": "assets/js/73.3afea564.js",
    "revision": "2e7168a906016c26a409784f59598a9e"
  },
  {
    "url": "assets/js/74.d6abcddd.js",
    "revision": "50ad3ebbb242f88ace3b47140e9c9aab"
  },
  {
    "url": "assets/js/75.dc692c18.js",
    "revision": "f5e7c6dc5d689a28cd584c2b2804fa41"
  },
  {
    "url": "assets/js/76.67ea2a2e.js",
    "revision": "5c9ef19b5d6a49fb408e7250894453ae"
  },
  {
    "url": "assets/js/77.23181d02.js",
    "revision": "e35e8bd17f594ae9ea7d39cfab7a931e"
  },
  {
    "url": "assets/js/78.b5050409.js",
    "revision": "7ddd6f82ffa76c04b150a9678356b0e4"
  },
  {
    "url": "assets/js/79.d857c8a4.js",
    "revision": "84e475c363782d7aed22219c9bd26633"
  },
  {
    "url": "assets/js/8.6d44c641.js",
    "revision": "e4b068d12a8f73d79dd2d54d495707cb"
  },
  {
    "url": "assets/js/80.3e1cfc66.js",
    "revision": "9aa8bbc7e83bcc27a3f47d017c408e37"
  },
  {
    "url": "assets/js/81.9667d02a.js",
    "revision": "f6e16dd076293391820fe89f1ef3836a"
  },
  {
    "url": "assets/js/82.9e83e141.js",
    "revision": "43ab2e0a992fa5c13f6870b694e770fe"
  },
  {
    "url": "assets/js/83.0ed105d6.js",
    "revision": "46b6343d84815cb05c760c7d43878005"
  },
  {
    "url": "assets/js/84.12bddbac.js",
    "revision": "e90f7bbf19f7b6fc29fcc613f8d42025"
  },
  {
    "url": "assets/js/85.c1461dea.js",
    "revision": "d2358863dbabcdbefe0ed26ea9b1afcd"
  },
  {
    "url": "assets/js/9.a821f59e.js",
    "revision": "582868647c9335097eb13c005d162115"
  },
  {
    "url": "assets/js/app.e8e2d1df.js",
    "revision": "97d77e8ce66ab4c5a3325485b1cd23be"
  },
  {
    "url": "assets/js/vendors~flowchart.44dc48c7.js",
    "revision": "5547a9d1bd6916f43d475a59bb92b332"
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
    "revision": "d0d53d3f2b5d1e1dd8cd99cf829edf29"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "546e474f00f854517fb75c6b0e6357bf"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "b8dd2948c3e1dd551d7cfeeb68150c15"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "4d9edaf4e580f103a29752502c54da26"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "8b490757e7a5ee0de799d84903f00b64"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "701bf3d597c01270f80c0bff427130bf"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "3d936bea9600fea56a61212bf7cb59a1"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "19b5503da6c8824db023ff9d41454ab8"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "7be284f36a27e08d957ed361d72cc545"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "b785eb79378526118594b2deaf570b76"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "4e85f0414a4131003c409001b1ba618f"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "cb46c598fd532d6c9687af4f6411fc72"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "80bccf34706e1cd5db7c15428a27c001"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "341c3f413b3f51a7bdb9e387dfc0b668"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "476d5b0915c96835447199634f4d79d2"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "adfe15df1ef13ca353f1f9ad70acffa0"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "049fe96d1c2c38efb497c211756cbc2f"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "ee40bc6aefbe10b32e3cdc5f4c185dd1"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "6a2e09de4ae90b558d1ffdf8aea9f72a"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "f2c4aae711678fc24260df8b6fad21dc"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "769bbb723854f11405c5a5f71c97481c"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "689d37549e98d6f00e10c121ec3134c5"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "e963f787048a6896f4592d48ada63131"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "39728cb5abbbb03ec96aa8be4a27bd1e"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "925b8c59ab293903517265a0886b0018"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "7fe6b30d7c100e45261c5b1e9ae13070"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "e9f31d0b5d1fd9c0270242b65a91a8e6"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "90da5b75f939a57fe4d6a3a6cb413941"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "3338523bb2db519ace0eebed1d87dcad"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "6db6445ce0b94e683924df889a65b1b0"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "a5ce217f3460b50bcc6f954b74419297"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "4067d5d786134386176c5e57bfa8139c"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "9a1bb6a2cecad3c681e4b8569f2f4c58"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "c78e00c550b15ccfff38235aee80f602"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "b4a87cbf43a436d1fa6adc3e55f9d777"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "e1538daa295ac1f11aca3540615c9fad"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "3e47a56a24d4a902dd611abf5496623a"
  },
  {
    "url": "categories/index.html",
    "revision": "deb5cc84ea49d59d136913ef3bd0870d"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "5b7a965b5f8bf661c13d9517ba5247e0"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "9f5895e304d692932cec3cbfb74e83c4"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "3ec7ca9b37e3ae4c9bd487a0993370ae"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "f412edf81cbcefff19c08d9928a67df9"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "3bcf0662a28288520f20c564e9a6f99a"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "3b74c15dd3b27a361b05ff24f7d77635"
  },
  {
    "url": "ios/basic/index.html",
    "revision": "340bca31555fc0b278d81cbf9bbdf5d0"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "d1486bc8cd814330c5bef2bb23b4e782"
  },
  {
    "url": "ios/basic/multithread/index.html",
    "revision": "ce5c017c03f395b8930efbc92b3e3037"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "74ece49fe700f30f1ced6b9c67c3ed71"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "938934de956c68279512aa0b3170a369"
  },
  {
    "url": "ios/basic/oc/index.html",
    "revision": "84d93c71983c5b9569331c4787fb176a"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "83eacfc1377e2b451164dce46ec456d7"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "374ce1f97eebb44dc8b0d95b7af93654"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "997ffd9372b63dfa0a9e1b16ef1e7d85"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "2f3de608a6f4b986d9f348b13b3125fa"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "fc6a2b2ae0c789de04608256aac061ad"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "e28345ed538f3e0a2a1d82777ab7cf1d"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "2469b99ce7fe0e0edfc8f1bf5af8efdc"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "f8d96b6492dec369f741fe0e084411e7"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "6783724050ca8a14b20b98e21b74bbcd"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "e6097d5eb9575df5adb6230b6ababb21"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "696e5c34c0d822839b91a5dc17ef80b3"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "a6e7329a7e87f470456ac77d73c54345"
  },
  {
    "url": "ios/basic/ui/index.html",
    "revision": "d62787cf4d1424cf4bb0a7a5104aa63a"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "48ed65d2ed53412949c129e6a5334278"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "3bef200182705d9be7e15d9b50aad87d"
  },
  {
    "url": "ios/index.html",
    "revision": "789423958fd84100275ea8ab18bb9736"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "99180bbe7e1896028e50d144566821bd"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "64f8836781f322f279882bb3421b84c3"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "0eaf5fd77a666737f8ae1d11356478b9"
  },
  {
    "url": "notes/index.html",
    "revision": "cc793eef261a319e8937f36d0e1e353c"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "575381f5f3ef7073936fbe217e94afae"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "6cf1d42318ca81a8a0e26bb17cf52bb4"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "cce568f2290d4344eeb33831e49093db"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "82ae786f2d2b4a4a72f85ffa6f48e17a"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "315b63f713ab3b7f4d708280fff2036a"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "ad925d0af31aab0fbb44da87bcefbbbe"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "93bb4d67924accf3403ff9095ee433e2"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "92605a4fdeb93c5d86289322ae7bfd83"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "491e27bd8668292b73d486edafaf91ff"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "06606455d54bc37dd4192233f6230fbf"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "ded4ffe9ca9ba535f18c5bc76d635e0c"
  },
  {
    "url": "tag/index.html",
    "revision": "b1316b085fe35bd606b9c5f6e8526ff5"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "b9a4feadaaa66af40fca9206a8e3cfcf"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "bdde5d9270a2f53c0cc86c0d4186b5e0"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "d6caa86d5cfc24ba01f7e76d40e9d373"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "4f97ab491bf0d8c05e9c9983fb429935"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "0e96ad171450b78b33619eb9985d4ba2"
  },
  {
    "url": "timeline/index.html",
    "revision": "7bc070b2c0eb176bb52bcf0d281d3636"
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
