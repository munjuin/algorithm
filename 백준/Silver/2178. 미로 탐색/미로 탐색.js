const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const maze = input.slice(1).map(line => line.split('').map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));

const queue = [];

queue.push([0, 0, 1]);
visited[0][0] = true;

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let head = 0;

while(head < queue.length) {
    const [currentRow, currentCol, distance] = queue[head++];

    if (currentRow === N - 1 && currentCol === M - 1) {
        console.log(distance);
        process.exit();
    }

    for (let i = 0; i < 4; i++) {
        const nextRow = currentRow + dr[i];
        const nextCol = currentCol + dc[i];

        if (nextRow >= 0 && nextRow < N && nextCol >= 0 && nextCol < M) {
            if (maze[nextRow][nextCol] === 1 && !visited[nextRow][nextCol]) {

                visited[nextRow][nextCol] = true;

                queue.push([nextRow, nextCol, distance + 1]);
            }
        }
    }
}
