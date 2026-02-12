// function solution(num_list) {

//     const last = num_list[num_list.length - 1];
//     const prev = num_list[num_list.length - 2];
    
//     if (last > prev) {
//         num_list.push(last - prev);
//     } else {
//         num_list.push(last * 2);
//     }
    
//     return num_list;
// }

function solution(num_list) {
    const last = num_list.at(-1);
    const prev = num_list.at(-2);
    
    num_list.push(last > prev ? last - prev : last * 2);
    return num_list;
}