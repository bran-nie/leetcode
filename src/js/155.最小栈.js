/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
class MinStack {
    constructor() {
        this.stack = [];
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        let min;
        if (this.stack.length === 0) {
            min = x;
        } else {
            const _min = this.getMin();
            min = _min < x ? _min : x;
        }
        this.stack.push({ val: x, min });
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        return null;
    }
    /**
     * @return {number}
     */

    top() {
        return this.stack[this.stack.length - 1].val;
    }
    /**
     * @return {number}
     */

    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
