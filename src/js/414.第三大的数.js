/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let first = undefined,
        second = undefined,
        third = undefined;
    nums.forEach((n) => {
        if (first === undefined || first < n) {
            [first, second, third] = [n, first, second];
        } else if (n < first && (second === undefined || second < n)) {
            [second, third] = [n, second];
        } else if (n < second && (third === undefined || third < n)) {
            third = n;
        }
        // console.log({ n, first, second, third });
    });
    return third ?? first;
};
// @lc code=end
