/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    const directions = [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
    ];

    const isFalseX_Y = (tx, ty, rightX = board.length, rightY = board[0].length) => {
        return tx < 0 || tx >= rightX || ty < 0 || ty >= rightY;
    };

    // 深度优先搜索
    const def = (board, x, y) => {
        // 当前位置周边雷的数量
        let mineCount = 0;
        for (let [_x, _y] of directions) {
            const tx = x + _x,
                ty = y + _y;
            // 得出当前位置的周围，且只有在棋盘中的才会继续，否则 continue 退出本次 for 循环
            if (isFalseX_Y(tx, ty)) {
                continue;
            }
            // mineCount = board[tx][ty] === 'M' ? mineCount++ : mineCount;
            board[tx][ty] === 'M' && mineCount++;
        }

        if (mineCount > 0) {
            board[x][y] = String(mineCount);
        } else {
            board[x][y] = 'B';
            // 深度搜索周边的格子
            for (let [_x, _y] of directions) {
                const tx = x + _x,
                    ty = y + _y;
                // 当前坐标非法，或者当前坐标不是未挖的块，continue 退出本次 for 循环
                if (isFalseX_Y(tx, ty) || board[tx][ty] !== 'E') {
                    continue;
                }
                // def 搜索
                def(board, tx, ty);
            }
        }
    };

    const [x, y] = click;
    // 如果点击的是炸弹，标记为 X，Game over。
    if (board[x][y] === 'M') {
        board[x][y] = 'X';
    } else {
        def(board, x, y);
    }

    return board;
};
// @lc code=end
