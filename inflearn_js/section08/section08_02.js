function solution(n) {

    function DFS(n) {
        if (n === 0) return
        else {
            let tmp = parseInt(n / 2);
            DFS(tmp);
            console.log(n % 2);
        }
    }

    DFS(n);

}

console.log(solution(11));