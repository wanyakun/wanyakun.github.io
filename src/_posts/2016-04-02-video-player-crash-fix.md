---
title: Notification KVO Observer Crash
tags: [iOS, 优化, Notification, KVO, Observer, Crash]
categories: [iOS]
date: 2016-04-02 08:42:00
layout: post
---

昨天看在[听云](https://report.tingyun.com/mobile/overview/mobile)上的Crash记录，看到我们App中有和视频播放相关的Crash。昨天就点了几次发现从视频播放进入产品详情，并进行商品购物下单，最后从订单详情返回到购物车的时候App Crash。操作轨迹如下：

*VideoViewController -> VideoDetailViewController -> ProductItemDetailViewController -> UCYWebViewController（结算页）-> PayWayViewController -> UCYWebViewController（订单详情页）-> UCYTabBarController（并选中购物车tab）-> UCYWebViewController(购物车) -> App Crash*

对于导致App Crash的bug我们决定是零容忍的，严重导致用户体验。下面就详细说明下此次Fix这个Crash问题的过程。
### Crash定位

首先Crash提示为EXC_BAD_ACCESS，看操作轨迹还以为我PopUtils工具类导致的，但是以前其他也有类似的返回，第一反应打断点单步调试。

```objc
+ (void)popToRootViewControllerWithSelectedIndex:(NSInteger)index {
    UITabBarController *tabVC = (UITabBarController *)[AppDelegate sharedAppDelegate].window.rootViewController;
    if (index >= 0 && index < tabVC.viewControllers.count) {
        [tabVC setSelectedIndex:index];
    }
    [PopUtils popToRootViewController];
}
```

```objc
+ (void)popToRootViewControllerAnimated:(BOOL)animated {
    UITabBarController *tabVC = (UITabBarController *)[AppDelegate sharedAppDelegate].window.rootViewController;
    for (UINavigationController *navVC in tabVC.viewControllers) {
        if (navVC.viewControllers.count > 1) {
            [navVC popToRootViewControllerAnimated:animated];
            [navVC setNavigationBarHidden:NO animated:NO];
        }
    }
}
```

发现并不是此处的问题，因为[UCYWebViewController viewDidAppear:NO]方法已经执行，购物车页面已经显示。

> 小技巧：之前在写光明都市菜园内存优化的文章中提到过的拦截器（囧，想针对这个拦截器写一篇文章，一直没来得及写），在拦截器中对Controller Life Cycle方法进行hook并进行Method Swizzling，在swizzling方法中做日志打印，可以很方便的查看所有Controller Life Cycle执行过程。

第一步短点调试无果，Log日志输出又没有具体的内容可以查看，对于EXC_BAD_ACCESS看来还是要要启用僵尸对象来进行调试才行，按住option键，点击Xcode的Run按钮，打开如下界面，勾选 Enable Zombie Objects。

![启用僵尸对象](http://kunkun.qiniudn.com/QQ20160401-0@2x.png)

重新运行，按照之前的操作重新操作一遍，这次在log中便可以看到具体是什么原因到导致的问题。

![Crash原因](http://kunkun.qiniudn.com/QQ20160401-1@2x.png)

原来问题出现在视频播放器这里，但是让人费解的是，视频详情的Controller正常dealloc，Controller中的播放器容器FMGVideoPlayView也正常dealloc，怎么就出现FMGVideoPlayView retain呢？

### FMGVideoPlayView EXC_BAD_ACCESS解决

仔细查看源码，在视频播放完成或者页面返回的时候，需要对Player进行清理处理，其中Player有Notification监听，KVO的Observer监听等。猜想，是不是因为FMGVideoPlayView在dealloc后，这些监听并没有移除导致的EXC_BAD_ACCESS。

FMGVideoPlayView代码中写有removePlayer方法专门处理进行监听的移除，player的的释放等操作。

```objc
- (void)removePlayer {
    [self removeObserverFromPlayerItem:self.player.currentItem];
    [self removeNotification];
    [self removeShowTimer];

    [self.player pause];
    [self.danmakuView pauseAnimation];
    [self.player.currentItem cancelPendingSeeks];
    [self.player.currentItem.asset cancelLoading];
    [self removePlaybackTimeObserver];
    self.currentItem = nil;
    self.player = nil;
}
```

所以尝试在FMGVideoPlayView的dealloc方法中进行removePlayer，重新运行。问题得到解决。

### 原因

从上面的解决过程可以看出，在FMGVideoPlayView被dealloc的时候，其中注册的Notification和KVO均没有被正常remove掉，监听依然被注册着。

所以问题来了：

- **在ARC中我们需要移除KVO的observer吗？**

  在Apple官方文档中介绍[removeObserver:forKeyPath:context:](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Protocols/NSKeyValueObserving_Protocol/index.html#//apple_ref/occ/instm/NSObject/removeObserver:forKeyPath:context:)的时候，其中有一段文字为：

  > Be sure to invoke this method (or `removeObserver:forKeyPath:`) before any object specified in`addObserver:forKeyPath:options:context:` is deallocated.

  也就是说在我们dealloc对象之前必须要移除KVO的observer.

  > Yes, ARC only relieves you from calling retain/release. You still have to call setDelegate:nil, and removeObservers.  In your dealloc method, you don't need to call [super dealloc] it is taken care of for you by the runtime.

  在ARC模式下，在dealloc方法中需要removeObservers。


- **ARC给一个对象添加了observe会导致循环引用吗？**

  [Objective-C Automatic Reference Counting (ARC) and Key-Value Observing](http://stackoverflow.com/questions/8122976/objective-c-automatic-reference-counting-arc-and-key-value-observing)

  > You need to call `removeObserver`, ARC only automates retain counts. `removeObserver` does not impact the retain count

  ARC只会自动处理引用计数器，调用removeObserver并不会影响引用计数器。


- **当要通知的对象已经nil了,这个通知会自动remove吗？**

  [Will observers automatically removed when observers become nil?](http://stackoverflow.com/questions/11544690/will-observers-automatically-removed-when-observers-become-nil)

  > Observers are not removed automatically. From the NSNotificationCenter Class Reference:
  >
  >  **Important**: The notification center does not retain its observers, therefore, you must ensure that you unregister observers (using removeObserver: or removeObserver:name:object:) before they are deallocated. (If you don't, you will generate a runtime error if the center sends a message to a freed object.)
  >
  > You should therefore call
  >
  > ```objc
  > [[NSNotificationCenter defaultCenter] removeObserver:self];
  > ```
  >
  > in your `dealloc` method if you are not 100% sure that the observer was not removed previously.

  观察者并不会自动移除，通知中心并不会retain observer，因此，你必须保证在dealloc之前进行removerObserve，前面也说过了。

**最后附上Apple文档链接[NSKeyValueObserving](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Protocols/NSKeyValueObserving_Protocol/index.html)感觉很有必要进去仔细看下。**