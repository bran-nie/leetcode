/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let r = 0;
    let m = 1;
    const base = 'A'.charCodeAt() - 1;
    // 从后往前遍历字符串。
    for (let i = s.length - 1; i >= 0; i--) {
        // 得出当前字符的二十六进制值。（从1开始的噢
        const v = s[i].charCodeAt() - base;
        // 将当前值和当前位的进制值相乘得出  这个字符的 十进制，然后加给 返回值
        r += v * m;
        // 进制值继续乘26
        m *= 26;

        // 相比每次都调用 Math.pow(x, y)，减少了很多重复的n次方计算
    }
    return r;
};
// @lc code=end
