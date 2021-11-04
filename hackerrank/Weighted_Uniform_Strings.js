function weightedUniformStrings(s, queries) {
    let tmpArray = [];
    let tmp = 1;
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        let cal = s[i].charCodeAt() - 96;
        if (i > 0 && s[i] === s[i-1]) {
            tmp++;
            tmpArray.push(cal * tmp);
        } else {
            tmp = 1;
            tmpArray.push(cal);
        }
    }
    
    for (let x of queries) {
        if (tmpArray.indexOf(x) > -1) answer.push('Yes');
        else answer.push('No');
    }
    
    return answer;
}