function caesarCipher(s, k) {
    let answer = "";
    let sum = k % 26;
    for (let i = 0; i < s.length; i++) {
        let tmp = s[i].charCodeAt() + sum;
        if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
            if (tmp > 122) tmp = (tmp - 122) + 96;
            answer += String.fromCharCode(String(tmp));
        } else if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
            if (tmp > 90) tmp = (tmp - 90) + 64;
            answer += String.fromCharCode(String(tmp));
        } else answer += s[i];
    }
    return answer;

}