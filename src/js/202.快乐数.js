/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 快慢指针
var isHappy = function (n) {
    const getNext = (n) => {
        let sum = 0;
        while (n > 0) {
            let d = n % 10;
            n = Math.floor(n / 10);
            sum += d * d;
        }
        return sum;
    };

    let slow = n,
        fast = getNext(n);
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
};
// @lc code=end

// 哈希表检测循环
var isHappy = function (n) {
    const getNext = (n) => {
        let sum = 0;
        while (n > 0) {
            let d = n % 10;
            n = Math.floor(n / 10);
            sum += d * d;
        }
        return sum;
    };

    let map = new Map();
    while (n !== 1 && !map.has(n)) {
        map.set(n, 1);
        n = getNext(n);
    }
    return n === 1;
};
