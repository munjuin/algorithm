// function solution(num_list) {
//     let sum = 0;
//     let product = 1; // 곱셈의 초기값은 0이 아닌 1이어야 합니다!

//     for (let i = 0; i < num_list.length; i++) {
//         sum += num_list[i];
//         product *= num_list[i];
//     }

//     // 합의 제곱 vs 모든 원소의 곱 비교
//     return product < sum ** 2 ? 1 : 0;
// }

function solution(num_list) {
    let sum = 0;
    let product = 1;

    num_list.forEach((num) => {
        sum += num;
        product *= num;
    });

    return product < (sum ** 2) ? 1 : 0;
}