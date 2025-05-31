const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const A = N > 0 ? input[1].split(' ').map(Number) : [];

const B = M > 0 ? input[2].split(' ').map(Number) : [];

const mergedArray = [];
let ptrA = 0;
let ptrB = 0;

while (ptrA < N && ptrB < M) {
    if (A[ptrA] < B[ptrB]) {
        mergedArray.push(A[ptrA]);
        ptrA++;
    } else {
        mergedArray.push(B[ptrB]);
        ptrB++;
    }
}

while (ptrA < N) {
    mergedArray.push(A[ptrA]);
    ptrA++;
}

while (ptrB < M) {
    mergedArray.push(B[ptrB]);
    ptrB++;
}

console.log(mergedArray.join(' '));