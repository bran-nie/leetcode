/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while (root !== null) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left;
        }
        // p,q 在右边
        else if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        // p q 在 root 的两侧，即 root 就是最近的分岔点，即目标结果
        else {
            return root;
        }
    }
};
// @lc code=end

// 递归
var lowestCommonAncestor_1 = function (root, p, q) {
    const def = (root, p, q) => {
        console.log(root);
        // p,q 在左边
        if (root.val > p.val && root.val > q.val) {
            return def(root.left, p, q);
        }
        // p,q 在右边
        else if (root.val < p.val && root.val < q.val) {
            return def(root.right, p, q);
        }
        // p q 在 root 的两侧，即 root 就是最近的分岔点，即目标结果
        else {
            console.log('2', root);
            return root;
        }
    };

    return def(root, p, q);
};
