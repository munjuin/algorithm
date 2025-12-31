const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

function solve() {
    const [R, C] = input[0].split(' ').map(Number);
    const map = input.slice(1);
    const distances = new Array(10).fill(0);

    for (let i = 0; i < R; i++) {
        const row = map[i];
        const match = row.match(/[1-9]/);
        
        if (match) {
            const teamNum = parseInt(match[0]);
            const lastIndex = row.lastIndexOf(match[0]);
            const distance = (C - 1) - lastIndex - 1;
            distances[teamNum] = distance;
        }
    }

    const uniqueDistances = [...new Set(distances.slice(1))].sort((a, b) => a - b);

    const result = [];
    for (let i = 1; i <= 9; i++) {
        const rank = uniqueDistances.indexOf(distances[i]) + 1;
        result.push(rank);
    }

    console.log(result.join('\n'));
}

solve();