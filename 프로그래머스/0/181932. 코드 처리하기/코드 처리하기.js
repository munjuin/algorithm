function solution(code) {
    let mode = 0;
    let ret = "";

    for (let idx = 0; idx < code.length; idx++) {
        const char = code[idx];

        if (char === "1") {
            mode = mode === 0 ? 1 : 0;
        } else {
            if (mode === 0) {
                if (idx % 2 === 0) ret += char;
            } else {
                if (idx % 2 !== 0) ret += char;
            }
        }
    }

    return ret.length === 0 ? "EMPTY" : ret;
}