/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // 原地哈希表
    // 1. 将正整数放到合适的位置
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
            const j = nums[i] - 1;
            [nums[j], nums[i]] = [nums[i], nums[j]];
        }
    }
    console.log(nums);
    // 2. 找第一个下标和元素不相符的
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};
// @lc code=end

var firstMissingPositive = function (nums) {
    let map = new Map();
    for (let v of nums) {
        map.set(v, true);
    }
    let i = 1;
    for (; i < nums.length + 1; i++) {
        if (!map.has(i)) {
            return i;
        }
    }
    return i;
};
