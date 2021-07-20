/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length;
    // 当只有一个元素时，是符合结果的。
    if (n < 1) return true;

    let jumpMost = 0;
    let index = -1;

    for (let v of nums) {
        // 先跳一步，
        jumpMost--;
        index++;

        jumpMost = Math.max(jumpMost, v);

        // 如果 index 已经到末尾，则 true
        if (index >= n - 1) {
            return true;
        }
        // 如果 jumpMost 为 0，则意味着不能跳了，那就返回 false；
        if (jumpMost === 0) {
            return false;
        }
    }
    return false;
};
// @lc code=end
