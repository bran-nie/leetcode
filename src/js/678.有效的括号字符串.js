/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let startStack = [];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(') {
            stack.push(i);
            continue;
        }
        if (c === '*') {
            startStack.push(i);
            continue;
        }
        if (stack.length !== 0) {
            stack.pop();
        } else if (startStack.length !== 0) {
            startStack.pop();
        } else {
            return false;
        }
    }
    while (stack.length && startStack.length) {
        const [leftIndex, asteriskIndex] = [stack.pop(), startStack.pop()];
        if (leftIndex > asteriskIndex) {
            return false;
        }
    }
    return stack.length === 0;
};
// @lc code=end
