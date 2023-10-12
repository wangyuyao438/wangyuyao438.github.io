---
title: algorithm的使用
date: 2023-09-26 06:27:43
tags: STL
author: WANGYUYAO
category: STL
excerpt: algorithm是STL中大部分非成员函数的合集，从各种方面来说都非常好用，但是在有些正规考试中不给用STL（悲
---

# 1. 什么是algorithm？

algorithm库装满了好用的库函数，一般由`#include <algorithm>`包含。~~可是本蒻蒻还是喜欢万能头(逃~~

# 2. 经典的库函数
## (1) sort()函数
```cpp
sort(begin, end, cmp);
```
这个函数有一些技术含量，但它只需要传入两个指针**或随机迭代器**（begin 和 end）和cmp比较方式，默认可以不填，即从小到大排序，可是当你需要**从大到小**排序或需要**按照一定规则排序结构体**时，你便需要这个cmp了。

比如这是一个cmp函数的例子:
```cpp
bool cmp(student a, student b) {
	return a.score > b.score;
}
```
记住，在传参时，**只要传入cmp**即可。
## (2) reverse()函数
```cpp
reverse(begin, end);
```
这个函数相对于上一个要简单多了，只要传入两个指针**或随机迭代器**（begin 和 end）就可以了，它可以实现对容器的翻转。
## (3) next_permutation() 和 prev_permutation()
```cpp
next_permutation(begin, end, cmp);
prev_permutation(begin, end, cmp);
```
这是一对全排列函数，需要传入两个指针或随机迭代器(begin 和 end),`next_permutation` 返回 bool类型，即有没有下一个全排列，如果有，则将容器换到下一个全排列。同样，`prev_permutation` 返回的是有没有上一个全排列，用法也是一样的。但是这里的cmp其实没有太大作用，因为如果想用反向全排列，只要用另一个permutation函数就行了。
## (4) upper_bound() 和 lower_bound()
```cpp
upper_bound(begin, end, x);
lower_bound(begin, end, x);
```
这一对函数便是熟悉的二分查找。`upper_bound` 找右边界，另一个找左边界。这个函数的返回值是一个指针，即对应元素的位置。
# 3.配套例题
[$\color{orange}P1088$](https://www.luogu.com.cn/problem/P1088)

[$\color{orange}P1177$](https://www.luogu.com.cn/problem/P1177)

[$\color{yellow}P5250$](https://www.luogu.com.cn/problem/P5250)

[$\color{red}B2122$](https://www.luogu.com.cn/problem/B2122)

#### ~~点个赞呗~~
