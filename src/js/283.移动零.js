/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length,
        left = 0,
        right = 0;
    while (right < n) {
        if (nums[right]) {
            [nums[left], nums[right]] = [nums[right], [nums[left]]];
            left++;
        }
        right++;
    }
};
// let nums = [0, 3, 0, 1, 1];
// moveZeroes(nums);
// @lc code=end

var moveZeroes = function (nums) {
    let n = nums.length,
        left = 0,
        right = 0;
    while (left < n) {
        while (nums[right] !== 0 && right < n) {
            right++;
        }
        left = right;
        while (nums[left] === 0 && left <= n) {
            left++;
        }
        if (right < left && nums[left]) {
            [nums[left], nums[right]] = [nums[right], [nums[left]]];
            left++;
            right++;
        } else {
            return;
        }
    }
};
