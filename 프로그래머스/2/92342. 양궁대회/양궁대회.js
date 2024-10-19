function solution(n, info) {
    let result = [-1];
    let maxDiff = 0;
    const visited = new Array(11).fill(0);
    
    function dfs(idx, arrow, ryan, apeach, visited) {
        if (idx === -1) {
            let diff = ryan - apeach;
            if (diff > maxDiff) {
                visited[10] = arrow;
                maxDiff = diff;
                result = visited;
            }
            
            return;
        }
        
        if (arrow > info[idx]) {
            let tmp = [...visited];
            tmp[idx] = info[idx] + 1;
            dfs(idx - 1, arrow - info[idx] - 1, ryan + 10 - idx, apeach, tmp);
        }
        
        if (info[idx] > 0) dfs(idx - 1, arrow, ryan, apeach + 10 - idx, visited);
        else dfs(idx - 1, arrow, ryan, apeach, visited);
    }
    
    dfs(10, n, 0, 0, visited);
    return result;
}