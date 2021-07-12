/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    const ans = [0];

    let head = 1;
    for (let i = 0; i < n; i++) {
        for (let j = ans.length - 1; j >= 0; j--) {
            ans.push(head + ans[j]);
        }
        head <<= 1;
    }
    return ans;
};
// @lc code=end

var grayCode_1 = function (n) {
    if (n === 0) return [0];
    // if (n === 1) return [0, 1];

    // let start = ['00', '01', '11', '10'];
    let start = ['0', '1'];

    for (let i = 2; i <= n; i++) {
        const len = start.length;
        const temp = [];
        for (let i = 0; i < start.length; i++) {
            temp.push('0' + start[i]);
        }
        for (let i = start.length - 1; i >= 0; i--) {
            temp.push('1' + start[i]);
        }
        start = temp;
        // const len = start.length;
        // start = start.concat(start);
        // for (let i = 0; i < start.length; i++) {
        //     start[i] = `${i < len ? '0' : '1'}` + start[i];
        // }
    }
    // console.log(start);
    return start.map((item) => parseInt(item, 2));
};
