/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    while (b != 0) {
        let temp = a ^ b;
        b = (a & b) << 1;
        a = temp;
    }
    return a;
};
// @lc code=end
