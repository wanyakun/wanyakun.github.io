---
title: 自定义返回根目录Crash
tags: [iOS]
categories: [iOS]
date: 2016-04-13 16:34:00
layout: post
---

上个版本经过内存等方面的优化，在听云崩溃报告中已经成功将Crash率降低到8‰一下，看了下最新版本七日的Crash率在4.87‰，终于达到标准水平了。下面是听云崩溃率标准：

![听云提出的移动应用崩溃率标准](http://articles.csdn.net/uploads/allimg/150420/125919D91-0.jpg)



>今天又发现了一个Crash，本以为是已经解决过的Crash，仔细一看，发现Crash的位置是一样的，但是引起的原因确实另外一个。

### Crash报告

![Crash报告](http://kunkun.qiniudn.com/QQ20160413-1@2x.png)

从上面的图片 Crash的地方可以看出原因为Hybrid页面调用Native的返回根目录，并选中指定的TabBarItem。

### Crash原因分析

之所以在这个地方出现Crash是因为：

- Crash线程为WebThread，不是主线程。
- PSPDFUIKitMainThreadGuard为检查是否在子线程更新UI，若有，在DEBUG状态下会Assert，我们可以直接找到在什么位置出现子线程更新UI，方便解决问题，在Release下就Crash了。
- Crash之前WebThread执行[UILabel setTextColor]，在往下看会发现确实是在子线程更新了UI动作。找到Crash的原因了。

### 问题解决

根据Crash报告可以看得出是因为在WebView中JavaScript调用Native方法，Native方法在子线程中执行，要解决这个问题，需要在Native方法中调用主线程，然后在主线程中执行相应的方法。

代码修改前：

```objc
- (void)popToRootViewControllerWithSelectedIndex:(NSInteger)index {
    [PopUtils popToRootViewControllerWithSelectedIndex:index];
}
```

修改后：

```objc
- (void)popToRootViewControllerWithSelectedIndex:(NSInteger)index {
    dispatch_async(dispatch_get_main_queue(), ^{
        [PopUtils popToRootViewControllerWithSelectedIndex:index];
    });
}
```

这样就能保证在Native方法在主线程中执行。

> 问题看似解决，但是这样解决真的好吗？那万一别的地方也调用这个**popToRootViewControllerWithSelectedIndex**方法呢？如果也恰好是在子线程中调用，岂不是同意也会出现Crash。我们应该分析下这个popToRoot方法具体是怎么写的。看是不是要在这个方法中来做一些修改呢？

**popToRootViewControllerWithSelectedIndex**代码如下：

```objc
+ (void)popToRootViewControllerWithSelectedIndex:(NSInteger)index {
    UITabBarController *tabVC = (UITabBarController *)[AppDelegate sharedAppDelegate].window.rootViewController;
    if (index >= 0 && index < tabVC.viewControllers.count) {
        [tabVC setSelectedIndex:index];
    }
    [PopUtils popToRootViewController];
}
```

而popToRootViewController方法只是获取Tabbar的所有Navigation并逐一popToRoot，并不会进行UI的修改，根据Crash报告，可以看出，其实问题就出在**[tabVC setSelectedIndex:index]**这句，设置选中的Index，tabbarItem会改变图片，改变文字的颜色等等，所以我们应该将这里的操作放到主线程中才对。

```objc
+ (void)popToRootViewControllerWithSelectedIndex:(NSInteger)index {
    dispatch_async(dispatch_get_main_queue(), ^{
        UITabBarController *tabVC = (UITabBarController *)[AppDelegate sharedAppDelegate].window.rootViewController;
        if (index >= 0 && index < tabVC.viewControllers.count) {
            [tabVC setSelectedIndex:index];
        }
        [PopUtils popToRootViewController];
    });
}
```

我这里将整个代码块都放到主线程中了。当然也可以只将**[tabVC setSelectedIndex:index];**这句放到主线程中