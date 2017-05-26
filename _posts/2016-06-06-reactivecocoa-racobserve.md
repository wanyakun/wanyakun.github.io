---
title: ReactiveCocoa中RACObserve实例变量
tags: [iOS, ReactiveCocoa, RAC]
categories: [iOS]
date: 2016-06-06 23:45:00
---

在使用ReactiveCocoa前，必须要了解RAC和内存管理，有关RAC内存管理，参考下面这篇文章：[RAC和内存管理](http://hparis.github.io/blog/2015/07/25/rache-nei-cun-guan-li/) 其中就讲了RACObserve的内存管理过程，也可以直接看源码。

在使用RAC的时候，我们知道RAC对block都是copy赋值的。并且在上面文章中讲到使用RACObserve的时候，RACObserve创建的信号只有在其target和observe都发生dealloc的时候才会被disposable。

场景：

在App中有个页面显示购物车按钮，并且使用badgeView显示购物车中购买数量。所以在代码中声明属性：

```objc
@property (nonatomic, strong) UIButton *cartButton;
```

而在getter方法如下：

```objc

- (UIButton *)cartButton {
    if (_cartButton == nil) {
        _cartButton = [UIButton buttonWithType:UIButtonTypeCustom];
        [_cartButton setImage:[UIImage imageNamed:@"nav_right_cart"] forState:UIControlStateNormal];
        _cartButton.titleLabel.textAlignment = NSTextAlignmentLeft;
        [_cartButton addTarget: self action: @selector(cartButtonDidTouchUpInside:) forControlEvents: UIControlEventTouchUpInside];
        [RACObserve([AppDelegate sharedAppDelegate], totalItemNum) subscribeNext:^(id x) {
            _cartButton.badgeView.badgeValue = [x integerValue];
            _cartButton.badgeView.position = MGBadgePositionTopRight;
            _cartButton.badgeView.badgeColor = [UIColor redColor];
            [AnimationUtils scaleAnimationForView:_cartButton.badgeView];
        }];
    }
    return _cartButton;
}
```

注意，以上方法使用RACObserve会导致实例变量**_cartButton**引用计数器增加，因为RACObserve会对block进行copy，从而导致实例变量**_cartButton**引用计数器增加，实例变量不能够被release，导致内存泄露。

既然找到原因，解决办法如下：

1. 在RACObserve前声明weak的weakCartButton变量，在block中是用weakCartButton

```objc
        __weak UIButton *weakCartButton = _cartButton;
        [RACObserve([AppDelegate sharedAppDelegate], totalItemNum) subscribeNext:^(id x) {
            weakCartButton.badgeView.badgeValue = [x integerValue];
            weakCartButton.badgeView.position = MGBadgePositionTopRight;
            weakCartButton.badgeView.badgeColor = [UIColor redColor];
            [AnimationUtils scaleAnimationForView:weakCartButton.badgeView];
        }];
```

或者将RACObserve写到外面，使用点语法，比如在添加过控件，然后在ViewDidLoad中写如下代码：

```objc
        @weakify(self);
        [RACObserve([AppDelegate sharedAppDelegate], totalItemNum) subscribeNext:^(id x) {
            @strongify(self);
            self.cartButton.badgeView.badgeValue = [x integerValue];
            self.cartButton.badgeView.position = MGBadgePositionTopRight;
            self.cartButton.badgeView.badgeColor = [UIColor redColor];
            [AnimationUtils scaleAnimationForView:self.cartButton.badgeView];
        }];
```