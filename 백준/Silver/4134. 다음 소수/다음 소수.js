const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

input.shift(0);
const arr = input.map(Number);

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      
      return false;
    }
  }
  
  return true;
}


for (i = 0; i < arr.length; i++) {
  while (true) {
    
    if (isPrime(arr[i])) {
      console.log(arr[i]);
      break;
    } else {
      arr[i]++;
    }
  }
}