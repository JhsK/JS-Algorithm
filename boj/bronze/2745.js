const readFileSyncPath = require("path")
  .basename(__filename)
  .replace(/js$/, "txt");
// const readFileSyncPath = '/dev/stdin';
let input = require("fs")
  .readFileSync(readFileSyncPath)
  .toString()
  .trim()
  .split(" ");
let N = input[0].split("");
N = N.reverse();

let B = input[1];
let result = 0;

for (let i = 0; i < N.length; i++) {
  result += B ** i * getNumber(N[i]);
}
console.log(result);

function getNumber(code) {
  if (isNaN(parseInt(code))) {
    return code.charCodeAt(0) - 55;
  } else {
    return parseInt(code);
  }
}
