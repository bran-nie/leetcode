/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    const quickMul = (x, n) => {
        let ans = 1;

        let x_base = x;
        while (n > 0) {
            if (n % 2 === 1) {
                ans *= x_base;
            }
            x_base *= x_base;

            n = n >> 1;
        }

        return ans;
    };

    if (n === 0 || (n <= 1 << 31 && Math.abs(x) === 1)) return 1;
    if (n <= 1 << 31) return 0;

    return n > 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};
// @lc code=end
