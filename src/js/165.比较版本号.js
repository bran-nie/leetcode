/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let p = 0,
        q = 0;

    while (p < version1.length || q < version2.length) {
        let str1 = '',
            str2 = '';
        while (p < version1.length && version1[p] !== '.') {
            str1 += version1[p];
            p++;
        }
        while (q < version2.length && version2[q] !== '.') {
            str2 += version2[q];
            q++;
        }
        p++;
        q++;

        const v1 = Number(str1),
            v2 = Number(str2);
        if (v1 > v2) {
            return 1;
        }
        if (v1 < v2) {
            return -1;
        }
    }
    return 0;
};
// @lc code=end
