/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length,
        n = board[0].length;
    const Placeholder = -1;

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const visited = Array(m)
        .fill(false)
        .map(() => Array(n).fill(false));

    const dfs = (x, y, board) => {
        if (board[x][y] === 'X' || visited[x][y]) {
            return;
        }
        visited[x][y] = true;
        board[x][y] = Placeholder;

        for (let [tx, ty] of directions) {
            if (x + tx < 0 || x + tx >= m || y + ty < 0 || y + ty >= n) {
                continue;
            } else {
                dfs(x + tx, y + ty, board);
            }
        }
    };

    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            dfs(i, 0, board);
        }
        if (board[i][n - 1] === 'O') {
            dfs(i, n - 1, board);
        }
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') {
            dfs(0, j, board);
        }
        if (board[m - 1][j] === 'O') {
            dfs(m - 1, j, board);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            if (board[i][j] === Placeholder) {
                board[i][j] = 'O';
            }
        }
    }
    console.log(board);
};
// @lc code=end

var solve = function (board) {
    const m = board.length,
        n = board[0].length;
    const Placeholder = -1;

    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];
    const visited = Array(m)
        .fill(false)
        .map(() => Array(n).fill(false));

    const computedIsBorder = (x, y) => x === 0 || y === 0 || x === m - 1 || y === n - 1;

    const setBoard = (char, board) => {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === Placeholder) {
                    board[i][j] = char;
                }
            }
        }
    };

    let isBorder = false;

    const dfs = (x, y, board) => {
        if (board[x][y] === 'X' || visited[x][y]) {
            return;
        }
        if (computedIsBorder(x, y)) {
            isBorder = true;
        }
        visited[x][y] = true;
        board[x][y] = Placeholder;

        for (let [tx, ty] of directions) {
            if (x + tx < 0 || x + tx >= m || y + ty < 0 || y + ty >= n) {
                continue;
            } else {
                dfs(x + tx, y + ty, board);
            }
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O' && !computedIsBorder(i, j)) {
                dfs(i, j, board);
                console.log({ isBorder });
                isBorder ? setBoard('O', board) : setBoard('X', board);
                isBorder = false;
            }
        }
    }
    console.log(board);
};

const board = [
    ['X', 'O', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
];
solve(board);
