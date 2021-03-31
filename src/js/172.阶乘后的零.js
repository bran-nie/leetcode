/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    // let count = 0;
    // for (let i = 5; i <= n; i += 5) {
    //     let p = 5;
    //     while (i % p === 0) {
    //         count++;
    //         p *= 5
    //     }
    // }
    // return count;

    let zeroCount = 0;
    const currentMultiple = 5;
    while (n > 0) {
        n = Math.floor(n / currentMultiple);
        zeroCount += n;
    }
    return zeroCount;
};
// @lc code=end
