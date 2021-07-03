/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const map = new Map();
    for (let c of s) {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    }

    for (let c of t) {
        if (map.has(c)) {
            const count = map.get(c);
            if (count > 1) {
                map.set(c, count - 1);
            } else {
                map.delete(c);
            }
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end
