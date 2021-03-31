/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    if (nums.length < 3 || nums[0] > 0 || nums[nums.length - 1] < 0) {
        return [];
    }

    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let target = 0 - nums[i];
        if (target < 0) continue;
        let p = 0,
            q = nums.length - 1;
        while (p < q) {
            if (p === i) {
                p++;
            } else if (q === i) {
                q--;
            } else if (nums[p] + nums[q] > target) {
                q--;
            } else if (nums[p] + nums[q] < target) {
                p++;
            } else if (nums[p] + nums[q] === target) {
                let t = [nums[i], nums[p], nums[q]].sort((a, b) => a - b);
                let key = t.toString();
                if (!obj[key]) {
                    obj[key] = t;
                }
                p++;
                q--;
            }
        }
    }
    return Object.values(obj);
};
// @lc code=end

var threeSum = (nums) => {
    nums = nums.sort((a, b) => a - b);
    if (nums.length < 3 || nums[0] > 0 || nums[nums.length - 1] < 0) {
        return [];
    }

    const n = nums.length;
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break;

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1,
            r = n - 1;

        let count = 2000;
        while (l < r && count--) {
            const [a, b, c] = [nums[i], nums[l], nums[r]];
            if (a + b + c === 0) {
                arr.push([a, b, c]);

                while (l < r && nums[l] === nums[l + 1]) {
                    l++;
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--;
                }
                l++;
                r--;
            } else if (a + b + c > 0) {
                r--;
            } else {
                l++;
            }
        }
    }
    return arr;
};
