/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    /**
     *
     * @param {number[]} nums
     * @param {number} index
     * @return {number}
     */
    const maxAbs = (nums, index) => {
        let cur = nums[index];
        // 当传入下标值可以跳到最后时，直接返回
        if (cur + index >= nums.length - 1) {
            return nums.length - 1;
        } else if (cur === 1) {
            return index + 1;
        }
        let difference = 0,
            max = {};
        while (cur > 0) {
            cur--;
            index++;
            difference = nums[index] - cur;
            console.log(difference);
            max = max.difference ? (max.difference > difference ? max : { index, difference }) : { index, difference };
        }
        return max.index;
    };
    let index = 0,
        count = 0;
    while (index < nums.length - 1) {
        console.log(index);
        index = maxAbs(nums, index);
        count++;
    }
    return count;
};
// @lc code=end
