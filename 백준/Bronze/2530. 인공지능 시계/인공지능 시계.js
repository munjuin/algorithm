const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');
const [A, B, C] = input[0].split(' ').map(Number);
const D = Number(input[1]);

let totalSeconds = A * 3600 + B * 60 + C + D;

let hour = Math.floor(totalSeconds / 3600) % 24;
let minute = Math.floor((totalSeconds % 3600) / 60);
let second = totalSeconds % 60;

// 3. 결과 출력
console.log(`${hour} ${minute} ${second}`);