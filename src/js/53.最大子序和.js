/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let preSubArraySum = 0,
        maxSum = nums[0];
    nums.forEach((n) => {
        preSubArraySum = Math.max(preSubArraySum + n, n);
        maxSum = Math.max(preSubArraySum, maxSum);
    });
    return maxSum;
};
// @lc code=end
