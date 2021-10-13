/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
const map = new Map();
var diffWaysToCompute = function (
    expression,
    fn = { '-': (a, b) => a - b, '+': (a, b) => a + b, '*': (a, b) => a * b }
) {
    if (map.has(expression)) {
        return map.get(expression);
    }
    let result = [];
    // 遍历字符串
    for (let i = 0; i < expression.length; i++) {
        // 如果遇到运算符，则分左右两种情况
        if (!/\d/.test(expression[i])) {
            // console.log(expression.substring(0, i), expression.substring(i + 1))
            const left = diffWaysToCompute(expression.substring(0, i));
            const right = diffWaysToCompute(expression.substring(i + 1));
            // console.log({ left, sign: expression[i], right });
            // 得到左右两边的结果，左右子元素都用当前的运算符计算。
            for (let l of left) {
                for (let r of right) {
                    result.push(fn[expression[i]](l, r));
                    // 使用 eval 计算字符串
                    // const evalStr = `(${l})${expression[i]}(${r})`
                    // console.log({ evalStr })
                    // result.push(eval(evalStr))
                }
            }
        }
    }
    // 如果传入的字符串没有运算符，则字符串都是数字，返回即可
    if (result.length === 0) {
        result.push(Number(expression));
        // result.push(eval(expression));
    }
    map.set(expression, result);
    return result;
};

// @lc code=end

// diffWaysToCompute('1*24-5+8');

var diffWaysToCompute = function (expression) {
    const numList = [],
        opList = [];

    let num = 0;
    for (let c of expression) {
        if (/\d/.test(c)) {
            num = num * 10 + (c - '0');
        } else {
            numList.push(num);
            num = 0;
            opList.push(c);
        }
    }
    numList.push(num);

    const len = numList.length;
    let ans = [];
    const dp = Array(len)
        .fill(null)
        .map(() => Array(len).fill([]));

    // 初始化 dp 数组
    for (let i = 0; i < len; i++) {
        ans.push(numList[i]);
        dp[i][i] = [...ans];
        ans = [];
    }

    for (let n = 2; n <= len; n++) {
        for (let i = 0; i < len; i++) {
            let j = i + n - 1;
            if (j >= len) {
                break;
            }
            ans = [];
            // debugger;
            for (let s = i; s < j; s++) {
                const ans1 = dp[i][s],
                    ans2 = dp[s + 1][j];

                for (let x of ans1) {
                    for (let y of ans2) {
                        ans.push(eval(`(${x})${opList[s]}(${y})`));
                    }
                }
            }
            dp[i][j] = ans;
        }
    }
    return dp[0][len - 1];
};
