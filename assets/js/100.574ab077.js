(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{598:function(a,t,l){"use strict";l.r(t);var o=l(4),s=Object(o.a)({},(function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("p",[a._v("这两个方法会经常被问到，主要是调用方式、调用时刻和调用顺序。下面逐个分析和对比。")]),a._v(" "),l("h2",{attrs:{id:"load"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[a._v("#")]),a._v(" Load")]),a._v(" "),l("h3",{attrs:{id:"load方法的调用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#load方法的调用"}},[a._v("#")]),a._v(" Load方法的调用")]),a._v(" "),l("ul",[l("li",[l("strong",[a._v("调用方式：")]),a._v(" 系统自动调用+load方法为直接通过函数地址调用，开发者手动调用+load方法为消息机制"),l("code",[a._v("objc_msgSend")]),a._v("函数调用")]),a._v(" "),l("li",[l("strong",[a._v("调用时刻：")]),a._v(" +load方法会在Runtime加载类和分类时调用，不管有没有用到这些类，在程序运行起来的时候都会加载进内存，并调用+load方法")]),a._v(" "),l("li",[l("strong",[a._v("调用顺序：")]),a._v(" "),l("ul",[l("li",[a._v("先调用类的+load方法，按照编译先后顺序调用（先编译，先调用），调用子类的+load方法之前会先调用父类的+load方法。")]),a._v(" "),l("li",[a._v("再调用分类的+load方法，按照编译先后顺序调用（先编译，先调用），注意：分类的其他方法是后编译优先调用")])])])]),a._v(" "),l("h3",{attrs:{id:"源码分析"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#源码分析"}},[a._v("#")]),a._v(" 源码分析")])])}),[],!1,null,null,null);t.default=s.exports}}]);