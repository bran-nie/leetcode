/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
    if (head === null) return null;

    let newHead = new ListNode(0, head);
    let cur = head,
        prev = newHead;
    while (cur !== null) {
        // 1. 记录当前值，并标记count 为 0
        let tmp = cur,
            count = 1;
        // 2. 向后遍历，如果后续的值和当前值相等，count++，cur指针会指向不相等的节点
        while (cur.next && cur.next.val === tmp.val) {
            cur = cur.next;
            count++;
        }
        // 3. count不为1，说明这个值重复了，那就要删掉
        if (count !== 1) {
            prev.next = cur.next;
            cur = cur.next;
        } else {
            // 4. 如果当前值没有重复，则prev指向当前值，cur继续往下走
            prev = tmp;
            cur = cur.next;
        }
    }
    return newHead.next;

    // let repeat = false;
    // while (cur.next !== null) {
    //     if (cur.val === cur.next.val) {
    //         repeat = true;
    //     } else {
    //         if (repeat) {
    //             prev.next = cur.next;
    //             repeat = false;
    //         } else {
    //             prev = cur;
    //         }
    //     }
    //     cur = cur.next;
    // }
    // if (repeat) {
    //     console.log('???');
    //     prev.next = cur.next;
    // }
};
// @lc code=end
