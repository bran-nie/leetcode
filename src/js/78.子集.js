/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const ans = [];
    const len = nums.length;
    // 位运算
    for (let i = 0; i < 2 ** len; i++) {
        const idxs = i.toString(2).padStart(len, '0');
        const item = [];
        for (let j = 0; j < idxs.length; j++) {
            if (idxs[j] === '1') {
                item.push(nums[j]);
            }
        }
        ans.push(item);
    }
    return ans;
};
// @lc code=end
subsets([1, 2, 3, 4]);

var subsets1 = function (nums) {
    // 动态规划
    // dp[i] = dp[i-1] + dp[i-1]的所有元素push(nums[i])
    let ans = [[], [nums[0]]];
    for (let i = 1; i < nums.length; i++) {
        const f = [[nums[i]]];
        for (let j = 1; j < ans.length; j++) {
            const t = [].concat(ans[j]);
            t.push(nums[i]);
            f.push(t);
        }
        ans.push(...f);
    }

    return ans;
};
