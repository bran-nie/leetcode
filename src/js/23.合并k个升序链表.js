/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;

    this.display = () => {
        let list = this;
        const arr = [];
        while (list.next !== null) {
            arr.push(list.val);
            list = list.next;
        }
        arr.push(list.val);
        return arr;
    };
}

const add = (list, count) => {
    let p = list;
    const max = p.val + count;
    for (let i = p.val; i < max; i++) {
        while (p.next !== null) {
            p = p.next;
        }
        p.next = new ListNode(i);
    }
};

// 132ms， 54.6%  45.2MB
var mergeKLists = function (lists) {
    const head = new ListNode('head');
    let cur = head;

    while (lists.length !== 0) {
        const nums = [];

        for (let i = 0; i < lists.length; i++) {
            const list = lists[i];
            if (list && list.next !== null) {
                nums.push(list.val);
            } else if (list && list.val !== undefined) {
                nums.push(list.val);
            } else {
                lists.splice(i, 1);
                i--;
            }
            if (i > lists.length) {
                break;
            }
        }
        const min = Math.min(...nums);

        // console.log('nums ', nums);
        // console.log({ min });
        // console.log('while lists before: ', lists);

        // nums数组和lists数组是对应的。nums的元素是lists每个链表的第一个值。
        for (let i = 0; i < lists.length; i++) {
            // 最小的元素，添加到结果链表中，
            if (nums[i] === min) {
                cur.next = new ListNode(min);
                cur = cur.next;

                lists[i] = lists[i].next;
            }
        }
        // console.log('while lists after: ', lists);
        // console.log('result', head.next);
        // console.log('---');
        // console.log('');
    }
    return head.next;
};
// @lc code=end

// 最开始的
// 1668ms，5%，64.7MB
var mergeKLists = function (lists) {
    const head = new ListNode('head');

    while (lists.length !== 0) {
        const nums = [];

        for (let i = 0; i < lists.length; i++) {
            const list = lists[i];
            if (list && list.next !== null) {
                nums.push({ val: list.val, index: i, remove: false });
            } else if (list && list.val !== undefined) {
                nums.push({ val: list.val, index: i, remove: false });
            } else {
                nums.push({ val: undefined, index: i, remove: true });
            }
        }

        let min = null;
        nums.forEach((n) => {
            if (min === null && n.val !== undefined) {
                min = n.val;
            }
            if (n.val !== undefined && min > n.val) {
                min = n.val;
            }
        });

        for (let i = 0; i < lists.length; i++) {
            // 最小的元素，添加到结果链表中，
            if (nums[i].val !== undefined && nums[i].val === min) {
                let cur = head;
                while (cur.next !== null) {
                    cur = cur.next;
                }
                cur.next = new ListNode(min);

                if (!nums[i].remove) {
                    lists[i] = lists[i].next;
                }
                if (nums[i].remove) {
                    lists.splice(i, 1);
                }
            }
        }

        for (let i = 0; i < lists.length; i++) {
            if (lists[i] === null) {
                lists.splice(i, 1);
            }
        }
        // console.log('nums ', nums);
        // console.log({ min });
        console.log('while lists', lists);
        // console.log('result', head.next);
        // console.log('---')
        // console.log('')
    }
    return head.next;
};
