/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 双指针
    // 分类大致有快慢指针、左右指针，这里使用左右指针
    let left = 0,
        right = height.length - 1;
    let result = 0;

    while (left < right) {
        let cur = Math.min(height[left], height[right]) * (right - left);
        result = Math.max(result, cur);
        height[left] > height[right] ? right-- : left++;
    }
    return result;
};
// @lc code=end
