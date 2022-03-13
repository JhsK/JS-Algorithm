function solution(meeting) {
    let answer = 0;
    let tmp = meeting.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    let endT = 0;

    for (let i = 0; i < tmp.length; i++) {
        if (endT <= tmp[i][0]) {
            endT = tmp[i][1];
            answer++;
        }
    }

    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));