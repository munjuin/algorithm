const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("").map((el) => parseInt(el));

function sort(arr) {
  let tmp = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] < arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
  return arr;
}

function Solution(input) {
  console.log(sort(input).join(""));
}

Solution(input);