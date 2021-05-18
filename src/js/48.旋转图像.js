/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    if (matrix.length < 2) {
        return matrix;
    }
    // 旋转的层级
    const len = matrix.length;
    const level = Math.ceil(matrix.length / 2);

    const getDirctionVals = (direction, matrix, level) => {
        const len = matrix.length;
        let temp = [];
        switch (direction) {
            case 'top':
                return matrix[level].slice(level, len - level - 1);
            case 'right':
                temp = [];
                for (let i = 0; i < len - 2 * level - 1; i++) {
                    // 图像右侧的下标值计算方式：
                    temp.push(matrix[i + level][len - 1 - level]);
                }
                return temp.reverse();
            case 'bottom':
                return matrix[len - 1 - level].slice(level + 1, len - level);
            case 'left':
                temp = [];
                for (let i = len - 2 * level - 1; i > 0; i--) {
                    // 图像左侧的下标值计算方式：
                    temp.push(matrix[i + level][level]);
                }
                return temp;
        }
    };
    const setDirectionVals = (direction, matrix, level, vals) => {
        const len = matrix.length;
        switch (direction) {
            case 'top':
                matrix[level].splice(level, vals.length, ...vals);
                break;
            case 'right':
                for (let i = 0; i < vals.length; i++) {
                    matrix[i + level][len - 1 - level] = vals[i];
                }
                break;
            case 'bottom':
                matrix[len - 1 - level].splice(level + 1, vals.length, ...vals);
                break;
            case 'left':
                for (let i = vals.length; i > 0; i--) {
                    matrix[i + level][level] = vals[i - 1];
                }
        }
    };
    let tmpVals = [];
    for (let l = 0; l < level; l++) {
        tmpVals = getDirctionVals('top', matrix, l);
        // debugger;
        ['right', 'bottom', 'left'].forEach((direction) => {
            const _tmpVals = getDirctionVals(direction, matrix, l);
            setDirectionVals(direction, matrix, l, tmpVals);
            tmpVals = [].concat(_tmpVals);
        });
        setDirectionVals('top', matrix, l, tmpVals);
    }
    console.log(matrix);
};
// @lc code=end
