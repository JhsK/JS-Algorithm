function dfs(hasValue, dungeons, visited, maxResult, count) {
    maxResult.result = Math.max(maxResult.result, count);
    for (let i = 0; i < dungeons.length; i++) {
        const [minValue, useValue] = dungeons[i];
        if (hasValue >= minValue && !visited[i]) {
            visited[i] = true;
            dfs(hasValue - useValue, dungeons, visited, maxResult, count + 1);
            visited[i] = false;
        }
    }
}

function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let maxResult = { result: 0 }
    
    dfs(k, dungeons, visited, maxResult, 0);
    
    return maxResult.result;
}