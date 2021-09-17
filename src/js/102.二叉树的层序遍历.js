/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let ans = [];

    const def = (root, height, ans) => {
        if (root !== null) {
            if (ans[height]) {
                ans[height].push(root.val);
            } else {
                ans.push([root.val]);
            }
        } else {
            return;
        }

        // console.log(root?.val, { height })
        height = height + 1;

        def(root.left, height, ans);
        def(root.right, height, ans);
    };

    def(root, 0, ans);

    return ans;
};
// @lc code=end
