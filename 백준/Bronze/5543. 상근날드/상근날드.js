let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cost = [];
input.forEach(function(value) {
  cost.push(Number(value));
});

let burger = [];
for (let i = 0; i < 3; i++) {
    burger.push(Number(cost[i]))
}

let drink = [];
for (let i = 3; i < 5; i++) {
    drink.push(Number(cost[i]))
}

cheapBurger = Math.min(...burger);
cheapDrink = Math.min(...drink);

let setMenu =  cheapBurger + cheapDrink - 50;
console.log(setMenu);