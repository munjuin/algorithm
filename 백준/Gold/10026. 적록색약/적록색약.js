const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const grid = input.slice(1).map(line => line.split(''));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const bfs = (x, y, targetGrid, visited) => {
    const queue = [[x, y]];
    visited[x][y] = true;
    const color = targetGrid[x][y];

    while (queue.length > 0) {
        const [curX, curY] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = curX + dx[i];
            const ny = curY + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
                continue;
            }

            if (!visited[nx][ny] && targetGrid[nx][ny] === color) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }
};

const countAreas = (targetGrid) => {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let areaCount = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                bfs(i, j, targetGrid, visited);
                areaCount++;
            }
        }
    }
    return areaCount;
};

const nonColorBlindCount = countAreas(grid);

const colorBlindGrid = grid.map(row => 
    row.map(cell => (cell === 'G' ? 'R' : cell))
);
const colorBlindCount = countAreas(colorBlindGrid);

console.log(`${nonColorBlindCount} ${colorBlindCount}`);