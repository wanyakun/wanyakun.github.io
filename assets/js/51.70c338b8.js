(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{545:function(a,t,s){"use strict";s.r(t);var r=s(7),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"任务和队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务和队列"}},[a._v("#")]),a._v(" 任务和队列")]),a._v(" "),s("h3",{attrs:{id:"任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[a._v("#")]),a._v(" 任务")]),a._v(" "),s("p",[a._v("任务就是需要执行的操作，是GCD中放在block中在线程中执行的那段代码。"),s("br"),a._v("\n任务的执行的方式有同步执行和异步执行两中执行方式。")]),a._v(" "),s("ul",[s("li",[a._v("同步执行：dispatch_sync 阻塞当前线程，直到当前添加到队列中的任务执行结束，才继续往下执行。")]),a._v(" "),s("li",[a._v("异步执行：dispatch_async 不阻塞当前线程")])]),a._v(" "),s("h3",{attrs:{id:"队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[a._v("#")]),a._v(" 队列")]),a._v(" "),s("p",[a._v("在GCD里面队列是指执行任务的等待队列，是用来存放任务的。队列的结构按照FIFO（先进先出）的原则进行执行。GCD的队列分为串行队列和并发队列两种")]),a._v(" "),s("ul",[s("li",[a._v("串行队列：只开启一个线程，每次只能有一个任务执行，等待执行完毕后才会执行下一个任务")]),a._v(" "),s("li",[a._v("并发队列：可以让多个任务同时执行，也就是开启多个线程，让多个任务同时执行。")])]),a._v(" "),s("p",[s("strong",[a._v("注意：")]),a._v("\ndispatch_async异步调用情况\n串行队列：是overcommit的，创建队列会创建1个新的线程\n并发队列：是非overcommit的，不一定会创建新线程，会从线程池的64个线程中获取并使用。所以避免在循环或者递归中新建串行队列。串行队列的会创建新线程，最多512个（不算主线程，number从4开始到515）")]),a._v(" "),s("h3",{attrs:{id:"任务和队列的组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务和队列的组合"}},[a._v("#")]),a._v(" 任务和队列的组合")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th"),a._v(" "),s("th",[a._v("同步执行")]),a._v(" "),s("th",[a._v("异步执行")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("串行队列")]),a._v(" "),s("td",[a._v("同步任务不会开启新的线程，任务串行执行")]),a._v(" "),s("td",[a._v("异步任务有开启新的线程，任务串行执行")])]),a._v(" "),s("tr",[s("td",[a._v("并行队列")]),a._v(" "),s("td",[a._v("同步任务不会开启新的线程，虽然任务在并发队列中，但是系统只默认开启了一个主线程，没有开启子线程，所以任务串行执行")]),a._v(" "),s("td",[a._v("异步任务不一定有开启新的线程，会从线程池的64个线程中获取并使用")])]),a._v(" "),s("tr",[s("td",[a._v("主队列")]),a._v(" "),s("td",[a._v("主队列是一种串行队列，任务在主线程中串行执行，将同步任务添加到主队列中会造成追加的同步任务和主线程中的任务相互等待阻塞主线程，导致死锁")]),a._v(" "),s("td",[a._v("主队列是一种串行队列，任务在主线程中串行执行，即使是追加的异步任务也不会开启新的线程，任务串行执行。")])])])]),a._v(" "),s("h3",{attrs:{id:"线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程池"}},[a._v("#")]),a._v(" 线程池")]),a._v(" "),s("p",[a._v("dispatch_queue 是GCD实现的一种线程池技术。不管是自定义队列、全局队列还是主队列，最终都直接或者间接的依赖12个root队列来执行任务调度。如果按照label来计算总共16个，除上面的12个，就是com.apple.main-thread，还有两个内部管理队列com.apple.libdispatch-manager和com.apple.root.libdispatch-manager，以及runloop的运行队列")]),a._v(" "),s("p",[a._v("一、 全局线程池")]),a._v(" "),s("ol",[s("li",[a._v("主线程池：main queue")]),a._v(" "),s("li",[a._v("其他线程池：")])]),a._v(" "),s("ul",[s("li",[a._v("DISPATCH_QUEUE_PRIORITY_HIGH")]),a._v(" "),s("li",[a._v("DISPATCH_QUEUE_PRIORITY_DEFAULT")]),a._v(" "),s("li",[a._v("DISPATCH_QUEUE_PRIORITY_LOW")]),a._v(" "),s("li",[a._v("DISPATCH_QUEUE_PRIORITY_BACKGROUND")])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("一个池最多支持几个线程同时工作？"),s("br"),a._v("\n64个")])]),a._v(" "),s("p",[a._v("二、自定义线程池")]),a._v(" "),s("p",[a._v("自己创建的queue跟系统的4个全局池模式一样，也是最多64个线程")]),a._v(" "),s("h2",{attrs:{id:"函数方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数方法"}},[a._v("#")]),a._v(" 函数方法")]),a._v(" "),s("h3",{attrs:{id:"dispatch-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-group"}},[a._v("#")]),a._v(" dispatch_group")]),a._v(" "),s("p",[a._v("调度组简单来说就是把异步执行的任务进行分组，等待所有的分组任务都执行完毕后再回到指定的线程执行任务"),s("br"),a._v("\ndispatch_group_a/sync"),s("br"),a._v("\ndispatch_group可以将很多队列添加到一个组，当这个组里所有的任务都执行完了，队列组会通过一个方法通知我们。")]),a._v(" "),s("ol",[s("li",[a._v("dispatch_group是一个初始值为LONG_MAX到信号量，group中的任务完成是判断value是否恢复成初始值")]),a._v(" "),s("li",[a._v("dispatch_group_enter和dispatch_group_leave必须成对使用并支持嵌套")]),a._v(" "),s("li",[a._v("如果dispatch_group_enter比dispatch_group_leave多，由于value不等于初始值（dsema_orig）不会走到唤醒逻辑，dispatch_group_notify中的任务无法执行或者dispatch_group_wait收不到信号而卡住线程。如果是dispatch_group_leave多，则会引起崩溃。")])]),a._v(" "),s("h3",{attrs:{id:"dispatch-barrier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-barrier"}},[a._v("#")]),a._v(" dispatch_barrier")]),a._v(" "),s("p",[a._v("有的时候我们需要异步执行两组操作，等待第一组执行完成后才回去执行第二组操作，这个时候栅栏方法就起作用了."),s("br"),a._v("\n简单来说dispatch_barrier_async或dispatch_barrier_sync将异步任务分成了两个组，执行完第一组后，再执行自己，然后执行队列中剩余的任务")]),a._v(" "),s("p",[a._v("dispatch_barrier允许在一个并发队列中创建一个同步点。当在并发队列中遇到barrier，它会延迟执行barrier的block，等待所有在barrier之前提交的blocks执行结束。这时，barrier block自己开始执行。之后，队列继续正常执行操作。"),s("br"),a._v("\n这里所指的并发队列应该是自己通过dispatch_queue_create函数创建的。如果你传的是一个串行队列或者全局并发队列，这个函数就等同于dispatch_a/sync函数。")]),a._v(" "),s("h3",{attrs:{id:"dispatch-semaphore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-semaphore"}},[a._v("#")]),a._v(" dispatch_semaphore")]),a._v(" "),s("p",[a._v("GCD中的信号量是持有计数的信号。当信号量小于0时就会一直等待即阻塞所在线程，否则就可以正常执行。信号量可以保持线程的同步，将异步执行任务转换成同步任务执行， 同时保持线程的安全。")]),a._v(" "),s("ul",[s("li",[a._v("dispatch_semaphore_create：创建一个 Semaphore 并初始化信号的总量")]),a._v(" "),s("li",[a._v("dispatch_semaphore_signal：发送一个信号，让信号总量加 1")]),a._v(" "),s("li",[a._v("dispatch_semaphore_wait：可以使总信号量减 1，信号总量小于 0 时就会一直等待（阻塞所在线程），否则就可以正常执行。")])]),a._v(" "),s("h3",{attrs:{id:"dispatch-after"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-after"}},[a._v("#")]),a._v(" dispatch_after")]),a._v(" "),s("p",[a._v("dispatch_after 方法并不是在指定时间之后才开始执行处理，而是在指定时间之后将任务追加到主队列中")]),a._v(" "),s("h3",{attrs:{id:"dispatch-once"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-once"}},[a._v("#")]),a._v(" dispatch_once")]),a._v(" "),s("p",[a._v("GCD提供了只执行一次的方法dispatch_once，这个方法在我们创建单例的时候回经常用到。dispatch_once方法可以保证一段代码在程序运行过程中只被调用一次，而且在多线程环境下可以保证线程安全。")]),a._v(" "),s("div",{staticClass:"language-objc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-objc"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("instancetype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("shareInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" XXX "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" nil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" dispatch_once_t onceToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dispatch_once")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("onceToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("XXX alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"dispatch-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dispatch-source"}},[a._v("#")]),a._v(" dispatch_source")]),a._v(" "),s("p",[s("a",{attrs:{href:"/blogs/code/2016/2016-12-20-ios-dispatch-source"}},[a._v("调度源")])])])}),[],!1,null,null,null);t.default=_.exports}}]);