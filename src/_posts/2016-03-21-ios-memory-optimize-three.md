---
title: iOSApp内存优化（三）
tags: [iOS, 优化]
categories: [iOS]
date: 2016-03-21 23:19:00
layout: post
---

在iOSApp中经常使用的一个组件叫NSTimer，但是它又是非常容易导致内存泄露组件。我们可能在Controller、View和ViewModel中使用到它，比如：做banner的自动翻页、开机广告倒计时、商品整点抢购倒计时等等等......

## NSTimer常规用法

我们在使用NSTimer的时候一般会这么去创建一个Timer

```objc
NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:5 target:self selector:@selector(handleTimer:) userInfo:nil repeats:YES];
```
或者

```objc
@property (nonatomic, strong) NSTimer *timer;

self.timer = [NSTimer scheduledTimerWithTimeInterval:5 target:self selector:@selector(handleTimer:) userInfo:nil repeats:YES];
```

然后销毁的时候会这么去销毁

```objc
- (void)removeTimer {
	if ([self.timer isValid]) {
	    [self.timer invalidate];
	    self.timer = nil;
	}
}
```

## NSTimer出现内存泄露的原因

NSTimer分为一次性的Timer和重复性的Timer。首先，为了保证Timer在未来的某个时刻出发指定事件，Timer会被添加到当前线程的Runloop中，而Timer在初始化的时候对方法的接受者进行强引用（**self持有timer，timer持有self，循环引用**）。而两种Timer的区别在于一次性的Timer在完成调用后会自动将自己invalidate，而重复性Timer则经永远存在，直到你显示的去invalidate（**NSTimer提供了一个方法invalidate，在执行完invalidate以后都会变成无效，因此对于重复性的Timer我们一定要有对应的invalidate**）。所以NSTimer出现内存泄露一般都是发生在重复性的Timer上，并且是因为没有在合适的位置去invalidate Timer。

## 解决方法

> 对于Timer，千万不要试图在dealloc方法中去invalidate Timer，因为self持有timer，timer持有self出现循环引用，所以根本不会调用dealloc方法。

- View中的Timer，当重复性的Timer出现在View中形成循环引用。可以重写view的removeFromSuperView方法， 在此方法中去销毁Timer，当view被remove的时候，Timer也会被invalidate:

```objc
- (void)removeFromSuperview {
    [self removeTimer];
    [super removeFromSuperview];
}
```

- Controller和ViewModel中的Timer，当重复性的Timer出现在Controller或者ViewModel中形成循环因为，我们就不能像在View中在removeFromSuperView去invalidate Timer了。下面提供一种使用block来代替target-action的方法来解决Timer循环引用的方法，我们对NSTimer创建一个Category，并使用Category中的方法来创建Timer。

```objc
#import <Foundation/Foundation.h>

@interface NSTimer (BlockSupport)

+ (NSTimer *)scheduledTimerWithTimeInterval:(NSTimeInterval)interval block:(void(^)())block repeats:(BOOL)repeats;

@end
```

```objc
#import "NSTimer+UCYBlockSupport.h"

@implementation NSTimer (BlockSupport)

+ (NSTimer *)scheduledTimerWithTimeInterval:(NSTimeInterval)interval block:(void(^)())block repeats:(BOOL)repeats{
    return [self scheduledTimerWithTimeInterval:interval
                                         target:self
                                       selector:@selector(blockInvoke:)
                                       userInfo:[block copy]
                                        repeats:repeats];
}

+ (void)blockInvoke:(NSTimer *)timer {
    void (^block)() = timer.userInfo;
    if(block) {
        block();
    }
}

@end
```

那么在创建Timer的时候使用Category中的方法创建，就不会形成对方法的接受者形成强引用。

```objc
@property (nonatomic, strong) NSTimer *timer;

self.timer = [NSTimer scheduledTimerWithTimeInterval:5 block^{
	//handleTimer方法处理
} repeats:YES];
```

**为了统一使用，建议无论是在View、Controller还是ViewModel中都使用Block的方法来创建Timer。**

另外一种方法是使用NSPorxy，将NSTimer的target设置为NSProxy的实例，这一会就会打破Timer对SEL的target强引用，NSProxy不实现SEL，而是将消息转发给真正的target，且对真正的target若引用，这样就可以打破循环引用。

```objc
@interface YKNoteTimerProxy : NSProxy

@property (nonatomic, weak) id target;

- (instancetype)initWithTarget:(id)target;

+ (instancetype)timerProxyWithTarget:(id)target;

@end

#import "YKNoteTimerProxy.h"

@implementation YKNoteTimerProxy

- (instancetype)initWithTarget:(id)target {
    _target = target;
    return self;
}

+ (instancetype)timerProxyWithTarget:(id)target {
    return [[YKNoteTimerProxy alloc] initWithTarget:target];
}

- (void)dealloc {
    NSLog(@"%s", __PRETTY_FUNCTION__);
}

//- (id)forwardingTargetForSelector:(SEL)aSelector {
//    return _target;
//}

- (NSMethodSignature *)methodSignatureForSelector:(SEL)sel {
    return [_target methodSignatureForSelector:sel];
}

- (void)forwardInvocation:(NSInvocation *)invocation {
    [invocation invokeWithTarget:_target];
}

@end
```

使用的时候如下所示：

```objc
 YKNoteTimerProxy *proxy = [YKNoteTimerProxy timerProxyWithTarget:self];
_timer = [NSTimer scheduledTimerWithTimeInterval:1 target:proxy selector:@selector(timerHandler) userInfo:nil repeats:YES];
```
