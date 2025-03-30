function factorial(n) {
    if(n <= 1) return 1
    return n * factorial(n-1)
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")
const num = Number(input)

console.log(factorial(num))