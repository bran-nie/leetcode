/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let i = 0,
        word = '';
    const word2ch = new Map();
    const ch2word = new Map();
    debugger;
    for (let v of s + ' ') {
        if (v === ' ') {
            const ch = pattern[i];
            // word2ch 中有这个单词且对应的规律不等于当前的规律，
            // ch2word 中有这个规律且对应的单词不等于当前的单词，
            if ((word2ch.has(word) && word2ch.get(word) !== ch) || (ch2word.has(ch) && ch2word.get(ch) !== word)) {
                return false;
            }
            ch2word.set(ch, word);
            word2ch.set(word, ch);

            i++;
            word = '';
        } else {
            word += v;
        }
    }
    return true;
};
// @lc code=end

wordPattern('abc', 'b c a');
