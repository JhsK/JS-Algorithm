// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   for (let i = 0; i < input.length; i++) {
//     if (input[10 * i]) {
//       console.log(input.splice(10 * i, 10 * (1 + i)));
//     } else {
//       break;
//     }
//   }

//   process.exit();
// });

function test(input) {
  let tmp = [];
  for (let i = 0; i < input.length; i++) {
    if (input[10 * i]) {
      //   console.log(input.slice(10 * i, 10 * (1 + i)));
      tmp.push(input.slice(10 * i, 10 * (1 + i)));
    } else {
      break;
    }
  }

  return tmp;
}

console.log(test("OneTwoThreeFourFiveSixSevenEightNineTen"));
