function solution(n, m){
    let answer=[];
    let tmp = Array.from({length: m}, () => 0);

    function DFS(L) {
        if (L === m) {
            console.log(tmp);
            answer.push(tmp);
        } else {
            for (let i = 1; i <= n; i++) {
                tmp[L] = i;
                DFS(L+1);
            }
        }
    }
    
    DFS(0);
    return answer;
}

console.log(solution(3, 2));