/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const ans = Array(n)
        .fill(null)
        .map(() => Array(n).fill(0));

    // 初始化 x，y 坐标，
    let x = 0,
        y = -1,
        d = 'left',
        left = 0,
        top = 0,
        right = n - 1,
        bottom = n - 1;

    const getMatrixIndex = (function (direction, left, top, right, bottom) {
        return (x, y) => {
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
    })(d, left, top, right, bottom);

    for (let i = 1; i <= n * n; i++) {
        [x, y] = getMatrixIndex(x, y);
        ans[x][y] = i;
    }

    return ans;
};
// @lc code=end
