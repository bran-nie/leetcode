/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const scrollWindow = new Set();
    let max = 0;
    let windowStart = 0;

    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        if (!scrollWindow.has(item)) {
            scrollWindow.add(item);
        } else {
            while (windowStart < s.length) {
                const cur = s[windowStart];
                if (cur === item) {
                    windowStart++;
                    break;
                } else {
                    scrollWindow.delete(cur);
                    windowStart++;
                }
            }
        }

        max = Math.max(max, scrollWindow.size);
    }

    return max;
};
// @lc code=end
