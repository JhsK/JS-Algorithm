function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  let py = 0;

  for (let px = 0; px < arr.length; px++) {
    sum += arr[px];
    if (px >= k - 1) {
      if (sum >= answer) answer = sum;
      sum -= arr[py++];
    }
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// Sliding Window
// function solution(k, arr){
//     let answer, sum=0;
//     for(let i=0; i<k; i++) sum+=arr[i];
//     answer=sum;
//     for(let i=k; i<arr.length; i++){
//         sum+=(arr[i]-arr[i-k]);
//         answer=Math.max(answer, sum);
//     }
//     return answer;
// }

// let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));
