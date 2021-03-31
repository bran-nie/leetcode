/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    // let res = 0;
    // for (let i = 0; i < 32; i++) {
    //     res <<= 1; // res左移一位，补0
    //     res |= n & 1; // 换位，将n的末位给res的末位。
    //     n >>= 1; // n右移一位
    // }
    // return res >>> 0;

    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = (res << 1) + (n & 1); //每次取末尾
        n >>= 1;
    }
    return res >>> 0; // 必须要无符号右移
};
// @lc code=end
