/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const len = nums.length;
    for (let num of nums) {
        const x = (num - 1) % len;
        nums[x] += len;
    }
    console.log(nums);
    const ans = [];
    for (const [i, num] of nums.entries()) {
        if (num <= len) {
            ans.push(i + 1);
        }
    }
    return ans;
};
// @lc code=end
