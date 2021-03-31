/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 先排序，再判断
// 时间复杂度 O(n), 空间复杂度 O(1)
var containsDuplicate = function (nums) {
    if (nums.length === 0 || nums.length === 1) {
        return false;
    }

    nums.sort((a, b) => a - b);
    let cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (cur === nums[i]) {
            return true;
        } else {
            cur = nums[i];
        }
    }
    return false;
};
// @lc code=end

// 哈希表存储遍历过的值
// 时间复杂度 O(n), 空间复杂度 O(n)
var containsDuplicate = function (nums) {
    let map = {};
    for (let v of nums) {
        if (map[v]) {
            return true;
        } else {
            map[v] = true;
        }
    }
    return false;
};
