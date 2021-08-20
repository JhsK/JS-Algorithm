function destribute(mid, stable) {
    let cnt = 1;
    let tmp = 0;
    
    for (let x of stable) {
        if (cnt === 1 && tmp === 0) tmp = x;
        //console.log(mid, x, tmp, x - tmp);
        if (x - tmp >= mid) {
            cnt++;
            tmp = x;
        }
    }

    return cnt;
}

function solution(c, stable){
    let answer = 0;
    let lt = 1;
    let rt = Math.max(...stable);

    stable.sort((a, b) => a - b);
    
    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);
        const result = destribute(mid, stable);

        //console.log(mid, result);
        if (result >= c) {
            if (mid > answer) answer = mid;
            lt = mid + 1;
        } else rt = mid - 1;
    }    
    return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));