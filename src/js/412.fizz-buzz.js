/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (x) {
    const ans = [];
    let m = 3,
        n = 5;
    for (let i = 1; i <= x; i++) {
        const divisibleBy3 = i === m;
        const divisibleBy5 = i === n;
        let str = '';
        if (divisibleBy3) {
            str += 'Fizz';
            m += 3;
        }
        if (divisibleBy5) {
            str += 'Buzz';
            n += 5;
        }
        if (str === '') {
            str += i;
        }

        ans.push(str);
    }
    return ans;
};
// @lc code=end
