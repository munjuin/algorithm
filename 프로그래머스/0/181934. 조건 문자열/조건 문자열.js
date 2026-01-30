// function solution(ineq, eq, n, m) {
//     if (eq === "=") {
//         return ineq === ">" ? (n >= m ? 1 : 0) : (n <= m ? 1 : 0);
//     } else {
//         return ineq === ">" ? (n > m ? 1 : 0) : (n < m ? 1 : 0);
//     }
// }

function solution(ineq, eq, n, m) {
    const opMap = {
        ">=": n >= m,
        "<=": n <= m,
        ">!": n > m,
        "<!": n < m,
    };
    return opMap[ineq + eq] ? 1 : 0;
}