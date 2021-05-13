/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = [];
    const cols = [];
    const squares = [];

    return board.every((row, rowIndex) => {
        return row.every((item, colIndex) => {
            !rows[rowIndex] && rows.push({});
            !cols[colIndex] && cols.push({});

            const squareIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3);
            !squares[squareIndex] && squares.push({});

            if (item !== '.') {
                // 行查询或存储
                if (rows[rowIndex][item]) {
                    return false;
                } else {
                    rows[rowIndex][item] = true;
                }
                // 列查询或存储
                if (cols[colIndex][item]) {
                    return false;
                } else {
                    cols[colIndex][item] = true;
                }
                // 方块查询或存储
                if (squares[squareIndex][item]) {
                    return false;
                } else {
                    squares[squareIndex][item] = true;
                }
            }
            return true;
        });
    });
};
// @lc code=end
