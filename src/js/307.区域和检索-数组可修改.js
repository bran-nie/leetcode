/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
class NumArray {
    constructor(nums) {
        debugger;
        this.nums = nums;
        const n = nums.length;
        // 计算 块 的大小
        const blockSize = Math.floor(Math.sqrt(n));
        this.blockSize = blockSize;
        // 初始化每个块的总和
        this.blockSums = new Array(this._sumLen()).fill(0);
        for (let i = 0; i < n; i++) {
            this.blockSums[this._sumIndex(i)] += nums[i];
        }
    }

    update(index, val) {
        this.blockSums[this._sumIndex(index)] += val - this.nums[index];
        this.nums[index] = val;
    }
    sumRange(left, right) {
        const blockSize = this.blockSize;

        const b1 = this._sumIndex(left),
            b2 = this._sumIndex(right),
            i1 = left % blockSize,
            i2 = right % blockSize;

        // left right 在同一个块（区间）
        if (b1 === b2) {
            let sum = 0;
            for (let j = i1; j <= i2; j++) {
                sum += this.nums[b1 * blockSize + j];
            }
            return sum;
        }
        let sum1 = 0,
            sum2 = 0,
            sum3 = 0;
        // 计算 left 在的块的总和
        for (let j = i1; j < blockSize; j++) {
            sum1 += this.nums[b1 * blockSize + j];
        }

        // 计算 right 在的块的综合
        for (let j = 0; j <= i2; j++) {
            sum2 += this.nums[b2 * blockSize + j];
        }
        // 计算两个块之间的块的综合
        for (let j = b1 + 1; j < b2; j++) {
            sum3 += this.blockSums[j];
        }
        return sum1 + sum2 + sum3;
    }

    _sumLen() {
        const blockSize = this.blockSize,
            n = this.nums.length;
        return Math.floor((n + blockSize - 1) / blockSize);
    }

    _sumIndex(index) {
        return Math.floor(index / this.blockSize);
    }
}
var obj = new NumArray([1, 2, 3, 7, 5, 3, 4, 5]);
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end
