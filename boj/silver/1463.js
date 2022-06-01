function solution(input) {
  const n = Number(input);
  const dp = Array.from({ length: n + 1 }, () => 0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  console.log(dp[n]);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
