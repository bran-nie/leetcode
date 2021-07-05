/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num < 2) return true;

    let left = 2,
        right = num >> 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const temp = mid * mid;
        if (temp === num) return true;
        if (temp > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};
// @lc code=end
