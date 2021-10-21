function solution(arr){  
    let answer=0;
    let tmp = Array.from({length: 1001}, () => 0);
    tmp[0] = 1;
    
    for (let i = 1; i < arr.length; i++) {
        let max = 0;
        for (let j = i-1; j >= 0; j--) {
            if (arr[i] < arr[j] && tmp[j] > max) {
               max = tmp[j];
            }
        }
        tmp[i] = max+1;
        answer = Math.max(answer, tmp[i]);
    }
    return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));