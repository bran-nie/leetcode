/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1,
            right = n;
        debugger;

        // 这里面一个陷阱是 mid 求值，当 left 和 right 比较大的时候，
        // 不能使用 (left + right)/2 或 (left + right) >> 1; 会溢出

        // 优化版本，因 left 和 right 相等的时候，就是结果值。
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;

        // while (left <= right) {
        //     const mid = Math.floor(left / 2 + right / 2);
        //     // mid 是错误版本
        //     if (isBadVersion(mid)) {
        //         // mid 前面的是正确版本
        //         if (!isBadVersion(mid - 1)) {
        //             return mid;
        //         } else {
        //             right = mid - 1;
        //         }
        //     } else {
        //         left = mid + 1;
        //     }
        // }
    };
};
// @lc code=end

function test(n, firstBad) {
    function isBadVersion(version) {
        return version >= firstBad;
    }

    const fn = solution(isBadVersion);
    return fn(n);
}
test(2126753390, 1702766719);
