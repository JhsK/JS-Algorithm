function pangrams(s) {
    let charSet = {};
    let answer = "";
    s.toLowerCase().split("").forEach((char) => {
        if (char !== " ") {
            charSet[char] = true;
        }
    });
    
    if (Object.keys(charSet).length === 26) answer = "pangram";
    else answer = "not pangram"
    
    return answer;
    

}