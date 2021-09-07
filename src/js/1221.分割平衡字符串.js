/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let ans = 0;
    let l = 0,
        r = 0;
    for (let c of s) {
        if (c === 'L') {
            l++;
        } else {
            r++;
        }

        if (l === r) {
            ans++;
            l = 0;
            r = 0;
        }
    }
    return ans;
};
// @lc code=end
