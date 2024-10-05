function solution(n, words) {
    let cnt = 1;
    let lastWord = words[0];
    const submitWords = [words[0]];
    let error = false;
    
    for (let i = 1; i < words.length; i++) {
        cnt++;
        if (submitWords.includes(words[i])) {
            error = true;
            break;
        }
        
        if (lastWord[lastWord.length-1] === words[i][0]) {
            lastWord = words[i];
            submitWords.push(words[i]);
        } else {
            error = true;
            break;
        }
    }
    
    if (error) {
     const personSeq = cnt % n === 0 ? n : cnt % n;
     const cntSeq = Math.ceil(cnt / n);
     return [personSeq, cntSeq];   
    } 
    
    return [0, 0];
}