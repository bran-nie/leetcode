/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯算法
var generateParenthesis = function (n) {
    const res = [];

    /**
     * arr 结果数组
     * strFullLen str的满状态长度，即所有的括号都用到
     * lRemain 左括号数量
     * rRemain 右括号数量
     * 生成的 str
     */
    const dfs = (arr, strFullLen, lRemain, rRemain, str) => {
        // 当 str 的长度等于可以输入值生成的字符串长度时，push 到结果数组中，并结束回溯。
        if (str.length === strFullLen) {
            arr.push(str);
            return;
        }
        // 如果还有左括号，则 str 增加一个左括号。
        if (lRemain > 0) {
            dfs(arr, strFullLen, lRemain - 1, rRemain, str + '(');
        }
        // 如果左括号的数量小于右括号，说明有多余的右括号还没增加到 str 中，因此 str 增加一个右括号。
        if (lRemain < rRemain) {
            dfs(arr, strFullLen, lRemain, rRemain - 1, str + ')');
        }
    };

    dfs(res, 2 * n, n, n, '');
    return res;
};
// @lc code=end
