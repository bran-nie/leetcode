/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    const map = {};
    for (let v of nums1) {
        map[v] = map[v] ? map[v] + 1 : 1;
    }
    const res = [];
    for (let v of nums2) {
        if (map[v]) {
            res.push(v);
            map[v]--;
        }
    }
    return res;
};
// @lc code=end
