/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const def = (nums, left, right) => {
        if (left > right) return null;

        // 总是选择中间位置左边的数字作为根结点
        const mid = Math.floor((left + right) / 2);

        const root = new TreeNode(nums[mid]);

        root.left = def(nums, left, mid - 1);
        root.right = def(nums, mid + 1, right);
        return root;
    };

    return def(nums, 0, nums.length - 1);
};
// @lc code=end
