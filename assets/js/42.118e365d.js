(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{574:function(v,t,a){"use strict";a.r(t);var _=a(7),e=Object(_.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("2017年已经过完，终于有时间写下总结，一直想写，却一直不知从何处下手。在2018年的第一天为整个去年画上一个句号吧。")]),v._v(" "),a("h3",{attrs:{id:"工作方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作方面"}},[v._v("#")]),v._v(" 工作方面")]),v._v(" "),a("p",[v._v("过完春节，开始积极面试，整个春节都是待业状态，并没有什么心情去旅行。以前计划的再好，待业的时候取西藏，去东北，结果真到待业的时候，是并没有什么心情出去的，而且压力也会变大。")]),v._v(" "),a("p",[v._v("经过一段时间的面试，最终选择了拍拍贷。拍拍贷有好几个产品线，总的来说分为理财和借款，主要是借款的产品线比较多，针对不同层次的人群会有些细分，也有现金贷业务。每个产品线都有独立的App，甚至借款还有给第三方接入的SDK。理财App为2014年开始开发，从WebView到Native，然后就一直持续开发到现在，随着版本的迭代，文件、代码越来越多，全部拥挤在一起。而借款等其他App的开始均是将理财App复制了一份，在此基础上进行开发。每个App的迭代速度基本上为每个月一个版本，持续不断的业务迭代，开发人员也不多，没有精力进行模块解耦，代码优化。以上为接触到的现状。")]),v._v(" "),a("p",[v._v("根据以往的经验结合一线公司App的主流开发方式，我们最终选择组件化开发。")]),v._v(" "),a("h4",{attrs:{id:"组件化进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化进程"}},[v._v("#")]),v._v(" 组件化进程")]),v._v(" "),a("p",[v._v("我们首先拿理财App进行组件化改造，改变原有的开发方式。所有模块均为一个个独立的组件，结合CocoaPods进行依赖管理，而每个组件也使用CocoaPods进行创建开发，最终实现组件独立开发、独立测试、独立发布，而主工程形成空壳，称之为壳工程。")]),v._v(" "),a("p",[v._v("要想到达以上目的，需要对现有代码进行拆分。首先将App按照业务功能和非业务功能性进行粗暴的划分。")]),v._v(" "),a("ul",[a("li",[v._v("非业务功能按照功能职责创建出基础组件，比如：网络、路由、Utils，JSBridge，加解密等，这些为基础组件，可以被上层业务组件进行依赖。")]),v._v(" "),a("li",[v._v("对于业务功能又可以再次细分，分为通用业务功能和非通用业务功能。之所以如此划分，是因为一些业务共在公司所有App直接都是可以通用的，比如推送、Passport、SSL安全证书下发等。而非通用业务功能就为App特有的业务，比如散标、债券转让、个人中心等等。")])]),v._v(" "),a("p",[v._v("在理论上是可以这么拆分，但在实际执行上并没有那么简单，因为要达到组件的独立开发，独立发布，需要对所有功能进行解耦。主要分两个方面进行：")]),v._v(" "),a("ul",[a("li",[v._v("页面解耦，传统A页面跳转到B页面的做法为在A中创建B的实例，然后进行跳转，这样A页面就会对B页面形成引用关系，如果A和B属于不同的业务组件，那组件之间就形成了依赖关系。解决这种页面跳转的耦合，我们选择是用了路由：PPDBLRouter，首先页面使用URI的方式注册路由地址、对象以及属性映射关系。其次，可以通过路由打开页面或者获取页面对象。")]),v._v(" "),a("li",[v._v("功能解耦，比如组件A中使用到组件B中的一个类里的一个方法，若直接调用便形成了依赖。我们选择使用阿里开源的BeeHive，组件将对外提供的功能注册为Service，且全部以Protocol的方式放入到通用的PPDBIZProtocol组件中，其他组件依赖此通用业务组件。具体方法可以参考BeeHive的Demo。")])]),v._v(" "),a("p",[v._v("就目前App开发，多多少少都会有H5页面，像电商类的会更多，这就产生H5和Native交互的问题。我们在WebViewJavaScriptBridge的基础上又进行了优化和改造创建了自己的PPDBLWebViewJSBridge，将Handler的注册方式进行优化，使用注解的方式来注册Handler和JS调用方法，并进行统一管理。目前只提供了H5和Native的交互通道，后续可以参照腾讯的开源项目VasSonic进行加载优化。")]),v._v(" "),a("h4",{attrs:{id:"执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[v._v("#")]),v._v(" 执行")]),v._v(" "),a("p",[v._v("以上为简单理论上的组件化进程描述，而实际执行过程中遇到了各种各样的阻力、困难和坑。")]),v._v(" "),a("ul",[a("li",[v._v("组件化的理解，我们为什么要做组件化，团队中很多人可能会不理解，我们目前也能够满足业务需求，也能够进行正常的版本迭代，为什么要做组件化？其实做对于做前端的人员来说这个东西并不陌生，比如使用React、Vue开发，都是组件化的开发方式。而对于后端的人员来说，也是微服务，而对于移动端的人员呢？前期当然可以粗暴一个Project开发所有功能，而随着迭代越多，功能越多，我们也需要将各个功能分离，形成组件。")]),v._v(" "),a("li",[v._v("开发方式的转变，移动端不像前端和后端都有框架，前端又React、Vue，后端有Spring Cloud、Dubbo。而我们移动端只有依赖管理工具而已。我们只能借助依赖管理工具进行组件话开发以及组件依赖，iOS使用CocoaPods，Android使用Maven。开发方式的转变，现有的开发人员肯定会有转变过程以及阻力，需要反复沟通和讲解。")])]),v._v(" "),a("h4",{attrs:{id:"平台化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台化"}},[v._v("#")]),v._v(" 平台化")]),v._v(" "),a("p",[v._v("组件化之后，需要对组件进行管理、App管理、持续集成、内测发布等。将前期的脚本、插件、代码检查等放到服务端去执行，更加规范App的管理、组件的管理以及发布等。目前已经在稳步开发中。")]),v._v(" "),a("h3",{attrs:{id:"生活方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生活方面"}},[v._v("#")]),v._v(" 生活方面")]),v._v(" "),a("p",[v._v("在生活上可谓是经历了不堪回首的一年。")]),v._v(" "),a("h4",{attrs:{id:"感情生活"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感情生活"}},[v._v("#")]),v._v(" 感情生活")]),v._v(" "),a("p",[v._v('过年初四去了女朋友家（现在为前女友），第一次对"门当户对"四个字有了深刻的认识，对方父母冷淡的态度让我感觉很不舒服，自然在心理上也就有了防线和距离。反观到我家之后，父母十分的热情，还封了一个好大的红包，我看红包厚厚几乎要塞不下，心想自己的父母对女朋友真不错，事后才知道那个红包基本上是农村父母三个月的收入，瞬间心疼自己的父母。')]),v._v(" "),a("p",[v._v("回到上海之后，几次听到前女朋友和父母打电话时让人不愉快的声音，她父母不同意我们在一起，在家给她介绍别的男孩子，当时正值我找工作之际，非常非常不开心。三月份和女朋友闹别扭，也让我有点想放弃的念头，最终选择了下下策，冷处理，最后分手。分手的那一刻才意识到自己内心对这段感情有多深，而对方却已经没有感情了。天真的以为能够挽回，还总是请对方吃饭，送她回家，对方也不拒绝，更坚定了我想挽回这段感情的念头，而现实是你只会伤的更深，对方在接受你的好的同时，已经和别人热恋了。我对这种事情的敏感度不高，可能也是内心有想挽回的想法所致。")]),v._v(" "),a("p",[v._v("在一起的时候只顾着爱，而分开之后才有了情。虽然分开和难受，但还是坚强的走了下去，因为很久之前也经历过。每次喝多都会被人一次次揭开伤疤，时间久了，撕开的伤疤便不会流血了，伤疤确实留在那里，而后才能淡然处之。因为感情的事情是不以人的意志为转移的，最起码对我来说是这样。总有人要走，你留不住，所以想留的人会难过。任谁都无能为力。")]),v._v(" "),a("p",[v._v("十一月底，接到她的电话，告诉我她爱上了别人，告诉我这些让我死心。而可悲的是，她爱上的人要和前女友复合，我深知她的内心也是悲痛的。电话那头是她心痛，电话这头是我心痛，很久很久我是说不出话来的，如鲠在喉。刺软，随口馒头咽下去便好。刺大，找个镊子加出来便好，而硬的刺、锐利的刺、用外力难以取出的刺，则是对人最大的折磨。疾病易愈，心病难医，于是便有了一朝被蛇咬，十年怕井绳。所以很长一段时间都会把自己裹成刺猬。")]),v._v(" "),a("p",[v._v("在感情中用了真情的人，刚分开，总是念念不舍，觉得还有机会破镜重圆，选择等待。分开后的半年，依旧心心念念，也许是因为心中的执拗，咬着牙，继续等。最后才知道那个姑娘分开后不久便有了新欢。心灰意冷了，或许便是解脱。互删好友，祝你幸福。")]),v._v(" "),a("h4",{attrs:{id:"健身生活"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#健身生活"}},[v._v("#")]),v._v(" 健身生活")]),v._v(" "),a("p",[v._v("办了三年的健身卡，立志将自己的一身肉减掉，三个月从72kg减到65kg，坚持每周三次健身房。兄弟们从夏天到冬天，一路烧烤啤酒、老北京刷锅。几乎一度要将减肥大业给荒废，健身也变成了一周一次。")]),v._v(" "),a("p",[v._v("2018年继续加油，管住嘴迈开腿。")])])}),[],!1,null,null,null);t.default=e.exports}}]);