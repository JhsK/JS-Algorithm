function solution(s) {
    const parseStr = s.slice(2, -2).split('},{');
    parseStr.sort((a, b) => a.length - b.length);
    const result = [];
    
    for (let str of parseStr) {
        str = str.split(',');
        for (let i = 0; i < str.length; i++) {
            if (!result.includes(str[i])) {
                result.push(str[i]);
            }
        }
    }
    
    return result.map((value) => Number(value));
}