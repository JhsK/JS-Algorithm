function bfs(startX, startY, target, maps, dist) {
    const queue = [[startX, startY, 0]];
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = Array.from({ length: maps. length }, () => new Array(maps[0].length).fill(false));
    visited[startX][startY] = true;
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        if (maps[x][y] === target) {
            return dist;
        }
        for (let [dx, dy] of direction) {
            const newX = dx + x;
            const newY = dy + y;
            
            if (newX >= 0 && newX < maps.length && newY >= 0 && newY < maps[0].length && maps[newX][newY] !== 'X' && !visited[newX][newY]) {
                visited[newX][newY] = true;
                queue.push([newX, newY, dist + 1]);
            }
        }
    }
    
    return -1;
}

function solution(maps) {
    let startX, startY, leverX, leverY;
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 'S') {
                startX = i;
                startY = j;
            }
            
            if (maps[i][j] === 'L') {
                leverX = i;
                leverY = j;
            }
        }
    }
    
    const leverDist = bfs(startX, startY, 'L', maps, 0);
    const exitDist = bfs(leverX, leverY, 'E', maps, 0);
    
    if (leverDist === -1 || exitDist === -1) {
        return -1;
    }
    
    return exitDist + leverDist;
    
}