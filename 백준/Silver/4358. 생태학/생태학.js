const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const treeCounts = new Map();
const totalCount = input.length;
for (const speciesName of input) {
  const currentCount = treeCounts.get(speciesName) || 0;
  treeCounts.set(speciesName, currentCount + 1);
}

const sortedSpecies = [...treeCounts.keys()].sort();
const output = [];
for (const species of sortedSpecies) {
  const count = treeCounts.get(species);
  const percentage = (count / totalCount) * 100;
  const formattedPercentage = percentage.toFixed(4);
  output.push(`${species} ${formattedPercentage}`);
}

console.log(output.join('\n'));