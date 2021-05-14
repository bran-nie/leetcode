/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const calc = (v, str) => {
        let carry = 0;
        let r = '';
        for (let i = str.length - 1; i >= 0; i--) {
            const multiply = v * Number(str[i]) + carry;
            r = (multiply % 10) + r;
            carry = Math.floor(multiply / 10);
        }
        if (carry) {
            r = carry + r;
        }

        return r;
    };
    const map = {};
    const resultStr = [];
    for (let i = num1.length - 1; i >= 0; i--) {
        const v = Number(num1[i]);
        if (v === 0) {
            resultStr.push('0');
        } else if (map[v]) {
            const str = map[v];
            resultStr.push(str.padEnd(str.length + num1.length - 1 - i, '0'));
        } else {
            const str = calc(v, num2);
            map[v] = str;
            resultStr.push(str.padEnd(str.length + num1.length - 1 - i, '0'));
        }
    }
    console.log(resultStr);
    // 2. 开始累加
    const result = resultStr.reduce((cur, next) => {
        const maxLen = Math.max(cur.length, next.length);
        cur = cur.padStart(maxLen, '0');
        next = next.padStart(maxLen, '0');
        console.log({ cur, next });
        let carry = 0;
        let p1 = cur.length - 1,
            p2 = next.length - 1;
        let r = '';
        while (cur[p1] !== undefined) {
            const plus = Number(cur[p1]) + Number(next[p2]) + carry;
            r = (plus % 10) + r;
            carry = Math.floor(plus / 10);
            p1--;
            p2--;
        }
        r = carry ? carry + r : r;

        return r;
    });

    return result;
};
// @lc code=end
