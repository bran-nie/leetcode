/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    let map = {};
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            map[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]);
    }
    // console.log(map);
    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        // if
        ans.push(map[nums1[i]] || -1);
    }
    return ans;
};
// @lc code=end

nextGreaterElement([4, 2], [1, 3, 4, 2, 9]);
