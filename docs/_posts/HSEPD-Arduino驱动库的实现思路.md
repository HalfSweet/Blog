---
title: HSEPD-Arduino驱动库的实现思路
date: 2023-04-13 21:51:37
permalink: /pages/4033e3/
sidebar: auto
categories:
  - 日常
tags:
  - 
author: 
  name: HalfSweet
  link: https://github.com/HalfSweet
---

闲的没事记录一下[HSEPD](https://github.com/HalfSweet/HSEPD-Arduino)的重构过程，提醒自己每一步做了什么，同时也算是对于整个项目的一点介绍，希望大家喜欢。
<!-- more -->

## 底层通信的接口实现
### 分析需求
不管是对于什么屏幕，我们都需要使用MCU向外发送/读取数据，当然读取的过程大部分情况下可以忽略，毕竟我们不指望从屏幕中读取到什么。但是通信的方式不一而足，例如常见的串口屏使用的SPI就有`3-wire SPI`与`4-wire SPI`的选择，其区别仅仅只是在`3-wire SPI`中使用的是9bit通信，最高位的0和1分别对应`命令`和`数据`。并且哪怕是SPI，也有硬件和软件SPI的区分，理论上来说使用硬件SPI当然是最好的，但是在一些情况下我们无法使用硬件，那也只能选择软件SPI了。

但是我们在驱动中，显然是不关心具体的通信方式，我们只需要知道发送了什么命令或者什么数据即可，因此我们首先需要将通信的接口给抽象出来。

### 创造接口类
对于一般的屏幕来说，我们需要发送的只有两类数据，分别为`命令`和`数据`。通俗一点来说，`命令`就相当于一个寄存器的地址，`数据`相当于寄存器里面的内容，我们需要先发送命令再发送数据，并且一个命令下可以有多个数据。一些命令并不需要数据，只要是发送便代表相应的功能。并且有时候我们会有这么一个需求：在一个命令中需要发送多个数据，一次性发完。因此我们写出了如下的一个总线接口类：

```cpp
class HSEPD_BUS // 在这个类中仅仅实现数据总线的接口
{
private:
protected:
    int32_t _speed; // 通信的速度

public:
    HSEPD_BUS();
    ~HSEPD_BUS();

    /**
     * @brief 写1个字节的数据
     *
     * @param value 需要写入的数据
     */
    virtual void Write(uint8_t value) = 0;

    /**
     * @brief 写1个字节的命令
     *
     * @param command 需要写入的命令
     */
    virtual void WriteCommand(uint8_t command) = 0;

    /**
     * @brief 写1个字节的数据
     *
     * @param data 需要写入的数据
     */
    virtual void WriteData(uint8_t data) = 0;

    /**
     * @brief 写dataLen个字节的数据
     * 
     * @param data 需要写入的数组首地址
     * @param dataLen 需要写入的数组的总长度
     */
    virtual void WriteBytes(uint8_t *data, uint8_t dataLen) = 0;

    /**
     * @brief 写1个字节的命令，以及Datalen - 1个字节的数据
     *
     * @param value 需要写入的数组首地址
     * @param dataLen 需要写入的数组的总长度
     */
    virtual void WriteCMDDATA(uint8_t *value, uint8_t dataLen) = 0;

    /**
     * @brief 读取1个字节的数据
     *
     * @return uint8_t 读取的数据
     */
    virtual uint8_t Read() = 0;

    /**
     * @brief 写入1个字节的命令，并读取1个字节的数据
     *
     * @param command 需要写入的命令
     * @return uint8_t 读取到的数据
     */
    virtual uint8_t ReadData(uint8_t command) = 0;

    /**
     * @brief 写入1个字节的命令，并读取dataLen - 1字节的数据
     *
     * @param command 需要写入的命令
     * @param dataLen  需要读取的数据长度
     * @param data 需要读取的数据数组指针
     */
    virtual void ReadData(uint8_t command, uint8_t dataLen, uint8_t *data) = 0;
};
```

### 实现具体的接口
在上面我们已经创造出了一个接口类，并且采用了纯虚函数的定义，这就意味着我们需要编写一个具体的类去重载这些虚函数，这样才能发挥具体的功能。因此我们在`src/Bus/`目录下创造了一个新的目录，我们取名为`ESP8266SoftSPI`，从名字上不难看出是ESP8266芯片的软件SPI实现。

具体的代码不多赘述，可以参考原仓库，总之目的是把接口的虚函数进行重载，实现具体的功能。

但是这里我们需要注意一点，`ESP8266SoftSPI`的构造函数的参数和`HSEPD_BUS`的不同，我们在其构造函数的参数列表中指定了具体的引脚编号，这样我们就可以通过`ESP8266SoftSPI bus(dc, busy, cs, sck, mosi)`的方式进行构造指定具体的IO。同时我们也发现，使用这样的方式可以做到硬件解耦，不同的类可以有不同的构造方式，但是我们都可以从基类的`HSEPD_BUS`进行访问抽象出来的方法，而不需要再关系具体的实现细节。