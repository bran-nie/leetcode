/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

var nextPermutation = function (nums) {
    const swap = (nums, l, r) => {
        [nums[l], nums[r]] = [nums[r], nums[l]];
    };
    const reverse = (nums, start, end) => {
        while (start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    };
    /**
     * 1. left right 下标指针
     * 2. 当 left 不是 0 时，即排列不是最大的，则将 left 与 right 置换，
     * 3. 从 left 的右边开始则从小到大排序
     */
    let left = nums.length - 2,
        right = nums.length - 1;
    // 从左到右一次遍历，找到终止升序的元素，如 [2,5,4,3,1] 中的 2
    while (left >= 0 && nums[left] >= nums[left + 1]) {
        left--;
    }
    // 如果 left 不是 -1，即原排列不是最大排列
    if (left >= 0) {
        while (left < right && nums[left] >= nums[right]) {
            right--;
        }
        swap(nums, left, right);
    }

    reverse(nums, left + 1, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length < 2) return [nums];

    const result = [nums];
    const startNums = nums.join();
    nextPermutation(nums);
    while (nums.join() !== startNums) {
        // console.log(nums);
        result.push([].concat(nums));
        nextPermutation(nums);
    }
    return result;
};
// @lc code=end
