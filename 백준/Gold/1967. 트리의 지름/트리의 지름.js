const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
    const [parent, child, weight] = input[i].split(' ').map(Number);
    graph[parent].push({ node: child, weight });
    graph[child].push({ node: parent, weight });
}

let maxDistance = 0;
let farthestNode = 0;

function dfs(node, parent, distance) {
    if (distance > maxDistance) {
        maxDistance = distance;
        farthestNode = node;
    }

    for (const { node: nextNode, weight } of graph[node]) {
        if (nextNode !== parent) {
            dfs(nextNode, node, distance + weight);
        }
    }
}

dfs(1, -1, 0);

maxDistance = 0;
dfs(farthestNode, -1, 0);

console.log(maxDistance);