/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    const ans = [];
    if (n === 1) {
        ans.push(0);
        return ans;
    }
    const adj = new Array(n).fill(0).map(() => new Array());
    for (const edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    }

    const parent = new Array(n).fill(-1);
    /* 找到与节点 0 最远的节点 x */
    let x = findLongestNode(0, parent, adj);
    /* 找到与节点 x 最远的节点 y */
    let y = findLongestNode(x, parent, adj);
    /* 求出节点 x 到节点 y 的路径 */
    const path = [];
    parent[x] = -1;
    while (y !== -1) {
        path.push(y);
        y = parent[y];
    }
    const m = path.length;
    if (m % 2 === 0) {
        ans.push(path[Math.floor(m / 2) - 1]);
    }
    ans.push(path[Math.floor(m / 2)]);
    return ans;
};

const findLongestNode = (u, parent, adj) => {
    const n = adj.length;
    const dist = new Array(n).fill(-1);
    dist[u] = 0;

    const dfs = (u, dist, parent, adj) => {
        for (const v of adj[u]) {
            if (dist[v] < 0) {
                dist[v] = dist[u] + 1;
                parent[v] = u;
                dfs(v, dist, parent, adj);
            }
        }
    };

    dfs(u, dist, parent, adj);
    let maxdist = 0;
    let node = -1;
    for (let i = 0; i < n; i++) {
        if (dist[i] > maxdist) {
            maxdist = dist[i];
            node = i;
        }
    }
    return node;
};
// @lc code=end

var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const edgeMap = new Map();
    edges.forEach((edge) => {
        const [e1, e2] = edge;
        if (edgeMap.has(e1)) {
            edgeMap.set(e1, [...edgeMap.get(e1), e2]);
        } else {
            edgeMap.set(e1, [e2]);
        }

        if (edgeMap.has(e2)) {
            edgeMap.set(e2, [...edgeMap.get(e2), e1]);
        } else {
            edgeMap.set(e2, [e1]);
        }
    });
    const genTree = (root, from, h) => {
        debugger;
        const next = edgeMap.get(root);

        for (let e of next) {
            if (e === from) {
                continue;
            }
            genTree(e, root, h + 1);
        }
        if (next.length === 1 && next[0] === from) {
            return h;
        }
    };
    let ans = [],
        min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        const h = genTree(i, undefined, 1);
        console.log({ h, i });

        if (h === min) {
            ans.push(i);
        } else if (h < min) {
            ans = [i];
            min = h;
        }
    }
    return ans;
};

findMinHeightTrees(6, [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
]);
