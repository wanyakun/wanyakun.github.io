(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{677:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"现状"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现状"}},[t._v("#")]),t._v(" 现状")]),t._v(" "),a("ul",[a("li",[t._v("公司好几个app都是从一款app基础上开发的，Comms模块可以分步提出做成基础Library")]),t._v(" "),a("li",[t._v("业务模块划分混乱")]),t._v(" "),a("li",[t._v("业务开发模式简单，MVC模式")]),t._v(" "),a("li",[t._v("工程混乱")]),t._v(" "),a("li",[t._v("代码不规范，命名不规范")])]),t._v(" "),a("h2",{attrs:{id:"架构设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构设计"}},[t._v("#")]),t._v(" 架构设计")]),t._v(" "),a("p",[t._v("基于公司目前几款app的现状，设计了iOS整体的架构方案和App开发的架构方案。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/2017/ios-architecture.png",alt:"架构总览"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/2017/app-architecture.png",alt:"App架构"}})]),t._v(" "),a("h2",{attrs:{id:"升级开发模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级开发模式"}},[t._v("#")]),t._v(" 升级开发模式")]),t._v(" "),a("h3",{attrs:{id:"组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),a("p",[t._v("组件是可以独立开发，独立发布，独立运行的。具备独立性的组件可以很好的隔离跨团队之间的依赖，彼此独立开发，按照各自的节奏发布版本")]),t._v(" "),a("p",[t._v("每个独立的组件对发布的版本号负责，不论是其他组件还是主工程都依赖组件发布的稳定版本。")]),t._v(" "),a("ul",[a("li",[t._v("引入依赖管理设施CocoaPods")]),t._v(" "),a("li",[t._v("基础平台Framework化")]),t._v(" "),a("li",[t._v("业务模块Framework化")])]),t._v(" "),a("h3",{attrs:{id:"独立开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立开发"}},[t._v("#")]),t._v(" 独立开发")]),t._v(" "),a("p",[t._v("剥离基础平台中各个模块，剥离业务模块，将剥离后的内容独立工程化，做成CocoaPods库。需要建立私有Specs。")]),t._v(" "),a("ul",[a("li",[t._v("基础平台各个模块剥离成独立的工程开发")]),t._v(" "),a("li",[t._v("业务模块剥离成独立的工程开发")])]),t._v(" "),a("h3",{attrs:{id:"独立发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立发布"}},[t._v("#")]),t._v(" 独立发布")]),t._v(" "),a("p",[t._v("让每一个独立组件尽可能少的依赖其他组件，在最小范围内正常编译执行。每次发布不再是一个稳定版本号，而是一个稳定的二进制包。")]),t._v(" "),a("ul",[a("li",[t._v("梳理组件之间的依赖关系")]),t._v(" "),a("li",[t._v("尽可能减少组件间的依赖")])]),t._v(" "),a("h2",{attrs:{id:"执行方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行方法"}},[t._v("#")]),t._v(" 执行方法")]),t._v(" "),a("p",[t._v("整个模式升级基本上经历这样几个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("代码独立，先从形式上解耦")]),t._v(" "),a("li",[t._v("独立代码工程化，为独立运行打下基础")]),t._v(" "),a("li",[t._v("梳理依赖关系，独立工程可编译")]),t._v(" "),a("li",[t._v("放弃源码依赖，提速集成编译")])]),t._v(" "),a("h2",{attrs:{id:"依赖关系梳理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系梳理"}},[t._v("#")]),t._v(" 依赖关系梳理")]),t._v(" "),a("p",[t._v("一个工程，从原始状态经过几年的开发迭代，依赖关系会变的非常复杂。需要仔细梳理。")]),t._v(" "),a("p",[t._v("我们要做的并不是把这些依赖和耦合一一处理掉，而是进行梳理，把不合理的找出来，解决掉，让整个工程处在一个健康合理的依赖和耦合范围内。有问题的依赖基本有这样几种：")]),t._v(" "),a("ul",[a("li",[t._v("模块循环依赖")]),t._v(" "),a("li",[t._v("层间反向依赖")]),t._v(" "),a("li",[t._v("非强功能依赖")])]),t._v(" "),a("h2",{attrs:{id:"耦合与解耦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#耦合与解耦"}},[t._v("#")]),t._v(" 耦合与解耦")]),t._v(" "),a("p",[t._v("耦合可以大致分为三类：")]),t._v(" "),a("ul",[a("li",[t._v("界面耦合")])]),t._v(" "),a("p",[t._v("就是用户操作流程里，从首页-到详情-到购买页-再到充值，这些界面的跳转是硬编码的")]),t._v(" "),a("ul",[a("li",[t._v("依赖耦合")])]),t._v(" "),a("p",[t._v("顾名思义，两个模块之间的有依赖，就是耦合")]),t._v(" "),a("ul",[a("li",[t._v("工程耦合")])]),t._v(" "),a("p",[t._v("每个模块有自己的生命周期和运行时，每个模块在生产环境里又需要依赖主工程的运行时")]),t._v(" "),a("p",[t._v("那么针对以上三种不同的耦合就需要有三种不同的解耦方案")]),t._v(" "),a("h3",{attrs:{id:"界面解耦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#界面解耦"}},[t._v("#")]),t._v(" 界面解耦")]),t._v(" "),a("p",[t._v("界面耦合主要是通过统跳协议 & Rewrite引擎来进行解耦，也就是Router")]),t._v(" "),a("h4",{attrs:{id:"统跳协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统跳协议"}},[t._v("#")]),t._v(" 统跳协议")]),t._v(" "),a("p",[t._v("统跳协议PPDURLNavigator是一个基于URL的跳转方案，配合Rewrite引擎实现全App调用解耦。而路由配置主要有以下两种方案：")]),t._v(" "),a("ul",[a("li",[t._v("基于plist配置")])]),t._v(" "),a("p",[t._v("首先在App中配置一个matrix.plist，用来配置App中的模块信息，如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/2017/matrix.png",alt:"matrix"}})]),t._v(" "),a("p",[t._v("而每个模块都有一个类似order_bundle.plist，用来配置对外提供可跳转的页面，如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/2017/order_bundle.png",alt:"order_bundle"}})]),t._v(" "),a("p",[t._v("当调用发生，解析URL查找到的对应对象，初始化这个对象，托管给已注册的跳转服务。跳转服务则根据URL和初始化的界面对象执行跳转服务。")]),t._v(" "),a("ul",[a("li",[t._v("基于Annotation")])]),t._v(" "),a("ol",[a("li",[t._v("先声明一段宏，用来声明char字符串，也就是配置JSON")])]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("PPDURLNavigatorSectName")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("PPDURLNavigatorSectName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PPDNavigatorURLs"')])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("PPDURLDATA")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sectname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__attribute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__DATA,"')]),a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("sectname")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[t._v("PPDURLMapping")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exact_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("class PPDURLNavigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_url "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PPDURLDATA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PPDNavigatorURLs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{ \\"exact_url\\" : \\""')]),a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("exact")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_url")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\", \\"object\\":\\""')]),a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("object")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\", \\"attribute\\" : "')]),a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("attribute")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在Controller中注解url，object和attribute，attribute中有字段映射的需要设置，没有的可以不设置此字段")])]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PPDOrderListViewController.h"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PPDURLNavigator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("PPDURLNavigator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("umbrella"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@PPDURLMapping(page.ppd/orderList, PPDOrderListViewController, )")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PPDURLMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ppd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("orderList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PPDOrderListViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[{\\"type\\":\\"int\\", \\"attr_name\\":\\"orderType\\", \\"map_key\\":\\"tradeType\\"}, {\\"type\\":\\"int\\", \\"attr_name\\":\\"orderId\\", \\"map_key\\":\\"orderId\\"}, {\\"type\\":\\"int\\", \\"attr_name\\":\\"orderType\\", \\"map_key\\":\\"listType\\"}]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PPDOrderListViewController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strong"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" UILabel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("titleLabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@implementation")]),t._v(" PPDOrderListViewController\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("编译后数据会在数据段中指定的section中")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/2017/annotation_3.png",alt:"annotation_3"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("根据大小端转换得到内存地址, 查看内存地址0X100000424E和0x1000439A中的数据")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/2017/annotation_4.png",alt:"annotation_4"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("原理：我们的二进制文件（windows的PE, linux的ELF, iOS的Mach-O）都有相应的格式，程序编译后代码在.text，数据在.data段，我们通过声明一个字符串在data段的特定section里（默认在__cstring这个section中）。runtime时，我们可以通过"),a("code",[t._v("getsectiondata")]),t._v("来获取某个二进制文件中指定section的内容。这样就能从代码中获取配置，完成注册。")])]),t._v(" "),a("h4",{attrs:{id:"rewrite引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewrite引擎"}},[t._v("#")]),t._v(" Rewrite引擎")]),t._v(" "),a("p",[t._v("首先，无论是Native还是Web，在App中他们两两之间的跳转都被统跳协议托管，而统跳协议在执行跳转操作之前会把原始URL放入Rewrite引擎中做一次Rewrite操作。这样一来，Rewrite引擎就根据配置规则，把原始URL转换成适用于App的目标URL，实现了URL表现平台一致性。")]),t._v(" "),a("p",[t._v("Rewrite引擎模拟Web容器（Apache/Nginx等）的Rewrite配置，根据配置把传入的原始URL进行重写，返回重写后的目标URL，交给统跳协议处理。")]),t._v(" "),a("p",[t._v("配置是通过正则表达式描述的Rewrite规则列表，这份列表通过App的配置中心实现动态更新。")]),t._v(" "),a("h3",{attrs:{id:"依赖解耦和工程解耦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖解耦和工程解耦"}},[t._v("#")]),t._v(" 依赖解耦和工程解耦")]),t._v(" "),a("p",[t._v("BeeHive是一个运行时框架，主要解决依赖耦合和工程耦合。")]),t._v(" "),a("p",[t._v("BeeHive（BeeHive已经开源，可以在Github上看到源码：https://github.com/alibaba/BeeHive）")]),t._v(" "),a("p",[t._v("BeeHive的原理是，每一个对外提供服务的模块，需要注册一个抽象接口到Beehive提供的Interfaces（接口池）。注意，在这个池子里只有抽象接口。")]),t._v(" "),a("p",[t._v("开发阶段，调用方依赖接口池中响应的接口，并以接口为参数，通过BeeHive提供的工厂方法获取一个服务实例，这个实例可以正常进行服务。")]),t._v(" "),a("p",[t._v("运行时阶段，BeeHive工厂方法根据服务的注册配置，构造服务实例。若：当前的运行环境没有依赖提供服务的模块，则返回空；若：当前运行环境依赖关系完整，则开始构造服务，并返回。")]),t._v(" "),a("h3",{attrs:{id:"beehive和统跳-rewrite的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beehive和统跳-rewrite的区别"}},[t._v("#")]),t._v(" BeeHive和统跳&Rewrite的区别")]),t._v(" "),a("p",[t._v("BeeHive和统跳协议的目的都是解耦，然后二者所关注的重心不同。")]),t._v(" "),a("ul",[a("li",[t._v("统跳主要为界面解耦服务，业务要求界面链路的强动态性；")]),t._v(" "),a("li",[t._v("Beehive则为模块解耦，解决模块强依赖带来的开发阶段痛苦。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);