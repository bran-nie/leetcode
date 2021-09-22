/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let len = 0;
    let cur = head;

    while (cur !== null) {
        len++;
        cur = cur.next;
    }

    const l1 = Math.floor(len / k);
    let l2 = len % k;

    const ans = [];
    cur = head;
    for (let i = 0; i < k; i++) {
        let part = cur;

        if (l2 !== 0 && cur !== null) {
            l2--;
            const tmp = cur.next;
            if (l1 === 0) {
                cur.next = null;
            }
            cur = tmp;
        }
        for (let j = 0; j < l1; j++) {
            if (j === l1 - 1) {
                const tmp = cur.next;
                cur.next = null;
                cur = tmp;
            } else {
                cur = cur.next;
            }
        }
        ans.push(part);
    }
    return ans;
};
// @lc code=end

// 题解的答案，思路一样的，代码更优雅。
var splitListToParts = function (head, k) {
    let n = 0;
    let temp = head;
    while (temp != null) {
        n++;
        temp = temp.next;
    }
    let quotient = Math.floor(n / k),
        remainder = n % k;

    const parts = new Array(k).fill(null);
    let curr = head;
    for (let i = 0; i < k && curr != null; i++) {
        parts[i] = curr;
        let partSize = quotient + (i < remainder ? 1 : 0);
        for (let j = 1; j < partSize; j++) {
            curr = curr.next;
        }
        const next = curr.next;
        curr.next = null;
        curr = next;
    }
    return parts;
};
