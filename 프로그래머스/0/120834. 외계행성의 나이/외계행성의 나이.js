function solution(age) {
    const alphabet = 'abcdefghij';
    const ageStr = String(age);
    let result = '';
    for(const char of ageStr){
        result += alphabet[Number(char)];
    }
    return result;
}