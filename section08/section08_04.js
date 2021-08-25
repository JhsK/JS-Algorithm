function solution(n) {
    let answer = [];
    let checks = Array.from({length: n+1}, () => 0);

    function DFS(L) {
        if (L === n+1) {
            let tmp = "";
            for (let i = 1; i <= n; i++) {
                if (checks[i] === 1) tmp += (i +" ");
            }
            if (tmp.length > 0) answer.push(tmp);
        }
        else {
            checks[L] = 1;
            DFS(L+1);
            checks[L] = 0;
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));