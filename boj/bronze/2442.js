// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let count = Number(input[0]);
// let length = 2 * count - 1;
// let result = '';

// for (let i = 0; i < count; i++) {
//     let centerIndex = Math.floor((legnth - (i + 1)) / 2) + 1;
//     for (let j = 0; j < length; j++) {
//        if (j === centerIndex) {
//            for (let z = 0; z < i + 1; z++) {
//                result += '*';
//            }
//            j += i;
//        } else {
//            result += ' ';
//        }
//     }
//     console.log(result);
//     result = '';
// }

function test(input) {
  let count = input;
  let length = 2 * count - 1;
  let result = "";

  for (let i = 0; i < count; i++) {
    let star = 2 * (i + 1) - 1;
    let centerIndex = Math.floor((length - star) / 2) + 1;
    for (let j = 0; j < length; j++) {
      if (j === centerIndex) {
        for (let z = 0; z < star; z++) {
          result += "*";
        }
        j += star - 1;
      } else {
        result += " ";
      }
    }
    console.log(result);
    result = "";
  }
}

console.log(test(5));
