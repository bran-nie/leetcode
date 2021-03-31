/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
const myReverse = (head, tail) => {
    let prev = tail.next;
    let p = head;
    while (prev !== tail) {
        const nex = p.next;
        p.next = prev;
        prev = p;
        p = nex;
    }
    return [tail, head];
};
var reverseKGroup = function (head, k) {
    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
};

// @lc code=end

var reverseKGroup = function (head, k) {
    // k值特殊情况，当k等于1时，实际上不需要翻转，因此直接返回。
    if (k === 1) {
        return head;
    }
    const res = new ListNode();
    res.next = head;

    let cur = res.next,
        pre = res,
        count = k;
    while (cur !== null) {
        count--;
        if (count === 0) {
            // 说明这里是k的倍数所在的节点。
            // 翻转。
            console.log(cur.val);
            const partLast = pre.next;
            const nextHead = cur.next;
            const partHead = reverseLists(pre, k);
            console.log({
                partHead: partHead.val,
                partHead,
                partLast: partLast.val,
            });

            // pre.next = partHead;
            // partLast.next = nextHead;
            // pre = partLast;
            console.log('');
            count = k;
        }
        cur = cur.next;
    }
    return res.next;
};

// interationFn 迭代的方式
const reverseLists = (pre, k) => {
    let cur = pre.next;
    let partHead = null;
    let partLast = pre.next;

    while (k--) {
        const next = cur.next;
        cur.next = partHead;
        partHead = cur;
        cur = next;
    }
    pre.next = partHead;
    partLast.next = cur;
    return pre;
};
