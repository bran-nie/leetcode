/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let l3 = new ListNode('head'),
        tmp = new ListNode('tmp'),
        cur = null;
    l3.next = tmp;
    while (!(l1 === null && l2 === null)) {
        if (!l1 || (l2 && l1.val >= l2.val)) {
            cur = new ListNode(l2.val);
            tmp.next = cur;
            tmp = cur;
            // l3 = listPush(l3, new ListNode(l2.val))
            l2 = l2.next;
        } else {
            cur = new ListNode(l1.val);
            tmp.next = cur;
            tmp = cur;
            // l3 = listPush(l3, new ListNode(l1.val))
            l1 = l1.next;
        }
    }
    return l3.next.next;
    // return l3.next
};

function listPush(list, item) {
    let cur = list;
    while (cur.next !== null) {
        cur = cur.next;
    }
    cur.next = item;

    return list;
}
// @lc code=end
