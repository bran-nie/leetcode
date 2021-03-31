/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        if (map[v] !== undefined && i - map[v] <= k) {
            return true;
        } else {
            map[v] = i;
        }
    }
    return false;
};
// @lc code=end
