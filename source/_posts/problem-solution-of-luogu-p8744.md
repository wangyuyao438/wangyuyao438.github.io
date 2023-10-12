---
title: Luogu P8744 左孩子右兄弟 题解
date: 2023-09-26 06:24:15
tags: 题解
author: WANGYUYAO
category: 题解
excerpt: 给定一棵节点个数为 N 的多叉树，求其通过"左孩子右兄弟"表示法转化成的二叉树，高度最高是多少。
---

#### 原题？[Link](https://www.luogu.com.cn/problem/P8744)

# 题目大意

给定一棵节点个数为 $N$ 的多叉树，求其通过<font color = 
"Red">"左孩子右兄弟"</font>表示法转化成的二叉树，高度最高是多少。

# 解决思路
首先分辨出此题目是树状DP，并了解<font color = 
"Red">"左孩子右兄弟"</font>表示法的转换方式，便开始考虑DP的<font color = "Orange">状态</font><font color = "Green">转移</font>方程。

## 状态
由于每个节点由 $1$ 至 $N$ 编号，那么就使用 $dp_{k}$ 表示此时k号节点的<font color = "Orange">目标状态（转化后二叉树的最高高度）</font>。

## 转移
这里需要用到 <font color = "Red">贪心策略</font>， 对于一个节点 $k$ , 它的子节点为 $\{v_1,v_2,v_3,\dots,v_cnt\}$, 那么使用贪心策略找到<font color = "Blue">能作出贡献最大的</font>的子节点 （$\max\{v_1,v_2,v_3,\dots,v_cnt\}$），再将其他的节点垫在它上面（ $\max\{v_1,v_2,v_3,\dots,v_k\} + cnt$）就行了。

## 目标状态
根节点编号为 $1$ ,所以整个算法的 <font color = "Red">目标状态</font> 为 $dp_1$。

## Code & 解析

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 100010;
long long n, x, dp[N];
vector<long long> v[N];          // 保存子节点 
void DP(long long x) {
  for (auto i : v[x]) {      
    DP(i);                       // 先找出以此节点为根的最大高度
    dp[x] = max(dp[x], dp[i]);   // 找出最能作出贡献的，将其放在最下面
  } dp[x] += v[x].size();        // 将其它的子节点叠在上面
}
int main() {
  cin >> n;
  for (int i = 2; i <= n; i++) {
    cin >> x; v[x].push_back(i); // 压入子节点
  } DP(1);                       // 从根节点开始访问
  cout << dp[1];                 // 输出最终状态
  return 0;
}
```

 
