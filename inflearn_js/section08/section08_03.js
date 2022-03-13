function solution(n){
    let answer="";
    
    function DFS(n) {
        if (n > 7) return;
        else {
            DFS(n*2);
            DFS(n*2+1);
            console.log(n);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));