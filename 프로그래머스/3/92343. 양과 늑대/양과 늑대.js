function solution(info, edges) {
    let maxSheep = 0;
    const graph = Array.from({ length: info.length }, () => []);
    for (let [parent, child] of edges) {
        graph[parent].push(child);
    }
    
    function dfs(node, sheep, wolfves, nextNodes) {
        if (info[node] === 0) {
            sheep++;
        } else {
            wolfves++;
        }
        
        if (wolfves >= sheep) return;
        maxSheep = Math.max(maxSheep, sheep);
        
        const newNodes = [...nextNodes];
        const index = newNodes.indexOf(node);
        
        if (index !== -1) {
            newNodes.splice(index, 1);
        }
        
        newNodes.push(...graph[node]);
        newNodes.forEach((newNode) => {
          dfs(newNode, sheep, wolfves, newNodes);
        })
    }
    
    dfs(0, 0, 0, [0]);
    
    return maxSheep;
}