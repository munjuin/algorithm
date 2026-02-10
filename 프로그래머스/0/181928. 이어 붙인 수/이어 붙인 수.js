function solution(num_list) {
    let even_number = ""
    let odd_number = ""
    num_list.forEach((number)=>{
        if(number % 2 ===0){
            even_number += number;
        } else {
            odd_number += number;
        }
    })
    return Number(even_number) + Number(odd_number)
}