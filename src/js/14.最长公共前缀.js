/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let r = '',
        i = 0,
        tmp = '',
        loop = true;

    while (loop && i < strs[0].length) {
        tmp += strs[0][i];
        i++;
        strs.every((s, index) => {
            if (s.indexOf(tmp) === 0) {
                if (index + 1 === strs.length) {
                    r = tmp;
                }
                return true;
            } else {
                loop = false;
                return false;
            }
        });
    }
    return r;
};
// @lc code=end
