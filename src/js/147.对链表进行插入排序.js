/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function (head) {
    // 创建哨兵头
    const newHead = new ListNode(null);
    newHead.next = head;
    // 已经完成的排序指针
    let done = newHead.next;

    while (done.next !== null) {
        const awaitSort = done.next;
        // 如果还有待排序的节点，且节点值小于已排序的尾部。或者已经没有待排序的节点
        if ((awaitSort !== null && done.val <= awaitSort.val) || awaitSort === null) {
            done = awaitSort;
        } else {
            // awaitSort 需要插入到前面

            // 在链表中删除 awaitSort
            done.next = awaitSort.next;
            awaitSort.next = null;
            // 查找位置
            let prevInsert = newHead;
            while (prevInsert.next.val < awaitSort.val) {
                prevInsert = prevInsert.next;
            }
            // 插入
            const _next = prevInsert.next;
            awaitSort.next = _next;
            prevInsert.next = awaitSort;
        }
    }
    return newHead.next;
};
// @lc code=end

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
function crateList(arr) {
    const head = new ListNode(null);

    let cur = head;
    for (let i = 0; i < arr.length; i++) {
        const node = new ListNode(arr[i]);
        cur.next = node;
        cur = node;
    }
    return head.next;
}

const head = crateList([4, 2, 3, 1]);
insertionSortList(head);
