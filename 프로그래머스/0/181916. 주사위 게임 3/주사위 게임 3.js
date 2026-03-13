function solution(a, b, c, d) {
    const counts = {};
    [a, b, c, d].forEach(n => counts[n] = (counts[n] || 0) + 1);

    const keys = Object.keys(counts).map(Number).sort((x, y) => counts[y] - counts[x] || y - x);
    const n = keys.length;

    if (n === 1) {
        return 1111 * keys[0];
    }
    
    if (n === 2) {
        if (counts[keys[0]] === 3) {
            const [p, q] = keys;
            return Math.pow(10 * p + q, 2);
        } else {
            const [p, q] = keys;
            return (p + q) * Math.abs(p - q);
        }
    }
    
    if (n === 3) {
        const [p, q, r] = keys;
        return q * r;
    }
    
    return Math.min(a, b, c, d);
}