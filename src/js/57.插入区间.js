/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length === 0) return newInterval;

    let left = newInterval[0],
        right = newInterval[1];
    let placed = false;
    const ans = [];

    for (let arr of intervals) {
        if (right < arr[0]) {
            // 在插入区间的右侧且无交集
            if (!placed) {
                ans.push([left, right]);
                placed = true;
            }
            ans.push(arr);
        }
        // 在插入区间的左侧且无交集
        else if (arr[1] < left) {
            ans.push(arr);
        }
        // 与插入区间有交集，计算它们的并集
        else {
            left = Math.min(left, arr[0]);
            right = Math.max(right, arr[1]);
        }
    }
    if (!placed) {
        ans.push([left, right]);
    }

    return ans;
};
// @lc code=end
