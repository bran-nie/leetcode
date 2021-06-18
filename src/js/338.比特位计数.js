/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const ans = Array(n + 1).fill(0);
    let m = 0;
    for (let i = 1; i <= n; i++) {
        if ((i & (i - 1)) === 0) {
            m = i;
        }
        ans[i] = ans[i - m] + 1;
    }
    return ans;
};
// @lc code=end
