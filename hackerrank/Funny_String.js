function calAbs(asciiArray, arrayLength) {
    let result = [];
    for (let i = 0; i < arrayLength; i++) {
        if (i != arrayLength - 1) {
            result.push(Math.abs(asciiArray[i] - asciiArray[i+1]));
        }
    }
    return result;
}

function funnyString(s) {
    const paramString = s.split('');
    const reverseString = s.split('').reverse();
    const paramToAscii = paramString.map((item) => item.charCodeAt());
    const reverseToAscii = reverseString.map((item) => item.charCodeAt());
    const cal = Math.abs(paramToAscii[0] - paramToAscii[1]);
    let answer = 'Funny';
    
    let paramResult = calAbs(paramToAscii, s.length);
    let reverseResult = calAbs(reverseToAscii, s.length);
    
    JSON.stringify(paramResult) === JSON.stringify(reverseResult) ? answer : answer = 'Not Funny';
    
    return answer;
}