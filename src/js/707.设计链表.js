/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
/**
 * 任务要求：
 * 1. 在链表头部新增
 * 2. 在链表尾部新增
 * 3. 根据index，找到第index+1 节点并返回节点值
 * 4. 根据index，插入节点
 * 5. 根据index，删除节点
 * 设计思路
 * 1. 在头部新增，修改this.list的next指针即可。
 * 2. 为了能快速在尾部新增节点，可以记录尾部指针。需要注意影响tail指针变动的几个情况。
 *      1. 空链表，先调用了  addAtHead
 *      2. 每次调用 addAtTail
 *      3. deleteAtIndex，是删除尾节点，
 *     以上3种情况则需要更新tail指针。
 * 3. 根据index查找节点，有两种方式，
 *      1. 一个是空间换时间，记录index与其对应的节点，不过如果频繁修改链表，这个方案效率很低，
 *      2. 不做额外操作，每次都是对链表进行遍历，不过可以对index进行边界判断。
 * 4. 同上，
 * 5. 同上。
 */
class MyListNode {
    constructor(val, prev, next) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : next;
        this.next = next === undefined ? null : next;
    }
}
// 双向链表
class MyLinkedList {
    constructor() {
        this.head = new MyListNode(null);
        this.tail = new MyListNode(null);

        this.tail.prev = this.head;
        this.head.next = this.tail;

        // 初始化链表长度
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        return this.getNode(index).val;
    }
    /**
     * @param {number} index
     * @return {MyListNode}
     */
    getNode(index) {
        if (index < 0 || index >= this.size) {
            return { val: -1 };
        } else {
            let cur = null;
            // 从head开始找，
            if (index < this.size >> 1) {
                cur = this.head;
                while (index >= 0) {
                    cur = cur.next;
                    index--;
                }
            } else {
                // 从tail开始查找
                cur = this.tail;
                while (this.size > index) {
                    cur = cur.prev;
                    index++;
                }
            }
            return cur;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.insertNode(val, this.head.next);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.insertNode(val, this.tail);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) {
            return;
        } else if (index === this.size) {
            this.addAtTail(val);
        } else if (index < 1) {
            this.addAtHead(val);
        } else {
            let cur = this.getNode(index);

            this.insertNode(val, cur);
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index > -1 && index < this.size) {
            let cur = this.getNode(index);

            cur.prev.next = cur.next;
            cur.next.prev = cur.prev;
            cur.next = null;
            cur.prev = null;

            this.minusListLen();
        }
    }

    updateTail(newNode) {
        this.tail = newNode;
    }
    insertNode(val, nextNode) {
        const newNode = new MyListNode(val);
        const _prevNode = nextNode.prev;

        nextNode.prev = newNode;
        newNode.next = nextNode;
        _prevNode.next = newNode;
        newNode.prev = _prevNode;

        this.plusListSize();
    }
    display() {
        let cur = this.head;
        let d = [];
        while (cur.next !== null) {
            cur = cur.next;
            d.push(cur.val);
        }

        console.log({ head: d });
    }

    plusListSize() {
        this.size++;
    }
    minusListLen() {
        this.size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

class MyListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// 单向链表
class MyLinkedList {
    constructor() {
        this.head = new MyListNode();

        // 初始化链表长度
        this.size = 0;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        } else {
            let cur = this.head;
            while (index !== 0) {
                cur = cur.next;
                index--;
            }
            return cur.next.val;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new MyListNode(val);
        newNode.next = this.head.next;
        this.head.next = newNode;

        this.plusListSize();

        // 如果链表在头部新增，尾节点还没记录，那么该节点就是尾节点。
        if (this.tail === null) {
            this.updateTail(newNode);
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        if (this.tail) {
            this.tail.next = new MyListNode(val);

            this.updateTail(this.tail.next);
            this.plusListSize();
        } else {
            this.addAtHead(val);
        }
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) {
            return;
        } else if (index === this.size) {
            this.addAtTail(val);
        } else if (index < 1) {
            this.addAtHead(val);
        } else {
            let cur = this.head;
            while (index--) {
                cur = cur.next;
            }
            const newNode = new MyListNode(val);
            newNode.next = cur.next;
            cur.next = newNode;

            this.plusListSize();
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index > -1 && index < this.size) {
            const isDelTail = this.size === index + 1;
            // remvoe
            let cur = this.head;
            while (index !== 0) {
                cur = cur.next;
                index--;
            }
            cur.next = cur.next.next;

            this.updateTail(isDelTail ? cur : this.tail);
            this.minusListLen();
        }
    }

    updateTail(newNode) {
        this.tail = newNode;
    }
    display() {
        let cur = this.head;
        let d = [];
        while (cur.next !== null) {
            cur = cur.next;
            d.push(cur.val);
        }

        console.log({ head: d });
    }

    plusListSize() {
        this.size++;
    }
    minusListLen() {
        this.size--;
    }
}

var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
obj.get(1);
obj.deleteAtIndex(1);
obj.get(1);
