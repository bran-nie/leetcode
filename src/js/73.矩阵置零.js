/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    // 创建辅助 tag 标签数组，记录 rows、cols 中的0，
    let rowTag = [],
        colTag = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowTag.push(i);
                colTag.push(j);
            }
        }
    }

    // 根据标签来修改数据，置零
    for (let row of rowTag) {
        for (let j = 0; j < n; j++) {
            matrix[row][j] = 0;
        }
    }
    for (let col of colTag) {
        for (let i = 0; i < m; i++) {
            matrix[i][col] = 0;
        }
    }
};
// @lc code=end

var setZeroes_1 = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    let rowTag = Array(m).fill(undefined),
        colTag = Array(n).fill(undefined);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rowTag[i] = 0;
                colTag[j] = 0;
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rowTag[i] === 0 || colTag === 0) {
                matrix[i][j] = 0;
            }
        }
    }
};
