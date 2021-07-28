function solution(m, arr) {
  let answer = 0;
  let n = arr.length;
  let py = 0;
  let sum = 0;

  for (let px = 0; px < n; px++) {
    sum += arr[px];
    if (sum === 6) answer++;
    while (sum >= 6) {
      sum -= arr[py++];
      if (sum === 6) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
