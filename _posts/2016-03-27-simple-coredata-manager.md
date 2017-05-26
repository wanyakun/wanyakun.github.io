---
title: 自己写简单CoreDataManager封装对CoreData操作
date: 2016-03-27 14:54:29
tags: [iOS, CoreData]
categories: [iOS]
---

关于CoreData的介绍太多，网上一搜大把全是，这里不介绍CoreData，直接上代码，注释写的很详细，应该很容易理解，暂时现做简单的增删该查，后面有时间再做修改完善。

**CoreDataManager.h**

```objc
//
//  CoreDataManager.h
//
//  Created by wanyakun on 16/1/6.
//  Copyright © 2016年 me.wanyakun. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface CoreDataManager : NSObject

+(CoreDataManager *)defaultManager;

/**
 *  插入单条数据到Entity
 *
 *  @param entity 实体字典
 *  @param name   Entity名称
 */
- (BOOL)insertCoreDataWithEntity:(NSDictionary *)entity name:(NSString *)name;

/**
 *  根据查询条件从实体中查询数据
 *
 *  @param entityName Entity名称
 *  @param predicate  查询条件
 *
 *  @return 字典数组
 */
- (NSMutableArray *)selectCoreDataFromName:(NSString *)name predicate:(NSString *)predicate;

/**
 *  更新单条数据到Entity
 *
 *  @param entity    更新内容
 *  @param name      Entity名字
 *  @param predicate 更新条件
 *
 *  @return 是否更新成功
 */
- (BOOL)updateCoreDataWithEntity:(NSDictionary *)entity name:(NSString *)name predicate:(NSString *)predicate;

/**
 *  从Entity中删除数据
 *
 *  @param entity    更新内容
 *  @param name      Entity名字
 *  @param predicate 更新条件
 *
 *  @return 是否删除成功
 */
- (BOOL)deleteCoreDataWithName:(NSString *)name predicate:(NSString *)predicate;

@end
```

**CoreDataManager.m**

```objc
//
//  CoreDataManager.m
//
//  Created by wanyakun on 16/1/6.
//  Copyright © 2016年 me.wanyakun. All rights reserved.
//

#import "CoreDataManager.h"

@interface CoreDataManager ()
/**
 *  负责应用和数据直接的交互CRUD
 */
@property (strong, nonatomic) NSManagedObjectContext *managedObjectContext;
/**
 *  添加持久化存储库（比如SQLite数据库）
 */
@property (strong, nonatomic) NSPersistentStoreCoordinator *persistentStoreCoordinator;
/**
 *  代表CoreData模型文件
 */
@property (strong, nonatomic) NSManagedObjectModel *managedObjectModel;
@end

@implementation CoreDataManager

#pragma mark - 单例
+(CoreDataManager *)defaultManager {
    static dispatch_once_t predicate;
    static CoreDataManager * defaultManager;
    dispatch_once(&predicate, ^{
        defaultManager=[[CoreDataManager alloc] init];
    });
    return defaultManager;
}

#pragma mark - public method
/**
 *  插入单条数据到Entity
 *
 *  @param entity 实体字典
 *  @param name   Entity名称
 */
- (BOOL)insertCoreDataWithEntity:(NSDictionary *)entity name:(NSString *)name
{
    NSManagedObject *object = [NSEntityDescription insertNewObjectForEntityForName:name inManagedObjectContext:self.managedObjectContext];
    [object setValuesForKeysWithDictionary:entity];
    // 利用上下文对象，将数据同步到持久化存储库
    NSError *error = nil;
    BOOL success = [self.managedObjectContext save:&error];
    if (!success) {
        NSLog(@"保存数据到数据库错误：%@",[error localizedDescription]);
        return NO;
    }
    return YES;
}

/**
 *  根据查询条件从实体中查询数据
 *
 *  @param entityName Entity名称
 *  @param predicate  查询条件
 *
 *  @return 字典数组
 */
- (NSMutableArray *)selectCoreDataFromName:(NSString *)name predicate:(NSString *)predicate
{
    NSFetchRequest *request = [[NSFetchRequest alloc] init];
    
    NSEntityDescription *entity = [NSEntityDescription entityForName:name inManagedObjectContext:self.managedObjectContext];
    request.entity = entity;
    
    if (predicate) {
        NSPredicate *predicateObject = [NSPredicate predicateWithFormat:predicate];
        request.predicate = predicateObject;
    }
    
    NSError *error;
    NSArray *fetchedObjects = [self.managedObjectContext executeFetchRequest:request error:&error];
    NSMutableArray *resultArray = [NSMutableArray array];
    
    for (NSManagedObject *object in fetchedObjects) {
        NSMutableDictionary *dict = [NSMutableDictionary dictionary];
        for (NSPropertyDescription *property in entity.properties) {
            NSString *key = property.name;
            id value = [object valueForKey:key];
            [dict setValue:value forKey:key];
        }
        [resultArray addObject:dict];
    }
    return resultArray;
}

/**
 *  更新单条数据到Entity
 *
 *  @param entity    更新内容
 *  @param name      Entity名字
 *  @param predicate 更新条件
 *
 *  @return 是否更新成功
 */
- (BOOL)updateCoreDataWithEntity:(NSDictionary *)entity name:(NSString *)name predicate:(NSString *)predicate
{
    NSFetchRequest *request = [[NSFetchRequest alloc] init];
    
    NSEntityDescription *entityDescription = [NSEntityDescription entityForName:name inManagedObjectContext:self.managedObjectContext];
    request.entity = entityDescription;
    
    if (predicate) {
        NSPredicate *predicateObject = [NSPredicate predicateWithFormat:predicate];
        request.predicate = predicateObject;
    }
    
    NSError *error;
    NSArray *fetchedObjects = [self.managedObjectContext executeFetchRequest:request error:&error];
    
    for (NSManagedObject *object in fetchedObjects) {
        [object setValuesForKeysWithDictionary:entity];
    }
    
    BOOL success = [self.managedObjectContext save:&error];
    if (!success) {
        NSLog(@"更新数据到数据库错误：%@",[error localizedDescription]);
        return NO;
    }
    return YES;
}

/**
 *  从Entity中删除数据
 *
 *  @param entity    更新内容
 *  @param name      Entity名字
 *  @param predicate 更新条件
 *
 *  @return 是否删除成功
 */
- (BOOL)deleteCoreDataWithName:(NSString *)name predicate:(NSString *)predicate
{
    NSFetchRequest *request = [[NSFetchRequest alloc] init];
    
    NSEntityDescription *entityDescription = [NSEntityDescription entityForName:name inManagedObjectContext:self.managedObjectContext];
    request.entity = entityDescription;
    
    if (predicate) {
        NSPredicate *predicateObject = [NSPredicate predicateWithFormat:predicate];
        request.predicate = predicateObject;
    }
    
    NSError *error;
    NSArray *fetchedObjects = [self.managedObjectContext executeFetchRequest:request error:&error];
    
    for (NSManagedObject *object in fetchedObjects) {
        [self.managedObjectContext deleteObject:object];
    }

    BOOL success = [self.managedObjectContext save:&error];
    if (!success) {
        NSLog(@"删除数据出错：error:%@",error);
        return NO;
    }
    return YES;
}

#pragma mark - private method
//获取Documents路径
- (NSURL *)applicationDocumentsDirectory
{
    return [[[NSFileManager defaultManager] URLsForDirectory:NSDocumentDirectory inDomains:NSUserDomainMask] lastObject];
}

- (NSString *)bundleName
{
    return [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleName"];
}

#pragma mark - getter setter
- (NSManagedObjectContext *)managedObjectContext
{
    if (_managedObjectContext == nil) {
        _managedObjectContext = [[NSManagedObjectContext alloc] init];
        _managedObjectContext.persistentStoreCoordinator = [self persistentStoreCoordinator];
    }
    return _managedObjectContext;
}

- (NSPersistentStoreCoordinator *)persistentStoreCoordinator
{
    if (_persistentStoreCoordinator == nil) {
        _persistentStoreCoordinator = [[NSPersistentStoreCoordinator alloc] initWithManagedObjectModel:self.managedObjectModel];
        
        NSURL *storeURL = [[self applicationDocumentsDirectory] URLByAppendingPathComponent:[self bundleName]];
        NSError *error = nil;
        if (![_persistentStoreCoordinator addPersistentStoreWithType:NSSQLiteStoreType configuration:nil URL:storeURL options:nil error:&error]) {
            NSLog(@"Unresolved error %@, %@", error, [error userInfo]);
            abort();
        }
    }
    return _persistentStoreCoordinator;
}

- (NSManagedObjectModel *)managedObjectModel
{
    if (_managedObjectModel == nil) {
        _managedObjectModel = [NSManagedObjectModel mergedModelFromBundles:nil];
    }
    return _managedObjectModel;
}

@end
```


