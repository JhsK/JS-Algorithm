let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]);
let result = "";

for (let i = 1; i <= count; i++) {
  result = "";
  for (let j = 1; j <= count - i; j++) {
    result += " ";
  }

  for (let z = 1; z <= i; z++) {
    result += "*";
  }
  console.log(result);
}

for (let i = count - 1; i > 0; i--) {
  result = "";
  for (let j = 1; j <= count - i; j++) {
    result += " ";
  }

  for (let z = 1; z <= i; z++) {
    result += "*";
  }
  console.log(result);
}
