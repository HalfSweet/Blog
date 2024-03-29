---
title: 嵌入式中的 CI/CD
date: 2024-01-07 12:30:00
permalink: /posts/Empedded-CI-CD/
category:
  - 单片机
tag:
  - Air001
  - 合宙
  - CI/CD
author: 
  name: HalfSweet
  link: https://github.com/HalfSweet

---

对于传统的嵌入式开发来说，我们一般常用的IDE都是诸如Keil、IAR等。这些IDE在方便了我们的开发的同时，也存在很多问题，例如在之前Keil-MDK5是不能跨平台的，仅限在Windows平台运行，并且它的授权也是一个老大难的问题。这样我们在团队协作的时候往往就会遇到很多问题，无法像是互联网的开发那样有一套完整的CI/CD流程。但是MDK6的更新解决了这个问题，第一它是跨平台的，这样在Windows、Linux以及MacOS上都能运行；并且也支持了很多命令行的操作，避免了繁琐的GUI操作，这样也更有利于自动化脚本的编写。

<!-- more -->

## CI/CD是什么

CI/CD是指持续集成（Continuous Integration）和持续交付（Continuous Delivery），是一种软件开发实践，通过使用自动化的软件工具来加快软件开发的流程，这样可以更快的交付高质量的软件。CI/CD的核心是持续集成，即在开发过程中，频繁的将代码集成到主干上，这样可以更快的发现错误，更快的修复错误。而持续交付则是在持续集成的基础上，将集成后的代码部署到生产环境中，这样可以更快的将新功能交付给用户。

简单来说，就是作为开发者的我们，只需要关注代码的编写，而不需要关注代码的编译、测试、部署等等，这些都可以通过自动化的脚本来完成。如果有多人协作的场景下，最终产物的编译和交付也可以通过自动化的脚本来完成，而不是传统的需要人工来完成。

在本文中，我们采用Github Actions来完成CI/CD的流程。我假设本文的读者已经对Github Actions有一定的了解，如果没有的话也没关系，可以参考[官方文档](https://docs.github.com/cn/actions/learn-github-actions/introduction-to-github-actions)，并且本文也会对一些关键的地方进行说明。

## 一些前置条件

1. 一个基于Keil-MDK的工程，无论你之前是否配置过MDK6
2. 你的工程需要用AC6的编译器编译通过
3. 一个Github账号
4. 一定的学习能力

## 编写Github Actions脚本

我们假定你的这个工程在Github上已经新建了一个仓库，如果没有需要先新建一个仓库。然后在仓库的根目录下新建一个`.github/workflows`文件夹，然后在这个文件夹下新建一个`release.yml`文件，这个文件就是我们的Github Actions脚本。它的名称无所谓，但是后缀必须是`.yml`，这是YAML文件的后缀。

我们略去一些基础的Action的操作，直接进入到关键的一些步骤。

### 安装 vcpkg

vcpkg是微软开发的一个C/C++的包管理工具，类似于Python的pip、Node.js的npm、Java的maven等等。在MDK6中它被用来作为很重要的包管理器，因此我们需要保证先安装好它。安装非常简单，只需要：

```bash
. <(curl https://aka.ms/vcpkg-init.sh -L)
. ~/.vcpkg/vcpkg-init
vcpkg x-update-registry arm
```

::: note
`vcpkg x-update-registry arm`这一行的作用是更新arm的包列表
:::

### 将MDK5风格的工程转换为MDK6

这里Arm官方为我们提供了一个叫做`uv2csolution`的小工具，可以很方便地将`uvprojx`结尾的MDK5工程转换为MDK6，并且可以使用vcpkg直接安装。我们只需要

```bash
vcpkg use uv2csolution
cd MDK-ARM
uv2csolution CoreMark.uvprojx
```

这样我们就将仓库下的`MDK-ARM/CoreMark.uvprojx`转换为了MDK6的工程。

### activate vcpkg

因为MDK6采用了vcpkg作为包管理工具，因此需要一些工具链的依赖，在转换后的工程的`vcpkg-configuration.json`中我们可以看到一般所需的依赖。因此我们首先需要运行

```bash
vcpkg activate
```

去激活环境并自动安装这些所需的依赖。这个过程可能有些漫长，但是我们只需要等待。

### 激活ArmClang社区许可证

相信不少人在MDK5的学习中，都被许可证问题所困扰过，无数人都曾会对着那个会尖叫的注册机发过呆。但是在MDK6中，Arm为我们提供了一个免费社区许可证，我们可以很轻易地激活并使用。

::: warning
这是社区许可证，不能使用在任何商业用途中！！！

如果你需要商业使用，请联系Arm购买商业许可证！！！
:::

我们只需要运行命令：

```bash
armlm activate -product KEMDK-COM0 -server https://mdk-preview.keil.arm.com
```

即可激活社区许可证。

### 开始编译

万事俱备，我们只需要运行

```bash
cbuild CoreMark.csolution.yml --update-rte --packs
```

其中，`CoreMark`替换成你的实际工程名，`--update-rte`表示更新RTE文件，`--packs`表示自动安装所需的包。

如果一切顺利的话，我们会发现终端吐出一大堆编译的log，并且会有类似：

```text
Program Size: Code=25188 RO-data=2168 RW-data=216 ZI-data=1736  
info cbuild: build finished successfully!
```

这样的提示，表示编译成功。

### 生成hex及bin文件

编译完成后，默认生成的是axf，如果希望分发的话我们希望是hex或者bin文件，在这里我们可以使用ArmClang自带的`fromelf`命令来转换。

但是在运行之前，我们需要单独开一个ArmClang的环境，因此我们先结束掉之前的vcpkg环境

```bash
vcpkg deactivate
```

然后开启一个新的

```bash
vcpkg use armclang
```

这样我们就可以直接用`fromelf`命令来转换了

```bash
fromelf --bin --output="out/CoreMark/Project/CoreMark.bin" "out/CoreMark/Project/CoreMark.axf"
fromelf --i32 --output="out/CoreMark/Project/CoreMark.hex" "out/CoreMark/Project/CoreMark.axf"
```

## Release

这个时候我们将最终文件上传到release中就好了，这里我用的是`ncipollo/release-action`这个插件。具体的操作可以看演示仓库。

## FAQ

有问题可以评论区留言，遇到的问题可以更新在FAQ里。

## 演示仓库

<https://github.com/Air-duino/Air001-CoreMark>
