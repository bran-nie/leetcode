/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const n = nums.length;
    let max = 1;
    const dp = Array(n).fill(0);

    dp[0] = 1;

    for (let i = 1; i < n; i++) {
        dp[i] = 1;
        let cur = nums[i];
        let count = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            // if (cur < nums[j]) {
            //     cur = nums[j];
            //     count++;
            // }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
// @lc code=end
