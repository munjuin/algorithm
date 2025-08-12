const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const n = parseInt(input[0], 10);

  const students = [];

  for (let i = 1; i <= n; i++) {
    const [name, day, month, year] = input[i].split(' ');
    students.push({
      name: name,
      day: parseInt(day, 10),
      month: parseInt(month, 10),
      year: parseInt(year, 10),
    });
  }

  students.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    if (a.month !== b.month) {
      return a.month - b.month;
    }
    return a.day - b.day;
  });

  const youngest = students[n - 1];

  const oldest = students[0];

  console.log(youngest.name);
  console.log(oldest.name);

  process.exit();
});