const [N, ...cmd] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.trim());
let answer = '';
for (let i = 0; i < cmd[0].length; i++) {
	let char = cmd[0][i];
	for (let n = 1; n < +N; n++) {
		if (cmd[n][i] != char) {
			char = '?';
		}
	}
	answer += char;
}
console.log(answer);