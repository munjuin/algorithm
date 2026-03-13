function solution(numer1, denom1, numer2, denom2) {
    let n = numer1 * denom2 + numer2 * denom1;
    let d = denom1 * denom2;

    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    
    const gcd = getGCD(n, d);

    return [n / gcd, d / gcd];
}