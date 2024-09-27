const record = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.trim().split(' '));

const POINT = {
	'A+': 4.5,
	A0: 4.0,
	'B+': 3.5,
	B0: 3.0,
	'C+': 2.5,
	C0: 2.0,
	'D+': 1.5,
	D0: 1.0,
	F: 0.0,
};
let C = 0;
let G = 0;

record.forEach((v) => {
	const [_, credit, grade] = v;
	if (grade != 'P') {
		C += +credit;
		G += POINT[grade] * +credit;
	}
});

console.log((G / C).toFixed(6));