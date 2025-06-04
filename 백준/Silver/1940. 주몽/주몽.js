const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[1]);
const materials = input[2].split(' ').map(Number);

materials.sort((a, b) => a - b);

let armorCount = 0;
let left = 0;
let right = N - 1;

while (left < right) {
    const currentSum = materials[left] + materials[right];

    if (currentSum === M) {
        armorCount++;
        left++;
        right--;
    } else if (currentSum < M) {
        left++;
    } else {
        right--;
    }
}

console.log(armorCount);