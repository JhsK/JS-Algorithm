const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 1; i < input.length; i++) {
    const num = input[i];
    let result = 0;

    for (let x of num) {
      result += Number(x);
    }
    console.log(result);
  }

  process.exit();
});
