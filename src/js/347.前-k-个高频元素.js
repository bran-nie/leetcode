/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach((n) => {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    });

    const arr = [];
    for (let [value, count] of map.entries()) {
        arr.push({ value, count });
    }

    // arr.sort((a, b) => b.count - a.count);
    quickSort(arr);

    return arr.slice(0, k).map((item) => item.value);
};

/**
 * @param {{value:number, count:number}[]} arr
 */
function quickSort(arr) {
    /**
     * @param {{value:number, count:number}[]} arr
     */
    const sortPart = (arr, startIndex, endIndex) => {
        const pivot = arr[startIndex];

        let mark = startIndex;

        for (let i = startIndex + 1; i <= endIndex; i++) {
            if (arr[i].count > pivot.count) {
                mark++;
                [arr[mark], arr[i]] = [arr[i], arr[mark]];
            }
        }

        arr[startIndex] = arr[mark];
        arr[mark] = pivot;

        return mark;
    };
    const def = (arr, startIndex, endIndex) => {
        if (startIndex < endIndex) {
            const pivot = sortPart(arr, startIndex, endIndex);
            def(arr, startIndex, pivot - 1);
            def(arr, pivot + 1, endIndex);
        }
    };
    def(arr, 0, arr.length - 1);
}
// @lc code=end
