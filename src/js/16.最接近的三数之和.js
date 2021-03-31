/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let bast = undefined;

    const checkBast = (curSum) => {
        if (bast === undefined) {
            bast = curSum;
        } else if (Math.abs(bast - target) > Math.abs(curSum - target)) {
            bast = curSum;
        }
    };
    for (let i = 0; i < nums.length - 2; i++) {
        // 上个元素和当前一样，则跳过本次枚举。
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        let left = i + 1,
            right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return target;
            }

            checkBast(sum);

            if (sum > target) {
                // 优化左右指针的移动
                let r0 = right - 1;
                while (left < r0 && nums[r0] === nums[right]) {
                    r0--;
                }
                right = r0;
            } else {
                let l0 = left + 1;
                while (l0 < right && nums[l0] === nums[left]) {
                    l0++;
                }
                left = l0;
            }
        }
    }
    return bast;
};
// @lc code=end
