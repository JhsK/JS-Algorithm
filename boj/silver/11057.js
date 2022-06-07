//한 개의 입력(띄어쓰기x)
function solution(input) {
  const dp = Array.from({ length: input + 1 }, () => new Array());

  for (let i = 0; i < 10; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i <= input; i++) {
    for (let j = 9; j >= 0; j--) {
      if (j === 9) {
        dp[i][j] = dp[i - 1][j] % 10007;
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j + 1]) % 10007;
      }
    }
  }
  console.log(dp[input][0]);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  // input = parseInt(line); // 입력 값이 정수라면 parseInt로 형변환
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
