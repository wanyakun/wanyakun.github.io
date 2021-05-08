(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{491:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("上个版本经过内存等方面的优化，在听云崩溃报告中已经成功将Crash率降低到8‰一下，看了下最新版本七日的Crash率在4.87‰，终于达到标准水平了。下面是听云崩溃率标准：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://articles.csdn.net/uploads/allimg/150420/125919D91-0.jpg",alt:"听云提出的移动应用崩溃率标准"}})]),t._v(" "),a("blockquote",[a("p",[t._v("今天又发现了一个Crash，本以为是已经解决过的Crash，仔细一看，发现Crash的位置是一样的，但是引起的原因确实另外一个。")])]),t._v(" "),a("h3",{attrs:{id:"crash报告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crash报告"}},[t._v("#")]),t._v(" Crash报告")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://file.aioser.com/QQ20160413-1@2x.png",alt:"Crash报告"}})]),t._v(" "),a("p",[t._v("从上面的图片 Crash的地方可以看出原因为Hybrid页面调用Native的返回根目录，并选中指定的TabBarItem。")]),t._v(" "),a("h3",{attrs:{id:"crash原因分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crash原因分析"}},[t._v("#")]),t._v(" Crash原因分析")]),t._v(" "),a("p",[t._v("之所以在这个地方出现Crash是因为：")]),t._v(" "),a("ul",[a("li",[t._v("Crash线程为WebThread，不是主线程。")]),t._v(" "),a("li",[t._v("PSPDFUIKitMainThreadGuard为检查是否在子线程更新UI，若有，在DEBUG状态下会Assert，我们可以直接找到在什么位置出现子线程更新UI，方便解决问题，在Release下就Crash了。")]),t._v(" "),a("li",[t._v("Crash之前WebThread执行[UILabel setTextColor]，在往下看会发现确实是在子线程更新了UI动作。找到Crash的原因了。")])]),t._v(" "),a("h3",{attrs:{id:"问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[t._v("#")]),t._v(" 问题解决")]),t._v(" "),a("p",[t._v("根据Crash报告可以看得出是因为在WebView中JavaScript调用Native方法，Native方法在子线程中执行，要解决这个问题，需要在Native方法中调用主线程，然后在主线程中执行相应的方法。")]),t._v(" "),a("p",[t._v("代码修改前：")]),t._v(" "),a("div",{staticClass:"language-objc line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objc"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("popToRootViewControllerWithSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PopUtils popToRootViewControllerWithSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("修改后：")]),t._v(" "),a("div",{staticClass:"language-objc line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objc"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("popToRootViewControllerWithSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_get_main_queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PopUtils popToRootViewControllerWithSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这样就能保证在Native方法在主线程中执行。")]),t._v(" "),a("blockquote",[a("p",[t._v("问题看似解决，但是这样解决真的好吗？那万一别的地方也调用这个"),a("strong",[t._v("popToRootViewControllerWithSelectedIndex")]),t._v("方法呢？如果也恰好是在子线程中调用，岂不是同意也会出现Crash。我们应该分析下这个popToRoot方法具体是怎么写的。看是不是要在这个方法中来做一些修改呢？")])]),t._v(" "),a("p",[a("strong",[t._v("popToRootViewControllerWithSelectedIndex")]),t._v("代码如下：")]),t._v(" "),a("div",{staticClass:"language-objc line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objc"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("popToRootViewControllerWithSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UITabBarController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tabVC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UITabBarController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppDelegate sharedAppDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" tabVC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewControllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tabVC setSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PopUtils popToRootViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("而popToRootViewController方法只是获取Tabbar的所有Navigation并逐一popToRoot，并不会进行UI的修改，根据Crash报告，可以看出，其实问题就出在**[tabVC setSelectedIndex:index]**这句，设置选中的Index，tabbarItem会改变图片，改变文字的颜色等等，所以我们应该将这里的操作放到主线程中才对。")]),t._v(" "),a("div",{staticClass:"language-objc line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objc"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("popToRootViewControllerWithSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSInteger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_async")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch_get_main_queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        UITabBarController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tabVC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UITabBarController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppDelegate sharedAppDelegate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" tabVC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewControllers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tabVC setSelectedIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PopUtils popToRootViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("我这里将整个代码块都放到主线程中了。当然也可以只将**[tabVC setSelectedIndex:index];**这句放到主线程中")])])}),[],!1,null,null,null);s.default=e.exports}}]);