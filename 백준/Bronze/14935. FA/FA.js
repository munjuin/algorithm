const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', (line) => {
    const x = line;
    let current = x;
    const seen = new Set();

    while (!seen.has(current)) {
        seen.add(current);
        const firstDigit = parseInt(current[0]);
        const numDigits = current.length;
        current = String(firstDigit * numDigits);

        if (seen.has(current)) {
            console.log('FA');
            readline.close();
            return;
        }
    }

    console.log('NFA');
    readline.close();
});
