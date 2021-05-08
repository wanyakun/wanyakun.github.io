(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{493:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在当今的app中，几乎所有的app都需要进行图片缓存，而在电商App中，图片在线加载到处可见，首页产品展示、分类列表类别icon，产品列表产品缩略图，产品详情主图和图文详情等等等。。。")]),s._v(" "),t("p",[s._v("今天这第四篇文章要说说App中图片缓存的问题，在我们的App中，我们就使用了大名鼎鼎的"),t("a",{attrs:{href:"https://github.com/rs/SDWebImage",target:"_blank",rel:"noopener noreferrer"}},[s._v("SDWebImage"),t("OutboundLink")],1),s._v("，相信大多数的app都是用这个第三方库来做图片缓存的，简单好用。但是在使用的过程中，若出现大量的在线图片加载，有些地方需要注意。")]),s._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("重现问题步骤：当我们在打开App产品列表，加载产品缩略图，加载几屏幕后，然后反复点进不同产品进入详情，加载产品大图。导致内存使用暴涨。")]),s._v(" "),t("p",[s._v("经过上面的，操作我们发现App使用的内存暴涨，贴下"),t("strong",[s._v("Instrument")]),s._v("图片一看究竟。\n"),t("img",{attrs:{src:"http://file.aioser.com/QQ20160319-0@2x.png",alt:""}}),s._v("\n通过上面这张图片可以看到，All Anoymous VM达到137MB，主要为VM:CG raster data导致，已经到了109.30MB。\n经过反复查询，确实是SDWebImage导致的VM:CG raster data暴涨的。去SDWebImage的issues查询，发现询问这个问题人挺多，详见：https://github.com/rs/SDWebImage/issues/538")]),s._v(" "),t("h2",{attrs:{id:"内存暴涨原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存暴涨原因"}},[s._v("#")]),s._v(" 内存暴涨原因")]),s._v(" "),t("p",[s._v("首先我看看"),t("strong",[s._v("SDImageCache")]),s._v("的源文件：")]),s._v(" "),t("div",{staticClass:"language-objc line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-objc"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * SDImageCache maintains a memory cache and an optional disk cache. Disk cache write operations are performed\n * asynchronous so it doesn’t add unnecessary latency to the UI.\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@interface")]),s._v(" SDImageCache "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NSObject\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Decompressing images that are downloaded and cached can improve performance but can consume lot of memory.\n * Defaults to YES. Set this to NO if you are experiencing a crash due to excessive memory consumption.\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@property")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("assign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nonatomic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" BOOL shouldDecompressImages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * use memory cache [defaults to YES]\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@property")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("assign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nonatomic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" BOOL shouldCacheImagesInMemory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("从源文件的描述可以发现SDImageCache维护一个内存缓存和一个可选的磁盘缓存。磁盘缓存异步执行写操作所以不会对UI增加不必要的延迟。属性shouldCacheImagesInMemory默认为YES，shouldDecompressImages默认也为YES。而"),t("strong",[s._v("shouldDecompressImages")]),s._v("属性会对下载和缓存的图片进行解压缩来提高性能，但是会消耗很多内存，并且默认为开启，问题就出在这里，当我们大量在线加载图片的时候会使内存过度消耗，而导致App crash。")]),s._v(" "),t("h2",{attrs:{id:"解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),t("ul",[t("li",[s._v("将"),t("strong",[s._v("shouldDecompressImages")]),s._v("参数设置为NO。")])]),s._v(" "),t("div",{staticClass:"language-objc line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-objc"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SDImageCache sharedImageCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shouldDecompressImages "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SDWebImageDownloader sharedDownloader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shouldDecompressImages "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NO"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("在ViewController的"),t("strong",[s._v("viewDidDisappear")]),s._v("方法中clearMemory，如果使用BaseViewController，可以在加到基类的"),t("strong",[s._v("viewDidDisappear")]),s._v("方法中， 我们的App使用了AOP技术，就在拦截器里面拦截此方法来统一添加。")])]),s._v(" "),t("div",{staticClass:"language-objc line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-objc"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SDImageCache sharedImageCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" clearMemory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("别忘了在MemoryWarning的时候clearMemroy，可以加到AppDelegate中。")])]),s._v(" "),t("div",{staticClass:"language-objc line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-objc"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("applicationDidReceiveMemoryWarning"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UIApplication "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("application "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SDImageCache sharedImageCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" clearMemory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("经过对SDWebImage设置处理之后，内存使用量远远下降了，贴张图看看处理后的效果。\n"),t("img",{attrs:{src:"http://file.aioser.com/QQ20160319-1@2x.png",alt:""}})])])}),[],!1,null,null,null);a.default=n.exports}}]);