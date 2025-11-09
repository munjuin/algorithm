const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);
const seats = input[1];
const numGroups = seats.replace(/LL/g, 'C').length;
const numCupholders = 1 + numGroups;
const answer = Math.min(N, numCupholders);

console.log(answer);