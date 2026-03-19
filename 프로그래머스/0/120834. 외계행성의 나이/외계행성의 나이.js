function solution(age) {
    const alphabet = 'abcdefghij';
    return String(age).split('').map(v => alphabet[v]).join('');
}