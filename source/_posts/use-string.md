---
title: string的使用
date: 2023-09-26 06:27:28
tags: STL
author: WANGYUYAO
category: STL
description: string的用法比较灵活，类似于char类型的vector，但是很方便，而且出现范围很广。
---

# 1.什么是string
string是一个字符数组，用法比较灵活，类似于char类型的[vector](https://luogu532626blog.4everland.app/2023/09/26/use-vector/)。但它比起字符数组更加便于使用，不需要各种繁琐的代码。

# 2.用法
## (1) 声明
```cpp
string str; // 声明一个字符串
string strs[100]; // 声明一个字符串数组
```
## (2) 与子串有关（重要知识点）
```cpp
str.insert(loc, s); // 在第loc个字符后插入s
str.erase(loc, len); // 删除loc后的len个字符
str.find(s, pos = 0); // 从第pos的元素后查找字串s，未找到的返回值为string::npos
str.replace(s, loc, len); // 将loc后的len个字符替换为s
str.substr(loc, len); // 返回从第loc位后的len个字符
```
## (3) 头、尾及其迭代器
```cpp
str.front()  // 访问第一个元素，也可以写成str[0]
str.back()   // 访问最后一个元素，也可以写成str[str.size()-1]
str.begin()  // 指向第一个元素的迭代器
str.end()    // 指向最后一个元素后一位的迭代器
str.rbegin() // 指向最后一个元素的迭代器，只能用于倒序遍历 
str.rend()   // 指向第一个元素前一位的迭代器，只能用于倒序遍历
```
## (4) 重定向运算符
```cpp
str1 + str2 // 返回拼接的字符串（至少有一个string变量）
str1 < str2 // 判断str1的字典序是否小于str2的字典序
str1 == str2 // 判断str1是否与str2相同
str1 > str2 // 判断str1的字典序是否大于str2的字典序
str1 += str2; // 给str1后拼接str2
```
## (5) 其他友元函数
```cpp
sort(v.begin(), v.end());    // 排序
reverse(v.begin(), v.end()); // 翻转
```
