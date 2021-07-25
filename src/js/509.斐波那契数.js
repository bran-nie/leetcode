/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n;

    let p = 0,
        q = 0,
        r = 1;
    for (let i = 2; i <= n; i++) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
    // let f0 = 0,
    //     f1 = 1,
    //     f2 = 1;

    // if (n === 0) return f0;
    // if (n === 1) return f1;
    // if (n === 2) return f2;
    // for (let i = 2; i <= n; i++) {
    //     f0 = f1;
    //     f1 = f2;
    //     f2 = f0 + f1;
    // }
    // return f2;
};
// @lc code=end
