/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const foo = (height, noConsole) => {
    let ans = 0;
    let left = 0,
        right = 0;
    for (let i = 0; i < height.length - 1; i++) {
        right = i;
        let max_right = i;

        while (right < height.length - 1 && height[right] < height[left]) {
            right++;
            max_right = height[max_right] < height[right] ? right : max_right;
        }
        right = max_right;
        // 左右柱子都有变化
        if (left !== i && right !== i) {
            let m = height[left] < height[right] ? left : right;
            for (let j = left + 1; j < right; j++) {
                if (height[m] > height[j]) {
                    ans += height[m] - height[j];
                }
            }
        }
        left = right;
        i = right;
    }
    return ans;
};

var trap = function (height) {
    if (height.length <= 2) return 0;
    return foo(height, false);
};
// @lc code=end

var trap = function (height) {
    if (height.length <= 2) return 0;
    let ans = 0;
    let size = height.length;
    for (let i = 1; i < size - 1; i++) {
        let max_left = 0,
            max_right = 0;
        for (let j = i; j >= 0; j--) {
            //Search the left part for max bar size
            max_left = Math.max(max_left, height[j]);
        }
        for (let j = i; j < size; j++) {
            //Search the right part for max bar size
            max_right = Math.max(max_right, height[j]);
        }
        ans += Math.min(max_left, max_right) - height[i];
    }
    return ans;
};

var trap = (height) => {
    let left = 0,
        right = height.length - 1;
    let ans = 0;
    let left_max = 0,
        right_max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= left_max
                ? (left_max = height[left])
                : (ans += left_max - height[left]);
            left++;
        } else {
            height[right] >= right_max
                ? (right_max = height[right])
                : (ans += right_max - height[right]);
            right--;
        }
    }
    return ans;
};
