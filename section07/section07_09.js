function solution(times){
    let answer = Number.MIN_SAFE_INTEGER;
    let tmp = [];
    let sum = 0;

    for (let x of times) {
        tmp.push([x[0], "s"]);
        tmp.push([x[1], "e"]);
    }

    tmp.sort((a, b) => {
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else {
            return a[0] - b[0];
        }
    })

    for (let x of tmp) {
        if (x[1] === 'e') sum--;
        else {
            sum++;
            answer = Math.max(answer, sum);
        }
    }

    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));