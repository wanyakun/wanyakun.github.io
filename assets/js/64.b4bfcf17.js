(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{505:function(a,t,r){"use strict";r.r(t);var e=r(7),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"uiview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uiview"}},[a._v("#")]),a._v(" UIView")]),a._v(" "),r("p",[a._v("除负责相应事件（继承自UIResponder）外，它还是一个对CALayer的底层封装。可以说它们的相似行为都依赖于CALayer的实现，UIView只不过是封装了它的高级接口而已。")]),a._v(" "),r("h2",{attrs:{id:"calayer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calayer"}},[a._v("#")]),a._v(" CALayer")]),a._v(" "),r("h3",{attrs:{id:"概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),r("p",[a._v("图层（CALayer）的主要工作是管理您提供的可视内容，图层本身可以设置可视属性（例如背景颜色，边框和阴影）。除了管理可视内容外，还维护有关内容几何的信息（例如：位置，大小和变换），用于在屏幕上显示该内容。\n管理基于图像内容的对象，允许您对该内容执行动画。继承自NSObject，不能够响应事件。")]),a._v(" "),r("h3",{attrs:{id:"calayerdelegate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calayerdelegate"}},[a._v("#")]),a._v(" CALayerDelegate")]),a._v(" "),r("p",[r("strong",[a._v("作用：")])]),a._v(" "),r("p",[a._v("你可以使用delegate对象来提供图层的内容，处理任何子图层的布局，并提供自定义操作以响应与图层相关的更改。如果图层是由UIView创建的，则该UIView对象通常会自动指定为图层的委托。")]),a._v(" "),r("p",[r("strong",[a._v("注意：")])]),a._v(" "),r("ol",[r("li",[a._v("在iOS中，如果图层与UIView对象关联，则必须将此属性设置为拥有该图层的UIView对象")]),a._v(" "),r("li",[a._v("delegate只是另外一种为图层提供处理内容的方式，并不是唯一的，UIView的显示跟它图层委托没有太大关系。")])]),a._v(" "),r("h3",{attrs:{id:"代理方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代理方法"}},[a._v("#")]),a._v(" 代理方法")]),a._v(" "),r("h4",{attrs:{id:"displaylayer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#displaylayer"}},[a._v("#")]),a._v(" displayLayer：")]),a._v(" "),r("p",[a._v("当图层标记为需要更新时，调用此方法，例如：为图层设置contents属性")]),a._v(" "),r("h4",{attrs:{id:"drawlayer-incontext"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drawlayer-incontext"}},[a._v("#")]),a._v(" drawLayer：inContext")]),a._v(" "),r("ol",[r("li",[a._v("被drawInContext调用，可以使用CGContext来实现显示过程")]),a._v(" "),r("li",[a._v("和UIView的drawRect的关系\n"),r("ul",[r("li",[a._v("先调用CALayer的drawLayer：InContext")]),a._v(" "),r("li",[a._v("随后在super.drawLayer:InContext里面创建并配置好绘图环境")]),a._v(" "),r("li",[a._v("通过图层的super.drawLayer:InContext调用view的drawRect方法。注意：view的显示不依赖于UIGraphicsGetCurrentContext。只有在绘制的时候才需要。")])])]),a._v(" "),r("li",[a._v("和contents之间的关系: UIView的drawRect方法的所有绘制操作，都被保存在其图层的contents属性中，这也是为什么要CALayer提供绘图环境。")]),a._v(" "),r("li",[a._v("如果实现了displayLayer，此方法将不再调用")])]),a._v(" "),r("h4",{attrs:{id:"layerwilldraw"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#layerwilldraw"}},[a._v("#")]),a._v(" layerwillDraw：")]),a._v(" "),r("p",[a._v("在drawLayer：inContext调用之前调用，可以使用此方法配置影响内容的任何图层状态（例如contentsFormat， isOpaque）")]),a._v(" "),r("h4",{attrs:{id:"layoutsublayersoflayer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#layoutsublayersoflayer"}},[a._v("#")]),a._v(" layoutSublayersOfLayer：")]),a._v(" "),r("p",[a._v("和UIView的layoutSubviews类似，当发现边界发生变化并且其sublayers可能需要重新排列时（例如通过frame改变大小），将调用此方法")]),a._v(" "),r("h4",{attrs:{id:"actionforlayer-forkey"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actionforlayer-forkey"}},[a._v("#")]),a._v(" actionForLayer：forKey：")]),a._v(" "),r("p",[a._v("CALayer之所以能够执行动画，是因为它被定义在CoreAnimation框架中，是CoreAnimation执行操作的核心。也就是说CALayer除了负责显示内容外，会能执行动画（其实是CoreAnimation与硬件之间的操作在执行，CALayer负责存储操作所需要的数据，相当于Model）。")]),a._v(" "),r("h3",{attrs:{id:"calayer坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calayer坐标系"}},[a._v("#")]),a._v(" CALayer坐标系")]),a._v(" "),r("p",[a._v("UIView使用的所谓frame、bounds、center等属性，其实都是从CALayer中返回的，而frame只是CALayer中的一个计算型属性而已。")]),a._v(" "),r("h4",{attrs:{id:"anchorpoint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#anchorpoint"}},[a._v("#")]),a._v(" anchorPoint")]),a._v(" "),r("p",[a._v("锚点是基于图层内部坐标的，取值范围（0-1，0-1），可以看作是bounds的缩放因子，中间的（0.5，0.5）是每个图层的anchorPoint默认值。而左上角的（0.0，0.0）被视为anchorPoint的起始点。任何基于图层的几何操作都是发生在锚点之上，例如：旋转。更改锚点位置，旋转会围绕新点旋转。")]),a._v(" "),r("h4",{attrs:{id:"position"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[a._v("#")]),a._v(" position")]),a._v(" "),r("p",[a._v("锚点在父图层中的位置")]),a._v(" "),r("div",{staticClass:"language-objc line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-objc"}},[r("code",[a._v("position"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" frame"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("origin"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" anchorPoint"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("bounds"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("size"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width\nposition"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("y "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" frame"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("origin"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("y "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" anchorPoint"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("y"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("bounds"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("size"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("height\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br")])]),r("p",[a._v("anchorPoint和position之间的关系无论更改谁，对方都不会受影响，受影响的只会是frame.orgin")]),a._v(" "),r("h4",{attrs:{id:"frame"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frame"}},[a._v("#")]),a._v(" frame")]),a._v(" "),r("p",[a._v("frame是一个计算属性，它是从bounds、anchorPoint和position的值中派生出来的。为此属性指定新值时，图层会更改其position和bounds属性以匹配您指定的矩形。")]),a._v(" "),r("h2",{attrs:{id:"二者关系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二者关系"}},[a._v("#")]),a._v(" 二者关系")]),a._v(" "),r("p",[a._v("layer影响视图变化，无论修改layer的可视内容或者几何信息，view都会跟着变化，反之亦是如此。证明：UIView依赖于CALayer得以显示")]),a._v(" "),r("h3",{attrs:{id:"不同点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[a._v("#")]),a._v(" 不同点")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("职责不同")]),a._v(" "),r("ul",[r("li",[a._v("UIView的主要职责是负责接收并响应事件")]),a._v(" "),r("li",[a._v("CALayer的主要职责是负责显示UI")])])]),a._v(" "),r("li",[r("p",[a._v("需要复用")]),a._v(" "),r("ul",[r("li",[a._v("在macOS和App系统上，NSView和UIView虽然行为相似，在实现上却有着显著的区别，却都依赖于CALayer，在这种情况下，只能封装一个CALayer出来。")])])])]),a._v(" "),r("h3",{attrs:{id:"哪些是layer可以完成而view不行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#哪些是layer可以完成而view不行"}},[a._v("#")]),a._v(" 哪些是layer可以完成而view不行")]),a._v(" "),r("p",[a._v("阴影、圆角、彩色边框、3D变换、非矩形结构、透明mask以及非线性动画等")])])}),[],!1,null,null,null);t.default=s.exports}}]);