let fs = require("fs");
let [A, B, C] = fs.readFileSync("/dev/stdin").toString().split(" ").map(BigInt);

function power(base, exponent) {
  if (exponent === 1n) {
    return base % C;
  } else if (exponent % 2n === 0n) {
    let byTwo = power(base, exponent / 2n) % C;
    return (byTwo * byTwo) % C;
  } else {
    let byTwoPlusOne = power(base, (exponent - 1n) / 2n) % C;
    return (((byTwoPlusOne * byTwoPlusOne) % C) * base) % C;
  }
}

console.log(power(A, B).toString()); 