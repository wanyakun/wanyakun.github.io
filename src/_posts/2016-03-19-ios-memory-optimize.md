---
title: iOSApp内存优化（一）
tags: [iOS, 优化]
categories: [iOS]
date: 2016-03-19 15:35:00
layout: post
---

## 前言

先吐槽下公司最近的变化，近两个月服务器端的同学将后端进行重构，重新设计了商品模型、网关和API调用。使用Alibaba开源的Dubbo分布式服务框架进行分层架构，并对后端服务最大化的解耦。

API调用的修改，导致三端（Android、iOS和H5）Service层都要修改，这还不是伤害最大的，最大的是商品模型的重构导致前端数据Model完全改变，其实快赶上重写App了，短短两个月（包括春节假期）外加产品新需求，真心很赶很累。导致东西做完没时间进行Review、Instrument和优化，上线后出现各种问题。

## MemoryWarning
随着iOS设备内存容量越来越大，好像碰到**didReceiveMemoryWarning**的情况越来越少，App中对这块越来越不重视。但对App内存使用的优化，我认为这一块是任何app都必不可少的。所以就先说说这一块。

iOS的UIViewController 类给我们提供了处理内存不足的方法，我们可以在此方法中处理内存警告。

- 在iOS 3.0 之前，当系统的内存不足时，UIViewController的**didReceiveMemoryWarining** 方法会被调用，我们可以在**didReceiveMemoryWarining** 方法里释放掉部分暂时不用的资源
- 在iOS 3.0-iOS 5.0，UIViewController增加**viewDidUnload**方法，和viewDidLoad相对应，当系统内存不足的时候，**didReceiveMemoryWarining**方法会先被调用，并判断当前controller是否是在最上层，也就是用户当前看到的viewController，如果不是，系统会自动将viewController的view和所有子view全部销毁，然后调用viewController的**viewDidUnload**方法，若在最上层，怎不会销毁，也不会调用**viewDidUnload**方法。所以这时候进行内存处理的方法如下：

```objc
-(void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];//如没有显示在window上，会自动将self.view释放。
    // ios6.0以前，不用在此做处理，self.view释放之后，会调用下面的viewDidUnload函数，在viewDidUnload函数中做处理就可以了。
}

-(void)viewDidUnload {
    // Release any retained subviews of the main view.不包含self.view
    //处理一些内存和资源问题。
    [super viewDidUnload];
}
```

- 在iOS6之后，**viewDidUnload**方法被废弃内存警告处理又回到iOS 3.0时代，但是是有区别的。看UIViewController头文件注释如下：

```objc
- (void)didReceiveMemoryWarning; // Called when the parent application receives a memory warning. On iOS 6.0 it will no longer clear the view by default.
```

也就是说此方法不再销毁view。所以对iOS6之后又有了新的写法：

```objc
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    //保证invisible, 因为即使在当前界面也会收到系统回调
    if (self.isViewLoaded && self.view.window == nil) {
        // Dispose of any resources that can be recreated.
        self.view = nil;   //确保下次会重新加载调用viewDidLoad函数
    }
}
```

## 处理方法优化

但是每个controller都这么去写判断方法的确很麻烦。有两种方式可以更好的处理。

1. 若你的项目controller是继承自BaseViewController，我想聪明的同学应该知道怎么去做了，就是在self.view = nil;这一行之前加入一个handleMemoryWarning方法，让所有子controller都去实现这个方法，进行内存释放即可。在父类中如下写处理：

```objc
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    //保证invisible, 因为即使在当前界面也会收到系统回调
    if (self.isViewLoaded && self.view.window == nil) {
        // Dispose of any resources that can be recreated.
        [self handleMemoryWarning];
        self.view = nil;   //确保下次会重新加载调用viewDidLoad函数
    }
}
- (void)handleMemoryWarning {
    // 空方法，需要子类实现，进行内存释放
}
```

2. 若你的项目controller不是继承自BaseController，目前光明都市菜园的controller就是如此，目的是对controller不进行任何污染，可以随便拎出来一个放到其他项目中。但是写了一个拦截器，用于拦截所有controller，并对一些方法进行**method swizzling** （拦截器的写法以后再介绍）将didReceiveMemoryWarning替换成如下方法，每个controller中处理内存警告还和方法一一样。

```objc
 - (void)didReceiveMemoryWarning:(UIViewController \*)viewController {
    //保证invisible, 因为即使在当前界面也会收到系统回调
    SEL selector = NSSelectorFromString(@"handleMemoryWarning");

    if (viewController.isViewLoaded &&
    viewController.view.window == nil &&
    [viewController respondsToSelector:selector]) {
        [viewController performSelector:selector withObject:nil afterDelay:0.0];
        viewController.view = nil;   //确保下次会重新加载
    }
}
```