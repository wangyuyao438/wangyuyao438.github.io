---
title: pair的使用
date: 2023-09-26 06:26:51
tags: STL
author: WANGYUYAO
category: STL
description: pair是一对数据而且他们的数据类型不同，同时它对结构体和没有重定向小于号的数据，进行排序或去重时，需要重定向小于号
cover: https://img1.imgtp.com/2023/10/15/88jm3fBI.png
---

# 介绍pair
pair，顾名思义，就是一对数据,而且他们的数据类型也可以不同。

# pair 的用法
## **声明**
```cpp
pair<int, string> a; 
// 创建一对first类型为int，second类型为string的数据
pair<int, string> a(114514, "homo"); 
// 创建一对first数值为114514，second字符串值为“homo”的数据
```
## **访问**
```cpp 
a.first   // 见“声明”，第一个元素
a.second  // 见“声明”，第二个元素
```
## **重定向**
```cpp
a < b  // 先比first是否较小,若first相等则判断second是否较小
a > b  // 先比first是否较大,若first相等则判断second是否较大
a == b // 比较first和second是否都相等
```
## **用途**
由如下代码生成pair插入map：
```cpp
make_pair(a, b)
// 创建一对first值为a，second值为b的数据
// 返回值的类型为 pair<a的类型, b的类型>
```
## **TIPS** 
> 如果想对结构体或没有重定向小于号的数据进行排序或去重，我们需要重定向小于号（`less<int>()`）,如下所示：
> ```cpp
> bool operator < (const int 类型名 & x) const {
> return 和x作比较の结果;
> }
> ```
