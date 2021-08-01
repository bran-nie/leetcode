/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    // 先排序
    nums.sort((a, b) => a - b);
    const ans = [[], [nums[0]]];
    let preLenOfAns = ans.length - 1;

    for (let i = 1; i < nums.length; i++) {
        const [pre, cur] = [nums[i - 1], nums[i]];
        const f = [];
        if (pre !== cur) {
            preLenOfAns = 0;
        }
        for (let j = preLenOfAns; j < ans.length; j++) {
            const t = [].concat(ans[j]);
            t.push(cur);
            f.push(t);
        }
        preLenOfAns = ans.length;
        ans.push(...f);
    }
    return ans;
};
// @lc code=end
subsetsWithDup([1, 1, 1, 2, 2, 2]);
