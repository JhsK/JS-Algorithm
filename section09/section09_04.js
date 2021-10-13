function solution(){  
    let answer="";
    let queue = [];

    queue.push(1);

    while(queue.length) {
        let v = queue.shift();
        answer += v + " ";
        
        for (nv of [v*2, v*2+1]) {
            if (nv > 7) continue;
            queue.push(nv);
        }
    }
    
    return answer;
}

console.log(solution());