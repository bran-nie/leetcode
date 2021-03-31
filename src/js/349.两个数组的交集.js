/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const len1 = nums1.length,
        len2 = nums2.length;
    let index1 = 0,
        index2 = 0;
    const res = [];
    while (index1 < len1 && index2 < len2) {
        const [n1, n2] = [nums1[index1], nums2[index2]];

        if (n1 === n2) {
            // 如果res是空数组，或者res的最后一个元素不等于n1
            if (!res.length || n1 !== res[res.length - 1]) {
                res.push(n1);
            }
            index1++;
            index2++;
        } else if (n1 < n2) {
            index1++;
        } else {
            index2++;
        }
    }
    return res;
};
// @lc code=end
const setIntersection = (set1, set2) => {
    // 短集合作为第一个参数。
    if (set1.size > set2.size) {
        return setIntersection(set2, set1);
    }

    const res = new Set();
    for (const n of set1) {
        if (set2.has(n)) {
            res.add(n);
        }
    }

    return [...res];
};

var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    return setIntersection(set1, set2);
};
