function hackerrankInString(s) {
    let queue = ["h","a","c","k","e","r","r","a","n","k"];
    let answer = "NO";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === queue[0]) queue.shift();
        if (queue.length === 0) {
            answer = "YES"
            return answer;
        }
    }
    
    return answer;
}