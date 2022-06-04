const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const dp = [...Array(11)];
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= 10; i++) {
      dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    //테스트 케이스 총 수 입력 변수에서 제거
    input.splice(0, 1);
    //입력에 맞는 방법의 수 메모에서 출력
    input.forEach((numString) => {
      console.log(dp[Number(numString)]);
    });
  });
