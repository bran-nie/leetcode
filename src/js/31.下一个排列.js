/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const swap = (nums, l, r) => {
        [nums[l], nums[r]] = [nums[r], nums[l]];
    };
    /**
     * 1. min max 下标指针
     * 2. 当 max 不是 0 时，即排列不是最大的，则将 max 左边的与 min 置换，
     * 3. 从 max 开始则从小到大排序
     */
    let p = nums.length - 1;
    let max = nums.length - 1,
        min = nums.length - 1;
    while (max > 0) {
        min = nums[min] < nums[max] ? min : max;
        // 如果左边比右边的大
        if (nums[max] > nums[max - 1]) {
            break;
        } else {
            max--;
        }
    }
    console.log({ max, min });
    // 已经是最大的排列
    if (max === 0 && min === nums.length - 1) {
        nums.reverse();
    } else {
        // 只需要互换最后两个
        if (max === min && max !== 0) {
            swap(nums, max - 1, min);
        }
        if (max !== min && max !== 0) {
            if (nums[min] > nums[max - 1]) {
                swap(nums, max - 1, min);
                while (max < min) {
                    swap(nums, max, min);
                    max++;
                    min--;
                }
            } else {
                let _min = min;
                while (_min > max) {
                    if (nums[max - 1] >= nums[_min]) {
                        _min--;
                    } else {
                        break;
                    }
                }
                console.log({ _min });
                swap(nums, max - 1, _min);
                while (max < min) {
                    swap(nums, min, max);
                    max++;
                    min--;
                }
            }
        }
    }
    console.log(nums);
};
// @lc code=end
