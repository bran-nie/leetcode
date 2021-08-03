/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// let arr = [1, 2, 3, 4, 5, 6, 7];
var rotate = function (nums, k) {
    const len = nums.length;
    k = k % len;
    if (k === 0) return nums;
    const newNums = nums.slice(len - k, len).concat(nums.slice(0, len - k));

    for (let i = 0; i < len; i++) {
        nums[i] = newNums[i];
    }

    // return nums;
};
// @lc code=end
