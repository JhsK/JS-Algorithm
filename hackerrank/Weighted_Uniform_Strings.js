function weightedUniformStrings(s, queries) {
    let code;
    let prevChar;
    let prevCharCount;
    let dic = Object.create(null);
    for (let i = 0; i < s.length; i++) {
        code = s.charCodeAt(i) - 96;
        if (prevChar === code) {
            prevCharCount++;
        } else {
            prevCharCount = 1;
            prevChar = code;
        }
        
        dic[code * prevCharCount] = true;
    }
    
    var result = [];
    for (let i = 0; i < queries.length; i++) {
        result.push(dic[queries[i]] ? "Yes" : "No");
    }
    
    return result;
}