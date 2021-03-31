/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0,
        right = s.length - 1;

    const reg = /[0-9a-zA-Z]/;
    while (left < right) {
        while (!reg.test(s[left]) && left < right) {
            left++;
        }
        while (!reg.test(s[right]) && left < right) {
            right--;
        }
        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end
