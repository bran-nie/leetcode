/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    let r = '';
    if (/[^\d]/.test(str[0])) {
        // 如果开头非数字
        if ('-+'.includes(str[0]) && /[\d]/.test(str[1])) {
            // 如果开头非字母但第一个是符号，第二个是数字，则进入下面的判断
            r = str[0];
        } else {
            // 这种就返回0
            return 0;
        }
    } else {
        r = str[0];
    }

    for (let i = 1; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            r += str[i];
        } else {
            break;
        }
    }

    if (r[0] === '-') {
        return Math.max(r, -(2 ** 31));
    } else {
        return Math.min(r, 2 ** 31 - 1);
    }
};
// @lc code=end
