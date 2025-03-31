const [W, H] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

console.log(((W * H) / 2).toFixed(1));