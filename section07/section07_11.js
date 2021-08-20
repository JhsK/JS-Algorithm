function distribute(mid, songs) {
    let sum = 0;
    let cnt = 1;
    
    for (let x of songs) {
        if (sum + x > mid) {
            cnt++;
            sum = x;
        } else sum += x;
    }

    return cnt;
}

function solution(m, songs){
    let answer = Number.MAX_SAFE_INTEGER;
    let lt = Math.max(...songs);
    let rt = songs.reduce((a, b) => a + b);

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);
        const result = distribute(mid, songs);
        console.log(mid, result);

        if (result <= m) {
            answer = mid;
            rt = mid - 1;
        } else lt = mid + 1;
    }


    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));