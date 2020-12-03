---
title:  私有Pods
tags: [ios, cocoapods]
categories: [ios]
date: 2017-04-07 10:30:00
layout: post
---


当团队不在是一两个人，业务不再是简单几条线，业务随着时间的推移变得有多又混乱时，传统的一个工程或者一个workspace来开发已经显得不再方便，各个业务的代码管理在一起也显得结构比较混乱，比如Vender、Utils、Helper、Manager、Category、Network以及业务代码等。我们需要构建基础平台，将基础平台中的组件以Library的方式交付业务方使用。同样，对于业务众多的App，每个业务模块也可以使用Library的模式，通过CocoaPods集中构建到一起。

下面介绍私有Pods的创建过程，包括以下几个步骤：

1. 创建一个私有的Spec Repo
2. 将你的私有Repo添加到CocoaPods安装中
3. 将你的Podspec添加到你的Repo中

### 创建一个私有的Spec Repo 

要使用私有pod的集合，我们需要创建自己的Spec repo。应该将repo放在所有使用它的人都可以访问的地方。我们并不需要fork CocoaPods/Specs的Master repo。只需要确保团队中的每个人都可以访问此repo，并且不需要公开。

这一步其实很简单，在自己的GitLib服务器（也可以在GitHub或者OSChina上）创建Spec仓库。

```shell
$ cd /opt/git
$ mkdir Specs.git
$ cd Specs.git
$ git init --bare
```

下面使用位于 http://git.xxxx.com/wireless/Specs.git 这个位置的repo举例

### 将你的私有Repo添加到CocoaPods安装中

添加私有Repo到CocoaPods的命令格式为： `$ pod repo add REPO_NAME SOURCE_URL`

```shell
$ pod repo add ppd http://git.xxxx.com/wireless/Specs.git
```

此操作成功后会将仓库Specs克隆到 ~./cocoapods/repos/ppd 中。下面验证安装是否成功：


```shell
$ cd ~/.cocoapods/repos/ppd
$ pod repo lint .
```

会经历很长时间，并出现大量的点点点的符号。

### 将你的Podspec添加到你的Repo中

将Library的Podspec添加到Repo分两种情况处理：1.已经存在Library 2.从头开始创建Library

#### 已经存在Library

对于已经存在的 只需要创建并编辑Podspec，使用如下方式
    
```shell
$ cd ~/Documents/git/xxxx/PPDDemoApplication
$ touch PPDDemoApplication.podspec
```

也或者Library已经存在于Git上，可以使用下面命令创建：

```shell
$ pod spec create PPDDemoApplication http://git.xxxx.com/wanyakun/ppd-demo-application.git
```

打开podspec文件，编辑内容参考如下（更多介绍请参考：http://guides.cocoapods.org/syntax/podspec.html ）：

```Ruby
Pod::Spec.new do |s|
  s.name             = 'PPDDemoApplication'
  s.version          = '0.1.1'
  s.summary          = 'Demo主程序模块'
  s.description      = <<-DESC
Demo主程序模块，通过引入一系列插件，完成App的组装。插件部分独立开发独立测试，独立发布，主程序模块只需要引入插件模块即可
                       DESC

  s.homepage         = 'http://git.xxxx.com/wanyakun/ppd-demo-application'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'wanyakun' => 'wanyakun@vip.qq.com' }
  s.source           = { :git => 'http://git.xxxx.com/wanyakun/ppd-demo-application.git', :tag => s.version.to_s }

  s.ios.deployment_target = '8.0'

  s.source_files = 'PPDDemoApplication/Classes/**/*'
  s.resources = ['PPDDemoApplication/Assets/*.png']
  # s.resource_bundles = {
  #     'PPDDemoApplication' => ['PPDDemoApplication/Assets/*.png']
  #   }

  # s.public_header_files = 'Pod/Classes/**/*.h'
  # s.frameworks = 'UIKit', 'MapKit'
  # s.dependency 'AFNetworking', '~> 2.3'
    s.dependency 'PPDDemoHome'
    s.dependency 'PPDDemoMine'
    s.dependency 'BeeHive'
end
```

#### 从头开始创建Library

使用命令：`pod lib create PPDDemoApplication`，之后会让你回答一些问题：使用Swift还是Objc，是否包含demo application，使用什么测试framework等等。 创建后的目录如下：

```shell
$ tree PPDDemoApplication -L 2
PPDDemoApplication
├── Example
│   ├── Podfile
│   ├── Podfile.lock
│   ├── Pods
│   ├── Tests
│   ├── PPDDemoApplication
│   ├── PPDDemoApplication.xcodeproj
│   └── PPDDemoApplication.xcworkspace
├── LICENSE
├── README.md
├── PPDDemoApplication
│   ├── Assets
│   └── Classes
|       └── ReplaceMe.[swift/m]    
├── PPDDemoApplication.podspec
└── _Pods.xcodeproj -> Example/Pods/Pods.xcodeproj
```

关于这些目录的更多介绍，请参考：更多信息请参考：http://guides.cocoapods.org/making/using-pod-lib-create.html

通过Cocoapods创建出来的目录本身就在本地的Git管理下，我们需要做的就是给它添加远端仓库，同样去GitHub或其他的Git服务器创建一个私有的仓库（这里我使用的是内部GitLab服务器），拿到git地址，然后cd到PPDDemoApplication目录，提交代码、添加远程仓库、提交代码到远程仓库：

```shell
$ git add .
$ git commit -am "初始化Library"
$ git remote add origin http://git.xxxx.com/wanyakun/ppd-demo-application.git
$ git push origin master
```

在Classes目录创建Library相关的代码，完成Library开发后创建tag并推送到服务器：

```shell
$ git tag -a 0.1.0 -m "tag 0.1.0"
$ git push origin --tags
```

编辑PPDDemoApplication.podspec同上一节所述。

#### 验证并上传Podspec

编辑完podspec文件后，需要验证一下这个文件是否可用，如果有任何WARNING或者ERROR都是不可以的，它就不能被添加到Spec Repo中，不过xcode的WARNING是可以存在的，验证需要执行以下命令：

```shell
$ pod lib lint
```

当看到以下内容时说明验证通过了，不过这只是这个podspec文件是合格的，不一定说明这个Pod是可以用的，我们需要在本地做一下验证，就是真正添加到podfile中并在Example中使用，使用过CocoaPods的都知道怎么去做。

```shell
 -> PPDDemoApplication (0.1.0)

PPDDemoApplication passed validation.
```

验证通过后，就可以向我们的私有Spec Repo提交podspec了，只需要一个命令，格式为：`$ pod repo push REPO_NAME SPEC_NAME.podspec`


```shell
pod repo push ppd PPDDemoApplication.podspec 

Validating spec
 -> PPDDemoApplication (0.1.0)

Updating the `ppd' repo

Already up-to-date.

Adding the spec to the `ppd' repo

 - [Add] PPDDemoApplication (0.1.0)

Pushing the `ppd' repo

To http://git.xxxx.com/wireless/Specs.git
   9f4284c..60667bc  master -> master
```

此时在我们的 ~./cocoapods/repos/ppd 目录中就有PPDDemoApplication了，目录结构如下：

```shell
$ tree PPDDemoApplication -L 2
PPDDemoApplication
└── 0.1.0
    └── PPDDemoApplication.podspec
```

再检查远端仓库，Podspec已经被提交到Git服务器。

至此，我们的私有组件库已经制作完成，使用pod search命令就可以查到我们自己的库了。

```shell
pod search PPDDemoApplication

-> PPDDemoApplication (0.1.0)
   Demo主程序模块
   pod 'PPDDemoApplication', '~> 0.1.0'
   - Homepage: http://git.xxxx.com/wanyakun/ppd-demo-application
   - Source:   http://git.xxxx.com/wanyakun/ppd-demo-application.git
   - Versions: 0.1.0 [ppd repo]
```

**注意：**如果不能够通过pod search查询到自己创建的库，执行以下代码后重新搜索，此过程会对本地的Spec重新创建搜索索引:

```shell
rm ~/Library/Caches/CocoaPods/search_index.json 

pod search PPDDemoApplication
Creating search index for spec repo 'master'.. Done!
Creating search index for spec repo 'ppd'.. Done!
```

### 使用私有库

在使用私有库之前，需要在Podfile中添加source，然后就可以正常使用。

```Ruby
source 'http://git.xxxx.com/wireless/Specs.git'
source 'https://github.com/CocoaPods/Specs.git'
```

### 私有库中遇到的坑

请参考：http://www.jianshu.com/p/1e5927eeb341

### 类库打包工具 CocoaPods package

需要使用一个cocoapods的插件cocoapods-packager来完成类库的打包

- 安装打包插件

终端执行以下命令

```shell
sudo gem install cocoapods-packager
```

- 打包

终端执行以下命令

```shell
pod package PPDDemoUser.podspec --force
```

可以命令行执行 `pod package --help` 查看命令的可添加参数。


```shell
$ pod package --help
Usage:

    $ pod package NAME [SOURCE]

      Package a podspec into a static library.

Options:

    --force                                                         Overwrite existing
                                                                    files.
    --no-mangle                                                     Do not mangle
                                                                    symbols of
                                                                    depedendant Pods.
    --embedded                                                      Generate embedded
                                                                    frameworks.
    --library                                                       Generate static
                                                                    libraries.
    --dynamic                                                       Generate dynamic
                                                                    framework.
    --bundle-identifier                                             Bundle identifier
                                                                    for dynamic
                                                                    framework
    --exclude-deps                                                  Exclude symbols
                                                                    from dependencies.
    --configuration                                                 Build the
                                                                    specified
                                                                    configuration
                                                                    (e.g. Debug).
                                                                    Defaults to
                                                                    Release
    --subspecs                                                      Only include the
                                                                    given subspecs
    --spec-sources=private,https://github.com/CocoaPods/Specs.git   The sources to
                                                                    pull dependant
                                                                    pods from
                                                                    (defaults to
                                                                    https://github.com/CocoaPods/Specs.git)
```

- Podspec中有依赖私有库，通过package生成Framework的时候需要指定spec-sources

```shell
pod package PPDDemoUser.podspec --force --dynamic --spec-sources=http://git.xxxx.com/wireless/Specs.git,https://github.com/CocoaPods/Specs.git
```

- pod lib lint 和 pod repo push的时候，如果依赖私有库，需要指定sources

```shell
pod lib lint --allow-warnings --sources=http://git.xxxx.com/wireless/Specs.git,https://github.com/CocoaPods/Specs.git --use-libraries

pod repo push ppd PPDDemoMine.podspec --allow-warnings --sources=http://git.xxxx.com/wireless/Specs.git,https://github.com/CocoaPods/Specs.git --use-libraries
```

### 创建组件过程中出现ORGANIZATIONNAME为邮箱导致创建失败

ORGANIZATIONNAME为模板中设置的组织名称，如果未邮箱个格式会导致检查这个字段的时候失败，查询模板中project.pbxproj字段ORGANIZATIONNAME=PROJECT_OWNER，而PROJECT_OWNER在ProjectManipulator文件中配置为@configurator.user_name，configurator为TemplateConfigurator.rb的实例，user_name定义如下：

```ruby
    def user_name
      (ENV['GIT_COMMITTER_NAME'] || `git config user.name` || github_user_name || `<GITHUB_USERNAME>` ).strip
    end
```

所以，一般出现这个问题是git config user.name为邮箱造成的，将其改为非邮箱即可

### 查看二进制文件支持的CPU

```shell
$ lipo -info PPDDemoUser 
Architectures in the fat file: PPDDemoUser are: i386 x86_64 armv7 arm64 
```

### 查看二进制文件是否支持BitCode

```shell
# framework和app需要检查LLVM
$ otool -l PPDDemoUser | grep __LLVM
# framework lipo 后有问题，需要用下面命令
$ otool -arch armv7 -l openssl | grep __LLVM | wc -l
```
### 合并二进制文件（模拟器和真机）

```shell
lipo -create -output Release-universal/openssl.framework/openssl Release-iphonesimulator/openssl.framework/openssl Release-iphoneos/openssl.framework/openssl
```

### bitcode bundle could not be generated because was built without full bitcode.

