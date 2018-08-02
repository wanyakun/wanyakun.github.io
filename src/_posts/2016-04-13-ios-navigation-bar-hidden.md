---
title: NavigationBar不显示问题
tags: [iOS]
categories: [iOS, 优化]
date: 2016-04-13 13:40:00
layout: post
---

本来今天想在自家app上购买莫斯利安，发现正常购买活动已经结束，价格恢复到以前了。但是我们有团购活动啊，一样也是很便宜的哦。

所以顺便分享了下我们的团购页面到朋友圈，吸引小朋友没来购买我的牛奶。但是好丢人，被朋友发现了个bug，不过也是好事，能发现bug，找到原因并解决。脸虽然被打了，但只要问题解决就好。

### 问题描述

新用户团购列表点击团购进入团购详情，然后点击我要开团，显示登录页面，点击注册送礼进入注册页面，注册成功后返回团购详情，再次点击我要开团进入结算页，NavigationBar不显示。

### 问题原因

```objc
- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES animated:NO];
}

- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    [self.navigationController setNavigationBarHidden:NO animated:NO];
}
```

页面设置NavigationBar显示与隐藏都是在viewWillAppear和viewWillDisappear中设置的，页面之间生命周期导致前一个也的viewWillDisappear出现在后一个页面的viewWillAppear之后，可能导致导航条不正常显示与隐藏。

### 问题解决

1. 将所有Controller中上述viewWillAppear和viewWillDisappear方法中的设置setNavigationBarHidden代码去掉。
2. 在UCYViewControllerIntercepter中clearNavigationBarControllerArray的getter方法中增加要隐藏NavigationBar的Controller名称，拦截器会在viewWillAppear之后判断页面是否需要隐藏NavigationBar来统一设置NavigationBar的隐藏和显示。

顺便附上拦截器中的部分代码：

```objc
- (void)viewWillAppear:(BOOL)animated viewController:(UIViewController *)viewController {
    /* 你可以使用这个方法进行打日志，初始化基础业务相关的内容 */
    DLog(@"[%@ viewWillAppear:%@]", [viewController class], animated ? @"YES" : @"NO");
    if ([self isControllerClearNavigation:viewController]) {
        viewController.navigationController.navigationBar.hidden = YES;
    } else {
        viewController.navigationController.navigationBar.hidden = NO;
    }
}

- (BOOL)isControllerClearNavigation:(UIViewController *)viewController {
    for (NSString *controllerName in self.clearNavigationBarControllerArray) {
        if ([viewController isKindOfClass:NSClassFromString(controllerName)]) {
            return YES;
        }
    }
    return NO;
}

- (NSMutableArray *)clearNavigationBarControllerArray {
    if (_clearNavigationBarControllerArray == nil) {
        _clearNavigationBarControllerArray = [[NSMutableArray alloc] initWithCapacity:11];
        [_clearNavigationBarControllerArray addObject:kVCProductDetailViewController];
        [_clearNavigationBarControllerArray addObject:kVCGroupProductDetailViewController];
        [_clearNavigationBarControllerArray addObject:kVCHotBuyProductViewController];
        [_clearNavigationBarControllerArray addObject:kVCRushProductViewController];
        [_clearNavigationBarControllerArray addObject:kVCVideoDetailViewController];
        [_clearNavigationBarControllerArray addObject:kVCMyViewController];
        [_clearNavigationBarControllerArray addObject:kVCLoginViewController];
        [_clearNavigationBarControllerArray addObject:kVCRegisterViewController];
        [_clearNavigationBarControllerArray addObject:kVCFindPasswordViewController];
        [_clearNavigationBarControllerArray addObject:kVCVerifyPhoneViewController];
        [_clearNavigationBarControllerArray addObject:kVCBindPhoneViewController];
    }

    return _clearNavigationBarControllerArray;
}
```

这样，在页面将要显示的时候，在拦截器中通过Aspects hook viewWillAppear方法，并在之后插入以下方法：

**\- (void)viewWillAppear:(BOOL)animated viewController:(UIViewController *)viewController {**

我们就可以在此方法统一处理一些操作。我们的页面NavigationBar显示与否就在这里设置，将需要隐藏系统NavigationBar的页面添加到clearNavigationBarControllerArray中即可。