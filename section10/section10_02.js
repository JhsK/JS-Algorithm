function solution(n){  
    let answer=0;
    let tmp = Array.from({length: n+2}, () => 0);
    tmp[1] = 1;
    tmp[2] = 2;

    for (let i = 3; i <= n+1; n++) {
        tmp[i] = tmp[i-2] + tmp[i-1];
    }
    answer = tmp[n+1];
    return answer;
}

console.log(solution(7));