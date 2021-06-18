/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n === 0;

    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};
// @lc code=end
