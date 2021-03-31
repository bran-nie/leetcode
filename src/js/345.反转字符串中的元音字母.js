/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('');
    let left = 0,
        right = s.length - 1;
    const tmp = 'aeiouAEIOU';
    while (left < right) {
        if (tmp.includes(s[left]) && tmp.includes(s[right])) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        } else if (tmp.includes(s[left])) {
            right--;
        } else {
            left++;
        }
    }
    return s.join('');
};
// @lc code=end
