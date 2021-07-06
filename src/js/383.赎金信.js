/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let map = {};

    for (let c of magazine) {
        if (map[c]) {
            map[c]++;
        } else {
            map[c] = 1;
        }
    }

    for (let c of ransomNote) {
        if (map[c] && map[c] > 0) {
            map[c]--;
        } else {
            return false;
        }
    }

    return true;
};
// @lc code=end
