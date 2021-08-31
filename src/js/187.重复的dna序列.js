/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
// var findRepeatedDnaSequences = function (s,L) {
//     const ans = [];
//     if (s.length <= 10) return ans;
//     const map = {};
//     let scrollStr = s.substring(0, 10);
//     map[scrollStr] = 1;
//     for (let i = 1; i < s.length - 9; i++) {
//         scrollStr = scrollStr.substring(1) + s[i+9];
//         if (map[scrollStr]) {
//             if (map[scrollStr] === 1) {
//                 ans.push(scrollStr);
//             }
//             map[scrollStr]++
//         } else {
//             map[scrollStr] = 1
//         }
//     }
//     return ans;
// };

var findRepeatedDnaSequences = function (s) {
    const L = 10,
        n = s.length;
    if (n <= L) return [];
    const a = 4,
        aL = Math.pow(a, L);
    const nums = [];
    for (let c of s) {
        switch (c) {
            case 'A':
                nums.push(0);
                break;
            case 'C':
                nums.push(1);
                break;
            case 'G':
                nums.push(2);
                break;
            case 'T':
                nums.push(3);
                break;
        }
    }
    let h = 0;
    const map = {};
    const ans = [];
    for (let start = 0; start < n - L + 1; start++) {
        if (start !== 0) {
            h = h * a - nums[start - 1] * aL + nums[start + L - 1];
        } else {
            for (let i = 0; i < L; i++) h = h * a + nums[i];
        }
        if (map[h]) {
            if (map[h] === 1) {
                ans.push(s.substring(start, start + L));
            }
            map[h]++;
        } else {
            map[h] = 1;
        }
    }
    return ans;
};
// @lc code=end
