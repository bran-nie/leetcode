/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    const len = nums.length;
    if (len < 1) return -1;
    let ans = 0;
    // debugger;
    for (let i = 1; i < len; i++) {
        if (nums[ans] <= nums[i]) {
            ans = i;
        } else {
            return ans;
        }
    }
    return ans;
};
// @lc code=end
