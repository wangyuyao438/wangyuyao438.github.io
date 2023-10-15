---
title: vector的使用
date: 2023-09-26 06:27:16
tags: STL
author: WANGYUYAO
category: STL
description: vector是一种可变数组,是部分STL容器的基类(基于vector开发deque,priority_queue等)
cover: https://img1.imgtp.com/2023/10/15/kQdkHQMq.png
---

# 1.什么是vector
vector,即向量，是STL中比较常见的数据类型之一。它比数组运用更加灵活，且支持各种类型，同时也是部分STL容器的基类。

# 2.用法
## (1) 声明：
```cpp
#include <vector>        // 头文件
vector<数据类型> 向量名; // 声明一维vector
vector<vector<数据类型> > 向量数组名; // 声明二维，注意最后两个>之间要有空格(c++11以前的版本会将其识别为右移符)
```
## (2) 在尾部插入/删除元素：
```cpp
v.push_back(x); // 在尾部插入x
v.pop_back();   // 删除最后一位元素
//注意：不能直接 v[下标] = 元素，否则会RTE
```
## (3) 头、尾及其迭代器
```cpp
v.front()  // 访问第一个元素，也可以写成v[0]
v.back()   // 访问最后一个元素，也可以写成v[v.size()-1]
v.begin()  // 指向第一个元素的迭代器
v.end()    // 指向最后一个元素后一位的迭代器
v.rbegin() // 指向最后一个元素的迭代器，只能用于倒序遍历 
v.rend()   // 指向第一个元素前一位的迭代器，只能用于倒序遍历
```
## (4) 其他主要成员函数
```cpp
v.size()          // 返回元素个数
v.insert(it, num) // 在迭代器it后插入num
v.erase(it1, it2) // 删除it1~it2的所有元素
v.clear()         // 清空vector
```
## (5) 其他友元函数
```cpp
sort(v.begin(), v.end());    // 排序
reverse(v.begin(), v.end()); // 翻转
```
