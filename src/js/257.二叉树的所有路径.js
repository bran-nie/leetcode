/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const ans = [];
    const def = (root, path) => {
        if (root.left === null && root.right === null) {
            path = path ? `${path}->${root.val}` : `${root.val}`;
            ans.push(path);
            return;
        }
        path = path ? `${path}->${root.val}` : `${root.val}`;
        root.left && def(root.left, path);
        root.right && def(root.right, path);
    };

    def(root, '');
    return ans;
};
// @lc code=end
