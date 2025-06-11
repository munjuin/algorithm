const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
const bookCounts = {};
let lineCount = 0;

rl.on('line', (line) => {
    if (lineCount === 0) {
        N = parseInt(line);
    } else {
        const bookTitle = line;
        bookCounts[bookTitle] = (bookCounts[bookTitle] || 0) + 1;
    }

    lineCount++;

    if (lineCount > N) {
        let maxCount = 0;
        let bestSeller = '';

        for (const book in bookCounts) {
            if (bookCounts[book] > maxCount) {
                maxCount = bookCounts[book];
                bestSeller = book;
            } else if (bookCounts[book] === maxCount) {
                if (book < bestSeller) {
                    bestSeller = book;
                }
            }
        }
        console.log(bestSeller);
        rl.close();
    }
});