const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ");

let A = +input[0];
let B = +input[1];
let C = +input[2];
let N = A / (C - B);
let answer = Math.floor(N) + 1;
console.log(B >= C ? (answer = -1) : answer);