/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (head === null) return null;
    let cur = head;

    // 1. 克隆节点  A->B->C 变成 A->A'->B->B'->C->C'
    while (cur !== null) {
        let newNode = new Node(cur.val);

        newNode.next = cur.next;
        cur.next = newNode;
        cur = newNode.next;
    }
    // 重新指向链表头部
    cur = head;
    // 2. 克隆的节点，复制random指针
    while (cur !== null) {
        cur.next.random = cur.random !== null ? cur.random.next : null;
        cur = cur.next.next;
    }
    // 3. 将克隆的节点抽离出来，即是一个新的链表，也是原链表的copy。
    let cur_old_list = head,
        cur_new_list = head.next,
        new_head = head.next;
    while (cur_old_list !== null) {
        // 原链表节点，它的next指向原链表的next。（因为原链表两个AB节点之间是有一个A的复制节点，即 A->A'->B->B'
        cur_old_list.next = cur_old_list.next.next;
        cur_new_list.next =
            cur_new_list.next !== null ? cur_new_list.next.next : null;

        cur_old_list = cur_old_list.next;
        cur_new_list = cur_new_list.next;
    }
    return new_head;
};
// @lc code=end

// 迭代，结合哈希表
var copyRandomList = function (head) {
    if (head === null) return null;
    const visitedMap = new Map();

    const getClonedNode = (node) => {
        if (node !== null) {
            if (visitedMap.has(node)) {
                return visitedMap.get(node);
            } else {
                visitedMap.set(node, new Node(node.val, null, null));
                return visitedMap.get(node);
            }
        }
        return null;
    };

    const copyList = (head) => {
        if (head === null) return null;
        let oldNode = head;
        let newNode = new Node(oldNode.val);
        visitedMap.set(oldNode, newNode);

        while (oldNode !== null) {
            newNode.random = getClonedNode(oldNode.random);
            newNode.next = getClonedNode(oldNode.next);

            oldNode = oldNode.next;
            newNode = newNode.next;
        }

        return visitedMap.get(head);
    };

    return copyList(head);
};
// 回溯的方式，即递归。结合哈希表
var copyRandomList = function (head) {
    if (head === null) {
        return head;
    }

    const visitedMap = new Map();

    const copyList = (head) => {
        if (head === null) {
            return null;
        }

        if (visitedMap.has(head)) {
            return visitedMap.get(head);
        }

        const node = new Node(head.val, null, null);

        visitedMap.set(head, node);

        node.next = copyList(head.next);
        node.random = copyList(head.random);

        return node;
    };
    console.log({ visitedMap }, visitedMap.keys());

    return copyList(head);
};

const fn = (head) => {
    const cHead = new Node();
    let cur = head,
        newCur = cHead;

    while (cur !== null) {
        const node = new Node(cur.val);
        node.random = null;
        newCur.next = node;

        newCur = newCur.next;
        cur = cur.next;
    }

    return cHead.next;
};
