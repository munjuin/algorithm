const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
const N = input.shift();
input.sort((a, b) => a - b);

console.log(Math.round(input.reduce((r, v) => r + v, 0) / N).toString());
console.log(input[Math.floor(N / 2)].toString());

const frequency = Object.entries(
	input.reduce((r, v) => {
		if (r[v]) r[v]++;
		else r[v] = 1;
		return r;
	}, {})
).sort((a, b) => {
	if (a[1] == b[1]) {
		return a[0] - b[0];
	} else {
		return b[1] - a[1];
	}
});
if (frequency.length > 1 && frequency[0][1] == frequency[1][1]) {
	console.log(frequency[1][0]);
} else {
	console.log(frequency[0][0]);
}

console.log((input[input.length - 1] - input[0]).toString());