/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    let t = 0;
    return A.map((val) => {
        t = (t * 2 + val) % 10;
        return t % 5 === 0;
    });
};
// @lc code=end
