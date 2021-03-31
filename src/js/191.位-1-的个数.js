/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    // let count = 0;
    // while (n > 0) {
    //     const m = n & 1;
    //     count += m === 1 ? 1 : 0;
    //     n >>= 1;
    //     console.log(n);
    // }
    // return count;

    let bits = 0,
        mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) !== 0) {
            bits++;
        }
        mask <<= 1;
    }
    return bits;

    // let sum = 0;
    // while (n !== 0) {
    //     sum++;
    //     n &= n - 1;
    // }
    // return sum;
};
// @lc code=end
