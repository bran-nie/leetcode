/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    const f = new Array(m).fill(null).map(() => new Array(n).fill(0));

    // 状态转移方程是：f[m][n] = f[m-1][n] + f[m][n-1]
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            f[i][0] = 0;
            break;
        } else {
            f[i][0] = 1;
        }
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) {
            f[0][j] = 0;
            break;
        } else {
            f[0][j] = 1;
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                f[i][j] = f[i - 1][j] + f[i][j - 1];
            } else {
                f[i][j] = 0;
            }
        }
    }

    return f[m - 1][n - 1];
};
// @lc code=end
