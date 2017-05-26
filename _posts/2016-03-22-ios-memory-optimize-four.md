---
title: iOSApp内存优化（四）
tags: [iOS, 优化]
categories: [iOS]
date: 2016-03-22 23:35:00
---

在当今的app中，几乎所有的app都需要进行图片缓存，而在电商App中，图片在线加载到处可见，首页产品展示、分类列表类别icon，产品列表产品缩略图，产品详情主图和图文详情等等等。。。

今天这第四篇文章要说说App中图片缓存的问题，在我们的App中，我们就使用了大名鼎鼎的[SDWebImage](https://github.com/rs/SDWebImage)，相信大多数的app都是用这个第三方库来做图片缓存的，简单好用。但是在使用的过程中，若出现大量的在线图片加载，有些地方需要注意。

## 问题

重现问题步骤：当我们在打开App产品列表，加载产品缩略图，加载几屏幕后，然后反复点进不同产品进入详情，加载产品大图。导致内存使用暴涨。

经过上面的，操作我们发现App使用的内存暴涨，贴下**Instrument**图片一看究竟。
![](http://kunkun.qiniudn.com/QQ20160319-0@2x.png)
通过上面这张图片可以看到，All Anoymous VM达到137MB，主要为VM:CG raster data导致，已经到了109.30MB。
经过反复查询，确实是SDWebImage导致的VM:CG raster data暴涨的。去SDWebImage的issues查询，发现询问这个问题人挺多，详见：https://github.com/rs/SDWebImage/issues/538

## 内存暴涨原因

首先我看看**SDImageCache**的源文件：

```objc
/**
 * SDImageCache maintains a memory cache and an optional disk cache. Disk cache write operations are performed
 * asynchronous so it doesn’t add unnecessary latency to the UI.
 */
@interface SDImageCache : NSObject

/**
 * Decompressing images that are downloaded and cached can improve performance but can consume lot of memory.
 * Defaults to YES. Set this to NO if you are experiencing a crash due to excessive memory consumption.
 */
@property (assign, nonatomic) BOOL shouldDecompressImages;

/**
 * use memory cache [defaults to YES]
 */
@property (assign, nonatomic) BOOL shouldCacheImagesInMemory;
```

从源文件的描述可以发现SDImageCache维护一个内存缓存和一个可选的磁盘缓存。磁盘缓存异步执行写操作所以不会对UI增加不必要的延迟。属性shouldCacheImagesInMemory默认为YES，shouldDecompressImages默认也为YES。而**shouldDecompressImages**属性会对下载和缓存的图片进行解压缩来提高性能，但是会消耗很多内存，并且默认为开启，问题就出在这里，当我们大量在线加载图片的时候会使内存过度消耗，而导致App crash。

## 解决方法

- 将**shouldDecompressImages**参数设置为NO。

```objc
[SDImageCache sharedImageCache].shouldDecompressImages = NO;
[SDWebImageDownloader sharedDownloader].shouldDecompressImages = NO;
```

- 在ViewController的**viewDidDisappear**方法中clearMemory，如果使用BaseViewController，可以在加到基类的**viewDidDisappear**方法中， 我们的App使用了AOP技术，就在拦截器里面拦截此方法来统一添加。

```objc
[[SDImageCache sharedImageCache] clearMemory];
```

- 别忘了在MemoryWarning的时候clearMemroy，可以加到AppDelegate中。

```objc
- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application {
    [[SDImageCache sharedImageCache] clearMemory];
}
```

经过对SDWebImage设置处理之后，内存使用量远远下降了，贴张图看看处理后的效果。
![](http://kunkun.qiniudn.com/QQ20160319-1@2x.png)

