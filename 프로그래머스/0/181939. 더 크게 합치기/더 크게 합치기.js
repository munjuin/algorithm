function solution(a, b) {
    let result1 = String(a) + String(b);
    let result2 = String(b) + String(a);
    let answer = '';
    if(result1 > result2){
        answer = Number(result1);
    } else {
        answer = Number(result2);
    }
    return answer;
}