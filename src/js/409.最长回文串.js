/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = {};
    for (let c of s) {
        if (Object.prototype.hasOwnProperty.call(map, c)) {
            map[c]++;
        } else {
            map[c] = 1;
        }
    }
    let ans = 0;
    let isSingle = false;
    for (let key in map) {
        if (!isSingle && map[key] % 2 === 1) {
            isSingle = true;
            ans += 1;
        }
        ans += (map[key] >> 1) * 2;
    }
    return ans;
};
// @lc code=end
