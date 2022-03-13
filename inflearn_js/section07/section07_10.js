function solution(target, arr){
    let answer = 0;
    let tmp = arr.sort((a, b) => a - b);
    let lt = 0;
    let rt = tmp.length - 1;

    while (lt <= rt) {
        let mid = parseInt(rt / 2);

        if (target === tmp[mid]) {
            answer = mid + 1;
            break;
        }
        else if (tmp[mid] > target) rt = mid - 1;
        else lt = mid + 1;
    }
    
    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));