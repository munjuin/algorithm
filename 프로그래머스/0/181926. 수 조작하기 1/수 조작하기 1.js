// function solution(n, control) {
//     [...control].forEach(command => {
//         switch(command) {
//             case "w": n += 1; break;
//             case "s": n -= 1; break;
//             case "d": n += 10; break;
//             case "a": n -= 10; break;
//         }
//     });
//     return n;
// }

function solution(n, control) {
    const op = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    };

    return [...control].reduce((acc, curr) => acc + op[curr], n);
}