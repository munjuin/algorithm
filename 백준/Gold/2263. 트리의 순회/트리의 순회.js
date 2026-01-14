"use strict";

const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0);
    let offset = 0;

    function nextInt() {
        while (offset < input.length && (input[offset] < 48 || input[offset] > 57)) offset++;
        if (offset >= input.length) return null;
        let res = 0;
        while (offset < input.length && input[offset] >= 48 && input[offset] <= 57) {
            res = res * 10 + (input[offset] - 48);
            offset++;
        }
        return res;
    }

    const n = nextInt();
    if (n === null) return;

    const inorder = new Int32Array(n);
    const postorder = new Int32Array(n);
    const position = new Int32Array(n + 1);

    for (let i = 0; i < n; i++) {
        inorder[i] = nextInt();
        position[inorder[i]] = i;
    }
    for (let i = 0; i < n; i++) {
        postorder[i] = nextInt();
    }

    const result = [];

    function findPreorder(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) return;

        const rootValue = postorder[postEnd];
        result.push(rootValue);

        const rootIdx = position[rootValue];
        const leftSize = rootIdx - inStart;

        findPreorder(
            inStart, 
            rootIdx - 1, 
            postStart, 
            postStart + leftSize - 1
        );

        findPreorder(
            rootIdx + 1, 
            inEnd, 
            postStart + leftSize, 
            postEnd - 1
        );
    }

    findPreorder(0, n - 1, 0, n - 1);
    
    console.log(result.join(' '));
}

solve();