const fs = require("fs");
let [num, divider] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map((item) => Number(item));

let ans = num.toString(divider).toUpperCase();

console.log(ans);