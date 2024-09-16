const solution = (input) => {
    const dial = [...Array(26).keys()].reduce((acc, i) => {
        const n = 65 + i;
        const c = String.fromCharCode(n);
        if (n < 68) acc[c] = 2;
        else if (n < 71) acc[c] = 3;
        else if (n < 74) acc[c] = 4;
        else if (n < 77) acc[c] = 5;
        else if (n < 80) acc[c] = 6;
        else if (n < 84) acc[c] = 7;
        else if (n < 87) acc[c] = 8;
        else if (n < 91) acc[c] = 9;
        return acc;
    }, {});
    return input
        .split('')
        .map((s) => dial[s] + 1)
        .reduce((acc, n) => acc + n, 0);
};

require('readline')
    .createInterface(process.stdin, process.stdout)
    .on('line', (input) => console.log(solution(input)))
    .on('close', () => process.exit(0));