function solution(numbers) {
    let sum = 0;
    numbers.forEach((i) =>  {
        sum += i;
    })
       
    let avg = sum / numbers.length;
    return avg
}