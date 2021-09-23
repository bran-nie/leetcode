/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // 升序排列
    candidates.sort((a, b) => a - b);
    const ans = [];

    const dfs = (idx, combine, sum) => {
        if (sum >= target) {
            if (sum === target) {
                ans.push([...combine]);
            }
            return;
        }
        // 枚举选择
        for (let i = idx; i < candidates.length; i++) {
            // 如果当前选项和左侧一样，则跳过，避免重复答案
            if (i - 1 >= idx && candidates[i - 1] === candidates[i]) {
                continue;
            }
            // 做出选择
            combine.push(candidates[i]);
            // 基于该选择，继续选择，递归
            dfs(i + 1, combine, sum + candidates[i]);
            combine.pop(); // 上面的递归结束，撤销选择，回到选择前的状态，切入另一个分支
        }
    };

    dfs(0, [], 0);

    return ans;
};
// @lc code=end
