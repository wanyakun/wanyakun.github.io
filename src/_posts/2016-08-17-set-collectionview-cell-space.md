---
title: 设置CollectionView的Cell间距
tags: [iOS]
categories: [iOS]
date: 2016-08-17 22:52:00
layout: post
---

在使用CollectionView的时候，不复杂的情况下我们使用UICollectionViewFlowLayout来设置Cell直接的间距，主要有以下几个地方需要设置：

- minimumLineSpacing：设置Cell行之间的**最小**间距
- minimumInteritemSpacing：设置Cell之间的**最小**间距
- itemSize：设置Cell的大小
- estimatedItemSize：和TableView类似，设置预估Cell大小，iOS8以后支持，默认CGSizeZero
- sectionInset：设置section之间的空间

以上几个属性是常见的设置，Cell和section比较规则的话，可以直接设置属性，若不规则，则也可以使用Delegate方法设置。

但是在很多情况下，我们会发现Cell之间仍然有一个不知道怎么产生的间距。如下图所示在吃货团和果U鲜直接有一条竖线，而果U鲜和登录直接就没有，而我们想实现的是Cell之间的间距为0，这里itemSize的width设置为ScreeWidth/4.0f，minimumInteritemSpacing设置为0。

![有间距](http://kunkun.qiniudn.com/collectionView-01.jpg)

首先我们使用view hierarchy来看看Cell的位置和大小如下图。

![Cell位置](http://kunkun.qiniudn.com/collectionView-03.jpg)

![Cell位置](http://kunkun.qiniudn.com/collectionView-04.jpg)

从两张图的Position X可以看出两个Cell的位置，因为Anchor Poin x是0.5，所以显示的是图片中间的位置，第一个Cell的为51.75，第二个Cell的为155.4166666666666667，两者的间距为103.6666666666666667，而Cell的宽度为103.5，也就是说间距比宽度大了0.1666666666666667，所以出现了间隙。

下面我们通过代码打印Cell的frame来看一下。

自定义一个UICollectionViewLayout继承自UICollectionViewFlowLayout，然后在-layoutAttributesForElementsInrect:方法打印这些Cell的frame信息，

```objc
- (NSArray<UICollectionViewLayoutAttributes *> *)layoutAttributesForElementsInRect:(CGRect)rect {
    NSArray *original = [super layoutAttributesForElementsInRect:rect];
    NSMutableArray *attributes = [[NSMutableArray alloc] initWithArray:original copyItems:YES];
    for (UICollectionViewLayoutAttributes *attr in attributes) {
        DLog(@"%@", NSStringFromCGRect([attr frame]));
    }
    return  attributes;
}
```

``` shell
{% raw %}
2016-08-12 14:22:58.164 UCaiYuan[2402:1350991] [-[HomeCollectionViewFlowLayout layoutAttributesForElementsInRect:] Line:16 =====>{{0, 204.33333333333334}, {103.5, 99.359999999999999}}]
2016-08-12 14:22:58.164 UCaiYuan[2402:1350991] [-[HomeCollectionViewFlowLayout layoutAttributesForElementsInRect:] Line:16 =====>{{103.66666666666667, 204.33333333333334}, {103.5, 99.359999999999999}}]
2016-08-12 14:22:58.164 UCaiYuan[2402:1350991] [-[HomeCollectionViewFlowLayout layoutAttributesForElementsInRect:] Line:16 =====>{{207, 204.33333333333334}, {103.5, 99.359999999999999}}]
2016-08-12 14:22:58.164 UCaiYuan[2402:1350991] [-[HomeCollectionViewFlowLayout layoutAttributesForElementsInRect:] Line:16 =====>{{310.66666666666669, 204.33333333333334}, {103.5, 99.359999999999999}}]
2016-08-12 14:22:58.164 UCaiYuan[2402:1350991] [-[HomeCollectionViewFlowLayout layoutAttributesForElementsInRect:] Line:16 =====>{{0, 303.66666666666669}, {103.5, 99.359999999999999}}]
2016-08-12 14:22:58.164 UCaiYuan[2402:1350991] [-[HomeCollectionViewFlowLayout layoutAttributesForElementsInRect:] Line:16 =====>{{103.66666666666667, 303.66666666666669}, {103.5, 99.359999999999999}}]
{% endraw %}
```

可以看出itemSize为{103.5， 99.359999999999999}，第一个Cell的x为0，第二个Cell的x为103.66666666666667，而不是103.5，所以中间有0.16666666666667的间隙。

通过上面的打印，也验证了我们使用view hierarchy看到的结果。至于为什么会出现这些间隙，目前还不得而知。

细心的朋友可能在前面发现，对于minimumLineSpacing和minimumInteritemSpacing的解释中我讲最小来加粗，其实从名字也可以看得出来。这个属性只是设置间距的最小值。而实际使用的过程中我们需要设置的是一个确定的值，即便是区间，也要设置个maxmumInteritemSpacing吧。要解决这个问题，我们可以在上面提到的方法layoutAttributesForElementsInRect中修改Cell的frame来改变

```objc
- (NSArray<UICollectionViewLayoutAttributes *> *)layoutAttributesForElementsInRect:(CGRect)rect {
    NSArray *original = [super layoutAttributesForElementsInRect:rect];
    NSMutableArray *attributes = [[NSMutableArray alloc] initWithArray:original copyItems:YES];
    //从第二个循环到最后一个,因为第一个不需要修改
    for(int i = 1; i < [attributes count]; i++) {
        //当前attributes
        UICollectionViewLayoutAttributes *currentLayoutAttributes = attributes[i];
        //上一个attributes
        UICollectionViewLayoutAttributes *prevLayoutAttributes = attributes[i - 1];
        //设置的Cell间距，可根据需要改
        NSInteger cellSpacing = 0;
        //前一个cell的最右边
        NSInteger prevCellRight = CGRectGetMaxX(prevLayoutAttributes.frame);
        //如果当前一个cell的最右边加上我们想要的间距加上当前cell的宽度依然在contentSize中，我们改变当前cell的原点位置
        //不加这个判断的后果是，UICollectionView只显示一行，原因是下面所有cell的x值都被加到第一行最后一个元素的后面了
        if(prevCellRight + cellSpacing + currentLayoutAttributes.frame.size.width < self.collectionViewContentSize.width) {
            CGRect frame = currentLayoutAttributes.frame;
            frame.origin.x = prevCellRight + cellSpacing;
            currentLayoutAttributes.frame = frame;
        }
    }
    return  attributes;
}
```

再次运行，解决间隙问题，效果如下：

![最终效果](http://kunkun.qiniudn.com/collectionView-02.jpg)

