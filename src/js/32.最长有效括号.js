/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let left = 0,
        right = 0,
        maxlength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            left++;
        } else {
            right++;
        }
        if (left == right) {
            maxlength = Math.max(maxlength, 2 * right);
        } else if (right > left) {
            left = right = 0;
        }
    }
    left = right = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) == '(') {
            left++;
        } else {
            right++;
        }
        if (left == right) {
            maxlength = Math.max(maxlength, 2 * left);
        } else if (left > right) {
            left = right = 0;
        }
    }
    return maxlength;
};
// @lc code=end

var longestValidParentheses = function (s) {
    let queue = [];
    queue.push(-1);
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        console.log(queue);
        if (s[i] === '(') {
            queue.push(i);
        } else {
            queue.pop();
            if (queue.length === 0) {
                queue.push(i);
            } else {
                max = Math.max(max, i - queue[queue.length - 1]);
            }
        }
    }
    return max;
};

var longestValidParentheses = function (s) {
    // 定义dp[i]表示以下标i字符结尾的最长有效括号的长度。我们将dp数据全部初始化为0
};
