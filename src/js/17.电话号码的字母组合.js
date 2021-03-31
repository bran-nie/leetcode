/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const data = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    const res = [];
    const def = (curStr, i) => {
        if (i > digits.length - 1) {
            res.push(curStr);
            return;
        }

        const letters = data[digits[i]];
        for (const l of letters) {
            def(curStr + l, i + 1);
        }
    };
    def('', 0);
    return res;
};
// @lc code=end

var letterCombinations = (digits) => {
    if (digits.length === 0) return [];
    const data = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    const queue = [];
    queue.push('');
    for (let i = 0; i < digits.length; i++) {
        const levelSize = queue.length;
        for (let j = 0; j < levelSize; j++) {
            const curStr = queue.shift();
            const letters = data[digits[i]];
            for (const l of letters) {
                queue.push(curStr + l);
            }
        }
    }
    return queue;
};
