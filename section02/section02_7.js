function solution(arr) {
  let answer = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (i === 0) {
  //         if (j === 0) {
  //           if (arr[i][j] > arr[i][j + 1] && arr[i][j] > arr[i + 1][j]) answer++;
  //         } else {
  //             if (arr[i][j])
  //         }
  //       }
  //     }
  //   }

  if (answer > undefined) answer = true;
  else answer = false;
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
