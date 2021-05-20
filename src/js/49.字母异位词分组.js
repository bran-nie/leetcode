/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {};
    for (let str of strs) {
        const key = Array.from(str).sort().toString();
        map[key] ? map[key].push(str) : (map[key] = [str]);
    }

    return Object.values(map);
};
// @lc code=end
