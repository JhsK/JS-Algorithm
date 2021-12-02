let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let result = "";

for (let i = 1; i <= count; i++) {
  result += "*";
  console.log(result);
}
