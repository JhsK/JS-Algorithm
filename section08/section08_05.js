function solution(arr){
    let answer = "NO";
    let sum = arr.reduce((a, b) => a + b);
    let flag = 0;

    function DFS(L, S) {
        if (flag) return;
        if (L === arr.length) {
            if (sum-S === sum) {
                flag = 1;
                answer = "YES";
            }
        } else {
            DFS(L+1, S+arr[L]);
            DFS(L+1, S);
        }
    }

    DFS(0, 0);
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));