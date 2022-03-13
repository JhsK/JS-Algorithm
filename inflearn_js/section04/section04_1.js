function solution(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let tmp = 0;

  for (let x of arr) {
    tmp = x;
    while (tmp >= 10) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    sum += tmp;
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      x > answer ? (answer = x) : null;
    }
    sum = 0;
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;
//     for(let x of arr){
//         let sum=x.toString().split('').reduce((a, b)=>a+Number(b), 0);
//         if(sum>max){
//             max=sum;
//             answer=x;
//         }
//         else if(sum===max){
//             if(x>answer) answer=x;
//         }
//     }
//     return answer;
// }
