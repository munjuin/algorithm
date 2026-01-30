// function solution(a, b, flag) {
//     let answer = 0;
//     if(flag){
//       answer = a + b;
//     } else {
//         answer = a - b;
//     }
//     return answer;
// }

function solution(a, b, flag) {
    return flag ? a + b : a - b;
}