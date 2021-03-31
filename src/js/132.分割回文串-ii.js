/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    if (s.length < 2) return 0;

    const isPalindrome = (str, i, j) => {
        while (i < j) {
            if (str[i] === str[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    };
    const len = s.length;
    const dp = Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        if (isPalindrome(s, 0, i)) {
            dp[i] = 0;
        } else {
            dp[i] = Number.MAX_SAFE_INTEGER;
            for (let j = 0; j < i; j++) {
                if (isPalindrome(s, j + 1, i)) {
                    dp[i] = Math.min(dp[i], dp[j] + 1);
                }
            }
        }
    }
    console.log(dp);
    return dp[len - 1];
};
// @lc code=end

var minCut = function (s) {
    if (s.length < 2) return 0;
    const len = s.length;
    const isPalindrome = Array(len).fill(Array(len).fill(false));

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            if (s[i] === s[j] && (j - i <= 1 || isPalindrome[i + 1][j - 1])) {
                isPalindrome[i][j] = true;
            }
        }
        //     isPalindrome[i][j] =
        //         s[i] === s[j] && (i + 1 > j - 1 || isPalindrome[i + 1][j - 1]);
        // }
    }
    console.log(isPalindrome);
    const dp = Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        dp[i] = i;
    }
    for (let i = 0; i < len; i++) {
        if (isPalindrome[0][i]) dp[i] = 0;
        else {
            // dp[i] = Number.MAX_SAFE_INTEGER;
            for (let j = 0; j < i; j++) {
                if (isPalindrome[j + 1][i]) {
                    dp[i] = Math.min(dp[i], dp[j] + 1);
                }
            }
        }
    }
    console.log(dp);
    return dp[len - 1];
};

var minCut = function (s) {
    if (s.length < 2) return 0;

    const len = s.length;
    let tagArr = Array(len - 1).fill(1);
    // console.log(tagArr)
    for (let i = 0; i < len - 1; i++) {
        if (s[i] === s[i + 1]) {
            tagArr[i] = 0;
            // 左右查找
            let left = i - 1,
                right = i + 2;
            while (left >= 0 && right < len && s[left] === s[right]) {
                tagArr[left] = 0;
                tagArr[right - 1] = 0;

                left--;
                right++;
            }
        } else if (i > 0 && s[i - 1] === s[i + 1]) {
            let left = i - 1,
                right = i + 1;
            while (left >= 0 && right < len && s[left] === s[right]) {
                tagArr[left] = 0;
                tagArr[right - 1] = 0;

                left--;
                right++;
            }
        }
    }
    const cut = tagArr.filter((v) => v === 1);
    return cut.length;
    // console.log(tagArr)
};
