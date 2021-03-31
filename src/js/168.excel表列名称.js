/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let r = '';
    while (n > 0) {
        let c = n % 26;
        if (c === 0) {
            c = 26;
            n -= 1;
        }
        r = String.fromCharCode(64 + c) + r;
        n = Math.floor(n / 26);
    }
    return r;
};
// @lc code=end
