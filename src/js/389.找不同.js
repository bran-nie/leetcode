/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let ans = 0;

    for (let c of s) {
        ans ^= c.charCodeAt();
    }
    for (let c of t) {
        ans ^= c.charCodeAt();
    }

    return String.fromCharCode(ans);
};
// @lc code=end
