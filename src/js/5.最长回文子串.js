/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    /**
     * 中心扩散
     * @param {string} s 字符串
     * @param {number} left 左边界
     * @param {number} right 右边届
     * @returns number
     */
    const expandAroundCenter = (s, left, right) => {
        while (left >= 0 && right <= s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    let start = 0,
        end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);

        // 如果出现更长的回文，则更新 start 和 end。
        if (len > end - start + 1) {
            start = i - ((len - 1) >> 1);
            end = i + (len >> 1);
        }
    }
    return s.substring(start, end + 1);
};
// @lc code=end
