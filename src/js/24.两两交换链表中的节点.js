/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const newHead = new ListNode(0, head);
    const K = 2;
    let count = K;

    let p = newHead;
    let cur = head;

    while (cur !== null) {
        count--;
        if (count === 0) {
            count = K;
            // 交换操作
            const next = cur.next;
            const prev = p.next;
            p.next = cur;
            prev.next = next;
            cur.next = prev;
            p = prev;
            cur = next;
        } else {
            cur = cur.next;
        }
    }
    return newHead.next;
};
// @lc code=end
