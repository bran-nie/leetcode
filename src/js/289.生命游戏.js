/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length,
        n = board[0].length;

    /**
     * 返回当前格子周围的活细胞数量
     * @param {number[][]} board 面板
     * @param {number} m 面板的长度
     * @param {number} n 面板的宽度
     * @param {number} x 待搜索的 横坐标
     * @param {number} y 待搜索的 纵坐标
     * @returns number
     */
    const getLifeCount = (board, m, n, x, y) => {
        let count = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (!(i == 0 && j == 0)) {
                    const row = x + i;
                    const col = y + j;

                    // row 和 col 合法，且周围的格子是活细胞时，count++；因为 -1 状态表示该细胞曾经是活细胞，所以这里取值 abs
                    if (row < m && row >= 0 && col < n && col >= 0 && Math.abs(board[row][col]) === 1) {
                        count++;
                    }
                }
            }
        }
        return count;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const lifeCount = getLifeCount(board, m, n, i, j);

            // 规则 1 和 3
            if (board[i][j] === 1 && (lifeCount < 2 || lifeCount > 3)) {
                // 复合状态，-1 表示该细胞曾经是活细胞，现在是死细胞
                board[i][j] = -1;
            }
            // 规则 4
            if (board[i][j] === 0 && lifeCount === 3) {
                // 复合状态，2 表示该细胞曾经是死细胞，现在是活细胞
                board[i][j] = 2;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 将复合状态恢复成 0-1 状态
            board[i][j] = board[i][j] > 0 ? 1 : 0;
        }
    }
};
// @lc code=end
let board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
];

gameOfLife(board);
