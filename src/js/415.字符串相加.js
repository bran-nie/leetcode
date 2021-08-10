/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    // 使第二个字符串大，这样只需要遍历第二个字符串即可
    if (num1.length > num2.length) {
        return addStrings(num2, num1);
    }
    const len1 = num1.length,
        len2 = num2.length;
    let carry = 0;
    let ans = '';
    for (let i = 0; i < len2; i++) {
        const n1 = num1[len1 - 1 - i] || '0';
        let v = Number(n1) + Number(num2[len2 - 1 - i]) + carry;
        carry = v > 9 ? 1 : 0;
        v = v % 10;
        ans = v + ans;
    }
    ans = carry ? carry + ans : ans;
    return ans;
};
// @lc code=end
