let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let arr = input.split("").map((el) => Number(el));

let number = 0;
let count = 0;

for (let i = 0; i <= 9; i++) {
    if (i === 6 || i === 9) continue;
	let find = arr.filter((el) => el === i).length;
	if (find > count) {
		number = i;
		count = find;
	}
}

if (Math.ceil(arr.filter(el => el === 6 || el === 9).length / 2) > count) {
	console.log(Math.ceil(arr.filter(el => el === 6 || el === 9).length / 2));
} else {
	console.log(count);
}