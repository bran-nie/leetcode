/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    // 创建 dp 数组
    const f = new Array(m).fill(null).map(() => new Array(n).fill(0));

    // 矩阵 纵轴方向的路径和
    for (let i = 0; i < m; i++) {
        f[i][0] = i === 0 ? grid[i][0] : f[i - 1][0] + grid[i][0];
    }
    // 矩阵 横轴方向的路径和
    for (let j = 0; j < n; j++) {
        f[0][j] = j === 0 ? grid[0][j] : f[0][j - 1] + grid[0][j];
    }

    // 从 矩阵 grid[1][1] 开始，依次计算
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = Math.min(f[i][j - 1], f[i - 1][j]) + grid[i][j];
        }
    }

    return f[m - 1][n - 1];
};

// @lc code=end
