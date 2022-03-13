function solution(arr) {
  let answer = [];
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] >= arr[j]) cnt++;
    }
    answer.push(arr.length - (cnt - 1));
    cnt = 0;
  }
  return answer;
}

let arr = [100, 100, 87, 100, 76];
console.log(solution(arr));

// let n=arr.length;
// let answer=Array.from({length:n}, ()=>1);
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++){
//             if(arr[j]>arr[i]) answer[i]++;
//         }
//     }
//     return answer;
