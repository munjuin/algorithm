const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [count, line] = input[0].split(' ').map(Number);
let baskets = Array(count).fill(1).map((v, i) => v + i);
for (let i = 1; i <= line; i++) {
    let [start, end] = input[i].split(' ').map(Number);
    let reversedPart = baskets.slice(start - 1, end).reverse();
    baskets.splice(start - 1, end - start + 1, ...reversedPart);
}

console.log(baskets.join(' '));