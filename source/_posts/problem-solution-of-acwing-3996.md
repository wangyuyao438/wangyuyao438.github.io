---
title: AcWing 3996. 涂色 题解
date: 2023-10-18 13:01:59
tags: 题解
author: WANGYUYAO
category: 题解
excerpt: 任选一种颜色，将最开始选定的起始砖块所在连通块中包含的所有砖块都涂为选定颜色，请问，至少需要多少次操作，才能使所有砖块都具有同一种颜色。
cover: https://img1.imgtp.com/2023/10/18/mQ2lTMlL.png
hidden: true
---

#### 原题？[Link](https://www.acwing.com/problem/content/description/3999/)

# 分析

在确定一个起点之后，从这个起点所在的的连通块向两边拓展，为了方便 ~~(节省时间)~~ ,可以将每一个连通快都浓缩成一个点。浓缩后用 $a_i$ 表示第 $i$ 个连通块的颜色，而连通块的个数为 $m$。
