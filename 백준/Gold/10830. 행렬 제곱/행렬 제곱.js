const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 입력 파싱
const [NB, ...matrixRows] = input;
const [N, B] = NB.split(' ').map((val, i) => i === 1 ? BigInt(val) : Number(val));
const originMatrix = matrixRows.map(row => row.trim().split(' ').map(Number));

function multiplyMatrix(m1, m2) {
    const result = Array.from({ length: N }, () => Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let sum = 0;
            for (let k = 0; k < N; k++) {
                sum += m1[i][k] * m2[k][j];
                sum %= 1000;
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function power(matrix, exp) {
    if (exp === 1n) {
        return matrix.map(row => row.map(val => val % 1000));
    }

    const half = power(matrix, exp / 2n);
    const halfSquare = multiplyMatrix(half, half);

    if (exp % 2n === 0n) {
        return halfSquare;
    } else {
        return multiplyMatrix(halfSquare, originMatrix);
    }
}

const resultMatrix = power(originMatrix, B);

console.log(resultMatrix.map(row => row.join(' ')).join('\n'));