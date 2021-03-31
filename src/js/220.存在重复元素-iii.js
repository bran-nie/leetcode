/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    // 解决js中 -0 === 0 为true的问题
    function getId(x) {
        return Math.floor(x / (t + 1));
    }
    if (t < 0) return false;

    // 大桶，里面最多有k个小桶。
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // m是当前元素将要在的桶
        const m = getId(nums[i]);

        // 当前大桶中有这个小桶的话，
        if (map.has(m)) {
            return true;
            // 如果当前小桶的右边桶存在，且两个桶相差小于t
        } else if (map.has(m + 1) && Math.abs(map.get(m + 1) - nums[i]) <= t) {
            return true;
            // 如果当前小桶的左边桶存在，且两个桶相差小于t
        } else if (map.has(m - 1) && Math.abs(map.get(m - 1) - nums[i]) <= t) {
            return true;
        }
        // 将这个桶存到大桶里面
        map.set(m, nums[i]);
        // 如果i大于k，也就是大桶装满了，则需要把大桶里面的第一个小桶删了。
        if (i >= k) {
            map.delete(getId(nums[i - k]));
        }
    }
    return false;
};
// @lc code=end

var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length && j < i + k + 1; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }
    return false;
};
