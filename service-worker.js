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
    "revision": "3f3f67b41d8017c0c6ab105928d30564"
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
    "url": "assets/img/ios/multithread/trap.png",
    "revision": "9ab7c40616549a74394b7520390fa5ad"
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
    "url": "assets/img/notes/front/engineering.png",
    "revision": "04b1d91c8314c53e3f15d95ce754687c"
  },
  {
    "url": "assets/js/1.8ccafe63.js",
    "revision": "327465fd8726a8c98c534d9904f7547d"
  },
  {
    "url": "assets/js/10.1060c369.js",
    "revision": "4e464f9d380ff0a9512881eb7a38129c"
  },
  {
    "url": "assets/js/11.a85702b3.js",
    "revision": "3d6922c7dedf3c2af6c54fe2af80e345"
  },
  {
    "url": "assets/js/12.5bae740d.js",
    "revision": "044c698d6938c073596234d72f16901b"
  },
  {
    "url": "assets/js/13.89c95270.js",
    "revision": "fc268a33d9ecddce0145e17ead3fd7e6"
  },
  {
    "url": "assets/js/14.0b94275b.js",
    "revision": "4650c7c63241b129896edd37b1ecc785"
  },
  {
    "url": "assets/js/15.4b1f96b8.js",
    "revision": "a8a48b31d8768aa6ff19f33e40104997"
  },
  {
    "url": "assets/js/16.5b5e8ac7.js",
    "revision": "33beef77cd3671ae451fbf0e3b246f34"
  },
  {
    "url": "assets/js/17.55fe65d3.js",
    "revision": "cc1aa733631cc28c8d995fec94936cd5"
  },
  {
    "url": "assets/js/18.2f588a79.js",
    "revision": "dbc8da6bbae3c13819123b4aaf8fc984"
  },
  {
    "url": "assets/js/19.7e6dbfa8.js",
    "revision": "faa2d5441a43b0d298759f5753e57d80"
  },
  {
    "url": "assets/js/20.05f2c1da.js",
    "revision": "e79a3d30192cb009a71e670e97eae542"
  },
  {
    "url": "assets/js/21.590889fe.js",
    "revision": "d7d1920f390e45b6e04df3de8bc07653"
  },
  {
    "url": "assets/js/22.eb6ab0c4.js",
    "revision": "abcb77cdc6c8b26a3476c739268e9f22"
  },
  {
    "url": "assets/js/23.f0902f1f.js",
    "revision": "88f1c6829cb95620096df2a54b1c18dc"
  },
  {
    "url": "assets/js/24.19212234.js",
    "revision": "f7c65c87bc0b9d461b19506126328c6d"
  },
  {
    "url": "assets/js/25.80579834.js",
    "revision": "85f266f63b11d15aea7a473e0795cdca"
  },
  {
    "url": "assets/js/26.0be0f54b.js",
    "revision": "c26f2678acb81dd9b7e9f29eea782339"
  },
  {
    "url": "assets/js/27.b5ed3776.js",
    "revision": "eb5fdb3d590516b79734443b0d3d4d1d"
  },
  {
    "url": "assets/js/28.0facce7b.js",
    "revision": "4e634db908e4de39f4fe6a3fdc8f4860"
  },
  {
    "url": "assets/js/29.fdccb8c3.js",
    "revision": "f692f6bacd98376bf990c7c5272d14d6"
  },
  {
    "url": "assets/js/30.04d99795.js",
    "revision": "38de9d078934a5e8a993ac763685dccb"
  },
  {
    "url": "assets/js/31.299d67ce.js",
    "revision": "ee066b09e2a7b0e797e60cfbca9bd326"
  },
  {
    "url": "assets/js/32.509b9cb9.js",
    "revision": "4de8295ee840cbb9a5483aa9ec91eac3"
  },
  {
    "url": "assets/js/33.6eb56990.js",
    "revision": "ae66812c7378c48e67b0313418a62f8e"
  },
  {
    "url": "assets/js/34.a597eedf.js",
    "revision": "9b0b273dc72c7a0b1ad7eb3ce290a56e"
  },
  {
    "url": "assets/js/35.b897578a.js",
    "revision": "0753264853d312eb3d9cd31c3131c4c1"
  },
  {
    "url": "assets/js/36.1365ebd6.js",
    "revision": "4007a2e5de4f03860eebbc2395d712e5"
  },
  {
    "url": "assets/js/37.885a2cb1.js",
    "revision": "c25a192cd710373a46aec1adbe32aa8f"
  },
  {
    "url": "assets/js/38.4e046b8c.js",
    "revision": "50e12057f45e311fc4fce17dc88f2d14"
  },
  {
    "url": "assets/js/39.c42d22c3.js",
    "revision": "a023d34a932868b257b407794f2922c0"
  },
  {
    "url": "assets/js/4.e1fab7d0.js",
    "revision": "808ed3ef0e7098097d71600dd3d8dccf"
  },
  {
    "url": "assets/js/40.58f758d5.js",
    "revision": "d18c2c942ca6c04d5fb601090c33a5b2"
  },
  {
    "url": "assets/js/41.0641b988.js",
    "revision": "088cd5cd4333ce28bf7c5814d9de8d95"
  },
  {
    "url": "assets/js/42.5c996885.js",
    "revision": "3715a71c68dd1ba92a5c6a72d1220ef7"
  },
  {
    "url": "assets/js/43.a18a33a8.js",
    "revision": "020df583b889733a4470dbcc7cb1f0d9"
  },
  {
    "url": "assets/js/44.228dc4e1.js",
    "revision": "bcb12b77e2e1a043907d714504c77546"
  },
  {
    "url": "assets/js/45.53ac656b.js",
    "revision": "a7630a98ef5cfd54377fab73e97f431e"
  },
  {
    "url": "assets/js/46.13f5032d.js",
    "revision": "12ec491bdb96680e670720e3dfd9da14"
  },
  {
    "url": "assets/js/47.cc8a380d.js",
    "revision": "0e7639a2cbc9cd871669b16ed799fb2a"
  },
  {
    "url": "assets/js/48.598f0e73.js",
    "revision": "a7fa2edcb4a146f91ac86f72670eecce"
  },
  {
    "url": "assets/js/49.ee4f9e41.js",
    "revision": "7e2ad9a007ba96462a3733ef31b50d04"
  },
  {
    "url": "assets/js/5.07d4d959.js",
    "revision": "ce8a3c81078cd075db019f5fdd1addc3"
  },
  {
    "url": "assets/js/50.4b006b68.js",
    "revision": "7bef4917f0139f2614fa8e6472b80b5a"
  },
  {
    "url": "assets/js/51.70c338b8.js",
    "revision": "13cb035ee2e39ec6e75cd751307e2d5f"
  },
  {
    "url": "assets/js/52.4ca0e914.js",
    "revision": "3830e25a290296cf5f7e91b2e22797f1"
  },
  {
    "url": "assets/js/53.87bfd58b.js",
    "revision": "56bed0c77d4de1d59d8c5660c0e13cec"
  },
  {
    "url": "assets/js/54.db7b5ecc.js",
    "revision": "6afd5e2b72ace0a471a35bbbe52347d1"
  },
  {
    "url": "assets/js/55.bac3ed6b.js",
    "revision": "5d0fab6b938008df756ec8ec03657078"
  },
  {
    "url": "assets/js/56.a5ca384c.js",
    "revision": "09e01b2cb8056e6f16ebbb8313c8de93"
  },
  {
    "url": "assets/js/57.10c3b4e5.js",
    "revision": "2c03e91abf407efd7725e092d1f04793"
  },
  {
    "url": "assets/js/58.dd86d20e.js",
    "revision": "ba3e64a987a1ffc35b3a2aad05a3224a"
  },
  {
    "url": "assets/js/59.1916ffa9.js",
    "revision": "1c672d9861b6315918b33549d383e22c"
  },
  {
    "url": "assets/js/6.7b9d618b.js",
    "revision": "a8e29e54baaec1bbc9ae1acf5e2ffd93"
  },
  {
    "url": "assets/js/60.ec63d594.js",
    "revision": "be6f148be45c74fffe40900ea9a4d36e"
  },
  {
    "url": "assets/js/61.8e94e56e.js",
    "revision": "764032eb080978c565ef35e07276457b"
  },
  {
    "url": "assets/js/62.0f6f0238.js",
    "revision": "5ca08c70dbac2f4b1e0e1066265c7a84"
  },
  {
    "url": "assets/js/63.8b57b06c.js",
    "revision": "488ed33bfd970c4888291b137b33cf0f"
  },
  {
    "url": "assets/js/64.667f2312.js",
    "revision": "592adb3377736030ca614d16c29d6175"
  },
  {
    "url": "assets/js/65.a67f0bfa.js",
    "revision": "362affccf44a02086ec89b061d3ffdbf"
  },
  {
    "url": "assets/js/66.fc6b0aa9.js",
    "revision": "07e9fa6032cbdd48bae87dd24dc94020"
  },
  {
    "url": "assets/js/67.08397c53.js",
    "revision": "71c10cb54a1abb0ebdc84d0f67b07d84"
  },
  {
    "url": "assets/js/68.a100b595.js",
    "revision": "e3ba5fd3f241ebdf6eb2b090671f753a"
  },
  {
    "url": "assets/js/69.d95647a7.js",
    "revision": "3ed4d7911a221026e214593a220adf38"
  },
  {
    "url": "assets/js/7.8e53943c.js",
    "revision": "44ae10287149f3fa42797e85c08cd020"
  },
  {
    "url": "assets/js/70.32804b25.js",
    "revision": "bc754b15ae446142f76eb8227742c5ae"
  },
  {
    "url": "assets/js/71.6d3da4a0.js",
    "revision": "0a37113a573a06a9e0eac0b185758fc6"
  },
  {
    "url": "assets/js/72.0b586720.js",
    "revision": "07fbe06db8da5dd830947e8c9b95cf30"
  },
  {
    "url": "assets/js/73.d426772c.js",
    "revision": "abf6303ff88a7084c7f9a3f2544a0810"
  },
  {
    "url": "assets/js/74.91d32f15.js",
    "revision": "5a899e61369fea3ee1b6cbb99a93e20b"
  },
  {
    "url": "assets/js/75.469824e7.js",
    "revision": "8bb2b6121356351c3b8794949f1fc461"
  },
  {
    "url": "assets/js/76.42e7c5e9.js",
    "revision": "50353c2768ba93d414150a9b5d881aee"
  },
  {
    "url": "assets/js/77.3e0a725a.js",
    "revision": "3268364d58d633ee1bad2a4c4d4bd253"
  },
  {
    "url": "assets/js/78.ee8a3239.js",
    "revision": "33f48bfd71f5383154037ea08a04f2dc"
  },
  {
    "url": "assets/js/79.2b53731e.js",
    "revision": "073bd9c145f8fb0e74bc42d8b739737c"
  },
  {
    "url": "assets/js/8.6d44c641.js",
    "revision": "e4b068d12a8f73d79dd2d54d495707cb"
  },
  {
    "url": "assets/js/80.da5003a7.js",
    "revision": "ae7b692142a588cfc04cd705f2baaadd"
  },
  {
    "url": "assets/js/81.a79238bd.js",
    "revision": "0a746ea795aa61ed75e173dd26d09e2d"
  },
  {
    "url": "assets/js/82.29af94d8.js",
    "revision": "be73b3ce8dce9afc0960a551e1aaee57"
  },
  {
    "url": "assets/js/83.82f7a336.js",
    "revision": "8074b974b3ad3f28e7d239a6f701e742"
  },
  {
    "url": "assets/js/84.f487e4db.js",
    "revision": "1b7202c337138ef27f95c0ea552a6eda"
  },
  {
    "url": "assets/js/9.a821f59e.js",
    "revision": "582868647c9335097eb13c005d162115"
  },
  {
    "url": "assets/js/app.1fc71b94.js",
    "revision": "fe014f81ea03d4bba6198c767db6f767"
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
    "revision": "237347e35ef718d1024dc8f910179470"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "4d649daf5aed8bd60d1d62ee72b4df71"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "0579258e66e9863cd911dfd474a54bef"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "20e2ef74b267a1f5d490862fcc374ce0"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "8c00d985daaf1512a80c54165e8d1549"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "f6054e1d66ae249d545ed4f9382c33cc"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "bd8c363c9e9a72efcc81dfd066867193"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "be8b3f79ca537254389259567f48c9a5"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "a4aa4f746deab2530be1fdd83bf64772"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "ff1843913f181fda648f7b0314b73fed"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "5abad9d3131313bc8585b8316ada446d"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "66936a45170db804859dbf722820d756"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "b5c42157f3b1f6134ce93448adf8bc1c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "cef57ab2959614edd7c8f6ecc870f7e6"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "2bfbf1c4942307ff4d35827c27534a45"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "23597e6a103de70e9f2a7a01885becd4"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "8e5dc00f68e70c7173d80556ea235c33"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "753c4529e320f4e9c09397da2b9ce3cc"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "c3ec127045ffcf5c33c8e7d60bdb8700"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "f2127581f71a0ae66386f6cce58bc6ef"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "046d55999cd93d9a6c27a0c204b9a91b"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "247dbce7e1d17ef5f0911ea71c7d5066"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "1ad5728d1ab0edd98b86b5d8cd6e3d46"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "706963dd0a9db774fc1c4e4764c003a2"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "26fa98e02c4148a5e4ddd47da5c641f8"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "9daa3e4cc02529d32d0055b9909220eb"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "50d50c33ab7258a26deea9500826988f"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "8a198763fb5d9c2b2f23f1a3643311d3"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "caedd2fac7858a51373d9b5328d32f08"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "af7c37c6f248928694b48fe3bcc81f51"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "7ccadb1ff1e862215eeb5be42a9395d3"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "f0e5b22714af7bfa4e6cfb80280c3235"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "f4e9c7480f33730a7acd634ac01e87b1"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "435e074dd14eed3e4e974c6db0243328"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "692efe7a27ec2d422c4c5c25159a1f39"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "e1e74c25916143db9030ebe0fc02525b"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "527d871e050779b68238dd096895625e"
  },
  {
    "url": "categories/index.html",
    "revision": "b45955bf80d4c326a418b1a2b135bd8d"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "a61cb74e4df9f5ce2d691806fd0ad283"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "907d98d3d959d5be36bbdaa8775a6f38"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "f3950278c62efaa766cee803e0342740"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "6b1a60ad3a544e5be8adb3f0c534c5a3"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "f9da38c7665152d08a2ef3a6aa8652f8"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "fdafee579df05099d3d033efd74e5e0e"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "2e21b76667e217db007a0b4d664c6b2a"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "edb6f99c98a3f314c20dcd0480bc6616"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "d46200e3b5ea5a2bf3eac417576e1cd8"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "a51fdd0091cbef6a08aaa2e31d774ed6"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "b665f7235db2ec103e101738097d93bd"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "4a355d1a8796c23a726051216a0ae00d"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "1e9891bf3776859dbef9b4902a678dec"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "6b7c72744bfcaf3c908ff2e458603d13"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "b7a4cf2213b948da598f83bb62b123db"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "f473bc1741e8baf912bd7be097eb5b71"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "4b4e7cdc9ed585b0a0fc5caf044038a2"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "478d23b9b157859d01c69452712623f4"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "b164c06e89a05a96c67453c4946f42d4"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "3fa80a700a4ffacb75b7a30ade9eb2df"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "244085df928a8cd8e29d198c3a8c132e"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "69d5cdff83d5d86135731258d7aeffc0"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "6a42a32c626eff08b17c002ed5696e2f"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "32b3cbe0cd7d9ff3feeb43be450b119e"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "9452df74a53b2ba20b30ae6b71e580dc"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "f02459a20ddc388857a619a8d05b1484"
  },
  {
    "url": "ios/index.html",
    "revision": "cb0d06266f28fecbfafea098331198ef"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "e8579ae77496b274d8ff15c2861d3114"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "405bfaf216ffba8af40d41bf39c6c79b"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "3f7015d2985a41d7eb8a661ed68efe40"
  },
  {
    "url": "notes/index.html",
    "revision": "cc8514cf5ec2f1f92cc98d2a6baa8443"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "6cca568c0d0524313539343672b07c33"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "f38f719b480641f2dba1cbc1ed37b9f8"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "756fceac7007c610adda274b4fe0f24d"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "9bcbd4ed6493d2f559c09893034c252b"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "70e5d866de6bd4cb835ec8e3cbe86227"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "67324248938eaa5dd82b33a729232fff"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "6c723039d49fc20d69d377d62782e3ac"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "9da3a64643e308688f88ef53545bb5b9"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "d1cc69f6aa26c35287382af549b7a51f"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "c35133a4eca5a053c515019aeb451e63"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "692296585ba1d2efbe1bdde0d50ba111"
  },
  {
    "url": "tag/index.html",
    "revision": "aa34aa884261ca49c64efc8b92bb82c4"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "217c13788b326a479fd600e93751e9a6"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "23040da2fca0671ae5a805df972f9634"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "4e0a2b08e83aac64802a19e27de65c19"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "793060c95416e81954a9898dca8851c3"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "62dabf976e6a005a5895393dde57b441"
  },
  {
    "url": "timeline/index.html",
    "revision": "9aefbd4786031dc56af58bf66b9997ab"
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
