/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    const len = customers.length;
    let total = 0;
    for (let i = 0; i < len; i++) {
        if (grumpy[i] === 0) {
            total += customers[i];
        }
    }
    let maxIncrease = 0;
    for (let i = 0; i < minutes; i++) {
        maxIncrease += customers[i] * grumpy[i];
    }
    let increase = maxIncrease;
    for (let i = minutes; i < len; i++) {
        // 减去旧滑动窗口的第一个，加上新的窗口的最后一个
        increase = increase - customers[i - minutes] * grumpy[i - minutes] + customers[i] * grumpy[i];
        maxIncrease = Math.max(maxIncrease, increase);
    }

    return total + maxIncrease;
};
// @lc code=end
