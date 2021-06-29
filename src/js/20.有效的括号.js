/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length;
    if (len % 2 === 1) return false;

    const map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');

    const stk = [];
    for (let i = 0; i < len; i++) {
        const isRight = map.has(s[i]);
        if (isRight) {
            // 如果栈是空的，或者栈顶元素不能匹配当前元素，那就是false，返回就行了。
            if (!stk.length || stk[stk.length - 1] !== map.get(s[i])) {
                return false;
            }
            // 可以匹配当前元素，那将栈顶元素移除
            stk.pop();
        } else {
            // 如果是左边的符号，那就放到栈里
            stk.push(s[i]);
        }
    }
    return stk.length === 0;
};
// @lc code=end
