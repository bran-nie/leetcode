/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (head === null) return false;
    let slow = head,
        fast = head.next;
    while (fast !== null && slow !== fast) {
        slow = slow.next;
        fast = fast.next;
        fast = fast ? fast.next : fast;
    }
    if (fast === null) {
        return false;
    } else {
        return true;
    }
};
// @lc code=end
