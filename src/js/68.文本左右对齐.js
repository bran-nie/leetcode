/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let len = words.length;
    let row = '';
    let ans = [];

    const dealRow = (row, ans, maxWidth) => {
        row = row.trim();

        // 如果该行只有一个单词
        if (!/\s/.test(row)) {
            row = row.padEnd(maxWidth, ' ');
        } else {
            // 多个单词时，从左到右，补空白。
            let spaceCount = maxWidth - row.length;
            while (spaceCount > 0) {
                row = row.replace(/(\s+)/g, ($1, $2, index, str) => {
                    if (spaceCount > 0) {
                        spaceCount--;
                        return $1 + ' ';
                    } else {
                        return $1;
                    }
                });
            }
        }

        ans.push(row);
    };

    for (let i = 0; i < len; i++) {
        const word = words[i];
        if (
            word.length === maxWidth - row.length ||
            word.length === maxWidth - row.length - 1
        ) {
            row += word;
            dealRow(row, ans, maxWidth);
            row = '';
        } else if (word.length + 1 < maxWidth - row.length) {
            row += word + ' ';
        } else {
            dealRow(row, ans, maxWidth);
            row = '';
            i = i - 1;
        }
    }
    if (row.length) {
        dealRow(row, ans, maxWidth);
    }
    // 单独处理最后一行，先将多个连着空白替换成一个，再padEnd，补全长度
    ans[ans.length - 1] = ans[ans.length - 1]
        .replace(/\s+/g, ' ')
        .padEnd(maxWidth, ' ');

    return ans;
};
// @lc code=end

// 转成数组再处理，
const dealRow = (row, ans, maxWidth) => {
    row = row.trim();
    let arr = row.split(' ');
    let spaceCount = maxWidth - row.length + (arr.length - 1);
    let count = 0;
    if (arr.length === 1) {
        row = arr[0].padEnd(maxWidth, ' ');
        ans.push(row);
        return;
    }
    while (count < spaceCount) {
        const index = count % (arr.length - 1);
        arr[index] += ' ';
        count++;
    }
    row = arr.join('');
    ans.push(row);
};
