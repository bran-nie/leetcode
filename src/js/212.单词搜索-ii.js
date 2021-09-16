/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const m = board.length,
        n = board[0].length;

    const ans = [];

    // 1. 得到 board 的字母所在的位置
    const boardMap = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const char = board[i][j];
            const cIndex = boardMap.get(char);
            if (cIndex) {
                cIndex.push([i, j]);
                boardMap.set(char, cIndex);
            } else {
                boardMap.set(char, [[i, j]]);
            }
        }
    }
    const directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ];

    const visited = Array(m)
        .fill(0)
        .map((_) => Array(n).fill(false));

    const resetVisited = () => {
        visited.forEach((row) => row.forEach((_, i, arr) => (arr[i] = false)));
    };
    const isOutIdx = (x, y) => x < 0 || x >= m || y < 0 || y >= n;

    // 检查 word 是否存在
    const checkWord = (board, x, y, word, i) => {
        resetVisited();

        const def = (board, x, y, word, i) => {
            // 越界、被访问过、不等于单词，这三种情况要返回
            if (isOutIdx(x, y) || visited[x][y] || board[x][y] !== word[i]) {
                return false;
            }
            // 这次是最后一个单词，则表明已经找到单词了。
            if (word.length - 1 === i) {
                return true;
            }
            visited[x][y] = true;
            let ok = false;
            for (const [tx, ty] of directions) {
                const _x = tx + x,
                    _y = ty + y;
                const flag = def(board, _x, _y, word, i + 1);
                if (flag) {
                    ok = true;
                    break;
                }
            }
            visited[x][y] = false;
            return ok;
        };

        return def(board, x, y, word, i);
    };

    // 2. 遍历单词数组，将存在的单词添加到结果数组中
    for (let word of words) {
        // 开头符合，则进入
        if (boardMap.has(word[0])) {
            const indexs = boardMap.get(word[0]);
            const ok = indexs.some((idx) => {
                return checkWord(board, idx[0], idx[1], word, 0);
            });

            ok && ans.push(word);
        }
    }
    return ans;
};
// @lc code=end
findWords(
    [
        ['a', 'b', 'c'],
        ['a', 'e', 'd'],
        ['a', 'f', 'g'],
    ],
    ['eaafgdcba']
);
