const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0).toString().trim().split(/\s+/);
    let idx = 0;

    const N = parseInt(input[idx++]);
    const M = parseInt(input[idx++]);

    const truthCount = parseInt(input[idx++]);
    const truthPeople = [];
    for (let i = 0; i < truthCount; i++) {
        truthPeople.push(parseInt(input[idx++]));
    }

    const parties = [];
    for (let i = 0; i < M; i++) {
        const pCount = parseInt(input[idx++]);
        const pMembers = [];
        for (let j = 0; j < pCount; j++) {
            pMembers.push(parseInt(input[idx++]));
        }
        parties.push(pMembers);
    }

    if (truthCount === 0) {
        console.log(M);
        return;
    }

    const parent = Array.from({ length: N + 1 }, (_, i) => i);

    function find(x) {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    }

    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA !== rootB) {
            parent[rootB] = rootA;
        }
    }

    for (const party of parties) {
        const firstPerson = party[0];
        for (let i = 1; i < party.length; i++) {
            union(firstPerson, party[i]);
        }
    }

    const truthRoots = new Set();
    for (const person of truthPeople) {
        truthRoots.add(find(person));
    }

    let lieableParties = 0;
    for (const party of parties) {
        let canLie = true;
        for (const person of party) {
            if (truthRoots.has(find(person))) {
                canLie = false;
                break;
            }
        }
        if (canLie) lieableParties++;
    }

    console.log(lieableParties);
}

solve();