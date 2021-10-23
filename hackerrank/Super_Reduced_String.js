function superReducedString(s) {
    let answer = "";
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    for (let j of stack) {
        console.log(j);
        answer += j;
    }
    
    if (answer === "") answer = "Empty String";
    return answer
}