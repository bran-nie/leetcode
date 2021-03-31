/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
// 一次遍历的算法，时间复杂度O(n), 空间复杂度O(n)
var partition = (head, x) => {
    if (head === null || head.next === null) {
        return head;
    }
    const smallHead = new ListNode(null),
        largeHead = new ListNode(null);
    let small = smallHead,
        large = largeHead;
    while (head !== null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null;
    small.next = largeHead.next;

    return smallHead.next;
};
// @lc code=end

// 多次遍历的算法，时间复杂度O(n2), 空间复杂度O(1)
var partition = function (head, x) {
    if (head === null || head.next === null) {
        return head;
    }
    let cur = head,
        left = null,
        right = null;
    while (cur !== null) {
        if (cur.val < x && left) {
            // 进行交换，重置cur指向head;
            // console.log({ cur })
            right = cur;
            // 交换元素
            [left.val, right.val] = [right.val, left.val];
            // 重置指针，从开头开始遍历，
            // 可以优化这里，记录一下已经OK的链表节点
            cur = head;
            left = null;
            right = null;
        } else if (cur.val >= x) {
            left = cur;
            cur = cur.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
