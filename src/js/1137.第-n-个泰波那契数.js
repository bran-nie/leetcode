/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let f0 = 0,
        f1 = 1,
        f2 = 1,
        f3 = 2;
    if (n < 2) return n;
    if (n === 2) return f2;
    for (let i = 3; i <= n; i++) {
        f3 = f0 + f1 + f2;
        f0 = f1;
        f1 = f2;
        f2 = f3;
    }
    return f3;
};
// @lc code=end
