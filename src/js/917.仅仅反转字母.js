/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let left = 0,
        right = s.length - 1;

    let ans = Array(s.length).fill('');

    const isLetter = (c) => {
        return /[a-zA-Z]/.test(c);
    };
    while (left <= right) {
        while (!isLetter(s[left]) && left <= right) {
            ans[left] = s[left];
            left++;
        }
        while (!isLetter(s[right]) && left <= right) {
            ans[right] = s[right];
            right--;
        }
        if (left <= right) {
            ans[left] = s[right];
            ans[right] = s[left];

            left++;
            right--;
        }
    }
    return ans.join('');
};
// @lc code=end
