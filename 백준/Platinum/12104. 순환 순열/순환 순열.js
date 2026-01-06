const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split('\n');
    if (input.length < 2) return;

    const A = input[0].trim();
    const B = input[1].trim();
    const n = A.length;

    if (n === 0) {
        console.log(0);
        return;
    }

    function getPi(pattern) {
        const pi = new Array(pattern.length).fill(0);
        let j = 0;
        for (let i = 1; i < pattern.length; i++) {
            while (j > 0 && pattern[i] !== pattern[j]) {
                j = pi[j - 1];
            }
            if (pattern[i] === pattern[j]) {
                pi[i] = ++j;
            }
        }
        return pi;
    }

    function kmpSearch(text, pattern) {
        const pi = getPi(pattern);
        let count = 0;
        let j = 0;
        
        const targetText = text + text.slice(0, -1);
        
        for (let i = 0; i < targetText.length; i++) {
            while (j > 0 && targetText[i] !== pattern[j]) {
                j = pi[j - 1];
            }
            if (targetText[i] === pattern[j]) {
                if (j === pattern.length - 1) {
                    count++;
                    j = pi[j];
                } else {
                    j++;
                }
            }
        }
        return count;
    }

    console.log(kmpSearch(B, A));
}

solve();