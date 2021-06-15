/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;
    // 1.左孩子和右孩子都为空，说明到达了叶子结点，直接返回 1；
    if (root.left === null && root.right === null) return 1;

    let m1 = minDepth(root.left);
    let m2 = minDepth(root.right);

    // 2.如果左孩子或者右孩子其中一个为空，那么需要返回比较大的那个孩子的深度。
    if (root.left === null || root.right === null) return m1 + m2 + 1;

    // 3. 最后一种情况，也就是左右孩子都不为空，则返回最小深度 +1 即可。
    return Math.min(m1, m2) + 1;
};
// @lc code=end

/**
 * 很多人写出的代码都不符合 1,2 这个测试用例，是因为没搞清楚题意
 * 题目中说明:叶子节点是指没有子节点的节点，这句话的意思是 1 不是叶子节点
 * 题目问的是到叶子节点的最短距离，所以所有返回结果为 1 当然不是这个结果
 * 另外这道题的关键是搞清楚递归结束条件
 * 叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
 * 当 root 节点左右孩子都为空时，返回 1
 * 当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
 * 当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值
 */
