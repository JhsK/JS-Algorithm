function dfs(computers, visited, node) {
    visited[node] = true;
    
    for (let idx = 0; idx < computers[node].length; idx++) {
        if (computers[node][idx] &&  !visited[idx]) {
            dfs(computers, visited, idx);
        }
    }
}

function solution(n, computers) {
    const visited = Array(n).fill(false);
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(computers, visited, i);
            result++;
        }
    }
    
    return result;
}