//한 개의 입력(띄어쓰기x)
function solution(input) {
  const dp = Array.from({ length: input + 1 }, () => BigInt(0));
  dp[1] = BigInt(1);
  dp[2] = BigInt(1);

  for (let i = 3; i <= input; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp[input].toString());
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
