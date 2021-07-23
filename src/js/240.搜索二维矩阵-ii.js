/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length,
        n = matrix[0].length;

    // 如果 目标值 比矩阵的左上角小或者比右下角大，则不存在结果。
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
        return false;
    }
    // 剪枝方式，从左下角开始，向右上开始
    let x = 0,
        y = m - 1;
    while (x < n && y >= 0) {
        const cur = matrix[y][x];
        if (cur === target) {
            return true;
        } else if (cur > target) {
            y--;
        } else {
            x++;
        }
    }
    return false;
};
// @lc code=end

var searchMatrix2 = function (matrix, target) {
    const m = matrix.length,
        n = matrix[0].length;

    // debugger;

    // x1,y1 是矩阵左上角坐标值，x2,y2 是矩阵右下角坐标值
    const def = (matrix, target, y1, x1, y2, x2) => {
        // console.log([y1, x1], [y2, x2]);
        // 如果两个坐标值重叠，则意味着不能构成合理矩阵，即不存在结果
        if (y1 > y2 || x1 > x2) {
            return false;
        }
        // 如果 目标值 比矩阵的左上角小或者比右下角大，则不存在结果。
        else if (target < matrix[y1][x1] || target > matrix[y2][x2]) {
            return false;
        }

        // 取 mid x。
        const midX = ((x2 - x1) >> 1) + x1;
        // 临时 y 值，从 y1 开始
        let tempY = y1;
        // 当该临时 y 值小于等于矩阵的底边，且矩阵的该行中间值小于等于目标值
        while (tempY <= y2 && matrix[tempY][midX] <= target) {
            if (matrix[tempY][midX] === target) {
                return true;
            }
            tempY++;
        }
        // 没找到目标值，说明目标值在 左下半边 或 右上半边。

        return def(matrix, target, tempY, x1, y2, midX - 1) || def(matrix, target, y1, midX + 1, tempY - 1, x2);
    };

    return def(matrix, target, 0, 0, m - 1, n - 1);
};

searchMatrix(
    [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ],
    30
);
