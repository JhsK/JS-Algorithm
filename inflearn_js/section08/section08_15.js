function solution(n, k, arr, m){         
    let answer=0;
    let tmp = Array.from({length: k}, () => 0);

    function DFS(v, s, sum) {
        if (v === k) {
            if (sum % m === 0) answer++;
        } else {
            for (let i = s; i < n; i++) {
                tmp[v] = arr[i];
                DFS(v+1, i+1, sum+arr[i]);
            }
        }
    }

    DFS(0, 0, 0);
    
    return answer;
}

let arr=[2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));