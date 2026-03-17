function solution(my_string) {
    return [...my_string].reduce((acc, cur) => {
        const code = cur.charCodeAt(0);
        const idx = (code <= 90) ? (code - 65) : (code - 71);
        acc[idx]++;
        return acc;
    }, Array(52).fill(0));
}