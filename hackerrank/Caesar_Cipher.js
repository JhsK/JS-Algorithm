function rot13(str) {
    let decodeStr = ""
    for (let i = 0; i < str.length; i++) {
        let lettersCode = (str[i].charCodeAt());
        if (lettersCode >= 65 && lettersCode <= 77) {
            decodeStr += String.fromCharCode(lettersCode + 13);
        } else if (lettersCode >= 78 && lettersCode <= 90) {
            decodeStr += String.fromCharCode(lettersCode - 13);
        } else {
            decodeStr += str[i];
        }
    }
    return decodeStr;
}
console.log(rot13("SERR PBQR PNZC"));