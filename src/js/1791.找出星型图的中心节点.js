/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    // 因为每个节点都会与中心节点相连，且非中心节点不会相连。所以只需要看前两个边即可找到中心节点
    // 将问题简化成：返回前四个数值重复的那个。如 [[1,2],[2,3]] 中，重复的就是 1.
    return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1];
};
// @lc code=end
