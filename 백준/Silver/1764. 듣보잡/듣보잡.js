const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(v => v.trim());
input.shift();
const set = new Set(input)
console.log(input.length - set.size);
const answer = [];
input.forEach(v => {
	if (set.has(v)) {
		set.delete(v);
	} else {
		answer.push(v)
	}
})

console.log(answer.sort().join('\n'))