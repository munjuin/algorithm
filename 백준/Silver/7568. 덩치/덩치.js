const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0]);

class Person {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
    this.rank = 0;
  }
}

const people = []

for(let i = 1; i <= num; i++) {
  const [weight, height] = input[i].split(" ").map(Number);
  const person = new Person(weight, height);
  people.push(person);
}

for(let i = 0; i < people.length; i++) {
  let currentPeople = people[i];
  const biggerPeople = people.filter(person => person.weight > currentPeople.weight && person.height > currentPeople.height);
  currentPeople.rank = biggerPeople.length + 1;
}

for(let person of people) {
  console.log(person.rank);
}