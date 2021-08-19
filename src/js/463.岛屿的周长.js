/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const m = grid.length,
        n = grid[0].length;
    let ans = 0;
    const def = (grid, m, n, i, j) => {
        // 不合法的坐标 or 湖水
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
            ans++;
            return;
        }

        // 已经遍历过
        if (grid[i][j] === -1) {
            // ans -= 2;
            return;
        }
        // ans += 4;
        grid[i][j] = -1;
        def(grid, m, n, i + 1, j);
        def(grid, m, n, i - 1, j);
        def(grid, m, n, i, j + 1);
        def(grid, m, n, i, j - 1);
    };
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                def(grid, m, n, i, j);
                // 找到结果，返回周长
                // console.log(grid);
                return ans;
            }
        }
    }
};
// @lc code=end

islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
]);
