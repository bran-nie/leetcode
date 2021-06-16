/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if (timeSeries.length === 0) return 0;
    let ans = duration;
    for (let i = 1; i < timeSeries.length; i++) {
        const diffVal = timeSeries[i] - timeSeries[i - 1];
        if (diffVal >= duration) {
            ans += duration;
        } else {
            ans += diffVal;
        }
    }
    return ans;
};
// @lc code=end
