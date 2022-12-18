(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{568:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("先吐槽下公司最近的变化，近两个月服务器端的同学将后端进行重构，重新设计了商品模型、网关和API调用。使用Alibaba开源的Dubbo分布式服务框架进行分层架构，并对后端服务最大化的解耦。")]),s._v(" "),n("p",[s._v("API调用的修改，导致三端（Android、iOS和H5）Service层都要修改，这还不是伤害最大的，最大的是商品模型的重构导致前端数据Model完全改变，其实快赶上重写App了，短短两个月（包括春节假期）外加产品新需求，真心很赶很累。导致东西做完没时间进行Review、Instrument和优化，上线后出现各种问题。")]),s._v(" "),n("h2",{attrs:{id:"memorywarning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#memorywarning"}},[s._v("#")]),s._v(" MemoryWarning")]),s._v(" "),n("p",[s._v("随着iOS设备内存容量越来越大，好像碰到"),n("strong",[s._v("didReceiveMemoryWarning")]),s._v("的情况越来越少，App中对这块越来越不重视。但对App内存使用的优化，我认为这一块是任何app都必不可少的。所以就先说说这一块。")]),s._v(" "),n("p",[s._v("iOS的UIViewController 类给我们提供了处理内存不足的方法，我们可以在此方法中处理内存警告。")]),s._v(" "),n("ul",[n("li",[s._v("在iOS 3.0 之前，当系统的内存不足时，UIViewController的"),n("strong",[s._v("didReceiveMemoryWarining")]),s._v(" 方法会被调用，我们可以在"),n("strong",[s._v("didReceiveMemoryWarining")]),s._v(" 方法里释放掉部分暂时不用的资源")]),s._v(" "),n("li",[s._v("在iOS 3.0-iOS 5.0，UIViewController增加"),n("strong",[s._v("viewDidUnload")]),s._v("方法，和viewDidLoad相对应，当系统内存不足的时候，"),n("strong",[s._v("didReceiveMemoryWarining")]),s._v("方法会先被调用，并判断当前controller是否是在最上层，也就是用户当前看到的viewController，如果不是，系统会自动将viewController的view和所有子view全部销毁，然后调用viewController的"),n("strong",[s._v("viewDidUnload")]),s._v("方法，若在最上层，怎不会销毁，也不会调用"),n("strong",[s._v("viewDidUnload")]),s._v("方法。所以这时候进行内存处理的方法如下：")])]),s._v(" "),n("div",{staticClass:"language-objc line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-objc"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("didReceiveMemoryWarning "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" didReceiveMemoryWarning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如没有显示在window上，会自动将self.view释放。")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ios6.0以前，不用在此做处理，self.view释放之后，会调用下面的viewDidUnload函数，在viewDidUnload函数中做处理就可以了。")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("viewDidUnload "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Release any retained subviews of the main view.不包含self.view")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//处理一些内存和资源问题。")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" viewDidUnload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[s._v("在iOS6之后，"),n("strong",[s._v("viewDidUnload")]),s._v("方法被废弃内存警告处理又回到iOS 3.0时代，但是是有区别的。看UIViewController头文件注释如下：")])]),s._v(" "),n("div",{staticClass:"language-objc line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-objc"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("didReceiveMemoryWarning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Called when the parent application receives a memory warning. On iOS 6.0 it will no longer clear the view by default.")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("也就是说此方法不再销毁view。所以对iOS6之后又有了新的写法：")]),s._v(" "),n("div",{staticClass:"language-objc line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-objc"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("didReceiveMemoryWarning "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" didReceiveMemoryWarning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//保证invisible, 因为即使在当前界面也会收到系统回调")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isViewLoaded "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("window "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Dispose of any resources that can be recreated.")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//确保下次会重新加载调用viewDidLoad函数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"处理方法优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#处理方法优化"}},[s._v("#")]),s._v(" 处理方法优化")]),s._v(" "),n("p",[s._v("但是每个controller都这么去写判断方法的确很麻烦。有两种方式可以更好的处理。")]),s._v(" "),n("ol",[n("li",[s._v("若你的项目controller是继承自BaseViewController，我想聪明的同学应该知道怎么去做了，就是在self.view = nil;这一行之前加入一个handleMemoryWarning方法，让所有子controller都去实现这个方法，进行内存释放即可。在父类中如下写处理：")])]),s._v(" "),n("div",{staticClass:"language-objc line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-objc"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("didReceiveMemoryWarning "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),s._v(" didReceiveMemoryWarning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//保证invisible, 因为即使在当前界面也会收到系统回调")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isViewLoaded "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("window "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Dispose of any resources that can be recreated.")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),s._v(" handleMemoryWarning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("self")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//确保下次会重新加载调用viewDidLoad函数")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("handleMemoryWarning "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 空方法，需要子类实现，进行内存释放")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("若你的项目controller不是继承自BaseController，目前光明都市菜园的controller就是如此，目的是对controller不进行任何污染，可以随便拎出来一个放到其他项目中。但是写了一个拦截器，用于拦截所有controller，并对一些方法进行"),n("strong",[s._v("method swizzling")]),s._v(" （拦截器的写法以后再介绍）将didReceiveMemoryWarning替换成如下方法，每个controller中处理内存警告还和方法一一样。")])]),s._v(" "),n("div",{staticClass:"language-objc line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-objc"}},[n("code",[s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("didReceiveMemoryWarning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UIViewController \\"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("viewController "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//保证invisible, 因为即使在当前界面也会收到系统回调")]),s._v("\n    SEL selector "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("NSSelectorFromString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('@"handleMemoryWarning"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("viewController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isViewLoaded "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n    viewController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("window "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" nil "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("viewController respondsToSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("viewController performSelector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("selector withObject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("nil afterDelay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        viewController"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nil"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//确保下次会重新加载")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);