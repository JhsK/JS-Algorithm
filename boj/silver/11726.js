function solution(input) {
  let cnt = Number(input);
  const dp = Array.from({ length: cnt + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= cnt; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
  }
  console.log(dp[cnt]);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
