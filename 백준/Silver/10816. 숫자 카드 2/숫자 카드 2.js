const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = parseInt(input[0]);
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

const myMap = new Map();
n_arr.forEach(v => {
    if (myMap.has(v)) myMap.set(v, myMap.get(v)+1);
    else myMap.set(v, 1);
});

const answer = [];
m_arr.forEach(v => answer.push(myMap.get(v)||0));
console.log(answer.join(" "));