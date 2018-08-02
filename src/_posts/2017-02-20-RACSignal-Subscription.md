---
title:  一张图理解RACSignal的Subscription过程
date: 2017-02-20 16:46:00
tags: [iOS, RAC]
categories: [iOS]
layout: post
---

现在遇到很多朋友都在使用MVVM的开发方式，在iOS中使用MVVM的开发方式势必会用到ReactiveCocoa（RAC），而大部分人对其并不是很理解，而只停留在使用的层面，有些人能够说出RAC调用过程是先创建信号、然后订阅信号、然后发送信号。总的流程来讲是这个样的，但是看源码的话，里面细节还是蛮多的。下面分析一下RACSignal的Subscription过程。

通过下面一张图理解RACSignal的调用过程：

![RAC](http://kunkun.qiniudn.com/RAC.png?imageView2/2/w/1000)

## 创建signale
RACSignal通过子类[RACDynamicSignal createSignal:]方法获得Signal，并将disSubscribe这个block保存在Signal中。


```objc
+ (RACSignal *)createSignal:(RACDisposable * (^)(id<RACSubscriber> subscriber))didSubscribe {
	return [RACDynamicSignal createSignal:didSubscribe];
}
```

```objc
+ (RACSignal *)createSignal:(RACDisposable * (^)(id<RACSubscriber> subscriber))didSubscribe {
	RACDynamicSignal *signal = [[self alloc] init];
	signal->_didSubscribe = [didSubscribe copy];
	return [signal setNameWithFormat:@"+createSignal:"];
}
```

## 创建subscriber
signal通过调用subscribeNext方法生成subscriber，并将next、error、completed block保存在subscriber中

```objc
- (RACDisposable *)subscribeNext:(void (^)(id x))nextBlock {
	NSCParameterAssert(nextBlock != NULL);
	
	RACSubscriber *o = [RACSubscriber subscriberWithNext:nextBlock error:NULL completed:NULL];
	return [self subscribe:o];
}
```

```objc
+ (instancetype)subscriberWithNext:(void (^)(id x))next error:(void (^)(NSError *error))error completed:(void (^)(void))completed {
	RACSubscriber *subscriber = [[self alloc] init];

	subscriber->_next = [next copy];
	subscriber->_error = [error copy];
	subscriber->_completed = [completed copy];

	return subscriber;
}
```

## 进行subscribe
第二步创建subscriber之后调用signal的subscribe方法，并将创建的subscriber作为参数。
这一步会生成RACCompoundDisposable和RACPassthroughSubscriber对象。
- RACCompoundDisposable：RACDisposable的子类，可以加入多个RACDisposable对象。当RACCompoundDisposable对象被dispose的时候，会dispose容器内的所有RACDisposable对象。
- RACPassthroughSubscriber：分别保存对RACSignal，RACSubscriber，RACCompoundDisposable的引用。通过RACPassthroughSubscriber对象来转发给真正的Subscriber。

```objc
- (RACDisposable *)subscribe:(id<RACSubscriber>)subscriber {
	NSCParameterAssert(subscriber != nil);

	RACCompoundDisposable *disposable = [RACCompoundDisposable compoundDisposable];
	subscriber = [[RACPassthroughSubscriber alloc] initWithSubscriber:subscriber signal:self disposable:disposable];

	if (self.didSubscribe != NULL) {
		RACDisposable *schedulingDisposable = [RACScheduler.subscriptionScheduler schedule:^{
			RACDisposable *innerDisposable = self.didSubscribe(subscriber);
			[disposable addDisposable:innerDisposable];
		}];

		[disposable addDisposable:schedulingDisposable];
	}
	
	return disposable;
}
```

## 执行disSubscribe block
RACSignal通过RACScheduler.subscriptionScheduler来执行闭包，disSubscribe真正被调用的的位置就是上一步的`RACDisposable *innerDisposable = self.didSubscribe(subscriber);`

```objc
- (RACDisposable *)schedule:(void (^)(void))block {
	NSCParameterAssert(block != NULL);

	if (RACScheduler.currentScheduler == nil) return [self.backgroundScheduler schedule:block];

	block();
	return nil;
}
```

## 调用sendNext sendError sendCompleted
进入didSubscribe闭包后，调用sendNext:、sendError:、sendCompleted。由于第三步中将subscriber替换为RACPassthroughSubscriber对象，真正的subscriber被存储在RACPassthroughSubscriber对象中，即innerSubscriber，所以这一步的各种send方法其实是一个转发过程。

```objc
- (void)sendNext:(id)value {
	if (self.disposable.disposed) return;

	if (RACSIGNAL_NEXT_ENABLED()) {
		RACSIGNAL_NEXT(cleanedSignalDescription(self.signal), cleanedDTraceString(self.innerSubscriber.description), cleanedDTraceString([value description]));
	}

	[self.innerSubscriber sendNext:value];
}

- (void)sendError:(NSError *)error {
	if (self.disposable.disposed) return;

	if (RACSIGNAL_ERROR_ENABLED()) {
		RACSIGNAL_ERROR(cleanedSignalDescription(self.signal), cleanedDTraceString(self.innerSubscriber.description), cleanedDTraceString(error.description));
	}

	[self.innerSubscriber sendError:error];
}

- (void)sendCompleted {
	if (self.disposable.disposed) return;

	if (RACSIGNAL_COMPLETED_ENABLED()) {
		RACSIGNAL_COMPLETED(cleanedSignalDescription(self.signal), cleanedDTraceString(self.innerSubscriber.description));
	}

	[self.innerSubscriber sendCompleted];
}
```

## 执行next error completed闭包
通过调用innerSubscriber的sendNext:、sendError、和sendCompleted方法执行真正的subscriber中的next error completed闭包

```objc
- (void)sendNext:(id)value {
	@synchronized (self) {
		void (^nextBlock)(id) = [self.next copy];
		if (nextBlock == nil) return;

		nextBlock(value);
	}
}

- (void)sendError:(NSError *)e {
	@synchronized (self) {
		void (^errorBlock)(NSError *) = [self.error copy];
		[self.disposable dispose];

		if (errorBlock == nil) return;
		errorBlock(e);
	}
}

- (void)sendCompleted {
	@synchronized (self) {
		void (^completedBlock)(void) = [self.completed copy];
		[self.disposable dispose];

		if (completedBlock == nil) return;
		completedBlock();
	}
}
```

## 过程回顾
去掉中间的繁杂细节，大致过程如下：
1.通过createSignal生成信号
2.通过subscribeNext确定信号内容到来时的处理方式
3.didSubscribe block块中异步处理完毕之后，进行sendNext、sendError和sendCompleted自动处理