function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        if (x === n-1 && y === m-1) return dist;
        
        const dx = [0, 1, 0, -1];
        const dy = [1, 0, -1, 0];
        
        for (let i = 0; i < dx.length; i++) {
            const newX = dx[i] + x;
            const newY = dy[i] + y;
            if (newX >= 0 && newX < n && newY >= 0 && newY < m && !visited[newX][newY] && maps[newX][newY]) {
                visited[newX][newY] = true;
                queue.push([newX, newY, dist+1]);
            }
        }
        
    }
    
    return -1;
}