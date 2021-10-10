function solution(n, f){         
    let answer, flag=0;
    let dy = Array.from(Array(11), () => Array(11).fill(0));
    let p = Array.from({length:n}, () => 0);
    let tmp = Array.from({length:n}, () => 0);
    let check = Array.from({length:n+1}, () => 0);

    function combi(n, r) {
        if (dy[n][r] > 0) return dy[n][r];
        if (n === r || r === 0) return 1;
        else return dy[n][r] = combi(n-1, r-1) + combi(n-1, r);
    }

    function DFS(v, s) {
        if (flag) return;
        if (v === n) {
            if (s === f) {
                answer = tmp.slice();
                flag = 1;
            }
        } else {
            for (let i = 1; i <= n; i++) {
               if (check[i] === 0) {
                check[i] = 1;
                tmp[v] = i;
                DFS(v+1, s+tmp[v]*p[v]);
                check[i] = 0;
               }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        p[i] = combi(n-1, i)
    }

    DFS(0, 0);
    return answer;
}

console.log(solution(4, 16));