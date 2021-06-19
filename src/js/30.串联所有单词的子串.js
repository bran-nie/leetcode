/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words, debug = false) {
    const hasKey = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
    const initMap = {};
    words.forEach((word) => {
        if (hasKey(initMap, word)) {
            initMap[word]++;
        } else {
            initMap[word] = 1;
        }
    });

    const ans = [];

    const wordLen = words[0].length;
    const len = wordLen * words.length;
    let map = { ...initMap };

    for (let i = 0; i < s.length - len + 1; i++) {
        const _word = s.substring(i, i + wordLen);
        // 如果 map 中有该字符，则开始进行后续的检查。
        if (debug) debugger;
        if (hasKey(map, _word)) {
            for (j = i; j < len + i; j = j + wordLen) {
                const curWord = s.substring(j, j + wordLen);
                if (hasKey(map, curWord)) {
                    if (map[curWord] === 1) {
                        delete map[curWord];
                    } else {
                        map[curWord]--;
                    }
                } else {
                    // 重新检查
                    continue;
                }
            }
            if (Object.keys(map).length === 0) {
                ans.push(i);
            }
            // 每次循环后重置map
            map = { ...initMap };
        }
    }
    return ans;
};
// @lc code=end
findSubstring('aaaaaaaaaaaaaa', ['aa', 'aa'], false);
