let input = require('fs').readFileSync('/dev/stdin').toString();

let num = input[0].split(" ");

for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}