/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    // m 为 偷当前房屋的金币，初始化为 第一个房间 的金币
    // n 为 不偷当前房屋的金币，故 初始化为 0
    // ans 为走到当前房屋时，所偷到到总金币。
    let m = nums[0],
        n = 0,
        ans = nums[0];

    // console.log(`当前偷取第1间房屋后`, { m, n, ans });
    for (let i = 1; i < nums.length; i++) {
        /**
         * 动态规划，状态转移公式为
         * dp[i] = max(dp[i-2] + nums[i], dp[i-1]);
         * 转化为代码，就是  m = dp[i-2] + nums[i]; n =  dp[i-2]
         */
        // console.log(`当前是第${i + 1}间房屋，金币数是${nums[i]}`);
        // console.log(`走过这间房间时：`, { m, n, ans });
        m = n + nums[i];
        n = ans;
        ans = Math.max(m, ans);
        // console.log(`走过这间房间后：`, { m, n, ans }, 'm = n + cur, n = ans, ans = max(m,n)');
        // console.log('');
    }

    return ans;
};
// @lc code=end
rob([1, 2, 4, 3]);
