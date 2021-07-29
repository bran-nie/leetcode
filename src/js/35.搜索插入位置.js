/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    // 边界情况
    if (target < nums[0]) return 0;
    if (nums[nums.length - 1] < target) return nums.length;

    // 二分法
    while (left <= right) {
        // 中间值
        const mid = Math.floor((right - left) / 2) + left;

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
// @lc code=end
