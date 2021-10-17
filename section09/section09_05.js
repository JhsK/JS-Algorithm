function solution(s, e){  
    let answer=0;
    let ch = Array.from({length: 10001}, () => 0);
    let dis = Array.from({length: 10001}, () => 0);
    let queue = [];
    queue.push(s);
    ch[s] = 1;
    dis[s] = 0;
    
    console.log('1', answer);

    while (queue.length) {
        let v = queue.shift();
        for (let nx of [v+1, v-1, v+5]) {
            if (nx === e) return dis[v] + 1;
            if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
                ch[nx] = 1;
                queue.push(nx);
                dis[nx] = dis[v] + 1;
            }
        }
    }
    console.log('2', answer);
    return answer;
}

console.log(solution(8, 3));