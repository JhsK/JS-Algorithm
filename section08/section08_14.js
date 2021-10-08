function solution(n, m){         
    let answer=[];
    let tmp = Array.from({length:m}, () => 0);

    function DFS(v, s) {
        if (v === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = s; i <= n; i++) {
                tmp[v] = i;
                DFS(v+1, i+1);
            }
        }
    }

    DFS(0, 1);
    
    return answer;
}

console.log(solution(4, 2));