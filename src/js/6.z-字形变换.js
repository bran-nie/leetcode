/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let rows = new Array(numRows).fill('');
    let curRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }
        curRow = goingDown ? curRow + 1 : curRow - 1;
    }

    return rows.reduce((prev, cur) => {
        return prev + cur;
    });
};
// @lc code=end
