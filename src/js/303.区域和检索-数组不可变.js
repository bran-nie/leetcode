/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    // this.nums = nums;
    // this.map = new Map();

    this.sums = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        this.sums[i + 1] = this.sums[i] + nums[i];
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.sums[right + 1] - this.sums[left];

    // const key = `${left}_${right}`;
    // if (this.map.has(key)) {
    //     return this.map.get(key);
    // }
    // let sum = 0;
    // for (let i = left; i <= right; i++) {
    //     sum += this.nums[i];
    // }
    // this.map.set(key, sum);
    // return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
