/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length,
        n = grid[0].length;

    let visitedCount = 0;

    let totalLand = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                totalLand++;
            }
        }
    }

    const def = (grid, m, n, i, j) => {
        if (grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0';
        visitedCount++;

        // 向下
        if (i < m - 1) {
            def(grid, m, n, i + 1, j);
        }
        // 向上
        if (i > 0) {
            def(grid, m, n, i - 1, j);
        }
        // 向右
        if (j < n - 1) {
            def(grid, m, n, i, j + 1);
        }
        if (j > 0) {
            def(grid, m, n, i, j - 1);
        }
    };

    let landsCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                def(grid, m, n, i, j);
                if (visitedCount <= totalLand) {
                    landsCount++;
                }
            }
        }
    }
    return landsCount;
};
// @lc code=end
let grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '1'],
];

numIslands(grid);
