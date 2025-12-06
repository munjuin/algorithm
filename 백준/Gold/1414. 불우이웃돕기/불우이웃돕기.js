const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const matrix = [];

for (let i = 1; i <= N; i++) {
    matrix.push(input[i].trim());
}

function getWeight(char) {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        return code - 96;
    }
    if (code >= 65 && code <= 90) {
        return code - 38;
    }
    return 0;
}

const parent = Array.from({ length: N }, (_, i) => i);

function find(x) {
    if (parent[x] === x) return x;
    return parent[x] = find(parent[x]);
}

function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) {
        parent[rootY] = rootX;
        return true;
    }
    return false;
}

const edges = [];
let totalCableLength = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const char = matrix[i][j];
        if (char === '0') continue;

        const weight = getWeight(char);
        totalCableLength += weight;

        if (i !== j) {
            edges.push({ u: i, v: j, w: weight });
        }
    }
}

edges.sort((a, b) => a.w - b.w);

let usedLength = 0;
let connectedEdges = 0;

for (const edge of edges) {
    if (union(edge.u, edge.v)) {
        usedLength += edge.w;
        connectedEdges++;
    }
}

if (N === 1) {
    console.log(totalCableLength);
} else {
    if (connectedEdges === N - 1) {
        console.log(totalCableLength - usedLength);
    } else {
        console.log(-1);
    }
}