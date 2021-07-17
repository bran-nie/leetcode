/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const len = gas.length;
    for (let i = 0; i < len; i++) {
        debugger;
        let start = i;
        let g = gas[i],
            c = cost[i];
        while (g >= c) {
            // 从 i 加油站出发
            start++;
            const v_i = start % len;
            if (i === v_i) return i;
            g = g + gas[v_i] - c;
            c = cost[v_i];
        }
    }
    return -1;
};
// @lc code=end
