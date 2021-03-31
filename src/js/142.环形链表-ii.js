/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head,
        fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // 如果链表有环，则快慢指针一定会相遇，
        // 当快慢指针第一次相遇时，假定链表头到环点的距离是a，slow到相遇点的距离是b，相遇点到环点的距离是c，
        // 那么，slow指针走了  a+b 的距离
        // fast 指针走了  a+b+c+b的距离
        // 因为fast的速度是slow的两倍，所以  2a+2b = a+2b+c，即 a = c
        // c是相遇点到环点的距离，a是链表头到环点的距离。此刻slow指针是在相遇点。
        // 那么，新建一个指针res，指向head，它和slow同时移动，那么当它们相遇的时候，就是环点。
        if (slow === fast) {
            let r = head;
            while (r !== slow) {
                r = r.next;
                slow = slow.next;
            }
            return r;
        }
    }
    return null;
};
// @lc code=end
