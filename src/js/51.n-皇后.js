/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const generateBoard = (queens, n) => {
        const board = [];
        for (let i = 0; i < n; i++) {
            const row = Array(n).fill('.');
            row[queens[i]] = 'Q';
            board.push(row.join(''));
        }
        console.log({ board });
        return board;
    };
    const backtrack = (queens, n, row, columns, diagonals1, diagonals2) => {
        // debugger;
        if (row === n) {
            board = generateBoard(queens, n);
            solutions.push(board);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (columns[i]) {
                continue;
            }
            const d1 = row - i;
            if (diagonals1[d1]) {
                continue;
            }
            const d2 = row + i;
            if (diagonals2[d2]) {
                continue;
            }
            queens[row] = i;
            columns[i] = true;
            [diagonals1[d1], diagonals2[d2]] = [true, true];
            backtrack(queens, n, row + 1, columns, diagonals1, diagonals2);
            console.log(1);
            queens[row] = -1;
            delete columns[i];
            delete diagonals1[d1];
            delete diagonals2[d2];
        }
    };

    const solutions = [];
    const queens = Array(n).fill(-1);
    const columns = [];
    const diagonals1 = [],
        diagonals2 = [];

    backtrack(queens, n, 0, columns, diagonals1, diagonals2);

    return solutions;
};
// @lc code=end
