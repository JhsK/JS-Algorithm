class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    push(value, priority) {
        this.queue.push({ value, priority });
        this.sort();
    }
    
    pop() {
        return this.queue.shift();
    }
    
    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkastra(N, K, graph) {
    const distance = Array(N+1).fill(Infinity);
    const pq = new PriorityQueue();
    distance[1] = 0;
    pq.push(1, 0);
    
    while (!pq.isEmpty()) {
        const { value: currentNode, priority: currentDistance } = pq.pop();
        if (currentDistance > graph[currentNode]) continue;
        
        for (let [node, time] of graph[currentNode]) {
            let totalDistance = currentDistance + time;
            if (distance[node] > totalDistance) {
                distance[node] = totalDistance;
                pq.push(node, totalDistance);
            }
        }
    }
    
    return distance.filter((value) => value <= K).length;
}

function solution(N, road, K) {
    const graph = Array.from({ length: N+1 }, () => []);
    road.forEach(([a, b, c]) => {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    });
    
    return dijkastra(N, K, graph);
}