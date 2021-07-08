/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const m = s.length;
    n = t.length;

    const CharCodeofA = 'a'.charCodeAt();

    // 1. 初始化 dp 数组
    const f = Array(n + 1)
        .fill(null)
        .map((_) => Array(26).fill(undefined));
    // 2. 生成 dp 数组的数据
    for (let i = n - 1; i >= 0; i--) {
        const charCodeI = t.charCodeAt(i);
        for (let j = 0; j < 26; j++) {
            if (charCodeI === j + CharCodeofA) {
                f[i][j] = i;
            } else {
                f[i][j] = f[i + 1][j];
            }
        }
    }

    // 3. 根据 dp 数据，判断 s 是否是 t 的子序列。
    // 3.1 声明 dp 数组的起始下标
    let fIndex = 0;
    // 3.2 遍历 s 字符串
    for (let i = 0; i < m; i++) {
        // 将 s 字符串的字符转化为 charcode，并映射到 0-26
        const s_i_charcode = s.charCodeAt(i);
        const transIndex = s_i_charcode - CharCodeofA;

        // 如果 dp 数据中没有这个数据，则说明这个字符不符合情况
        if (f[fIndex][transIndex] === undefined) {
            return false;
        } else {
            // 该字符符合情况，则 fIndex 基于字符在 t 中的下标 + 1
            fIndex = f[fIndex][transIndex] + 1;
        }
    }
    return true;
};
// @lc code=end
