/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    /**
     * 1. 找到中点，分左右子链表
     * 2. 反转右子链表
     * 3. 拉链式合并左右子链表
     */
    const newHead = new ListNode('head');
    newHead.next = head;

    let slow = newHead,
        fast = newHead;
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
        if (fast.next) {
            fast = fast.next;
        }
    }

    let leftList = newHead.next,
        rightList = slow.next;
    slow.next = null;

    function reverseList(head) {
        let newHead = null;
        while (head !== null) {
            const next = head.next;
            head.next = newHead;
            newHead = head;
            head = next;
        }
        return newHead;
    }
    rightList = reverseList(rightList);

    while (rightList !== null) {
        const lnext = leftList.next;
        const rnext = rightList.next;
        leftList.next = rightList;
        rightList.next = lnext;
        leftList = lnext;
        rightList = rnext;
    }
};
// @lc code=end

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
function crateList(len) {
    const head = new ListNode(null);

    let cur = head;
    for (let i = 1; i <= len; i++) {
        const node = new ListNode(i);
        cur.next = node;
        cur = node;
    }
    return head.next;
}

const head = crateList(4);
reorderList(head);
