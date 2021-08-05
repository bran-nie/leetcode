/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let r = 0, q1 = prices[0] || 0;

    for (let v of prices) {
        q1 = Math.min(q1, v);
        r = Math.max((v-q1), r);
    }
    return r
};
// @lc code=end

