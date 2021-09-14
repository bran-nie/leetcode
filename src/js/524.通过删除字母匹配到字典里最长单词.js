/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    let res = '';
    for (const d of dictionary) {
        let p = 0,
            q = 0;
        // p 指针指向 s 开头，q 指向 d 开头
        while (p < s.length && q < d.length) {
            if (s[p] === d[q]) {
                q++;
            }
            p++;
        }
        // 如果 q 指针到达字符串 d 的末尾，则说明 d 是 s 的子串
        if (q === d.length) {
            if (d.length > res.length || (d.length === res.length && d < res)) {
                res = d;
            }
        }
    }
    return res;
};
// @lc code=end
