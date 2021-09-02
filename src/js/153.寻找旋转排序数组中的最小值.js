/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    const n = nums.length;
    let low = 0,
        height = n - 1;

    while (low < height) {
        const middle = low + ((height - low) >> 1);
        // console.log({low, height, middle});
        if (nums[middle] < nums[height]) {
            height = middle;
        } else {
            low = middle + 1;
        }
    }
    return nums[low];
};
// @lc code=end
