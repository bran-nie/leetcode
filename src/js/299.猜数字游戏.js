/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bulls = 0,
        cows = 0;

    let map1 = [],
        map2 = new Map();
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            map1.push(secret[i]);

            const c2 = map2.get(guess[i]);
            map2.set(guess[i], c2 ? c2 + 1 : 1);
        }
    }
    for (let key of map1) {
        if (map2.has(key)) {
            cows++;
            const c2 = map2.get(key);
            c2 > 1 ? map2.set(key, c2 - 1) : map2.delete(key);
        }
    }

    return `${bulls}A${cows}B`;
};
// @lc code=end
