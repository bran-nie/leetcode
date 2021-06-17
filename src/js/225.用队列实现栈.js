/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyStack {
    constructor() {
        this.queueA = [];
        this.queueB = [];
    }

    /**
     * Push element x onto stack.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        while (this.queueA.length) {
            this.queueB.push(this.queueA.shift());
        }
        this.queueA.push(x);
        while (this.queueB.length !== 0) {
            this.queueA.push(this.queueB.shift());
        }
        // this.queueB.push(x);
        // while (this.queueA.length !== 0) {
        //     this.queueB.push(this.queueA.shift());
        // }
        // this.queueA = [].concat(this.queueB);
        // this.queueB = [];
    }

    /**
     * Removes the element on top of the stack and returns that element.
     * @return {number}
     */
    pop() {
        return this.queueA.shift();
    }

    /**
     * Get the top element.
     * @return {number}
     */
    top() {
        return this.queueA[0];
    }

    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    empty() {
        return this.queueA.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

var MyStack1 = function () {
    // 队列 A 是栈
    this.queueA = [];
    // 队列 B 是辅助队列，当 栈 push 的时候，辅助队列A·
    this.queueB = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack1.prototype.push = function (x) {
    this.queueB.push(x);
    while (this.queueA.length !== 0) {
        this.queueB.push(this.queueA.shift());
    }
    this.queueA = [].concat(this.queueB);
    this.queueB = [];
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack1.prototype.pop = function () {
    return this.queueA.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack1.prototype.top = function () {
    return this.queueA[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack1.prototype.empty = function () {
    return this.queueA.length === 0;
};
