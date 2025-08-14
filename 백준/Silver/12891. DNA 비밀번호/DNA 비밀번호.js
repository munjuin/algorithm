const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [S, P] = input[0].split(' ').map(Number);
const dnaString = input[1];
const minCounts = input[2].split(' ').map(Number);
const charMap = { 'A': 0, 'C': 1, 'G': 2, 'T': 3 };
let currentCounts = [0, 0, 0, 0];
let passwordCount = 0;

const checkValidity = () => {
    if (
        currentCounts[0] >= minCounts[0] &&
        currentCounts[1] >= minCounts[1] &&
        currentCounts[2] >= minCounts[2] &&
        currentCounts[3] >= minCounts[3]
    ) {
        return true;
    }
    return false;
};

for (let i = 0; i < P; i++) {
    currentCounts[charMap[dnaString[i]]]++;
}

if (checkValidity()) {
    passwordCount++;
}

for (let i = P; i < S; i++) {
    const charToAdd = dnaString[i];
    currentCounts[charMap[charToAdd]]++;
    const charToRemove = dnaString[i - P];
    currentCounts[charMap[charToRemove]]--;

    if (checkValidity()) {
        passwordCount++;
    }
}
console.log(passwordCount);