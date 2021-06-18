/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyQueue {
    constructor() {
        // 模拟队列的元素顺序。
        this.stackA = [];
        // 辅助栈
        this.stackB = [];
        /**
         * 栈的可用方法，对应数组的方法
         * pop === pop
         * push === push
         * top === stack[stack.length - 1];
         * empty === stack.size === stack.length === 0
         */
    }
    /**
     * Push element x to the back of queue.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // 先将 stackA 的元素 pop 出去并推进 stackB 中，
        while (this.stackA.length !== 0) {
            this.stackB.push(this.stackA.pop());
        }
        // 随后添加新元素，
        this.stackA.push(x);
        // 再将 stackB 中的返回来
        while (this.stackB.length !== 0) {
            this.stackA.push(this.stackB.pop());
        }
    }

    /**
     * Removes the element from in front of queue and returns that element.
     * @return {number}
     */
    pop() {
        return this.stackA.pop();
    }

    /**
     * Get the front element.
     * @return {number}
     */
    peek() {
        return this.stackA[this.stackA.length - 1];
    }

    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
        return this.stackA.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
