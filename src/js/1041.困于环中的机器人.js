/*
 * @lc app=leetcode.cn id=1041 lang=javascript
 *
 * [1041] 困于环中的机器人
 */

// @lc code=start
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const isOrign = (coordinate) => {
        return coordinate[0] === 0 && coordinate[1] === 0;
    };

    let directionIndex = 0;
    let coordinate = [0, 0];

    const move = (coordinate, directionIndex) => {
        const [x, y] = directions[directionIndex];
        coordinate[0] += x;
        coordinate[1] += y;
    };
    const changeDirection = (directionIndex, direction) => {
        if (direction === 'L') {
            directionIndex--;
            directionIndex = directionIndex < 0 ? 3 : directionIndex;
        } else {
            directionIndex++;
            directionIndex = directionIndex > 3 ? 0 : directionIndex;
        }
        return directionIndex;
    };

    for (let count = 0; count < 4; count++) {
        for (let c of instructions) {
            if (c === 'G') {
                move(coordinate, directionIndex);
            } else {
                directionIndex = changeDirection(directionIndex, c);
            }
        }
        if (isOrign(coordinate)) {
            return true;
        }
    }
    return false;
};
// @lc code=end
