/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = (n) => {
    const isPrimes = new Array(n).fill(1);
    const primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrimes[i]) {
            primes.push(i);
        }

        for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
            isPrimes[i * primes[j]] = 0;
            if (i % primes[j] === 0) {
                break;
            }
        }
    }
    return primes.length;
};

// @lc code=end

// 枚举
var countPrimes = function (n) {
    const isPrimes = (x) => {
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }
        return true;
    };

    let ans = 0;
    for (let i = 2; i < n; i++) {
        ans += isPrimes(i);
    }
    return ans;
};

// 埃氏筛选法
var countPrimes = (n) => {
    const isPrimes = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; i++) {
        if (isPrimes[i]) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrimes[j] = 0;
            }
        }
    }
    return ans;
};
