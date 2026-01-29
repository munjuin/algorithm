// function solution(my_string, k) {
//     let answer = my_string.repeat(k);
//     return answer;
// }

function solution(my_string, k) {
    let answer = Array(k).fill(my_string).join('');
    return answer;
}




