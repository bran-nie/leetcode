/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const ans = [];
    let start = 0;
    if (nums[0] >= 0) {
        start = 0;
    } else if (nums[nums.length - 1] <= 0) {
        start = nums.length - 1;
    } else {
        start = nums.findIndex((v) => v >= 0);
    }

    let left = start - 1,
        right = start;
    while (left >= 0 || right < nums.length) {
        let val;
        if (left < 0) {
            val = nums[right];
            right++;
        } else if (right >= nums.length) {
            val = nums[left];
            left--;
        } else {
            if (Math.abs(nums[left]) > Math.abs(nums[right])) {
                val = nums[right];
                right++;
            } else {
                val = nums[left];
                left--;
            }
        }
        ans.push(val * val);
    }
    return ans;
};
// @lc code=end
