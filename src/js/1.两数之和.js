/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (typeof obj[nums[i]] === 'number') {
            return [obj[nums[i]], i];
        }
        obj[target - nums[i]] = i;
    }
};
// @lc code=end
