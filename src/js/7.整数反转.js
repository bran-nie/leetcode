/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;

        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31)) {
            return 0;
        }
    }
    return rev;
};
// @lc code=end
