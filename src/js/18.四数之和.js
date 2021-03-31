/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const ans = [];
    if (nums.length < 4) {
        return ans;
    }

    nums.sort((a, b) => a - b);
    const len = nums.length;

    let map = {};

    for (let i = 0; i < len - 3; i++) {
        // 如果当前值和上一个一样，则不需要计算后面的，可以跳出本次循环
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // 从当前元素开始的四个数之和，比目标值大，则退出for循环
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        // 当前元素和最后三个之和，还没目标值大，则可以跳出本次循环，i继续++；
        if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
            continue;
        }

        for (let j = i + 1; j < len - 2; j++) {
            // 如果当前值和上一个一样，则不需要计算后面的，可以跳出本次循环
            if (j > i + 1 && nums[j - 1] === nums[j]) {
                continue;
            }
            // 从当前元素开始的四个数之和，比目标值大，则退出for循环
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }
            // 当前元素i和j 和最后两个之和，还没目标值大，则可以跳出本次循环，j继续++；
            if (nums[i] + nums[j] + nums[len - 2] + nums[len - 1] < target) {
                continue;
            }
            // debugger;
            let left = j + 1,
                right = len - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return ans;
};
// @lc code=end
