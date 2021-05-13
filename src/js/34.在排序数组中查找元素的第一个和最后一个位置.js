/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let r1 = -1,
        r2 = -1;
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const mid = (l + r) >> 1;
        if (nums[mid] === target) {
            // 查找左右的值
            r1 = mid;
            r2 = mid;
            while (nums[r1 - 1] === target) {
                r1--;
            }
            while (nums[r2 + 1] === target) {
                r2++;
            }
            return [r1, r2];
        }
        if (nums[mid] < target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return [r1, r2];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var oldSearch = function (nums, target) {
    let l = 0,
        r = nums.length - 1;
    let r1 = -1,
        r2 = -1;
    while (l <= r) {
        if (r1 === -1 && nums[l] === target) {
            r1 = l;
        }

        if (r2 === -1 && nums[r] === target) {
            r2 = r;
        }

        r1 === -1 && l++;
        r2 === -1 && r--;
        if (r1 !== -1 && r2 !== -1) {
            break;
        }
    }
    return [r1, r2];
};
// @lc code=end
