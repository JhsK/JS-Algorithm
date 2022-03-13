function solution(m, coin){  
    let answer=0;
    let tmp = Array.from({length: m+1}, () => 1000);
    tmp[0] = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = coin[i]; j <= m; j++) {
            tmp[j] = Math.min(tmp[j-coin[i]] + 1, tmp[j]);
        }
    }
    answer = tmp[m];
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));