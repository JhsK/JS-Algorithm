function solution(d, budget) {
    let arr = d.sort((a, b) => a - b);
    let resultTry = 0;
    let result = 0;
    
    for (let x of arr) {
        if (result + x <= budget) {
            result += x;
            resultTry++;
        }
    }
    
    return resultTry;
}