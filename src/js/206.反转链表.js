/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
    return recursionFn(head);
};

const recursionFn = (head) => {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    // head的下个节点指向当前节点，即 head 是 4， 4 -> 5 变成了  4 <- 5 ，所以4.next 要重置 null；
    head.next.next = head;
    // 将节点的next指向空，避免出现环形链表，循环
    head.next = null;
    return newHead;
};

const interationFn = (head) => {
    // 初始化一个新的链表头结点
    let newHead = null;
    let cur = head;

    // 遍历待反转链表
    while (cur !== null) {
        // 保存待反转链表后续部分
        const next = cur.next;
        // 当前节点的next指向新的head，然后更新 新的head，让它指向当前节点。
        cur.next = newHead;
        newHead = cur;
        // 当前节点继续遍历待反转链表
        cur = next;
    }
    return newHead;
};
// @lc code=end
