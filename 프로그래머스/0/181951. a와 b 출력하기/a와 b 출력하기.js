// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', (line)=>{
//     input = line.split(' ');
//     rl.close();
// }).on('close', ()=>{
//     console.log(`a = ${input[0]} \nb = ${input[1]}`)
// });

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();// "4 5"
const inputSplit = input.split(' ');// ["4", "5"]
const [a, b] = inputSplit.map(Number);// [4, 5]
console.log(`a = ${a}\nb = ${b}`)

