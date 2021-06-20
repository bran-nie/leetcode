/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const m = nums1.length;
    n = nums2.length;
    const arr = Array(m + n);
    let p = 0,
        q = 0;
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
    // console.log(arr)
    const len = arr.length;
    return len % 2 === 0 ? (arr[len / 2] + arr[len / 2 - 1]) / 2 : arr[(len + 1) / 2 - 1];
};
// @lc code=end
