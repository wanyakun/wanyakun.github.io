(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{674:function(v,_,t){"use strict";t.r(_);var a=t(4),l=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("在iOS架构开始重构之后，第一步需要做是沉淀一些基础组件，比如Utils，Network，数据加解密等核心方法。其中网络库就是第一步需要做，这里并不记录如何设计网路库，会另外找一篇文章单独去写。这里只记录如何选择网路库设计方案。常见的网路库设计方案分为两种：集约式和离散式。下面一一介绍。")]),v._v(" "),t("h2",{attrs:{id:"集约式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集约式"}},[v._v("#")]),v._v(" 集约式")]),v._v(" "),t("p",[v._v("即项目中的每个请求都会走统一的入口，对外暴露了请求的 URL 和 Param 以及请求方式，入口一般都是通过单例来实现，AFNetworking 的官方 demo 就是采用的集约式的方式对网络请求进行的封装，也是目前比较流行的网络请求方式。")]),v._v(" "),t("p",[v._v("优点：")]),v._v(" "),t("ul",[t("li",[v._v("使用便捷，能实现快速开发")])]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("ul",[t("li",[v._v("对每个请求的定制型不够强")]),v._v(" "),t("li",[v._v("不方便后期业务拓展")])]),v._v(" "),t("h2",{attrs:{id:"离散式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离散式"}},[v._v("#")]),v._v(" 离散式")]),v._v(" "),t("p",[v._v("即每个网络请求类都是一个对象，它的 URL 以及请求方式和响应方式 均不暴露给外部调用。只能内部通过 重载或实现协议 的方式来指定，外部调用只需要传 Param 即可。")]),v._v(" "),t("p",[v._v("优点：")]),v._v(" "),t("ul",[t("li",[v._v("URL 以及请求和响应方式不暴露给外部，避免外部调用的时候写错")]),v._v(" "),t("li",[v._v("业务方使用起来较简单，业务使用者不需要去关心它的内部实现")]),v._v(" "),t("li",[v._v("可定制性强，可以为每个请求指定请求的超时时间以及缓存的周期")])]),v._v(" "),t("p",[v._v("缺点：")]),v._v(" "),t("ul",[t("li",[v._v("网络层需要业务实现方去写，变相的增加了部分工作量")]),v._v(" "),t("li",[v._v("文件增多")])]),v._v(" "),t("p",[v._v("在初期，由于最初人员较少，且业务变更较频繁，使用集约式请求，非常方便写各个页面的请求等等，能够快速完成开发和上线。不过考虑到为实现业务便捷性以及可拓展性，长远来看，转成离散式的网络请求也是有必要的。而我们这次重构，也是将网路库从集约式改为离散式。")])])}),[],!1,null,null,null);_.default=l.exports}}]);