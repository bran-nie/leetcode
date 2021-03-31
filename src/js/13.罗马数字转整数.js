/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const data = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    let num = 0;
    while (s.length > 0) {
        if (data[s.substring(0, 2)]) {
            num += data[s.substring(0, 2)];
            s = s.slice(2);
        } else {
            num += data[s[0]];
            s = s.slice(1);
        }
    }
    return num;
};
// @lc code=end
