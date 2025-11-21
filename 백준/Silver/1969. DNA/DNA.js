const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);
const N = parseInt(input[0]);
const M = parseInt(input[1]);
const dnas = [];
for (let i = 0; i < N; i++) {
    dnas.push(input[2 + i]);
}

let resultDNA = "";
let totalHammingDistance = 0;
const nucleotides = ['A', 'C', 'G', 'T'];

for (let j = 0; j < M; j++) {
    const counts = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };
    for (let i = 0; i < N; i++) {
        const char = dnas[i][j];
        counts[char]++;
    }

    let maxCount = -1;
    let selectedChar = '';
    for (const nucleotide of nucleotides) {
        if (counts[nucleotide] > maxCount) {
            maxCount = counts[nucleotide];
            selectedChar = nucleotide;
        }
    }

    resultDNA += selectedChar;
    totalHammingDistance += (N - maxCount);
}

console.log(resultDNA);
console.log(totalHammingDistance);