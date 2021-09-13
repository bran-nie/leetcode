/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let ans = 0;
    const map = new Map();

    for (let [x, y] of points) {
        map.clear();
        for (let [m, n] of points) {
            const { pow } = Math;
            const key = pow(x - m, 2) + pow(y - n, 2);
            map.set(key, map.get(key) ? map.get(key) + 1 : 1);
        }
        for (let [key, val] of map.entries()) {
            ans += val * (val - 1);
        }
    }
    return ans;
};
// @lc code=end
