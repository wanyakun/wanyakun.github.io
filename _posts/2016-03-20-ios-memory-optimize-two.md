---
title: iOSApp内存优化（二）
tags: [iOS, 优化]
categories: [iOS]
date: 2016-03-20 22:20:00
---

在我们的app的业务层中使用了MVVM架构，为了更好的实现MVVM，我们在CocoaPods中引入了[ReactiveCocoa](https://github.com/CocoaPods/CocoaPods)， 这样就会大量使用Block，很多时候Block也的确比Delegate，Target-Action使用起来要方便，顺便再推荐个第三方类库[BlocksKit](https://github.com/zwaldowski/BlocksKit)，但是在使用Block的时候最容易出现的问题就是循环引用，就循环引用的问题，循环引用危害非常大，controller中只要有循环引用出现，就controller就无法释放，导致app使用内存越来越大。

## 循环引用出现的原因

- block循环引用，因为block 会 retain self，而 self 又 retain 了 Block。因为在 ObjC 中，直接调用一个实例变量，会被编译器处理成 self->theVar，self 是一个 strong 类型的变量，引用计数会加 1，于是，self retains queue， queue retains block，block retains self。

- 在controller中，controller拥有strong类型的subView，而有时候，subView中又要有属性来指定controller，这种情况情况出现的极少。我们在视频播放的时候遇到过。

```objc
    // 播放器显示位置（竖屏时）
    self.playView.frame = CGRectMake(0, 20, SCREEN_WIDTH, SCREEN_WIDTH * 9 / 16);
    // 添加到当前控制器的view上
    [self.view addSubview:self.playView];
    // 指定一个作为播放的控制器
    self.playView.contrainerViewController = self;
```

这里contrainerViewController一不注意就出现了循环引用，导致controller无法释放。
- 在做Hybrid的时候，我们使用JavaScriptCore框架，并定义WebJSExport（继承自JSExport）协议来实现JavaScript调用Native方法。JavaScript要想调用Native方法，就要往document注入全局对象以供JavaScript调用。一开始写法如下：
- 
```objc
    JSContext *context = [self.webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
    context[@"XXXX"] = self;
    context.exceptionHandler = ^(JSContext *context, JSValue *exception) {
        DLog(@"JS Error: %@", exception);
    };
```

细心的同学就会发现在第二句形成了循环引用的问题。然而网上所有讲到JS和OC通信的文章基本上都是这么写的，却很少有人指出这里有循环引用的问题，真是害人不浅，也怪自己粗心，不注意。

## 检查循环引用

根据iOS内存管理机制的基本原理：当某个对象的引用计数器为0时，它就会自动调用dealloc方法。所以在检查页面是否有循环引用的时候，只需要看controller的dealloc方法是否会被执行就可以了。当controller pop出去后，如果每调用controller的dealloc方法，说明它的某个属性对象仍然被持有，未被释放。controller页面需要加入以下方法：

```objc
- (void)dealloc {
    DLog(@"[%@ dealloc]", [self class]);
}
```

## 解决办法

- 对于block的循环引用，ReactiveCoca提供了一对宏代码，**@weakify**和**@strongify**，所以在使用到block的地方按照以下方法使用即可避免循环引用：
**此处使用dispatch来举例不是太合适，GCD中使用Block不会出现循环引用, 原因是GCD中的block并没有直接或间接被self强引用的，所以不会存在循环引用，故不需要weakSelf；又GCD中block能够自动copy，所以self超出作用域仍可用，故不需要写strongSelf**

```objc
@weakify(self);  
dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
	@strongify(self);
	[self doSomething];
	[self doOtherThing];
});
```

对于**@weakify**和**@strongify**这里两个宏代码的原理，回头会专门写一篇文章来介绍。
- 对于第二个我们在视频播放中遇到的循环引用的问题，其实非常容易解决，只需要将**contrainerViewController** 在property声明的时候设置成**weak**类型的就可以了。
- 在Hybrid的中给JavaScript设置注入对象时出现循环引用，一开始我想用weakSelf，发现并不能解决，因为在我们注入到JavaScript中的对象在JavaScript中可以认为是一个strong类型的对象，所以即便是使用weakSelf也不能解决这个问题。要解决这个问题，需要我们自己定义**WeakWebJSExportDelegate**

```objc
#import <Foundation/Foundation.h>
#import "WebJSExport.h"

@interface WeakWebJSExportDelegate : NSObject<WebJSExport>

@property (nonatomic, weak) id<WebJSExport> webJSExportDelegate;

- (instancetype)initWithDelegate:(id<WebJSExport>)webJSExportDelegate;

@end
```

```objc
#import "WeakWebJSExportDelegate.h"

@implementation WeakWebJSExportDelegate

- (instancetype)initWithDelegate:(id<WebJSExport>)webJSExportDelegate {
    self = [super init];
    if (self) {
        _webJSExportDelegate = webJSExportDelegate;
    }
    return self;
}

#pragma mark - WebJSExport
- (void)appOpenUrl:(NSString *)openJson {
    [self.webJSExportDelegate appOpenUrl:openJson];
}
```

然后需要将向webView注入全局对象的部分改为一下形式：

```objc
JSContext *context = [self.webView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];
WeakWebJSExportDelegate *weakWebJSExportDelegate = [[WeakWebJSExportDelegate alloc] initWithDelegate:self];
context[@"XXXX"] = weakWebJSExportDelegate;
context.exceptionHandler = ^(JSContext *context, JSValue *exception) {
        DLog(@"JS Error: %@", exception);
};
```