let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(' ').map(el => Number(el));

let result = new Date(`2017-${input[0]}-${input[1]}`);

result.setDate(result.getDate()+1);

console.log(result.toString().split(' ')[0].toUpperCase());