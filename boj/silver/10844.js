//한 개의 입력(띄어쓰기x)
function solution(input) {
  const num = Number(input);
  const dp = [...Array(num + 1)].map((v) => []);
  let result = 0;
  dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

  for (let i = 3; i <= num; i++) {
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j + 1] % 1000000000;
      } else if (j >= 1 && j <= 8) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  console.log(dp[num]);
  result = dp[num].reduce((a, b) => a + b);
  console.log(result);
}

console.log(solution(5));
