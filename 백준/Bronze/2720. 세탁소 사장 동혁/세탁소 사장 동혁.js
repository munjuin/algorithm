let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let changes = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);


const quarter = 25;
const dime = 10;
const nickel = 5;
const penny = 1;
const coinArr = [quarter, dime, nickel, penny];


function handleChange(change) {
  let totalChange = change;
  let totalCoinCount = "";

  for (let i = 0; i < coinArr.length; i++) {
    const coin = coinArr[i];
    if (totalChange / coin >= 0) {
      const coinCount = Math.floor(totalChange / coin);
      totalCoinCount += coinCount + " ";
      totalChange = totalChange - coin * coinCount;
    }
  }

  return totalCoinCount;
}

changes.map((change, index) => {
  if (index > 0) console.log(handleChange(change));
});