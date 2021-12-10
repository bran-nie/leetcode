/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    const len = matchsticks.length;
    // 排序，从大到小
    matchsticks.sort((a, b) => b - a);
    // 最后一个即是边长
    const totalSideLength = matchsticks.reduce((a, b) => {
        return a + b;
    });

    // 总长度不能被 4 整除
    if (totalSideLength % 4 !== 0) return false;

    const sideLength = totalSideLength / 4;

    // debugger
    let sides = 0;
    for (let c = 0; c < 4; c++) {
        let x = 0;
        for (let i = 0; i < matchsticks.length; i++) {
            if (matchsticks[i] > sideLength) {
                return false;
            }
            if (x + matchsticks[i] < sideLength) {
                x += matchsticks[i];
                matchsticks[i] = -1;
            } else if (x + matchsticks[i] === sideLength) {
                sides++;
                matchsticks[i] = -1;
                break;
            }
        }
        matchsticks = matchsticks.filter((v) => v > 0);
    }
    console.log({ sides, matchsticks, sideLength });
    if (sides === 4 && matchsticks.length === 0) return true;
    return false;
};
// @lc code=end

makesquare([5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]);
