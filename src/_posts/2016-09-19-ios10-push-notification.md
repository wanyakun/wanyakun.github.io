---
title: iOS10适配远程推送
tags: [iOS, notification]
categories: [iOS]
date: 2016-09-19 22:46:00
layout: post
---

iOS10正式版发布之后，网上各种适配XCode8以及iOS10的文章满天飞。但对于iOS10适配远程推送的文章却不多。iOS10对于推送的修改还是非常大的，新增了UserNotifications Framework，今天就结合自己的项目，说一说实际适配的情况。

### 一、Capabilities中打开Push Notifications 开关

在XCode7中这里的开关不打卡，推送也是可以正常使用的，但是在XCode8中，这里的开关必须要打开，不然会报错：

> Error Domain=NSCocoaErrorDomain Code=3000 "未找到应用程序的“aps-environment”的授权字符串" UserInfo={NSLocalizedDescription=未找到应用程序的“aps-environment”的授权字符串}

打开后会生成entitlements文件，在这里可以设置APS Environment，asp-environment的值为development或者production，代表开发环境或者生产环境。参考官方文档：https://developer.apple.com/library/content/documentation/Miscellaneous/Reference/EntitlementKeyReference/Chapters/EnablingLocalAndPushNotifications.html#//apple_ref/doc/uid/TP40011195-CH3-SW2

### 二、推送的注册

首先引入UserNotifications Framework，

```objc
import <UserNotifications/UserNotifications.h>
```

iOS10修改了注册推送的方法，这里我们又要对不同版本分别进行设置了。在application didFinishLaunchingWithOptions方法中修改以前的推送设置（我只实现了iOS8以上的设置）

```objc
if (IOS_VERSION >= 10.0) {
        UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
        center.delegate = self;
        [center requestAuthorizationWithOptions:(UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert) completionHandler:^(BOOL granted, NSError * _Nullable error) {
            if (!error) {
                DLog(@"request authorization succeeded!");
            }
        }];
    } else {
        if ([application respondsToSelector:@selector(registerUserNotificationSettings:)]) {
            //IOS8，创建UIUserNotificationSettings，并设置消息的显示类类型
            UIUserNotificationSettings *notiSettings = [UIUserNotificationSettings settingsForTypes:(UIUserNotificationTypeBadge | UIUserNotificationTypeAlert | UIUserNotificationTypeSound) categories:nil];
            
            [application registerUserNotificationSettings:notiSettings];
        }
    }
```

##### 三、UNUserNotificationCenterDelegate代理实现

在iOS10中处理推送消息需要实现UNUserNotificationCenterDelegate的两个方法：

```objc
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler


- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler 
```

其中第一个方法为App在前台的时候收到推送执行的回调方法，第二个为App在后台的时候，点击推送信息，进入App后执行的 回调方法。

以前处理推送，信息是在userInfo参数中，而新方法中表明上看并没有这个参数，其实我们一样可以获取到userInfo，如下：

```objc
/// App在前台时候回调
- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    NSDictionary *userInfo = notification.request.content.userInfo;
    [self handleRemoteNotificationForcegroundWithUserInfo:userInfo];
}

/// App在后台时候点击推送调用
- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler {
    NSDictionary *userInfo = response.notification.request.content.userInfo;
    [self handleRemoteNotificationBackgroundWithUserInfo:userInfo];
}
```

完成上面三个步骤的设置，对于iOS10的推送设置基本就适配了。要想自定义Notification Content或者实现其他NotificationAction请参考其他文章。这里只是做了对iOS10的适配。