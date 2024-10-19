const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const count = Number(input.shift());

let xArr = [];
let yArr = [];

input.forEach((item) => {
  let [x, y] = item.split(" ");
  xArr.push(x);
  yArr.push(y);
});

let width = Math.max(...xArr) - Math.min(...xArr);
let height = Math.max(...yArr) - Math.min(...yArr);

console.log(width * height);