function solution(m, ps, pt){         
    let answer = Number.MIN_SAFE_INTEGER;

    function DFS(L, Sum, Score) {
        if (L === ps.length) {
            if (Sum <= m) answer = Math.max(answer, Score);
        } else {
            DFS(L+1, Sum+pt[L], Score+ps[L]);
            DFS(L+1, Sum, Score);
        }
    }

    DFS(0, 0, 0);
    return answer;
}

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]
console.log(solution(20, ps, pt));