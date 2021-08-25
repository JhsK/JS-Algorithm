function solution(n, arr) {
    let answer;
    let sumArr = [];

    function DFS(L, sum) {
        if (L === arr.length) {
            if (sum <= n) sumArr.push(sum);
        } else {
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }

    DFS(0, 0);
    answer = Math.max(...sumArr);

    return answer;
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));