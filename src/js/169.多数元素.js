/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 1;
    let v = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            v = nums[i];
        }
        if (v === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return v;
};
// @lc code=end
