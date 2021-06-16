/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1,
        right = n;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        const r = guess(mid);
        if (r === 0) return mid;
        else if (r < 0) right = mid - 1;
        else left = mid + 1;
    }
};
// @lc code=end
