/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

const data = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];
var intToRoman = function (num) {
    return data.reduce((romanStr, curData) => {
        while (num >= curData[0]) {
            romanStr += curData[1];
            num -= curData[0];
        }
        return romanStr;
    }, '');
};
// @lc code=end

// var intToRoman = (num) => {
//     const romanMap = new Map();
//     romanMap.set(1000, 'M');
//     romanMap.set(900, 'CM');
//     romanMap.set(500, 'D');
//     romanMap.set(400, 'CD');
//     romanMap.set(100, 'C');
//     romanMap.set(90, 'XC');
//     romanMap.set(50, 'L');
//     romanMap.set(40, 'XL');
//     romanMap.set(10, 'X');
//     romanMap.set(9, 'IX');
//     romanMap.set(5, 'V');
//     romanMap.set(4, 'IV');
//     romanMap.set(1, 'I');

//     let nums = Array.from(romanMap.keys());
//     let r = nums.reduce((romanStr, rule) => {
//         while (num >= rule) {
//             romanStr += romanMap.get(rule);
//             num -= rule;
//         }
//         return romanStr;
//     }, '');
//     return r;
// }
