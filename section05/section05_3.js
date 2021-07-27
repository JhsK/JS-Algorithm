function solution(m, arr) {
  let answer = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === m) {
        answer++;
        break;
      }
      if (sum > m) break;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
