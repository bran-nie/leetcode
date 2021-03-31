/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const s2t = new Map();
    const t2s = new Map();
    for (let i = 0; i < s.length; i++) {
        const [x, y] = [s[i], t[i]];
        if (
            (s2t.has(x) && s2t.get(x) !== y) ||
            (t2s.has(y) && t2s.get(y) !== x)
        ) {
            return false;
        } else {
            s2t.set(x, y);
            t2s.set(y, x);
        }
    }
    return true;
};
// @lc code=end
