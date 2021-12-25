const fs = require("fs");
const [...arr] = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1000 70 170`
)
  .trim()
  .split(" ");

let A = Number(arr[0]);
let B = Number(arr[1]);
let C = Number(arr[2]);

let N = A / (C - B);

let answer = Math.floor(N) + 1;

B >= C ? (answer = -1) : answer;

console.log(answer);
