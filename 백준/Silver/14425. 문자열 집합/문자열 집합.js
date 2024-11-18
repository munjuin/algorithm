let input = require("fs").readFileSync("/dev/stdin").toString().trim()
.split("\n")

let [ N, ] = input[0].split(" ")

let S = new Set()

for(let i = 1; i <= N; i++) {
    S.add(input[i])
}

let ans = 0

for (let i = Number(N)+1; i<input.length; i++) {
    if(S.has(input[i])) {
        ans++
    }
}

console.log(ans)