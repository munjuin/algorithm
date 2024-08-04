const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let hour = +input[0];
let min = +input[1];

solution(hour, min);
function solution(hour, min) {
  let Hour = hour;
  let minute = min - 45;

  if (minute < 0) {
    minute += 60;
    Hour--;
    if (Hour === -1) {
      Hour = 23;
    }
  }
  console.log(Hour, minute);
}