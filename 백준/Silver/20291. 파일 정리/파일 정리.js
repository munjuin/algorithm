const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const extensionMap = new Map();

for (let i = 1; i <= N; i++) {
    const fileName = input[i].trim();
    const extension = fileName.split('.')[1];

    if (extensionMap.has(extension)) {
        extensionMap.set(extension, extensionMap.get(extension) + 1);
    } else {
        extensionMap.set(extension, 1);
    }
}

const sortedExtensions = [...extensionMap.keys()].sort();
const result = [];

sortedExtensions.forEach(ext => {
    result.push(`${ext} ${extensionMap.get(ext)}`);
});

console.log(result.join('\n'));