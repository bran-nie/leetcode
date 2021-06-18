/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let left = 0,
        top = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1;
    let direction = 'left';

    const transIndex = (x, y) => {
        switch (direction) {
            case 'left':
                if (y < right) {
                    return [x, y + 1];
                } else {
                    direction = 'bottom';
                    top++;
                    return [x + 1, y];
                }
            case 'bottom':
                if (x < bottom) {
                    return [x + 1, y];
                } else {
                    direction = 'right';
                    right--;
                    return [x, y - 1];
                }
            case 'right':
                if (y > left) {
                    return [x, y - 1];
                } else {
                    direction = 'top';
                    bottom--;
                    return [x - 1, y];
                }
            case 'top':
                if (x > top) {
                    return [x - 1, y];
                } else {
                    direction = 'left';
                    left++;
                    return [x, y + 1];
                }
        }
    };
    let ans = Array(matrix[0].length * matrix.length).fill(0);

    let x = 0,
        y = -1;
    for (let i = 0; i < ans.length; i++) {
        [x, y] = transIndex(x, y);
        // console.log({ x, y });
        ans[i] = matrix[x][y];
    }
    return ans;
};
// @lc code=end

spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]);
