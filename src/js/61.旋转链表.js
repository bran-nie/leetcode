/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @return {ListNode}
 */
// 使用环链表的解法
var rotateRight = function (head, k) {
    if (head === null || head.next === null) {
        return head;
    }
    // 1. 找到链表的长度，并将链表设置成环链表
    let cur = head,
        len = 1;
    while (cur.next !== null) {
        len++;
        cur = cur.next;
    }
    cur.next = head;

    // 2. 根据m，找到原链表要切割环的位置
    let m = k % len;
    let slice = head; // 重置指针
    for (let i = 0; i < len - m - 1; i++) {
        slice = slice.next;
    }
    // 3. 创建新的头节点，切割环
    const newHead = slice.next;
    slice.next = null;

    return newHead;
};
// @lc code=end
var rotateRight = function (head, k) {
    if (head === null || head.next === null) {
        return head;
    }
    let cur = head,
        len = 0;
    // 1. 找到链表的长度，可以得出最终旋转的情况， k%len
    // ps: 当k===len时，链表相当于没有移动
    while (cur !== null) {
        len++;
        cur = cur.next;
    }

    let m = k % len;
    // k是0，或者是len的倍数时，链表旋转到原来的位置，可直接返回。
    if (m === 0) return head;
    // 设置快慢指针，将链表分成两段。
    let slow = head,
        fast = head;
    while (m > 0) {
        m--;
        fast = fast.next;
    }
    while (fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    // 新的链表头节点，是第二段的第一个节点。
    let r = slow.next;
    slow.next = null; // 将第一段节点最后节点设置为null。
    fast.next = head; // 第二段最后节点指向第一段节点开始。
    return r;
};
