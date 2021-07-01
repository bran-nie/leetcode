/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let p = 0,
        q = 1;
    while (q < nums.length) {
        if (nums[p] !== nums[q]) {
            p += 1;
            nums[p] = nums[q];
        }
        q++;
    }
    return p + 1;
};
// @lc code=end
