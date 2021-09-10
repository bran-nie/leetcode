/*
 * @lc app=leetcode.cn id=1894 lang=javascript
 *
 * [1894] 找到需要补充粉笔的学生编号
 */

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    const n = chalk.length;

    // 得出一次循环需要消耗的粉笔数量
    let total = 0;
    for (let num of chalk) {
        total += num;
    }
    // 对 k 进行取模，k 值就是最后一次循环的粉笔数量
    k %= total;

    let ans = 0;
    // 一次遍历即可，判断哪个学生所需的粉笔数量大于剩余粉笔数量 k，
    for (let i = 0; i < n; i++) {
        if (chalk[i] > k) {
            ans = i;
            break;
        }
        k -= chalk[i];
    }
    return ans;
};

var chalkReplacer_1 = function (chalk, k) {
    const n = chalk.length;
    let ans = 0;
    while (chalk[ans] <= k) {
        k -= chalk[ans];
        ans = (ans + 1) % n;
    }
    return ans;
};
// @lc code=end
