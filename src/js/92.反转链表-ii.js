/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 递归，替换节点值
var reverseBetween = function (head, m, n) {
    if (head === null || head.next === null || m === n) {
        return head;
    }

    const recurse = (m, n, right) => {
        if (n === 1) {
            return;
        }
        right = right.next;
        if (m > 1) {
            left = left.next;
        }
        recurse(m - 1, n - 1, right);

        if (left === right || right.next === left) {
            stop = true;
        }

        if (!stop) {
            [left.val, right.val] = [right.val, left.val];

            left = left.next;
        }
    };

    let left = head,
        stop = false;
    recurse(m, n, head);
    return head;
};
// @lc code=end

var reverseBetween = function (head, m, n) {
    if (head === null || head.next === null || m === n) {
        return head;
    }
    const vHead = new ListNode(0, head);
    let count = 0,
        prev = vHead,
        pHead = null,
        cur = head;
    // let pEnd = head; // 辅助理解，翻转段的尾部，即是m位置的节点指针。
    while (count < n) {
        count++;
        if (count >= m) {
            const nextTmp = cur.next;
            cur.next = pHead;
            pHead = cur;
            cur = nextTmp;
        } else {
            prev = cur;
            // pEnd = cur.next;
            cur = cur.next;
        }
    }
    // console.log({ prev, pHead, pEnd, cur })
    prev.next.next = cur;
    // pEnd.next = cur;
    prev.next = pHead;

    return vHead.next;
};

const reverse = (head) => {
    if (head.next === null) return head;
    const last = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return last;
};

const fn = (head, m, n) => {
    const reverse = (head) => {
        if (head.next === null) return head;
        const last = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return last;
    };
    // return reverse(head);

    let successor = null;
    const reverseN = (head, n) => {
        console.log({ n });
        if (n === 1) {
            successor = head.next;
            return head;
        }
        let last = reverseN(head.next, n - 1);

        head.next.next = head;
        head.next = successor;
        return last;
    };
    // return reverseN(head, 3);

    const reverseMN = (head, m, n) => {
        // base case
        if (m === 1) {
            return reverseN(head, n);
        }
        // 前进到反转的起点 触发 base case
        head.next = reverseMN(head.next, m - 1, n - 1);
        return head;
    };

    return reverseMN(head, m, n);
};
