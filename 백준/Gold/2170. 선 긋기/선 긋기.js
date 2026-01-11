const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0).toString().split('\n');
    const n = parseInt(input[0]);
    const lines = [];

    for (let i = 1; i <= n; i++) {
        if (!input[i]) continue;
        const [x, y] = input[i].split(' ').map(Number);
        lines.push([x, y]);
    }

    lines.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    let totalLength = 0;
    let currentLeft = lines[0][0];
    let currentRight = lines[0][1];

    for (let i = 1; i < n; i++) {
        const [nextLeft, nextRight] = lines[i];

        if (nextLeft <= currentRight) {
            if (nextRight > currentRight) {
                currentRight = nextRight;
            }
        } else {
            totalLength += currentRight - currentLeft;
            currentLeft = nextLeft;
            currentRight = nextRight;
        }
    }

    totalLength += currentRight - currentLeft;

    console.log(totalLength.toString());
}

solve();