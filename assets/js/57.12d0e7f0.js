(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{521:function(t,r,a){"use strict";a.r(r);var e=a(4),v=function(t){t.options.__data__block__={flowchart_382ee1c9:"op1=>operation: Parsing HTML\nto construct\nthe DOM Tree\nop2=>operation: Render Tree\nconstruction\nop3=>operation: Layout of the\nrender tree\nop4=>operation: Painting the\nrender tree\n\nop1(right)->op2(right)->op3(right)->op4",flowchart_382ee243:"op1=>operation: 浏览器从远程\n下载 Byte\nop2=>operation: 根据相应的编码 \n(如 utf8) 转化为字符串\nop3=>operation: 通过 AST 解\n析为 Token\nop4=>operation: 生成 Node\nop4=>operation: 生成 DOM\n\nop1(right)->op2(right)->op3(right)->op4(right)->op5"}},_=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),a("p",[t._v("向服务器发出请求，在浏览器窗口中展示您选择的网络资源，包括HTML，图片，PDF等，资源的位置由 URI（统一资源标示符）指定。")]),t._v(" "),a("h2",{attrs:{id:"结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),a("ul",[a("li",[t._v("用户界面：包括地址栏、前进/后退按钮、书签等")]),t._v(" "),a("li",[t._v("浏览器引擎：在用户界面和渲染引擎之间传送指令")]),t._v(" "),a("li",[t._v("渲染引擎：负责渲染请求的内容。如果请求的内容是 HTML，它就负责解析 HTML 和 CSS 内容，并将解析后的内容显示在屏幕上。")]),t._v(" "),a("li",[t._v("网络：用于网络调用，比如 HTTP 请求")]),t._v(" "),a("li",[t._v("用户界面后端：用于绘制基本的窗口小部件，比如组合框和窗口。其公开了与平台无关的通用接口，而在底层使用操作系统的用户界面方法。")]),t._v(" "),a("li",[t._v("JavaScript解释器：用于解释和执行JavaScript代码")]),t._v(" "),a("li",[t._v("数据存储：持久层，浏览器需要在硬盘上保存各种数据，例如 Cookie。新的 HTML 规范 (HTML5) 定义了“网络数据库”，这是一个完整（但是轻便）的浏览器内数据库")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/browser.png",alt:"browser"}})]),t._v(" "),a("p",[t._v("注意：Chrome 浏览器的每个标签页都分别对应一个渲染引擎实例。每个标签页都是一个独立的进程。")]),t._v(" "),a("h2",{attrs:{id:"关键渲染路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键渲染路径"}},[t._v("#")]),t._v(" 关键渲染路径")]),t._v(" "),a("p",[t._v("关键渲染路径(Critical Rendering Path)是浏览器将 HTML，CSS 和 JavaScript 转换为屏幕上的像素所经历的步骤序列。优化关键渲染路径可提高渲染性能。")]),t._v(" "),a("FlowChart",{attrs:{id:"flowchart_382ee1c9",code:t.$dataBlock.flowchart_382ee1c9,preset:"vue"}}),a("ul",[a("li",[t._v("在解析 HTML 时会创建 DOM，HTML 可以请求 JavaScript，而 JavaScript 反过来，又可以更改 DOM。HTML 包含或请求样式，依次来构建 CSSOM。")]),t._v(" "),a("li",[t._v("浏览器引擎将两者结合起来以创建 Render Tree (渲染树)，")]),t._v(" "),a("li",[t._v("Layout(布局)确定页面上所有内容的大小和位置，")]),t._v(" "),a("li",[t._v("确定布局后，将像素 Paint (绘制)到屏幕上。")])]),t._v(" "),a("p",[t._v("需要着重指出的是，这是一个渐进的过程。为达到更好的用户体验，渲染引擎会力求尽快将内容显示在屏幕上。它不必等到整个 HTML 文档解析完毕之后，就会开始构建渲染树和设置布局。在不断接收和处理来自网络的其余内容的同时，渲染引擎会将部分内容解析并显示出来")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/webkit.png",alt:"webkit"}})]),t._v(" "),a("p",[t._v("优化关键渲染路径可以缩短首次渲染的时间。了解和优化关键渲染路径对于确保重排和重绘可以每秒 60 帧的速度进行")]),t._v(" "),a("h3",{attrs:{id:"生成dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成dom"}},[t._v("#")]),t._v(" 生成DOM")]),t._v(" "),a("p",[t._v("DOM 构建是增量的。")]),t._v(" "),a("FlowChart",{attrs:{id:"flowchart_382ee243",code:t.$dataBlock.flowchart_382ee243,preset:"vue"}}),a("p",[t._v("单个 DOM 节点以 startTag token 开始，以 endTag token 结束。节点包含有关 HTML 元素的所有相关信息。该信息是使用 token 描述的。节点根据 token 层次结构连接到 DOM 树中。"),a("br"),t._v("\n如果另一组 startTag 和 endTag token 位于一组 startTag 和 endTag 之间，则在节点内有一个节点，这就是我们定义 DOM 树层次结构的方式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/dom-tree.png",alt:"dom-tree"}})]),t._v(" "),a("blockquote",[a("p",[t._v("DOM Tree是如何构建的？")]),t._v(" "),a("ol",[a("li",[t._v("转码，浏览器将接收到二进制数据按照指定编码格式转化为HTML字符串")]),t._v(" "),a("li",[t._v("生成Tokens，之后开始Parser，浏览器会将HTML字符串解析成Tokens")]),t._v(" "),a("li",[t._v("构建Nodes，对Node添加特定的属性，通过指针确定Node的父，子，兄弟关系和所属treeScope")]),t._v(" "),a("li",[t._v("生成DOM树，通过node包含的指针确定关系，构建出DOM树")])])]),t._v(" "),a("h3",{attrs:{id:"生成cssom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成cssom"}},[t._v("#")]),t._v(" 生成CSSOM")]),t._v(" "),a("p",[t._v("浏览器解析 css 文件，生成 CSSOM。CSSOM 包含了页面所有的样式，也就是如何展示 DOM 的信息。"),a("br"),t._v("\nCSSOM 跟 DOM 很像，但是不同。"),a("br"),t._v("\nDOM 构造是增量的，CSSOM 却不是。CSS 是渲染阻塞的：浏览器会阻塞页面渲染直到它接收和执行了所有的 CSS。"),a("br"),t._v(" "),a("strong",[t._v("CSS 是渲染阻塞是因为规则可以被覆盖，所以内容不能被渲染直到 CSSOM 的完成")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/cssom.png",alt:"cssom"}})]),t._v(" "),a("h3",{attrs:{id:"render-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render-tree"}},[t._v("#")]),t._v(" Render Tree")]),t._v(" "),a("p",[t._v("渲染树(Render Tree)包括了内容和样式：DOM 和 CSSOM 树结合为渲染树。"),a("br"),t._v("\n为了构造渲染树，浏览器检查每个节点，从 DOM 树的根节点开始，并且决定哪些 CSS 规则被添加。"),a("br"),t._v("\n渲染树只包含了可见内容(body 里的部分)。"),a("br"),t._v("\nHead(通常)不包含任何可见信息，因此不会被包含在渲染树种。如果有元素上有 display: none;，它本身和其后代都不会出现在渲染树中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/render-tree.png",alt:"render-tree"}})]),t._v(" "),a("h3",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),a("p",[t._v("一旦渲染树被构建，布局变成了可能。布局取决于屏幕的尺寸。布局这个步骤决定了在哪里和如何在页面上放置元素，决定了每个元素的宽和高，以及他们之间的相关性。"),a("br"),t._v("\n**提示：**一个页面渲染在不同尺寸的屏幕上，比如渲染在移动端和 PC 端上，展示有差异，在前面的步骤都是不变的，只有在布局的时候才会根据屏幕尺寸进行差异化处理。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/layout.png",alt:"layout"}})]),t._v(" "),a("h3",{attrs:{id:"paint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paint"}},[t._v("#")]),t._v(" Paint")]),t._v(" "),a("p",[t._v("最后一步是将像素绘制在屏幕上，栅格化所有元素，将元素转换为实际像素。"),a("br"),t._v("\n一旦渲染树创建并且布局完成，像素就可以被绘制在屏幕上。加载时，整个屏幕被绘制出来。之后，只有受影响的屏幕区域会被重绘，浏览器被优化为只重绘需要绘制的最小区域。"),a("br"),t._v("\n绘制时间取决于何种类型的更新被附加在渲染树上。绘制是一个非常快的过程，所以聚焦在提升性能时这大概不是最有效的部分。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/paint.png",alt:"paint"}})]),t._v(" "),a("h2",{attrs:{id:"重排-reflow-和重绘-repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排-reflow-和重绘-repaint"}},[t._v("#")]),t._v(" 重排(Reflow)和重绘(Repaint)")]),t._v(" "),a("p",[t._v("重排(Reflow)：元素的 位置发生变动 时发生重排，也叫回流。此时在 Layout 阶段，计算每一个元素在设备视口内的确切位置和大小。当一个元素位置发生变化时，其父元素及其后边的元素位置都可能发生变化，代价极高。"),a("br"),t._v("\n在回答什么是重排的时候，关键不是位置发生变动，这只是原因(Why)，而不是 What。What 是重新计算每个元素在设备视口内的确切位置和大小。")]),t._v(" "),a("p",[t._v("重绘(Repaint): 元素的 样式发生变动 ，但是位置没有改变。此时在关键渲染路径中的 Paint 阶段，将渲染树中的每个节点转换成屏幕上的实际像素，这一步通常称为绘制或栅格化。"),a("br"),t._v("\n而回答什么是重绘的关键点在于在关键渲染路径中的 Paint 阶段，将渲染树中的每个节点转换成屏幕上的实际像素，这才是 What。")]),t._v(" "),a("h2",{attrs:{id:"javascript-与关键路径渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-与关键路径渲染"}},[t._v("#")]),t._v(" JavaScript 与关键路径渲染")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/webkit.png",alt:"webkit"}})]),t._v(" "),a("p",[t._v("从图中可以看到JavaScript 的执行是在生成渲染树之前的。这也是为什么 JavaScript 的加载、解析与执行会阻塞 DOM 的构建，阻塞页面的渲染。"),a("br"),t._v("\n这其实是非常合理的"),a("br"),t._v("\n因为 JavaScript 可以修改网页的内容，它可以更改 DOM，如果不阻塞，那么这边在构建 DOM，那边 JavaScript 在改 DOM，如何保障最终得到的 DOM 是否正确?"),a("br"),t._v("\n而且在 JS 中前一秒获取到的 DOM 和后一秒获取到的 DOM 不一样是什么鬼?它会产生一系列问题，所以 JS 是阻塞的，它会阻塞 DOM 的构建流程，所以在 JS 中无法获取 JS 后面的元素，因为 DOM 还没构建到那。"),a("br"),t._v("\n这就是为什么我们需要把 js 放在页面底部的原因，尽量保证 DOM 树生成完毕再去加载 JS，从而出现这样的效果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/front/explorer/optimized-rendering.png",alt:"optimized-rendering"}})]),t._v(" "),a("h2",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("p",[t._v("基于以上的分析，简单的性能优化的方式如下：")]),t._v(" "),a("ul",[a("li",[t._v("减少 DOM 树渲染时间(譬如降低 HTML 层级、标签尽量语义化等等)。")]),t._v(" "),a("li",[t._v("减少 CSSOM 树渲染时间(降低选择器层级等等)。")]),t._v(" "),a("li",[t._v("减少 HTTP 请求次数及请求大小。")]),t._v(" "),a("li",[t._v("将 css 放在页面开始位置。")]),t._v(" "),a("li",[t._v("将 js 放在页面底部位置，并尽可能用 defer 或者 async 避免阻塞的 js 加载，确保 DOM 树生成完才会去加载 JS。")]),t._v(" "),a("li",[t._v("用 link 替代@import。")]),t._v(" "),a("li",[t._v("如果页面 css 较少，尽量使用内嵌式。")]),t._v(" "),a("li",[t._v("为了减少白屏时间，页面加载时先快速生成一个 DOM 树。")])]),t._v(" "),a("h3",{attrs:{id:"正确的性能优化思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确的性能优化思路"}},[t._v("#")]),t._v(" 正确的性能优化思路")]),t._v(" "),a("p",[t._v("当你遇到一个性能问题的时候，绝对不是去网上找一些性能优化的方法，然后不管三七二十一，就整上去，这样大概率是没啥用的。\n"),a("strong",[t._v("第一件事情，一定是要先分析性能的瓶颈在哪里。")])]),t._v(" "),a("p",[t._v("比如你遇到了首屏加载的性能问题，你就要根据开发者工具，比如看 network 是否是由于资源体积太大导致请求慢，还是后端处理慢，还是资源太多了加载慢。"),a("br"),t._v("\n如果这些都不是，可能是因为 渲染慢，再去分析 performce 面板，看一下是 js 执行慢，还是啥原因。"),a("br"),t._v("\n再比如你遇到了 webpack 的性能问题，比如打包的资源太大了，你要去解决这个问题，你也不应该直接去随便找几个优化的方法就开始整。而是先应该通过 webpack-bundle-analyzer 插件去分析包大的原因是什么?")]),t._v(" "),a("ul",[a("li",[t._v("是依赖包太大了，没有做按需加载?")]),t._v(" "),a("li",[t._v("还是重复的打包了几个版本的相同依赖?")]),t._v(" "),a("li",[t._v("还是因为 src 太大了，是否需要做个动态加载?")]),t._v(" "),a("li",[t._v("还是因为其他的，通过 webpack-bundle-analyzer 分析出来的组成内容去找问题。")])]),t._v(" "),a("p",[t._v("遇到问题应该先通过各种分析工具，找到出现性能瓶颈的原因，再根据这个原因去寻找对应的优化方式，要对症下药。")]),t._v(" "),a("h2",{attrs:{id:"回答如何理解重排和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回答如何理解重排和重绘"}},[t._v("#")]),t._v(" 回答如何理解重排和重绘?")]),t._v(" "),a("p",[t._v("重排和重绘是浏览器关键渲染路径上的两个节点， 浏览器的关键渲染路径就是 DOM 和 CSSOM 生成渲染树，然后根据渲染树通过一个布局(也叫 layout)步骤来确定页面上所有内容的大小和位置，确定布局后，将像素 绘制 (也叫 Paint)到屏幕上。")]),t._v(" "),a("p",[t._v("其中重排就是当元素的位置发生变动的时候，浏览器重新执行布局这个步骤，来重新确定页面上内容的大小和位置，确定完之后就会进行重新绘制到屏幕上，所以重排一定会导致重绘。")]),t._v(" "),a("p",[t._v("如果元素位置没有发生变动，仅仅只是样式发生变动，这个时候浏览器重新渲染的时候会跳过布局步骤，直接进入绘制步骤，这就是重绘，所以重绘不一定会导致重排。")]),t._v(" "),a("h3",{attrs:{id:"什么情况下触发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下触发"}},[t._v("#")]),t._v(" 什么情况下触发")]),t._v(" "),a("p",[t._v("任何改变用来构建渲染树的信息都会导致一次重排或重绘")]),t._v(" "),a("ol",[a("li",[t._v("添加、删除、更新DOM节点")]),t._v(" "),a("li",[t._v("通过display：none隐藏一个DOM节点 - 触发重绘和重排")]),t._v(" "),a("li",[t._v("通过visibility：hidden隐藏一个DOM节点- 只会触发重绘，因为没有几何变化")]),t._v(" "),a("li",[t._v("移动或者给页面中的DOM节点添加动画")]),t._v(" "),a("li",[t._v("添加样式表，调整样式属性")]),t._v(" "),a("li",[t._v("用户行为，例如调整窗口大小，改变字号，或者滚动")])]),t._v(" "),a("h3",{attrs:{id:"如何避免"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何避免"}},[t._v("#")]),t._v(" 如何避免")]),t._v(" "),a("ol",[a("li",[t._v("集中改变样式，不要一条一条的修改DOM的样式")]),t._v(" "),a("li",[t._v("不要把DOM节点的属性值放到循环里当做循环变量")]),t._v(" "),a("li",[t._v("为动画的HTML元件，使用fixed或absoult的position，修改css时不会reflow")]),t._v(" "),a("li",[t._v("不使用table布局，可能很小的一个改动就构成整个table的重新布局")]),t._v(" "),a("li",[t._v("尽量只修改position:absoult或fixed的元素，对其他元素不影响")]),t._v(" "),a("li",[t._v("动画开启GPU加速，translate使用3d变化")]),t._v(" "),a("li",[t._v("提升为合成层\n"),a("ul",[a("li",[t._v("合成层的位图会交给GPU处理，比CPU速度快")]),t._v(" "),a("li",[t._v("当重绘时只重绘本身，不会影响其他层")]),t._v(" "),a("li",[t._v("对transform和opacity效果，不会触发layout和paint")]),t._v(" "),a("li",[t._v("提升合成层的最好方式是使用css的will-change属性： will-change: transform;")])])])])],1)}),[],!1,null,null,null);"function"==typeof v&&v(_);r.default=_.exports}}]);