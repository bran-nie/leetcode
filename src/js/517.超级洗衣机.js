/*
 * @lc app=leetcode.cn id=517 lang=javascript
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
    const total = machines.reduce((sum, cur) => sum + cur, 0);
    const n = machines.length;
    if (total % n !== 0) return -1;

    const avg = total / n;
    let ans = 0,
        sum = 0;
    const { max, abs } = Math;
    for (let num of machines) {
        num -= avg;
        sum += num;
        ans = max(ans, max(abs(sum), num));
    }

    return ans;
};
// @lc code=end
