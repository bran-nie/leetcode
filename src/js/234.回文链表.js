/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 0. 处理特殊输入情况
    if (head === null || head.next === null) {
        return true;
    }
    // 1. 找到链表中间
    let cur = head,
        len = 0,
        halfCount = 0,
        isEven = false;
    while (cur !== null) {
        len++;
        cur = cur.next;
    }
    halfCount = len >> 1;
    isEven = len % 2 === 0;

    // 2.0 翻转一半链表
    // let left = null,
    //     right = null;
    // cur = head; // 重置cur为链表的起点
    // while (halfCount > 0) {
    //     const nex = cur.next;
    //     cur.next = left;
    //     left = cur;
    //     cur = nex;
    //     halfCount--;
    // }
    // right = isEven ? cur : cur.next;

    // 2.1 将前一半的链表变成双向链表
    let left = null,
        right = null;
    cur = head;
    cur.prev = null;
    while (halfCount > 0) {
        cur.next.prev = cur;
        cur = cur.next;
        halfCount--;
    }
    left = cur.prev;
    right = isEven ? cur : cur.next;
    // console.log({ cur, left, right });

    // 3. 两个子链表循环对比，返回结果
    while (left !== null) {
        if (left.val !== right.val) {
            return false;
        }
        left = left.prev;
        right = right.next;
    }
    return true;
};
// @lc code=end
