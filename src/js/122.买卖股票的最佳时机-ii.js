/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let dp0 = 0,
        dp1 = -prices[0];
    for (let v of prices) {
        console.log({ v, dp0, 'dp1 + v': dp1 + v, dp1, 'dp0-v': dp0 - v });
        dp0 = Math.max(dp0, dp1 + v);
        dp1 = Math.max(dp1, dp0 - v);
        console.log({ v, dp0, 'dp1 + v': dp1 + v, dp1, 'dp0-v': dp0 - v });
        console.log('');
    }
    return dp0;
};
maxProfit([7, 1, 5, 3, 6]);
// @lc code=end

var maxProfit = function (prices) {
    let min = prices[0],
        preMax = 0,
        curMax = 0,
        r = 0;

    for (let v of prices) {
        min = Math.min(v, min);
        preMax = curMax;
        curMax = v - min;

        console.log({ v, min, preMax, curMax });

        // 出现收益比前一天少，则将在前一天卖掉，重置min
        if (preMax > curMax) {
            min = v;
            curMax = 0;
            console.log('plus', { preMax });
            r += preMax;
        }
    }
    if (preMax <= curMax) {
        r += curMax;
    }
    return r;
};
maxProfit([1, 9, 6, 9, 1, 7, 1, 1, 5, 9, 9, 9]);
