function solution(arr){
    let answer=[];
    
    for (let i = 0; i < arr.length; i++) {
        if (answer.length > 0) {
            if (arr[i-1] > arr[i]) answer.push(i+1);
        } else {
            if (arr[i] > arr[i+1]) {
                answer.push(i+1);
                i++;
            }
        }
    }
    return answer;
}

let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));