/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class ListNode {
    constructor(data, prev, next) {
        this.data = data === undefined ? undefined : data;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.head = new ListNode('head');
        this.tail = new ListNode('tail');
        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
        this.maxSize = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            const cur = this.map.get(key);
            this.removeNode(cur);
            this.addToHead(cur);
            return cur.data.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // 如果该 key 已经存在，则更新 value
        if (this.map.has(key)) {
            const cur = this.map.get(key);
            cur.data.value = value;

            this.removeNode(cur);
            this.addToHead(cur);
        } else {
            // 将新节点添加到最前面。
            const newNode = new ListNode({ key, value });
            this.addToHead(newNode);

            this.map.set(key, newNode);

            // 如果缓存已经满了，则删除最后一个节点
            if (this.size === this.maxSize) {
                const node = this.tail.prev;
                this.removeNode(node);
                this.map.delete(node.data.key);
            } else {
                this.size++;
            }
        }
        return null;
    }

    removeNode(node) {
        // 在当前删除
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.prev = null;
        node.next = null;
    }
    addToHead(node) {
        // 移动到最前面
        this.head.next.prev = node;
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next = node;
    }

    display() {
        let cur = this.head.next;
        const d = [];
        while (cur.next !== null) {
            d.push(cur.data.key);
            cur = cur.next;
        }
        console.log(d);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

// let cache = new LRUCache(2);
// cache.put(1, 1);
// cache.put(2, 2);
// cache.display()
// cache.get(1);
// cache.display();
// cache.put(3,3);
