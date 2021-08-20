/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const check = (chars, word) => {
        for (let c of word) {
            if (!chars.includes(c)) {
                return false;
            }
        }
        return true;
    };
    return words.filter((word) => {
        word = word.toLocaleLowerCase();
        if ('qwertyuiop'.includes(word[0])) {
            return check('qwertyuiop', word);
        }
        if ('asdfghjkl'.includes(word[0])) {
            return check('asdfghjkl', word);
        }
        if ('zxcvbnm'.includes(word[0])) {
            return check('zxcvbnm', word);
        }
    });
};
// @lc code=end
