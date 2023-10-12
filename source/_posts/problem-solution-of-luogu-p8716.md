---
title: Luogu P8716 回文日期 题解
author: WANGYUYAO
date: 2023-09-25 12:00:51
tags: 题解
category: 题解
excerpt: 给定一个 8 位数的日期，请你计算该日期之后下一个回文日期和下一个 ABABBABA 型的回文日期各是哪一天。
---

#### 原题？[Link](https://www.luogu.com.cn/problem/P8716)

# STEP 1：分析

题目大意：给定一个 8 位数的日期，请你计算该日期之后下一个回文日期和下一个 ABABBABA 型的回文日期各是哪一天。

这一题一眼看出是 P2010 的升级版，所以要先考虑到超时问题，因为如果一天一天地枚举，时间复杂度会非常高，所以我们不能直接枚举。因为题目只要"回文"，所以我们只要一个个扫描年份，再根据年份的反转数得到日期，并判断得出的日期是否合法，记得闰年特判，就能得出答案了。

# STEP 2：构建
## 判断闰年函数
``` cpp
bool rn(int yy) {
	return (yy % 400 == 0) || (yy % 4 == 0 && yy % 100 != 0);
	/*能被400整除的或不是整百能被4整除的都是闰年*/
}
```

## 构建反转函数
``` cpp
int rev(int x) {
	int sum;
	for (sum = 0; x; x /= 10) sum = sum * 10 + x % 10;
	/*循环将x的最后一位加到sum后面，类似栈的想法（后进先出）*/
	return sum;
}
```
## 构建两种判断
这里需要注意：
1. 要判断闰年
2. 不能算错日期

这里有两种判断（普通回文日期和 ABABBABA 型日期），可以试着利用普通回文日期的判断减少 ABABBABA 型日期判断的码量。
``` cpp
bool check(int yy) {
	if (rn(yy)) mon[2] = 29; // 闰年的特判
	else mon[2] = 28;        // 重点！mon数组在不是闰年时一定要清零
	int mm = (yy % 10) * 10 + (yy / 10 % 10);    // 年份后两位反转得出几月
	int dd = (yy / 100 % 10) * 10 + (yy / 1000); // 年份前两位反转得出几日
	return mm >= 1 && mm <= 12 && dd >= 1 && dd <= mon[mm]; 
	// 判断月份是否在 1~12 的范围内, 日期是否在当月的范围内
}
```
``` cpp
bool ABABBABA(int yy) {
	return check(yy) && // 这里可以不用再写一次了
		(yy % 10 == yy / 100 % 10) && 
		(yy / 10 % 10 == yy / 1000); 
		// 只要判断年份是否为 “ABAB” 就行了，因为已经判断回文
}
```
## 主函数
在主函数里，有一个非常重要的环节：特判当前年份有没有这两个种类的回文日期，因为不是按日期枚举，所以无法从给定的日期开始枚举，那么就需要特判。
``` cpp
cin >> n;
yy = n / 10000;
mm = n / 100 % 100;
dd = n % 100;
int dt = rev(yy), dmm = dt / 100 % 100, ddd = dt % 100;
if (ABABBABA(yy) && (dmm > mm || (dmm == mm && ddd > dd))) {
	check2 = yy; // 在给定日期之后的第一个ABABBABA型日期
}
if (check(yy) && (dmm > mm || (dmm == mm && ddd > dd))) {
	check1 = yy; // 在给定日期之后的第一个回文日期
}
```
好了，最后我们只要枚举以后的年份，直到找到答案。
``` cpp
for (int i = yy + 1; ; i++) {
	if (check1 != -1 && check2 != -1) break;
    // 两个目标都找到了，退出
	if (ABABBABA(i) && check2 == -1) check2 = i;
    // 保存ABABBABA型日期
	if (check(i) && check1 == -1) check1 = i;
    // 保存回文日期
}
printf("%04d%04d\n%04d%04d", check1, rev(check1), check2, rev(check2));
```
所有的步骤都分析完了，请读者自行完成完整代码~\ ~~制作不易，希望这篇题解能有些用处~~
