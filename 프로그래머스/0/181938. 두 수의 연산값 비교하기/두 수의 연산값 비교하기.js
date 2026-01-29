function solution(a, b) {
    let result1 = Number(`${a}${b}`);
    let result2 = `${2 * a * b}`;
    let answer = Math.max(result1, result2);
    return answer;
}