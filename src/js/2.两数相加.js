/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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

var addTwoNumbers = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    let cur1 = l1,
        cur2 = l2,
        carry = 0,
        sum = 0,
        res = new ListNode(null),
        cur = res;

    while (!(cur1 === null && cur2 === null)) {
        sum = 0;
        if (cur1 && cur2) {
            sum = cur1.val + cur2.val + carry;
            carry = Math.floor(sum / 10);

            cur.next = new ListNode(sum % 10);
            cur = cur.next;

            cur1 = cur1.next;
            cur2 = cur2.next;
        }
        if (cur1 && !cur2) {
            if (!carry) {
                cur.next = cur1;
                break;
            }
            sum = cur1.val + carry;
            carry = Math.floor(sum / 10);

            cur.next = new ListNode(sum % 10);
            cur = cur.next;

            cur1 = cur1.next;
        }
        if (!cur1 && cur2) {
            if (!carry) {
                cur.next = cur2;
                break;
            }
            sum = cur2.val + carry;
            carry = Math.floor(sum / 10);
            cur.next = new ListNode(sum % 10);
            cur = cur.next;

            cur2 = cur2.next;
        }
    }
    if (carry) {
        cur.next = new ListNode(carry);
    }
    return res.next;
};

// @lc code=end
