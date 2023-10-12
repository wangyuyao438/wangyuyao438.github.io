---
title: set的使用
date: 2023-09-26 06:27:07
tags: STL
author: WANGYUYAO
category: STL
excerpt: set就是一个拥有互异性的集合，按升序(从小到大)排列的一串数据。
---

# 介绍set

set，说白了就是一个集合，它是拥有互异性，按升序(从小到大)排列的一串数据。

# set的用法

## 声明
```cpp
set <int> a; // 创建一个名为a的int类型集合
```
## 操作
```cpp
a.insert(x) // 向集合a插入元素x
a.erase(x)  // 将集合a中的元素x删除
a.clear()   // 将集合a清空
```
## 查询
```cpp
a.size()   // 集合大小（不重复的元素个数）
a.empty()  // 判断集合是否为空，返回 true 或 false
a.begin()  // 头部指针，用于遍历
a.end()    // 尾部指针，用于遍历
a.find(x)  // 返回元素x在set中的位置(迭代器)，若没有元素x返回a.end()
a.count(x) // 判断元素x是否在集合中出现，返回 true 或 false
a.upper_bound(x) // 用法&效果等同于 a.find(x)，时间复杂度 O(log n)
a.lower_bound(x) // 用法&效果等同于 a.find(x)，时间复杂度 O(log n)
```
## TIPS 
> 如果想对结构体或没有重定向小于号的数据进行排序或去重，我们需要重定向小于号（`less<int>()`）,如下所示：
> ```cpp
> bool operator < (const int 类型名 & x) const {
> return 和x作比较の结果;
> }
> ```
