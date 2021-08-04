/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const arr = Array(m + n);
    let p = 0,
        q = 0,
        cur = 0;
    while (p < m || q < n) {
        if (p === m) {
            arr[p + q] = nums2[q];
            q++;
        } else if (q === n) {
            arr[p + q] = nums1[p];
            p++;
        } else if (nums1[p] < nums2[q]) {
            arr[p + q] = nums1[p];
            p++;
        } else {
            arr[p + q] = nums2[q];
            q++;
        }
        // console.log({ p, m, q, n }, arr);
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = arr[i];
    }
};
// @lc code=end
