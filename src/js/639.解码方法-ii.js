/*
 * @lc app=leetcode.cn id=639 lang=javascript
 *
 * [639] 解码方法 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const calcOne = (c) => {
    if (c === '0') {
        return 0;
    }
    return c === '*' ? 9 : 1;
};
const calcTwo = (c1, c2) => {
    if (c1 === '*' && c2 === '*') {
        return 15;
    } else if (c1 === '*') {
        return c2.charCodeAt() <= '6'.charCodeAt() ? 2 : 1;
    } else if (c2 === '*') {
        if (c1 === '1') return 9;
        if (c1 === '2') return 6;
        return 0;
    } else {
        c1 = Number(c1);
        c2 = Number(c2);
        if (c1 === 0 || c1 > 2 || (c1 === 2 && c2 > 6)) {
            return 0;
        }
        return 1;
    }
};
var numDecodings = function (s) {
    const MOD = 10e8 + 7;
    // a = f(i-2), b = f(i-1), c = f(i)
    // f(i) = calcOne() * b + calcTwo() * a;
    let a = 0,
        b = 1,
        c = 0;

    for (let i = 0; i < s.length; i++) {
        c = (calcOne(s[i]) * b) % MOD;
        if (i > 0) {
            c = (c + calcTwo(s[i - 1], s[i]) * a) % MOD;
        }
        a = b;
        b = c;
    }
    return c;
};
// @lc code=end
