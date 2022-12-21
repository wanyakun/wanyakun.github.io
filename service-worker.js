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
    "revision": "4d70462058393ae2914b74f125db58ca"
  },
  {
    "url": "assets/css/0.styles.91675566.css",
    "revision": "1ab465a8de527ed85655ec605da93f15"
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
    "url": "assets/img/front/explorer/http-request.png",
    "revision": "e1203d0faa8b541d7e1ef1084efc2d47"
  },
  {
    "url": "assets/img/front/explorer/http-response.png",
    "revision": "623671f5fbea8d4b9c0110ba77b3eb42"
  },
  {
    "url": "assets/img/front/explorer/render.png",
    "revision": "e17c9ae0aeda1cf0c703f3bec011df7d"
  },
  {
    "url": "assets/img/front/explorer/url-resolve.png",
    "revision": "1aa6edf791ecef8c29f9962176665eca"
  },
  {
    "url": "assets/img/front/network/cdn.png",
    "revision": "99512c819e0c9d5412edc73e9d4452e1"
  },
  {
    "url": "assets/img/front/network/dns-lookup.png",
    "revision": "43e8b400fc66373927b88dbb55434d64"
  },
  {
    "url": "assets/img/front/network/dns-lookup1.png",
    "revision": "3e0452b40ab9e6e627f48a18033135c9"
  },
  {
    "url": "assets/img/front/network/dns-lookup2.png",
    "revision": "5b64a006105197950f86cd5d26e5f99e"
  },
  {
    "url": "assets/img/front/network/domain.png",
    "revision": "170687bcdba29caee33fe013ebf88e4b"
  },
  {
    "url": "assets/img/front/network/http-push.png",
    "revision": "e27a6ac130d3940eacb2b3ebaf4f7b51"
  },
  {
    "url": "assets/img/front/network/http1.0.png",
    "revision": "ae81f5c013dc577aa74678ad852e03c8"
  },
  {
    "url": "assets/img/front/network/http1.1.png",
    "revision": "7f1c0cf9ab18679e10fff9e3e5449986"
  },
  {
    "url": "assets/img/front/network/http2-header.png",
    "revision": "f47774bf88d7cac51548407b397a3904"
  },
  {
    "url": "assets/img/front/network/http2.png",
    "revision": "4fab1ea8990a3649fdb1ec7a9bd88d2f"
  },
  {
    "url": "assets/img/front/network/https.png",
    "revision": "46a5853b3cc8279720b74ec43d0f44b0"
  },
  {
    "url": "assets/img/front/network/osi.png",
    "revision": "f59abdf213fe9b1dfb79cf3a86a4f566"
  },
  {
    "url": "assets/img/front/network/tcp-ip.png",
    "revision": "34e65a7225cacd2df7b451d9fae4c762"
  },
  {
    "url": "assets/img/front/network/tcp.png",
    "revision": "c11ef50b129fd43b2630d2efcdcadd76"
  },
  {
    "url": "assets/img/front/network/udp.png",
    "revision": "24fbebcd5a19c0ed1e95363d5309378e"
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
    "url": "assets/js/1.c288e991.js",
    "revision": "e5c9b7a1c1c44a85f534309da9e92062"
  },
  {
    "url": "assets/js/10.3ed9434f.js",
    "revision": "7abf50d16e9d11e677a0477d8e9de2ec"
  },
  {
    "url": "assets/js/100.709fc7f0.js",
    "revision": "dc3c5c0bd41563129edf524d57d5442c"
  },
  {
    "url": "assets/js/101.81717ae7.js",
    "revision": "2bfdd75dd5e7a1bb2759d2b11d74bca0"
  },
  {
    "url": "assets/js/11.aed56048.js",
    "revision": "96c53969e10e9f8f1c9977db7d8a9cd7"
  },
  {
    "url": "assets/js/12.2c2139e1.js",
    "revision": "acb5e20ac529b94dad76b87070bd1b8f"
  },
  {
    "url": "assets/js/13.dc91f45c.js",
    "revision": "93922a816ed8f091f0e6d86bd76e9dbf"
  },
  {
    "url": "assets/js/14.7957ee4a.js",
    "revision": "c9c616afbc9b39910574f18b57e74872"
  },
  {
    "url": "assets/js/15.5d3ec37a.js",
    "revision": "1fe173396ce23dc965eb0362cb610f3d"
  },
  {
    "url": "assets/js/16.09b671cd.js",
    "revision": "9a0763d57756677b2bbf918b04a879fa"
  },
  {
    "url": "assets/js/17.6f30b859.js",
    "revision": "acdd9c2676266dc72a8ec403be2325b0"
  },
  {
    "url": "assets/js/18.86bb2d0a.js",
    "revision": "456b757afc7c57e900e86cb328573550"
  },
  {
    "url": "assets/js/19.93308049.js",
    "revision": "40cfb947526a165ae6626eb593c83dec"
  },
  {
    "url": "assets/js/20.03b93fc9.js",
    "revision": "150d8fc7f1b09fe42dbfff67c6a4691e"
  },
  {
    "url": "assets/js/21.9363173e.js",
    "revision": "52ab8df779350ee4332ebbed8184b271"
  },
  {
    "url": "assets/js/22.059df9ed.js",
    "revision": "5fefae1881204f908d5eb8ed3bd6ea5b"
  },
  {
    "url": "assets/js/23.cef87c90.js",
    "revision": "ae8213a39eb442334e1874363b9a9de2"
  },
  {
    "url": "assets/js/24.8f0b46be.js",
    "revision": "6712fcb2eda7b8790969094dfe2806f8"
  },
  {
    "url": "assets/js/25.a4711670.js",
    "revision": "0666d33734a41b87864e0d052c4450c7"
  },
  {
    "url": "assets/js/26.ae00beb7.js",
    "revision": "d33826e2008736bfb67393ae56c4ab6f"
  },
  {
    "url": "assets/js/27.b92dee2f.js",
    "revision": "6b7faa2f9caddaf54cae20f4a1b54e18"
  },
  {
    "url": "assets/js/28.5b59b539.js",
    "revision": "b57d0104db6b454f0c904f8e1ecbb634"
  },
  {
    "url": "assets/js/29.626050b2.js",
    "revision": "e6ff288a7e7961b6df23074a417f5e6f"
  },
  {
    "url": "assets/js/30.c91ebe95.js",
    "revision": "a5d24e30af7c72c17004e65368a27f76"
  },
  {
    "url": "assets/js/31.0a8a1d80.js",
    "revision": "393570b7b14db77dfa4c2333e482444e"
  },
  {
    "url": "assets/js/32.9784b164.js",
    "revision": "3efd84b7971700e462e9e275bc41677a"
  },
  {
    "url": "assets/js/33.8b97ee75.js",
    "revision": "a015fa50701035502e834a03c052a68a"
  },
  {
    "url": "assets/js/34.262c9907.js",
    "revision": "278d2bd0ffc40d796bb60b6457074c03"
  },
  {
    "url": "assets/js/35.56dee2c7.js",
    "revision": "8c6f559e76b1f9353b13a2a604613ece"
  },
  {
    "url": "assets/js/36.0e555dd4.js",
    "revision": "34a544176e054dbb8267e3ddb5f16316"
  },
  {
    "url": "assets/js/37.a4386fbd.js",
    "revision": "44dcf8a66c6c8dc761bcabc310415432"
  },
  {
    "url": "assets/js/38.b49f46a6.js",
    "revision": "ed0457d25b0e261b753133d2d7d85c33"
  },
  {
    "url": "assets/js/39.74be9445.js",
    "revision": "196a82a42d46def322dc5941bddc2246"
  },
  {
    "url": "assets/js/4.10069921.js",
    "revision": "1d3e1d00c3c99c8885b1f14c4407af77"
  },
  {
    "url": "assets/js/40.4b6e33bb.js",
    "revision": "278a2d09bb5332c966bf2a97a16b4807"
  },
  {
    "url": "assets/js/41.bde8a29a.js",
    "revision": "e2f8e93939f12023df3f1c4c31374b41"
  },
  {
    "url": "assets/js/42.b9c12a7e.js",
    "revision": "56cfcbadd7bb809e9dbdb15e861abc0d"
  },
  {
    "url": "assets/js/43.dcbd4e13.js",
    "revision": "9779b391c2c59718f2bd178bab72cfc7"
  },
  {
    "url": "assets/js/44.0844c371.js",
    "revision": "7ff15ffcc91566408466fc445f15333b"
  },
  {
    "url": "assets/js/45.8d2bbb01.js",
    "revision": "6a5eb4d88edaf1191376a4596036f705"
  },
  {
    "url": "assets/js/46.0d726ab7.js",
    "revision": "2e8f1ec5cf49c19454b2c3c37ea213b7"
  },
  {
    "url": "assets/js/47.59fba10b.js",
    "revision": "2515c91560f062b4a851eb035118a3dc"
  },
  {
    "url": "assets/js/48.e65a8cde.js",
    "revision": "88a9dbc6b2b12ff2687720128f9437ee"
  },
  {
    "url": "assets/js/49.d3c2625e.js",
    "revision": "e682513e7b4f6c44e1637369c10bb289"
  },
  {
    "url": "assets/js/5.80f527e9.js",
    "revision": "69011c89bdcace402a214a6e12bfac9e"
  },
  {
    "url": "assets/js/50.e772dde8.js",
    "revision": "0a7dd59365c2e87bd9ce7d02ca90cba6"
  },
  {
    "url": "assets/js/51.9ec32da9.js",
    "revision": "badd41278f685a50f64dd7f03ad0ca83"
  },
  {
    "url": "assets/js/52.991fb70c.js",
    "revision": "513b0daf24890ac2733f0042404b113a"
  },
  {
    "url": "assets/js/53.b32ccc81.js",
    "revision": "2d34ad855bf089337373502922eec59e"
  },
  {
    "url": "assets/js/54.9c089402.js",
    "revision": "0b661c79772ed5c516adf6ce858faca4"
  },
  {
    "url": "assets/js/55.96d38269.js",
    "revision": "a8e43e810729e5bb92c0d9653ad67632"
  },
  {
    "url": "assets/js/56.2385b0ac.js",
    "revision": "fdb11879c9eee6faac0e2933d69f241e"
  },
  {
    "url": "assets/js/57.86556b7a.js",
    "revision": "179c8889d974a21fd1da4612e9274cde"
  },
  {
    "url": "assets/js/58.58addbb2.js",
    "revision": "93eb37a0da1c03bc8a16b98482036255"
  },
  {
    "url": "assets/js/59.418a189c.js",
    "revision": "aa4e83835e844dbd03dc8e1cebb972f1"
  },
  {
    "url": "assets/js/6.b43c5f26.js",
    "revision": "24cec3481184a052614e9e8054c808ff"
  },
  {
    "url": "assets/js/60.fac5cdcd.js",
    "revision": "8348cc12f49ee528f72f46c7f28bc604"
  },
  {
    "url": "assets/js/61.16986d20.js",
    "revision": "bf484df623bb8aa1339eb3bef5991d6b"
  },
  {
    "url": "assets/js/62.40d4666d.js",
    "revision": "25611d9eb3010f4b55768dc140ac42ae"
  },
  {
    "url": "assets/js/63.43164899.js",
    "revision": "bca36e0bb39550148eaafed58ed5edbb"
  },
  {
    "url": "assets/js/64.c2bdf4a1.js",
    "revision": "aa9aff3570ab29032dc93836e3994a5e"
  },
  {
    "url": "assets/js/65.f5f6164b.js",
    "revision": "166948c9747f57a18ee96a6fee4cda83"
  },
  {
    "url": "assets/js/66.e01e2f79.js",
    "revision": "dc5e5d5aaa805a4445be51ecd3a8dda2"
  },
  {
    "url": "assets/js/67.753bc305.js",
    "revision": "19f4f19a659980df49a4a95d2f5623c1"
  },
  {
    "url": "assets/js/68.c8f03cb7.js",
    "revision": "98c45cdde75804b38e0b3b424512335f"
  },
  {
    "url": "assets/js/69.39a7ca70.js",
    "revision": "081f51d1ef646882c4e76a6df41cc84e"
  },
  {
    "url": "assets/js/7.f5ea3969.js",
    "revision": "747b4a47bfcf8404ca2b84c81e22ff1b"
  },
  {
    "url": "assets/js/70.e9eb5ff6.js",
    "revision": "850114e53b421716abb55911df90e565"
  },
  {
    "url": "assets/js/71.0240596e.js",
    "revision": "3b47b965e63e06e04e2e48908e02238e"
  },
  {
    "url": "assets/js/72.3bb0e86f.js",
    "revision": "c4a815f695a802efa8c167e661729bc4"
  },
  {
    "url": "assets/js/73.009a06bc.js",
    "revision": "5bd6ab31ebc3760a0fdf97666c58d0e5"
  },
  {
    "url": "assets/js/74.bd030af9.js",
    "revision": "9ed156a4a20b2f00a73fa226cedf4328"
  },
  {
    "url": "assets/js/75.25b010b0.js",
    "revision": "be83b1b3f15ed8de8dc7fece43297bd8"
  },
  {
    "url": "assets/js/76.ae1a2306.js",
    "revision": "4f1914f106904265f59567fcad6b05ea"
  },
  {
    "url": "assets/js/77.3f052f85.js",
    "revision": "1e4f5cb6d61039e9e8bc51b88dab0791"
  },
  {
    "url": "assets/js/78.2d1c9796.js",
    "revision": "b9f0adc61c079d8b0b5419143bd1e639"
  },
  {
    "url": "assets/js/79.e1fb2a90.js",
    "revision": "89b5e306b99e5eeddc4abda816e2e1c4"
  },
  {
    "url": "assets/js/8.21ee191e.js",
    "revision": "ffe360f0099a470ab1d51eabaf6ce8a3"
  },
  {
    "url": "assets/js/80.4e4457ee.js",
    "revision": "d92bced4ad5efe99fca775aa0b2bb859"
  },
  {
    "url": "assets/js/81.293018a4.js",
    "revision": "3e964e037af31ebb6f18a9249bf6f6b9"
  },
  {
    "url": "assets/js/82.af9da023.js",
    "revision": "e7fe59d3668a0288702b09c1bb7a7ca8"
  },
  {
    "url": "assets/js/83.71ed5c35.js",
    "revision": "433f8ff06d54282ce81e4e80e9ec42b5"
  },
  {
    "url": "assets/js/84.ea1a5dc2.js",
    "revision": "3c4f64f916eb2e9ec1b700b5e1ab3cc4"
  },
  {
    "url": "assets/js/85.512c7c09.js",
    "revision": "8b8b881a825097f2060cf52cc1797ef3"
  },
  {
    "url": "assets/js/86.07aa5f2a.js",
    "revision": "174d1649f4c6a3a64543f8188e033b4a"
  },
  {
    "url": "assets/js/87.62332c3f.js",
    "revision": "8b86fa572f2918f9555a536ca2022682"
  },
  {
    "url": "assets/js/88.1de3161a.js",
    "revision": "0ff02ec28d376b894a19451449f478de"
  },
  {
    "url": "assets/js/89.c2790242.js",
    "revision": "b20405ffe3bd157c1ee7dec9b190c0ed"
  },
  {
    "url": "assets/js/9.1417a78f.js",
    "revision": "a02261500b6eac32a2c47c69af71a3cc"
  },
  {
    "url": "assets/js/90.42e0881e.js",
    "revision": "7e3330f508eb261996e821f195baa0ba"
  },
  {
    "url": "assets/js/91.5c63585f.js",
    "revision": "9e1ca49ea3471c5b135f93e9bd9fe2df"
  },
  {
    "url": "assets/js/92.990e4e39.js",
    "revision": "3546b9daa4ef98924b294704c3198389"
  },
  {
    "url": "assets/js/93.a120876a.js",
    "revision": "feb910ec5bd56f1b73b0085c2a4500f5"
  },
  {
    "url": "assets/js/94.93af53ef.js",
    "revision": "cf57a1eda467b32a8862ef5b95f672be"
  },
  {
    "url": "assets/js/95.737f047c.js",
    "revision": "233fdfd46c918c5716ab05e4db9f98ee"
  },
  {
    "url": "assets/js/96.1794ac7d.js",
    "revision": "e9504a9f21ac667947b348c39ffede1b"
  },
  {
    "url": "assets/js/97.97dc601e.js",
    "revision": "d2c6091ec066e98cb755d24a2fb34c4b"
  },
  {
    "url": "assets/js/98.5cfc9e55.js",
    "revision": "2aa3de351800d4e76b6645257192c5a0"
  },
  {
    "url": "assets/js/99.7c686bd7.js",
    "revision": "2c240c5260571fc2693bb9bf19add3ad"
  },
  {
    "url": "assets/js/app.4d0a8d4c.js",
    "revision": "1e162b58a118f1af73dcf803c5d3ac0e"
  },
  {
    "url": "assets/js/vendors~flowchart.254f7798.js",
    "revision": "e8b7aee10d00ac96c3d3561a4c121e64"
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
    "revision": "5074800c4692f4a40d125784838967cf"
  },
  {
    "url": "blogs/code/2016/2016-03-20-ios-memory-optimize-two.html",
    "revision": "3ca78d3ca2371449a1ba287e87ac28ea"
  },
  {
    "url": "blogs/code/2016/2016-03-21-ios-memory-optimize-three.html",
    "revision": "7a26bab3f1652a2e5aa17c43957901b9"
  },
  {
    "url": "blogs/code/2016/2016-03-22-ios-memory-optimize-four.html",
    "revision": "0e688d687f2ac4a8506c6bb5bf822cb6"
  },
  {
    "url": "blogs/code/2016/2016-03-27-objc-weak-strong.html",
    "revision": "9cf12c2b1090d63a5d642826eeca5ef7"
  },
  {
    "url": "blogs/code/2016/2016-03-27-simple-coredata-manager.html",
    "revision": "e2181e2415bc52b8b1e392fdd4e66c7e"
  },
  {
    "url": "blogs/code/2016/2016-04-02-video-player-crash-fix.html",
    "revision": "1459e74f2fa4c94b65d2ee5209f63d05"
  },
  {
    "url": "blogs/code/2016/2016-04-13-customer-pop-to-root-crash-md.html",
    "revision": "dc99d742b613b03e3301b7620ed04ee9"
  },
  {
    "url": "blogs/code/2016/2016-04-13-ios-navigation-bar-hidden.html",
    "revision": "7b529842fbcfb84ea6c2d8d7a53b32fe"
  },
  {
    "url": "blogs/code/2016/2016-06-06-reactivecocoa-racobserve.html",
    "revision": "41e1e5314040dc865398e72a119f28a3"
  },
  {
    "url": "blogs/code/2016/2016-08-17-set-collectionview-cell-space.html",
    "revision": "be9cbbbb6ae75ddae09c85f245f7717f"
  },
  {
    "url": "blogs/code/2016/2016-09-19-ios10-push-notification.html",
    "revision": "ef3a8225040ce0e2c26906ea9292319c"
  },
  {
    "url": "blogs/code/2016/2016-10-26-gcd-sync-async.html",
    "revision": "2bb56295dd275b1d9aeafd53dfa0f96c"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvc-principle-of-realization.html",
    "revision": "17b89af3bd6a1e592eb739c57eedfea5"
  },
  {
    "url": "blogs/code/2016/2016-11-11-kvo-principle-of-realization.html",
    "revision": "e3c6bf39a2117e911aeb4b8e01c58e4e"
  },
  {
    "url": "blogs/code/2016/2016-11-22-gesture-recognizer.html",
    "revision": "0d82890009ff7799eeadc0165c2406fa"
  },
  {
    "url": "blogs/code/2016/2016-11-24-ios-event-transfer-and-respose-chain.html",
    "revision": "017da0d9f79ad03d2dd4c7d017e95121"
  },
  {
    "url": "blogs/code/2016/2016-12-06-ios-operation-queue.html",
    "revision": "b7ff0ccfeb92d4aeeec1915f7e6550b2"
  },
  {
    "url": "blogs/code/2016/2016-12-15-ios-dispatch-queue.html",
    "revision": "3d13aa920e366c4d072b0c946158eaf4"
  },
  {
    "url": "blogs/code/2016/2016-12-20-ios-dispatch-source.html",
    "revision": "9b35e4e476b2957955cd576cb3ece56f"
  },
  {
    "url": "blogs/code/2017/2017-02-20-racsignal-subscription.html",
    "revision": "2d8292d2bc4fb991131d703e36d783e7"
  },
  {
    "url": "blogs/code/2017/2017-04-10-ios-architecture-design.html",
    "revision": "d1f9defb83968322726e5bc539b27209"
  },
  {
    "url": "blogs/code/2017/2017-04-12-ios-modularization-reconsitution.html",
    "revision": "82ed6ff970a829f9e7a97d1d61216812"
  },
  {
    "url": "blogs/code/2017/2017-04-13-ios-private-pod-specs.html",
    "revision": "70a7a219b59e9055c235287337e3e823"
  },
  {
    "url": "blogs/code/2017/2017-04-25-ios-networking-type-chose.html",
    "revision": "3e04967066f7730716bde9e0e8ea774d"
  },
  {
    "url": "blogs/code/2017/2017-05-26-ios-ci-cd.html",
    "revision": "fe5733be89454b9ea27ffc14a9ed89b2"
  },
  {
    "url": "blogs/code/2017/2017-06-30-ios-shell-project-plan.html",
    "revision": "9ef2442d457160fd1870ded745f82321"
  },
  {
    "url": "blogs/code/2017/2017-07-19-ios-shell-project-execute.html",
    "revision": "72cbdf23d036d336765c83084b2aac6a"
  },
  {
    "url": "blogs/code/2017/2017-08-21-ios-components-binary.html",
    "revision": "d2a2f0b5d42490ad7a176ae0ed0420ab"
  },
  {
    "url": "blogs/code/2018/2018-02-16-year-end-summary-of-2017.html",
    "revision": "f2615a1b1f40d4fcb0e093bfd24df40b"
  },
  {
    "url": "blogs/code/2018/2018-06-26-sensitive-information-processing.html",
    "revision": "499ec9f34d899413cd0a307d4aea2fca"
  },
  {
    "url": "blogs/code/2018/2018-07-16-app-config-center.html",
    "revision": "8876fe6b832c35df81b8b40ff20c8d1a"
  },
  {
    "url": "blogs/code/2018/2018-08-13-hybrid-res-loader.html",
    "revision": "63f27bb12a28579335459138a6dcd834"
  },
  {
    "url": "blogs/code/2018/2018-10-31-ios-app-luanch-optimize.html",
    "revision": "6a2d4c4268c304f28c928003e1b5945a"
  },
  {
    "url": "blogs/code/2019/2019-02-21-component-dev-platform.html",
    "revision": "d514dafd1945ee43b39fe95599a18c87"
  },
  {
    "url": "blogs/code/2022/3d-basic-concept.html",
    "revision": "6ed22866e0d0d0c5e88ca85600df6afd"
  },
  {
    "url": "categories/3D/index.html",
    "revision": "0bda9d760ea4d32c99c465776dada511"
  },
  {
    "url": "categories/index.html",
    "revision": "16504ad8277f6be632c56351fcfc45e8"
  },
  {
    "url": "categories/iOS/index.html",
    "revision": "aa1d139f6990fd8b984546204d78e2c9"
  },
  {
    "url": "categories/iOS/page/2/index.html",
    "revision": "194860e2cc2bf403653b6359fd192e2e"
  },
  {
    "url": "categories/iOS/page/3/index.html",
    "revision": "e46d3825fd39388c3d5112f1a81d90dd"
  },
  {
    "url": "categories/iOS/page/4/index.html",
    "revision": "ff08358a1f0c6392cbcae86eda3bf911"
  },
  {
    "url": "categories/Summary/index.html",
    "revision": "c1dbe3fb735fc3cfb0613706cfce7924"
  },
  {
    "url": "front/explorer/after-url.html",
    "revision": "a0a3f522cfb9409c59efef76d2d94f74"
  },
  {
    "url": "front/index.html",
    "revision": "846656770315db40cb337f05e401ccff"
  },
  {
    "url": "front/network/cdn.html",
    "revision": "d237b3a0c585399b9d3387e289e2f273"
  },
  {
    "url": "front/network/dns.html",
    "revision": "0a8963a4753793b5248b201fbc938830"
  },
  {
    "url": "front/network/get-post.html",
    "revision": "fea3a732422d50320f9d9d74191be521"
  },
  {
    "url": "front/network/handshakes-waves.html",
    "revision": "76785b9138b8157336127caa26ea31ae"
  },
  {
    "url": "front/network/http-header.html",
    "revision": "42238a205169a41e716ee1cf66a8a6e1"
  },
  {
    "url": "front/network/http-https.html",
    "revision": "ab949aa35025c27260c4aaf2eba96ea3"
  },
  {
    "url": "front/network/http-status-code.html",
    "revision": "1a79d1bea8a956c21cc35fd6d040116e"
  },
  {
    "url": "front/network/http-version.html",
    "revision": "f442f046aef7d4af18fd1ea49f6bc249"
  },
  {
    "url": "front/network/https.html",
    "revision": "ff0cf92567ef01ae81c81ce1e820039c"
  },
  {
    "url": "front/network/osi.html",
    "revision": "80d9fabdde4ac555d580d545b058ec92"
  },
  {
    "url": "front/network/tcp-ip.html",
    "revision": "252846c8aa7c70fad6d56b36482a894c"
  },
  {
    "url": "front/network/tcp-udp.html",
    "revision": "fe37726aab56252a27fc4560a43b0f6f"
  },
  {
    "url": "front/network/websocket.html",
    "revision": "73f955b3dfdd85a013ec87e281020de4"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "0848c2169ffeeaf6e138fd3daa8a44e0"
  },
  {
    "url": "ios/basic/memory.html",
    "revision": "f61074bd664f0bc59ca9f60654bd96cd"
  },
  {
    "url": "ios/basic/multithread/gcd.html",
    "revision": "d5ff32ea6bd14a4bf6ed53a88d587c73"
  },
  {
    "url": "ios/basic/multithread/lock.html",
    "revision": "f8f630c39016a278cea5a8c60f1f9a60"
  },
  {
    "url": "ios/basic/multithread/process-thread.html",
    "revision": "2f6a7588676f2bc4f7abf6a96ce967d8"
  },
  {
    "url": "ios/basic/multithread/user-kernal-thread.html",
    "revision": "4c73228a4f9bda17eed2a92a9f7588fb"
  },
  {
    "url": "ios/basic/oc/block.html",
    "revision": "c40013704c617aa957ce174f0767fcc2"
  },
  {
    "url": "ios/basic/oc/category-extension.html",
    "revision": "ddd7117cc41cb86be63ddfa7bd1cda85"
  },
  {
    "url": "ios/basic/oc/kvc.html",
    "revision": "b6a23ba5bab8f7e303c98a12d655c6aa"
  },
  {
    "url": "ios/basic/oc/kvo.html",
    "revision": "5c8d275801b5ff480760f9281d7e4f80"
  },
  {
    "url": "ios/basic/oc/load-initialize.html",
    "revision": "32d0e8fd49ad832dfcc1fbf2da09e2be"
  },
  {
    "url": "ios/basic/oc/notification.html",
    "revision": "c29f5a2db00fc631595438dd32d8e900"
  },
  {
    "url": "ios/basic/optimization/index.html",
    "revision": "49afde8c5182c767716875dc0a67f86f"
  },
  {
    "url": "ios/basic/runloop.html",
    "revision": "1d4cb59ff170f6bb36171b715a18b563"
  },
  {
    "url": "ios/basic/runtime.html",
    "revision": "27bcd515fb40d62967a70f584a02eca4"
  },
  {
    "url": "ios/basic/swift/index.html",
    "revision": "80feb3f4b11bfe0561b273890fa8d981"
  },
  {
    "url": "ios/basic/ui/calayer-uiview.html",
    "revision": "20d1b53ff4f937af55d4ba23121dbb91"
  },
  {
    "url": "ios/basic/ui/coreanimation-uikit.html",
    "revision": "025fd2df18e58fee099c168aea1c0287"
  },
  {
    "url": "ios/basic/ui/event-transmission-responder-chain.html",
    "revision": "75db7665e41e9af138800e7532d21c25"
  },
  {
    "url": "ios/basic/ui/frame-bound-center.html",
    "revision": "83bbb13333864fd59749805fb2fedd32"
  },
  {
    "url": "ios/basic/ui/layout-display.html",
    "revision": "aece3660cd3f73e9eb82b45f2c3ad06c"
  },
  {
    "url": "ios/basic/ui/off-screen-rendering.html",
    "revision": "cd63362f664dd450a4cd69c37208fa4b"
  },
  {
    "url": "ios/index.html",
    "revision": "db8c3eb40af69f57a1789c3fac9aba7f"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "notes/front/front-end-engineering.html",
    "revision": "8f8c40a52747d4655f1292d6da1583b6"
  },
  {
    "url": "notes/front/npm-dependency.html",
    "revision": "e8a183f44f716cdd237b68e43095be74"
  },
  {
    "url": "notes/git/submodule.html",
    "revision": "c9bb197e5fe110c6e148f1c2d6e1daf4"
  },
  {
    "url": "notes/index.html",
    "revision": "27a48c0ceca4030da88119210eebc9cf"
  },
  {
    "url": "notes/native/app-quality.html",
    "revision": "8f52d3dd8f2b7e19c267bff77184ec18"
  },
  {
    "url": "notes/native/code-review.html",
    "revision": "630cddfd62b79005c25826d7ecfdca34"
  },
  {
    "url": "notes/native/ios-component-version.html",
    "revision": "24b381c66aa0454d92ce1038ca9ff37f"
  },
  {
    "url": "notes/native/ios-plan.html",
    "revision": "e3181e350d7a93cb979cac1b4a7c238a"
  },
  {
    "url": "notes/server/install-java-centos7.html",
    "revision": "989ba7990821e37dd9248bf234cbc820"
  },
  {
    "url": "notes/server/install-jenkins-centos7.html",
    "revision": "f657d36af26b149ba068cc8be3f5c2ed"
  },
  {
    "url": "notes/server/install-maven-centos7.html",
    "revision": "71c38cf09e14729ffce3c9d067f74617"
  },
  {
    "url": "notes/server/install-mysql-centos7.html",
    "revision": "bf52484af0d45e9037de09a6f2942daa"
  },
  {
    "url": "notes/server/install-ngnix-centos7.html",
    "revision": "30a7a48837c0c32e3473475975e29223"
  },
  {
    "url": "notes/server/windows-hyper-v.html",
    "revision": "9d0da81061ffcd5226f40c1413069970"
  },
  {
    "url": "tag/3D/index.html",
    "revision": "edf1498e7fe52c37aed898bf88ea2379"
  },
  {
    "url": "tag/index.html",
    "revision": "63135a0ad7d41cdfeae139bdbac6ebfd"
  },
  {
    "url": "tag/iOS/index.html",
    "revision": "c9d96bf7c3c1042c8a4404097c5ade7e"
  },
  {
    "url": "tag/iOS/page/2/index.html",
    "revision": "55bcca7e81a85049f2f0bc1a2e76d317"
  },
  {
    "url": "tag/iOS/page/3/index.html",
    "revision": "2ff2327e90becd36f94f36b4a1379ced"
  },
  {
    "url": "tag/iOS/page/4/index.html",
    "revision": "1630f0cf7b8fe211a94fc5af6f46b5a3"
  },
  {
    "url": "tag/Summary/index.html",
    "revision": "df3c12cc7bbbe583708b561c24f9ff77"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba2f950de19cc5fc13ce18aeb2f54f7b"
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
