/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length,
        n = word2.length;
    const dp = Array(m + 1)
        .fill(0)
        .map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = j;
    }
    // console.log(dp);

    for (let i = 1; i <= m; i++) {
        const c1 = word1[i - 1];
        for (let j = 1; j <= n; j++) {
            const c2 = word2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }

    return dp[m][n];
};
// @lc code=end
