/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let ans = 0,
        cur = 0;
    nums.forEach((n) => {
        if (n === 1) {
            cur++;
        } else {
            ans = Math.max(cur, ans);
            cur = 0;
        }
    });
    cur !== 0 && (ans = Math.max(cur, ans));
    return ans;
};
// @lc code=end
